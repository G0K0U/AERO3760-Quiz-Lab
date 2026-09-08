// Regenerates docs/ (GitHub Pages static version) from app/QuizLabV2.tsx and app/QuizLabEn.tsx
// so the React app and the static site share one single source of truth.
// Usage: node scripts/sync-docs.mjs
import { readFileSync, writeFileSync } from "node:fs";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function extractArray(src, name) {
  const decl = src.indexOf(`const ${name}`);
  if (decl === -1) throw new Error(`cannot find ${name}`);
  const eq = src.indexOf("=", decl);
  const start = src.indexOf("[", eq);
  const end = src.indexOf("\n];", start);
  if (end === -1) throw new Error(`cannot find end of ${name}`);
  const literal = src.slice(start, end + 2);
  return new Function(`return ${literal}`)();
}

function load(file) {
  const src = readFileSync(file, "utf8");
  return {
    questions: extractArray(src, "questions"),
    lessons: extractArray(src, "lessons"),
    glossary: extractArray(src, "glossary"),
    memoryCards: extractArray(src, "memoryCards"),
    formulas: extractArray(src, "formulas"),
  };
}

const cn = load("app/QuizLabV2.tsx");
const en = load("app/QuizLabEn.tsx");

// ---------- quiz-*.js ----------
function quizJs(lang, questions) {
  const lines = questions.map((q) => "    " + JSON.stringify(q)).join(",\n");
  return `\ufeffwindow.QUIZ_DATA = {\n  lang: "${lang}",\n  questions: [\n${lines}\n  ]\n};\n`;
}
writeFileSync("docs/quiz-cn.js", quizJs("cn", cn.questions));
writeFileSync("docs/quiz-en.js", quizJs("en", en.questions));

// ---------- HTML block builders ----------
function lessonBlock(L, t) {
  const formulas = L.formulas && L.formulas.length
    ? `<div class="lesson-formulas"><span>${t.formulasSpan}</span>${L.formulas
        .map((f) => `<article><code>${esc(f.eq)}</code><p>${esc(f.note)}</p></article>`)
        .join("")}</div>`
    : "";
  return (
    `<details class="lesson-module "><summary><span class="lesson-number">${String(L.no).padStart(2, "0")}</span>` +
    `<div><small>${esc(L.phase)}</small><h3>${esc(L.title)}</h3><p>${esc(L.goal)}</p></div>` +
    `<b class="lesson-status">${t.expand}</b></summary><div class="lesson-content">` +
    `<div class="plain-language"><span>${t.plainSpan}</span>${L.plain.map((p) => `<p>${esc(p)}</p>`).join("")}</div>` +
    formulas +
    `<div class="lesson-terms"><span>${t.termsSpan}</span><div>${L.terms
      .map(([term, meaning]) => `<article><code>${esc(term)}</code><p>${esc(meaning)}</p></article>`)
      .join("")}</div></div>` +
    `<div class="worked-example"><span>${t.exampleSpan}</span><p>${esc(L.example)}</p></div>` +
    `<details class="checkpoint"><summary>${t.answerFirst}<!-- -->${esc(L.check.q)}</summary><p>${esc(L.check.a)}</p></details>` +
    `<button class="lesson-complete ">${t.mark}</button></div></details>`
  );
}

