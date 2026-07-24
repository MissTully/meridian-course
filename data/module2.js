/* Module 2 — The Handoff: Information Asymmetry and Signaling
   Fully authored content: vignette, concept coach, MCQ case, one-on-one
   simulation, Switch Chairs variant, multidisciplinary meeting, debrief. */

export const module2Content = {
  /* ------------------------- Step 1: Topic Video ------------------------- */
  video: {
    vpTitle: "What the Report Didn't Say",
    vignette: [
      "18:42, the medicine workroom at Meridian Academic Medical Center. Dr. Lena Moreau takes the admission call from the emergency department: Mr. Abara, seventy-four, community-acquired pneumonia, vitals stable, antibiotics started, 'a soft admit, honestly.' The whole handoff takes fifty-five seconds. The ED has eleven patients in the waiting room and the board is red.",
      "What the report didn't say: at 15:20 Mr. Abara's blood pressure touched 82 systolic — it came back with a liter of fluid, so it was filed as 'resolved.' His lactate was 2.4 — mildly elevated, never repeated. He takes a diuretic at home that he took this morning, on an empty stomach, before eleven hours without oral intake. None of this was hidden. All of it was known. It simply didn't survive the compression.",
      "The receiving team, anchored on 'soft admit,' writes overnight orders to match. At 02:10, Mr. Abara is hypotensive, confused, and behind on six hours of sepsis physiology the floor never knew to watch for. The morning review will call it a 'communication failure' — but no one failed to communicate. Two parties with wildly unequal information played a fifty-five-second game, and the information lost.",
    ],
    teaching: [
      {
        h: "This is a game of incomplete information",
        p: "Every handoff, consult, and history-taking is a transaction between a party who knows more (the sender) and a party who knows less (the receiver). Neither can read the other's mind, both are optimizing under time pressure, and the receiver cannot tell — from the message alone — whether 'stable' means 'thoroughly assessed and reassuring' or 'I haven't looked in four hours.' That uncertainty is the game, and it has two engineered solutions: signals and screens.",
      },
      {
        h: "Signals: how the informed party proves what it knows",
        p: "A signal is credible in proportion to what it costs. 'He's fine' is cheap talk — costless to say whether or not it's true, so it carries almost no information. 'His pressure dipped to 82 at 15:20, responded to a liter, and I'd repeat the lactate by eight' is a costly signal: it took effort to know, exposes the sender to accountability, and could not plausibly be said by someone who hadn't looked. Receivers instinctively weight messages by their cost — which is why vague reassurance soothes no one who is paying attention.",
      },
      {
        h: "Screens: how the uninformed party designs its questions",
        p: "The receiver's tool is the screen — a question engineered so that different underlying realities produce different answers. 'Anything else I should know?' is a failed screen: every reality answers 'no, that's about it.' Compare: 'What were his worst vitals at any point, not his current ones?' or 'What's the one thing about this patient that would surprise me at 2 a.m.?' Those questions force the sender's private information through the compression — the honest answer and the hope-for-the-best answer sound different.",
      },
      {
        h: "The communication anchor: SBAR is a signaling protocol",
        p: "SBAR, check-back, and structured handoff tools are usually taught as etiquette. Reframe them: they are mechanism design for information asymmetry. SBAR forces the sender to emit high-cost content in a fixed order — Situation, Background, Assessment, Recommendation — so the receiver can hear what's missing (an SBAR without an Assessment is itself a signal). Check-back closes the loop so both sides know what was actually transferred, not what was intended. And the same lens applies at the bedside: the patient is the ultimate holder of private information, and disclosure is elicited by trust — screens asked with curiosity — not by interrogation.",
      },
    ],
  },

  /* ---------------------- Step 2: AI Concept Coach ---------------------- */
  coach: {
    coachName: "The Concept Coach",
    intro:
      "Before you take a handoff from the busiest attending at Meridian, let's calibrate your ear. The core skill of this module is telling cheap talk from costly signals — and designing questions that make the difference audible.",
    exchanges: [
      {
        coach:
          "Warm-up. Four messages about the same deteriorating resident on your team: (1) 'I'm fine, really.' (2) Their documentation, which has quietly shrunk to auto-populated templates. (3) 'Ask anyone — I'm on top of my patients.' (4) A colleague mentions the resident stayed until 22:00 re-checking a med list three times. Which of these carry real information, and why?",
        options: [
          {
            text: "Messages 2 and 4 — they're costly and involuntary. The shrinking documentation and the triple-checked med list can't easily be faked or performed; 1 and 3 are cheap talk that any underlying reality would produce.",
            quality: "good",
            feedback:
              "Exactly. 'I'm fine' costs nothing whether it's true or false, so it tells you almost nothing. Behavior that is expensive to produce — or that leaks out unintentionally — is where the information lives. This is why good leaders watch work products and patterns, not self-reports, and why your own reassurances to your boss are worth exactly what they cost you to say.",
          },
          {
            text: "All four matter — every data point about a struggling colleague deserves weight, and dismissing their words as 'cheap talk' is uncharitable.",
            quality: "partial",
            feedback:
              "Kind instinct, wrong inference rule. Weighting isn't dismissing: you can receive 'I'm fine' with warmth while assigning it low evidential value, because both a fine resident and a drowning one say it. The unkind move is acting on the cheap signal because it's the comfortable one — that's how struggling residents stay invisible until something breaks.",
          },
          {
            text: "Message 1 — a direct self-report from the person with the most private information should outweigh secondhand observations.",
            quality: "miss",
            feedback:
              "They do hold the most private information — that's precisely why their costless statements can't be taken at face value. The informed party's incentive (looking competent, avoiding scrutiny) shapes what they volunteer. When incentive and message point the same direction, credibility has to come from cost — and 'I'm fine' costs nothing. Look at what they can't help revealing: the documentation.",
          },
        ],
      },
      {
        coach:
          "Now design a screen. A locum agency tells you their candidate is 'excellent, very experienced, no issues.' You get one question before signing. Which question is engineered so that a good candidate and a problem candidate produce audibly different answers?",
        options: [
          {
            text: "'Would this candidate be eligible for rehire at their last three facilities — and can I call those medical directors directly?'",
            quality: "good",
            feedback:
              "That's a screen. An agency with a genuinely strong candidate says 'yes, here are the numbers' at zero cost; an agency hiding something must either lie checkably or hedge audibly. The genius of a good screen is that you often don't even need to make the calls — the *reaction to the question* is the information. Notice the general form: convert their cheap claim into an offer of verifiable, costly evidence.",
          },
          {
            text: "'Can you tell me more about their experience and strengths?'",
            quality: "partial",
            feedback:
              "It feels like diligence, but run the test: does a problem candidate's answer sound different from a great candidate's? No — the agency composes a flattering paragraph either way. Open-ended questions to a motivated sender just invite better-produced cheap talk. Screens work by demanding something the sender can only supply if the good reality is true.",
          },
          {
            text: "'Is there anything about this candidate you haven't told me?'",
            quality: "miss",
            feedback:
              "Every reality answers 'no' — including the honest one, because the agency has convinced itself the omissions don't count. This is the locum version of 'anything else I should know?', the question that ends every incomplete handoff in false comfort. A screen must be specific enough that evasion is detectable: worst outcomes, verifiable references, rehire eligibility.",
          },
        ],
      },
      {
        coach:
          "Last one — the bedside, where the asymmetry inverts. Mrs. Okafor, readmitted for heart failure, insists she takes all her medications. Her potassium and her refill records quietly disagree. You suspect cost is the issue. What's the move that actually surfaces the truth?",
        options: [
          {
            text: "Lower the cost of disclosure before screening: 'A lot of my patients can't take everything the way it's written — pills get expensive, schedules get complicated. Walk me through what an actual week looks like.' Then verify gently against the refill data.",
            quality: "good",
            feedback:
              "Yes — and notice what you did in game terms: her private information stays private because disclosure has been costly (judgment, shame, being labeled 'noncompliant'). You can't screen your way past a cost problem; you have to *reprice disclosure* first — normalize, then ask a question that assumes imperfection rather than demanding a confession. Trust isn't a soft skill here; it's the mechanism that makes the signal affordable.",
          },
          {
            text: "Present the evidence: show her the refill records and the potassium, and ask her to explain the discrepancy.",
            quality: "partial",
            feedback:
              "The data is real and eventually belongs in the conversation — but led with, it converts the encounter into a cross-examination, and the rational response to cross-examination is a better cover story. You'll win the exchange and lose the information, this admission and every future one. Evidence works after disclosure is safe, as gentle verification — not as the opening move.",
          },
          {
            text: "Route around her: ask the family to monitor her medications and set up pharmacy-dispensed blister packs.",
            quality: "miss",
            feedback:
              "You've treated her as an obstacle to the information rather than its owner. Surveillance without understanding misses *why* — cost? side effects she's embarrassed by? a belief about the medication? — and whichever it is will defeat the blister packs too. The patient is the ultimate holder of private information; systems that bypass her forfeit it permanently.",
          },
        ],
      },
    ],
    close:
      "You can now price a message by what it cost the sender, design questions that force different realities to sound different, and reprice disclosure when you're the one holding the power. Now: the phone is ringing, the ED board is red, and Dr. Tran talks fast.",
  },

  /* ------------------- Step 3: Branching Case with MCQ ------------------- */
  mcqCase: {
    title: "The Quiet Consult",
    narrative: [
      "Mr. Osei, sixty-six, is admitted under your service with exertional chest pressure, a mildly elevated troponin that has plateaued, and a story that doesn't quite fit any textbook. You consult cardiology. Six hours later, the note appears: three lines of findings, then — 'No acute intervention indicated at this time. Will follow.' No differential. No probability language. No recommendation beyond 'continue current management.'",
      "The fellow who wrote it, Dr. Whitcombe, is famously terse. Colleagues joke that his notes are 'billed by the syllable.' What nobody jokes about: last year, a Whitcombe note reading 'low suspicion for ACS' preceded a transfer to the cath lab eighteen hours later. The terseness, you suspect, is not confidence. It may be its opposite — uncertainty, compressed until it looks like reassurance. Your patient's disposition depends on what this consultant actually believes, and the note is not going to tell you.",
    ],
    questions: [
      {
        id: "m2q1",
        stem: "In game-theoretic terms, what exactly is the problem with 'No acute intervention indicated at this time'?",
        tags: ["Information asymmetry", "Cheap talk"],
        options: [
          {
            key: "A",
            text: "It's a pooling message: high-confidence reassurance and hedged uncertainty both produce this same sentence, so the receiver can't distinguish the two realities behind it.",
            correct: true,
            feedback:
              "Precisely — economists would say the message 'pools' the types. A consultant who is 95% sure and one who is 60% sure and hoping both write these words, so the words carry almost no information about which consultant you have. Your job as receiver is to design a screen that forces the two types to answer differently.",
          },
          {
            key: "B",
            text: "It's a documentation-quality problem: the note fails the medical record's completeness standards and should be flagged to the department.",
            feedback:
              "The note might indeed be thin by documentation standards — but fixing the chart audit doesn't fix your patient tonight, and a consultant forced to write longer notes will produce longer pooling messages. The defect isn't length; it's that the sentence is compatible with too many underlying beliefs. That's an information problem, not a compliance problem.",
          },
          {
            key: "C",
            text: "It's a professionalism problem: the fellow is being lazy, and the fix is direct feedback about effort.",
            feedback:
              "Careful — Module 1's discipline applies here too. Terseness that persists this consistently is usually a rational strategy, not sloth: short notes minimize exposure, commitment, and callbacks. Diagnose the payoffs before the character. And even if effort were the issue, tonight's question remains: what does he actually believe about your patient?",
          },
          {
            key: "D",
            text: "There's no real problem: 'no acute intervention indicated' is a clear clinical bottom line, and reading uncertainty into it is over-analysis.",
            feedback:
              "The cath-lab story in the case is the counterexample: the same author's confident-sounding compression preceded a major intervention within a day. A bottom line is only as clear as it is *discriminating* — and this sentence is one both a sure consultant and an unsure one would write. Treating pooled messages as clear is exactly how receiving teams anchor wrong.",
          },
        ],
      },
      {
        id: "m2q2",
        stem: "You call Dr. Whitcombe. Which opening question is the best screen for what he actually believes?",
        tags: ["Screening", "Question design"],
        options: [
          {
            key: "A",
            text: "'If this troponin bumps at 04:00, what do you want us to do — and would you want to know before morning?'",
            correct: true,
            feedback:
              "This screens beautifully: a genuinely reassured consultant says 'trend it, I don't need a call' at no cost, while an uncertain one — offered a concrete future contingency — will surface the contingency plan he's privately holding ('call me, and have the cath lab number ready'). You've converted his hidden probability into an observable action commitment. Commitments are costly; adjectives are not.",
          },
          {
            key: "B",
            text: "'Can you walk me through your overall thinking on this patient?'",
            feedback:
              "The open-ended invitation — better than nothing, but it lets him re-narrate the note at greater length, and terse-by-strategy consultants are precisely the ones who compress well under open questions. You'll receive a longer version of 'will follow.' Screens force divergence; invitations permit convergence.",
          },
          {
            key: "C",
            text: "'Your note says no intervention — so you're confident this isn't cardiac, right?'",
            feedback:
              "A leading question with a socially expensive exit: to disagree, he must now contradict both his own note and your framing on the record. Most humans take the cheap path — 'right' — and you've manufactured the false reassurance you were trying to detect. Never build a screen where honesty costs more than agreement.",
          },
          {
            key: "D",
            text: "'Last year a note like this one preceded a cath-lab transfer — how sure are you this time?'",
            feedback:
              "You've attached an accusation to the screen, and defensiveness is a pooling response too: attacked consultants produce confident-sounding self-defense regardless of their private probability. The history made you appropriately skeptical — good — but the skepticism belongs in your question design, not in the question itself.",
          },
        ],
      },
      {
        id: "m2q3",
        stem: "Whitcombe answers: 'Trend the troponin. If it bumps, call me — actually, if his pain changes character at all, call me. I'll come by tonight before I leave.' What did you just learn, and how?",
        tags: ["Costly signals", "Signal reading"],
        options: [
          {
            key: "A",
            text: "His true assessment is more uncertain than his note: unsolicited call conditions, a widening trigger ('any change in character'), and a voluntary same-night visit are costly commitments a confident consultant wouldn't spend.",
            correct: true,
            feedback:
              "Right — read the price tags. Each escalating commitment (call on bump → call on any change → I'll come by tonight) costs him sleep and exposure, and he volunteered them. That's a consultant whose private probability of 'this is real' is meaningfully higher than 'no acute intervention indicated' implied. The note pooled; the commitments separated. Now your overnight orders can match his actual belief instead of his prose.",
          },
          {
            key: "B",
            text: "He's simply being thorough and collegial; reading his diligence as hidden worry over-interprets normal good practice.",
            feedback:
              "For a median consultant, maybe — but signals are read against the sender's baseline, and this sender's baseline is three lines and 'will follow.' When the famously terse spend words and evening hours voluntarily, the deviation *is* the data. Signal reading is always differential: what does this sender do when they're truly unworried? Not this.",
          },
          {
            key: "C",
            text: "You learned little — verbal instructions aren't documentation, and only the written note counts for decision-making.",
            feedback:
              "Legally the note matters; epistemically you just received the highest-grade information of the day. The correct synthesis is both: act on the credible verbal signal tonight *and* close the loop — 'I'm writing your call parameters into my note; want to addend yours?' That last question, incidentally, is one more screen: watch how fast he addends.",
          },
          {
            key: "D",
            text: "He contradicted his note, which means the consult is unreliable and should be repeated with a different consultant tomorrow.",
            feedback:
              "He didn't contradict it — he *unpooled* it. 'No acute intervention indicated at this time' and 'watch closely, call me on any change' are fully consistent; the note just compressed away the second half. Swapping consultants would trade a sender whose signals you've now learned to read for a stranger's fresh compression. Keep the consultant; keep asking screens.",
          },
        ],
      },
      {
        id: "m2q4",
        stem: "The unit wants a systemic fix so that consult notes stop hiding uncertainty. Which redesign most directly attacks the signaling problem?",
        tags: ["Mechanism thinking", "Signaling protocol"],
        options: [
          {
            key: "A",
            text: "Require consult notes to state a working probability or confidence level ('low/moderate/high suspicion, because...') and an explicit if-then contingency line — making uncertainty a required field rather than an optional confession.",
            correct: true,
            feedback:
              "Yes — this is SBAR-thinking applied to consults: restructure the message format so the high-value content can't be compressed out. When 'suspicion level + contingency' is a required field, silence is no longer available as a hiding place, and a blank or hedged field is itself a readable signal. You've made honest signaling the cheapest path — the same move as Module 1's mechanism fix, applied to information.",
          },
          {
            key: "B",
            text: "A lecture series for consultants on the importance of clear communication in patient safety.",
            feedback:
              "Exhortation again — Module 1 already showed you its fate. Every consultant present will agree, and the terse ones will keep being terse because terseness still pays (less exposure, fewer callbacks). Messages change when the message *format* or its payoffs change, not when senders are reminded that clarity is good.",
          },
          {
            key: "C",
            text: "Audit consult notes for vagueness and report chronically terse consultants to their division chiefs.",
            feedback:
              "Punishing vagueness teaches consultants to produce audit-proof vagueness — longer notes with the same missing content, plus a new incentive to avoid documenting anything checkable. Worse, it poisons the collegial channel you need for the verbal signals that saved this case. Change what the form demands, not what the audit punishes.",
          },
          {
            key: "D",
            text: "Require the primary team to call every consultant on every consult to discuss the findings verbally.",
            feedback:
              "The call worked in this case *because it was targeted* — you brought a designed screen to a specific ambiguity. Mandated for every consult, calls become ritual: high volume, low attention, and the same compression re-emerges verbally ('yeah, nothing acute, gotta run'). Universal process is not a substitute for engineered signals; it's usually their dilution.",
          },
        ],
      },
      {
        id: "m2q5",
        stem: "Mr. Osei himself has been quiet all day. Asked about the chest pressure, he says it's 'much better.' His wife, in the hallway, tells you he's been rubbing his chest when he thinks no one is watching. What is the best reading of — and response to — this asymmetry?",
        tags: ["Patient as information holder", "Eliciting disclosure", "Empathy"],
        options: [
          {
            key: "A",
            text: "His 'much better' is disclosure priced too high — fear of the cath lab, of being a burden, of what the answer means. Lower the price: sit down, name the fear as normal, and screen gently ('many people feel it more than they say — what does it feel like right now, this minute?').",
            correct: true,
            feedback:
              "Yes. The patient is the ultimate informed party, and his signal is being suppressed by cost — not deceit. Fear, dependency, and hope all tax honest reporting. The wife's observation (an involuntary, costly signal — he rubs his chest only when unobserved) outranks his words. Your job is the bedside version of everything this module taught: reprice disclosure with trust, then verify with a screen asked in genuine curiosity.",
          },
          {
            key: "B",
            text: "Document 'patient reports symptom improvement' — self-report is the standard, and hallway observations from family aren't clinical data.",
            feedback:
              "You'd be charting the cheap talk and discarding the costly signal. Involuntary behavior observed by someone with continuous access is high-grade evidence — often the highest available. 'Much better' from a man with a plateaued troponin and covert chest-rubbing is a pooling message; documenting it as fact converts an information problem into an anchoring error with a signature.",
          },
          {
            key: "C",
            text: "Confront him gently with the discrepancy: 'Your wife says you've been rubbing your chest — why did you tell me it was better?'",
            feedback:
              "Two casualties in one sentence: you've made his wife the informant (taxing the best signal channel you have) and framed his fear as dishonesty (raising the price of every future disclosure). The discrepancy is your private knowledge to be *used*, not deployed — let it shape your screens and your monitoring, never your accusations.",
          },
          {
            key: "D",
            text: "Trust the objective data instead: plateaued troponin and a reassuring consult matter more than either his words or his gestures.",
            feedback:
              "The 'objective' picture you're trusting includes a consult whose author privately committed to same-night follow-up — you've already learned it's softer than it reads. Symptoms are data the monitors can't capture, and this patient's are being under-reported. When the numbers and the man disagree, widen the watch; don't pick the tidier witness.",
          },
        ],
      },
    ],
  },

  /* -------------------- Step 4: One-on-One Simulation -------------------- */
  oneOnOne: {
    simId: "oneOnOne",
    title: "The Fifty-Five-Second Handoff",
    learnerRole:
      "You are the accepting hospitalist on a busy admitting shift. Dr. Casey Tran is calling from an emergency department with eleven patients in the waiting room. She is fast, good, and compressing hard. Somewhere in what she isn't saying is the detail that decides whether Mr. Abara's night is boring or terrible. Your tools: targeted screens, check-backs, and pressure without hostility.",
    personas: ["tran"],
    scoring: {
      dims: [
        { id: "screen", label: "Screen design", max: 4, anchor: "Asked targeted questions that force different realities to sound different" },
        { id: "loop", label: "Closed loops", max: 3, anchor: "Checked back the transferred picture; converted answers into an explicit plan" },
        { id: "tone", label: "Pressure without hostility", max: 3, anchor: "Extracted information while leaving the channel better than you found it" },
      ],
    },
    start: "h1",
    nodes: {
      h1: {
        turns: [
          { who: "narrator", text: "Your pager, then the phone, in the same second. The voice on the line is already three sentences in." },
          { who: "tran", text: "— Tran, ED. Got one for you: Abara, seventy-four, community-acquired pneumonia, right lower lobe on film, ceftriaxone and azithro on board, vitals stable, tolerating oral. Soft admit, honestly. He's a sweet guy, family's with him. Bed's requested. Anything else you need, it's in the chart. Good?" },
        ],
        choices: [
          {
            text: "Run the three screens, fast and pointed: \"Sixty seconds and you're done. One: worst vitals at any point today — not current. Two: any lab that's pending, borderline, or you didn't repeat? Three: what's the one thing about him that would surprise me at 2 a.m.?\"",
            next: "h2screens",
            score: { screen: 2, tone: 1 },
            note: "Three engineered screens, each priced for a busy sender — closed-ended, answerable in seconds, and impossible to answer identically from 'thoroughly assessed' and 'hoped for the best.' The 2 a.m. question is the best screen in hospital medicine.",
          },
          {
            text: "Accept the headline: \"Sounds straightforward — we'll take him. Thanks, Casey.\"",
            next: "h2accept",
            score: {},
            note: "The handoff was fifty-five seconds and you added zero. 'Stable' and 'soft admit' are cheap talk — compatible with every underlying reality including the one where his pressure touched 82 three hours ago.",
          },
          {
            text: "Demand process: \"This isn't a handoff, it's a headline. Give me a proper SBAR — Situation, Background, Assessment, Recommendation — from the top, please.\"",
            next: "h2bristle",
            score: { screen: 1 },
            note: "The structure you want is right; the delivery just taxed the channel. To a drowning sender, 'do it properly' hears as 'your fifty-five seconds were worthless' — and senders who feel graded start performing compliance instead of transferring information.",
          },
        ],
      },

      h2screens: {
        turns: [
          { who: "narrator", text: "A half-beat of silence — the sound of a fast brain re-opening a closed file." },
          { who: "tran", text: "...Okay, fair questions. Worst vitals: he dipped — 82 systolic around 15:20, gave him a liter, came right back to one-teens, I called it resolved. Labs: lactate was 2.4 on arrival, didn't repeat it, he looked good. And the 2 a.m. thing... huh. He takes a home diuretic, took it this morning, and honestly he's had almost nothing to drink since. If anything surprises you it'll be his pressure." },
        ],
        choices: [
          {
            text: "Check back the real picture and set the plan: \"So let me say back what I've actually got: an 82-systolic dip, an unrepeated lactate of 2.4, and a dry seventy-four-year-old on a diuretic — that's a sepsis watch, not a soft admit. I'm writing him up with q4h vitals, repeat lactate at 20:00, and fluids ahead of his pressure. That match your read?\"",
            next: "h3plan",
            score: { loop: 2, screen: 1 },
            note: "The check-back did two jobs: forced both of you to see the same patient (not the 'soft admit' and the real one in parallel), and converted her disclosures into named orders. 'That match your read?' invites her to correct you — the loop runs both ways.",
          },
          {
            text: "Thank her and move on: \"Good to know — we'll keep an eye on the pressure. Appreciate it, Casey.\"",
            next: "h3vague",
            score: { screen: 1 },
            note: "You extracted the gold and then filed it as small talk. 'Keep an eye on' is the receiving team's version of cheap talk — it commits no order, no threshold, no owner. Information that doesn't become a plan evaporates at shift change.",
          },
          {
            text: "Push on the miss: \"You didn't repeat a lactate of 2.4 on a hypotensive pneumonia? That's a sepsis workup you skipped.\"",
            next: "h3defensive",
            score: { screen: 1 },
            note: "Clinically arguable; strategically expensive. She just rewarded your screens with honest disclosure — and the immediate return on her honesty was an indictment. Senders learn fast what disclosure costs; this one just went up.",
          },
        ],
      },

      h2accept: {
        turns: [
          { who: "narrator", text: "Mr. Abara arrives at 19:30. Admission vitals: 104/62, pulse 96 — unremarkable unless you knew to compare them to something. At 21:15, reviewing the chart to write your note, you find the ED flowsheet: 82/50 at 15:20. One liter bolus. A lactate of 2.4, drawn once, never repeated. A home med list with furosemide on it." },
        ],
        choices: [
          {
            text: "Call Tran back with screens, not blame: \"Casey — Abara. Chart shows a dip to 82 and a lactate I want context on. Sixty seconds: was the dip before or after the antibiotics, how'd he respond to the liter, and anything else that made you look twice, even briefly?\"",
            next: "h2screens",
            score: { screen: 1, tone: 1 },
            note: "The recovery move — and note you found it in the chart, which is where compressed handoffs send you. The call-back costs you a swallow of pride and buys the context no flowsheet carries: what the sender *thought* at the time.",
          },
          {
            text: "Work it from the chart alone — she's slammed, and the numbers are all here anyway.",
            next: "h3chartonly",
            score: {},
            note: "The chart has the data but not the assessment: was 82 a soft cuff, a vagal blip, or the first act of sepsis? Only the person who was in the room holds that — and you've chosen not to ask the one screen that matters.",
          },
        ],
      },

      h2bristle: {
        turns: [
          { who: "tran", text: "A proper SBAR. Sure. Situation: seventy-four-year-old with pneumonia. Background: pneumonia. Assessment: pneumonia. Recommendation: treat the pneumonia. I have eleven in the waiting room and a chest pain rolling in — is there something specific you want to know, or are we doing formats?" },
        ],
        choices: [
          {
            text: "Take the offer — get specific and cheap: \"Something specific, you're right. Three quick ones: worst vitals at any point today; any pending or unrepeated labs; and what would surprise me about him at 2 a.m. Then you're done with me.\"",
            next: "h2screens",
            score: { screen: 1, tone: 2 },
            note: "She told you her price — specificity — and you paid it. 'Is there something specific you want to know' is a door, not a jab; senders under load will almost always answer a pointed question they'd never volunteer.",
          },
          {
            text: "Stand on the standard: \"We're doing formats, because formats are how patients don't fall through. I'll wait.\"",
            next: "h3compliance",
            score: {},
            note: "You won. She'll comply — with a technically complete SBAR optimized to be unimpeachable rather than informative. Compliance under protest is a pooling message: it sounds the same whether or not there's a landmine in the history.",
          },
        ],
      },

      h3plan: {
        turns: [
          { who: "tran", text: "That matches — and put the diuretic in your note, because that's the part I'd have kicked myself over at two in the morning. For what it's worth... 'soft admit' was the waiting room talking, not the patient. Your three questions were faster than my whole report. Send them to me in writing and I'll use them on your colleagues." },
          { who: "narrator", text: "20:00: repeat lactate 3.4. The sepsis pathway starts five hours before it otherwise would have — fluids ahead of the pressure, cultures before the fever, the intensivist consulted electively at 22:00 instead of desperately at 03:00. Mr. Abara's night is, in the end, boring. In the morning his family thanks you for how smoothly it all went, unaware — as families should be — of the fifty-five seconds it almost fit inside." },
        ],
        end: true,
        outcome: "strong",
      },

      h3vague: {
        turns: [
          { who: "narrator", text: "'Keep an eye on the pressure' becomes, in the hands of a night float who never heard the phone call, q8h vitals and a note that says 'stable.' At 02:10 the eye that was being kept finds 78/44 and a lactate of 4.6. The rapid response goes well, as these things go — but the intensivist's first question is the one that stings: 'He dipped in the ED and had a lactate of 2.4 nobody repeated? Who knew that?' You did. It just never became an order." },
        ],
        end: true,
        outcome: "provisional",
      },

      h3defensive: {
        turns: [
          { who: "tran", text: "He responded to fluids and looked great, which is a clinical judgment I'm allowed to make — and made while running a department you can hear in the background. You want the workup done differently, come down and see the waiting room. He's your patient now; the chart has everything." },
          { who: "narrator", text: "She's gone. You have the facts — dip, lactate, diuretic — because your screens got them before your indictment spent them. You write the sepsis-watch orders and the night goes fine. But the next Tran handoff opens with 'it's all in the chart,' and the one after that too: the price of disclosure went up, and she's not the only one who'll pay it." },
        ],
        end: true,
        outcome: "mixed",
      },

      h3chartonly: {
        turns: [
          { who: "narrator", text: "You split the difference with q6h vitals and a morning lactate — reasonable orders for the patient in the note, thinner ones for the patient in the flowsheet. At 02:10 his pressure answers the question you didn't ask: 80/46, lactate 4.6, a rapid response that runs on the information you'd assembled but never metabolized. He does okay. The morning reviewer's summary is one line long and lands like a verdict: 'All the data was present; the synthesis was not.' The synthesis, you now know, was one phone call." },
        ],
        end: true,
        outcome: "mixed",
      },

      h3compliance: {
        turns: [
          { who: "tran", text: "Fine. Situation: Mr. Abara, 74, right-lower-lobe pneumonia, admitted for IV antibiotics. Background: hypertension, hyperlipidemia, meds reconciled per pharmacy. Assessment: community-acquired pneumonia, CURB-65 of 2, hemodynamically stable at present. Recommendation: continue ceftriaxone-azithromycin, routine floor monitoring. Complete?" },
          { who: "narrator", text: "Complete. Technically. Every field filled, every landmine buried: 'hemodynamically stable at present' is doing heroic work over a 15:20 dip to 82, and 'meds reconciled' contains a morning diuretic you'll meet at 02:10 under worse circumstances. You demanded the format and received it — a perfect demonstration that structure without screens transfers compliance, not information." },
        ],
        end: true,
        outcome: "provisional",
      },
    },
    outcomes: {
      strong: {
        label: "The information survived the compression",
        text: "Three engineered screens pulled the dip, the lactate, and the diuretic out of a fifty-five-second handoff; a check-back turned them into orders; and the tone left Tran asking for your questions in writing. That last detail is the repeated game working for you — the sender just got cheaper to screen forever.",
      },
      provisional: {
        label: "Held the data, dropped the transfer",
        text: "Somewhere between the phone and the order set, information that was in the room never became a plan — an un-checked-back disclosure, or a compliant SBAR with the landmines formatted neatly inside. The lesson is the module's core: transfer isn't what was said, it's what both parties know was heard. Replay for the check-back.",
      },
      mixed: {
        label: "The facts arrived; the channel paid",
        text: "You got the information — via indictment or archaeology — and the patient did fine tonight. The cost is structural: a sender who now discloses less, or a synthesis that had to be reassembled at 02:10. Replay and try extracting the same facts at a price the relationship can afford.",
      },
    },
  },

  /* --------------------- Step 4b: Switch Chairs --------------------- */
  switchChairs: {
    simId: "switchChairs",
    title: "Switch Chairs: You Are Dr. Tran",
    learnerRole:
      "The board is red. Eleven in the waiting room, a chest pain rolling in by ambulance, and a resident waiting on you for a procedure sign-off. Mr. Abara — seventy-four, pneumonia, that pressure dip you fixed with a liter three hours ago — is finally ready to go upstairs. Every minute on this phone call is a minute the waiting room grows. Feel what compression feels like when it's rational.",
    personas: [],
    extraSpeakers: {
      hospitalist: { name: "The Accepting Hospitalist", initials: "AH", role: "Hospitalist, Meridian AMC" },
    },
    scoring: {
      dims: [
        { id: "signal", label: "Costly signaling", max: 4, anchor: "Volunteered the expensive, exposing details rather than the smooth headline" },
        { id: "perspective", label: "Perspective fidelity", max: 3, anchor: "Felt the compression pressure honestly instead of role-playing a saint" },
      ],
    },
    start: "t1",
    nodes: {
      t1: {
        turns: [
          { who: "narrator", text: "You dial the admitting line while signing two discharge orders with your other hand. Somewhere behind you, a monitor alarm you've already triaged by sound alone. The hospitalist picks up." },
          { who: "hospitalist", text: "Admitting, go ahead." },
        ],
        choices: [
          {
            text: "Give the headline — it's what the queue can afford: \"Tran, ED. Abara, seventy-four, RLL pneumonia, antibiotics on board, vitals stable, tolerating oral. Soft admit. Bed's requested — good?\"",
            next: "t2headline",
            score: { perspective: 1 },
            note: "Feel how natural that was. Nothing you said is false; the dip is 'resolved,' the lactate 'looked fine,' and the waiting room is a moral argument of its own. Compression isn't laziness — it's triage. That's exactly what makes it dangerous.",
          },
          {
            text: "Pay the cost up front — lead with what would surprise them: \"Tran, ED. Abara, seventy-four, RLL pneumonia — headline first, then two things that aren't in the headline: he dipped to 82 this afternoon and came back with a liter, and his arrival lactate was 2.4, never repeated. He's also on a home diuretic and dry. Watch his pressure tonight.\"",
            next: "t2signal",
            score: { signal: 3 },
            note: "Twenty extra seconds, and every one of them costly: you've exposed your own unrepeated lactate and complicated your 'soft admit.' That's precisely why the receiver can trust it — this message could only come from someone who actually looked.",
          },
          {
            text: "Point at the chart and go: \"Tran, ED. Abara, pneumonia, stable, it's all in the chart and I've got eleven waiting. Bed's requested, thanks.\"",
            next: "t2chart",
            score: {},
            note: "'It's all in the chart' is technically true and functionally false — the chart holds the numbers, not the meaning. From this chair it feels like efficiency. From the other chair, three hours from now, it will feel like archaeology.",
          },
        ],
      },
      t2headline: {
        turns: [
          { who: "hospitalist", text: "Quick screens before you go, then. Worst vitals at any point today, not current. Any labs pending, borderline, or unrepeated. And what's the thing about him that would surprise me at 2 a.m.?" },
          { who: "narrator", text: "There it is — the questions aimed exactly where your compression lives. The dip. The lactate. The diuretic. Answering honestly costs you: it complicates the 'soft admit,' invites follow-ups, maybe a comment about the unrepeated lactate. The waiting room hums behind you." },
        ],
        choices: [
          {
            text: "Open the file — pay full price: \"...Fair. He dipped to 82 around 15:20, responded to a liter, I called it resolved. Lactate 2.4 on arrival, not repeated — he looked good, that's on me if it matters. And the 2 a.m. answer is his home diuretic plus a dry day. Watch the pressure.\"",
            next: "t3honest",
            score: { signal: 2, perspective: 1 },
            note: "Notice what the screens did from this side: they didn't make you more honest — they made dishonesty *detectable*, which changed the price. A good screen doesn't extract truth; it makes truth the cheapest available answer.",
          },
          {
            text: "Smooth it — the queue is louder than the risk: \"Nothing dramatic. Pressure's been fine, labs unremarkable, no surprises — he's about as vanilla as they come. Anything else?\"",
            next: "t3smooth",
            score: {},
            note: "You just answered a designed screen with pooled reassurance — and felt how easy it was. Hold onto this sensation: it's what's happening on the other end of every 'anything else I should know?' you've ever asked.",
          },
        ],
      },
      t2signal: {
        turns: [
          { who: "hospitalist", text: "That's the most useful handoff I've taken this week. Saying it back: dip to 82 fluid-responsive, lactate 2.4 unrepeated, home diuretic, dry — I'm writing him as a sepsis watch, repeat lactate at 20:00, fluids ahead of the pressure. Anything you'd add to that plan from where you sit?" },
        ],
        choices: [
          {
            text: "Close the loop and add the one thing only you know: \"Plan's right. One addition: his dip was before the antibiotics, not after — so if he softens tonight it's the disease, not a drug reaction. That distinction cost me a re-read of my own flowsheet, so take it as a gift.\"",
            next: "t3gift",
            score: { signal: 1, perspective: 1 },
            note: "You gave the receiver the interpretive layer no chart carries — sequence, causality, the thing the person in the room knows. This is what handoffs are actually *for*; everything else is data transfer.",
          },
          {
            text: "Wrap it — you've paid enough: \"Nothing to add. Good plan. Gotta run.\"",
            next: "t3done",
            score: { perspective: 1 },
            note: "Honest and sufficient — the costly signals were already sent. Though notice the small thing left on the table: your read on the timing of the dip lives only in your head, and heads go off shift.",
          },
        ],
      },
      t2chart: {
        turns: [
          { who: "hospitalist", text: "Hold on — thirty seconds, because charts don't do assessments. One question, the only one: at any point today did anything about this man make you look twice? Anything at all." },
        ],
        choices: [
          {
            text: "Give the honest yes: \"...Twice, actually. A pressure dip to 82 that fluids fixed, and a lactate of 2.4 I meant to repeat and didn't. Plus he's on a home diuretic. If he's got a bad night in him, that's the shape of it.\"",
            next: "t3honest",
            score: { signal: 2 },
            note: "One well-built screen — 'did anything make you look twice' — reached past the chart, past the queue, straight into your clinical memory. Note it for your own receiving: the question that asks about the sender's *attention* beats ten that ask about data.",
          },
          {
            text: "Deflect it: \"If anything had made me look twice it'd be in the chart. Eleven in the waiting room, doctor. Bed's requested.\"",
            next: "t3smooth",
            score: {},
            note: "The screen was answerable in fifteen seconds; the deflection took ten. What you saved was not time — it was exposure. Feel the difference, because your receivers never can.",
          },
        ],
      },
      t3honest: {
        turns: [
          { who: "hospitalist", text: "That changes his night — sepsis watch, repeat lactate at eight, fluids ahead of the pressure. And Casey: the unrepeated lactate happens to everyone running a board like yours. It's flagged now because you said it. That's the system working, not you failing." },
          { who: "narrator", text: "You hang up and take the next chart off the rack. Upstairs, five hours from now, a repeat lactate will come back at 3.4 to a team that's ready for it. You'll never hear about it — boring nights don't generate feedback. That's the strange economics of the sender's chair: the cost of the signal is yours, the payoff lands in a room you'll never see, and the only reason to keep paying is knowing the game repeats." },
        ],
        end: true,
        outcome: "strong",
      },
      t3gift: {
        turns: [
          { who: "narrator", text: "The hospitalist reads back the full picture, timing included, and the call ends at ninety seconds — thirty-five over your headline budget. At 02:00, when Mr. Abara's pressure softens exactly as forecast, the night team treats disease instead of chasing a drug reaction, because one sentence about sequence lives in the admission note. You'll never know. The waiting room got its thirty-five seconds back before midnight. The economics of the sender's chair: costs local and immediate, payoffs distant and invisible — which is why only senders who understand the repeated game keep paying." },
        ],
        end: true,
        outcome: "strong",
      },
      t3done: {
        turns: [
          { who: "narrator", text: "The call lands at sixty seconds, signals sent, loop closed by the receiver. The night upstairs goes fine — the plan you enabled catches the lactate rise on schedule. One small thing stays behind in your head and leaves the hospital with you at shift change: the dip came *before* the antibiotics. Tonight it didn't matter. The version of this handoff where it did is the version this course exists for." },
        ],
        end: true,
        outcome: "provisional",
      },
      t3smooth: {
        turns: [
          { who: "narrator", text: "The bed is assigned; the queue advances; the smoothing worked, the way it usually works. At 02:10 — you'll learn this at tomorrow's huddle — Mr. Abara bought himself a rapid response that a repeat lactate at 20:00 would have made unnecessary. The reviewer's timeline will show the receiving team asked you directly, and directly is how you answered. From this chair, you now know exactly how that happened: not a lie, not laziness — a queue, a plausible 'resolved,' and a message format where reassurance was the cheapest word available. The fix for the next Tran isn't a better conscience. It's a handoff where that word costs more.",
          },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "You paid for the signal",
        text: "From the sender's chair you felt the real forces — the queue, the exposure, the plausible 'resolved' — and spent the twenty costly seconds anyway. The transfer question: your own reports upward (to your board, your boss, your committee) — which of them are headlines where the dip and the lactate live in the compressed part?",
      },
      provisional: {
        label: "Signals sent, one left in your head",
        text: "You handed off honestly and efficiently; only the interpretive layer — the thing that exists nowhere but in the sender's memory — stayed behind. That layer is the actual cargo of a handoff. From this chair you now know it's the first thing the queue eats.",
      },
      mixed: {
        label: "The compression won",
        text: "You smoothed past a designed screen and felt how cheap it was — no lie required, just the path of least exposure. That sensation is the module's most valuable export: it's what every sender you'll ever screen is feeling. Replay once and pay the price; then go redesign a handoff format so the next sender doesn't have to be a hero.",
      },
    },
  },

  /* --------------- Step 5: Multidisciplinary Meeting --------------- */
  meeting: {
    simId: "meeting",
    title: "The Handoff Review",
    learnerRole:
      "Two weeks after Mr. Abara's 02:10 rapid response, Dr. Vasquez has asked you to facilitate the case review. In the room: Dr. Tran (ED, arms already crossed), Dr. Kioko (hospitalist medicine's representative), Dr. Moreau (who took the original call as the covering resident), and Vasquez herself, observing. The transcript of the fifty-five-second handoff is on the screen. Your charge: keep this on the system's signaling failures — and walk out with a fix, not a culprit.",
    personas: ["tran", "kioko", "moreau", "vasquez"],
    scoring: {
      dims: [
        { id: "system", label: "System framing", max: 4, anchor: "Kept the room on message design and payoffs, not individual fault" },
        { id: "noBlame", label: "Blame defused", max: 3, anchor: "Protected both sender and receiver, including under provocation" },
        { id: "fix", label: "Mechanism produced", max: 3, anchor: "Left with a concrete signaling protocol, owned by the room" },
      ],
    },
    start: "v1",
    nodes: {
      v1: {
        turns: [
          { who: "narrator", text: "The transcript glows on the screen: fifty-five seconds, timestamped. Tran is reading it with the expression of someone who has already rehearsed this meeting in the shower. Moreau is trying to become smaller. Vasquez nods for you to begin." },
          { who: "kioko", text: "I'll start, since my service caught the landing. A dip to 82, a lactate of 2.4, and a home diuretic — three facts, zero of which crossed in the handoff. I don't especially care whose fault that is. I care that my night team inherited a sepsis with the label 'soft admit' on it." },
        ],
        choices: [
          {
            text: "Frame the game before anyone frames a defendant: \"Let's start where Sam ended — 'whose fault' is the question this meeting is designed to avoid, because it has no useful answer. Here's the useful one: this handoff format let three critical facts pool into the word 'stable.' Fifty-five seconds, all statements true, information lost anyway. I want this room to redesign the message, not grade the messengers.\"",
            next: "v2frame",
            score: { system: 2, noBlame: 1 },
            note: "You named the pooling failure — true statements, lost information — before the room could name a culprit. 'All statements true, information lost anyway' is the sentence that makes blame visibly beside the point.",
          },
          {
            text: "Walk the timeline first: \"Let's establish facts before framing. Dr. Tran — the transcript shows no mention of the dip, the lactate, or the diuretic. Take us through your decision-making on each omission.\"",
            next: "v2trial",
            score: {},
            note: "'Take us through each omission' is a prosecution disguised as a chronology. Whatever Tran says next will be a defense — and rooms that open with defenses close without designs.",
          },
          {
            text: "Start with the quietest chair: \"Before the transcript — Dr. Moreau, you took the call. Walk us through what it's like receiving an admission at 18:42 as the covering resident. What can you ask, and what can't you?\"",
            next: "v2moreau",
            score: { noBlame: 1, system: 1 },
            note: "Opening with the receiver's constraints — 'what can't you ask?' — puts the power gradient on the table without indicting anyone. And the junior-most person speaking first means her account isn't shaped by her attendings' framing.",
          },
        ],
      },

      v2frame: {
        turns: [
          { who: "tran", text: "I appreciate the framing, and I'll test whether it's real. Yes — I compressed. I had eleven in the waiting room, the dip had responded to fluids, and 'resolved' was my clinical judgment. What I want this room to say out loud: the last time I gave a thorough handoff, the receiving team kept me on the phone for forty minutes relitigating my workup. So I learned. You want longer handoffs? Tell me what happens to my board while I give them." },
          { who: "kioko", text: "And I'll say the other half: my residents have learned not to push back on terse handoffs from senior ED attendings, because pushing back gets you a reputation. So the sender compresses, the receiver doesn't screen, and everyone's rational. Sound familiar from someone's committee last month?" },
        ],
        choices: [
          {
            text: "Name the equilibrium and pivot to design: \"It should sound familiar — it's the same structure: both sides responding rationally to payoffs nobody chose. Casey's compression is rational: thoroughness got punished. Lena's silence is rational: screening got punished. So the fix has to change prices, not people. I want the room to design two things: a handoff format where the critical content is the *cheap* part, and a screening norm where asking is free. Proposals.\"",
            next: "v3design",
            score: { system: 2, noBlame: 1 },
            note: "Both confessions got converted into system evidence, neither into a charge. 'Rational responses to payoffs nobody chose' is Module 1's absolution doing Module 2's work.",
          },
          {
            text: "Push back on Tran's framing: \"With respect, Casey — the forty-minute phone call is an anecdote, and the patient in this case nearly coded. We can't let workload stories excuse omissions.\"",
            next: "v2trial",
            score: {},
            note: "She offered you the exact payoff data the redesign needs — thoroughness was punished, so she stopped — and you filed it as an excuse. The room heard which testimony gets respected here; watch what stops being said.",
          },
        ],
      },

      v2moreau: {
        turns: [
          { who: "moreau", text: "What's it like? You have maybe ninety seconds, and the attending on the other end is senior, fast, and audibly busy. There are questions I know I should ask... and asking them feels like an accusation — like saying 'I think you missed something.' So I ask 'anything else I should know,' they say no, and we both get to feel like a handoff happened. That night I wrote 'stable per ED' in my note. I knew it was thin when I wrote it." },
          { who: "tran", text: "...Huh. I'd have answered those questions, for the record. The pointed ones. What I can't do is monologue for ten minutes — but 'what were his worst vitals today' takes me eight seconds, and honestly it's the kind of question that makes me trust the receiver more, not less." },
        ],
        choices: [
          {
            text: "Surface the discovery for the whole room: \"Stop — mark what just happened. Lena believes screening questions read as accusations. Casey just said they read as competence. That mismatch — each side politely protecting the other from a conversation both sides want — is the entire failure, and it's fixable by making the questions *standard* instead of personal. If the screens are printed on the handoff form, nobody's accusing anyone. Let's write them.\"",
            next: "v3design",
            score: { system: 1, noBlame: 1, fix: 1 },
            note: "You caught a live coordination failure inside your information-asymmetry review — both parties wanted the exchange and each priced it wrong. Standardizing the screens is the repricing: protocol converts a challenge into a checklist item.",
          },
          {
            text: "Follow up with Moreau alone: \"Lena — 'I knew it was thin when I wrote it.' Say more about why that note went in anyway.\"",
            next: "v2trial",
            score: {},
            note: "The most junior person in the room just volunteered honest vulnerability, and the facilitator's response was to drill into *her* decision — with three attendings watching. Whatever she says next, every resident who hears about this meeting learns what candor costs.",
          },
        ],
      },

      v2trial: {
        turns: [
          { who: "tran", text: "So it is a trial. Fine — for the record: every statement in that handoff was accurate, the dip had resolved with fluids per my documented assessment, the lactate was a judgment call I'd defend at any M&M in the country, and if this hospital wants to review ED clinical decisions it can staff my department so I have time to narrate them. Are we done?" },
          { who: "narrator", text: "Moreau has stopped making eye contact with anyone. Kioko is checking his phone. Vasquez writes a single line in her notebook and looks at you — the look of someone recalibrating a facilitator's ceiling." },
        ],
        choices: [
          {
            text: "Repair with the pooling frame: \"You'd win that M&M, Casey — that's exactly the point I've let this meeting miss. Every statement was accurate and the information still died in transit, which means accuracy was never the failure. The format let 'stable' mean two different things in two different heads. I'm dropping the timeline. New agenda: redesign the message so the next accurate handoff can't lose the cargo.\"",
            next: "v3design",
            score: { system: 1, noBlame: 2 },
            note: "The recovery conceded everything defensible ('you'd win') while keeping everything essential ('the information still died'). Note the mechanism: you made her rightness the *premise* of the redesign instead of the obstacle to it.",
          },
          {
            text: "Match her: \"We're done when the facts are established, Dr. Tran. A patient nearly died. The transcript speaks for itself.\"",
            next: "v4collapse",
            score: {},
            note: "Transcripts never speak for themselves — that's precisely the signaling lesson of this module — and 'facts established' is trial language for a room you were asked to keep out of court. Vasquez's notebook gains a second line.",
          },
        ],
      },

      v3design: {
        turns: [
          { who: "kioko", text: "Then here's medicine's offer. A one-page handoff spine, sixty seconds by design: the headline, then three forced fields — worst vitals today, any lab pending or unrepeated, and the 2 a.m. line: 'the thing most likely to surprise you tonight is ___.' Sender can't skip them; blank is not an option; 'nothing' is a signed statement, not an omission." },
          { who: "tran", text: "ED signs up for that — sixty seconds is honest, and forced fields protect me as much as you: when I write 'dipped to 82, fluid-responsive,' nobody gets to call it an omission at the next one of these meetings. One condition: the receiver reads it back. Two sentences. If the read-back is wrong, that's the receiver's field to fix. Deal?" },
          { who: "moreau", text: "And can the screens be printed on the form? If 'worst vitals today' is a required field, then asking it isn't me accusing an attending — it's me doing my job. That's... that's the whole thing, honestly. For residents that's the whole thing." },
        ],
        choices: [
          {
            text: "Close it with owners and a test: \"That's the design: three forced fields, the 2 a.m. line, receiver read-back — and the screens printed on the form so asking is nobody's act of courage. Casey and Sam co-own the pilot: two units, thirty days, and we count one thing — how often the forced fields catch something the headline missed. Lena, you're the resident-side reviewer, since you named the real barrier. Dr. Vasquez — sponsorship?\"",
            next: "v5win",
            score: { fix: 2, system: 1 },
            note: "Sender and receiver co-own the mechanism, the junior voice got institutional standing, and the pilot measures signal-capture rather than compliance. Counting 'what the fields caught' makes the protocol prove its own value — which is what keeps protocols alive after the memo fades.",
          },
          {
            text: "Take it to committee: \"Excellent progress. I'll write this up as a recommendation for the forms committee and the medical executive committee to consider next quarter.\"",
            next: "v5slow",
            score: { fix: 1 },
            note: "The room built a working mechanism in four minutes and you routed it into the place where working mechanisms go to become agenda items. Momentum is part of the design — a fix co-owned in the room outruns a recommendation filed from it.",
          },
        ],
      },

      v4collapse: {
        turns: [
          { who: "narrator", text: "Tran leaves at the twenty-minute mark, citing the waiting room, correctly. The meeting produces a finding of 'communication failure' and a corrective action of 'reinforce handoff expectations' — words that will change nothing, assigned to no one, measured never. Afterward, Vasquez catches you in the hallway, unhurried and unsmiling: 'You had the right diagnosis on the screen — a message format that loses cargo — and you spent the hour litigating the messenger. ED and medicine needed a treaty today. They got a verdict nobody accepts. I'd like you to re-run this in two weeks, and I'd like the treaty. Design the meeting the way you'd design the handoff: so the important content can't fall out.'" },
        ],
        choices: [
          {
            text: "Take the second chance and name the redesign: \"Understood — and the design flaw was mine: I opened with a timeline, which made the format's failure look like a person's. Round two opens with the pooling problem — accurate words, lost information — and puts a draft form on the table in the first five minutes: forced fields, the 2 a.m. line, receiver read-back. Tran and Kioko co-author it or it dies.\"",
            next: "v5recover",
            score: { system: 1, fix: 1 },
            note: "Precise self-diagnosis, then the same mechanism the good branch builds — arriving one bruising meeting later. Facilitation, like handoffs, turns out to be message design.",
          },
          {
            text: "Defend the meeting: \"With respect, the review surfaced real accountability gaps that a 'treaty' framing would have papered over.\"",
            next: "v5end-bad",
            score: {},
            note: "The CMO offered you a re-run and a frame; you spent the offer defending the hour she just watched fail. Some feedback is a gift, some is a warning — this was both.",
          },
        ],
      },

      v5win: {
        turns: [
          { who: "vasquez", text: "Sponsored — and noted for the record: this is the first case review I've attended this year that produced a mechanism instead of a memo. Thirty days, two units, count what the fields catch. If the number is what I think it will be, this goes system-wide with all three of your names on it." },
          { who: "narrator", text: "Tran stays four minutes past the meeting's end — a first — sketching the form's layout with Moreau, arguing amiably about where the 2 a.m. line goes. Sender and receiver, designing the channel between them. The transcript of the fifty-five-second handoff is still on the screen; nobody is looking at it anymore. It did its work: not as evidence for a verdict, but as the specimen the redesign was built from." },
        ],
        end: true,
        outcome: "strong",
      },
      v5slow: {
        turns: [
          { who: "narrator", text: "The write-up is good; the forms committee agrees it is good; next quarter's agenda confirms it will be discussed with appropriate thoroughness. Meanwhile Tran, who signed up for a pilot in the room, reads the phrase 'recommended for consideration' and correctly translates it: nothing before spring. The energy the meeting generated — an ED attending volunteering forced fields, a resident naming the courage tax out loud — has a shelf life, and committees are refrigerators only in the sense that things go into them and are forgotten. The design survives. The coalition that would have carried it disperses to other fights." },
        ],
        end: true,
        outcome: "provisional",
      },
      v5recover: {
        turns: [
          { who: "narrator", text: "Round two runs the way round one should have: pooling problem first, draft form on the table by minute five, Tran and Kioko red-penning it into something both services will sign. The pilot launches three weeks later than it needed to — the cost of the first meeting's detour through court. Vasquez, at the close, offers the summary you'll keep: 'Same room, same people, same facts. Different message design. Worth remembering what that implies about every other meeting in this building.'" },
        ],
        end: true,
        outcome: "provisional",
      },
      "v5end-bad": {
        turns: [
          { who: "narrator", text: "Vasquez nods once, the way executives nod when a conversation has ended before its last sentence. The finding stands: 'communication failure, expectations reinforced.' Six weeks later a different patient, a different fifty-five seconds, a different unrepeated lab — and a review meeting you are not asked to facilitate. The system, unredesigned, produces what it is designed to produce. On the schedule, the slot where your re-run would have been is a treaty meeting run by someone else, built around a one-page form with three forced fields and a read-back. The design was always going to win. The only variable was whose name it carried.",
          },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "A treaty, with a mechanism attached",
        text: "You kept two defensive services out of court, converted their confessions into payoff data, caught the live mismatch (screens read as accusations by one side, competence by the other), and left with a co-owned pilot that measures signal capture. The form is the fix; the co-ownership is what keeps it alive.",
      },
      provisional: {
        label: "The design survived; the momentum didn't",
        text: "The room produced the right mechanism — forced fields, the 2 a.m. line, read-back — and somewhere between the room and reality it lost speed: a committee routing, or a first meeting spent in court that a second had to repair. Note the meta-lesson Vasquez keeps offering: meetings are messages, and they pool or separate just like handoffs do.",
      },
      mixed: {
        label: "The verdict nobody accepts",
        text: "The review became the trial everyone feared, the finding changed nothing, and the redesign happened later, elsewhere, under someone else's name. The instructive part: every ingredient of the winning branch was in your room first. Replay and watch what opens up when the transcript is treated as a specimen instead of evidence.",
      },
    },
  },

  /* ---------------------- Step 6: Reflective Debrief ---------------------- */
  debrief: {
    intro:
      "Advocacy-inquiry, as always: what I observed, what I made of it, and then genuine questions. This module's skills are quieter than Module 1's — screens and signals hide inside ordinary sentences — so the reflection matters more than the scoreboard.",
    prompts: [
      {
        id: "d1",
        frame: "Advocacy · Inquiry",
        question:
          "Across the simulations, the turning points were questions, not statements — 'worst vitals at any point,' 'what would surprise me at 2 a.m.,' 'did anything make you look twice.' I noticed the generic version ('anything else I should know?') failed every time it appeared. In your own week, where do you currently ask the generic version — and of whom?",
      },
      {
        id: "d2",
        frame: "Concept transfer",
        question:
          "Map one information asymmetry you live inside: a relationship where the other party knows far more than you (a consultant, a vendor, a direct report, a patient). What cheap talk do you currently accept from them, and what would a costly signal from them look like — one they could only send if the good reality were true?",
      },
      {
        id: "d3",
        frame: "The other chair",
        question:
          "Now the uncomfortable direction: where are you the compressing sender? Think of a report you deliver upward — to a boss, a board, a committee. What's the 'dip to 82' in your current version: the true-but-omitted detail that would survive if the format forced it, and doesn't because the format doesn't?",
      },
    ],
    commitment: {
      id: "commit",
      label: "Commitment to practice",
      question:
        "Write one concrete commitment for the next 30 days: either (a) one recurring exchange where you will replace your generic question with two designed screens — name the exchange and write the screens — or (b) one report you send where you will add the 'surprise line' (the thing most likely to blindside the receiver) as a permanent field. Modules 4 and 8 will ask how the information changed.",
    },
  },
};
