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
];

const glossary:[string,string,string][] = [
  ["r / r","位置向量 / 轨道半径","km"],["v / v","速度向量 / speed","km/s"],["μ","中心天体引力参数","km³/s²"],["a","半长轴：大小、能量、周期","km"],["e","偏心率：轨道形状","无量纲"],["rₚ / rₐ","近地点 / 远地点半径","km"],["ε","比轨道能","km²/s²"],["T","轨道周期","s"],["Δv","速度向量变化的大小","km/s 或 m/s"],["Isp","比冲","s"],["m₀ / mf","burn 前 / 后质量","kg"],["γ","flight-path angle","rad 或 °"],["θ","真近点角","rad 或 °"],["η","apse-line rotation","rad 或 °"],["g₀","标准重力加速度","9.807 m/s²"]
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
    if(phase==="result" && pool.length===questions.length && score>best){ setBest(score); window.localStorage.setItem("aero3760-best",String(score)); }
  },[phase,pool.length,score,best]);

  function start(nextMode:Mode,nextPool:Question[]=questions){ setMode(nextMode); setPool(nextPool); setAnswers(Array(nextPool.length).fill(null)); setCurrent(0); setSeconds(1800); setPhase("running"); requestAnimationFrame(()=>document.querySelector("#quiz")?.scrollIntoView({behavior:"smooth"})); }
  function choose(index:number){ if(phase!=="running") return; setAnswers(old=>old.map((value,i)=>i===current?index:value)); }
  function next(){ if(current===pool.length-1) setPhase("result"); else setCurrent(value=>value+1); }
  function reset(){ setPhase("idle"); setPool(questions); setCurrent(0); setAnswers(Array(questions.length).fill(null)); setSeconds(1800); }
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
        <div className="exam-chip">20 AUG · 09:15</div>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> ZERO-BASE LEARNING PATH · LECTURES 1–3</div>
        <h1>从零学会，<br/><em>再去做 20 题。</em></h1>
        <p className="hero-copy">不假设你记得 Space 1。先从“位置、速度和轨道是什么”开始，一层一层建立直觉，最后才进入选择题模拟。</p>
        <div className="hero-actions"><a className="primary" href="#start-here">从第 0 课开始 <span>↓</span></a><a className="secondary" href="#quiz">已有基础，直接练题</a></div>
        <div className="hero-stats"><div><b>90</b><span>秒 / 题</span></div><div><b>50%</b><span>官方支持线</span></div><div><b>{best}/20</b><span>本机最佳</span></div></div>
        <div className="orbit-mark" aria-hidden="true"><i/><b/></div>
      </section>

      <section className="scope-strip"><strong>本次优先：</strong><span>L1 · Rocket + Hohmann</span><span>L2 · Bi-elliptic + Phasing</span><span>L3 · Vector Δv + Apse + Chase</span><small>L4 Plane change 暂不优先</small></section>

      <section className="start-here-preview section" id="start-here">
        <div className="section-heading"><p>LESSON 00 / START HERE</p><h2>轨道题首先只看两个量</h2><span>先别背公式。把航天器此刻的状态想成地图上的“位置 + 移动箭头”。</span></div>
        <div className="first-lesson-grid">
          <div className="state-visual" aria-label="位置向量和速度向量示意"><i/><b>Earth</b><span className="r-arrow">r · 在哪里</span><span className="v-arrow">v · 往哪走、多快</span></div>
          <div className="first-lesson-copy"><p><strong>r</strong> 是从地心指向航天器的位置向量；它的长度 <strong>|r|</strong> 是轨道半径。</p><p><strong>v</strong> 是速度向量；它同时包含“多快”和“朝哪个方向”。</p><div className="beginner-check"><small>一分钟检查</small><b>高度 400 km 能直接当作 r 吗？</b><span>不能。绕地球时 r = Rₑ + 400 km。</span></div></div>
        </div>
      </section>

      <section className="course section" id="learn">
        <div className="section-heading course-heading"><p>BEGINNER COURSE / 11 LESSONS</p><h2>按顺序学，不需要任何轨道力学基础</h2><span>每课约 8–12 分钟。先读“人话解释”，再看公式；完成后勾选，进度会保存在这台设备。</span></div>
        <div className="learning-progress" aria-label={`已完成 ${completedLessons.length} / ${lessons.length} 课`}>
          <div><strong>{completedLessons.length} / {lessons.length}</strong><span>课程完成</span></div>
          <div className="learning-progress-track"><i style={{width:`${(completedLessons.length/lessons.length)*100}%`}} /></div>
          <b>{Math.round(completedLessons.length/lessons.length*100)}%</b>
        </div>
        <div className="roadmap" aria-label="学习路线">
          <article><span>STAGE 1 · 00–03</span><b>先懂轨道</b><p>公式语言 → 自由落体 → 椭圆 → 能量与周期</p></article>
          <article><span>STAGE 2 · 04–08</span><b>再懂机动</b><p>点火 → 燃料 → Hohmann → 替代方案 → Phasing</p></article>
          <article><span>STAGE 3 · 09–10</span><b>最后处理方向</b><p>向量 Δv → 拱线旋转 → Lambert chase</p></article>
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
        </div>
      </section>

      <section className="traps section">
        <div className="section-heading"><p>EXAM SKILL / TRAP BOARD</p><h2>最容易被选项骗走的六句话</h2></div>
        <ol><li><b>减速不等于长期落后：</b>retrograde 进入低轨后，周期更短，反而逐圈追上前方目标。</li><li><b>speed 不变不等于 Δv 为零：</b>旋转速度向量仍需推进剂。</li><li><b>Hohmann 第二次 burn 不能省：</b>它负责 circularise。</li><li><b>拆成多次 burn 不自动省 Δv：</b>同一 burn point 的理想增量会 telescoping。</li><li><b>高 Isp 不等于高 thrust：</b>推进剂效率与加速快慢是两件事。</li><li><b>高度不是半径：</b>地球题必须先用 r = Rₑ + altitude。</li></ol>
      </section>

      <section className="quiz section" id="quiz">
        {phase==="idle" && <div className="quiz-launch"><p>FINAL STEP / QUIZ ENGINE</p><h2>现在把理解变成分数</h2><div className="mode-grid"><button onClick={()=>start("practice")}><span>TRAIN</span><b>训练模式</b><small>逐题即时解析 · 不计时</small></button><button onClick={()=>start("exam")}><span>SIMULATE</span><b>30 分钟模拟</b><small>20 题 · 提交后统一解析</small></button></div><p className="honor-note">正式 quiz 为 closed book；本页只用于考前练习，考试时请关闭。</p></div>}

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

      <footer><div><b>AERO3760</b><span>Orbital Manoeuvres · Lectures 1–3</span></div><p>考试前练习使用 · 正式 quiz 请遵守 closed-book 规则</p></footer>
    </main>
  );
}

