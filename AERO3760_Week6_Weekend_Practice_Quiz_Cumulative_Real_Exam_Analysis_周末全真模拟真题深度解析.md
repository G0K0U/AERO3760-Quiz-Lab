# AERO3760 Space Engineering 2 · Week 6 周末全真模拟真题深度解析 (50 题期中全景)

> **试卷来源**：`Quiz_ Week 6 Weekend Practice Quiz_ Weeks 2 to 6 Cumulative.pdf`  
> **考试规格**：50 题 / 90 分钟 / 满分 85.5 分 / 闭卷 / 禁止使用计算器 / 全概念与定性辨析题（严格按照 Week 8 期中机考真实题型与出题标准定制）  
> **试卷分值架构**：
> - 🟢 **Pass 基础级 (1.0 分 / 题)**：12 题，共 12.0 分 —— 核心物理定义、守恒定律本质、基础二体开普勒判据。
> - 🔵 **Credit 进阶级 (1.5 分 / 题)**：15 题，共 22.5 分 —— 几何缩放律、冲量检验准则、多解数学本质、无量纲基准。
> - 🟣 **Distinction 拔高级 (2.0 分 / 题)**：13 题，共 26.0 分 —— 敏感性极值、非惯性系摄动差消、调相地面碰撞陷阱、工程指标转化。
> - 🔴 **High Distinction 卓越级 (2.5 分 / 题)**：10 题，共 25.0 分 —— 教授五大工程哲学、复合点火二阶微扰、推进剂与轨道解耦、弹道捕获能量转换。  
> **编写标准**：
> 1. **题目中英双语对齐**（精准还原在线机考因矢量 MathJax 遗漏的数学符号如 $\Delta v$、$e$、$I_{sp}$ 等）；
> 2. **正确答案明确加粗标记**，逐项剖析 4 个选项；
> 3. **【0基础白话直观图像】**：以生活直观、物理图像建立秒级解题本能；
> 4. **【教材与讲义精确出处】**：精准定位 Howard D. Curtis 原著第 4 版双轨页码 (**Book p. XXX** / **PDF p. YYY**) 与最新 Lecture 幻灯片；
> 5. **【教授设坑套路剖析】**：精准洞察出题人布置的直觉陷阱与概念混淆诱饵；
> 6. **【考场一秒题眼】**：凝练考场极速秒杀触发词。  
> **KaTeX 规范保障**：严格遵守 Markdown 引用块内单美元符号独立行 `> $\displaystyle ...$` 语法，彻底根除跨行解析吞噬与特殊控制符报错。

---

# 试卷题目全景速览与分阶导航 (Table of Contents)

