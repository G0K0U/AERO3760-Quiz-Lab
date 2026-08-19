"use client";

import { useEffect, useMemo, useState } from "react";

type Mode = "practice" | "exam";
type Phase = "idle" | "running" | "result";
type Question = { id:number; tag:string; prompt:string; options:string[]; answer:number; why:string; trap?:string };
type Lesson = { no:number; phase:string; title:string; goal:string; plain:string[]; formulas?:{eq:string; note:string}[]; terms:[string,string][]; example:string; check:{q:string; a:string} };

const questions: Question[] = [
  { id:1, tag:"IMPULSE", prompt:"What is the core idealisation behind an impulsive burn?", options:["Velocity stays constant during the burn","Position stays nearly fixed and velocity jumps","Spacecraft mass is constant","Thrust is applied continuously over a whole orbit"], answer:1, why:"The impulsive model compresses a burn into an instant: r⁺ = r⁻ and v⁺ = v⁻ + Δv." },
  { id:2, tag:"ROCKET EQ.", prompt:"With all else equal, increasing Isp does what?", options:["Reduces the propellant needed for the same Δv","Increases the propellant needed for the same Δv","Guarantees higher thrust","Has no effect on mass ratio"], answer:0, why:"Δv = Isp g₀ ln(m₀/mf). Higher Isp lowers the required mass ratio.", trap:"High Isp does not mean high thrust; ion engines are high Isp, low thrust." },
  { id:3, tag:"ROCKET EQ.", prompt:"The rocket equation makes propellant cost grow with Δv in what way?", options:["Linearly","Exponentially","Quadratically","Independently of Δv"], answer:1, why:"m₀/mf = exp[Δv/(Isp g₀)], so every extra bit of Δv quickly becomes expensive." },
  { id:4, tag:"UNITS", prompt:"If g₀ = 9.807 m/s² is used, Δv must be entered in:", options:["km/s","m/s","km²/s²","Any unit works"], answer:1, why:"Units must be consistent; Isp·g₀ has units of m/s, so Δv must also be in m/s." },
  { id:5, tag:"HOHMANN", prompt:"For an outward Hohmann transfer from an inner circular orbit, the first burn is:", options:["Retrograde on the inner orbit","Prograde on the inner orbit","Radially outward","Prograde on the outer orbit"], answer:1, why:"A prograde burn on the inner orbit adds energy, turns the burn point into transfer-ellipse periapsis and raises apoapsis." },
  { id:6, tag:"HOHMANN", prompt:"At the outer radius, if the second Hohmann burn is skipped, the spacecraft will:", options:["Stay on the outer circular orbit","Stop at apogee","Return along the transfer ellipse","Escape immediately"], answer:2, why:"The second burn circularises. Without it the spacecraft still belongs to the transfer ellipse." },
  { id:7, tag:"TIME", prompt:"Hohmann transfer flight time equals:", options:["One period of the initial circular orbit","One period of the target circular orbit","One full period of the transfer ellipse","Half the period of the transfer ellipse"], answer:3, why:"The spacecraft flies from one apsis of the transfer ellipse to the other, i.e. half a period." },
  { id:8, tag:"OBERTH", prompt:"The same aligned prograde Δv adds the most orbital energy at:", options:["Apoapsis","Periapsis","It is the same everywhere","The point of lowest speed"], answer:1, why:"Δε = vΔv cosα + ½Δv². Periapsis has the largest v, so the energy gain is largest there." },
  { id:9, tag:"BI-ELLIPTIC", prompt:"For a target-to-initial circular orbit radius ratio of 5, the usual first choice is:", options:["Hohmann","Bi-elliptic via infinity","Plane change","Lambert chase"], answer:0, why:"Lecture rule of thumb: below a radius ratio of 11.94, Hohmann wins." },
  { id:10, tag:"APOGEE LADDER", prompt:"In the ideal impulsive model, splitting one periapsis apogee-raising burn into several burns:", options:["Always reduces total Δv","Always increases total Δv","Keeps the ideal total Δv the same but takes longer","Automatically becomes a bi-elliptic transfer"], answer:2, why:"Velocity increments at the same point telescope. Splitting mainly reduces the single-burn thrust requirement at the cost of time and operations." },
  { id:11, tag:"PHASING", prompt:"The target is ahead of you. To gradually catch up, enter a:", options:["Larger, longer-period phasing orbit","Smaller, shorter-period phasing orbit","Same orbit with no burn","Escape orbit"], answer:1, why:"First burn retrograde into a smaller orbit; smaller a → shorter T → you complete each lap sooner.", trap:"Slowing down at a point drops you into a lower orbit that completes a lap faster." },
  { id:12, tag:"PHASING", prompt:"Achieving the same phase change in fewer revolutions usually:", options:["Lowers the required Δv","Raises the required Δv","Leaves Δv unchanged","Requires no period change"], answer:1, why:"A faster phase change needs a larger period difference, which usually needs a larger burn." },
  { id:13, tag:"VECTOR Δv", prompt:"Why can off-apsis Δv not be computed as |v₂ − v₁|?", options:["μ changes","Mass changes","Velocity direction usually changes too","Semi-major axis is undefined"], answer:2, why:"Δv is the magnitude of the velocity-vector difference. Off-apsis the two flight-path angles usually differ." },
  { id:14, tag:"VECTOR Δv", prompt:"Two velocities both have magnitude 4 km/s and directions differing by 60°. The required Δv is:", options:["0","2 km/s","4 km/s","8 km/s"], answer:2, why:"Pure direction change: Δv = 2v sin(Δγ/2) = 8 sin30° = 4 km/s." },
  { id:15, tag:"VECTOR Δv", prompt:"A manoeuvre keeps speed unchanged but rotates the velocity direction. Which statement is correct?", options:["Δv = 0","No propellant is used","Kinetic energy is unchanged but Δv is non-zero","The orbit must be unchanged"], answer:2, why:"Same speed means same kinetic energy, but rotating the velocity vector still requires non-zero Δv." },
  { id:16, tag:"BURN ANGLE", prompt:"The safest way to compute a burn direction relative to the local horizontal is:", options:["acos(Δvr/Δv)","atan2(Δvr, Δv⊥)","Δvr + Δv⊥","vis-viva"], answer:1, why:"atan2 uses both the radial and transverse components and preserves the full quadrant." },
  { id:17, tag:"APSE ROTATION", prompt:"Between two coplanar orbits with different apse lines, one impulsive transfer must occur at:", options:["Any periapsis","Any apoapsis","An intersection of the two orbits","The equator"], answer:2, why:"An impulsive burn leaves position unchanged, so the burn point must lie on both old and new orbits." },
  { id:18, tag:"APSE ROTATION", prompt:"Adding outward radial velocity at the old periapsis usually:", options:["Keeps that point as the new periapsis","Rotates the new apse line","Changes nothing","Only changes mass"], answer:1, why:"With outward radial velocity the point is no longer an apsis, so the eccentricity vector and apse line rotate." },
  { id:19, tag:"APSE ROTATION", prompt:"A pure transverse burn at periapsis (Δvr = 0) usually:", options:["Does not rotate the apse line","Rotates the apse line by 90°","Only changes the orbit plane","Does not change energy"], answer:0, why:"After the burn the point still has zero radial velocity, so it remains on the new apse line; energy and shape change." },
  { id:20, tag:"LAMBERT", prompt:"The core known quantities of a Lambert problem are:", options:["Two positions and the flight time","Isp and propellant mass","Only the initial velocity","J₂ and inclination"], answer:0, why:"Given rA, the target's future position rB and Δt, plus a direction and revolution count, the transfer orbit is found by a solver." },
];

