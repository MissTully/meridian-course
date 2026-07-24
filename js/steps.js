/* Step renderers and interaction engines: vignette, concept coach,
   MCQ case, branching dialogue (one-on-one, Switch Chairs, and
   multidisciplinary meetings), and the reflective debrief. */

import { personas } from "../data/personas.js";
import { module1Content } from "../data/module1.js";
import { module2Content } from "../data/module2.js";
import { module3Content } from "../data/module3.js";
import { module4Content } from "../data/module4.js";
import { module5Content } from "../data/module5.js";
import { STEP_DEFS } from "../data/modules.js";
import { store } from "./store.js";
import { emblemSVG, horizonBand, artwork, applyArt } from "./art.js";

export const moduleContent = { 1: module1Content, 2: module2Content, 3: module3Content, 4: module4Content, 5: module5Content };

/* ------------------------------ DOM helpers ------------------------------ */

export function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

export function roseSVG(size = 34) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 40 40");
  svg.setAttribute("width", size);
  svg.setAttribute("height", size);
  svg.setAttribute("aria-hidden", "true");
  const mk = (name, attrs) => {
    const n = document.createElementNS(ns, name);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  };
  svg.append(
    mk("circle", { cx: 20, cy: 20, r: 18.5, fill: "none", stroke: "#b08d57", "stroke-width": 1, opacity: 0.6 }),
    mk("path", { d: "M20 2 L23 20 L20 38 L17 20 Z", fill: "#b08d57" }),
    mk("path", { d: "M2 20 L20 17 L38 20 L20 23 Z", fill: "#c9a56b" }),
    mk("path", { d: "M8 8 L21.5 18.5 L32 32 L18.5 21.5 Z", fill: "#b08d57", opacity: 0.45 }),
    mk("path", { d: "M32 8 L21.5 21.5 L8 32 L18.5 18.5 Z", fill: "#b08d57", opacity: 0.45 }),
    mk("circle", { cx: 20, cy: 20, r: 2.4, fill: "#0c1b2a", stroke: "#c9a56b", "stroke-width": 1 })
  );
  return svg;
}

function speakerInfo(who, flow) {
  if (who === "narrator") return { name: "", initials: "✦", role: "" };
  if (who === "learner") return { name: "You", initials: "You", role: "" };
  if (flow && flow.extraSpeakers && flow.extraSpeakers[who]) {
    const s = flow.extraSpeakers[who];
    return { name: s.name, initials: s.initials, role: s.role };
  }
  const p = personas[who];
  return p
    ? { name: p.name, initials: p.initials, role: p.role }
    : { name: who, initials: "?", role: "" };
}

function turnEl(who, text, flow) {
  const info = speakerInfo(who, flow);
  const wrap = el("div", `turn ${who === "learner" ? "learner" : who === "narrator" ? "narrator" : "persona"}`);
  const avatar = el("div", "avatar", info.initials);
  const bubble = el("div", "bubble");
  if (who !== "narrator") {
    const sp = el("div", "speaker", info.name);
    if (info.role) {
      sp.append(" ");
      sp.append(el("span", "role", "· " + info.role));
    }
    bubble.append(sp);
  }
  bubble.append(el("div", null, text));
  wrap.append(avatar, bubble);
  return wrap;
}

function completeButton(mod, stepId, label = "Mark complete & continue") {
  const btn = el("button", "btn navy", store.stepDone(mod.id, stepId) ? "Completed — continue" : label);
  btn.addEventListener("click", () => {
    store.markStep(mod.id, stepId);
    const order = STEP_DEFS.map((s) => s.id);
    const next = order[order.indexOf(stepId) + 1];
    location.hash = next ? `#/module/${mod.id}/${next}` : `#/module/${mod.id}`;
  });
  return btn;
}

function scrollIntoViewSoft(node) {
  requestAnimationFrame(() => node.scrollIntoView({ behavior: "smooth", block: "nearest" }));
}

/* ------------------------------ Step: video ------------------------------ */

function renderVideo(mod, content) {
  const root = el("div");
  const card = el("div", "panel-card");

  const vp = el("div", "video-placeholder");
  applyArt(vp, artwork.modules[mod.id], { from: 0.82, mid: 0.72, to: 0.62 });
  const vpEmblem = el("div", "vp-emblem");
  vpEmblem.append(emblemSVG(mod.id, 52));
  vp.append(vpEmblem);
  vp.append(el("div", "vp-label", "Topic video · production placeholder"));
  vp.append(el("div", "vp-title", content.video.vpTitle));
  card.append(vp);

  card.append(el("h4", null, "The vignette"));
  const vig = el("div", "vignette");
  content.video.vignette.forEach((p) => vig.append(el("p", null, p)));
  card.append(vig);
  root.append(card);

  const teach = el("div", "panel-card");
  teach.append(el("h4", null, "Naming the concept"));
  content.video.teaching.forEach((t) => {
    teach.append(el("p", "eyebrow mt-2", t.h));
    teach.append(el("p", null, t.p));
  });
  root.append(teach);

  const row = el("div", "btn-row");
  row.append(completeButton(mod, "video"));
  root.append(row);
  return root;
}

