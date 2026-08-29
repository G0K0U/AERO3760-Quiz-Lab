"use client";

import { useEffect, useMemo, useState } from "react";

type Mode = "practice" | "exam";
type Phase = "idle" | "running" | "result";
type Question = { id:number; tag:string; prompt:string; options:string[]; answer:number; why:string; trap?:string };
type Lesson = { no:number; phase:string; title:string; goal:string; plain:string[]; formulas?:{eq:string; note:string}[]; terms:[string,string][]; example:string; check:{q:string; a:string} };

const questions: Question[] = [
  { id:1, tag:"IMPULSE", prompt:"Impulsive burn 最核心的理想化假设是什么？", options:["burn 期间速度保持不变","burn 期间位置近似不变，速度发生跳变","航天器质量不变","推力在整圈轨道持续作用"], answer:1, why:"Impulsive model 把 burn 压缩为一个瞬间：r⁺ = r⁻，v⁺ = v⁻ + Δv。" },
  { id:2, tag:"ROCKET EQ.", prompt:"其他条件相同时，提高 Isp 会怎样？", options:["相同 Δv 所需推进剂减少","相同 Δv 所需推进剂增加","必然提高 thrust","不影响质量比"], answer:0, why:"Δv = Isp g₀ ln(m₀/mf)。Isp 越高，相同 Δv 所需质量比越小。", trap:"高 Isp 不等于高 thrust；离子发动机正是高 Isp、低 thrust。" },
  { id:3, tag:"ROCKET EQ.", prompt:"Rocket equation 表明推进剂代价随 Δv 如何增长？", options:["线性","指数","与 Δv 无关","只与轨道半径有关"], answer:1, why:"m₀/mf = exp[Δv/(Isp g₀)]，因此额外 Δv 会迅速变贵。" },
  { id:4, tag:"UNITS", prompt:"公式中 g₀ 使用 9.807 m/s²，Δv 应代入什么单位？", options:["km/s","m/s","km²/s²","单位任意"], answer:1, why:"必须保持一致单位；Isp·g₀ 的单位是 m/s，因此 Δv 也用 m/s。" },
  { id:5, tag:"HOHMANN", prompt:"从内圆轨道转移到外圆轨道，Hohmann 第一次 burn 是：", options:["内轨道 retrograde","内轨道 prograde","径向向外","外轨道 prograde"], answer:1, why:"内轨道 prograde burn 增加能量，把当前位置变成转移椭圆近地点并抬高远地点。" },
  { id:6, tag:"HOHMANN", prompt:"到达外轨道半径后若不执行第二次 burn，会发生什么？", options:["自动留在外圆轨道","停在远地点","沿转移椭圆返回","立刻逃逸"], answer:2, why:"第二次 burn 用来 circularise；没有它，航天器仍属于原来的转移椭圆。" },
  { id:7, tag:"TIME", prompt:"Hohmann transfer flight time 等于：", options:["初始轨道一圈","目标轨道一圈","转移椭圆一圈","转移椭圆半圈"], answer:3, why:"航天器从转移椭圆一个 apsis 飞到另一个 apsis，只走半个周期。" },
  { id:8, tag:"OBERTH", prompt:"相同的 aligned prograde Δv 在哪里增加的轨道能量最多？", options:["远地点","近地点","任何位置都相同","速度最低处"], answer:1, why:"Δε = vΔv cosα + ½Δv²；近地点 v 最大，因此能量增益最大。" },
  { id:9, tag:"BI-ELLIPTIC", prompt:"当目标/初始圆轨道半径比为 5，通常优先选择：", options:["Hohmann","无限远 bi-elliptic","plane change","Lambert chase"], answer:0, why:"讲义判断线：半径比小于 11.94 时，Hohmann 更优。" },
  { id:10, tag:"APOGEE LADDER", prompt:"理想模型下，把同一近地点的一次 apogee-raising burn 拆成多次：", options:["总 Δv 必然更小","总 Δv 必然更大","理想总 Δv 相同，但耗时更长","自动成为 bi-elliptic"], answer:2, why:"同一点的速度增量 telescopes；拆分主要换来较小单次 thrust 需求，但增加 coast 和操作次数。" },
  { id:11, tag:"PHASING", prompt:"目标在你前方。为了逐渐追上它，应进入哪种 phasing orbit？", options:["更大、周期更长","更小、周期更短","相同轨道不点火","逃逸轨道"], answer:1, why:"先 retrograde 进入更小轨道；小 a → 短 T → 每圈比目标走得更快。", trap:"轨道上瞬时减速，会落入更低、更快完成一圈的轨道。" },
  { id:12, tag:"PHASING", prompt:"若要求用更少圈数完成同一相位变化，通常会怎样？", options:["所需 Δv 下降","所需 Δv 上升","所需 Δv 不变","不需要改变周期"], answer:1, why:"更短时间内积累相同相位差，需要更大的周期差，也通常需要更大的 burn。" },
  { id:13, tag:"VECTOR Δv", prompt:"Off-apsis manoeuvre 为什么不能只计算 |v₂ − v₁|？", options:["μ 会变化","质量会变化","速度方向通常也会变化","半长轴没有定义"], answer:2, why:"Δv 是速度向量之差。Off-apsis 时两轨道 flight-path angle 通常不同。" },
  { id:14, tag:"VECTOR Δv", prompt:"两速度大小均为 4 km/s，方向相差 60°。所需 Δv 是：", options:["0","2 km/s","4 km/s","8 km/s"], answer:2, why:"纯方向改变：Δv = 2v sin(Δγ/2) = 8 sin30° = 4 km/s。" },
  { id:15, tag:"VECTOR Δv", prompt:"一次 manoeuvre 保持 speed 不变、只旋转速度方向。正确说法是：", options:["Δv = 0","不耗推进剂","动能不变但 Δv 非零","轨道必然不变"], answer:2, why:"speed 相同意味着动能相同；但改变速度向量方向仍需要非零 Δv。" },
  { id:16, tag:"BURN ANGLE", prompt:"计算 burn 相对当地水平的方向，最稳妥的是：", options:["acos(Δvr/Δv)","atan2(Δvr, Δv⊥)","Δvr + Δv⊥","vis-viva"], answer:1, why:"atan2 同时使用径向和横向分量，保留完整象限信息。" },
  { id:17, tag:"APSE ROTATION", prompt:"两条拱线方向不同的共面轨道之间，一次 impulsive transfer 必须发生在：", options:["任意近地点","任意远地点","两轨道交点","赤道"], answer:2, why:"Impulsive burn 前后位置不变，因此 burn point 必须同时位于旧轨道和新轨道上。" },
  { id:18, tag:"APSE ROTATION", prompt:"在旧近地点加入 outward radial velocity 后，通常：", options:["该点仍是新近地点","新轨道 apse line 旋转","轨道完全不变","只改变质量"], answer:1, why:"有了向外径向速度，该点已不再是新轨道 apsis，因此偏心率向量方向改变。" },
  { id:19, tag:"APSE ROTATION", prompt:"在近地点实施纯 transverse burn，且 Δvr = 0。通常：", options:["拱线方向不旋转","拱线旋转 90°","只改变轨道平面","能量不变"], answer:0, why:"burn 后该点径向速度仍为零，仍位于新轨道 apse line 上；改变的是能量和形状。" },
  { id:20, tag:"LAMBERT", prompt:"Lambert chase problem 的核心已知量是：", options:["两个位置与飞行时间","Isp 与推进剂质量","只有初始速度","J₂ 与倾角"], answer:0, why:"给定 rA、目标未来位置 rB 和 Δt，再选择方向及 revolution count，转移轨道由求解器给出。" },
  { id:21, tag:"PLANE CHANGE", prompt:"两次单点 impulsive burn 之间，单次平面改变只能发生在：", options:["任一近地点","任一远地点","两轨道平面的交线上","赤道上空"], answer:2, why:"点火前后位置不变，burn 点必须同时属于新旧两条轨道；两个平面只共享交线 BD 上的点。", trap:"交线之外，两条轨道没有任何公共点。" },
  { id:22, tag:"PLANE CHANGE", prompt:"纯平面改变（v 不变）的 Δv 公式与最便宜位置是：", options:["v·δ，近地点","2v sin(δ/2)，远地点","2v sin δ，近地点","v·tan(δ/2)，任意位置"], answer:1, why:"Δv = 2v sin(δ/2) 与当地速度成正比，所以速度最低的远地点最便宜。" },
  { id:23, tag:"PLANE CHANGE", prompt:"为什么说大角度平面改变在轨几乎做不起？", options:["公式在 δ>30° 失效","需要大气制动配合","Δv=2v sin(δ/2) 随 v 和 δ 增长太快","它不改变轨道能量所以无效"], answer:2, why:"δ=60° 在 LEO 已约 7.7 km/s；Isp=300 s 时相当于烧掉 93% 的航天器质量。Shuttle 全部 OMS 也只够约 2.3°。" },
  { id:24, tag:"PLANE CHANGE", prompt:"同时改变速度大小和平面时，成本关系是：", options:["先转平面再加速最省","先加速再转平面最省","必须分两次","一次 combined burn 永不更贵"], answer:3, why:"三角不等式：ΔvI=√[(v₂−v₁)²+4v₁v₂sin²(δ/2)] ≤ ΔvII、ΔvIII。Combine, don't sequence。" },
  { id:25, tag:"AZIMUTH", prompt:"向东（due east，A=90°）发射时轨道倾角是：", options:["i=0，赤道","i=发射纬度 φ（最小值）","i=90°，极轨","i 由火箭决定，与纬度无关"], answer:1, why:"cos i = cos φ sin A：due east 时 sin A=1，i=φ。一次发射的倾角不可能低于发射纬度。" },
  { id:26, tag:"AZIMUTH", prompt:"cos i = cos φ sin A 对同一倾角给出两个方位角解（A 与 180°−A），谁来选？", options:["方程自己挑出唯一解","Range safety（发射走廊法规）","地球自转方向","火箭 Isp"], answer:1, why:"物理上向北和向南两个解都成立；Eq 6.24 无法选择，实际由发射走廊的落区安全规定决定。" },
  { id:27, tag:"FINITE BURN", prompt:"什么情况下 impulsive 模型开始失效？", options:["Δv 超过 1 km/s","Isp 低于 300 s","burn 时长与轨道周期可比拟，推进期间位置明显移动","只要不是圆轨道"], answer:2, why:"此时推力必须进入运动方程：r̈ = −μr/r³ + (T/m)v̂，ṁ = −T/(Isp g₀)，数值积分 [r, v, m] 七分量状态。" },
  { id:28, tag:"SPIRAL", prompt:"低推力电推进螺旋（如离子发动机）的典型 trade 是：", options:["推进剂极省，但转移要数周到数月","推进剂和时间都省","只适合平面改变","比化学推进更快到达"], answer:0, why:"Eq 6.39 给出闭式时间；SMART-1 用 14 个月螺旋到月球，燃料只带 59 kg 氙。" },
  { id:29, tag:"LUNAR HOHMANN", prompt:"一阶地月转移设计中，月球轨道被理想化为：", options:["半径 384,400 km 的圆","偏心率 0.0549 的椭圆原样保留","半径 66,183 km 的圆","不动点"], answer:0, why:"真实 e=0.0549（±5.5%），但一阶设计用同周期圆 D=384,400 km 换取几何简单；精确历元由数值积分恢复。" },
  { id:30, tag:"LUNAR HOHMANN", prompt:"滑行 66.45 h 期间月球沿自己轨道移动约多少？这要求你：", options:["244,000 km；瞄准它将在的位置","2,440 km；瞄准当前位置","不动；直接瞄准月球","0.55°；不需要修正"], answer:0, why:"月球约 0.55°/h × 66.45 h ≈ 36.3°，s = D·θ ≈ 244,000 km——全程的三分之二。Aim at where it will be。" },
  { id:31, tag:"LUNAR HOHMANN", prompt:"地月 Hohmann 转移的总账（320 km LEO 出发）：", options:["Δv 1.2 km/s，3 天","Δv 3.93 km/s，119.5 h ≈ 5 天","Δv 7.7 km/s，1 天","Δv 0.83 km/s，12 h"], answer:1, why:"注入 3.101 + 到达 0.830 = 3.931 km/s；t_F = 半个转移周期 = 119.5 h。最便宜的两 burn 方案，也最慢。" },
  { id:32, tag:"LUNAR HOHMANN", prompt:"地月 Hohmann 远地点那 0.830 km/s 的物理性质是：", options:["就是环月入轨 LOI","地心速度匹配近似，月球引力尚未进模型","用于修正轨道倾角","逃逸地球所需"], answer:1, why:"它只把地心速度匹配到月球公转速度 1.018 km/s，是 velocity-matching proxy；真正的 lunar capture 要等月心双曲线分析。" },
  { id:33, tag:"LADDER", prompt:"近地点注入速度阶梯上，逃逸边界发生在：", options:["10.8158 km/s（Hohmann）","vp = √(2μe/rp) ≈ 10.91 km/s","11.2 km/s","384,400 km 处"], answer:1, why:"超过 √(2μ/rp) 后 ε>0、无远地点：错过月球就永不返回。10.9（椭圆）与 10.91 之间只差 10 m/s。" },
  { id:34, tag:"LADDER", prompt:"为什么近地点速度只差 35 m/s 就能把飞行时间从 119.5 h 砍到 66.3 h？", options:["月球引力帮忙拉","ra = p/(1−e)，而 Hohmann 的 1−e≈0.035，分母极小导致远地点超敏感","周期与 e 无关","燃料质量随速度线性变化"], answer:1, why:"e 的微小变化让 ra 爆炸式增长（+57% 的 a！）；圆整到三位有效数字 10.815 就会差 3,400 km。" },
  { id:35, tag:"ORBIT 3", prompt:"orbit 3（vp=10.85）在 θ=170.8° 穿越月球轨道时 γ=77.6°，这说明了什么？", options:["速度几乎与月球运动方向垂直，到达 burn 的溢价来自方向不对齐","速度方向完美匹配，到达很便宜","轨道已经变成双曲线","航天器正在减速下降"], answer:0, why:"月球沿轨道以 γ=0、1.018 km/s 前进，而到达速度 0.881 km/s 几乎径向；斜 burn ΔvF=1.195 km/s。多付 10% Δv，时间减半——切向相切正是 Hohmann 便宜的原因。" },
  { id:36, tag:"SOI", prompt:"月球影响球半径 rSOI = 66,183 km 来自哪个公式？", options:["R(m/M)^(2/5)","R(m/M)^(1/2)","R(m/M)^(2/3)","引力相等点 R·m/M"], answer:0, why:"令两个摄动失真比相等（Laplace 判据）得 (r/R)⁵=(m/M)²，故 rSOI/R=(m/M)^{2/5}=0.172，RS≈38 个月球半径。" },
  { id:37, tag:"SOI", prompt:"在月球 SOI 边界上，地球和月球对航天器的引力谁大？", options:["相等（边界定义）","月球大","地球仍大约强 3.5 倍","无法比较"], answer:2, why:"SOI 比较的是两种圆锥曲线描述的摄动失真，不是力的大小；边界上什么物理都没有突变——它是建模边界，不是物理表面。" },
  { id:38, tag:"PATCHED CONIC", prompt:"地月转移（Hohmann 到 orbit 4）需要先逃逸地球吗？", options:["需要，必须超过逃逸速度","不需要：D 只有地球 SOI 的 42%，地心段是椭圆","取决于 Isp","只有载人任务需要"], answer:1, why:"月球 deep inside 地球 SOI（384,400 vs 925,000 km），orbits 2–4 都是地心椭圆；但进入月球 SOI 后，月心看到达段是双曲线。" },
  { id:39, tag:"PATCHED CONIC", prompt:"为什么月球是 patched-conic 最粗糙的应用场合？", options:["月球没有大气","月球引力太小可以忽略","rSOI/D=17.2%，远差于地球的 0.62%，拼接区域不再是'一个点'","月球轨道不共面"], answer:2, why:"行星的 rSOI/R 都在百分之零点几到 6%，月球 17.2% 最差——所以真实任务用数值积分（Lecture 5）修正。" },
  { id:40, tag:"MISSIONS", prompt:"CAPSTONE 用弹道式转移（BLT）去月球 NRHO 的 trade 是：", options:["50–150 m/s 对 direct 的 350–550 m/s，代价是 4.5 个月飞行时间","更快且更省","不省 Δv 只是好玩","只用了一次 burn"], answer:0, why:"时间买 Δv 的极致：烤箱大小的 25 kg 立方星因此付得起月球船票，并率先飞出 Gateway 的 9:2 NRHO。" },
];