const lessons: Lesson[] = [
  { no:0, phase:"FOUNDATION", title:"Learn to read the formulas first", goal:"Tell scalars from vectors, and understand magnitude, direction and units.", plain:["Plain letters r and v are numbers with size only; bold 𝐫 and 𝐯 carry both size and direction.","The length of a vector is written ‖𝐫‖. The length of position vector 𝐫 is the orbital radius r; the length of velocity vector 𝐯 is the speed v.","A dot above a letter means time derivative: 𝐫̇ = 𝐯; two dots mean acceleration: 𝐫̈."], formulas:[{eq:"r = ‖𝐫‖ = √(x²+y²+z²)",note:"Turns the 3D position vector into a distance; x, y, z are its rectangular components."},{eq:"v = ‖𝐯‖",note:"Vector 𝐯 has size and direction; scalar v has size only."},{eq:"r = Rₑ + altitude",note:"Around Earth, radius is measured from the centre of the planet."}], terms:[["𝐫","Position vector: from the central body to the spacecraft"],["r","Magnitude of 𝐫, i.e. the orbital radius"],["𝐯","Velocity vector: how fast + which way"],["v","Magnitude of 𝐯, i.e. the speed"],["x, y, z","Components of the position vector"]], example:"A 400 km LEO is not r = 400 km; it is r ≈ 6378 + 400 = 6778 km.", check:{q:"Two velocities have the same speed but different directions. Are the velocity vectors equal?",a:"No. Vectors must match in both magnitude and direction."} },
  { no:1, phase:"FOUNDATION", title:"An orbit is continuous free fall", goal:"See why a spacecraft neither falls straight down nor flies away in a straight line.", plain:["Earth's gravity always pulls the spacecraft toward the centre; meanwhile the spacecraft has a large sideways velocity.","It keeps falling toward Earth, but Earth's surface keeps curving away underneath it, so it stays in orbit.","The two-body model keeps only the gravity between the central body and the spacecraft; drag, third bodies and oblateness are ignored."], formulas:[{eq:"r̈ = −(μ/r³) r",note:"Acceleration is opposite to r, so it always points toward the centre."},{eq:"v_c = √(μ/r)",note:"The ideal circular-orbit speed at radius r."}], terms:[["μ","Standard gravitational parameter; Earth ≈ 398600 km³/s²"],["r̈","Second time derivative of position, i.e. acceleration"],["Rₑ","Earth radius, ≈ 6378 km in this course"],["v_c","Circular-orbit speed"]], example:"A larger circular orbit has a smaller v_c. High orbit satellites move slower than low orbit satellites.", check:{q:"Are astronauts in orbit weightless because there is no gravity?",a:"No. Gravity is still strong; the spacecraft and astronaut are free falling together, which feels like weightlessness."} },
  { no:2, phase:"FOUNDATION", title:"Ellipses and the orbit equation", goal:"Read apses from a given orbit, and know how θ marks a position along it.", plain:["The central body sits at one focus of the ellipse, not the centre. Periapsis is the smallest radius rₚ; apoapsis is the largest radius rₐ.","Semi-major axis a sets the overall size; eccentricity e sets how squashed the orbit is. A circle has e = 0.","True anomaly θ is measured from periapsis along the motion: periapsis θ = 0, apoapsis θ = π. The orbit equation converts angular position θ into radius r.","The specific angular momentum vector 𝐡 = 𝐫 × 𝐯 is perpendicular to the orbit plane and stays constant in the two-body model."], formulas:[{eq:"a = (rₚ+rₐ)/2",note:"Average of the two apsidal radii."},{eq:"e = (rₐ−rₚ)/(rₐ+rₚ)",note:"0 for a circle; between 0 and 1 for an ellipse."},{eq:"rₚ=a(1−e),  rₐ=a(1+e)",note:"Recover both apses from a and e."},{eq:"𝐡 = 𝐫 × 𝐯;  h = ‖𝐡‖",note:"Cross product gives the specific angular momentum vector; h has units km²/s."},{eq:"p = h²/μ = a(1−e²)",note:"p is the semi-latus rectum, linking angular momentum and ellipse geometry."},{eq:"r(θ) = p/(1+e cosθ)",note:"Orbit equation: given θ, how far the spacecraft is from the centre."}], terms:[["a","Semi-major axis: orbit size"],["e","Eccentricity: orbit shape"],["rₚ / rₐ","Periapsis / apoapsis radius"],["𝐡 / h","Specific angular momentum vector / its magnitude"],["p","Semi-latus rectum"],["θ","True anomaly: angle from periapsis"]], example:"For an Earth orbit of 400 × 1000 km altitude, first convert to rₚ = 6778 km and rₐ = 7378 km, then a = 7078 km and e ≈ 0.042. For the radius at any θ, use the orbit equation.", check:{q:"What position does θ = π correspond to on an elliptical orbit?",a:"Apoapsis. θ is measured from periapsis, so π rad is 180° around."} },
  { no:3, phase:"FOUNDATION", title:"Energy, speed and the orbital clock", goal:"Understand why a spacecraft speeds up and slows down, and how to predict when it arrives somewhere.", plain:["Orbital energy is kinetic plus gravitational potential energy; in ideal two-body motion the total is conserved. An ellipse is fastest at periapsis and slowest at apoapsis.","Vis-viva gives speed only, not direction. Orbital period T depends only on a and μ.","On an ellipse, true anomaly θ does not increase uniformly. For timing we use the mean anomaly M, which does increase uniformly, then solve Kepler's equation for the eccentric anomaly E.","Only for a circular orbit (e = 0) can you simply write θ = nt."], formulas:[{eq:"ε = v²/2 − μ/r = −μ/(2a)",note:"Specific orbital energy depends only on a."},{eq:"v² = μ(2/r − 1/a)",note:"Vis-viva: speed from current radius r and orbit semi-major axis a."},{eq:"T = 2π√(a³/μ)",note:"Kepler's third law: bigger orbit, longer period."},{eq:"n = √(μ/a³) = 2π/T",note:"Mean motion: average radians swept per second."},{eq:"M = n(t−τ)",note:"Mean anomaly M grows uniformly with time; τ is the last periapsis passage."},{eq:"M = E − e sinE",note:"Kepler's equation; usually solve numerically for E, then convert to true position θ."}], terms:[["ε","Specific orbital energy, km²/s²"],["T","Time for one full orbit"],["n","Mean motion, rad/s"],["M","Mean anomaly: the uniformly-running clock angle"],["E","Eccentric anomaly: helper angle for ellipse timing"],["τ","Time of last periapsis passage"],["t","Current time"]], example:"On a fixed ellipse a is constant. Near periapsis r is small, so 2/r is large and vis-viva gives a larger v; because the speed changes, θ cannot be used as a uniform clock.", check:{q:"After one quarter of the orbital period, is θ exactly 90°?",a:"Not necessarily. Only M increases uniformly; θ does not. Only a circular orbit lets you convert time to θ by simple proportion."} },
  { no:4, phase:"MANOEUVRES", title:"How a burn changes the orbit", goal:"Build the core picture: change velocity at one point and you swap to another orbit.", plain:["An impulsive burn assumes the burn is so short that position has no time to change but velocity jumps instantly.","Prograde accelerates along the current velocity and usually raises energy; retrograde brakes and usually lowers energy.","A radial burn pushes toward or away from the centre, changes the velocity direction strongly, and often rotates the apse line."], formulas:[{eq:"r⁺ = r⁻",note:"Same position before and after the burn; superscripts −/+ mean before/after."},{eq:"v⁺ = v⁻ + Δv",note:"New velocity vector = old velocity vector + burn velocity-change vector."},{eq:"Δε = v Δv cosα + ½Δv²",note:"α is the angle between v and Δv; aligned burns at high speed change energy most effectively."}], terms:[["Δv","Velocity-vector change, the currency of manoeuvre cost"],["α","Angle between original velocity v and burn vector Δv"],["prograde","Along the current velocity direction"],["retrograde","Opposite to the current velocity direction"],["radial","Along the local vertical direction"]], example:"Make a prograde burn from a circular orbit: the position is the same but the speed is now too high for a circular orbit, so that point becomes the periapsis of a new ellipse.", check:{q:"Does an impulsive burn instantly move the spacecraft to a different position r?",a:"No. In the model, position is continuous and only velocity jumps."} },
  { no:5, phase:"MANOEUVRES", title:"Rocket equation: what Δv costs in fuel", goal:"Convert the Δv computed from orbital mechanics into a mass penalty.", plain:["Orbital mechanics first tells you the required Δv; the rocket equation then tells you how much propellant that costs.","The mass penalty is exponential, so a little extra Δv can require a lot more fuel.","Isp measures propellant efficiency. Its unit is seconds, but it is not the burn duration; high Isp also does not mean high thrust."], formulas:[{eq:"vₑ = Isp g₀",note:"Effective exhaust velocity = specific impulse × standard gravity."},{eq:"Δv = vₑ ln(m₀/mf) = Isp g₀ ln(m₀/mf)",note:"Ideal rocket equation; ln is the natural logarithm."},{eq:"m₀/mf = exp[Δv/(Isp g₀)]",note:"Shows directly that mass ratio grows exponentially with Δv."},{eq:"m_prop = m₀ − mf",note:"Propellant mass = total mass before burn − total mass after burn."}], terms:[["Isp","Specific impulse, seconds; not burn duration"],["vₑ","Effective exhaust velocity, m/s"],["g₀","Standard gravity 9.807 m/s²"],["m₀","Total mass before the burn"],["mf","Mass after the burn"],["m_prop","Propellant consumed by the burn"],["ln / exp","Natural logarithm and exponential, inverse operations"]], example:"With Isp = 300 s and Δv = 1000 m/s, mf/m₀ ≈ e⁻⁰·³⁴ ≈ 0.712; ideally about 28.8% of the initial mass is consumed.", check:{q:"Does Isp = 300 s mean the engine can only burn for 300 seconds?",a:"No. Isp is an efficiency indicator; the 'seconds' come from its definition, not from burn duration."} },
  { no:6, phase:"MANOEUVRES", title:"Hohmann: the two most important burns", goal:"Fully understand the standard transfer between two circular orbits.", plain:["Hohmann optimality has strict assumptions: two concentric, coplanar circular orbits, two tangential impulsive burns, and a transfer ellipse tangent to both circles.","Outward transfer is prograde + prograde; inward transfer is retrograde + retrograde. The second burn circularises and cannot be skipped.","In the ideal two-body model the same path costs the same total Δv in either direction; 'returning is cheaper because of gravity help' is a trap."], formulas:[{eq:"a_t = (r₁+r₂)/2",note:"Semi-major axis of the transfer ellipse."},{eq:"Δv₁ = v_t(r₁) − v_c(r₁)",note:"First burn for outward transfer: difference of two speeds at the same position."},{eq:"Δv₂ = v_c(r₂) − v_t(r₂)",note:"Second burn circularises at the target radius."},{eq:"Δv_H = |Δv₁| + |Δv₂|",note:"Total cost is the sum of burn magnitudes; signs must not cancel."},{eq:"t_H = π√(a_t³/μ)",note:"Only half of the transfer ellipse is flown."}], terms:[["r₁","Initial circular-orbit radius"],["r₂","Target circular-orbit radius"],["a_t","Transfer-ellipse semi-major axis"],["v_c","Circular speed at that radius"],["v_t","Transfer-ellipse speed at that radius"],["Δv_H","Total Hohmann cost"],["t_H","Hohmann flight time"]], example:"Standard solution order: find a_t → find both circular speeds → use vis-viva for both ends of the transfer ellipse → subtract speeds at each shared point. For inward transfer, reverse the process and burn directions.", check:{q:"What are the two burn directions for an inward Hohmann transfer?",a:"Both retrograde: the first lowers periapsis, the second brakes at the inner radius to circularise."} },
  { no:7, phase:"MANOEUVRES", title:"Bi-elliptic and apogee ladder", goal:"Know why these two 'multi-burn' ideas are not the same thing.", plain:["Bi-elliptic has three burns and deliberately pushes the intermediate apoapsis far away; the cheap change at that low-speed point can save Δv, but usually costs a very long transfer time.","Remember the full thresholds: below r₂/r₁ = 11.94 Hohmann always wins; between 11.94 and 15.58 it depends on the intermediate radius r_b; above 15.58 a large enough r_b can make bi-elliptic cheaper.","Apogee ladder splits burns at the same periapsis over several orbits; in the ideal model the total Δv is not automatically reduced by splitting."], terms:[["r₂/r₁","Target-to-initial circular radius ratio"],["r_b","Intermediate very-high apoapsis of a bi-elliptic transfer"],["telescoping","Velocity increments at the same point cancel each other out"],["coast time","Time spent coasting without thrusting"],["trade-off","Balancing fuel, time, engine capability and risk"]], example:"A small thruster that cannot do one large burn can use an apogee ladder; it mainly solves single-burn thrust capability, not magic Δv savings.", check:{q:"For r₂/r₁ = 13, can you decide from the radius ratio alone that Hohmann is optimal?",a:"No. 13 lies in the 11.94–15.58 middle zone; the answer also depends on the bi-elliptic r_b."} },
  { no:8, phase:"MANOEUVRES", title:"Phasing: slowing down catches up", goal:"Master the most counter-intuitive, most-quizzed period logic.", plain:["Phasing is for the case where the orbit is correct but the timing is wrong. Predict when the target returns to the common burn point, then temporarily change the chaser's period so phase accumulates lap by lap.","Target ahead: at the common burn point make a retrograde burn. Speed drops instantly into a smaller orbit; smaller a means a shorter period, so the chaser completes each lap sooner and gradually catches up.","Once the phase change is complete, a second burn returns to the original orbit and matches velocity."], formulas:[{eq:"T = 2π√(a³/μ)",note:"All phasing reasoning comes from the monotone relation between a and T."},{eq:"a_phase = [μ(T_phase/2π)²]^(1/3)",note:"Recover the temporary orbit size from the desired phasing period."}], terms:[["phase","Relative angular position on the same orbit"],["chaser","The actively manoeuvring spacecraft"],["target","The spacecraft being chased"],["T_phase","Period of the temporary phasing orbit"],["a_phase","Semi-major axis of the temporary phasing orbit"]], example:"'Brake and you instantly become faster' is wrong. The correct chain is: instant speed drop at the burn point → smaller a → shorter period → return to the meeting point sooner.", check:{q:"To complete the same phase change in fewer laps, does the required Δv usually grow or shrink?",a:"It grows. Less time requires a bigger period difference, so a stronger manoeuvre."} },
  { no:9, phase:"LECTURE 3", title:"Off-apsis: Δv must be a vector", goal:"Separate 'change in speed' from 'change in velocity vector'.", plain:["At an apsis the velocity is along the local horizontal; in a Hohmann transfer the two velocities are parallel, so speeds can be subtracted directly.","Away from an apsis the two flight-path angles usually differ, so the burn changes both speed and direction.","To find the flight direction at any point, get γ from v_r and v⊥ first; do not treat true anomaly θ directly as the velocity direction.","Even if the burn leaves speed unchanged, changing direction still requires non-zero Δv. The two non-Hohmann formulas below are just the generalisation of Hohmann; exams rarely require hand calculation."], formulas:[{eq:"v_r = (μ/h) e sinθ",note:"Radial speed component: positive when moving away, negative when approaching."},{eq:"v⊥ = (μ/h)(1+e cosθ) = h/r",note:"Transverse speed component; combined with v_r it gives total speed and flight-path angle."},{eq:"γ = atan2(v_r, v⊥)",note:"Flight-path angle: velocity direction relative to the local horizontal."},{eq:"Δv = ‖v₂−v₁‖",note:"Definition: magnitude of the velocity-vector difference."},{eq:"Δv = √(v₁²+v₂²−2v₁v₂cosΔγ)",note:"Law of cosines for the two velocity vectors."},{eq:"v₁=v₂=v ⇒ Δv=2v sin(|Δγ|/2)",note:"Pure direction change."},{eq:"e = (r_B−r_A)/(r_A cosθ_A − r_B cosθ_B)",note:"Eccentricity of the general transfer orbit; A and B are the two connection points."},{eq:"h = √[ μ r_A r_B (cosθ_A−cosθ_B)/(r_A cosθ_A−r_B cosθ_B) ]",note:"Corresponding transfer angular momentum; Hohmann is the special case θ_A=0, θ_B=π."}], terms:[["γ","Flight-path angle, relative to the local horizontal"],["Δγ","Difference between the two velocity directions"],["vᵣ","Radial velocity component"],["v⊥","Transverse velocity component"],["r_A, θ_A","Radius and true anomaly of the old-orbit connection point"],["r_B, θ_B","Radius and true anomaly of the target-orbit connection point"]], example:"Two velocities of 4 km/s with directions differing by 60° require Δv = 2×4×sin30° = 4 km/s, not zero.", check:{q:"When can Δv be simplified to |v₂−v₁|?",a:"Only when the two velocity vectors are parallel, as in the tangential connection points of an ideal Hohmann transfer."} },
  { no:10, phase:"LECTURE 3", title:"Apse rotation and Lambert chase", goal:"Meet two general manoeuvres; do not try to memorise the heavy solvers.", plain:["Two orbits with different apse lines can only be switched with one impulsive burn at an intersection, because the burn does not move the spacecraft.","Adding a radial component at the old periapsis makes that point no longer an apsis, so the eccentricity vector and the apse line rotate.","Given two positions and a fixed flight time, finding the transfer orbit is a Lambert problem. The shorter the forced flight time, the more expensive the intercept usually is."], formulas:[{eq:"η = θ₁ − θ₂",note:"Difference of true anomalies at the same intersection relative to the two apse lines."},{eq:"Lambert inputs: r_A, r_B, Δt",note:"Also choose the flight direction and revolution count."}], terms:[["apse line","Line joining periapsis and apoapsis"],["η","Apse-line rotation angle"],["Lambert problem","Two positions + flight time determine a transfer"],["rendezvous","Not just the same position, the velocity must match too"]], example:"Patient phasing may cost tens to hundreds of m/s; the lecture's one-hour forced chase needs about 9.43 km/s.", check:{q:"Why can an apse-line transfer not burn at a point where the two orbits do not intersect?",a:"An impulsive burn cannot teleport the spacecraft; the burn point must belong to both the old and the new orbit."} },
];

