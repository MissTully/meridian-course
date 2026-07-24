/* The Meridian Course — app shell: hash router, rounds board (dashboard),
   module pages with the six-step rhythm, the persona cast, and the
   program overview. */

import { modules, getModule, STEP_DEFS, CORE_STEPS } from "../data/modules.js";
import { personaList } from "../data/personas.js";
import { store } from "./store.js";
import { renderStep, el, roseSVG } from "./steps.js";
import { emblemSVG, artwork, applyArt } from "./art.js";

const app = document.getElementById("app");

/* Inject compass roses wherever the markup asks for one. */
document.querySelectorAll("[data-rose]").forEach((slot) => {
  slot.append(roseSVG(Number(slot.dataset.rose) || 28));
});

/* --------------------------------- Router --------------------------------- */

function route() {
  const hash = location.hash || "#/";
  const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);

  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.remove("active"));
  const navKey = parts[0] === "personas" ? "personas" : parts[0] === "about" ? "about" : "home";
  document.querySelector(`[data-nav="${navKey}"]`)?.classList.add("active");

  app.textContent = "";
  const view = el("div", "view");

  if (parts[0] === "module" && parts[1]) {
    const mod = getModule(parts[1]);
    if (mod) {
      view.append(renderModulePage(mod, parts[2]));
    } else {
      view.append(renderDashboard());
    }
  } else if (parts[0] === "personas") {
    view.append(renderPersonas());
  } else if (parts[0] === "about") {
    view.append(renderAbout());
  } else {
    view.append(renderDashboard());
  }
  app.append(view);
  window.scrollTo({ top: 0 });
}

window.addEventListener("hashchange", route);

/* ------------------------------- Dashboard ------------------------------- */

function renderDashboard() {
  const frag = document.createDocumentFragment();

  const hero = el("section", "hero");
  applyArt(hero, artwork.pages.home);
  hero.append(el("div", "contours"));
  const wrap = el("div", "wrap");
  wrap.append(el("div", "kicker", "Eight rounds · One health system · Every game you're already playing"));
  wrap.append(el("h2", null, "Round on the situations, not the patients."));
  wrap.append(
    el(
      "p",
      "lede",
      "The Meridian Course takes healthcare leaders on rounds through Meridian Health — a fictional system with real dynamics. Each round pairs one game-theoretic lens with the communication tools that change the game: simulated colleagues, real stakes, calm waters."
    )
  );
  hero.append(wrap);
  const heroRose = el("div", "hero-rose");
  heroRose.append(roseSVG(230));
  hero.append(heroRose);
  frag.append(hero);

  const board = el("section", "rounds-board");
  const bwrap = el("div", "wrap");
  const head = el("div", "board-head");
  head.append(el("h3", null, "The Rounds Board"));
  head.append(el("div", "board-note", "Rounds 1, 2, and 5 are fully playable. Your progress stays on this device."));
  bwrap.append(head);

  const grid = el("div", "module-grid");
  modules.forEach((m) => {
    const done = store.moduleProgress(m.id, CORE_STEPS);
    const card = el("a", "module-card");
    card.href = `#/module/${m.id}`;
    const cardEmblem = el("div", "card-emblem");
    cardEmblem.append(emblemSVG(m.id, 40));
    card.append(cardEmblem);
    card.append(el("div", "round-no", `Round ${m.id}`));
    card.append(el("h4", null, `${m.title} — ${m.tagline}`));
    card.append(el("div", "unit", m.unit));
    card.append(el("div", "concept", m.concept));
    const foot = el("div", "card-foot");
    const status =
      done === CORE_STEPS.length
        ? el("span", "status done", "Round complete")
        : m.status === "ready"
          ? el("span", "status ready", done > 0 ? "In progress" : "Ready to round")
          : el("span", "status preview", "Preview");
    foot.append(status);
    const dots = el("div", "progress-dots");
    CORE_STEPS.forEach((_, i) => {
      const dot = el("i");
      if (i < done) dot.classList.add("filled");
      dots.append(dot);
    });
    foot.append(dots);
    card.append(foot);
    grid.append(card);
  });
  bwrap.append(grid);
  board.append(bwrap);
  frag.append(board);
  return frag;
}

/* ------------------------------ Module page ------------------------------ */

