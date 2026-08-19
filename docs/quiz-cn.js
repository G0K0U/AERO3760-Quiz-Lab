window.QUIZ_DATA = {
  lang: "cn",
  questions: [
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
    { id:20, tag:"LAMBERT", prompt:"Lambert chase problem 的核心已知量是：", options:["两个位置与飞行时间","Isp 与推进剂质量","只有初始速度","J₂ 与倾角"], answer:0, why:"给定 rA、目标未来位置 rB 和 Δt，再选择方向及 revolution count，转移轨道由求解器给出。" }
  ]
};