const cnDecisions = [
  ["01", "出现 <b>mass / propellant / Isp</b>", "→ Rocket equation"],
  ["02", "出现 <b>two circular coplanar orbits</b>", "→ Hohmann"],
  ["03", "轨道正确，但 <b>timing / phase</b> 错", "→ Phasing"],
  ["04", "burn 不在 apsis，速度方向改变", "→ Vector Δv"],
  ["05", "两条拱线方向不同", "→ Intersection / apse rotation"],
  ["06", "<b>Two positions + fixed time</b>", "→ Lambert chase"],
  ["07", "需要<b>改变轨道平面</b>", "→ 交线点 + apoapsis + combined burn"],
  ["08", "出现 <b>launch site / azimuth</b>", "→ cos i = cos φ sin A"],
  ["09", "推力持续<b>数周或数月</b>", "→ 低推力螺旋 Eq 6.39"],
  ["10", "<b>Earth → Moon</b> 转移", "→ Patched conic：地心椭圆 + 月心双曲线 @ RS"],
  ["11", "要求<b>更短飞行时间</b>去月球", "→ 提高注入速度；到达端方向溢价"],
  ["12", "出现 <b>sphere of influence</b>", "→ 换中心天体；rSOI = R(m/M)^(2/5)"],
  ["13", "涉及 <b>TLI 几何或张角 Δθ</b>", "→ cos Δθ = û_{r0} · û_{r1} + Curtis 9.18 闭式 h₁"],
  ["14", "跨越<b>月球影响球边界</b>", "→ v₂ = v₁ − vm；v₂ &gt; v_∞；ε₂ &gt; 0 双曲线"],
  ["15", "飞越求<b>减速还是加速</b>", "→ Leading side 刹车回地球；Trailing side 加速逃逸"],
  ["16", "考察<b>阿波罗自由返回</b>", "→ Leading side 逆行绕飞 + 8 字形无动力回国"],
  ["17", "出现<b>月球真实倾角范围</b>", "→ 23.44° ± 5.14°（18.3°–28.6°）@ 18.6 年周期"],
  ["18", "<b>3D 拼接锥面求交</b>", "→ 注意 ±b̂ 双根陷阱，挑错根直接撞月"],
  ["19", "<b>两体拼接 vs 三体数值</b>", "→ 拼接 1021 km 坠落到真三体 392 km，必须备 TCM"],
  ["20", "<b>低月轨道不稳定</b>", "→ 质量瘤激化偏心率；选 27°/50°/76°/86° 冻结倾角"],
  ["21", "<b>月球中继轨道选择</b>", "→ 南极 76% 逗留选 ELFO；常年对地无日海选 9:2 NRHO"],
];

const enDecisions = [
  ["01", "Sees <b>mass / propellant / Isp</b>", "→ Rocket equation"],
  ["02", "Sees <b>two circular coplanar orbits</b>", "→ Hohmann"],
  ["03", "Right orbit but <b>wrong timing / phase</b>", "→ Phasing"],
  ["04", "Burn is not at an apsis, direction changes", "→ Vector Δv"],
  ["05", "Two different apse lines", "→ Intersection / apse rotation"],
  ["06", "<b>Two positions + fixed time</b>", "→ Lambert chase"],
  ["07", "The <b>orbit plane</b> must change", "→ Intersection line + apoapsis + combined burn"],
  ["08", "Sees <b>launch site / azimuth</b>", "→ cos i = cos φ sin A"],
  ["09", "Thrust lasts <b>weeks or months</b>", "→ Low-thrust spiral, Eq. 6.39"],
  ["10", "<b>Earth → Moon</b> transfer", "→ Patched conic: geocentric ellipse + selenocentric hyperbola @ RS"],
  ["11", "Demands a <b>shorter flight time</b> to the Moon", "→ Raise injection speed; direction premium at arrival"],
  ["12", "Sees <b>sphere of influence</b>", "→ Switch central body; rSOI = R(m/M)^(2/5)"],
  ["13", "Sees <b>TLI geometry or sweep angle Δθ</b>", "→ cos Δθ = û_{r0} · û_{r1} + Curtis 9.18 closed-form h₁"],
  ["14", "Crossing the <b>lunar SOI boundary</b>", "→ v₂ = v₁ − vm; v₂ &gt; v_∞; ε₂ &gt; 0 hyperbola"],
  ["15", "Flyby asks <b>brake or boost</b>", "→ Leading side brakes toward Earth; trailing side boosts"],
  ["16", "Inspects <b>Apollo free return</b>", "→ Leading side retrograde pass + figure-8 unpowered return"],
  ["17", "Sees <b>real Moon inclination range</b>", "→ 23.44° ± 5.14° (18.3°–28.6°) @ 18.6-yr cycle"],
  ["18", "<b>3D patched conic cone-plane roots</b>", "→ Beware ±b̂ double roots; wrong root crashes into Moon"],
  ["19", "<b>Patched conic vs 3-body truth</b>", "→ Nominal 1021 km drops to true 392 km; TCMs mandatory"],
  ["20", "<b>Low lunar orbit instability</b>", "→ Mascons pump eccentricity; use 27°/50°/76°/86° frozen inclinations"],
  ["21", "<b>Lunar relay orbit selection</b>", "→ South pole 76% dwell: ELFO; continuous Earth link: 9:2 NRHO"],
];