/* ------------------------------ Step: coach ------------------------------ */

function renderCoach(mod, content) {
  const coach = content.coach;
  const root = el("div");
  const card = el("div", "panel-card huddle");
  const dlg = el("div", "dialogue");
  card.append(dlg);
  root.append(card);

  const coachTurn = (text) => {
    const t = turnEl("coach", text, { extraSpeakers: { coach: { name: coach.coachName, initials: "CC", role: "Socratic tutor" } } });
    dlg.append(t);
    return t;
  };

  coachTurn(coach.intro);

  let idx = 0;
  const askNext = () => {
    if (idx >= coach.exchanges.length) {
      coachTurn(coach.close);
      const row = el("div", "btn-row");
      row.append(completeButton(mod, "coach"));
      card.append(row);
      scrollIntoViewSoft(row);
      return;
    }
    const ex = coach.exchanges[idx];
    const t = coachTurn(ex.coach);
    const choices = el("div", "choices");
    choices.append(el("div", "prompt-label", "Your answer"));
    ex.options.forEach((opt) => {
      const b = el("button", "choice-btn", opt.text);
      b.addEventListener("click", () => {
        choices.remove();
        dlg.append(turnEl("learner", opt.text));
        const note = el("div", "coach-note");
        const label =
          opt.quality === "good" ? "On the mark" : opt.quality === "partial" ? "Partly there" : "Worth a second look";
        note.append(el("span", "cn-label", label));
        note.append(document.createTextNode(opt.feedback));
        dlg.append(note);
        idx += 1;
        askNext();
        scrollIntoViewSoft(note);
      });
      choices.append(b);
    });
    card.append(choices);
    scrollIntoViewSoft(t);
  };
  askNext();
  return root;
}

/* ------------------------------- Step: MCQ ------------------------------- */

function renderCase(mod, content) {
  const mcq = content.mcqCase;
  const root = el("div");

  const caseCard = el("div", "panel-card");
  caseCard.append(el("h4", null, `Case: ${mcq.title}`));
  const txt = el("div", "mcq-case-text");
  mcq.narrative.forEach((p) => txt.append(el("p", null, p)));
  caseCard.append(txt);
  root.append(caseCard);

  const qCard = el("div", "panel-card");
  root.append(qCard);

  let qi = 0;
  let correctCount = 0;

  const renderQuestion = () => {
    qCard.textContent = "";
    if (qi >= mcq.questions.length) {
      qCard.append(el("h4", null, "Case complete"));
      qCard.append(
        el("p", null, `You answered ${correctCount} of ${mcq.questions.length} decision points correctly on the first attempt. Every distractor you explored is a documented misconception — reading its feedback counts as learning, not failure.`)
      );
      const row = el("div", "btn-row");
      row.append(completeButton(mod, "case"));
      qCard.append(row);
      return;
    }
    const q = mcq.questions[qi];
    qCard.append(el("div", "mcq-progress", `Decision point ${qi + 1} of ${mcq.questions.length}`));
    qCard.append(el("div", "mcq-q", q.stem));
    const opts = el("div", "mcq-options");
    let answered = false;
    q.options.forEach((opt) => {
      const b = el("button", "mcq-option");
      b.append(el("span", "opt-key", opt.key));
      b.append(el("span", null, opt.text));
      b.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        store.recordAnswer(mod.id, q.id, !!opt.correct, q.tags);
        if (opt.correct) correctCount += 1;
        opts.querySelectorAll(".mcq-option").forEach((o) => o.setAttribute("disabled", ""));
        b.classList.add(opt.correct ? "correct" : "incorrect");
        if (!opt.correct) {
          const right = q.options.findIndex((o) => o.correct);
          opts.children[right].classList.add("correct");
        }
        const fb = el("div", `mcq-feedback ${opt.correct ? "good" : "redirect"}`);
        fb.append(el("span", "fb-label", opt.correct ? "Correct" : "Not quite — here's the reasoning"));
        fb.append(document.createTextNode(opt.feedback));
        qCard.append(fb);
        const tags = el("div", "mcq-tags");
        q.tags.forEach((t) => tags.append(el("span", null, t)));
        qCard.append(tags);
        const row = el("div", "btn-row");
        const next = el("button", "btn", qi + 1 < mcq.questions.length ? "Next decision point" : "Finish case");
        next.addEventListener("click", () => {
          qi += 1;
          renderQuestion();
          qCard.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        row.append(next);
        qCard.append(row);
        scrollIntoViewSoft(fb);
      });
      opts.append(b);
    });
    qCard.append(opts);
  };
  renderQuestion();
  return root;
}

