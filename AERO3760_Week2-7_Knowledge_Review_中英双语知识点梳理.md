# AERO3760 Space Engineering 2 · 核心知识点全景深度解剖 (Week 2 – Week 7)
> **适用范围**：AERO3760 Mid-term / Week 7-8 Quiz & Final Exam (涵盖 Week 2 至 Week 7 全量考点)  
> **编写标准**：零基础完全透彻理解（通俗生活比喻 + 直观物理图像 + 严密工程数学 + 真实算例数据 + 考试陷阱点穴）  
> **教材版本**：Howard D. Curtis, *Orbital Mechanics for Engineering Students* (4th Edition, Elsevier)  
> **页码双轨标注**：**Book p. XXX** 为纸质书印刷页码；**(PDF p. YYY)** 为电子版 PDF 页码（两者固定偏移 7 页）  
> **语言**：中英双语对齐 (Bilingual Chinese & English)


---

# 🚀 AERO3760 期中机考四阶通关雷达与教授工程哲学 (Four-Tier Exam Radar)
> **出题规律终极揭秘**：AERO3760 期中机考（50 题 / 90 分钟 / 闭卷 / 无计算器）**绝不考核繁琐多位小数代数运算**，100% 考察**物理本质定性洞察、极端边界敏感性、无量纲缩放律（Scaling Laws）、非惯性系动力学本源与航天系统工程设计哲学**。  
> 试卷严格按照 Pass (1.0pt) $\to$ Credit (1.5pt) $\to$ Distinction (2.0pt) $\to$ High Distinction (2.5pt) 四阶分级，掌握以下四阶心法雷达，即可实现考场闭眼秒杀！

```
                      🔴 High Distinction (2.5 pt)
                   【教授五大工程哲学 / 二阶微扰 / 能量转换】
                                  ▲
                                 / \
                                /   \
                   🟣 Distinction (2.0 pt)
                【敏感性极值 / 非惯性系力矩 / 碰撞工程陷阱】
                                ▲
                               / \
                  🔵 Credit (1.5 pt)
               【定性缩放律 / 冲量检验 / 多解数学对称】
                               ▲
                              / \
                 🟢 Pass (1.0 pt)
              【核心概念定义 / 守恒定律 / 二体开普勒判据】
```

