// Regenerates docs/ (GitHub Pages static version) from app/QuizLabV2.tsx and app/QuizLabEn.tsx
// so the React app and the static site share one source of truth.
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
      "不假设你记得 Space 1。从“位置、速度和轨道是什么”开始，经轨道机动与平面改变，一路讲到地月转移与影响球。题库已扩到 40 题，模拟考试随机抽 20 题。",
    scope:
      '<section class="scope-strip"><strong>Wk8 Quiz 覆盖：</strong><span>Wk1–3 · 机动基础</span><span>Wk3 L4 · 平面改变 + 发射 + 螺旋</span><span>Wk4 · 地月转移 + SOI</span><small>Wk5+ 讲义发布后继续更新：LOI · powered descent · terramechanics</small></section>',
    courseNote:
      "每课约 8–12 分钟。先读“人话解释”，再看公式；完成后勾选，进度会保存在这台设备。11–13 课对应 Week 3 Lecture 4，14–17 课对应 Week 4 月球轨迹。",
    roadmap:
      '<article><span>STAGE 4 · 11–13</span><b>平面与推力</b><p>平面改变 → 发射方位角 → 有限 burn 与电推进螺旋</p></article><article><span>STAGE 5 · 14–17</span><b>去月球</b><p>地月 Hohmann → 注入阶梯 → 影响球 → 任务案例</p></article>',
    trapsTitle: "最容易被选项骗走的十二句话",
    quizLaunch:
      '<p>FINAL STEP / QUIZ ENGINE · 40 QUESTIONS</p><h2>现在把理解变成分数</h2><div class="mode-grid"><button><span>TRAIN</span><b>训练模式 · 全部 40 题</b><small>逐题即时解析 · 不计时</small></button><button><span>NEW</span><b>只练新内容 · 平面改变 + 月球</b><small>Week 3 L4 + Week 4 的 20 题</small></button><button><span>SIMULATE</span><b>30 分钟模拟</b><small>40 题随机抽 20 · 提交后统一解析</small></button></div>',
    footer: "Lectures 1–6 · Orbit Manoeuvres + Lunar Trajectories · 备战 Week 8 Quiz",
    metaDesc: "AERO3760 Space Engineering 2 Lectures 1–6：轨道机动、平面改变、地月转移与影响球，40 题随机模拟，备战 Week 8 Quiz。",
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
      "No Space 1 background assumed. Start from what position, velocity and an orbit actually are, pass through manoeuvres and plane changes, and finish at Earth–Moon transfers and spheres of influence. The bank now holds 40 questions; every simulation samples 20 at random.",
    scope:
      '<section class="scope-strip"><strong>Wk8 quiz coverage:</strong><span>Wk1–3 · manoeuvre basics</span><span>Wk3 L4 · plane change + launch + spiral</span><span>Wk4 · lunar transfer + SOI</span><small>More to come when Wk5+ decks drop: LOI · powered descent · terramechanics</small></section>',
    courseNote:
      "Each lesson takes about 8–12 minutes. Read the plain explanation first, then the formulas. Tick each lesson when done; progress is saved on this device. Lessons 11–13 cover Week 3 Lecture 4; lessons 14–17 cover Week 4 lunar trajectories.",
    roadmap:
      '<article><span>STAGE 4 · 11–13</span><b>Planes &amp; thrust</b><p>Plane change → launch azimuth → finite burn &amp; electric spiral</p></article><article><span>STAGE 5 · 14–17</span><b>To the Moon</b><p>Lunar Hohmann → injection ladder → SOI → mission cases</p></article>',
    trapsTitle: "The twelve sentences most likely to trick you",
    quizLaunch:
      '<p>FINAL STEP / QUIZ ENGINE · 40 QUESTIONS</p><h2>Turn understanding into marks</h2><div class="mode-grid"><button><span>TRAIN</span><b>Practice · all 40 questions</b><small>Instant feedback per question · no timer</small></button><button><span>NEW</span><b>New material only · planes + Moon</b><small>The 20 questions from Wk3 L4 + Wk4</small></button><button><span>SIMULATE</span><b>30-minute simulation</b><small>20 sampled from 40 · review after submit</small></button></div>',
    footer: "Lectures 1–6 · Orbit Manoeuvres + Lunar Trajectories · Preparing for the Week 8 Quiz",
    metaDesc:
      "AERO3760 Space Engineering 2 Lectures 1–6: manoeuvres, plane changes, lunar transfers and spheres of influence. 40-question practice targeting the Week 8 quiz.",
  },
};