/* --------------------------- Dialogue simulations --------------------------- */

function renderDialogueSim(mod, flow, stepId, opts = {}) {
  const root = el("div");

  const brief = el("div", "panel-card");
  brief.append(el("h4", null, flow.title));
  brief.append(el("p", null, flow.learnerRole));
  if (flow.scoring) {
    const dims = el("ul", "concept-list");
    flow.scoring.dims.forEach((d) => dims.append(el("li", null, `${d.label} — ${d.anchor}`)));
    brief.append(el("p", "eyebrow mt-2", "You are being scored on"));
    brief.append(dims);
  }
  root.append(brief);

  const card = el("div", "panel-card huddle");
  const dlg = el("div", "dialogue");
  card.append(dlg);
  root.append(card);

  const scores = {};
  flow.scoring.dims.forEach((d) => (scores[d.id] = 0));

  const playNode = (nodeId) => {
    const node = flow.nodes[nodeId];
    node.turns.forEach((t) => dlg.append(turnEl(t.who, t.text, flow)));

    if (node.end) {
      finish(node.outcome);
      scrollIntoViewSoft(dlg.lastChild);
      return;
    }
    const choices = el("div", "choices");
    choices.append(el("div", "prompt-label", "Your move"));
    node.choices.forEach((c) => {
      const b = el("button", "choice-btn", c.text);
      b.addEventListener("click", () => {
        choices.remove();
        dlg.append(turnEl("learner", c.text));
        if (c.score) for (const [k, v] of Object.entries(c.score)) scores[k] = Math.min((scores[k] || 0) + v, maxFor(k));
        if (c.note) {
          const note = el("div", "coach-note");
          note.append(el("span", "cn-label", "Coach, quietly"));
          note.append(document.createTextNode(c.note));
          dlg.append(note);
        }
        playNode(c.next);
        scrollIntoViewSoft(dlg.lastChild);
      });
      choices.append(b);
    });
    card.append(choices);
  };

  const maxFor = (id) => flow.scoring.dims.find((d) => d.id === id)?.max ?? 99;

  const finish = (outcomeKey) => {
    const outcome = flow.outcomes[outcomeKey];
    const total = flow.scoring.dims.reduce((s, d) => s + scores[d.id], 0);
    const max = flow.scoring.dims.reduce((s, d) => s + d.max, 0);
    store.saveScore(mod.id, flow.simId, { scores: { ...scores }, total, max, outcome: outcomeKey });

    const result = el("div", "panel-card");
    result.append(el("p", "eyebrow", "Simulation complete"));
    result.append(el("h4", null, outcome.label));
    result.append(el("p", null, outcome.text));

    const grid = el("div", "scorecard");
    flow.scoring.dims.forEach((d) => {
      const tile = el("div", "score-tile");
      tile.append(el("div", "st-label", d.label));
      tile.append(el("div", "st-value", `${scores[d.id]} / ${d.max}`));
      const meter = el("div", "meter");
      const fill = el("i");
      meter.append(fill);
      tile.append(meter);
      tile.append(el("div", "st-anchor", d.anchor));
      grid.append(tile);
      requestAnimationFrame(() => (fill.style.width = `${Math.round((scores[d.id] / d.max) * 100)}%`));
    });
    result.append(grid);

    const row = el("div", "btn-row");
    const replay = el("button", "btn ghost", "Replay this meeting");
    replay.addEventListener("click", () => {
      root.replaceWith(renderDialogueSim(mod, flow, stepId, opts));
    });
    row.append(completeButton(mod, stepId, "Continue the round"), replay);
    result.append(row);

    if (opts.afterFinish) opts.afterFinish(result);
    root.append(result);
  };

  playNode(flow.start);
  return root;
}

function renderOneOnOne(mod, content) {
  const wrap = el("div");
  const sim = renderDialogueSim(mod, content.oneOnOne, "oneOnOne", {
    afterFinish: (resultCard) => {
      const sc = el("div", "switch-chairs");
      sc.append(roseSVG(44));
      const body = el("div");
      body.append(el("h4", null, "Switch Chairs"));
      body.append(
        el("p", null, "Replay this same meeting from the other side of the desk — the AI takes your former role, and you take your counterpart's. It is the fastest empathy exercise this program owns.")
      );
      const b = el("a", "btn mt-1", "Take the other chair");
      b.href = `#/module/${mod.id}/switch`;
      b.style.marginTop = "0.8rem";
      body.append(b);
      sc.append(body);
      resultCard.append(sc);
    },
  });
  wrap.append(sim);
  return wrap;
}