const cnTraps = [
  ["减速不等于长期落后：", "retrograde 进入低轨后，周期更短，反而逐圈追上前方目标。"],
  ["speed 不变不等于 Δv 为零：", "旋转速度向量仍需推进剂。"],
  ["Hohmann 第二次 burn 不能省：", "它负责 circularise。"],
  ["拆成多次 burn 不自动省 Δv：", "同一 burn point 的理想增量会 telescoping。"],
  ["高 Isp 不等于高 thrust：", "推进剂效率与加速快慢是两件事。"],
  ["高度不是半径：", "地球题必须先用 r = Rₑ + altitude。"],
  ["SOI 上不是引力平衡：", "边界处地球仍比月球强约 3.5 倍；SOI 是建模边界，那里什么都没发生。"],
  ["去月球不需要逃逸速度：", "地心段是椭圆；只有月心看到的到达段才是双曲线。"],
  ["远地点匹配 burn 不是 LOI：", "0.830 km/s 只是地心速度匹配，月球引力还没进模型。"],
  ["二面角 ≠ 倾角相加：", "δ 用球面三角公式算；25° 与 11.8° 之差可以对应 24° 的二面角。"],
  ["平面改变不要拆两步：", "combine, don't sequence；并且永远挑 apoapsis。"],
  ["注入速度的小数点决定一切：", "110 m/s 覆盖整条椭圆阶梯；三位有效数字圆整就差 3,400 km。"],
  ["影响球上无跳变：", "v₂ = v₁ − vm 仅是参考系变换，船上加速度计毫无读数变化。"],
  ["边界速度不等于 v_∞：", "RS 是有限距离，当地速度 v₂ 严格大于渐近速度 v_∞。"],
  ["飞越不等于加速：", "只有 trailing side 飞越才加速；leading side 飞越是给航天器相对地心刹车。"],
  ["Simpson 拟合有保质期：", "仅在 2000–2100 世纪有效，阿波罗时代（1968–72）严禁使用。"],
  ["3D 几何有两个根：", "±b̂ 在数学上都成立，但其中一个解会让近月点潜入地底撞毁。"],
  ["标称自由返回不会自然回家：", "两体拼接的 1021 km 近月点在全域三体下会变成 392 km，返程会撞地（−288 km）。"],
  ["低月轨道不能随便停：", "月球质量瘤会导致轨道迅速失稳撞月，只有 4 个冻结倾角安全。"],
  ["L1 和 L2 不是停车位：", "共线拉格朗日点是鞍点（不稳定平衡），必须持续微量定轨站位。"],
];

