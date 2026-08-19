"use client";

import { useEffect, useMemo, useState } from "react";

type Mode = "practice" | "exam";
type Phase = "idle" | "running" | "result";
type Question = { id:number; tag:string; prompt:string; options:string[]; answer:number; why:string; trap?:string };

const questions: Question[] = [
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
  { id:20, tag:"LAMBERT", prompt:"Lambert chase problem 的核心已知量是：", options:["两个位置与飞行时间","Isp 与推进剂质量","只有初始速度","J₂ 与倾角"], answer:0, why:"给定 rA、目标未来位置 rB 和 Δt，再选择方向及 revolution count，转移轨道由求解器给出。" },
];

const memoryCards = [
  { no:"01", title:"Impulsive burn", cue:"位置冻结，速度跳变", body:"r⁺ = r⁻；v⁺ = v⁻ + Δv。判断能否采用此模型，看 burn 时间/扫过弧占整圈的比例，而不是死背一个阈值。", key:"题干出现 short burn、instantaneous → 想到 impulsive。" },
  { no:"02", title:"Rocket equation", cue:"Δv 的代价是指数", body:"Δv = Isp g₀ ln(m₀/mf)。Isp 高可省推进剂，但不保证 thrust 大。g₀ 用 m/s² 时，Δv 也必须用 m/s。", key:"题干出现 mass、propellant、Isp → 只找 rocket equation。" },
  { no:"03", title:"Hohmann", cue:"两圆、共面、两次切向 burn", body:"向外：内圈 prograde，外圈再 prograde circularise。若没有第二次 burn，航天器会沿转移椭圆返回。转移时间是转移椭圆半周期。", key:"题干出现 two circular coplanar orbits → Hohmann benchmark。" },
  { no:"04", title:"Bi-elliptic", cue:"三次 burn，用时间换 Δv", body:"先把 apoapsis 推得很高，在低速点便宜地改变轨道，再回到目标圆轨道。<11.94 选 Hohmann；>15.58 才认真考虑 bi-elliptic。", key:"省得通常很少，飞得通常很久。" },
  { no:"05", title:"Apogee ladder", cue:"同一点拆 burn，不自动省 Δv", body:"所有 burn 在同一 periapsis，理想速度增量 telescopes。优势是降低单次 thrust 需求；代价是多圈 coast 和更多操作。", key:"不要和发生在不同位置的 bi-elliptic 混淆。" },
  { no:"06", title:"Phasing", cue:"改周期，不是强行追", body:"追前方目标：retrograde → 较小轨道 → 周期短 → 逐圈追上。等待后方目标则相反。要求越快，周期差与 Δv 通常越大。", key:"题干出现 wrong place at the right orbit → phasing。" },
  { no:"07", title:"Vector Δv", cue:"变化的大小 ≠ 大小的变化", body:"Off-apsis 时 Δv = ‖v₂ − v₁‖，必须考虑 flight-path angle。即使 v₁ = v₂，只改方向仍需要 Δv。", key:"题干出现 off-apse / direction change → law of cosines。" },
  { no:"08", title:"Apse & chase", cue:"交点才能换轨；赶时间会很贵", body:"拱线旋转的直接 burn 必须在两轨道交点。给定两位置与飞行时间则是 Lambert problem；短时间 intercept 往往远贵于耐心 phasing。", key:"two positions + time → Lambert。" },
];