/* ------------------------------ Step: debrief ------------------------------ */

function renderDebrief(mod, content) {
  const d = content.debrief;
  const root = el("div");

  const intro = el("div", "panel-card");
  intro.append(el("h4", null, "The debrief"));
  intro.append(el("p", null, d.intro));

  const sims = [
    { id: "oneOnOne", label: "One-on-one meeting" },
    { id: "switchChairs", label: "Switch Chairs" },
    { id: "meeting", label: "Multidisciplinary meeting" },
  ];
  const grid = el("div", "scorecard");
  let any = false;
  sims.forEach((s) => {
    const sc = store.getScore(mod.id, s.id);
    if (!sc) return;
    any = true;
    const tile = el("div", "score-tile");
    tile.append(el("div", "st-label", s.label));
    tile.append(el("div", "st-value", `${sc.total} / ${sc.max}`));
    const meter = el("div", "meter");
    const fill = el("i");
    meter.append(fill);
    tile.append(meter);
    grid.append(tile);
    requestAnimationFrame(() => (fill.style.width = `${Math.round((sc.total / sc.max) * 100)}%`));
  });
  if (any) {
    intro.append(el("p", "eyebrow mt-2", "Your performance this round"));
    intro.append(grid);
  }
  const band = horizonBand(340, 56);
  band.classList.add("horizon-band");
  intro.append(band);
  root.append(intro);

  const refl = el("div", "panel-card");
  const blocks = [...d.prompts, { ...d.commitment, frame: d.commitment.label }];
  blocks.forEach((p) => {
    const block = el("div", "reflection-block");
    block.append(el("div", "rq-frame", p.frame));
    block.append(el("div", "rq", p.question));
    const ta = el("textarea", "reflection");
    ta.value = store.getReflection(mod.id, p.id);
    ta.placeholder = "Write here — saved on this device only.";
    const saved = el("div", "saved-note", ta.value ? "Saved." : "");
    let timer;
    ta.addEventListener("input", () => {
      clearTimeout(timer);
      saved.textContent = "…";
      timer = setTimeout(() => {
        store.saveReflection(mod.id, p.id, ta.value);
        saved.textContent = "Saved.";
      }, 600);
    });
    block.append(ta, saved);
    refl.append(block);
  });
  root.append(refl);

  const row = el("div", "btn-row");
  row.append(completeButton(mod, "debrief", "Complete this round"));
  root.append(row);
  return root;
}

/* ------------------------------ Preview steps ------------------------------ */

function renderPreview(mod, stepId) {
  const root = el("div");
  const card = el("div", "panel-card");
  const summaryKey = stepId === "switch" ? "oneOnOne" : stepId;
  const summary = mod.stepSummaries[summaryKey];
  const lockedEmblem = el("div", "locked-emblem");
  lockedEmblem.append(emblemSVG(mod.id, 44));
  card.append(lockedEmblem);
  card.append(el("h4", null, "Designed — not yet authored"));
  if (stepId === "switch") {
    card.append(el("p", null, "After the one-on-one meeting, you'll replay it from your counterpart's chair — the AI takes your former role. Perspective-taking is rehearsed in every round of this program, not taught once."));
  } else if (summary) {
    card.append(el("p", null, summary));
  }
  root.append(card);
  const note = el("div", "locked-note mt-2");
  note.append(
    document.createTextNode("This round is part of the full eight-module program. Rounds 1 (Morning Report), 2 (The Handoff), 3 (Repeat Customers), and 5 (The Rapid Response) are fully playable now. ")
  );
  const a = el("a", null, "Start with Round 1 →");
  a.href = "#/module/1";
  a.style.color = "var(--brass-deep)";
  note.append(a);
  root.append(note);
  return root;
}

/* --------------------------------- Export --------------------------------- */

export function renderStep(mod, stepId) {
  const content = moduleContent[mod.id];
  if (!content) return renderPreview(mod, stepId);
  switch (stepId) {
    case "video": return renderVideo(mod, content);
    case "coach": return renderCoach(mod, content);
    case "case": return renderCase(mod, content);
    case "oneOnOne": return renderOneOnOne(mod, content);
    case "switch": return renderDialogueSim(mod, content.switchChairs, "switch");
    case "meeting": return renderDialogueSim(mod, content.meeting, "meeting");
    case "debrief": return renderDebrief(mod, content);
    default: return renderPreview(mod, stepId);
  }
}