const glossary:[string,string,string][] = [
  ["r / r","Position vector / orbital radius","km"],["v / v","Velocity vector / speed","km/s"],["μ","Standard gravitational parameter","km³/s²"],["a","Semi-major axis: size, energy, period","km"],["e","Eccentricity: orbit shape","dimensionless"],["rₚ / rₐ","Periapsis / apoapsis radius","km"],["ε","Specific orbital energy","km²/s²"],["T","Orbital period","s"],["Δv","Magnitude of velocity-vector change","km/s or m/s"],["Isp","Specific impulse","s"],["m₀ / mf","Mass before / after burn","kg"],["γ","Flight-path angle","rad or °"],["θ","True anomaly","rad or °"],["η","Apse-line rotation","rad or °"],["g₀","Standard gravity","9.807 m/s²"]
];

const memoryCards = [
  { no:"01", title:"Impulsive burn", cue:"Position frozen, velocity jumps", body:"r⁺ = r⁻; v⁺ = v⁻ + Δv. Whether the model applies depends on burn time / arc swept compared with the full orbit, not on a fixed threshold.", key:"Question says short burn / instantaneous → think impulsive." },
  { no:"02", title:"Rocket equation", cue:"Δv cost is exponential", body:"Δv = Isp g₀ ln(m₀/mf). High Isp saves propellant but does not guarantee high thrust. If g₀ is in m/s², Δv must be in m/s.", key:"Question mentions mass, propellant or Isp → rocket equation only." },
  { no:"03", title:"Hohmann", cue:"Two circles, coplanar, two tangential burns", body:"Outward: prograde on the inner circle, then prograde at the outer radius to circularise. Without the second burn the spacecraft returns along the transfer ellipse. Flight time is half the transfer-ellipse period.", key:"Question has two circular coplanar orbits → Hohmann benchmark." },
  { no:"04", title:"Bi-elliptic", cue:"Three burns, time traded for Δv", body:"Push apoapsis very high, make the cheap change at the low-speed point, then return to the target circle. Below 11.94 choose Hohmann; above 15.58 seriously consider bi-elliptic.", key:"Usually saves little and flies very long." },
  { no:"05", title:"Apogee ladder", cue:"Splitting burns at the same point does not save Δv", body:"All burns at the same periapsis telescope in the ideal model. The benefit is lower single-burn thrust; the cost is more coast time and more operations.", key:"Do not confuse it with bi-elliptic, whose burns occur at different positions." },
  { no:"06", title:"Phasing", cue:"Change the period, not the chase", body:"Target ahead: retrograde → smaller orbit → shorter period → catch up lap by lap. Waiting for a target behind is the opposite. Faster phasing usually costs more Δv.", key:"Question says wrong place on the right orbit → phasing." },
  { no:"07", title:"Vector Δv", cue:"Change of magnitude ≠ magnitude of change", body:"Off-apsis, Δv = ‖v₂ − v₁‖ and the flight-path angle matters. Even when v₁ = v₂, rotating the direction still costs Δv.", key:"Question says off-apse / direction change → law of cosines." },
  { no:"08", title:"Apse & chase", cue:"Intersections only; hurrying is expensive", body:"A direct apse-rotation burn must happen at an orbit intersection. Two positions + a flight time is a Lambert problem; a short forced intercept is usually far costlier than patient phasing.", key:"Two positions + time → Lambert." },
];