const lessons: Lesson[] = [
  { no:0, phase:"FOUNDATION", title:"先学会读公式", goal:"分清标量、向量、大小、方向和单位。", plain:["普通字母 r、v 表示只有大小的数；粗体 𝐫、𝐯 表示同时带方向的向量。","向量的长度写作 ‖𝐫‖。位置向量 𝐫 的长度就是轨道半径 r；速度向量 𝐯 的长度就是 speed v。","箭头上一个点表示对时间求导：𝐫̇ = 𝐯；两个点表示加速度：𝐫̈。"], formulas:[{eq:"r = ‖𝐫‖ = √(x²+y²+z²)",note:"把三维位置向量变成距离；x、y、z 是三个直角坐标分量。"},{eq:"v = ‖𝐯‖",note:"向量 𝐯 包含大小与方向；标量 v 只有大小。"},{eq:"r = Rₑ + altitude",note:"绕地球时，半径必须从地心量起。"}], terms:[["𝐫","位置向量：从中心天体指向航天器"],["r","位置向量 𝐫 的大小，即轨道半径"],["𝐯","速度向量：多快 + 往哪走"],["v","速度向量 𝐯 的大小，也叫 speed"],["x, y, z","位置向量在三个坐标轴上的分量"]], example:"400 km 高的近地轨道并不是 r = 400 km，而是 r ≈ 6378 + 400 = 6778 km。", check:{q:"速度大小相同但方向不同，两个速度向量是否相同？",a:"不同。向量必须同时具有相同大小和相同方向。"} },
  { no:1, phase:"FOUNDATION", title:"轨道其实是持续自由落体", goal:"理解航天器为什么不会掉下来，也不会直线飞走。", plain:["地球引力一直把航天器拉向地心；与此同时，航天器有很大的横向速度。","它不断向地球下落，但地球表面也不断在它下方弯走，于是形成轨道。","二体模型暂时只保留中心天体与航天器之间的引力，忽略阻力、第三体和地球扁率。"], formulas:[{eq:"r̈ = −(μ/r³) r",note:"加速度方向与 r 相反，因此永远指向中心。"},{eq:"v_c = √(μ/r)",note:"半径 r 处的理想圆轨道速度。"}], terms:[["μ","标准引力参数；地球约 398600 km³/s²"],["r̈","位置的二阶时间导数，即加速度"],["Rₑ","地球半径，课程取约 6378 km"],["v_c","圆轨道速度"]], example:"半径越大的圆轨道，v_c 越小。高轨卫星的瞬时速度比低轨卫星慢。", check:{q:"轨道上的宇航员没有重力吗？",a:"不是。他们仍受强烈引力，只是飞船和人一起自由落体，所以表现为失重。"} },
  { no:2, phase:"FOUNDATION", title:"认识椭圆与轨道方程", goal:"从近远地点读出轨道，并知道 θ 如何标记轨道上的位置。", plain:["中心天体位于椭圆的一个焦点，不在椭圆中心。近地点 periapsis 是最小半径 rₚ；远地点 apoapsis 是最大半径 rₐ。","半长轴 a 表示轨道整体大小；偏心率 e 表示轨道有多扁。圆轨道 e=0。","True anomaly θ 从 periapsis 沿运动方向量起：近地点 θ=0，远地点 θ=π。轨道方程把角位置 θ 变成半径 r。","比角动量向量 𝐡=𝐫×𝐯 垂直于轨道平面；在二体模型中保持不变。"], formulas:[{eq:"a = (rₚ+rₐ)/2",note:"近远地点半径的平均值。"},{eq:"e = (rₐ−rₚ)/(rₐ+rₚ)",note:"0 为圆；0<e<1 为椭圆。"},{eq:"rₚ=a(1−e),  rₐ=a(1+e)",note:"已知 a、e 时反求两个 apses。"},{eq:"𝐡 = 𝐫 × 𝐯;  h = ‖𝐡‖",note:"叉乘得到比角动量向量；h 的单位是 km²/s。"},{eq:"p = h²/μ = a(1−e²)",note:"p 是半通径，把角动量与椭圆几何连起来。"},{eq:"r(θ) = p/(1+e cosθ)",note:"Orbit equation：给定 θ，求航天器离中心多远。"}], terms:[["a","半长轴：轨道大小"],["e","偏心率：轨道形状"],["rₚ / rₐ","近地点 / 远地点半径"],["𝐡 / h","比角动量向量 / 它的大小"],["p","半通径 semilatus rectum"],["θ","true anomaly：从近地点量起的角"]], example:"若地球轨道高度为 400 × 1000 km，先得 rₚ=6778、rₐ=7378 km，再得 a=7078 km、e≈0.042。若要找任意 θ 的半径，再使用 orbit equation。", check:{q:"θ=π 对应椭圆轨道的什么位置？",a:"Apoapsis（远地点）。因为 θ 从 periapsis 起算，π rad 就是转过 180°。"} },
  { no:3, phase:"FOUNDATION", title:"能量、速度和轨道时钟", goal:"知道航天器为什么快慢不同，以及怎样预测它何时到达某处。", plain:["轨道能量由动能与引力势能组成；理想二体运动中总和守恒。椭圆在近地点最快、远地点最慢。","Vis-viva 只给 speed，不给速度方向。轨道周期 T 只由半长轴 a 和 μ 决定。","椭圆上 true anomaly θ 不会匀速增加。为了计时，我们用会匀速增长的 mean anomaly M，再通过 Kepler equation 找 eccentric anomaly E。","只有圆轨道 e=0 时，才可把角位置简单写成 θ=nt。"], formulas:[{eq:"ε = v²/2 − μ/r = −μ/(2a)",note:"比轨道能只由半长轴 a 决定。"},{eq:"v² = μ(2/r − 1/a)",note:"Vis-viva：已知当前位置 r 和轨道 a 求 speed。"},{eq:"T = 2π√(a³/μ)",note:"Kepler 第三定律：轨道越大，周期越长。"},{eq:"n = √(μ/a³) = 2π/T",note:"Mean motion：平均每秒走过多少弧度。"},{eq:"M = n(t−τ)",note:"Mean anomaly M 随时间均匀增长；τ 是上次经过近地点的时刻。"},{eq:"M = E − e sinE",note:"Kepler equation；通常数值求解 E，再转换为真实位置 θ。"}], terms:[["ε","比轨道能，单位 km²/s²"],["T","一整圈所需时间"],["n","mean motion，单位 rad/s"],["M","mean anomaly，均匀运行的轨道时钟角"],["E","eccentric anomaly，计算椭圆位置的辅助角"],["τ","最近一次经过 periapsis 的时间"],["t","当前时间"]], example:"同一条椭圆上 a 固定。到近地点时 r 变小，vis-viva 中 2/r 变大，所以 v 变大；也正因为快慢变化，θ 不能当作均匀时钟。", check:{q:"椭圆轨道飞完四分之一周期时，θ 一定等于 90° 吗？",a:"不一定。均匀增加的是 M，不是 θ；只有圆轨道才可直接按时间比例换 θ。"} },
  { no:4, phase:"MANOEUVRES", title:"点火如何改变轨道", goal:"建立“同一点换速度，就换到另一条轨道”的核心图像。", plain:["Impulsive burn 假设点火极短：位置来不及变化，但速度立即改变。","Prograde 沿运动方向加速，通常提高能量；retrograde 反向减速，通常降低能量。","Radial burn 沿地心向外或向内，会明显改变速度方向，并常常旋转拱线。"], formulas:[{eq:"r⁺ = r⁻",note:"点火前后是同一个空间位置；上标 −/＋ 分别表示点火前/后。"},{eq:"v⁺ = v⁻ + Δv",note:"新速度向量 = 旧速度向量 + 点火产生的速度变化向量。"},{eq:"Δε = v Δv cosα + ½Δv²",note:"α 是 v 与 Δv 的夹角；对齐且在高速处点火，改变能量最有效。"}], terms:[["Δv","速度向量的变化，也是机动成本货币"],["α","原速度 v 与 burn 向量 Δv 的夹角"],["prograde","沿当前速度方向"],["retrograde","与当前速度反向"],["radial","沿当地竖直方向"]], example:"在圆轨道做一次 prograde burn：当前位置仍相同，但 speed 已高于圆轨道所需，于是它成为新椭圆的近地点。", check:{q:"一次 impulsive burn 会让位置 r 瞬间跳到别处吗？",a:"不会。模型中位置连续不变，只有速度跳变。"} },
  { no:5, phase:"MANOEUVRES", title:"Rocket equation：Δv 要花多少燃料", goal:"把轨道计算出的 Δv 转换成质量代价。", plain:["轨道力学先告诉你需要多少 Δv；rocket equation 再告诉你为此要带多少推进剂。","质量代价是指数关系，所以多一点 Δv 可能需要很多额外燃料。","Isp 衡量推进剂效率。它的单位虽然是 seconds，却不是发动机工作时间；高 Isp 也不代表 thrust 大。"], formulas:[{eq:"vₑ = Isp g₀",note:"有效排气速度 = 比冲 × 标准重力。"},{eq:"Δv = vₑ ln(m₀/mf) = Isp g₀ ln(m₀/mf)",note:"Ideal rocket equation；ln 是自然对数。"},{eq:"m₀/mf = exp[Δv/(Isp g₀)]",note:"直接看出质量比随 Δv 指数增长。"},{eq:"m_prop = m₀ − mf",note:"推进剂质量 = burn 前总质量 − burn 后总质量。"}], terms:[["Isp","比冲，单位 s；不是 burn duration"],["vₑ","有效排气速度，单位 m/s"],["g₀","标准重力 9.807 m/s²"],["m₀","点火前总质量"],["mf","点火后质量"],["m_prop","此次 burn 消耗的推进剂质量"],["ln / exp","互为反函数的自然对数与指数函数"]], example:"Isp=300 s、Δv=1000 m/s 时，mf/m₀≈e⁻⁰·³⁴≈0.712；理想情况下约 28.8% 初始质量被消耗。", check:{q:"Isp=300 s 是否表示发动机只能工作 300 秒？",a:"不是。Isp 是推进剂效率指标；这里的 seconds 来自定义方式，不是 burn duration。"} },
  { no:6, phase:"MANOEUVRES", title:"Hohmann：最重要的两次点火", goal:"完整理解两圆轨道之间的标准转移。", plain:["Hohmann 的最优性有严格前提：两条同心、共面圆轨道，两次切向 impulsive burns；转移椭圆与两个圆相切。","向外转移是 prograde + prograde；向内转移是 retrograde + retrograde。第二次 burn 负责 circularise，不能省。","理想二体模型中，同一路径正向与反向的总 Δv 相同；“返回有 gravity help 所以更便宜”是陷阱。"], formulas:[{eq:"a_t = (r₁+r₂)/2",note:"转移椭圆半长轴。"},{eq:"Δv₁ = v_t(r₁) − v_c(r₁)",note:"向外转移的第一次 burn：同一位置的两种 speed 相减。"},{eq:"Δv₂ = v_c(r₂) − v_t(r₂)",note:"第二次 burn 负责 circularise。"},{eq:"Δv_H = |Δv₁| + |Δv₂|",note:"总成本是每次 burn 大小之和，不能让正负号互相抵消。"},{eq:"t_H = π√(a_t³/μ)",note:"只飞转移椭圆半圈。"}], terms:[["r₁","初始圆轨道半径"],["r₂","目标圆轨道半径"],["a_t","transfer ellipse 半长轴"],["v_c","该半径处的圆轨道 speed"],["v_t","该半径处的转移轨道 speed"],["Δv_H","两次 burn 大小之和"],["t_H","Hohmann 飞行时间"]], example:"解题顺序固定：求 a_t → 用 circular speed 求两圆速度 → 用 vis-viva 求转移椭圆两端速度 → 同一点速度相减。向内转移只需反转过程和 burn 方向。", check:{q:"向内 Hohmann 的两次 burn 是什么方向？",a:"两次都是 retrograde：第一次降低近地点，第二次在内轨道半径处减速并圆化。"} },
  { no:7, phase:"MANOEUVRES", title:"Bi-elliptic 与 apogee ladder", goal:"分清两种“多次点火”为什么不是一回事。", plain:["Bi-elliptic 有三次 burn，并故意把中间 apoapsis 推得很远，利用那里的低速完成便宜的改变，但往往需要极长时间。","记住完整阈值：r₂/r₁<11.94 时 Hohmann 始终更省；11.94–15.58 时取决于中间远地点 r_b；>15.58 时足够大的 r_b 可让 bi-elliptic 更省。","Apogee ladder 则是在同一个 periapsis 分多圈逐步点火；理想总 Δv 不因拆分自动减少。"], terms:[["r₂/r₁","目标与初始圆轨道半径比"],["r_b","bi-elliptic 的中间超高远地点"],["telescoping","同一点的多个速度差相互抵消"],["coast time","不点火、沿轨道飞行的时间"],["trade-off","燃料、时间、发动机和风险之间取舍"]], example:"小型发动机无法一次完成大 burn 时，可用 apogee ladder；这主要解决单次 thrust 能力，不是魔法般节省 Δv。", check:{q:"当 r₂/r₁=13 时，能只凭半径比断定 Hohmann 最优吗？",a:"不能。13 位于 11.94–15.58 的中间区，结果还取决于 bi-elliptic 的 r_b。"} },
  { no:8, phase:"MANOEUVRES", title:"Phasing：减速反而能追上", goal:"掌握最反直觉、也最爱出选择题的周期逻辑。", plain:["Phasing 用于轨道正确但相对位置错误。先预测目标何时回到会合点，再暂时改变 chaser 的周期，让相位逐圈积累。","目标在前方：在共同 burn point 做 retrograde burn，瞬时 speed 先降低并进入较小轨道；较小 a 对应较短周期，所以它更早完成一圈，长期逐圈追上。","完成相位变化后，需要第二次 burn 回到原轨道并匹配速度。"], formulas:[{eq:"T = 2π√(a³/μ)",note:"所有 phasing 判断都来自 a 与 T 的单调关系。"},{eq:"a_phase = [μ(T_phase/2π)²]^(1/3)",note:"由所需 phasing 时间反求临时轨道大小。"}], terms:[["phase","同一轨道上的相对角位置"],["chaser","主动追赶的航天器"],["target","被追赶目标"],["T_phase","临时 phasing orbit 的周期"],["a_phase","临时 phasing orbit 的半长轴"]], example:"“减速后立刻变快”是错误说法。正确链条是：burn 点瞬时减速 → 进入更小 a 的轨道 → 周期变短 → 更早回到会合点。", check:{q:"要求用更少圈完成相同相位变化，Δv 通常变大还是变小？",a:"变大。更短时间需要更大的周期差，因此需要更强的机动。"} },
  { no:9, phase:"LECTURE 3", title:"Off-apsis：Δv 必须当向量", goal:"分清“速度大小的差”和“速度向量的变化”。", plain:["在 apsis，速度沿当地水平；Hohmann 的两个速度方向平行，因此可以直接减 speed。","离开 apsis 后，两轨道的 flight-path angle 往往不同，burn 同时改变 speed 和方向。","计算任意点的飞行方向时，先由该点的 v_r 与 v⊥ 得到 γ，而不是把 true anomaly θ 直接当成速度方向。","即使 burn 前后 speed 完全相同，仅改变方向仍需要非零 Δv。讲义的两个 non-Hohmann 公式只需认作 Hohmann 的一般化，考试很少要求手算。"], formulas:[{eq:"v_r = (μ/h) e sinθ",note:"径向速度分量：θ 处正在远离 (v_r>0) 还是靠近 (v_r<0)。"},{eq:"v⊥ = (μ/h)(1+e cosθ) = h/r",note:"横向速度分量：与 v_r 合成出总速度和 flight-path angle。"},{eq:"γ = atan2(v_r, v⊥)",note:"flight-path angle：速度相对当地水平的方向。"},{eq:"Δv = ‖v₂−v₁‖",note:"定义：速度向量之差的大小。"},{eq:"Δv = √(v₁²+v₂²−2v₁v₂cosΔγ)",note:"用余弦定理计算。"},{eq:"v₁=v₂=v ⇒ Δv=2v sin(|Δγ|/2)",note:"纯方向改变。"},{eq:"e = (r_B−r_A)/(r_A cosθ_A − r_B cosθ_B)",note:"Non-Hohmann 转移轨道偏心率；A、B 是两个连接点。"},{eq:"h = √[ μ r_A r_B (cosθ_A−cosθ_B)/(r_A cosθ_A−r_B cosθ_B) ]",note:"对应转移角动量；Hohmann 是 θ_A=0、θ_B=π 的特例。"}], terms:[["γ","flight-path angle，相对当地水平的角"],["Δγ","两个速度方向之差"],["vᵣ","径向速度分量"],["v⊥","横向速度分量"],["r_A, θ_A","旧轨道连接点的半径与真近点角"],["r_B, θ_B","目标轨道连接点的半径与真近点角"]], example:"两个 4 km/s 的速度方向相差 60°，Δv=2×4×sin30°=4 km/s，而不是 0。", check:{q:"什么时候 Δv 可以简化为 |v₂−v₁|？",a:"只有两个速度向量平行时，例如理想 Hohmann 的切向连接点。"} },
  { no:10, phase:"LECTURE 3", title:"Apse rotation 与 Lambert chase", goal:"认识两种一般机动，不必手推复杂求解器。", plain:["两条拱线方向不同的轨道，只能在它们的交点通过一次 impulsive burn 直接切换，因为点火前后位置相同。","在旧 periapsis 加 radial component 后，该点不再是新轨道 apsis，于是 eccentricity vector 和 apse line 旋转。","若题目给两个位置和指定飞行时间，求中间轨道，这是 Lambert problem。时间越短，强行 intercept 通常越昂贵。"], formulas:[{eq:"η = θ₁ − θ₂",note:"同一交点相对两条拱线的真近点角之差。"},{eq:"Lambert inputs: r_A, r_B, Δt",note:"还需选择飞行方向和 revolution count。"}], terms:[["apse line","连接 periapsis 与 apoapsis 的直线"],["η","拱线旋转角"],["Lambert problem","两位置 + 飞行时间决定转移"],["rendezvous","不仅同位置，还必须匹配速度"]], example:"耐心 phasing 可能只需几十到几百 m/s；讲义的一小时强制 chase 却需要约 9.43 km/s。", check:{q:"为什么 apse-line transfer 不能在两轨道不相交的位置点火？",a:"Impulsive burn 不会瞬移位置；burn point 必须同时属于旧轨道和新轨道。"} },
  { no:11, phase:"WEEK 3 · L4", title:"平面改变：只能在交线上做", goal:"知道为什么换平面这么贵，以及在哪里、怎么组合最便宜。", plain:["两个不同平面的轨道都经过焦点，所以它们必然共享一条交线 BD；单次 impulsive 平面改变只能发生在这条线的 B 或 D 点——交线之外两轨道没有公共点。","在交点上，径向速度 v_r 沿交线方向，在两条轨道上完全相同；burn 只需要把横向速度旋转二面角 δ，所以成本只取决于 v 和 δ。","δ 不能由两个倾角直接相加：要用球面三角 cos δ 公式。赤道轨道是特例：δ 就等于目标倾角。","纯平面改变 Δv = 2v sin(δ/2) 与当地速度成正比 → 永远在速度最低的 apoapsis 做。","同时要改速度大小和平面时，一次 combined burn 永不更贵于先转再加速或先加速再转（三角不等式）。"], formulas:[{eq:"cos δ = cos i₁ cos i₂ + sin i₁ sin i₂ cos(Ω₂−Ω₁)",note:"从两条轨道的根数算二面角；特例 i₁=0 ⇒ δ=i₂。"},{eq:"Δv = 2v sin(δ/2)",note:"纯旋转（Curtis 6.23）：v 不变，只转方向。"},{eq:"Δv = √[(v_r2−v_r1)² + v₁²+v₂²−2v₁v₂cos δ]",note:"一般式（Curtis 6.19）；沿交线的 v_r 保持不动。"},{eq:"Δv_I = √[(v₂−v₁)² + 4v₁v₂ sin²(δ/2)]",note:"Combined burn；三角不等式保证 Δv_I ≤ Δv_II, Δv_III。"}], terms:[["δ","dihedral angle，两轨道面的二面角"],["intersection line","两轨道平面的交线 BD"],["u = Ω+ω","argument of latitude：从升交点量到交点的角"],["combined burn","一次点火同时完成加速与转平面"]], example:"δ=60° 的纯旋转在 LEO 约 7.7 km/s——等于整个轨道速度；Isp=300 s 时要烧掉 93% 的航天器质量。Shuttle 的 OMS 全部 305 m/s 也只够约 2.3°。", check:{q:"平面改变为什么在远地点做最便宜？",a:"Δv = 2v sin(δ/2) 与当地速度 v 成正比；远地点速度最低，所以账单最小。"} },
  { no:12, phase:"WEEK 3 · L4", title:"发射方位角：倾角的地板", goal:"把发射纬度、方位角和能到达的倾角连起来。", plain:["轨道平面必须同时包含发射点和地心。cos i = cos φ sin A 把发射纬度 φ 与方位角 A 绑在一起。","Due east（A=90°）给出最小倾角 i=φ：这是地板。一次发射永远进不了比发射纬度更低的倾角——所以中纬度发射的 GEO 卫星之后必须付平面改变的账。","方程永远有两个解 A 和 180°−A（带北向或南向分量）。物理不替你选：range safety 的发射走廊才决定用哪个。","在低轨做 28° 平面改变要 2.498 km/s，同样的事在 GEO 只要 0.352 km/s；最优是几乎全部在 apogee 完成，只在 perigee 保留约 2.18°（Curtis 6.12）。","发射走廊是法规不是物理：2020 年 SAOCOM 1B 从佛州打进了太阳同步轨道——Eq 6.24 没变，变的是落区管理。"], formulas:[{eq:"cos i = cos φ sin A",note:"Curtis 6.24：纬度 φ、方位角 A（从北顺时针）与倾角。"},{eq:"v_rot = 0.465 cos φ km/s",note:"due east 发射白拿的地球自转速度；偏离 due east 拿得更少。"}], terms:[["φ","launch latitude 发射纬度"],["A","launch azimuth 发射方位角，从正北顺时针"],["i_min = φ","单次发射可达的最小倾角"],["range safety","决定可飞方位角走廊的落区安全规定"]], example:"卡角 φ=28.5°、走廊 A=35°–120°：可达倾角带只有 28.5°–59.7°。太阳同步 97.9° 需要 A=189°——物理允许，当年只是法规不允许。", check:{q:"从纬度 28.5° 的发射场，能否一次发射进入 i=0 的赤道轨道？",a:"不能。cos i = cos φ sin A ≥ cos φ，所以 i ≥ φ=28.5°；i=0 必须靠后续平面改变购买。"} },
  { no:13, phase:"WEEK 3 · L4", title:"当点火不能被看作瞬时", goal:"知道 impulsive 模型何时失效，以及低推力螺旋怎么算时间。", plain:["当 burn 时长与轨道周期相比不可忽略时，推进期间位置也在变，impulsive 假设失效：推力必须进入运动方程。","增广运动方程 + 质量流方程构成七分量状态 [r, v, m]，一般无闭式解，要数值积分。最常见的导引律是切向推力（沿 v）。","别高估误差：Curtis 6.15 中 261 秒的有限 burn 只带来 0.02% 的推进剂差（1291.6 vs 1291.3 kg）——但它让拱线旋转了 8.3°。","电推进（毫牛级）把轨道抬升成缓慢外螺旋；Eq 6.39 给出到达目标半径所需时间的闭式解。推进剂极省，代价是数周到数月。","现实已经主流化：SMART-1 用 14 个月螺旋去月球；如今每颗 Starlink V2 mini 都用氩霍尔推进自己爬轨。"], formulas:[{eq:"r̈ = −μr/r³ + (T/m) v̂,   ṁ = −T/(Isp g₀)",note:"有限 burn 的增广运动方程与质量流方程。"},{eq:"t = (m₀ g₀ Isp / T)[1 − exp((√(μ/r) − √(μ/r₀))/(Isp g₀))]",note:"低推力螺旋时间闭式解（Curtis 6.39）；标量模型，只给 r(t)。"},{eq:"ṁₑ = T/(Isp g₀)",note:"恒定质量流：算推进剂用量。"}], terms:[["finite burn","推进时间不可忽略的点火"],["tangential steering","推力沿速度方向的导引律"],["spiral","低推力缓慢外螺旋轨道"],["Hall / ion thruster","毫牛级电推进；Isp 高、thrust 小"]], example:"1000 kg、Isp=10,000 s、T=2.5 N 的离子发动机从 6678 km 圆轨道螺旋去 GEO：时间用 Eq 6.39，推进剂用 ṁ=T/(Isp g₀)。", check:{q:"低推力螺旋的典型时间量级是多少？",a:"数周到数月（SMART-1 是 14 个月）；换来的是极高的 Isp 与极少的推进剂。"} },
  { no:14, phase:"WEEK 4 · LUNAR", title:"去月球：Hohmann 基准", goal:"算清地月转移的标准账单，并记住它还不是环月入轨。", plain:["一阶设计把月球轨道简化成半径 D=384,400 km 的圆（真实 e=0.0549，±5.5%）。月球以约 0.55°/h 前进：你飞 66 h，它走约 244,000 km——全程的三分之二。所以要瞄准它将在的位置，不是当前位置。","月球公转速度只有 1.018 km/s；320 km LEO 停泊速度 7.714 km/s。出发时你比目标快 7 倍多，爬升途中逐渐减速去匹配它。","地月 Hohmann：注入 3.101 + 到达 0.830 = 3.931 km/s，飞行 119.5 h ≈ 5 天。最便宜的两 burn 方案，也最慢。","远地点那 0.830 km/s 只是把地心速度匹配到月球公转速度——velocity-matching proxy，不是环月入轨；此刻月球引力还没进模型。","近地点 burn 几乎是远地点的 4 倍：在速度最快处点火改能量最有效（Oberth）。决定推进剂的是 Δv 绝对值；决定轨道改变幅度的是与当地速度之比。"], formulas:[{eq:"v_m = √(μₑ/D) ≈ 1.018 km/s",note:"月球（理想化圆轨道）公转速度。"},{eq:"a_t = (r_p+D)/2 = 195,549 km,  e = 0.96575",note:"地月转移椭圆：近地点贴 LEO，远地点刚好碰到月球轨道。"},{eq:"Δv_total = 3.101 + 0.830 = 3.931 km/s,  t_F = 119.5 h",note:"Hohmann 基准账单：最便宜、最慢。"}], terms:[["D","地月平均距离 384,400 km"],["v_m","月球公转速度 ≈1.018 km/s"],["TLI","translunar injection，近地点注入 burn"],["free return","绕月飞掠把路径弯回地球，无需额外 burn"]], example:"讲义 checkpoint：perigee burn 3.10 是 apogee 0.83 的近 4 倍——大 burn 必须在低速已很高的近地点做；两次都切向（γ 不变），任何不对齐只会增加账单。", check:{q:"到达远地点执行 0.830 km/s 后，算进入月球轨道了吗？",a:"没有。这只是地心速度匹配；月球引力尚未建模，真正的 lunar capture 需要月心双曲线（patched conic）。"} },
  { no:15, phase:"WEEK 4 · LUNAR", title:"注入速度阶梯：110 m/s 决定一切", goal:"理解近地点注入速度的超敏感性与更快转移的真实代价。", plain:["整条椭圆阶梯只跨 110 m/s（约注入速度的 1%）：10.8 到不了；10.8158 Hohmann 119.5 h；10.85 → 66.3 h；10.9 → 52.4 h；10.91 逃逸边界；11.2 双曲线 31 h。","敏感性来自 r_a = p/(1−e)：Hohmann 的 1−e≈0.035，分母极小，近地点速度的微小增加让远地点爆炸式增长。圆整到三位有效数字（10.815）就差 3,400 km。","超过逃逸边界 vp = √(2μe/rp) 后轨道变双曲线：没有远地点，错过月球就永不返回。","Orbit 3 完整演练了整个工具链：vp=10.85 → e=0.978、a=307,104 km（+57%）。令 r=D 解轨道方程得 θ=170.8°（远地点前约 9°）；Kepler 计时得 66.3 h。","到达速度三角形：v=0.881、γ=77.6°——几乎径向撞进月球轨道，而月球沿轨道 γ=0 前进。斜 burn Δv_F=√(v²+v_m²−2v v_m cos γ)=1.195 km/s。多付 10% Δv，时间减半；溢价全在到达端的方向不对齐——切向相切正是 Hohmann 便宜的原因。"], formulas:[{eq:"v_esc,perigee = √(2μₑ/r_p) ≈ 10.91 km/s",note:"逃逸边界：之上无远地点，miss 永不返回。"},{eq:"cos θ = (h²/μₑD − 1)/e",note:"令 r=D 解出穿越月球轨道的真近点角（orbit 3：170.8°）。"},{eq:"t_F = M/n,  M = E − e sin E",note:"Kepler 计时：从近地点到穿越点（orbit 3：66.3 h）。"},{eq:"Δv_F = √(v²+v_m²−2v·v_m cos γ)",note:"到达端斜 burn（余弦定理）；γ 是到达飞行路径角 77.6°。"}], terms:[["injection ladder","近地点速度阶梯：小 Δv 差异决定整条轨道"],["1−e","远地点公式里极小的分母，敏感性的来源"],["velocity triangle","到达点 v_r/v⊥ 分解出的速度三角形"],["oblique burn","速度方向不对齐时的斜向 burn"]], example:"讲义 checkpoint：Hohmann 最后 9.2°（近远地点段）要飞 74 h——Kepler 第二定律，远地点附近最慢；orbit 3 恰在自己远地点前 9° 穿越月球轨道，所以 35 m/s 就把行程砍半。", check:{q:"为什么 10.8 km/s 的注入到不了月球？",a:"e=0.960 时远地点只有 328,175 km，比月球轨道低 56,000 km——航天器在到达 D 之前就先到了远地点并折返。"} },
  { no:16, phase:"WEEK 4 · LUNAR", title:"影响球与拼接圆锥", goal:"掌握 patched conics 的逻辑、SOI 公式和它的诚实边界。", plain:["三体问题没有闭式解；工程折衷是 patched conics：把空间切成各由一个引力体主导的区域，每区解二体圆锥曲线，在边界拼接。地月问题里：SOI 外是地心椭圆，SOI 内是月心双曲线。","SOI 来自“两种描述同等不完美”：令两个摄动失真比相等，得 Laplace 判据 r_SOI = R(m/M)^(2/5)。注意它是失真比的对五次方，不是引力相等点。","月球 RS = 66,183 km = 0.172 D ≈ 38 个月球半径。边界上地球引力其实仍比月球强约 3.5 倍——SOI 是建模边界，不是物理表面，穿越它时“什么都没有发生”。","地球 SOI（对太阳）925,000 km，只占地日距离 0.62%；月球的 17.2% 是全表最差——月心拼接区不再是一个点，这正是 Lecture 5 要用数值积分的原因。","去月球不需要逃逸地球：D 只有地球 SOI 的 42%，orbits 2–4 都是地心椭圆（orbit 5 才是双曲线）；但到达段从月心看是双曲线。","数字直觉：SOI 交点在全程 91% 距离处；边界→近月点 17.5 h，整个无动力穿越约 35 h——约三分之一任务时钟花在一个“边界”里。"], formulas:[{eq:"r_SOI = R (m/M)^(2/5)",note:"Laplace 判据：令两个摄动比 |Ps/AP| 与 |pP/as| 相等。"},{eq:"RS = 0.172 D = 66,183 km",note:"月球影响球：约 38 个月球半径。"},{eq:"|Ps/AP| = (m/M)(R/r)²,  |pP/as| = (M/m)(r/R)³",note:"两个方向的摄动失真比；一个随 r 降，一个随 r 升，只交叉一次。"},{eq:"v₂ = v₁ − v_m",note:"拼接点速度换算：从地心速度减去月球速度得月心速度。"}], terms:[["patched conic","每区一个主导引力体的二体拼接法"],["sphere of influence","两种描述“同等不完美”的边界"],["selenocentric hyperbola","月心到达双曲线"],["ephemeris","天体实际位置的历表；精确设计用它"]], example:"模型自查：v_m 用 μe 算是 1.0183，用 μe+μm=403,503 算是 1.0245，差 0.61%——因为 Δv 在同一个 μe 模型内自洽使用，所以保留 μe：模型内部一致性胜过点精度。", check:{q:"SOI 边界上，地球和月球对航天器的引力相等吗？",a:"不相等——地球仍约 3.5 倍强。SOI 比较的是两种圆锥描述的摄动失真，不是引力大小。"} },
  { no:17, phase:"WEEK 4 · LUNAR", title:"真实任务：四种预算，一个 trade", goal:"把讲义里的任务案例变成可以出题的对照表。", plain:["三大家族：direct 高能 3–6 天（Apollo/Artemis/Chang'e，化学推进）；ballistic/weak-stability 3–4 个月（借太阳引力减速，多数着陆器）；low-thrust 电推进螺旋 13–16 个月（SMART-1）。","Free return：绕月飞掠把路径弯回家，无需额外 burn——Apollo 13 靠它回家；Artemis II（2026）载人重演了这条家族路线。","Artemis II 的 TLI 只有约 0.40 km/s：火箭已把速度买到近逃逸 perigee，顶端阶梯上几百 m/s 就承诺一次登月。","IM-1 Odysseus 的 LOI：800 m/s 进入 92 km 圆轨道（执行到 ±2 m/s）；同一套 patched-conic 方法定价 737 m/s——同一计算，同一量级。","Danuri 与 CAPSTONE 是“时间买 Δv”的极致：BLT 省 165 m/s / 50–150 对 350–550 m/s，代价 4.5 个月；CAPSTONE 由此飞出 Gateway 的 9:2 NRHO。","没有“最好”的任务：每个任务在时间、推进剂、发动机和风险之间优化自己那一行预算。"], terms:[["BLT / WSB","ballistic lunar transfer / weak-stability boundary：借太阳减速的慢路线"],["NRHO 9:2","near-rectilinear halo orbit；九圈 6.6 天极轨对应两个月球月"],["LOI","lunar orbit insertion 环月入轨 burn"],["trade","用时间买推进剂（或反过来）的取舍"]], example:"HGS-1/AsiaSat 3：发动机付不起 51.6° 的平面改变，Hughes 让它绕月两次（6,200 km 与 34,300 km 飞掠），借月球引力转平面——史上最便宜的大平面改变，代价是只剩一半设计寿命。", check:{q:"为什么 CAPSTONE 一个烤箱大小的航天器付得起月球船票？",a:"BLT 用 4.5 个月换 Δv：50–150 m/s 对 direct 的 350–550 m/s——时间买推进剂的极致。"} },
];

