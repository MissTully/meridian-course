# The Meridian Course

**Subtitle:** Navigating Healthcare's Toughest Challenges
**An 8-Module Simulation-Based Program for Healthcare Leaders**

## Program Concept and Design Theme

Where the Communicator's Compass used the metaphor of taking a bearing, this program uses the most familiar ritual in healthcare: **rounds**. Rounding is how clinicians move through a system, gather information at each stop, reason about what they see, and make decisions with a team. In this program, learners round not on patients but on strategic situations — each module is one "round" through a different unit of a fictional health system, and each unit presents a distinct game-theoretic and communication challenge.

## Designing for Calm (The Aesthetic Vision)

To turn the course into a visually relaxing experience, these design principles soften the impact of the high-stakes simulations.

### 1. The Color Palette: "Nautical Calm"

Avoid aggressive "emergency" colors (like bright reds or harsh yellows) even though the subject is healthcare.

- **Deep Navy / Midnight Blue:** the base for backgrounds or primary text. It signifies depth, trust, and intelligence.
- **Crisp White:** generous amounts of negative space. It mimics the open water and prevents the user from feeling overwhelmed.
- **Soft Brass / Gold:** an accent color for buttons, dividers, or icons (like a compass rose). It feels premium, timeless, and warm.

### 2. Visual Imagery: Abstract, Not Literal

Avoid stock photos of generic doctors. Use abstract, high-end nautical imagery.

- **The Horizon Line:** simple, clean horizon lines on slides or screen headers. A perfectly horizontal line is inherently calming to the human eye.
- **Minimalist Charts:** thin-line nautical chart aesthetics (topographic maps of water) as background textures — scientific and sophisticated, not cluttered.
- **The Compass Rose:** a stylized, elegant compass rose as a recurring motif for the "Switch Chairs" and "Concept Coach" components.

### 3. Typography

- **Headers:** a clean, classic serif (Playfair Display or Lora) — an old-world captain's log: authoritative yet elegant.
- **Body text:** a clean sans-serif (Inter or Lato) for readability.

### 4. Implementation: The "Quiet Captain" UI

- **Transitions:** movement between simulation steps should feel like a smooth gliding motion, not a harsh slide-in.
- **The "Huddle" Space:** the Multidisciplinary Meeting (the high-stress part) uses a slightly muted background — like the interior of a ship's cabin — creating a "safe harbor" for tough decisions.

## The Setting: Meridian Health

The fictional setting is **Meridian Health**, a mid-sized regional health system containing an academic medical center, a community hospital, an ambulatory network, a home health division, and a payer-relations office. This single persistent setting gives the program three design advantages:

1. **Narrative continuity.** Characters recur across modules. The chief nursing officer a learner negotiates with in Module 3 reappears as an ally in Module 7. This teaches the single most important lesson of repeated-game theory: in healthcare, you never play a one-shot game. Every counterpart today is a collaborator, referrer, or committee member tomorrow.
2. **Systems thinking.** Decisions made in one module produce visible consequences in later modules, modeling how healthcare decisions ripple across departments, disciplines, and time.
3. **Simulation reusability.** A persistent cast of AI personas (each with a stable backstory, communication style, incentive structure, and hidden information set) can be built once and reused, which reduces authoring cost.

The through-line competencies — woven into every module rather than isolated in one — are **empathy, perspective-taking, ethics, and TeamSTEPPS communication tools**. Game theory provides the analytical skeleton; these competencies provide the human musculature.

## Program Architecture: The Consistent Module Rhythm

Every module follows the same six-part sequence. Consistency matters pedagogically (learners spend cognitive effort on content, not on decoding a new format) and technically (each part maps to one reusable component type).

| Step | Component | Duration | Purpose |
|---|---|---|---|
| 1 | Topic Video | 8–12 min | Case narrative plus concept teaching. Opens with a real-world healthcare vignette, then names and explains the game-theoretic concept and the paired TeamSTEPPS or communication tool. |
| 2 | AI Concept Coach | 10–15 min | A conversational tutoring agent that checks understanding through Socratic questioning, worked examples, and misconception probes before any high-stakes practice. |
| 3 | Branching Case with MCQ | 15–20 min | A case that pauses at decision points. MCQs assess both conceptual knowledge ("What game structure is this?") and applied judgment ("What should the CMO say next?"). Distractors are built from documented misconceptions. |
| 4 | Simulated One-on-One Meeting | 10–15 min | A conversation with a single AI persona whose incentives partially conflict with the learner's. The core deliberate-practice event. |
| 5 | Simulated Multidisciplinary Meeting | 15–25 min | A multi-agent simulation: the learner leads or participates in a meeting with three to five AI personas representing different disciplines, each with distinct information, incentives, and communication styles. |
| 6 | Reflective Debrief | 10 min | An AI debriefing agent conducts a structured debrief (advocacy-inquiry, consistent with Debriefing with Good Judgment), connecting performance back to the concept and the learner's own workplace. Ends with a written commitment-to-practice. |