const enTraps = [
  ["Slowing down does not mean long-term lag:", "retrograde puts you in a lower orbit with a shorter period, so you catch up lap by lap."],
  ["Same speed does not mean zero Δv:", "rotating the velocity vector still uses propellant."],
  ["The second Hohmann burn cannot be skipped:", "it circularises."],
  ["Splitting a burn does not automatically save Δv:", "ideal increments at the same burn point telescope."],
  ["High Isp does not mean high thrust:", "propellant efficiency and acceleration are different things."],
  ["Altitude is not radius:", "Earth problems must first use r = Rₑ + altitude."],
  ["The SOI is not a gravity balance:", "Earth still pulls ≈3.5× harder at the boundary; it is a modelling surface where nothing happens."],
  ["Going to the Moon needs no escape speed:", "the geocentric leg is an ellipse; only the Moon-centred arrival leg is a hyperbola."],
  ["The apogee matching burn is not LOI:", "0.830 km/s only matches geocentric speed; lunar gravity is not yet modelled."],
  ["Dihedral angle ≠ inclinations added:", "δ comes from the spherical-trig formula; 25° and 11.8° of element differences can correspond to a 24° dihedral angle."],
  ["Never sequence a plane change:", "combine, don't sequence — and always at apoapsis."],
  ["Decimal places of injection speed decide everything:", "110 m/s spans the whole bound ladder; three-figure rounding misses by 3,400 km."],
  ["No jump at the SOI:", "v₂ = v₁ − vm is purely a frame transformation; onboard accelerometers record smooth, continuous free-fall."],
  ["Boundary speed ≠ v_∞:", "RS is a finite distance (66,183 km), so boundary speed v₂ is strictly greater than asymptotic excess speed v_∞."],
  ["Flybys don't always accelerate:", "only a trailing-side flyby boosts geocentric energy; a leading-side flyby decelerates the craft toward Earth."],
  ["Simpson's fit expires:", "it is valid only for CE 2000–2100; using it for Apollo-era analysis (1968–1972) produces incorrect lunar geometry."],
  ["3D geometry yields two roots:", "±b̂ are both mathematically valid, but one root points into the Moon's interior and causes a fatal crash."],
  ["Nominal free-return fails naturally:", "a 1021 km patched-conic perilune drops to 392 km in true 3-body dynamics, and Earth return perigee dives 288 km underground."],
  ["LLO is fundamentally unstable:", "lunar mascons rapidly pump eccentricity to surface impact; only 4 frozen inclinations (27°, 50°, 76°, 86°) survive."],
  ["L1 and L2 are not parking spots:", "collinear Lagrange points are unstable saddle points requiring continuous station-keeping."],
];