const formulas = [
  { name:"Rocket equation", eq:"Δv = Isp g₀ ln(m₀/mf)", use:"Propellant mass / mass ratio", vars:"Isp [s] · g₀ = exhaust velocity" },
  { name:"Vis-viva", eq:"v² = μ(2/r − 1/a)", use:"Compare speeds of different orbits at the same position", vars:"r = current radius; a = whole-orbit semi-major axis" },
  { name:"Orbital period", eq:"T = 2π √(a³/μ)", use:"Hohmann time / phasing period", vars:"Small a → short T; large a → long T" },
  { name:"Vector burn", eq:"Δv = √(v₁²+v₂²−2v₁v₂ cosΔγ)", use:"Off-apsis velocity-vector difference", vars:"Δγ = γ₂ − γ₁" },
  { name:"Pure rotation", eq:"Δv = 2v sin(|Δγ|/2)", use:"Speed unchanged, direction changed", vars:"Plane change has the same structure" },
  { name:"Energy change", eq:"Δε = vΔv cosα + ½Δv²", use:"Oberth effect / burn alignment", vars:"α = angle between original velocity and burn" },
  { name:"Radial / transverse", eq:"v_r = (μ/h) e sinθ；v⊥ = (μ/h)(1+e cosθ) = h/r", use:"Turn θ into velocity direction: γ = atan2(v_r, v⊥)", vars:"At periapsis θ=0, v_r=0" },
  { name:"Non-Hohmann bridge", eq:"e = (r_B−r_A)/(r_A cosθ_A − r_B cosθ_B)", use:"Shape of a general transfer orbit (recognise only)", vars:"Hohmann: θ_A=0, θ_B=π" },
];