### 🟢 1. Pass 基础阶 (1.0 分题) · 秒杀物理铁律
1. **冲量机动两假定**：位置空间绝对连续不变（$\mathbf{r}^+ = \mathbf{r}^-$），速度向量瞬时跳跃跳变（$\mathbf{v}^+ = \mathbf{v}^- + \Delta\mathbf{v}$）。*(周末真题 Q3)*
2. **三体数值积分地月轨道逆行判据 (Retrograde near the Moon)**：真实三体引力场是非中心力场，瞬时速度 $\mathbf{v}$ 与瞬时总加速度 $\mathbf{a}$ 张成局域轨道面，其法向量为副法线 $\hat{\mathbf{b}} = \frac{\mathbf{v} \times \mathbf{a}}{|\mathbf{v} \times \mathbf{a}|}$。局域倾角 $i = \arccos(\hat{\mathbf{b}} \cdot \hat{\mathbf{K}})$ 描述的是**局域轨道平面法向与月球自转极轴的夹角 (Local plane's normal against the polar axis)**。飞船在奔月途中为顺行（$i \approx 16^\circ$），接近月球时曲率面剧烈翻转使得 $i > 90^\circ$（在近月点 $i \approx 156^\circ$），呈现绕月逆行！*(周末真题 Q1, Curtis Chapter 9, Section 9.5, Book p. 472 (PDF p. 479) Fig. 9.16 & Wk6 Lec 5 Slides 22-24)*
3. **地月霍曼转移两次点火量级**：近地点点火（$\Delta v_1 \approx 3.14\text{ km/s}$）是远地点点火（$\Delta v_2 \approx 0.83\text{ km/s}$）的近 4 倍（**a factor of several**）。*(周末真题 Q2)*
4. **齐奥尔科夫斯基火箭方程**：固定干重下，推进剂质量对速度增量呈**指数依赖（Exponentially）**，每一段新加速都比前一段更昂贵。*(周末真题 Q4)*
5. **影响球内引力模型**：二体拼接（Patched-conic）在影响球内**仅仅保留月球引力**，坚决不保留地球引力。*(周末真题 Q19)*
6. **万有引力衰减规律**：严格平方反比律（$1/r^2$），无限远才为零，有限距离**虽弱但永远不为零**。*(周末真题 Q20)*
7. **月球超前角（Lead Angle）**：滑行期间月球自身在白道面上扫过的角度（$\theta_{\text{lead}} = \omega_m \Delta t_1$）；奔月越快（$\Delta t_1$ 越短），所需超前角**越小（Smaller）**。*(周末真题 Q21, Q35)*
8. **调相机动定义**：通过两次点火脉冲改变轨道周期，**最终完全返回到初始同一轨道（Two impulses back to same orbit）**。*(周末真题 Q22)*
9. **圆轨道速度决定量**：$v_c = \sqrt{\mu/r}$，**仅由中心天体引力常数 $\mu$ 和半径 $r$ 决定**，与飞船吨位、剩余燃油、轨道倾角完全无关。*(周末真题 Q36)*
10. **纯平面变面最便宜点位**：$\Delta v = 2 v \sin(\theta/2)$，必须挑航速最慢处点火，永远在**远拱点（Apoapsis）**最廉价。*(周末真题 Q37)*
11. **正对月心瞄准的近月点**：角动量为零（$h=0$），退化为直线轨道，理论近月点半径为零（$r_p=0$），真实飞船**直接砸在月表撞击坠毁**。*(周末真题 Q38)*

### 🔵 2. Credit 进阶阶 (1.5 分题) · 定性缩放律与多解对称
1. **冲量模型首选测试准则**：发动机点火时间是否仅占该轨道公转周期的微小份额（**$t_{\text{burn}} / T \ll 1$**）。*(周末真题 Q5)*
2. **月球赤道倾角 18.6 年周期之源**：月球轨道面围绕**黄道面法线（Ecliptic Normal）**发生 18.6 年进动，驱动赤道倾角在 $18.3^\circ \sim 28.6^\circ$ 慢摇摆。*(周末真题 Q6)*
3. **快速奔月轨道远地点位置**：飞船在到达自身远地点之前即穿过月球轨道，其椭圆远地点必定**远在月球轨道之外（Beyond Moon's orbit）**。*(周末真题 Q7)*
4. **远离月球时月引力不扰动轨道机理**：地心系不是惯性系，月球拉飞船的力几乎完全被**月球拉地心原点的牵连引力所抵消（Cancelled by pull on frame's origin）**。*(周末真题 Q8, 周四真题 Q4)*
5. **束缚闭合轨道特征能量**：由于半长轴 $a > 0$ 有限正数，比机械能 $\varepsilon < 0$，其特征能量**严格小于零（$C_3 < 0$）**。*(周末真题 Q9)*
6. **调相轨道逆向设计逻辑**：常规设计从几何算周期，调相设计**从所需周期逆推半长轴（Start from period and derive axis）**。*(周末真题 Q23)*
7. **影响球无量纲比值 $r_{\text{SOI}}/D$ 意义**：度量**过渡交接边界区域占据了整个旅程距离的多大比例**。*(周末真题 Q24)*
8. **椭圆轨道比机械能决定量**：活力公式 $\varepsilon = -\mu/(2a)$，**仅仅取决于半长轴 $a$**，与偏心率 $e$ 和瞬时位置无关。*(周末真题 Q25)*
9. **霍曼无量纲基准**：速度比 $\Delta v_{\text{total}} / v_{c1}$ 仅取决于内外半径比 $R = r_2/r_1$，与 $\mu$ 无关，是**跨天体通用的工程基准**。*(周末真题 Q26)*
10. **发射方位角双解根源**：公式 $\sin A_0 = \cos i / \cos\phi$，**正弦函数在第一二象限对称共享正弦值**（东北向升交点 vs 东南向降交点）。*(周末真题 Q39)*
11. **无动力月球飞越渐近速度守恒**：月心二体系机械能守恒，飞入与飞出渐近速率标量绝对相等（**$v_{\infty,\text{out}} = v_{\infty,\text{in}}$**），仅仅偏转了速度方向。*(周末真题 Q40)*
12. **两体拼接与真三体数值积分误差分布**：在全航程广阔过渡区内弥散积累，**绝非在影响球面上突发阶跃跳变（A broad transition region, not a step）**。*(周末真题 Q41)*
13. **奔月四大旋钮的一对一映射**：停泊轨道出发点角 $\alpha_0$ 能够**度对度（degree for degree）直接改变地心转移张角 $\Delta\theta$**。*(周末真题 Q42)*
14. **地月网关 NRHO 9:2 共振本质**：9 个轨道周期精准吻合**两个会合月（Two synodic months）**，锁定太阳光照方向，彻底规避日食。*(周末真题 Q43)*

### 🟣 3. Distinction 拔高阶 (2.0 分题) · 极值敏感度与工程陷阱
1. **近地点纯横向点火**：点火后径向速度依然为零（$v_r^+ = 0$），**拱线完全保持不动（Leaves apse line unmoved）**，仅拉高远地点。*(周末真题 Q11)*
2. **逃逸悬崖边缘极端敏感性**：在近逃逸区（$e \approx 0.97$），近地点速度提高千分之几，远地点高度呈现**超过 50% 的剧烈暴涨（More than half again, wholly disproportionate jump）**。*(周末真题 Q12)*
3. **大角度单圈调相地面撞击陷阱**：落后 40° 在单圈内追赶需暴缩周期，使调相椭圆近地点砸入地幔深处，**摧毁航天器（Free apsis drops below surface）**。*(周末真题 Q13)*
4. **霍曼滑行段动能去向**：无阻力保守引力场，速度衰减损失的动能**完全转化为重力势能**。*(周末真题 Q14)*
5. **3D 地月转移面构建几何近似**：初始用地心与月心定面，是未考虑到达角 $\lambda$ 偏折的**初始工程近似，后续由到达角几何闭合消除**。*(周末真题 Q10)*
6. **辛普森星历拟合误差放大**：月球微小位置误差并不是 1:1 平移，而是**由到达双曲线渐近线几何灵敏度放大所决定**。*(周末真题 Q28)*
7. **推进剂质量比不可简单相加**：两次点火前后飞船质量基准不同（分母不同），直接相加是低级数学错误。*(周末真题 Q29)*
8. **纯径向点火力学效应**：矢径与推力共线叉乘为零，**角动量绝对守恒；改变总速度大小与能量，因而改变轨道形状**。*(周末真题 Q30)*
9. **月球出发几何重复周期**：飞船绕地 90 分钟期间月球向前公转了 $0.83^\circ$，飞船必须多飞一点迎头赶上，因此**重复周期略长于停泊轨道周期**。*(周末真题 Q31)*
10. **脱靶残差与灵敏度工程转化**：汇报残差及其微分灵敏度，将抽象数学误差直接转化为**推进与制导硬件系统必须达到的工程研制指标（Propulsion requirement）**。*(周末真题 Q44)*
11. **月心双曲线偏折最强条件**：偏转角 $\delta = 2\arcsin(1/e)$，偏心率 $e = 1 + \frac{r_p v_\infty^2}{\mu_m}$；**速度极慢且掠过极近（Slow and close）时 $e \to 1$ 弯折最剧烈**！*(周末真题 Q45)*
12. **极轨全经度覆盖周期**：降低高度改善相机分辨率，但完整扫完 360 度经度所需时间**雷打不动等于月球自转周期（27.3 天）**。*(周末真题 Q47)*

### 🔴 4. High Distinction 卓越阶 (2.5 分题) · 教授五大工程设计哲学
1. **工程哲学一：“先抓对结构拓扑，再精雕细琢连续变量” (Get the structure right before polishing the variables)**：
   - 变面点从近地点挪到远地点，燃料节约好几倍（结构决定生死）；
   - 在两点之间微调分配比例 50-50 还是 48-52，仅优化百分之几（参数只是润色）。
   - 航天工程师必须永远凭借物理直觉先构建正确的大结构！*(周末真题 Q46)*
2. **工程哲学二：“复合点火二阶微扰免费法则” (Second-Order Cost of Combined Burn)**：
   - 在既有的变轨点火主矢量上叠加微小变面角 $\theta$，速度三角形余弦展开后，额外代价按 $\theta^2$（二阶项）增长；
   - 导数在零点为零，意味着**前几度变面几乎完全免费（First degrees cost little）**！永远要搭便车！*(周末真题 Q48)*
3. **工程哲学三：“推进剂看绝对 $\Delta v$，轨道响应看相对 $\Delta v / v_c$”**：
   - 火箭方程 $m_p = m_f(e^{\Delta v / v_e} - 1)$ 在宇宙任何角落只认绝对 m/s；
   - 但同样的 0.83 km/s，在慢速远地点能将速度暴增 5.4 倍拉爆轨道，在高速 LEO 仅仅改变 10% 轨道；天体力学响应看相对速度比！*(周末真题 Q15)*
4. **工程哲学四：“比冲 $I_{sp}$ 是固有热力学常数，不随天体改变”**：
   - $I_{sp} = v_e / g_0$，其中的 $g_0 \equiv 9.80665\text{ m/s}^2$ 是人为规定的换算常数；在月球上 $I_{sp}$ 依然是 300 秒！*(周末真题 Q16)*
5. **工程哲学五：“弱稳定性边界与弹道捕获——时间让摄动变成能量工具”**：
   - 在月球弱稳定性边界停留数月，微弱的三体引力摄动持续做功，硬生生把飞船相对月球的双曲线能量抽干变成束缚椭圆；**时间将误差升华为免费捕获的工程利器**！*(周末真题 Q50)*
6. **高阶洞见六：出发角动量解析闭式解的两道物理防线**：
   - 分母奇点防线（$h_1 \to \infty$）：**没有任何物理圆锥曲线能在该几何下抵达目标半径 $r_1$**；
   - 偏心率防线（$e = 1$）：**轨道能够抵达 $r_1$，但轨道开放变为逃逸抛物线**。*(周末真题 Q32)*
7. **高阶洞见七：低推力闭式螺旋公式的适用物理边界**：
   - 离子发动机微推力使得轨道像蚊香一样致密，**每时每刻处处保持准正圆（$v \approx v_c$）**，公式完美成立；
   - 化学火箭暴烈加速瞬间把轨道拉扁成大椭圆，彻底粉碎该物理假定！*(周末真题 Q49)*

---
---

# 目录导航 / Table of Contents
- [模块一：Week 2 轨道机动与推进基础 (Orbit Manoeuvres & Propulsion Basics)](#模块一week-2-轨道机动与推进基础-orbit-manoeuvres--propulsion-basics)
  - [1. 冲量机动假定与真近点角扫过弧度 (Impulsive Burn Assumption)](#1-冲量机动假定与真近点角扫过弧度-impulsive-burn-assumption)
  - [2. 齐奥尔科夫斯基火箭方程与比冲本质 (Tsiolkovsky Rocket Equation & Isp)](#2-齐奥尔科夫斯基火箭方程与比冲本质-tsiolkovsky-rocket-equation--isp)
  - [3. 霍曼双脉冲转移与为什么第二点火不能省 (Hohmann Transfer)](#3-霍曼双脉冲转移与为什么第二点火不能省-hohmann-transfer)
- [模块二：Week 2 & 3 替代转移、调相与矢量机动 (Advanced Manoeuvres)](#模块二week-2--3-替代转移调相与矢量机动-advanced-manoeuvres)
  - [4. 双椭圆转移与三大临界阈值 (Bi-elliptic Transfer Thresholds)](#4-双椭圆转移与三大临界阈值-bi-elliptic-transfer-thresholds)
  - [5. 同轨调相：反常识的“减速超车” (Orbital Phasing)](#5-同轨调相反常识的减速超车-orbital-phasing)
  - [6. 离拱点非霍曼与矢量速度改变 (Off-Apsis Transfers & Vector Delta-v)](#6-离拱点非霍曼与矢量速度改变-off-apsis-transfers--vector-delta-v)
- [模块三：Week 3 L4 平面改变与低推力 (Plane Changes & Low Thrust)](#模块三week-3-l4-平面改变与低推力-plane-changes--low-thrust)
  - [7. 轨道平面改变：太空中最昂贵的抢劫 (Plane Changes)](#7-轨道平面改变太空中最昂贵的抢劫-plane-changes)
  - [8. 发射方位角与纬度极限 (Launch Azimuth & Inclination Limit)](#8-发射方位角与纬度极限-launch-azimuth--inclination-limit)
  - [9. 低推力电推进连续螺旋 (Continuous Low-Thrust Spiral)](#9-低推力电推进连续螺旋-continuous-low-thrust-spiral)
- [模块四：Week 4 地月转移初阶与影响球模型 (Earth–Moon Transfers & SOI)](#模块四week-4-地月转移初阶与影响球模型-earthmoon-transfers--soi)
  - [10. 地月霍曼估计与黄金 110 m/s 速度敏感度 (Lunar Hohmann & v0 Sensitivity)](#10-地月霍曼估计与黄金-110-ms-速度敏感度-lunar-hohmann--v0-sensitivity)
  - [11. 拉普拉斯影响球模型：引力并不平衡的建模边界 (Laplace SOI)](#11-拉普拉斯影响球模型引力并不平衡的建模边界-laplace-soi)
- [模块五：Week 5 月心双曲线、近月点与自由返回 (Arrival & Flybys)](#模块五week-5-月心双曲线近月点与自由返回-arrival--flybys)
  - [12. 地月交会几何与闭式角动量 h1 (Departure Geometry & Closed-Form h1)](#12-地月交会几何与闭式角动量-h1-departure-geometry--closed-form-h1)
  - [13. 月心双曲线能量门与撞月判据 (Selenocentric Hyperbola & Impact)](#13-月心双曲线能量门与撞月判据-selenocentric-hyperbola--impact)
  - [14. 飞越偏转角与阿波罗 8 字形自由返回 (Flybys & Apollo Free Return)](#14-飞越偏转角与阿波罗-8-字形自由返回-flybys--apollo-free-return)
- [模块六：Week 6 3D转移、受限三体与环月轨道设计 (3D, 3-Body & Lunar Orbits)](#模块六week-6-3d转移受限三体与环月轨道设计-3d-3-body--lunar-orbits)
  - [15. 3D地月转移、白道振荡与 Simpson 拟合有效期 (3D Conics & Ephemeris)](#15-3d地月转移白道振荡与-simpson-拟合有效期-3d-conics--ephemeris)
  - [16. 圆型受限三体动力学与 RK4 漂移灾难 (CR3BP & RK4 Reality)](#16-圆型受限三体动力学与-rk4-漂移灾难-cr3bp--rk4-reality)
  - [17. 月球质量瘤、冻结轨道与 Artemis / Gateway (Mascons, Frozen Orbits & NRHO)](#17-月球质量瘤冻结轨道与-artemis--gateway-mascons-frozen-orbits--nrho)

---

# 模块一：Week 2 轨道机动与推进基础 (Orbit Manoeuvres & Propulsion Basics)

### 1. 冲量机动假定与真近点角扫过弧度 (Impulsive Burn Assumption)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.2 *Impulsive maneuvers*, **Book pp. 287–289 (PDF pp. 294–296)**; Section 6.10 *Nonimpulsive orbital maneuvers*, **Book pp. 329–335 (PDF pp. 336–342)**

#### 1.1 什么是冲量机动假定？（0 基础人话图像）
- 在现实中，火箭发动机点火需要持续几十秒甚至上千秒。但在经典的开普勒轨道计算中，推导公式极度复杂。
- 于是科学家引入了一个极其优美的简化模型：**冲量机动假定（Impulsive Burn Assumption）**。
- 把它想象成**在太空中被神之锤瞬间敲了一下**：
  1. **位置连续不变 (Position is strictly continuous)**：点火发生在电光石火之间，飞船在三维空间中的坐标根本来不及移动，点火前一微秒与点火后一微秒在同一个位置：
     $$\mathbf{r}^+ = \mathbf{r}^-$$
  2. **速度瞬时跳变 (Velocity experiences a jump)**：火箭发动机产生的推力被积聚成一个瞬时的速度增量向量 $\Delta\mathbf{v}$，使轨道速度瞬间改变：
     $$\mathbf{v}^+ = \mathbf{v}^- + \Delta\mathbf{v}$$
  3. **轨道的几何本质**：变轨的本质，就是在**同一个空间点**，强行把速度改掉，从而让飞船在这一瞬间脱离旧轨道、立即切入新轨道！

#### 1.2 怎么判断一次点火“违背冲量假定有多严重”？（GSAT-31 经典真题案例）
- 很多人以为看发动机喷了多少分钟（钟表时间 $t_{\text{burn}}$），**这是大错特错的！**
- **生动的真题案例**：印度大型通信卫星 GSAT-31 使用小推力发动机进行远地点变轨，整整喷了 **78 分钟**！78 分钟难道不是极漫长的时间吗？
  - **在远地点（Apogee）喷**：根据开普勒第二定律，远地点飞船速度极慢，像蜗牛在爬。78 分钟过去，飞船绕地球只前进了 **10 度的圆弧角（$\Delta\theta \approx 10^\circ$）**！从地球上看，它几乎就悬在同一个点没动，因此冲量模型精度极高！
  - **如果在近地点（Perigee）喷**：近地点飞船速度极快，78 分钟会疯狂绕地球飞过 **216 度（大半圈）**！飞船的方向彻底倒转，推力方向和速度方向一塌糊涂，产生极大的引力损耗（Gravity Loss），冲量假定彻底崩塌！
- 🎯 **物理金标准**：衡量点火是否符合冲量模型的物理量是**发动机工作期间真近点角扫过的弧度（The arc of true anomaly swept while engine runs $\Delta\theta$）**，而不是钟表流逝的时间！

---


#### 1.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q03, Q05; Weekend Set B Q03, Q07; 仿真考题 1, 2
- **核心考法拆解**：
  1. **冲量理想化假定的物理几何本质**：速度瞬变（$\Delta \mathbf{v} \neq 0$），位置严格不变（$\Delta \mathbf{r} = 0$）。
  2. **模型适用性的首要无量纲判据**：点火持续时间远小于轨道周期（$\Delta t_{burn} / T_{orbit} \ll 1$，通常 $< 1\%$），扫过的真近点角极小。
  3. **违背假定的工程后果**：点火时间过长会导致“重力损失（Gravity Loss）”与“推力方向与速度失配”，必须弃用高斯/两体模型，转入有限推力数值积分。
- **教授干扰项特征**：选项常诱导选“发动机是化学还是电推进”（物理实现非力学标准）、“$\Delta v$ 小于 1 km/s”（数值绝对大小与冲量假定无关）、“飞船质量保持恒定”（火箭喷气质量剧烈减小）。
- **1 秒秒杀口诀**：**冲量假定看两点：位置不动速度瞬变，点火时间远小于周期！**


### 2. 齐奥尔科夫斯基火箭方程与比冲本质 (Tsiolkovsky Rocket Equation & Isp)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 13, Section 13.2 *The thrust equation* & Section 13.3 *Rocket performance*, **Book pp. 708–712 (PDF pp. 715–719)**, Equations 13.10–13.18

#### 2.1 齐奥尔科夫斯基火箭方程（The Rocket Equation）
火箭在太空中加速，靠的是把自身携带的推进剂高速向后喷出。由于自身质量随着燃料消耗不断减轻，加速度越来越大：
$$\Delta v = v_e \ln\left(\frac{m_0}{m_f}\right) = I_{sp} g_0 \ln\left(\frac{m_0}{m_f}\right)$$
- $m_0$：起喷前总质量（结构 + 载荷 + 燃料，Initial total mass）。
- $m_f$：喷完后最终质量（结构 + 载荷，Final dry mass）。
- $m_p = m_0 - m_f$：消耗掉的燃料质量。
- $g_0 = 9.807\text{ m/s}^2$：地表标准重力加速度。

#### 2.2 质量比的“指数暴政”（The Tyranny of the Rocket Equation）
把公式反过来解质量比：
$$\frac{m_0}{m_f} = \exp\left(\frac{\Delta v}{I_{sp} g_0}\right)$$
- 这是一个极度残酷的**指数增长关系**！
- 假设你想要两倍的 $\Delta v$，你需要携带的燃料不是翻倍，而是**平方倍**！飞船 90% 以上的重量都是用来推燃料本身的燃料。这就是为什么在太空里节省哪怕 $50\text{ m/s}$ 的 $\Delta v$，都能为卫星省下数百万美元的宝贵载荷。

#### 2.3 比冲 $I_{sp}$ 到底是什么？（为什么单位是秒？）
- $I_{sp}$（Specific Impulse）定义为：**消耗单位海平面重量的推进剂所能产生的冲量**：
  $$I_{sp} = \frac{\text{Total Impulse}}{m_p g_0} = \frac{F \cdot \Delta t}{m_p g_0} = \frac{v_e}{g_0}$$
- **量纲解密**：有效排气速度 $v_e$ 单位是 $\text{m/s}$，$g_0$ 单位是 $\text{m/s}^2$。两者相除：
  $$\frac{\text{m/s}}{\text{m/s}^2} = \text{seconds (秒)}$$
- ⚠️ **期中考第一陷阱**：$I_{sp} = 300\text{ s}$ 绝对不代表发动机只能点火 300 秒！它纯粹是历史遗留下来的推进剂质量效率指标。$I_{sp}$ 越高，代表排气速度 $v_e$ 越快，发动机越省燃料！
- ⚠️ **高比冲 $\neq$ 大推力**：化学火箭比冲低（$300 \sim 450\text{ s}$），但推力巨大（几百吨），能从地面垂直砸向天空；离子电推进比冲极高（$3000\text{ s}$），但推力只有几十毫牛（相当于一张纸放在手心的重量），无法用于起飞。

---


#### 2.4 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q04, Q16; Weekend Set B Q15, Q16; 仿真考题 3
- **核心考法拆解**：
  1. **比冲中的 $g_0$ 是法正常数**：$g_0 \equiv 9.80665\text{ m/s}^2$ 是人为单位换算常数，绝非当地重力！在月球、火星或深空零重力下，同一发动机的标称比冲严格保持 300 秒不变。
  2. **工质认绝对增量，轨道看相对比值**：推进剂消耗量严格由绝对速度增量 $\Delta v$ 和 $I_{sp}$ 决定（指数暴政）；但该点火对轨道几何的震撼改变程度，取决于 $\Delta v / v_c$ 相对局域环绕速度的比值。
- **教授干扰项特征**：选项极度喜欢诱导“在月球表面重力为 1/6 地球，比冲变成 50 秒或 1800 秒”。记住：$I_{sp} = c / g_0$，排气速度 $c$ 不变，$g_0$ 不变，比冲纹丝不动！
- **1 秒秒杀口诀**：**比冲常数天地不变，推进剂烧绝对 $\Delta v$，轨道剧变看相对比值！**


### 3. 霍曼双脉冲转移与为什么第二点火不能省 (Hohmann Transfer)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.3 *Hohmann transfer*, **Book pp. 289–295 (PDF pp. 296–302)**, Equation 6.13, Example 6.1

#### 3.1 霍曼转移的几何全景
德国工程师瓦尔特·霍曼在 1925 年提出：在两条**同心圆、共面**轨道之间，用一条两端分别与它们相切的椭圆来转移，是**燃料消耗最少（最优）的双脉冲机动**。

```
                       (远地点 Apogee: 第二次点火圆化)
                                 *  rb = r2 (终轨 Target Orbit)
                              .·´ `·.
                           .·´       `·.  转移椭圆 (Transfer Ellipse)
                         .´    ---      `. 
                        /    /     \                             |    | Earth |      |
                        \    \     /      /
                         `.    ---      .´  ra = r1 (初轨 Initial Orbit)
                           `·.       .·´
                              `·. .·´
                                 *  (近地点 Perigee: 第一次点火加速)
```

#### 3.2 详细公式链与解题五步法
1. **第一步：求转移椭圆半长轴 $a_t$**：
   $$a_t = \frac{r_1 + r_2}{2}$$
2. **第二步：求霍曼飞行时间 $t_H$（刚好飞半圈椭圆）**：
   $$t_H = \pi \sqrt{\frac{a_t^3}{\mu}}$$
3. **第三步：求第一次近地点加速点火 $\Delta v_1$**：
   在 $r_1$ 处的初始圆速度为 $v_{c1} = \sqrt{\mu/r_1}$。
   在转移椭圆近地点的速度由活力公式（Vis-viva）给出：$v_{t1} = \sqrt{\mu\left(\frac{2}{r_1} - \frac{1}{a_t}\right)} = \sqrt{\frac{\mu}{r_1}} \sqrt{\frac{2r_2}{r_1+r_2}}$。
   $$\Delta v_1 = v_{t1} - v_{c1} = \sqrt{\frac{\mu}{r_1}} \left(\sqrt{\frac{2r_2}{r_1+r_2}} - 1\right)$$
4. **第四步：求第二次远地点圆化点火 $\Delta v_2$**：
   到达 $r_2$ 时，飞船在转移椭圆远地点的速度衰减为：$v_{t2} = \sqrt{\frac{\mu}{r_2}} \sqrt{\frac{2r_1}{r_1+r_2}}$。
   而在 $r_2$ 维持圆轨道的圆速度是 $v_{c2} = \sqrt{\mu/r_2}$。
   $$\Delta v_2 = v_{c2} - v_{t2} = \sqrt{\frac{\mu}{r_2}} \left(1 - \sqrt{\frac{2r_1}{r_1+r_2}}\right)$$
5. **第五步：总速度增量（代数绝对值之和）**：
   $$\Delta v_{\text{total}} = |\Delta v_1| + |\Delta v_2|$$

#### 3.3 为什么第二次点火绝对不能省？
- 第一次点火只是把轨道从“小圆”拉成了“椭圆”。
- 到达远地点时，飞船的动能很小，如果发动机不喷火圆化（Circularise），根据开普勒椭圆守恒定律，**飞船会顺着这条椭圆轨道重新跌回初始低轨道的近地点**！它根本不会留在大圆轨道上。

---

# 模块二：Week 2 & 3 替代转移、调相与矢量机动 (Advanced Manoeuvres)


#### 3.4 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q02, Q11, Q20, Q25; Weekend Set B Q04, Q11, Q20, Q25; 仿真考题 4
- **核心考法拆解**：
  1. **两次点火的悬殊比例**：飞往月球距离，近地点加速 $\Delta v_1 \approx 3.14\text{ km/s}$ 远大于远地点入轨 $\Delta v_2 \approx 0.83\text{ km/s}$（大数倍之多）。
  2. **无动力滑行能量守恒**：从近地点滑行到远地点，飞船减速的动能 100% 转化为克服地球引力做功的引力势能。
  3. **无量纲基准通用性**：总速度增量与内轨速度之比 $\Delta v_{total} / v_{c1}$ 仅取决于半径比 $r_2 / r_1$，消去了天体质量 $\mu$，是跨所有天体通用的经典 benchmark。
- **教授干扰项特征**：常说“两端点火几乎相等”或“动能被第一次点火带走/被阻力消耗”。
- **1 秒秒杀口诀**：**霍曼转移近地点点火大得多，滑行减速动能全换势能，半径比决定无量纲基准！**


### 4. 双椭圆转移与三大临界阈值 (Bi-elliptic Transfer Thresholds)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.4 *Bielliptic Hohmann transfer*, **Book pp. 295–298 (PDF pp. 302–305)**, Equations 6.16–6.18, Figure 6.7, Example 6.2

#### 4.1 什么是双椭圆转移？（曲线救国的物理玄机）
- 霍曼转移只点两次火，而双椭圆转移（Bi-elliptic transfer）点**三次火**。
- **操作步骤**：
  1. 在 $r_1$ 处猛踩一脚大油门，把飞船扔到宇宙极远处的中间远地点 $r_b$（$r_b > r_2$）。
  2. 飞船飞到遥远无比的 $r_b$ 时，由于离地球极远，**速度已经变成极慢的龟速**！此时只要轻轻喷一丁点火（极小的 $\Delta v_2$），就能以极其低廉的代价把近地点从 $r_1$ 抬高到 $r_2$！
  3. 飞船滑回到 $r_2$ 时，进行第三次减速圆化点火 $\Delta v_3$。

#### 4.2 三大临界阈值（考试必背金标准）
把最终圆半径与初始圆半径的比值设为 $R = r_2 / r_1$：
1. **$R < 11.94$**：**霍曼转移绝对是无可替代的省油之王！** 双椭圆在任何情况下都不会比霍曼省。
2. **$11.94 < R < 15.58$**：**不一定**。只有当中间远地点 $r_b$ 推得足够高时，双椭圆才可能更省。
3. **$R > 15.58$**：只要 $r_b > r_2$，**三脉冲双椭圆注定比霍曼转移更省燃料**！
- ⚠️ **工程代价**：虽然省了一点点燃料，但飞船飞到几百万公里外的 $r_b$ 再滑回来，飞行时间往往长达数月甚至数年。

---


#### 4.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q33; Weekend Set B Q33; 仿真考题 5
- **核心考法拆解**：
  1. **三大临界阈值牢记心中**：
     - $R = r_2 / r_1 < 11.94$：霍曼双脉冲绝对最优，双椭圆绕道永远亏本。
     - $11.94 < R < 15.58$：双椭圆取决于中间远地点高度 $r_i$，当 $r_i > r_i^*$ 足够高时胜出。
     - $R > 15.58$：只要中间远地点放到无穷大（Biparabolic），总速度增量无条件小于霍曼！
  2. **结合变面的平衡角（Break-even Angle）**：将变轨面放在双椭圆中间远地点，仅在倾角改变大于临界平衡角（通常 $> 40^\circ \sim 60^\circ$）时才划算。
- **教授干扰项特征**：常声称“双椭圆在任何角度或任何半径比下都优于霍曼”。
- **1 秒秒杀口诀**：**11.94 霍曼称王，15.58 无穷反超，大角度变面双椭圆才划算！**


### 5. 同轨调相：反常识的“减速超车” (Orbital Phasing)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.5 *Phasing maneuvers*, **Book pp. 298–308 (PDF pp. 305–315)**, Equations 6.19–6.25, Example 6.3 & 6.4

#### 5.1 场景描述
空间站（Target）和追击飞船（Chaser）在同一条圆轨道上，但空间站跑在飞船前面 $\Delta\theta$ 的位置。飞船如何追上空间站？

#### 5.2 反常识的力学链条（为什么踩油门必定失败？）
- **日常开车直觉**：前车比我快，我应该踩油门加速追（Prograde burn）。
- **太空中踩油门的下场**：
  $$\text{加速点火} \implies \text{速度增大} \implies \text{比能量 } \varepsilon \text{ 增大} \implies \text{半长轴 } a \text{ 变大！}$$
  由开普勒第三定律 $T = 2\pi\sqrt{\frac{a^3}{\mu}}$ 可知，**轨道周期 $T$ 显著变长**！飞船跑到外圈去了，绕一圈花费的时间变长，等飞船转完一圈回到原点时，前面的空间站早就跑得没影了！
- **太空中正确的“减速超车”**：
  1. 朝后踩刹车喷气（**Retrograde burn**）！
  2. 飞船速度变慢，轨道机械能变小，跌入**更小的内圈椭圆轨道**（半长轴 $a_{\text{phase}} < a$）。
  3. **周期缩短**（$T_{\text{phase}} < T$）！飞船在内圈飞速转完一圈，比外圈的空间站更早跑回交会点！
  4. 只要设计好周期的差值，转过若干圈后，飞船回到交会点时恰好与空间站重合，此时再补一脚油门变回圆轨道，完美交会！
- 调相轨道半长轴公式：
  $$a_{\text{phase}} = \left[\mu \left(\frac{T_{\text{phase}}}{2\pi}\right)^2\right]^{1/3}$$

---


#### 5.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q10, Q19, Q26; Weekend Set B Q10, Q19, Q26; 仿真考题 6
- **核心考法拆解**：
  1. **落后追赶反向操作**：落后目标必须减速降轨，压缩周期 $T < T_0$ 走内圈超车。
  2. **逆向尺寸设计流程**：先由相位差定目标周期 $T_{phase}$，再由周期根据开普勒第三定律反推半长轴 $a$（Runs backwards）。
  3. **单圈调相撞地死穴**：低轨若试图在单圈内抹平大落后角度（如落后 40°），算出的椭圆近地点直接跌破地球表面（Drop below surface），必须拆为多圈小幅追赶。
- **教授干扰项特征**：常诱导“踩油门加速追赶”或“单圈调相完美满足方程所以完全安全”。
- **1 秒秒杀口诀**：**超车先减速走内圈，周期反推半长轴，低轨大角度单圈必撞地！**


### 6. 离拱点非霍曼与矢量速度改变 (Off-Apsis Transfers & Vector Delta-v)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.6 *Non-Hohmann transfers with a common apse line* (Book pp. 303–308, PDF pp. 310–315) & Section 6.7 *Apse line rotation* (Book pp. 308–313, PDF pp. 315–320), Example 6.7 & 6.8

#### 6.1 离开拱点后，速度有了方向夹角
- 在近地点（Perigee）和远地点（Apogee），航迹角 $\gamma = 0$，速度方向纯粹垂直于地心连线（当地水平）。
- 只要离开拱点，速度立刻分解为两个分量：
  - 径向速度（Radial velocity，向外或向内地心拉扯）：$v_r = \frac{\mu}{h} e \sin\theta$
  - 横向速度（Azimuthal/Transverse velocity，绕转飞奔）：$v_\perp = \frac{\mu}{h} (1 + e \cos\theta) = \frac{h}{r}$
  - 航迹角满足：$\tan\gamma = \frac{v_r}{v_\perp} = \frac{e \sin\theta}{1 + e \cos\theta}$

#### 6.2 速度大小不变，$\Delta v$ 为什么不为零？
- 假设点火前速度大小是 $7.5\text{ km/s}$，点火后速度大小依然是 $7.5\text{ km/s}$，但航迹角偏转了 $10^\circ$。
- 火箭发动机产生推力改变的是**向量差**：
  $$\Delta\mathbf{v} = \mathbf{v}^+ - \mathbf{v}^-$$
- 由向量余弦定理：
  $$\Delta v = \|\Delta\mathbf{v}\| = \sqrt{(v^-)^2 + (v^+)^2 - 2 v^- v^+ \cos(\Delta\gamma)}$$
  当 $v^- = v^+ = v$ 时：
  $$\Delta v = 2 v \sin\left(\frac{\Delta\gamma}{2}\right) \neq 0$$
  即使完全不改变快慢，**仅仅在太空中扭转速度的方向，就必须实打实地喷出大量燃料！**

---

# 模块三：Week 3 L4 平面改变与低推力 (Plane Changes & Low Thrust)


#### 6.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q12, Q30; Weekend Set B Q12, Q30; 仿真考题 7
- **核心考法拆解**：
  1. **纯径向点火效应**：$\Delta \mathbf{v} \parallel \mathbf{r} \implies \mathbf{r} \times \Delta \mathbf{v} = 0$，**比角动量 $h$ 严格不变**！但总能量改变，半长轴 $a$、偏心率 $e$ 剧变，且拱线发生强烈旋转。
  2. **近地点纯横向点火**：保持轨道对称性，**拱线空间取向完全不动**（Leaves apse line unmoved），只对称地推高或降低远地点。
- **教授干扰项特征**：常声称“径向点火改变角动量”或“近地点切向点火旋转拱线”。
- **1 秒秒杀口诀**：**径向点火角动量不变但改形状转拱线，近地切向点火拱线纹丝不动！**


### 7. 轨道平面改变：太空中最昂贵的抢劫 (Plane Changes)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.9 *Plane change maneuvers*, **Book pp. 317–328 (PDF pp. 324–335)**, Equations 6.26, 6.30, 6.32, Example 6.9 & 6.10

#### 7.1 24 度变面惊人定律：转个弯代价等于逃逸地球！
纯粹转动轨道平面角度 $\delta$（速度大小不变）的公式为：
$$\Delta v = 2 v \sin\left(\frac{\delta}{2}\right)$$
- 如果转动 $\delta = 24^\circ$，则 $\frac{\delta}{2} = 12^\circ$。
- 查正弦表：$2 \sin(12^\circ) = 2 \times 0.2079 = \mathbf{0.414}$！
- 这意味着 $\Delta v = 0.414 v_c = \mathbf{41.4\% v_c}$。
- 而从圆轨道加速到抛物线逃逸地球的增量是：
  $$\Delta v_{\text{escape}} = v_{\text{esc}} - v_c = (\sqrt{2} - 1) v_c = (1.414 - 1) v_c = \mathbf{0.414 v_c = 41.4\% v_c}$$
- 🎯 **震撼的物理结论**：**在轨道上仅仅转弯 24 度，消耗的燃料就足以把这艘飞船彻底送出地球引力圈、飞向深空！** 变面是轨道机动中代价极高昂的操作。

#### 7.2 变面最佳点火位置的两大约束
1. **几何相交约束**：点火点必须位于新旧两个轨道平面的**交线（Line of nodes）**上，否则无法进入新平面。
2. **能量最小化约束**：因为 $\Delta v \propto v$，飞船飞得越慢，转弯越便宜。因此在椭圆轨道上，**必须挑在速度最慢的远地点（Apoapsis）点火！**

#### 7.3 为什么组合点火（Combined Burn）能救命？
- 如果你在远地点既需要变速度大小（由 $v_1$ 变为 $v_2$），又需要变面 $\delta$：
  - **分步点火（愚蠢做法）**：先踩刹车变速度，再横向点火变面，总消耗是两段代数相加 $\Delta v = |v_1 - v_2| + 2 v_2 \sin(\delta/2)$。
  - **组合点火（聪明做法）**：发动机朝斜后方一次喷完，利用向量三角形第三边：
    $$\Delta v = \sqrt{v_1^2 + v_2^2 - 2 v_1 v_2 \cos\delta}$$
  - 三角形任意两边之和必大于第三边！组合点火能够节省大量的宝贵燃料。

---


#### 7.4 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q35, Q47, Q49; Weekend Set B Q35, Q47, Q49; 仿真考题 8
- **核心考法拆解**：
  1. **远心点最便宜定律**：$\Delta v = 2v\sin(\Delta i / 2)$ 与线速度成正比，远心点速度最低，最省燃料。
  2. **结合机动的二阶泰勒小量免费赠送**：在切向大加减速中顺带变面，余弦展开 $\cos\Delta i \approx 1 - \frac{1}{2}\Delta i^2$，额外代价以**二阶小量（Second order）**进入，最初几度近乎免费！
  3. **架构优先哲学**：选在远地点还是近地点变轨是决定生死的结构性架构决策（差异数倍）；在两次点火间微调倾角分配收益极小。
- **教授干扰项特征**：常将奥伯特近地点法则死板搬到变轨面上，或宣称结合机动额外代价是线性的。
- **1 秒秒杀口诀**：**变面认准远心点，结合机动二阶小量近免费，顶层架构定生死！**


### 8. 发射方位角与纬度极限 (Launch Azimuth & Inclination Limit)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.9 *Plane change maneuvers*, **Book pp. 326–328 (PDF pp. 333–335)**, Equation 6.38b, Example 6.11

#### 8.1 核心公式与推导
火箭从地球表面发射，地球从西向东自转，给火箭免费赠送了一个东向的线速度。
轨道倾角 $i$、发射场地理纬度 $\phi$ 与发射瞄准方位角 $A_0$（自正北顺时针量起）满足球面直角三角函数关系：
$$\cos i = \cos \phi \sin A_0$$

#### 8.2 极值分析与发射场地理悲喜剧
- 如果你**正东发射（Due East）**，完全顺应地球自转速度方向，此时 $A_0 = 90^\circ \implies \sin A_0 = 1$。
- 公式化简为：
  $$\cos i = \cos \phi \cdot 1 \implies \mathbf{i_{\min} = \phi}$$
- 🎯 **残酷的航天发射定律**：
  1. **从纬度 $\phi$ 直接发射，你能直接打出的最低轨道倾角恰好等于你的发射场纬度！**
  2. **赤道发射场是世界稀缺资产**：在欧洲航天局的法属圭亚那库鲁基地（北纬 $5^\circ$），能轻松打出接近 $0^\circ$ 的静止通信卫星轨道；而在美国佛罗里达肯尼迪航天中心（北纬 $28.5^\circ$），直接发射最低只能进入 $28.5^\circ$ 倾角，要想进入赤道平面，必须在入轨后再消耗昂贵的燃料做变面！

---


#### 8.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q41, Q43; Weekend Set B Q41, Q43; 仿真考题 9
- **核心考法拆解**：
  1. **互补双根共享正弦**：球面公式 $\cos i = \cos\phi \sin\beta$ 解出 $\sin\beta = \cos i / \cos\phi$。由于 $\sin\beta = \sin(180^\circ - \beta)$，同一发射场入同一倾角必有东北与东南两个互补发射角。
  2. **几何铁律 vs 管制法规**：发射场纬度是决定最低倾角（$i \ge |\phi|$）的不可改变几何铁律；方位角走廊是出于残骸落区安全的人为人为条例，可审批豁免。
- **教授干扰项特征**：将双根归咎于“顺行逆行”或“地球南北半球等价”。
- **1 秒秒杀口诀**：**方位角互补共享正弦，纬度是几何铁律，方位角范围是安全法规！**


### 9. 低推力电推进连续螺旋 (Continuous Low-Thrust Spiral)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.10 *Nonimpulsive orbital maneuvers*, **Book pp. 329–335 (PDF pp. 336–342)**, Equation 6.39, Example 6.12

- **工作机制**：与化学火箭几分钟的暴烈冲量不同，离子推进器推力极微弱，沿轨道切线方向连续喷火数月甚至数年。
- **几何轨迹**：飞船以肉眼不可见的速度慢慢盘旋展开，轨道在每一个瞬间都几乎是圆，从低圆轨道缓缓盘旋成高圆轨道。
- **Curtis Eq. 6.39 核心公式**：
  $$\Delta v \approx |v_{c1} - v_{c2}|$$
  连续切向微推力螺旋爬升所需的理论总速度增量，几乎恰好等于初始圆轨道速度与最终圆轨道速度之标量绝对值之差！

---

# 模块四：Week 4 地月转移初阶与影响球模型 (Earth–Moon Transfers & SOI)


#### 9.2 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q50; Weekend Set B Q50; 仿真考题 10
- **核心考法拆解**：
  1. **闭式公式假定条件**：Curtis Eq. 6.39 给出 $\Delta v \approx |v_{c1} - v_{c2}|$。它要求航天器在每一处向径的速度都严格等于当地圆轨道速度。
  2. **电推与化学火箭的分水岭**：离子电推加速度极小，万圈外展螺旋始终保持准圆（Nearly circular），公式公允精确；化学火箭推力巨大瞬间变成大椭圆，公式完全失真。
- **教授干扰项特征**：常将公式适用性归咎于“推进剂密度”或“氙气专用”。
- **1 秒秒杀口诀**：**电推进准圆蚊香线速度差闭式解，化学火箭大椭圆严禁套用！**


### 10. 地月霍曼估计与黄金 110 m/s 速度敏感度 (Lunar Hohmann & v0 Sensitivity)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 9, Section 9.1 & 9.2, **Book pp. 437–442 (PDF pp. 444–449)**, Equations 9.1–9.9

#### 10.1 地月霍曼基准参数
- 近地点半径（300 km LEO）：$r_0 = 6378 + 300 = 6678\text{ km}$。
- 远地点半径（月球轨道距离）：$r_m = 384,400\text{ km}$。
- 转移椭圆半长轴：$a_t = \frac{6678 + 384400}{2} = 195,539\text{ km}$。
- 起飞注入速度（TLI injection speed）：
  $$v_0 = \sqrt{\mu_e \left(\frac{2}{r_0} - \frac{1}{a_t}\right)} \approx \mathbf{10.92\text{ km/s}}$$
- 地球逃逸速度：
  $$v_{\text{esc}} = \sqrt{\frac{2\mu_e}{r_0}} \approx \mathbf{11.03\text{ km/s}}$$

#### 10.2 惊心动魄的“黄金 110 m/s 狭缝”
- 计算差值：
  $$11.03\text{ km/s} - 10.92\text{ km/s} = 0.11\text{ km/s} = \mathbf{110\text{ m/s}}$$
- 🎯 **物理深度**：能够到月球的最小速度（$10.92\text{ km/s}$）与彻底甩脱地球引力逃逸深空的速度（$11.03\text{ km/s}$），**仅仅相隔 110 m/s（只有 1% 的微小窗口）**！
- **三位有效数字灾难**：如果发动机控制产生 $1\text{ m/s}$（0.01%）的微弱误差，远地点会直接漂移 **$3,400\text{ km}$**，直接导致任务脱靶失败！

---


#### 10.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q01, Q08, Q09, Q13, Q18; Weekend Set B Q01, Q08, Q09, Q13, Q18; 仿真考题 11
- **核心考法拆解**：
  1. **注入速度天梯四大层级**：
     - 低于霍曼：远地点到不了月球。
     - 霍曼行：远地点恰好切中月球轨道。
     - 逃逸行：比机械能跨过零点（$\varepsilon = 0$），抛物线，其上不再有有限远地点！
     - 束缚椭圆（Bound orbit）：特征能量 $C_3 < 0$ 恒为负，若错过月球必定自动落回近地点；双曲线（$\varepsilon > 0$）一去不返。
  2. **敏感度爆炸放大**：近地点少喷不到 $1\text{ m/s}$，远地点跌落**数千公里**（$\sim 1100\text{ km}/(\text{m/s})$）；近地点速度提升千分之几，远地点暴增过半（More than half again）！
- **教授干扰项特征**：线性比例假设（以为误差几米每秒只会差几公里）。
- **1 秒秒杀口诀**：**逃逸行机械能归零无远地点，1 m/s 差千公里，束缚必回近地点！**


### 11. 拉普拉斯影响球模型：引力并不平衡的建模边界 (Laplace SOI)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 8, Section 8.4 *Sphere of influence*, **Book pp. 392–396 (PDF pp. 399–403)**, Equation 8.24; Chapter 9, Section 9.2, **Book p. 440 (PDF p. 447)**

#### 11.1 影响球半径公式与推导
$$R_S = D \left(\frac{m_{\text{moon}}}{m_{\text{earth}}}\right)^{2/5} = 384,400 \times \left(\frac{7.348 \times 10^{22}}{5.974 \times 10^{24}}\right)^{2/5} \approx \mathbf{66,183\text{ km}}$$

#### 11.2 考试最大认知雷区：引力平衡了吗？
- ❌ **严重误区**：“影响球边界上，地球和月球对飞船的引力正好抵消平衡。”
- ✔️ **物理真实情况**：
  - 在 $66,183\text{ km}$ 边界处，地球引力 $a_e = \frac{\mu_e}{(D - R_S)^2} \approx 3.93 \times 10^{-3}\text{ m/s}^2$。
  - 月球引力 $a_m = \frac{\mu_m}{R_S^2} \approx 1.12 \times 10^{-3}\text{ m/s}^2$。
  - **地球引力依然比月球大整整 3.5 倍！**
- 🎯 **那么拉普拉斯为什么定义这个球？**
  - 如果你在影响球外以月球为中心算轨道，地球的潮汐摄动项比月球自身引力还大；
  - 只有钻入 $R_S$ 这个球面之内，**把月球作为中心天体、把地球视为小摄动**，两体轨道摄动方程在数学上才是收敛的！它纯粹是人类为了解算两体拼接轨道而发明的**数学模型坐标切换面**。飞船穿过边界时，物理运动丝滑连续，没有任何引力突变。

---

# 模块五：Week 5 月心双曲线、近月点与自由返回 (Arrival & Flybys)


#### 11.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q17, Q27; Weekend Set B Q17, Q27; 仿真考题 12
- **核心考法拆解**：
  1. **空间与时间严重脱钩**：月球影响球半径占地月总距离仅 $17\%$，但由于飞船在远端速度慢如蜗牛（爬出深井动能耗尽），飞船在影响球内部耗费时间占总航程超 $35\%$！
  2. **无量纲交接排名**：交接质量以 $r_{SOI} / D = (m/M)^{2/5}$ 排名，衡量过渡模糊区占整条旅程的几何份额。
  3. **引力非平衡本质**：在月球影响球边界，地球引力仍然是月球引力的 84 倍，影响球是相对摄动比平衡，非合力为零。
- **教授干扰项特征**：常选“影响球是合力平衡面”或“距离占比与时间占比同频”。
- **1 秒秒杀口诀**：**影响球非引力平衡点，高处速度极慢导致距离短而时间长！**


### 12. 地月交会几何与闭式角动量 h1 (Departure Geometry & Closed-Form h1)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 9, Section 9.2, **Book pp. 440–446 (PDF pp. 447–453)**, Equation 9.18 & Equations 9.10–9.20

#### 12.1 飞碟射击原理与到场冻结坐标系
- 飞船飞行需要 $3.2\text{ 天}$，月球每天公转 $13.18^\circ$。在飞船飞行的这几天里，月球在轨道上向前奔跑了：
  $$\text{Lead Angle} = \omega_m \Delta t_1 \approx 13.18^\circ/\text{天} \times 3.2\text{ 天} \approx \mathbf{36.3^\circ} \quad (\approx \mathbf{244,000\text{ km}})$$
- **坐标系设定**：地心为原点，$x$ 轴**钉在交会瞬间的月球球心**，$y$ 轴指向交会瞬间月球公转速度方向（$\mathbf{v}_m = v_m \hat{\mathbf{j}}$）。

#### 12.2 张角公式与 Curtis Eq. 9.18 闭式解
- 交会张角：$\cos\Delta\theta = \hat{\mathbf{u}}_{r0} \cdot \hat{\mathbf{u}}_{r1}$。
- **Curtis 闭式方程 (Book p. 444, PDF p. 451)**：
  $$h_1 = \sqrt{\frac{2\mu_e r_0 r_1 (1 - \cos\Delta\theta)}{r_1^2 - r_0^2 \cos^2\Delta\theta - 2 r_0 r_1 \sin\Delta\theta \tan\gamma_0}}$$
- 给定起飞航迹角 $\gamma_0$，直接闭式解析求出角动量 $h_1$，彻底颠覆了传统的盲目打靶试凑算法。

---


#### 12.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q22, Q29, Q32, Q38, Q40; Weekend Set B Q22, Q29, Q32, Q38, Q40; 仿真考题 13
- **核心考法拆解**：
  1. **超前角与飞行时间正比**：$\phi_1 = \omega_m \Delta t_1$。注入速度越高，飞行时间越短，超前角越小（Smaller）。
  2. **发射几何慢于驻留周期**：飞船绕地一圈期间月球向前公转，飞船必须多转一点去迎合新几何，重复周期更长。
  3. **闭式解两道红线**：一道分母为零几何够不着，一道 $e=1$ 够得着但已开裂为双曲线。
  4. **一度换一度旋钮**：改变出发点位置角 $\theta_0$，地心转移张角 $\Delta\theta$ 丝毫不差等量改变一度。
- **教授干扰项特征**：常误选“飞得快超前角变大”或“两道红线是同一回事”。
- **1 秒秒杀口诀**：**飞得快超前角变小，靶子在跑周期变慢，出发角一度换一度！**


### 13. 月心双曲线能量门与撞月判据 (Selenocentric Hyperbola & Impact)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 9, Section 9.2, **Book pp. 445–449 (PDF pp. 452–456)**, Equations 9.21–9.32 & Example 9.1

#### 13.1 速度补丁与双曲线能量门
- 在影响球边界进行伽利略参考系速度变换：$\mathbf{v}_2 = \mathbf{v}_1 - \mathbf{v}_m$（相对速度高达约 $0.94\text{ km/s}$）。
- 月心比能量计算：
  $$\varepsilon_2 = \frac{v_2^2}{2} - \frac{\mu_m}{R_S} \approx 0.44 - 0.07 = \mathbf{+0.37\text{ km}^2/s^2 > 0}$$
- 比能量严格为正，对应开普勒双曲线偏心率：
  $$e_2 = \sqrt{1 + \frac{2\varepsilon_2 h_2^2}{\mu_m^2}} \mathbf{> 1}$$
- 🎯 **定性金结论**：直飞月球的飞船携带着巨大的相对动能，**两体引力下 100% 必然是双曲线，月球绝对无法自然捕获飞船**！必须施加动力制动。

#### 13.2 近月点与撞月生死判据
- 近月距：$r_{p2} = \frac{h_2^2}{\mu_m (1 + e_2)}$。
- 净高度：$z_{p2} = r_{p2} - R_m \quad (R_m = 1737.4\text{ km})$。
- **撞月金标准**：若 $\mathbf{z_{p2} < 0}$，理论近月点埋在月球地表下，飞船在到达近月点前高速粉碎撞毁。

#### 13.3 环月制动入轨点火 (LOI)
利用奥伯特效应在近月点速度极值处逆行喷火圆化：
$$\Delta v_{\text{LOI}} = v_{p2} - \sqrt{\frac{\mu_m}{r_{p2}}} = \sqrt{\frac{\mu_m}{r_{p2}}} \left(\sqrt{1 + e_2} - 1\right) \approx 0.7 \sim 0.9\text{ km/s}$$

---


#### 13.4 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q14, Q34, Q36, Q37, Q48; Weekend Set B Q14, Q34, Q36, Q37, Q48; 仿真考题 14
- **核心考法拆解**：
  1. **自然到达恒为双曲线**：无动力飞抵月球，能量 $\varepsilon_2 > 0$，无动力绝不可能被自然捕获成圆或椭圆。
  2. **入极低圆轨反更费燃料**：捕获脉冲 $\Delta v_{cap}$ 随近月点升高而反常下降，因为极低圆轨深陷月球引力井底，能量账单赤字过大，压垮了奥伯特收益。
  3. **随动系拱线固定是近似**：旋转坐标系是非惯性系，存在惯性力摄动，拱线静止仅为工程人为假定。
  4. **开方带来的半质量比误差**：计算圆速度 $v_c = \sqrt{\mu/r}$ 忽略月球质量，相对误差为质量比的一半（Half the mass ratio）。
- **教授干扰项特征**：死套奥伯特效应以为入最低圆轨永远最省，或以为双曲线拱线在转动系严格静止。
- **1 秒秒杀口诀**：**直接到达恒为双曲线，入低圆轨深陷井底反费油，随动系静止是近似！**


### 14. 飞越偏转角与阿波罗 8 字形自由返回 (Flybys & Apollo Free Return)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 8, Section 8.9 *Planetary flyby*, **Book pp. 412–420 (PDF pp. 419–427)**, Equations 8.41, 8.44; Chapter 9, Section 9.2, **Book pp. 450–456 (PDF pp. 457–463)**

#### 14.1 双曲线转向角
$$\delta_{\text{turn}} = 2 \arcsin\left(\frac{1}{e_2}\right)$$
当偏心率 $e_2 = \sqrt{2} \approx 1.414$ 时，偏转角恰好为 $90^\circ$。

#### 14.2 前侧飞越 vs 后侧飞越的物理差异
- **后侧飞越 (Trailing-edge flyby)**：月球拉着飞船顺行拖拽，飞船相对地心的机械能增加，获得引力助推，**用于飞向外行星的加速逃逸**。
- **前侧飞越 (Leading-edge flyby)**：迎着月球公转方向逆行飞越，月球引力将飞船地心速度猛烈**刹车**！飞船地心轨道能量降低，远地点被压低，近地点自然下沉。
- **阿波罗自由返回 (Apollo Free-Return)**：顺行奔月、前侧逆行绕月，月球引力将轨道弯曲成一条漂亮的“8”字形，即便服务舱引擎损坏无动力（如阿波罗 13 号），飞船也能自然返回地球大气层再入救命！

---

# 模块六：Week 6 3D转移、受限三体与环月轨道设计 (3D, 3-Body & Lunar Orbits)


#### 14.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Weekend Set A Q42, Q45, Q46; Weekend Set B Q42, Q45, Q46; Thursday Q18; 仿真考题 15
- **核心考法拆解**：
  1. **月心两体飞越速率守恒**：在月球中心两体参考系中，无动力飞越进出相对速率绝对相等（$v_{\infty,out} = v_{\infty,in}$），引力唯独偏转了航向矢量。
  2. **最强弯折条件**：$\sin(\delta/2) = 1/e_2$。要想偏折最剧烈，偏心率必须逼近于 1，要求飞船低速且极贴近（Slow and close）。
  3. **自由返回代价**：严苛咬合双重引力边界，极大限制了交会几何与所能抵达的月表着陆区（仅限赤道）。
- **教授干扰项特征**：常误以为月心视角下相对速率也会增加，或以为自由返回需要大量燃料。
- **1 秒秒杀口诀**：**月心进出速率绝对守恒，慢且贴近弯折最强，自由返回牺牲着陆区！**


### 15. 3D地月转移、白道振荡与 Simpson 拟合有效期 (3D Conics & Ephemeris)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 9, Section 9.3 *A simplified lunar ephemeris* (Book pp. 457–460, PDF pp. 464–467) & Section 9.4 *Patched conic lunar trajectories in three dimensions* (Book pp. 461–468, PDF pp. 468–475), Equations 9.40–9.62, Table 9.1, Fig. 9.9

#### 15.1 白道倾角振荡（18.6 年大时钟）
月球绕地球轨道平面（白道）受太阳引力潮汐摄动，其升交点以 **18.6 年** 为周期在空间进动，导致月球对地球赤道的倾角剧烈晃荡：
$$i_m = 23.44^\circ \pm 5.14^\circ \in [\mathbf{18.3^\circ, 28.6^\circ}]$$

#### 15.2 Simpson 多项式拟合的“保质期”
- 教材给出的 Simpson 经验多项式拟合仅专用于 **公元 2000–2100 年**！
- ⚠️ **考试陷阱**：严禁用于阿波罗时代（1968–1972），否则月球星历算错导致飞船射向虚空。

#### 15.3 3D 几何相交的 $\pm\hat{\mathbf{b}}$ 双根陷阱
- 空间到场圆锥面与月球公转面求交，二次方程必然出现两个互为相反数的单位向量解 $\pm\hat{\mathbf{b}}$。
- 数学上两个根都符合方程，但工程上**必须剔除错误的负根——选错根会导致计算出的近月高度为负，飞船直接撞山！**

---


#### 15.4 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Thursday Q1, Q2, Q5, Q6, Q7, Q9, Q10; Weekend Set A Q28; Weekend Set B Q05, Q28; 仿真考题 16, 17
- **核心考法拆解**：
  1. **白道交点进动物理源**：白道法向量围绕**黄道面法线**以 $5.145^\circ$ 夹角顺滑进动，周期为 18.6 年，引发对赤道倾角在 18.3° 到 28.6° 之间循环。
  2. **Simpson 拟合星历误差传递**：经验多项式外推漂移，其微小位置误差会通过双曲线到达几何非线性放大或改变近月点高度。
  3. **3D 二次根物理分野**：选错根不会导致程序报错（数值依然收敛），但近月点从预期的飞越变成灾难性撞击月球。
- **教授干扰项特征**：常诱导“进动围绕地球极轴”或“Simpson 星历误差与近月点误差严格等大”。
- **1 秒秒杀口诀**：**白道绕黄道法线转 18.6 年，Simpson 拟合误差由到达几何放大！**


### 16. 圆型受限三体动力学与 RK4 漂移灾难 (CR3BP & RK4 Reality)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 9, Section 9.5 *Lunar trajectories by numerical integration*, **Book pp. 469–476 (PDF pp. 476–483)**, Equations 9.63–9.69 & Example 9.3; Chapter 2, Section 2.12 *Circular restricted three-body problem* (Book pp. 116–131, PDF pp. 123–138)

#### 16.1 受限三体运动微分方程（CR3BP）
$$\ddot{\mathbf{r}} = -\frac{\mu_e}{r^3}\mathbf{r} + \mu_m \left[\frac{\mathbf{r}_{m/s}}{r_{m/s}^3} - \frac{\mathbf{r}_m}{r_m^3}\right]$$
- 第一项是地球引力主导项。
- 方括号第二项中，前一部分是月球对飞船的引力，**后一部分减去了月球对地球自身的加速度**（因为地心参考系是非惯性系，必须减去参考系本身的牵连加速度）。

#### 16.2 两体拼接 vs 真实三体 RK4 模拟残酷打脸（Curtis Example 9.1 vs Example 9.4）
- 教材用四阶龙格库塔法（RK4）真实积分解算 Example 9.1：
  - **近月点高度**：两体拼接理论计算为 $+1021\text{ km}$，在三体真实拉扯下剧烈缩水至 **$392\text{ km}$**！
  - **返回地球近地点**：两体拼接下本该安全切入大气层，但在三体全域引力下，未经修正的返程近地点直接潜入地表下 **$-288\text{ km}$（直接撞进地球地幔，机毁人亡！）**。
- 🎯 **工程启示**：两体圆锥拼接法只能做航线初步粗估，真实月球任务**必须携带燃料配置 3–4 次中途轨道修正点火（Trajectory Correction Maneuvers, TCMs）**。

---


#### 16.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Thursday Q3, Q4, Q8; Weekend Set A Q01; Weekend Set B Q02, Q31; 仿真考题 18
- **核心考法拆解**：
  1. **逆行局域轨道面判定**：局域平面法向量由副法线 $\hat{\mathbf{b}} = \frac{\mathbf{v} \times \mathbf{a}}{|\mathbf{v} \times \mathbf{a}|}$ 给出，局域倾角 $i = \arccos(\hat{\mathbf{b}} \cdot \hat{\mathbf{K}}) > 90^\circ$（近月点约 156°）表示逆行。
  2. **有心力法向平行本质**：在纯有心引力场中，$\mathbf{a} \parallel \mathbf{r} \implies \mathbf{v} \times \mathbf{a} \parallel \mathbf{r} \times \mathbf{v} = \mathbf{h}$，密切面法向严格平行于角动量。
  3. **三体微分方程减法项实质**：$-\mu_2 \frac{\mathbf{r}_m}{r_m^3}$ 是月球对中心天体地球的牵连加速度，由于处于非惯性地心系，必须作为虚拟惯性力扣除。
- **教授干扰项特征**：常选“逆行是飞船掉头倒着飞”或“减法项是因为遮挡引力减弱”。
- **1 秒秒杀口诀**：**副法线超 90 度为逆行，有心力加速度沿向径，三体减法项是牵连惯性力！**


### 17. 月球质量瘤、冻结轨道与 Artemis / Gateway (Mascons, Frozen Orbits & NRHO)
> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 10, Section 10.10 *Lunar gravity*, **Book pp. 529–535 (PDF pp. 536–542)**; Lecture 6 Slides *Wk04-06_Lunar_Trajectories_L5_L6.pdf*, pp. 42–65

#### 17.1 月球质量瘤（Mascons）与低月轨道的不稳定性
- 月球没有大气，但月海地下深埋着高密度玄武岩熔岩块——**质量瘤（Mass Concentrations, Mascons）**。
- 月球非球形引力场坑洼不平，低月圆轨道（LLO，如 100 km）上的卫星会受到剧烈的潮汐偏心率激发，圆轨道几周内被拉成极扁椭圆，近月点迅速下沉撞山（如阿波罗 16 号放飞的子卫星 PFC-2 仅生存 34 天便坠毁）。

#### 17.2 四大月球冻结倾角 (Lunar Frozen Inclinations)
$$i_{\text{frozen}} \in \{\mathbf{27^\circ, 50^\circ, 76^\circ, 86^\circ}\}$$
- 在这四个特殊倾角下，偶数阶奇数阶重力场谐波的摄动力相互抵消，近月点漂移率 $\frac{d\omega}{dt} \approx 0$，偏心率保持长期稳定不漂移，卫星才能安全长期环月生存！

#### 17.3 现代工程月球轨道先锋案例 (Lecture 6 前沿专题)
1. **中国鹊桥二号 ELFO (Eccentric Lunar Frozen Orbit)**：
   - 轨道：$200 \times 16,000\text{ km}$，大偏心率 $e = 0.803$。
   - **巧妙机理**：利用**开普勒第二定律（面积速度守恒）**，飞船在高达 16,000 km 的远地点速度极慢，**一整圈轨道中有高达 76% 的时间悬停在月球南极上空**，为南极着陆的嫦娥六号/七号提供极其稳定的长程中继通信。
2. **NASA Lunar Gateway 9:2 NRHO (Near-Rectilinear Halo Orbit)**：
   - 轨道周期 $T = 6.56\text{ 天}$。
   - **9:2 朔望月会合共振**：$9 \times 6.56\text{ d} \approx 59.06\text{ d} \approx 2 \times 29.53\text{ d} = 2 T_{\text{synodic}}$。
   - **绝妙工程优势**：空间站永远不会钻入地球背后的阴影区（**零地影日食**），彻底解决太阳能帆板断电与热控严寒问题，且长期维持燃料消耗极低。
3. **Artemis II 与月球南极**：
   - 极区深坑拥有数十亿年未见阳光的**永久阴影区（PSRs）**，封存着宝贵的水冰资源；坑沿高地拥有**永昼峰（Peaks of Eternal Light）**，提供近乎无限的太阳能。
   - 澳大利亚 ELO2 “Roo-ver” 漫游车计划 2030 年通过 NASA CLPS 登陆月球南极收集月壤。
   - **Artemis II (2026)**：载人四人绕月飞越测试，采用自由返回轨道，将创造人类飞离地球最远的深空历史纪录（$406,740\text{ km}$）。


#### 17.4 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **真题出处**：Thursday Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q19, Q20; Weekend Set A Q39, Q44; Weekend Set B Q39, Q44; 仿真考题 19, 20
- **核心考法拆解**：
  1. **Gateway 9:2 NRHO 避食神技**：9 圈共振周期严格对齐 2 个**朔望月（Synodic months）**，锁死太阳直射方向，终年避开地影月影。
  2. **极轨全经度覆盖耗时不变律**：轨道降低高度分辨率提升，但全经度扫过时间完全由月球自转周期（27.3 天）锁死，绝对不变。
  3. **冻结轨道力学机制**：调谐轨道倾角与偏心率，使得摄动在长周期内的**平均漂移变化率为零**，绝非瞬时合力为零。
  4. **中继卫星大椭圆核心逻辑**：月球背面 41% 永久不可见地球，中继卫星必须采用大椭圆，利用开普勒第二定律在远心端“购买”漫长的覆盖通信驻留时间。
- **教授干扰项特征**：选“Gateway 对齐恒星月”、“冻结轨道瞬时受力平衡矢量抵消”、“降低极轨高度缩短全经度扫描时间”。
- **1 秒秒杀口诀**：**Gateway 9:2 对齐朔望月，极轨全经度覆盖看自转，冻结轨道平均漂移归零！**



### 18. 环月捕获阶梯、Oberth 机理与双椭圆节油路径 (Lunar Capture Ladder, Oberth Effect & Route A vs Route B)
> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 9, Section 9.3 *Lunar trajectories*, **Book pp. 450–467 (PDF pp. 457–474)**; Chapter 6, Section 6.4 *Bi-elliptic transfers*, **Book pp. 306–314 (PDF pp. 313–321)**; Week 7 Lecture 7 Slides 1–20; NASA SP-287 *Apollo 11 Mission Report*

#### 18.1 捕获是选择而非自然事件 (Capture is a Choice, Not an Event)
- **到达双曲线超速**：飞船沿地月转移轨道穿过月球影响球（SOI，半径 $R_S = 66,183\text{ km}$）进入月心坐标系后，其比轨道能量严格为正（$\varepsilon_2 = \frac{v_2^2}{2} - \frac{\mu_m}{R_S} > 0$），属于未束缚的双曲线轨道（偏心率 $e_2 > 1$）。
- 在近月点处，飞船航速高达 $v_p = 2.070\text{ km/s}$，而当地逃逸速度仅为 $v_{esc} = \sqrt{\frac{2\mu_m}{r_p}} = 1.885\text{ km/s}$。
- **物理本质**：在保守二体引力场中，如果不施加外力减速，飞船必将掠过近月点后原样脱离月球 SOI，重新回到地心轨道。**捕获（Capture）必须通过发动机逆向制动（Retrograde Burn）主动实现**。

#### 18.2 近月点点火的 Oberth 能量提取机理 (Oberth Effect at Perilune)
- 机械能变化公式（Curtis Eq. 6.11）：
  $$\Delta\varepsilon = v \Delta v \cos\alpha + \frac{1}{2}\Delta v^2$$
  其中 $\alpha$ 为速度向量与推力夹角。当实施完全切向逆向点火（$\alpha = 180^\circ$）时：
  $$\Delta\varepsilon = -v |\Delta v| + \frac{1}{2}|\Delta v|^2 \approx -v |\Delta v|$$
- **核心规律**：比能量变化率与瞬时航速 $v$ 成正比。在轨道航速最大的**近月点（Perilune）**执行制动，每一米每秒的速度增量能够剥离最大的轨道机械能，是压低远月点最廉价的黄金窗口！

#### 18.3 为什么工程实际中环月捕获多采用“分步阶梯” (Staged Capture)
人类实际探月任务很少一次性从双曲线直接减速到低月圆轨道，通常采用多级阶梯点火（Staged burns），核心原因包括：
1. **有限推力与重力损失 (Finite Burn & Gravity Losses)**：一次性大推力点火（如 $\Delta v \approx 737\text{ m/s}$）在小型发动机上需持续几百秒甚至数十分钟，推力无法保持切向，产生严重的弧段重力损失；
2. **定轨跟踪与误差修正 (Orbit Determination & Correction)**：分步捕获允许测控系统在中间大椭圆轨道滑行期间进行精密无线电定轨（OD），微调下一次点火参数，消除入轨高度偏差；
3. **热控与发动机工况限制 (Engine Thermal & Structural Limits)**：液体火箭发动机单次长程工作承受极端热冲击与喷管烧蚀；
4. **应急中止与安全冗余 (Abort & Contingency Windows)**：首飞捕获先进入稳定高椭圆轨道，若发动机故障提前关机，飞船仍安全处于环月轨道，不至于撞月或失控逃逸。

#### 18.4 阿波罗 11 号 vs 印度月船三号捕获阶梯对比
* **阿波罗 11 号（两阶段捕获，Table 7-V）**：
  - **LOI-1**：点火 $357.5\text{ s}$，$\Delta v = 0.889\text{ km/s}$，捕获为 $314 \times 111\text{ km}$ 椭圆轨道；
  - **LOI-2**：点火 $16.8\text{ s}$，$\Delta v = 0.048\text{ km/s}$，微调为 $122 \times 101\text{ km}$ 椭圆。阿波罗巧妙利用月球质量瘤摄动，在第 13 圈时自然拉平为 $111 \times 110\text{ km}$ 圆轨道！
  - **到达双曲线倒推**：近月点航速 $1.6705 + 0.889 = 2.560\text{ km/s}$，逃逸速度 $2.303\text{ km/s}$，反算偏心率 $e = 1.470$，与 Curtis Example 9.1（$e = 1.4113$）仅差 $4\%$。
* **月船三号（Chandrayaan-3，2023）的多级降拱阶梯**：
  - 8 月 5 日主捕获：进入 $164 \times 18,074\text{ km}$ 超大偏心率椭圆；
  - 随后 5 次降轨点火全部在**近月点（Perilune）**执行，远月点从 $18,074\text{ km} \to 4,313 \to 1,437 \to 179 \to 163\text{ km}$，**远月点被压低了 135 倍**！
  - **核心策略**：Perilune 几乎不改变（维持在 150~170 km），直到最后两次 deboost 降轨才将近月点下压至 25 km。

#### 18.5 拱点机动铁律：“动对向拱点，留当前拱点” (Move the Opposite Apsis)
> **天体力学黄金铁律**：在拱点（Apsis）执行切向脉冲点火，**当前拱点半径保持不变，点火将改变轨道另一侧的对向拱点半径**！
> - 在**近月点（Perilune）**逆向减速 $\implies$ 保持近月点不变，**降低远月点（Apolune）**；
> - 在**远月点（Apolune）**逆向减速 $\implies$ 保持远月点不变，**降低近月点（Perilune）**。

#### 18.6 Route A vs Route B 环月捕获经济性大对决
从到达近月点（高度 $1021\text{ km}$）进入 $100\text{ km}$ 低月圆轨道，有两种经典策略：
* **Route A（先高轨圆化，再霍曼下降）**：
  1. 在 $1021\text{ km}$ 近月点直接圆化：$\Delta v_1 = 0.737\text{ km/s}$；
  2. 从 $1021\text{ km}$ 霍曼下降至 $100\text{ km}$ 首脉冲：$\Delta v_2 = 0.141\text{ km/s}$；
  3. $100\text{ km}$ 处霍曼圆化次脉冲：$\Delta v_3 = 0.156\text{ km/s}$；
  - **总耗费**：$\Delta v_{\text{total}} = 0.737 + 0.141 + 0.156 = \mathbf{1.034\text{ km/s}}$。
* **Route B（大椭圆捕获 + 远月点降近月点 + 近月点圆化）**：
  1. 近月点捕获进入 $1021 \times 10,000\text{ km}$ 高椭圆：$\Delta v_1 = 0.374\text{ km/s}$（在高速 $2.070\text{ km/s}$ 处做，Oberth 极高）；
  2. 在 $10,000\text{ km}$ 远月点（航速极低处 $0.399\text{ km/s}$）将近月点压低至 $100\text{ km}$：$\Delta v_2 = \mathbf{0.062\text{ km/s}}$（仅需 $62\text{ m/s}$！）；
  3. 在 $100\text{ km}$ 新近月点切向圆化：$\Delta v_3 = 0.515\text{ km/s}$（航速 $2.148\text{ km/s}$ 处点火）；
  - **总耗费**：$\Delta v_{\text{total}} = 0.374 + 0.062 + 0.515 = \mathbf{0.951\text{ km/s}}$！
  - **经济效益**：**Route B 比 Route A 净省 $83.6\text{ m/s}$ 燃料！**

#### 18.7 双椭圆极限与现实工程边界 (Bi-elliptic Sweep & Real Limits)
若继续把 Route B 的中间捕获远月点推高：
| 捕获远月点 $r_a$ | 总速度增量 $\Delta v$ | 单圈轨道周期 $T$ | 相对月球 SOI 比例 $r_a / R_S$ | 工程评价 |
| :--- | :--- | :--- | :--- | :--- |
| **$1,021\text{ km}$ (Route A)** | $1.034\text{ km/s}$ | $3.6\text{ h}$ | $0.04$ | 最快，但最费油 |
| **$10,000\text{ km}$ (Route B)** | $0.951\text{ km/s}$ | $15.4\text{ h}$ | $0.18$ | **省 $83.6\text{ m/s}$，时间代价合理（最优工程折衷）** |
| **$20,000\text{ km}$** | $0.917\text{ km/s}$ | $33.8\text{ h}$ | $0.33$ | 进一步省 $34\text{ m/s}$，周期近一天半 |
| **$60,000\text{ km}$** | $0.883\text{ km/s}$ | $144.4\text{ h}$ | $0.93$ | 周期暴涨至 6 天，已逼近 SOI 边缘 |
| **$\to \infty$ (双抛物线极限)** | $0.861\text{ km/s}$ | $\infty$ | 外侧 | 理论燃料极值，耗时无限 |

* **工程阻止远月点无限推高的三大壁垒**：
  1. **时间爆炸 (Time Inflation)**：$60,000\text{ km}$ 远月点单圈耗时超过 6 天，导致任务测控、低温推进剂蒸发和生命维持系统消耗不堪重负；
  2. **地球第三体摄动破坏 (Third-body Perturbations)**：$60,000\text{ km}$ 达到 $0.93 R_S$，二体拼接假设在此彻底失效，地球潮汐摄动会严重扭曲轨道甚至引发逃逸；
  3. **边际收益剧烈递减 (Diminishing Returns)**：从 $20,000\text{ km}$ 推高到 $60,000\text{ km}$，耗费 110 小时仅换取 $34\text{ m/s}$ 节约。

---

#### 18.8 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **核心考点与命题规律**：
  1. **捕获的能量判据**：到达双曲线超速使得 $\varepsilon > 0$，不点火绝不可能留存；点火必选近月点，因为 Oberth 效应在速度最高处做功最显著。
  2. **拱点改变方向法则**：考查 Chandrayaan-3 或 Apollo 降轨策略时，抓住“在近月点点火只能改变远月点，近月点半径纹丝不动”。
  3. **Route A 与 Route B 成本优劣剖析**：Route B 之所以便宜，是因为它把“改变近地点高度”的任务挪到了速度极低的万公里远月点执行（仅需 $62\text{ m/s}$），充分利用了双椭圆原理。
- **⚠️ 教授命题陷阱**：
  - 陷阱 1：声称“飞船进入月球引力球后会被月球自然引力拖曳捕获入轨”——**彻底错误！二体下双曲线能量守恒，无推力必原样飞出**。
  - 陷阱 2：声称“捕获远月点推得越高越好，没有任何代价”——**错误！忽略了周期暴涨（6天一圈）与地球第三体摄动的致命破坏**。
- **⚡ 1 秒速杀应试之眼**：
  - **捕获选近月（Oberth 最大），改远点在近点，改近点在远点，Route B 借道万公里深空立省 84 m/s！**

---

### 19. 环月轨道面调整的高昂代价与“免费”目标轨道面几何 (Lunar Orbit Plane Changes & Free Transfer Plane Targeting)
> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 6, Section 6.5 *Orbital plane changes*, **Book pp. 314–326 (PDF pp. 321–333)**; Week 7 Lecture 7 Slides 21–26

#### 19.1 纯轨道面改变的余弦定理代价公式
$$\Delta v_\perp = 2 v \sin\left(\frac{\Delta i}{2}\right)$$
- **严酷规律**：变面所需的速度增量 $\Delta v_\perp$ 与点火处的**局域航速 $v$ 严格成正比**！
- 对比低月圆轨道与高远月点的变面成本：
  | 轨道位置 | 局域速度 $v$ | $\Delta i = 15^\circ$ 成本 | $\Delta i = 90^\circ$ 成本 | 速度与成本比率 |
  | :--- | :--- | :--- | :--- | :--- |
  | **$100\text{ km}$ 低月圆轨道 (LLO)** | $1.633\text{ km/s}$ | $0.426\text{ km/s}$ | **$2.310\text{ km/s}$** | **$4.10$** |
  | **$10,000\text{ km}$ 高远月点 (Apolune)**| $0.399\text{ km/s}$ | $0.104\text{ km/s}$ | $0.564\text{ km/s}$ | **$1.00$** |
- **4.10 倍固定比率**：由于变面公式中角度项 $\sin(\Delta i/2)$ 完全抵消，低月圆轨道与万公里远月点的变面成本比率**对任何倾角永远是恒定的 4.10 倍**！

#### 19.2 触目惊心的工程对比：低轨变面的灾难性代价
> [!WARNING]
> **在低月球轨道进行 $90^\circ$ 纯轨道面改变需要耗费 $2.310\text{ km/s}$ 的速度增量，比阿波罗 11 号登月舱从低月轨道降落到月球表面的全程动力下降（$2.112\text{ km/s}$）还要多！**
> 任何在进入低月圆轨道后再进行大角度变面的任务设计，都是灾难性的工程溃败！

#### 19.3 为什么月心目标轨道面是“免费”的 (How the Lunar Orbit Plane is Free)
地球发射受制于发射场地理纬度（$\cos i_\oplus = \cos\phi\sin A$），但在地月空间中，**月心轨道面倾角几乎可以“零燃料代价”任意选取**：
1. **两个坐标系的速度矢量倾斜**：从地心看，转移轨道始终处于停泊轨道发射面内；但在进入月球影响球瞬间，飞船相对月球的来流渐近速度为：
   $$\mathbf{v}_\infty = \mathbf{v}_{\text{sc}} - \mathbf{v}_{\text{Moon}}$$
   由于月球公转速度 $\mathbf{v}_{\text{Moon}}$ 的扣除，$\mathbf{v}_\infty$ 自然倾斜出了地球转移平面！
2. **“铰链大门”几何模型 (The Door on Its Hinge)**：
   - 环月轨道面的法向量必须与 $\mathbf{r}_{\text{rel}} \times \mathbf{v}_{\text{rel}}$ 对齐，而所有的合法轨道平面都像一扇扇**挂在 $\mathbf{v}_\infty$ 这根铰链上的门**；
   - 飞船在奔月途中，只需在离开地球时的中途修正（Midcourse Correction）中施加极其微小的横向脉冲（几米/秒），微调其在月球圆盘上的瞄准点（B-plane Aim Point），即可让轨道面绕着 $\mathbf{v}_\infty$ 自由转动！
   - **结论**：月心轨道倾角从 $\delta_\infty$（渐近线赤纬）到 $180^\circ - \delta_\infty$ 的**任意轨道倾角均可“免费”获得**！

#### 19.4 真实任务工程实践
- **月船三号（Chandrayaan-3）**：入轨目标为近极轨 $88.48^\circ \pm 0.05^\circ$，在奔月转移段精准瞄准，到达月球后执行的**变面脉冲消耗为零**；
- **阿波罗 15 号**：在登月舱起飞前 6 小时在低轨微调了 $3^\circ$ 轨道面（耗资约 $85\text{ m/s}$），原因是在宇航员驻留的 3 天期间月球自身自转将着陆场旋转出了原轨道面。

---

#### 19.5 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **核心考点与命题规律**：
  1. **变面成本与航速正比**：考查公式 $\Delta v_\perp = 2v\sin(\Delta i/2)$，低轨变面代价远高于高轨，低月圆轨道变面代价是万公里远月点的 $4.10$ 倍。
  2. **免费变面与 B-plane 瞄准**：在深空转移时改变瞄准点可以近乎零代价设定月球轨道倾角，切忌在入轨圆化后再行大角度变面。
- **⚠️ 教授命题陷阱**：
  - 陷阱：题目问“如果要进入月球极轨，是否必须在低月圆轨道燃烧大量燃料执行 90 度机动？”——**大错特错！直接在地球出发/中途瞄准，依靠 $\mathbf{v}_\infty$ 铰链效应免费入极轨**。
- **⚡ 1 秒速杀应试之眼**：
  - **变面跟速度线性挂钩，低轨变面贵 4.1 倍；进月倾角靠瞄准，铰链转面不掏油！**

---

### 20. 环月等待期 (The Loiter) 与极轨覆盖几何 (Lunar Rotation, Loiter Time & Polar Orbit Geometry)
> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 10, Section 10.10, **Book pp. 529–535 (PDF pp. 536–542)**; Week 7 Lecture 7 Slides 27–31

#### 20.1 轨道面与月球自转的时钟解耦 (The Loiter Problem)
- 环月轨道面在惯性空间中基本锁定不动，而月球在其下方慢速自转，自转角速度为：
  $$\omega_M = \frac{360^\circ}{27.32\text{ 天}} \approx 13.18^\circ/\text{天} \approx 0.549^\circ/\text{小时}$$
- **着陆点可达几何判据 (Reach Condition)**：
  - 只有当目标着陆点纬度满足 $|\phi| \le i$（即轨道倾角不小于场址纬度）时，星下点轨迹才能掠过着陆场。
  - 例如南极着陆点（如 $69.4^\circ\text{S}$）要求轨道倾角必须满足 $i \ge 69.4^\circ$。

#### 20.2 共面条件与等待周期 (Waiting for the Ground to Arrive)
- 轨道面的星下点轨迹在纬度 $\phi$ 处与经度 $L$（自升交点起算的赤道经度）满足球面三角方程：
  $$\tan\phi = \tan i \sin L \implies \sin L = \frac{\tan\phi}{\tan i}$$
- **两次交会机会**：由于正弦对称性，每个月球自转周期内在经度 $L$ 和 $180^\circ - L$ 处各有一次共面机会，**两次等待时间之和精确等于一个月球恒星月（$27.32\text{ 天}$）**。
- **极轨（Polar Orbit, $i = 90^\circ$）的对称优势**：
  - 当 $i = 90^\circ$ 时，$\tan i \to \infty \implies \sin L = 0 \implies L = 0^\circ \text{ 或 } 180^\circ$；
  - 两次共面机会完美对称平分，**等待时间雷打不动为 $13.66\text{ 天}$**！
  - 若倾角偏离极轨（如 $i = 76^\circ$），两次等待间隔将发生不对称倾斜（例如变为等待 $7.4\text{ 天}$ 与 $20.0\text{ 天}$）。

#### 20.3 极轨动力学特性与轨道维持现实 (Polar Orbit Dynamics & Realities)
1. **一阶地球扁率摄动抵消**：根据轨道根数一阶摄动理论，引力位偶极项 $J_2$ 引发的升交点赤经漂移率正比于倾角余弦：
   $$\dot{\Omega}_{J_2} \propto \cos i$$
   当 $i = 90^\circ$ 时，$\cos 90^\circ = 0$，**一阶摄动节点退行完全消失，轨道面在空间保持静止**！
2. **极轨不是“免检停车位”**：
   - 月球引力场不仅有扁率，还有强烈的质量瘤（Mascons）和三轴不对称性；
   - 月球冻结倾角为 **$27^\circ, 50^\circ, 76^\circ, 86^\circ$**，**极轨 $90^\circ$ 并不是冻结轨道**！
   - NASA 月球勘测轨道飞行器（LRO）在 $50\text{ km}$ 极圆轨道运行时，每年必须分配高达 **$150\text{ m/s}$ 的推进剂预算用于轨道维持（Station-keeping）**，平均每个恒星月执行两次点火以防止撞月。

---

#### 20.4 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **核心考点与命题规律**：
  1. **月球自转角速度与极轨等待期**：月球每天转 $13.18^\circ$，极轨两次共面窗口恒定相隔 $13.66\text{ 天}$，两者之和为恒星月 $27.32\text{ 天}$。
  2. **极轨与冻结轨道的概念混淆**：极轨消除的是 $J_2$ 一阶退行（$\cos i = 0$），但抵挡不住高阶质量瘤摄动，极轨决不能永久免维护。
- **⚠️ 教授命题陷阱**：
  - 陷阱：宣称“极轨是完全冻结的稳定轨道，卫星放置于 100km 极轨可以无限期安全运行”——**彻底错误！月球四大冻结倾角不含 90 度，极轨若不点火维持必因质量瘤拉扁而坠毁**。
- **⚡ 1 秒速杀应试之眼**：
  - **月转每天十三度，极轨半月遇一次；九十度消 J2 退行，质量瘤前仍需维！**

---

### 21. 动力下降轨道切入 (DOI) 与 15 km 近月点权衡 (Descent Orbit Insertion & The 15 km Altitude Trade)
> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Week 7 Lecture 8 Slides 32–39; NASA TN D-6846 *Apollo Experience Report: Mission Planning for Lunar Module Descent and Ascent*

#### 21.1 两种降落路径的惊人能耗差异 (DOI: The Hohmann That Never Completes)
当飞船位于 $100\text{ km}$ 环月极圆轨道（航速 $1.633\text{ km/s}$，周期 $117.8\text{ min}$），降落月表有两种截然不同的战术选择：
* **路径一：从 100 km 轨道直接全推力减速制动 (Direct Braking)**：
  - 需要持续抗击月球重力将近 100 公里高度，全程重力损失惨重，总耗费：**$\Delta v = 1.969\text{ km/s}$**。
* **路径二：霍曼降轨切入 (DOI) + 近月点制动**：
  1. **DOI 脉冲**：在 $100\text{ km}$ 轨道处执行一次微小的逆行切向脉冲，将对向近月点压低至 $15\text{ km}$：
     $$\Delta v_{\text{DOI}} = \mathbf{19.5\text{ m/s}}$$
  2. **开普勒自由滑行**：无动力沿半椭圆滑行半圈（约 $58\text{ min}$），航速在重力做功下自然加速到近月点的 $1.692\text{ km/s}$；
  3. **15 km 处开启全推力动力下降**：仅需消除 $15\text{ km}$ 处的动能与剩余位能，耗费 $\Delta v = 1.781\text{ km/s}$；
  - **路径二总耗费**：$19.5\text{ m/s} + 1.781\text{ km/s} = \mathbf{1.800\text{ km/s}}$。
* **💰 经济性奇迹**：
  $$\Delta v_{\text{saved}} = 1.969 - 1.800 = \mathbf{169\text{ m/s}} \approx 8.7 \times \Delta v_{\text{DOI}}$$
  **区区 $19.5\text{ m/s}$ 的微量点火投资，直接净赚回 $169\text{ m/s}$ 的燃油节约，收益率高达 870%！** 在月船三号级别的探测器上，这笔节约直接对应少带 **$52\text{ kg}$ 的宝贵推进剂**！

#### 21.2 为什么近月点必须是 15 km？(The NASA 1972 Altitude Trade)
NASA 在阿波罗任务规划报告（TN D-6846）中给出了经典的系统工程权衡结论：
* **为什么不能高于 15 km（例如 50 km）？**
  - 高度越高，发动机在下降过程中抗击重力下落的时间越长，重力加速度沿航向累积做功，导致严重的重力损失爆发；
* **为什么不能低于 15 km（例如 5 km）？**
  - **节油曲线平坦化**：数值积分表明，下降起点从 $15\text{ km}$ 进一步压低到 $5\text{ km}$，**仅仅能多抠出 $7\text{ m/s}$ 的燃油增益**；
  - **地形碰撞与反应时间归零**：月球表面的陨石坑边缘与高原山脉高达 $5\sim 8\text{ km}$！若近月点设为 5 km，任何导航测量误差或姿态偏转都会直接导致**可控飞行撞地（CFIT）**，且留给计算机和航天员识别障碍的时间被彻底压缩殆尽。
* **历史巧合**：阿波罗 11 号登月舱设计 DOI 轨道为 $111 \times 15.2\text{ km}$，近月点航速 $1.6923\text{ km/s}$；印度月船三号（2023）设计的 DOI 轨道为 $134 \times 25\text{ km}$，近月点航速为 **$1.6927\text{ km/s}$**！两体自然引力决定的速度尺度跨越半个世纪惊人一致。

---

#### 21.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **核心考点与命题规律**：
  1. **DOI 点火的极高杠杆比**：以不到 $20\text{ m/s}$ 的微小脉冲换取近 $170\text{ m/s}$ 的总账单节约，核心在于利用霍曼无动力滑行替代了高空的带动力减速。
  2. **15 km 黄金高度的非对称权衡**：高于 15 km 重力损失激增，低于 15 km 边际节油极低（仅 $7\text{ m/s}$）但撞地风险暴增。
- **⚠️ 教授命题陷阱**：
  - 陷阱：宣称“为了最大程度节约燃油，近月点应该尽可能贴近地面（如 1 km）再开启反推”——**工程大忌！15 km 以下节油曲线平坦，贴地开启反推丧失地形净空与反应容错，必摔无疑**。
- **⚡ 1 秒速杀应试之眼**：
  - **DOI 花二十省一百七，十五公里是黄金；太高重力损失大，太低撞山省七米！**

---

### 22. 动力下降制动问题、三自由度轨迹积分与推重比优化 (Powered Descent Guidance, Equations of Motion & T/W Optimization)
> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Week 7 Lecture 8 Slides 40–46; Apollo Guidance Computer (AGC) Luminary Guidance Routines

#### 22.1 速度消除基准与火箭方程的残酷盘剥 (Speed-Cancellation Benchmark)
- 在 $15\text{ km}$ 近月点，飞船水平航速为 $v_t = 1.692\text{ km/s}$，垂直速度为零。着陆的终极目标是将两个方向的速度同时归零，平稳立在选定月表。
- **理想速度消除基准**：即便使用理想瞬时脉冲将 $1.692\text{ km/s}$ 航速瞬间抹掉，飞船依然悬挂在 15 公里高空，即将自由落体砸地。
- **火箭方程基础账本（齐奥尔科夫斯基方程）**：
  $$\frac{m_{\text{prop}}}{m_0} = 1 - e^{-\Delta v / (I_{sp} g_0)}$$
  阿波罗下降发动机真空比冲 $I_{sp} = 305\text{ s}$，等效排气速度 $c = I_{sp} g_0 = 2.992\text{ km/s}$。
  指数因子为：$\frac{\Delta v}{c} = \frac{1.692}{2.992} = 0.565$。
  $$\frac{m_{\text{prop}}}{m_0} = 1 - e^{-0.565} = 43.2\% \implies \frac{m_0}{m_f} = e^{+0.565} = \mathbf{1.76}$$
  **物理沉思**：甚至在尚未计算任何重力损失、转向损失和悬停机动之前，仅仅消除初始轨道航速，**月表每着陆 1 kg 质量，就必须在环月轨道准备 1.76 kg 的初始总重**！

#### 22.2 动力下降运动微分方程与线性正切导引律 (Linear Tangent Steering)
数值积分动力学状态方程组（2D 质点极坐标系）：
$$\dot{v}_r = \frac{v_t^2}{r} - \frac{\mu_m}{r^2} + a_T \sin\psi$$
$$\dot{v}_t = -\frac{v_r v_t}{r} - a_T \cos\psi$$
$$\dot{r} = v_r, \quad \dot{\theta} = \frac{v_t}{r}$$
- 其中 $a_T = \frac{T}{m(t)} = \frac{T}{m_0 - \dot{m} t}$ 为推力加速度，随推进剂消耗而持续爬升；
- $\psi$ 为推力矢量相对当地水平向上的仰角（推力朝后上方喷射以实施制动与托举）；
- **经典线性正切导引律 (Linear Tangent Steering Law)**：
  $$\tan\psi(t) = k_0 + k_1 t$$
  通过牛顿法解出三个未知数 $(k_0, k_1, t_f)$ 匹配三个终端边界条件（$h = 0, v_r = 0, v_t = 0$）。

#### 22.3 真实下降轨迹形态：“它不是掉落，而是在飞翔” (It Flies, Never Falls)
- 在阿波罗标称全推力工况（初始推重比 $T/(m_0 g_M) = 1.8$）下：
  - **燃烧持续时间**：$459\text{ s}$（约 7 分半钟）；
  - **水平下航程**：$415\text{ km}$；
  - **总耗费 $\Delta v$**：**$1.781\text{ km/s}$**（比纯速度消除基准高出 $89\text{ m/s}$）；
  - **垂直沉降率峰值仅为 $56\text{ m/s}$**，推力初始几乎呈纯水平姿态，随着速度降低逐渐慢速上抬机头。这是一条极其平缓浅显的“带动力滑翔减速”弧线，绝非踩死刹车的直上直下坠落！

#### 22.4 推重比（T/W）的边际效益递减规律
* 将初始推重比 $T/W$ 从 $1.5$ 提升到 $3.0$，下降用时缩短，重力做功时间减少，可节约 $\Delta v \approx 66\text{ m/s}$；
* **但当 $T/W > 2\sim 3$ 之后，燃油节约曲线彻底变平！**
* **系统工程硬道理**：更大的推力需要配备更大更重的高压涡轮泵与燃烧室，发动机干重（Dry Mass）的急剧增加直接抵消了有限的燃油微量收益。

---

#### 22.5 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **核心考点与命题规律**：
  1. **基准速度抵消与火箭方程倍率**：记住月球轨道制动的基础基准是 $1.692\text{ km/s}$，质量比底线是 $1.76$。
  2. **推重比权衡临界**：考查为什么发动机推力不是越大越好——$T/W > 2\sim 3$ 边际递减且发动机死重大增。
- **⚠️ 教授命题陷阱**：
  - 陷阱：宣称“月球动力下降就像地球降落伞开伞一样，垂直笔直落向地面”——**荒谬！航天器是以近 1.7 km/s 的超音速横向滑翔 400 公里逐步减速的平缓浅层飞行**。
- **⚡ 1 秒速杀应试之眼**：
  - **登月制动滑行四百里，推重比超三收益平；初始基准一点七，发动机死重锁上限！**

---

### 23. 动力下降损失分解 (重力损失与导引转向损失) 与 阿波罗三阶段下降 (Gravity Losses, Steering Losses & Apollo Three-Phase Descent)
> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Week 7 Lecture 8 Slides 46–48; NASA SP-287; Apollo Guidance Computer Operations

#### 23.1 动力下降超出基准的 89 m/s 去了哪里？(The Anatomy of Losses)
在 $T/W = 1.8$ 工况下，实际消耗的 $1.781\text{ km/s}$ 比纯瞬时脉冲基准（$1.692\text{ km/s}$）高出的 $89\text{ m/s}$ 损失由两部分完全瓜分：
1. **重力损失 (Gravity Loss, $\sim 52\text{ m/s}$)**：
   $$\Delta v_{\text{grav}} = \int_0^{t_f} g_M \sin\gamma(t) \, dt$$
   在发动机点火的数百秒内，月球重力持续拉扯飞船向下，重力在航向上的分量不断赋予飞船额外的下坠速度，必须依靠推力额外抵消。推重比越高、点火时间越短，重力损失越小（$T/W = 1.5$ 时为 $52\text{ m/s}$，$T/W = 5$ 时降至 $39\text{ m/s}$）。
2. **转向损失 (Steering Loss, $\sim 37\text{ m/s}$)**：
   $$\Delta v_{\text{steer}} = \int_0^{t_f} a_T [1 - \cos(\psi - \gamma)] \, dt$$
   推力矢量为了托举飞船不下砸或调整垂直沉降率，必须向上仰起角度 $\psi$。推力只有 $\cos\psi$ 分量用于刹减水平速度，$\sin\psi$ 分量用于对抗重力，几何未对准产生转向损失。
   - **非单调特性**：推力过小（$T/W = 1.5$）需仰头防坠地，转向损失达 $66\text{ m/s}$；推力过大（$T/W = 5$）因停得过快而在高空悬停下坠，转向损失反弹至 $18\text{ m/s}$；在 $T/W \approx 3$ 附近取得极小值（$11\text{ m/s}$）。

#### 23.2 阿波罗实际飞行的三大标准战术阶段 (How Apollo Actually Flew It)
NASA 在阿波罗登月中划分了三大清晰阶段，并引入航空术语“门（Gate）”作为导引逻辑转换点：
| 阶段名称 | 起始位置 | 核心工程任务 | 效率 vs 信息权衡 |
| :--- | :--- | :--- | :--- |
| **制动段 (Braking Phase)** | PDI（动力下降点火），$15.2\text{ km}$ ($50,000\text{ ft}$) | 全力消除绝大部分水平航速（从 $1.69\text{ km/s}$ 降至约 $150\text{ m/s}$） | **追求极致燃油效率**，机头朝下盲飞 |
| **接近段 (Approach Phase)** | High Gate（高门），$\sim 2.1\text{ km}$ ($7,000\text{ ft}$) | 机头大幅仰起，让航天员窗户（或相机）直接看到预选着陆场，辨识坑洼 | **主动牺牲燃油效率换取视觉信息与安全性** |
| **着陆/终末段 (Landing Phase)**| Low Gate（低门），$\sim 152\text{ m}$ ($500\text{ ft}$) | 人工接管半自动，垂直机动避障，平稳接地（接触探针触地即关机） | **纯控制与悬停微调**，秒针与推进剂赛跑 |

---

#### 23.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **核心考点与命题规律**：
  1. **损失二分法**：重力损失（来自引力做功时间累积）与转向损失（来自推力未对准速度方向的侧向分量）。
  2. **高门/接近段的工程哲学**：接近段机头仰起导致燃油损失增加，是工程师故意“用燃料购买信息（Visibility & Controllability）”的经典决策。
- **⚠️ 教授命题陷阱**：
  - 陷阱：声称“接近段推力仰起是导引算法失误造成的燃料浪费”——**完全错误！这是为了让航天员看到窗外地形并选择着陆点必须付出的视觉代价值**。
- **⚡ 1 秒速杀应试之眼**：
  - **重力损失买时间，转向损失偏夹角；高门抬头看地形，燃油换来视野清！**

---

### 24. 悬停惩罚铁律 ($1.624\text{ m/s}^2$)、推进剂质量账本与南极着陆工程现实 (Hover Penalty, Propellant Budget & South Pole Realities: SLIM, IM-2, ELO2)
> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Week 7 Lecture 8 Slides 49–57; NASA TM X-58040; JAXA SLIM Press Conference; Intuitive Machines IM-2 Reports

#### 24.1 悬停惩罚铁律 (The Hover Penalty: 1.624 m/s per Second)
在月球表面悬停不坠，发动机推力必须精确平衡月球重力加速度：
$$g_M = \frac{\mu_m}{R_m^2} = \frac{4902.8}{(1737.4)^2} = \mathbf{1.624\text{ m/s}^2}$$
> [!CAUTION]
> **在月表每悬停 1 秒钟，航天器就必须无情烧掉 $1.624\text{ m/s}$ 的 $\Delta v$！**
> - **悬停不产生任何位移，纯粹是对抗重力的持续流血！**
> - 阿波罗 11 号规划的全程手动悬停储备预算仅为 **$25.9\text{ m/s}$**，换算成纯悬停时间仅仅只有 **16 秒钟**！

#### 24.2 阿波罗 11 号“剩余 30 秒燃油”的神话真相
- 历史名场面：“休斯敦呼叫：60 秒... 30 秒燃油！”
- **真实工程解密**：地面呼叫的 30 秒是**到达“中止/返回决断点（Landing/Abort Decision Point）”的倒计时时钟**，绝非油箱见底吹哨！
  - 若达到决断点仍未接地，登月舱必须立刻抛弃下降级，点燃上升级火箭爬升回环月轨道与指令舱会合；
  - 飞后精密遥测复盘（NASA TM X-58040）：阿姆斯特朗接地时刻，油箱内**仍剩余 40~50 秒的真实推进剂耗尽存量**；宇航员不是在原地悬停，而是在以倾斜姿态向前滑行寻找平整地面。

#### 24.3 登月舱的质量账本：半壁江山皆推进剂
阿波罗 11 号登月舱（LM）总重 $15,062\text{ kg}$，其中**下降级推进剂独占 $8,210\text{ kg}$，占比高达 $54.5\%$**！
- 标称制动推进剂：$7,693\text{ kg}$；
- 手动悬停预算（$25.9\text{ m/s}$）：$65\text{ kg}$；
- 着陆点重选机动（Redesignation, $18.3\text{ m/s}$）：$47\text{ kg}$；
- 统计裕度（$3\sigma$ 分散）：$137\text{ kg}$。
- **这就是登月器外形像“飞行的巨大油箱上螺栓固定着小舱段”的根本力学原因！**

#### 24.4 月球南极着陆工程现实与险境 (The South Pole Trap)
为什么各大航天大国（中美印日及私企）在月球南极频频折戟？
1. **极端微弱倾斜光照与致命长阴影**：南极太阳高度角极低（常年 $< 2^\circ$），陨石坑边缘投射出数十公里的浓黑阴影，光学相机无法辨识深影中的巨石与断崖；
2. **光学地形匹配（TRN）退化**：由于阴影随 29.5 天太阳周期旋转，下降相机拍摄的实时图像与轨道器预存基准地图无法匹配；
3. **连锁反应**：识别危险过晚 $\implies$ 被迫执行横向机动避障（Redesignation）或悬停观察 $\implies$ 每秒流失 $1.624\text{ m/s}$ 燃油 $\implies$ 触发中止或燃油耗尽坠毁！

#### 24.5 近期人类探月四大陆战档案复盘 (The Modern Record)
| 探测器名称 | 归属与日期 | 目标纬度 | 着陆结果与工程根因剖析 |
| :--- | :--- | :--- | :--- |
| **月船三号 (Chandrayaan-3)** | ISRO, 2023-08-23 | $69.4^\circ\text{S}$ | **成功直立接地**，成功部署 Pragyan 月球车，四台发动机节流协同冗余完备。 |
| **IM-1 俄底修斯 (Odysseus)** | Intuitive Machines, 2024-02 | $80.1^\circ\text{S}$ | 接地时横向速度未归零，折断一条着陆腿后**侧翻横卧**，距离目标偏差约 2.5 km。 |
| **SLIM 精确着陆器** | JAXA, 2024-01-20 | $13.3^\circ\text{S}$ | 在 50 米高空主发动机喷管断裂脱落，虽达成 **55 米超高精度（要求 100m）**，但失去推力平衡后**倒栽葱翻滚着陆**，太阳能板朝西受光困难。 |
| **IM-2 雅典娜 (Athena)** | Intuitive Machines, 2025-03 | **$84.8^\circ\text{S}$** | 人类最南着陆纪录；在 20 米陨石坑内**侧翻受损**，长阴影导致无光照，电池 1 天内耗尽夭折。 |
- **血的教训**：所有近现代探月失利**全死在终末动力下降与触地一瞬间**（传感器、激光雷达测高噪声、横向漂移未平息、光照恶劣），而非高空轨道力学！

#### 24.6 澳大利亚 ELO2 “Roo-ver” 的生存空间
- 澳大利亚 ELO2 联合体研制的 **Roo-ver 月球车整机仅重约 20 kg**；
- 预定搭乘直觉机器公司 Nova-D 登月舱于 2030 年降落月球南极马拉佩特山（Mons Malapert, $85^\circ\text{S}$）；
- **残酷的数字对照**：
  - 30 秒的额外悬停就烧掉 $15\text{ kg}$ 燃料（快赶上整台火星车重！）；
  - DOI 降轨技术节省的 $52\text{ kg}$ 推进剂，正是承载 Roo-ver 能够飞往月球的生命线！

---

#### 24.7 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **核心考点与命题规律**：
  1. **悬停常数硬背**：月表悬停每秒代价严格为 $1.624\text{ m/s}$。
  2. **南极着陆最大难点**：低入射角长阴影欺骗光学传感器，障碍识别延误直接吃光昂贵的悬停燃油。
  3. **近期任务成败鉴别**：SLIM 是精度极高（55m）但喷管脱落倒栽葱；IM-2 是最南（84.8°S）但侧翻进坑无光照。
- **⚠️ 教授命题陷阱**：
  - 陷阱 1：选“阿波罗 11 号 30 秒警告是发动机立刻要熄火了”——**错误！是着陆/中止决断时间**。
  - 陷阱 2：选“月球没有大气所以光学相机在南极着陆比地球更清晰容易”——**错误！正是无大气漫反射，背阴区纯黑如墨，阴影严重摧毁图像匹配算法**。
- **⚡ 1 秒速杀应试之眼**：
  - **悬停每秒一点六，南极长影吃光油；SLIM 倒扣阿波罗留，澳洲袋鼠裕度求！**

---

### 25. 全程地月任务 $\Delta v$ 链条端到端核算与方程式宾果总结 (End-to-End Mission $\Delta v$ Budget & Equation Bingo Synthesis)
> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Week 7 Lecture 8 Slides 58–60; Course Synthesis & 2026 Equation Bingo Card

#### 25.1 八讲大统一：一条地月任务全流程推进剂账单 (The Complete Mission Chain)
从地球 320 km 停泊轨道出发，直至月表安全软着陆，各阶段基准 $\Delta v$ 汇总表：
| 任务阶段 | 所属讲次 | 物理机动形式与参数 | 速度增量 $\Delta v$ (km/s) | 累计占比与特征 |
| :--- | :--- | :--- | :--- | :--- |
| **地月注入点火 (TLI)** | Lecture 3 (Curtis Ex 9.1) | 离开地球椭圆注入（含 $6^\circ$ 航向角损耗） | **$3.256\text{ km/s}$** | 最大的单次脉冲点火 |
| **中途修正机动 (TCM)** | Lecture 5 | 消除深空注入误差与瞄准月心目标面 | $\sim 0.050\text{ km/s}$ | 改变 B-plane 瞄准点 |
| **环月椭圆捕获 (LOI)** | Lecture 7 (Route B) | 近月点逆行制动进入 $1021 \times 10,000\text{ km}$ | **$0.374\text{ km/s}$** | Oberth 效应最高点火 |
| **降近月点机动** | Lecture 7 (Route B) | 在 $10,000\text{ km}$ 远月点将近心压至 $100\text{ km}$| **$0.062\text{ km/s}$** | 动对向拱点，极其便宜 |
| **低月轨道圆化** | Lecture 7 (Route B) | 在 $100\text{ km}$ 新近月点切向圆化 | **$0.515\text{ km/s}$** | 交付到任务工作极轨 |
| **动力下降轨道切入 (DOI)** | Lecture 8 | 霍曼半圈降轨至 $15\text{ km}$ 近月点 | **$0.019\text{ km/s}$** | 以小博大，节省 169 m/s |
| **动力下降全减速制动** | Lecture 8 | 线性正切导引，消除 $1.69\text{ km/s}$ 航速及降落 | **$1.781\text{ km/s}$** | 持续 459s 长程带动力滑行 |
| **月球到达至着陆总计** | 全程汇总 | **从月球 SOI 捕获到月表触地** | **$\mathbf{2.751\text{ km/s}}$** | **最后 100km 独占 2/3 消耗！** |

> [!IMPORTANT]
> **全课最震撼的工程事实**：
> 飞船穿过 38 万公里漫漫长路到达月球后，在后续总计消耗的 $2.751\text{ km/s}$ 速度增量中，**有超过三分之二（$1.800\text{ km/s}$）死死消耗在最后短短 100 公里的下降着陆过程中！** 越接近目标表面，重力抗衡与动能消除的代价越令人窒息。

#### 25.2 2026 方程式宾果终极巡礼 (Equation Bingo 2026 Card)
教授在 Lecture 8 Slide 60 中钦定的全部核心公式矩阵：
1. **基础推进**：$\Delta v = I_{sp} g_0 \ln\frac{m_0}{m_f}$（L1 火箭方程）；
2. **霍曼机动**：$\Delta v_H = |\Delta v_A| + |\Delta v_B|$，拱点活力公式 $v^2 = \mu(2/r - 1/a)$（L1）；
3. **调相周期**：$a = \left(\frac{\sqrt{\mu} T}{2\pi}\right)^{2/3}$，周期决定相位差 $\Delta\theta$（L2）；
4. **速度向量差**：$\Delta v = \|\mathbf{v}_2 - \mathbf{v}_1\|$，余弦定理（L3）；
5. **低推力螺旋**：$\Delta v_{\text{spiral}} = |v_1 - v_2|$，式 6.39 闭式时间（L4）；
6. **影响球拼接**：$\mathbf{v}_2 = \mathbf{v}_1 - \mathbf{v}_m$，月心 $e_2 > 1$ 双曲线（L5）；
7. **纯变面脉冲**：$\Delta v_\perp = 2v\sin\frac{\Delta i}{2}$（L4/L7）；
8. **环月捕获**：近月点制动入轨，Route B 远心点调控（L7）；
9. **轨道维持**：四大冻结倾角（$27^\circ, 50^\circ, 76^\circ, 86^\circ$）与 9:2 NRHO 朔望月共振（L6）；
10. **动力下降**：线性正切导引，DOI 节省杠杆，重力损失与转向损失平衡（L8）；
11. **漫游车新篇章**：$\Delta v$ 宣告终结，下一阶段转化为地表行驶能量（每爬坡一米消耗焦耳数）与科学信息的博弈（L9/L10）。

---

#### 25.3 🎯 【真题高频考法与深度物理直觉】(Exam Patterns & Deep Intuition)
- **核心考点与命题规律**：
  1. **全任务能耗分布**：到达月球后的推进能耗三分之二压在最后 100 公里。
  2. **宾果公式全域映射**：闭眼能将 11 个宾果方块与对应物理场景及失效边界严密对应。
- **⚡ 1 秒速杀应试之眼**：
  - **到月耗资两千七，百里之内占三分二；宾果卡上十一块，从天落地方程闭！**
