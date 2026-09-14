# AERO3760 Space Engineering 2 · 第七周全真前瞻模拟试题与深度解析 (Week 7 Simulated Quiz)

> **适用范围**：AERO3760 Week 7-8 Saturday Cumulative Practice Quiz & Mid-Term Exam  
> **试卷规格**：20 题 / 35.0 分 / 闭卷模拟 / 涵盖第 7 周讲义 (L7: Capture & The Road Down, L8: The Last Hundred Kilometres) 及录音最新考点  
> **设计梯度**：严格遵循期中机考四阶梯度设计：
> - 🟢 **Pass 基础阶 (1.0 pt)**：5 题（Q01–Q05）
> - 🔵 **Credit 进阶阶 (1.5 pt)**：5 题（Q06–Q10）
> - 🟣 **Distinction 拔高阶 (2.0 pt)**：5 题（Q11–Q15）
> - 🔴 **High Distinction 卓越阶 (2.5 pt)**：5 题（Q16–Q20）  
> **教材与讲义双轨标注**：Howard D. Curtis 4th Edition (*Book p. XXX / PDF p. YYY*) & Week 7 Lecture 7 & 8 Slides (1–60)  
> **语言规范**：题干、选项、题眼全量中英双语对齐，配齐【💡 零基础物理直觉】、【⚠️ 教授命题陷阱】与【⚡ 1 秒速杀应试之眼】。

---

## 🟢 Part 1: Pass 基础阶 (1.0 pt · 5 题 · 共 5.0 分)

### Q01 (1.0 pt) · 环月到达双曲线能量符号与捕获机动必要性 (Hyperbolic Arrival & Capture Requirement)
**Stem (题干)**:  
A spacecraft arrives from Earth inside the Moon's sphere of influence on a hyperbolic trajectory. At its arrival perilune ($r_p = 2759\text{ km}$), its speed is $v_p = 2.070\text{ km/s}$, whereas the local escape speed is $v_{esc} = 1.885\text{ km/s}$. What physical consequence follows if the spacecraft executes NO impulsive manoeuvre at perilune?  
一艘飞船从地球出发，沿双曲线轨道进入月球影响球（SOI）。在其到达近月点（$r_p = 2759\text{ km}$）处，其航速为 $v_p = 2.070\text{ km/s}$，而当地逃逸速度仅为 $v_{esc} = 1.885\text{ km/s}$。若飞船在近月点不执行任何脉冲点火机动，将发生什么物理后果？

* A. The Moon's gravitational tidal friction will automatically circularise the spacecraft into low lunar orbit. (月球潮汐引力摩擦将自动使飞船圆化进入低月轨道。)
* B. The spacecraft will remain permanently bound in an eccentric lunar elliptical orbit. (飞船将永久被束缚在偏心绕月椭圆轨道中。)
* C. The spacecraft will inevitably leave the Moon's sphere of influence along the outbound hyperbolic asymptote and return to Earth-centred space. (飞船必将沿着出射双曲线渐近线飞离月球影响球，重返地心空间。)
* D. The spacecraft will immediately impact the lunar surface at perilune. (飞船将在近月点立即撞击月表坠毁。)

**Answer (正确答案)**: **C**

**📖 教材与讲义双轨出处 (Citations)**:  
Curtis Chapter 9, Section 9.3 *Lunar trajectories*, Book pp. 450–467 (PDF pp. 457–474); Week 7 Lecture 7 Slide 6: *"Capture is a choice, not an event: at perilune the craft is doing 2.070 km/s, escape is 1.885 km/s. If you do nothing, you leave."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
在月心二体引力场中，机械能是守恒的。飞船带着从地球奔来的动能闯入月球引力场，其月心比能量 $\varepsilon_2 = \frac{v^2}{2} - \frac{\mu_m}{r} > 0$（严格为正），属于开式的双曲线（$e > 1$）。由于真空中没有空气阻力，月球引力只能像弹弓一样把飞船速度方向偏转一个角度，却无法吞噬它的动能。除非主动向后开火逆向减速（Retrograde burn）把能量打成负数（$\varepsilon < 0$），否则它一定会原样脱离月球！“Capture is a choice, not an event”（捕获是一种选择，绝非自然发生的事件）。

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
选项 A 是最大干扰项，试图诱导学生幻想“月球引力会把飞船拽住捕获”。二体引力是保守场，引力永远不可能自发完成负能量捕获！选项 B 违背比能量守恒定律；选项 D 混淆了近月点净高度（$z_p = 2759 - 1737.4 = 1021.6\text{ km} > 0$ 安全越过）。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
航速超逃逸（$2.07 > 1.885$）$\implies$ 双曲线正能量 $\implies$ 不刹车必飞走 $\implies$ 闭眼选 C！

---

### Q02 (1.0 pt) · 拱点切向点火铁律 (The Opposite Apsis Rule)
**Stem (题干)**:  
In staged lunar orbit insertion, an impulsive tangential retrograde burn is performed precisely at perilune. What happens to the resulting orbit's perilune and apolune radii?  
在分级环月入轨机动中，若在近月点精确执行一次切向逆行减速点火，新轨道的近月点半径与远月点半径将如何变化？

