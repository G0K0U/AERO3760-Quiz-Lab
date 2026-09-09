# AERO3760 Space Engineering 2 · Week 6 Thursday Quiz 真题全景深度解析
> **测试来源**：USYD AERO3760 Space Engineering 2 - Week 6 Formative Concept Check (Lectures 5 & 6: The Real Moon and Lunar Orbits)  
> **考试规格**：20 道单选概念与机理判断题（20 Multiple-Choice Questions），限时 25 分钟，纯心算与物理直觉判断（*"All arithmetic is mental. No calculator is needed and no formula sheet is required."*）  
> **教材版本**：Howard D. Curtis, *Orbital Mechanics for Engineering Students* (4th Edition, Elsevier)  
> **页码双轨标注**：**Book p. XXX**（纸质书页码）；**(PDF p. YYY)**（电子版 PDF 页码，两者固定偏移 7 页）  
> **讲义对应**：*Wk04-06_Lunar_Trajectories_L5_L6.pdf* (Lecture 5 & Lecture 6)  
> **解析规格**：英文真题完整呈现 + 标准答案加粗 + 0基础白话直观图像 + 讲义与力学公式深度推导 + 教授设坑套路与干扰项逐项点穴 + 考场1秒题眼

---

# 目录导航 / Table of Contents
- [第 1 题：Simpson 拟合星历与 JPL DE 高精度星历的本质差异](#第-1-题simpson-拟合星历与-jpl-de-高精度星历的本质差异)
- [第 2 题：月球轨道 5 度倾角的真正含义与地球发射场关心的基准面](#第-2-题月球轨道-5-度倾角的真正含义与地球发射场关心的基准面)
- [第 3 题：3D 拼接圆锥曲线的力学本质与方程继承关系](#第-3-题3d-拼接圆锥曲线的力学本质与方程继承关系)
- [第 4 题：地心运动微分方程中月球摄动项的物理实质（牵连加速度）](#第-4-题地心运动微分方程中月球摄动项的物理实质牵连加速度)
- [第 5 题：月球白道对赤道倾角周期性循环进动的根源（18.6年大时钟）](#第-5-题月球白道对赤道倾角周期性循环进动的根源186年大时钟)
- [第 6 题：3D 拼接圆锥曲线选错二次根在计算上的表现（数值平稳与任务剧变）](#第-6-题3d-拼接圆锥曲线选错二次根在计算上的表现数值平稳与任务剧变)
- [第 7 题：3D 转移平面由出发点与月心构造的人为约定属性（Convention）](#第-7-题3d-转移平面由出发点与月心构造的人为约定属性convention)
- [第 8 题：两套完全收敛的积分结果在近月点仍相差数公里的深层原因（力学模型差异）](#第-8-题两套完全收敛的积分结果在近月点仍相差数公里的深层原因力学模型差异)
- [第 9 题：到达角圆锥与转移平面恰好相交出两条直线的几何内因](#第-9-题到达角圆锥与转移平面恰好相交出两条直线的几何内因)
- [第 10 题：圆锥切割产生的两个合法解在工程实践上的巨大分水岭](#第-10-题圆锥切割产生的两个合法解在工程实践上的巨大分水岭)
- [第 11 题：低月轨道数月内自然坠毁的罪魁祸首（月球质量瘤 Mascons）](#第-11-题低月轨道数月内自然坠毁的罪魁祸首月球质量瘤-mascons)
- [第 12 题：月球背面深处资产必须依赖中继通信的几何刚性约束](#第-12-题月球背面深处资产必须依赖中继通信的几何刚性约束)
- [第 13 题：中继卫星赋予大偏心率轨道的核心工程目的（开普勒第二定律买驻留）](#第-13-题中继卫星赋予大偏心率轨道的核心工程目的开普勒第二定律买驻留)
- [第 14 题：极轨卫星星下点轨迹逐圈西移的物理成因（月球自转进纸效应）](#第-14-题极轨卫星星下点轨迹逐圈西移的物理成因月球自转进纸效应)
- [第 15 题：低极轨适合相机拍照却极不适合当中继通信的短板](#第-15-题低极轨适合相机拍照却极不适合当中继通信的短板)
- [第 16 题：相同周期的圆轨道在极区覆盖能力上远逊于大椭圆轨道的机理](#第-16-题相同周期的圆轨道在极区覆盖能力上远逊于大椭圆轨道的机理)
- [第 17 题：月球南极永久光照区（永昼峰）无法自动等同于常年通视地球的几何脱钩](#第-17-题月球南极永久光照区永昼峰无法自动等同于常年通视地球的几何脱钩)
- [第 18 题：近月点高度相差 20 倍的两艘飞船均属于自由返回轨道的深层启示](#第-18-题近月点高度相差-20-倍的两艘飞船均属于自由返回轨道的深层启示)
- [第 19 题：LRO 定期修正偏心率却放任倾角长期漂移的决策逻辑（生死存亡 vs 覆盖微调）](#第-19-题lro-定期修正偏心率却放任倾角长期漂移的决策逻辑生死存亡-vs-覆盖微调)
- [第 20 题：月球冻结轨道的力学实现机制（参数调谐平均抵消 vs 矢量抵消陷阱）](#第-20-题月球冻结轨道的力学实现机制参数调谐平均抵消-vs-矢量抵消陷阱)

---

## 第 1 题：Simpson 拟合星历与 JPL DE 高精度星历的本质差异
**Question 1:**  
Simpson's fit and a JPL DE ephemeris both give the Moon's position. The difference between them matters because the fit is:  
- A. exact in range but not in direction  
- B. valid only for dates before the year 2000  
- C. good to metres, as the DE ephemeris is  
- **D. in error by thousands of kilometres, not metres**  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 9, Section 9.3 *A simplified lunar ephemeris*, **Book pp. 457–460 (PDF pp. 464–467)**  
> - Lecture 5 Slides, **Slide 6 & Slide 8**  
>
> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 辛普森拟合（Simpson's fit）就像一个由 21 个正弦波搭成的“机械发条玩具”。它是把复杂的月球摄动简化成几套三角函数多项式，计算极快，非常适合学生用手算或写十行代码做概念设计。但它在 2000–2100 年期间的平均横向误差高达 **2,290 km**（峰值误差超过数千公里）！而美国 NASA/JPL 的 DE 系列星历（如 DE405、DE421、DE440/441）是基于地月激光测距（LLR）和严密全摄动数值拟合出来的真实星历，精度达到**米级甚至亚米级**！对于真实深空飞行，几千公里的误差足以让飞船彻底脱靶或以每秒几公里的速度撞山毁灭，所以两者的差异关乎任务生死。  
> **【教授设坑套路分析】**:  
> - 选项 B（仅在2000年之前有效）是完全反过来的颠倒项！讲义 Slide 8 白底黑字明确强调：*"valid CE 2000-2100 only. It cannot be used for the Apollo era (1968-72)"*。  
> - 选项 A 凭空捏造“距离精确但方向不准”；选项 C 谎称辛普森拟合也能达到米级。  
> **【考场一秒题眼】**: 看到 `Simpson's fit vs JPL DE ephemeris` $\to$ 立刻锁定 `in error by thousands of kilometres, not metres`。

---

## 第 2 题：月球轨道 5 度倾角的真正含义与地球发射场关心的基准面
**Question 2:**  
The Moon's orbit is often quoted as inclined about five degrees. A launch site cares instead about the inclination to:  
- A. the ecliptic, which is what five degrees means  
- B. the transfer plane, which the mission chooses  
- C. the Moon's own equator, fixed by tidal locking  
- **D. the equator, between 18 and 29 degrees**  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 9, Section 9.3, **Book pp. 457–460 (PDF pp. 464–467)**, Figure 9.9  
> - Lecture 5 Slides, **Slide 4, 5 & 9**  
>
> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 天文爱好者常说的“月球倾角约 5 度（$5.14^\circ$）”，是站在太阳系上帝视角相对于**黄道面（地球绕太阳公转面，Ecliptic）**而言的。然而，人类建造在地球表面的发射场（如肯尼迪航天中心、文昌），其发射坐标系是绑定在**地球赤道面（Earth's Equator）**上的！地球自转轴有 $23.44^\circ$ 的黄赤交角，加之月球白道面的升交点每 18.6 年绕黄道法线旋转一圈，导致月球相对于**地球赤道**的倾角在极宽的区间内剧烈摆动：  
> $\displaystyle i_m = 23.44^\circ \pm 5.14^\circ \in [\mathbf{18.3^\circ, 28.6^\circ}]$  
> 发射场极其在乎这 18° 到 29° 的倾角，因为第 8 点讲过的定律：正东发射能打出的最小倾角等于发射场纬度（肯尼迪航天中心为 $28.5^\circ$）。当月球倾角摆动到 $28.6^\circ$ 时，肯尼迪航天中心正好可以无需变面直接将飞船共面打入地月转移轨道！  
> **【教授设坑套路分析】**:  
> - 选项 A 是经典事实性诱饵：5 度确实是指黄道面，但这恰恰是发射场**不关心**的，发射场关心的是赤道面！  
> - 选项 C 扯出月球自转赤道面，完全脱离地面发射火箭的力学现实。  
> **【考场一秒题眼】**: 看到 `Launch site cares instead about inclination to` $\to$ 选 `the equator, between 18 and 29 degrees`。

---

## 第 3 题：3D 拼接圆锥曲线的力学本质与方程继承关系
**Question 3:**  
A student worries that the three-dimensional patched conic is a new method to learn. What it actually uses is:  
- A. a numerical solver, since no closed form survives in three dimensions  
- B. a new set of equations, which carry third-body terms  
- C. the same equations, but only while the Moon lies in the transfer plane  
- **D. the same equations as the planar case, with a third component added**  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 9, Section 9.4 *Patched conic lunar trajectories in three dimensions*, **Book pp. 460–468 (PDF pp. 467–475)**  
> - Lecture 5 Slides, **Slide 11** (*"Patched conic in 3D: same method, more components"*)  
>
> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 很多同学看到 3D 转移就觉得需要推导一套全新的天体物理公式。教授在讲义 Slide 11 明确辟谣：3D 拼接圆锥曲线在物理本质上**完全继承了 2D 平面情况的所有公式**！地心段依然是经典的开普勒椭圆，角动量依然使用 Curtis Eq. 9.18 求解，飞行时间依然使用拉格朗日通用变量或开普勒时间方程，月心段依然是开普勒双曲线。唯一的几何改变仅仅是：空间向量从二维的 $(X, Y)$ 扩展出了第三个分量 $(X, Y, Z)$，引入方向余弦而已。两体拼接的代数闭式解完好无损。  
> **【教授设坑套路分析】**:  
> - 选项 A 和 B 故意用“3D没有闭式解必须用数值求解器”或“必须引入三体摄动项”来恐吓学生，把“拼接圆锥法（两体拼接模型）”与后续的“数值积分法（三体数值模型）”混淆。  
> **【考场一秒题眼】**: 看到 `3D patched conic actually uses` $\to$ 选 `the same equations as the planar case, with a third component added`。

---

## 第 4 题：地心运动微分方程中月球摄动项的物理实质（牵连加速度）
**Question 4:**  
In the Earth-centred equation of motion the lunar perturbation term is:  
- A. the Moon's pull on the spacecraft alone  
- **B. the difference of its pulls on craft and Earth**  
- C. the Earth's pull as measured from the Moon  
- D. the sum of its pulls on the craft and Earth  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 9, Section 9.5 *Lunar trajectories by numerical integration*, **Book p. 469 (PDF p. 476)**, Equation 9.63  
> - Lecture 5 Slides, **Slide 19**  
>
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 当我们以地心为原点建立坐标系去计算飞船的加速度时，必须意识到：**地心坐标系并不是一个静止的牛顿惯性坐标系！** 地球自身也是一个漂浮在宇宙中的质点，月球引力不仅吸引飞船，也在狂暴地拉扯着地球本身，使地球向着月球产生牵连加速度 $\mu_m \frac{\mathbf{r}_m}{r_m^3}$。因此，由牛顿相对加速度定律，飞船相对于地心的相对加速度方程为：  
> $\displaystyle \ddot{\mathbf{r}} = -\frac{\mu_e}{r^3}\mathbf{r} + \mathbf{p}, \quad \mathbf{p} = \mu_m \left[ \frac{\mathbf{r}_{m/s}}{r_{m/s}^3} - \frac{\mathbf{r}_m}{r_m^3} \right]$  
> 月球摄动项 $\mathbf{p}$ 绝对不是月球对飞船的单纯引力，而是**月球对飞船的直接引力减去月球对地球原点的牵连引力之差（The difference of its pulls on craft and Earth）**！  
> **【教授设坑套路分析】**:  
> - 选项 A（仅月球对飞船的引力）是没学好非惯性系动力学的初学者最容易掉入的头号陷阱！  
> - 选项 D 把两者相加，更是背离物理现实。  
> **【考场一秒题眼】**: 看到 `Earth-centred lunar perturbation term` $\to$ 选 `the difference of its pulls on craft and Earth`。

---

## 第 5 题：月球白道对赤道倾角周期性循环进动的根源（18.6年大时钟）
**Question 5:**  
The Moon's inclination to the Earth's equator is not fixed but cycles slowly. That cycle exists because the orbit plane precesses about:  
- A. the Earth-Moon line, once every month  
- **B. the ecliptic normal, once in 18.6 years**  
- C. the normal to the equator, once a year  
- D. the Earth's polar axis, once in 18.6 years  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 9, Section 9.3, **Book pp. 457–460 (PDF pp. 464–467)**, Figure 9.9  
> - Lecture 5 Slides, **Slide 5 & Slide 7**  
>
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 为什么月球对地球赤道的倾角会在 $18.3^\circ$ 到 $28.6^\circ$ 之间来回晃荡？根本动力学原因是**太阳对月球轨道的潮汐力矩**。月球轨道几乎平行于地球绕太阳公转的黄道面（夹角仅 $5.14^\circ$），太阳的潮汐外力矩迫使月球轨道平面的法向量像一个倾斜旋转的陀螺轴一样，绕着**黄道面的垂直法线（Ecliptic normal）**匀速进动，旋转一周的时间刚好是 **18.6 年（6798 天）**！这种进动导致月球升交点沿黄道逆行，进而周期性地叠加在地球赤道倾角上。  
> **【教授设坑套路分析】**:  
> - 选项 D 极具杀伤力：它用了正确的周期（18.6 years），但把进动对称轴偷换成了“地球地轴（Earth's polar axis / normal to equator）”！月球轨道面是在黄道引力力矩下进动，其对称轴是黄道法线，绝不是地轴。  
> - 选项 A 则是月度公转周期。  
> **【考场一秒题眼】**: 看到 `Orbit plane precesses about` $\to$ 选 `the ecliptic normal, once in 18.6 years`。

---

## 第 6 题：3D 拼接圆锥曲线选错二次根在计算上的表现（数值平稳与任务剧变）
**Question 6:**  
A designer solves the three-dimensional patch and takes the wrong one of the two roots. The arithmetic that follows:  
- A. reproduces the two-dimensional answer exactly  
- B. returns a complex perilune, flagging the error  
- **C. runs cleanly and describes a different mission**  
- D. diverges, so the mistake announces itself  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 9, Section 9.4, **Book pp. 463–465 (PDF pp. 470–472)**  
> - Lecture 5 Slides, **Slide 13 & Slide 14** (*"The cone, the plane, and what the wrong root costs"*)  
>
> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 在解析几何中求解 3D 转移圆锥面与转移平面的交线时，二次方程必定产生两个互为相反数的单位向量根 $\pm\hat{\mathbf{b}}$。计算机运行代码时没有任何“物理常识”，即便你选了错误的那一个根，后续所有的开普勒几何公式、能量公式**全部都能顺畅跑通，完全不会崩溃报 NaN，也不会产生虚数，数值计算异常平稳（Runs cleanly）！** 然而，算出来的物理轨迹完全变成了另一场荒唐的深空任务（如讲义 Slide 14 对比表所示：地表出发速度从 $10.828	ext{ km/s}$ 暴涨为 $11.137	ext{ km/s}$，直接超出了地球逃逸速度；月球偏心率暴增到 119.7，飞掠高度飞到了 62,184 km 以外的影响球边缘！）。这就是最危险的工程隐患——数学上完全收敛，物理上南辕北辙。  
> **【教授设坑套路分析】**:  
> - 选项 B 和 D 诱导学生误以为“选错根数学公式一定会报错提示你（返回虚数或发散）”。教授以此提醒大家：严密的航天代码不会主动提醒你几何意图的错误！  
> **【考场一秒题眼】**: 看到 `Takes the wrong root in 3D patch` $\to$ 选 `runs cleanly and describes a different mission`。

---

## 第 7 题：3D 转移平面由出发点与月心构造的人为约定属性（Convention）
**Question 7:**  
The 3D transfer plane is built from the parking position and the Moon's centre, not from the crossing itself. That is:  
- **A. a convention, since the crossing is not yet known**  
- B. forced by the two-body equations of motion  
- C. an approximation the arrival angle later removes  
- D. forced, because the craft must fly in the Moon's plane  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 9, Section 9.4, **Book pp. 460–463 (PDF pp. 467–470)**  
> - Lecture 5 Slides, **Slide 12** (*"Which two points? ... r1 is not known yet, so Curtis chooses the plane through r0 and rm"*), **Slide 13** (*"The plane was the first convention; the side is the second"*)  
>
> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 在两体力学中，确定一个开普勒轨道平面只需要地心和轨道上的两个点。真实的转移轨道是从驻留轨出发点 $\mathbf{r}_0$ 飞到月球影响球的穿透点 $\mathbf{r}_1$。按理说，转移平面应该由地心、$\mathbf{r}_0$ 和 $\mathbf{r}_1$ 决定。但这里存在一个致命的“先有鸡还是先有蛋”的悖论：**在你把转移轨道解出来之前，你根本不知道飞船会在哪个精确坐标 $\mathbf{r}_1$ 穿透影响球！** 为了打破僵局，Curtis 教材采用了一个精妙的**人为工程约定（Convention）**：先用已知目标时刻的月球球心 $\mathbf{r}_m$ 代替穿透点 $\mathbf{r}_1$，用地心、$\mathbf{r}_0$ 和 $\mathbf{r}_m$ 撑起转移平面，再在这个平面内结合到达角 $\lambda$ 唯一解出 $\mathbf{r}_1$。  
> **【教授设坑套路分析】**:  
> - 选项 B 企图用“两体运动方程强制要求”忽悠人；选项 D 谎称“飞船必须在月球平面内飞行”（转移面和月球公转面完全是两个有夹角的平面）。  
> **【考场一秒题眼】**: 看到 `Built from parking position and Moon's centre is` $\to$ 选 `a convention, since the crossing is not yet known`。

---

## 第 8 题：两套完全收敛的积分结果在近月点仍相差数公里的深层原因（力学模型差异）
**Question 8:**  
Two integrations of the same departure are each refined until the answer stops moving, yet they disagree by kilometres at perilune. The explanation is that:  
- **A. they used different force models, each right for its own**  
- B. one of them has not truly settled, whatever its own test showed  
- C. kilometres at perilune is numerical noise and means nothing  
- D. refining the step is not a valid test of a result  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 9, Section 9.5, **Book pp. 469–479 (PDF pp. 476–486)**  
> - Lecture 5 Slides, **Slide 21 & Slide 26** (*"Two methods, two purposes: Numerical propagation gives a trajectory consistent with the force model you specify"*), **Slide 25** (*"Same constants, same circular Moon as Lecture 4... step halving: 1 km at perilune"*)  
>
> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 两个团队用高阶龙格库塔算法（RK4/ode45）积分同一个地月转移轨道，步长加密到了无论再怎么缩小步长、计算结果最后几位小数都纹丝不动的地步（数值收敛性测试完全通过）。但是最终算出来的近月点高度依然相差了整整几公里！既然双方都没有算错，原因只有一个：**他们输入给计算机的“物理引力环境（Force model）”本质上是不一样的！** 例如：团队 A 把月球当成完美匀质球体，团队 B 引入了月球非球形引力摄动 $J_2$；或者团队 A 的月球坐标来自简化的质点圆轨道，而团队 B 调取了真实的 JPL DE 星历。每一个积分器都在严密求解各自设定的物理宇宙，模型不同，结果自然不同。  
> **【教授设坑套路分析】**:  
> - 选项 B 怀疑算法没收敛，违背了题干“refined until the answer stops moving”的前提；  
> - 选项 C 认为近月点几公里是“数值噪声无意义”，在航天工程中，几公里直接决定是安全环月还是撞山粉碎，是至关重要的绝对物理量。  
> **【考场一秒题眼】**: 看到 `Two refined integrations disagree by kilometres` $\to$ 选 `they used different force models, each right for its own`。

---

## 第 9 题：到达角圆锥与转移平面恰好相交出两条直线的几何内因
**Question 9:**  
The arrival angle defines a cone about the Earth-Moon line, and the transfer plane cuts that cone in exactly two lines, never one and never three. That is because the plane:  
- **A. contains the cone's own axis, the Earth-Moon line**  
- B. lies at right angles to the cone's axis  
- C. is tangent to the cone along a single line  
- D. meets the cone more steeply than its half-angle  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 9, Section 9.4, **Book pp. 463–465 (PDF pp. 470–472)**  
> - Lecture 5 Slides, **Slide 13** (*"The transfer plane contains the cone's axis, and a plane through a cone's axis cuts it in exactly two lines; the SOI radius then picks the two points. So there are two roots, never three..."*)  
>
> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 想象一个冰淇淋蛋筒（圆锥面），它的对称中轴线就是地心到月心的连线。而在第 7 题中我们知道，转移平面的定义基准就是地心和月球中心 $\mathbf{r}_m$，也就是说：**地月连线这条轴线本身就完整地躺在转移平面之内（Contains the cone's own axis）！** 初中立体几何定理：任何一个穿过圆锥顶点且包含圆锥对称轴的平面，必定会沿着圆锥左右两侧纵向剖开，与锥面交出**严格且仅有的两条对称母线（Exactly two lines）**！它绝不可能只切出一条相切线，也不可能切出三条线。  
> **【教授设坑套路分析】**:  
> - 选项 B（垂直于轴线）切出的是一个圆环，不是直线；选项 C（相切）只有在平面不含轴线时才可能；选项 D 用圆锥曲线切面的离心率倾角术语来混淆视听。  
> **【考场一秒题眼】**: 看到 `Cuts cone in exactly two lines because` $\to$ 选 `contains the cone's own axis, the Earth-Moon line`。

---

## 第 10 题：圆锥切割产生的两个合法解在工程实践上的巨大分水岭
**Question 10:**  
The two sides of the arrival cone are both legal solutions of the same geometry. What separates them in practice is that the unintended one:  
- A. is ruled out by the equations once the sphere radius is applied  
- B. changes only where the craft crosses the sphere of influence  
- C. gives the same mission with the pass on the other side  
- **D. changes the departure the craft must fly, not just the arrival**  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 9, Section 9.4, **Book pp. 463–465 (PDF pp. 470–472)**  
> - Lecture 5 Slides, **Slide 14** (*"Same four dials, two legal answers... The wrong root is not a near miss: it demands a hyperbolic departure from Earth and then passes the Moon at the SOI boundary"*)  
>
> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 很多初学者以为，圆锥切出来的左右两个解（$+\hat{\mathbf{b}}$ 与 $-\hat{\mathbf{b}}$）无非就是飞船从月球左边飞还是右边飞的小差别。讲义 Slide 14 用残酷的数据打碎了这种幻想：  
> - 正确解（$+\hat{\mathbf{b}}$）：出发转角 $\Delta	heta = 151.2^\circ$，地表点火速度 $v_0 = 10.828	ext{ km/s}$，近月高度 $3,641	ext{ km}$（完美椭圆任务）；  
> - 错误解（$-\hat{\mathbf{b}}$）：出发转角突变到 $\Delta	heta = 133.1^\circ$，地表点火速度被强行要求提高到 $v_0 = 11.137	ext{ km/s}$（**已经突破了地球逃逸速度 $10.91	ext{ km/s}$**，必须消耗巨量燃料把飞船以双曲线轰出地球！），飞掠高度变成 62,184 km（几乎脱靶）。  
> 这说明：**错误的那个解根本不仅仅改变了月球到达点，而是把飞船在地球发射出发阶段必须飞行的整个轨迹、点火能量与转角彻底改写了！**  
> **【考场一秒题眼】**: 看到 `Unintended root separates in practice because` $\to$ 选 `changes the departure the craft must fly, not just the arrival`。

---

## 第 11 题：低月轨道数月内自然坠毁的罪魁祸首（月球质量瘤 Mascons）
**Question 11:**  
Most low lunar orbits decay within months. The cause is:  
- A. atmospheric drag at those low altitudes  
- **B. the uneven gravity field of the Moon itself**  
- C. solar radiation pressure on the spacecraft  
- D. the Earth's tidal pull on the orbit plane  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 10, Section 10.8 *Lunar gravity potential*, **Book pp. 529–532 (PDF pp. 536–539)**  
> - Lecture 6 Slides, **Slide 29** (*"Low lunar orbit is unstable: Mascons bite... The Moon's gravity field is lumpy: dense mass concentrations (mascons) under the maria. A low circular orbit is perturbed so strongly it can de-orbit in months."*)  
>
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 月球是一个超高真空天体，表面根本没有大气层，因此绝对不存在“大气阻力导致坠毁”（排除 A）。低月轨道（如 100 km 环月圆轨道）在几个月内迅速坠毁的真正元凶，是月球内部极度坑洼不平的**非球形引力场——特别是月海盆地下深埋的高密度玄武岩熔岩块，称为质量瘤（Mascons）**！当卫星低空飞过质量瘤上方时，会被狂暴的局部重力反复拉扯，导致轨道偏心率在几十天内不断激增，圆形轨道被迅速扯成极扁的椭圆，近月点高度断崖式下潜，最终卫星高速撞上月球山峰坠毁（阿波罗 16 号放飞的子卫星仅存活 34 天就撞月了）。  
> **【考场一秒题眼】**: 看到 `Low lunar orbits decay within months due to` $\to$ 选 `the uneven gravity field of the Moon itself`。

---

## 第 12 题：月球背面深处资产必须依赖中继通信的几何刚性约束
**Question 12:**  
A surface asset on the deep lunar far side needs a relay satellite because that ground:  
- A. faces away from the Sun throughout the month  
- B. receives no sunlight at any point in the month  
- C. lies outside the Moon's sphere of influence  
- **D. never obtains a direct line of sight to Earth**  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Lecture 6 Slides, **Slide 33 & Slide 34** (*"The far side: no line of sight to Earth... Nothing deep on this hemisphere can talk to Earth directly; 41% of the surface never sees Earth"*), Curtis Chapter 9  
>
> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 由于月球自转与绕地球公转被潮汐力牢牢锁定（同步自转），月球永远只有正面朝向地球。月球背面深处（如嫦娥四号、六号着陆区）**在几何视线上永远被月球庞大的岩石本体完全阻挡，任何时刻都不可能与地球建立视距直连（Never obtains a direct line of sight to Earth）**！无线电波无法穿透数千公里的月球岩石，因此必须在拉格朗日 L2 点或大椭圆冻结轨道上布置中继卫星。  
> **【教授设坑套路分析】**:  
> - 选项 A 和 B 是著名的“月球暗面伪科学常识”（Dark Side of the Moon）！月球背面每个月同样拥有两周白昼和两周黑夜，光照极其充足。它只是背对地球，不是背对太阳！  
> **【考场一秒题眼】**: 看到 `Deep lunar far side needs relay because` $\to$ 选 `never obtains a direct line of sight to Earth`。

---

## 第 13 题：中继卫星赋予大偏心率轨道的核心工程目的（开普勒第二定律买驻留）
**Question 13:**  
A relay orbit is given a high eccentricity in order to:  
- A. reduce the propellant needed to reach it  
- B. reach a greater altitude above the pole  
- **C. spend most of its period moving slowly**  
- D. keep its period matched to the month  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 6, Section 6.4 & Chapter 9;  
> - Lecture 6 Slides, **Slide 35 & Slide 41** (*"Dwell is bought with eccentricity: Queqiao-2... Kepler’s second law does the work: at apolune the craft moves at 0.233 km/s against 2.136 at perilune, so 76% of every period is spent in the far half, hanging over the pole where the link is needed."*)  
>
> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 为什么中国鹊桥二号和现代月球中继卫星偏爱极扁的大偏心率轨道（如 $200 	imes 16,000	ext{ km}, e = 0.803$）？这完全是在榨取**开普勒第二定律（面积速度守恒）**的红利：卫星在近月点速度飞快（$2.14	ext{ km/s}$），一闪而过；但在远月点速度慢如蜗牛（仅 $0.23	ext{ km/s}$）！通过把远月点固定在月球南极上空，卫星在整整一个周期里有 **76% 的漫长时间都慢吞吞地悬停在南极上空（Spend most of its period moving slowly）**！用偏心率买驻留时间（Dwell is bought with eccentricity），正是深空通信中继的经典神操作。  
> **【考场一秒题眼】**: 看到 `Relay orbit high eccentricity in order to` $\to$ 选 `spend most of its period moving slowly`。

---

## 第 14 题：极轨卫星星下点轨迹逐圈西移的物理成因（月球自转进纸效应）
**Question 14:**  
A lunar polar orbiter's ground track walks a little westward on every pass. What makes it walk is:  
- A. the orbit plane precessing under the lumpy field  
- **B. the Moon turning beneath a fixed orbit plane**  
- C. the orbiter's own motion along its ground track  
- D. the Earth's pull dragging the orbit plane round  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Lecture 6 Slides, **Slide 31** (*"Remote-sensing orbits: low and polar... A low polar orbit (e.g. LRO, ~50 km) lets the Moon rotate beneath the orbit plane, so the ground track eventually covers every longitude"*)  
>
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 极轨卫星的轨道平面在惯性空间中相对保持不动，飞船南北纵向切过极点。与此同时，**月球本体正在它脚下由西向东自转**！当卫星绕月飞完一圈回到原纬度时，地表已经向东转过了一定角度，因此在月表投影的星下点轨迹看起来就像向西平移了一小步（Walks a little westward）。这就像打字机或者打印机的进纸机构：卫星是喷头，月球自转是走纸，几十天下来整颗月球的所有经度地貌就被一行行完整扫描拍照了。  
> **【考场一秒题眼】**: 看到 `Ground track walks westward due to` $\to$ 选 `the Moon turning beneath a fixed orbit plane`。

---

## 第 15 题：低极轨适合相机拍照却极不适合当中继通信的短板
**Question 15:**  
A low polar orbit suits a camera but not a communications relay, because a site on the surface sees it:  
- A. only during the lunar night at that site  
- **B. for minutes, then not for hours**  
- C. from the same direction on every single pass  
- D. at an elevation too low for any antenna  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Lecture 6 Slides, **Slide 31** (*"Close => high resolution, but short dwell over any point... Good for imaging and altimetry. Useless for continuous communication: the orbiter is over any given site only briefly."*)  
>
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 低极轨卫星（如高精地图测绘卫星 LRO，高度仅 50 km，周期 2 小时）离地面非常近，拍照分辨率极高。但正因为高度太低，从月表着陆基地的视角看，它就像一颗划过头顶的流星：**刚刚冒出地平线飞过头顶只有几分钟，随即沉入另一侧地平线，接下来的几个小时内无影无踪（For minutes, then not for hours）！** 地面科研人员根本无法在“通话 3 分钟、失联 2 小时”的断续网络下开展实时控制与生命保障通信，所以它绝对不能充当中继。  
> **【考场一秒题眼】**: 看到 `Low polar orbit unsuitable for relay because` $\to$ 选 `for minutes, then not for hours`。

---

## 第 16 题：相同周期的圆轨道在极区覆盖能力上远逊于大椭圆轨道的机理
**Question 16:**  
A circular orbit is given the same period as an elliptical relay orbit. Its coverage of one pole is:  
- A. better, because a circular orbit has no slow point  
- B. better, because its altitude never drops  
- **C. worse, because it splits its time between hemispheres**  
- D. the same, since the period is what matters  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Lecture 6 Slides, **Slide 35 & Slide 41**  
>
> **【正确答案】**: **C**  
> **【0基础白话直观图像】**:  
> 假设圆轨道和大椭圆轨道的周期都是 24 小时：  
> - 圆轨道上的卫星做匀速圆周运动，**严格对等地把 12 小时（50%）花在北半球，12 小时（50%）花在南半球**；  
> - 而大椭圆中继轨道（ELFO）把远月点固定在南极，利用开普勒第二定律，让卫星在南半球极区上空慢慢悠悠地晃荡 **18 小时以上（76% 的周期时间）**！  
> 因此，如果你要保障南极科研站的通信，圆轨道的覆盖驻留表现明显更差，因为它把宝贵的一半时间平白浪费在了无人问津的北半球（Worse, because it splits its time between hemispheres）。  
> **【考场一秒题眼】**: 看到 `Circular orbit coverage of one pole vs elliptical relay` $\to$ 选 `worse, because it splits its time between hemispheres`。

---

## 第 17 题：月球南极永久光照区（永昼峰）无法自动等同于常年通视地球的几何脱钩
**Question 17:**  
At the lunar south pole a site chosen for permanent sunlight is not thereby a site that can talk to Earth, because:  
- **A. the Sun and the Earth set different geometric requirements**  
- B. the Earth is below the horizon wherever the Sun is up  
- C. sunlight interferes with the communications band  
- D. a relay is only ever visible during the lunar night  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Lecture 6 Slides, **Slide 33** (*"The far side never sees Earth; at the south pole it depends where you stand... Permanent solar shadow is a separate lighting condition"*), **Slide 46**  
>
> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> 在月球南极，太阳和地球遵循两套完全不同的天球几何轨迹：  
> 1. **太阳的几何**：太阳始终紧贴着地平线上下 $\pm 1.5^\circ$ 极其低矮的角度慢速旋转（方位角 360 度打转）。因此高高的火山口边缘（如沙克尔顿坑沿永昼峰）可以常年被阳光照亮；  
> 2. **地球的几何**：地球在月球南极的天空中始终固定挂在北方的地平线附近，受月球天平动影响上下摆动 $\pm 6.7^\circ$。  
> 哪怕一个火山口边缘被阳光 360 度照耀，**但只要它正北方向横亘着一座几公里高的环形山山头，它朝向地球的视线就会被常年死死挡住！** 光照条件与对地通信视线是完全脱钩的两码事（The Sun and the Earth set different geometric requirements）。  
> **【考场一秒题眼】**: 看到 `Permanent sunlight site not thereby can talk to Earth because` $\to$ 选 `the Sun and the Earth set different geometric requirements`。

---

## 第 18 题：近月点高度相差 20 倍的两艘飞船均属于自由返回轨道的深层启示
**Question 18:**  
Two lunar missions fly free returns whose perilune altitudes differ by more than a factor of twenty. That both qualify shows that:  
- A. the lower pass must have returned sooner than the higher  
- B. free returns exist only over a narrow band of perilune  
- C. the higher pass must have used a burn at the Moon  
- **D. the perilune height does not by itself decide the return**  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Lecture 6 Slides, **Slide 44** (*"Four free returns, one ladder... Apollo 13: 251 km; Artemis II: 6545 km... The perilune height does not by itself decide the return"*), Curtis Chapter 8 & 9  
>
> **【正确答案】**: **D**  
> **【0基础白话直观图像】**:  
> 讲义 Slide 44 列出了一张令人震撼的真实航天自由返回天梯：  
> - 1970 年遇险的阿波罗 13 号，自由返回近月高度只有 **251 km**；  
> - 2026 年即将执行的 Artemis II 四名航天员绕月任务，自由返回近月高度高达 **6,545 km**（两者相差超过 26 倍！）。  
> 两者都完全不需要在月球启动发动机，单凭引力偏折就能安全切回地球大气再入走廊！这无可辩驳地证明：**单凭近月点高度这一个孤立数字，根本不能判定它是不是自由返回（The perilune height does not by itself decide the return）！** 自由返回取决于起飞能量、发射航迹角、月球前侧飞越几何等一系列系统参数的组合，设计解空间绝不是一条死板的狭缝。  
> **【考场一秒题眼】**: 看到 `Perilune altitudes differ by factor of twenty both qualify shows` $\to$ 选 `the perilune height does not by itself decide the return`。

---

## 第 19 题：LRO 定期修正偏心率却放任倾角长期漂移的决策逻辑（生死存亡 vs 覆盖微调）
**Question 19:**  
LRO trims its eccentricity every few weeks but leaves its inclination drift uncorrected. Treating the two differently makes sense because:  
- **A. growing eccentricity ends the orbit, drifting inclination costs coverage**  
- B. an inclination cannot be corrected once the orbit is frozen  
- C. the eccentricity drifts faster and so reaches its limit sooner  
- D. the inclination burn costs more than the mission can carry  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Lecture 6 Slides, **Slide 31** (*"LRO trims eccentricity with burn pairs about every 28 days, and leaves its ~0.4°/yr inclination drift uncorrected (~14 m/s/yr to fix)"*)  
>
> **【正确答案】**: **A**  
> **【0基础白话直观图像】**:  
> NASA 的月球勘测轨道飞行器（LRO）每 28 天必须耗费宝贵燃料点火压平偏心率，但对每年漂移 $0.4^\circ$ 的轨道倾角却完全不管不顾（虽然修正只需区区 $14	ext{ m/s/年}$）。为什么区别对待？因为**危险等级根本不在一个维度**：  
> 1. **偏心率漂移是死刑判决**：月球质量瘤会导致偏心率自发单调暴涨，一旦偏心率变大，近月点会在数周内砸进月球岩石山脉，**直接让卫星撞月粉碎、彻底终结任务（Growing eccentricity ends the orbit）**；  
> 2. **倾角漂移是轻微擦伤**：倾角每年飘了 $0.4^\circ$，只是让相机对极区顶点的拍照投影稍稍偏移了几公里，少拍几个火山口边缘而已（Drifting inclination only costs coverage），飞船依然活得好好的！  
> 保命永远高于保精度，这就是航天轨道寿命设计的最高准则。  
> **【考场一秒题眼】**: 看到 `LRO trims eccentricity but leaves inclination drift` $\to$ 选 `growing eccentricity ends the orbit, drifting inclination costs coverage`。

---

## 第 20 题：月球冻结轨道的力学实现机制（参数调谐平均抵消 vs 矢量抵消陷阱）
**Question 20:**  
A frozen lunar orbit is held at particular values of inclination, eccentricity and apse orientation. What that choice achieves is that:  
- A. the orbit is high enough that the field is nearly spherical  
- **B. the orbit is tuned so its elements stop marching under them**  
- C. the mass concentrations are too far below to reach the orbit  
- D. the perturbing forces cancel one another out vectorially  

> 📖 **教材与讲义对应出处 (Textbook & Lec)**:  
> - Curtis Chapter 10, Section 10.8 *Lunar gravity potential*, **Book pp. 529–532 (PDF pp. 536–539)**  
> - Lecture 6 Slides, **Slide 29 & Slide 41** (*"Frozen condition: choose i, e, ω and the orbit’s orientation so the combined perturbations leave little secular drift in e and ω. Nothing cancels vectorially; the elements stop marching. You tune the orbit, not the perturbation."*)  
>
> **【正确答案】**: **B**  
> **【0基础白话直观图像】**:  
> 很多同学听到“冻结轨道”，立刻想当然地以为是“各个方向的摄动力在空间中像拔河一样矢量抵消为零”，**教授在讲义 Slide 41 专门用大字敲黑板警告：Nothing cancels vectorially（没有任何引力在空间中矢量抵消）！** 扰动力在每一个瞬间都依然在狠狠拉扯着飞船。冻结轨道的真正本质是：通过精密挑选倾角（如 $27^\circ, 50^\circ, 76^\circ, 86^\circ$）、偏心率和近心点方向，使得高阶引力场与潮汐摄动项在一个完整周期内的**长期漂移率积分为零，轨道根数不再发生世俗漂移（The elements stop marching under them）**！你改变和调谐的是轨道本身的参数，而不是去消除外界的引力。  
> **【教授设坑套路分析】**:  
> - 选项 D 就是教授在 Slide 41 中专门揪出来鞭挞的典型伪逻辑陷阱（"the perturbing forces cancel one another out vectorially"），专门用来抓那些不听课凭空脑补的学生！  
> **【考场一秒题眼】**: 看到 `Frozen lunar orbit achieves` $\to$ 选 `the orbit is tuned so its elements stop marching under them`。

---

# 总结：Week 6 考题底层物理图谱速记表

| 题号 | 核心考点 | 教授心机陷阱 | 黄金破题结论 |
| :---: | :--- | :--- | :--- |
| **Q1** | **Simpson vs JPL DE 星历** | 颠倒适用年份，谎称精度相当 | **差了几千公里（thousands of km），绝非米级** |
| **Q2** | **月球 5° 倾角的发射场视角** | 拿黄道 5° 事实答非所问 | **发射场关心赤道面，倾角在 18° 到 29° 晃荡** |
| **Q3** | **3D 拼接圆锥曲线本质** | 恐吓 3D 必须用数值法或新方程 | **继承平面全部公式，仅增加第三分量** |
| **Q4** | **地心微分方程月球摄动项** | 忽略地心是非惯性系 | **月球对飞船引力与对地球引力之差（difference）** |
| **Q5** | **白道倾角周期性循环进动** | 偷换进动轴为地轴 | **绕黄道面法线（ecliptic normal）进动，周期 18.6 年** |
| **Q6** | **3D 拼接选错二次根结果** | 谎称计算会发散或出虚数报错 | **数值运行平稳流畅（runs cleanly），但描述了另一场任务** |
| **Q7** | **3D 转移面由 r0 与 rm 撑起** | 忽悠是两体力学强制要求 | **纯属工程约定（convention），因为穿透点未知** |
| **Q8** | **收敛积分近月点相差数公里** | 怀疑算法没收敛或当成噪声 | **使用了不同的物理引力模型（different force models）** |
| **Q9** | **到达圆锥与转移面交出两线** | 引入相切或垂直几何假象 | **平面内严丝合缝包含圆锥对称轴（地月连线）** |
| **Q10**| **未预期的圆锥解实际影响** | 误导以为只换了到达侧 | **连同飞船在地球的出发航迹与速度被彻底颠覆** |
| **Q11**| **低月轨数月内坠毁元凶** | 栽赃大气阻力或太阳光压 | **月球自身坑洼不平的质量瘤重力场（mascons）** |
| **Q12**| **月背深处必须依靠中继** | 暗面无阳光伪科学常识 | **受潮汐锁定阻挡，永远无法与地球直视通信** |
| **Q13**| **中继卫星采用大偏心率** | 认为只为了飞得更高 | **利用开二规律，76% 的大半时间慢速悬停南极** |
| **Q14**| **极轨卫星地面轨迹逐圈西移**| 归咎于重力场进动或地球引力 | **月球本体在固定轨道面下方自东向西自转进纸** |
| **Q15**| **低极轨不适合当中继原因** | 扯白天黑夜或仰角过低 | **通信视线一闪而过几分钟，随后失联数小时** |
| **Q16**| **同周期圆轨道极区覆盖劣势**| 拿高度不降当优势 | **机械平分南北半球，南极驻留时间远输大椭圆** |
| **Q17**| **永昼峰不等于常年见地球** | 谎称有阳光处地球在地平线下 | **太阳与地球是两套完全脱钩的几何投影需求** |
| **Q18**| **两自由返回近月高度差20倍**| 捏造自由返回走廊极窄或点火 | **近月点高度单项指标根本不能单独决定自由返回** |
| **Q19**| **LRO 修正 e 却放任 i 漂移** | 借口倾角变轨修不起 | **e 暴涨导致撞月毁灭，i 漂移仅轻微损失覆盖** |
| **Q20**| **月球冻结轨道的力学真相** | 陷阱：引力矢量相互抵消 | **绝非矢量抵消！调谐轨道参数使长期漂移停摆** |