const glossary:[string,string,string][] = [
  ["r / r","位置向量 / 轨道半径","km"],["v / v","速度向量 / speed","km/s"],["μ","中心天体引力参数","km³/s²"],["a","半长轴：大小、能量、周期","km"],["e","偏心率：轨道形状","无量纲"],["rₚ / rₐ","近地点 / 远地点半径","km"],["ε","比轨道能","km²/s²"],["T","轨道周期","s"],["Δv","速度向量变化的大小","km/s 或 m/s"],["Isp","比冲","s"],["m₀ / mf","burn 前 / 后质量","kg"],["γ","flight-path angle","rad 或 °"],["θ","真近点角","rad 或 °"],["η","apse-line rotation","rad 或 °"],["g₀","标准重力加速度","9.807 m/s²"],["D","地月平均距离","384,400 km"],["v_m","月球公转速度","1.018 km/s"],["RS / r_SOI","（月球）影响球半径","66,183 km"],["δ","二面角：两轨道面夹角","rad 或 °"],["φ","发射纬度","deg"],["A","发射方位角（自北顺时针）","deg"],["T/m","推重比（有限 burn）","N/kg"]
];

const memoryCards = [
  { no:"01", title:"Impulsive burn", cue:"位置冻结，速度跳变", body:"r⁺ = r⁻；v⁺ = v⁻ + Δv。判断能否采用此模型，看 burn 时间/扫过弧占整圈的比例，而不是死背一个阈值。", key:"题干出现 short burn、instantaneous → 想到 impulsive。" },
  { no:"02", title:"Rocket equation", cue:"Δv 的代价是指数", body:"Δv = Isp g₀ ln(m₀/mf)。Isp 高可省推进剂，但不保证 thrust 大。g₀ 用 m/s² 时，Δv 也必须用 m/s。", key:"题干出现 mass、propellant、Isp → 只找 rocket equation。" },
  { no:"03", title:"Hohmann", cue:"两圆、共面、两次切向 burn", body:"向外：内圈 prograde，外圈再 prograde circularise。若没有第二次 burn，航天器会沿转移椭圆返回。转移时间是转移椭圆半周期。", key:"题干出现 two circular coplanar orbits → Hohmann benchmark。" },
  { no:"04", title:"Bi-elliptic", cue:"三次 burn，用时间换 Δv", body:"先把 apoapsis 推得很高，在低速点便宜地改变轨道，再回到目标圆轨道。<11.94 选 Hohmann；>15.58 才认真考虑 bi-elliptic。", key:"省得通常很少，飞得通常很久。" },
  { no:"05", title:"Apogee ladder", cue:"同一点拆 burn，不自动省 Δv", body:"所有 burn 在同一 periapsis，理想速度增量 telescopes。优势是降低单次 thrust 需求；代价是多圈 coast 和更多操作。", key:"不要和发生在不同位置的 bi-elliptic 混淆。" },
  { no:"06", title:"Phasing", cue:"改周期，不是强行追", body:"追前方目标：retrograde → 较小轨道 → 周期短 → 逐圈追上。等待后方目标则相反。要求越快，周期差与 Δv 通常越大。", key:"题干出现 wrong place at the right orbit → phasing。" },
  { no:"07", title:"Vector Δv", cue:"变化的大小 ≠ 大小的变化", body:"Off-apsis 时 Δv = ‖v₂ − v₁‖，必须考虑 flight-path angle。即使 v₁ = v₂，只改方向仍需要 Δv。", key:"题干出现 off-apse / direction change → law of cosines。" },
  { no:"08", title:"Apse & chase", cue:"交点才能换轨；赶时间会很贵", body:"拱线旋转的直接 burn 必须在两轨道交点。给定两位置与飞行时间则是 Lambert problem；短时间 intercept 往往远贵于耐心 phasing。", key:"two positions + time → Lambert。" },
  { no:"09", title:"Plane change", cue:"交线才能转面；远地点最便宜", body:"单次平面改变只能在两平面交线 BD 上做；Δv=2v sin(δ/2) 与 v 成正比 → 挑速度最低的 apoapsis。要改速度+平面，一次 combined burn 永不更贵（三角不等式）。δ≠倾角直接相加。", key:"题干出现 different planes / inclination change → 交线 + 2v sin(δ/2)。" },
  { no:"10", title:"Launch azimuth", cue:"i 的地板是发射纬度", body:"cos i = cos φ sin A。Due east（A=90°）给 i=φ 且白拿地球自转 0.465cosφ km/s；两个方位角解由 range safety 选。中纬度发射 GEO 必须之后付平面改变（GEO 处 0.352 vs LEO 处 2.498 km/s）。", key:"题干出现 launch site latitude / azimuth → Eq 6.24。" },
  { no:"11", title:"Finite burn & spiral", cue:"推进不能忽略时，推力进方程", body:"burn 时长与周期可比拟时：r̈=−μr/r³+(T/m)v̂，ṁ=−T/(Isp g₀)，数值积分 [r,v,m]。261 s 的 burn 只有 0.02% 推进剂误差但拱线转 8.3°。毫牛级电推进 → 螺旋，Eq 6.39 给时间：省燃料，费数月。", key:"题干出现 ion engine / months of thrusting → spiral Eq 6.39。" },
  { no:"12", title:"Lunar Hohmann", cue:"3.93 km/s，5 天；到达 burn 不是 LOI", body:"LEO(320 km, 7.714) → 转移 vp=10.815, va=0.188：注入 3.101 + 匹配 0.830 = 3.931 km/s，t=119.5 h。月球 0.55°/h 前进 → 瞄准它将在的位置。远地点 burn 只是地心速度匹配，月球引力未建模。", key:"题干出现 Earth–Moon transfer 基准 → 3.931 km/s / 119.5 h。" },
  { no:"13", title:"Injection ladder", cue:"110 m/s 决定到不到得了", body:"10.8 到不了；10.8158→119.5 h；10.85→66.3 h；10.9→52.4 h；10.91=√(2μ/rp) 逃逸边界；11.2 双曲线 31 h。敏感性来自 ra=p/(1−e) 的分母 1−e≈0.035；三位有效数字圆整就差 3,400 km。", key:"题干出现 slight increase in perigee speed → 远地点爆炸 + 逃逸边界。" },
  { no:"14", title:"SOI & patched conic", cue:"建模边界，不是物理表面", body:"rSOI=R(m/M)^(2/5)；月球 66,183 km=0.172D≈38 个月球半径。边界上地球仍拉约 3.5 倍——什么都没发生，只是换哪种圆锥描述更准。月球 17.2% 是最差拼接（地球 0.62%）。去月球不需要逃逸：地心椭圆 + 月心双曲线。", key:"题干出现 sphere of influence → (m/M)^(2/5) + 建模边界。" },
  { no:"15", title:"Mission trades", cue:"时间买 Δv，没有最好只有合适", body:"direct 3–6 天（Apollo/Artemis/Chang'e）；ballistic/WSB 3–4 个月省到达 Δv（Danuri 省 165 m/s）；电推进螺旋 13–16 个月（SMART-1）。CAPSTONE：50–150 vs 350–550 m/s 换 4.5 个月。HGS-1 借月球飞掠转平面。", key:"题干比较 mission families → time-for-Δv trade。" },
];