* A. The perilune radius is lowered, while the apolune radius remains unchanged. (近月点半径被压低，而远月点半径保持不变。)
* B. The perilune radius remains unchanged, while the apolune radius is lowered. (近月点半径保持不变，而远月点半径被压低。)
* C. Both perilune and apolune radii decrease symmetrically. (近月点和远月点半径对称减小。)
* D. The apse line rotates by $90^\circ$ without changing orbital energy. (拱线旋转 $90^\circ$ 且不改变轨道能量。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Curtis Chapter 6, Section 6.3, Book pp. 296–306 (PDF pp. 303–313); Week 7 Lecture 7 Slide 14: *"Move the opposite apsis from the apsis you keep. An impulsive tangential burn at an apsis leaves that radius an apsis and moves the opposite one."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
想象你在椭圆跑道的最低点（近心点）。此时进行切向刹车，你的位置瞬间不会改变（冲量假定 $\mathbf{r}^+ = \mathbf{r}^-$），所以该点仍然是新轨道的近心点！但是你的航速变慢了，飞船再也没有足够的动能冲到原先那么高的高度，因此对向的远月点（Apolune）必然被硬生生拉低。这就是著名的“**动对向拱点，留当前拱点**”法则：在近地点点火改远地点；在远地点点火改近地点！

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
很多初学者凭生活直觉容易误选 A，以为“在哪里减速，哪里的高度就掉下去”。切记：冲量点火瞬间位置绝对连续！当前点火点就是新轨道的几何支点，发生改变的永远是飞船飞到对侧能够达到的极限距离。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
近心点切向刹车 $\implies$ 保留近心点，对侧远心点暴降 $\implies$ 1 秒选 B！

---

### Q03 (1.0 pt) · 月表悬停惩罚基准常数 (The Hover Penalty Baseline)
**Stem (题干)**:  
To hold a lunar lander stationary in hover against lunar gravity just above the surface, how much $\Delta v$ is continuously consumed per second of hovering? (Take $\mu_m = 4902.8\text{ km}^3/\text{s}^2$, $R_m = 1737.4\text{ km}$).  
为了使登月舱在紧邻月表的低空对抗月球重力保持静止悬停，每悬停 1 秒钟需要持续消耗多少速度增量 $\Delta v$？（取 $\mu_m = 4902.8\text{ km}^3/\text{s}^2$, $R_m = 1737.4\text{ km}$）。

* A. $9.807\text{ m/s}$
* B. $3.711\text{ m/s}$
* C. $1.624\text{ m/s}$
* D. $0.549\text{ m/s}$

**Answer (正确答案)**: **C**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 8 Slide 50: *"Hovering buys nothing, and the clock still runs. To hold still against lunar gravity you must produce $g_M$ continuously: $g_M = \mu_m / R_m^2 = 1.624\text{ m/s}^2 \implies 1.624\text{ m/s}$ of $\Delta v$ per second of hover."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
悬停意味着加速度必须抵消重力（$a = g_M$）。月球表面重力加速度为：
$$g_M = \frac{\mu_m}{R_m^2} = \frac{4902.8}{(1737.4)^2} \approx 1.624\text{ m/s}^2$$
由动力学定义，$\Delta v = \int a \, dt = g_M \cdot \Delta t$。每静止挂在空中 1 秒钟，发动机推力必须持续顶住 $1.624\text{ m/s}^2$ 的加速度，即每秒凭空流逝 $1.624\text{ m/s}$ 的宝贵推进剂预算！悬停不产生任何位移，纯粹是“静止流血”。

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
A 选项是地球重力 $g_0$；B 选项是火星表面重力；D 选项是月球公转角速度数值干扰（$0.549^\circ/\text{h}$）。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
月球重力加速度是地球的 $1/6 \approx 1.624\text{ m/s}^2 \implies$ 悬停每秒代价 $1.624\text{ m/s} \implies$ 秒杀 C！

---

### Q04 (1.0 pt) · 动力下降轨道切入 (DOI) 的量级与杠杆效益 (Descent Orbit Insertion Leverage)
**Stem (题干)**:  
From a $100\text{ km}$ circular lunar orbit, a lander performs a Descent Orbit Insertion (DOI) burn to lower its perilune to $15\text{ km}$. The $\Delta v$ cost of this DOI burn is approximately:  
从 $100\text{ km}$ 环月圆轨道出发，着陆器执行一次动力下降轨道切入（DOI）点火以将其近月点压低至 $15\text{ km}$。该 DOI 点火所需的速度增量 $\Delta v$ 大约为：

* A. $\sim 19.5\text{ m/s}$
* B. $\sim 168\text{ m/s}$
* C. $\sim 850\text{ m/s}$
* D. $\sim 1692\text{ m/s}$

**Answer (正确答案)**: **A**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 8 Slide 34–36: *"Descent orbit insertion: spend 19.5 m/s first to drop perilune to 15 km, coast most of an hour, then brake... Eighty-five kilometres of perilune drop, worth 168 m/s."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
DOI 实际上是一次“未完成的霍曼转移的前半段”。初始半径 $r_1 = 1737.4 + 100 = 1837.4\text{ km}$，目标近月点 $r_2 = 1737.4 + 15 = 1752.4\text{ km}$。转移半长轴 $a = 1794.9\text{ km}$。  
在 $100\text{ km}$ 处的圆轨道速度为 $v_c = \sqrt{\mu/r_1} = 1.6335\text{ km/s}$；  
进入椭圆的远月点航速为 $v_{t1} = \sqrt{\mu(2/r_1 - 1/a)} = 1.6140\text{ km/s}$。  
两者之差：$\Delta v_{\text{DOI}} = 1.6335 - 1.6140 = 0.0195\text{ km/s} = \mathbf{19.5\text{ m/s}}$！  
**以小博大奇迹**：只花不到 $20\text{ m/s}$ 的微小代价，借月球引力滑行半圈，直接将着陆器送到 15 公里低空，并为后续主减速节省了近 $170\text{ m/s}$ 的总燃料！

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
B 选项 $168\text{ m/s}$ 是 DOI 节省的总净燃料收益（Net saving），而非 DOI 自身的点火成本；D 选项 $1.692\text{ km/s}$ 是到达 15 km 后的轨道横向航速。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
DOI 降轨点火极小，仅需约 $20\text{ m/s}$（精确值 19.5 m/s）$\implies$ 锁定 A！

---

### Q05 (1.0 pt) · 阿波罗 11 号“剩余 30 秒燃油”真相 (Apollo 11 30-Second Callout Reality)
**Stem (题干)**:  
During Apollo 11's historic powered descent, Mission Control called out "thirty seconds" of remaining fuel before touchdown. What was the exact operational meaning of this callout according to NASA mission reports?  
在阿波罗 11 号历史性的动力下降着陆过程中，地面任务控制中心在触地前呼叫了“剩余 30 秒燃油”。根据 NASA 官方任务报告，这一呼叫的准确操作含义是什么？

* A. The descent engine fuel tanks would run completely dry in 30 seconds, causing immediate flameout. (下降发动机燃料箱将在 30 秒内彻底抽干，导致发动机立即熄火。)
* B. Time remaining until the mandatory Landing/Abort decision point, at which the ascent stage must abort back to orbit. (距离强制“着陆/中止决断点”所剩余的时间，达到该点后必须由上升级紧急中止爬升回轨。)
* C. The lander had exactly 30 seconds of battery power remaining before telemetric computer shutdown. (着陆器电池电量仅够维持遥测计算机运行 30 秒。)
* D. The guidance computer had encountered an unrecoverable 1202 program alarm and would reboot in 30 seconds. (导引计算机遭遇无法恢复的 1202 程序报警并将于 30 秒内重启。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 8 Slide 51: *"What the mission report actually says: Apollo 11 is remembered as landing with 'thirty seconds of fuel' remaining. That was Houston's real-time callout of the time left to the landing/abort decision, not a post-flight measurement of the tank. Touchdown occurred 40 to 50 seconds prior to propellant depletion."* NASA TM X-58040.

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
大众流行文化中常误以为阿姆斯特朗是在油箱“最后一滴油”烧干前一秒落地的。但航天系统工程拥有极其严密的冗余规则：登月舱分为下降级和上升级。地面呼叫的“30秒”是留给航天员做决定的最后窗口——如果在这个倒计时归零时还没看到平坦地面接地，宇航员必须立即按下 Abort 键，炸开级间分离螺栓，点燃上升级发动机爬升返回环月轨道与指令舱会合。飞后遥测证实，当时油箱里其实还富余 40~50 秒的实际燃料。

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
A 选项是坊间流传的经典错误谣言；D 选项 1202 警报真实发生过（雷达数据溢出），但并非 30 秒呼叫的起因。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
航天绝不打无准备之仗，30 秒是中止决策时钟（Abort decision point）而非空箱熄火 $\implies$ 选 B！

---

## 🔵 Part 2: Credit 进阶阶 (1.5 pt · 5 题 · 共 7.5 分)

### Q06 (1.5 pt) · 极轨环月等待期与自转周期 (The Polar Orbit Loiter)
**Stem (题干)**:  
A spacecraft is placed into a $100\text{ km}$ circular polar lunar orbit ($i = 90^\circ$). The Moon rotates underneath at an angular velocity of $\omega_M = 360^\circ / 27.32\text{ days} \approx 13.18^\circ/\text{day}$. How many days elapse between successive coplanarity opportunities for a landing site located at $69.4^\circ\text{S}$ latitude?  
一艘飞船进入 $100\text{ km}$ 环月极圆轨道（$i = 90^\circ$）。月球在轨道下方以 $\omega_M = 360^\circ / 27.32\text{ 天} \approx 13.18^\circ/\text{天}$ 的角速度自转。对于位于南纬 $69.4^\circ\text{S}$ 的目标着陆场，两次连续共面窗口之间相隔多少天？

* A. Exactly $27.32\text{ days}$ (恰好 27.32 天)
* B. Exactly $13.66\text{ days}$ (恰好 13.66 天)
* C. Asymmetrically $7.4\text{ days}$ then $20.0\text{ days}$ (不对称的 7.4 天后隔 20.0 天)
* D. About $117.8\text{ minutes}$ (约 117.8 分钟)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 7 Slide 27–28: *"Waiting for the ground to arrive: Coplanarity occurs at both meridians of the polar plane. With longitude wrapped modulo 180°, both chances are zero crossings, 13.66 days apart... Equal only if polar: 13.7 days each; at $i = 76^\circ$, 7.4 then 20.0."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
根据球面几何共面方程 $\sin L = \tan\phi / \tan i$。当处于完美极轨时，$i = 90^\circ \implies \tan i \to \infty \implies \sin L = 0$。这说明极轨平面精准切过月球的两个相对经线圈（$L = 0^\circ$ 和 $L = 180^\circ$）。随着月球自转，地表任意纬度的着陆场每自转半圈（$180^\circ$）就会穿过一次极轨平面！因此两次共面机会严格平分月球恒星月（$27.32\text{ 天}$）：
$$t_{\text{wait}} = \frac{27.32\text{ 天}}{2} = \mathbf{13.66\text{ 天}}$$

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
C 选项是当倾角为 $76^\circ$ 时的非对称等待间隔（讲义 Slide 27 原文算例）；D 选项是极轨的单圈公转周期，公转一圈虽过南极点，但若经度不对齐，着陆场并不在轨道面下方。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
极轨 90 度切过经线对角线 $\implies$ 半月转半圈 $\implies 27.32 / 2 = 13.66\text{ 天} \implies$ 秒杀 B！

---

### Q07 (1.5 pt) · 变面成本与航速严格线性比例 (4.10x Velocity Scaling of Plane Changes)
**Stem (题干)**:  
A spacecraft needs to perform an orbital plane change of $\Delta i$ around the Moon. The local speed is $1.633\text{ km/s}$ in a $100\text{ km}$ circular low lunar orbit, and $0.399\text{ km/s}$ at the apolune of a $10,000\text{ km}$ capture ellipse. For ANY specified plane change angle $\Delta i$, what is the exact ratio of the $\Delta v$ cost in low lunar orbit to that at the $10,000\text{ km}$ apolune?  
飞船需要在月球周围执行角度为 $\Delta i$ 的轨道面改变机动。在 $100\text{ km}$ 低月圆轨道上其局域航速为 $1.633\text{ km/s}$，而在 $10,000\text{ km}$ 捕获椭圆的远月点处其航速为 $0.399\text{ km/s}$。对于任意给定的变面角 $\Delta i$，在低月轨道变面所需 $\Delta v$ 与在万公里远月点变面所需 $\Delta v$ 的准确比值是多少？

* A. $1.00$
* B. $2.31$
* C. $4.10$
* D. $16.81$

**Answer (正确答案)**: **C**

**📖 教材与讲义双轨出处 (Citations)**:  
Curtis Chapter 6, Section 6.5, Book pp. 314–326 (PDF pp. 321–333); Week 7 Lecture 7 Slide 21–22: *"The same plane change costs 4.10 times as much in low lunar orbit... One ratio, 4.10, in all four pairs: both bars are $2v\sin(\Delta i/2)$, so the angle cancels and only the speed is left: $1.633 / 0.399 = 4.10$."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
纯轨道面旋转公式为 $\Delta v_\perp = 2 v \sin\left(\frac{\Delta i}{2}\right)$。  
计算两者比值：
$$\frac{\Delta v_{\text{LLO}}}{\Delta v_{\text{Apolune}}} = \frac{2 v_{\text{LLO}} \sin(\Delta i / 2)}{2 v_{\text{Apolune}} \sin(\Delta i / 2)} = \frac{v_{\text{LLO}}}{v_{\text{Apolune}}} = \frac{1.633}{0.399} = \mathbf{4.10}$$
角度项 $\sin(\Delta i/2)$ 在分子分母中被完全消去！因此无论你想变 $5^\circ, 15^\circ$ 还是 $90^\circ$，在低月轨道变面永远**比在万公里远月点贵整整 4.10 倍**！

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
D 选项是速度平方比 $(4.10)^2 \approx 16.8$，混淆了动能与速度增量 $\Delta v$；B 选项是 $90^\circ$ 变面时的具体速度数值（$2.31\text{ km/s}$）。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
公式两边角度抵消，成本比等于航速比 $1.633 / 0.399 = 4.10 \implies$ 毫无悬念选 C！

---

### Q08 (1.5 pt) · 目标轨道面在月心的“免费”选取原理 (Free Plane Targeting on the $\mathbf{v}_\infty$ Hinge)
**Stem (题干)**:  
While a spacecraft's departure plane from Earth is physically constrained by launch latitude ($\cos i_\oplus = \cos\phi\sin A$), why is targeting virtually ANY lunar orbital inclination (from polar to equatorial) considered "free" of extra $\Delta v$?  
虽然飞船从地球出发的轨道面受到发射纬度的物理刚性约束（$\cos i_\oplus = \cos\phi\sin A$），但为什么在月心参考系中选择任意轨道倾角（从极轨到赤道轨）几乎被视作“不需要额外 $\Delta v$ 的免费选择”？

* A. Because the Moon has no gravitational field until the spacecraft crosses $100\text{ km}$ altitude. (因为在飞船穿过 100 公里高度之前，月球没有任何引力场。)
* B. Because subtracting $\mathbf{v}_{\text{Moon}}$ tilts $\mathbf{v}_\infty$ out of the Earth-transfer plane, and all lunar orbit planes hang like doors on the $\mathbf{v}_\infty$ hinge, selectable via tiny midcourse B-plane adjustments. (因为扣除月球公转速度使 $\mathbf{v}_\infty$ 偏离地球转移面，所有环月轨道面如同挂在 $\mathbf{v}_\infty$ 铰链上的门，只需微小的中途 B 平面瞄准即可任选。)
* C. Because lunar frozen inclinations naturally rotate the orbit plane at zero fuel cost. (因为月球冻结倾角会零燃油代价自发旋转轨道面。)
* D. Because solar radiation pressure automatically pushes the spacecraft into polar orientation. (因为太阳光压会自动将飞船推入极轨方向。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 7 Slide 24–25: *"How the transfer plane is free: Same inclination from Earth. Almost any inclination from the Moon... subtracting $v_{\text{Moon}}$ tilts $v_\infty$ out of that plane; turning the aim point about $v_\infty$ turns the lunar plane, so every orbit plane hangs on the $v_\infty$ line like a door on its hinge."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
从地心看，飞船在既定发射平面内滑行；但在进入月球 SOI 时，相对速度 $\mathbf{v}_\infty = \mathbf{v}_{\text{sc}} - \mathbf{v}_{\text{Moon}}$ 由于矢量减法，自然产生了一个巨大的法向倾斜。所有经过近月点的环月轨道平面，其法线必须垂直于 $\mathbf{v}_\infty$，这意味着所有可能的轨道面都**紧密铰接在 $\mathbf{v}_\infty$ 这根轴线上**。飞船在数十万公里外只需施加 $1\sim 2\text{ m/s}$ 的微小中途修正，改变其在月球圆盘上的碰撞投影点（B-plane 瞄准点），就能把轨道门推开到任何预想倾角（如月船三号直接切入 $88.48^\circ$ 极轨），完全不需要在低轨烧几千米/秒去转面！

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
C 选项混淆了长周期偏心率冻结与瞬时轨道倾角构建；A 选项和 D 选项属于非物理胡编项。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
记住讲义核心比喻：$\mathbf{v}_\infty$ 是门铰链（Door on its hinge），瞄准点选倾角零代价 $\implies$ 选 B！

---

### Q09 (1.5 pt) · 15 km 动力下降近月点选取的系统工程权衡 (The 15 km Altitude Trade)
**Stem (题干)**:  
In NASA's 1972 Apollo Experience Report (TN D-6846), the perilune altitude for starting powered descent was established at $15\text{ km}$ ($50,000\text{ ft}$). Why was $15\text{ km}$ selected instead of a much lower altitude like $5\text{ km}$?  
在 NASA 1972 年阿波罗工程经验报告（TN D-6846）中，启动动力下降的近月点高度被确立为 $15\text{ km}$ ($50,000\text{ ft}$)。为什么选择 15 km 而不是更低的 5 km？

* A. Lunar gravity drops to zero above $15\text{ km}$. (月球重力在 15 km 以上降为零。)
* B. Below $15\text{ km}$ the propellant-saving curve is flat (dropping to $5\text{ km}$ saves only $\sim 7\text{ m/s}$), while terrain collision risk and loss of pilot reaction time increase catastrophically. (15 km 以下节油曲线平坦化，降至 5 km 仅省约 7 m/s，但地形撞山风险与反应时间丧失呈灾难性激增。)
* C. The descent engine cannot be ignited in vacuum below $15\text{ km}$. (下降发动机在 15 km 以下的真空中无法点火启动。)
* D. $15\text{ km}$ is the exact boundary of the lunar atmosphere. (15 km 是月球大气的精确分界面。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 8 Slide 37–38: *"Why 15 km, and not 5, and not 50: NASA answered this in 1972, and the answer is a trade... Below about 15 km the curve is flat: dropping to 5 km buys about 7 m/s. Terrain clearance and navigation error are not in this model; a lower start cuts both the clearance and the time to react."* NASA TN D-6846.

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
系统工程是找收益与风险的甜蜜平衡点：  
- 如果从 50 km 开火：重力沿下降轨迹加速时间太长，重力损失剧增；  
- 如果从 15 km 进一步压到 5 km：数值积分显示**全程只能多省区区 $7\text{ m/s}$ 速度增量**！但月球山峰动辄 5~8 km，若近月点只有 5 km，雷达稍有测距漂移就会直接“机头插进山体”撞毁；且留给计算机或航天员发现障碍物、判断故障的时间缩短到几秒。用巨大的机毁人亡风险去换区区 $7\text{ m/s}$ 燃料，是极度愚蠢的工程下策。

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
月球没有大气（排除 D）；真空中随时可点火（排除 C）；引力平方反比连续变化（排除 A）。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
十五公里以下曲线变平，多降只省七米油，撞山风险丢老命 $\implies$ 秒选 B！

---

### Q10 (1.5 pt) · 动力下降速度消除基准与质量比 (Speed-Cancellation & Mass Ratio)
**Stem (题干)**:  
At a $15\text{ km}$ perilune, a lunar lander arrives with an orbital speed of $1.692\text{ km/s}$ to cancel. For an engine with a vacuum specific impulse of $I_{sp} = 305\text{ s}$ ($c = 2.992\text{ km/s}$), what minimum mass ratio $m_0 / m_f$ must be brought to lunar orbit purely to cancel this benchmark horizontal speed, before accounting for any gravity loss, steering loss, or hover?  
在 $15\text{ km}$ 近月点处，登月舱入轨航速为 $1.692\text{ km/s}$ 需要被消除。对于真空比冲 $I_{sp} = 305\text{ s}$（等效排气速度 $c = 2.992\text{ km/s}$）的发动机，在尚未计算任何重力损失、转向损失或悬停机动之前，仅仅为了抵消这一基准水平航速，必须运送到月球轨道的最小初始质量比 $m_0 / m_f$ 是多少？

* A. $1.00$
* B. $1.25$
* C. $1.76$
* D. $3.50$

**Answer (正确答案)**: **C**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 8 Slide 40–41: *"The rocket equation, recalled... The benchmark alone burns 43 per cent of the mass that starts the descent: $\Delta v / c = 1.692 / 2.992 = 0.565$. $e^{-0.565} = 56.8\%$ survives, $43.2\%$ is propellant. Inverted, $m_0 / m_f = e^{+0.565} = 1.76$."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
套用齐奥尔科夫斯基理想火箭方程：
$$\frac{m_0}{m_f} = \exp\left(\frac{\Delta v}{I_{sp} g_0}\right)$$
代入基准航速 $\Delta v = 1.692\text{ km/s}$，排气速度 $c = 305 \times 9.80665 \times 10^{-3} = 2.991\text{ km/s} \approx 2.992\text{ km/s}$：
$$\text{指数因子} = \frac{1.692}{2.992} = 0.5655$$
$$\frac{m_0}{m_f} = e^{0.5655} \approx \mathbf{1.76}$$
这意味着：**月球表面你想放下的每 1 吨硬件（如登月舱干重与宇航员），仅为了刹住入轨航速，就必须在环月轨道准备 1.76 吨的总重（其中 0.76 吨纯是燃料）**！这是任何航天器逃不掉的自然物理铁律。

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
很多考生算出推进剂占比 $43.2\%$ 后误将质量比当成 $1 / (1 - 0.432) = 1.76$，若误算成 $m_f / m_0 = 0.568$ 则找不到选项。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
$1.692 / 2.992 \approx 0.565 \implies e^{0.565} = 1.76 \implies$ 快速选 C！

---

## 🟣 Part 3: Distinction 拔高阶 (2.0 pt · 5 题 · 共 10.0 分)

### Q11 (2.0 pt) · 环月捕获路径对比：Route A vs Route B (Route A vs Route B Staged Capture)
**Stem (题干)**:  
To deliver a spacecraft from an arrival perilune ($r_p = 2758\text{ km}$, $z_p = 1021\text{ km}$) to a $100\text{ km}$ circular orbit, two mission profiles are evaluated:  
- **Route A**: Circularise immediately at $1021\text{ km}$ ($\Delta v = 0.737\text{ km/s}$), then perform a two-impulse Hohmann transfer down to $100\text{ km}$ ($0.141 + 0.156\text{ km/s}$, Total: $1.034\text{ km/s}$).  
- **Route B**: Capture directly into a $1021 \times 10,000\text{ km}$ eccentric orbit ($\Delta v = 0.374\text{ km/s}$), drop perilune to $100\text{ km}$ at apolune ($\Delta v = 0.062\text{ km/s}$), and circularise at the new perilune ($\Delta v = 0.515\text{ km/s}$, Total: $0.951\text{ km/s}$).  
Why is Route B $83.6\text{ m/s}$ cheaper than Route A?  
为了将飞船从到达近月点（$r_p = 2758\text{ km}$, 高度 $1021\text{ km}$）送入 $100\text{ km}$ 圆轨道，工程师评估了两种方案：  
- **方案 A**：在 1021 km 处直接切向圆化（$0.737\text{ km/s}$），随后执行双脉冲霍曼下降至 100 km（$0.141 + 0.156\text{ km/s}$，总计 $1.034\text{ km/s}$）。  
- **方案 B**：直接捕获进入 $1021 \times 10,000\text{ km}$ 偏心轨道（$0.374\text{ km/s}$），在远月点将近月点压低至 100 km（$0.062\text{ km/s}$），并在新近月点圆化（$0.515\text{ km/s}$，总计 $0.951\text{ km/s}$）。  
为什么方案 B 比方案 A 能净省 $83.6\text{ m/s}$ 的速度增量？

* A. Route B burns all its propellant inside the lunar atmosphere. (方案 B 在月球大气层内燃烧全部推进剂。)
* B. Route B avoids circularising at an intermediate speed ($1.333\text{ km/s}$), performing its major burns at high speeds ($2.070$ and $2.148\text{ km/s}$) to maximise Oberth efficiency, while moving the perilune at a very low speed ($0.399\text{ km/s}$) at apolune. (方案 B 避免了在中等航速 $1.333\text{ km/s}$ 处圆化，其主点火均在极高航速 $2.070$ 与 $2.148\text{ km/s}$ 处执行以最大化 Oberth 效率，且在万公里远月点极低航速 $0.399\text{ km/s}$ 处改近月点。)
* C. Route B relies on Earth's gravitational pull to cancel the spacecraft's orbital momentum. (方案 B 依靠地球引力拉扯抵消飞船轨道动量。)
* D. Route B requires zero burn time because it is an asymptotic ballistic capture. (方案 B 是渐近弹道捕获，因而点火时间为零。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 7 Slide 14–16: *"Route B: capture high, lower perilune from apolune... 83.6 m/s cheaper: Burn 2 is small because its job is small: a 7% deepening of energy, made at apolune because that is where a tangential burn moves perilune alone. Route B wins because its big burns are spent at 2.070 and 2.148 km/s, where a m/s removes the most energy."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
这是双椭圆转移思想在环月捕获中的绝妙运用！  
- **方案 A 的硬伤**：过早将飞船圆化在 1021 km，航速被压低到中不溜秋的 $1.333\text{ km/s}$，失去了 Oberth 效应的红利；  
- **方案 B 的大智慧**：第一次大点火在近月点极高航速（$2.070\text{ km/s}$）处做，换取极其夸张的轨道降能；随后飞到万公里远月点，飞船速度已经慢如蜗牛（仅 $0.399\text{ km/s}$），根据天体力学，在速度极低处改变轨道形状最省力，仅花区区 **$62\text{ m/s}$** 就把近月点高度下移了近千公里；最后一次圆化又是在重新加速后的近月点高速（$2.148\text{ km/s}$）执行！  
**好钢全用在刀刃上，大机动在极高速做，调形状在极低速做！**

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
很多学生以为“先圆化更安全所以更省”。天体力学中，圆化抹平了速度极值，反而彻底杀死了高速度带来的 Oberth 免费能量杠杆！

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
两头快中间慢，大烧在极速，微调在远月，双椭圆精髓省 84 米 $\implies$ 锁定 B！

---

### Q12 (2.0 pt) · 极轨消除 $J_2$ 一阶退行与月球质量瘤摄动维持 (Polar Orbit $J_2$ vs Mascons Stationkeeping)
**Stem (题干)**:  
A common textbook statement is that a polar orbit ($i = 90^\circ$) has a zero first-order nodal regression rate ($\dot{\Omega}_{J_2} = 0$). However, NASA's Lunar Reconnaissance Orbiter (LRO) in a $50\text{ km}$ circular polar mapping orbit allocated approximately $150\text{ m/s}$ per year for orbit maintenance. What accounts for this apparent contradiction?  
教科书中常见的结论是：极轨（$i = 90^\circ$）具有为零的一阶交点退行率（$\dot{\Omega}_{J_2} = 0$）。然而，NASA 处于 $50\text{ km}$ 极圆测绘轨道的月球勘测轨道器（LRO）每年仍需分配约 $150\text{ m/s}$ 的推进剂用于轨道维持。这一看似矛盾的现象根源在于：

* A. LRO's thrusters had continuous fuel leaks throughout the mission. (LRO 发动机在任务期间发生了持续的燃料泄漏。)
* B. A polar orbit only eliminates the oblateness ($J_2$) nodal drift, but does NOT eliminate lunar mascons, higher-order non-spherical harmonics, and Earth third-body perturbations; lunar frozen inclinations are $27^\circ, 50^\circ, 76^\circ, 86^\circ$, NOT $90^\circ$. (极轨仅消除了扁率 $J_2$ 引发的节点漂移，但绝不能消除月球质量瘤、高阶非球形引力摄动及地球第三体潮汐力；月球冻结倾角为 $27^\circ, 50^\circ, 76^\circ, 86^\circ$，根本不包含 $90^\circ$。)
* C. The lunar magnetic field exerts a continuous drag torque on polar satellites. (月球磁场对极轨卫星施加了持续的阻力力矩。)
* D. Atmospheric drag at $50\text{ km}$ altitude decays the orbit within weeks. (50 公里高度的月球大气阻力在几周内导致轨道衰减。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Curtis Chapter 10, Section 10.10, Book pp. 529–535 (PDF pp. 536–542); Week 7 Lecture 7 Slide 29: *"Why polar missions park polar: coverage, and a plane that holds its orientation... What polar does NOT buy you: Lecture 6's frozen inclinations are $27^\circ, 50^\circ, 76^\circ$ and $86^\circ$, not $90^\circ$. LRO's station-keeping allocated 150 m/s a year... A polar plane is a place to park, not a place to forget."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
一阶摄动理论中，升交点赤经漂移率公式为 $\dot{\Omega} \propto -\frac{3}{2} J_2 \left(\frac{R}{p}\right)^2 n \cos i$。当 $i = 90^\circ$ 时，$\cos 90^\circ = 0$，轨道面相对天球赤道确实不转动。  
**但是，月球引力场绝不仅仅是一个完美的扁球体！** 月球深埋着密集的巨型高密度熔岩“质量瘤（Mascons）”，重力场充满了强烈的非中心不对称高阶谐波（如 $C_{22}, C_{31}, J_3$ 等）。这些局部质量瘤会像引力水泵一样，每圈周期性拉扯偏心率，使低轨近月点迅速下沉撞山。真正的长周期稳定倾角只有那四个神奇的冻结倾角（$27^\circ, 50^\circ, 76^\circ, 86^\circ$）。极轨不在其列，因此 LRO 必须每个月定期反推点火，每年烧掉 $150\text{ m/s}$ 才能勉强“保命”！

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
极易误选“月球 50km 大气阻力”或以为“极轨是完全冻结的稳定轨道”。月球是超高真空天体，无大气阻力；极轨消除的是面自转，不是偏心率漂移。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
九十度只消 J2，质量瘤仍会拉偏心；冻结倾角无九十，每年仍需百五维 $\implies$ 选 B！

---

### Q13 (2.0 pt) · 动力下降损失分解：重力损失 vs 转向损失 (Gravity Losses vs Steering Losses)
**Stem (题干)**:  
During powered descent from $15\text{ km}$, an Apollo-class lander spends $1.781\text{ km/s}$ of $\Delta v$, which is $89\text{ m/s}$ above the instantaneous velocity-cancellation benchmark ($1.692\text{ km/s}$). How is this $89\text{ m/s}$ loss partitioned, and how does doubling the thrust-to-weight ratio ($T/W$) from $1.5$ to $3.0$ affect these losses?  
在从 $15\text{ km}$ 近月点动力下降过程中，阿波罗级着陆器消耗了 $1.781\text{ km/s}$ 的 $\Delta v$，比瞬时速度消除基准（$1.692\text{ km/s}$）高出了 $89\text{ m/s}$ 的损失。这 $89\text{ m/s}$ 损失由哪两部分构成？若将推重比（$T/W$）从 $1.5$ 翻倍提升至 $3.0$，损失将发生怎样的变化？

* A. It is entirely atmospheric drag loss; higher thrust increases drag exponentially. (完全是大气阻力损失；推力越高阻力呈指数上升。)
* B. It consists of Gravity Loss ($\sim 52\text{ m/s}$) and Steering Loss ($\sim 37\text{ m/s}$); doubling $T/W$ to $3.0$ cuts burn time and saves $\sim 66\text{ m/s}$, but past $T/W \approx 2\sim 3$ the curve flattens and engine dry mass penalties dominate. (由重力损失约 52 m/s 与转向损失约 37 m/s 构成；$T/W$ 翻倍缩短燃烧时间节省约 66 m/s，但推重比超过 2~3 后曲线彻底变平，发动机干重惩罚占主导。)
* C. It consists of radiation pressure loss and tyre friction loss. (由光压损失与轮胎摩擦损失构成。)
* D. Gravity loss increases with thrust, while steering loss is always identically zero. (重力损失随推力增加而上升，而转向损失始终恒等于零。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 8 Slide 45–46: *"Why more thrust stops helping: What a 'loss' is, and its two parts... Gravity loss: gravity adds speed along direction of travel... 52 m/s at T/W 1.5, 39 at T/W 5. Steering loss: only thrust pointed against velocity slows the craft... 66 m/s at T/W 1.5, 11 at 3.0, 18 at 5. Above T/W ≈ 2 descent Δv hardly changes: a bigger engine saves almost no propellant and adds dry mass."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
损失之所以发生，是因为真实发动机无法在 0 秒内完成喷射：  
1. **重力损失 (Gravity Loss)**：发动机喷了 400 多秒，月球重力向下拽了 400 多秒，下坠的速度必须被发动机额外耗油拉回来。推力越大，烧得越快，重力做功时间越短，重力损失自然下降；  
2. **转向损失 (Steering Loss)**：推力不能纯水平向前冲，否则飞船直接撞山，推力必须往上仰角 $\psi$ 托举机身。这一倾斜使得用于水平刹车的推力打了折扣（$\cos\psi$），损失掉的横向分量就是转向损失。  
**推重比的陷阱**：推重比从 1.5 提至 3.0，确实省了 $66\text{ m/s}$；但推重比进一步提到 5 时，燃油曲线几乎成水平直线，而为了产生这股推力，火箭必须装载沉重数倍的高压涡轮和燃烧室，**发动机多出来的死重大大超过省下来的几滴油**！

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
误认为“推力越大总燃油永远越省”。航天系统工程中，超过临界点（$T/W \approx 2\sim 3$）后，发动机结构死重的惩罚远远压垮微弱的动力学收益。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
损失由重力与转向平分，推重比超三收益平，发动机死重成祸首 $\implies$ 闭眼选 B！

---

### Q14 (2.0 pt) · 线性正切导引律与动力下降轨迹形态 (Linear Tangent Steering & Trajectory Profile)
**Stem (题干)**:  
The 2D equations of motion for lunar powered descent are integrated using a linear tangent steering law: $\tan\psi(t) = k_0 + k_1 t$. Which statement correctly describes the nature of the descent trajectory flown under this guidance law?  
月球动力下降的二维运动方程采用线性正切导引律：$\tan\psi(t) = k_0 + k_1 t$ 进行积分求解。下列哪一项准确描述了该导引律下实际飞行的下降轨迹物理形态？

* A. The lander plunges vertically downward like an elevator with zero downrange travel. (着陆器像电梯一样垂直笔直坠落，没有任何下航程位移。)
* B. The lander never free-falls; it flies a long, shallow deceleration arc spanning over $400\text{ km}$ downrange, with sink rate peaking at only $\sim 56\text{ m/s}$ while thrust pitches upward slowly. (着陆器从未自由坠落；它飞行的是一条跨越 400 多公里下航程的漫长浅层滑翔减速弧线，垂直沉降率峰值仅约 56 m/s，推力机头缓慢向上仰起。)
* C. The lander spins at high RPM to achieve gyroscopic stability. (着陆器高速旋转以实现陀螺定轴稳定性。)
* D. The guidance law strictly minimises fuel consumption to absolute global optimality without boundary constraints. (该导引律严格将燃油消耗优化至全局绝对极小值且没有任何边界约束。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 8 Slide 42–44: *"The descent, integrated: It never falls; it flies. The sink rate peaks at 56 m/s while the speed comes off almost linearly, and the thrust starts nearly horizontal and pitches up only slowly: a long shallow deceleration, not a drop with the brakes on... downrange distance 415 km."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
线性正切导引律 $\tan\psi(t) = k_0 + k_1 t$ 是解析变分法推导出的经典次优闭环导引律。  
飞船进入 $15\text{ km}$ 近月点时，初始横向速度高达 $1.692\text{ km/s}$（超过 5 马赫！）。为了在 15 公里高度落差内将这股巨大的水平冲量耗尽，发动机必须几乎平躺着向正后方猛烈喷火，同时以极平缓的弧度滑过月面。全过程长达 415 公里（相当于从悉尼飞到堪培拉的距离！），垂直下沉速度全程被死死压制在 $56\text{ m/s}$ 以内。正如讲义原文所强调的：“**It never falls; it flies!**”（它从来不是掉下去，它是在超音速滑翔！）。

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
A 选项是毫无物理常识的“垂直掉落论”；D 选项混淆了边界匹配与无约束最优化（讲义 Slide 43 指出：该导引律只是用牛顿法求解满足终端条件的 3 个参数，并未进行全局 $\Delta v$ 泛函极小化）。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
登月下降滑翔四百里，沉降峰值五十六，机头慢仰平缓飞 $\implies$ 选 B！

---

### Q15 (2.0 pt) · 阿波罗三阶段下降与高门哲学 (Three Phases & The High Gate Philosophy)
**Stem (题干)**:  
In the Apollo lunar descent profile, NASA designated three distinct phases separated by "Gates":  
1. **Braking Phase**: from PDI ($15.2\text{ km}$) to High Gate ($\sim 2.1\text{ km}$ / $7,000\text{ ft}$);  
2. **Approach Phase**: from High Gate to Low Gate ($\sim 152\text{ m}$ / $500\text{ ft}$);  
3. **Landing Phase**: below Low Gate to touchdown.  
What is the core system engineering philosophy behind pitching the lander significantly upward at High Gate during the Approach Phase, despite incurring additional steering $\Delta v$ losses?  
在阿波罗登月动力下降剖面中，NASA 划分了由“门（Gates）”分隔的三个截然不同的阶段：  
1. **制动段**：从 PDI（15.2 km）至高门（约 2.1 km / 7,000 ft）；  
2. **接近段**：从高门至低门（约 152 m / 500 ft）；  
3. **着陆段**：从低门以下至接地。  
在接近段高门处，系统故意将着陆器机头大幅度上仰，尽管这会带来额外的转向 $\Delta v$ 损失，其背后的核心系统工程哲学是什么？

* A. To increase atmospheric aerodynamic drag for free decelerating braking. (增加大气气动阻力以实现免费减速制动。)
* B. To deliberately trade fuel efficiency for visibility, controllability, and target-site confirmation (allowing astronauts/cameras to visually inspect terrain and detect boulders/craters). (故意牺牲燃油效率，换取视野可见性、可控性与着陆场确认，使航天员/相机能直接目测地形并识别巨石陨坑。)
* C. To recharge the descent batteries via solar panels pointing toward the zenith. (通过朝向天顶的太阳能电池板为下降电池充电。)
* D. To perform an in-flight Doppler calibration of the Apollo guidance computer's clock. (对阿波罗导引计算机的时钟进行空中多普勒校准。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 8 Slide 47: *"How Apollo actually flew it: Three phases, and NASA's own names for them... The braking phase is dominated by efficient velocity removal. The later phases deliberately trade some efficiency for information: visibility, controllability, and choosing where to put the vehicle... Every lander since has made the same bargain, with cameras instead of a window."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
在制动段（Braking phase），飞船机头几乎平趴着，航天员窗户对着漆黑深空，发动机盲喷，这是为了换取最高的燃油效率。但飞到了 2 公里高度的高门（High Gate），如果再不抬头，航天员连要落在哪里都不知道！  
因此导引计算机在此刻主动下达仰头指令，把窗户转正对着前方月面。航天员（或现代无人探测器的激光雷达/光学相机）终于能看到着陆场中的巨石、断崖和斜坡。**工程师故意在这里浪费几十米/秒的燃料，就是为了买到“看清前方路况的信息（Information）”**！没有视野的盲目省油，最终只能省在撞山的残骸里。

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
月球没有大气，无法气动刹车（排除 A）；登月舱下降全程靠蓄电池，无太阳能帆板（排除 C）。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
高门抬头看地面，燃油换来视野清 $\implies$ 秒杀 B！

---

## 🔴 Part 4: High Distinction 卓越阶 (2.5 pt · 5 题 · 共 12.5 分)

### Q16 (2.5 pt) · 低月圆轨道 $90^\circ$ 变面代价的工程荒谬性 (The $90^\circ$ LLO Plane Change Catastrophe)
**Stem (题干)**:  
A spacecraft arrives in a $100\text{ km}$ circular low lunar orbit ($v = 1.633\text{ km/s}$). A rookie trajectory designer proposes performing a $90^\circ$ pure inclination change directly in this low circular orbit before landing. Calculate the $\Delta v$ cost of this manoeuvre and evaluate its engineering viability against Apollo 11's flown mission data.  
一艘飞船进入 $100\text{ km}$ 环月圆轨道（$v = 1.633\text{ km/s}$）。一位新手弹道设计师提议在着陆前直接在这一低圆轨道上执行一次 $90^\circ$ 的纯轨道面倾角改变。计算该机动的 $\Delta v$ 成本，并结合阿波罗 11 号的实际飞行数据评估其工程可行性。

* A. $\Delta v = 0.564\text{ km/s}$; completely affordable within standard margins. ($\Delta v = 0.564\text{ km/s}$；在标准工程裕度内完全可承受。)
* B. $\Delta v = 1.155\text{ km/s}$; equal to half the descent propellant budget. ($\Delta v = 1.155\text{ km/s}$；等于下降推进剂预算的一半。)
* C. $\Delta v = 2.310\text{ km/s}$; an engineering disaster that costs MORE than Apollo 11's entire powered descent from orbit to the surface ($2.112\text{ km/s}$). ($\Delta v = 2.310\text{ km/s}$；这是灾难性的工程溃败，其成本甚至超过了阿波罗 11 号从轨道到月表的全程动力下降总消耗 $2.112\text{ km/s}$。)
* D. $\Delta v = 0\text{ km/s}$; plane changes in circular orbits require zero propellant. ($\Delta v = 0\text{ km/s}$；圆轨道变面不需要消耗推进剂。)

**Answer (正确答案)**: **C**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 7 Slide 21–23: *"A 90° plane change in low lunar orbit costs more than Apollo 11's entire powered descent: 2.310 km/s against 2.112 km/s as flown... A mission that needs one has been designed wrongly. Target the plane through departure and midcourse geometry, and never leave a large pure plane change until after circularisation."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
代入纯变面公式：
$$\Delta v_\perp = 2 v \sin\left(\frac{90^\circ}{2}\right) = 2 \times 1.633 \times \sin(45^\circ) = 2 \times 1.633 \times 0.7071 = \mathbf{2.310\text{ km/s}}$$
**震撼的数据对比**：  
阿波罗 11 号登月舱从 15 公里近月点刹车、悬停并平稳降落在月球静海表面，全程烧掉了 $2.112\text{ km/s}$ 的速度增量。  
如果在低月轨道犯蠢去转一个 $90^\circ$ 的直角弯，光是转个身就要耗费 **$2.310\text{ km/s}$**！这相当于直接把整整一艘满油登月舱的所有燃料全部白白喷光，连一厘米高度都没降下来！这就是为什么教授严厉告诫：“任何在低轨做大角度变面的任务，在顶层架构设计阶段就已经彻底死亡了！”

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
A 选项 $0.564\text{ km/s}$ 是在万公里远月点变面的成本；C 选项数字与物理逻辑完全吻合讲义 Table 7-V 原文。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
低轨九十度要两千三，比阿波罗动力下降两千一还要贵，荒谬绝伦 $\implies$ 锁定 C！

---

### Q17 (2.5 pt) · 双椭圆环月捕获极限与地球第三体摄动边界 (Bi-elliptic Apolune Limit & Earth $0.93 R_S$ Boundary)
**Stem (题干)**:  
In Route B staged lunar capture, sweeping the capture apolune higher saves propellant: $1,021\text{ km}$ ($1.034\text{ km/s}$), $10,000\text{ km}$ ($0.951\text{ km/s}$), $20,000\text{ km}$ ($0.917\text{ km/s}$), and $60,000\text{ km}$ ($0.883\text{ km/s}$). Why cannot a practical lunar mission push the capture apolune all the way to the theoretical bi-parabolic limit ($r_a \to \infty$, $0.861\text{ km/s}$)?  
在方案 B 的分级环月捕获中，将捕获远月点推得更高可以节省推进剂：1021 km 时为 1.034 km/s，10,000 km 时为 0.951 km/s，20,000 km 时为 0.917 km/s，60,000 km 时为 0.883 km/s。为什么实际探月工程无法将捕获远月点一路推到理论上的双抛物线极限（$r_a \to \infty$, $0.861\text{ km/s}$）？

* A. Because the spacecraft will burn up in lunar atmosphere beyond $20,000\text{ km}$. (因为飞船在超过 20,000 km 后会在月球大气中烧毁。)
* B. Because orbital period explodes (at $60,000\text{ km}$ one orbit takes 6 days), diminishing returns yield only $34\text{ m/s}$ saving for the last $40,000\text{ km}$, and at $0.93 R_S$ the Earth's third-body perturbation severely disrupts the patched-conic assumption, risking trajectory destabilisation or escape. (因为轨道周期暴涨，60,000 km 时单圈耗时达 6 天；边际收益递减，最后 40,000 km 仅换来 34 m/s；且在 0.93 个影响球半径处地球第三体潮汐摄动急剧破坏拼接二体假设，极易导致轨道失稳或脱离月球。)
* C. Because the speed of light delay prevents telemetric radio transmission beyond $10,000\text{ km}$. (因为超过 10,000 km 后光速延迟导致无法进行无线电遥测。)
* D. Because the rocket equation ceases to hold when orbital eccentricity exceeds $0.5$. (因为当偏心率超过 0.5 时火箭方程不再成立。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 7 Slide 17–19: *"What stops you going higher: Time. A 60,000 km apolune is a six-day orbit. Missions have launch windows, lighting constraints and consumables. The Earth: the sphere of influence is a modelling boundary, not a wall. At 60,000 km, 0.93 RS, a patched-conic orbit is no longer a prediction you can plan on. Diminishing returns: the last 40,000 km of apolune buys 34 m/s."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
数学公式可以取极限 $r_a \to \infty$，但工程物理有真实约束：  
1. **时间爆炸**：推到 6 万公里，飞船绕一圈就要 144 小时（整整 6 天！）。载人飞船氧气水粮在狂耗，无人飞船的液氢液氧低温推进剂在剧烈蒸发沸腾（Boil-off），地面测控团队要在轨等候一周；  
2. **地球引力的大棒**：月球影响球半径 $R_S = 66,183\text{ km}$。6 万公里已经是 $0.93 R_S$，飞船几乎骑在地球与月球引力拉扯的刀刃上！影响球是人工假设的分界线，不是一堵物理隔音墙。地球强大的引力摄动会直接把大椭圆扯扁，稍有微扰就可能把飞船甩出月心系重回深空；  
3. **边际递减**：从 2 万推到 6 万，飞了 6 天只抠出 $34\text{ m/s}$，毫无工程性价比。万公里（15小时一圈，省 84 m/s）才是黄金折衷！

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
排除 A、C、D 这类伪科学选项。核心考查对“二体假设破坏”与“工程消耗代价”的辩证理解。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
六天单圈时间长，边际递减三十四，影响球边地球扯 $\implies$ 选 B！

---

### Q18 (2.5 pt) · 月球南极着陆险境与四大现代探测器战果复盘 (South Pole Hazards & Recent Missions)
**Stem (题干)**:  
Selected recent lunar landings exhibit a stark pattern:  
- **Chandrayaan-3** (23 Aug 2023, $69.4^\circ\text{S}$): upright touchdown, rover deployed;  
- **IM-1 Odysseus** (22 Feb 2024, $80.1^\circ\text{S}$): landed on side, broken leg;  
- **SLIM** (20 Jan 2024, $13.3^\circ\text{S}$): landed on its nose $55\text{ m}$ from target after losing an engine nozzle at $50\text{ m}$ altitude;  
- **IM-2 Athena** (6 Mar 2025, $84.8^\circ\text{S}$): furthest south yet, came to rest on its side inside a $20\text{ m}$ crater, battery depleted in 1 day due to permanent shadows.  
What is the primary scientific and engineering explanation for why south pole landings suffer such high failure rates during terminal descent?  
近期人类探月任务呈现出触目惊心的战况：  
- **月船三号**（2023年8月，69.4°S）：直立软着陆，成功部署月球车；  
- **IM-1 俄底修斯**（2024年2月，80.1°S）：折断一条着陆腿，横卧侧翻；  
- **SLIM**（2024年1月，13.3°S）：50米高空主发动机喷管脱落，仍实现距目标仅 55 米超高精度，但倒栽葱着陆；  
- **IM-2 雅典娜**（2025年3月，84.8°S）：人类最南着陆纪录，侧翻于 20 米陨坑内，深阴影无光照导致电池 1 天耗尽。  
为什么月球南极探测器在终末动力下降阶段的折戟率如此之高？其深层科学与工程根因是什么？

* A. The south pole has extreme relativistic frame-dragging effects that disable onboard microprocessors. (南极具有极端的广义相对论参考系拖拽效应，导致机载微处理器瘫痪。)
* B. Solar elevation angles near the pole are permanently below $2^\circ$, creating long sweeping shadows that hide boulders/slopes from optical cameras, degrading terrain-relative navigation (TRN) image matching, and forcing late hazard detection that eats up precious hover propellant at $1.624\text{ m/s}$ per second. (极区太阳入射角终年低于 2°，投射出深邃长阴影遮蔽巨石陡坡，使光学地形匹配相对导航算法严重退化，迫使系统在低空极晚时刻才探测到危险，从而以每秒 1.624 m/s 的惊人代价迅速吃光悬停燃油。)
* C. Heavy lunar polar blizzards freeze and jam the gimbal actuators of descent engines. (猛烈的月球极区暴风雪冻结并卡死了下降发动机的矢量摇摆机构。)
* D. South pole gravity is ten times stronger than equatorial gravity due to lunar mass asymmetry. (由于月球质量不对称，南极重力比赤道重力强十倍。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 8 Slide 52–56: *"The south pole, revisited... Long shadows hide boulders and slopes from cameras, so hazards are detected late. Detecting late means either a hover, which costs 1.624 m/s per second, or a redesignation... The record, read honestly: All four reached the surface; three did not end upright. Terminal descent and touchdown decided the outcome: sensing, guidance and margin, not orbital mechanics."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
月球南极拥有宝贵的水冰，但也给航天工程设下了最险恶的视觉死局：  
月球自转轴近乎垂直黄道面（夹角仅 $1.5^\circ$），所以在南极，太阳几乎始终贴着地平线横着照（高度角 $< 2^\circ$）。任何一块半米高的石头或浅坑，都会在地面拖出几百米长的漆黑死影！  
无人着陆器在下降时主要靠摄像头对月面拍实时照片，和卫星地图比对（Terrain Relative Navigation, TRN）来定位置找平地。可随着月球 29.5 天的自转，阴影在疯狂旋转变形，原本是平地的地方拍出来是黑影，原本的深坑拍出来亮暗反转，算法直接抓瞎！等飞到距离地面仅几十米时，激光雷达才突然发现下方有巨石，此时只能被迫空中悬停或横移逃生——**而悬停每过 1 秒钟就白白烧掉 $1.624\text{ m/s}$ 的珍贵燃油！** 燃油一旦报警，只能强行就地降落，最终落得摔断腿侧翻的结局。

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
月球无大气无天气，绝无“极区暴风雪”（排除 C）；重力在月表各地差异仅在百分之零点几以内，绝无“十倍强”（排除 D）；排除 A 类伪科学科幻选项。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
极区低光照拖出黑影，光学匹配抓瞎，悬停每秒一点六吃光油 $\implies$ 秒选 B！

---

### Q19 (2.5 pt) · 澳大利亚 ELO2 Roo-ver 的质量裕度博弈 (Australia's ELO2 Rover in the Margin)
**Stem (题干)**:  
Australia's "Roo-ver", developed by the ELO2 consortium, is a compact $20\text{ kg}$ lunar rover scheduled to fly aboard Intuitive Machines' Nova-D lander to Mons Malapert near the lunar south pole ($85^\circ\text{S}$) in 2030. In the context of Lecture 8's descent mass budgets, how does the physical mass of Roo-ver relate to the propellant margins of the landing vehicle?  
由澳大利亚 ELO2 联合体研发的“Roo-ver”是一台紧凑型 $20\text{ kg}$ 月球漫游车，计划于 2030 年搭载直觉机器公司的 Nova-D 登月舱飞往月球南极附近的马拉佩特山（$85^\circ\text{S}$）。在第 8 讲动力下降质量账本的语境下，Roo-ver 的物理质量与登月舱的推进剂工程裕度具有怎样的内在数量关系？

* A. Roo-ver's $20\text{ kg}$ mass is thousands of times larger than the lander's total propellant mass. (Roo-ver 的 20 kg 质量比着陆器的总推进剂质量大数千倍。)
* B. Roo-ver exists entirely within the narrow operational margin between descent maneuvers: on a Chandrayaan-3-class lander, executing DOI saves $\sim 52\text{ kg}$ of propellant, whereas just 30 seconds of unplanned hover near the surface burns $\sim 15\text{ kg}$ of fuel. (Roo-ver 完全寄生在下降机动极窄的工程裕度缝隙中：在月船三号级别的着陆器上，执行 DOI 降轨省下约 52 kg 推进剂，而终末段仅仅 30 秒的非计划额外悬停就会烧掉约 15 kg 燃油。)
* C. Roo-ver's wheels are designed to propel the lander through space before lunar touchdown. (Roo-ver 的车轮被设计用来在月球接地前推进整个登月舱在太空飞行。)
* D. Nova-D uses aerodynamic parachutes, so rover mass has no impact on propellant budgets. (Nova-D 采用气动降落伞，因此月球车质量对推进剂预算完全无影响。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 8 Slide 57: *"What this means for ELO2: Australia's rover has a ride... The rover is about 20 kg. Every number in this lecture is a claim on the same lander mass: on a Chandrayaan-3-class vehicle the DOI burn saves about 52 kg of propellant, and thirty seconds of hovering near the surface burns about 15 kg. Roo-ver exists in the margin between numbers like those."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
这是教授全课最精辟的一段系统工程启示：  
澳大利亚国家级骄傲的“Roo-ver”月球车总重只有 20 公斤（大概就相当于两个大西瓜的重量）。这 20 公斤的宝贵科学设备之所以能被运上月球，完全不是因为运载火箭有多么无底洞般的运力，而是**来自于轨道动力学优化在指缝中抠出来的微弱节约**！  
- 如果着陆器聪明地执行了 DOI 降轨，省下来的 $169\text{ m/s}$ 直接给着陆器节省了 **$52\text{ kg}$ 的燃油**，这笔省下来的重量绰绰有余带上一台 20 公斤的 Roo-ver；  
- 反过来，如果着陆器在南极降落时遇到了黑影障碍，在空中多犹豫悬停了区区 **30 秒钟**，就会白白喷掉 **$15\text{ kg}$ 的推进剂**，这几乎直接烧掉了整整一台 Roo-ver 的重量！  
**航天器的有效载荷，永远寄生在动力学算法节约与控制失误流血的狭窄夹缝中！**

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
月球无空气无降落伞（排除 D）；车轮不能太空推进（排除 C）；A 选项数值颠倒（着陆器总重数吨，推进剂几千公斤，20 kg 只是极微小的零头）。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
袋鼠车重二十斤，DOI 省五十，悬停半分烧十五，生存全在裕度间 $\implies$ 锁定 B！

---

### Q20 (2.5 pt) · 全程地月任务推进剂端到端账单与“最后百公里三分之二”铁律 (End-to-End Budget & The 2/3 Rule)
**Stem (题干)**:  
In Week 7 Lecture 8's synthesis of the entire eight-lecture course, an end-to-end propulsion budget is priced for a direct lunar landing mission (from a $320\text{ km}$ Earth LEO parking orbit down to lunar touchdown):  
- Translunar Injection (TLI): $3.256\text{ km/s}$  
- Moon arrival to touchdown:  
  - Lunar Orbit Capture into $1,021 \times 10,000\text{ km}$ ellipse: $0.374\text{ km/s}$  
  - Lower perilune at apolune: $0.062\text{ km/s}$  
  - Circularise at $100\text{ km}$: $0.515\text{ km/s}$  
  - Descent Orbit Insertion (DOI): $0.019\text{ km/s}$  
  - Powered Descent (steered): $1.781\text{ km/s}$  
  - Total from lunar SOI arrival to touchdown: $\mathbf{2.751\text{ km/s}}$  
What profound engineering conclusion does this end-to-end mission ledger establish regarding post-arrival propellant allocation?  
在第 7 周第 8 讲对全课前八讲的终极宏观统揽中，教授给出了一份从地球 320 km LEO 停泊轨道出发至月面软着陆的端到端推进账单：  
- 地月注入（TLI）：$3.256\text{ km/s}$  
- 月球到达至接地全阶段：  
  - 捕获进入 $1,021 \times 10,000\text{ km}$ 椭圆：$0.374\text{ km/s}$  
  - 远心点降近月点：$0.062\text{ km/s}$  
  - 100 km 轨道圆化：$0.515\text{ km/s}$  
  - 动力下降轨道切入（DOI）：$0.019\text{ km/s}$  
  - 动力下降主减速制动：$1.781\text{ km/s}$  
  - 到达月球后至着陆总计：$\mathbf{2.751\text{ km/s}}$  
这一端到端账本对于飞船到达月球后的推进剂消耗分布，揭示了哪一项至关重要的系统工程结论？

* A. The vast majority of propellant is spent during the three-day translunar coast, while descent costs practically nothing. (绝大部分推进剂消耗在三天的地月滑行期间，而下降几乎不耗油。)
* B. Fully two-thirds ($1.800\text{ km/s}$ out of $2.751\text{ km/s}$) of everything spent after arriving at the Moon is consumed in the final $100\text{ km}$ down to the surface. (到达月球后消耗的全部 $2.751\text{ km/s}$ 速度增量中，有整整三分之二（$1.800\text{ km/s}$）集中消耗在最后短短 100 公里的下降着陆过程中。)
* C. Lunar capture into elliptical orbit costs more than the entire powered descent. (进入椭圆轨道的环月捕获成本超过了全程动力下降。)
* D. Plane changes around the Moon dominate $90\%$ of the post-arrival propellant ledger. (环月轨道面改变占据了到达后推进账本的 $90\%$。)

**Answer (正确答案)**: **B**

**📖 教材与讲义双轨出处 (Citations)**:  
Week 7 Lecture 8 Slide 58: *"Course synthesis: the chain, priced end to end... translunar injection 3.256 km/s... Moon arrival to touchdown: 2.751 km/s. Two thirds of everything spent after arrival is spent in the last hundred kilometres."*

**💡 零基础物理直觉与核心机理 (Zero-Base Physical Intuition)**:  
把数字放在一起核算，会得出极其惊心动魄的物理结论：  
飞船跨越了整整 384,400 公里的辽阔深空，从捕获到圆化进入 100 公里极轨，一共才花掉了：
$$\Delta v_{\text{orbit}} = 0.374 + 0.062 + 0.515 = 0.951\text{ km/s}$$
而从 100 公里圆轨道扎向月表这短短 100 公里的一段路，DOI 加上动力下降减速制动，却死死烧掉了：
$$\Delta v_{\text{descent}} = 0.019 + 1.781 = \mathbf{1.800\text{ km/s}}$$
计算占比：
$$\frac{1.800}{2.751} = \mathbf{65.4\%} \approx \frac{2}{3}$$
**到达月球之后的全部推进剂中，有足足三分之二死死交代在了最后一百公里！** 这就是为什么登月工程最艰难、伤亡风险最高、也是工程师最寝食难安的瓶颈，永远是这“最后的一百公里”（The Last Hundred Kilometres）。

**⚠️ 教授命题陷阱深度剖析 (Professor's Exam Traps)**:  
深空滑行是无动力的，不耗燃料（排除 A）；捕获仅花 $0.374\text{ km/s}$，远小于动力下降的 $1.781\text{ km/s}$（排除 C）；入极轨是靠中途瞄准免费达成的，账单中甚至无需安排变面行（排除 D）。

**⚡ 1 秒速杀应试之眼 (1-Second Exam Eye)**:  
到月总账两千七，百里之内占三分二，动力下降是巨头 $\implies$ 闭眼秒杀 B！

---

## 🏆 试卷满分复盘与终极应试心法 (Final Synthesis)

```
========================================================================================
                      AERO3760 第七周考点极速秒杀心法矩阵
========================================================================================
【机动法则】: "动对向拱点，留当前拱点" —— 近月刹车降远月，远月刹车降近月。
【捕获经济】: Route B 大椭圆捕获 + 万公里远月点调姿，借双椭圆省 83.6 m/s。
【变面铁律】: 变面代价与航速线性正比；低轨九十度变面两千三，贵过阿波罗动力下降！
【目标轨道】: 目标倾角靠深空 v_∞ 铰链大门瞄准，进月极轨完全"免费"！
【等待时钟】: 月转每天十三度；极轨共面窗口每半月（13.66天）对称一遇。
【极轨真相】: 极轨消除 J2 一阶退行，但绝非冻结轨道；LRO 每年仍需百五维持防撞月。
【降轨杠杆】: DOI 花 19.5 m/s 压到 15 km，利用开普勒滑行净赚 169 m/s 减速红利！
【黄金高度】: 15 km 是重力损失与撞山地形净空的黄金折衷，低于 15 km 仅省 7 米油。
【制动账本】: 基准航速 1.692 km/s，Rocket Eq 锁死质量比 1.76；滑翔四百里平缓减速。
【损失拆解】: 超出基准 89 m/s = 重力损失（买时间） + 转向损失（偏夹角）。
【推重比坑】: T/W 超过 2~3 后边际收益彻底走平，发动机死重压垮微量省油。
【高门哲学】: 接近段高门故意抬头浪费推进剂，是用燃料换视野与安全的系统决策。
【悬停流血】: 月表悬停每秒严格耗费 1.624 m/s 速度增量；三十秒悬停吃掉一台火星车！
【三十秒谜】: 阿波罗 30 秒警告是中止决断时钟，非油箱抽干熄火。
【南极险境】: 低太阳入射角拖出深黑长影，欺骗光学导航算法，逼出高危悬停。
【任务大统】: 飞跃三十八万公里到月球，三分之二推进剂交代在最后短短一百公里！
========================================================================================
```
