/* Module 8 — The System Redesign: Mechanism Design and Leading at Scale.
   The capstone: fully authored content synthesizing all prior modules. */

export const module8Content = {
  /* ------------------------- Step 1: Topic Video ------------------------- */
  video: {
    vpTitle: "The Boarding Problem, All the Way Down",
    vignette: [
      "Every morning at Meridian Academic Medical Center, the 07:00 bed huddle performs the same liturgy: fourteen admitted patients boarding in the emergency department, some for thirty hours, while the floors report 'no capacity.' And every morning, the same diagnosis is offered — the floors won't take patients — followed by the same prescriptions: escalation calls, a stern memo, a discharge-by-noon campaign with lawn signs in the hallways. The campaigns work for about eleven days. They have worked for about eleven days, four times, in three years.",
      "Follow the problem down instead. Why won't the floors take patients? Because discharges happen at 4 p.m., not 10 a.m. Why? Because attendings round on the sickest first — rationally — and discharge orders land after lunch; because the discharge lounge was defunded; because transport is staffed to a schedule nobody remembers choosing; and because — here is the load-bearing one — a unit that discharges early gets an ED boarder within the hour, converting an empty bed into new work, while a unit that discharges late keeps a quiet afternoon. Nobody on any floor decided to hoard beds. The system pays a small, steady bonus for slowness, every day, to everyone.",
      "The boarding problem is not a behavior problem wearing a system costume. It is a mechanism producing exactly what it is designed to produce — and it will keep producing it through every campaign, memo, and lawn sign, until someone changes what the mechanism pays. This is the course's final move: stop playing the game better. Redesign the game.",
    ],
    teaching: [
      {
        h: "Mechanism design: reverse game theory",
        p: "Seven modules taught you to analyze games from inside: find the players, payoffs, equilibria, and play well. Mechanism design inverts the telescope: you choose the outcome you want, then engineer rules under which ordinary self-interested behavior produces it. The discipline's core demand is incentive compatibility — the system works when people follow their incentives, not despite them. Any design that requires sustained heroism, vigilance campaigns, or people 'just doing the right thing' against their payoffs is not a design; it's a wish with a logo.",
      },
      {
        h: "Dysfunctions are equilibria, not accidents",
        p: "Fee-for-service overuse, quality-metric gaming, ED boarding, the float-pool fictions of Module 1 — none are malfunctions. Each is a stable equilibrium of a badly designed mechanism: every participant is responding rationally to the payoffs in front of them, which is precisely why exhortation fails and why the dysfunction reassembles itself after every campaign. The diagnostic discipline: when a problem survives multiple sincere improvement efforts, stop asking who is failing and start asking what the current rules pay people to do. The answer is usually: exactly what they're doing.",
      },
      {
        h: "Goodhart's law: when a measure becomes a target",
        p: "Every metric is a proxy for something you actually care about — and the moment you attach stakes to the proxy, you create an incentive to move the proxy by means other than the thing. Door-to-doctor times met by hallway 'greeter physicians'; readmission rates improved by observation-status relabeling; mortality metrics polished by hospice-transfer timing. The designer's responsibilities follow directly: prefer measures close to the true goal, anticipate the gaming path before the gamers find it (ask 'how would I hit this number without doing the work?' — someone will), pair every target with a counter-metric that detects its characteristic distortion, and audit the gap between proxy and purpose forever.",
      },
      {
        h: "The ethics of incentives: motivation is not a free parameter",
        p: "Mechanisms act on people who mostly came to healthcare to heal, and incentives interact dangerously with that fact: crowding-out is real — pay people per unit of virtue and some stop being virtuous for free; surveillance reads as distrust and is repaid in kind. The craft is designing incentives that remove the friction punishing intrinsic motivation (the Module 1 float-pool fix protected honesty rather than purchasing it) instead of incentives that replace it. And every redesign redistributes burden — someone's workflow, someone's autonomy, someone's revenue. Anticipating who is harmed, saying it out loud, and building the mitigation into the mechanism is not change-management garnish. It is the design work, and Modules 3, 6, and 7 taught you why: the harmed remember, the excluded reject, and the routed-around reappear holding vetoes.",
      },
    ],
  },

  /* ---------------------- Step 2: AI Concept Coach ---------------------- */
  coach: {
    coachName: "The Concept Coach",
    intro:
      "The capstone drill: three metric-gaming vignettes from Meridian's own ledger. For each, your job is the designer's move — redesign the measure or the incentive so that gaming it and doing the right thing become the same behavior. That phrase is the standard; hold your answers to it.",
    exchanges: [
      {
        coach:
          "Vignette one. Meridian ties ED performance pay to door-to-doctor time. Within a quarter the metric is superb: a physician now stands near the entrance, greets each arrival within twelve minutes, documents 'initial assessment,' and walks on. Actual time to meaningful evaluation is unchanged. The metric owner proposes tightening the definition of 'assessment' — more documentation requirements. Your redesign?",
        options: [
          {
            text: "Move the measure closer to the purpose: replace door-to-doctor with time-to-disposition-decision and time-to-first-treatment-for-emergent-cases — outcomes the greeter trick can't touch — and keep a light audit on the gap between 'assessed' and 'treated.' Now the only way to move the number is to actually move patients through.",
            quality: "good",
            feedback:
              "The designer's move, exactly: the greeter exists because the proxy (first physician contact) drifted from the purpose (patients evaluated and treated promptly), and documentation rules just launch an arms race with the compliance office as referee — Goodhart's law versus paperwork, and Goodhart is undefeated. Measuring disposition and first-treatment makes the gaming path and the therapeutic path the same corridor. Note the residual duty: even the better measure is a proxy — someone will eventually discover 'disposition' can be gamed by premature decisions, which is why you paired it with an emergent-treatment counter-metric. Every target, a counter-metric. Forever.",
          },
          {
            text: "Keep the metric but add integrity rules: define 'assessment' rigorously, audit greeter-pattern documentation, and discipline gaming when found.",
            quality: "partial",
            feedback:
              "You've chosen the arms race: definition, workaround, tighter definition, subtler workaround — with each cycle teaching clinicians that the institution's metrics are adversarial puzzles, which corrodes exactly the intrinsic motivation you need (the crowding-out problem, arriving on schedule). Enforcement has a place as a backstop, but as the primary mechanism it concedes the design failure: a measure that requires policing is a measure pointed at the wrong thing. Re-aim the measure and most of the policing budget evaporates.",
          },
          {
            text: "Drop the incentive entirely — timing metrics obviously corrupt clinical behavior, and throughput should be managed operationally, not with pay.",
            quality: "miss",
            feedback:
              "Halfway wise — pay-per-metric is genuinely dangerous — but the conclusion throws out steering with the corruption. Door-to-treatment delay kills real people; unmeasured, it drifts. The lesson of the greeter isn't 'never measure': it's that this proxy was gameable from a distance and nobody ran the pre-mortem ('how would I hit this without doing the work?'). Measures closer to purpose, stakes proportionate, counter-metrics attached — that's the craft. Abandoning measurement isn't humility; it's flying instruments-off because the altimeter once stuck.",
          },
        ],
      },
      {
        coach:
          "Vignette two. To reduce readmissions, Meridian pays hospitalist groups a bonus for low thirty-day readmission rates. It works — officially. Unofficially: borderline returning patients are increasingly placed in 'observation status' (not technically admissions), and some frail patients report their discharging teams seemed reluctant to have them return at all. The bonus is working exactly as written. Redesign it.",
        options: [
          {
            text: "Re-target the mechanism at the true goal: measure all unplanned returns-to-acute-care — admission, observation, and ED revisit combined — so the relabeling path closes; add a patient-outcome counter-metric (mortality and time-at-home) so 'don't come back' can't masquerade as success; and shift the bonus from the rate itself to funding and running the transitional-care work that honestly reduces returns.",
            quality: "good",
            feedback:
              "All three designer's moves in one: close the taxonomy game (a return is a return, whatever registration calls it), attach the counter-metric that detects the dark version of the target (readmissions can fall because care improved or because the door got heavier — time-at-home distinguishes them), and note the deepest fix: paying for the *work* (transitional care, the Module 4 corridor's engine) rather than the *number* aligns the mechanism with intrinsic motivation instead of against it. Clinicians wanted to do that work; the old bonus paid them to relabel instead.",
          },
          {
            text: "Add a fraud rule: audit observation-status usage and claw back bonuses from groups whose observation rates rose after the incentive launched.",
            quality: "partial",
            feedback:
              "The clawback closes yesterday's loophole and teaches tomorrow's lesson: game more carefully. Observation-status usage has legitimate clinical drivers too, so your audit will generate contested cases, appeals, and a compliance apparatus adjudicating clinical judgment — expensive, adversarial, and still blind to the second distortion you noticed (the frail patient discouraged from returning), which no status audit can see. When the enforcement plan is bigger than the incentive, the incentive is misdesigned. Fix the target; keep a light audit as the backstop, not the mechanism.",
          },
          {
            text: "The redesign is cultural: remind clinicians that patients come first, and trust professionalism to hold the line against the bonus's edge cases.",
            quality: "miss",
            feedback:
              "This asks professionalism to fight the payroll system hand-to-hand, forever — and the vignette already reports professionalism losing ground, not because clinicians are venal but because ambiguous cases bend toward incentives one defensible judgment at a time (nobody relabels a clear admission; everyone half-notices the borderline one drifting). Module 1 priced exhortation; it hasn't appreciated. The respectful move toward professionalism isn't trusting it to beat the mechanism — it's building the mechanism that stops taxing it.",
          },
        ],
      },
      {
        coach:
          "Vignette three — the self-referential one. Meridian's board, impressed by your redesigns, proposes a new executive metric: each VP will be scored on 'number of process-improvement initiatives launched per quarter.' You have one meeting to fix this before it ships. What do you tell them?",
        options: [
          {
            text: "That the metric pays for launches, not improvements — so it will buy a portfolio of shallow, rebranded, and abandoned initiatives (initiative-theater), while punishing the VP who spends a year landing one deep fix. Counter-proposal: score sustained outcome deltas on a small number of named problems — boarding hours, first-case delays — measured at twelve months, with 'initiatives' unmeasured entirely: they're inputs, and paying for inputs is how Goodhart gets invited to board meetings.",
            quality: "good",
            feedback:
              "You just did the whole module in one paragraph: ran the pre-mortem (how do I hit 'initiatives launched' without improving anything? — effortlessly, and everyone will), traced the perverse selection (deep work punished, theater rewarded), and re-aimed the measure at purpose with a time horizon long enough to defeat cosmetics. The closing principle deserves its italics: measure outcomes, fund inputs, and never pay for the count of things whose count is free to inflate. Boards genuinely need this sentence; most have never heard it.",
          },
          {
            text: "Accept it with guardrails: require each initiative to include a charter, a measured baseline, and a twelve-month follow-up before it counts toward the score.",
            quality: "partial",
            feedback:
              "Better — your guardrails smuggle outcomes partway in — but examine what survived: the unit of account is still the initiative, so the equilibrium is N charters of minimum viable depth, each engineered to clear the counting bar, and the deep single-problem year still scores worst. Guardrails on a mispointed measure are the tightened-documentation move from vignette one wearing a suit. When the fix requires this much scaffolding to make a metric behave, the metric is telling you it wants to be a different metric.",
          },
          {
            text: "Endorse it — executive energy for improvement is scarce, and measuring initiative activity at least ensures leadership attention flows to process work.",
            quality: "miss",
            feedback:
              "Attention will flow — into whatever the counter counts, which is announcements. You'd be installing, at the executive layer, the exact mechanism failure the executives are supposed to be redesigning everywhere else: a proxy (launches) severed from purpose (improvement), with maximal gaming ease and the added cost that every layer below learns improvement means theater. The scarcest resource isn't executive energy; it's organizational belief that measures mean what they claim. This metric spends that belief on launch parties.",
          },
        ],
      },
    ],
    close:
      "Three redesigns, one standard: gaming the measure and doing the work became the same behavior — or the measure got re-aimed until they did. You're carrying the whole course now: diagnosis (Modules 1–2), relationships and coalitions (3, 7), negotiation (4), coordination (5), legitimacy (6), and the designer's inversion (8). Time to spend it all at once: the CFO's office first, then the retreat.",
  },

  /* ------------------- Step 3: Branching Case with MCQ ------------------- */
  mcqCase: {
    title: "The Perverse Incentive",
    narrative: [
      "Two years ago, Meridian's system office launched the Discharge Excellence Program: units earn a quarterly bonus for discharge-before-noon rates above 40%, a metric chosen — reasonably — to attack the boarding problem by pulling discharges earlier in the day. The metric improved immediately and has stayed improved. The boarding problem has not: ED boarding hours are up 12% over the program's lifetime.",
      "A quiet analysis by the data team explains the paradox. Units learned the profitable pattern within two quarters: patients who could have gone home Tuesday evening are now 'optimized overnight' and discharged Wednesday at 11:40 a.m. — counting toward the metric, at the cost of an extra bed-night. Before-noon discharges rose; total length of stay rose with it; net bed capacity fell. Meanwhile, transport and pharmacy — whose afternoon staffing shapes when discharges can physically happen — were never part of the program, and the discharge lounge that once buffered afternoon departures was defunded in the same budget cycle that funded the bonuses. Every unit is hitting its target. The system is producing less of the thing the target was for.",
    ],
    questions: [
      {
        id: "m8q1",
        stem: "Diagnose the Discharge Excellence Program's core failure.",
        tags: ["Goodhart's law", "Mechanism diagnosis"],
        options: [
          {
            key: "A",
            text: "A proxy-purpose divergence exploited exactly as Goodhart predicts: 'before-noon rate' was a proxy for 'beds freed earlier,' but the cheapest path to the proxy — holding Tuesday-evening patients until Wednesday morning — moves the number while consuming MORE capacity, and the mechanism pays for the number.",
            correct: true,
            feedback:
              "Precisely. The tell is in the data shape: proxy up, purpose down — the signature of a metric being fed rather than served. Note what the diagnosis does NOT include: villains. Every unit responded rationally to a published payoff; the overnight hold is individually defensible ('optimization') and collectively ruinous, which is what equilibrium dysfunction always looks like from inside. The failure lives in the rule that made the wrong behavior profitable, and that's where the fix lives too.",
          },
          {
            key: "B",
            text: "An implementation failure: the metric was sound, but units gamed it in bad faith, and program integrity enforcement should have caught the overnight-hold pattern early.",
            feedback:
              "'Bad faith' misreads the mechanics: no unit falsified anything — they scheduled real discharges at times the program genuinely rewarded. When a rule pays for 11:40 a.m., 11:40 a.m. is what fiduciarily responsible managers deliver. Calling rational response to published incentives 'gaming in bad faith' leads to the enforcement arms race (audits of discharge timing intent?) instead of the actual fix: a rule whose cheapest satisfaction is the desired behavior. Design for the players you have.",
          },
          {
            key: "C",
            text: "A target-calibration error: 40% was too achievable; a more ambitious threshold would have forced genuine process change rather than scheduling tricks.",
            feedback:
              "Raise the threshold and watch the same trick scale: more Tuesday patients held overnight, more bed-nights burned, a higher before-noon rate, and worse boarding. The gaming path doesn't close because the target moves — it closes only if the measure changes what it pays for. Calibration debates on a mispointed metric are rearranging the greeter's schedule. The pointing is the problem.",
          },
          {
            key: "D",
            text: "A scope failure only: the metric was fine, but excluding transport, pharmacy, and the discharge lounge meant units lacked the means to discharge early honestly.",
            feedback:
              "The scope failure is real and it's the accomplice, not the principal: even with perfect transport and a funded lounge, the overnight hold would REMAIN the cheapest path to the number — you'd just have well-resourced units holding patients till 11:40. Conversely, fixing the measure without the afternoon infrastructure caps how much honest improvement is physically possible. The redesign needs both; the diagnosis question is about which failure made the program self-defeating, and that's the proxy.",
          },
        ],
      },
      {
        id: "m8q2",
        stem: "Which redesign best satisfies the module's standard — gaming it and doing the right thing become the same behavior?",
        tags: ["Redesign selection", "Incentive compatibility"],
        options: [
          {
            key: "A",
            text: "Replace the before-noon rate with measures the overnight-hold cannot improve: total boarding hours and discharge-order-to-departure lag, with risk-adjusted length of stay as the counter-metric — and redirect the bonus pool into the afternoon infrastructure (transport staffing, the discharge lounge) that makes fast departures physically achievable.",
            correct: true,
            feedback:
              "Run the pre-mortem to confirm it holds: how do you game boarding-hours and order-to-departure lag? By moving admitted patients upstairs quickly and executing discharges promptly at whatever hour they're ready — which IS the desired behavior; the gaming path and the therapeutic path merged. The LOS counter-metric catches the one remaining dark path (discharging people too early), and shifting money from scoreboard to infrastructure is the vignette-two move: fund the work, not the number. This is what incentive compatibility looks like in a bed tower.",
          },
          {
            key: "B",
            text: "Keep the before-noon metric but subtract points for any discharge where the order was written the previous day — directly penalizing the overnight hold.",
            feedback:
              "A patch aimed at the known exploit — and the pre-mortem finds the workaround in one move: orders get written at 06:00 instead of the evening before, same hold, cleaner paperwork, plus a new perverse pressure against legitimately writing tomorrow's discharge orders early (which good teams do). Exploit-patching a mispointed measure is the arms race again; each patch teaches subtler timing. The measure wants to be a different measure.",
          },
          {
            key: "C",
            text: "Make the metric honest by changing its denominator: count before-noon discharges as a share of patients clinically ready before noon, per a standardized readiness assessment.",
            feedback:
              "Elegant on paper; in mechanism terms you've just moved Goodhart one layer down — the gameable object is now the readiness assessment, a judgment call the assessing unit is paid to shade ('not quite ready' till Wednesday works exactly as before). Metrics built on self-reported eligibility inherit every incentive problem of the original plus an audit apparatus. When your fix requires a new subjective input controlled by the incentivized party, the pre-mortem is already screaming.",
          },
          {
            key: "D",
            text: "Retire discharge metrics entirely and manage boarding through the daily bed huddle's operational judgment, restoring flexibility the program destroyed.",
            feedback:
              "This returns Meridian to the pre-program equilibrium — which, recall, was the boarding problem, produced reliably for years by exactly that operational-judgment regime (the huddle liturgy from the topic video). The program's failure doesn't vindicate unmeasured management; it demonstrates that the WRONG measure is worse than none while the right one remains available. Steering exists between 'bad autopilot' and 'no instruments.'",
          },
        ],
      },
      {
        id: "m8q3",
        stem: "The redesign will end bonuses that units have banked for two years — nursing leadership calls it 'a pay cut for hitting the target you gave us.' Applying the full course, what's the right handling?",
        tags: ["Transition design", "Fairness", "Change leadership"],
        options: [
          {
            key: "A",
            text: "Treat the grievance as legitimate (they optimized the rule you published — that's compliance, not cheating), and design the transition like a mechanism: hold units harmless through a bridge period, convert the bonus pool into the new program at equal or better expected value, co-design the new measures with the units who'll live under them, and say plainly that the old rule was leadership's design error — not the units' gaming.",
            correct: true,
            feedback:
              "Every course thread pulls through this answer: the fairness stakes are real payoffs (Module 6 — an 'unfair' transition gets rejected at real cost, however correct the destination), the public ownership of the design error is the costly repair signal (Module 3 — 'we built the wrong rule' is leadership's version of the apology without the if-clause), and co-design converts the aggrieved into authors (Module 7's fingerprints principle). Transitions are mechanisms too: a redesign that's right about the future and punitive about the past teaches everyone to resist the next redesign from day one.",
          },
          {
            key: "B",
            text: "Hold firm: the bonuses rewarded behavior that worsened boarding, and continuing to pay for harm during a 'bridge period' compounds the original error.",
            feedback:
              "Arithmetically true and mechanically blind: the bridge isn't payment for harm — it's the price of legitimacy for the NEXT mechanism, and it's cheap at that price. Claw the money back (or end it abruptly) and watch the ultimatum-game rejection arrive on schedule: units slow-walk the new measures, 'data issues' proliferate, and the redesign that penciled perfectly dies of noncooperation. You are always negotiating two things: this mechanism, and the meta-game of whether your mechanisms get adopted. Winning the first by forfeiting the second is a Module 4 trench with better math.",
          },
          {
            key: "C",
            text: "Avoid the confrontation: grandfather the old bonus alongside the new metrics, letting the old program fade as units migrate voluntarily.",
            feedback:
              "Two live mechanisms paying for contradictory behaviors — the overnight hold still profitable under the old rule, prompt departure rewarded under the new — resolves exactly as mixed incentives always do: each unit picks its most profitable blend, the data turns to mud, and the retreat's next redesign gets cited 'evidence that incentives don't work here.' Transitions need a bridge, not a permanent second bridge nobody closes. Kindness that preserves the perverse incentive is just the old error with better manners.",
          },
          {
            key: "D",
            text: "Reframe the narrative: announce the program achieved its goals and is 'graduating' into the new framework, avoiding any admission of design failure.",
            feedback:
              "Everyone in the building has seen the boarding numbers; the graduation narrative asks them to pretend otherwise, and the cost lands where you can least afford it — on the credibility of the next metric ('is this one real, or will it also graduate?'). Module 2 priced this: institutions signal through what they're willing to say at cost, and 'we designed the wrong rule' is precisely the costly signal that makes the replacement believable. Spin is cheap talk about your own mechanisms — the one audience it never fools is the one playing them.",
          },
        ],
      },
      {
        id: "m8q4",
        stem: "The pre-mortem question — 'how would I hit this number without doing the work?' — is proposed as a standing agenda item for every new Meridian metric. The quality office objects: 'institutionalizing bad faith — we'd be teaching people to think like gamers.' Who's right?",
        tags: ["Pre-mortem", "Goodhart's law", "Design culture"],
        options: [
          {
            key: "A",
            text: "Run the pre-mortem: it doesn't teach gaming — the payoff gradient teaches gaming, silently, one defensible judgment at a time, whether or not anyone names it. The pre-mortem just moves the discovery from year two (in the data, after the damage) to day one (in the room, on a whiteboard), where the exploit can be designed out instead of audited after.",
            correct: true,
            feedback:
              "Right — and the deeper point worth giving the quality office: the pre-mortem is respectful of clinicians in a way the alternative isn't. Skipping it doesn't preserve innocence; it guarantees the exploit is found by drift and then treated as misconduct (the 'bad faith' framing arriving after the fact, aimed at people who followed published rules). Running it says: we know rules create gradients, we own the gradients we create, and the compliance conversation happens with the designers, not the audited. Every serious mechanism-design culture has this ritual. The ones that don't have the arms race instead.",
          },
          {
            key: "B",
            text: "The quality office is right: publicly cataloguing exploits creates a how-to guide, and some exploits are only dangerous once named.",
            feedback:
              "This is security-through-obscurity applied to incentives, and it fails the same way: the 'catalogue' already exists — it's the payoff structure itself, legible to anyone optimizing under it, which is everyone. The greeter physician, the observation-status shift, the overnight hold: none were taught; all were found, quickly, by ordinary people following gradients. The only parties disadvantaged by not naming exploits in advance are the designers. The gamers never needed the meeting.",
          },
          {
            key: "C",
            text: "Split the difference: run pre-mortems, but privately, within the metrics team — surfacing exploits without normalizing exploit-thinking among clinicians.",
            feedback:
              "Closer, but the private version forfeits the pre-mortem's best asset: the people who can actually find the exploits are the ones who live in the workflow — the charge nurse who knows where the borderline cases bend, the transport lead who knows which timestamp is soft. A metrics team alone reliably misses the operational paths (they missed the overnight hold for two years). And the openness is itself a signal (Module 2): 'help us find the holes before they find us' builds the co-design trust that makes Module 7 coalitions possible. Secrecy protects nothing and spends that.",
          },
          {
            key: "D",
            text: "The debate is moot if metrics are simply chosen well — a sufficiently good measure has no exploits worth pre-morteming.",
            feedback:
              "The module's whole epistemics says otherwise: every measure is a proxy, every proxy diverges from purpose somewhere, and the divergence is found by whoever has the payoff gradient and the workflow knowledge — which is never the design room alone. 'Sufficiently good' is what the before-noon metric looked like on its launch slide; reasonable people chose it for reasonable reasons. Humility about your own designs isn't pessimism. It's the entry fee for designing at all.",
          },
        ],
      },
      {
        id: "m8q5",
        stem: "Final synthesis. The corrected program works: boarding hours fall 23% over the following year. The board asks what should be institutionalized from the episode. Which answer carries the whole course?",
        tags: ["Synthesis", "Mechanism stewardship", "Capstone"],
        options: [
          {
            key: "A",
            text: "A standing discipline, not a story: every mechanism ships with its purpose stated, a pre-mortem on record, counter-metrics attached, a review date where proxy-purpose drift is audited, a named transition plan for whoever the rules disadvantage — and the codified premise underneath it all: when a target is missed or gamed, the first question is what the rules paid for, and only the second is who failed.",
            correct: true,
            feedback:
              "That last clause is the entire course compressed: payoffs before blame is Module 1's float pool, Module 3's charitable read before retaliation, Module 5's coordination-not-character diagnosis, Module 6's process legitimacy, and this module's designer stance — one instinct, practiced eight ways. Institutionalize the discipline and Meridian stops depending on any particular hero having it; which is, fittingly, the mechanism-design answer to leadership itself: build the system in which ordinary leaders produce what extraordinary ones used to.",
          },
          {
            key: "B",
            text: "The corrected metrics themselves: lock boarding hours and order-to-departure lag as permanent system measures, protected from future tampering.",
            feedback:
              "Locking today's best proxy is how today's insight becomes 2031's greeter physician: the measures are good NOW, against current workflows and current gaming paths — and Goodhart never retires. Note that 'protected from tampering' also blocks the review-date audits that caught the last divergence. Institutionalize the process that produces and retires measures, not any measure. The map is not the territory, and this module's whole point is that laminating the map makes it wronger.",
          },
          {
            key: "C",
            text: "The team: the analysts and leaders who caught the perverse incentive should become a permanent mechanism-review unit with authority over all metric design.",
            feedback:
              "Half right — dedicated capability matters — but as the *whole* answer it rebuilds the single-point-of-failure the discipline exists to remove, and a central authority owning all metric design recreates Module 7's Northgate problem: mechanisms landed on units from a room the units aren't in, with predictable fingerprint-free adoption failures. The catching-team's methods, distributed as standard practice with local co-design, beat the catching-team enthroned. Institutionalize the verb, not the noun.",
          },
          {
            key: "D",
            text: "The lesson of restraint: incentive programs are demonstrably dangerous, so future mechanisms should face a high bar and a strong default toward professional autonomy.",
            feedback:
              "The episode's actual lesson is more precise than caution: the DEFAULT regime (pre-program operational judgment) produced years of boarding; the WRONG mechanism made it worse; the RIGHT mechanism cut it 23%. That's not an argument for fewer mechanisms — it's the case for the discipline that distinguishes them, applied every time. 'High bar plus autonomy default' just re-describes the status quo that generated the original equilibrium. The bar you want isn't higher; it's better specified — which is what option A specifies.",
          },
        ],
      },
    ],
  },

  /* -------------------- Step 4: One-on-One Simulation -------------------- */
  oneOnOne: {
    simId: "oneOnOne",
    title: "Penciling It with Webb",
    learnerRole:
      "The retreat is in nine days, and your ED-boarding mechanism redesign goes before it: retire the before-noon bonus, fund afternoon discharge infrastructure, measure boarding hours and order-to-departure lag with an LOS counter-metric, bridge the units harmless through transition. One signature decides whether it arrives as a proposal or as a plan: CFO Marcus Webb, who funded the original Discharge Excellence Program, has watched two years of its bonuses produce a 12% boarding increase, and has told Vasquez he is 'done buying behavioral programs.' Your job: translate clinical and game-theoretic logic into the language of margin, risk, and capital — without letting the translation lose the mechanism.",
    personas: ["webb"],
    scoring: {
      dims: [
        { id: "translate", label: "Financial translation", max: 4, anchor: "The mechanism argued in margin, risk, and option-value terms — not clinical sentiment" },
        { id: "mechanism", label: "Mechanism integrity", max: 3, anchor: "The design survived the negotiation intact — no perverse simplifications accepted" },
        { id: "history", label: "Owning the history", max: 3, anchor: "The old program's failure handled without blame or flinch — Module 3 applied upward" },
      ],
    },
    start: "b1",
    nodes: {
      b1: {
        turns: [
          { who: "narrator", text: "Webb's office. On his screen: the Discharge Excellence Program's quarterly report, the one with the before-noon rate in green and the boarding hours in a column nobody bolded. He gestures at it before you sit." },
          { who: "webb", text: "Two years, $3.1 million in unit bonuses, and my ED is boarding twelve percent MORE. I funded that. So before you pitch me whatever's in the folder: I've told Vasquez I'm done buying behavioral programs, and I meant it. You have one meeting to tell me why yours is different — and if the first slide says 'culture,' we're done early." },
        ],
        choices: [
          {
            text: "Open by autopsying his loss in his language: \"No culture slide. First slide is the autopsy of your $3.1 million, because my proposal only makes sense if we agree on the cause of death: the program paid for a timestamp, and units delivered the timestamp — by holding Tuesday-evening discharges overnight. You bought extra bed-nights at bonus rates. The program didn't fail because units misbehaved; it failed because it was priced to produce exactly this. I'm not selling a behavioral program. I'm selling a repricing.\"",
            next: "b2autopsy",
            score: { translate: 2, history: 1 },
            note: "You met 'done buying behavioral programs' by agreeing with it — the old program WAS one, and the autopsy frames the failure as a pricing error, not a virtue deficit. 'You bought extra bed-nights at bonus rates' is the finding in pure CFO dialect: no blame, no flinch, cause of death established before the cure is offered.",
          },
          {
            text: "Lead with the prize: \"Different because of the size of what's on the table: boarding costs this system roughly $9M a year in diverted admissions, LWBS losses, and ED overtime. My redesign targets a 20% reduction — call it $1.8M annually — for a transition cost under $900K. The ROI clears in six months.\"",
            next: "b2prize",
            score: { translate: 1 },
            note: "Real numbers, right language — and you've skipped the autopsy. Webb's last program also had a beautiful ROI slide; without establishing why THIS mechanism pays differently, your $1.8M reads as the same genre of promise. Watch him reach for the green-column report.",
          },
          {
            text: "Acknowledge his position and negotiate the frame: \"Fair opening. Then let's agree on terms before content: if I can show you this isn't a behavioral program — that it doesn't ask anyone to behave better — will you evaluate it on the numbers?\"",
            next: "b2frame",
            score: { history: 1 },
            note: "A clean Module 4 move — settle the standard of evaluation first. Slightly slower than the autopsy route, and it hands Webb the first substantive turn, which with Webb means the sharpest available question is coming at you now instead of later.",
          },
        ],
      },

      b2autopsy: {
        turns: [
          { who: "webb", text: "'Priced to produce exactly this.' \" — he pulls the report closer, and for the first time in two years looks at the unbolded column — \"That's the first explanation of this program's numbers that doesn't require me to believe my nursing units are stupid or crooked, neither of which I've ever believed. Fine. You have my attention and my skepticism, in that order. If they gamed a timestamp, they'll game whatever you measure too. Why doesn't your mechanism die the same death?" },
        ],
        choices: [
          {
            text: "Show him the pre-mortem — the exploit search run in advance: \"Because we tried to kill it first. Standing exercise: how do you hit MY numbers without doing the work? Boarding hours — gameable only by moving admitted patients up fast. Order-to-departure lag — gameable only by executing discharges promptly. Both 'exploits' ARE the desired behavior; that's the design standard. One real dark path exists — discharging people too early — so risk-adjusted LOS and returns-to-acute-care ride along as tripwires. And the audit of proxy-versus-purpose runs quarterly, forever, because the day someone finds a path we missed, I want it found in a report, not in a year-two autopsy like this one.\"",
            next: "b3money",
            score: { mechanism: 2, translate: 1 },
            note: "The pre-mortem, presented as due diligence — which to a CFO is exactly what it is: you stress-tested the asset before asking him to buy it. 'Both exploits are the desired behavior' is incentive compatibility in one sentence, and the standing audit converts Goodhart from a rebuttal into a line item.",
          },
          {
            text: "Point to the measures' hardness: \"Because boarding hours and departure lag are operational timestamps out of the units' control — system-recorded, not self-reported. The old metric could be scheduled; these can't be.\"",
            next: "b3harden",
            score: { mechanism: 1 },
            note: "True but thin — 'they can't game it' is the claim every metric designer has made since the first dashboard, and Webb has funded several. The stronger answer isn't that gaming is impossible; it's that the cheapest gaming path was designed to BE the work. Expect him to hunt for the exploit himself now.",
          },
        ],
      },

      b2prize: {
        turns: [
          { who: "webb", text: "Six-month ROI. \" — he turns the screen toward you: the Discharge Excellence launch deck, slide four, highlighted — \"'Projected $2.2M annual capacity recovery, ROI in eight months.' I keep it as wallpaper for meetings like this one. Your predecessor's numbers were also real, also conservative, also built by smart people. The projection isn't your problem. Your problem is convincing me the MACHINE that eats projections in this building — whatever ate that one — doesn't eat yours. What ate that one?" },
        ],
        choices: [
          {
            text: "Answer the actual question — do the autopsy he just assigned: \"Goodhart's law ate it, on schedule: the program paid for a before-noon timestamp, and the cheapest path to the timestamp was holding Tuesday discharges overnight — so the projection died of extra bed-nights, purchased at bonus rates. That's the machine. My design starts from its existence: measures whose cheapest gaming path is the desired behavior, counter-metrics on the one dark path, and a quarterly proxy-purpose audit. The projection isn't the product. The exploit-resistance is.\"",
            next: "b3money",
            score: { translate: 1, mechanism: 1, history: 1 },
            note: "He handed you the autopsy as a test and you performed it cleanly — including the machine's name. Note his frame is worth keeping forever: 'the machine that eats projections' is a CFO's native rendering of Goodhart's law, and answering inside his metaphor is translation at its best.",
          },
          {
            text: "Distinguish your projection's quality: \"That deck projected from national benchmarks; mine is built bottom-up from Meridian's own boarding data, unit by unit, with conservative haircuts. The difference is rigor, not optimism.\"",
            next: "b3harden",
            score: { translate: 1 },
            note: "Rigor is real, and it answers a question he didn't ask: his point was never that the old projection was sloppy — it's that a correct projection died of a mechanism failure. Better arithmetic on top of the same death-machine is a more precise estimate of what gets eaten.",
          },
        ],
      },

      b2frame: {
        turns: [
          { who: "webb", text: "On the numbers — agreed, with my definition of 'the numbers': not your projected savings. Projections are free. I evaluate mechanisms on downside: what's the worst quarter this design can produce, what does it cost me to find out, and what's my exit if it's eating money? Answer those three and you can skip the rest of the pitch — they're the whole pitch." },
        ],
        choices: [
          {
            text: "Answer all three in order, without flinching: \"Worst quarter: the infrastructure spend runs and boarding doesn't move — call it $310K burned against flat numbers; the metrics make that failure visible in one quarter, not two years. Cost to find out: $900K transition total, of which $600K is transport and lounge staffing that has standalone value even if my mechanism theory is wrong — real option, not sunk cost. Exit: pre-committed kill criteria, written into the charter — two consecutive quarters without boarding-hour improvement and the program sunsets automatically; no committee required, no zombie program. You've watched me fund the kill clause pattern before, at the governance committee. It's the same architecture.\"",
            next: "b3money",
            score: { translate: 2, mechanism: 1 },
            note: "Downside, discovery cost, exit — answered in his order, with the two moves CFOs rarely get: infrastructure spend framed as a real option (value survives the theory failing), and an automatic sunset that removes the 'zombie program' risk he's been eating for two years. The governance-committee callback lands because it's true: your architecture has a track record with him now.",
          },
          {
            text: "Push back on the frame: \"Downside-only evaluation is how systems stay stuck — every mechanism has a worst quarter, but the status quo's worst quarter is guaranteed: boarding costs $9M a year with certainty. The relevant comparison is expected value, and mine dominates.\"",
            next: "b3harden",
            score: { translate: 1 },
            note: "The expected-value point is correct and the delivery just declined his explicitly stated evaluation standard — with Webb, that's not framing disagreement, it's a signal you haven't done the downside work. He'll now do it for you, adversarially.",
          },
        ],
      },

      b3money: {
        turns: [
          { who: "narrator", text: "Webb is writing — the real writing, two columns, his own arithmetic. Then he stops and looks up with the expression he wears when he's found the seam." },
          { who: "webb", text: "It mostly pencils. So here's my counteroffer, and note that I'm negotiating, which means you've passed the screening round: I'll fund the metrics, the audit, and the bridge — but not the $600K of transport and lounge staffing. Prove the mechanism first: run the new measures for two quarters on existing infrastructure, and if boarding moves, THEN I fund the afternoon build-out. Half the cost, same design, staged risk. That's a yes you can take to the retreat today." },
        ],
        choices: [
          {
            text: "Refuse the staging — because the mechanism dies without it — and price why: \"That's the one term I can't take, and here's the mechanism reason, not the wish reason: order-to-departure lag is bounded by physics — no transport at 3 p.m., no lounge to move people to — so on existing infrastructure the honest floor is maybe 15 minutes of improvement. Two quarters of 'metrics moved barely' later, we'd correctly kill a design we never actually ran. The staged version isn't half the risk; it's a $300K experiment engineered to produce a false negative. Counter-structure: fund it whole, and take a harder kill criterion — one quarter, not two, for first improvement. I'll trade speed of exit for completeness of test. That's staging risk honestly.\"",
            next: "b4close",
            score: { mechanism: 2, translate: 1 },
            note: "The negotiation's crux: his staging offer was reasonable-sounding and would have quietly gutted the design — infrastructure isn't an add-on to the mechanism; it's the physical substrate the measures act on. 'Engineered to produce a false negative' names that in risk language, and the counter — faster kill for full funding — gives him staged risk on the axis that doesn't break the machine. Never let a funder simplify your mechanism into a version that can't work; Module 4 called this claiming with a story he can ratify.",
          },
          {
            text: "Take the staged deal — half a mechanism funded beats a whole one rejected: \"Staged works. We'll run the measures two quarters on current infrastructure and earn the build-out with the data.\"",
            next: "b4staged",
            score: { translate: 1 },
            note: "You just accepted the version of your design that your own analysis says can't move its numbers — the retreat will ratify a mechanism scheduled to disprove itself. Module 4's lesson arriving with interest: the deal you can get isn't always the mechanism you designed, and knowing the difference is the job.",
          },
        ],
      },

      b3harden: {
        turns: [
          { who: "webb", text: "Let me do your pre-mortem for you, then, since someone has to: your order-to-departure lag — starts when the discharge order is signed. So attendings under pressure sign orders LATER, once everything's already staged, and your lag looks gorgeous while patients sit exactly as long. Found that in ninety seconds. What else didn't you stress-test?" },
        ],
        choices: [
          {
            text: "Take the hit and show the layer he found is already load-bearing: \"Found it faster than my team did — it took us a day, and it's why the design pairs the lag with total boarding hours and admission-decision-to-bed time: sign orders late and the lag improves while boarding hours don't move, and the divergence between the two is itself the tripwire — flagged in the quarterly proxy audit by design. You just demonstrated the method the whole mechanism runs on: adversarial search, in advance, institutionalized. I'd rather fund your ninety seconds as a standing review role than survive it as a gotcha.\"",
            next: "b3money",
            score: { mechanism: 2, history: 1 },
            note: "The recovery that converts an ambush into a recruitment: his exploit was real, your architecture already caught it (paired measures, divergence tripwire), and the closing move — inviting his adversarial talent into the standing audit — is Module 7's fingerprint play run on a CFO. Webb on the pre-mortem board is worth more than Webb merely convinced.",
          },
          {
            text: "Minimize it: \"Order-timing drift is second-order — the volume of gaming that requires coordinated attending behavior across units makes it unlikely at scale.\"",
            next: "b4staged",
            score: {},
            note: "'Unlikely at scale' — said to the man holding two years of evidence that units find every profitable path, uncoordinated, one defensible judgment at a time. He offered you the pre-mortem as a partnership test; 'second-order' failed it.",
          },
        ],
      },

      b4close: {
        turns: [
          { who: "webb", text: "One quarter to first improvement, full funding, automatic sunset. \" — he writes a number, circles it, turns the pad around: the full $900K, with a date — \"Done, on one final condition, and it's not money: at the retreat, YOU present the autopsy of my program. Not the diplomatic version — the real one, timestamp gaming and all. Because half that room funded pieces of Discharge Excellence, and if this redesign starts with everyone politely not mentioning the corpse, the next perverse incentive gets the same two-year courtesy. You've been doing repair conversations all year, per Vasquez. Do that one." },
        ],
        choices: [
          {
            text: "Accept — and structure the autopsy as system learning, not confession: \"Done — and I'll present it the way the diagnosis actually runs: nobody in that room failed; a rule was priced wrong and every unit responded rationally, which is precisely why the new design carries a pre-mortem, counter-metrics, and a sunset. Your program's corpse is the best teaching specimen this system owns, Marcus. With your permission, I'll say that sentence too — funder included in the no-blame frame, by name.\"",
            next: "b5win",
            score: { history: 2 },
            note: "He asked you to autopsy his own program in front of his peers — a test of whether your no-blame mechanics framing is real or just rhetoric that stops at the CFO's door. Including him in the frame by name, with permission, is Module 3's repair grammar performed upward: the costliest signal in the building, and he chose it himself.",
          },
          {
            text: "Soften the ask: \"I'll present the redesign's rationale thoroughly — but relitigating the old program by name risks making the retreat about blame. Let the design speak; the room will infer the history.\"",
            next: "b5soft",
            score: { history: 1 },
            note: "He explicitly requested the un-diplomatic version — he's trying to spend his own political capital to buy the system an honest autopsy, and you're declining the purchase on his behalf. Inference is not institutionalization; Module 6 taught you what unspoken histories cost.",
          },
        ],
      },

      b4staged: {
        turns: [
          { who: "narrator", text: "The staged version goes to the retreat, passes easily — half-cost proposals usually do — and performs exactly as your own physics predicted: two quarters on existing infrastructure move boarding hours by a statistically arguable sliver. Webb, honest to his word and his method, reads the data without mercy: 'The mechanism had its test.' The build-out funding dies in the same meeting; the metrics persist as a dashboard nobody's paid to move; and eight months later a consultant's deck proposes substantially your original design, at 2.4x your price, with the infrastructure 'phase one' this time. Webb forwards it to you with a one-line note that is either an apology or a lesson, probably both: 'Yours penciled better. Should have said so louder — both of us.'" },
        ],
        end: true,
        outcome: "mixed",
      },

      b5win: {
        turns: [
          { who: "webb", text: "Funder included by name. \" — a short exhale that from Webb constitutes laughter — \"You know what you're actually selling me? Two years ago somebody sold me a metric. You're selling me the thing that checks the metrics. That's the first product in this building I've ever wanted a subscription to. Retreat's in nine days. My office will have the term sheet in three. Go tell Vasquez the CFO is funding game theory now — she'll want to sit down for it." },
          { who: "narrator", text: "The term sheet arrives in two days, not three, with one addition in Webb's own hand: the quarterly proxy-purpose audit is chartered as a standing system function — 'the subscription' — with the CFO's office as co-sponsor. You walk into the retreat with the hardest signature already on the hardest page. What remains is the room: six leaders, one mechanism, and every skill the course has taught you, all due at once." },
        ],
        end: true,
        outcome: "strong",
      },

      b5soft: {
        turns: [
          { who: "narrator", text: "Webb funds it anyway — the mechanism was sound and he said so — but the retreat unfolds as he predicted: the redesign presents beautifully, the old program goes politely unmentioned, and in the corridor afterward two VPs compare quiet notes about 'another metrics reshuffle' with no idea why this one differs. The design survives on its merits. The LESSON doesn't: eleven months later, a new patient-experience incentive ships from a different office with no pre-mortem, no counter-metric, and a familiar genre of launch slide — and Webb, watching it pass, sends you a single line: 'This is what the autopsy was for.' The mechanism you built works. The discipline it came from stayed in the folder — which, this module would note, was the more valuable of the two." },
        ],
        end: true,
        outcome: "provisional",
      },
    },
    outcomes: {
      strong: {
        label: "The CFO bought the discipline, not the metric",
        text: "You autopsied his $3.1M loss in his own language without blaming a single unit, survived his adversarial pre-mortem by showing the architecture had pre-eaten it, refused the staging offer that would have gutted the mechanism — trading exit speed for test completeness instead — and accepted the hardest ask: the public autopsy, funder included by name. 'Selling the thing that checks the metrics' is the capstone translation: mechanism design, rendered as a product a CFO subscribes to.",
      },
      provisional: {
        label: "The mechanism funded; the lesson filed",
        text: "The design won on merits — real translation, real architecture — but somewhere the history got softened or the discipline stayed implicit, and the system kept its ability to ship the next perverse incentive unexamined. The module's sharpest claim stands: the redesign was the deliverable, but the autopsy was the asset. Replay for the version where both leave the room.",
      },
      mixed: {
        label: "Half a mechanism, tested to death",
        text: "The staged deal — reasonable, fundable, fatal — ran your measures on infrastructure that physically couldn't move them, and the false negative arrived on schedule. The lesson is Module 4's, compounding at Module 8 stakes: a funder's simplification of your mechanism is still a redesign of it, and knowing which terms are load-bearing is the difference between negotiating and dismantling.",
      },
    },
  },

  /* --------------------- Step 4b: Switch Chairs --------------------- */
  switchChairs: {
    simId: "switchChairs",
    title: "Switch Chairs: You Are Marcus Webb",
    learnerRole:
      "You are Meridian's CFO. Operating margin: 1.8%. Two years ago you funded the Discharge Excellence Program — $3.1 million in unit bonuses against a projected $2.2M capacity recovery — and you have watched its green metric and its worsening boarding numbers share a quarterly report ever since, unable to name what went wrong except that you paid for it. You keep the launch deck as wallpaper for humility. Now the strategy director wants thirty minutes about an ED-boarding 'mechanism redesign.' You've told Vasquez you're done buying behavioral programs. Feel what the pitch sounds like from behind the ledger.",
    personas: [],
    extraSpeakers: {
      strategist: { name: "The Strategy Director", initials: "SD", role: "Director of System Strategy, Meridian Health" },
    },
    scoring: {
      dims: [
        { id: "diligence", label: "Fiduciary diligence", max: 4, anchor: "Stress-tested the mechanism like capital at risk — downside, exploits, exit" },
        { id: "learn", label: "Buying the lesson", max: 3, anchor: "Let the autopsy of your own program actually land — and paid for the discipline, not just the fix" },
      ],
    },
    start: "m1",
    nodes: {
      m1: {
        turns: [
          { who: "narrator", text: "Your office. The quarterly report is open to the page you've stopped showing the board: before-noon rate, green; boarding hours, up twelve percent; and a bonus line you approved. The strategy director sits down without slides, which you note the way you note everything." },
          { who: "strategist", text: "No culture slide, I promise. First thing I want to do is autopsy your $3.1 million — because my proposal only makes sense if we agree on cause of death. The program paid for a timestamp. Units delivered the timestamp: they held Tuesday-evening discharges overnight and hit 11:40 the next morning. You bought extra bed-nights at bonus rates. Nobody misbehaved. The rule was priced to produce exactly this." },
        ],
        choices: [
          {
            text: "Let the autopsy land — say the part you've never said aloud: \"...Two years I've stared at those two columns unable to connect them without concluding my units are stupid or crooked — and they're neither, which is why I couldn't finish the thought. 'Priced to produce exactly this.' All right. You've explained my own loss to me better than I could, which buys you exactly one thing: my full diligence instead of my standing no. Start with the downside.\"",
            next: "m2diligence",
            score: { learn: 2 },
            note: "From this chair, feel what the no-blame mechanics framing actually does for a funder: it makes the loss thinkable. Two years of cognitive dissonance — good units, bad numbers, your signature — resolves the moment someone locates the failure in the rule you funded rather than the people you funded. That relief is real, and it's also a sales technique; the diligence you just promised is how you tell which.",
          },
          {
            text: "Guard against the flattery of a good explanation: \"A tidy story. Tidy stories about my own programs are how I got the wallpaper. If your explanation is right, it makes a prediction: the overnight-hold pattern shows up in the discharge-timing data — Tuesday evening orders, Wednesday 11:40 departures, clustered after the bonus launch. Show me that plot before we discuss anything you're selling.\"",
            next: "m2verify",
            score: { diligence: 2 },
            note: "The CFO's version of Module 2: explanations are cheap talk; testable predictions are costly signals. Demanding the plot before the pitch is exactly right — a true mechanism story is falsifiable in your own data, and a seller who flinches from that request has told you everything.",
          },
        ],
      },
      m2verify: {
        turns: [
          { who: "strategist", text: "Fair standard — and here's the plot, because I ran it before I booked the meeting. \" — the tablet turns: discharge-order timestamps against departure times, quarterly, two years — \"Pre-program: orders and departures track within ninety minutes, all day. Post-launch: a growing cluster of evening-order, next-morning-11:40 departures — eleven percent of all discharges by Q4, concentrated in the bonus-eligible units. The pattern you'd predict, where you'd predict it. I'll leave the raw extract with your analysts." },
        ],
        choices: [
          {
            text: "Update like the evidence deserves — and note what the preparation signals: \"That's the plot I asked for, run before I asked — which tells me you knew what a funder burned by projections would need, and brought evidence instead of adjectives. The autopsy stands. Now the real diligence: your mechanism replaces this one. Convince me it doesn't die the same death — and I warn you, I've gotten better at finding the 11:40 in things.\"",
            next: "m2diligence",
            score: { diligence: 1, learn: 1 },
            note: "Evidence requested, evidence produced, update made — the sequence sounds trivial and is the entire discipline. Note also what you're doing with 'I've gotten better at finding the 11:40': converting your two-year loss into adversarial capability. Wallpaper into weaponry. That's what buying the lesson looks like from inside.",
          },
          {
            text: "Accept the plot but stay transactionally cold: \"The data holds. Fine — the old program failed as you describe. What's the price of yours?\"",
            next: "m3price",
            score: { diligence: 1 },
            note: "Diligence done, lesson skipped: you've verified the autopsy without letting it restructure how you evaluate the next mechanism — 'what's the price' is the question that funded the LAST program. The plot you just accepted contains a method (predict the exploit, check the cluster); the cold pivot leaves it on the tablet.",
          },
        ],
      },
      m2diligence: {
        turns: [
          { who: "strategist", text: "Downside first, then: worst quarter is $310K of infrastructure spend against flat boarding — visible in one quarter, because the measures move fast or they don't. Total exposure $900K, of which $600K is transport and discharge-lounge staffing with standalone value even if my theory's wrong. Exit: automatic sunset, written into the charter — two flat quarters and it dies without a committee. And before you run your pre-mortem on my measures, I'll run it for you: the exploitable seam is order-signing time — attendings could sign late to flatter the lag metric. It's why the lag is paired with total boarding hours, and why divergence between them is itself a tripwire in the quarterly audit." },
        ],
        choices: [
          {
            text: "Test the one thing they haven't proven — the audit's independence: \"You've pre-eaten your own exploits, which is either the discipline or an excellent imitation. One structural question decides which: the quarterly proxy-purpose audit — who runs it, and who can kill a finding? Because if it reports to whoever owns the program's success, I'm funding a mechanism that grades its own homework, and I have two years of wallpaper about how that ends. Put the audit under my office — finance has no stake in the program looking good — and fund it as a standing function, not a program feature. That's my price, and it's not negotiable.\"",
            next: "m4subscribe",
            score: { diligence: 2, learn: 1 },
            note: "The question the pitch couldn't have planted: audit independence is the difference between a mechanism with a conscience and a mechanism with a compliance costume, and only the funder can force it. 'Grades its own homework' names the failure mode; chartering the audit under finance — the office with no stake in program optics — is the CFO's unique contribution to mechanism design. This is what the chair is FOR.",
          },
          {
            text: "Negotiate the exposure down — staging is what CFOs do: \"Sound architecture. Now the counteroffer: metrics and audit funded now, the $600K infrastructure after two quarters of proof on existing capacity. Half the risk, same design. Take it to your retreat.\"",
            next: "m3stage",
            score: { diligence: 1 },
            note: "The staging reflex — prudent on its face, and watch what the strategist does with it: if they accept, you've bought a test engineered to fail (no afternoon transport, no lounge, physics caps the improvement); if they refuse and can say WHY in mechanism terms, you've learned the design is load-bearing all the way down. Either way, from this chair, the counteroffer is itself a probe.",
          },
        ],
      },
      m3price: {
        turns: [
          { who: "strategist", text: "$900K total: $300K for measurement, audit, and the transition bridge; $600K for afternoon transport and the discharge lounge — the physical substrate the measures act on. And I'll flag the trap in my own proposal, since you didn't ask: if you stage it — metrics first, infrastructure later — the test runs on capacity that physically can't move the numbers, produces a false negative, and you'll kill a design that never ran. I'd rather you fund it whole with a faster kill switch than fund half at lower risk. I'm telling you where my mechanism is fragile because the last program died of nobody saying where it was fragile." },
        ],
        choices: [
          {
            text: "Reward the disclosed fragility — it's the signal that matters: \"You just talked me out of my own staging offer before I made it, at cost to your close rate. That's the behavior the last vendor never showed me, and it's worth more than your projections: full funding, one-quarter kill criterion as you propose — and one addition of mine: the audit charters under my office, independent of the program. If I'm buying the discipline, I'm buying the version that can convict its own designer.\"",
            next: "m4subscribe",
            score: { learn: 2, diligence: 1 },
            note: "Module 2 from the buyer's side: the costly signal (disclosing your own fragility against your sales interest) is the credential no deck can fake. Funding decisions ultimately price the SELLER's epistemics, not the product's slideware — and this seller just showed you theirs. The audit-independence addition is your fingerprint on the mechanism: Module 7, executed from the money chair.",
          },
          {
            text: "Take the staging anyway — disclosed fragility might be a negotiation tactic: \"Noted. Metrics first regardless — if the mechanism's as sound as claimed, it'll show something even on existing infrastructure, and I've been burned too recently for $900K leaps of faith.\"",
            next: "m3stage",
            score: {},
            note: "'It'll show something' — from this chair, hear the echo: that's projection-thinking, the exact genre the wallpaper exists to warn you about. They told you the physics; overriding it with priors about vendors is how the second $3.1M lesson gets purchased at a discount that isn't one.",
          },
        ],
      },
      m3stage: {
        turns: [
          { who: "strategist", text: "Then I have to do the thing that risks this meeting: refuse. Staged funding produces a two-quarter test on infrastructure that physically caps improvement at noise level — you'd get a false negative, kill a design that never ran, and be right to, on the data you'd have. I won't build an experiment whose most likely output is a wrong answer with my name on it. Counter: full funding, kill criterion tightened to ONE quarter, sunset automatic. You get faster exit; I get a real test. If that's unfundable, I'd rather walk out with the design intact than stay with half of it — because the half you'd fund is the half that can't work." },
        ],
        choices: [
          {
            text: "Recognize what just happened — and fund the refusal: \"You'd rather lose the deal than run a false test... Director, do you know what I'm actually buying today? Not boarding hours. I'm buying the first person in two years who won't let ME design the failure. Full funding, one-quarter kill, audit under my office. And the retreat presentation includes the autopsy of my program — the real one — because if this discipline is worth $900K, it's worth the room hearing what it replaces.",
            next: "m4subscribe",
            score: { learn: 2 },
            note: "The walk-away that isn't a bluff — refusing YOUR money to protect THEIR mechanism's integrity — is the single costliest signal a seller can emit, and from this chair its meaning is unambiguous: they're optimizing for the mechanism working, not the deal closing. Those are the only people to fund. The autopsy request is you spending your own capital to institutionalize the lesson: Webb's version of Module 3's public repair.",
          },
          {
            text: "Call the walk-away: \"Then walk. Every vendor has a 'this term is sacred' speech, and my job is to not believe it. Staged or nothing.\"",
            next: "m5walk",
            score: {},
            note: "Sometimes the speech IS theater — but you have a discriminator available and didn't use it: theatrical sacred-terms protect margins; this one protected test validity, at the seller's expense, with the physics shown. Calling every walk-away identically isn't skepticism; it's a rule that can't tell signal from noise — which, from the wallpaper's perspective, is how you got the wallpaper.",
          },
        ],
      },
      m4subscribe: {
        turns: [
          { who: "narrator", text: "The term sheet takes two days: full funding, one-quarter first-improvement criterion, automatic sunset, the bridge for the units — and the clause that's yours: the proxy-purpose audit chartered under finance as a standing system function, applied not just to this program but to every stakes-bearing metric Meridian ships. The strategist signs it with a line you'll repeat at the retreat: 'The CFO's office just became the immune system.' Four quarters later, boarding hours are down 19% and climbing toward the projection — but that's not the number you show the board. You show them the audit's first annual report: two other metrics flagged for proxy drift, one killed before launch by a pre-mortem, and a patient-experience incentive redesigned in committee instead of autopsied in year two. The wallpaper stays up in your office. People ask why you keep it. 'Tuition receipt,' you tell them. From this chair, the course's last lesson is the money's version: the mechanism was $900K. The discipline was free — it just cost $3.1 million to notice it was missing." },
        ],
        end: true,
        outcome: "strong",
      },
      m5walk: {
        turns: [
          { who: "narrator", text: "They walk, politely. The staged version you wanted gets built anyway six months later — by a consultancy happy to take staged money — and performs precisely as the physics said: two quarters, existing infrastructure, statistically arguable sliver, program killed on the data. Correct decision, wrong experiment; the false negative you were warned about, purchased at half price and full confidence. The boarding line resumes its drift. Eighteen months later, the original design resurfaces through Vasquez's office — same measures, same infrastructure logic, new sponsor — and you fund it, because it was always sound, at 2.4x the original price plus the eighteen months. From this chair the accounting is exact: the walk-away was the costly signal, the staging reflex was the tell you ignored, and the difference between a CFO who prices signals and one who prices decks is — in this instance — about $1.3 million and a year and a half of twelve-percent-worse. The wallpaper gains a second page." },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "The immune system, funded",
        text: "From the ledger's side you did the chair's real work: demanded falsifiable evidence before narrative, priced the seller's costly signals correctly (the disclosed fragility, the walk-away that protected test validity), and contributed the one clause only a funder can force — audit independence, chartered where program optics hold no stake. The transfer lesson: whoever funds your next mechanism is sitting where you just sat. Bring them the plot before they ask.",
      },
      provisional: {
        label: "Verified, funded, half-learned",
        text: "The diligence was real and the mechanism got funded — but somewhere the lesson stayed transactional: the method on the tablet unadopted, the audit unindependent, or the discipline confined to this one program. From the CFO's chair, the distinction is the whole estate: fixes depreciate; the thing that checks the fixes compounds.",
      },
      mixed: {
        label: "The tell, ignored at compound interest",
        text: "The staging reflex met a genuine costly signal and won anyway — and the false negative, the consultancy markup, and the eighteen-month drift arrived in the exact order predicted. From this chair the lesson is priced in dollars: skepticism that can't distinguish protective walk-aways from theatrical ones isn't diligence. It's the wallpaper's sequel, pre-ordered.",
      },
    },
  },

  /* --------------- Step 5: Multidisciplinary Meeting --------------- */
  meeting: {
    simId: "meeting",
    title: "The Strategy Retreat — Capstone",
    learnerRole:
      "The annual system strategy retreat, final session: ED boarding, end to end. You facilitate. Around the table: Dr. Vasquez (CMO), Marcus Webb (CFO — your term sheet signed, expecting the autopsy), Renée Osei-Mensah (CNO — her units hold the bridge grievance), Dr. Herrera (Chair of Surgery — his OR schedule collides with your bed math), Dr. Kioko (hospital medicine — his attendings' rounding order is inside your mechanism), and Maya Delgado (community board — watching who the redesign harms). This is the longest simulation in the program, and the assignment is the whole course at once: diagnose the game without blame (M1–2), hold the relationships and coalition (M3, 7), negotiate the trade-offs (M4), run the room with structure (M5), keep the process legitimate (M6) — and leave with a mechanism, not a mood (M8).",
    personas: ["vasquez", "webb", "osei", "herrera", "kioko", "delgado"],
    scoring: {
      dims: [
        { id: "diagnose", label: "Mechanism diagnosis", max: 3, anchor: "The equilibrium named without a single villain — autopsy included" },
        { id: "room", label: "Running the room", max: 3, anchor: "Structure, sequencing, and every voice's information surfaced (M5, M7)" },
        { id: "trades", label: "Trade-offs negotiated", max: 2, anchor: "Real costs named and priced, not smoothed (M4)" },
        { id: "design", label: "Mechanism shipped", max: 2, anchor: "Left with rules, owners, counter-metrics, and a sunset — not intentions" },
      ],
    },
    start: "r1",
    nodes: {
      r1: {
        turns: [
          { who: "narrator", text: "The retreat room, final session, the agenda's last and largest block. Two years of boarding data on the screen. Webb catches your eye and taps his folder once: the autopsy. Six leaders, one mechanism, ninety minutes." },
          { who: "vasquez", text: "Last session, hardest problem. Director — the boarding redesign is yours to present. The room has read the pre-materials, which means the room has read that the Discharge Excellence Program is proposed for retirement. I'd start there if I were you. Several people at this table funded it, championed it, or hit its targets." },
        ],
        choices: [
          {
            text: "Start with the autopsy, no-blame mechanics, funder included by name — as promised: \"Then I'll start where Marcus asked me to: with the honest autopsy of a program he funded and I'm asking us to retire. Discharge Excellence paid for a before-noon timestamp. Every unit responded rationally — held Tuesday-evening discharges overnight, hit 11:40, collected the bonus their leadership told them to earn. Nobody in this room failed; nobody's units gamed in bad faith. A rule was priced wrong, the rule did what wrongly-priced rules do, and the $3.1 million taught us — if we'll take the lesson — how this system actually works: it produces whatever we pay for, precisely, including the things we didn't mean to order. That lesson is the most valuable asset in the pre-read. The redesign just cashes it.\"",
            next: "r2webb",
            score: { diagnose: 2, room: 1 },
            note: "The capstone's opening move, executed: history owned publicly (M3's repair, at institutional scale), failure located in the mechanism with zero villains (M1's frame), and the funder's own request honored — which the room notices, because Webb visibly relaxes. The corpse named, the courtesy ended, the meeting free to design.",
          },
          {
            text: "Lead with the future — the room knows the history: \"I'll start with where we're going: a mechanism that measures what we actually want — boarding hours, order-to-departure lag — funds the afternoon infrastructure that makes speed physically possible, and sunsets automatically if it fails. The past program's shortfalls are documented in the pre-read; I'd rather spend our ninety minutes on the design.\"",
            next: "r2polite",
            score: { design: 1 },
            note: "'Documented in the pre-read' is the polite non-mention Webb explicitly warned about — and the room's un-named history doesn't disappear; it sits under the table doing what unspoken things do at retreats: making everyone's questions about the new design secretly about the old one.",
          },
        ],
      },

      r2webb: {
        turns: [
          { who: "webb", text: "Confirmed, all of it — my funding, my launch deck, my two years of not connecting the columns. I keep the deck as wallpaper now. The reason I asked for the public version: if this room can't say 'we priced a rule wrong' out loud, we'll re-price rules wrong privately forever. The term sheet's signed. I'm here for the part where five other leaders find the holes I missed." },
          { who: "herrera", text: "Then I'll start finding. Your bed math has a surgical assumption buried in it, Director: 'admitted patients move upstairs promptly' requires beds, and my elective schedule PRODUCES those admitted patients on a rhythm your mechanism doesn't touch. Monday and Tuesday, my ORs load the floors to the gills — that's not hoarding, that's the block schedule this system gave me, which, I will note before someone else does, we redesigned two years ago with escrow rules I now apparently defend. So: does your mechanism reach into MY schedule? Because if smoothing surgical admissions is inside this thing, say it to my face, with numbers." },
        ],
        choices: [
          {
            text: "Say it to his face, with numbers — and with the trade priced: \"It's inside the thing, and here are the numbers: your Monday-Tuesday elective load accounts for thirty-one percent of the boarding variance — smoothing four cases a week from Monday to Thursday cuts peak census enough to move the whole mechanism. What I'm NOT proposing is a mandate on your schedule, because mandates on your schedule die in medical staff committee and we both attended that funeral. I'm proposing the capacity-rules play: smoothing is voluntary, surgeons who shift gain protected add-on access on the smoothed days — escrowed, reversion rules, same architecture you co-sponsored. Your blocks stay yours. The system pays for the flexibility it's asking for. Check my variance math before you answer.\"",
            next: "r3kioko",
            score: { trades: 1, room: 1, diagnose: 1 },
            note: "The M4 discipline at full stakes: the real cost named to the cost-bearer's face, with data, priced in a currency he values (protected add-on access), inside an architecture he already trusts because he co-owns it (M1's escrow, M7's fingerprints, compounding). 'Check my math' hands him the verification role — Herrera armed is Herrera recruited.",
          },
          {
            text: "Reassure him out of scope: \"The mechanism targets discharge-side flow — your admission rhythm is upstream of it, and I've no appetite for reopening the block schedule. Surgery's schedule is out of scope.\"",
            next: "r3scope",
            score: {},
            note: "Thirty-one percent of the variance just went 'out of scope' to keep the room comfortable — the mechanism now targets a minority of its own problem, and Herrera, who asked for the truth with numbers, got a courtesy instead. He'll remember which one you thought he couldn't handle.",
          },
        ],
      },

      r2polite: {
        turns: [
          { who: "osei", text: "Before the design tour continues — I'll say what the pre-read says politely and my units say plainly: they hit the targets this system set, for two years, and the pre-read calls the program a failure. My charge nurses want to know which word applies to THEM. Until someone at this table answers that out loud, your new metrics will be received the way you'd expect: as the next thing they'll be blamed for hitting." },
          { who: "webb", text: "And that's the meeting I asked you to prevent, Director. \" — he opens his folder — \"Do it now, or I'll do it worse." },
        ],
        choices: [
          {
            text: "Do it now — the full autopsy, aimed where it belongs: \"Renée's units deserve the answer, so here it is, on the record: they didn't fail — they complied. The program paid for a timestamp; they delivered it exactly as designed; the design was ours, at this table, and it was priced wrong. That's the autopsy Marcus asked for and I tried to skip: $3.1 million, no villains, one mispriced rule, and every unit that hit the target should hear 'thank you for showing us precisely what our rule paid for' — because that data is why the new mechanism exists. The bridge holds them harmless, and the new measures were co-designed with four of their charge nurses, whose names are in the appendix. Now the design tour — with the history in the room instead of under it.\"",
            next: "r2webb",
            score: { diagnose: 1, room: 1 },
            note: "The recovery, at the cost of doing it under pressure instead of by choice: Osei forced the question her units needed asked (that's what Module 3 allies do — they correct you publicly because they can), and Webb's folder-tap was the last exit before he performed the autopsy adversarially. Late beats never; chosen beats late. The strong branch opens with this said freely.",
          },
          {
            text: "Handle it procedurally: \"An important framing question, Renée — and the transition plan addresses it: units are held harmless through the bridge period, no clawbacks, full communication toolkit. Can we take the detailed messaging offline and keep the room on the mechanism?\"",
            next: "r5thin",
            score: {},
            note: "'Messaging offline' — the CNO asked whether her nurses failed, and the answer was a communications plan. Webb's folder is opening. The autopsy is about to happen anyway, adversarially, with you as its subject instead of its author.",
          },
        ],
      },

      r3kioko: {
        turns: [
          { who: "herrera", text: "Escrowed add-on access on smoothed days... \" — he does the math on the pre-read's margin, visibly — \"the variance number I'll verify, but the architecture I already trust, because I stress-tested it for two years looking for the trap. Four cases a week is survivable if the add-on guarantee has teeth. Conditional yes: my scheduler co-writes the smoothing rules or no deal." },
          { who: "kioko", text: "Then it's my turn to be the problem, because the mechanism's biggest assumption isn't surgical — it's MY attendings. 'Order-to-departure lag' starts when we sign discharge orders, and here's the workflow truth from someone who rounds: we see the sickest first — as we should — so discharge orders land after noon, structurally. Your measure will make hospital medicine look slow for practicing correct medicine. I've been the one anchored on a wrong picture before, in a hallway, at three in the morning — so I'm flagging it in daylight this time: is the fix inside my rounding order? Because 'round on discharges first' is clinically wrong three days out of five." },
        ],
        choices: [
          {
            text: "Take the workflow truth and redesign the measure around it — in the room: \"That's the pre-mortem catching a real one, and the fix is not touching your rounding order — it's splitting the measure. Two clocks, not one: order-to-departure lag — which is transport, pharmacy, and lounge, the part I'm funding — stays on the system. Decision-to-order lag — your part — gets a different instrument entirely: the discharge-ready list from evening rounds, orders written by 8 a.m. for patients YOU flagged the night before, sickest-first rounding untouched. Sam, does evening flagging match how your attendings actually think, or am I designing their workflow from a retreat room? Correct me now — this is the last cheap moment to be wrong.\"",
            next: "r4delgado",
            score: { room: 1, design: 1, trades: 1 },
            note: "M5's discipline at design scale: the measure adjusted to the workflow instead of the workflow to the measure, the clinical priority explicitly protected, and the expert asked to correct the design in the room — 'the last cheap moment to be wrong' is the retreat-room version of inviting the call-out. Kioko flagging his own anchoring history in daylight is the Module 5 arc, completed; honor it by using his expertise, not just his vote.",
          },
          {
            text: "Hold the measure — it's already built: \"The lag measure is system-recorded and standardized; carving out physician exceptions this late reopens the whole metrics package. The audit will surface any rounding-order artifacts and we'll adjust in quarter two.\"",
            next: "r4defer",
            score: { design: 1 },
            note: "'Adjust in quarter two' — meaning: ship a measure the room's own expert just told you mismeasures correct medicine, and let hospital medicine spend a quarter looking slow for rounding right. The audit will indeed catch it — as a year-one finding about a defect flagged, in daylight, at this table, by name.",
          },
        ],
      },

      r3scope: {
        turns: [
          { who: "webb", text: "Out of scope. \" — he flips two pages in the pre-read, finds the variance table, and reads aloud — \"'Surgical admission clustering: 31% of boarding-hour variance.' Director, I signed a term sheet for a mechanism that attacks boarding, and you just scoped out a third of the problem at the first sign of a difficult surgeon. \" — to Herrera — \"No offense, Tomas.\" — back to you — \"So which is it: is the variance table wrong, or is the scope political? Because I fund arithmetic, not comfort." },
        ],
        choices: [
          {
            text: "Admit the flinch and put the trade on the table properly: \"The table's right and the scope was political — I flinched at reopening the block schedule in front of its chair, which was me doing to this room what the last program did to the data: optimizing the comfortable metric. So, Tomas, the real version, with numbers: your Monday-Tuesday load is 31% of the variance; four smoothed cases a week moves the mechanism; and my proposal is the escrow architecture you co-sponsored — voluntary smoothing, protected add-on access, your scheduler co-writing the rules. I should have led with respect for your ability to hear it.\"",
            next: "r3kioko",
            score: { trades: 1, diagnose: 1 },
            note: "Webb enforced the standard you sold him — that's what happens when you teach a CFO mechanism discipline: he applies it to you. 'The scope was political' is the costly admission that reopens the trade; note Herrera receives the numbers better AFTER watching you get caught protecting him — being handled offends him; being flinched-at merely disappoints.",
          },
          {
            text: "Defend the scoping: \"It's phased, not political — discharge-side first, admission smoothing in phase two once the mechanism proves out. Sequencing, Marcus, not comfort.\"",
            next: "r5thin",
            score: {},
            note: "'Phase two' is where scoped-out thirds go to be forgotten, and everyone at this table has seen enough phase twos to translate. Webb's pen has stopped moving, which from Webb is a verdict.",
          },
        ],
      },

      r4delgado: {
        turns: [
          { who: "kioko", text: "Evening flagging is how the good nocturnists already think — you'd be standardizing the best practice instead of inventing one. Corrected and co-signed: my chief residents will draft the flagging criteria. In daylight, for the record: this is the first metrics program that asked how rounding works before measuring it." },
          { who: "delgado", text: "Then I'm last, and I'll be the voice I'm here to be. Everything today prices beds, hours, and schedules — and I've heard one sentence about patients, so here's my question, and it's the same one I asked the ethics committee: when this mechanism speeds up discharges — and it will, that's the point — who catches the patients it discharges INTO nothing? The ones going home to no transport, no meds they can afford, no one to notice they're failing? A boarding-hours dashboard that empties the ED into unsupported living rooms hits every target in your appendix. My community IS the counter-metric, Director. Where am I in the design?" },
        ],
        choices: [
          {
            text: "Put her where she asked to be — inside the mechanism, holding an instrument: \"In the design at the same altitude as the CFO — here's where: returns-to-acute-care within seven days, stratified by discharge destination and payer, is a first-class counter-metric with kill authority — if speed starts buying readmissions from your census tracts, the equity trigger fires the same way it does on VigilSense, and you hold that trigger on the ethics committee's audit board. Second: a slice of the infrastructure fund — $80K — moves from lounge staffing to discharge-transport vouchers and a 48-hour callback program, because Renée's nurses have been requesting exactly that for two years and it's the cheapest counter-metric insurance on the table. The mechanism doesn't get to be fast at your community's expense; you get the instrument that proves it.\"",
            next: "r5close",
            score: { room: 1, design: 1, trades: 1 },
            note: "The M6-M7 synthesis under capstone pressure: the missing voice converted into a counter-metric holder with real kill authority (instruments, not assurances — the house style she named at the governance committee), and money moved to match — $80K of the fund reallocated in the room, because a counter-metric without funded mitigation is a dashboard watching harm. Osei's two-year staffing request surfacing as the mitigation is the coalition compounding.",
          },
          {
            text: "Reassure with the existing safeguards: \"The design already includes risk-adjusted LOS and readmission counter-metrics — the vulnerable-discharge concern is inside those numbers, and the quarterly audit will flag any post-discharge signal. The community is protected by the same instruments protecting everyone.\"",
            next: "r5generic",
            score: { design: 1 },
            note: "'Inside those numbers' — aggregate counter-metrics are exactly where her community's signal drowns; she told the governance committee the same thing about unstratified validation, and won. Watch her stack her papers: you've answered the person who invented the equity-trigger demand with the pre-stratification version of the answer.",
          },
        ],
      },

      r4defer: {
        turns: [
          { who: "osei", text: "Quarter two. \" — she looks at Kioko, then at you — \"Sam just did the thing every safety program in this system begs clinicians to do: flagged the defect BEFORE the harm, in daylight, against his own department's optics. And the mechanism's answer is 'we'll adjust after it makes his attendings look slow for a quarter.' Director — I've watched you pay first-movers all year. What's this one's payout? Because the whole building is watching what daylight flagging buys at THIS table." },
        ],
        choices: [
          {
            text: "Pay the first mover — redesign in the room: \"Renée's right, and the payout is the design changing now, not in quarter two: the measure splits — system lag on transport and pharmacy stays; a decision-to-order instrument gets built on evening flagging, drafted by Sam's chief residents, sickest-first rounding untouched. And the minute records it: this measure is different because Kioko flagged it in daylight — that's the behavior the whole mechanism runs on, and it gets paid at this table the way it gets paid at a rapid response.\"",
            next: "r4delgado",
            score: { room: 1, design: 1 },
            note: "The CNO invoked your own Module 3 currency — first-mover payment — and the only valid coin was immediate redesign. The M5 lesson at leadership altitude: a flag that costs the flagger and changes nothing teaches the room what daylight is worth; a flag that redesigns the mechanism in real time teaches the opposite. She knew that. Now the room does.",
          },
        ],
      },

      r5close: {
        turns: [
          { who: "delgado", text: "Kill authority and funded mitigation — the house style, kept. \" — the tabs come off her folder, which you've learned to read — \"My community signs." },
          { who: "vasquez", text: "Then I'll do the CMO's one job in a room that ran itself: the summary. A mechanism with no villains and six co-authors — Marcus's audit and autopsy, Tomas's escrowed smoothing, Sam's split measure, Renée's bridge and callbacks, Maya's stratified trigger. Every hard cost priced at the table, in the open. Every instrument held by the person most likely to distrust it. \" — she closes her folder — \"Director, I've run eleven of these retreats. This is the first mechanism that walks out of one already adopted, because the adoption happened DURING the design. Last item is yours: what does the room owe you?" },
        ],
        choices: [
          {
            text: "Close with the discipline, not the applause: \"Three commitments, on the record, and none of them are about this mechanism: every future stakes-bearing metric at Meridian ships with a pre-mortem on file, a counter-metric attached, and a sunset clause — the discipline goes in the water supply, or this was just a good meeting. Second: the quarterly proxy-purpose audit reports here, to this table, whatever it finds — including about this design; I expect it to catch us being wrong, and the day it does is the day it proves its funding. Third: the boarding numbers come back to this room in two quarters — with the autopsy standard applied to my own program if it's failing. That's what the room owes me: the same treatment Discharge Excellence just got, applied to mine, on schedule, with the same courtesy — which is to say, none.\"",
            next: "r6end",
            score: { design: 1, diagnose: 1 },
            note: "The capstone close: asking the room to institutionalize the discipline rather than celebrate the design — and pre-committing your own mechanism to the autopsy standard, publicly, in advance. That last move is the course's final costly signal: the designer volunteering to be the next specimen. Nothing establishes a no-blame mechanics culture faster than its author pre-enrolling.",
          },
          {
            text: "Accept the win: \"The room owes me nothing — this was the system designing for itself, which was the whole point. Thank you all. Let's ship it.\"",
            next: "r6soft",
            score: { design: 1 },
            note: "Gracious, and the moment held one more asset: Vasquez's open question was the once-a-year chance to convert a room's goodwill into standing discipline — pre-mortems, counter-metrics, and sunsets as system policy. The mechanism ships either way. The water supply doesn't.",
          },
        ],
      },

      r5generic: {
        turns: [
          { who: "delgado", text: "Aggregate counter-metrics. \" — she re-stacks her papers, unhurried, and the room goes quiet in the particular way it does when someone is about to spend standing — \"Director, eight months ago I asked an innovation office how I'd KNOW if their algorithm was missing my patients, and the answer that won my vote was stratified instruments with my hand on a trigger. Today the answer is 'you're inside the aggregate.' My community drowns in aggregates — that's what being a minority of the census MEANS, statistically. So I'll make it easy: stratify the returns metric by destination and payer, give the equity board the trigger, fund the mitigation my colleague's nurses have requested for two years — or minute my abstention and the reason. The house style, Director. You taught it to me." },
        ],
        choices: [
          {
            text: "Concede completely — she's holding your own standard: \"Minute this instead: Maya's right, the aggregate answer was beneath the design, and the correction is her version — stratified returns with equity-trigger kill authority on the audit board, $80K to transport vouchers and 48-hour callbacks. She quoted my own house style at me because I abandoned it under time pressure, which is precisely how mechanisms fail — one defensible shortcut at a time. The design is better for the catch. On the record.\"",
            next: "r5close",
            score: { room: 1, trades: 1 },
            note: "Caught by your own precedent, wielded by the person you taught it to — the coalition's instruments cutting their author, which is what real instruments do. 'One defensible shortcut at a time' names the mechanism of your own near-failure inside the meeting about mechanism failure; the room will remember the recursion longer than the concession.",
          },
        ],
      },

      r5thin: {
        turns: [
          { who: "narrator", text: "The session completes its agenda — competently, coldly. Webb performs the autopsy himself when the metrics discussion gives him an opening, and his version has an edge yours wouldn't have: 'someone sold me a rule, and someone let me keep believing it.' Osei's bridge questions get procedural answers; Herrera votes for 'the parts in scope,' which he notes is most of a mechanism; Delgado abstains, reason minuted. The design passes, 4-1-1 — a term sheet with a coalition-shaped hole in it. Vasquez's summary is one sentence: 'Approved, with reservations the implementation will inherit.' In the corridor, Webb hands you his folder — the autopsy he'd prepared, unused slides annotated in his handwriting: 'You had all of this. The room needed to hear it from you. Next mechanism, start with the corpse — it's the only credential this building believes.'" },
        ],
        end: true,
        outcome: "mixed",
      },

      r6end: {
        turns: [
          { who: "narrator", text: "Two quarters later, the numbers return to the room as promised: boarding hours down 19%, the smoothing pilot at four-point-one cases a week, callbacks catching two readmission spirals a month by Osei's count — and one audit finding, delivered to your face at the table: the evening-flagging measure is drifting (units pre-flag optimistically on Fridays), caught in month four, corrected by Kioko's residents in month five. The room applies the autopsy standard as instructed: no villains, one repriced rule, thirty minutes. Vasquez closes the review with the line that ends up in the annual report, and — though you won't know it for a year — in the system's leadership curriculum, as the epigraph of a course built from your playbook: 'We used to fix problems. The record shows we've started fixing the rules that make them — which is a different job, done by different meetings, and this table has apparently learned to hold them.' Your personal playbook, begun eight rounds ago in a capacity committee, is now — in the only sense that matters — the building's." },
        ],
        end: true,
        outcome: "strong",
      },
      r6soft: {
        turns: [
          { who: "narrator", text: "The mechanism ships and works — boarding down 17% at two quarters, the coalition's instruments all holding. The unclaimed asset surfaces gradually: eleven months later, a patient-experience incentive from another office ships with no pre-mortem, no counter-metric, and a launch deck Webb recognizes at forty paces; it takes a year and a familiar autopsy to unwind. The retreat's goodwill, which could have chartered the discipline as system policy in one open moment, turns out to have had a shelf life of exactly one meeting. Your mechanism remains excellent. The system remains capable of shipping its opposite — which, the course would note with its last breath, was always the difference between winning a game and redesigning one." },
        ],
        end: true,
        outcome: "provisional",
      },
    },
    outcomes: {
      strong: {
        label: "The whole course, spent in one room",
        text: "Autopsy without villains (M1, M3), every cost named to its bearer with data and a priced trade (M4), the measure redesigned around clinical truth in real time with first-movers paid (M5), the missing voice installed as an instrument-holder with funded mitigation (M6, M7), and the close that mattered most: the discipline institutionalized and your own mechanism pre-enrolled for the next autopsy (M8). Vasquez's summary is the program's graduation line — fixing the rules that make the problems is a different job, and you just demonstrated the meetings that do it.",
      },
      provisional: {
        label: "The mechanism shipped; the discipline didn't",
        text: "The design was real, the coalition held, and the numbers came in — a genuine capstone success by any measure except the course's last one: the open moment where a room's earned goodwill could have become standing system policy (pre-mortems, counter-metrics, sunsets, the autopsy standard) closed with a thank-you instead. Mechanisms depreciate; disciplines compound. The replay is one sentence long.",
      },
      mixed: {
        label: "Approved, with reservations the implementation inherited",
        text: "The votes were won and the coalition wasn't: an autopsy outsourced to its funder, costs scoped out to spare their bearers, a first-mover unpaid, or the missing voice left in the aggregate. The capstone's design decisions were mostly right; the capstone's lesson is that at system scale, HOW the room reaches a mechanism is part of the mechanism. Webb's corridor line is the whole replay: start with the corpse.",
      },
    },
  },

  /* ---------------------- Step 6: Reflective Debrief ---------------------- */
  debrief: {
    intro:
      "The final debrief — and by design, a summative one. Advocacy-inquiry across all eight rounds this time: what the record shows, and what you make of it. Your answers here build the document the whole program was aiming at: your personal playbook. Give this one the time it asks for.",
    prompts: [
      {
        id: "d1",
        frame: "The eight rounds, one record",
        question:
          "Look back across your outcomes — the capacity committee, the fifty-five-second handoff, the repair on 4W, the Pierce negotiation, the rapid response, the family room, the Fontaine recruitment, and this retreat. Where were you strongest, consistently? And name the recurring moment — the specific kind of beat, under pressure — where your performance most often bent: the unnamed history, the hedged assertion, the armor, the unpaid first mover, the scope flinch. That beat is your default tendency. Write it down in one honest sentence.",
      },
      {
        id: "d2",
        frame: "Diagnosis discipline",
        question:
          "The course's single most repeated instinct: when something fails, ask what the rules paid for before asking who failed. Test yourself — three problems in your real organization that you've historically explained with character ('lazy,' 'difficult,' 'siloed,' 'resistant'). Re-diagnose each in one line: what is the current mechanism paying people to do, and is the behavior you resent actually its rational product?",
      },
      {
        id: "d3",
        frame: "The mechanism map",
        question:
          "Name three mechanisms in your real organization you now see differently than you did eight rounds ago — a metric, an incentive, a meeting structure, an allocation rule, a reporting channel. For each: what does it actually pay for (not what it claims), who is its 'unit hitting the target,' and what would the one-sentence redesign be? Mark the one you could realistically influence this quarter.",
      },
    ],
    commitment: {
      id: "commit",
      label: "The playbook commitment",
      question:
        "The final commitment, in three parts — this is your playbook's last page. (1) The default tendency from your first reflection: name the specific counter-practice you will run when you feel that beat arriving, and the person you'll ask to call it when they see it. (2) The mechanism you marked as influenceable: the first concrete step, with a date, and the pivotal skeptic you'll approach first. (3) The discipline: which single practice from this course — the pre-mortem, the check-back, the costly apology, the interest question, the autopsy standard — you will install as a standing ritual in something you run, starting this month. Sign it with the date. This document is what the eight rounds were for.",
    },
  },
};