const formulas = [
  { name:"Rocket equation", eq:"Δv = Isp g₀ ln(m₀/mf)", use:"推进剂质量 / mass ratio", vars:"Isp [s] · g₀ = exhaust velocity" },
  { name:"Vis-viva", eq:"v² = μ(2/r − 1/a)", use:"同一位置比较不同轨道速度", vars:"r = 当前半径；a = 整条轨道半长轴" },
  { name:"Orbital period", eq:"T = 2π √(a³/μ)", use:"Hohmann 时间 / phasing 周期", vars:"a 小 → T 短；a 大 → T 长" },
  { name:"Vector burn", eq:"Δv = √(v₁²+v₂²−2v₁v₂ cosΔγ)", use:"off-apsis 的速度向量差", vars:"Δγ = γ₂ − γ₁" },
  { name:"Pure rotation", eq:"Δv = 2v sin(|Δγ|/2)", use:"speed 不变，只改方向", vars:"plane change 也会出现同一结构" },
  { name:"Energy change", eq:"Δε = vΔv cosα + ½Δv²", use:"Oberth effect / burn 对齐", vars:"α = 原速度与 burn 的夹角" },
  { name:"Radial / transverse", eq:"v_r = (μ/h) e sinθ；v⊥ = (μ/h)(1+e cosθ) = h/r", use:"把 θ 变成速度方向：γ = atan2(v_r, v⊥)", vars:"近地点 θ=0 时 v_r=0" },
  { name:"Non-Hohmann bridge", eq:"e = (r_B−r_A)/(r_A cosθ_A − r_B cosθ_B)", use:"非拱点转移轨道形状（认识即可）", vars:"Hohmann：θ_A=0, θ_B=π" },
  { name:"Plane change (pure)", eq:"Δv = 2v sin(δ/2)", use:"v 不变只转平面；远地点做最便宜", vars:"δ = 二面角，≠ 倾角直接相加" },
  { name:"Combined burn", eq:"Δv_I = √[(v₂−v₁)² + 4v₁v₂ sin²(δ/2)]", use:"同时加速+转平面，永不更贵", vars:"三角不等式：Δv_I ≤ 先转再加速 / 先加速再转" },
  { name:"Dihedral angle", eq:"cos δ = cos i₁cos i₂ + sin i₁sin i₂cos(Ω₂−Ω₁)", use:"从根数算两轨道面夹角", vars:"特例：i₁=0 ⇒ δ=i₂" },
  { name:"Launch azimuth", eq:"cos i = cos φ sin A", use:"发射纬度/方位角 → 可达倾角", vars:"due east A=90° ⇒ i=φ（地板）" },
  { name:"Finite burn", eq:"r̈ = −μr/r³ + (T/m)v̂;  ṁ = −T/(Isp g₀)", use:"推进不可忽略时的增广方程", vars:"数值积分 [r, v, m]" },
  { name:"Low-thrust spiral", eq:"t = (m₀g₀Isp/T)[1−exp((√(μ/r)−√(μ/r₀))/(Isp g₀))]", use:"电推进螺旋到目标半径的时间", vars:"Curtis 6.39；省燃料、费数月" },
  { name:"Sphere of influence", eq:"r_SOI = R (m/M)^(2/5)", use:"拼接边界；月球 RS=66,183 km=0.172D", vars:"Laplace 判据：两种摄动比相等" },
  { name:"Lunar Hohmann bill", eq:"Δv_total = 3.931 km/s;  t_F = 119.5 h", use:"地月转移基准账单", vars:"注入 3.101 + 到达 0.830；到达 burn ≠ LOI" },
  { name:"Oblique arrival burn", eq:"Δv_F = √(v²+v_m²−2v·v_m cos γ)", use:"到达端速度不对齐时的斜 burn", vars:"orbit 3：γ=77.6° → 1.195 km/s" },
  { name:"Escape boundary", eq:"v_esc = √(2μₑ/r_p) ≈ 10.91 km/s", use:"注入阶梯上限：之上无远地点", vars:"错过月球就永不返回" },
];