const T = {
  cn: {
    plainSpan: "先用人话理解",
    formulasSpan: "本课核心公式",
    termsSpan: "变量与关键词",
    exampleSpan: "例子",
    answerFirst: "先自己回答：",
    expand: "展开学习 ＋",
    mark: "标记为已学会",
    chip: "目标 · WK8 QUIZ",
    eyebrow: " ZERO-BASE LEARNING PATH · LECTURES 1–6 · WEEK 8 QUIZ",
    heroCopy:
      "不假设你记得 Space 1。从“位置、速度和轨道是什么”开始，经轨道机动、平面改变与地月转移，一路讲到月球到达双曲线、自由返回、三体摄动与冻结轨道。题库已扩到 60 题，模拟考试随机抽 20 题。",
    scope:
      '<section class="scope-strip"><strong>Wk8 Quiz 覆盖：</strong><span>Wk1–3 · 机动基础</span><span>Wk3 L4 · 平面改变 + 发射 + 螺旋</span><span>Wk4 · 地月转移 + SOI</span><span>Wk5 · 到达双曲线 + 飞越 + 自由返回</span><span>Wk6 · 受限三体 + 冻结轨道 + 南极着陆</span><small>完整覆盖 Lectures 1–6 讲义与 Curtis 8–9 章</small></section>',
    courseHeading:
      '<div class="section-heading course-heading"><p>BEGINNER COURSE / 24 LESSONS</p><h2>按顺序学，不需要任何轨道力学基础</h2><span>每课约 8–12 分钟。先读“人话解释”，再看公式；完成后勾选，进度会保存在这台设备。18–23 课对应 Week 5–6 月球深入内容。</span></div>',
    learningProgress:
      '<div class="learning-progress" aria-label="已完成 0 / 24 课"><div><strong>0<!-- --> / <!-- -->24</strong><span>课程完成</span></div><div class="learning-progress-track"><i style="width:0%"></i></div><b>0<!-- -->%</b></div>',
    roadmap:
      '<div class="roadmap" aria-label="学习路线">' +
      '<article><span>STAGE 1 · 00–03</span><b>先懂轨道</b><p>公式语言 → 自由落体 → 椭圆 → 能量与周期</p></article>' +
      '<article><span>STAGE 2 · 04–08</span><b>再懂机动</b><p>点火 → 燃料 → Hohmann → 替代方案 → Phasing</p></article>' +
      '<article><span>STAGE 3 · 09–10</span><b>最后处理方向</b><p>向量 Δv → 拱线旋转 → Lambert chase</p></article>' +
      '<article><span>STAGE 4 · 11–13</span><b>平面与推力</b><p>平面改变 → 发射方位角 → 有限 burn 与电推进螺旋</p></article>' +
      '<article><span>STAGE 5 · 14–17</span><b>去月球</b><p>地月 Hohmann → 注入阶梯 → 影响球 → 任务案例</p></article>' +
      '<article><span>STAGE 6 · 18–23</span><b>深入月球</b><p>到达双曲线 → 近月飞越 → 自由返回 → 三体摄动与冻结轨道</p></article>' +
      '</div>',
    trapsHeading: "最容易被选项骗走的二十句话",
    quizLaunch:
      '<div class="quiz-launch"><p>FINAL STEP / QUIZ ENGINE · 60 QUESTIONS</p><h2>现在把理解变成分数</h2><div class="mode-grid"><button data-act="practice"><span>TRAIN</span><b>训练模式 · 全部 60 题</b><small>逐题即时解析 · 不计时</small></button><button data-act="new"><span>NEW</span><b>只练新内容 · Week 5+6 新考点</b><small>地月拼接、三体与月球轨道 20 题</small></button><button data-act="exam"><span>SIMULATE</span><b>30 分钟模拟</b><small>60 题随机抽 20 · 提交后统一解析</small></button></div></div>',
    footer:
      '<footer><div><b>AERO3760</b><span>Lectures 1–6 · Orbit Manoeuvres + Lunar Trajectories · 备战 Week 8 Quiz</span></div><p>考前速成 · 专为零基础设计</p></footer>',
    metaDesc:
      "AERO3760 Space Engineering 2 Lectures 1–6：轨道机动、平面改变、地月转移与影响球、受限三体与环月冻结轨道，60 题随机模拟，备战 Week 8 Quiz。",
    decisions: cnDecisions,
    traps: cnTraps,
  },
  en: {
    plainSpan: "Plain language first",
    formulasSpan: "Key formulas",
    termsSpan: "Variables &amp; keywords",
    exampleSpan: "Example",
    answerFirst: "Answer first: ",
    expand: "Expand ＋",
    mark: "Mark as learned",
    chip: "TARGET · WK8 QUIZ",
    eyebrow: " ZERO-BASE LEARNING PATH · LECTURES 1–6 · WEEK 8 QUIZ",
    heroCopy:
      "No Space 1 background assumed. Start from what position, velocity and an orbit actually are, pass through manoeuvres, plane changes, lunar transfers, arrival hyperbolas, free returns, restricted three-body dynamics and frozen orbits. The bank now holds 60 questions; every simulation samples 20 at random.",
    scope:
      '<section class="scope-strip"><strong>Wk8 quiz coverage:</strong><span>Wk1–3 · manoeuvre basics</span><span>Wk3 L4 · plane change + launch + spiral</span><span>Wk4 · lunar transfer + SOI</span><span>Wk5 · arrival hyperbola + flyby + free return</span><span>Wk6 · restricted 3-body + frozen orbits + south pole</span><small>Complete coverage of Lectures 1–6 and Curtis Chapters 8 &amp; 9</small></section>',
    courseHeading:
      '<div class="section-heading course-heading"><p>BEGINNER COURSE / 24 LESSONS</p><h2>Learn from scratch with zero orbital mechanics background</h2><span>Each lesson takes about 8–12 minutes. Read the plain explanation first, then the formulas. Tick each lesson when done; progress is saved on this device. Lessons 18–23 cover Week 5–6 lunar deep dive.</span></div>',
    learningProgress:
      '<div class="learning-progress" aria-label="0 of 24 lessons completed"><div><strong>0<!-- --> / <!-- -->24</strong><span>course complete</span></div><div class="learning-progress-track"><i style="width:0%"></i></div><b>0<!-- -->%</b></div>',
    roadmap:
      '<div class="roadmap" aria-label="Learning roadmap">' +
      '<article><span>STAGE 1 · 00–03</span><b>Understand orbits</b><p>Formula notation → free fall → ellipses → energy &amp; period</p></article>' +
      '<article><span>STAGE 2 · 04–08</span><b>Master manoeuvres</b><p>Burn basics → rocket equation → Hohmann → bi-elliptic → phasing</p></article>' +
      '<article><span>STAGE 3 · 09–10</span><b>Vector direction</b><p>Vector Δv → apse line rotation → Lambert rendezvous</p></article>' +
      '<article><span>STAGE 4 · 11–13</span><b>Planes &amp; thrust</b><p>Plane change → launch azimuth → finite burn &amp; electric spiral</p></article>' +
      '<article><span>STAGE 5 · 14–17</span><b>To the Moon</b><p>Lunar Hohmann → injection ladder → SOI → mission cases</p></article>' +
      '<article><span>STAGE 6 · 18–23</span><b>Lunar Deep Dive</b><p>Arrival hyperbola → perilune flyby → free return → 3-body &amp; frozen orbits</p></article>' +
      '</div>',
    trapsHeading: "The twenty sentences most likely to trick you",
    quizLaunch:
      '<div class="quiz-launch"><p>FINAL STEP / QUIZ ENGINE · 60 QUESTIONS</p><h2>Turn understanding into marks</h2><div class="mode-grid"><button data-act="practice"><span>TRAIN</span><b>Practice · all 60 questions</b><small>Instant feedback per question · no timer</small></button><button data-act="new"><span>NEW</span><b>New material only · Wk 5+6</b><small>Patched conics, 3-body &amp; orbits (20 Qs)</small></button><button data-act="exam"><span>SIMULATE</span><b>30-minute simulation</b><small>20 sampled from 60 · review after submit</small></button></div></div>',
    footer:
      '<footer><div><b>AERO3760</b><span>Lectures 1–6 · Orbit Manoeuvres + Lunar Trajectories · Preparing for the Week 8 Quiz</span></div><p>Exam prep · Designed for zero-base learners</p></footer>',
    metaDesc:
      "AERO3760 Space Engineering 2 Lectures 1–6: manoeuvres, plane changes, lunar transfers, restricted 3-body problem and frozen lunar orbits. 60-question practice targeting the Week 8 quiz.",
    decisions: enDecisions,
    traps: enTraps,
  },
};