function renderModulePage(mod, stepId) {
  const frag = document.createDocumentFragment();
  const validStep = STEP_DEFS.some((s) => s.id === stepId) ? stepId : firstOpenStep(mod);

  const hero = el("section", "module-hero");
  applyArt(hero, artwork.modules[mod.id]);
  const hwrap = el("div", "wrap");
  hwrap.append(el("div", "round-no", `Round ${mod.id} of 8`));
  hwrap.append(el("h2", null, `${mod.title} — ${mod.tagline}`));
  hwrap.append(el("div", "unit", mod.unit));
  const threads = el("div", "threads");
  threads.append(el("span", "thread-chip", `Game theory: ${shorten(mod.concept)}`));
  threads.append(el("span", "thread-chip", `Communication: ${shorten(mod.anchor)}`));
  threads.append(el("span", "thread-chip", `Ethics & empathy: ${shorten(mod.ethics)}`));
  hwrap.append(threads);
  hero.append(hwrap);
  const watermark = el("div", "hero-emblem");
  watermark.append(emblemSVG(mod.id, 190));
  hero.append(watermark);
  frag.append(hero);

  const bodyWrap = el("div", "wrap");
  const body = el("div", "module-body");

  const rail = el("nav", "step-rail");
  rail.setAttribute("aria-label", "Module steps");
  STEP_DEFS.forEach((s) => {
    if (s.id === "switch") rail.append(el("div", "rail-divider"));
    const b = el("button", null);
    b.append(el("span", "step-k", s.no));
    b.append(el("span", null, s.title));
    if (s.id === validStep) b.classList.add("active");
    if (store.stepDone(mod.id, s.id)) b.classList.add("completed");
    b.addEventListener("click", () => (location.hash = `#/module/${mod.id}/${s.id}`));
    rail.append(b);
    if (s.id === "switch") rail.append(el("div", "rail-divider"));
  });
  body.append(rail);

  const panel = el("div", "step-panel");
  const def = STEP_DEFS.find((s) => s.id === validStep);
  const head = el("div", "step-head");
  head.append(el("div", "step-eyebrow", `Step ${def.no} · ${def.duration}`));
  head.append(el("h3", null, def.title));
  head.append(el("div", "duration", stepSubtitle(mod, def.id)));
  panel.append(head);
  panel.append(renderStep(mod, validStep));
  body.append(panel);

  bodyWrap.append(body);
  frag.append(bodyWrap);
  return frag;
}

function firstOpenStep(mod) {
  for (const s of STEP_DEFS) {
    if (s.id === "switch") continue;
    if (!store.stepDone(mod.id, s.id)) return s.id;
  }
  return "debrief";
}

function stepSubtitle(mod, stepId) {
  const map = {
    video: "Case narrative plus concept teaching",
    coach: "Socratic questioning and misconception probes before high-stakes practice",
    case: `“${mod.caseTitle}” — a case that pauses at decision points`,
    oneOnOne: "The core deliberate-practice event: incentives that partially conflict with yours",
    switch: "The signature empathy mechanic: same meeting, other chair",
    meeting: "Three to five disciplines, distinct information, one room",
    debrief: mod.debriefFocus,
  };
  return map[stepId] || "";
}

function shorten(text) {
  const cut = text.split(/[.;—]/)[0].trim();
  return cut.length > 72 ? cut.slice(0, 69).trimEnd() + "…" : cut;
}

/* ------------------------------ Personas page ------------------------------ */

function renderPersonas() {
  const frag = document.createDocumentFragment();
  const wrap = el("div", "wrap");
  const banner = el("div", "page-banner");
  applyArt(banner, artwork.pages.cast, { from: 0.55, mid: 0.35, to: 0.55 });
  wrap.append(banner);
  const head = el("div", "page-head");
  head.append(el("h2", null, "The Cast of Meridian Health"));
  head.append(
    el(
      "p",
      null,
      "A persistent cast, authored once and reused across all eight rounds. The counterpart you negotiate with today chairs tomorrow's committee — in healthcare, you never play a one-shot game."
    )
  );
  wrap.append(head);

  const grid = el("div", "persona-grid");
  personaList.forEach((p) => {
    const card = el("div", "persona-card");
    const ph = el("div", "p-head");
    const av = el("div", "avatar", p.initials);
    av.classList.add("turn");
    av.className = "avatar";
    av.style.cssText = "width:42px;height:42px;border-radius:50%;background:var(--navy);color:var(--brass-bright);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);border:1px solid rgba(176,141,87,.5);flex:0 0 42px;";
    ph.append(av);
    const names = el("div");
    names.append(el("h4", null, p.name));
    names.append(el("div", "p-role", p.role));
    ph.append(names);
    card.append(ph);
    const dl = el("dl");
    const add = (t, d) => {
      dl.append(el("dt", null, t));
      dl.append(el("dd", null, d));
    };
    add("Appears in", p.appearsIn.map((n) => `Round ${n}`).join(" · "));
    add("Communication style", p.style);
    add("Incentives", p.incentives);
    add("Hidden information", p.hidden);
    add("History", p.history);
    card.append(dl);
    grid.append(card);
  });
  wrap.append(grid);
  frag.append(wrap);
  return frag;
}

