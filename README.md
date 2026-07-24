# The Meridian Course

**Navigating Healthcare's Toughest Challenges** — an 8-module, simulation-based program for healthcare leaders.

Learners "round" not on patients but on strategic situations: each module is one round through a different unit of **Meridian Health**, a fictional mid-sized regional health system. Game theory provides the analytical skeleton; empathy, perspective-taking, ethics, and TeamSTEPPS communication tools provide the human musculature.

## Running the app

The platform is a dependency-free static web app — no build step, no install.

```bash
# from the repo root
python3 -m http.server 8080
# then open http://localhost:8080
```

Or open `index.html` directly in a browser (a local server is recommended so ES modules load without file:// restrictions).

Learner progress, simulation scores, and commitments-to-practice persist in `localStorage`.

## What's implemented (v1 — the pilot slice)

Per the design doc's "start narrow" recommendation, v1 fully authors **Module 1** (conceptual foundation, establishes the Meridian setting) and **Module 5** (most protocolized, most measurable), with the remaining six modules present as navigable overviews.

Every authored module follows the six-step rhythm:

| Step | Component | v1 implementation |
|---|---|---|
| 1 | Topic Video | Narrative vignette + concept teaching (video placeholder) |
| 2 | AI Concept Coach | Scripted Socratic coaching flow with misconception probes |
| 3 | Branching Case with MCQ | Case narrative pausing at decision points; distractor-level feedback |
| 4 | One-on-One Simulation | Branching dialogue with a Meridian persona, behaviorally scored |
| 4b | Switch Chairs | The same meeting replayed from the counterpart's chair — the program's signature empathy mechanic |
| 5 | Multidisciplinary Meeting | Multi-persona scripted simulation with turn-taking orchestration |
| 6 | Reflective Debrief | Advocacy-inquiry debrief + written commitment-to-practice |

Behavioral scoring anchors implemented in v1:

- **Module 1:** acknowledgment-before-advocacy moves; surfacing system dynamics without individual blame.
- **Module 5:** closed-loop communication completion rate; graded assertiveness (concern → CUS → two-challenge rule).

## Repository layout

```
index.html            App shell (single-page, hash-routed)
css/meridian.css      "Nautical Calm" design system
js/app.js             Router, dashboard, module shell
js/steps.js           Step renderers: vignette, coach, MCQ, dialogue engine, debrief
js/store.js           Progress + scores persistence (localStorage)
data/modules.js       All 8 modules — metadata, concepts, anchors, step content
data/personas.js      The persistent Meridian persona roster
data/module1.js       Module 1 authored content (coach, MCQs, simulations)
data/module5.js       Module 5 authored content (coach, MCQs, simulations)
docs/course-design.md The full program design document
```

## Design system: "Nautical Calm"

Deep navy and crisp white with soft brass accents; serif display (Playfair Display) over sans body (Inter); horizon-line motifs and a compass rose; gliding transitions. High-stakes practice inside a visually calm harbor — see `docs/course-design.md` for the full aesthetic rationale.

## Roadmap

- Author Modules 2–4 and 6–8 (coach flows, MCQ cases, simulations)
- Live AI personas: swap the scripted dialogue provider for a Claude-backed provider (the dialogue engine is provider-agnostic by design)
- Batch rubric scoring + mastery dashboard over the competency map (concept × TeamSTEPPS tool × ethical framework)
- Spaced retrieval: resurface missed MCQ concepts as "curbside consult" questions in later modules