function formatTime(seconds:number) { const m=Math.floor(seconds/60); const s=seconds%60; return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`; }

export default function QuizLab() {
  const [phase,setPhase]=useState<Phase>("idle");
  const [mode,setMode]=useState<Mode>("practice");
  const [pool,setPool]=useState<Question[]>(questions);
  const [current,setCurrent]=useState(0);
  const [answers,setAnswers]=useState<(number|null)[]>(Array(questions.length).fill(null));
  const [seconds,setSeconds]=useState(1800);
  const [best,setBest]=useState(0);
  const [completedLessons,setCompletedLessons]=useState<number[]>([]);

  useEffect(()=>{
    const stored=window.localStorage.getItem("aero3760-en-best");
    if(stored) setBest(Number(stored));
    const lessonProgress=window.localStorage.getItem("aero3760-en-lessons");
    if(lessonProgress){
      try { setCompletedLessons(JSON.parse(lessonProgress)); } catch { setCompletedLessons([]); }
    }
  },[]);
  useEffect(()=>{
    if(phase!=="running" || mode!=="exam") return;
    const timer=window.setInterval(()=>setSeconds(value=>value<=1?0:value-1),1000);
    return ()=>window.clearInterval(timer);
  },[phase,mode]);
  useEffect(()=>{ if(phase==="running" && mode==="exam" && seconds===0) setPhase("result"); },[seconds,phase,mode]);

  const score=useMemo(()=>pool.reduce((sum,q,index)=>sum+(answers[index]===q.answer?1:0),0),[pool,answers]);
  const answered=answers.filter(value=>value!==null).length;
  const wrong=pool.filter((q,index)=>answers[index]!==q.answer);
  const selected=answers[current];
  const active=pool[current];

  useEffect(()=>{
    if(phase==="result" && pool.length===questions.length && score>best){ setBest(score); window.localStorage.setItem("aero3760-en-best",String(score)); }
  },[phase,pool.length,score,best]);

  function start(nextMode:Mode,nextPool:Question[]=questions){ setMode(nextMode); setPool(nextPool); setAnswers(Array(nextPool.length).fill(null)); setCurrent(0); setSeconds(1800); setPhase("running"); requestAnimationFrame(()=>document.querySelector("#quiz")?.scrollIntoView({behavior:"smooth"})); }
  function choose(index:number){ if(phase!=="running") return; setAnswers(old=>old.map((value,i)=>i===current?index:value)); }
  function next(){ if(current===pool.length-1) setPhase("result"); else setCurrent(value=>value+1); }
  function reset(){ setPhase("idle"); setPool(questions); setCurrent(0); setAnswers(Array(questions.length).fill(null)); setSeconds(1800); }
  function toggleLesson(no:number){
    setCompletedLessons(old=>{
      const next=old.includes(no)?old.filter(item=>item!==no):[...old,no].sort((a,b)=>a-b);
      window.localStorage.setItem("aero3760-en-lessons",JSON.stringify(next));
      return next;
    });
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top">AERO3760 <span>/ QUIZ LAB</span></a>
        <nav aria-label="Page navigation"><a href="#learn">Course</a><a href="#glossary">Glossary</a><a href="#memory">Memory</a><a href="#quiz">Quiz</a><a href="/">中文</a></nav>
        <div className="exam-chip">20 AUG · 09:15</div>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> ZERO-BASE LEARNING PATH · LECTURES 1–3</div>
        <h1>Learn from zero,<br/><em>then face 20 questions.</em></h1>
        <p className="hero-copy">No Space 1 background assumed. Start with what position, velocity and an orbit actually are, build intuition layer by layer, and only then enter the multiple-choice simulation.</p>
        <div className="hero-actions"><a className="primary" href="#start-here">Start at Lesson 0 <span>↓</span></a><a className="secondary" href="#quiz">Skip to quiz</a></div>
        <div className="hero-stats"><div><b>90</b><span>sec / question</span></div><div><b>50%</b><span>support line</span></div><div><b>{best}/20</b><span>local best</span></div></div>
        <div className="orbit-mark" aria-hidden="true"><i/><b/></div>
      </section>

      <section className="scope-strip"><strong>Priority for this quiz:</strong><span>L1 · Rocket + Hohmann</span><span>L2 · Bi-elliptic + Phasing</span><span>L3 · Vector Δv + Apse + Chase</span><small>L4 Plane change not yet a priority</small></section>

      <section className="start-here-preview section" id="start-here">
        <div className="section-heading"><p>LESSON 00 / START HERE</p><h2>Orbit problems begin with just two quantities</h2><span>Do not memorise formulas yet. Think of the spacecraft state as “position + motion arrow” on a map.</span></div>
        <div className="first-lesson-grid">
          <div className="state-visual" aria-label="Position and velocity vectors"><i/><b>Earth</b><span className="r-arrow">r · where</span><span className="v-arrow">v · which way, how fast</span></div>
          <div className="first-lesson-copy"><p><strong>r</strong> is the position vector from Earth's centre to the spacecraft; its length <strong>|r|</strong> is the orbital radius.</p><p><strong>v</strong> is the velocity vector; it carries both “how fast” and “which direction”.</p><div className="beginner-check"><small>One-minute check</small><b>Can a 400 km altitude be used directly as r?</b><span>No. Around Earth, r = Rₑ + 400 km.</span></div></div>
        </div>
      </section>

      <section className="course section" id="learn">
        <div className="section-heading course-heading"><p>BEGINNER COURSE / 11 LESSONS</p><h2>Learn in order — no orbital mechanics background needed</h2><span>Each lesson takes about 8–12 minutes. Read the plain explanation first, then the formulas. Tick each lesson when done; progress is saved on this device.</span></div>
        <div className="learning-progress" aria-label={`${completedLessons.length} of ${lessons.length} lessons completed`}>
          <div><strong>{completedLessons.length} / {lessons.length}</strong><span>course complete</span></div>
          <div className="learning-progress-track"><i style={{width:`${(completedLessons.length/lessons.length)*100}%`}} /></div>
          <b>{Math.round(completedLessons.length/lessons.length*100)}%</b>
        </div>
        <div className="roadmap" aria-label="Learning path">
          <article><span>STAGE 1 · 00–03</span><b>Understand orbits</b><p>Formula language → free fall → ellipse → energy &amp; period</p></article>
          <article><span>STAGE 2 · 04–08</span><b>Understand manoeuvres</b><p>Burns → fuel → Hohmann → alternatives → phasing</p></article>
          <article><span>STAGE 3 · 09–10</span><b>Handle directions</b><p>Vector Δv → apse rotation → Lambert chase</p></article>
        </div>
        <div className="lesson-stack">
          {lessons.map(lesson=>{
            const complete=completedLessons.includes(lesson.no);
            return <details className={`lesson-module ${complete?"complete":""}`} key={lesson.no}>
              <summary>
                <span className="lesson-number">{String(lesson.no).padStart(2,"0")}</span>
                <div><small>{lesson.phase}</small><h3>{lesson.title}</h3><p>{lesson.goal}</p></div>
                <b className="lesson-status">{complete?"✓ Done":"Expand ＋"}</b>
              </summary>
              <div className="lesson-content">
                <div className="plain-language"><span>Plain language first</span>{lesson.plain.map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div>
                {lesson.formulas&&<div className="lesson-formulas"><span>Key formulas</span>{lesson.formulas.map(item=><article key={item.eq}><code>{item.eq}</code><p>{item.note}</p></article>)}</div>}
                <div className="lesson-terms"><span>Variables &amp; keywords</span><div>{lesson.terms.map(([term,meaning],index)=><article key={`${term}-${index}`}><code>{term}</code><p>{meaning}</p></article>)}</div></div>
                <div className="worked-example"><span>Example</span><p>{lesson.example}</p></div>
                <details className="checkpoint"><summary>Answer first: {lesson.check.q}</summary><p>{lesson.check.a}</p></details>
                <button className={`lesson-complete ${complete?"done":""}`} onClick={()=>toggleLesson(lesson.no)}>{complete?"✓ Marked as learned (click to undo)":"Mark as learned"}</button>
              </div>
            </details>;
          })}
        </div>
      </section>

      <section className="glossary section" id="glossary">
        <div className="section-heading"><p>VARIABLE GLOSSARY</p><h2>See a variable, never guess its meaning again</h2><span>First know what it is, then know its units. Inconsistent units are one of the most common quiz traps.</span></div>
        <div className="glossary-grid">
          {glossary.map(([symbol,meaning,unit])=><article key={symbol}><code>{symbol}</code><p>{meaning}</p><span>{unit}</span></article>)}
        </div>
      </section>

      <section className="memory section" id="memory">
        <div className="section-heading"><p>AFTER LEARNING / MEMORY DECK</p><h2>Compress knowledge into memory cards after you understand it</h2><span>This is not the starting point. Complete the course above, then practise recognising the model from the question stem.</span></div>
        <div className="memory-grid">
          {memoryCards.map(card=><details className="memory-card" key={card.no}><summary><span>{card.no}</span><div><h3>{card.title}</h3><p>{card.cue}</p></div><b>＋</b></summary><div className="memory-body"><p>{card.body}</p><strong>{card.key}</strong></div></details>)}
        </div>
      </section>

      <section className="formula section" id="formula">
        <div className="section-heading light"><p>REFERENCE / FORMULA WALL</p><h2>Come back when needed — do not memorise everything up front</h2></div>
        <div className="formula-list">
          {formulas.map((item,index)=><article className="formula-row" key={item.name}><span>F{index+1}</span><div><h3>{item.name}</h3><p>{item.use}</p></div><code>{item.eq}</code><small>{item.vars}</small></article>)}
        </div>
      </section>

      <section className="decision section">
        <div className="section-heading"><p>EXAM SKILL / DECISION MAP</p><h2>Which manoeuvre is the question asking about?</h2></div>
        <div className="decision-grid">
          <div><span>01</span><p>Sees <b>mass / propellant / Isp</b></p><strong>→ Rocket equation</strong></div>
          <div><span>02</span><p>Sees <b>two circular coplanar orbits</b></p><strong>→ Hohmann</strong></div>
          <div><span>03</span><p>Right orbit but <b>wrong timing / phase</b></p><strong>→ Phasing</strong></div>
          <div><span>04</span><p>Burn is not at an apsis, direction changes</p><strong>→ Vector Δv</strong></div>
          <div><span>05</span><p>Two different apse lines</p><strong>→ Intersection / apse rotation</strong></div>
          <div><span>06</span><p><b>Two positions + fixed time</b></p><strong>→ Lambert chase</strong></div>
        </div>
      </section>

      <section className="traps section">
        <div className="section-heading"><p>EXAM SKILL / TRAP BOARD</p><h2>The six sentences most likely to trick you</h2></div>
        <ol><li><b>Slowing down does not mean long-term lag:</b>retrograde puts you in a lower orbit with a shorter period, so you catch up lap by lap.</li><li><b>Same speed does not mean zero Δv:</b>rotating the velocity vector still uses propellant.</li><li><b>The second Hohmann burn cannot be skipped:</b>it circularises.</li><li><b>Splitting a burn does not automatically save Δv:</b>ideal increments at the same burn point telescope.</li><li><b>High Isp does not mean high thrust:</b>propellant efficiency and acceleration are different things.</li><li><b>Altitude is not radius:</b>Earth problems must first use r = Rₑ + altitude.</li></ol>
      </section>

      <section className="quiz section" id="quiz">
        {phase==="idle" && <div className="quiz-launch"><p>FINAL STEP / QUIZ ENGINE</p><h2>Turn understanding into marks</h2><div className="mode-grid"><button onClick={()=>start("practice")}><span>TRAIN</span><b>Practice mode</b><small>Instant feedback per question · no timer</small></button><button onClick={()=>start("exam")}><span>SIMULATE</span><b>30-minute simulation</b><small>20 questions · review after submit</small></button></div><p className="honor-note">The real quiz is closed book. This page is for practice only — close it during the real quiz.</p></div>}

        {phase==="running" && active && <div className="quiz-shell">
          <div className="quiz-head"><div><span>{mode==="exam"?"SIMULATION":"TRAINING"}</span><b>{current+1} / {pool.length}</b></div><div className={`timer ${seconds<300?"urgent":""}`}>{mode==="exam"?formatTime(seconds):"Feedback on"}</div></div>
          <div className="progress"><i style={{width:`${((current+1)/pool.length)*100}%`}}/></div>
          <div className="question-tag">{active.tag}</div><h3 className="question-text">{active.prompt}</h3>
          <div className="options" role="radiogroup" aria-label="Answer options">{active.options.map((option,index)=>{const show=mode==="practice"&&selected!==null; const state=show?(index===active.answer?"correct":index===selected?"wrong":""):selected===index?"selected":""; return <button className={state} key={option} onClick={()=>choose(index)} role="radio" aria-checked={selected===index}><span>{String.fromCharCode(65+index)}</span><p>{option}</p>{show&&index===active.answer&&<b>✓</b>}{show&&index===selected&&selected!==active.answer&&<b>×</b>}</button>})}</div>
          {mode==="practice"&&selected!==null&&<div className={`explanation ${selected===active.answer?"good":"bad"}`}><strong>{selected===active.answer?"Correct":"Easy trap"}</strong><p>{active.why}</p>{active.trap&&<small>Trap: {active.trap}</small>}</div>}
          <div className="quiz-controls"><button className="ghost" onClick={()=>setCurrent(value=>Math.max(0,value-1))} disabled={current===0}>← Prev</button><span>{answered} / {pool.length} answered</span>{mode==="exam"&&current===pool.length-1?<button className="solid" onClick={()=>setPhase("result")}>Submit</button>:<button className="solid" onClick={next} disabled={mode==="practice"&&selected===null}>{current===pool.length-1?"Finish":"Next →"}</button>}</div>
          {mode==="exam"&&<div className="question-dots">{pool.map((q,index)=><button key={q.id} aria-label={`Go to question ${index+1}`} className={`${index===current?"active":""} ${answers[index]!==null?"done":""}`} onClick={()=>setCurrent(index)}>{index+1}</button>)}</div>}
        </div>}

        {phase==="result" && <div className="result">
          <p>RESULT / DEBRIEF</p><div className="score-line"><div className="score-ring"><strong>{score}</strong><span>/ {pool.length}</span></div><div><h2>{score/pool.length>=.9?"You are in the stable zone.":score/pool.length>=.7?"Solid base — patch the wrong answers.":score/pool.length>=.5?"Above the support line, but keep reinforcing.":"Go back to the memory deck and rebuild."}</h2><p>Accuracy {Math.round(score/pool.length*100)}% · best full simulation on this device {best}/20</p></div></div>
          {wrong.length>0?<div className="review"><h3>Review · {wrong.length} question(s)</h3>{wrong.map(q=>{const index=pool.findIndex(item=>item.id===q.id); return <article key={q.id}><span>Q{q.id} · {q.tag}</span><h4>{q.prompt}</h4><p><b>Correct:</b>{q.options[q.answer]}</p><p>{q.why}</p>{answers[index]!==null&&<small>Your choice: {q.options[answers[index] as number]}</small>}</article>})}</div>:<div className="perfect">Perfect. Take a ten-minute break and let the memory consolidate.</div>}
          <div className="result-actions">{wrong.length>0&&<button className="solid" onClick={()=>start("practice",wrong)}>Redo wrong only</button>}<button className="ghost" onClick={()=>start("exam")}>Simulate again</button><button className="ghost" onClick={reset}>Back to review</button></div>
        </div>}
      </section>

      <footer><div><b>AERO3760</b><span>Orbital Manoeuvres · Lectures 1–3</span></div><p>For practice before the real quiz · closed book rules apply</p></footer>
    </main>
  );
}

