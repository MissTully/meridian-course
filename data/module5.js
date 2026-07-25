/* Module 5 — The Rapid Response: Coordination Games and Team Communication
   Under Pressure. Fully authored pilot content. */

export const module5Content = {
  /* ------------------------- Step 1: Topic Video ------------------------- */
  video: {
    vpTitle: "Everyone Assumed Someone",
    vignette: [
      "22:47, Meridian Academic Medical Center, floor 6 North. Mr. Ellison, sixty-one, post-operative day two, is breathing at thirty-two and sinking. The rapid response is called. Within four minutes there are seven clinicians in the room — nursing, respiratory, the resident, pharmacy on the way. Every one of them is skilled. Every one of them wants exactly the same outcome.",
      "Nineteen minutes later, when Mr. Ellison is finally moving to the ICU, someone asks the question that will echo through the case review: 'When did the intensivist get called?' Silence. The resident assumed the charge nurse had called. The charge nurse assumed the resident had. Both were competent. Both were right that someone should call. Both knew the number.",
      "Nothing about this failure involved conflicting interests. No one hoarded, no one defected, no one protected turf. Seven people who wanted the same thing failed to align on who does what — which makes this a different game entirely from Module 1, with a different fix.",
    ],
    teaching: [
      {
        h: "Coordination games are not cooperation games",
        p: "In a Prisoner's Dilemma, players' interests conflict — the fix is changing payoffs. In a coordination game, everyone already wants to align: the payoff for 'we both converge' is highest for everyone. The failure mode is not defection but ambiguity — multiple reasonable ways to align, and no shared way to know which one the team is using. Diagnose the wrong game and you'll apply the wrong fix: incentives can't repair what a role assignment would have prevented.",
      },
      {
        h: "Focal points: how teams converge without negotiating",
        p: "Schelling showed that people coordinate by converging on whatever stands out — the focal point. Protocols, checklists, and standard concentrations are manufactured focal points: they make one of the many reasonable options the obvious one, so a team of strangers at 3 a.m. lands on the same choice without discussion. That is what a protocol is for — not to constrain judgment, but to purchase instant convergence when there's no time to negotiate.",
      },
      {
        h: "Common knowledge: 'I know' versus 'everyone knows that everyone knows'",
        p: "The intensivist call failed at the common-knowledge layer. Both clinicians knew a call was needed; what neither had was knowledge of what the other knew. Closed-loop communication — call-out ('I'm calling the intensivist now'), check-back ('You're calling the intensivist — confirmed') — looks redundant precisely because its job is not transmitting information but making information common: after the loop closes, everyone knows, everyone knows that everyone knows, and the assumption gap where Mr. Ellison's nineteen minutes disappeared cannot exist.",
      },
      {
        h: "The communication anchor: the TeamSTEPPS coordination toolkit",
        p: "This module is the most TeamSTEPPS-dense in the program because TeamSTEPPS is, at its heart, coordination engineering: briefs build a shared mental model before the work; call-outs broadcast critical data to the room; check-backs close every loop; cross-monitoring catches drift; debriefs update the model for next time. And graded assertiveness — 'I'm concerned' → CUS → the two-challenge rule — is the protocol for the hardest coordination problem of all: re-aligning a team when its leader is anchored on the wrong picture.",
      },
    ],
  },

  /* ---------------------- Step 2: AI Concept Coach ---------------------- */
  coach: {
    coachName: "The Concept Coach",
    intro:
      "The single most useful diagnostic skill in this module: telling a cooperation failure from a coordination failure at a glance — because the fixes have nothing in common. I'll give you paired situations; you make the call.",
    exchanges: [
      {
        coach:
          "Two units, two failures. Unit A: night and day shift each chart minimally, because thorough documentation mostly benefits the *other* shift and time is zero-sum. Unit B: two nurses double-dose a patient — each gave the 06:00 heparin because the handoff note was ambiguous about whether it was given. Which is which?",
        options: [
          {
            text: "Unit A is a cooperation failure — each shift gains by under-documenting whatever the other does. Unit B is a coordination failure — both nurses wanted the same thing and converged on incompatible beliefs.",
            quality: "good",
            feedback:
              "Exactly. A has misaligned incentives: minimal charting is a dominant strategy, so you must change payoffs (Module 1's move). B has perfectly aligned incentives and an ambiguity — the fix is a convergence device: an unambiguous MAR entry, a closed-loop handoff. No incentive on earth would have fixed B; no checklist alone will fix A.",
          },
          {
            text: "Both are coordination failures — in both cases the shifts/nurses failed to align their behavior.",
            quality: "partial",
            feedback:
              "The outcomes look alike — misaligned behavior — but run the test: would each party *still prefer* their move if they knew the other's? Unit A's answer is yes (under-charting wins regardless: that's misaligned incentives). Unit B's is emphatically no — each nurse would instantly change given the other's information. Same wreckage, different physics.",
          },
          {
            text: "Both are cooperation failures — ultimately people just need to be more conscientious in both cases.",
            quality: "miss",
            feedback:
              "Conscientiousness is exactly the wrong lens for Unit B: both nurses were being conscientious — that's why the patient got double-dosed. Each acted correctly on the picture they had. When diligent people fail together, look for the missing common knowledge, not the missing virtue.",
          },
        ],
      },
      {
        coach:
          "Your hospital standardizes to a single insulin-infusion concentration, and dosing errors drop sharply. A skeptical colleague says: 'Proof our nurses couldn't do math.' Using this module's concepts — what did the standardization actually do?",
        options: [
          {
            text: "It manufactured a focal point: with one concentration, every clinician's default assumption about any infusion is correct without verification. The redesign removed the coordination problem instead of demanding flawless coordination.",
            quality: "good",
            feedback:
              "Right — and notice the reframe available to your colleague: the old system demanded a successful coordination act at every sunrise handoff, then blamed individuals when a fraction failed. Good systems don't ask people to win coordination games constantly; they delete the games. (Keep this instinct — it returns as mechanism design in Module 8.)",
          },
          {
            text: "It reduced cognitive load, so nurses had more attention available for calculations.",
            quality: "partial",
            feedback:
              "True but not the mechanism. The deeper effect isn't that each nurse calculates better — it's *interpersonal*: nurse A now knows what nurse B assumes, and knows B knows A assumes it. The standard created common knowledge between strangers. Load reduction is the bonus; convergence is the product.",
          },
          {
            text: "It imposed discipline — removing options forces compliance, and compliance is what dropped the error rate.",
            quality: "miss",
            feedback:
              "'Discipline' misreads what failed. Nobody was flouting rules under the old system — they were reasonably resolving an ambiguity in different directions. A focal point doesn't coerce; it makes one reasonable option *obvious to everyone, and obviously obvious*. That's convergence, not compliance.",
          },
        ],
      },
      {
        coach:
          "Last one — the hierarchy problem. A senior surgeon is closing; the scrub tech is nearly certain the sponge count is off but says, 'Um, are we... good on counts?' The surgeon, hearing no alarm, says 'we're good' and keeps closing. In coordination terms, why did that utterance fail — and what would a repaired version sound like?",
        options: [
          {
            text: "The hedge made the signal deniable — it never forced a shared picture. A repaired version is a call-out plus the CUS structure: 'Stop — I'm uncomfortable. The count is off by one. I need a recount before we close.' Unmissable, unambiguous, and requiring a check-back.",
            quality: "good",
            feedback:
              "That's the whole lesson. Graded assertiveness isn't about courage or volume — it's a protocol for forcing common knowledge across a power gradient. 'Are we good?' lets the surgeon's mental model survive contact with the concern; CUS language makes the concern impossible to un-know. You'll be using exactly this on Dr. Kioko shortly.",
          },
          {
            text: "The tech spoke up, which is what matters — the surgeon failed by not exploring the question.",
            quality: "partial",
            feedback:
              "The surgeon owns a share — leaders should treat questions as data. But 'spoke up' is not a binary. The message as sent was engineered (by fear, politely) to be dismissible, and dismissible messages get dismissed at predictable rates. The protocol exists so the speaker doesn't have to choose between silence and insubordination — structured language is the third option.",
          },
          {
            text: "It failed because the tech lacked the authority to challenge a surgeon — the fix is escalating to the charge nurse afterward.",
            quality: "miss",
            feedback:
              "Escalating after closing is a root-cause interview waiting to happen. The premise is wrong: in a coordination frame, the tech doesn't need *authority* — the sponge count is information the whole team wants. Two-challenge and CUS exist precisely so that safety-critical information outranks hierarchy in the moment, not after it.",
          },
        ],
      },
    ],
    close:
      "You can now distinguish the two failure types, explain what protocols and standard concentrations actually purchase, and structure an assertion so it forces common knowledge across hierarchy. Time to use all three at 03:00, at a bedside, on a very confident senior physician.",
  },

  /* ------------------- Step 3: Branching Case with MCQ ------------------- */
  mcqCase: {
    title: "The Silent Assumption",
    narrative: [
      "Mrs. Okonkwo, fifty-four, is post-operative day one from an open hysterectomy on 6 North. Overnight her heart rate drifts from 88 to 112; blood pressure holds. The night nurse mentions at the 07:00 huddle that she 'didn't love how she looked at 05:00' but notes the surgeon saw her at 06:30 and 'seemed unworried.' The day nurse, hearing the surgeon has seen her, deprioritizes the room. The surgeon, having heard nothing alarming from nursing overnight, read the tachycardia as post-op pain.",
      "At 10:40 the patient care tech records a temperature of 38.9°C but, seeing the day nurse busy in another room, leaves it charted for her to find. At 11:55 Mrs. Okonkwo is confused and hypotensive. The rapid response that follows runs on luck: two people page different services, no one is assigned to pull the sepsis kit until someone asks about it at minute six, and the first dose of antibiotics is hung ninety minutes after the fever was charted.",
    ],
    questions: [
      {
        id: "m5q1",
        stem: "At 07:00, the night nurse worried, the surgeon 'seemed unworried,' and the day nurse deprioritized the room. What is the best game-theoretic description of this moment?",
        tags: ["Common knowledge", "Coordination failure"],
        options: [
          {
            key: "A",
            text: "A cooperation failure: the night nurse had an incentive to minimize concerns at handoff to get out on time.",
            feedback:
              "There's no payoff conflict in evidence — she *did* voice the concern, just haziliy. Everyone here wanted the patient watched. When everyone wants the same thing and it still doesn't happen, you're looking at the other kind of game.",
          },
          {
            key: "B",
            text: "A coordination failure built on missing common knowledge: each clinician's private read never became shared, so each reasonably inferred someone else held the watch.",
            correct: true,
            feedback:
              "Yes — three people, three private pictures ('I'm worried,' 'pain, probably,' 'the surgeon's on it'), zero shared picture. Each inference was locally reasonable; the *system* of inferences left the room unwatched. This is the intensivist-call failure in slow motion.",
          },
          {
            key: "C",
            text: "An information asymmetry problem: the surgeon held private clinical information the nurses couldn't access.",
            feedback:
              "Close cousin, wrong diagnosis (that's Module 2's game). The surgeon held no private data — everyone saw the same vitals. What was missing wasn't hidden information but *mutual* knowledge of each other's interpretations. Asymmetry needs screening and signaling; this needs a structured handoff that forces interpretations into the open.",
          },
          {
            key: "D",
            text: "Diffusion of responsibility: a psychological phenomenon, not usefully described as a game.",
            feedback:
              "Diffusion of responsibility is real — and it *is* the psychology of an unsolved coordination game: when 'someone will act' is everyone's rational belief, no one acts. The game framing earns its keep by pointing at the fix: explicit assignment ('you watch, confirm') rather than exhortation to feel more responsible.",
          },
        ],
      },
      {
        id: "m5q2",
        stem: "Which TeamSTEPPS tool, correctly used at the 07:00 handoff, most directly closes the specific gap that occurred?",
        tags: ["Tool selection", "Check-back", "Shared mental model"],
        options: [
          {
            key: "A",
            text: "A structured handoff with check-back: 'HR trending up since 04:00, I'm worried about her — I need eyes on her q1h until noon.' — 'Confirmed: q1h watch on Okonkwo until noon, I own it.'",
            correct: true,
            feedback:
              "Right. Note what the loop accomplishes that the vague version didn't: the concern is stated as a call for action, the action has an owner, and the check-back makes ownership common knowledge. 'Didn't love how she looked' transmitted a mood; this transmits a watch schedule.",
          },
          {
            key: "B",
            text: "SBAR to the surgeon at 06:30, so the surgeon's assessment incorporated nursing's overnight concern.",
            feedback:
              "Genuinely valuable — and it repairs a different link. Even a perfect 06:30 SBAR leaves the day-shift gap: the day nurse still 'knows' the surgeon is on it and deprioritizes. The question's failure is nurse-to-nurse convergence at 07:00, and the tool for aligning an oncoming owner is the closed-loop handoff.",
          },
          {
            key: "C",
            text: "CUS — the night nurse should have said 'I am concerned, I am uncomfortable, this is a safety issue' at the huddle.",
            feedback:
              "CUS is graded assertiveness — the tool for being *dismissed*, for pushing a concern through resistance. Nobody resisted the night nurse; her concern simply never acquired an owner. Escalation language without an assignment would still have left the room unwatched, just more loudly.",
          },
          {
            key: "D",
            text: "Cross-monitoring: the charge nurse should have been watching the watchers and caught the deprioritization.",
            feedback:
              "Cross-monitoring is a safety net, and safety nets matter — but designing the *primary* plan around someone catching the failure concedes the handoff itself. Fix the loop first; keep the net for when loops fail anyway.",
          },
        ],
      },
      {
        id: "m5q3",
        stem: "The tech charted 38.9°C at 10:40 and told no one. The unit's fix-writing committee proposes four options. Which most reflects this module's lesson?",
        tags: ["Call-out", "Focal points", "System design"],
        options: [
          {
            key: "A",
            text: "Counsel the tech on the importance of verbal communication and add a reminder to the annual competency module.",
            feedback:
              "The tech made a locally reasonable call ('she's busy; it's charted'). Counseling one person leaves the next tech the same ambiguous judgment call, and annual modules don't attend codes. When a reasonable person fails, redesign the situation, not the person.",
          },
          {
            key: "B",
            text: "A standing rule that creates a focal point: any temp ≥38.5 on a post-op patient is a mandatory verbal call-out to the nurse, with check-back, regardless of how busy anyone looks.",
            correct: true,
            feedback:
              "Yes — the rule converts a judgment call ('is this worth interrupting for?') into a focal point with a closed loop. The tech no longer weighs social cost against clinical uncertainty; the system pre-decided. That's coordination engineering: delete the game rather than hoping everyone wins it.",
          },
          {
            key: "C",
            text: "Configure the EHR to auto-page the covering physician on any charted fever.",
            feedback:
              "Automation can help, but an auto-page on *every* charted fever is an alarm-fatigue generator — and it bypasses the bedside nurse, fragmenting the shared mental model further. Alerts that arrive without a human loop get acknowledged and forgotten at documented rates. Close the human loop; automate selectively.",
          },
          {
            key: "D",
            text: "Add fever-notification expectations to the tech job description so accountability is unambiguous next time.",
            feedback:
              "Job-description accountability is the paper version of exhortation — it changes what we can say *after* the next failure, not the probability of it. The tech already knew fevers matter; what was missing was an unambiguous trigger and a receiving loop.",
          },
        ],
      },
      {
        id: "m5q4",
        stem: "In the rapid response itself, two people paged different services and nobody owned the sepsis kit for six minutes. The team's incentives were perfectly aligned. What does this module say the leader's first thirty seconds should contain?",
        tags: ["Role assignment", "Brief", "Closed-loop communication"],
        options: [
          {
            key: "A",
            text: "Explicit role assignment with names and check-backs: 'Dana — you page the intensivist, confirm. Ray — airway. Priya — pull the sepsis kit, tell me when it's in the room.'",
            correct: true,
            feedback:
              "Right — assignment-by-name plus check-back is what converts seven aligned individuals into one coordinated team. 'Somebody page the intensivist' is how two people page different services while the kit sits in the supply room; names close the ambiguity, loops make the closure common knowledge.",
          },
          {
            key: "B",
            text: "A rapid clinical assessment first — leadership presence flows from clinical command of the case, and roles can follow once the picture is clear.",
            feedback:
              "The picture and the roles aren't sequential — the roles are how the picture gets built (someone on vitals, someone on history, someone on access). A leader heads-down in assessment while the room self-organizes is how minute six arrives with no kit. Assign first; the assignments feed you the assessment.",
          },
          {
            key: "C",
            text: "A call for the most experienced available clinician to take over, since coordination improves with seniority.",
            feedback:
              "Seniority doesn't solve coordination — the Ellison case had plenty of experience in the room and still lost the intensivist call. Structure, not seniority, is what closes assumption gaps. (And the handover itself, done without a loop, is one more coordination failure waiting to happen.)",
          },
          {
            key: "D",
            text: "Establishing quiet: ordering all non-essential personnel out to reduce noise and confusion before organizing the response.",
            feedback:
              "Crowd control has its moments, but it's subtraction, not structure — a quieter room where nobody owns the sepsis kit is just an easier place to hear the silence. The first tool is assignment; decluttering is situational.",
          },
        ],
      },
      {
        id: "m5q5",
        stem: "Reviewing the case, the quality committee proposes: 'Counsel individuals involved in the delays.' You object, on this module's grounds. What is your strongest argument?",
        tags: ["Coordination vs cooperation", "Debrief", "System design"],
        options: [
          {
            key: "A",
            text: "Every individual acted reasonably on the picture they had; the failure lived between people, not inside any of them. Counseling individuals fixes the game nobody was playing — the fix is loops, triggers, and assignments, verified in a unit debrief.",
            correct: true,
            feedback:
              "That's the argument. In cooperation failures, individual incentives are legitimately part of the fix. In coordination failures, individual correction is worse than useless — it teaches people to hedge and self-protect, degrading the very information flow convergence depends on. Fix the between, not the within.",
          },
          {
            key: "B",
            text: "Counseling is unfair because the outcome wasn't that bad — the patient survived and the delay was under two hours.",
            feedback:
              "Outcome-based leniency is the mirror image of outcome-based blame — both ignore process. The delay was a real system failure that will reproduce; a near-miss earns the same redesign a catastrophe would. Object to the target of the fix, not the severity rating.",
          },
          {
            key: "C",
            text: "Individual counseling should wait until the root-cause analysis assigns each person's exact share of responsibility.",
            feedback:
              "This accepts the committee's frame — that responsibility-shares are the output — and just asks for better arithmetic. The module's point is that in a coordination failure the shares genuinely don't sum to the failure: the gap itself, not any person's slice of it, is the defect.",
          },
          {
            key: "D",
            text: "The nurses' workload made the lapses inevitable, so staffing — not communication — is the real root cause.",
            feedback:
              "Workload is real and worth raising — but 'inevitable' proves too much: the same staffing with closed loops and a fever trigger catches this patient hours earlier. Staffing arguments land better alongside coordination fixes than instead of them.",
          },
        ],
      },
    ],
  },

  /* -------------------- Step 4: One-on-One Simulation -------------------- */
  oneOnOne: {
    simId: "oneOnOne",
    title: "03:10 with Dr. Kioko",
    learnerRole:
      "You are the night charge nurse on 6 North. Mr. Delacroix, sixty-eight, post-op day three from hip replacement: heart rate 118, respiratory rate 26, O₂ sat 91% on 2L — new from 96% at midnight — and he told you 'it feels like something is sitting on my chest.' Dr. Kioko, finishing hour nineteen, has diagnosed post-operative anxiety and ordered lorazepam. You believe this could be a pulmonary embolism. Your tools, in order: state the concern → CUS → two-challenge rule.",
    personas: ["kioko"],
    scoring: {
      dims: [
        { id: "assertion", label: "Graded assertiveness", max: 4, anchor: "Escalated concern → CUS → two-challenge without skipping or exploding" },
        { id: "data", label: "Data-anchored advocacy", max: 3, anchor: "Led with specific, trended observations rather than unease" },
        { id: "loop", label: "Closed loops", max: 2, anchor: "Forced explicit acknowledgment; confirmed the plan back" },
      ],
    },
    start: "k1",
    nodes: {
      k1: {
        turns: [
          { who: "narrator", text: "The workstation on 6 North. Dr. Kioko is typing the lorazepam order, jaw set with the particular certainty of hour nineteen." },
          { who: "kioko", text: "Before you say it — I examined him. Hip's fine, incision's fine, he's three days post-op and scared of his own telemetry. Anxiety. The lorazepam will have him asleep in twenty minutes, which is what both of us should be." },
        ],
        choices: [
          {
            text: "State the concern with the trend: \"I'm concerned this isn't anxiety. New numbers since midnight: sats down 96 to 91 on 2L, heart rate up to 118, resps 26, and he describes chest pressure. That's a new oxygen problem, and anxiety doesn't drop sats.\"",
            next: "k2data",
            score: { assertion: 1, data: 2 },
            note: "First rung of the ladder, properly built: 'I'm concerned' plus trended data. You've made the concern about the numbers, not about him.",
          },
          {
            text: "Ask deferentially: \"Okay... though would it maybe be worth getting a d-dimer or something before the lorazepam? Just to be safe?\"",
            next: "k2hedge",
            score: {},
            note: "Hear it from his side: '...maybe... or something... just to be safe' — a message engineered to be dismissible. Hedged concerns get dismissed at predictable rates, and you have exactly one patient's worth of time to spend on predictable.",
          },
          {
            text: "Go straight to the top of the ladder: \"This is a safety issue. I'm not giving lorazepam, and I want CT-PE protocol and a rapid response if you won't order it.\"",
            next: "k2blast",
            score: { assertion: 1 },
            note: "Everything you said may prove right — but you've fired the escalation ladder's last rung first. Graded assertiveness is graded because each rung gives the leader a face-saving way to update; skipping to ultimatum converts a diagnostic disagreement into a dominance contest.",
          },
        ],
      },

      k2data: {
        turns: [
          { who: "kioko", text: "Sats of 91 on a post-op patient who's splinting and anxious — I could show you twenty of those this month. Tachycardia, ditto. He calms down, he breathes, the numbers fix themselves. You're reading a PE into a panic attack, and I've got fourteen other patients tonight." },
        ],
        choices: [
          {
            text: "Second rung — CUS, by the letters: \"Dr. Kioko, I need to say this formally. I am Concerned. I am Uncomfortable giving a sedative to a hypoxic patient. I believe this is a Safety issue: he has three PE risk factors — hip surgery, three days' immobility, and he refused his heparin yesterday, which I don't think you were told.\"",
            next: "k3cus",
            score: { assertion: 2, data: 1 },
            note: "Textbook CUS — and you attached a fact he didn't have (the missed heparin). Structured language plus new information is the combination that lets a tired brain change course without losing face.",
          },
          {
            text: "Yield with a hedge: \"Okay. I'll give the lorazepam but keep a close eye on him and call you if he worsens.\"",
            next: "k3yield",
            score: {},
            note: "The classic off-ramp — and it means sedating a possibly hypoxic patient and re-calling the same tired doctor after the window narrows. 'I'll watch him' feels like vigilance; structurally, it's the concern dying politely.",
          },
          {
            text: "Repeat the same data, louder: \"Doctor, sats are DOWN and heart rate is UP. I don't know how much clearer the picture needs to be.\"",
            next: "k3louder",
            score: { data: 1 },
            note: "Volume is not escalation. He's already discounted this data once; repeating it with heat re-asks the question he's already answered. The ladder's next rung is new structure (CUS) or new information — you're holding both.",
          },
        ],
      },

      k2hedge: {
        turns: [
          { who: "kioko", text: "A d-dimer three days post-op will be positive because he had surgery — it'll tell us nothing and buy him a CT he doesn't need. Kind of you to think of it. Give the lorazepam; page me if something real happens." },
          { who: "narrator", text: "He's already turning back to the screen. The soft version of your concern has been heard, categorized, and filed." },
        ],
        choices: [
          {
            text: "Rebuild it properly — concern plus the trend: \"Dr. Kioko, stop — let me say this the right way. I'm concerned. Sats have fallen 96 to 91 on 2L since midnight, heart rate 118, resps 26, new chest pressure. Something real is already happening; I'm asking you to reassess before any sedative.\"",
            next: "k2data",
            score: { assertion: 1, data: 1 },
            note: "Good recovery — you caught your own hedge and replaced it with structure. That correction, mid-conversation, is a skill most people never practice.",
          },
          {
            text: "Accept it: \"Okay. Lorazepam it is; I'll page you if he worsens.\"",
            next: "k3yield",
            score: {},
            note: "The concern lived and died as 'kind of you to think of it.' Notice no one behaved badly here — which is exactly why unstructured concern is not a safety system.",
          },
        ],
      },

      k2blast: {
        turns: [
          { who: "kioko", text: "You're refusing an order and threatening a rapid response — over a diagnosis you've decided on without a differential. I've been doing this nineteen years. Get the lorazepam, or hand me your reasoning like a clinician instead of an ultimatum." },
        ],
        choices: [
          {
            text: "De-escalate to structure without dropping the concern: \"Fair — here's the reasoning. I'm concerned, formally: sats 96 to 91 on 2L since midnight, HR 118, resps 26, chest pressure, and he refused his heparin yesterday. Hip surgery, immobile, unprophylaxed. I'm uncomfortable sedating that picture. That's a safety concern, not an ultimatum.\"",
            next: "k3cus",
            score: { assertion: 1, data: 2 },
            note: "You climbed *down* to the right rung — rare and valuable. He asked for reasoning; you gave him CUS wearing reasoning's clothes, plus the heparin fact. The door reopens.",
          },
          {
            text: "Hold the ultimatum: \"My reasoning is the vitals, Doctor. Rapid response — your call whether you're part of it.\"",
            next: "k3standoff",
            score: { assertion: 1, loop: 0 },
            note: "You may win this round and be right about the PE — and every future 03:00 conversation between you two now starts from tonight. The two-challenge rule exists so being right doesn't have to cost the relationship that safety runs on.",
          },
        ],
      },

      k3cus: {
        turns: [
          { who: "narrator", text: "The typing stops. 'Refused his heparin' hangs in the air. Somewhere behind nineteen hours of fatigue, a very old memory of a missed PE shifts its weight." },
          { who: "kioko", text: "...Nobody told me about the heparin. That changes the pre-test probability, I'll grant you. But a CT at three a.m. on a maybe — walk me through what you actually want, because I'm not ordering the full workup on 'uncomfortable' alone." },
        ],
        choices: [
          {
            text: "Make the ask specific, then close the loop: \"Three things: hold the lorazepam, reassess him at the bedside now, and if his sats are still falling, CT-PE protocol. Can you confirm that plan back to me so night shift and I are working the same picture?\"",
            next: "k4win",
            score: { assertion: 1, loop: 2 },
            note: "A concrete, proportionate ask — reassess first, CT conditional on the trend — and then the check-back request. Asking a physician to confirm the plan back feels bold exactly once; after that it's just how you work.",
          },
          {
            text: "Settle for the hold: \"Hold the lorazepam and reassess when you can. That's all I'm asking.\"",
            next: "k4partial",
            score: { assertion: 1 },
            note: "The sedative threat is gone — real progress. But 'when you can' at hour nineteen means 'after the next three pages,' and no loop was closed: you're assuming his 'fine' means minutes, he may mean an hour. That gap is this module's entire subject.",
          },
        ],
      },

      k3yield: {
        turns: [
          { who: "narrator", text: "You draw up the lorazepam. At 04:20, Mr. Delacroix's sats hit 84% and he becomes confused; the rapid response you didn't call at 03:10 gets called at 04:25, with worse cards. The CT shows bilateral segmental pulmonary emboli. He survives — the ICU note will dryly record 'diagnosis delayed by sedation masking symptom progression.'" },
          { who: "kioko", text: "— at the morning huddle, quieter than you've ever heard him: \"You knew at three. I was too tired to hear a soft concern, and you were too polite to make it a loud one. Neither of those can happen again. What do you need from me so that next time, it doesn't?\"" },
        ],
        choices: [
          {
            text: "Answer him honestly: \"Structure, from both of us. From me: CUS language and the two-challenge rule when I mean it — no more hedging. From you: when you hear those words, treat them as a hard stop, no matter the hour.\"",
            next: "k4learn",
            score: { assertion: 1, loop: 1 },
            note: "The scenario cost a patient a bad night, and produced the contract that prevents the next one. In real units, this exact conversation — post-event, blame-free, structural — is where speaking-up culture is actually built.",
          },
          {
            text: "Absorb the blame: \"I should have pushed harder. It's on me.\"",
            next: "k4learn",
            score: {},
            note: "Generous, and wrong — self-blame is just blame with better manners, and it leaves the system exactly as it was. He offered you a redesign conversation; 'it's on me' declines it.",
          },
        ],
      },

      k3louder: {
        turns: [
          { who: "kioko", text: "Clearer isn't the problem; convincing is. Same numbers, more decibels. I heard you the first time and I've told you what I think they mean. Is there anything *new*, or are we done?" },
        ],
        choices: [
          {
            text: "Give him new — CUS plus the heparin: \"Yes, new: he refused his heparin yesterday and I don't think anyone told you. So, formally: I'm concerned, I'm uncomfortable sedating a hypoxic, unprophylaxed post-op patient, and I'm calling it a safety issue.\"",
            next: "k3cus",
            score: { assertion: 2, data: 1 },
            note: "He told you exactly what would move him — something new — and you had it. The heparin fact was always your strongest card; structure made it impossible to file under 'nursing anxiety.'",
          },
          {
            text: "Retreat: \"...Fine. I'll give it and watch him closely.\"",
            next: "k3yield",
            score: {},
            note: "You held your strongest fact — the refused heparin — in your hand and folded with it unplayed. In the debrief, mark this moment: what made saying it feel harder than the consequence of not saying it?",
          },
        ],
      },

      k3standoff: {
        turns: [
          { who: "narrator", text: "You call the rapid response. The team arrives into visible friction; the intensivist, reading the room, orders the CT mostly to settle the argument. It shows bilateral PEs. You were right. The story travels the hospital by lunch — in two versions. In one, a nurse saved a patient. In the other, told wherever residents gather, challenging Kioko gets you humiliated even when — especially when — you're right." },
          { who: "kioko", text: "— finding you at shift change, flat and controlled: \"Good catch. I mean that. And if you ever bring me an ultimatum before you've brought me your reasoning again, we're going to have a different conversation. You had the heparin history the whole time. Lead with it next time.\"" },
        ],
        choices: [
          {
            text: "Take the half-apology and improve the contract: \"That's fair — you should have had the heparin fact in my first sentence, and structured, not shouted. And when I do say 'I'm uncomfortable, this is a safety issue' — I need that to be a hard stop, even at hour nineteen.\"",
            next: "k4learn",
            score: { assertion: 1, loop: 1 },
            note: "Both things are true: your process was skippy AND his threshold was set too high. The best debriefs let both be true at once — that's advocacy-inquiry, which you'll formalize in Step 6.",
          },
          {
            text: "Stand on the outcome: \"The CT report says everything I need it to say, Doctor.\"",
            next: "k4pyrrhic",
            score: {},
            note: "The patient won tonight; the working relationship — the thing every future patient at 03:00 depends on — just lost. Being right is not the same as being effective, and this unit now knows the difference.",
          },
        ],
      },

      k4win: {
        turns: [
          { who: "kioko", text: "Confirmed, since you're asking properly: lorazepam is cancelled, I'm at his bedside in five minutes, and if his sats haven't recovered on reassessment he goes to CT under PE protocol. If it's positive, you get to be right and I get to buy the coffee. Anything else, or can I go be wrong in person?" },
          { who: "narrator", text: "The CT, forty minutes later, shows bilateral segmental pulmonary emboli. Anticoagulation starts at 04:15 — while Mr. Delacroix is annoyed, awake, and alive. On his way off shift, Kioko stops at the station: 'The heparin detail. That's the kind of thing I need in the first sentence. Nineteen-hour brains need the good data early.' It is, by his standards, a love letter." },
        ],
        end: true,
        outcome: "strong",
      },
      k4partial: {
        turns: [
          { who: "narrator", text: "'When I can' turns out to mean 05:05, two pages and one admission later. The reassessment finds sats at 87%; the CT is positive; anticoagulation starts at 06:30 — hours later than it might have, though in time. In the elevator, you replay the gap: the plan you thought you'd agreed on and the plan he thought he'd agreed to were different plans, and nothing forced the difference into the open. Next time: 'Can you confirm the timeline back to me?' Seven words." },
        ],
        end: true,
        outcome: "provisional",
      },
      k4learn: {
        turns: [
          { who: "narrator", text: "Within a month, something informally called 'the Delacroix rule' operates on 6 North: CUS language is a hard stop, and 'confirm it back to me' raises no eyebrows. The case cost more than the best branch of this scenario would have — and bought more than most. Systems, it turns out, are sometimes redesigned by their failures. The better ones are redesigned by their close calls. (Replay to find the branch where the patient never pays tuition.)" },
        ],
        end: true,
        outcome: "mixed",
      },
      k4pyrrhic: {
        turns: [
          { who: "narrator", text: "You were right, and everyone knows it — both facts, in both versions of the story. In the months that follow, you notice residents double-checking with each other before bringing you borderline concerns, and Kioko routing his 6 North questions through the other charge nurse. The PE was caught; the channel it was caught through is quietly closing. Safety culture is a repeated game — Module 3's lesson, learned here the expensive way." },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "The ladder, climbed clean",
        text: "Concern with data → CUS with new information → a specific, proportionate ask → a closed loop on the plan. The patient was anticoagulated by 04:15, and the physician who was wrong left the conversation with his dignity — which is why he'll be easier to redirect next time. That last part is not a nicety; it's infrastructure.",
      },
      provisional: {
        label: "Right concern, open loop",
        text: "You stopped the sedative — the most dangerous single branch — but somewhere a loop stayed open: a plan unconfirmed, a timeline assumed. The gap between 'he agreed' and 'we agreed on the same thing' is this module's entire subject. Replay for the seven words: 'Confirm that back to me.'",
      },
      mixed: {
        label: "Tuition was paid",
        text: "The patient survived and the system learned — but this branch pays for the lesson with a delayed diagnosis or a damaged channel. Both are real endings that happen on real units. The replay worth doing: the branch where structured language plus the heparin fact arrives early enough that nobody pays.",
      },
    },
  },

  /* --------------------- Step 4b: Switch Chairs --------------------- */
  switchChairs: {
    simId: "switchChairs",
    title: "Switch Chairs: You Are Dr. Kioko",
    learnerRole:
      "Hour nineteen of your shift. Fourteen patients, three admissions pending, and a decade-old memory of a PE you once missed that you have never mentioned to anyone. You've examined Delacroix in 612 — anxious, splinting, hip looks clean — and ordered lorazepam. The night charge nurse is walking toward you with a look you recognize. Feel what a challenge lands like at hour nineteen.",
    personas: [],
    extraSpeakers: {
      nurse: { name: "The Night Charge Nurse", initials: "NC", role: "Charge Nurse, 6 North" },
    },
    scoring: {
      dims: [
        { id: "receive", label: "Receiving the challenge", max: 3, anchor: "Treated structured pushback as data, not insubordination" },
        { id: "model", label: "Updating the mental model", max: 2, anchor: "Let new information actually move the diagnosis" },
      ],
    },
    start: "c1",
    nodes: {
      c1: {
        turns: [
          { who: "narrator", text: "The vitals swim slightly when you blink. Nineteen hours. The nurse plants herself at the workstation with trended numbers already pulled up." },
          { who: "nurse", text: "Dr. Kioko, I'm concerned about 612 before that lorazepam goes in. Sats down 96 to 91 on 2L since midnight, heart rate 118, resps 26, new chest pressure. I don't think this is anxiety." },
        ],
        choices: [
          {
            text: "Feel the reflex and override it — treat the structure as signal: \"...Say the sat trend again. You came with trended numbers at three in the morning; that buys a real answer, not a reflex one.\"",
            next: "c2listen",
            score: { receive: 2 },
            note: "From this chair you can feel it: the first response to being challenged at hour nineteen is not reasoning, it's *cost accounting* — and structured, data-led concern is what makes the override possible. Remember this when you're the one composing the challenge.",
          },
          {
            text: "Do what tired experts do — pattern-match and dismiss: \"I examined him twenty minutes ago. Splinting plus anxiety. I've seen this exact picture a hundred times. Give the lorazepam.\"",
            next: "c2dismiss",
            score: {},
            note: "Notice how it feels from inside: not arrogance — *efficiency*. The pattern-match is instant, confident, and usually right. 'Usually' is the entire problem, and you cannot feel the difference from in here. That's why the system needs her next move, not your insight.",
          },
          {
            text: "Deflect with workload: \"I have fourteen patients and three pending admits. Is this the hill? Watch him for an hour and re-page me.\"",
            next: "c2deflect",
            score: {},
            note: "The workload is real — and hear what you just did: converted a safety signal into a scheduling negotiation. From the other chair this sounded like a brush-off; from this chair it genuinely felt like triage. Both are true. That's the trap.",
          },
        ],
      },
      c2listen: {
        turns: [
          { who: "nurse", text: "96 to 91 over three hours, on oxygen. And one more thing that isn't in your picture: he refused his heparin yesterday afternoon. Day shift never flagged it. Hip replacement, three days immobile, no prophylaxis." },
          { who: "narrator", text: "The old case surfaces before you can stop it — the one from your second year. Different patient, same shape: a sat trend explained away, a detail nobody flagged." },
        ],
        choices: [
          {
            text: "Say the update out loud and close the loop: \"That changes the picture — no prophylaxis moves PE to the top of my list. Cancel my lorazepam order. I'm reassessing him now, and if his sats haven't recovered, CT-PE protocol. Confirm that back to me so we're on the same page.\"",
            next: "c3update",
            score: { model: 2, receive: 1 },
            note: "Two things happened: you let the new fact actually move the diagnosis (rarer than it sounds at hour nineteen), and you initiated the check-back yourself. Leaders who request loops make loops cheap for everyone below them.",
          },
          {
            text: "Update privately, concede minimally: \"Hm. Hold the lorazepam. I'll swing by when I finish these orders.\"",
            next: "c3slow",
            score: { model: 1 },
            note: "The diagnosis moved in your head — but nobody else can see inside your head. Unspoken updates leave the team running the old plan. The gap between what you decided and what you announced is exactly where the last hour of this patient's night will disappear.",
          },
        ],
      },
      c2dismiss: {
        turns: [
          { who: "nurse", text: "Then I need to say it formally. I am Concerned. I am Uncomfortable giving a sedative to a patient with falling sats. This is a Safety issue — and there's a fact you don't have: he refused his heparin yesterday. Nobody told you." },
          { who: "narrator", text: "CUS language. Even at hour nineteen, some part of your training pricks up — these particular words are supposed to mean something. And the heparin detail lands somewhere old and uncomfortable." },
        ],
        choices: [
          {
            text: "Let the structure do its job — stop and reopen the case: \"...Okay. Those words mean stop, so I'm stopping. Unprophylaxed changes the math. Walk me through everything since midnight — and thank you for saying it the formal way. It got through. The casual way wouldn't have, tonight.\"",
            next: "c3update",
            score: { receive: 2, model: 1 },
            note: "You just experienced CUS from the receiving end: it works not by persuading the tired brain but by *interrupting* it — a focal point that means 'stop' even when attention is gone. And you told her it worked, which trains the whole unit's next escalation.",
          },
          {
            text: "Take it as insubordination: \"Formally? We're doing scripts now? Give the medication, and we can discuss communication protocols with the manager in the morning.\"",
            next: "c3crush",
            score: {},
            note: "Feel the anger honestly: it isn't about the patient — it's about hierarchy, fatigue, and being wrong in public. Every leader has this reflex. What happens on this unit for the next five years depends on whether it wins tonight.",
          },
        ],
      },
      c2deflect: {
        turns: [
          { who: "nurse", text: "I hear the workload. And I can't watch-and-wait on this one: it's my second challenge, Dr. Kioko. Falling sats, unprophylaxed — he refused heparin yesterday — and new chest pressure. If we can't agree on a reassessment now, I'm activating the rapid response, which costs us both more than five minutes at his bedside would." },
        ],
        choices: [
          {
            text: "Respect the two-challenge rule — take the five minutes: \"That's the two-challenge rule, properly used. Fine — you win the arithmetic. Five minutes at the bedside beats a rapid response. Cancel the lorazepam; walk with me and give me everything on the way.\"",
            next: "c3update",
            score: { receive: 2 },
            note: "She priced the escalation for you — five minutes now versus a full team later — and you took the deal. Note from this chair: the two-challenge rule didn't feel like defiance; it felt like a fire alarm. That's exactly what it's for.",
          },
          {
            text: "Call the bluff: \"Activate it, then. And when the team finds an anxious man with a sore hip, the RRT debrief can discuss escalation thresholds.\"",
            next: "c3rrt",
            score: {},
            note: "You've made her pull the alarm to be heard. Whatever the CT shows, every nurse on this floor just learned the price list for challenging you — and the next concern will arrive later, softer, or not at all.",
          },
        ],
      },
      c3update: {
        turns: [
          { who: "nurse", text: "Confirmed: lorazepam cancelled, bedside reassessment now, CT-PE if sats haven't recovered. I'll get the chart up in 612." },
          { who: "narrator", text: "The CT shows bilateral segmental PEs. Later, charting the anticoagulation orders, you sit with the strangest part: the system just worked, and it worked because someone three rungs down the hierarchy was equipped with words that could stop you — and you had, somewhere in your training, been equipped to be stoppable. The old case from your second year loosens its grip, very slightly." },
        ],
        end: true,
        outcome: "strong",
      },
      c3slow: {
        turns: [
          { who: "narrator", text: "You finish the orders. Two pages intervene. It's 04:40 when you reach 612 — sats 87%, the picture now unmistakable, the CT now urgent. Everything you privately decided at 03:10 happens at 05:00 instead. Nobody did anything wrong, exactly — which, you reflect in the elevator, is the most common sentence in every case review you've ever attended. The update you didn't announce was a loop you didn't close." },
        ],
        end: true,
        outcome: "provisional",
      },
      c3crush: {
        turns: [
          { who: "narrator", text: "She gives the lorazepam, documents her concern in the chart with time stamps, and says nothing further. At 04:20 the rapid response gets called anyway — by the tech, for sats of 84. The CT shows what it shows. In the case review two weeks later, the timeline is projected on a wall: a structured safety concern, formally voiced at 03:10, overruled without examination. You will spend more hours accounting for those seventy minutes than the bedside reassessment would have cost. But the deeper cost is quieter: you have taught 6 North what CUS is worth here, and 6 North learns fast." },
        ],
        end: true,
        outcome: "mixed",
      },
      c3rrt: {
        turns: [
          { who: "narrator", text: "The rapid response team finds sats of 88% and falling. The intensivist orders the CT in ninety seconds flat; bilateral PEs. Clinically, the system's safety net held — that is what the net is for. But standing at the back of the room you ran the numbers: the net cost seven clinicians, forty minutes, and one nurse's willingness to ever bring you a soft concern early, when soft concerns are cheapest. You were the expensive path. From the other chair, you never feel that; from this one, it's arithmetic." },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "Stoppable — the rarest leadership skill",
        text: "You felt the hour-nineteen reflexes — pattern-match, workload triage, hierarchy sting — and let structure beat all three. The transfer question: when someone challenges you with CUS-grade formality in your real role, what's your equivalent of 'those words mean stop'? If you don't have one, your team is improvising it for you.",
      },
      provisional: {
        label: "Updated inside, silent outside",
        text: "You let the data move you — and kept the update private, so the team ran the old plan while you ran the new one in your head. From this chair the lesson is vivid: a leader's unannounced decision is indistinguishable from no decision. Say the update; request the check-back.",
      },
      mixed: {
        label: "The reflex won",
        text: "Dismissal or the called bluff — either way, hierarchy taxed the information flow, the safety net caught what the channel should have, and the unit repriced the cost of speaking up. Worth one replay to feel the other branch: being stoppable costs five minutes; being unstoppable costs the channel.",
      },
    },
  },

  /* --------------- Step 5: Multidisciplinary Meeting --------------- */
  meeting: {
    simId: "meeting",
    title: "Rapid Response, Room 618",
    learnerRole:
      "You are the rapid response team leader tonight. The call: Mrs. Vasseur, seventy-two, post-op day two from bowel resection — BP 84/50, heart rate 122, temp 38.7, altered. Your team is arriving: Angela Brooks (charge nurse), Ray Whitfield (respiratory), Ify Adeyemi (pharmacy), Dr. Moreau (resident). You suspect septic shock. Your job is not to be the smartest clinician in the room — it's to make seven minds into one team: assign by name, force check-backs, surface what people are holding, and debrief before you leave.",
    personas: ["brooks", "whitfield", "adeyemi", "moreau"],
    scoring: {
      dims: [
        { id: "closedLoop", label: "Closed-loop completion", max: 5, anchor: "Assignments by name, confirmed back; call-outs acknowledged" },
        { id: "surface", label: "Surfacing held information", max: 3, anchor: "Drew out what Whitfield, Adeyemi, and Moreau were sitting on" },
        { id: "debrief", label: "Team debrief", max: 2, anchor: "Ran the two-minute debrief before dispersing" },
      ],
    },
    start: "r1",
    nodes: {
      r1: {
        turns: [
          { who: "narrator", text: "Room 618. Four clinicians arrive within ninety seconds of each other, each instinctively starting a different task. This is the moment — the first thirty seconds — that the Ellison case lost." },
          { who: "brooks", text: "She's the one I flagged at handoff — I've got her vitals cycling. Somebody want to tell me what we're calling this?" },
        ],
        choices: [
          {
            text: "Name the picture, then assign by name with confirmations: \"Working picture: septic shock until proven otherwise. Roles — Angela: second large-bore IV and a fluid bolus, 30 ml/kg, confirm. Ray: airway and sats, tell me if we're heading anywhere south of 92. Ify: sepsis bundle — cultures then antibiotics, flag anything I should know. Dr. Moreau: you're on history and the chart — surgical course, I&Os, labs. Everyone confirm your lane.\"",
            next: "r2loop",
            score: { closedLoop: 2 },
            note: "A brief in miniature: shared mental model ('septic shock until proven otherwise') plus assignment-by-name plus demanded confirmation. Note the phrasing 'flag anything I should know' — you just licensed the callouts you'll need in three minutes.",
          },
          {
            text: "Dive into the clinical assessment yourself — hands on the patient, stethoscope out; the team will self-organize around competence.",
            next: "r2chaos",
            score: {},
            note: "You're now the best clinician in an uncoordinated room. Every skilled person is doing *something* — and nobody knows what anybody else is doing, which is the Ellison case with better intentions.",
          },
          {
            text: "Answer Brooks first — she asked a direct question: \"Sepsis, most likely. Angela, you know her best — what's your read since handoff?\"",
            next: "r2brooks",
            score: { surface: 1 },
            note: "Reasonable instinct — Brooks holds the trend data, and honoring the person who flagged the patient builds the room. Just watch the clock: information-gathering without role assignment leaves five people in a holding pattern.",
          },
        ],
      },

      r2loop: {
        turns: [
          { who: "brooks", text: "Confirmed — second line and 30 ml/kg bolus, on it." },
          { who: "whitfield", text: "Confirmed, airway and sats. One thing while I set up — this monitor model reads sats a point or two low. Her true number is probably 93, not 91. Didn't want anyone chasing the probe instead of the patient." },
          { who: "adeyemi", text: "Confirmed on the bundle — and flagging as requested: our first-line agent for intra-abdominal sepsis is on national shortage. There's a substitution protocol; the alternative needs a different infusion rate. I need four minutes and I'd rather have them now than at the bedside." },
          { who: "moreau", text: "Confirmed, history and chart... um. It's probably nothing, but — her lactate this morning was 2.9 and nobody re-sent it. I assumed the day team was tracking it. Sorry — that should have gone to someone." },
        ],
        choices: [
          {
            text: "Receive all three call-outs with explicit closure, and mark Moreau's as gold: \"Ray — noted, sats read low, true value ~93, everyone hear that. Ify — take your four minutes, substituted agent and rate, confirm to me before it hangs. Dr. Moreau — that's not 'probably nothing,' that's our baseline: lactate 2.9 this morning makes this trend real. Re-send it now, and thank you — that's exactly what history-and-chart is for.\"",
            next: "r3work",
            score: { closedLoop: 2, surface: 2 },
            note: "Three held facts surfaced in one round — because roles made them speakable and your close-outs made them cheap. Notice especially the Moreau move: publicly upgrading a hedged disclosure teaches the most junior person in the room that their data has standing.",
          },
          {
            text: "Acknowledge briefly and push pace: \"Good, all noted. Let's move, people — bolus, bundle, labs. Time matters more than commentary.\"",
            next: "r3fast",
            score: { closedLoop: 1 },
            note: "'All noted' closed no specific loop — did the room absorb that the sat reading is falsely low? Is anyone re-sending the lactate, or did 'noted' file it? Speed that skips closure usually refunds itself with interest.",
          },
        ],
      },

      r2chaos: {
        turns: [
          { who: "narrator", text: "Ninety seconds of skilled parallel motion. Brooks starts a line. Whitfield suctions. Moreau reads the chart. Adeyemi hovers, unassigned. Then it surfaces: Brooks and Moreau have each drawn up a page to the surgeon — different surgeons. Nobody has started fluids." },
          { who: "brooks", text: "Okay, stop — who is running this? Because I've got two pages going to two different attendings and this lady's pressure is not waiting for us to figure out the org chart." },
        ],
        choices: [
          {
            text: "Take the correction and structure the room now: \"You're right, Angela — that's mine. Working picture: septic shock. Angela: fluids, 30 ml/kg, confirm. Ray: airway and sats. Ify: sepsis bundle, flag issues. Dr. Moreau: chart and history, and *only you* pages the surgical attending — Dr. Osei's service. Confirm lanes, everyone.\"",
            next: "r2loop",
            score: { closedLoop: 1 },
            note: "Recovered — and mark the mechanism of the failure you just lived: two conscientious people, one implicit task, two incompatible executions. It will appear on the MCQ of every future safety course, and it just happened in your room.",
          },
          {
            text: "Keep clinical command and answer narrowly: \"I am. Someone get fluids going and someone page surgery — the rest keep doing what you're doing.\"",
            next: "r3someone",
            score: {},
            note: "'Someone' is the most expensive word in resuscitation. You've re-created the exact ambiguity Brooks just flagged, with her watching.",
          },
        ],
      },

      r2brooks: {
        turns: [
          { who: "brooks", text: "My read: she's been sliding since 14:00 — mottled knees an hour ago, and I flagged the temp at handoff. This is the sepsis I called it as. What I need from you is lanes: who's on fluids, who's paging surgery, and whether pharmacy's here for the bundle." },
        ],
        choices: [
          {
            text: "Give her the lanes — assign by name, demand confirmation: \"Right. Septic shock is the working picture. Angela: fluids, 30 ml/kg. Ray: airway and sats, call out any change. Ify: bundle — cultures, antibiotics, flag problems. Dr. Moreau: chart, history, and you alone page the surgical attending. Confirm your lanes back.\"",
            next: "r2loop",
            score: { closedLoop: 2 },
            note: "Brooks handed you the leadership frame ('what I need from you is lanes') and you took it. Experienced nurses often know exactly what a disorganized code needs — the good ones tell you, once.",
          },
          {
            text: "Keep gathering: \"Mottled knees since when, exactly? And what were the 14:00 vitals? I want the full trend before we commit to a direction.\"",
            next: "r3someone",
            score: { surface: 1 },
            note: "The trend matters, and Brooks can deliver it *while* infusing — data-gathering and role assignment aren't sequential. Four clinicians are now watching you interview one nurse.",
          },
        ],
      },

      r3work: {
        turns: [
          { who: "narrator", text: "The room clicks. Bolus running, cultures drawn, repeat lactate sent, substituted antibiotic confirmed at the right rate and hanging by minute eleven. Pressure responding: 96/58." },
          { who: "whitfield", text: "Call-out: sats holding 93 on four liters — accounting for the probe, she's fine unless the pressure dips again." },
          { who: "moreau", text: "Repeat lactate's back: 4.1, up from 2.9. And the surgical attending is on the way — I confirmed she got the vitals, not just the page." },
        ],
        choices: [
          {
            text: "Close the loops aloud and set the trigger: \"Copy: sats 93 on four liters — heard. Lactate 4.1 confirms septic shock; ICU consult now, and here's the trigger, everyone: pressure below 90 or any mental-status change, we escalate to pressors and I want a call-out immediately. Confirm.\"",
            next: "r4debrief",
            score: { closedLoop: 1, surface: 1 },
            note: "You converted a status update into shared anticipation — the trigger ('below 90 or mental status change') is a pre-agreed focal point, so the next escalation will need no discussion at all. That's coordination working ahead of the event.",
          },
          {
            text: "Absorb the updates with a nod and move to disposition: \"Good. Let's get her packaged for the ICU.\"",
            next: "r4quick",
            score: { closedLoop: 1 },
            note: "Efficient — but no one confirmed who owns her during transport, and the lactate of 4.1 was received by a nod. Loops that end in nods reopen in elevators.",
          },
        ],
      },

      r3fast: {
        turns: [
          { who: "narrator", text: "Pace, you have. At minute nine it buys its bill: the bolus is in and pressure is responding — but Adeyemi is standing at the med cart re-reading the substitution protocol alone, unstarted, because 'all noted' never became 'take your four minutes.' And nobody re-sent the lactate." },
          { who: "adeyemi", text: "Flat, precise: \"I need a decision on the substituted agent's rate before anything hangs. I flagged this at minute two. Waiting was not my preference.\"" },
        ],
        choices: [
          {
            text: "Own the dropped loops and close them now: \"That one's mine, Ify — you flagged it and I noted it into a void. Take your four minutes now, confirm rate to me before it hangs. Dr. Moreau — the lactate you mentioned: re-send it, tell me when it's away. Loops closed out loud from here on.\"",
            next: "r3work",
            score: { closedLoop: 1, surface: 1 },
            note: "Leaders who audibly own dropped loops get told about the next dropped loop early. Leaders who don't, don't — that's the whole economics of speaking up, in one moment.",
          },
          {
            text: "Redirect: \"We're mid-resuscitation, Ify — best judgment on the rate, that's why you're here.\"",
            next: "r4near",
            score: {},
            note: "'Use your judgment' sounds like trust and functions like abandonment: she flagged a known-dangerous ambiguity, and the answer was 'carry it alone.' Pharmacists remember which leaders make their flags worth raising.",
          },
        ],
      },

      r3someone: {
        turns: [
          { who: "narrator", text: "Minute eight. 'Someone' turned out to be both Brooks and Moreau on the surgeon page (two attendings, again), and neither on the second IV. Adeyemi, never assigned, has defensively started the bundle solo. Whitfield finally raises his voice, which he does roughly annually:" },
          { who: "whitfield", text: "Leader. Sats are 89 by this monitor — which reads low, so call it 91, but the trend is real. I need to know who owns fluids and whether anyone has sent a lactate, because from where I stand the answer to both looks like 'nobody.'" },
        ],
        choices: [
          {
            text: "Let the call-out restructure you — rebuild the room now: \"Ray's right, and thank you for the call-out — probe noted, trend heard. Resetting lanes: Angela, fluids now, 30 ml/kg, confirm. Dr. Moreau, lactate and only the Osei service page. Ify, keep the bundle, flag the shortage issue to me directly. Confirm, everyone, out loud.\"",
            next: "r3work",
            score: { closedLoop: 1, surface: 1 },
            note: "It took a respiratory therapist's annual raised voice to buy you the reset — but you took it whole: thanked the call-out, closed his data into the shared picture, and rebuilt lanes with confirmation. Late structure beats no structure, every time.",
          },
          {
            text: "Defend and patch: \"It's under control, Ray — Angela, grab fluids when you're off the phone. Everyone else as you were.\"",
            next: "r4near",
            score: {},
            note: "'When you're off the phone' is a role assignment with a hole in it, and 'as you were' preserves the configuration that just failed. The room heard both.",
          },
        ],
      },

      r4debrief: {
        turns: [
          { who: "narrator", text: "Handover to the ICU team is clean — one voice, one picture, receiving nurse check-backs the drip rates. Mrs. Vasseur's pressure is 102/64 leaving the floor. The team starts to disperse toward fourteen other duties." },
        ],
        choices: [
          {
            text: "Hold them for the two-minute debrief: \"Two minutes before we scatter — what went well, what nearly didn't? Ray, your probe call-out saved us a wrong turn. Ify, the shortage flag at minute two — that's the save of the night. Dr. Moreau: the lactate baseline changed the case, and I want you to notice you almost didn't say it. What should we do differently next time? Anyone.\"",
            next: "r5end",
            score: { debrief: 2, surface: 1 },
            note: "The debrief is where tonight's coordination becomes next month's: every named save raises the odds its owner speaks one minute earlier next time. Two minutes, compounding interest.",
          },
          {
            text: "Release them — it's 03:40 and everyone is drowning: \"Great work, everyone. Notes to follow. Go.\"",
            next: "r5nodebrief",
            score: {},
            note: "Understandable arithmetic, wrong ledger: the debrief costs two minutes tonight and pays at every future event this team attends together. 'Notes to follow' reaches no one's habits.",
          },
        ],
      },

      r4quick: {
        turns: [
          { who: "narrator", text: "Transport happens. In the elevator, the ICU nurse asks Brooks who's been managing the fluids in transit; Brooks assumed the resident; Moreau assumed Brooks. Forty unowned seconds — harmless tonight, because nothing happened during them. The near-miss registers on exactly one face: Whitfield's, who has seen the version where something did." },
          { who: "whitfield", text: "At the ICU doors, quietly: \"Leader — suggestion for the debrief, if we're having one: transport ownership. Tonight it was luck. I've attended the one where it wasn't.\"" },
        ],
        choices: [
          {
            text: "Have the debrief he just asked for: \"We're having one — right now, two minutes, ICU hallway. Ray's point first: transport ownership was unassigned and luck covered it. That's mine to fix — from now on, packaged-for-transport includes a named owner, said aloud. What else nearly bit us? Anyone.\"",
            next: "r5end",
            score: { debrief: 2, surface: 1 },
            note: "A team member requested a debrief and the leader said yes, immediately, in a hallway — that sentence, repeated, is how debriefing becomes culture rather than compliance.",
          },
          {
            text: "Defer it: \"Good point — flag it in the notes and we'll cover it at the monthly RRT review.\"",
            next: "r5nodebrief",
            score: {},
            note: "The monthly review is thirty days and two hundred assumptions away. Debrief value has a half-life measured in minutes — while the near-miss is still warm in everyone's hands.",
          },
        ],
      },

      r4near: {
        turns: [
          { who: "narrator", text: "The bundle hangs — late, at a rate Adeyemi triple-checked alone. Pressure stabilizes; the ICU accepts her; on paper, a save. The debrief that should follow doesn't, because the people who'd need to speak in it have each privately concluded that speaking here is expensive. Adeyemi files the timeline in the pharmacy incident log, flat and precise as always. Whitfield says nothing, which from Whitfield is a report." },
        ],
        end: true,
        outcome: "mixed",
      },

      r5end: {
        turns: [
          { who: "brooks", text: "What I'd do differently: I want the working diagnosis said out loud in the first thirty seconds every time, like tonight. I've been at the ones where we all treated different diseases for ten minutes. This one, everyone knew what game we were playing. Do that again." },
          { who: "narrator", text: "Minute two of the debrief, and the charge nurse has just written your leadership evaluation: everyone knew what game we were playing. In this module's language — the mental model was shared, the loops were closed, and the assumptions had nowhere to hide. Mrs. Vasseur is on pressors, stable, and the ICU note reads 'well-run response, no care delays.' Rounds complete." },
        ],
        end: true,
        outcome: "strong",
      },
      r5nodebrief: {
        turns: [
          { who: "narrator", text: "The team scatters into the 03:40 dark. The patient does well — tonight's coordination was real, and it dissolves with the group, unbanked: Whitfield's probe knowledge stays his, Moreau's almost-unsaid lactate stays a private near-decision, and the next team to round this rotation will reassemble the same lessons from scratch. The response was good. The *system* got nothing to keep. That gap — between a good event and a learning one — is two minutes wide, and it's the exact width of the debrief you skipped." },
        ],
        end: true,
        outcome: "provisional",
      },
    },
    outcomes: {
      strong: {
        label: "Seven minds, one picture",
        text: "Named assignments with confirmations, call-outs received and closed out loud, three pieces of held information surfaced (a lying sat probe, a drug shortage, a buried lactate), a pre-agreed escalation trigger, and a debrief that banked all of it. Your closed-loop completion rate is the score that matters most — it's the one behavior that makes every other one visible.",
      },
      provisional: {
        label: "Good response, unbanked",
        text: "The clinical outcome held, and most loops closed — but somewhere the system kept nothing: a debrief skipped or deferred, a near-miss that only Whitfield noticed. Coordination that lives only in one night's room has to be rebuilt every night. Replay for the two minutes at the end.",
      },
      mixed: {
        label: "Saved by the people, not the structure",
        text: "The patient made it because skilled individuals compensated — Adeyemi triple-checking alone, Whitfield's annual raised voice. Every compensation was a loop you didn't close. The room also just repriced speaking up, in the wrong direction. Replay from the first thirty seconds: name the picture, assign by name, demand the confirm.",
      },
    },
  },

  /* ---------------------- Step 6: Reflective Debrief ---------------------- */
  debrief: {
    intro:
      "Advocacy-inquiry again: observations first, then genuine questions. This module's behaviors are unusually measurable — closed loops either happened or they didn't — so we'll look at the numbers, then at what they mean where you actually work.",
    prompts: [
      {
        id: "d1",
        frame: "Advocacy · Inquiry",
        question:
          "I noticed the simulations turned on small utterances: 'confirm that back to me,' 'that's not probably-nothing,' a name attached to a task. None require rank — only habit. Which of these micro-behaviors do you already use under pressure, and which one reliably disappears when you're tired, rushed, or outranked?",
      },
      {
        id: "d2",
        frame: "Concept transfer",
        question:
          "Where does your real team run on assumed rather than common knowledge? Name one recurring high-stakes moment — a handoff, a transition, an escalation path — where 'everyone knows' has never actually been tested out loud.",
      },
      {
        id: "d3",
        frame: "Diagnosis discipline",
        question:
          "Think of a recent team failure you attributed to attitude, laziness, or 'communication issues.' Re-diagnose it with this module's test: did the parties want different things (cooperation failure — fix payoffs) or the same thing (coordination failure — fix convergence)? What changes about the fix?",
      },
    ],
    commitment: {
      id: "commit",
      label: "Commitment to practice",
      question:
        "Write one concrete commitment for the next 30 days: a specific recurring moment (which meeting, which handoff, which escalation) where you will install one convergence device — a named assignment, a check-back, a pre-agreed trigger, or a two-minute debrief — and how you'll know it stuck. Module 8 will ask you what happened.",
    },
  },
};