function formatTime(seconds:number) { const m=Math.floor(seconds/60); const s=seconds%60; return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`; }

const EXAM_SIZE = 20;
function sampleExam():Question[] {
  const pool=[...questions];
  for(let i=pool.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]]; }
  return pool.slice(0,EXAM_SIZE);
}

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
    const stored=window.localStorage.getItem("aero3760-best");
    if(stored) setBest(Number(stored));
    const lessonProgress=window.localStorage.getItem("aero3760-lessons");
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
    if(phase==="result" && mode==="exam" && pool.length===EXAM_SIZE && score>best){ setBest(score); window.localStorage.setItem("aero3760-best",String(score)); }
  },[phase,mode,pool.length,score,best]);

  function start(nextMode:Mode,nextPool:Question[]|null=null){ setMode(nextMode); const chosenPool=nextPool??(nextMode==="exam"?sampleExam():questions); setPool(chosenPool); setAnswers(Array(chosenPool.length).fill(null)); setCurrent(0); setSeconds(1800); setPhase("running"); requestAnimationFrame(()=>document.querySelector("#quiz")?.scrollIntoView({behavior:"smooth"})); }
  function choose(index:number){ if(phase!=="running") return; setAnswers(old=>old.map((value,i)=>i===current?index:value)); }
  function next(){ if(current===pool.length-1) setPhase("result"); else setCurrent(value=>value+1); }
  function reset(){ setPhase("idle"); setPool(questions); setCurrent(0); setAnswers(Array(questions.length).fill(null)); setSeconds(1800); }
  function newOnly(){ start("practice",questions.filter(q=>q.id>20)); }
  function toggleLesson(no:number){
    setCompletedLessons(old=>{
      const next=old.includes(no)?old.filter(item=>item!==no):[...old,no].sort((a,b)=>a-b);
      window.localStorage.setItem("aero3760-lessons",JSON.stringify(next));
      return next;
    });
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top">AERO3760 <span>/ QUIZ LAB</span></a>
        <nav aria-label="页面导航"><a href="#learn">新手课</a><a href="#glossary">变量词典</a><a href="#memory">速记</a><a href="#quiz">模拟题</a><a href="/en">EN</a></nav>
        <div className="exam-chip">目标 · WK8 QUIZ</div>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> ZERO-BASE LEARNING PATH · LECTURES 1–6 · WEEK 8 QUIZ</div>
        <h1>从零学会，<br/><em>再去做 20 题。</em></h1>
        <p className="hero-copy">不假设你记得 Space 1。从“位置、速度和轨道是什么”开始，经轨道机动与平面改变，一路讲到地月转移与影响球。题库已扩到 40 题，模拟考试随机抽 20 题。</p>
        <div className="hero-actions"><a className="primary" href="#start-here">从第 0 课开始 <span>↓</span></a><a className="secondary" href="#quiz">已有基础，直接练题</a></div>
        <div className="hero-stats"><div><b>90</b><span>秒 / 题</span></div><div><b>50%</b><span>官方支持线</span></div><div><b>{best}/20</b><span>本机最佳</span></div></div>
        <div className="orbit-mark" aria-hidden="true"><i/><b/></div>
      </section>

      <section className="scope-strip"><strong>Wk8 Quiz 覆盖：</strong><span>Wk1–3 · 机动基础</span><span>Wk3 L4 · 平面改变 + 发射 + 螺旋</span><span>Wk4 · 地月转移 + SOI</span><small>Wk5+ 讲义发布后继续更新：LOI · powered descent · terramechanics</small></section>

      <section className="start-here-preview section" id="start-here">
        <div className="section-heading"><p>LESSON 00 / START HERE</p><h2>轨道题首先只看两个量</h2><span>先别背公式。把航天器此刻的状态想成地图上的“位置 + 移动箭头”。</span></div>
        <div className="first-lesson-grid">
          <div className="state-visual" aria-label="位置向量和速度向量示意"><i/><b>Earth</b><span className="r-arrow">r · 在哪里</span><span className="v-arrow">v · 往哪走、多快</span></div>
          <div className="first-lesson-copy"><p><strong>r</strong> 是从地心指向航天器的位置向量；它的长度 <strong>|r|</strong> 是轨道半径。</p><p><strong>v</strong> 是速度向量；它同时包含“多快”和“朝哪个方向”。</p><div className="beginner-check"><small>一分钟检查</small><b>高度 400 km 能直接当作 r 吗？</b><span>不能。绕地球时 r = Rₑ + 400 km。</span></div></div>
        </div>
      </section>

      <section className="course section" id="learn">
        <div className="section-heading course-heading"><p>BEGINNER COURSE / {lessons.length} LESSONS</p><h2>按顺序学，不需要任何轨道力学基础</h2><span>每课约 8–12 分钟。先读“人话解释”，再看公式；完成后勾选，进度会保存在这台设备。11–13 课对应 Week 3 Lecture 4，14–17 课对应 Week 4 月球轨迹。</span></div>
        <div className="learning-progress" aria-label={`已完成 ${completedLessons.length} / ${lessons.length} 课`}>
          <div><strong>{completedLessons.length} / {lessons.length}</strong><span>课程完成</span></div>
          <div className="learning-progress-track"><i style={{width:`${(completedLessons.length/lessons.length)*100}%`}} /></div>
          <b>{Math.round(completedLessons.length/lessons.length*100)}%</b>
        </div>
        <div className="roadmap" aria-label="学习路线">
          <article><span>STAGE 1 · 00–03</span><b>先懂轨道</b><p>公式语言 → 自由落体 → 椭圆 → 能量与周期</p></article>
          <article><span>STAGE 2 · 04–08</span><b>再懂机动</b><p>点火 → 燃料 → Hohmann → 替代方案 → Phasing</p></article>
          <article><span>STAGE 3 · 09–10</span><b>最后处理方向</b><p>向量 Δv → 拱线旋转 → Lambert chase</p></article>
          <article><span>STAGE 4 · 11–13</span><b>平面与推力</b><p>平面改变 → 发射方位角 → 有限 burn 与电推进螺旋</p></article>
          <article><span>STAGE 5 · 14–17</span><b>去月球</b><p>地月 Hohmann → 注入阶梯 → 影响球 → 任务案例</p></article>
        </div>
        <div className="lesson-stack">
          {lessons.map(lesson=>{
            const complete=completedLessons.includes(lesson.no);
            return <details className={`lesson-module ${complete?"complete":""}`} key={lesson.no}>
              <summary>
                <span className="lesson-number">{String(lesson.no).padStart(2,"0")}</span>
                <div><small>{lesson.phase}</small><h3>{lesson.title}</h3><p>{lesson.goal}</p></div>
                <b className="lesson-status">{complete?"✓ 已完成":"展开学习 ＋"}</b>
              </summary>
              <div className="lesson-content">
                <div className="plain-language"><span>先用人话理解</span>{lesson.plain.map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div>
                {lesson.formulas&&<div className="lesson-formulas"><span>本课核心公式</span>{lesson.formulas.map(item=><article key={item.eq}><code>{item.eq}</code><p>{item.note}</p></article>)}</div>}
                <div className="lesson-terms"><span>变量与关键词</span><div>{lesson.terms.map(([term,meaning],index)=><article key={`${term}-${index}`}><code>{term}</code><p>{meaning}</p></article>)}</div></div>
                <div className="worked-example"><span>例子</span><p>{lesson.example}</p></div>
                <details className="checkpoint"><summary>先自己回答：{lesson.check.q}</summary><p>{lesson.check.a}</p></details>
                <button className={`lesson-complete ${complete?"done":""}`} onClick={()=>toggleLesson(lesson.no)}>{complete?"✓ 已掌握这课（点击取消）":"标记为已学会"}</button>
              </div>
            </details>;
          })}
        </div>
      </section>

      <section className="glossary section" id="glossary">
        <div className="section-heading"><p>VARIABLE GLOSSARY</p><h2>看见变量，不再猜它是什么意思</h2><span>先认“它是什么”，再认单位。单位不一致，是选择题最常见的失分来源之一。</span></div>
        <div className="glossary-grid">
          {glossary.map(([symbol,meaning,unit])=><article key={symbol}><code>{symbol}</code><p>{meaning}</p><span>{unit}</span></article>)}
        </div>
      </section>

      <section className="memory section" id="memory">
        <div className="section-heading"><p>AFTER LEARNING / MEMORY DECK</p><h2>学懂以后，再把知识压缩成速记卡</h2><span>这里不是起点。完成上面的新手课后，用卡片练习从题干快速认出模型。</span></div>
        <div className="memory-grid">
          {memoryCards.map(card=><details className="memory-card" key={card.no}><summary><span>{card.no}</span><div><h3>{card.title}</h3><p>{card.cue}</p></div><b>＋</b></summary><div className="memory-body"><p>{card.body}</p><strong>{card.key}</strong></div></details>)}
        </div>
      </section>

      <section className="formula section" id="formula">
        <div className="section-heading light"><p>REFERENCE / FORMULA WALL</p><h2>需要时回来查，不必一开始硬背</h2></div>
        <div className="formula-list">
          {formulas.map((item,index)=><article className="formula-row" key={item.name}><span>F{index+1}</span><div><h3>{item.name}</h3><p>{item.use}</p></div><code>{item.eq}</code><small>{item.vars}</small></article>)}
        </div>
      </section>

      <section className="decision section">
        <div className="section-heading"><p>EXAM SKILL / DECISION MAP</p><h2>题目在问哪一种 manoeuvre？</h2></div>
        <div className="decision-grid">
          <div><span>01</span><p>出现 <b>mass / propellant / Isp</b></p><strong>→ Rocket equation</strong></div>
          <div><span>02</span><p>出现 <b>two circular coplanar orbits</b></p><strong>→ Hohmann</strong></div>
          <div><span>03</span><p>轨道正确，但 <b>timing / phase</b> 错</p><strong>→ Phasing</strong></div>
          <div><span>04</span><p>burn 不在 apsis，速度方向改变</p><strong>→ Vector Δv</strong></div>
          <div><span>05</span><p>两条拱线方向不同</p><strong>→ Intersection / apse rotation</strong></div>
          <div><span>06</span><p><b>Two positions + fixed time</b></p><strong>→ Lambert chase</strong></div>
          <div><span>07</span><p>需要<b>改变轨道平面</b></p><strong>→ 交线点 + apoapsis + combined burn</strong></div>
          <div><span>08</span><p>出现 <b>launch site / azimuth</b></p><strong>→ cos i = cos φ sin A</strong></div>
          <div><span>09</span><p>推力持续<b>数周或数月</b></p><strong>→ 低推力螺旋 Eq 6.39</strong></div>
          <div><span>10</span><p><b>Earth → Moon</b> 转移</p><strong>→ Patched conic：地心椭圆 + 月心双曲线 @ RS</strong></div>
          <div><span>11</span><p>要求<b>更短飞行时间</b>去月球</p><strong>→ 提高注入速度；到达端方向溢价</strong></div>
          <div><span>12</span><p>出现 <b>sphere of influence</b></p><strong>→ 换中心天体；rSOI = R(m/M)^(2/5)</strong></div>
        </div>
      </section>

      <section className="traps section">
        <div className="section-heading"><p>EXAM SKILL / TRAP BOARD</p><h2>最容易被选项骗走的十句话</h2></div>
        <ol><li><b>减速不等于长期落后：</b>retrograde 进入低轨后，周期更短，反而逐圈追上前方目标。</li><li><b>speed 不变不等于 Δv 为零：</b>旋转速度向量仍需推进剂。</li><li><b>Hohmann 第二次 burn 不能省：</b>它负责 circularise。</li><li><b>拆成多次 burn 不自动省 Δv：</b>同一 burn point 的理想增量会 telescoping。</li><li><b>高 Isp 不等于高 thrust：</b>推进剂效率与加速快慢是两件事。</li><li><b>高度不是半径：</b>地球题必须先用 r = Rₑ + altitude。</li><li><b>SOI 上不是引力平衡：</b>边界处地球仍比月球强约 3.5 倍；SOI 是建模边界，那里什么都没发生。</li><li><b>去月球不需要逃逸速度：</b>地心段是椭圆；只有月心看到的到达段才是双曲线。</li><li><b>远地点匹配 burn 不是 LOI：</b>0.830 km/s 只是地心速度匹配，月球引力还没进模型。</li><li><b>二面角 ≠ 倾角相加：</b>δ 用球面三角公式算；25° 与 11.8° 之差可以对应 24° 的二面角。</li><li><b>平面改变不要拆两步：</b>combine, don't sequence；并且永远挑 apoapsis。</li><li><b>注入速度的小数点决定一切：</b>110 m/s 覆盖整条椭圆阶梯；三位有效数字圆整就差 3,400 km。</li></ol>
      </section>

      <section className="quiz section" id="quiz">
        {phase==="idle" && <div className="quiz-launch"><p>FINAL STEP / QUIZ ENGINE · {questions.length} QUESTIONS</p><h2>现在把理解变成分数</h2><div className="mode-grid"><button onClick={()=>start("practice")}><span>TRAIN</span><b>训练模式 · 全部 {questions.length} 题</b><small>逐题即时解析 · 不计时</small></button><button onClick={()=>newOnly()}><span>NEW</span><b>只练新内容 · 平面改变 + 月球</b><small>Week 3 L4 + Week 4 的 20 题</small></button><button onClick={()=>start("exam")}><span>SIMULATE</span><b>30 分钟模拟</b><small>40 题随机抽 20 · 提交后统一解析</small></button></div><p className="honor-note">正式 quiz 为 closed book；本页只用于考前练习，考试时请关闭。</p></div>}

        {phase==="running" && active && <div className="quiz-shell">
          <div className="quiz-head"><div><span>{mode==="exam"?"SIMULATION":"TRAINING"}</span><b>{current+1} / {pool.length}</b></div><div className={`timer ${seconds<300?"urgent":""}`}>{mode==="exam"?formatTime(seconds):"解析开启"}</div></div>
          <div className="progress"><i style={{width:`${((current+1)/pool.length)*100}%`}}/></div>
          <div className="question-tag">{active.tag}</div><h3 className="question-text">{active.prompt}</h3>
          <div className="options" role="radiogroup" aria-label="答案选项">{active.options.map((option,index)=>{const show=mode==="practice"&&selected!==null; const state=show?(index===active.answer?"correct":index===selected?"wrong":""):selected===index?"selected":""; return <button className={state} key={option} onClick={()=>choose(index)} role="radio" aria-checked={selected===index}><span>{String.fromCharCode(65+index)}</span><p>{option}</p>{show&&index===active.answer&&<b>✓</b>}{show&&index===selected&&selected!==active.answer&&<b>×</b>}</button>})}</div>
          {mode==="practice"&&selected!==null&&<div className={`explanation ${selected===active.answer?"good":"bad"}`}><strong>{selected===active.answer?"判断正确":"这里容易选错"}</strong><p>{active.why}</p>{active.trap&&<small>陷阱：{active.trap}</small>}</div>}
          <div className="quiz-controls"><button className="ghost" onClick={()=>setCurrent(value=>Math.max(0,value-1))} disabled={current===0}>← 上一题</button><span>{answered} / {pool.length} 已答</span>{mode==="exam"&&current===pool.length-1?<button className="solid" onClick={()=>setPhase("result")}>提交答案</button>:<button className="solid" onClick={next} disabled={mode==="practice"&&selected===null}>{current===pool.length-1?"完成":"下一题 →"}</button>}</div>
          {mode==="exam"&&<div className="question-dots">{pool.map((q,index)=><button key={q.id} aria-label={`前往第 ${index+1} 题`} className={`${index===current?"active":""} ${answers[index]!==null?"done":""}`} onClick={()=>setCurrent(index)}>{index+1}</button>)}</div>}
        </div>}

        {phase==="result" && <div className="result">
          <p>RESULT / DEBRIEF</p><div className="score-line"><div className="score-ring"><strong>{score}</strong><span>/ {pool.length}</span></div><div><h2>{score/pool.length>=.9?"已经进入稳定区。":score/pool.length>=.7?"基础不错，修补错题。":score/pool.length>=.5?"达到支持线，但仍需强化。":"先回到速记卡重新建立判断。"}</h2><p>正确率 {Math.round(score/pool.length*100)}% · 本机完整模拟最佳 {best}/20</p></div></div>
          {wrong.length>0?<div className="review"><h3>错题复盘 · {wrong.length} 题</h3>{wrong.map(q=>{const index=pool.findIndex(item=>item.id===q.id); return <article key={q.id}><span>Q{q.id} · {q.tag}</span><h4>{q.prompt}</h4><p><b>正确：</b>{q.options[q.answer]}</p><p>{q.why}</p>{answers[index]!==null&&<small>你的选择：{q.options[answers[index] as number]}</small>}</article>})}</div>:<div className="perfect">全对。现在休息十分钟，让记忆完成巩固。</div>}
          <div className="result-actions">{wrong.length>0&&<button className="solid" onClick={()=>start("practice",wrong)}>只重做错题</button>}<button className="ghost" onClick={()=>start("exam")}>重新模拟</button><button className="ghost" onClick={reset}>返回复习</button></div>
        </div>}
      </section>

      <footer><div><b>AERO3760</b><span>Lectures 1–6 · Orbit Manoeuvres + Lunar Trajectories · 备战 Week 8 Quiz</span></div><p>考试前练习使用 · 正式 quiz 请遵守 closed-book 规则</p></footer>
    </main>
  );
}