**Perspective-taking as a repeated mechanic.** After Step 4 in every module, the learner is offered a **"Switch Chairs"** activity: they replay the same meeting, but now the AI plays their prior role and they play the counterpart. This is the program's signature empathy mechanic. Perspective-taking is not taught as a module; it is rehearsed eight times.

## The Eight Modules

### Module 1: Morning Report — The Games We Are Already Playing

**Unit:** Executive suite, Meridian Health.
**Game theory concept:** What a "game" is — players, strategies, payoffs, information. The Prisoner's Dilemma as the archetype of cooperation failure. Why individually rational choices can produce collectively terrible outcomes (the tragedy of the commons in shared resources such as operating room block time, float pool nurses, and imaging slots).
**TeamSTEPPS / communication anchor:** Team structure; psychological safety as the precondition for information sharing.
**Ethics and empathy thread:** Assuming good intent — reframing "difficult colleagues" as rational players facing different payoffs.

- **Topic video:** Two department chairs quietly hoarding block time, each protecting their own service, producing systemwide underutilization. Names the structure: a Prisoner's Dilemma over shared capacity.
- **AI Concept Coach:** Identifying players, strategies, and payoffs in three short healthcare scenarios; probes the classic misconception that "cooperation is always naive."
- **Case with MCQ:** "The Float Pool Problem." Two nursing units under-report acuity to keep float nurses. Questions require identifying the game structure, predicting the equilibrium, and choosing the intervention that changes payoffs rather than merely exhorting cooperation.
- **One-on-one simulation:** The learner, as a new service line director, meets with a peer director (persona: guarded, burned by past resource grabs) to propose transparent capacity sharing. Success requires acknowledging the peer's history before proposing structure.
- **Multidisciplinary meeting:** A capacity committee with surgery, anesthesia, nursing, and finance. The learner must surface the hidden hoarding dynamic without blaming any individual.
- **Debrief focus:** Where in the learner's real organization does a Prisoner's Dilemma currently operate, and what payoff could be changed?

### Module 2: The Handoff — Information Asymmetry and Signaling

**Unit:** Emergency department to inpatient medicine, Meridian Academic Medical Center.
**Game theory concept:** Games of incomplete information. Information asymmetry, signaling, and screening. Why the party with less information must design questions (screens) and the party with more information must design credible signals. Cheap talk versus costly signals.
**TeamSTEPPS / communication anchor:** SBAR, check-back, and structured handoff tools — reframed explicitly as signaling protocols that solve an information-asymmetry problem.
**Ethics and empathy thread:** The patient as the ultimate holder of private information; eliciting disclosure through trust rather than interrogation.

- **Topic video:** A deteriorating patient is handed off with a vague report; the receiving team anchors on the wrong problem. SBAR reframed as a mechanism that forces high-value information transfer between parties who cannot read each other's minds.
- **AI Concept Coach:** Cheap talk versus credible signals: a vendor's marketing claim versus a money-back guarantee; a resident saying "I'm fine" versus their falling documentation quality.
- **Case with MCQ:** "The Quiet Consult." A subspecialist's terse notes hide uncertainty. Learners choose screening questions that surface what the consultant actually believes.
- **One-on-one simulation:** A handoff from a rushed AI clinician persona who omits a critical detail. Scored on structured elicitation (check-back, targeted screens) and tone — pressure without hostility.
- **Multidisciplinary meeting:** An M&M-style review of a handoff failure. The learner facilitates, keeping the discussion on system signaling failures rather than individual blame.
- **Debrief focus:** What information asymmetries exist between the learner and their own team, boss, or patients, and which signals or screens could reduce them?

### Module 3: Repeat Customers — Reputation, Trust, and the Shadow of the Future