/* ------------------------------- About page ------------------------------- */

function renderAbout() {
  const frag = document.createDocumentFragment();
  const wrap = el("div", "wrap");

  const banner = el("div", "page-banner");
  applyArt(banner, artwork.pages.program, { from: 0.5, mid: 0.3, to: 0.5 });
  wrap.append(banner);
  const head = el("div", "page-head");
  head.append(el("h2", null, "The Program"));
  head.append(
    el(
      "p",
      null,
      "Rounding is how clinicians move through a system: gather information at each stop, reason about what you see, decide with a team. Here, you round on strategic situations. Game theory is the analytical skeleton; empathy, perspective-taking, ethics, and TeamSTEPPS tools are the human musculature."
    )
  );
  wrap.append(head);

  const rhythm = el("div", "panel-card");
  rhythm.append(el("h4", null, "Every round, the same six-part rhythm"));
  rhythm.append(el("p", "muted", "Consistency lets you spend cognitive effort on the content, not on decoding a new format."));
  const list = el("div", "rhythm-list");
  const purposes = {
    video: "A real-world vignette, then the concept and communication tool get named.",
    coach: "A tutoring agent checks understanding — Socratic questions, worked examples, misconception probes.",
    case: "A branching case pausing at decision points; distractors are built from documented misconceptions.",
    oneOnOne: "One AI counterpart whose incentives partially conflict with yours. Deliberate practice, no audience.",
    switch: "Replay the meeting from the other chair. Perspective-taking, rehearsed eight times — never lectured.",
    meeting: "Three to five personas, different disciplines, different information. You hold the room together.",
    debrief: "Advocacy-inquiry debrief connecting performance to your real workplace, ending in a written commitment.",
  };
  STEP_DEFS.forEach((s) => {
    const item = el("div", "rhythm-item");
    item.append(el("div", "r-no", s.no));
    const mid = el("div");
    mid.append(el("h5", null, s.title));
    mid.append(el("p", null, purposes[s.id]));
    item.append(mid);
    item.append(el("div", "r-dur", s.duration));
    list.append(item);
  });
  rhythm.append(list);
  wrap.append(rhythm);

  const assess = el("div", "panel-card mt-2");
  assess.style.marginTop = "1.3rem";
  assess.append(el("h4", null, "How you're assessed"));
  const ul = el("ul", "concept-list");
  [
    "Knowledge — MCQ items tagged to a competency map (game-theory concept × TeamSTEPPS tool × ethical framework), enabling mastery tracking and spaced retrieval.",
    "Performance — simulations scored against behaviorally anchored rubrics: closed-loop completion, acknowledgment-before-advocacy, interest-versus-position statements, empathy markers.",
    "Transfer — every debrief ends in a written commitment to practice; Rounds 4, 7, and 8 revisit your earlier commitments.",
  ].forEach((t) => ul.append(el("li", null, t)));
  assess.append(ul);
  wrap.append(assess);

  const setting = el("div", "panel-card");
  setting.style.marginTop = "1.3rem";
  setting.append(el("h4", null, "The setting: Meridian Health"));
  setting.append(
    el(
      "p",
      null,
      "A mid-sized regional system — an academic medical center, a community hospital, an ambulatory network, home health, and a payer-relations office. One persistent setting, so decisions ripple across rounds and every counterpart recurs. The single most important lesson of repeated-game theory, built into the architecture: you never play a one-shot game."
    )
  );
  const reset = el("button", "btn ghost", "Reset all progress on this device");
  reset.style.marginTop = "1.1rem";
  reset.addEventListener("click", () => {
    if (confirm("Clear all progress, scores, and reflections stored in this browser?")) {
      store.resetAll();
      location.hash = "#/";
      route();
    }
  });
  const resetRow = el("div", "btn-row");
  resetRow.append(reset);
  setting.append(resetRow);
  wrap.append(setting);

  frag.append(wrap);
  return frag;
}

route();