function updateHtml(file, data, t, isCn) {
  let s = readFileSync(file, "utf8");

  // Head tags
  s = s.replace(/<title>[^<]*<\/title>/, `<title>${isCn ? "AERO3760 Quiz Lab · 从零学习 · Week 8 Quiz" : "AERO3760 Quiz Lab · From Zero to the Week 8 Quiz"}</title>`);
  s = s.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${t.metaDesc}">`);

  // Topbar & Hero
  s = s.replace(/<div class="exam-chip">.*?<\/div>/, `<div class="exam-chip">${t.chip}</div>`);
  s = s.replace(/<div class="eyebrow">.*?<\/div>/, `<div class="eyebrow"><span></span>${t.eyebrow}</div>`);
  s = s.replace(/<p class="hero-copy">.*?<\/p>/, `<p class="hero-copy">${esc(t.heroCopy)}</p>`);
  s = s.replace(/<section class="scope-strip">.*?<\/section>/, t.scope);

  // Course header & progress & roadmap
  s = s.replace(/<div class="section-heading course-heading">.*?<\/div>/s, t.courseHeading);
  s = s.replace(/<div class="learning-progress".*?<\/div>(?=\s*<div class="roadmap")/s, t.learningProgress);
  s = s.replace(/<div class="roadmap".*?<\/div>(?=\s*<div class="lesson-stack")/s, t.roadmap);

  // Lesson stack: render all lessons cleanly
  const lessonsHtml = data.lessons.map((L) => lessonBlock(L, t)).join("");
  s = s.replace(/<div class="lesson-stack">.*?<\/details><\/div>/s, `<div class="lesson-stack">${lessonsHtml}</div>`);

  // Glossary grid: render all glossary items
  const glossaryHtml = data.glossary
    .map(([sym, meaning, unit]) => `<article><code>${esc(sym)}</code><p>${esc(meaning)}</p><span>${esc(unit)}</span></article>`)
    .join("");
  s = s.replace(/<div class="glossary-grid">.*?<\/article><\/div>/s, `<div class="glossary-grid">${glossaryHtml}</div>`);

  // Memory cards: render all memory cards
  const memoryHtml = data.memoryCards
    .map(
      (c) =>
        `<details class="memory-card"><summary><span>${c.no}</span><div><h3>${esc(c.title)}</h3><p>${esc(c.cue)}</p></div><b>＋</b></summary><div class="memory-body"><p>${esc(c.body)}</p><strong>${esc(c.key)}</strong></div></details>`
    )
    .join("");
  s = s.replace(/<div class="memory-grid">.*?<\/details><\/div>/s, `<div class="memory-grid">${memoryHtml}</div>`);

  // Formulas list: render all formula rows
  const formulaHtml = data.formulas
    .map(
      (f, i) =>
        `<article class="formula-row"><span>F${i + 1}</span><div><h3>${esc(f.name)}</h3><p>${esc(f.use)}</p></div><code>${esc(f.eq)}</code><small>${esc(f.vars)}</small></article>`
    )
    .join("");
  s = s.replace(/<div class="formula-list">.*?<\/article><\/div>/s, `<div class="formula-list">${formulaHtml}</div>`);

  // Decision grid: render all 21 items
  const decisionHtml = t.decisions
    .map(([n, p, a]) => `<div><span>${n}</span><p>${p}</p><strong>${a}</strong></div>`)
    .join("");
  s = s.replace(/<div class="decision-grid">.*?<\/div>(?=\s*<\/section>)/s, `<div class="decision-grid">${decisionHtml}</div>`);

  // Traps: render all 20 traps
  const trapHtml = t.traps.map(([b, rest]) => `<li><b>${b}</b>${rest}</li>`).join("");
  const trapsSection = `<section class="traps section"><div class="section-heading"><p>EXAM SKILL / TRAP BOARD</p><h2>${t.trapsHeading}</h2></div><ol>${trapHtml}</ol></section>`;
  s = s.replace(/<section class="traps section">.*?<\/ol><\/section>/s, trapsSection);

  // Quiz launch
  s = s.replace(/<div class="quiz-launch">.*?<\/div>(?=\s*<p class="honor-note")/s, t.quizLaunch);

  // Footer
  s = s.replace(/<footer>.*?<\/footer>/s, t.footer);

  // Cache bust script tag
  s = s.replace(/src="(quiz-(?:cn|en)\.js|app\.js)(?:\?v=[^"]*)?"/g, 'src="$1?v=wk6"');

  writeFileSync(file, s);
}

