(function () {
  const data = window.QUIZ_DATA;
  if (!data) return;
  const QUESTIONS = data.questions;
  const LANG = data.lang;
  const CN = LANG === "cn";
  const BEST_KEY = "aero3760-static-best-" + LANG;
  const LESSONS_KEY = "aero3760-static-lessons-" + LANG;
  const T = {
    train: CN ? "训练模式 · 全部 " + QUESTIONS.length + " 题" : "Practice · all " + QUESTIONS.length + " questions",
    simulate: CN ? "30 分钟模拟" : "30-minute simulation",
    feedback: CN ? "解析开启" : "Feedback on",
    submit: CN ? "提交答案" : "Submit",
    finish: CN ? "完成" : "Finish",
    next: CN ? "下一题 →" : "Next →",
    prev: CN ? "← 上一题" : "← Prev",
    answered: CN ? "已答" : "answered",
    correct: CN ? "判断正确" : "Correct",
    trap: CN ? "这里容易选错" : "Easy trap",
    yourChoice: CN ? "你的选择：" : "Your choice: ",
    redoWrong: CN ? "只重做错题" : "Redo wrong only",
    again: CN ? "重新模拟" : "Simulate again",
    back: CN ? "返回复习" : "Back to review",
    reviewTitle: CN ? "错题复盘" : "Review",
    perfect: CN ? "全对。现在休息十分钟，让记忆完成巩固。" : "Perfect. Take a ten-minute break and let the memory consolidate.",
    resultHead: CN ? "RESULT / DEBRIEF" : "RESULT / DEBRIEF",
    accuracy: CN ? "正确率" : "Accuracy",
    bestLabel: CN ? "本机完整模拟最佳" : "best full simulation on this device",
    startTitle: CN ? "现在把理解变成分数" : "Turn understanding into marks",
    trainSub: CN ? "逐题即时解析 · 不计时" : "Instant feedback per question · no timer",
    simSub: CN ? "40 题随机抽 20 · 提交后统一解析" : "20 sampled from 40 · review after submit",
    newOnly: CN ? "只练新内容 · 平面改变 + 月球" : "New material only · planes + Moon",
    newSub: CN ? "Week 3 L4 + Week 4 的 20 题" : "The 20 questions from Wk3 L4 + Wk4",
    honor: CN ? "正式 quiz 为 closed book；本页只用于考前练习，考试时请关闭。" : "The real quiz is closed book. This page is for practice only — close it during the real quiz.",
    doneLabel: CN ? "✓ 已完成" : "✓ Done",
    mark: CN ? "标记为已学会" : "Mark as learned",
    marked: CN ? "✓ 已掌握这课（点击取消）" : "✓ Marked as learned (click to undo)"
  };

  const quizEl = document.getElementById("quiz");
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
  let pool = QUESTIONS.slice();
  let current = 0;
  let answers = new Array(pool.length).fill(null);
  let seconds = 1800;
  let timerId = null;

  function fmt(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
  }

  function bestScore() {
    const raw = localStorage.getItem(BEST_KEY);
    return raw ? Number(raw) : 0;
  }

  function saveBest(score) {
    localStorage.setItem(BEST_KEY, String(score));
  }

  function renderIdle() {
    quizEl.innerHTML =
      '<div class="quiz-launch"><p>FINAL STEP / QUIZ ENGINE · ' + QUESTIONS.length + ' QUESTIONS</p><h2>' + T.startTitle + '</h2>' +
      '<div class="mode-grid"><button data-act="practice"><span>TRAIN</span><b>' + T.train + '</b><small>' + T.trainSub + '</small></button>' +
      '<button data-act="new"><span>NEW</span><b>' + T.newOnly + '</b><small>' + T.newSub + '</small></button>' +
      '<button data-act="exam"><span>SIMULATE</span><b>' + T.simulate + '</b><small>' + T.simSub + '</small></button></div>' +
      '<p class="honor-note">' + T.honor + '</p></div>';
  }

  function selectedState(index) {
    if (mode === "practice" && answers[current] !== null) {
      if (index === pool[current].answer) return "correct";
      if (index === answers[current]) return "wrong";
      return "";
    }
    return index === answers[current] ? "selected" : "";
  }

  function renderRunning() {
    const q = pool[current];
    const optBtns = q.options.map(function (opt, index) {
      const letter = String.fromCharCode(65 + index);
      const state = selectedState(index);
      let mark = "";
      if (mode === "practice" && answers[current] !== null) {
        if (index === q.answer) mark = "<b>✓</b>";
        else if (index === answers[current]) mark = "<b>×</b>";
      }
      return '<button class="' + state + '" data-opt="' + index + '" role="radio" aria-checked="' + (answers[current] === index) + '"><span>' + letter + '</span><p>' + opt + '</p>' + mark + '</button>';
    }).join("");

    let explanation = "";
    if (mode === "practice" && answers[current] !== null) {
      const good = answers[current] === q.answer;
      explanation =
        '<div class="explanation ' + (good ? "good" : "bad") + '"><strong>' + (good ? T.correct : T.trap) + '</strong><p>' + q.why + '</p>' +
        (q.trap ? '<small>' + (CN ? "陷阱：" : "Trap: ") + q.trap + '</small>' : "") + '</div>';
    }

    const isLast = current === pool.length - 1;
    const controlsRight = (mode === "exam" && isLast)
      ? '<button class="solid" data-act="submit">' + T.submit + '</button>'
      : '<button class="solid" data-act="next" ' + (mode === "practice" && answers[current] === null ? "disabled" : "") + '>' + (isLast ? T.finish : T.next) + '</button>';

    quizEl.innerHTML =
      '<div class="quiz-shell">' +
      '<div class="quiz-head"><div><span>' + (mode === "exam" ? "SIMULATION" : "TRAINING") + '</span><b>' + (current + 1) + ' / ' + pool.length + '</b></div>' +
      '<div class="timer ' + (seconds < 300 ? "urgent" : "") + '">' + (mode === "exam" ? fmt(seconds) : T.feedback) + '</div></div>' +
      '<div class="progress"><i style="width:' + ((current + 1) / pool.length * 100) + '%"></i></div>' +
      '<div class="question-tag">' + q.tag + '</div><h3 class="question-text">' + q.prompt + '</h3>' +
      '<div class="options" role="radiogroup" aria-label="答案选项">' + optBtns + '</div>' + explanation +
      '<div class="quiz-controls"><button class="ghost" data-act="prev" ' + (current === 0 ? "disabled" : "") + '>' + T.prev + '</button>' +
      '<span>' + answers.filter(function (v) { return v !== null; }).length + ' / ' + pool.length + ' ' + T.answered + '</span>' + controlsRight + '</div>' +
      (mode === "exam"
        ? '<div class="question-dots">' + pool.map(function (q, index) {
            return '<button class="' + (index === current ? "active" : "") + ' ' + (answers[index] !== null ? "done" : "") + '" data-goto="' + index + '" aria-label="Go to question ' + (index + 1) + '">' + (index + 1) + '</button>';
          }).join("") + '</div>'
        : "") +
      '</div>';
  }

  function renderResult() {
    const score = pool.reduce(function (sum, q, index) { return sum + (answers[index] === q.answer ? 1 : 0); }, 0);
    const wrongList = pool.filter(function (q, index) { return answers[index] !== q.answer; });
    const best = bestScore();
    if (examRun && pool.length === EXAM_SIZE && score > best) saveBest(score);
    const ratio = score / pool.length;
    const headline = ratio >= 0.9 ? (CN ? "已经进入稳定区。" : "You are in the stable zone.")
      : ratio >= 0.7 ? (CN ? "基础不错，修补错题。" : "Solid base — patch the wrong answers.")
      : ratio >= 0.5 ? (CN ? "达到支持线，但仍需强化。" : "Above the support line, but keep reinforcing.")
      : (CN ? "先回到速记卡重新建立判断。" : "Go back to the memory deck and rebuild.");

    let reviewHtml = "";
    if (wrongList.length > 0) {
      reviewHtml = '<div class="review"><h3>' + T.reviewTitle + ' · ' + wrongList.length + ' 题</h3>' +
        wrongList.map(function (q) {
          const index = pool.findIndex(function (item) { return item.id === q.id; });
          return '<article><span>Q' + q.id + ' · ' + q.tag + '</span><h4>' + q.prompt + '</h4><p><b>正确：</b>' + q.options[q.answer] + '</p><p>' + q.why + '</p>' +
            (answers[index] !== null ? '<small>' + T.yourChoice + q.options[answers[index]] + '</small>' : '') + '</article>';
        }).join("") + '</div>';
    } else {
      reviewHtml = '<div class="perfect">' + T.perfect + '</div>';
    }

    quizEl.innerHTML =
      '<div class="result"><p>' + T.resultHead + '</p><div class="score-line"><div class="score-ring"><strong>' + score + '</strong><span>/ ' + pool.length + '</span></div>' +
      '<div><h2>' + headline + '</h2><p>' + T.accuracy + ' ' + Math.round(ratio * 100) + '% · ' + T.bestLabel + ' ' + best + '/20</p></div></div>' + reviewHtml +
      '<div class="result-actions">' +
      (wrongList.length > 0 ? '<button class="solid" data-act="redo">' + T.redoWrong + '</button>' : '') +
      '<button class="ghost" data-act="examagain">' + T.again + '</button><button class="ghost" data-act="reset">' + T.back + '</button></div></div>';
  }

  function render() {
    if (mode === "idle") renderIdle();
    else if (mode === "practice" || mode === "exam") renderRunning();
    else renderResult();
  }

  function startPractice() {
    mode = "practice";
    examRun = false;
    pool = QUESTIONS.slice();
    current = 0;
    answers = new Array(pool.length).fill(null);
    seconds = 1800;
    stopTimer();
    render();
    quizEl.scrollIntoView({ behavior: "smooth" });
  }

  function startNew() {
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
    pool = sampleExam();
    current = 0;
    answers = new Array(pool.length).fill(null);
    seconds = 1800;
    stopTimer();
    timerId = setInterval(function () {
      seconds -= 1;
      if (seconds <= 0) {
        seconds = 0;
        stopTimer();
        mode = "result";
        render();
      } else if (mode === "exam") {
        const t = quizEl.querySelector(".timer");
        if (t) {
          t.textContent = fmt(seconds);
          if (seconds < 300) t.classList.add("urgent");
        }
      }
    }, 1000);
    render();
    quizEl.scrollIntoView({ behavior: "smooth" });
  }

  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  function choose(index) {
    if (mode === "idle" || mode === "result") return;
    answers[current] = index;
    render();
  }

  function next() {
    if (current === pool.length - 1) { mode = "result"; stopTimer(); render(); }
    else { current += 1; render(); }
  }

  function prev() {
    if (current > 0) { current -= 1; render(); }
  }

  function goto(index) {
    current = index;
    render();
  }

  function submit() {
    mode = "result";
    stopTimer();
    render();
  }

  function reset() {
    mode = "idle";
    stopTimer();
    render();
  }

  function redoWrong() {
    const wrongList = pool.filter(function (q, index) { return answers[index] !== q.answer; });
    if (wrongList.length === 0) return;
    mode = "practice";
    examRun = false;
    pool = wrongList.slice();
    current = 0;
    answers = new Array(pool.length).fill(null);
    seconds = 1800;
    stopTimer();
    render();
  }

  quizEl.addEventListener("click", function (e) {
    const target = e.target.closest("button");
    if (!target) return;
    const act = target.dataset.act;
    if (act === "practice") startPractice();
    else if (act === "new") startNew();
    else if (act === "exam") startExam();
    else if (act === "next") next();
    else if (act === "prev") prev();
    else if (act === "submit") submit();
    else if (act === "reset") reset();
    else if (act === "redo") redoWrong();
    else if (act === "examagain") startExam();
    else if (target.dataset.opt !== undefined) choose(Number(target.dataset.opt));
    else if (target.dataset.goto !== undefined) goto(Number(target.dataset.goto));
  });

  function initLessons() {
    const modules = Array.from(document.querySelectorAll(".lesson-module"));
    const saved = JSON.parse(localStorage.getItem(LESSONS_KEY) || "[]");
    const total = modules.length;
    function updateProgress() {
      const done = modules.filter(function (mod) { return mod.classList.contains("complete"); }).length;
      const progress = document.querySelector(".learning-progress");
      if (!progress) return;
      const strong = progress.querySelector("strong");
      const bar = progress.querySelector("i");
      const b = progress.querySelector("b");
      if (strong) strong.textContent = done + " / " + total;
      if (bar) bar.style.width = (done / total * 100) + "%";
      if (b) b.textContent = Math.round(done / total * 100) + "%";
    }
    modules.forEach(function (mod, index) {
      const no = index;
      const btn = mod.querySelector(".lesson-complete");
      const status = mod.querySelector(".lesson-status");
      function apply() {
        const isDone = saved.indexOf(no) !== -1;
        mod.classList.toggle("complete", isDone);
        if (btn) btn.textContent = isDone ? T.marked : T.mark;
        if (status) status.textContent = isDone ? T.doneLabel : (CN ? "展开学习 ＋" : "Expand ＋");
      }
      if (btn) btn.addEventListener("click", function () {
        const idx = saved.indexOf(no);
        if (idx === -1) saved.push(no);
        else saved.splice(idx, 1);
        localStorage.setItem(LESSONS_KEY, JSON.stringify(saved));
        apply();
        updateProgress();
      });
      apply();
    });
    updateProgress();
  }

  initLessons();
  renderIdle();
})();