**Unit:** Nursing–physician relations, Meridian Community Hospital.
**Game theory concept:** Repeated games. Why cooperation becomes rational when interactions recur (the folk theorem, presented intuitively). Tit-for-tat, generosity, and forgiveness as strategies (Axelrod's tournaments). Reputation as capital. How one defection echoes.
**TeamSTEPPS / communication anchor:** Mutual support; feedback delivered with the intent to maintain the relationship; the two-challenge rule and CUS as tools that let team members challenge one another without destroying long-run cooperation.
**Ethics and empathy thread:** Repair. What a genuine apology contains; rebuilding trust after a defection.

- **Topic video:** A physician publicly dismisses a nurse's concern; the unit's incident-reporting quietly drops for months. One defection changed everyone's expectations about future rounds of the game.
- **AI Concept Coach:** When tit-for-tat outperforms both permanent grudges and unconditional niceness, and why "generous tit-for-tat" wins in noisy environments like hospitals, where apparent defections are often misunderstandings.
- **Case with MCQ:** "The Second Chance." A pharmacy director must respond to a colleague who undermined her in a budget meeting, knowing they will co-lead a project next quarter.
- **One-on-one simulation:** Repairing a strained relationship with an AI charge-nurse persona after the learner's character previously dismissed her escalation. Scored on acknowledgment, specific apology, and a concrete forward commitment.
- **Multidisciplinary meeting:** A unit-based safety huddle where the learner must invite challenge from a team that has learned to stay silent — rebuilding the "shadow of the future" through visible responses to speaking up.
- **Debrief focus:** Which of the learner's real relationships are being played as one-shot games that are actually repeated games?

### Module 4: The Contract Table — Negotiation and Bargaining

**Unit:** Payer relations and supply chain, Meridian Health system office.
**Game theory concept:** Bargaining theory. Distributive versus integrative negotiation (claiming versus creating value). BATNA as the true source of bargaining power. The negotiator's dilemma: honesty about interests creates value but exposes you. Anchoring.
**Communication anchor:** Principled negotiation (interests, not positions; objective criteria; separating people from the problem). Active listening as an information-gathering strategy, not a courtesy.
**Ethics and empathy thread:** Negotiating with parties who have less power without exploiting the asymmetry; the long-run cost of extractive wins.

- **Topic video:** A value-based-care contract negotiation between Meridian and a regional payer — the deal changed when both sides moved from rate haggling (distributive) to risk-sharing design (integrative).
- **AI Concept Coach:** Computing and improving a BATNA; interests versus positions across five rapid healthcare scenarios.
- **Case with MCQ:** "The Locum Squeeze." A staffing agency raises rates mid-crisis. BATNA analysis, anchoring recognition, integrative moves under pressure.
- **One-on-one simulation:** A full negotiation with an AI payer-representative persona holding hidden flexibility on quality-bonus structure but rigid on base rates. Scored on interest discovery, value creation, and relationship preservation.
- **Multidisciplinary meeting:** An internal pre-negotiation strategy huddle: finance, clinical leadership, and legal each push different priorities; the learner must forge a unified mandate and decide the team's true reservation point.
- **Debrief focus:** The learner maps an upcoming real negotiation: their interests, the counterpart's likely interests, both BATNAs, and one integrative option.

### Module 5: The Rapid Response — Coordination Games and Team Communication Under Pressure

**Unit:** Inpatient medicine and rapid response team, Meridian Academic Medical Center.
**Game theory concept:** Coordination games (distinct from cooperation games — here everyone wants to align, but may fail to). Focal points (Schelling points). Why explicit protocols, shared mental models, and closed-loop communication exist: they manufacture focal points so teams converge instantly under uncertainty. Common knowledge — the difference between "I know" and "everyone knows that everyone knows."
**TeamSTEPPS / communication anchor:** The most TeamSTEPPS-dense module: briefs, huddles, and debriefs; call-out and check-back (closed-loop communication); situation monitoring and the shared mental model; cross-monitoring.
**Ethics and empathy thread:** Speaking up across hierarchy in the moment; graded assertiveness when a leader is fixating.

- **Topic video:** A rapid response where two clinicians each assume the other called the intensivist. Not a failure of goodwill, but a coordination failure — call-out and check-back create common knowledge.
- **AI Concept Coach:** Paired scenarios distinguishing cooperation failures (misaligned incentives, Module 1) from coordination failures (aligned incentives, misaligned expectations), because the interventions differ completely.
- **Case with MCQ:** "The Silent Assumption." A deteriorating post-operative patient; identifying missing common knowledge and selecting the correct TeamSTEPPS tool for each gap.
- **One-on-one simulation:** A time-pressured scenario using graded assertiveness (concern → CUS → two-challenge rule) with an AI senior-physician persona anchored on a wrong diagnosis.
- **Multidisciplinary meeting:** A simulated rapid response with nursing, respiratory therapy, pharmacy, and a resident. The learner leads: assigning roles explicitly, requiring check-backs, and running a two-minute debrief at the end. Scoring emphasizes closed-loop completion rate.
- **Debrief focus:** Where does the learner's real team rely on assumed rather than common knowledge?

### Module 6: The Allocation Meeting — Fairness, Ethics, and the Ultimatum at the Bedside

**Unit:** Ethics committee and critical care, Meridian Health.
**Game theory concept:** The ultimatum game and what it reveals: humans reject "rational" but unfair offers, at real cost — fairness perceptions are payoffs. Procedural justice versus distributive justice. Triage and rationing as formal allocation mechanisms; why transparent procedures sustain legitimacy even when outcomes are painful.
**Communication anchor:** Delivering decisions people will hate; acknowledging moral distress; transparency about criteria and process.
**Ethics and empathy thread:** The program's ethical core. Utilitarian, deontological, and justice-based reasoning applied to real allocation problems, with explicit attention to equity and to whose voice is missing from the room.

- **Topic video:** A crisis-standards-of-care scenario drawn from documented pandemic experience. Two hospitals making the same painful allocation — one with a transparent, pre-committed procedure, one ad hoc — and the divergent aftermath in staff trust and community legitimacy.
- **AI Concept Coach:** The ultimatum game played interactively (the AI makes offers; the learner experiences the pull to reject unfair ones), connected to why stakeholders reject processes they were excluded from.
- **Case with MCQ:** "One Bed, Two Patients." Ethical-framework identification, procedural-justice design, and communicating an allocation decision to a family.
- **One-on-one simulation:** Informing an AI family-member persona of a difficult resource decision. Scored on honesty, empathy markers, avoidance of false reassurance, and clarity about process.
- **Multidisciplinary meeting:** An ethics committee deliberation with personas holding sincerely different frameworks (a utilitarian intensivist, a rights-focused chaplain, a legally cautious administrator, a community representative). The learner facilitates toward a defensible, transparent process rather than forced consensus.
- **Debrief focus:** Which ethical framework does the learner default to under pressure, and what would the other frameworks protect that theirs misses?

### Module 7: The Coalition — Politics, Alliances, and Getting Innovation Adopted

**Unit:** Innovation office, Meridian Health; the case is the adoption of a new clinical technology.
**Game theory concept:** Cooperative game theory: coalitions, pivotal players, and the intuition behind the Shapley value. Stakeholder mapping as coalition analysis. Agenda-setting and sequencing: the order in which you approach stakeholders changes the outcome. Organizational politics reframed as coalition formation rather than dark art.
**Communication anchor:** Tailoring the same proposal to different stakeholder payoff structures without misrepresenting it; influencing without authority.
**Ethics and empathy thread:** The line between coalition-building and manipulation; transparency about interests; bringing skeptics inside rather than routing around them.

- **Topic video:** An innovation (an AI-assisted early-warning tool) that failed at one hospital and succeeded at another with identical evidence — the difference being coalition sequence: who was recruited first, whose concerns shaped version two, and which pivotal player (the informal opinion-leader nurse, not the CMO) was engaged early.
- **AI Concept Coach:** Pivotal-player analysis: given a stakeholder map with stated positions and influence, identify whose movement changes the winning coalition.
- **Case with MCQ:** "The Pilot That Stalled." A pilot with strong data is dying in committee. Stakeholder-payoff analysis, sequencing choices, and identifying the ethically bright line in each persuasion option.
- **One-on-one simulation:** Recruiting an AI skeptical-department-chief persona whose real objection (workflow burden and loss of autonomy) differs from their stated objection (evidence quality). Success requires surfacing the true interest through perspective-taking.
- **Multidisciplinary meeting:** A governance committee vote is approaching. Five personas: two supportive, one pivotal and undecided, two opposed for different reasons. The learner has one meeting to move the coalition — with scoring that penalizes misrepresentation to any party.
- **Debrief focus:** The learner maps a real initiative as a coalition problem: current members, pivotal players, and the honest version of the pitch for each.

### Module 8: The System Redesign — Mechanism Design and Leading at Scale (Capstone)

**Unit:** System strategy retreat, Meridian Health.
**Game theory concept:** Mechanism design — "reverse game theory": instead of playing the game well, redesign the rules so that ordinary self-interested behavior produces the outcomes you want. Incentive compatibility. Why so many healthcare dysfunctions (fee-for-service overuse, quality-metric gaming, ED boarding) are predictable equilibria of badly designed mechanisms. Goodhart's law: when a measure becomes a target, it stops being a good measure.
**Communication anchor:** Change leadership communication — articulating the "why" of a rule change; communicating during the messy middle of a transition; synthesis of all prior modules' tools.
**Ethics and empathy thread:** Designing incentives that respect intrinsic clinical motivation rather than crowding it out; anticipating who is harmed by a redesign and building that into the mechanism.

- **Topic video:** One dysfunction (ED boarding at Meridian) traced from surface blame ("the floors won't take patients") down to its mechanism roots (discharge-timing incentives, bed-management information flow), and then through a redesign.
- **AI Concept Coach:** Three metric-gaming vignettes; the learner redesigns each measure or incentive so that gaming it and doing the right thing become the same behavior.
- **Case with MCQ:** "The Perverse Incentive." A readmission-penalty program produces an unintended equilibrium; mechanism diagnosis and redesign selection.
- **One-on-one simulation:** Presenting a redesign to an AI chief-financial-officer persona, translating clinical and game-theoretic logic into financial language.
- **Capstone multidisciplinary meeting:** The longest simulation in the program (25 minutes): a strategy-retreat working session with six personas spanning the whole system, in which the learner facilitates the redesign of one Meridian mechanism end-to-end — diagnosing the current game (Modules 1–2), managing relationships and coalition (Modules 3, 7), negotiating trade-offs (Module 4), running the meeting with structured communication (Module 5), and holding the ethical line (Module 6).
- **Debrief focus:** A summative reflection across all eight rounds, producing a personal "playbook": diagnosed default tendencies, strongest and weakest bearings, and three mechanisms in the learner's real organization they now see differently.

## Assessment Architecture

Assessment is designed as data structures from day one:

1. **Knowledge (MCQ layer).** Each module carries 8–12 items tagged to a competency map (game theory concept × TeamSTEPPS tool × ethical framework). Tagging enables mastery dashboards and spaced retrieval: missed concepts resurface as brief "curbside consult" questions in later modules.
2. **Performance (simulation layer).** Simulated meetings are scored against behaviorally anchored rubrics. Recommended anchors: closed-loop communication completion (Module 5), interest-versus-position statements (Module 4), acknowledgment-before-advocacy moves (Modules 3, 7), and empathy markers such as naming emotion and legitimizing perspective (Modules 2, 6). For team-facilitation scoring, TeamSTEPPS observation instruments and validated debriefing rubrics (such as DASH) provide defensible starting anchors.
3. **Transfer (reflection layer).** Every debrief ends with a written commitment applying the concept to the learner's actual organization. Modules 4, 7, and 8 explicitly build on earlier commitments, creating longitudinal evidence of transfer.

## Implementation Notes

- **Component-to-architecture mapping.** The six-part rhythm maps onto a three-phase simulation pipeline: live persona conversation (Steps 4–5), batch scoring against rubrics, then an AI debriefing agent (Step 6). One-on-one simulations are single-agent; multidisciplinary meetings require a lightweight orchestrator that manages turn-taking among personas — prototype first in Module 5, where turn-taking is most protocolized.
- **Persona economy.** Author roughly 12–15 persistent Meridian personas (role, backstory, incentive structure, hidden information, communication style, relationship history) and reuse them across modules. Persistent personas are what make the repeated-game lessons of Module 3 felt rather than merely explained.
- **"Switch Chairs"** requires only role inversion in the same scenario definition — inexpensive to build, and likely the highest empathy-per-engineering-hour feature in the program.
- **Start narrow.** A strong pilot slice is Module 5 (most protocolized, most measurable, closest to existing TeamSTEPPS validation evidence) plus Module 1 (establishes the conceptual foundation and the Meridian setting).

## Foundational References

- Agency for Healthcare Research and Quality. *TeamSTEPPS 3.0 Curriculum.* AHRQ.
- Axelrod, R. (1984). *The Evolution of Cooperation.* Basic Books. (Module 3)
- Schelling, T. (1960). *The Strategy of Conflict.* Harvard University Press. (Module 5)
- Fisher, R., Ury, W., & Patton, B. (2011). *Getting to Yes.* Penguin. (Module 4)
- Dixit, A., & Nalebuff, B. (2008). *The Art of Strategy.* W. W. Norton.
- Güth, W., Schmittberger, R., & Schwarze, B. (1982). An experimental analysis of ultimatum bargaining. *Journal of Economic Behavior & Organization, 3*(4), 367–388. (Module 6)
- Rudolph, J. W., Simon, R., Rivard, P., Dufresne, R. L., & Raemer, D. B. (2007). Debriefing with good judgment. *Anesthesiology Clinics, 25*(2), 361–376. (Step 6)
- Emanuel, E. J., et al. (2020). Fair allocation of scarce medical resources in the time of Covid-19. *NEJM, 382*, 2049–2055. (Module 6)
- Roth, A. (2015). *Who Gets What — and Why.* Houghton Mifflin Harcourt. (Module 8)
- Kotter, J. P. (2012). *Leading Change.* Harvard Business Review Press. (Modules 7–8)