function updateHtml(file, data, t, isCn) {
  let s = readFileSync(file, "utf8");
  const replace1 = (a, b) => {
    if (!s.includes(a)) throw new Error(`anchor not found in ${file}: ${a.slice(0, 60)}`);
    s = s.replace(a, b);
  };

  s = s.replace(/<title>[^<]*<\/title>/, `<title>${isCn ? "AERO3760 Quiz Lab · 从零学习 · Week 8 Quiz" : "AERO3760 Quiz Lab · From Zero to the Week 8 Quiz"}</title>`);
  s = s.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${t.metaDesc}">`);
  replace1('<div class="exam-chip">20 AUG · 09:15</div>', `<div class="exam-chip">${t.chip}</div>`);
  replace1(" ZERO-BASE LEARNING PATH · LECTURES 1–3", t.eyebrow);
  s = s.replace(/<p class="hero-copy">[^<]*<\/p>/, `<p class="hero-copy">${esc(t.heroCopy)}</p>`);
  s = s.replace(/<section class="scope-strip">.*?<\/section>/, t.scope);
  s = s.replace("/ 11 LESSONS", "/ 18 LESSONS");
  // course heading note + progress counts
  const learnAt = s.indexOf('id="learn"');
  const spanStart = s.indexOf("<span>", learnAt);
  const spanEnd = s.indexOf("</span>", spanStart);
  s = s.slice(0, spanStart) + `<span>${esc(t.courseNote)}</span>` + s.slice(spanEnd + 7);
  s = s.replace(/(completed"|已完成 0 \/ )\d+( 课")/, (_m, a, b) => a + "18" + b);
  s = s.replace(/"0 of \d+ lessons completed"/, '"0 of 18 lessons completed"');
  s = s.replace(/<strong>0<!-- --> \/ <!-- -->\d+<\/strong>/, "<strong>0<!-- --> / <!-- -->18</strong>");
  // roadmap: insert stages before lesson-stack
  replace1('</div><div class="lesson-stack">', t.roadmap + '</div><div class="lesson-stack">');
  // lessons: append only the new lessons (11+) after the last existing lesson block
  const newLessons = data.lessons.filter((L) => L.no >= 11);
  replace1(
    '</details></div></section><section class="glossary',
    "</details>" + newLessons.map((L) => lessonBlock(L, t)).join("") + "</div></section>" + '<section class="glossary'
  );
  // glossary entries
  const glossaryHtml = data.glossary
    .map(([sym, meaning, unit]) => `<article><code>${esc(sym)}</code><p>${esc(meaning)}</p><span>${esc(unit)}</span></article>`)
    .join("");
  replace1("</div></section><section class=\"memory", glossaryHtml + "</div></section>" + '<section class="memory');
  // memory cards: append only cards 09+
  const memoryHtml = data.memoryCards
    .filter((c) => Number(c.no) >= 9)
    .map(
      (c) =>
        `<details class="memory-card"><summary><span>${c.no}</span><div><h3>${esc(c.title)}</h3><p>${esc(c.cue)}</p></div><b>＋</b></summary><div class="memory-body"><p>${esc(c.body)}</p><strong>${esc(c.key)}</strong></div></details>`
    )
    .join("");
  replace1('</div></section><section class="formula', memoryHtml + "</div></section>" + '<section class="formula');
  // formula rows: append only F9+ (the static wall already ships F1–F8)
  const formulaHtml = data.formulas
    .slice(8)
    .map(
      (f, i) =>
        `<article class="formula-row"><span>F${i + 1}</span><div><h3>${esc(f.name)}</h3><p>${esc(f.use)}</p></div><code>${esc(f.eq)}</code><small>${esc(f.vars)}</small></article>`
    )
    .join("");
  replace1('</div></section><section class="decision', formulaHtml + "</div></section>" + '<section class="decision');
  // decision map items 07-12
  const decisionItems = isCn
    ? [
        ["07", "需要<b>改变轨道平面</b>", "→ 交线点 + apoapsis + combined burn"],
        ["08", "出现 <b>launch site / azimuth</b>", "→ cos i = cos φ sin A"],
        ["09", "推力持续<b>数周或数月</b>", "→ 低推力螺旋 Eq 6.39"],
        ["10", "<b>Earth → Moon</b> 转移", "→ Patched conic：地心椭圆 + 月心双曲线 @ RS"],
        ["11", "要求<b>更短飞行时间</b>去月球", "→ 提高注入速度；到达端方向溢价"],
        ["12", "出现 <b>sphere of influence</b>", "→ 换中心天体；rSOI = R(m/M)^(2/5)"],
      ]
    : [
        ["07", "The <b>orbit plane</b> must change", "→ Intersection line + apoapsis + combined burn"],
        ["08", "Sees <b>launch site / azimuth</b>", "→ cos i = cos φ sin A"],
        ["09", "Thrust lasts <b>weeks or months</b>", "→ Low-thrust spiral, Eq. 6.39"],
        ["10", "<b>Earth → Moon</b> transfer", "→ Patched conic: geocentric ellipse + selenocentric hyperbola @ RS"],
        ["11", "Demands a <b>shorter flight time</b> to the Moon", "→ Raise injection speed; direction premium at arrival"],
        ["12", "Sees <b>sphere of influence</b>", "→ Switch central body; rSOI = R(m/M)^(2/5)"],
      ];
  const decisionHtml = decisionItems
    .map(([n, p, a]) => `<div><span>${n}</span><p>${p}</p><strong>${a}</strong></div>`)
    .join("");
  replace1('</div></section><section class="traps', decisionHtml + "</div></section>" + '<section class="traps');
  // traps
  s = s.replace(/<h2>(最容易被选项骗走的|The )[^<]*(句话|sentences most likely to trick you)<\/h2>/, `<h2>${t.trapsTitle}</h2>`);
  const traps = isCn
    ? [
        ["SOI 上不是引力平衡：", "边界处地球仍比月球强约 3.5 倍；SOI 是建模边界，那里什么都没发生。"],
        ["去月球不需要逃逸速度：", "地心段是椭圆；只有月心看到的到达段才是双曲线。"],
        ["远地点匹配 burn 不是 LOI：", "0.830 km/s 只是地心速度匹配，月球引力还没进模型。"],
        ["二面角 ≠ 倾角相加：", "δ 用球面三角公式算；25° 与 11.8° 之差可以对应 24° 的二面角。"],
        ["平面改变不要拆两步：", "combine, don't sequence；并且永远挑 apoapsis。"],
        ["注入速度的小数点决定一切：", "110 m/s 覆盖整条椭圆阶梯；三位有效数字圆整就差 3,400 km。"],
      ]
    : [
        ["The SOI is not a gravity balance:", "Earth still pulls ≈3.5× harder at the boundary; it is a modelling surface where nothing happens."],
        ["Going to the Moon needs no escape speed:", "the geocentric leg is an ellipse; only the Moon-centred arrival leg is a hyperbola."],
        ["The apogee matching burn is not LOI:", "0.830 km/s only matches geocentric speed; lunar gravity is not yet modelled."],
        ["Dihedral angle ≠ inclinations added:", "δ comes from the spherical-trig formula; 25° and 11.8° of element differences can correspond to a 24° dihedral angle."],
        ["Never sequence a plane change:", "combine, don't sequence — and always at apoapsis."],
        ["Decimal places of injection speed decide everything:", "110 m/s spans the whole bound ladder; three-figure rounding misses by 3,400 km."],
      ];
  const trapHtml = traps.map(([b, rest]) => `<li><b>${b}</b>${rest}</li>`).join("");
  replace1("</ol></section><section class=\"quiz", trapHtml + "</ol></section>" + '<section class="quiz');
  // static quiz-launch placeholder (pre-JS); the original trailing </div> still closes the wrapper
  s = s.replace(/<div class="quiz-launch">.*?<\/div><p class="honor-note">/, `<div class="quiz-launch">${t.quizLaunch}<p class="honor-note">`);
  // cache-bust the script references when content changes
  s = s.replace(/src="(quiz-(?:cn|en)\.js|app\.js)"/g, 'src="$1?v=wk8"');
  // footer
  s = s.replace(/<footer><div><b>AERO3760<\/b><span>[^<]*<\/span>/, `<footer><div><b>AERO3760</b><span>${t.footer}</span>`);
  // CSS: 3-button mode grid + 12-item decision/roadmap border rules
  replace1(".mode-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}", ".mode-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}");
  replace1(
    "</style></head>",
    ".decision-grid>div:nth-child(n+4){border-bottom:1px solid var(--ink)}.decision-grid>div:nth-child(n+10){border-bottom:0}.roadmap article:nth-child(3n){border-right:0}@media(max-width:850px){.decision-grid>div:nth-child(n+11){border-bottom:0}.decision-grid>div:nth-child(2n+11){border-right:1px solid var(--ink)}}</style></head>"
  );
  writeFileSync(file, s);
}

