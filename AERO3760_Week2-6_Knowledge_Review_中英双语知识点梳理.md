# AERO3760 Space Engineering 2 · 核心知识点全景深度解剖 (Week 2 – Week 6)
> **适用范围**：AERO3760 Mid-term / Week 8 Quiz & Final Exam  
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
2. **逆行轨道几何定义**：轨道平面法向（角动量 $\mathbf{h}$）与天体自转极轴 $\mathbf{K}$ 的夹角（倾角 $i > 90^\circ$），纯三维方向几何，非汽车倒车。*(周末真题 Q1)*
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
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.1 *Impulsive maneuvers*, **Book p. 287 (PDF p. 294)**; Section 6.9, **Book pp. 329–331 (PDF pp. 336–338)**

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

### 3. 霍曼双脉冲转移与为什么第二点火不能省 (Hohmann Transfer)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.2 *Hohmann transfer*, **Book pp. 289–295 (PDF pp. 296–302)**, Equations 6.1–6.11, Example 6.1

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

### 4. 双椭圆转移与三大临界阈值 (Bi-elliptic Transfer Thresholds)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.3 *Bielliptic Hohmann transfer*, **Book pp. 295–298 (PDF pp. 302–305)**, Equations 6.12–6.18, Figure 6.7, Example 6.2

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

### 5. 同轨调相：反常识的“减速超车” (Orbital Phasing)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.4 *Phasing maneuvers*, **Book pp. 298–303 (PDF pp. 305–310)**, Equations 6.19–6.25, Example 6.3 & 6.4

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

### 6. 离拱点非霍曼与矢量速度改变 (Off-Apsis Transfers & Vector Delta-v)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.5–6.6, **Book pp. 303–313 (PDF pp. 310–320)**, Equations 6.26–6.34, Example 6.5 & 6.6

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

### 7. 轨道平面改变：太空中最昂贵的抢劫 (Plane Changes)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.8 *Plane change maneuvers*, **Book pp. 317–324 (PDF pp. 324–331)**, Equations 6.35–6.37, Example 6.9 & 6.10

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

### 8. 发射方位角与纬度极限 (Launch Azimuth & Inclination Limit)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.8, **Book pp. 326–328 (PDF pp. 333–335)**, Equation 6.38b, Example 6.11

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

### 9. 低推力电推进连续螺旋 (Continuous Low-Thrust Spiral)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 6, Section 6.9 *Nonimpulsive orbital maneuvers*, **Book pp. 329–335 (PDF pp. 336–342)**, Equation 6.39, Example 6.12

- **工作机制**：与化学火箭几分钟的暴烈冲量不同，离子推进器推力极微弱，沿轨道切线方向连续喷火数月甚至数年。
- **几何轨迹**：飞船以肉眼不可见的速度慢慢盘旋展开，轨道在每一个瞬间都几乎是圆，从低圆轨道缓缓盘旋成高圆轨道。
- **Curtis Eq. 6.39 核心公式**：
  $$\Delta v \approx |v_{c1} - v_{c2}|$$
  连续切向微推力螺旋爬升所需的理论总速度增量，几乎恰好等于初始圆轨道速度与最终圆轨道速度之标量绝对值之差！

---

# 模块四：Week 4 地月转移初阶与影响球模型 (Earth–Moon Transfers & SOI)

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

### 11. 拉普拉斯影响球模型：引力并不平衡的建模边界 (Laplace SOI)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 8, Section 8.2, **Book pp. 392–397 (PDF pp. 399–404)**; Chapter 9, **Book p. 440 (PDF p. 447)**

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

### 14. 飞越偏转角与阿波罗 8 字形自由返回 (Flybys & Apollo Free Return)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 8, Section 8.5 *Planetary flyby*, **Book pp. 412–418 (PDF pp. 419–425)**; Chapter 9, **Book pp. 450–456 (PDF pp. 457–463)**

#### 14.1 双曲线转向角
$$\delta_{\text{turn}} = 2 \arcsin\left(\frac{1}{e_2}\right)$$
当偏心率 $e_2 = \sqrt{2} \approx 1.414$ 时，偏转角恰好为 $90^\circ$。

#### 14.2 前侧飞越 vs 后侧飞越的物理差异
- **后侧飞越 (Trailing-edge flyby)**：月球拉着飞船顺行拖拽，飞船相对地心的机械能增加，获得引力助推，**用于飞向外行星的加速逃逸**。
- **前侧飞越 (Leading-edge flyby)**：迎着月球公转方向逆行飞越，月球引力将飞船地心速度猛烈**刹车**！飞船地心轨道能量降低，远地点被压低，近地点自然下沉。
- **阿波罗自由返回 (Apollo Free-Return)**：顺行奔月、前侧逆行绕月，月球引力将轨道弯曲成一条漂亮的“8”字形，即便服务舱引擎损坏无动力（如阿波罗 13 号），飞船也能自然返回地球大气层再入救命！

---

# 模块六：Week 6 3D转移、受限三体与环月轨道设计 (3D, 3-Body & Lunar Orbits)

### 15. 3D地月转移、白道振荡与 Simpson 拟合有效期 (3D Conics & Ephemeris)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 9, Section 9.3 *A simplified lunar ephemeris* & Section 9.4 *Patched conic lunar trajectories in three dimensions*, **Book pp. 457–468 (PDF pp. 464–475)**, Equations 9.40–9.62

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

### 16. 圆型受限三体动力学与 RK4 漂移灾难 (CR3BP & RK4 Reality)
> 📖 **教材对应出处 (Textbook)**: Curtis Chapter 9, Section 9.5 *Lunar trajectories by numerical integration*, **Book pp. 469–479 (PDF pp. 476–486)**, Equations 9.63–9.69 & Example 9.4

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

### 17. 月球质量瘤、冻结轨道与 Artemis / Gateway (Mascons, Frozen Orbits & NRHO)
> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 10, Section 10.8 *Lunar gravity potential*, **Book pp. 529–532 (PDF pp. 536–539)**; Lecture 6 Slides *Wk04-06_Lunar_Trajectories_L5_L6.pdf*, pp. 42–65

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