| 题号 | 分值 | 难度阶梯 (Band) | 核心考点专题 (Topic) | 考场一秒秒杀题眼 |
| :---: | :---: | :---: | :--- | :--- |
| **Q01** | 1.0 pt | 🟢 Pass | [逆行轨道的几何本质定义 (Definition of Retrograde Orbit)](#q1-逆行轨道的几何本质定义 ) | ``retrograde near the Moon` $\to$` |
| **Q02** | 1.0 pt | 🟢 Pass | [地月霍曼转移两次点火的量级对比 (Hohmann Burns Magnitude Comparison)](#q2-地月霍曼转移两次点火的量) | ``Hohmann to lunar distance larger burn` $\to$` |
| **Q03** | 1.0 pt | 🟢 Pass | [冲量机动的理想化假定 (Impulsive Manoeuvre Idealisation)](#q3-冲量机动的理想化假定 () | ``impulsive manoeuvre idealisation assumes` $\to$` |
| **Q04** | 1.0 pt | 🟢 Pass | [齐奥尔科夫斯基火箭方程推进剂指数依赖性 (Rocket Equation Exponential Dependency)](#q4-齐奥尔科夫斯基火箭方程推) | ``rocket equation propellant depends on Delta v` $\to$` |
| **Q05** | 1.5 pt | 🔵 Credit | [冲量模型适用性的首要检验标准 (First Test of Impulsive Burn Validity)](#q5-冲量模型适用性的首要检验) | ``standard first test whether burn modelled as impulsive` $\to$` |
| **Q06** | 1.5 pt | 🔵 Credit | [月球赤道倾角18.6年进动周期之源 (Moon's Inclination 18.6-Year Precession)](#q6-月球赤道倾角18.6年进) | ``Moon's inclination cycles slowly because plane precesses about` $\to$` |
| **Q07** | 1.5 pt | 🔵 Credit | [提前交年月球转移轨道的远地点位置 (Apogee of a Fast Lunar Transfer)](#q7-提前交年月球转移轨道的远) | ``crosses lunar distance well before reaches apogee` $\to$` |
| **Q08** | 1.5 pt | 🔵 Credit | [远离月球时月球直接引力不破坏轨道的机制 (Cancellation of Frame Acceleration)](#q8-远离月球时月球直接引力不) | ``Moon's direct pull does not disturb orbit because` $\to$` |
| **Q09** | 1.5 pt | 🔵 Credit | [束缚轨道的特征能量C3判据 (Characteristic Energy C3 for Bound Orbits)](#q9-束缚轨道的特征能量C3判) | ``bound orbit, however high apoapsis, has characteristic energy` $\to$` |
| **Q10** | 2.0 pt | 🟣 Distinction | [3D地月转移平面构建的几何近似 (3D Lunar Transfer Plane Approximation)](#q10-3D地月转移平面构建的几) | ``3D transfer plane built from parking position and Moon's centre` $\to$` |
| **Q11** | 2.0 pt | 🟣 Distinction | [近地点纯横向加速点火与拱线旋转 (Transverse Burn at Perigee and Apse Line)](#q11-近地点纯横向加速点火与拱) | ``purely transverse burn at perigee` $\to$` |
| **Q12** | 2.0 pt | 🟣 Distinction | [近逃逸速度区间的极端几何敏感性 (Extreme Sensitivity Near Escape Speed)](#q12-近逃逸速度区间的极端几何) | ``perigee speed of lunar transfer raised by few tenths of per cent, apogee rises by` $\to$` |
| **Q13** | 2.0 pt | 🟣 Distinction | [大角度单圈调相轨道的地球撞击陷阱 (Phasing Orbit Earth Surface Collision Trap)](#q13-大角度单圈调相轨道的地球) | ``40 degrees behind closes gap in single revolution destroys vehicle because` $\to$` |
| **Q14** | 2.0 pt | 🟣 Distinction | [霍曼转移自由滑行段的能量转化本质 (Energy Conservation During Hohmann Coast)](#q14-霍曼转移自由滑行段的能量) | ``during unpowered coast spacecraft slows down kinetic energy` $\to$` |
| **Q15** | 2.5 pt | 🔴 High Distinction | [推进剂消耗与轨道响应的物理脱钩 (Propellant vs Orbit Change Scaling)](#q15-推进剂消耗与轨道响应的物) | ``0.83 km/s apogee burn speed by 5.4 vs LEO` $\to$` |
| **Q16** | 2.5 pt | 🔴 High Distinction | [比冲标准重力加速度g0的物理恒定性 (Specific Impulse and Defined g0 Constant)](#q16-比冲标准重力加速度g0的) | ``rated Isp 300 seconds operated in lunar orbit` $\to$` |
| **Q17** | 2.5 pt | 🔴 High Distinction | [前后追赶调相策略的燃耗不对称性 (Phasing Cost Asymmetry: Speed Up vs Slow Down)](#q17-前后追赶调相策略的燃耗不) | ``chaser behind speed up over 2 revs vs slow down over 1` $\to$` |
| **Q18** | 2.5 pt | 🔴 High Distinction | [错失月球时束缚椭圆与双曲线的宿命差异 (Bound Ellipse vs Hyperbola on Missing Moon)](#q18-错失月球时束缚椭圆与双曲) | ``misses Moon bound ellipse vs hyperbolic departure from same perigee` $\to$` |
| **Q19** | 1.0 pt | 🟢 Pass | [二体拼接锥面在影响球内的引力模型 (Gravity Model Inside SOI)](#q19-二体拼接锥面在影响球内的) | ``inside Moon's sphere of influence patched-conic keeps` $\to$` |
| **Q20** | 1.0 pt | 🟢 Pass | [万有引力的距离平方反比衰减本质 (Inverse-Square Gravitational Law)](#q20-万有引力的距离平方反比衰) | ``gravity from a body falls away with distance as` $\to$` |
| **Q21** | 1.0 pt | 🟢 Pass | [月球超前角物理定义 (Definition of Lunar Lead Angle)](#q21-月球超前角物理定义 (D) | ``Moon's lead angle is` $\to$` |
| **Q22** | 1.0 pt | 🟢 Pass | [调相机动的最精确描述 (Phasing Manoeuvre Definition)](#q22-调相机动的最精确描述 () | ``phasing manoeuvre is best described as` $\to$` |
| **Q23** | 1.5 pt | 🔵 Credit | [调相轨道逆向设计的解题逻辑 (Phasing Orbit Sizing Backwards Logic)](#q23-调相轨道逆向设计的解题逻) | ``sizing phasing orbit runs backwards because` $\to$` |
| **Q24** | 1.5 pt | 🔵 Credit | [影响球归一化比值rSOI/D的物理度量意义 (Ranking Hand-offs by r_SOI / D)](#q24-影响球归一化比值rSOI) | ``hand-offs ranked by sphere radius divided by distance rSOI/D because` $\to$` |
| **Q25** | 1.5 pt | 🔵 Credit | [开普勒椭圆轨道比机械能的唯一决定量 (Specific Orbital Energy Dependency)](#q25-开普勒椭圆轨道比机械能的) | ``specific orbital energy of elliptical orbit depends on` $\to$` |
| **Q26** | 1.5 pt | 🔵 Credit | [霍曼转移无量纲归一化基准特性 (Hohmann Dimensionless Benchmark)](#q26-霍曼转移无量纲归一化基准) | ``Hohmann total Delta v fraction of inner circular speed depends only on ratio of radii` $\to$` |
| **Q27** | 1.5 pt | 🔵 Credit | [月球发射窗口三大时钟与18.6年节点进动 (Three Clocks of Lunar Launch Window)](#q27-月球发射窗口三大时钟与1) | ``three clocks sets how far Moon's declination swings from one year to next` $\to$` |
| **Q28** | 2.0 pt | 🟣 Distinction | [辛普森星历拟合误差对近月点的影响机制 (Simpson's Fit and Perilune Error)](#q28-辛普森星历拟合误差对近月) | ``Simpson's fit perilune error` $\to$` |
| **Q29** | 2.0 pt | 🟣 Distinction | [推进剂质量比不能简单线性相加 (Propellant Fractions Cannot Be Linearly Added)](#q29-推进剂质量比不能简单线性) | ``adds propellant fractions of two separate manoeuvres together total is` $\to$` |
| **Q30** | 2.0 pt | 🟣 Distinction | [纯径向点火对轨道形态与角动量的作用特征 (Effects of a Purely Radial Burn)](#q30-纯径向点火对轨道形态与角) | ``purely radial Delta v component` $\to$` |
| **Q31** | 2.0 pt | 🟣 Distinction | [月球出发几何重复周期略慢于停泊周期的物理机制 (Departure Geometry Repeat Period)](#q31-月球出发几何重复周期略慢) | ``launch geometry for lunar departure repeats slightly more slowly than parking orbit period` $\to$` |
| **Q32** | 2.5 pt | 🔴 High Distinction | [闭式角动量公式的两道边界物理本质 (Two Fences of Closed-Form Departure h1)](#q32-闭式角动量公式的两道边界) | ``departure angular momentum has two fences difference is` $\to$` |
| **Q33** | 2.5 pt | 🔴 High Distinction | [月心随动旋转坐标系中拱线固定的非惯性本质 (Apse Line in Moon's Rotating Frame)](#q33-月心随动旋转坐标系中拱线) | ``lunar hyperbola's apse line fixed in frame that turns with Moon is` $\to$` |
| **Q34** | 2.5 pt | 🔴 High Distinction | [双椭圆带变面中转三脉冲的划算临界角 (Bi-elliptic Transfer with Plane Change Break-Even)](#q34-双椭圆带变面中转三脉冲的) | ``three-burn detour raises orbit plane rotation at intermediate apoapsis` $\to$` |
| **Q35** | 1.0 pt | 🟢 Pass | [更快转移轨道所需的月球超前角变化规律 (Faster Transfer and Lunar Lead Angle)](#q35-更快转移轨道所需的月球超) | ``faster transfer flown to Moon's lead angle needed is` $\to$` |
| **Q36** | 1.0 pt | 🟢 Pass | [月球圆轨道速度的物理决定因素 (Speed of Circular Lunar Orbit)](#q36-月球圆轨道速度的物理决定) | ``speed of circular lunar orbit at given radius is set by` $\to$` |
| **Q37** | 1.0 pt | 🟢 Pass | [纯轨道面旋转的最优经济点位 (Cheapest Point for Pure Plane-Change)](#q37-纯轨道面旋转的最优经济点) | ``pure plane-change rotation is cheapest` $\to$` |
| **Q38** | 1.0 pt | 🟢 Pass | [瞄准月心的近月点几何极限 (Perilune of Centered Lunar Approach)](#q38-瞄准月心的近月点几何极限) | ``aimed exactly at Moon's centre perilune radius` $\to$` |
| **Q39** | 1.5 pt | 🔵 Credit | [发射方位角双解的数学本质 (Two Launch Azimuths Origin)](#q39-发射方位角双解的数学本质) | ``azimuth relation gives two launch azimuths second root exists because` $\to$` |
| **Q40** | 1.5 pt | 🔵 Credit | [无动力双曲线飞越渐近速度的标量守恒 (Unpowered Flyby Asymptotic Speed Conservation)](#q40-无动力双曲线飞越渐近速度) | ``Moon-centred two-body unpowered flyby asymptotic speed relative to Moon` $\to$` |
| **Q41** | 1.5 pt | 🔵 Credit | [两体拼接锥线与真三体数值积分的误差分布特征 (Patched Conic vs Numerical Integration Error)](#q41-两体拼接锥线与真三体数值) | ``patched conic and integration disagreement is` $\to$` |
| **Q42** | 1.5 pt | 🔵 Credit | [出发张角与TLI位置角的1对1线性映射 (Dial that Changes Sweep Angle Degree for Degree)](#q42-出发张角与TLI位置角的) | ``dial that changes sweep angle degree for degree` $\to$` |
| **Q43** | 1.5 pt | 🔵 Credit | [地月网关NRHO轨道9比2共振的会合周期本质 (NRHO 9:2 Resonance and Synodic Months)](#q43-地月网关NRHO轨道9比) | ``NRHO's nine-to-two resonance nine orbits fit into` $\to$` |
| **Q44** | 2.0 pt | 🟣 Distinction | [脱靶残差与灵敏度向推进系统指标的工程转化 (Residual Sensitivity to Propulsion Requirement)](#q44-脱靶残差与灵敏度向推进系) | ``reporting residual separation together with sensitivity turns residual into` $\to$` |
| **Q45** | 2.0 pt | 🟣 Distinction | [月心双曲线偏心率与最大偏转角的极值规律 (Hyperbola Eccentricity and Bending Maximisation)](#q45-月心双曲线偏心率与最大偏) | ``eccentricity of lunar hyperbola e = 1 + rp v_inf^2 / mu encounters bend path most` $\to$` |
| **Q46** | 2.0 pt | 🟣 Distinction | [变面工程哲学：结构优于参数精修 (Get Structure Right Before Polishing Variables)](#q46-变面工程哲学：结构优于参) | ``which end burn changes cost by large factor splitting changes little design lesson is` $\to$` |
| **Q47** | 2.0 pt | 🟣 Distinction | [极轨卫星全经度星下点覆盖周期的物理决定量 (Polar Orbit Ground Track Coverage Cycle)](#q47-极轨卫星全经度星下点覆盖) | ``polar ground track lowering altitude time to bring every longitude under track` $\to$` |
| **Q48** | 2.5 pt | 🔴 High Distinction | [复合点火中微小变面角的二阶微扰经济性 (Second-Order Cost of Combined Plane Change)](#q48-复合点火中微小变面角的二) | ``adding small plane rotation to speed burn extra cost enters` $\to$` |
| **Q49** | 2.5 pt | 🔴 High Distinction | [闭式螺旋公式对离子电推进与化学推进的适用性差异 (Edelbaum Spiral: Ion vs Chemical)](#q49-闭式螺旋公式对离子电推进) | ``closed-form spiral assumes local circular speed fair for ion unfair for chemical because` $\to$` |
| **Q50** | 2.5 pt | 🔴 High Distinction | [弱稳定性边界弹道捕获的能量转变物理机制 (Ballistic Capture and Energy Modification)](#q50-弱稳定性边界弹道捕获的能) | ``ballistic capture tool instead of error is` $\to$` |

---

## <a id="q1-逆行轨道的几何本质定义 "></a>Q01 · 🟢 【Pass 级 · 1.0 分】逆行轨道的几何本质定义 (Definition of Retrograde Orbit)

**【英文原题】**:
> An integrated lunar trajectory is reported as retrograde near the Moon. This is a statement about:

**【中文翻译】**:
> 一条经过数值积分计算的地月轨道在接近月球时被报告为“逆行 (Retrograde)”。这描述的是：

**【选项列表 (Options)】**:
- [A] the Moon, which orbits opposite to the craft  
  *(中文: 月球，其公转方向与飞船相反)*
- [B] the craft, which reversed its direction of travel  
  *(中文: 飞船，它掉头反向航行了)*
- [C] the burn, which was applied against the velocity  
  *(中文: 变轨点火，其推力施加方向与速度方向相反)*
- **[D] the local plane's normal against the polar axis**  
  *(中文: 轨道局域平面的法向量与天体极轴方向的夹角关系 (顺行还是逆行))* 👈 **【正确选项】**

> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 在轨道力学中，“顺行（Prograde）”还是“逆行（Retrograde）”从来不是说飞船像汽车倒车一样倒着飞，也不是看发动机往哪喷，而是**纯粹的三维立体空间方向几何**！以中心天体（月球）的北极轴向量 $\mathbf{K}$ 为基准，飞船轨道平面的法向量（角动量向量 $\mathbf{h} = \mathbf{r} \times \mathbf{v}$）如果朝上（$\mathbf{h} \cdot \mathbf{K} > 0$，轨道倾角 $i < 90^\circ$），就叫顺行；如果朝下（$\mathbf{h} \cdot \mathbf{K} < 0$，轨道倾角 $i > 90^\circ$），就叫逆行！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 2, Section 2.11 *Orbital elements*, Book pp. 108–110 (PDF pp. 115–117); Week 5 Lecture 4 & Lecture 5 *Lunar Trajectories*.  
> **【教授设坑套路剖析】**:  
> - 选项 B 是日常直觉陷阱：以为逆行是“倒退航行”，实际上飞船在轨道上一直在向前飞，只是绕月方向与月球自转反向。  
> - 选项 C 混淆了“反向减速点火（Retro-burn / Braking burn）”与“逆行轨道（Retrograde orbit）”。  
> - 选项 A 颠倒了主谓宾，月球没有反向公转。  
> **【考场一秒题眼】**: 看到 `retrograde near the Moon` $\to$ 选 `local plane's normal against the polar axis`。

---

## <a id="q2-地月霍曼转移两次点火的量"></a>Q02 · 🟢 【Pass 级 · 1.0 分】地月霍曼转移两次点火的量级对比 (Hohmann Burns Magnitude Comparison)

**【英文原题】**:
> Of the Hohmann transfer's two burns to lunar distance, the larger is:

**【中文翻译】**:
> 在飞往月球轨道的霍曼转移中，两次点火脉冲里较大的是：

**【选项列表 (Options)】**:
- [A] the apogee burn, by a factor of several  
  *(中文: 远地点点火，且大好几倍)*
- [B] neither; the two burns are very nearly equal  
  *(中文: 都不是；两次点火几乎完全相等)*
- [C] the apogee burn, by a small margin  
  *(中文: 远地点点火，仅稍微大一点)*
- **[D] the perigee burn, by a factor of several**  
  *(中文: 近地点点火，且大好几倍)* 👈 **【正确选项】**

> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 从 300 km 低地球轨道（LEO，半径约 6678 km）出发，圆轨道速度高达 $v_{c1} \approx 7.73\text{ km/s}$。要被甩到 384,400 km 外的月球轨道，近地点第一次点火（TLI）必须加速到 $v_{t1} \approx 10.87\text{ km/s}$，点火增量 $\Delta v_1 \approx 3.14\text{ km/s}$！而当飞船爬升 5 天到达月球距离的远地点时，受地球引力势能消耗，飞船速度已经衰减到慢吞吞的 $v_{t2} \approx 0.19\text{ km/s}$。若在远地点将轨道圆化到月球距离，所需速度为 $v_{c2} \approx 1.02\text{ km/s}$，第二次点火只需 $\Delta v_2 = 1.02 - 0.19 = 0.83\text{ km/s}$。近地点点火（3.14 km/s）是远地点点火（0.83 km/s）的近 **4 倍（a factor of several）**！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.2 *Hohmann transfer*, Book pp. 288–294 (PDF pp. 295–301); Curtis Example 6.1.  
> **【教授设坑套路剖析】**:  
> - 选项 A/C 误以为远地点离地球那么远，肯定需要更强推力把飞船拉平，忽视了活力公式（Vis-viva）决定了在深引力势阱底部的近地点需要注入绝大部分能量。  
> - 选项 B 误记了近圆轨道对称转移的错觉，地月轨道半径比高达 $384400/6678 \approx 57.5$，极不对称。  
> **【考场一秒题眼】**: 看到 `Hohmann to lunar distance larger burn` $\to$ 选 `perigee burn, by a factor of several`。

---

## <a id="q3-冲量机动的理想化假定 ("></a>Q03 · 🟢 【Pass 级 · 1.0 分】冲量机动的理想化假定 (Impulsive Manoeuvre Idealisation)

**【英文原题】**:
> The impulsive manoeuvre idealisation assumes that during a burn:

**【中文翻译】**:
> 冲量机动理想化模型假定在发动机点火期间：

**【选项列表 (Options)】**:
- [A] Both position and velocity change slowly together  
  *(中文: 位置和速度都缓慢协同变化)*
- [B] The position changes instantaneously while the velocity stays fixed  
  *(中文: 位置发生瞬时跳变，而速度保持不变)*
- [C] The spacecraft mass stays constant  
  *(中文: 航天器总质量保持恒定)*
- **[D] The velocity changes instantaneously while the position stays fixed**  
  *(中文: 速度发生瞬时跳变，而空间位置保持连续不变)* 👈 **【正确选项】**

> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 冲量点火的物理假定就两句话：点火发生在电光石火的一瞬间（$\Delta t \to 0$）。飞船在三维空间中根本来不及移位，点火前一微秒与点火后一微秒在同一位置（$\mathbf{r}^+ = \mathbf{r}^-$）；而发动机的推力在瞬时积分成一个速度增量，速度瞬间跳变（$\mathbf{v}^+ = \mathbf{v}^- + \Delta\mathbf{v}$）。  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.1 *Impulsive maneuvers*, Book p. 287 (PDF p. 294).  
> **【教授设坑套路剖析】**:  
> - 选项 B 彻底搞反了位置与速度，空间位置绝不可能瞬移！  
> - 选项 C 违背火箭推进本质，点火必须喷射工质，质量必然减少。  
> - 选项 A 描述的是低推力电推进连续螺旋机动，不是冲量机动。  
> **【考场一秒题眼】**: 看到 `impulsive manoeuvre idealisation assumes` $\to$ 选 `velocity changes instantaneously while position stays fixed`。

---

## <a id="q4-齐奥尔科夫斯基火箭方程推"></a>Q04 · 🟢 【Pass 级 · 1.0 分】齐奥尔科夫斯基火箭方程推进剂指数依赖性 (Rocket Equation Exponential Dependency)

**【英文原题】**:
> For a fixed final mass, the rocket equation makes the propellant a manoeuvre needs depend on $\Delta v$:

**【中文翻译】**:
> 在航天器最终干质量固定的前提下，齐奥尔科夫斯基火箭方程使得机动所需推进剂质量对 $\Delta v$ 的依赖关系表现为：

**【选项列表 (Options)】**:
- [A] in proportion, so twice the $\Delta v$ needs twice the propellant  
  *(中文: 线性正比，速度增量加倍则所需推进剂加倍)*
- [B] through the square, so the cost grows as $\Delta v$ squared  
  *(中文: 平方律关系，成本随速度增量的平方增长)*
- [C] only through the vehicle's dry mass, and not through the burn  
  *(中文: 只取决于干重，与机动点火本身无关)*
- **[D] exponentially, so each further increment costs more than the last**  
  *(中文: 指数关系，因此每多要一点速度增量，推进剂代价都远超前一段)* 👈 **【正确选项】**

> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 齐奥尔科夫斯基火箭方程定义了严酷的“火箭暴政（Tyranny of the Rocket Equation）”：  
> > $\displaystyle m_p = m_f \left[\exp\left(\frac{\Delta v}{I_{sp} g_0}\right) - 1\right]$  
> 由于指数函数 $\exp(x)$ 极度陡峭，为了给飞船多加速 $1\text{ km/s}$，火箭不仅要喷射工质推飞船，还得先带上为了推飞船所需工质的工质！推进剂成本随 $\Delta v$ 指数暴增！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.1, Book p. 288 (PDF p. 295), Eq. 6.6.  
> **【教授设坑套路剖析】**:  
> - 选项 A 是日常最容易犯的线性思维陷阱（误以为加速 2 倍只需要 2 倍燃料）。  
> - 选项 B 混淆了动能公式（$\Delta E_k \propto v^2$）与工质质量关系。  
> **【考场一秒题眼】**: 看到 `rocket equation propellant depends on Delta v` $\to$ 选 `exponentially, so each further increment costs more than the last`。

---

## <a id="q5-冲量模型适用性的首要检验"></a>Q05 · 🔵 【Credit 级 · 1.5 分】冲量模型适用性的首要检验标准 (First Test of Impulsive Burn Validity)

**【英文原题】**:
> The standard first test of whether a burn may be modelled as impulsive is whether:

**【中文翻译】**:
> 检验一次轨道点火是否可以适用冲量模型的标准首选测试法是：

**【选项列表 (Options)】**:
- [A] The orbit is circular  
  *(中文: 轨道是否为圆轨道)*
- [B] The $\Delta v$ is less than one kilometre per second  
  *(中文: 速度增量 $\Delta v$ 是否小于 1 km/s)*
- [C] The engine is chemical rather than electric  
  *(中文: 发动机是化学火箭而不是电推进)*
- **[D] The burn time is a small fraction of the orbital period**  
  *(中文: 点火持续时间是否仅占该轨道周期的一小部分)* 👈 **【正确选项】**

> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 判断点火能不能当作冲量，最核心的物理判据就是**时间占空比**：点火工作时间 $t_{\text{burn}}$ 占整个轨道周期 $T$ 的比例是否极小（$t_{\text{burn}}/T \ll 1$，通常小于 1%~2%）。只有点火时间极短，飞船才来不及在轨道上产生显著位移，点火期间的引力损耗和方向转弯损耗才可以忽略不计。  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.1, Book p. 287 (PDF p. 294); Week 2 Lecture *Orbit Manoeuvres*.  
> **【教授设坑套路剖析】**:  
> - 选项 B 拿具体的数值（1 km/s）做诱饵，实际上阿波罗登月 TLI 点火高达 3.1 km/s 依然完美按冲量处理。  
> - 选项 C 忽视了即便是化学发动机，如果在极低轨道长达几十分钟慢喷，同样不能算冲量。  
> **【考场一秒题眼】**: 看到 `standard first test whether burn modelled as impulsive` $\to$ 选 `burn time is a small fraction of the orbital period`。

---

## <a id="q6-月球赤道倾角18.6年进"></a>Q06 · 🔵 【Credit 级 · 1.5 分】月球赤道倾角18.6年进动周期之源 (Moon's Inclination 18.6-Year Precession)

**【英文原题】**:
> The Moon's inclination to the Earth's equator is not fixed but cycles slowly. That cycle exists because the orbit plane precesses about:

**【中文翻译】**:
> 月球相对于地球赤道的倾角并不是固定的，而是在缓慢周期性变化。这一周期的存在是因为月球轨道面围绕着以下哪个轴进动：

**【选项列表 (Options)】**:
- **[A] the ecliptic normal, once in 18.6 years**  
  *(中文: 黄道面法线（Ecliptic Normal），周期为 18.6 年)* 👈 **【正确选项】**
- [B] the normal to the equator, once a year  
  *(中文: 地球赤道面法线，周期为 1 年)*
- [C] the Earth-Moon line, once every month  
  *(中文: 地月连线，周期为 1 个月)*
- [D] the Earth's polar axis, once in 18.6 years  
  *(中文: 地球自转极轴，周期为 18.6 年)*

> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 太阳巨大的引力摄动对地月系统产生力矩。月球绕地球公转的轨道面（白道面）相对于**黄道面（地球绕太阳公转面）**保持约 $5.14^\circ$ 的恒定夹角。在太阳引力力矩作用下，白道面的法向量像陀螺一样，严格围绕着**黄道面法线（Ecliptic Normal）**做圆锥进动，每 18.6 年（6798天）转一整圈！正是这个绕黄道法线的进动，叠加上地球赤道倾角 $23.44^\circ$，导致月球对地球赤道的倾角在 $23.44^\circ \pm 5.14^\circ \in [18.3^\circ, 28.6^\circ]$ 之间往复摇摆。  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 9, Section 9.3, Book pp. 450–454 (PDF pp. 457–461); Week 6 Thursday Quiz Q2; Week 5 Lecture 5.  
> **【教授设坑套路剖析】**:  
> - 选项 D 是最高频的陷阱！很多人以为既然测量的是对地球赤道的倾角，进动轴就一定是地球自转轴。大错特错！驱动该进动的是太阳引力，因此其进动法线是太阳系的黄道法线！  
> - 选项 B/C 周期量级完全不对。  
> **【考场一秒题眼】**: 看到 `Moon's inclination cycles slowly because plane precesses about` $\to$ 选 `the ecliptic normal, once in 18.6 years`。

---

## <a id="q7-提前交年月球转移轨道的远"></a>Q07 · 🔵 【Credit 级 · 1.5 分】提前交年月球转移轨道的远地点位置 (Apogee of a Fast Lunar Transfer)

**【英文原题】**:
> A transfer crosses lunar distance well before it reaches its own apogee. Its apogee therefore lies:

**【中文翻译】**:
> 一条转移轨道在远未到达自身远地点之前就已经穿越了月球轨道距离。因此它的远地点必定位于：

**【选项列表 (Options)】**:
- [A] exactly at lunar distance, as for Hohmann  
  *(中文: 恰好在月球轨道距离上（如霍曼转移）)*
- [B] at infinity, because the orbit is open  
  *(中文: 在无穷远处，因为轨道是开放的)*
- **[C] beyond the Moon's orbit**  
  *(中文: 远在月球轨道之外 (Beyond the Moon's orbit))* 👈 **【正确选项】**
- [D] inside the Moon's orbit  
  *(中文: 在月球轨道之内)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 根据开普勒椭圆几何，飞船从近地点出发向上爬升，距离地心越来越远，直到真近点角 $\theta = 180^\circ$ 达到自身远地点 $r_a$。如果在到达远地点之前（例如在爬升途中 $\theta < 180^\circ$），距离就已经达到了月球轨道距离 $r_m$，那么由于远地点是该椭圆上距离地心最远的点，远地点距离自然必须大于月球轨道距离（$r_a > r_m$）！这就是工程中常用的“快速大椭圆转移（Fast Transfer）”，通过把远地点甩到月球外侧，换取极短的奔月飞行时间。  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 9, Section 9.2, Book pp. 440–443 (PDF pp. 447–450); Week 4 Lecture 2.  
> **【教授设坑套路剖析】**:  
> - 选项 A 描述的是经典霍曼转移，霍曼转移恰好在远地点交会（$\theta = 180^\circ$），与题干“well before reaches apogee”直接矛盾。  
> - 选项 B 误以为超过月球就是双曲线逃逸，实际上只要 $e < 1$，远地点再远也是有限实数。  
> **【考场一秒题眼】**: 看到 `crosses lunar distance well before reaches apogee` $\to$ 选 `beyond the Moon's orbit`。

---

## <a id="q8-远离月球时月球直接引力不"></a>Q08 · 🔵 【Credit 级 · 1.5 分】远离月球时月球直接引力不破坏轨道的机制 (Cancellation of Frame Acceleration)

**【英文原题】**:
> Far from the Moon, most of the Moon's direct pull on a spacecraft does not disturb the orbit because it is:

**【中文翻译】**:
> 在远离月球时，月球对航天器的绝大部分直接引力并不会扰动航天器绕地球的轨道，这是因为：

**【选项列表 (Options)】**:
- [A] excluded by the sphere of influence itself  
  *(中文: 被影响球本身的边界直接排除了)*
- [B] held central by the Earth's own gravity  
  *(中文: 被地球自身强大的引力强行维持在中心)*
- **[C] cancelled by its pull on the frame's origin**  
  *(中文: 被月球对坐标系原点（地心）的同等牵连拉力所抵消)* 👈 **【正确选项】**
- [D] below the numerical precision of the integrator  
  *(中文: 低于数值积分器的计算精度极限)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 在地心坐标系下写牛顿第二定律时，地心并不是静止惯性系！月球引力既在拉飞船（$\mathbf{F}_{m/s}$），也在同等程度地拼命拉拽地球本身（坐标系原点产生加速度 $\mathbf{a}_{\text{origin}} = \mu_m \frac{\mathbf{r}_m}{r_m^3}$）。当我们把观测基准绑定在地心时，飞船受到的净相对摄动项为：  
> > $\displaystyle \mathbf{p} = \mu_m \left[ \frac{\mathbf{r}_{m/s}}{r_{m/s}^3} - \frac{\mathbf{r}_m}{r_m^3} \right]$  
> 当飞船距离月球还很远时，飞船到月球的距离与地心到月球的距离几乎一样，这两个力在大小和方向上几乎完全等大反向，直接相互抵消（Cancelled by pull on frame's origin）！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 10, Section 10.2, Book pp. 493–498 (PDF pp. 500–505); Week 6 Thursday Quiz Q4; Week 6 Lecture 5.  
> **【教授设坑套路剖析】**:  
> - 选项 A 把影响球当成了物理防空罩，影响球只是人类数学分段计算的虚拟假想球面，真实重力场无处不在。  
> - 选项 B 答非所问。  
> - 选项 D 属于计算机科班学生容易掉入的工程误区。  
> **【考场一秒题眼】**: 看到 `Moon's direct pull does not disturb orbit because` $\to$ 选 `cancelled by its pull on the frame's origin`。

---

## <a id="q9-束缚轨道的特征能量C3判"></a>Q09 · 🔵 【Credit 级 · 1.5 分】束缚轨道的特征能量C3判据 (Characteristic Energy C3 for Bound Orbits)

**【英文原题】**:
> A bound orbit, however high its apoapsis, has a characteristic energy:

**【中文翻译】**:
> 一条被引力束缚的闭合轨道（Bound Orbit），无论其远拱点飞得多高，其特征能量 $C_3$ 必定：

**【选项列表 (Options)】**:
- **[A] C3 less than zero, since a is finite and positive**  
  *(中文: C3 小于零，因为半长轴 a 是有限正数 ($C_3 < 0$))* 👈 **【正确选项】**
- [B] C3 equal to zero, as it is at escape  
  *(中文: C3 等于零，与逃逸状态相同)*
- [C] C3 undefined until the apoapsis has been specified  
  *(中文: C3 无法定义，直到给出确切的远拱点高度)*
- [D] C3 greater than zero, as it is for a hyperbola  
  *(中文: C3 大于零，与双曲线轨道相同)*

> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 航天动力学中的特征能量定义为 $C_3 = v_\infty^2 = 2\varepsilon = -\frac{\mu}{a}$。  
> - 对于所有闭合的椭圆/圆束缚轨道（Bound Orbits），半长轴 $a > 0$，比机械能严格为负（$\varepsilon < 0$），因此其特征能量必定严格小于零：$C_3 < 0$！  
> - 只有在抛物线逃逸边界上，$a \to \infty$，才有 $C_3 = 0$；  
> - 飞出引力势阱的双曲线（Hyperbola），$a < 0$，才有双曲线超额能量 $C_3 > 0$。  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 2, Section 2.8, Book pp. 91–95 (PDF pp. 98–102); Curtis Chapter 8, Book p. 410.  
> **【教授设坑套路剖析】**:  
> - 选项 B/D 误以为远拱点飞得极高就接近逃逸，只要飞船没完全摆脱引力束缚，它就依旧是闭合椭圆，其 $C_3$ 坚决小于 0！  
> **【考场一秒题眼】**: 看到 `bound orbit, however high apoapsis, has characteristic energy` $\to$ 选 `C3 less than zero, since a is finite and positive`。

---

## <a id="q10-3D地月转移平面构建的几"></a>Q10 · 🟣 【Distinction 级 · 2.0 分】3D地月转移平面构建的几何近似 (3D Lunar Transfer Plane Approximation)

**【英文原题】**:
> The 3D transfer plane is built from the parking position and the Moon's centre, not from the crossing itself. That is:

**【中文翻译】**:
> 在三维地月转移设计中，转移轨道平面是由停泊轨道出发点和月球中心确定的，而不是由实际穿越影响球的交点确定的。这是：

**【选项列表 (Options)】**:
- [A] forced by the two-body equations of motion  
  *(中文: 由二体运动方程所严格决定的)*
- [B] a convention, since the crossing is not yet known  
  *(中文: 一种纯粹的人为约定，因为交点尚不知晓)*
- **[C] an approximation the arrival angle later removes**  
  *(中文: 一种工程近似，后续通过到达角（Arrival Angle $\lambda$）加以修正消除)* 👈 **【正确选项】**
- [D] forced, because the craft must fly in the Moon's plane  
  *(中文: 强制性的，因为飞船必须在月球轨道平面内飞行)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 在 3D 拼接锥线设计之初，两点定平面：地心出发点 $\mathbf{r}_0$ 与月球中心位置 $\mathbf{r}_m$ 叉乘定义了初始轨道平面法向量 $\mathbf{h}_1 = \mathbf{r}_0 \times \mathbf{r}_m$。但飞船最终并不是瞄准月球中心撞击，而是在月球影响球边界球面上以交会张角 $\lambda$ 擦过（交点为 $\mathbf{r}_1$）。因此以月球中心构建平面是一个极佳的初始几何近似（Approximation），在下一级计算到达角 $\lambda$ 和月心双曲线交点时，该近似会被精确的几何闭环所消除！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 9, Section 9.3 *Three-dimensional lunar trajectories*, Book pp. 450–455 (PDF pp. 457–462); Week 5 Lecture 5.  
> **【教授设坑套路剖析】**:  
> - 选项 A/D 误以为物理定律强制飞船与月球共面，飞船在三维空间中拥有独立倾角。  
> - 选项 B 将物理建模中的“摄动近似迭代”降级为“随意的人为约定”。  
> **【考场一秒题眼】**: 看到 `3D transfer plane built from parking position and Moon's centre` $\to$ 选 `an approximation the arrival angle later removes`。

---

## <a id="q11-近地点纯横向加速点火与拱"></a>Q11 · 🟣 【Distinction 级 · 2.0 分】近地点纯横向加速点火与拱线旋转 (Transverse Burn at Perigee and Apse Line)

**【英文原题】**:
> A modest purely transverse burn (no radial component) applied at perigee:

**【中文翻译】**:
> 在近地点施加一个适度的纯横向点火（无任何径向速度分量）：

**【选项列表 (Options)】**:
- **[A] Leaves the apse line unmoved**  
  *(中文: 保持拱线（近地点与远地点连线）完全不动)* 👈 **【正确选项】**
- [B] Always circularises the orbit  
  *(中文: 总是使轨道变成正圆)*
- [C] Rotates the apse line anticlockwise  
  *(中文: 使拱线逆时针旋转)*
- [D] Rotates the apse line clockwise  
  *(中文: 使拱线顺时针旋转)*

> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 在近地点时，飞船的径向速度本来就是零（$v_r = 0$，速度方向垂直于矢径）。如果发动机只沿着横向（切向）点火加速，点火后飞船的径向速度依然严格为零（$v_r^+ = 0$）！这意味着该点依然是速度与矢径严格垂直的极值点（Apsis），拱线根本没有发生旋转（Leaves the apse line unmoved），只是远地点的距离被拉高了！要旋转拱线，必须在近地点引入径向速度（$v_r \neq 0$），或者在非拱线位置点火。  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.5 *Apse line rotation*, Book pp. 308–313 (PDF pp. 315–320); Lecture 3 Orbit Manoeuvres.  
> **【教授设坑套路剖析】**:  
> - 选项 B 只有在减速点火恰好将速度降为局部圆速度时才圆化，普通加速只会把轨道拉得更扁。  
> - 选项 C/D 混淆了非横向点火。只有带有向外或向内的径向分量点火，拱线才会顺时针或逆时针转动。  
> **【考场一秒题眼】**: 看到 `purely transverse burn at perigee` $\to$ 选 `Leaves the apse line unmoved`。

---

## <a id="q12-近逃逸速度区间的极端几何"></a>Q12 · 🟣 【Distinction 级 · 2.0 分】近逃逸速度区间的极端几何敏感性 (Extreme Sensitivity Near Escape Speed)

**【英文原题】**:
> The perigee speed of a lunar transfer is raised by a few tenths of a per cent. The apogee rises by:

**【中文翻译】**:
> 一条地月转移轨道的近地点速度仅仅提高了千分之几（零点几个百分点）。其远地点高度将上升：

**【选项列表 (Options)】**:
- [A] the same few tenths of a per cent, in proportion  
  *(中文: 同等比例上升千分之几)*
- [B] a factor of ten, far out beyond the Moon  
  *(中文: 十倍的上升，远超月球)*
- **[C] more than half again, a wholly disproportionate jump**  
  *(中文: 超过一半以上（>50%），呈现完全不成比例的剧烈暴涨)* 👈 **【正确选项】**
- [D] about ten times the speed change, in per cent  
  *(中文: 大约是速度变化百分比的十倍)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 地月转移轨道的近地点速度高达 $v_0 \approx 10.92\text{ km/s}$，而地球逃逸速度是 $v_{\text{esc}} \approx 11.03\text{ km/s}$！两者相差仅仅 $110\text{ m/s}$（1%）。此时轨道处于极限高偏心率区间（$e \approx 0.97$），远地点公式 $r_a = r_p \frac{1+e}{1-e}$ 的分母 $1-e$ 极度接近零！根据能量微分关系：  
> > $\displaystyle \frac{dr_a}{dv_p} \propto \frac{1}{(1-e)^2} \to \infty$  
> 在逃逸悬崖边缘，速度哪怕仅仅提高 0.3%（几米每秒），远地点就会直接从 38 万公里暴涨到 60 万公里以上——**暴涨幅度超过 50%（More than half again）**！极其脆弱敏感！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 9, Section 9.2, Book p. 444 (PDF p. 451); Week 5 Lecture 3.  
> **【教授设坑套路剖析】**:  
> - 选项 A 是经典线性思维陷阱（以为速度变 0.3%，轨道大小也变 0.3%）。  
> - 选项 D 以为是普通的平方关系（十几倍）。这是由于接近分母奇点的指数级非线性发散。  
> **【考场一秒题眼】**: 看到 `perigee speed of lunar transfer raised by few tenths of per cent, apogee rises by` $\to$ 选 `more than half again, a wholly disproportionate jump`。

---

## <a id="q13-大角度单圈调相轨道的地球"></a>Q13 · 🟣 【Distinction 级 · 2.0 分】大角度单圈调相轨道的地球撞击陷阱 (Phasing Orbit Earth Surface Collision Trap)

**【英文原题】**:
> A chaser 40 degrees behind its target in a 300 km circular orbit closes the gap in a single revolution. Every equation is satisfied, yet the manoeuvre destroys the vehicle, because:

**【中文翻译】**:
> 在 300 km 高度的圆轨道上，追踪飞船落后目标飞船 40 度。设计让追踪飞船在单圈（1 圈）之内追平相位差。所有理论公式均满足，但该机动却会彻底摧毁飞船，因为：

**【选项列表 (Options)】**:
- **[A] The free apsis drops below the surface**  
  *(中文: 调相椭圆的自由拱点（近地点）跌落到了地球表面以下)* 👈 **【正确选项】**
- [B] The two burns cannot be executed accurately enough  
  *(中文: 两次点火无法足够精确地执行)*
- [C] The period change violates Kepler's third law  
  *(中文: 周期改变违背了开普勒第三定律)*
- [D] The phasing burn exceeds the engine's thrust limit  
  *(中文: 调相点火超过了发动机的推力极限)*

> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 落后 40 度要想在**仅仅一圈之内**追上，追踪飞船必须大幅缩短自身周期：$\Delta T = \frac{40^\circ}{360^\circ} T_0 = \frac{1}{9} T_0$。周期缩短 11%，半长轴必须缩减 $a_{\text{phase}} = a_0 (8/9)^{2/3} \approx 0.924 a_0$。初始轨道高度才 300 km（$r_0 = 6678\text{ km}$），调相椭圆以原点为远地点，其近地点将暴跌到：  
> > $\displaystyle r_p = 2a_{\text{phase}} - r_0 \approx 2(6170) - 6678 = 5662\text{ km} < R_E (6378\text{ km})$  
> 近地点直接砸进了地球地壳 700 公里深处！飞船一头撞死在地面上。这就是为什么大相位追赶必须分多圈进行！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.3 *Phasing maneuvers*, Book pp. 297–301 (PDF pp. 304–308); Curtis Example 6.4.  
> **【教授设坑套路剖析】**:  
> - 选项 C 拿物理定律当幌子，开普勒定律无论如何都成立。  
> - 选项 B/D 属于机械工程式借口，核心死因是纯轨道几何导致的地面撞击。  
> **【考场一秒题眼】**: 看到 `40 degrees behind closes gap in single revolution destroys vehicle because` $\to$ 选 `free apsis drops below the surface`。

---

## <a id="q14-霍曼转移自由滑行段的能量"></a>Q14 · 🟣 【Distinction 级 · 2.0 分】霍曼转移自由滑行段的能量转化本质 (Energy Conservation During Hohmann Coast)

**【英文原题】**:
> During the unpowered coast between the two Hohmann burns the spacecraft slows down. Its kinetic energy:

**【中文翻译】**:
> 在霍曼转移两次点火之间的无动力滑行段，航天器速度逐渐减慢。它的动能：

**【选项列表 (Options)】**:
- **[A] Is converted to gravitational potential energy**  
  *(中文: 完全转化为了重力势能 (Gravitational Potential Energy))* 👈 **【正确选项】**
- [B] Is lost to drag on the way up  
  *(中文: 在上升途中因大气阻力损耗掉了)*
- [C] Converts to rotational energy of the spacecraft  
  *(中文: 转化为了航天器的自转能量)*
- [D] Was removed by the first burn  
  *(中文: 在第一次点火时就被移除了)*

> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 太空中没有空气阻力，无动力滑行是纯粹的保守引力场运动。机械能守恒：  
> > $\displaystyle \varepsilon = \frac{1}{2}v^2 - \frac{\mu}{r} = \text{常数}$  
> 飞船从低轨道往高轨道爬，引力势能项 $-\mu/r$ 随着距离 $r$ 增大而变大（负得更少）；能量守恒必然要求动能项 $\frac{1}{2}v^2$ 相应减小。动能没有凭空消失，而是实打实地换成了重力势能！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 2, Section 2.7 *Conservation of energy*, Book pp. 88–90 (PDF pp. 95–97); Eq. 2.80.  
> **【教授设坑套路剖析】**:  
> - 选项 B 是常识错误，LEO 之外的大气阻力早已为零。  
> - 选项 D 颠倒黑白，第一次点火是大幅增加动能加速，而不是移除动能。  
> **【考场一秒题眼】**: 看到 `during unpowered coast spacecraft slows down kinetic energy` $\to$ 选 `Is converted to gravitational potential energy`。

---

## <a id="q15-推进剂消耗与轨道响应的物"></a>Q15 · 🔴 【High Distinction 级 · 2.5 分】推进剂消耗与轨道响应的物理脱钩 (Propellant vs Orbit Change Scaling)

**【英文原题】**:
> The 0.83 km/s apogee burn multiplies the spacecraft's speed by 5.4, while the same 0.83 km/s spent in LEO lifts apogee only 1 per cent of the way to the Moon. Which statement is correct?

**【中文翻译】**:
> 在远地点消耗 0.83 km/s 的点火将飞船速度暴增了 5.4 倍；然而把完全相同的 0.83 km/s 用在近地轨道（LEO），只能让远地点升高到月球距离的 1%。下列哪项表述是正确的？

**【选项列表 (Options)】**:
- [A] Both propellant and orbit change follow the ratio to local speed, so the apogee burn is the cheap one  
  *(中文: 推进剂和轨道改变都遵循与局部速度的比例)*
- **[B] Propellant follows the absolute $\Delta v$; orbit change follows $\Delta v$ relative to the local circular speed**  
  *(中文: 推进剂消耗取决于绝对速度增量 $\Delta v$；而轨道形态的剧烈改变取决于 $\Delta v$ 相对局部圆速度的比例)* 👈 **【正确选项】**
- [C] Propellant follows the ratio to local speed; how much the orbit changes follows the absolute $\Delta v$  
  *(中文: 推进剂取决于相对速度比，轨道改变取决于绝对增量)*
- [D] Both propellant and orbit change follow the absolute $\Delta v$, so the two burns are equally effective  
  *(中文: 推进剂和轨道改变都只取决于绝对增量，因此两处点火效果完全相同)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 这是全课最具哲学深度的考点之一！  
> 1. **火箭发动机视角（推进剂）**：齐奥尔科夫斯基方程 $m_p = m_f (e^{\Delta v/v_e} - 1)$ 只看**绝对速度增量 $\Delta v$** 的绝对大小（以 m/s 为单位）。无论在宇宙何处，喷 0.83 km/s 所烧掉的推进剂千克数完全一致！  
> 2. **天体力学视角（轨道形态）**：速度增量能把轨道搅动得多剧烈，取决于该点原有的基准速度！在远地点，原有速度仅 $0.19\text{ km/s}$，0.83 km/s 相当于给了它 5.4 倍的惊人增速；而在 LEO，基准速度高达 $7.8\text{ km/s}$，0.83 km/s 只是毛毛雨（刚过 10%）。所以轨道改变看的是相对比率 $\Delta v / v_c$！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.2 & Section 6.9, Book pp. 288–294; Week 2 Lecture *Orbit Manoeuvres*.  
> **【教授设坑套路剖析】**:  
> - 选项 D 误以为 $\Delta v$ 相同轨道效果就相同，忽视了奥伯特效应（Oberth Effect）与速度基准对轨道形态的非线性放大。  
> - 选项 A 以为在远地点点火烧的推进剂更少，火箭方程绝不认天体位置，只认绝对速度标量！  
> **【考场一秒题眼】**: 看到 `0.83 km/s apogee burn speed by 5.4 vs LEO` $\to$ 选 `Propellant follows absolute Delta v; orbit change follows Delta v relative to local circular speed`。

---

## <a id="q16-比冲标准重力加速度g0的"></a>Q16 · 🔴 【High Distinction 级 · 2.5 分】比冲标准重力加速度g0的物理恒定性 (Specific Impulse and Defined g0 Constant)

**【英文原题】**:
> An engine rated at a specific impulse of 300 seconds is operated in lunar orbit, where local gravity is about one sixth of Earth's. Its specific impulse there is:

**【中文翻译】**:
> 一台额定比冲为 300 秒的火箭发动机在月球轨道上点火运行，月球局部重力仅为地球的六分之一。发动机在月球轨道上的比冲是：

**【选项列表 (Options)】**:
- [A] About 50 seconds, one sixth of the rated value  
  *(中文: 约 50 秒，为额定值的六分之一)*
- **[B] Still 300 seconds: g-nought is a defined constant**  
  *(中文: 依然是 300 秒：g0 是一个国际定义的固定物理常数)* 👈 **【正确选项】**
- [C] Undefined away from sea level on Earth  
  *(中文: 在地球海平面以外的环境中无定义)*
- [D] About 1,800 seconds, six times the rated value  
  *(中文: 约 1,800 秒，为额定值的六倍)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 比冲（Specific Impulse）从热力学本质上讲，是发动机喷气有效排气速度 $v_e$ 的一种传统表达方式：  
> > $\displaystyle I_{sp} = \frac{v_e}{g_0}$  
> 其中的 $g_0$ 根本不是飞船当前所处环境的“局部真实重力”，而是航天工程界人为约定的**地球标准海平面重力加速度常量（$g_0 \equiv 9.80665\text{ m/s}^2$）**！它只是一个将 m/s 转换为“秒”的单位换算比例尺。不管飞船飞到月球、火星还是深空零重力区，$v_e$ 不变，$g_0$ 不变，比冲坚如磐石地依然是 300 秒！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.1, Book p. 288 (PDF p. 295); Eq. 6.7.  
> **【教授设坑套路剖析】**:  
> - 选项 A 是最惨烈的常识陷阱！90% 的初学者都会下意识用月球重力除以 6，导致比冲暴跌到 50 秒。  
> - 选项 D 误用了反比例运算。  
> **【考场一秒题眼】**: 看到 `rated Isp 300 seconds operated in lunar orbit` $\to$ 选 `Still 300 seconds: g-nought is a defined constant`。

---

## <a id="q17-前后追赶调相策略的燃耗不"></a>Q17 · 🔴 【High Distinction 级 · 2.5 分】前后追赶调相策略的燃耗不对称性 (Phasing Cost Asymmetry: Speed Up vs Slow Down)

**【英文原题】**:
> A chaser behind its target may either speed up and close the gap over two revolutions, or slow down and let the target come round to it in one. Both take the same wall-clock time. The slow route:

**【中文翻译】**:
> 位于目标后方的追踪飞船既可以通过两圈内加速追赶，也可以通过减速扩大轨道让目标在一圈内反套圈追上。两者的现实钟表时间相同。采用减速扩大轨道的方案：

**【选项列表 (Options)】**:
- [A] is cheaper, because slowing is always cheaper than speeding up  
  *(中文: 更省燃料，因为减速永远比加速省钱)*
- **[B] costs far more, because it changes the period much further**  
  *(中文: 代价昂贵得多，因为它的轨道周期改变幅度远大于前者)* 👈 **【正确选项】**
- [C] is impossible, since a chaser behind its target must speed up  
  *(中文: 在物理上不可行，因为落后的飞船必须加速)*
- [D] costs the same, since the wait is identical  
  *(中文: 燃耗完全相同，因为所等待的时间一致)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 设目标周期为 $T_0$。追踪飞船如果落后一个较小的角度 $\Delta\theta$：  
> 1. **方案一（两圈追赶）**：追踪飞船每次只要把周期微调一小点 $\delta T = \frac{\Delta\theta}{4\pi} T_0$，飞船稍稍进入低轨道，两圈总共追平 $\Delta\theta$；周期的变动量极小！  
> 2. **方案二（一圈被套圈）**：要让目标在一圈内反过来迎头赶上，追踪飞船必须把周期暴增整整一圈再加上剩余角：$T_{\text{slow}} = T_0 + \frac{2\pi - \Delta\theta}{2\pi} T_0$！周期的偏离量几乎达到了一整个轨道周期！  
> 根据开普勒第三定律 $a \propto T^{2/3}$，周期偏离越远，轨道半长轴改变越大，所需的机动 $\Delta v$ 就会呈爆发式暴增！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.3, Book pp. 297–300 (PDF pp. 304–307); Week 3 Lecture 1.  
> **【教授设坑套路剖析】**:  
> - 选项 D 是典型的钟表时间直觉误区（以为时间一样燃耗就一样）。  
> - 选项 A 凭空捏造“减速比加速省燃料”的荒谬规则。  
> **【考场一秒题眼】**: 看到 `chaser behind speed up over 2 revs vs slow down over 1` $\to$ 选 `costs far more, because it changes the period much further`。

---

## <a id="q18-错失月球时束缚椭圆与双曲"></a>Q18 · 🔴 【High Distinction 级 · 2.5 分】错失月球时束缚椭圆与双曲线的宿命差异 (Bound Ellipse vs Hyperbola on Missing Moon)

**【英文原题】**:
> A spacecraft misses the Moon. Comparing a bound transfer ellipse with a hyperbolic departure from the same perigee:

**【中文翻译】**:
> 航天器完全错失了月球（未进入月球影响球）。对比从同一近地点出发的束缚转移椭圆与双曲线出发轨道：

**【选项列表 (Options)】**:
- [A] both return to perigee, the hyperbola after a longer period because it has climbed higher  
  *(中文: 两者都会返回近地点，双曲线周期更长因为爬得更高)*
- **[B] the bound orbit returns to perigee; the hyperbola does not**  
  *(中文: 束缚椭圆必定会定期返回近地点；而双曲线绝不返回)* 👈 **【正确选项】**
- [C] the hyperbola returns sooner, because it is the more energetic orbit and falls back faster  
  *(中文: 双曲线返回得更快，因为能量更高掉回来更快)*
- [D] neither returns, since both have passed the Moon's orbit and left Earth's domain  
  *(中文: 两者都不返回，因为都超过了月球轨道脱离了地球领域)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 开普勒二体运动轨道的基本拓扑分类：  
> - **束缚椭圆（Bound Ellipse）**：比能量 $\varepsilon < 0$，偏心率 $e < 1$。它是一个封闭的周期性椭圆轨道！即便与月球擦肩而过，只要没有受到外力，飞船在远地点掉头后，历经一个周期 $T = 2\pi\sqrt{a^3/\mu_e}$ 必定精确返回初始近地点。  
> - **双曲线轨道（Hyperbolic Departure）**：比能量 $\varepsilon > 0$（速度超过逃逸速度 $v > v_{\text{esc}}$），偏心率 $e > 1$。这是一条开放的单向发散轨道，飞船一旦飞出就永不回头，直奔深空无穷远，绝对不可能重返近地点！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 2, Section 2.8 & 2.9, Book pp. 91–105 (PDF pp. 98–112); Week 4 Lecture 2.  
> **【教授设坑套路剖析】**:  
> - 选项 D 误以为超过月球轨道就是“脱离地球”，实际上地球真正的拉格朗日引力范围（希尔球 Hill Sphere）远达 150 万公里，38 万公里的月球距离依然深陷在地球束缚区内。  
> - 选项 A 将双曲线的开放轨迹误当成了闭合轨道。  
> **【考场一秒题眼】**: 看到 `misses Moon bound ellipse vs hyperbolic departure from same perigee` $\to$ 选 `bound orbit returns to perigee; the hyperbola does not`。

---

## <a id="q19-二体拼接锥面在影响球内的"></a>Q19 · 🟢 【Pass 级 · 1.0 分】二体拼接锥面在影响球内的引力模型 (Gravity Model Inside SOI)

**【英文原题】**:
> Inside the Moon's sphere of influence the patched-conic model keeps:

**【中文翻译】**:
> 在月球影响球（SOI）内部，二体拼接锥线模型（Patched-conic Model）保留的引力项是：

**【选项列表 (Options)】**:
- [A] neither  
  *(中文: 两者都不保留（无动力匀速直线运动）)*
- **[B] only the Moon's gravity**  
  *(中文: 仅仅保留月球的引力 (Only the Moon's gravity))* 👈 **【正确选项】**
- [C] only the Earth's gravity  
  *(中文: 仅仅保留地球的引力)*
- [D] both, added together  
  *(中文: 将地球与月球的引力叠加保留)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 二体拼接锥线法（Patched-Conic Method）的根本哲学就是“画界分治，非此即彼”：在全宇宙空间中，同一时刻只承认**一个中心天体**！在影响球外，中心天体是地球（只算地心引力，彻底忽略月球）；一旦穿过月球影响球界面，立刻将中心天体切换为月球（只算月心二体双曲线引力，彻底忽略地球）！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 8, Section 8.3 & Chapter 9, Section 9.2, Book pp. 440–442 (PDF pp. 447–449); Week 5 Lecture 2.  
> **【教授设坑套路剖析】**:  
> - 选项 D 是真实三体问题（Numerical 3-Body Problem）的力学方程，二体拼接之所以能够给出解析闭式解，正是因为它坚决不同时计算两个天体引力！  
> **【考场一秒题眼】**: 看到 `inside Moon's sphere of influence patched-conic keeps` $\to$ 选 `only the Moon's gravity`。

---

## <a id="q20-万有引力的距离平方反比衰"></a>Q20 · 🟢 【Pass 级 · 1.0 分】万有引力的距离平方反比衰减本质 (Inverse-Square Gravitational Law)

**【英文原题】**:
> Gravity from a body falls away with distance as:

**【中文翻译】**:
> 一个天体产生的万有引力随距离的增加而衰减的规律是：

**【选项列表 (Options)】**:
- [A] the inverse cube, in the way that tidal effects do  
  *(中文: 距离的三次方反比（如同潮汐效应那样）)*
- [B] an exponential, so it dies away to nothing  
  *(中文: 呈指数衰减，很快彻底消失为零)*
- [C] the inverse of the distance, not of its square  
  *(中文: 距离的一次方反比，而不是平方反比)*
- **[D] the inverse square, so it is weak but never zero**  
  *(中文: 距离的平方反比，因此虽极其微弱但永远不等于零)* 👈 **【正确选项】**

> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 牛顿万有引力定律是神圣的平方反比律（Inverse-square Law）：  
> > $\displaystyle F = G \frac{M m}{r^2} \implies g(r) = \frac{\mu}{r^2}$  
> 只要距离 $r$ 是有限实数，无论飞到几亿公里远，引力永远大于零！它会随着距离平方衰减得极微弱，但数学上只有在 $r \to \infty$ 时才真正趋向于零。  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 1, Section 1.4, Book pp. 5–7 (PDF pp. 12–14); Eq. 1.10.  
> **【教授设坑套路剖析】**:  
> - 选项 A 混淆了潮汐力（Tidal Force $\propto 1/r^3$）与单纯万有引力。  
> - 选项 B 误把大气密度衰减（指数衰减）套到了万有引力上。  
> **【考场一秒题眼】**: 看到 `gravity from a body falls away with distance as` $\to$ 选 `the inverse square, so it is weak but never zero`。

---

## <a id="q21-月球超前角物理定义 (D"></a>Q21 · 🟢 【Pass 级 · 1.0 分】月球超前角物理定义 (Definition of Lunar Lead Angle)

**【英文原题】**:
> The Moon's lead angle is:

**【中文翻译】**:
> 月球超前角（Lead Angle）在物理上的定义是：

**【选项列表 (Options)】**:
- [A] the injection flight path angle, measured from the local horizontal  
  *(中文: 注入点火航向角，从局部水平面起算)*
- [B] the sweep angle of the transfer, measured at Earth between the two ends  
  *(中文: 转移轨道的张角，在地心从起点到终点测量)*
- [C] the arrival angle lambda, measured at the Moon  
  *(中文: 到达角 lambda，在月球处测量)*
- **[D] the angle the Moon sweeps during the coast, $\omega_m \Delta t_1$**  
  *(中文: 飞船滑行奔月期间，月球自身在公转轨道上扫过的角度 $\omega_m \Delta t_1$)* 👈 **【正确选项】**

> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 超前角（Lead Angle）的物理本质就是“提前量”！就像打移动靶一样：猎枪子弹飞到靶心需要 3.2 天时间。这 3.2 天内，月球以公转角速度 $\omega_m \approx 13.18^\circ/\text{天}$ 一直在往前跑。因此火箭瞄准的位置必须比点火瞬间月球所在位置提前一段夹角：  
> > $\displaystyle \theta_{\text{lead}} = \omega_m \Delta t_1$  
> 这个角度就叫月球超前角！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 9, Section 9.2, Book p. 445 (PDF p. 452); Eq. 9.20.  
> **【教授设坑套路剖析】**:  
> - 选项 B 描述的是地心转移张角 $\Delta\theta$（Sweep Angle），两者完全不是一回事。  
> - 选项 A 是航向角 $\gamma_0$。  
> - 选项 C 是月面到达角 $\lambda$。  
> **【考场一秒题眼】**: 看到 `Moon's lead angle is` $\to$ 选 `the angle the Moon sweeps during the coast`。

---

## <a id="q22-调相机动的最精确描述 ("></a>Q22 · 🟢 【Pass 级 · 1.0 分】调相机动的最精确描述 (Phasing Manoeuvre Definition)

**【英文原题】**:
> A phasing manoeuvre is best described as:

**【中文翻译】**:
> 调相机动（Phasing Manoeuvre）最精确的描述是：

**【选项列表 (Options)】**:
- [A] A transfer to a slightly higher orbit  
  *(中文: 转移到一个稍微高一点的轨道)*
- **[B] Two impulses back to the same orbit**  
  *(中文: 通过两次点火脉冲，最终返回到同一轨道 (Two impulses back to the same orbit))* 👈 **【正确选项】**
- [C] A small plane rotation  
  *(中文: 一次微小的轨道平面旋转)*
- [D] The final braking burn of a rendezvous  
  *(中文: 交会对接时的最终刹车点火)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 调相机动的目标非常纯粹：飞船对当前轨道的形状、大小、倾角全都满意，唯独对飞船在轨道上的**时间/相位位置**不满意。因此在点火点 A 施加第一次冲量切入调相椭圆，绕飞一圈或数圈改变经历的总时间，然后再次回到点 A 施加完全等大反向的第二次冲量，重新回到初始轨道！这就是典型的“两次脉冲回原轨（Two impulses back to the same orbit）”。  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.3, Book p. 297 (PDF p. 304).  
> **【教授设坑套路剖析】**:  
> - 选项 A 只完成了前半段，没回原轨就不是调相机动。  
> - 选项 C 混淆了轨道面旋转（Plane change）。  
> **【考场一秒题眼】**: 看到 `phasing manoeuvre is best described as` $\to$ 选 `Two impulses back to the same orbit`。

---

## <a id="q23-调相轨道逆向设计的解题逻"></a>Q23 · 🔵 【Credit 级 · 1.5 分】调相轨道逆向设计的解题逻辑 (Phasing Orbit Sizing Backwards Logic)

**【英文原题】**:
> Sizing a phasing orbit runs "backwards" compared with most orbit problems because you:

**【中文翻译】**:
> 与大多数常规轨道设计问题相比，确定调相轨道尺寸的计算流程之所以被称为“逆向的 (Backwards)”，是因为你：

**【选项列表 (Options)】**:
- [A] Start from the eccentricity and derive the period  
  *(中文: 从偏心率出发推导周期)*
- **[B] Start from the period and derive the axis**  
  *(中文: 从所需周期出发逆推轨道半长轴 (Start from period and derive axis))* 👈 **【正确选项】**
- [C] Start from the $\Delta v$ budget and derive the orbit  
  *(中文: 从速度增量预算出发推导轨道)*
- [D] Solve Kepler's equation in reverse time  
  *(中文: 在负时间方向上求解开普勒方程)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 常规轨道设计（如霍曼转移）：已知空间几何尺寸（初始半径 $r_1$、目标半径 $r_2$），由几何求出半长轴 $a = (r_1+r_2)/2$，最后由半长轴计算耗费的周期时间 $T = 2\pi\sqrt{a^3/\mu}$（几何 $\to$ 时间）。  
> 而调相轨道彻底颠倒了：飞船必须追上的时间差 $\Delta t$ 是由目标相位差在开局就被定死的！你必须**先确定所需的调相周期 $T_{\text{phase}} = T_0 \pm \Delta t$**，然后再利用开普勒第三定律**反求出半长轴**：  
> > $\displaystyle a_{\text{phase}} = \left[\mu \left(\frac{T_{\text{phase}}}{2\pi}\right)^2\right]^{1/3}$  
> 这正是“从时间逆推空间半长轴（Start from period and derive axis）”！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.3, Book pp. 297–299 (PDF pp. 304–306); Week 3 Lecture 1.  
> **【教授设坑套路剖析】**:  
> - 选项 A/C/D 都是常见的推导中间步骤烟雾弹，未能击中其“时间先于几何”的方法论核心。  
> **【考场一秒题眼】**: 看到 `sizing phasing orbit runs backwards because` $\to$ 选 `Start from the period and derive the axis`。

---

## <a id="q24-影响球归一化比值rSOI"></a>Q24 · 🔵 【Credit 级 · 1.5 分】影响球归一化比值rSOI/D的物理度量意义 (Ranking Hand-offs by r_SOI / D)

**【英文原题】**:
> Hand-offs are ranked by the sphere radius divided by the distance to the primary, rather than by the radius itself, because what matters is:

**【中文翻译】**:
> 在引力换手（Hand-offs）分析中，我们通常按照影响球半径与天体间总距离之比（$r_{\text{SOI}}/D$）来排序，而不是看绝对半径大小，因为核心物理关键在于：

**【选项列表 (Options)】**:
- **[A] how much of the journey the boundary region occupies**  
  *(中文: 过渡交接边界区域占据了整个旅程距离的多大比例)* 👈 **【正确选项】**
- [B] how strongly the primary's mass enters the radius  
  *(中文: 主天体的质量对半径产生多大强度的影响)*
- [C] how fast the craft is moving as it crosses over  
  *(中文: 飞船穿越分界面时的航行速度有多快)*
- [D] how accurately the radius is known for each body  
  *(中文: 各个天体的影响球半径测量精度有多高)*

> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 拉普拉斯影响球公式为 $r_{\text{SOI}} = D (m/M)^{2/5}$。若只看绝对尺寸，木星的影响球高达数千万公里，月球仅 6.6 万公里。但无量纲比值：  
> > $\displaystyle \frac{r_{\text{SOI}}}{D} = \left(\frac{m}{M}\right)^{2/5}$  
> 度量的是**整个航行旅途中，有多少比例是在目标天体的主导引力区内度过的**！月球的 $r_{\text{SOI}}/D \approx 66183 / 384400 \approx 17.2\%$，占整个地月距离的近六分之一；而行星际任务中该比例往往不到 1%。比值越大，两体拼接的边界过渡区就越宽厚，三体非惯性摄动对整体轨迹的影响就越不可忽视！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 8, Section 8.3 & Chapter 9, Section 9.2, Book p. 441 (PDF p. 448); Week 4 Lecture 2.  
> **【教授设坑套路剖析】**:  
> - 选项 B 陷入了对质公式变量的机械罗列。  
> - 选项 C 属于无关动态变量。  
> **【考场一秒题眼】**: 看到 `hand-offs ranked by sphere radius divided by distance rSOI/D because` $\to$ 选 `how much of the journey the boundary region occupies`。

---

## <a id="q25-开普勒椭圆轨道比机械能的"></a>Q25 · 🔵 【Credit 级 · 1.5 分】开普勒椭圆轨道比机械能的唯一决定量 (Specific Orbital Energy Dependency)

**【英文原题】**:
> The specific orbital energy of a two-body elliptical orbit depends on:

**【中文翻译】**:
> 二体开普勒椭圆轨道的比机械能（Specific Orbital Energy）仅仅取决于：

**【选项列表 (Options)】**:
- [A] The orientation of the orbit plane  
  *(中文: 轨道平面的空间朝向方位)*
- [B] Where the spacecraft currently is on the orbit  
  *(中文: 航天器当前瞬时在轨道上的具体位置)*
- **[C] The semi-major axis only**  
  *(中文: 且仅取决于轨道半长轴 a (The semi-major axis only))* 👈 **【正确选项】**
- [D] The semi-major axis and the eccentricity  
  *(中文: 半长轴 a 以及偏心率 e 共同决定)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 轨道动力学铁律——活力公式（Vis-viva Equation）：  
> > $\displaystyle \varepsilon = \frac{1}{2}v^2 - \frac{\mu}{r} = -\frac{\mu}{2a}$  
> 这个公式极其霸道：无论飞船在椭圆轨道上运行到近地点、远地点还是任意位置，无论椭圆偏心率 $e$ 是 0（正圆）还是 0.99（极扁），只要半长轴 $a$ 固定，比机械能 $\varepsilon$ 就严格恒定！它**仅仅取决于半长轴 $a$**！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 2, Section 2.7, Book p. 89 (PDF p. 96); Eq. 2.80.  
> **【教授设坑套路剖析】**:  
> - 选项 D 是极度高发的概念混淆项！偏心率 $e$ 决定的是角动量 $h = \sqrt{\mu a (1-e^2)}$，完全不影响总机械能 $\varepsilon$！  
> - 选项 B 违背了能量守恒定律。  
> **【考场一秒题眼】**: 看到 `specific orbital energy of elliptical orbit depends on` $\to$ 选 `The semi-major axis only`。

---

## <a id="q26-霍曼转移无量纲归一化基准"></a>Q26 · 🔵 【Credit 级 · 1.5 分】霍曼转移无量纲归一化基准特性 (Hohmann Dimensionless Benchmark)

**【英文原题】**:
> For a Hohmann transfer between circular orbits, the total $\Delta v$ as a fraction of the inner circular speed depends only on the ratio of the two radii. That makes it:

**【中文翻译】**:
> 对于同心圆轨道间的霍曼转移，其总速度增量占内轨圆速度的比例（$\Delta v_{\text{total}} / v_{c1}$）仅仅取决于内外轨道半径之比 $R = r_2/r_1$。这使得它：

**【选项列表 (Options)】**:
- [A] a quantity independent of the ratio for large transfers  
  *(中文: 在大尺寸转移中与轨道半径比无关的物理量)*
- [B] a result valid only for the Earth's gravitational parameter  
  *(中文: 一个仅仅适用于地球引力常数的结果)*
- **[C] a benchmark that carries across from one body to another**  
  *(中文: 一个可跨越任意中心天体（地球、太阳、月球）通用的普适基准 (A benchmark that carries across from one body to another))* 👈 **【正确选项】**
- [D] a way of finding the flight time without Kepler's equation  
  *(中文: 一种无需开普勒方程直接求解飞行时间的方法)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 根据霍曼转移公式推导：  
> > $\displaystyle \frac{\Delta v_{\text{total}}}{v_{c1}} = \left(\sqrt{\frac{2R}{1+R}} - 1\right) + \frac{1}{\sqrt{R}}\left(1 - \sqrt{\frac{2}{1+R}}\right), \quad R = \frac{r_2}{r_1}$  
> 注意：引力常数 $\mu$ 在分子分母中被完全约掉了！这意味着只要两轨道的半径比值 $R$ 相同（例如外轨半径是内轨的 4 倍），无论是围绕地球从 LEO 到 GEO，还是围绕太阳从地球到火星，亦或围绕木星转移，所需要的无量纲速度比例都是完全一样的定值！它是一个天体之间通用的无量纲工程基准！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.2, Book p. 291 (PDF p. 298); Eq. 6.13.  
> **【教授设坑套路剖析】**:  
> - 选项 B 局限在地球上，忽略了物理方程的无量纲化普适性。  
> - 选项 A 违背了公式对 $R$ 的直接函数依赖。  
> **【考场一秒题眼】**: 看到 `Hohmann total Delta v fraction of inner circular speed depends only on ratio of radii` $\to$ 选 `a benchmark that carries across from one body to another`。

---

## <a id="q27-月球发射窗口三大时钟与1"></a>Q27 · 🔵 【Credit 级 · 1.5 分】月球发射窗口三大时钟与18.6年节点进动 (Three Clocks of Lunar Launch Window)

**【英文原题】**:
> A lunar launch window runs on three clocks. The one that sets how far the Moon's declination swings from one year to the next is:

**【中文翻译】**:
> 地月发射窗口由三座不同周期的“天文时钟”协同驱动。其中决定月球在天球赤纬（Declination）上的摆动幅度年复一年如何变化的是：

**【选项列表 (Options)】**:
- [A] the monthly sweep of the Moon's orbit  
  *(中文: 月球公转轨道的月度运转（约 27.3 天）)*
- [B] the daily rotation of the launch site  
  *(中文: 发射场随地球自转的每日旋转（24 小时）)*
- **[C] the 18.6-year precession of the node**  
  *(中文: 月球轨道升交点 18.6 年的进动周期 (The 18.6-year precession of the node))* 👈 **【正确选项】**
- [D] the yearly motion of the Earth about the Sun  
  *(中文: 地球绕太阳公转的年度运动（365 天）)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 奔月任务的三大时钟节律：  
> 1. **日钟（Daily clock, 24h）**：地球自转带动发射场每天旋转穿过发射平面，决定当天的发射时刻（分秒级窗口）；  
> 2. **月中（Monthly clock, 27.3d）**：月球在白道面上公转一周，决定奔月轨道的相位交会角；  
> 3. **年际大钟（18.6-year node clock）**：月球轨道升交点以 18.6 年周期绕黄道进动，使得月球相对于地球赤道的倾角在 $18.3^\circ$ 到 $28.6^\circ$ 之间长周期慢速摆动，直接决定了每一年月球赤纬的最大跨度！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 9, Section 9.3, Book pp. 450–454 (PDF pp. 457–461); Week 5 Lecture 5.  
> **【教授设坑套路剖析】**:  
> - 选项 A 混淆了短周期（月内赤纬变化）与长周期（年与年之间极值摆动幅度的变化）。  
> - 选项 B 只负责每天发射面的几何对准。  
> **【考场一秒题眼】**: 看到 `three clocks sets how far Moon's declination swings from one year to next` $\to$ 选 `the 18.6-year precession of the node`。

---

## <a id="q28-辛普森星历拟合误差对近月"></a>Q28 · 🟣 【Distinction 级 · 2.0 分】辛普森星历拟合误差对近月点的影响机制 (Simpson's Fit and Perilune Error)

**【英文原题】**:
> A design takes the Moon's state from Simpson's fit and then reports a perilune. The error in that perilune is:

**【中文翻译】**:
> 一项设计采用辛普森星历拟合公式（Simpson's fit）获取月球的状态，进而报告计算得到的近月点高度。该近月点的计算误差：

**【选项列表 (Options)】**:
- [A] smaller, because the patch averages the error out  
  *(中文: 更小，因为拼接过程平均并消除了误差)*
- **[B] set by how strongly the arrival geometry carries it**  
  *(中文: 由到达双曲线几何的灵敏度放大效应所决定 (Set by how strongly the arrival geometry carries it))* 👈 **【正确选项】**
- [C] zero, since the fit was used consistently throughout  
  *(中文: 为零，因为全流程始终使用了相同的拟合)*
- [D] the same size as the error in the Moon's position  
  *(中文: 与月球位置本身的初始误差等大同量级)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 辛普森拟合给出的月球位置和速度存在微小偏差 $\delta \mathbf{r}_m$。这并不是 1:1 地平移到近月点！  
> 在月球影响球边界上，月心双曲线轨道的近月点高度由相对速度大小 $v_\infty$ 和飞越瞄准距 $b$ 决定：$r_p = \frac{\mu_m}{v_\infty^2} \left(\sqrt{1 + \frac{b^2 v_\infty^4}{\mu_m^2}} - 1\right)$。月球位置的微小偏移会改变双曲线渐近线的偏转角，具有极强的偏导数放大因子（Sensitivity Matrix $\partial r_p / \partial \mathbf{r}_m$）！误差最终放大多大，完全取决于**到达双曲线的几何灵敏度**！  
> **【教材与讲义精确出处】**:  
> 📖 Week 5 Lecture 5 *The real Moon: ephemeris, 3D, integration, the patch's true error*.  
> **【教授设坑套路剖析】**:  
> - 选项 D 误以为误差是线性等幅传递的（以为月球位置差 10 km，近月点就刚好差 10 km）。  
> - 选项 C 掩耳盗铃，计算的一致性不能消除经验拟合与真实引力场的偏差。  
> **【考场一秒题眼】**: 看到 `Simpson's fit perilune error` $\to$ 选 `set by how strongly the arrival geometry carries it`。

---

## <a id="q29-推进剂质量比不能简单线性"></a>Q29 · 🟣 【Distinction 级 · 2.0 分】推进剂质量比不能简单线性相加 (Propellant Fractions Cannot Be Linearly Added)

**【英文原题】**:
> A report adds the propellant fractions of two separate manoeuvres together to give the mission total. That total is:

**【中文翻译】**:
> 一份工程报告将两次独立变轨机动的推进剂质量比（Propellant Fractions）直接简单相加作为全任务总消耗比。这个总数：

**【选项列表 (Options)】**:
- [A] correct only if both burns are made by the same engine  
  *(中文: 只有在两次点火由同一发动机完成时才正确)*
- **[B] wrong, because each fraction is taken of a different mass**  
  *(中文: 是错误的，因为每个质量分数所除以的基准质量完全不同 (Wrong, because each fraction is taken of a different mass))* 👈 **【正确选项】**
- [C] correct, since propellant fractions add like propellant masses  
  *(中文: 是正确的，因为推进剂质量分数像质量一样可以直接累加)*
- [D] wrong, because the two fractions must be averaged instead  
  *(中文: 是错误的，因为这两个分数必须取平均值)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 推进剂质量分数定义为消耗的工质占点火前总质量的百分比：  
> - 第一次点火消耗比：$f_1 = \frac{\Delta m_1}{m_0}$；  
> - 第一次点火后，飞船变轻了，剩余质量为 $m_1 = m_0 - \Delta m_1$；  
> - 第二次点火消耗比：$f_2 = \frac{\Delta m_2}{m_1}$。  
> 全任务总消耗比是 $f_{\text{total}} = \frac{\Delta m_1 + \Delta m_2}{m_0}$！显然：  
> > $\displaystyle \frac{\Delta m_1 + \Delta m_2}{m_0} = f_1 + f_2 \frac{m_1}{m_0} = f_1 + f_2 (1 - f_1) \neq f_1 + f_2$  
> 直接相加严重高估了燃料消耗，是低级数学错误！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.1, Book p. 288 (PDF p. 295); Eq. 6.4.  
> **【教授设坑套路剖析】**:  
> - 选项 C 混淆了绝对推进剂质量（$\Delta m_1 + \Delta m_2$，可加）与无量纲百分比（分母不同，不可加）。  
> - 选项 D 取平均值更是毫无物理根据的胡乱操作。  
> **【考场一秒题眼】**: 看到 `adds propellant fractions of two separate manoeuvres together total is` $\to$ 选 `wrong, because each fraction is taken of a different mass`。

---

## <a id="q30-纯径向点火对轨道形态与角"></a>Q30 · 🟣 【Distinction 级 · 2.0 分】纯径向点火对轨道形态与角动量的作用特征 (Effects of a Purely Radial Burn)

**【英文原题】**:
> A purely radial $\Delta v$ component:

**【中文翻译】**:
> 施加一个纯径向的速度增量分量（Purely Radial $\Delta v$）：

**【选项列表 (Options)】**:
- [A] Changes nothing at all about the orbit  
  *(中文: 对轨道的任何参数都不产生改变)*
- [B] Changes only the period of the orbit  
  *(中文: 仅仅改变轨道的周期)*
- **[C] Changes the shape, not the angular momentum**  
  *(中文: 改变轨道的形状（和能量），但不改变角动量 (Changes the shape, not the angular momentum))* 👈 **【正确选项】**
- [D] Changes only the angular momentum of the orbit  
  *(中文: 仅仅改变轨道的角动量)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 1. **角动量角度**：矢径 $\mathbf{r}$ 与速度增量 $\Delta\mathbf{v}_r$ 严格共线平行，叉乘恒等于零：  
> > $\displaystyle \Delta\mathbf{h} = \mathbf{r} \times \Delta\mathbf{v}_r = \mathbf{0}$  
> 因此纯径向点火**绝对无法改变角动量 $h$**！  
> 2. **能量与形状角度**：点火增加了径向速度分量 $v_r^+ = v_r^- + \Delta v_r$，使得总合速度标量 $v = \sqrt{v_r^2 + v_\theta^2}$ 增大，机械能 $\varepsilon = v^2/2 - \mu/r$ 增大，半长轴 $a = -\mu/(2\varepsilon)$ 变大，由 $h^2 = \mu a(1-e^2)$ 必然导致偏心率 $e$ 和拱线朝向发生变化！改变了形状，但绝不改变角动量！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.5, Book pp. 308–311 (PDF pp. 315–318); Week 2 Lecture 4.  
> **【教授设坑套路剖析】**:  
> - 选项 D 彻底搞反了，角动量只受横向切向分量改变。  
> - 选项 A/B 忽略了活力公式对速度大小的响应。  
> **【考场一秒题眼】**: 看到 `purely radial Delta v component` $\to$ 选 `Changes the shape, not the angular momentum`。

---

## <a id="q31-月球出发几何重复周期略慢"></a>Q31 · 🟣 【Distinction 级 · 2.0 分】月球出发几何重复周期略慢于停泊周期的物理机制 (Departure Geometry Repeat Period)

**【英文原题】**:
> The launch geometry for a lunar departure repeats slightly more slowly than the parking orbit's own period, because:

**【中文翻译】**:
> 地月转移出发点火的几何对准时机，其重复出现的周期比停泊轨道自身的公转周期要稍慢一点（稍长一点），这是因为：

**【选项列表 (Options)】**:
- [A] the Earth rotates beneath the orbit, so the launch site drifts east each pass  
  *(中文: 地球在轨道下方自转，导致发射场每圈向东漂移)*
- [B] the parking orbit decays under drag, lengthening every revolution  
  *(中文: 停泊轨道受阻力衰减，导致每圈周期变长)*
- **[C] the Moon moves on between revolutions, so the craft must catch the new geometry**  
  *(中文: 在飞船绕飞一圈期间月球自身又往前走了一段，飞船必须多飞一点才能迎头对准新的出发几何)* 👈 **【正确选项】**
- [D] the sphere of influence moves, changing the arrival angle each pass  
  *(中文: 影响球移动改变了每圈的到达角)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 飞船在低地停泊轨道绕一圈大约需要 90 分钟。在这 90 分钟里，月球并不是木雕泥塑，它以约 $13.2^\circ/\text{天}$（约每 90 分钟走 $0.83^\circ$）的速度持续在白道面上逆时针向前公转！  
> 飞船飞完 $360^\circ$ 回到原空间位置时，月球已经溜走了近 1 度！飞船必须在这个 90 分钟周期之外，再多花大约一两分钟时间往前追上这 $0.83^\circ$ 的新几何超前角，才能重新与月球构成精确的共面或交会点火几何。因此重复周期必定略大于停泊轨道自身周期！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 9, Section 9.2, Book pp. 444–446 (PDF pp. 451–453); Week 5 Lecture 3.  
> **【教授设坑套路剖析】**:  
> - 选项 A 解释的是发射场每天的窗口，而题干问的是在太空停泊轨道上的出发点火时机（与地面发射场无关）。  
> - 选项 B 阻力衰减只会使轨道变低、周期变短，因果全反。  
> **【考场一秒题眼】**: 看到 `launch geometry for lunar departure repeats slightly more slowly than parking orbit period` $\to$ 选 `Moon moves on between revolutions, so craft must catch the new geometry`。

---

## <a id="q32-闭式角动量公式的两道边界"></a>Q32 · 🔴 【High Distinction 级 · 2.5 分】闭式角动量公式的两道边界物理本质 (Two Fences of Closed-Form Departure h1)

**【英文原题】**:
> The closed-form expression for the departure angular momentum has two fences. At one the required $h_1$ goes to infinity; at the other the departure conic reaches $e = 1$. The difference is:

**【中文翻译】**:
> 闭式出发角动量解析公式（Curtis Eq. 9.18）存在两个物理边界（Fences）：在一个边界上所需角动量 $h_1 \to \infty$；在另一个边界上出发圆锥曲线达到 $e = 1$。两者的物理差异是：

**【选项列表 (Options)】**:
- **[A] at one fence no conic reaches $r_1$; at the other one does, but it is open**  
  *(中文: 在一道边界处没有任何圆锥曲线能到达目标半径 $r_1$；在另一道边界处轨道能够到达 $r_1$，但轨道是开放的抛物线/双曲线)* 👈 **【正确选项】**
- [B] the ellipse fence sits at $\gamma_0 = 0$, where the departure is tangential and the sweep is 180 degrees  
  *(中文: 椭圆边界位于航向角为零处，出发是切向的且张角为 180 度)*
- [C] none: the two fences coincide, because an infinite $h_1$ is the same thing as $e = 1$  
  *(中文: 没有区别：两个边界完全重合，因为角动量无穷大等同于偏心率为 1)*
- [D] the denominator fence applies only to hyperbolas, since an ellipse always has a finite $h_1$  
  *(中文: 分母边界仅适用于双曲线，因为椭圆角动量永远有限)*

> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> Curtis Eq. 9.18 闭式解：  
> > $\displaystyle h_1 = \sqrt{\frac{2\mu_e r_0 r_1 (1 - \cos\Delta\theta)}{r_1^2 - r_0^2 \cos^2\Delta\theta - 2 r_0 r_1 \sin\Delta\theta \tan\gamma_0}}$  
> 这两道“防线（Fences）”具有极其分明的物理图像：  
> 1. **分母判别式防线（$h_1 \to \infty$）**：分母等于零时，$h_1$ 发散到无穷。几何上意味着在给定的张角 $\Delta\theta$ 和航向角 $\gamma_0$ 下，**没有任何一条物理轨道在几何上能够连接起点 $r_0$ 和月球影响球边界 $r_1$**！  
> 2. **偏心率防线（$e = 1$）**：此时轨道恰好越过闭合椭圆，变为抛物线逃逸。它在几何上**完全能够飞抵 $r_1$**，只不过轨道不再闭合，无法形成周期束缚！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 9, Section 9.2, Book p. 444 (PDF p. 451); Week 5 Lecture 3 Slides 13–14.  
> **【教授设坑套路剖析】**:  
> - 选项 C 荒谬，无穷大角动量绝不等于 $e=1$（抛物线角动量 $h = \sqrt{2\mu r_p}$ 是完全有限的实数）。  
> - 选项 B 局限在霍曼特殊情况。  
> **【考场一秒题眼】**: 看到 `departure angular momentum has two fences difference is` $\to$ 选 `at one fence no conic reaches r1; at the other one does, but it is open`。

---

## <a id="q33-月心随动旋转坐标系中拱线"></a>Q33 · 🔴 【High Distinction 级 · 2.5 分】月心随动旋转坐标系中拱线固定的非惯性本质 (Apse Line in Moon's Rotating Frame)

**【英文原题】**:
> Holding the lunar hyperbola's apse line fixed in the frame that turns with the Moon is:

**【中文翻译】**:
> 在随月球公转一起转动的旋转坐标系中，将月心双曲线轨道的拱线假定为固定不变，这是：

**【选项列表 (Options)】**:
- [A] exact, because an apse line is fixed in any frame  
  *(中文: 精确无误的，因为拱线在任何坐标系下都是固定的)*
- **[B] an approximation, since that frame is not inertial**  
  *(中文: 一种工程近似，因为该旋转坐标系并不是惯性参考系 (An approximation, since that frame is not inertial))* 👈 **【正确选项】**
- [C] a change of coordinates, so it costs nothing  
  *(中文: 一种纯粹的坐标变换，不产生任何物理代价)*
- [D] required, or angular momentum is not conserved  
  *(中文: 强制要求的，否则角动量将不守恒)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 牛顿二体开普勒定律（拱线固定不动）**只在非旋转的牛顿惯性坐标系（Inertial Frame）中才严格成立**！  
> 随月球转动的坐标系以月球公转角速度 $\omega_m$ 持续旋转，它是一个含有离心力与科里奥利力（Coriolis Force）的**非惯性坐标系**。在旋转系中，真实的双曲线轨迹会发生弯折和进动。工程计算之所以在拼接锥线中强行把月心双曲线拱线当成固定的二体曲线，完全是为了获取解析解而做出的**动力学简化近似（Approximation）**！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 9, Section 9.2 & Chapter 10, Section 10.2; Week 5 Lecture 4.  
> **【教授设坑套路剖析】**:  
> - 选项 A 忽视了“坐标系惯性”的绝对前提，非惯性系下质点连受力都要补上虚拟惯性力。  
> - 选项 C 把物理动力学的实质简化粉饰成了无痛的几何平移。  
> **【考场一秒题眼】**: 看到 `lunar hyperbola's apse line fixed in frame that turns with Moon is` $\to$ 选 `an approximation, since that frame is not inertial`。

---

## <a id="q34-双椭圆带变面中转三脉冲的"></a>Q34 · 🔴 【High Distinction 级 · 2.5 分】双椭圆带变面中转三脉冲的划算临界角 (Bi-elliptic Transfer with Plane Change Break-Even)

**【英文原题】**:
> A three-burn detour that raises the orbit and puts the whole plane rotation at an intermediate apoapsis:

**【中文翻译】**:
> 采用三脉冲“绕道大椭圆”方案：先将轨道抬升至极高的中间远地点，在那里执行全部轨道变面，最后在目标轨道圆化。这种方案：

**【选项列表 (Options)】**:
- [A] never pays, because the detour adds two burns and a long flight  
  *(中文: 永远不划算，因为绕道凭空增加了两次点火和漫长飞行)*
- **[B] pays only above a break-even angle set by the radii involved**  
  *(中文: 只有当轨道变面角超过由涉及半径比决定的盈亏临界角时才划算 (Pays only above a break-even angle))* 👈 **【正确选项】**
- [C] pays at every angle, because apoapsis is always the slowest point  
  *(中文: 在任何角度下都永远划算，因为远地点总是最慢的点)*
- [D] pays below a break-even angle and stops paying above it  
  *(中文: 在小于临界角时划算，超过后不再划算)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 纯平面变面公式 $\Delta v_{\text{plane}} = 2 v \sin(\theta/2)$ 告诉我们：变面在速度极慢的极高远地点做是极度廉价的。但是，把飞船送到远地点需要一次加速点火，从远地点降下来又需要一次点火，这两次升降轨带来了固定的“门票开销”。  
> - 如果变面角 $\theta$ 很小（例如 $5^\circ$），直接在低轨变面代价很小，不值得大费周章绕远路；  
> - 只有当变面角 $\theta$ 超过某个**临界平衡角（Break-even angle，通常在 $40^\circ \sim 60^\circ$ 以上）**时，在高远地点省下的巨额变面燃料才能彻底覆盖两次升降轨的门票开销！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.7 *Bi-elliptic transfer with plane change*, Book pp. 319–322 (PDF pp. 326–329).  
> **【教授设坑套路剖析】**:  
> - 选项 C 忽视了两次抬轨降轨的固有代价。  
> - 选项 D 彻底把临界角的判定方向搞反了（大角度才划算，而不是小角度）。  
> **【考场一秒题眼】**: 看到 `three-burn detour raises orbit plane rotation at intermediate apoapsis` $\to$ 选 `pays only above a break-even angle set by the radii involved`。

---

## <a id="q35-更快转移轨道所需的月球超"></a>Q35 · 🟢 【Pass 级 · 1.0 分】更快转移轨道所需的月球超前角变化规律 (Faster Transfer and Lunar Lead Angle)

**【英文原题】**:
> A faster transfer is flown to the same crossing on the sphere of influence. The Moon's lead angle needed for it is:

**【中文翻译】**:
> 采用一条飞行速度更快的转移轨道飞往月球影响球上的同一个交会点。该任务所需的月球超前角将：

**【选项列表 (Options)】**:
- **[A] smaller, because the Moon sweeps less during a shorter coast**  
  *(中文: 更小，因为在更短的滑行时间内月球公转扫过的角度更少 (Smaller, because Moon sweeps less during shorter coast))* 👈 **【正确选项】**
- [B] larger, because the craft covers the distance more quickly  
  *(中文: 更大，因为飞船覆盖距离更迅速)*
- [C] unchanged, since the Moon's own rate is what sets it  
  *(中文: 保持不变，因为月球自身的公转角速度是恒定的)*
- [D] unchanged, since the lead angle is fixed by the geometry  
  *(中文: 保持不变，因为超前角是由空间几何固定的)*

> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 超前角公式为 $\theta_{\text{lead}} = \omega_m \Delta t_1$。  
> 月球公转速度 $\omega_m$ 是大自然给定的常数。如果飞船飞得更快，奔月滑行时间 $\Delta t_1$ 就从经典的 5 天（霍曼转移）缩短到了 3.2 天甚至 2 天。  
> 既然飞船花的时间少，月球在飞船飞行期间往前跑的距离当然就少，因此瞄准射击时所需要的“提前量”（超前角）必然**更小（Smaller）**！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 9, Section 9.2, Book p. 445 (PDF p. 452); Eq. 9.20.  
> **【教授设坑套路剖析】**:  
> - 选项 B 是倒因为果的胡乱推理。  
> - 选项 C/D 忽视了超前角与飞行时间 $\Delta t_1$ 的直接正比依赖。  
> **【考场一秒题眼】**: 看到 `faster transfer flown to Moon's lead angle needed is` $\to$ 选 `smaller, because the Moon sweeps less during a shorter coast`。

---

## <a id="q36-月球圆轨道速度的物理决定"></a>Q36 · 🟢 【Pass 级 · 1.0 分】月球圆轨道速度的物理决定因素 (Speed of Circular Lunar Orbit)

**【英文原题】**:
> The speed of a circular lunar orbit at a given radius is set by:

**【中文翻译】**:
> 在给定轨道半径下，环月圆轨道的运行速度仅仅取决于：

**【选项列表 (Options)】**:
- [A] the mass of the spacecraft together with the radius  
  *(中文: 航天器的质量以及轨道半径)*
- [B] the propellant still remaining in the spacecraft  
  *(中文: 航天器中剩余推进剂的数量)*
- **[C] the Moon's gravitational parameter and the radius**  
  *(中文: 月球的引力常数以及轨道半径 (The Moon's gravitational parameter and the radius))* 👈 **【正确选项】**
- [D] the inclination at which the orbit was entered  
  *(中文: 进入该轨道时的轨道倾角)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 圆轨道速度公式是航天力学第一基石：  
> > $\displaystyle v_c = \sqrt{\frac{\mu_m}{r}}$  
> 只要轨道半径 $r$ 确定，速度大小只由中心天体的引力常数 $\mu_m = G M_m$ 决定！飞船重 100 吨还是 10 千克、剩余多少燃料、倾角是赤道轨还是极轨，圆速度分毫不差完全一致！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 2, Section 2.4, Book p. 74 (PDF p. 81); Eq. 2.33.  
> **【教授设坑套路剖析】**:  
> - 选项 A 是日常牛顿第二定律直觉误区，引力质量与惯性质量等效导致飞船质量完全被约掉。  
> - 选项 D 倾角只决定平面法向，不改变速度大小标量。  
> **【考场一秒题眼】**: 看到 `speed of circular lunar orbit at given radius is set by` $\to$ 选 `the Moon's gravitational parameter and the radius`。

---

## <a id="q37-纯轨道面旋转的最优经济点"></a>Q37 · 🟢 【Pass 级 · 1.0 分】纯轨道面旋转的最优经济点位 (Cheapest Point for Pure Plane-Change)

**【英文原题】**:
> Where the node geometry allows a choice of burn point, a pure plane-change rotation is cheapest:

**【中文翻译】**:
> 当轨道交线几何允许自由选择点火位置时，一次纯轨道平面改变机动在何处执行最为经济省油：

**【选项列表 (Options)】**:
- [A] At periapsis, where the spacecraft is fastest  
  *(中文: 在近拱点，此时航天器速度最快)*
- [B] At the ascending node, regardless of speed  
  *(中文: 在升交点，无论其航速是多少)*
- [C] At the point closest to the Moon  
  *(中文: 在最接近月球的位置)*
- **[D] At apoapsis, where the transverse speed is smallest**  
  *(中文: 在远拱点，此时横向航行速度最小 (At apoapsis, where transverse speed is smallest))* 👈 **【正确选项】**

> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 轨道平面旋转的燃耗代价公式为：  
> > $\displaystyle \Delta v = 2 v \sin\left(\frac{\theta}{2}\right)$  
> 该公式表明：变面代价与当前瞬时速度 $v$ 严格成正比！想要用最少的速度增量把速度向量“掰弯”相同的角度 $\theta$，就必须挑飞船飞得最慢的地方点火！在椭圆轨道上，速度最慢的极值点永远是**远拱点（Apoapsis）**！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.6, Book pp. 314–318 (PDF pp. 321–325); Week 3 Lecture 2.  
> **【教授设坑套路剖析】**:  
> - 选项 A 是典型的奥伯特效应误套。加速抬轨才需要在最快的近拱点（使能量 $\Delta\varepsilon = v \Delta v$ 最大），而变面是无用旋转功，必须在最慢的远拱点做！  
> - 选项 B 忽视了如果升交点恰在近地点，强行在升交点变面会烧掉巨额燃料。  
> **【考场一秒题眼】**: 看到 `pure plane-change rotation is cheapest` $\to$ 选 `At apoapsis, where the transverse speed is smallest`。

---

## <a id="q38-瞄准月心的近月点几何极限"></a>Q38 · 🟢 【Pass 级 · 1.0 分】瞄准月心的近月点几何极限 (Perilune of Centered Lunar Approach)

**【英文原题】**:
> In the point-mass model, a lunar approach aimed exactly at the Moon's centre has a perilune radius of:

**【中文翻译】**:
> 在质点引力模型中，一条瞄准方向正对月球中心的奔月进场轨道，其理论近月点半径为：

**【选项列表 (Options)】**:
- [A] the sphere-of-influence radius  
  *(中文: 等于月球影响球半径)*
- [B] infinite, the craft is deflected straight back  
  *(中文: 无穷大，飞船被径直反弹回去)*
- **[C] zero, so a real spacecraft strikes the surface**  
  *(中文: 为零，因此现实中的真实航天器将直接撞击月球表面 (Zero, so a real spacecraft strikes the surface))* 👈 **【正确选项】**
- [D] the lunar radius, giving a grazing pass  
  *(中文: 等于月球物理半径，形成擦边掠过)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 如果来流渐近速度向量 $\mathbf{v}_\infty$ 直直对准月球质心，那么它对月心的瞄准距（Impact Parameter）为零：$b = 0$。由角动量定义：  
> > $\displaystyle h = b v_\infty = 0$  
> 角动量为零的二体轨道退化为一条**径向直线（Rectilinear Orbit）**！在其纯数学方程中，近月点半径退化为原点：$r_p = 0$。但在物理现实中，月球并不是一个无体积的数学几何点，它拥有坚硬的球体岩石表面（月球平均半径 $R_m \approx 1737\text{ km}$）。既然近月点在球心（0 km），飞船在到达 1737 km 时就会以几千米每秒的高速粉身碎骨地砸向月表！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 8, Section 8.4 *Hyperbolic flyby*, Book pp. 411–415 (PDF pp. 418–422); Week 5 Lecture 4.  
> **【教授设坑套路剖析】**:  
> - 选项 D 误以为大自然会仁慈地让飞船在月面擦边，没有角动量支撑它根本绕不过去。  
> - 选项 B 误套了弹性刚体碰撞模型。  
> **【考场一秒题眼】**: 看到 `aimed exactly at Moon's centre perilune radius` $\to$ 选 `zero, so a real spacecraft strikes the surface`。

---

## <a id="q39-发射方位角双解的数学本质"></a>Q39 · 🔵 【Credit 级 · 1.5 分】发射方位角双解的数学本质 (Two Launch Azimuths Origin)

**【英文原题】**:
> The azimuth relation gives two launch azimuths for the same target inclination from one site. The second root exists because:

**【中文翻译】**:
> 地面发射方位角公式在同一个发射场打向同一个目标轨道倾角时，会给出两个不同的发射方位角。这第二个解的存在是因为：

**【选项列表 (Options)】**:
- [A] the Earth's rotation adds a second solution east of north  
  *(中文: 地球自转在正北偏东方向增加了第二个解)*
- [B] the launch site can be treated as lying in either hemisphere  
  *(中文: 发射场可以被等效视为位于南半球或北半球)*
- **[C] the sine of the azimuth enters, and two azimuths share a sine**  
  *(中文: 方位角的正弦函数进入了公式，而在 0 到 180 度内互补的两个角拥有相同的正弦值 (Two azimuths share a sine))* 👈 **【正确选项】**
- [D] the orbit may be flown prograde or retrograde about the same pole  
  *(中文: 轨道可以绕同一个极轴顺行或逆行飞行)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 根据球面三角学推导的发射方位角公式：  
> > $\displaystyle \cos i = \cos \phi \sin A_0 \implies \sin A_0 = \frac{\cos i}{\cos \phi}$  
> 正弦函数在第一和第二象限具有对称性：$\sin(A_0) = \sin(180^\circ - A_0)$！  
> 对于同一个倾角 $i$，方程自然给出两个互补的发射方向：  
> 1. **东北向发射（Northeast pass, $A_0 < 90^\circ$）**：火箭向东北飞，飞船入轨后处于上升段（从南向北穿过赤道，升交点入轨）；  
> 2. **东南向发射（Southeast pass, $180^\circ - A_0 > 90^\circ$）**：火箭向东南飞，飞船入轨后处于下降段（从北向南穿过赤道，降交点入轨）。  
> 这就是正弦函数的数学必然性！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.8 *Launch windows*, Book pp. 323–326 (PDF pp. 330–333); Eq. 6.32.  
> **【教授设坑套路剖析】**:  
> - 选项 D 混淆了顺行与逆行，同一个 $i$（例如 $i=51.6^\circ$）是确定的倾角，两解都是顺行，只是升降轨方向不同。  
> - 选项 A 地球自转会引起速度三角形修正，但不是解析公式出现双根的原因。  
> **【考场一秒题眼】**: 看到 `azimuth relation gives two launch azimuths second root exists because` $\to$ 选 `sine of azimuth enters, and two azimuths share a sine`。

---

## <a id="q40-无动力双曲线飞越渐近速度"></a>Q40 · 🔵 【Credit 级 · 1.5 分】无动力双曲线飞越渐近速度的标量守恒 (Unpowered Flyby Asymptotic Speed Conservation)

**【英文原题】**:
> In the Moon-centred two-body model, an unpowered flyby leaves the craft's asymptotic speed relative to the Moon:

**【中文翻译】**:
> 在以月球为中心的二体引力模型中，一次无动力飞越（Unpowered Flyby）使得航天器相对于月球的渐近双曲线超额速度（Asymptotic Speed $v_\infty$）：

**【选项列表 (Options)】**:
- **[A] equal going out to coming in, but turned in direction**  
  *(中文: 离开时的大小与进入时严格相等，但速度方向被偏转了一个角度 (Equal going out to coming in, but turned in direction))* 👈 **【正确选项】**
- [B] doubled, since the Moon's own orbital speed is added at exit  
  *(中文: 翻倍，因为在离开时叠加了月球自身的公转速度)*
- [C] reduced to zero at exit, since every flyby ends in capture  
  *(中文: 在离开时衰减为零，因为每次飞越都以捕获告终)*
- [D] halved, since the Moon absorbs half of the relative momentum  
  *(中文: 减半，因为月球吸收了一半的相对动量)*

> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 在月球为中心的二体保守引力场中，机械能严格守恒：  
> > $\displaystyle \varepsilon_2 = \frac{1}{2}v_2^2 - \frac{\mu_m}{r_2} = \frac{1}{2}v_\infty^2 = \text{常数}$  
> 当飞船飞到无穷远处（或影响球边界）时，引力势能衰减为零，因此飞出月球影响球时的相对速率标量 $v_{\infty,\text{out}}$ 必定与飞入时的 $v_{\infty,\text{in}}$ 完全相等（$v_{\infty,\text{out}} = v_{\infty,\text{in}}$）！月球二体引力所做的一切，仅仅是像引力弹弓一样，把速度向量生生掰弯了一个偏转角 $\delta$！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 8, Section 8.4, Book pp. 411–413 (PDF pp. 418–420); Week 4 Lecture 3 & Week 5 Lecture 4.  
> **【教授设坑套路剖析】**:  
> - 选项 B 是典型的“日心坐标系重力助推”误区！在地心系中飞船速度确实可以借月球公转加速或减速，但题干极其明确限定了**“相对于月球（Relative to the Moon）”**，在月心参考系中绝不可能凭空创造能量！  
> - 选项 C 违背能量守恒，二体无动力双曲线永远是逃逸轨道，绝不可能自发捕获。  
> **【考场一秒题眼】**: 看到 `Moon-centred two-body unpowered flyby asymptotic speed relative to Moon` $\to$ 选 `equal going out to coming in, but turned in direction`。

---

## <a id="q41-两体拼接锥线与真三体数值"></a>Q41 · 🔵 【Credit 级 · 1.5 分】两体拼接锥线与真三体数值积分的误差分布特征 (Patched Conic vs Numerical Integration Error)

**【英文原题】**:
> A patched conic and an integration of the same departure are compared along the whole path. Their disagreement is:

**【中文翻译】**:
> 将同一条奔月出发轨道的二体拼接锥线解析解与真三体数值积分沿着全航程进行对比。两者的误差差异表现为：

**【选项列表 (Options)】**:
- [A] constant along the whole path from injection  
  *(中文: 从注入开始沿全航程保持恒定常数偏差)*
- [B] a jump at the sphere, where the books are swapped  
  *(中文: 在穿越影响球界面、更换计算账本时发生突然的阶跃跳变)*
- [C] confined to the last minutes before perilune  
  *(中文: 仅仅局限在接近近月点前的最后几分钟之内)*
- **[D] a broad transition region, not a step at one radius**  
  *(中文: 在广阔的过渡区域内弥散积累，而不是在某个特定半径上发生突变阶跃 (A broad transition region, not a step at one radius))* 👈 **【正确选项】**

> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 太空中没有一堵由玻璃打造的“物理影响球面”！引力场是连续平滑充满全空间的。二体拼接锥线法（Patched Conic）虽然在数学形式上于 $R_S = 66,183\text{ km}$ 处强行把“地心方程”切换为“月心方程”，但在真实的三体物理世界中，地球引力和月球引力一直在同时撕扯着飞船。这种近似带来的误差并不是在进入 $R_S$ 那一微秒突然崩塌，而是在长达数十万公里的**宽广过渡区域（Broad transition region）内平滑扩散并持续积分放大的**！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 9, Section 9.4, Book pp. 455–460 (PDF pp. 462–467); Week 5 Lecture 5 Slides 24–25.  
> **【教授设坑套路剖析】**:  
> - 选项 B 是死记硬背拼接概念的学生的头号陷阱（误以为模型怎么切，物理误差就怎么跳）。  
> - 选项 C 严重低估了三体摄动的空间作用范围。  
> **【考场一秒题眼】**: 看到 `patched conic and integration disagreement is` $\to$ 选 `a broad transition region, not a step at one radius`。

---

## <a id="q42-出发张角与TLI位置角的"></a>Q42 · 🔵 【Credit 级 · 1.5 分】出发张角与TLI位置角的1对1线性映射 (Dial that Changes Sweep Angle Degree for Degree)

**【英文原题】**:
> The dial that changes the sweep angle degree for degree is:

**【中文翻译】**:
> 在奔月任务设计的“四大旋钮（Four Dials）”中，能够一比一（度对度，degree for degree）直接改变地心转移张角 $\Delta\theta$ 的旋钮是：

**【选项列表 (Options)】**:
- [A] lambda, the lunar arrival angle  
  *(中文: lambda，月球到达角 $\lambda$)*
- **[B] alpha-0, the TLI position angle**  
  *(中文: $\alpha_0$，地月转移点火（TLI）位置角 ($\alpha_0$, the TLI position angle))* 👈 **【正确选项】**
- [C] r0, the parking-orbit radius  
  *(中文: $r_0$，停泊轨道初始半径)*
- [D] gamma-0, the injection flight path angle  
  *(中文: $\gamma_0$，注入点火航向角)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 教授在 Week 5 Lecture 3 Slide 14 的经典定义：奔月轨道由四个设计旋钮确定 $(r_0, \alpha_0, \gamma_0, \lambda)$：  
> - $r_0$：决定从地球引力势阱的多深处出发；  
> - $\alpha_0$：**在停泊轨道上的点火位置角**。因为地心转移张角定义为 $\Delta\theta = \theta_1 - \alpha_0$（或几何终点位置减去起点位置），因此你在停泊轨道上每把点火点向前挪 $1^\circ$，转移张角 $\Delta\theta$ 就严格等幅地改变整整 $1^\circ$（Setting $\Delta\theta$ one for one / degree for degree）！  
> - $\gamma_0$：爬升陡峭度，携带全任务最大的控制风险；  
> - $\lambda$：到达影响球的方位角，仅以几何投影贡献一小部分 $\Delta\theta$。  
> **【教材与讲义精确出处】**:  
> 📖 Week 5 Lecture 3 Slide 14 *What each dial does*; Curtis Chapter 9, Section 9.2.  
> **【教授设坑套路剖析】**:  
> - 选项 A $\lambda$ 位于月球端，它通过三角关系几何投影影响张角，但绝非 1:1 线性联动（Slide 14: $\lambda$ worth 9.9 degrees of $\Delta\theta$）。  
> - 选项 C/D 不直接主导起点空间角位置。  
> **【考场一秒题眼】**: 看到 `dial that changes sweep angle degree for degree` $\to$ 选 `alpha-0, the TLI position angle`。

---

## <a id="q43-地月网关NRHO轨道9比"></a>Q43 · 🔵 【Credit 级 · 1.5 分】地月网关NRHO轨道9比2共振的会合周期本质 (NRHO 9:2 Resonance and Synodic Months)

**【英文原题】**:
> The NRHO's nine-to-two resonance means that nine of its orbits fit into:

**【中文翻译】**:
> 阿尔忒弥斯（Artemis）登月计划选用的近直线晕轨道（NRHO）具有著名的 9:2 轨道共振。这意味着该轨道的 9 个运行周期恰好契合：

**【选项列表 (Options)】**:
- [A] two sidereal months of the Moon's orbit  
  *(中文: 月球公转的两个恒星月（Sidereal Months）)*
- **[B] two synodic months, which carry the Sun**  
  *(中文: 承载太阳视运动的两个会合月（Synodic Months，朔望月）)* 👈 **【正确选项】**
- [C] two of the Earth's own orbital periods  
  *(中文: 地球绕太阳公转的两个整年周期)*
- [D] two years of the station-keeping cycle  
  *(中文: 空间站轨道维持的两年循环周期)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> NRHO（Near Rectilinear Halo Orbit）是人类航天动力学工程的绝妙杰作！NASA 之所以给月球空间站（Gateway）选定 9:2 偏心晕轨道，其核心生命线是**避免任何地球或月球造成的日食（Zero Eclipses）**！  
> 太阳光照方向是由地月系统绕太阳公转的**会合月（Synodic Month，朔望月，约 29.53 天）**主导的。让 9 个 NRHO 轨道周期（$9 \times 6.56\text{ 天} \approx 59.0\text{ 天}$）精确等于**两个会合月（Two synodic months $\approx 59.06\text{ 天}$）**，空间站就能永远与太阳保持特定的空间构型，永远沐浴在阳光下持续进行太阳能发电，并且永远无须经历长达几小时的冻结黑暗！  
> **【教材与讲义精确出处】**:  
> 📖 Week 6 Lecture 6 *Staying and landing: sensing, relay and descent at the south pole*, Slide 34–38.  
> **【教授设坑套路剖析】**:  
> - 选项 A 偷换概念成了恒星月（恒星月是相对于遥远恒星背景的 27.3 天，无法锁定太阳光线方位）。  
> - 选项 C/D 周期量级完全脱轨。  
> **【考场一秒题眼】**: 看到 `NRHO's nine-to-two resonance nine orbits fit into` $\to$ 选 `two synodic months, which carry the Sun`。

---

## <a id="q44-脱靶残差与灵敏度向推进系"></a>Q44 · 🟣 【Distinction 级 · 2.0 分】脱靶残差与灵敏度向推进系统指标的工程转化 (Residual Sensitivity to Propulsion Requirement)

**【英文原题】**:
> Reporting a residual separation together with its sensitivity to an impulse error turns the residual into:

**【中文翻译】**:
> 在任务分析中，将末端交会脱靶残差（Residual Separation）连同其对点火脉冲误差的灵敏度矩阵一起报告，可以将该理论残差转化为：

**【选项列表 (Options)】**:
- [A] a bound on the time available before the next manoeuvre  
  *(中文: 下一次轨道机动执行前的可用时间上限)*
- **[B] a requirement that the propulsion system has to meet**  
  *(中文: 发动机推进/制导系统必须达到的硬件精度指标要求 (A requirement that the propulsion system has to meet))* 👈 **【正确选项】**
- [C] a number that is easier for a marker to check quickly  
  *(中文: 一个方便阅卷批改人快速核对的简单数字)*
- [D] an estimate of how much propellant is still in the tanks  
  *(中文: 贮箱中剩余推进剂量的估算值)*

> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 在真实的航天工程飞控中，单纯汇报“脱靶量为 50 km”毫无工程价值。但如果你同时给出了灵敏度导数：  
> > $\displaystyle \delta r = \left|\frac{\partial r}{\partial (\Delta v)}\right| \cdot \delta(\Delta v)$  
> 那么如果任务允许的脱靶容差是 $\delta r \le 10\text{ km}$，代入灵敏度后，立刻就能严格反解出发动机点火关机阀门、姿态指向误差和推力截断精度所允许的最大速度误差极限 $\delta(\Delta v) \le 0.05\text{ m/s}$！这就把一个虚拟的数学残差，实打实地变成了**硬件推进与控制系统（Propulsion & GNC System）必须严格满足的研制技术指标（Requirement）**！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 9 & 10; Week 5 Lecture 5 *Flight design, navigation and manoeuvre models*.  
> **【教授设坑套路剖析】**:  
> - 选项 C 是考试调侃项。  
> - 选项 D 答非所问，灵敏度是微分映射，不是推进剂余量。  
> **【考场一秒题眼】**: 看到 `reporting residual separation together with sensitivity turns residual into` $\to$ 选 `a requirement that the propulsion system has to meet`。

---

## <a id="q45-月心双曲线偏心率与最大偏"></a>Q45 · 🟣 【Distinction 级 · 2.0 分】月心双曲线偏心率与最大偏转角的极值规律 (Hyperbola Eccentricity and Bending Maximisation)

**【英文原题】**:
> The eccentricity of the lunar hyperbola is $e = 1 + \frac{r_p v_\infty^2}{\mu_m}$. What that says about which encounters bend the path most is:

**【中文翻译】**:
> 月心双曲线的偏心率表达式为 $e = 1 + \frac{r_p v_\infty^2}{\mu_m}$。关于何种交会条件能够使飞船轨道产生最大幅度的剧烈弯折，该公式表明：

**【选项列表 (Options)】**:
- **[A] slow and close bend hardest, since both push $e$ towards one**  
  *(中文: 速度慢且距离近（Slow and close）的交会偏折最强，因为两者都会使偏心率 $e$ 逼近于 1)* 👈 **【正确选项】**
- [B] only the perilune matters, because $v_\infty$ cancels out  
  *(中文: 仅仅取决于近月点距离，因为渐近速度被约掉了)*
- [C] fast and far bend hardest, since both push $e$ towards one  
  *(中文: 速度快且距离远（Fast and far）的交会偏折最强)*
- [D] only the speed matters, because the aim fixes the perilune  
  *(中文: 仅仅取决于速度，因为瞄准距固定了近月点)*

> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 双曲线飞越的总偏转角公式为：  
> > $\displaystyle \delta = 2 \arcsin\left(\frac{1}{e}\right)$  
> 想要让航线偏折得最剧烈（$\delta \to 180^\circ$ 大掉头），正弦函数自变量 $1/e$ 必须最大，即**偏心率 $e$ 必须尽可能小、无限逼近于 1**（抛物线边界）！  
> 观察题目给出的公式：$e = 1 + \frac{r_p v_\infty^2}{\mu_m}$：  
> - 要让右边的附加项最小化趋近于零，分子中的 $r_p$（近月点半径）必须尽可能小——**贴得极近（Close）**！  
> - 同时分子中的 $v_\infty$（相对来流速度）必须尽可能小——**速度极慢（Slow）**！  
> 引力作用时间越长、离引力中心越近，引力弯折效果最强悍！即 **“Slow and close bend hardest”**！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 8, Section 8.4, Book pp. 411–414 (PDF pp. 418–421); Eq. 8.41 & 8.44.  
> **【教授设坑套路剖析】**:  
> - 选项 C 彻底反向，速度极快（如光子）或距离极远只会笔直飞过，几乎没有任何弯折（$e \to \infty, \delta \to 0$）。  
> - 选项 B/D 各执一词，片面割裂了乘积项的协同作用。  
> **【考场一秒题眼】**: 看到 `eccentricity of lunar hyperbola e = 1 + rp v_inf^2 / mu encounters bend path most` $\to$ 选 `slow and close bend hardest, since both push e towards one`。

---

## <a id="q46-变面工程哲学：结构优于参"></a>Q46 · 🟣 【Distinction 级 · 2.0 分】变面工程哲学：结构优于参数精修 (Get Structure Right Before Polishing Variables)

**【英文原题】**:
> For a plane change, which end of the orbit you burn at changes the cost by a large factor. Splitting the rotation optimally between two burns changes it very little by comparison. The design lesson is:

**【中文翻译】**:
> 对于轨道变面机动，挑选在轨道的哪一端（远地点还是近地点）点火，会使推进剂成本产生数倍的巨大差异；相比之下，在两个交点之间精细寻优寻找最佳变面角分配比例，却只能带来微乎其微的改善。这一现象带来的航天工程设计启示是：

**【选项列表 (Options)】**:
- [A] optimisation of continuous variables is never worthwhile  
  *(中文: 连续变量的数学优化永远没有任何价值)*
- [B] the optimal split is always close to fifty-fifty  
  *(中文: 最优的角度分配比例永远接近五五开（50-50）)*
- **[C] get the structure right before polishing the variables**  
  *(中文: 先抓对大尺度结构拓扑，再去精雕细琢连续变量 (Get the structure right before polishing the variables))* 👈 **【正确选项】**
- [D] perigee is the cheap place to rotate a plane  
  *(中文: 近地点才是执行轨道旋转的最便宜地点)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 这是全课程最核心的工程系统设计金句：  
> - **选对拓扑结构（Macro-structure）**：把变面点从每秒 8 公里的近地点搬到每秒 1.5 公里的远地点，速度增量直接打两折，能救活一整颗卫星！  
> - **抠微观参数（Micro-polishing）**：在远地点是用单次点火还是按 52:48 分成两次点火，经过几千次非线性规划迭代，可能只能省下 0.5% 的推进剂。  
> 航天工程师的第一要务，是凭借清晰的物理图像**“先抓对系统结构（Get the structure right）”**，千万不要把时间浪费在在错误的结构架构上去死磕数值优化！  
> **【教材与讲义精确出处】**:  
> 📖 Week 2 & Week 3 Lecture Synthesis; Curtis Chapter 6, Section 6.6 & 6.7.  
> **【教授设坑套路剖析】**:  
> - 选项 A 走极端，连续优化在最后精算阶段至关重要，只是次序在结构之后。  
> - 选项 D 纯属指鹿为马，近地点是最昂贵的变面灾难区。  
> **【考场一秒题眼】**: 看到 `which end burn changes cost by large factor splitting changes little design lesson is` $\to$ 选 `get the structure right before polishing the variables`。

---

## <a id="q47-极轨卫星全经度星下点覆盖"></a>Q47 · 🟣 【Distinction 级 · 2.0 分】极轨卫星全经度星下点覆盖周期的物理决定量 (Polar Orbit Ground Track Coverage Cycle)

**【英文原题】**:
> For an ideal polar ground track, lowering the orbiter's altitude improves resolution. The time to bring every longitude under the track:

**【中文翻译】**:
> 对于一条理想极轨卫星轨道，降低轨道飞行高度可以提高对地观测分辨率。将月球表面全部经度完整覆盖扫描一遍所需的时间：

**【选项列表 (Options)】**:
- [A] falls with the square root of the altitude  
  *(中文: 随轨道高度的平方根下降而缩短)*
- [B] rises, because each pass now sees less ground  
  *(中文: 上升变长，因为每圈相机看到的地面条带变窄了)*
- **[C] is unchanged, being set by the Moon's spin**  
  *(中文: 完全保持不变，因为该时间是由月球自身的自转周期决定的 (Is unchanged, being set by the Moon's spin))* 👈 **【正确选项】**
- [D] falls in proportion to the shorter period  
  *(中文: 与缩短的轨道周期成正比下降)*

> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 在理想极轨（$i = 90^\circ$）中，轨道平面在空间中相对于遥远恒星背景是保持不动的。轨道下方要想把月球表面从东经 $0^\circ$ 到 $360^\circ$ 的所有经线全部“扫”一遍，唯一的驱动力就是**月球自身的自转**！月球自转一整圈需要 27.3 天（一个恒星月）。不管你把卫星轨道降到 100 km 还是 30 km，轨道变低只会让每圈绕行时间变短、地面条带更密、图像更清晰，但要把月球全球 360 度的所有经线完整展现给相机，**必须雷打不动地等待月球自己转满一整圈（27.3 天）**！  
> **【教材与讲义精确出处】**:  
> 📖 Week 6 Lecture 6 *Sensing, relay and descent*, Slide 10–14; Curtis Chapter 4.  
> **【教授设坑套路剖析】**:  
> - 选项 D/A 误将轨道公转周期与天体自转周期混为一谈。  
> - 选项 B 混淆了有效条带重叠度与全经度穿透时间。  
> **【考场一秒题眼】**: 看到 `polar ground track lowering altitude time to bring every longitude under track` $\to$ 选 `is unchanged, being set by the Moon's spin`。

---

## <a id="q48-复合点火中微小变面角的二"></a>Q48 · 🔴 【High Distinction 级 · 2.5 分】复合点火中微小变面角的二阶微扰经济性 (Second-Order Cost of Combined Plane Change)

**【英文原题】**:
> A burn is already being made to change speed. Adding a small plane rotation to that burn is cheap, because the extra cost above the speed change enters:

**【中文翻译】**:
> 航天器已经计划执行一次用于改变轨道速度大小的点火。在这次点火中附带叠加一个微小的轨道平面旋转角是极其廉价的，因为超出纯变轨速度的额外代价的增长阶数是：

**【选项列表 (Options)】**:
- [A] in proportion to the angle, so no share of it is ever free  
  *(中文: 与角度成正比（一阶），因此没有任何一部分是免费的)*
- [B] exponentially, so it is the first degrees that cost the most  
  *(中文: 呈指数增长，因此最开头的几度代价最大)*
- [C] as the square root of the angle, so small shares cost most  
  *(中文: 与角度的平方根成正比，因此小份额最贵)*
- **[D] at second order in the angle, so the first degrees cost little**  
  *(中文: 按转角的二次方（二阶 $\theta^2$）增长，因此最开头的几度几乎完全免费 (At second order in the angle, so first degrees cost little))* 👈 **【正确选项】**

> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 复合机动（Combined Maneuver）的速度三角形余弦定理：  
> > $\displaystyle \Delta v = \sqrt{v_1^2 + v_2^2 - 2 v_1 v_2 \cos\theta}$  
> 利用泰勒展开小角度近似：$\cos\theta \approx 1 - \frac{\theta^2}{2}$：  
> > $\displaystyle \Delta v = \sqrt{(v_1 - v_2)^2 + v_1 v_2 \theta^2} \approx |v_1 - v_2| + \frac{v_1 v_2}{2 |v_1 - v_2|} \theta^2$  
> 注意看：超出单纯速度改变量 $|v_1 - v_2|$ 的额外增量，是**与变面角 $\theta$ 的平方（$\theta^2$，二阶微扰）成正比的**！在数学上，当 $\theta \to 0$ 时，$\theta^2$ 的导数在零点为零！这意味着：**附带转动前几度（例如 $2^\circ \sim 3^\circ$）的燃耗增量近乎为零（Almost Free）**！航天工程师永远要将变面搭便车合入升降轨点火中！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.6, Book pp. 315–318 (PDF pp. 322–325); Eq. 6.30; Week 3 Lecture 2.  
> **【教授设坑套路剖析】**:  
> - 选项 A 是独立变面（$\Delta v = 2 v \sin(\theta/2) \approx v \theta$，纯一阶）的直觉误导。复合点火由于三角形斜边效应，变面投影被纯加速主矢量吸收，从而压低到了二阶！  
> **【考场一秒题眼】**: 看到 `adding small plane rotation to speed burn extra cost enters` $\to$ 选 `at second order in the angle, so the first degrees cost little`。

---

## <a id="q49-闭式螺旋公式对离子电推进"></a>Q49 · 🔴 【High Distinction 级 · 2.5 分】闭式螺旋公式对离子电推进与化学推进的适用性差异 (Edelbaum Spiral: Ion vs Chemical)

**【英文原题】**:
> The closed-form spiral formula assumes the speed at every radius is the local circular speed. This is fair for an ion engine but unfair for a chemical one because:

**【中文翻译】**:
> 闭式低推力螺旋展开公式假定在任意半径处的飞船速度都等于该处的局部圆轨道速度。这一假定对于离子电推进极其合理，但对化学火箭推进完全不合理，这是因为：

**【选项列表 (Options)】**:
- [A] Chemical propellant is very much denser than xenon fuel  
  *(中文: 化学推进剂的密度远高于氙气燃料)*
- [B] An ion engine can only be operated in a circular orbit  
  *(中文: 离子发动机只能在正圆轨道中开启工作)*
- [C] The formula was derived for xenon propellant alone  
  *(中文: 该公式仅仅是针对氙气推进剂推导出来的)*
- **[D] An ion orbit stays nearly circular; a chemical one does not**  
  *(中文: 离子电推进的轨道在整个爬升过程中几乎始终保持近圆；而化学推进点火会剧烈破坏近圆状态)* 👈 **【正确选项】**

> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 埃德尔鲍姆（Edelbaum）闭式螺旋公式 $\Delta v \approx |v_{c1} - v_{c2}|$ 的立论基石：推力加速度极微弱（几个毫牛），飞船需要喷射数月、绕地球转上千圈。由于每一圈的轨道提升量只有几百米，轨道像蚊香一样致密，**在每一圈的每一个瞬时，轨道几乎都是完美正圆，速度严丝合缝地等于局部圆速度 $v \approx v_c$**！  
> 而化学火箭推力极其暴烈，几百秒内就能提供几公里每秒的速度，一瞬间就会把轨道炸成一个高偏心率的大椭圆，速度与局部圆速度天差地别，使得“处处速度等于圆速度”的前提彻底崩溃！  
> **【教材与讲义精确出处】**:  
> 📖 Curtis Chapter 6, Section 6.9 *Continuous low-thrust transfers*, Book pp. 329–331 (PDF pp. 336–338); Eq. 6.39.  
> **【教授设坑套路剖析】**:  
> - 选项 A/C 扯推进剂物理化学属性，纯属障眼法。  
> - 选项 B 倒因为果，离子发动机可以在任意偏心轨道工作，是其加速度微弱导致轨道保持准正圆。  
> **【考场一秒题眼】**: 看到 `closed-form spiral assumes local circular speed fair for ion unfair for chemical because` $\to$ 选 `An ion orbit stays nearly circular; a chemical one does not`。

---

## <a id="q50-弱稳定性边界弹道捕获的能"></a>Q50 · 🔴 【High Distinction 级 · 2.5 分】弱稳定性边界弹道捕获的能量转变物理机制 (Ballistic Capture and Energy Modification)

**【英文原题】**:
> Ballistic capture is driven by the same third-body pull that makes the sphere of influence an approximation rather than a real boundary. What lets that pull be a tool here instead of an error is:

**【中文翻译】**:
> 弹道捕获（Ballistic Capture / 弱稳定性边界转移）正是由使得影响球仅仅是近似而非真实边界的同一个“第三体引力摄动”所驱动的。让这种第三体引力在这里变成一种强大的工程工具、而非有害误差的关键在于：

**【选项列表 (Options)】**:
- [A] it is modelled exactly in the patched conic, unlike the other perturbations  
  *(中文: 它在拼接锥线模型中得到了精确建模，不像其他摄动那样被忽略)*
- [B] it is a different perturbation from the one the sphere of influence neglects  
  *(中文: 它是与影响球所忽略的摄动完全不同类型的力)*
- [C] it is far smaller at the Moon than the errors the patched conic already carries  
  *(中文: 它在月球处远小于拼接锥线本身自带的误差)*
- **[D] it acts for long enough to change the energy, not only to blur the boundary**  
  *(中文: 它持续作用的时间足够漫长，足以从根本上改变轨道能量，而不仅仅是模糊了引力边界 (It acts for long enough to change the energy, not only to blur the boundary))* 👈 **【正确选项】**

> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 在常规二体拼接锥线中，第三体（太阳/地球）的潮汐摄动被当成一种让人头疼的“边界模糊误差”，因为快速穿过时我们只看到了轨道位置偏了几十公里。  
> 但在日本 Hiten 飞船和 NASA GRAIL 探测器开创的**弹道捕获（Ballistic Capture）**轨道中，工程师利用低能量流形（Low Energy Manifolds），让飞船在月球拉格朗日点 L1/L2 外围的弱稳定性边界处**逗留徘徊数月之久**！在如此漫长的时间跨度下，太阳与地球引力形成的引力力矩持续对飞船做功，竟然硬生生地把飞船相对于月球的双曲线超额能量抽干，使其自然转变为相对月球的比能量负值（$\varepsilon_2 < 0$），实现了**零推进剂自动落入月球束缚轨道（Capture）**！时间让微小的扰动积累成了根本性的轨道能量改变！  
> **【教材与讲义精确出处】**:  
> 📖 Week 6 Lecture 5 & Lecture 6 *Low-energy lunar transfers, weak stability boundary and ballistic capture*; Curtis Chapter 10.  
> **【教授设坑套路剖析】**:  
> - 选项 A 彻底颠倒事实，拼接锥线根本无法处理弹道捕获，弹道捕获必须全过程依赖受限三体动力学数值积分。  
> - 选项 B 力的本质完全相同，差异纯在作用时间尺度上。  
> **【考场一秒题眼】**: 看到 `ballistic capture tool instead of error is` $\to$ 选 `it acts for long enough to change the energy, not only to blur the boundary`。

---

