# AERO3760 Space Engineering 2 · 核心仿真考题与逐题解剖 (Week 2 – Week 6)
> **出题规范**：严格对接 AERO3760 教授周考与期中 Quiz 出题风格——纯概念直觉与心算逻辑判断（*"All arithmetic is mental. No calculator is needed and no formula sheet is required."*）  
> **题目配置**：20 道全真模拟单选题（Group of answer choices，每题 4 个高仿真选项）  
> **教材版本**：Howard D. Curtis, *Orbital Mechanics for Engineering Students* (4th Edition, Elsevier)  
> **页码双轨标注**：**Book p. XXX**（纸质书页码）；**(PDF p. YYY)**（电子版 PDF 页码，固定偏移 7 页）  
> **覆盖范围**：Week 2 推进与机动基础 $\to$ Week 3 高级转移与变面 $\to$ Week 4 地月霍曼与影响球 $\to$ Week 5 月心双曲线与自由返回 $\to$ Week 6 3D星历、三体数值与现代环月轨道 (Mascons/ELFO/NRHO)  
> **解析深度**：题干与选项 + 官方正确答案 + 教材精确出处 + 0基础白话直观图像 + 教授设坑诱饵点穴 + 考场1秒题眼

---

# 模拟卷题目导航 / Quiz Navigator
- [考题 1 (Week 2 · 冲量机动假定的几何与速度本质)](#考题-1-week-2-冲量机动假定的几何与速度本质)
- [考题 2 (Week 2 · 冲量假定失真判定与 GSAT-31 案例)](#考题-2-week-2-冲量假定失真判定与-gsat-31-案例)
- [考题 3 (Week 2 · 比冲 Isp 与火箭方程指数暴政)](#考题-3-week-2-比冲-isp-与火箭方程指数暴政)
- [考题 4 (Week 2 · 霍曼转移远地点第二点火的力学必然性)](#考题-4-week-2-霍曼转移远地点第二点火的力学必然性)
- [考题 5 (Week 3 · 双椭圆转移三脉冲优于霍曼的临界阈值)](#考题-5-week-3-双椭圆转移三脉冲优于霍曼的临界阈值)
- [考题 6 (Week 3 · 同轨超车反常识：减速与轨道周期倒错)](#考题-6-week-3-同轨超车反常识减速与轨道周期倒错)
- [考题 7 (Week 3 · 离拱点非霍曼机动：速度大小不变为何仍需巨量燃料)](#考题-7-week-3-离拱点非霍曼机动速度大小不变为何仍需巨量燃料)
- [考题 8 (Week 3 L4 · 24 度轨道面旋转代价等同逃逸地球定律)](#考题-8-week-3-l4-24-度轨道面旋转代价等同逃逸地球定律)
- [考题 9 (Week 3 L4 · 正东直接发射单一入轨最低倾角极限)](#考题-9-week-3-l4-正东直接发射单一入轨最低倾角极限)
- [考题 10 (Week 3 L4 · 连续低推力电推进准圆螺旋升轨速度增量)](#考题-10-week-3-l4-连续低推力电推进准圆螺旋升轨速度增量)
- [考题 11 (Week 4 · 地月霍曼转移 110 m/s 黄金狭缝与速度敏感度)](#考题-11-week-4-地月霍曼转移-110-ms-黄金狭缝与速度敏感度)
- [考题 12 (Week 4 · 拉普拉斯影响球边界引力并不平衡的物理实质)](#考题-12-week-4-拉普拉斯影响球边界引力并不平衡的物理实质)
- [考题 13 (Week 5 · 地月交会闭式解 Curtis Eq. 9.18 与月球超前角)](#考题-13-week-5-地月交会闭式解-curtis-eq-918-与月球超前角)
- [考题 14 (Week 5 · 月心双曲线能量门与近月撞击判据)](#考题-14-week-5-月心双曲线能量门与近月撞击判据)
- [考题 15 (Week 5 · 月球重力助推方向与阿波罗 8 字形自由返回)](#考题-15-week-5-月球重力助推方向与阿波罗-8-字形自由返回)
- [考题 16 (Week 6 · 3D 拼接到达角圆锥与转移平面的相交解)](#考题-16-week-6-3d-拼接到达角圆锥与转移平面的相交解)
- [考题 17 (Week 6 · Simpson 经验多项式星历的有效期限与误差量级)](#考题-17-week-6-simpson-经验多项式星历的有效期限与误差量级)
- [考题 18 (Week 6 · 地心 CR3BP 微分方程中月球项减去地心引力的根源)](#考题-18-week-6-地心-cr3bp-微分方程中月球项减去地心引力的根源)
- [考题 19 (Week 6 · 月球质量瘤与 LRO 修正偏心率放任倾角策略)](#考题-19-week-6-月球质量瘤与-lro-修正偏心率放任倾角策略)
- [考题 20 (Week 6 · 月球冻结轨道本质与 Gateway 9:2 NRHO 避食共振)](#考题-20-week-6-月球冻结轨道本质与-gateway-92-nrho-避食共振)

---

## 考题 1 (Week 2 · 冲量机动假定的几何与速度本质)
**Question 1:**  
In Keplerian two-body orbital mechanics, rocket burns are commonly modelled as impulsive maneuvers. Which of the following statements rigorously defines the physical state of the spacecraft across an impulsive burn?  
- A. Gravitational acceleration from the central body is assumed to be instantaneously zero during engine operation.  
- B. The burn duration must be strictly less than 1% of the spacecraft's orbital period.  
- **C. The spacecraft position vector is continuous ($\mathbf{r}^+ = \mathbf{r}^-$), while the velocity vector experiences a finite jump ($\mathbf{v}^+ = \mathbf{v}^- + \Delta\mathbf{v}$).**  
- D. The total mass of the spacecraft and remaining propellant remains strictly constant across the delta-v application.  

> 📖 **教材对应出处 (Textbook Reference)**: Curtis Chapter 6, Section 6.1 *Impulsive maneuvers*, **Book p. 287 (PDF p. 294)**  
> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 真实的发动机喷火需要持续一段时间，但在开普勒两体计算中，我们把喷火过程极度抽象为“神之锤在瞬间敲了一记”。其核心几何假设只有两条：  
> 1. **位置没有瞬移**：点火前一瞬间和点火后一瞬间，飞船依然处在空间中完全相同的坐标点上（$\mathbf{r}^+ = \mathbf{r}^-$）；  
> 2. **速度瞬间突变**：发动机推力被积分压缩为一个瞬时的速度向量跃迁 $\Delta\mathbf{v}$。变轨的几何本质就是在**同一个空间点**强行改变速度方向与大小，从而瞬间脱离旧开普勒轨道、换入新轨道。  
> **【教授设坑套路分析】**:  
> - 选项 B 用“燃烧时间小于 1% 周期”这种貌似合理的经验法则做诱饵；选项 A 谎称重力消失，都是违背基础力学定义的干扰项。  
> **【考场一秒题眼】**: 看到 `Impulsive maneuver definition` $\to$ 锁定 `Position continuous, velocity experiences a jump`。

---

## 考题 2 (Week 2 · 冲量假定失真判定与 GSAT-31 案例)
**Question 2:**  
The Indian geostationary communications satellite GSAT-31 fired its liquid apogee motor for 78 minutes, during which it swept only about 10 degrees of its orbit. The identical 78-minute burn fired at perigee would sweep about 216 degrees. The fundamental physical variable for judging how severely a burn violates the impulsive model is:  
- A. The burn duration in clock minutes divided by the spacecraft orbital period.  
- **B. The arc of true anomaly swept by the spacecraft while the engine runs ($\Delta\theta$).**  
- C. The magnitude of total delta-v delivered relative to circular orbital speed.  
- D. The initial thrust-to-weight ratio of the propulsion system.  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 6, Section 6.9, **Book pp. 329–331 (PDF pp. 336–338)**; Lecture 4 Slides, pp. 28–32  
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 很多人以为一次点火符不符合冲量假定取决于手表上的钟表时间（是否小于几分钟），**这是大错特错的！** GSAT-31 喷了漫长的 78 分钟，为什么依然能用冲量模型？因为在远地点飞船速度极慢，78 分钟只在轨道上挪动了 **10 度的圆弧（$\Delta\theta \approx 10^\circ$）**，在空间中几乎悬停在一个点上！但如果在近地点喷 78 分钟，飞船疯狂掠过 **216 度（掉头飞了大半圈）**，推力方向和速度方向严重脱节，引力损耗极大。因此，**唯一物理判据是点火期间飞船真近点角到底扫过了多少弧度（The arc of true anomaly swept $\Delta\theta$）**。  
> **【教授设坑套路分析】**:  
> - 选项 A（时间除以周期）看起来极其像工程无量纲数，最能骗到死背公式的学生；选项 D（推重比）只是工程推力参数，不是轨道几何失真判据。  
> **【考场一秒题眼】**: 看到 `Judging how badly a burn violates impulsive model` $\to$ 选 `The arc of true anomaly swept while engine runs`。

---

## 考题 3 (Week 2 · 比冲 Isp 与火箭方程指数暴政)
**Question 3:**  
A bipropellant apogee engine lists a specific impulse of $I_{sp} = 320\text{ s}$. A common student misconception is that the engine can fire continuously for at most 320 seconds. In space propulsion, the physical significance of $I_{sp}$ is:  
- A. The maximum burn duration before the rocket combustion chamber experiences thermal burnout.  
- B. The ratio of spacecraft initial wet mass to structural dry mass.  
- **C. The ratio of effective exhaust velocity to standard Earth gravity ($v_e / g_0$), measuring propellant mass consumption efficiency.**  
- D. The time required for the spacecraft to accelerate from rest to circular orbital velocity.  

> 📖 **教材对应出处 (Textbook Reference)**: Curtis Chapter 13, Section 13.3 *Rocket performance*, **Book pp. 710–712 (PDF pp. 717–719)**, Equations 13.14–13.18  
> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 比冲的定义是“消耗单位海平面重量的推进剂所产生的冲量”：$I_{sp} = \frac{v_e}{g_0}$。排气速度 $v_e$ 单位是 $\text{m/s}$，地表重力加速度 $g_0$ 单位是 $\text{m/s}^2$，两者相除出来的单位碰巧是“秒（seconds）”。它**纯粹是衡量推进剂效率的指标（相当于太空车的“每加仑跑多少公里”）**，绝对不是发动机的工作寿命！比冲越高，排气速度越快，火箭方程中指数项 $\exp(\Delta v / (I_{sp} g_0))$ 越平缓，省下的死重越多。  
> **【教授设坑套路分析】**:  
> - 选项 A 踩中了“把比冲的单位秒当成燃烧时间”的经典低级误区；选项 B 是质量比（Mass ratio）。  
> **【考场一秒题眼】**: 看到 `Misconception that Isp means burn duration` $\to$ 选 `Ratio of exhaust velocity to g0, measuring propellant efficiency`。

---

## 考题 4 (Week 2 · 霍曼转移远地点第二点火的力学必然性)
**Question 4:**  
When executing a standard coplanar Hohmann transfer from a low circular orbit to a higher circular orbit, why is the second burn at apogee strictly required?  
- A. Because Earth's gravity at apogee drops to zero, requiring thrust to maintain orbital motion.  
- B. To prevent the spacecraft from immediately escaping the Earth on a parabolic trajectory.  
- **C. Because without the second burn, the spacecraft remains on the transfer ellipse and will inevitably fall back to its initial low perigee.**  
- D. Because orbital angular momentum cannot be conserved along an unpowered transfer orbit.  

> 📖 **教材对应出处 (Textbook Reference)**: Curtis Chapter 6, Section 6.2 *Hohmann transfer*, **Book pp. 289–295 (PDF pp. 296–302)**, Equations 6.1–6.11  
> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 第一次在近地点点火，仅仅是把轨道从小圆“拉伸”成了一条椭圆。当飞船滑行半圈到达目标轨道高度（远地点）时，其速度 $v_{t2} = \sqrt{\frac{\mu}{r_2}}\sqrt{\frac{2r_1}{r_1+r_2}}$ 低于该高度圆轨道速度 $v_{c2} = \sqrt{\frac{\mu}{r_2}}$。如果不启动发动机补足速度差 $\Delta v_2$ 进行圆化（Circularise），根据开普勒椭圆能量守恒，**飞船会顺着这条椭圆轨道原路跌回初始低轨道的近地点！** 它绝不可能自己留在高处。  
> **【考场一秒题眼】**: 看到 `Why second Hohmann burn strictly required` $\to$ 选 `Otherwise falls back to initial low perigee`。

---

## 考题 5 (Week 3 · 双椭圆转移三脉冲优于霍曼的临界阈值)
**Question 5:**  
Under what geometric condition can a 3-burn bi-elliptic transfer strictly outperform a 2-burn Hohmann transfer in total delta-v between two coplanar circular orbits?  
- A. For any transfer where the target radius is larger than the initial radius ($r_2 / r_1 > 1$).  
- B. Only when the intermediate apogee radius $r_b$ is strictly smaller than the target orbit radius $r_2$.  
- **C. Only when the radius ratio $r_2 / r_1 > 11.94$, provided the intermediate apogee $r_b$ is pushed sufficiently far out.**  
- D. Only when the spacecraft employs electric propulsion with continuous tangential thrust.  

> 📖 **教材对应出处 (Textbook Reference)**: Curtis Chapter 6, Section 6.3 *Bielliptic Hohmann transfer*, **Book pp. 295–298 (PDF pp. 302–305)**, Figure 6.7 & Equations 6.16–6.18  
> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 记住轨道机动三大黄金阈值（半径比 $R = r_2/r_1$）：  
> 1. **$R < 11.94$**：霍曼转移是绝对无法被击败的省油之王！双椭圆在任何情况下都不会比霍曼省；  
> 2. **$11.94 < R < 15.58$**：只有把中间远地点 $r_b$ 扔到非常遥远的地方时，双椭圆才会比霍曼省一点点；  
> 3. **$R > 15.58$**：只要 $r_b > r_2$，三脉冲双椭圆注定在 $\Delta v$ 上击败霍曼转移（代价是需要飞几个月甚至几年的漫长时间）。  
> **【考场一秒题眼】**: 看到 `Bi-elliptic strictly outperforms Hohmann when` $\to$ 选 `r2 / r1 > 11.94 (with large rb)`。

---

## 考题 6 (Week 3 · 同轨超车反常识：减速与轨道周期倒错)
**Question 6:**  
A chaser spacecraft is tasked with catching up to a space station that is orbiting in the same circular orbit but leads 20 degrees ahead. To execute this orbital phasing rendezvous, the chaser should fire:  
- A. Prograde, accelerating into a larger orbit so that its linear speed increases to close the gap.  
- **B. Retrograde, decelerating into a smaller phasing orbit with a shorter semi-major axis, so that its orbital period decreases and it laps faster to catch up from behind.**  
- C. Radially outward toward the station to cut directly across the orbital circle.  
- D. Normal to the orbital plane to tilt its trajectory into a high-inclination interceptor track.  

> 📖 **教材对应出处 (Textbook Reference)**: Curtis Chapter 6, Section 6.4 *Phasing maneuvers*, **Book pp. 298–303 (PDF pp. 305–310)**, Equations 6.19–6.25 & Example 6.3  
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 地面开车的直觉是“追前车必须踩油门”，**在太空中踩油门是找死！** 顺行加速点火会导致轨道半长轴 $a$ 变大，由开普勒第三定律 $T = 2\pi\sqrt{a^3/\mu}$，你的轨道周期 $T$ 会显著变长！你转完一圈的时间比目标还长，只会被前方的空间站越甩越远。**太空中唯一的正确追赶法是踩刹车（Retrograde burn）！** 踩刹车让你跌入更小的内圈椭圆轨道，周期缩短，在内圈飞速绕圈，几圈之后就能从后方套圈追上目标！  
> **【考场一秒题眼】**: 看到 `Catch up to target leading ahead in same orbit` $\to$ 选 `Retrograde burn into smaller orbit (shorter period)`。

---

## 考题 7 (Week 3 · 离拱点非霍曼机动：速度大小不变为何仍需巨量燃料)
**Question 7:**  
A spacecraft at an off-apsis true anomaly ($\theta \neq 0^\circ, 180^\circ$) has a non-zero flight-path angle $\gamma$. If an impulsive maneuver rotates the velocity vector by an angle $\Delta\gamma$ while keeping the speed magnitude $v$ strictly unchanged, the required delta-v is:  
- A. Strictly zero, because kinetic energy $\frac{1}{2}v^2$ is conserved.  
- **B. Non-zero and equal to $2 v \sin\left(\frac{\Delta\gamma}{2}\right)$, because thrust must change the vector difference $\mathbf{v}^+ - \mathbf{v}^-$.**  
- C. Equal to $v \tan\Delta\gamma$, proportional to the change in radial velocity.  
- D. Undefined, because Keplerian orbits forbid pure direction changes off the apsides.  

> 📖 **教材对应出处 (Textbook Reference)**: Curtis Chapter 6, Section 6.5–6.6, **Book pp. 303–313 (PDF pp. 310–320)**, Equations 6.26–6.34  
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 火箭发动机点火产生推力，改变的是速度向量 $\Delta\mathbf{v} = \mathbf{v}^+ - \mathbf{v}^-$。由向量几何余弦定理：  
> $$\Delta v = \sqrt{v^2 + v^2 - 2 v^2 \cos(\Delta\gamma)} = 2 v \sin\left(\frac{\Delta\gamma}{2}\right)$$  
> 哪怕航天器的速率标量一丁点都没变（动能守恒），**仅仅在三维空间中把速度方向掰弯一个角度，火箭就必须实打实地喷射出大量推进剂！** 太空中转向是极度昂贵的物理操作。  
> **【考场一秒题眼】**: 看到 `Rotate velocity vector with speed magnitude unchanged` $\to$ 选 `2 v sin(Delta gamma / 2) != 0`。

---

## 考题 8 (Week 3 L4 · 24 度轨道面旋转代价等同逃逸地球定律)
**Question 8:**  
A pure plane change rotates the orbital plane by an inclination angle $\delta$ without altering speed $v_c$. A rotation of $\delta = 24^\circ$ is famously known in orbital mechanics because its delta-v cost equals:  
- A. Half of the orbital speed ($0.5 v_c$).  
- B. The delta-v required to de-orbit directly into the atmosphere.  
- **C. The delta-v required to boost from circular speed to parabolic escape speed ($(\sqrt{2} - 1) v_c \approx 0.414 v_c$).**  
- D. Only 4.14% of the circular orbital velocity.  

> 📖 **教材对应出处 (Textbook Reference)**: Curtis Chapter 6, Section 6.8 *Plane change maneuvers*, **Book pp. 317–324 (PDF pp. 324–331)**, Equations 6.35–6.37  
> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 纯变面公式为 $\Delta v = 2 v_c \sin(\delta/2)$。当 $\delta = 24^\circ$ 时，$\delta/2 = 12^\circ$。心算：$2 \sin(12^\circ) = 2 \times 0.2079 = \mathbf{0.414}$，即 $\Delta v = 0.414 v_c$。  
> 而飞船从圆轨道加速到抛物线逃逸的速度增量是：$\Delta v_{\text{esc}} = (\sqrt{2}-1)v_c = (1.414-1)v_c = \mathbf{0.414 v_c}$！  
> 这个震撼的力学巧合告诉我们：**在环绕地球的轨道上哪怕仅仅拐弯 24 度，所耗费的巨量燃料就足以把这艘飞船彻底送出地球引力场、飞向深空！**  
> **【考场一秒题眼】**: 看到 `24-degree plane rotation cost equals` $\to$ 选 `Boosting from circular speed to escape (0.414 vc)`。

---

## 考题 9 (Week 3 L4 · 正东直接发射单一入轨最低倾角极限)
**Question 9:**  
For a direct rocket launch with no out-of-plane dogleg steering, launching due east ($A_0 = 90^\circ$) gives the lowest orbital inclination a single launch can reach from that site, equal to:  
- A. Zero degrees (an equatorial orbit), reachable from any global launch site.  
- B. Exactly 28.5 degrees, regardless of where on Earth the launch occurs.  
- **C. The geographic latitude of the launch site ($\phi$).**  
- D. The geographic longitude of the launch site.  

> 📖 **教材对应出处 (Textbook Reference)**: Curtis Chapter 6, Section 6.8, **Book pp. 326–328 (PDF pp. 333–335)**, Equation 6.38b  
> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 球面三角学核心方程：$\cos i = \cos\phi \sin A_0$。  
> 火箭朝正东发射（$A_0 = 90^\circ$）能够完全利用地球自转的顺行线速度，此时 $\sin(90^\circ) = 1$，公式化简为 $\cos i = \cos\phi \implies \mathbf{i_{\min} = \phi}$！  
> 这条残酷的航天定律决定了：**除非在入轨后耗费高昂燃料进行变面机动，否则从纬度 $\phi$ 直接发射，你能进入的最低倾角就等于你的发射场纬度！** 佛罗里达肯尼迪航天中心（$28.5^\circ\text{ N}$）最低只能打出 $28.5^\circ$；要打 $0^\circ$ 赤道轨道，只能去赤道附近的发射场（如法属圭亚那库鲁 $5^\circ\text{ N}$）。  
> **【考场一秒题眼】**: 看到 `Launching due east gives lowest inclination equal to` $\to$ 选 `The latitude of the launch site`。

---

## 考题 10 (Week 3 L4 · 连续低推力电推进准圆螺旋升轨速度增量)
**Question 10:**  
An electric propulsion spacecraft with continuous low-thrust tangential steering spirals outward between two coplanar circular orbits ($r_1 \to r_2$). According to Curtis Eq. 6.39, the total delta-v required is approximately:  
- A. The sum of the two circular velocities ($v_{c1} + v_{c2}$).  
- B. Identical to the two-burn Hohmann delta-v ($|\Delta v_1| + |\Delta v_2|$).  
- **C. The absolute difference between the initial and final circular orbital speeds ($|v_{c1} - v_{c2}|$).**  
- D. Zero, because electric thrust does not produce impulsive acceleration.  

> 📖 **教材对应出处 (Textbook Reference)**: Curtis Chapter 6, Section 6.9 *Nonimpulsive orbital maneuvers*, **Book pp. 329–335 (PDF pp. 336–342)**, Equation 6.39 & Example 6.12  
> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 离子电推力极其微弱（几十毫牛），发动机持续喷射数月。飞船的轨道在每一个瞬间都几乎是完美的圆，慢慢像蚊香一样螺旋向外展开。积分切向加速度得到的总速度增量公式极为简洁（Curtis Eq. 6.39）：  
> $$\Delta v \approx |v_{c1} - v_{c2}|$$  
> 所需总速度增量几乎恰好等于初轨圆速度与终轨圆速度的**标量差绝对值**。  
> **【考场一秒题眼】**: 看到 `Continuous low-thrust spiral delta-v` $\to$ 选 `Absolute difference between circular speeds |vc1 - vc2|`。

---

## 考题 11 (Week 4 · 地月霍曼转移 110 m/s 黄金狭缝与速度敏感度)
**Question 11:**  
In a preliminary Hohmann estimate for an Earth-to-Moon transfer from a 300 km LEO parking orbit, the required injection speed is $v_0 \approx 10.92\text{ km/s}$, while the Earth escape velocity from that altitude is $v_{\text{esc}} \approx 11.03\text{ km/s}$. The critical operational lesson of this $110\text{ m/s}$ difference is:  
- A. Lunar transfers require more energy than escaping the solar system.  
- B. Spacecraft can safely arrive at the Moon over a very wide and forgiving injection speed margin.  
- **C. The boundary between reaching the Moon and escaping the Earth is razor-thin (~1%), where an injection error of only $1\text{ m/s}$ causes a $3,400\text{ km}$ apogee miss.**  
- D. Lunar insertion burns must be fired in the retrograde direction at Earth departure.  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 9, Section 9.1 & 9.2, **Book pp. 437–442 (PDF pp. 444–449)**; Lecture 1 & Lecture 2  
> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 算一算差值：$11.03\text{ km/s} - 10.92\text{ km/s} = 0.11\text{ km/s} = \mathbf{110\text{ m/s}}$！  
> 刚好能够到达月球轨道的速度与彻底甩脱地球引力逃逸深空的速度，**仅仅相差 1% 的狭小窗口（黄金 110 m/s）**！数学导数计算表明，初始点火产生仅仅 $1\text{ m/s}$（0.01%）的微弱测控误差，远地点就会直接漂移 **$3,400\text{ km}$**，直接导致飞船脱靶甚至撞月！这就是为什么地月飞行必须配置中途轨道修正点火（TCMs）。  
> **【考场一秒题眼】**: 看到 `110 m/s difference between lunar injection and escape` $\to$ 选 `Razor-thin boundary (~1%), 1 m/s error causes 3,400 km miss`。

---

## 考题 12 (Week 4 · 拉普拉斯影响球边界引力并不平衡的物理实质)
**Question 12:**  
At the boundary of the Moon's Laplace sphere of influence ($R_S \approx 66,183\text{ km}$ from the Moon's center), the gravitational acceleration exerted by the Earth on the spacecraft is:  
- A. Exactly equal and opposite to the Moon's gravitational pull, creating a zero-g balance.  
- **B. Still about 3.5 times stronger than the Moon's gravitational pull on the spacecraft.**  
- C. Strictly zero, because the Moon's mass completely shields the Earth's gravity.  
- D. Negligible compared to solar radiation pressure.  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 8, Section 8.2, **Book pp. 392–397 (PDF pp. 399–404)**; Chapter 9, **Book p. 440 (PDF p. 447)**  
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 考试头号大雷区：**“影响球边界上两体引力互相抵消平衡”，这是彻底的伪科学！**  
> 真实计算：在 $R_S \approx 66,183\text{ km}$ 边界处，地球引力为 $3.93 \times 10^{-3}\text{ m/s}^2$，月球引力为 $1.12 \times 10^{-3}\text{ m/s}^2$。**地球的拉力比月球整整大 3.5 倍！** 拉普拉斯之所以定义这个球，纯粹是因为在这个球面内部，如果把月球当主天体、把地球当摄动，级数展开才是数学收敛的。它纯粹是一个**数学坐标切换面**，绝不是引力平衡点。  
> **【考场一秒题眼】**: 看到 `At Laplace SOI boundary Earth's pull is` $\to$ 选 `Still about 3.5 times stronger than the Moon's pull`。

---

## 考题 13 (Week 5 · 地月交会闭式解 Curtis Eq. 9.18 与月球超前角)
**Question 13:**  
In coplanar patched-conic lunar trajectory design, Curtis Eq. 9.18 provides a closed-form deterministic solution for geocentric angular momentum $h_1$ without iterative numerical root-finding. To achieve an encounter, the mission must aim ahead of the Moon by a lead angle $\phi_1 = \omega_m \Delta t_1 \approx 36^\circ \sim 43^\circ$ because:  
- A. The Earth's oblateness rotates the line of apsides by that amount during transfer.  
- **B. While the spacecraft spends ~3.2 days in transit, the Moon travels that angular distance along its orbit.**  
- C. The spacecraft must enter the Moon's SOI strictly along the Earth-Moon line.  
- D. Relativistic frame-dragging deflects the trajectory during the lunar passage.  

> 📖 **教材对应出处 (Textbook Reference)**: Curtis Chapter 9, Section 9.2, **Book pp. 440–446 (PDF pp. 447–453)**, Equation 9.18 & Equations 9.10–9.20  
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 这就像“飞碟射击”：飞船从地球飞到月球轨道需要大约 $3.2\text{ 天}$。在这 3.2 天的时间里，月球并不是傻傻站在原地等你的，它正以每天 $13.2^\circ$ 的速度在轨道上狂奔！因此发射时，飞船**必须提前瞄准月球未来 3.2 天后到达的位置（超前角 Lead angle 约 $36.3^\circ \sim 42.6^\circ$，即提前瞄准前方约 244,000 km 处的虚空）**！Curtis Eq. 9.18 则是直接利用到达角 $\lambda$ 和张角 $\Delta\theta$ 闭式解析解出 $h_1$，彻底告别了传统试凑迭代。  
> **【考场一秒题眼】**: 看到 `Must aim ahead by a lead angle because` $\to$ 选 `The Moon travels that angular distance during the ~3.2 day transit`。

---

## 考题 14 (Week 5 · 月心双曲线能量门与近月撞击判据)
**Question 14:**  
Upon entering the Moon's sphere of influence on a patched-conic trajectory, the spacecraft's selenocentric specific mechanical energy satisfies $\varepsilon_2 > 0$ ($e_2 > 1$). This mathematical condition guarantees that:  
- A. The spacecraft will be captured naturally into a stable closed lunar orbit without firing its engine.  
- **B. The trajectory relative to the Moon is strictly a hyperbola, meaning unpowered natural capture is physically impossible and an insertion burn (LOI) is mandatory to enter orbit.**  
- C. The perilune radius is guaranteed to remain above the lunar surface ($r_{p2} > R_m$).  
- D. The spacecraft will impact the Moon regardless of its arrival geometry.  

> 📖 **教材对应出处 (Textbook Reference)**: Curtis Chapter 9, Section 9.2, **Book pp. 445–449 (PDF pp. 452–456)**, Equations 9.21–9.32 & Example 9.1  
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 飞船穿透月球影响球边界时，相对月球的速度高达约 $0.94\text{ km/s}$。算出的月心比能量恒为正数：$\varepsilon_2 = \frac{v_2^2}{2} - \frac{\mu_m}{R_S} \approx +0.37\text{ km}^2/s^2 > 0$！  
> 比能量为正，偏心率必然大于 1（$e_2 > 1$）。**两体引力下，月球绝对不可能自然捕获飞船！** 如果不点火制动（LOI），飞船掠过近月点后必然头也不回地甩出月球影响球。另外，若解出的净高度 $z_{p2} = r_{p2} - R_m < 0$，飞船会在到达近月点前高速撞山粉碎。  
> **【考场一秒题眼】**: 看到 `Selenocentric energy epsilon2 > 0 implies` $\to$ 选 `Strictly a hyperbola, natural capture impossible, LOI mandatory`。

---

## 考题 15 (Week 5 · 月球重力助推方向与阿波罗 8 字形自由返回)
**Question 15:**  
In designing a circumlunar free-return trajectory (such as that used by Apollo 13 and Artemis II), the spacecraft passes the Moon on its leading edge (retrograde relative to the Moon's orbital motion). This specific flyby geometry is chosen because:  
- A. It accelerates the spacecraft relative to the Earth to escape the solar system.  
- **B. The leading-edge pass reduces the spacecraft's geocentric orbital energy, bending the path into an unpowered 'figure-8' that returns safely to Earth's re-entry corridor.**  
- C. It eliminates all solar radiation pressure during the return transit.  
- D. Passing the leading edge is the only way to avoid the Moon's gravitational pull.  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 8, Section 8.5, **Book pp. 412–418 (PDF pp. 419–425)**; Lecture 4 & Lecture 6, Slide 43, 44  
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 重力助推两大方向规则：  
> 1. **后侧飞越 (Trailing edge)**：月球在背后顺向拖拽飞船，给飞船地心能量猛烈加速，用于飞向火星等外行星；  
> 2. **前侧飞越 (Leading edge)**：飞船迎着月球公转面逆向飞越，月球引力给飞船地心速度迎头猛踩一脚刹车！飞船相对地心的机械能被大幅削减，远地点被压低，轨道被天然弯曲成一条漂亮的“8 字形”，安全返回地球大气层再入走廊！这就是阿波罗 13 号当年引擎爆炸后能够活着回来的救命原理。  
> **【考场一秒题眼】**: 看到 `Leading-edge lunar flyby chosen for free-return because` $\to$ 选 `Reduces geocentric energy, bending path into figure-8 back to Earth`。

---

## 考题 16 (Week 6 · 3D 拼接到达角圆锥与转移平面的相交解)
**Question 16:**  
In three-dimensional patched conics, the arrival angle $\lambda$ defines a cone centered on the Earth-Moon line. The transfer plane cuts this arrival cone in:  
- A. Infinitely many tangent lines, producing an under-determined system.  
- B. A single tangent line, because the transfer plane must be perpendicular to the cone axis.  
- **C. Exactly two lines, never one and never three, because the transfer plane contains the cone's own symmetry axis (the Earth-Moon line).**  
- D. Exactly three lines corresponding to the three degrees of freedom in 3D space.  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 9, Section 9.4, **Book pp. 460–465 (PDF pp. 467–472)**; Lecture 5, Slide 13  
> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 这是一个纯粹而优雅的立体几何定理：转移平面的定义包含了地心和月球球心 $\mathbf{r}_m$，也就是说，**地月连线（圆锥的对称中轴线）本身就严格位于转移平面内**！任何通过圆锥中轴线的平面去纵向劈开圆锥，必定沿锥面两侧剖切出**严格且仅有的两条母线交线（Exactly two lines）**！这直接对应了二次方程解出的两个单位向量根 $\pm\hat{\mathbf{b}}$。  
> **【考场一秒题眼】**: 看到 `Transfer plane cuts arrival cone in` $\to$ 选 `Exactly two lines, because plane contains the cone's own axis`。

---

## 考题 17 (Week 6 · Simpson 经验多项式星历的有效期限与误差量级)
**Question 17:**  
When using Simpson's simplified lunar ephemeris (Curtis Section 9.3) instead of a high-precision JPL DE numerical ephemeris, mission designers must be aware that:  
- A. The fit is exact for Apollo missions (1968–1972) but diverges after 2000.  
- **B. The fit is valid strictly for dates between CE 2000 and 2100, and carries transverse errors on the order of thousands of kilometres (~2,290 km).**  
- C. The fit guarantees sub-metre accuracy along the Earth-Moon radial direction.  
- D. The fit models the gravitational pull of all solar system planets.  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 9, Section 9.3, **Book pp. 457–460 (PDF pp. 464–467)**; Lecture 5, Slide 7 & Slide 8  
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 讲义 Slide 8 强调的工程底线：辛普森拟合由 21 个正弦波组成，**只在公元 2000–2100 年期间有效**！绝对严禁用于阿波罗时代（1968–1972），否则拟合频率与真实月球运动脱节。而且即便在有效期内，其横向误差也高达 **2,290 km**（几千公里），只能做概念性粗估，绝不能用于实际飞控导航。  
> **【考场一秒题眼】**: 看到 `Simpson's fit limitations` $\to$ 选 `Valid strictly CE 2000-2100, errors of thousands of km (~2,290 km)`。

---

## 考题 18 (Week 6 · 地心 CR3BP 微分方程中月球项减去地心引力的根源)
**Question 18:**  
In the Earth-centred equation of motion for numerical trajectory integration ($\ddot{\mathbf{r}} = -\frac{\mu_e}{r^3}\mathbf{r} + \mu_m \left[ \frac{\mathbf{r}_{m/s}}{r_{m/s}^3} - \frac{\mathbf{r}_m}{r_m^3} \right]$), the subtraction of the second lunar term ($\frac{\mathbf{r}_m}{r_m^3}$) is required because:  
- A. It accounts for general relativistic frame curvature.  
- **B. The Earth-centred reference frame is accelerating toward the Moon under lunar gravity, so the Moon's pull on the Earth must be subtracted as an inertial frame acceleration.**  
- C. It subtracts the Earth's atmosphere drag from the Moon's SOI.  
- D. It models the solar radiation pressure acting on the spacecraft bus.  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 9, Section 9.5, **Book p. 469 (PDF p. 476)**, Equation 9.63; Lecture 5, Slide 19  
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 地球不是固定在宇宙虚空中的钉子！地球自身在月球引力拉扯下，正以加速度 $\mu_m \frac{\mathbf{r}_m}{r_m^3}$ 不断奔向月球。当我们以地心为参考系原点写牛顿第二定律时，地心是非惯性参考系，必须把**参考系原点本身的牵连加速度减掉**。因此月球摄动项本质上是“月球对飞船的直接引力”减去“月球对地球原点的牵连引力”。  
> **【考场一秒题眼】**: 看到 `Subtraction of Moon pull on Earth in equation of motion` $\to$ 选 `Earth frame is accelerating toward Moon (inertial frame correction)`。

---

## 考题 19 (Week 6 · 月球质量瘤与 LRO 修正偏心率放任倾角策略)
**Question 19:**  
The Lunar Reconnaissance Orbiter (LRO) executes station-keeping burns every few weeks to trim its eccentricity, but intentionally allows its ~0.4 deg/year inclination drift to go uncorrected. Operational mission analysis justifies this asymmetric strategy because:  
- A. Modifying orbital inclination is physically forbidden in a lunar orbit.  
- **B. Unchecked eccentricity growth lowers perilune and rapidly leads to catastrophic surface impact, whereas inclination drift merely causes a minor, acceptable shift in polar mapping coverage.**  
- C. The spacecraft runs out of electrical power whenever an out-of-plane burn is executed.  
- D. Eccentricity can only be trimmed when the spacecraft is eclipsed by the Earth.  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 10, Section 10.8, **Book pp. 529–532 (PDF pp. 536–539)**; Lecture 6, Slide 29 & Slide 31  
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 这是深空测控中最经典的“生死与精度之辩”：月球内部质量瘤（Mascons）会自发刺激轨道偏心率狂暴增长——**偏心率一变大，近月点高度立刻砸入地下，飞船数周内粉身碎骨彻底毁灭（Ends the orbit）**！所以必须每月点火削平偏心率。而倾角每年飘了 $0.4^\circ$，只是让相机对极区的扫描边缘稍稍挪移了一点点（Costs coverage），飞船依然活得好好的。保命永远第一，保精度靠后。  
> **【考场一秒题眼】**: 看到 `LRO trims eccentricity but leaves inclination drift` $\to$ 选 `Eccentricity growth causes crash/ends orbit, inclination drift only costs coverage`。

---

## 考题 20 (Week 6 · 月球冻结轨道本质与 Gateway 9:2 NRHO 避食共振)
**Question 20:**  
A lunar orbit is configured as a 'frozen orbit' (such as low frozen orbits near $i = 27^\circ, 50^\circ, 76^\circ, 86^\circ$ or the Gateway 9:2 Near-Rectilinear Halo Orbit). The defining physical characteristic of a frozen orbit is that:  
- A. All gravitational perturbation forces cancel out to strict zero vectorially at every point along the trajectory.  
- **B. Orbital parameters ($i, e, \omega$) are deliberately tuned so that the secular (long-term average) drift rates of eccentricity and perilune vanish ($\frac{de}{dt} \approx 0, \frac{d\omega}{dt} \approx 0$).**  
- C. The spacecraft is locked into the exact rotation period of the lunar mantle.  
- D. The orbit is completely immune to Earth's tidal gravitational forces.  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**: Curtis Chapter 10, Section 10.8, **Book pp. 529–532 (PDF pp. 536–539)**; Lecture 6, Slide 29 & Slide 41  
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 永远记住讲义 Slide 41 的定性暴击：**Nothing cancels vectorially（没有任何引力在空间中矢量抵消）！** 引力摄动每时每刻都在拉扯飞船。冻结轨道的真正本质是：通过精密调谐几何参数（倾角、偏心率、近拱点方向），使摄动函数在一个完整轨道周期内的**长期平均变化率积分为零（$\frac{de}{dt} \approx 0, \frac{d\omega}{dt} \approx 0$）**！轨道根数停止漂移，卫星得以在恶劣的非球形引力场中长寿生存。NASA Gateway 的 9:2 NRHO 更是利用与朔望月共振，完美消除了长达数小时的地影日食。  
> **【考场一秒题眼】**: 看到 `Defining characteristic of a frozen orbit` $\to$ 选 `Tuned so secular drift rates average to zero (NOT cancelling vectorially)`。

---

# 考场核心概念秒杀速查表 / Quick Review Table

| 序号 | 考点领域 | 题干核心线索 | 考场一秒破题眼 |
| :---: | :--- | :--- | :--- |
| **Q1** | 冲量假设本质 | Impulsive burn state condition | **位置连续不变 $\mathbf{r}^+ = \mathbf{r}^-$，仅速度瞬变** |
| **Q2** | 冲量假定失真判据 | Violates impulsive model (GSAT-31) | **点火期间扫过的真近点角弧长 $\Delta\theta$，非钟表时间** |
| **Q3** | 比冲物理本质 | Isp unit in seconds misconception | **排气速度与地表 $g_0$ 之比，衡量推进剂质量效率** |
| **Q4** | 霍曼远地点第二点火 | Second Hohmann burn cannot be omitted | **不补速圆化必顺着椭圆跌回初始低近地点** |
| **Q5** | 双椭圆优于霍曼阈值 | Bi-elliptic strictly beats Hohmann | **半径比 $r_2 / r_1 > 11.94$（且需 $r_b$ 足够远）** |
| **Q6** | 同轨追赶反常识 | Catch up to target leading ahead | **踩刹车逆行减速，跌入更小内圈轨道（周期缩短套圈超车）** |
| **Q7** | 离拱点速度转角 $\Delta v$ | Rotate velocity with speed unchanged | **非零！余弦定理 $2 v \sin(\Delta\gamma/2) \neq 0$** |
| **Q8** | 24 度变面代价 | 24-degree plane change cost | **代价等于从圆轨道加速到逃逸速度（$0.414 v_c$）** |
| **Q9** | 正东发射倾角极限 | Direct launch due east ($A_0 = 90^\circ$) | **最低倾角严格等于发射场地理纬度 $i_{\min} = \phi$** |
| **Q10**| 连续低推力电推螺旋 | Continuous low-thrust spiral delta-v | **标量绝对值之差 $\Delta v \approx \|v_{c1} - v_{c2}\|$** |
| **Q11**| 地月霍曼 110 m/s 狭缝 | 110 m/s gap between TLI and escape | **仅 1% 剃刀狭缝，1 m/s 误差导致远地点脱靶 3,400 km** |
| **Q12**| 拉普拉斯影响球边界 | Earth gravity at Moon's SOI boundary | **绝非引力平衡！地球拉力依然比月球大 3.5 倍** |
| **Q13**| 地月交会超前角 | Aim ahead by lead angle $\phi_1$ | **飞船飞行 3.2 天期间月球在轨道上跑过的角距离** |
| **Q14**| 月心双曲线能量门 | Selenocentric energy $\varepsilon_2 > 0$ | **严格为双曲线，引力天然无法捕获，LOI 点火必不可少** |
| **Q15**| 阿波罗自由返回几何 | Leading-edge lunar flyby (Apollo 13) | **前侧逆行飞越给地心能量刹车，弯成 8 字形安全再入** |
| **Q16**| 3D 拼接圆锥相交线 | Transfer plane cuts arrival cone | **恰好两根（never 1, never 3），因平面包含圆锥对称轴** |
| **Q17**| Simpson 经验星历有效性 | Simpson's fit validity and accuracy | **仅限 CE 2000–2100，横向误差达数千公里（~2,290 km）** |
| **Q18**| 非惯性系月球摄动项 | Subtraction of Moon pull on Earth | **地心系正在向月球加速，必须扣除牵连惯性力** |
| **Q19**| LRO 偏心率修而倾角不修 | LRO trims e but leaves i drift | **e 暴涨导致撞月粉身碎骨，i 漂移仅微调极区覆盖** |
| **Q20**| 冻结轨道力学真相 | Defining feature of frozen orbit | **绝非引力矢量抵消！调谐参数使长期平均漂移积分为零** |