updateHtml("docs/index.html", cn, T.cn, true);
updateHtml("docs/en.html", en, T.en, false);

// ---------- docs/app.js ----------
function patchAppJs() {
  let s = readFileSync("docs/app.js", "utf8").replace(/\r\n/g, "\n");

  // Ensure simulation / new labels show updated 60 questions and Wk5-6 scope
  s = s.replace(
    /simSub:\s*CN\s*\?\s*"[^"]*"\s*:\s*"[^"]*",\s*newOnly:\s*CN\s*\?\s*"[^"]*"\s*:\s*"[^"]*",\s*newSub:\s*CN\s*\?\s*"[^"]*"\s*:\s*"[^"]*"/,
    `simSub: CN ? "60 题随机抽 20 · 提交后统一解析" : "20 sampled from 60 · review after submit",
    newOnly: CN ? "只练新内容 · Week 5+6 新考点" : "New material only · Wk 5+6",
    newSub: CN ? "地月拼接、三体与月球轨道 20 题" : "Patched conics, 3-body & orbits (20 Qs)"`
  );

  // Ensure filter is for the latest 20 questions (q.id > 40)
  s = s.replace(/pool\s*=\s*QUESTIONS\.filter\(function\s*\(q\)\s*\{\s*return\s*q\.id\s*>\s*\d+;\s*\}\);/, "pool = QUESTIONS.filter(function (q) { return q.id > 40; });");

  // Ensure EXAM_SIZE is 20
  if (!s.includes("const EXAM_SIZE = 20;")) {
    s = s.replace("const EXAM_SIZE = 20;", "const EXAM_SIZE = 20;");
  }

  writeFileSync("docs/app.js", s);
  console.log("docs/app.js updated successfully!");
}

patchAppJs();
console.log("docs/ synced:", cn.questions.length, "CN questions,", en.questions.length, "EN questions,", cn.lessons.length, "lessons,", cn.formulas.length, "formulas,", cn.memoryCards.length, "cards");