updateHtml("docs/index.html", cn, T.cn, true);
updateHtml("docs/en.html", en, T.en, false);

// ---------- app.js: exam sampling from the full bank + "new material only" mode ----------
function patchAppJs() {
  let s = readFileSync("docs/app.js", "utf8").replace(/\r\n/g, "\n");
  if (s.includes("EXAM_SIZE")) {
    console.log("docs/app.js already patched");
    return;
  }
  const rep = (a, b) => {
    if (!s.includes(a)) throw new Error(`app.js anchor not found: ${a.slice(0, 60)}`);
    s = s.replace(a, b);
  };
  rep('train: CN ? "训练模式" : "Practice mode",',
    'train: CN ? "训练模式 · 全部 " + QUESTIONS.length + " 题" : "Practice · all " + QUESTIONS.length + " questions",');
  rep('simSub: CN ? "20 题 · 提交后统一解析" : "20 questions · review after submit",',
    'simSub: CN ? "40 题随机抽 20 · 提交后统一解析" : "20 sampled from 40 · review after submit",\n    newOnly: CN ? "只练新内容 · 平面改变 + 月球" : "New material only · planes + Moon",\n    newSub: CN ? "Week 3 L4 + Week 4 的 20 题" : "The 20 questions from Wk3 L4 + Wk4",');
  rep(`  const quizEl = document.getElementById("quiz");
  let mode = "practice";
  let pool = QUESTIONS.slice();`,
    `  const quizEl = document.getElementById("quiz");
  const EXAM_SIZE = 20;
  function sampleExam() {
    const bag = QUESTIONS.slice();
    for (let i = bag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = bag[i]; bag[i] = bag[j]; bag[j] = tmp;
    }
    return bag.slice(0, EXAM_SIZE);
  }
  let mode = "practice";
  let examRun = false;
  let pool = QUESTIONS.slice();`);
  rep(`'<div class="quiz-launch"><p>FINAL STEP / QUIZ ENGINE</p><h2>' + T.startTitle + '</h2>' +`,
    `'<div class="quiz-launch"><p>FINAL STEP / QUIZ ENGINE · ' + QUESTIONS.length + ' QUESTIONS</p><h2>' + T.startTitle + '</h2>' +`);
  rep(`'<button data-act="exam"><span>SIMULATE</span><b>' + T.simulate + '</b><small>' + T.simSub + '</small></button></div>' +`,
    `'<button data-act="new"><span>NEW</span><b>' + T.newOnly + '</b><small>' + T.newSub + '</small></button>' +
      '<button data-act="exam"><span>SIMULATE</span><b>' + T.simulate + '</b><small>' + T.simSub + '</small></button></div>' +`);
  rep(`(q.trap ? '<small>陷阱：' + q.trap + '</small>' : "")`,
    `(q.trap ? '<small>' + (CN ? "陷阱：" : "Trap: ") + q.trap + '</small>' : "")`);
  rep("if (pool.length === QUESTIONS.length && score > best) saveBest(score);",
    "if (examRun && pool.length === EXAM_SIZE && score > best) saveBest(score);");
  rep(`  function startPractice() {
    mode = "practice";
    pool = QUESTIONS.slice();`,
    `  function startPractice() {
    mode = "practice";
    examRun = false;
    pool = QUESTIONS.slice();`);
  rep(`  function startExam() {
    mode = "exam";
    pool = QUESTIONS.slice();`,
    `  function startNew() {
    mode = "practice";
    examRun = false;
    pool = QUESTIONS.filter(function (q) { return q.id > 20; });
    current = 0;
    answers = new Array(pool.length).fill(null);
    seconds = 1800;
    stopTimer();
    render();
    quizEl.scrollIntoView({ behavior: "smooth" });
  }

  function startExam() {
    mode = "exam";
    examRun = true;
    pool = sampleExam();`);
  rep(`  function redoWrong() {
    const wrongList = pool.filter(function (q, index) { return answers[index] !== q.answer; });
    if (wrongList.length === 0) return;
    mode = "practice";`,
    `  function redoWrong() {
    const wrongList = pool.filter(function (q, index) { return answers[index] !== q.answer; });
    if (wrongList.length === 0) return;
    mode = "practice";
    examRun = false;`);
  rep(`if (act === "practice") startPractice();
    else if (act === "exam") startExam();`,
    `if (act === "practice") startPractice();
    else if (act === "new") startNew();
    else if (act === "exam") startExam();`);
  // fix pre-existing bug: render() looked for mode "running", which no start function ever sets
  rep(`function render() {
    if (mode === "idle") renderIdle();
    else if (mode === "running") renderRunning();
    else renderResult();
  }`,
    `function render() {
    if (mode === "idle") renderIdle();
    else if (mode === "practice" || mode === "exam") renderRunning();
    else renderResult();
  }`);
  rep(`function choose(index) {
    if (mode !== "running") return;`,
    `function choose(index) {
    if (mode === "idle" || mode === "result") return;`);
  writeFileSync("docs/app.js", s);
  console.log("docs/app.js patched");
}
patchAppJs();
console.log("docs/ synced:", cn.questions.length, "CN questions,", en.questions.length, "EN questions,", cn.lessons.length, "lessons");