const formulas = [
  { name:"Rocket equation", eq:"Δv = Isp g₀ ln(m₀/mf)", use:"推进剂质量 / mass ratio", vars:"Isp [s] · g₀ = exhaust velocity" },
  { name:"Vis-viva", eq:"v² = μ(2/r − 1/a)", use:"同一位置比较不同轨道速度", vars:"r = 当前半径；a = 整条轨道半长轴" },
  { name:"Orbital period", eq:"T = 2π √(a³/μ)", use:"Hohmann 时间 / phasing 周期", vars:"a 小 → T 短；a 大 → T 长" },
  { name:"Vector burn", eq:"Δv = √(v₁²+v₂²−2v₁v₂ cosΔγ)", use:"off-apsis 的速度向量差", vars:"Δγ = γ₂ − γ₁" },
  { name:"Pure rotation", eq:"Δv = 2v sin(|Δγ|/2)", use:"speed 不变，只改方向", vars:"plane change 也会出现同一结构" },
  { name:"Energy change", eq:"Δε = vΔv cosα + ½Δv²", use:"Oberth effect / burn 对齐", vars:"α = 原速度与 burn 的夹角" },
];

function formatTime(seconds:number) { const m=Math.floor(seconds/60); const s=seconds%60; return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`; }

export default function QuizLab() {
  const [phase,setPhase]=useState<Phase>("idle");
  const [mode,setMode]=useState<Mode>("practice");
  const [pool,setPool]=useState<Question[]>(questions);
  const [current,setCurrent]=useState(0);
  const [answers,setAnswers]=useState<(number|null)[]>(Array(questions.length).fill(null));
  const [seconds,setSeconds]=useState(1800);
  const [best,setBest]=useState(0);

  useEffect(()=>{ const stored=window.localStorage.getItem("aero3760-best"); if(stored) setBest(Number(stored)); },[]);
  useEffect(()=>{
    if(phase!=="running" || mode!=="exam") return;
    const timer=window.setInterval(()=>setSeconds(value=>value<=1?0:value-1),1000);
    return ()=>window.clearInterval(timer);
  },[phase,mode]);
  useEffect(()=>{ if(phase==="running" && mode==="exam" && seconds===0) setPhase("result"); },[seconds,phase,mode]);

  const score=useMemo(()=>pool.reduce((sum,q,index)=>sum+(answers[index]===q.answer?1:0),0),[pool,answers]);
  const answered=answers.filter(value=>value!==null).length;
  const wrong=pool.filter((q,index)=>answers[index]!==q.answer);
  const selected=answers[current];
  const active=pool[current];

  useEffect(()=>{
    if(phase==="result" && pool.length===questions.length && score>best){ setBest(score); window.localStorage.setItem("aero3760-best",String(score)); }
  },[phase,pool.length,score,best]);

  function start(nextMode:Mode,nextPool:Question[]=questions){ setMode(nextMode); setPool(nextPool); setAnswers(Array(nextPool.length).fill(null)); setCurrent(0); setSeconds(1800); setPhase("running"); requestAnimationFrame(()=>document.querySelector("#quiz")?.scrollIntoView({behavior:"smooth"})); }
  function choose(index:number){ if(phase!=="running") return; setAnswers(old=>old.map((value,i)=>i===current?index:value)); }
  function next(){ if(current===pool.length-1) setPhase("result"); else setCurrent(value=>value+1); }
  function reset(){ setPhase("idle"); setPool(questions); setCurrent(0); setAnswers(Array(questions.length).fill(null)); setSeconds(1800); }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top">AERO3760 <span>/ QUIZ LAB</span></a>
        <nav aria-label="页面导航"><a href="#memory">速记</a><a href="#formula">公式</a><a href="#quiz">模拟题</a></nav>
        <div className="exam-chip">20 AUG · 09:15</div>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> EARLY FEEDBACK TASK · LECTURES 1–3</div>
        <h1>30 分钟，<br/><em>20 道选择题。</em></h1>
        <p className="hero-copy">把轨道机动压缩成能在 90 秒内识别的模式。先建立判断反射，再用真实节奏完成一套模拟。</p>
        <div className="hero-actions"><a className="primary" href="#memory">开始速记 <span>↓</span></a><button className="secondary" onClick={()=>start("exam")}>直接模拟</button></div>
        <div className="hero-stats"><div><b>90</b><span>秒 / 题</span></div><div><b>50%</b><span>官方支持线</span></div><div><b>{best}/20</b><span>本机最佳</span></div></div>
        <div className="orbit-mark" aria-hidden="true"><i/><b/></div>
      </section>

      <section className="scope-strip"><strong>本次优先：</strong><span>L1 · Rocket + Hohmann</span><span>L2 · Bi-elliptic + Phasing</span><span>L3 · Vector Δv + Apse + Chase</span><small>L4 Plane change 暂不优先</small></section>

      <section className="memory section" id="memory">
        <div className="section-heading"><p>01 / MEMORY DECK</p><h2>看到题干，立刻认出模型</h2><span>点击卡片展开；先尝试自己说出答案，再查看解释。</span></div>
        <div className="memory-grid">
          {memoryCards.map(card=><details className="memory-card" key={card.no}><summary><span>{card.no}</span><div><h3>{card.title}</h3><p>{card.cue}</p></div><b>＋</b></summary><div className="memory-body"><p>{card.body}</p><strong>{card.key}</strong></div></details>)}
        </div>
      </section>

      <section className="formula section" id="formula">
        <div className="section-heading light"><p>02 / FORMULA WALL</p><h2>只背会真正出现在选择题里的公式</h2></div>
        <div className="formula-list">
          {formulas.map((item,index)=><article className="formula-row" key={item.name}><span>F{index+1}</span><div><h3>{item.name}</h3><p>{item.use}</p></div><code>{item.eq}</code><small>{item.vars}</small></article>)}
        </div>
      </section>

      <section className="decision section">
        <div className="section-heading"><p>03 / DECISION MAP</p><h2>题目在问哪一种 manoeuvre？</h2></div>
        <div className="decision-grid">
          <div><span>01</span><p>出现 <b>mass / propellant / Isp</b></p><strong>→ Rocket equation</strong></div>
          <div><span>02</span><p>出现 <b>two circular coplanar orbits</b></p><strong>→ Hohmann</strong></div>
          <div><span>03</span><p>轨道正确，但 <b>timing / phase</b> 错</p><strong>→ Phasing</strong></div>
          <div><span>04</span><p>burn 不在 apsis，速度方向改变</p><strong>→ Vector Δv</strong></div>
          <div><span>05</span><p>两条拱线方向不同</p><strong>→ Intersection / apse rotation</strong></div>
          <div><span>06</span><p><b>Two positions + fixed time</b></p><strong>→ Lambert chase</strong></div>
        </div>
      </section>

      <section className="traps section">
        <div className="section-heading"><p>04 / TRAP BOARD</p><h2>最容易被选项骗走的六句话</h2></div>
        <ol><li><b>减速不等于长期落后：</b>retrograde 进入低轨后，周期更短，反而逐圈追上前方目标。</li><li><b>speed 不变不等于 Δv 为零：</b>旋转速度向量仍需推进剂。</li><li><b>Hohmann 第二次 burn 不能省：</b>它负责 circularise。</li><li><b>拆成多次 burn 不自动省 Δv：</b>同一 burn point 的理想增量会 telescoping。</li><li><b>高 Isp 不等于高 thrust：</b>推进剂效率与加速快慢是两件事。</li><li><b>高度不是半径：</b>地球题必须先用 r = Rₑ + altitude。</li></ol>
      </section>

      <section className="quiz section" id="quiz">
        {phase==="idle" && <div className="quiz-launch"><p>05 / QUIZ ENGINE</p><h2>现在把知识变成分数</h2><div className="mode-grid"><button onClick={()=>start("practice")}><span>TRAIN</span><b>训练模式</b><small>逐题即时解析 · 不计时</small></button><button onClick={()=>start("exam")}><span>SIMULATE</span><b>30 分钟模拟</b><small>20 题 · 提交后统一解析</small></button></div><p className="honor-note">正式 quiz 为 closed book；本页只用于考前练习，考试时请关闭。</p></div>}

        {phase==="running" && active && <div className="quiz-shell">
          <div className="quiz-head"><div><span>{mode==="exam"?"SIMULATION":"TRAINING"}</span><b>{current+1} / {pool.length}</b></div><div className={`timer ${seconds<300?"urgent":""}`}>{mode==="exam"?formatTime(seconds):"解析开启"}</div></div>
          <div className="progress"><i style={{width:`${((current+1)/pool.length)*100}%`}}/></div>
          <div className="question-tag">{active.tag}</div><h3 className="question-text">{active.prompt}</h3>
          <div className="options" role="radiogroup" aria-label="答案选项">{active.options.map((option,index)=>{const show=mode==="practice"&&selected!==null; const state=show?(index===active.answer?"correct":index===selected?"wrong":""):selected===index?"selected":""; return <button className={state} key={option} onClick={()=>choose(index)} role="radio" aria-checked={selected===index}><span>{String.fromCharCode(65+index)}</span><p>{option}</p>{show&&index===active.answer&&<b>✓</b>}{show&&index===selected&&selected!==active.answer&&<b>×</b>}</button>})}</div>
          {mode==="practice"&&selected!==null&&<div className={`explanation ${selected===active.answer?"good":"bad"}`}><strong>{selected===active.answer?"判断正确":"这里容易选错"}</strong><p>{active.why}</p>{active.trap&&<small>陷阱：{active.trap}</small>}</div>}
          <div className="quiz-controls"><button className="ghost" onClick={()=>setCurrent(value=>Math.max(0,value-1))} disabled={current===0}>← 上一题</button><span>{answered} / {pool.length} 已答</span>{mode==="exam"&&current===pool.length-1?<button className="solid" onClick={()=>setPhase("result")}>提交答案</button>:<button className="solid" onClick={next} disabled={mode==="practice"&&selected===null}>{current===pool.length-1?"完成":"下一题 →"}</button>}</div>
          {mode==="exam"&&<div className="question-dots">{pool.map((q,index)=><button key={q.id} aria-label={`前往第 ${index+1} 题`} className={`${index===current?"active":""} ${answers[index]!==null?"done":""}`} onClick={()=>setCurrent(index)}>{index+1}</button>)}</div>}
        </div>}

        {phase==="result" && <div className="result">
          <p>RESULT / DEBRIEF</p><div className="score-line"><div className="score-ring"><strong>{score}</strong><span>/ {pool.length}</span></div><div><h2>{score/pool.length>=.9?"已经进入稳定区。":score/pool.length>=.7?"基础不错，修补错题。":score/pool.length>=.5?"达到支持线，但仍需强化。":"先回到速记卡重新建立判断。"}</h2><p>正确率 {Math.round(score/pool.length*100)}% · 本机完整模拟最佳 {best}/20</p></div></div>
          {wrong.length>0?<div className="review"><h3>错题复盘 · {wrong.length} 题</h3>{wrong.map(q=>{const index=pool.findIndex(item=>item.id===q.id); return <article key={q.id}><span>Q{q.id} · {q.tag}</span><h4>{q.prompt}</h4><p><b>正确：</b>{q.options[q.answer]}</p><p>{q.why}</p>{answers[index]!==null&&<small>你的选择：{q.options[answers[index] as number]}</small>}</article>})}</div>:<div className="perfect">全对。现在休息十分钟，让记忆完成巩固。</div>}
          <div className="result-actions">{wrong.length>0&&<button className="solid" onClick={()=>start("practice",wrong)}>只重做错题</button>}<button className="ghost" onClick={()=>start("exam")}>重新模拟</button><button className="ghost" onClick={reset}>返回复习</button></div>
        </div>}
      </section>

      <footer><div><b>AERO3760</b><span>Orbital Manoeuvres · Lectures 1–3</span></div><p>考试前练习使用 · 正式 quiz 请遵守 closed-book 规则</p></footer>
    </main>
  );
}
