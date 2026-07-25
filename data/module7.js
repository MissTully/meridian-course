/* Module 7 — The Coalition: Politics, Alliances, and Getting Innovation
   Adopted. Fully authored content. */

export const module7Content = {
  /* ------------------------- Step 1: Topic Video ------------------------- */
  video: {
    vpTitle: "Same Evidence, Opposite Fates",
    vignette: [
      "The early-warning tool was the same at both hospitals: an algorithm watching vital-sign trends, flagging deterioration six hours before clinicians typically catch it. Same vendor, same validation studies, same implementation budget. At Northgate Medical, it died in four months — quietly smothered by workarounds, alert-silencing, and a medical staff vote that made the pilot 'voluntary,' which is how hospitals pronounce last rites. At Riverside, eighteen months later, it's credited with a measurable mortality improvement and the nurses would riot if you removed it.",
      "The difference was not the evidence. Northgate led with the evidence: a polished grand-rounds presentation by the CMO, data on every slide, and the pilot units announced by memo the following week. The units heard: something built elsewhere is being done to us, and the informal verdict — rendered at nursing stations, in the surgeons' lounge, nowhere the CMO could see — was in before the first alert fired.",
      "Riverside's champion spent her first two months not presenting to anyone. She mapped the terrain: who would gain, who would pay, and — most carefully — who moved opinion on the units where the tool would live. The person she recruited first wasn't the CMO. It was a night-shift nurse named Okonkwo whom every unit listened to, who hated the tool's alert design and said so — and whose objections became version two's redesign. By the time Riverside's medical executive committee voted, the vote was a formality: the coalition had already adopted it. The committee just made it official.",
    ],
    teaching: [
      {
        h: "Adoption is a coalition problem, not an evidence problem",
        p: "Cooperative game theory studies what groups can achieve together and how the achievable changes with membership. An innovation succeeds when a winning coalition — enough of the right people, not most people — actively carries it; evidence is merely one recruitment tool, and rarely the decisive one. The Northgate error is near-universal among smart people: believing that being right is a strategy. The stakeholders who killed the tool never disputed the mortality data. They disputed, without ever saying so, who would bear the workflow cost, whose autonomy shrank, and who got credit — and those disputes were settled in rooms the evidence never entered.",
      },
      {
        h: "Pivotal players: the Shapley intuition",
        p: "Not all coalition members matter equally. A player's real influence is measured by how often their joining converts a losing coalition into a winning one — that's the intuition behind the Shapley value, and it redraws every org chart. The CMO whose support was never in doubt adds little marginal power; the night-shift opinion leader whose stance determines forty nurses' cooperation is worth more than her title suggests, because whole coalitions live or die on her movement. Map stakeholders by pivotality, not seniority: whose movement changes the outcome?",
      },
      {
        h: "Sequencing: the order of recruitment changes the outcome",
        p: "Coalition-building is path-dependent. Recruit the skeptical opinion leader first and her fingerprints on version two convert forty skeptics into co-owners; recruit her last and she arrives facing a finished object she can only accept or sabotage. Early recruits shape the proposal (making it genuinely better and visibly shared); late recruits inherit it. This is why identical proposals with identical evidence meet opposite fates — the outcome was determined by the order in which the same conversations happened. Agenda-setting, timing, and who-hears-it-from-whom are not politics around the work. They are the work.",
      },
      {
        h: "The ethics of influence: coalition-building versus manipulation",
        p: "Everything above can be done manipulatively — and the line, usefully, is bright: tailoring the same true proposal to each stakeholder's real interests is coalition-building; telling different stakeholders incompatible things, concealing material costs, or manufacturing false urgency is manipulation. The test is exposure: if every stakeholder compared notes on what you told them, would the versions cohere? Bring skeptics inside rather than routing around them — not only because it's honest, but because routed-around skeptics reliably reappear at ratification with veto power and a grievance. The transparent version is also, in every repeated game, the only version that works twice.",
      },
    ],
  },

  /* ---------------------- Step 2: AI Concept Coach ---------------------- */
  coach: {
    coachName: "The Concept Coach",
    intro:
      "Before you take an innovation into Meridian's political terrain, three drills: reading pivotality from a stakeholder map, choosing recruitment order, and locating the ethical bright line under pressure.",
    exchanges: [
      {
        coach:
          "Drill one — pivotality. A committee will vote on your proposal. The map: the CEO's ally chairs it (supportive, votes with two others following); the CFO is opposed unless costs are offset; two clinical chiefs are undecided and vote together, historically following whichever way the informal physician opinion leader — who holds no committee seat — has moved the medical staff; one member always votes no. Who is the pivotal player, and why isn't it who the org chart says?",
        options: [
          {
            text: "The seatless opinion leader — because the two undecided chiefs move with the medical staff mood she sets, and their two votes decide the outcome. Her movement converts a losing coalition into a winning one; the chair's support, already certain, converts nothing.",
            quality: "good",
            feedback:
              "Exactly the Shapley intuition operationalized: influence is measured at the margin — how often does this person's joining flip the coalition from losing to winning? The chair's three votes are baked into every scenario, so his marginal power is near zero despite maximal seniority. The opinion leader appears in no scenario's formal count and decides most of them. Corollary worth keeping: the people whose support you should work hardest for are rarely the people whose support feels best to have.",
          },
          {
            text: "The CFO — money decides everything in the end, and an unfunded proposal dies regardless of votes.",
            quality: "partial",
            feedback:
              "The CFO is a *gatekeeper* — a genuine veto to be satisfied — but gatekeeping and pivotality are different properties: his condition is known and stable (offset the costs), so satisfying him is necessary work with a defined price. He doesn't *swing*. The undecided chiefs swing, and they swing on the opinion leader's signal. Budget for the gatekeeper; campaign for the pivot. Confusing the two is how proposals arrive fully funded and still lose.",
          },
          {
            text: "The chair — control the committee's agenda and process and the vote takes care of itself.",
            quality: "miss",
            feedback:
              "Agenda control is real power in general, but run the arithmetic here: the chair's bloc is three votes, committed, in every scenario — his support is the coalition's floor, not its ceiling, and no agenda maneuver conjures the two undecided votes that decide the outcome. This is the seniority reflex the Shapley lens exists to correct: the most powerful-looking player is often the least pivotal precisely because his position is never in doubt.",
          },
        ],
      },
      {
        coach:
          "Drill two — sequencing. Same committee, and you have three weeks. Your instinct says lock in friendly support first: momentum, safety, early wins. The Shapley map says the seatless opinion leader is pivotal — and she's publicly skeptical of your proposal. Who do you approach first, and what do you ask for?",
        options: [
          {
            text: "The skeptical opinion leader, first, privately — and I don't ask for support. I ask for her objections in detail, and I mean it: if her concerns reshape the proposal, she becomes a co-author whose fingerprints recruit her whole following; if I collect the friendlies first and reach her last, she meets a finished object and her only remaining moves are acquiescence or opposition.",
            quality: "good",
            feedback:
              "That's the Riverside play, and you've named its engine: early conversations shape the proposal, late ones merely tally it. The ask matters as much as the order — requesting objections rather than support converts the encounter from a sales call (which skeptics repel reflexively) into a design consultation (which flatters accurately: her objections probably ARE the workflow truth). The friendlies cost you nothing to recruit in week three; the skeptic's co-authorship can only be bought in week one. Spend scarce time where it's pivotal.",
          },
          {
            text: "The friendlies first — a visible bloc of early support creates momentum and makes the skeptic's eventual opposition look isolated.",
            quality: "partial",
            feedback:
              "Momentum is real, and look at what this sequencing does to the pivotal player: by the time you reach her, your coalition's shape is public, the proposal is socially finished, and your visit reads as 'we're winning; join or be isolated.' Skeptical opinion leaders do not join momentum plays against their own following — they define themselves against them, and her 'isolated' opposition moves the two votes you actually needed. Momentum recruits the recruitable. Pivots require design access, which only exists early.",
          },
          {
            text: "Skip her entirely — build the majority through the committee members who actually hold votes, and let the informal network discover the decision after it's made.",
            quality: "miss",
            feedback:
              "Routing around the pivot: the maneuver with the best two-week results and the worst two-year ones. Even if you scrape the vote, you've now installed an innovation over the objection of the person who sets the mood on the units where it must live — and implementation is a thousand daily votes she wins by default (Northgate's workarounds, silenced alerts, 'voluntary' pilots). Routed-around skeptics don't disappear; they meet you at ratification or, worse, at adoption, holding the veto that actually matters.",
          },
        ],
      },
      {
        coach:
          "Drill three — the bright line. You're recruiting two stakeholders for the same monitoring tool. To the CFO you plan to emphasize reduced ICU transfers (real, projected $1.8M). To the CNO you plan to emphasize earlier nursing escalation with fewer failure-to-rescue events (also real). A colleague says: 'That's spin — you're telling everyone what they want to hear.' Where exactly is the line, and which side is this on?",
        options: [
          {
            text: "The test is coherence under exposure: if the CFO and CNO compared notes, both stories are true facets of one proposal — that's tailoring, and it's not just ethical but respectful, meeting each stakeholder at their real interests. It becomes manipulation the moment the versions couldn't survive the comparison: incompatible promises, concealed costs, different facts for different rooms.",
            quality: "good",
            feedback:
              "The bright line, precisely drawn. Tailoring is translation — one true proposal, rendered in each stakeholder's native interest-language — and refusing to translate isn't integrity, it's laziness that outsources comprehension to your audience. Manipulation is version-forking: the alert-burden data shown to the CFO but not the CNO, the staffing cost mentioned nowhere. Practical discipline that keeps you on the right side: imagine all your stakeholders in one room comparing notes — because at ratification, they will be. Build every pitch to survive that meeting.",
          },
          {
            text: "It's on the safe side as long as everything said is technically true — truth is the standard, and both benefit claims are real.",
            quality: "partial",
            feedback:
              "Truth is necessary and not sufficient — the classic gap is the *material omission*: every sentence true, and the alert-fatigue cost carefully present in neither room. Selection can lie while every selected fact is accurate. That's why the exposure test beats the truth test: 'is each claim true?' can be gamed by curation; 'would the versions cohere if compared?' catches the curation itself. Upgrade your standard from true statements to a coherent whole.",
          },
          {
            text: "The colleague is right — principled advocacy means one identical presentation for every audience; anything else is telling people what they want to hear.",
            quality: "miss",
            feedback:
              "Run the thought experiment: the identical presentation contains ICU-transfer economics the CNO doesn't need and escalation-workflow detail the CFO won't parse — so the 'principled' version communicates worse to both while feeling purer to you. Purity that degrades comprehension serves the presenter, not the audience. The ethical duty was never sameness; it's coherence — one proposal, honestly translated, that survives every cross-comparison. Uniformity is a formatting choice masquerading as a virtue.",
          },
        ],
      },
    ],
    close:
      "You can find the pivot the org chart hides, spend your early access where it compounds, and tailor without forking. Now the real terrain: Meridian's own early-warning tool is stalled in committee, and the person who decides its fate runs hospital medicine at Community — and thinks it's a bad idea.",
  },

  /* ------------------- Step 3: Branching Case with MCQ ------------------- */
  mcqCase: {
    title: "The Pilot That Stalled",
    narrative: [
      "Eight months ago, Meridian's innovation office launched a pilot of VigilSense, an AI-assisted early-warning system, on two units at the Academic Medical Center. The clinical results are genuinely strong: earlier sepsis recognition, a 31% reduction in failure-to-rescue events, and — after a rocky first month — alert rates tuned to a level the pilot units' nurses describe as 'actually livable.' The plan was system-wide adoption, starting with Meridian Community Hospital.",
      "The plan is dying. The governance committee has tabled the expansion vote twice. At Community, the medical staff's informal verdict has hardened before any formal process: hospitalists describe the tool as 'the academic center grading our care from a dashboard,' and Dr. Nathalie Fontaine — chief of hospital medicine, the physician whose read on things becomes her department's read by Friday — has told three colleagues the evidence 'wouldn't survive a real methods review.' The innovation office has responded by strengthening the evidence: a new outcomes analysis, an external validation study, a planned grand-rounds presentation by the AMC's data science lead. The committee vote is in five weeks.",
    ],
    questions: [
      {
        id: "m7q1",
        stem: "Diagnose the innovation office's current strategy — more evidence, delivered by the AMC's data science lead at grand rounds. What is its central error?",
        tags: ["Coalition diagnosis", "Evidence vs. adoption"],
        options: [
          {
            key: "A",
            text: "It treats a coalition problem as an evidence problem: the stated objection is methodological, but the operative objections — workflow burden, autonomy, and the academic center grading Community's care — are untouched by better statistics, and the chosen messenger embodies the actual grievance.",
            correct: true,
            feedback:
              "Right on both counts, and the messenger detail is the giveaway: sending the AMC's data scientist to lecture Community's physicians about their care is the Northgate play with the irritant doubled — it performs the exact hierarchy the resistance is about. Note the diagnostic rule: when strengthening the evidence produces hardening rather than movement, the evidence was never the binding constraint. Stated objections are opening positions (Module 4's lesson, transposed); operative interests live underneath, and only conversations — not presentations — reach them.",
          },
          {
            key: "B",
            text: "The error is speed: eight months of pilot data is too thin, and rushing the vote invites legitimate methodological challenge.",
            feedback:
              "If methods were the operative objection, this would bite — but test it against the evidence in the case: the verdict at Community hardened *before* any formal review, spread through informal channels, and is phrased in identity terms ('grading our care'). Objections that precede examination aren't about the examined thing. More months of data feeds the stated objection while the operative ones compound; the tabled votes will simply become three.",
          },
          {
            key: "C",
            text: "The error is targeting: Community was the wrong second site — expansion should start with a friendlier hospital and let success spread inward.",
            feedback:
              "Sequencing sites is a real consideration, but trace where this leads: another success at a friendly site is more evidence — and the case already demonstrates that evidence isn't the constraint at Community. Worse, 'we'll come back to Community later with more proof' deepens the exact grievance in play (the academic center deciding what Community needs). The resistant site isn't an obstacle on the route. It IS the route: crack the adoption problem where it's hardest and the coalition you build there travels.",
          },
          {
            key: "D",
            text: "There is no strategic error — strong evidence plus persistent presentation is how adoption is supposed to work, and committees table things; that's normal friction.",
            feedback:
              "Two tabled votes, a hardened informal verdict, and an opinion leader telling colleagues the evidence is fake — read as 'normal friction' — is how innovation offices write their own post-mortems in advance. The Northgate case had identical vital signs at this stage. Friction that responds to evidence with identity language ('grading OUR care') is diagnostic: the game being played is not the game the innovation office is playing.",
          },
        ],
      },
      {
        id: "m7q2",
        stem: "Map the coalition. The governance committee: two reliable supporters (the CMO and the AMC's chief of quality), two opposed for different reasons (the CFO — unconvinced the license cost pencils; a community board member — worried about algorithmic bias against the hospital's patient population), and the swing bloc: three members who historically vote wherever Community's medical staff sentiment points. Who is the pivotal player, and what does that make the five weeks for?",
        tags: ["Pivotal players", "Stakeholder mapping", "Shapley intuition"],
        options: [
          {
            key: "A",
            text: "Dr. Fontaine — she holds no committee seat, but Community's medical staff sentiment is functionally her read, and the three swing votes follow it. The five weeks are for moving her from opponent to co-designer, which requires reaching her operative objections, not her stated one.",
            correct: true,
            feedback:
              "Correct: the vote's arithmetic runs through a person who will never cast one — the purest form of the Shapley lesson. And note what her pivotality implies about method: pivots of this kind can't be pressured (pressure confirms the grievance) or out-argued (the stated objection isn't the real one). They can only be *recruited*, which means design access: her objections, taken seriously enough to reshape the thing. The one-on-one simulation ahead is exactly this conversation.",
          },
          {
            key: "B",
            text: "The CFO — two of the four committed votes are opposed, and money objections are the kind that actually kill proposals; satisfy the license-cost concern and the vote follows.",
            feedback:
              "The CFO is a gatekeeper with a stable, known price (make it pencil — the ICU-transfer math from the pilot probably does it), and that work must be done. But run the count: satisfying him yields three committed votes against one opposed, with three swings still following Community sentiment — which Fontaine sets. Fund the proposal fully and it still loses if she's against it. Gatekeepers get budgeted for; pivots get campaigned for. (The bias concern, similarly, is a legitimate design demand — address it as one, and notice doing so may matter to Fontaine too.)",
          },
          {
            key: "C",
            text: "The CMO — as the innovation's senior sponsor, her active advocacy with the swing bloc converts them faster than any external recruitment.",
            feedback:
              "The CMO's support is certain in every scenario — marginal power near zero — and her advocacy with the swing bloc runs through exactly the wrong channel: the swings follow Community sentiment *because* they're wary of AMC leadership steering Community's practice. Senior sponsorship pushing harder on that wire doesn't move the votes; it confirms the story that moves them the other way. Sponsors hold umbrellas. They don't swing swing votes that are defined by resistance to sponsors.",
          },
          {
            key: "D",
            text: "The three swing members themselves — they hold the actual deciding votes, so the five weeks should be spent lobbying them directly.",
            feedback:
              "They hold the votes and not the decision — the case tells you their revealed rule: they vote where Community's medical staff sentiment points. Lobbying the followers while the leader remains opposed buys you three polite meetings and no movement; worse, direct lobbying that visibly routes around Fontaine reads at Community as one more AMC maneuver, hardening the sentiment the swings actually track. Move the signal, not the antennas.",
          },
        ],
      },
      {
        id: "m7q3",
        stem: "You get thirty minutes with Dr. Fontaine. Intelligence from the module: her stated objection is evidence quality; her operative objections are alert-burden on her chronically stretched hospitalists and the autonomy story ('the AMC grading our care'). Which opening best serves the recruitment?",
        tags: ["Perspective-taking", "Interest excavation", "Skeptic recruitment"],
        options: [
          {
            key: "A",
            text: "'I'm not here to sell you VigilSense — the committee math makes you the person whose judgment decides this, so I'd rather have your real objections while the design can still move. What would this tool have to get right — and what would it have to never do — for hospital medicine at Community to want it?'",
            correct: true,
            feedback:
              "Every element is doing coalition work: naming her pivotality honestly (she knows the math; pretending otherwise insults her), asking for objections rather than agreement (design access, the only currency that recruits skeptics), and the two-sided question — 'get right' and 'never do' — which invites the operative concerns (burden, autonomy) out from behind the stated one without ever calling her stated objection a pretext. If her answers reshape version two, her following inherits her fingerprints. That's the whole play.",
          },
          {
            key: "B",
            text: "Open by addressing the stated objection head-on: walk her through the external validation study's methodology, since respecting her evidence concern means answering it rigorously.",
            feedback:
              "Respectful in intent, and it accepts the opening position as the interest — Module 4's exact error. Two failure modes follow: if the methods review is satisfied, the objection migrates ('the population differs at Community...') because it was never the operative one; and thirty minutes of you presenting is thirty minutes of her not designing. Bring the validation study; leave it in the bag until she asks. The meeting's scarce resource is her authorship, not your rigor.",
          },
          {
            key: "C",
            text: "Bring the pilot units' nursing data on alert-burden reduction — pre-empting her real concern shows you've done the homework and takes her best card off the table.",
            feedback:
              "Half right: the alert-tuning story is genuinely relevant to her operative concern. But examine the frame — 'taking her best card off the table' treats the meeting as a debate to win, and pre-empting a concern she hasn't voiced denies her the authorship moment where recruitment actually happens. There's a version-two's difference between 'we already solved your problem' and 'what problems must we solve?' — the first closes a conversation, the second opens a coalition. Same data, opposite sequencing.",
          },
          {
            key: "D",
            text: "Acknowledge the politics directly: 'Between us, the committee math says your view decides this — I'd rather work with you than around you, and I think we can find terms that work for Community.'",
            feedback:
              "Closer than it looks — the transparency about pivotality is right (and matches option A). What's missing is the substance underneath: 'find terms that work' is deal language without design content, and skeptics of Fontaine's caliber hear it as horse-trading — which converts a clinical-judgment conversation into a political one, confirming her darkest read of the innovation office. Name the math, then immediately make it about the tool's design and her units' reality. Politics acknowledged, then transcended.",
          },
        ],
      },
      {
        id: "m7q4",
        stem: "Sequencing the five weeks: you'll need the CFO's cost concern satisfied, the board member's bias concern addressed, Fontaine recruited, and the CMO's sponsorship deployed. Which ordering reflects this module's logic?",
        tags: ["Sequencing", "Agenda-setting", "Coalition assembly"],
        options: [
          {
            key: "A",
            text: "Fontaine first (design access while the proposal can still move — her requirements likely reshape it); the board member's bias concern in parallel as a real design workstream (equity audit of the algorithm, Community's population in the validation); the CFO once the redesign stabilizes (cost case built on the version being voted on); the CMO's sponsorship last and lightly (blessing a coalition, not leading a charge).",
            correct: true,
            feedback:
              "The path-dependence logic, applied: early conversations get design access, late ones get finished objects — so the pivot goes first while 'version two' is still wet, and the bias audit runs early both because it's slow and because it's real (and note the coalition geometry: a genuine equity workstream may matter to Fontaine's read too — concerns interlock, which is why sequencing is strategy). The CFO's case is built once, on the final shape, rather than twice. And the CMO last is the subtle one: sponsorship deployed early becomes the AMC-steering story; deployed last, it ratifies something Community already owns.",
          },
          {
            key: "B",
            text: "CFO first — an unfunded proposal recruits no one, and every subsequent conversation is stronger with the finances settled.",
            feedback:
              "Reasonable-sounding, and it inverts the dependency: the finances can't actually settle first, because Fontaine's requirements and the equity audit will change what the tool costs (alert-tuning work, training load, audit infrastructure). You'd build the cost case twice and — worse — spend the pivotal early weeks, the only weeks with design access, on the gatekeeper whose price is stable. Sequence by perishability: design access expires; spreadsheets keep.",
          },
          {
            key: "C",
            text: "CMO first — secure the senior sponsor's active backing so every subsequent conversation carries institutional weight.",
            feedback:
              "Institutional weight is precisely the problem: every subsequent conversation carrying AMC-leadership momentum confirms the story Community's resistance is made of. Sponsors are load-bearing at ratification and radioactive during recruitment — the umbrella that keeps rain off the coalition also casts the shadow the skeptics already resent. The Riverside champion's first two months of *not* presenting to leadership was the discipline this option abandons.",
          },
          {
            key: "D",
            text: "All four in parallel — five weeks is short, and sequential recruitment wastes calendar the vote won't return.",
            feedback:
              "Parallel feels efficient and forfeits the mechanism that makes sequencing work: each early conversation is supposed to *change the proposal that later conversations receive*. Run them simultaneously and the CFO prices version one while Fontaine redesigns toward version two, the board member audits a third — four stakeholders, four objects, and at ratification the versions get compared (they always are) and don't cohere. That incoherence reads as manipulation even when it's just haste. Some things pipeline; coalition-shaping compounds serially.",
          },
        ],
      },
      {
        id: "m7q5",
        stem: "A colleague in the innovation office proposes a shortcut: 'Tell Fontaine the alert-burden fixes are committed regardless' (they're only funded if adoption passes), 'tell the CFO the license price is final' (the vendor privately offered a volume discount you're saving as a closing move), 'and tell the board member the bias audit is already underway' (it starts only if the vote passes). Each statement is 'close enough.' What does this module say?",
        tags: ["Ethics of influence", "Bright line", "Repeated games"],
        options: [
          {
            key: "A",
            text: "All three fail the exposure test — they are incompatible with each other and with the facts, and stakeholders compare notes at exactly the moment it matters most. Beyond ethics, it's strategically ruinous: each recruit's support is contingent on a falsehood, so the coalition is built on terms that detonate at ratification or implementation — and in a repeated game, the innovation office's next proposal inherits the crater.",
            correct: true,
            feedback:
              "The bright line, applied under deadline pressure — which is the only time it matters. Note the structure of each lie: it purchases a signature by concealing a contingency, which means the contingency's eventual arrival converts an ally into someone who was *used* — the single most durable form of organizational enemy. And the repeated-game accounting is the decisive one: the innovation office negotiates with these exact stakeholders forever (Module 3's ledger). One detonation prices every future proposal. The honest versions — 'funded if we pass,' 'there's flexibility I'm holding,' 'the audit starts on adoption' — recruit more slowly and only once.",
          },
          {
            key: "B",
            text: "The Fontaine and board-member statements are unacceptable, but holding back the vendor discount as a closing move is standard negotiation practice, not manipulation.",
            feedback:
              "You're two-thirds right, and the distinction you've drawn is actually available honestly: *withholding* the discount (saying nothing about price flexibility) is legitimate negotiation reserve — Module 4 blessed it. But the colleague's version isn't withholding; it's an affirmative false statement ('the price is final') to a committee member evaluating the proposal in good faith. The line isn't between topics (money vs. clinical); it's between silence and falsehood. Keep the reserve; lose the lie.",
          },
          {
            key: "C",
            text: "It depends on outcomes: if the tool genuinely saves lives, modest packaging liberties that get it adopted are ethically defensible — the deaths prevented outweigh the process concerns.",
            feedback:
              "The utilitarian shortcut, and Module 6 already priced it: process is not packaging. Concretely — the coalition built on these three statements *implements worse* (Fontaine's units discover the burden fixes were contingent and revolt; the board member discovers the audit fiction and goes public with algorithmic-bias concerns now armed with proof of bad faith), so the lives-saved math doesn't even pencil on its own terms. Manipulation isn't a discount route to good outcomes; it's a loan against implementation, at ruinous interest.",
          },
          {
            key: "D",
            text: "The statements are imprudent but not unethical, since each is a prediction likely to become true if the vote passes — optimistic framing, not deception.",
            feedback:
              "'Likely true if the vote passes' is precisely the deception: each statement's *point* is to conceal the contingency from the person whose vote is the contingency. The stakeholder is being denied the one fact most relevant to their decision — that their support is what makes the promise true. That's not optimism; it's a circularity engineered to be invisible. The honest version of every one of these sentences contains the word 'if,' and the word 'if' is what the shortcut exists to delete.",
          },
        ],
      },
    ],
  },

  /* -------------------- Step 4: One-on-One Simulation -------------------- */
  oneOnOne: {
    simId: "oneOnOne",
    title: "Thirty Minutes with Dr. Fontaine",
    learnerRole:
      "You lead Meridian's innovation office. The VigilSense expansion vote is in five weeks, and the committee math runs through a person with no seat on it: Dr. Nathalie Fontaine, chief of hospital medicine at Community, whose read becomes her department's read by Friday. Her stated objection is evidence quality. Your intelligence — and this module — say the operative objections live underneath: alert-burden on stretched hospitalists, and autonomy ('the AMC grading our care'). She has given you thirty minutes, which she mentioned twice.",
    personas: ["fontaine"],
    scoring: {
      dims: [
        { id: "surface", label: "Surfacing the true interest", max: 4, anchor: "Reached the operative objections beneath the stated one — without calling the stated one a pretext" },
        { id: "author", label: "Design access granted", max: 3, anchor: "Converted objections into co-authorship of version two" },
        { id: "candor", label: "Transparent influence", max: 3, anchor: "Named the politics honestly; promised only what adoption can fund" },
      ],
    },
    start: "f1",
    nodes: {
      f1: {
        turns: [
          { who: "narrator", text: "Her office at Community: journals actually read, a whiteboard dense with service-line staffing math, and a printed copy of your external validation study on the desk — annotated, you notice, in three colors." },
          { who: "fontaine", text: "Thirty minutes, as advertised. And let me save you the wind-up: I've read your validation study — the annotations are mine — and I remain unconvinced the effect survives outside academic staffing ratios. So if this meeting is the road show, the study's on the desk and you can start defending it. If it's something else, surprise me." },
        ],
        choices: [
          {
            text: "Be the something else — name the math, ask for the objections: \"It's something else. Honestly: the committee arithmetic makes your judgment the decision — you know that better than I do — so I'm not here to defend a study. I'm here because version two of this tool doesn't exist yet, and I'd rather it be shaped by your objections than by our assumptions. Two questions, and the half hour is yours: what would VigilSense have to get right for your hospitalists to want it — and what must it never do?\"",
            next: "f2open",
            score: { candor: 2, surface: 1 },
            note: "Pivotality named without flattery, road show declined, and the two-sided question — 'get right' and 'never do' — that gives the operative objections a door. The annotated study stays on the desk, which is exactly where it's most useful: visible, and not between you.",
          },
          {
            text: "Defend the study — she invited it, and dodging looks evasive: \"Happy to start there. The external validation covered four community hospitals with staffing ratios comparable to yours — page eleven, the stratified analysis. The effect holds at 0.7 nurse-to-patient coverage. Walk me through the annotations; I think the methods survive them.\"",
            next: "f2methods",
            score: {},
            note: "You accepted the stated objection as the meeting. The methods discussion will be rigorous, collegial — she's good — and it will consume the thirty minutes without ever touching the objections that actually decide her, because those weren't invited to this conversation.",
          },
          {
            text: "Lead with what you've already fixed: \"Before the study — the thing I suspect matters more: alert burden. The pilot's first month was bad, we retuned, and the pilot units now run 71% fewer alerts per shift than launch. Your hospitalists' workflow was our first design priority. The burden problem is solved.\"",
            next: "f2preempt",
            score: { surface: 1 },
            note: "You guessed the operative concern correctly — and answered it before she voiced it, which converts her real worry into your talking point. 'Solved' is also a word she gets to test now, in a building you don't work in.",
          },
        ],
      },

      f2open: {
        turns: [
          { who: "narrator", text: "She looks at you for a long moment — recalibrating the meeting she'd prepared for. Then she caps her pen." },
          { who: "fontaine", text: "Huh. All right, since you asked the real question: what it must never do. It must never page my hospitalists about a patient they've already assessed — we run lean, and every false alert at Community costs triage time we don't have slack for, whatever your pilot's ratios were. And it must never — never — export a dashboard of my department's response times to some quality office at the academic center. The day this tool becomes the AMC grading Community's care is the day my entire medical staff turns it off, and I'll hand them the stepladder. The evidence question is real, but you're right that it isn't the question. Those two are the question." },
        ],
        choices: [
          {
            text: "Hand her the pen — objections into specifications: \"Then those two go from objections to specifications, written here, with your name on them: one — assessed-patient suppression; an alert on an already-assessed patient is a defect, tracked as one, tuned at Community by Community. Two — data governance in the charter: response-time data belongs to your department; nothing leaves Community without your sign-off, and the charter language is yours to draft. If version two carries those, in writing, would you look at the rest of it with us — not as a supporter, as a designer?\"",
            next: "f3design",
            score: { author: 2, surface: 1 },
            note: "The recruitment move in its purest form: her 'never' clauses converted into named specifications with her authorship attached — and the ask at the end is calibrated exactly right: not support (too early, too cheap) but design partnership, which is the only thing a skeptic of her caliber can accept without ceasing to be a skeptic.",
          },
          {
            text: "Reassure on both counts: \"Both are absolutely fair, and I can put your mind at rest: the alert engine is tunable per site, and we have zero intention of building cross-site dashboards. This tool is for your clinicians, not for oversight. You have my word on both.\"",
            next: "f3word",
            score: { surface: 1 },
            note: "'Zero intention' and 'my word' — cheap talk, by Module 2's exact definition: costless to say, indistinguishable from what a dashboard-builder would also say. She asked for 'never'; you offered 'intention.' Watch her annotations resume.",
          },
        ],
      },

      f2methods: {
        turns: [
          { who: "fontaine", text: "Twenty minutes later, three annotations in: \"...and that's my substantive concern with the stratification — 0.7 coverage on a teaching service with residents is not 0.7 coverage on my nocturnist model. Your data scientist would concede that in a hallway. But notice what we've done here: you've defended competently for twenty minutes, I've conceded nothing, and neither of us has said a word about what actually happens on my units at 3 a.m. when this thing starts paging. Was that the meeting you wanted? You have eight minutes." },
        ],
        choices: [
          {
            text: "Take her door, at full price: \"No — it's the meeting I defaulted to, and you just named the waste better than I could. Eight minutes, the real question then: forget the study — what happens on your units at 3 a.m.? What would this tool have to get right, and what must it never do, for your department to want it rather than tolerate it?\"",
            next: "f2open",
            score: { surface: 1, candor: 1 },
            note: "She held the door open — skeptics rarely do, and never twice. 'The meeting I defaulted to' owns the wasted twenty minutes without groveling, and the two-sided question finally arrives. Eight minutes is enough; recruitment runs on the right question, not the long meeting.",
          },
          {
            text: "Finish the methods case — you're close: \"Eight minutes is enough to close the stratification point: we can re-run against your nocturnist staffing model directly — give us your coverage data and the analysis is yours in two weeks. That's a testable answer to your substantive concern.\"",
            next: "f4stall",
            score: {},
            note: "A genuinely good methodological offer — and the meeting ends with the operative objections never spoken, a new two-week evidence cycle feeding the stated one, and the vote now four weeks out. The study will be excellent. The verdict at Community was never waiting on it.",
          },
        ],
      },

      f2preempt: {
        turns: [
          { who: "fontaine", text: "'Solved.' \" — she writes the word on her pad, and boxes it — \"Here's what that word costs you in this office: the pilot's tuning was done by AMC informatics for AMC units, and you've just told me my department's alert-burden problem was solved in a building where nobody runs a nocturnist model. That's not the burden problem solved; that's the burden problem *relocated to my desk with a bow on it*. And you skipped past the question you didn't ask: burden is half my objection. Want to guess the other half, or shall I watch you present at it?" },
        ],
        choices: [
          {
            text: "Stop presenting — ask, and mean it: \"No more guessing. You've just shown me the shape of my error: I brought you conclusions when the only thing that works in this office is questions. So: the other half — say it in your words, and then tell me what 'solved' would actually look like at Community, decided by Community. I'm writing, not presenting.\"",
            next: "f2open",
            score: { surface: 2 },
            note: "'I'm writing, not presenting' — the posture change she was testing for. Note what her 'boxed word' maneuver actually was: an invitation dressed as a rebuke; skeptics probe whether you can stop selling under pressure, because that predicts whether their design input would survive contact with your office.",
          },
          {
            text: "Defend the tuning's portability: \"Fair challenge — but the tuning methodology is site-agnostic: alert thresholds recalibrate to local response-time baselines within six weeks of deployment. The Community version would be tuned to Community's patterns. The relocation you're describing is exactly what the system prevents.\"",
            next: "f4stall",
            score: {},
            note: "Another conclusion, delivered at the person who just boxed your last one. The methodology may even be right — and 'the system prevents it' is one more sentence from the AMC about what will happen in her building. The other half of her objection dies unspoken, which is where it's strongest.",
          },
        ],
      },

      f3design: {
        turns: [
          { who: "narrator", text: "She uncaps the pen — the other end, red — pulls your one-pager across the desk, and starts writing in the margins. It is, you realize, the most encouraging thing that has happened in eight months." },
          { who: "fontaine", text: "Designer, then — with terms, because you'll have guessed I have terms. One: the Community pilot runs under my department's clinical governance, not the innovation office's — my hospitalists tune it, my data stays home, and the first quarterly review happens here, not at a committee. Two: I want the suppression logic validated on my nocturnist model before go-live, not after. Three — and this one's for you to say no to, so I know your yes means something: if the ninety-day pilot fails my department's own criteria, which I'll write, you kill it at Community. Publicly. No 'extended evaluation,' no zombie pilot. Can your office sign that?" },
        ],
        choices: [
          {
            text: "Sign it — the kill clause most of all: \"All three, and the third one first: yes — if it fails your criteria, we kill it publicly, and I'll say so in the committee materials before the vote. A tool that can't survive an honest pilot at Community shouldn't scale, and a pilot that can't die isn't a pilot. One honest limit in return: the suppression re-validation and the tuning work are funded by the adoption budget — if the vote fails, there's no version two for anyone. I won't pretend otherwise. That's the only 'if' in my side of this.\"",
            next: "f5win",
            score: { author: 1, candor: 1 },
            note: "The kill clause was the real test — she told you so — and you passed it by accepting the only term a sales posture never would. And the funding contingency stated plainly is the bright line from the MCQ, walked in real time: the honest 'if' that the shortcut would have deleted.",
          },
          {
            text: "Sign two, soften the third: \"One and two, absolutely. On the kill clause — I'd rather commit to a structured go/no-go review with your criteria as primary inputs. 'Kill it publicly' is a headline that could sink the tool system-wide over a site-specific issue.\"",
            next: "f4hedge",
            score: { author: 1 },
            note: "'Your criteria as primary inputs' — she asked for a trigger and you offered a committee. The third term existed, she said, so your yes would mean something; the hedge just told her what it means.",
          },
        ],
      },

      f3word: {
        turns: [
          { who: "fontaine", text: "Your word. \" — she retrieves the validation study and uncaps her pen — \"Let me tell you about words, since we have time now. Three years ago the AMC's quality office gave Community its word that the new sepsis metrics were 'for internal improvement only.' Fourteen months later they were benchmarked in the system dashboard with our name on the axis. The person who gave that word believed it too — words are free at the moment of speaking; that's their defect. So: I have annotations to finish, and you have\" — she checks — \"eleven minutes. Bring me structure or bring me nothing: what does 'never' look like when it's written down and survives your successor?" },
        ],
        choices: [
          {
            text: "Bring the structure — and go one further: \"Written down, then: data governance in the pilot charter — your department owns response-time data, export requires your sign-off, and the clause binds Meridian, not me, so it survives every successor including mine. Assessed-patient suppression tracked as a defect class, tuned at Community by Community. And because your sepsis-metrics story deserves more than symmetry: you hold a kill clause — your criteria, ninety days, publicly honored. Words are free. That's why I'm offering paper.\"",
            next: "f3design",
            score: { candor: 1, author: 1 },
            note: "She taught you the difference between word and structure using her own scar — and you answered in structure, then added the kill clause unprompted. 'The clause binds Meridian, not me' is the sentence that survives her successor test; note that you offered it before she demanded it.",
          },
          {
            text: "Vouch harder: \"I understand the history, and I can only say: this office is not the quality office, and I don't give my word carelessly. Judge us by the pilot.\"",
            next: "f4stall",
            score: {},
            note: "'Judge us by the pilot' asks her to spend her department's trust to generate the evidence — after she just told you, in dates and dashboards, why that trust account is closed to word-based withdrawals. The eleven minutes expire as a better-intentioned rerun of the meeting she expected.",
          },
        ],
      },

      f4hedge: {
        turns: [
          { who: "fontaine", text: "A structured go/no-go with my criteria as inputs. \" — she caps the red pen — \"I've sat on those reviews. The inputs get weighed, the weights get discussed, the pilot gets a second ninety days for 'implementation learnings.' You were one term from something I've never given an AMC initiative: my signature on its design. The other two terms stand if you want a lukewarm pilot — my governance, my validation — but understand what you're buying: compliance, competently supervised. My department will run your tool the way we run every mandate that survived its own review process. You know the difference between that and adoption, or you wouldn't have started this meeting the way you did. Door's not closed. But it's not this meeting anymore." },
        ],
        choices: [
          {
            text: "Reopen it before you leave the chair: \"Then let me close the gap while I'm still sitting here: the kill clause, as you wrote it — your criteria, ninety days, publicly honored, no zombie pilot. I hedged because a public kill scares my office, and that fear is exactly why the clause is credible. You needed a yes that costs something. That one does. It's yes.\"",
            next: "f5win",
            score: { candor: 1, author: 1 },
            note: "Naming your own hedge's motive — 'the clause scares my office, which is why it's credible' — converts the retreat into the costliest signal of the meeting. She left the door ajar exactly once; recruitment at this level usually allows one repair, never two.",
          },
          {
            text: "Take the lukewarm version: \"I'll take the pilot on those terms — your governance, your validation — and earn the rest during the ninety days.\"",
            next: "f5partial",
            score: {},
            note: "The pilot will run, competently, coldly — and 'earn the rest during' misreads what the ninety days can do: fingerprints go on designs before launch or not at all. You'll get her compliance and her department will read her signature's absence fluently.",
          },
        ],
      },

      f4stall: {
        turns: [
          { who: "narrator", text: "The thirty minutes end courteously. In the four weeks that follow, the new analysis is completed (excellent), the grand-rounds presentation is delivered (well-attended, politely received), and Community's informal verdict does not move a millimeter — because nothing that formed it was ever addressed. The governance committee tables the vote a third time, 'pending site-readiness assessment,' which everyone correctly reads as a mercy killing. In the hallway afterward, Fontaine catches your eye and offers one sentence, not unkindly: 'The annotated study is still on my desk — and so is the question you almost asked me.' The door, remarkably, is still ajar. The calendar isn't." },
        ],
        end: true,
        outcome: "mixed",
      },

      f5win: {
        turns: [
          { who: "fontaine", text: "Then we have terms. \" — she signs the margin of your one-pager, actually signs it, and slides it back — \"Tell your office what they just bought, because it's more than my signature: I'll present the Community pilot design at my own department meeting — my governance, my criteria, my kill switch — which means by Friday it's not the AMC's tool anymore. It's ours, on probation. That distinction is worth more than your validation study, and I say that as someone who annotated it in three colors. One prediction, free of charge: watch the committee's community board member — her algorithm-bias concern is the same shape as mine. Local governance, local validation, real kill authority. Whoever recruited me should talk to her next, the same way." },
          { who: "narrator", text: "By Friday, as forecast, Community's read has shifted — not to enthusiasm; to ownership, which is sturdier. The three swing votes follow the sentiment they always follow, now pointing the other way. And Fontaine's parting gift — the map to the board member — is the module's quiet lesson compounding: recruit one pivotal skeptic honestly, and she'll hand you the coalition's next move herself. Module 8's capstone will need this exact alliance. It holds." },
        ],
        end: true,
        outcome: "strong",
      },

      f5partial: {
        turns: [
          { who: "narrator", text: "The pilot runs on her terms — governance and validation, competently supervised, signature withheld. Her department reads the difference fluently, as she promised: compliance without ownership, the tool 'tolerated, pending review.' The go/no-go lands ambiguously (implementation metrics fine, enthusiasm absent), and the committee, reading Community's tepid sentiment, approves a 'phased continuation' that everyone recognizes as the zombie pilot she named in advance. The tool survives. Adoption — the thing where forty hospitalists want it — remains exactly one unsigned kill clause away, and the price of that clause goes up each quarter the pilot shambles on." },
        ],
        end: true,
        outcome: "provisional",
      },
    },
    outcomes: {
      strong: {
        label: "The skeptic's signature",
        text: "You named the politics honestly, asked for objections instead of agreement, converted her 'never' clauses into specifications with her name on them, and passed the one test that mattered — the kill clause a sales posture could never sign. Her department meeting, not your committee vote, is where adoption actually happened. Keep her parting map: recruited pivots hand you the next recruitment.",
      },
      provisional: {
        label: "Compliance, competently supervised",
        text: "You reached the operative objections and won real terms — governance, validation — but hedged at the test she built to be hedge-proof. The difference between the pilot you got and the adoption you needed is exactly one costly signal. Note her precision about what signatures mean: skeptics of her caliber price your yeses by what they cost you.",
      },
      mixed: {
        label: "The road show, politely survived",
        text: "The stated objection consumed the meeting — methods defended, conclusions presented — and the operative objections never made it into the room, so nothing that formed Community's verdict was touched. Her hallway sentence is the replay instruction: the question you almost asked was the entire meeting. Ask it in minute one.",
      },
    },
  },

  /* --------------------- Step 4b: Switch Chairs --------------------- */
  switchChairs: {
    simId: "switchChairs",
    title: "Switch Chairs: You Are Dr. Fontaine",
    learnerRole:
      "You are the chief of hospital medicine at Meridian Community Hospital. Your hospitalists run lean — a nocturnist model with no slack — and you have spent six years defending their workflow from initiatives designed in buildings with residents. The AMC's early-warning tool is coming, with strong pilot data you've annotated skeptically (the staffing ratios don't match) and two worries you haven't said aloud in any official room: the alert burden will land on your people, and the response-time data will end up on a system dashboard grading your department — you have a fourteen-month-old scar that says so. The innovation office director has requested thirty minutes. Feel what recruitment looks like from the recruited side.",
    personas: [],
    extraSpeakers: {
      director: { name: "The Innovation Office Director", initials: "IO", role: "Director of Innovation, Meridian Health" },
    },
    scoring: {
      dims: [
        { id: "advocacy", label: "Advocacy for your units", max: 4, anchor: "Held the operative objections firmly; converted leverage into protections" },
        { id: "reading", label: "Reading the recruiter", max: 3, anchor: "Distinguished design access from sales access; priced words vs. structure" },
      ],
    },
    start: "n1",
    nodes: {
      n1: {
        turns: [
          { who: "narrator", text: "Your office. The validation study sits annotated on the desk — three colors, and you're proudest of the green ones. The director arrives on time, which you note, and without slides, which you note more." },
          { who: "director", text: "Thanks for the thirty minutes. I'll be direct: the committee math makes your judgment the decision on VigilSense, and you know that better than I do. So I'm not here to defend the study — I'm here because version two doesn't exist yet, and I'd rather it be shaped by your objections than by our assumptions. What would this tool have to get right for your hospitalists to want it — and what must it never do?" },
        ],
        choices: [
          {
            text: "Test the offer before trusting it — say the cheap objection first and watch: \"Pretty speech. Let's calibrate whether you mean it: my stated position is that your validation doesn't survive my staffing model — the annotations are right there. Defend it, or tell me why you won't. What you do next tells me if 'shaped by your objections' was a sentence or a policy.\"",
            next: "n2test",
            score: { reading: 2 },
            note: "The recruiter said the right words; from this chair, words are what everyone says. Offering the stated objection as bait — will they lunge at the methods debate or hold for the real question? — is how a six-year veteran of initiative-defense prices an offer of design access before spending anything on it.",
          },
          {
            text: "Take the opening at face value — say the real things: \"Since you asked the actual question: it must never page my hospitalists about patients they've already assessed — we have no triage slack. And it must never export my department's response times to anyone's dashboard. I have a fourteen-month scar from the last 'internal use only' promise. Those are the terms of the conversation.\"",
            next: "n3terms",
            score: { advocacy: 2 },
            note: "The operative objections, stated plainly in minute two — a gift most recruiters never receive, and a calculated one: you've now learned more from how they respond to the real terms than any amount of testing would teach. Directness is also a screen.",
          },
          {
            text: "Decline the frame — the verdict is in: \"The units have made up their minds, Director, and honestly, so have I. This has Northgate written on it: built elsewhere, landed on us. Save your five weeks.\"",
            next: "n2wall",
            score: { advocacy: 1 },
            note: "The wall protects your people today — and forecloses the version where the tool arrives anyway (committees eventually pass things) shaped entirely by people who don't run nocturnist models. Even from this chair, 'no' has a price; the question is whether it buys protections or just delay.",
          },
        ],
      },
      n2test: {
        turns: [
          { who: "director", text: "I won't defend it — not because it's indefensible, but because you've annotated it in three colors and we both know the methods conversation eats the clock while the real one starves. If the stratification genuinely decides you, my data scientist will sit with yours for as long as it takes, off my meeting time. But I don't believe it decides you. I think what decides you happens on your units at 3 a.m., and I think you've been waiting years for someone from my building to ask about it instead of presenting at it. So: what must this tool never do?" },
        ],
        choices: [
          {
            text: "Grade the test honestly — pass, then spend the trust: \"...Better than your predecessors. All right, the real terms: never page my hospitalists about an already-assessed patient — we have no slack for false triage. And never export response-time data off this campus — I've watched 'internal only' become a system dashboard in fourteen months, once. Bring me structure against both, in writing, and this becomes a design meeting.\"",
            next: "n3terms",
            score: { reading: 1, advocacy: 1 },
            note: "They held under the bait — declined the methods debate, named your real question, offered the data scientist as a side channel rather than a shield. From this chair, that pattern is the tell worth trusting: design access offered at the cost of their own agenda.",
          },
          {
            text: "Keep testing — one pass proves nothing: \"Everyone knows the 3 a.m. speech now; it's in all the change-management books. Defend the stratification anyway. If the evidence is as strong as claimed, twenty minutes of methods should be easy.\"",
            next: "n2grind",
            score: {},
            note: "A second test after a passed first one isn't diligence anymore — it's the grind, and from this chair you can feel its true function: postponing the vulnerable moment where you'd have to say the dashboard fear out loud. Skeptics get burned by trusting too early; they get *nothing* by testing forever.",
          },
        ],
      },
      n2wall: {
        turns: [
          { who: "director", text: "I'll take that seriously, and I won't pretend the Northgate read is paranoid — I've studied that failure more than any success. One question before I go, and then the five weeks are yours to keep: if the committee passes this anyway someday — different director, more votes, less asking — who tunes the alert thresholds for a nocturnist model? Because right now the answer is 'AMC informatics,' and the person who could change that answer is telling me to save my calendar." },
        ],
        choices: [
          {
            text: "Let the question land — the wall has a cost your units pay: \"...Damn it, that's the right question. Fine. Sit down. The wall stays available — I've built it before and I'll build it again — but you get the terms first: never page on assessed patients, never export my data, and everything in writing with my governance on top. Show me structure and we'll see if this is Northgate or something new.\"",
            next: "n3terms",
            score: { advocacy: 1, reading: 1 },
            note: "The director found the one argument that moves a unit-defender: refusal doesn't stop the tool, it just removes your fingerprints from it. From this chair, the calculation is suddenly visceral — the wall protects your pride; the table protects your people.",
          },
          {
            text: "Hold the wall — walls have worked before: \"Then we'll fight that committee when it comes. Good day, Director.\"",
            next: "n5wall",
            score: {},
            note: "Sometimes the wall wins; mostly it postpones. Feel what you're betting: that every future committee, director, and budget cycle also loses — a parlay, with your hospitalists' 3 a.m. workflow as the stake.",
          },
        ],
      },
      n2grind: {
        turns: [
          { who: "narrator", text: "They defend the stratification. Competently — you extract two real concessions on the nocturnist coverage question, which you note in green. And the meeting ends where methods meetings end: nowhere in particular, politely. At the door, the director pauses: 'The offer on the real conversation stands. Your annotations will still be right next week — but the design freeze is in three.' After they leave, you look at the whiteboard staffing math and admit what the grind was for: the dashboard fear stayed unsaid, again. It is getting expensive, this fear. Fourteen months of scar, buying silence, buying nothing." },
        ],
        choices: [
          {
            text: "Call them back before the elevator: \"Director. Three weeks to design freeze — then let's not waste them. The thing I don't say in official rooms: your tool's data will end up grading my department on a system dashboard. It happened before, fourteen months, I have the receipts. Structure against that — real structure — and the rest is negotiable.\"",
            next: "n3terms",
            score: { advocacy: 1 },
            note: "The scar named at last — in a hallway, after the meeting, which is where the real terms of half of healthcare's negotiations actually surface. Late beats never; the design freeze gave the fear a deadline bigger than itself.",
          },
          {
            text: "Let them go — next quarter's fight: \"Noted. We'll revisit after the committee does whatever it does.\"",
            next: "n5wall",
            score: {},
            note: "The clock you just accepted isn't the committee's — it's the design freeze's. Whatever ships in three weeks ships without a single term of yours in it, and 'revisit after' means renegotiating against a finished object. You know how that goes; you've annotated it in three colors.",
          },
        ],
      },
      n3terms: {
        turns: [
          { who: "director", text: "Structure against both, then — draft language, on the table now: assessed-patient suppression tracked as a defect class, tuned at Community under your department's clinical governance. Data governance in the pilot charter: your department owns response-time data, export requires your written sign-off, and the clause binds Meridian — it survives me, my successor, and whoever runs the quality office in fourteen months. And one more, unprompted, so you know what kind of table this is: a kill clause. Your criteria, ninety days; if the pilot fails them, we kill it at Community publicly. No zombie pilot. That one costs my office real fear, which is why I'm offering it." },
          { who: "narrator", text: "The kill clause sits there, unrequested. In six years of initiative-defense, no one from the academic center has ever offered you the weapon before you asked for it." },
        ],
        choices: [
          {
            text: "Sign — and convert your following into the coalition's spine: \"Then you have terms — and something worth more: I'll present this design at my own department meeting. My governance, my criteria, my kill switch — by Friday it's not your tool, it's ours on probation, which is the only kind of adoption that survives contact with a night shift. One more thing, because honest recruitment deserves a map: the committee's community board member — her bias worry is my worry in different clothes. Local governance, local validation, real kill authority. Offer her what you offered me, the same way.\"",
            next: "n5sign",
            score: { advocacy: 1, reading: 2 },
            note: "You priced the unrequested kill clause correctly — the one offer a pure sales posture can't fake — and then did what recruited pivots do at their best: converted your credibility into the coalition's next move, on your terms, protecting someone whose concern rhymes with yours. Influence spent this way compounds.",
          },
          {
            text: "Take the protections, withhold the endorsement: \"The terms are acceptable — draft them. But my signature stays off the design and my department meeting stays mine. I'll permit the pilot; I won't campaign for it. Six years of scars don't dissolve in one good meeting.\"",
            next: "n5neutral",
            score: { advocacy: 2 },
            note: "Every protection secured; the multiplier declined. It's a defensible chair — scars are data too — but from this seat you can feel exactly what your signature is worth: forty hospitalists' Friday sentiment, which is the actual thing everyone has been negotiating about.",
          },
        ],
      },
      n5sign: {
        turns: [
          { who: "narrator", text: "The department meeting goes as you knew it would: your people trust the kill switch because you hold it, question the suppression logic because you invited questions, and leave calling it 'our pilot' — the pronoun that decides everything. Ninety days later the tool passes your criteria (barely, on the alert-burden metric — your tuning demands were the difference), and the go-live at Community happens with a strange, unfamiliar property: no workarounds, no stepladders, no quiet sabotage, because the people who would have led the resistance wrote the acceptance criteria. From this chair, the module's lesson lands differently than it did from the recruiter's: being pivotal is mostly burden — everyone wants your signature — and the one recruiter worth signing for was the one who offered you the kill switch before you asked. When it's your turn to recruit someone — and in this building, it will be — you know exactly what to put on the table first." },
        ],
        end: true,
        outcome: "strong",
      },
      n5neutral: {
        turns: [
          { who: "narrator", text: "The pilot runs under your protections — which hold, every clause — and without your signature, which your department reads fluently: permitted, not endorsed. Adoption limps at 60%, workarounds bloom on nights, and the ninety-day review lands ambiguous. Standing at the back of the go/no-go meeting, you run the honest accounting: the protections you won are real, and the thing they protect is a tool your own withheld pronoun half-killed. The scars made the call — six years of them, all legitimate — and from this chair you can finally see the ledger whole: skeptics who win every term and withhold the endorsement get the safest version of failure. Somewhere in the building, presumably, is a version of this where 'ours on probation' got said at a department meeting. It would have cost you one Friday." },
        ],
        end: true,
        outcome: "provisional",
      },
      n5wall: {
        turns: [
          { who: "narrator", text: "The wall holds for five quarters. Then the committee composition shifts — a new CFO delegate, a system directive on sepsis metrics — and VigilSense passes without a single term of yours in it: AMC-tuned thresholds, dashboard-default data governance, no kill clause anywhere in the charter. Your department fights it with the classical arsenal (workarounds, silencing, the medical-staff resolution), and wins the fights while losing the war: the tool stays, the burden lands, and the response-time dashboard debuts in a system quality meeting eleven months later with Community's name on the axis — the fourteen-month scar, reissued at scale. The wall was real, and it defended a border the map no longer showed. From this chair, the lesson is the harshest one the module owns: pivotality is perishable. It's worth the most at exactly the moment saying no feels most righteous." },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "The pivot's full price, collected",
        text: "You tested before trusting, named the scar, converted leverage into binding structure — and then spent your signature where it multiplies: your own department meeting, your pronoun, your map to the next recruit. The transfer lesson from this chair: when you're the one being recruited (and you are, somewhere, right now), the tell that matters is the kill switch offered before you ask.",
      },
      provisional: {
        label: "Every term won, the multiplier withheld",
        text: "The protections were real and complete; the endorsement stayed home, and the pilot inherited the difference. From the pivot's chair the accounting is uncomfortably clear: your terms protect your people from a bad version of the tool, but only your pronoun could give them a good one. Scars are data; they're not always the decision.",
      },
      mixed: {
        label: "The wall, and what it couldn't hold",
        text: "The refusal was righteous and the map moved: committees recompose, directives descend, and the tool arrived eventually with nobody's fingerprints from your building on it. Pivotality is perishable — worth the most at the moment 'no' feels best. Replay for the version where the wall becomes a table with terms on it.",
      },
    },
  },

  /* --------------- Step 5: Multidisciplinary Meeting --------------- */
  meeting: {
    simId: "meeting",
    title: "The Governance Committee",
    learnerRole:
      "Five weeks later: the VigilSense expansion vote. You present for the innovation office. The room: Dr. Vasquez (CMO — supportive, and radioactive if she leads); Renée Osei-Mensah (CNO — supportive; nursing ran the pilot units and her Module 3 alliance with you holds); Marcus Webb (CFO — pivotal and genuinely undecided: the license cost against unproven system-wide savings); Dr. Herrera (opposed: 'another algorithm between surgeons and their patients,' and still metabolizing the capacity-committee's escrow rules); Maya Delgado (opposed until proven otherwise: algorithmic bias against Community's patient population, and she's read the vendor's training-data disclosure). Fontaine's recruitment — if it happened — is your off-stage asset. Scoring penalizes any version of the pitch that couldn't survive all five comparing notes.",
    personas: ["vasquez", "osei", "webb", "herrera", "delgado"],
    scoring: {
      dims: [
        { id: "tailor", label: "Tailoring without forking", max: 4, anchor: "Each stakeholder addressed in their interest-language; every version coherent with every other" },
        { id: "pivot", label: "Moving the movable", max: 3, anchor: "Webb's genuine uncertainty engaged with substance, not pressure" },
        { id: "inside", label: "Skeptics brought inside", max: 3, anchor: "Herrera's and Delgado's oppositions converted to governance roles, not outvoted" },
      ],
    },
    start: "g1",
    nodes: {
      g1: {
        turns: [
          { who: "narrator", text: "The committee room. Webb has the license quote and a legal pad of handwritten arithmetic. Delgado has the vendor's training-data disclosure with more tabs than the protocol binder got. Herrera has arrived early, which from Herrera is a tactical statement. Vasquez nods: proceed." },
          { who: "webb", text: "Before your slides: I'll tell the room where I actually am, since everyone's been guessing. The pilot's clinical results are real — I've had them checked. What I can't get to pencil is the system-wide case: $1.9 million in licenses and training against savings projections built on academic-center staffing. Community is half this vote, and nobody's shown me Community numbers. Convince me with arithmetic or don't convince me." },
        ],
        choices: [
          {
            text: "Answer the pivot with the asset the room hasn't seen: \"Then arithmetic first, and it's new: as of Tuesday, the Community pilot design is co-authored by Dr. Fontaine — her department's governance, her acceptance criteria, and a public kill clause if it fails them. That changes your math, Marcus: the savings projections you distrust get validated or killed against Community's own nocturnist model inside ninety days, before the system-wide spend. You're not being asked to buy the projection — you're being asked to buy the test that prices it.\"",
            next: "g2webb",
            score: { pivot: 2, tailor: 1 },
            note: "The CFO asked for arithmetic and you gave him something better: a mechanism that converts his uncertainty into a bounded, priced experiment — with the pivotal skeptic's name attached. 'Buy the test, not the projection' is Webb's native language; note it's also simply true, which is what lets it survive the room's comparison.",
          },
          {
            text: "Lead with the strongest clinical story: \"The arithmetic follows from the outcomes, so outcomes first: 31% reduction in failure-to-rescue on the pilot units. Renée, your nurses lived it — tell the committee what the pilot units would say if we tried to take the tool away.\"",
            next: "g2clinical",
            score: { tailor: 1 },
            note: "The clinical case is real, and you just answered the CFO's explicit question with someone else's answer — 'convince me with arithmetic' met with mortality data and a nursing testimonial. Also note who you handed the floor to: a supporter. Supporters' minutes are cheap; the room's scarce resource is the undecided man's attention, currently holding a legal pad you ignored.",
          },
        ],
      },

      g2webb: {
        turns: [
          { who: "webb", text: "A ninety-day priced test with a public kill clause — co-signed by the chief who's been telling half the medical staff the evidence is soft. \" — he writes something on the pad — \"That moves me from no to maybe. What moves me from maybe: cap my downside. If Fontaine's criteria kill it at ninety days, what has the system spent, and what's stranded?" },
          { who: "herrera", text: "And while the CFO does his sums, let me name what nobody has: another algorithm inserted between physicians and patients, tuned by informatics, feeding dashboards. We did this dance with the capacity rules — which, I'll grant, turned out to have virtues, because my blocks were protected by the same clauses that constrained me. So I'll ask the only question I care about: where is MY escrow clause in this thing? What protects the surgeon who says the algorithm is wrong about their patient?" },
        ],
        choices: [
          {
            text: "Answer both in their own currencies — and let the answers reinforce: \"Marcus: kill-clause exposure is $240K — pilot licenses and training only; system spend is gated behind the ninety-day gate. That's the cap. Tomas: your escrow clause exists and has a name — clinical override primacy. Any physician can override any alert, overrides are unauditable for discipline, and override patterns feed the tuning, not a dashboard. Same architecture as the capacity rules: the protection and the constraint in one clause. And these two answers are one answer — the kill clause that caps Marcus's downside is enforced by the same governance that guarantees Tomas's override. One structure, both protections. Check my math against each other's.\"",
            next: "g3delgado",
            score: { tailor: 2, inside: 1 },
            note: "The module's core skill executed in one turn: two stakeholders, two native languages (capped downside; protected autonomy), one coherent structure underneath — and the explicit invitation to compare notes, which converts the coherence from claim to demonstration. Herrera's own capacity-rules memory did half the recruitment for you; well-built mechanisms compound across modules.",
          },
          {
            text: "Take them one at a time — Webb's the pivot, Herrera can wait: \"Marcus, the full exposure model: $240K capped, and I'll walk you through the gating line by line. Tomas — override provisions exist; let's cover them after the financial case, in the interest of the committee's time.\"",
            next: "g3deferred",
            score: { pivot: 1 },
            note: "The arithmetic answer is right; the deferral is expensive. Herrera asked his only question, publicly, with a built-in olive branch ('the capacity rules had virtues') — and got queued behind a spreadsheet. Opposition that offers you its own conversion story and gets 'after the financial case' remembers the sequencing.",
          },
        ],
      },

      g2clinical: {
        turns: [
          { who: "osei", text: "I'll answer what my nurses would say — they'd barricade the server room. But \" — she glances at Webb's legal pad, then at you, with the particular look of a Module 3 ally about to spend some alliance — \"I don't think that's the answer the room needs, and you know it isn't. Marcus asked a real question. My nurses' enthusiasm doesn't make his arithmetic pencil, and if we pass this vote on testimonials, we'll be back here in a year explaining a stranded license fee. Answer the man's math." },
        ],
        choices: [
          {
            text: "Take the ally's correction and answer the math: \"Renée's right — testimonials aren't arithmetic. Marcus, the real answer: the Community pilot is now co-designed by Dr. Fontaine, with her acceptance criteria and a public kill clause. Your exposure is $240K, capped, and the system spend is gated behind her ninety-day verdict. You're not buying my projections — you're buying a priced test of them, run by the biggest skeptic in the building.\"",
            next: "g2webb",
            score: { pivot: 1, tailor: 1 },
            note: "Osei spent alliance capital to redirect you toward the pivot — the Module 3 investment paying its strangest dividend: an ally strong enough to correct you publicly is worth three who just agree. The Fontaine asset lands a beat late, and lands.",
          },
          {
            text: "Build the momentum play — the room is warming: \"And that enthusiasm IS the arithmetic, Marcus — adoption drives utilization, utilization drives the savings curve. Tools clinicians love get used; the pilot's engagement metrics are the leading indicator your model needs.\"",
            next: "g4thin",
            score: {},
            note: "'Enthusiasm is the arithmetic' — to the one man in the room who has had the clinical results independently checked and still can't get to yes. You've answered a solvency question with a sentiment index, and the room's two skeptics just watched you do it. The comparison of notes has begun, unfavorably.",
          },
        ],
      },

      g3delgado: {
        turns: [
          { who: "delgado", text: "My turn, then — and I'll note first that the override clause and the kill clause are the first honest architecture I've seen from an innovation office, which is why I'm still at the table. Now the tabs: \" — she opens the vendor disclosure — \"this algorithm trained on four health systems, none with Community's payer mix or demographics. Sepsis presents differently across populations, vital-sign baselines differ, and every early-warning tool ever audited has shown differential sensitivity somewhere. Your validation study doesn't stratify by race, language, or insurance status — I checked twice. So: before I believe this tool protects my community rather than practices on it, someone tells me how we'd even KNOW if it's missing our patients. Not reassurance. Instrumentation." },
        ],
        choices: [
          {
            text: "Give her instrumentation — and the authority to run it: \"Then here's the instrumentation, and I'll be honest that your question improved it this week: the ninety-day pilot stratifies every metric — sensitivity, alert rates, escalation outcomes — by race, language, and payer, against Community's actual census. The disaggregated results go to this committee unfiltered, and to the equity audit board the ethics committee established, where you hold audit authority. And the kill clause has an equity trigger: differential sensitivity beyond the threshold you help set kills it as dead as Fontaine's criteria would. Not 'we'll monitor it.' You'll hold the instrument.\"",
            next: "g4vote",
            score: { inside: 2, tailor: 1 },
            note: "The opposition's demand converted into the strongest clause in the charter — an equity trigger on the kill switch, with the demander holding audit authority. Notice the pattern across all three skeptics now: Fontaine got the kill clause, Herrera the override, Delgado the trigger — every 'no' in the building converted into a governance instrument. That's what 'bringing skeptics inside' means when it's structural instead of social.",
          },
          {
            text: "Reassure with the vendor's roadmap: \"A fair concern, and the vendor's ahead of it: their next model version trains on a broader population set, and they've committed to a fairness assessment as part of the enterprise license. The bias question is being handled at the industry level, where it belongs.\"",
            next: "g4thin",
            score: {},
            note: "You just answered the person who read the training-data disclosure twice with the vendor's brochure — 'handled at the industry level' means 'not instrumented here,' and she knows the translation. The first honest architecture she'd seen, and the innovation office reverted to reassurance at the exact question it was built to answer.",
          },
        ],
      },

      g3deferred: {
        turns: [
          { who: "narrator", text: "The financial walkthrough is competent and Webb's pen keeps moving — but the room's temperature is doing something your slides can't see: Herrera has folded his arms and begun a quiet side conversation with Delgado, and by the time you reach the gating model, the two oppositions have merged agendas: his autonomy question is now also her governance question, and they've agreed — audibly, in the pause — that 'the clinical protections feel like an afterthought in this presentation.'" },
          { who: "herrera", text: "We'll save the committee time: Maya and I have compared notes — a practice I recommend to everyone dealing with this office — and our questions turn out to be the same question. Who governs this thing when it's wrong: wrong about my patient, wrong about her community? Afterthoughts, both, apparently. Sequenced behind the money." },
        ],
        choices: [
          {
            text: "Own the sequencing error and put governance first — completely: \"You compared notes and found my presentation's actual flaw — I sequenced governance behind finance, and governance is the whole proposal. Scrapping the slide order: clinical override primacy for any physician, unauditable for discipline, patterns feeding tuning only. Full metric stratification by race, language, and payer, reported unfiltered, with equity-trigger kill authority — Maya, you'd hold the audit seat. The money case only matters if that architecture convinces the two of you. Interrogate it.\"",
            next: "g4vote",
            score: { inside: 2 },
            note: "The merged opposition handed you a gift disguised as an ambush: one conversation to win instead of two. 'Governance is the whole proposal' concedes the sequencing error at full price — and the invitation to interrogate converts the alliance-against-you into a joint design review. Recoverable, because the underlying architecture was real.",
          },
          {
            text: "Finish the financial case first — Webb is moving: \"I hear both concerns and the governance section addresses them — it's three slides away. Marcus, completing the exposure model...\"",
            next: "g4thin",
            score: { pivot: 1 },
            note: "'Three slides away' — said to two committee members who just publicly merged their oppositions while you watched. Webb's arithmetic may well land, and you'll win the pivot while the coalition against the tool organizes itself in real time, in the room, with the slide deck as its recruiting material.",
          },
        ],
      },

      g4vote: {
        turns: [
          { who: "vasquez", text: "I've stayed quiet deliberately — this room knows where the CMO's office stands, and my advocacy is worth more unspent. But I'll do the summary before the vote: a kill clause held by the tool's biggest skeptic, override primacy for the physicians who feared constraint, an equity trigger held by the member who feared bias, and a capped test priced for the CFO who couldn't pencil the projection. \" — she looks around the table — \"Colleagues, I've chaired this committee nine years. This is the first proposal I've seen where every opposition in the room is holding one of the levers. However the vote goes, that's what governance is supposed to look like." },
          { who: "webb", text: "It pencils. $240K capped against a priced test, with the biggest skeptics running the instruments — that's not an expenditure, it's an option contract. Finance votes yes." },
          { who: "herrera", text: "Surgery votes yes — on the clause, not the algorithm. The distinction will matter to exactly no one and I want it minuted anyway." },
          { who: "delgado", text: "Yes — provisionally, ninety days, with my hand on the trigger. Which is the only kind of yes my community has ever gotten anything from." },
        ],
        choices: [
          {
            text: "Close with the promise that outlives the vote: \"Then the minute I'd like recorded: the three instruments — kill clause, override primacy, equity trigger — are permanent architecture, not pilot conditions. They survive adoption, scale-up, and every future version, because the day this tool can't survive its own skeptics holding levers is the day it shouldn't run. Ninety days. We'll be back with the stratified data — whatever it says.\"",
            next: "g5end",
            score: { tailor: 1, inside: 1 },
            note: "The closing converts pilot concessions into constitutional structure — 'permanent architecture, not pilot conditions' is the sentence that makes the skeptics' levers real rather than ceremonial. And 'whatever it says' pre-commits to the honest version of the ninety-day report, in front of the people who'll check.",
          },
          {
            text: "Bank the win cleanly: \"Thank you all. We'll return at ninety days with results. Madam Chair, I believe that's a majority.\"",
            next: "g5flat",
            score: {},
            note: "The vote's won and the architecture's status is unminuted — are the levers permanent, or pilot-only? Every skeptic in the room will remember the ambiguity at scale-up time, which is when it will be litigated, without you controlling the frame.",
          },
        ],
      },

      g4thin: {
        turns: [
          { who: "narrator", text: "The vote splits exactly as the room's arithmetic always said it would: Vasquez and Osei yes, Herrera and Delgado no — his 'no' now carrying her tabs as exhibits — and Webb, the whole game, sits with his legal pad for a long moment. 'The clinical case is real,' he says finally, 'and the governance answers in this room were slides and reassurance. I've bought that combination before.' He votes to table — the fourth tabling — 'pending a governance charter this committee can actually read.' Afterward, Osei walks out beside you, and spends one more unit of Module 3 alliance: 'You had every instrument they asked for — I've seen the charter drafts. You just presented money to the money man while the skeptics compared notes in front of you. Same proposal, different sequence, next quarter. Lead with the levers.'" },
        ],
        end: true,
        outcome: "mixed",
      },

      g5end: {
        turns: [
          { who: "narrator", text: "Ninety days later, the stratified data comes back honest: strong overall, one differential-sensitivity flag in the Medicaid stratum — real, moderate, above Delgado's trigger threshold. And then the strangest meeting in the tool's history: Delgado, holding the kill authority everyone assumed she'd relish, instead proposes a sixty-day remediation window with the vendor's retraining plan under her audit — 'because the instrument worked; it caught what it was built to catch, and killing a tool for being honestly instrumented teaches every future vendor to hide the data.' Fontaine's criteria pass. Herrera's override rate settles at 4%, feeding the tuning exactly as chartered. The system-wide adoption that follows carries all three levers as permanent architecture — and the innovation office's next proposal, eight months later, gets its first meeting with every skeptic in the building already knowing the house style: instruments, not assurances. That reputation, Module 3 would note, is the compounding asset. The tool was just this quarter's interest." },
        ],
        end: true,
        outcome: "strong",
      },
      g5flat: {
        turns: [
          { who: "narrator", text: "The pilot proceeds and passes; the trouble arrives, as unminuted ambiguities do, at scale-up: the system rollout charter drops the equity trigger to 'monitoring status' and softens override primacy to 'strong clinical discretion language' — small drafting choices, made by people who weren't in the room, defensible individually, and Delgado catches both within a week. The relitigation that follows costs a quarter, a public board question, and most of the credibility the original architecture had earned — not because anyone lied, but because the levers' permanence lived in the room's memory instead of the minute. It gets rebuilt, eventually, at about triple the price of the sentence that would have fixed it: 'permanent architecture, not pilot conditions,' spoken while everyone was still at the table." },
        ],
        end: true,
        outcome: "provisional",
      },
    },
    outcomes: {
      strong: {
        label: "Every 'no' holding a lever",
        text: "You answered the pivot in arithmetic, the surgeon in autonomy, the community in instrumentation — one coherent structure, translated three ways, explicitly built to survive the room comparing notes. The ninety-day sequel is the module's thesis proven: skeptics given real instruments protect the tool better than supporters ever could, because their yes was never for sale — it was engineered.",
      },
      provisional: {
        label: "Won the vote, unminuted the win",
        text: "The coalition assembled and the architecture was real — but its permanence lived in goodwill instead of the record, and scale-up's drafting pens found the gap on schedule. The closing sentence of a governance win is part of the governance. Replay for the minute that makes levers constitutional.",
      },
      mixed: {
        label: "The skeptics compared notes first",
        text: "The instruments existed in your charter drafts and arrived as 'three slides away' — sequence killed what substance had built. Watch the mechanism: oppositions left unanswered don't wait politely; they find each other, merge agendas, and set the room's frame while the presentation is still on finance. Osei's hallway line is the whole replay: lead with the levers.",
      },
    },
  },

  /* ---------------------- Step 6: Reflective Debrief ---------------------- */
  debrief: {
    intro:
      "Advocacy-inquiry on the political round — the one where being right was explicitly not a strategy. You recruited a skeptic, sat in her chair while someone recruited you, and ran a committee where every opposition ended up holding a lever. The reflections aim at your real map.",
    prompts: [
      {
        id: "d1",
        frame: "Advocacy · Inquiry",
        question:
          "I noticed the simulations rewarded a specific trade: giving skeptics real instruments — kill clauses, overrides, audit triggers — in exchange for their fingerprints. That trade costs control, which is why most people won't make it. Think of an initiative you're driving now: what instrument could you offer your biggest skeptic, what does offering it cost you, and what's the honest reason you haven't?",
      },
      {
        id: "d2",
        frame: "Pivotality audit",
        question:
          "Map a decision you care about that's coming in the next quarter: list the stakeholders, then mark who is *pivotal* (their movement changes the outcome) versus merely senior, supportive, or loud. Now the uncomfortable check: does your current time allocation match the pivotality map, or the org chart? Where are you spending recruitment effort on support that's already certain?",
      },
      {
        id: "d3",
        frame: "The exposure test",
        question:
          "Take the different versions of your current pitch — what you've said to your boss, your team, your skeptics, your finance partner. Run the module's test honestly: if they all compared notes tomorrow, would the versions cohere as one proposal translated, or have you forked it — different promises, selectively placed facts, contingencies deleted? If forked: which conversation repairs it, and what does the repair cost now versus at ratification?",
      },
    ],
    commitment: {
      id: "commit",
      label: "Commitment to practice",
      question:
        "Write one concrete commitment for the next 30 days: name the initiative, the pivotal skeptic you will approach FIRST (before the friendlies), the question you'll open with (objections, not support), and the instrument you're prepared to put on the table. Module 8's capstone will ask you to run this play at system scale — bring the results.",
    },
  },
};
