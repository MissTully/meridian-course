/* Module 6 — The Allocation Meeting: Fairness, Ethics, and the Ultimatum
   at the Bedside. Fully authored content. */

export const module6Content = {
  /* ------------------------- Step 1: Topic Video ------------------------- */
  video: {
    vpTitle: "Two Hospitals, One Decision",
    vignette: [
      "During the worst month of the surge, two hospitals eighty miles apart faced the same arithmetic: more patients needing intensive care than beds to give them. Both made allocation decisions. Both, in the end, allocated similarly — the clinical logic of scarcity does not vary much by zip code. What varied was everything else.",
      "Hospital A had spent an unglamorous year before the crisis writing a crisis-standards protocol: explicit criteria, a triage committee separated from bedside clinicians, a review process families could invoke, and community representatives who had marked up three drafts. When the surge came, the decisions were agonizing and the process held. Nurses could tell families how the decision had been made and by whom. The chaplain could sit with the grief without defending the math.",
      "Hospital B improvised. Whoever was on that night decided; criteria drifted between shifts; families with the sharpest elbows or the right connections got second reviews nobody else was offered. The clinical outcomes were, statistically, almost identical to Hospital A's. Everything else diverged: within a year, Hospital B was managing a staff exodus led by ICU nurses who described the same injury in different words — not the deaths, the arbitrariness. Its community trust scores never recovered. Same scarcity, same medicine, same grief. Different process — and process, it turned out, was what everyone remembered.",
    ],
    teaching: [
      {
        h: "The ultimatum game: fairness is a payoff",
        p: "In the ultimatum game, one player proposes how to split a sum; the other accepts (both get paid) or rejects (both get nothing). 'Rational' theory says accept any nonzero offer — something beats nothing. Humans don't. Across hundreds of studies and dozens of cultures, offers below roughly a third get rejected: people pay real money to punish unfairness. The lesson is not that people are irrational; it's that fairness perceptions ARE payoffs — as real as dollars, beds, or survival odds. Any allocation system designed as if only outcomes matter has misread the utility function of every human it touches.",
      },
      {
        h: "Procedural justice versus distributive justice",
        p: "Distributive justice asks: was the outcome fair — who got what? Procedural justice asks: was the process fair — transparent criteria, consistent application, voice for the affected, reviewability? The two are separable, and the second is the one institutions can actually guarantee under scarcity. Hospital A could not promise good outcomes; nobody can allocate their way out of arithmetic. It could promise — and keep — a fair process. Decades of research say people can absorb devastating outcomes from processes they recognize as legitimate, and will not forgive good-enough outcomes delivered arbitrarily.",
      },
      {
        h: "Why pre-commitment is the whole mechanism",
        p: "Transparent criteria adopted in advance do three things ad hoc judgment cannot. They remove the decision from the bedside, protecting the clinician-patient relationship from an impossible dual role. They make decisions consistent across shifts and faces — which is what equity operationally means. And they make the institution auditable: a decision made by published rule can be reviewed, challenged, and improved; a decision made by whoever-was-on-that-night can only be defended or buried. This is Module 1's lesson at its ethical apex: don't ask people to be heroically fair one bed at a time. Build the mechanism that is fair, and let people be human inside it.",
      },
      {
        h: "The communication anchor: delivering decisions people will hate",
        p: "Some conversations have no version where the family feels good. The skill is not softening the outcome — false reassurance is theft of the family's remaining time and trust. The skill is honesty carried by empathy and process: name the decision plainly; name the emotion in the room and legitimize it; be transparent about how and by whom the decision was made; never make the family feel they must advocate their case to you in the hallway. And acknowledge moral distress — including your own. The clinician who says 'this decision follows a protocol, and I hate what this month has asked of all of us' is not weakening the institution. They are letting the family be angry at the scarcity instead of the nurse.",
      },
    ],
  },

  /* ---------------------- Step 2: AI Concept Coach ---------------------- */
  coach: {
    coachName: "The Concept Coach",
    intro:
      "This one works differently. Before we discuss allocation, you and I are going to play the ultimatum game — for real stakes of pride, which are the only stakes I have. I want you to feel the thing before we name it.",
    exchanges: [
      {
        coach:
          "Round one. There's $100 on the table. I propose the split, you accept or reject; reject and neither of us gets anything. My offer: I take $92, you get $8. Eight dollars is strictly better than zero dollars — a rational agent takes it. Your move.",
        options: [
          {
            text: "Reject it — and notice what the rejection is: I'm paying $8 to teach you that I can't be split against this cheaply. The 'irrational' refusal is an investment in every future round.",
            quality: "good",
            feedback:
              "There it is — you just paid real money to punish unfairness, exactly as most humans do, and your reasoning names why the behavior survived every evolutionary filter: rejection is reputation-building, deterrence, and self-respect priced in dollars. Now hold onto the *feeling* of that rejection — the heat of it. Every stakeholder excluded from an allocation process feels precisely that heat, and they reject in the currencies they have: grievances, lawsuits, resignations, votes of no confidence, silence in your next safety huddle.",
          },
          {
            text: "Accept it — $8 beats $0, and refusing money to spite you would be letting emotion tax my wallet.",
            quality: "partial",
            feedback:
              "Perfectly coherent — and congratulations, you're in roughly the 15% of humans who play like economists. Here's why your acceptance still teaches the module's lesson: you had to *override* something to do it. That something — the flash of 'this is insulting' you reasoned past — is present in every family, nurse, and community member your allocation decisions touch, and most of them will not reason past it. Design for the humans you have, not the agents you'd prefer.",
          },
          {
            text: "Negotiate — counter-offer at 50-50, since the split is obviously unfair.",
            quality: "miss",
            feedback:
              "The game doesn't have that move — accept or reject, that's the whole structure — and the missing option is the point. Ultimatum situations are everywhere in healthcare precisely because scarcity forecloses negotiation: the bed exists or it doesn't; the drug allocation arrived or it didn't. When people can't counter-offer, their only remaining move is to accept or to *make the whole arrangement cost you something*. Remember that when you're the one designing take-it-or-leave-it processes.",
          },
        ],
      },
      {
        coach:
          "Round two, and now I'll confess the trick: the ultimatum game isn't about money — it's about process. Suppose I'd said instead: 'A lottery we both agreed to in advance assigned $92 to me and $8 to you.' Same split, same eight dollars. Does your response change, and what does the difference tell you about allocation?",
        options: [
          {
            text: "It changes completely — I'd take the $8 without heat. The split didn't injure me; the *proposal* did. Fair process launders painful outcomes; arbitrary process poisons even acceptable ones. That's why the two hospitals diverged.",
            quality: "good",
            feedback:
              "That's the entire module in one comparison. Identical distributions, opposite receptions — because the lottery had legitimacy: agreed in advance, blind to persons, applied consistently. Hospital A's triage protocol was that lottery, scaled to life and death. And notice the sharp edge of the insight: institutions cannot reliably improve scarcity's *outcomes*, but they hold total control over process legitimacy — which means when a process is experienced as an insult, that injury was a choice.",
          },
          {
            text: "It changes somewhat — the lottery feels better, though I'd still resent walking away with $8 while you hold $92.",
            quality: "partial",
            feedback:
              "Honest, and the residue you're describing is real: procedural justice doesn't erase distributive pain, it makes the pain *bearable and non-toxic* — grief instead of grievance. That distinction is operational, not poetic: grief needs chaplains and time; grievance needs lawyers and produces staff exodus. No process makes losing a parent to triage feel fine. The right process determines what the loss curdles into.",
          },
          {
            text: "It shouldn't change — dressing the same unfair split in procedural clothing is exactly how institutions get away with things.",
            quality: "miss",
            feedback:
              "Keep that suspicion — it's the correct alarm for *illegitimate* process: criteria written to reach predetermined outcomes, committees stacked, 'consultation' after decisions are made. Procedural justice is a real standard, not a costume, and it's testable: were criteria public in advance? Applied blind to status? Was affected voice in the room when the rules were written? Could the decision be reviewed? Processes that pass those tests aren't getting away with anything — they're doing the only thing scarcity permits. Processes that fail them deserve your alarm at full volume.",
          },
        ],
      },
      {
        coach:
          "Last round — the frameworks, in the wild. One ICU bed; two patients. Ms. Adler, 71, better survival odds. Mr. Okafor, 44, worse odds, three young children, and he arrived first. A utilitarian, a deontologist, and a justice-theorist walk into this decision. Give me each framework's answer honestly — including what each one protects that the others miss.",
        options: [
          {
            text: "Utilitarian: Adler — maximize expected lives and life-years; it protects the most total good from scarce resources. Deontological: Okafor arrived first and each person is an end, not a unit — first-come and equal-worth rules protect persons from being dissolved into arithmetic. Justice-based: interrogate the process and the starting line — why did Okafor present later, whose odds reflect prior inequity — protecting the people the other two frameworks quietly disadvantage. None of them is complete; the committee exists because all three are right about something.",
            quality: "good",
            feedback:
              "That's framework fluency — the real thing, not the cartoon versions. And you've landed on the working truth of ethics committees: these aren't three answers competing for correctness; they're three *error-detectors*, each catching a failure mode the others are blind to. Utilitarianism unchecked becomes arithmetic that discards persons; deontology unchecked lets identifiable individuals outweigh statistical ones; justice-reasoning unchecked can paralyze decisions scarcity won't wait for. A defensible protocol shows all three frameworks' fingerprints. You'll be facilitating exactly that negotiation shortly — with four people who each hold one framework sincerely.",
          },
          {
            text: "The utilitarian answer is simply correct — maximizing survival is what medicine is for, and the other frameworks are ways of feeling better about doing worse.",
            quality: "partial",
            feedback:
              "State the strongest counter-case before you settle in: pure survival-maximization, followed consistently, deprioritizes the disabled, the elderly, and every population whose odds carry the sediment of prior discrimination — and it does so with a clean conscience, because the math said so. That's not a feeling problem; it's a legitimacy problem (your community will reject the process — round one taught you what rejection costs) and an epistemics problem (the 'objective' odds encode subjective history). Utilitarian reasoning belongs in the room. Alone in the room, it fails audits it can't even perceive.",
          },
          {
            text: "The frameworks are academic — experienced clinicians integrate all of this intuitively at the bedside, case by case.",
            quality: "miss",
            feedback:
              "Clinical intuition is real expertise — about clinical questions. But fifty years of research on ad hoc allocation says what 'integrated intuition' produces under scarcity: inconsistency between shifts, halo effects for articulate families, and disparities that mirror every bias the intuiters don't know they have. That's Hospital B, described charitably. The frameworks aren't academic; they're how a committee makes its values *visible enough to be criticized* — which is the only known method for catching the errors intuition commits invisibly.",
          },
        ],
      },
    ],
    close:
      "You've felt the rejection heat, separated process from outcome, and can argue all three frameworks against yourself. What remains is the part no coach can simulate: saying the decision out loud, to a person who loves the patient, without armor. That's next.",
  },

  /* ------------------- Step 3: Branching Case with MCQ ------------------- */
  mcqCase: {
    title: "One Bed, Two Patients",
    narrative: [
      "Meridian Health, week three of a regional respiratory surge. Crisis standards of care were activated system-wide on Monday under the protocol the ethics committee spent last year writing: published scoring criteria, a triage team of three (an intensivist not involved in either patient's care, a nursing supervisor, an ethicist on call) making allocation decisions away from the bedside, mandatory documentation, and a rapid-review track any family or clinician can invoke once.",
      "Tonight the protocol meets its hardest test. One ICU bed. Two patients in the emergency department who need it: Ms. Ruth Adler, 71, retired teacher, respiratory failure with a triage score indicating substantially better short-term survival odds; and Mr. Emmanuel Okafor, 44, warehouse supervisor and father of three, who presented four hours earlier, now deteriorating, with a lower score driven partly by late presentation — he spent two days working through symptoms he couldn't afford to take off for. The triage team applies the protocol: the bed goes to Ms. Adler. Mr. Okafor moves to maximal supportive care in the ED with transfer-search underway. His brother is in the family room, and someone must now tell him.",
    ],
    questions: [
      {
        id: "m6q1",
        stem: "The attending intensivist, Dr. Kioko, was deliberately excluded from tonight's triage decision even though he knows both patients' physiology best. What is the strongest justification for that design choice?",
        tags: ["Procedural justice", "Mechanism design", "Role separation"],
        options: [
          {
            key: "A",
            text: "Separating the triage role from the treating role protects both decisions: the allocation stays consistent and criteria-driven rather than bent by bedside attachment, and the treating clinician can remain the patient's undivided advocate — a role the family must be able to trust.",
            correct: true,
            feedback:
              "Right, and note that this protects Kioko as much as the patients: a clinician who must both fight for a patient and ration against them holds an impossible dual role that produces both worse decisions and moral injury. The design also has a signaling function (Module 2's lens): when the family asks 'did our doctor give up on him?', the honest answer is 'your doctor is doing everything, and the bed decision was made by a separate team under published criteria' — a sentence that keeps the therapeutic relationship alive inside a devastating outcome.",
          },
          {
            key: "B",
            text: "It reduces legal exposure: diffusing responsibility across a committee makes any single decision harder to litigate against an individual physician.",
            feedback:
              "Liability diffusion is a real side effect and a corrosive justification — a process designed primarily to shield decision-makers will drift toward opacity, which is procedural justice inverted. Karen Lindqvist herself would tell you the better legal protection is the legitimate process itself: documented criteria, consistent application, reviewability. Defensibility should be a byproduct of fairness, never its purpose.",
          },
          {
            key: "C",
            text: "It isn't well justified — excluding the physician with the best clinical knowledge trades decision quality for procedural neatness.",
            feedback:
              "The triage team isn't deprived of clinical data — scores, trajectories, and treating-team input all flow to them; what's excluded is the *attachment*, not the information. And the 'best clinical knowledge' argument cuts the other way under scarcity: the treating intensivist is precisely the person least able to weigh his own patient against a stranger's, through no failing of character. That's not a knowledge problem; it's a conflict-of-interest structure, and we don't solve those with virtue.",
          },
          {
            key: "D",
            text: "The exclusion matters mainly for appearances: the community is more likely to accept decisions that look independent.",
            feedback:
              "You've noticed the legitimacy function and then filed it under 'mere appearances' — but round one of the ultimatum game priced what legitimacy is worth, and it isn't cosmetic. Still, this answer misses the operational half: role separation changes actual decisions (consistency across shifts, criteria over charisma) and actually protects the treating relationship. It looks independent because it is.",
          },
        ],
      },
      {
        id: "m6q2",
        stem: "Mr. Okafor's lower score is driven partly by late presentation — he couldn't afford two days off work. A justice-oriented committee member argues the protocol is 'laundering inequity through objective criteria.' What is the most defensible response to this critique?",
        tags: ["Equity", "Justice frameworks", "Protocol design"],
        options: [
          {
            key: "A",
            text: "Take it seriously as a design problem with named remedies: audit triage scores for disparate impact, correct criteria that encode access barriers rather than physiology, add equity weighting or reserve mechanisms where lawful and clinically coherent — while being honest that tonight's decision must follow tonight's published protocol, and the critique's power goes into revising it.",
            correct: true,
            feedback:
              "This is the mature position: the critique is *correct* — 'objective' criteria can absolutely encode upstream injustice — and the remedy is protocol revision with equity audits, not bedside improvisation. Why not fix it tonight, for this patient? Because ad hoc deviation, even in mercy's direction, is Hospital B: the next shift's team deviates in a different direction, and consistency — which is most of what equity means operationally — dies first. The protocol must bend at the revision table, where the bending applies to everyone.",
          },
          {
            key: "B",
            text: "Reject the critique: triage scores measure physiology, not social circumstances, and importing social factors into clinical criteria is exactly the subjectivity the protocol exists to prevent.",
            feedback:
              "The second half has force — ad hoc social judgments at the bedside are a bias engine. But the first half is empirically wrong: Okafor's physiology *is* his social circumstance, two days of untreated progression because sick leave wasn't affordable. Scores measure bodies, and bodies keep score of inequity. A protocol that refuses to know this isn't neutral; it's systematically wrong in one direction, with paperwork.",
          },
          {
            key: "C",
            text: "Accept it fully: the triage team should exercise discretion tonight and weight Mr. Okafor's circumstances in his favor.",
            feedback:
              "Feel the pull of this — it's compassion, and it's the road to Hospital B. Tonight's team weights for late presentation; Thursday's team weights for the mother of four; next week's weights for the beloved local coach — each deviation defensible, the sum indistinguishable from arbitrariness, and the burden of that arbitrariness landing (the research is unambiguous) on whoever advocates least effectively. Discretion at the bedside is how equity dies of a thousand mercies. Channel the compassion into the revision process, where it scales.",
          },
          {
            key: "D",
            text: "Acknowledge it but conclude nothing can be done: no criteria will ever be perfectly just, and the perfect must not become the enemy of the workable.",
            feedback:
              "Half a truth curdling into an excuse. Yes, no protocol achieves perfect justice — and 'imperfectable' does not mean 'unimprovable': disparate-impact audits are standard practice, criteria can be corrected, reserve mechanisms exist in real crisis-standards frameworks. The committee member didn't demand perfection; they identified a specific, fixable laundering mechanism. 'Nothing can be done' is what institutions say when the something that can be done is work.",
          },
        ],
      },
      {
        id: "m6q3",
        stem: "You are assigned to tell Mr. Okafor's brother. Which opening is most consistent with this module's framework?",
        tags: ["Delivering decisions", "Honesty", "Empathy markers"],
        options: [
          {
            key: "A",
            text: "Sit down, at eye level: 'Mr. Okafor, I'm here to talk with you about your brother's care, and I have hard news about the intensive care bed. I'm going to tell you exactly what was decided and how. Before I do — what have you been told so far tonight?'",
            correct: true,
            feedback:
              "Every element is load-bearing: seated and unhurried (the setting is a message); a warning shot ('hard news') so the mind can brace; a commitment to full transparency about decision and process; and the elicitation question — which respects what he already knows, surfaces misconceptions before they collide with the news, and gives him the first speaking turn in a conversation where he will otherwise feel entirely acted upon. Voice is a procedural-justice element, and this opening grants it in the first thirty seconds.",
          },
          {
            key: "B",
            text: "'Your brother is very sick, and we're doing absolutely everything we can for him right here in the ED. Our team is fighting for him — I want you to know he's in excellent hands.'",
            feedback:
              "Warm, and it commits the module's cardinal sin: it isn't the truth he needs. 'Everything we can right here' conceals the decision that was made — that the ICU bed went elsewhere — and when he learns it (he will; families always do), every reassuring word retroactively becomes evidence of concealment. False reassurance isn't kindness; it's borrowing comfort now at compound interest against the trust you'll need for every conversation after.",
          },
          {
            key: "C",
            text: "'I need to explain the triage protocol to you. Under crisis standards of care, a scoring system determines ICU allocation, and I want to walk you through the criteria so you understand the decision was objective.'",
            feedback:
              "Everything here is true and the order is backwards: leading with the mechanism before the human news makes the protocol sound like a shield you're raising — because it is one. He hears: 'a system did this, please direct your grief to the system.' The process transparency belongs in this conversation, a few minutes in, *after* the news has landed and the emotion has been named. Sequence is not a detail; it's the difference between transparency and deflection.",
          },
          {
            key: "D",
            text: "Bring Dr. Kioko to deliver the news together, since the family knows and trusts the treating physician best.",
            feedback:
              "Half right — continuity and trust matter, and Kioko may well join. But note what the pairing does if unmanaged: it re-fuses the roles the protocol carefully separated, positioning the treating physician as co-owner of the allocation decision. The cleaner structure: you deliver the allocation news transparently; Kioko remains the brother's ally in his brother's care — the person still unambiguously fighting for Emmanuel. Preserve for the family the one relationship scarcity hasn't touched.",
          },
        ],
      },
      {
        id: "m6q4",
        stem: "The brother listens, then says, quietly: 'So the older lady gets the bed because a spreadsheet said so. My brother has three kids. You're telling me the committee's math is worth more than three children keeping their father.' What is the best response?",
        tags: ["Moral distress", "Legitimizing emotion", "Transparency under fire"],
        options: [
          {
            key: "A",
            text: "'You're asking exactly the right question, and I won't hide behind the math. The criteria are about survival chances, and they deliberately don't count whether someone has children — because the moment we rank families' worth, the people with the least standing always lose. I know that answer doesn't help tonight. What's happening to your family is wrong in a way no protocol can make right, and you are allowed to be furious at all of it — including at me.'",
            correct: true,
            feedback:
              "Notice what this does under maximum pressure: answers the actual question honestly (yes, the criteria exclude dependents — and here is the ethical reasoning why); refuses both defensiveness and capitulation; legitimizes the fury explicitly, including its aim at you; and separates 'this decision is procedurally sound' from 'this situation is acceptable' — both of which are true. You cannot make him whole. You can decline to make him also fight an institution that won't look at him. That is the whole job tonight.",
          },
          {
            key: "B",
            text: "'I hear you, and I'll personally request the rapid review — you deserve to have the decision looked at again.'",
            feedback:
              "The rapid-review track exists and he's entitled to hear about it — as information, presented neutrally. *Volunteering to champion it* in this moment is different: it implies you think the decision was wrong (do you?), converts his grief into a procedural campaign with near-certain disappointment at the end, and teaches every family that the protocol bends for whoever the messenger pities most. Tell him his rights. Don't spend his hope to relieve your own distress.",
          },
          {
            key: "C",
            text: "'I understand your anger, but the criteria were developed by ethicists and physicians precisely to be fair to everyone — the process treated your brother exactly as it would treat anyone.'",
            feedback:
              "True, and hear how it lands: his brother is dying and you have answered 'the process is fine.' Institutional self-defense in the presence of fresh grief converts a grieving man into an adversary of the institution — the exact conversion Hospital B ran at scale. The process's soundness is real; deploying it as a rebuttal to a brother's anguish is how sound processes acquire enemies. Defend the process at the committee. In the family room, defend his right to hate it.",
          },
          {
            key: "D",
            text: "Say little: 'I'm so sorry. I can't imagine what you're feeling right now' — and let silence do the work; there are no words for this.",
            feedback:
              "Silence and presence are real instruments — after honesty, not instead of it. He asked you a direct, substantive question: does the math outrank his brother's children? Meeting a real question with pure condolence tells him the institution won't engage him even now — a soft-spoken version of no-voice, which is the procedural injury that turns grief into grievance. Answer him. Then let the silence hold what the answer can't.",
          },
        ],
      },
      {
        id: "m6q5",
        stem: "Six months later, the surge over, the committee conducts its retrospective. Which finding would most indicate that the protocol succeeded as a piece of procedural justice — beyond its clinical metrics?",
        tags: ["Legitimacy", "Institutional trust", "Retrospective"],
        options: [
          {
            key: "A",
            text: "Staff and families describe the decisions as devastating but not arbitrary; ICU staff moral-injury indicators and turnover stayed near baseline; the disparate-impact audit was run, published, and produced two criteria revisions; and community representatives asked for a standing seat in the next revision cycle.",
            correct: true,
            feedback:
              "Each element is a legitimacy vital-sign: 'devastating but not arbitrary' is the exact phrase procedural justice earns when it works (nobody promised painless); stable moral-injury and turnover numbers are Hospital A's signature — process protecting the people inside it; a published audit with revisions proves the protocol is a living mechanism rather than a shield; and the community asking for *more* seats is the ultimatum game's opposite outcome — stakeholders investing in a process instead of rejecting it. Note what's absent from the list: outcome statistics. The surge's outcomes were mostly arithmetic. The process results were chosen.",
          },
          {
            key: "B",
            text: "Zero lawsuits were filed over allocation decisions during the surge period.",
            feedback:
              "A pleasant fact and a weak vital-sign: litigation rates measure legal exposure, resignation, and access to lawyers at least as much as felt legitimacy — Hospital B might match it while hemorrhaging nurses. Worse, adopting 'no lawsuits' as the success metric quietly reorients the protocol toward defensibility, which is the corrosion m6q1 warned about. Measure what you actually care about; legal quiet is a byproduct, not a goal.",
          },
          {
            key: "C",
            text: "Analysis showed the protocol's allocations matched what experienced intensivists would have chosen ad hoc in 94% of cases.",
            feedback:
              "Genuinely interesting, and it measures the wrong axis. High concordance says the *distributions* were similar — but Hospital A and Hospital B had similar distributions too; that was the vignette's whole point. The protocol's value lives in the 6% (where attachment and bias would have bent decisions) and in everything concordance can't see: consistency across shifts, the family room conversations, the nurse who could say how the decision was made. Process metrics for a process intervention.",
          },
          {
            key: "D",
            text: "The protocol was invoked without modification throughout the surge — no revisions were needed under pressure.",
            feedback:
              "Stability under pressure has some value (mid-crisis rule changes are legitimacy hazards — moving goalposts), but 'never revised' cuts both ways: it may mean robust design, or it may mean the feedback channels were dead. Given the known equity concern in the Okafor pattern, an unrevised protocol should raise a question, not a toast. The healthiest sign is A's version: stable during, honestly audited after, revised where the audit bit.",
          },
        ],
      },
    ],
  },

  /* -------------------- Step 4: One-on-One Simulation -------------------- */
  oneOnOne: {
    simId: "oneOnOne",
    title: "The Family Room",
    learnerRole:
      "You are the house supervisor on the night the protocol allocated the last ICU bed to Ms. Adler. Terrence Okafor — Emmanuel's older brother, the family's decision-maker while Emmanuel's wife is home with the children — is waiting in the family room. He knows his brother is very sick. He does not yet know about the bed. Your charge from this module: honesty without armor, empathy without false reassurance, transparency about process without hiding behind it — and his right to be heard, even though nothing he says tonight can change the allocation.",
    personas: [],
    extraSpeakers: {
      terrence: { name: "Terrence Okafor", initials: "TO", role: "Emmanuel's brother" },
    },
    scoring: {
      dims: [
        { id: "honesty", label: "Honesty without armor", max: 4, anchor: "The decision named plainly; no concealment, no protocol-shield" },
        { id: "empathy", label: "Empathy markers", max: 3, anchor: "Emotion named and legitimized; presence held under fire" },
        { id: "process", label: "Process transparency", max: 3, anchor: "How and by whom, offered honestly — with rights, not hope" },
      ],
    },
    start: "t1",
    nodes: {
      t1: {
        turns: [
          { who: "narrator", text: "The family room. Bad coffee, worse chairs, a clock that seems louder than it should be. Terrence Okafor stands when you enter — a big man holding himself very carefully, the way people do when they've decided in advance not to fall apart." },
          { who: "terrence", text: "You're the supervisor? They said someone was coming. Just — before you start. Manny's my little brother. Whatever it is, I'd rather have it straight. Our family doesn't do well with runaround." },
        ],
        choices: [
          {
            text: "Sit first, then give it straight with a warning shot: \"Then straight is what you'll get, Mr. Okafor — sit with me. I have hard news about the intensive care bed, and I'm going to tell you exactly what was decided and how. First — tell me what you've heard tonight, so I don't talk past you.\"",
            next: "t2ground",
            score: { honesty: 1, empathy: 1 },
            note: "You honored his stated terms ('straight'), braced him, committed to transparency — and still gave him the first real turn. The elicitation question isn't stalling; it's the last moment of voice he gets before the news changes the room.",
          },
          {
            text: "Ease toward it through his brother's condition: \"Of course. Let me start with where Emmanuel is medically: he's seriously ill, and the team downstairs is giving him everything we have. The next hours matter a great deal...\"",
            next: "t2drift",
            score: {},
            note: "Every word true — and he asked for straight, and the bed decision is sitting behind your clinical summary like furniture under a sheet. Watch how the conversation bends when he senses its shape before you name it.",
          },
          {
            text: "Lead with the system so the decision arrives pre-explained: \"I will. Some context first: we're operating under crisis standards of care — a protocol with published criteria, decisions made by an independent triage team. It's important you understand the framework, because a decision was made tonight under it.\"",
            next: "t2shield",
            score: { process: 1 },
            note: "The transparency is real and the sequence is armor: framework-first means the news arrives wearing a committee's uniform. He will hear the next sentence as coming from a system built to justify itself — because that's the order you chose.",
          },
        ],
      },

      t2ground: {
        turns: [
          { who: "terrence", text: "What I've heard. They said his oxygen keeps dropping. A nurse — kind lady — said something about 'seeing about a bed upstairs' maybe two hours ago, and then nobody said anything else about it, and I've been watching that door since. So when you say hard news about the bed... say it. Is my brother getting the ICU or not?" },
        ],
        choices: [
          {
            text: "Say it whole, in three sentences: \"No — tonight he is not, and I'm sorry to bring you that. There was one bed and two patients who needed it, and under the criteria — which weigh short-term survival chances — the bed went to the other patient. Emmanuel is getting the highest level of care we can give in the ED, the team fighting for him hasn't changed, and we are actively searching for an ICU transfer to another hospital right now.\"",
            next: "t3land",
            score: { honesty: 3 },
            note: "The answer, then the mechanism, then what remains true — with no euphemism swallowing the 'no.' Note what you didn't do: soften 'no' into 'not yet' or 'we're still hoping.' The transfer search is real and belongs in the third sentence, not disguised as the first.",
          },
          {
            text: "Answer with the softer sequence: \"We're doing everything possible to get him the right level of care. There's a transfer search underway to find him an ICU bed at another facility — that's active as we speak.\"",
            next: "t3dodge",
            score: {},
            note: "Technically accurate, structurally evasive: you answered 'is he getting the ICU' with the consolation prize, leaving him to deduce the 'no' — which means he'll experience discovering it rather than being told. Families remember who made them do the deducing.",
          },
        ],
      },

      t2drift: {
        turns: [
          { who: "terrence", text: "You're doing the thing. The runaround. Look — I drive freight dispatch, I've told a hundred drivers' wives about accidents, I know what it sounds like when someone's warming up to bad news. The nurse said 'seeing about a bed' two hours ago and went quiet. So skip my brother's oxygen numbers and tell me about the bed." },
        ],
        choices: [
          {
            text: "Let him correct you, and pay him the directness he asked for: \"You're right, and you deserve better than a warm-up. The bed: there was one ICU bed tonight and two patients who needed it. Under our crisis protocol's criteria, it went to the other patient. Emmanuel is not going upstairs tonight — he's getting maximal care in the ED, and we're searching for a transfer now. Ask me anything about how that decision was made. You're owed all of it.\"",
            next: "t3land",
            score: { honesty: 2, empathy: 1 },
            note: "He named the runaround; you stopped running instantly and without defending the warm-up. 'You're owed all of it' converts the transparency from concession to entitlement — his, which is what procedural voice means in a family room.",
          },
          {
            text: "Defend the sequence gently: \"It's not runaround, Mr. Okafor — his clinical picture genuinely matters for understanding the bed situation. If you'll let me finish the medical context, the rest will make more sense.\"",
            next: "t3shieldup",
            score: {},
            note: "He told you his family's history with institutional runaround and you told him he was misreading you. Even said kindly, 'let me finish my framing' is a contest for control of the conversation — a contest the institution always wins and always pays for.",
          },
        ],
      },

      t2shield: {
        turns: [
          { who: "terrence", text: "Stop. Protocols, criteria, independent teams — mister, I've sat in rooms where men in ties explained frameworks to me before. The framework talk always comes before the part where my family loses something. So let's skip to that part. What did your committee decide about my brother?" },
        ],
        choices: [
          {
            text: "Drop the shield and give him the part: \"You're right — the framework was me going sideways at hard news, and you called it. Here it is straight: one bed, two patients. The triage team applied the criteria and the bed went to the other patient. Emmanuel stays in the ED tonight with everything we can give him there, and a transfer search is running now. The framework matters only because you're entitled to see exactly how this was decided — and I'll walk you through every step of it, but only when you want it.\"",
            next: "t3land",
            score: { honesty: 2, process: 1 },
            note: "'The framework was me going sideways' — naming your own armor is the costliest and fastest repair available. And the re-sequencing at the end is exactly right: process transparency as his entitlement on his timeline, not your umbrella on yours.",
          },
          {
            text: "Complete the framework first — it's genuinely for his benefit: \"I understand the impatience, and I promise this matters: the criteria are published, the team is independent of Emmanuel's doctors, and every decision is documented and reviewable. Knowing that, here's tonight's decision...\"",
            next: "t3shieldup",
            score: { process: 1 },
            note: "All true, all armor. 'Knowing that, here's the decision' asks him to pre-accept the process before hearing what it did to his family — the emotional equivalent of a liability waiver. The information survives; the trust it needed doesn't.",
          },
        ],
      },

      t3land: {
        turns: [
          { who: "narrator", text: "He doesn't move for a long moment. When he speaks, his voice is lower, and the careful hold has cracks in it." },
          { who: "terrence", text: "He's got three kids. Did your criteria know that? Amara's seven. She made him a card this morning — it's in his jacket downstairs. So explain it to me, supervisor. Explain how the math works where the lady with no little kids at home gets the bed and the father of three gets a... a search." },
        ],
        choices: [
          {
            text: "Answer the real question, then stand in the fire: \"I'll answer it exactly, because you're owed the truth even where it's hard: no — the criteria don't count children. They weigh survival chances, deliberately and only, because the day we start ranking whose family needs them more, the ranking will be done by people like me about people like your brother, and history says how that goes. I know that reasoning is worth nothing to Amara tonight. What's happening to your family is a wrong no protocol makes right — and your anger belongs everywhere it lands, including on me.\"",
            next: "t4fire",
            score: { honesty: 1, empathy: 2 },
            note: "The hardest answer in the module, given whole: the true 'no,' the ethical reasoning behind it, the immediate concession that reasoning feeds no one tonight, and the explicit license for his anger — aimed anywhere, including at you. Nothing was softened and nothing was defended. That combination is the skill.",
          },
          {
            text: "Bend toward comfort: \"I hear you, and for what it's worth — the search for a transfer bed is going well. There are two hospitals we're very hopeful about. Let's focus on getting him there.\"",
            next: "t4hope",
            score: {},
            note: "'Very hopeful' — is that true, at 2 a.m. in a regional surge? You just spent hope you may not have, to escape a question you could have answered. If the transfer stalls, this sentence becomes the second betrayal.",
          },
          {
            text: "Give him the process rights: \"That question deserves a real forum, not just my answer: you have the right to a rapid review of the decision — one review, by people who weren't on tonight's team. I can start it now if you want it. I'll also tell you honestly: reviews confirm the original decision far more often than not, and I won't pretend otherwise.\"",
            next: "t4review",
            score: { process: 2 },
            note: "The rights told straight, with the base rate attached — information, not hope. Watch the difference between this and championing the review: you handed him a lever and its true odds, and left the pulling to him. That's voice without theater.",
          },
        ],
      },

      t3dodge: {
        turns: [
          { who: "terrence", text: "Another facility. So the answer to 'is he getting the ICU' — the ICU upstairs, in this building, ninety seconds from where he's lying — is no. And you were going to let me figure that out from the word 'transfer.' Who got the bed? Somebody got it. Say the whole thing, supervisor, or send in someone who will." },
        ],
        choices: [
          {
            text: "Say the whole thing, and own the flinch: \"You're right — I gave you the soft half first, and that's on me, not on any rule. The whole thing: one bed, two patients tonight. Under the triage criteria, which weigh survival chances, the bed went to the other patient. That decision was made by an independent team, it's documented, and you're entitled to have every step of it explained. And your brother's team in the ED hasn't stopped fighting for one second.\"",
            next: "t3land",
            score: { honesty: 2 },
            note: "The recovery: naming the flinch as yours ('that's on me') rather than procedural. He offered you a second chance at straightness — some families do, exactly once — and you spent it correctly.",
          },
          {
            text: "Keep the frame on the future: \"What matters now is where he gets care, not which building it's in. The transfer network is strong and our ED can bridge him. Let's keep our energy on next steps.\"",
            next: "t5broken",
            score: {},
            note: "'What matters is not the thing you asked about' — said to a man who explicitly demanded the whole thing twice. The conversation's trust just ended; everything after this is him managing you, and he knows how.",
          },
        ],
      },

      t3shieldup: {
        turns: [
          { who: "narrator", text: "He sits back, and something behind his face closes for business. When he speaks again it's flat, procedural — the voice of a man who has concluded he's talking to an institution and adjusted accordingly." },
          { who: "terrence", text: "Fine. Finish the framework. Then I want three things in writing: the decision, the criteria, and the name of whoever I talk to about a review. My cousin's a paralegal. We'll read it as a family." },
        ],
        choices: [
          {
            text: "Meet the closure with everything he asked for, plus the sentence that matters: \"You'll have all three in writing within the hour — that's your right, not a favor. And Mr. Okafor... you came in asking for straight and I gave you framework. That was me protecting myself, and you and your family deserved better on the worst night of your year. The decision: one bed, two patients; under the survival criteria it went to the other patient. I'm sorry. For the decision's weight, and for how I carried it.\"",
            next: "t4fire",
            score: { honesty: 1, empathy: 1, process: 1 },
            note: "The paralegal sentence was the relationship's death notice — and you answered it with documents-as-rights plus a costly, specific apology for your own armor. Sometimes the closed door reopens a crack. It did here; what walks through it decides the rest.",
          },
          {
            text: "Process the request: \"Of course — I'll have documentation prepared, and the patient-relations office opens at eight. They handle review requests and can walk your family through everything.\"",
            next: "t5broken",
            score: { process: 1 },
            note: "Rights honored, human gone: you met 'my cousin's a paralegal' with 'patient relations opens at eight' — institution answering institution. Correct on paper; on this night, in this room, paper was never the assignment.",
          },
        ],
      },

      t4fire: {
        turns: [
          { who: "narrator", text: "And then the careful hold breaks — not loudly. He puts his face in his hands, and when he comes up his eyes are wet and his voice is barely working." },
          { who: "terrence", text: "He worked through it. Two days, coughing in the truck, because Amara's school fees... he kept saying 'weekend, I'll rest on the weekend.' If he'd come in Tuesday, would the math — would your score have been different? Did being poor cost my brother the bed? Tell me the truth. You've been telling it so far." },
        ],
        choices: [
          {
            text: "The truth, at full price: \"I'll keep telling it: maybe. Presenting earlier could have meant a better score — I can't know for certain, and I won't hide behind that uncertainty: the pattern you're describing is real, it's not your brother's failure, and it is the single hardest question about systems like ours. I'm going to make sure tonight's case is in front of the committee that revises these criteria — that's a promise about the future, not a comfort about tonight, and I know the difference. Right now: can I take you to see him?\"",
            next: "t5whole",
            score: { honesty: 1, empathy: 1, process: 1 },
            note: "'Maybe' — the bravest word available, where every institutional instinct screams for 'the score reflects many factors.' You confirmed the injustice pattern without pretending certainty, made only the promise you can keep (the revision pipeline), labeled it honestly as no comfort, and then turned toward the thing that matters: the brothers, and the time that remains.",
          },
          {
            text: "Protect him from the answer: \"I don't think we can know that, and I'd hate for your family to carry that question. The scores reflect complex physiology — please don't put this on how he worked or when he came in. He did nothing wrong.\"",
            next: "t5soft",
            score: { empathy: 1 },
            note: "'He did nothing wrong' is true and worth saying. But 'we can't know' when the honest answer is 'maybe' is a mercy-lie, and he's been reading you accurately all night. The question will not evaporate because you declined it — it will just find lawyers, or journalists, or a community meeting, having learned here that the institution flinches from it.",
          },
        ],
      },

      t4hope: {
        turns: [
          { who: "narrator", text: "03:40. The transfer search comes back: the two 'very hopeful' hospitals are full; the nearest accepting ICU is four hours by ground and Emmanuel is not stable for it. You have to go back into the family room and take back the hope you issued." },
          { who: "terrence", text: "Four hours. Not stable. So the 'going well' from before — the two hospitals you were hopeful about — that was what? Something to get you out of the room? I have been sitting here doing math on your hope, supervisor. Calling his wife telling her it's looking up. What do I un-tell her now?" },
        ],
        choices: [
          {
            text: "Take the full weight of it: \"You un-tell her nothing — I do it, with you on the line if you'll let me, because the false weather report was mine, not yours to correct. And you deserve to hear me say it plainly: I gave you hope because your first question was too hard for me in that moment, and that was my failure in a room where you'd asked me only for straightness. From this second forward: no forecasts, only facts, and every fact as I get it. The first one is — his team wants you at the bedside. Now would be a good time.\"",
            next: "t5repair",
            score: { honesty: 2, empathy: 1 },
            note: "The repair at maximum cost: owning the motive ('too hard for me'), volunteering to carry the un-telling to his wife, and re-contracting the terms — facts, not forecasts. The hope debt can't be canceled, but this is what restructuring it honestly looks like.",
          },
          {
            text: "Reframe the earlier statement: \"The situation was accurately hopeful when I said it — surge conditions change hourly, and no one could have predicted both hospitals filling. This isn't anyone's failure; it's the crisis.\"",
            next: "t5broken",
            score: {},
            note: "'Accurately hopeful' — he will remember that phrase, and repeat it, in rooms you won't be in. The crisis is real; the forecast was still a choice, made to escape a question, and 'no one could have predicted' defends the choice instead of the family.",
          },
        ],
      },

      t4review: {
        turns: [
          { who: "terrence", text: "Reviews confirm the original 'far more often than not.' At least you say the odds out loud... Okay. No review — I'm not spending Manny's night on a long shot while his kids are asleep not knowing. But I want the other thing, whatever it's called: when your committee looks back at this month, at these criteria — the working-through-it thing, the late-because-of-money thing — I want somebody at that table saying my brother's name. Can you promise that? Don't promise it if you can't." },
        ],
        choices: [
          {
            text: "Promise exactly that, and no more: \"That promise I can make, and precisely: Emmanuel's case goes to the criteria-revision review with the late-presentation pattern flagged in writing — I file it, my name on it, and the committee includes community members who have pushed on exactly this. What I can't promise is what they decide. His name will be in the room. That much is mine to give, and it's given.\"",
            next: "t5whole",
            score: { process: 1, honesty: 1 },
            note: "A promise scoped to your actual authority — filed, flagged, named, witnessed — with its limit stated in the same breath. He asked you not to promise beyond your reach; you didn't. Among everything tonight took from him, you left him one thing that will verifiably happen.",
          },
          {
            text: "Promise generously: \"I promise — this is going to change how those criteria work. Cases like Emmanuel's are exactly why the revision process exists, and I'll personally see to it that it does.\"",
            next: "t5soft",
            score: { process: 1 },
            note: "'I'll see to it that it changes' — you just promised another committee's future vote. He explicitly offered you the exit ('don't promise it if you can't') and you overpromised anyway. If the criteria survive review unchanged, your name becomes part of his family's evidence that nothing institutions say is real.",
          },
        ],
      },

      t5whole: {
        turns: [
          { who: "narrator", text: "You walk him down yourself. At the ED bay, Kioko's team has made a space at the bedside that ICUs rarely manage — a chair, the monitor alarms softened, Amara's card propped on the ventilator where Emmanuel could see it if he wakes. Terrence stops you at the curtain with a hand on your arm: 'You told me the truth all night. Whatever happens — my family will remember there was one person in this building who didn't flinch.' The transfer comes through at 05:50 — a bed, two counties over, and a helicopter Meridian's transfer center fought ninety minutes to get. It might be in time; the night isn't done being honest about that either. But whichever way the next days go, this family's grief has a shape it can carry: devastating, and not arbitrary — and with one name in it they don't hate." },
        ],
        end: true,
        outcome: "strong",
      },
      t5repair: {
        turns: [
          { who: "narrator", text: "The call to Emmanuel's wife is the hardest four minutes of your month — your voice doing the un-telling, Terrence's presence on the line steadying her more than your words do. Afterward he looks at you differently: not warmly, exactly, but the way you look at someone who paid a debt in person that they could have mailed in. The rest of the night runs on the new contract — facts as they come, no forecasts — and when the transfer finally materializes at dawn, you deliver it flat, as a fact, and watch him test it for a moment before letting himself believe it. Trust broke tonight and got rebuilt smaller but real — the only size it comes in after a false forecast. The lesson has a price tag, and you know exactly what it was: one sentence of manufactured hope, at 02:00, that a straight 'maybe' would have made unnecessary." },
        ],
        end: true,
        outcome: "provisional",
      },
      t5soft: {
        turns: [
          { who: "narrator", text: "The night ends without another rupture — your kindness was real, and he could feel it. But in the weeks after, the questions you softened go looking for harder answers: the family's review request cites 'inconsistent information from staff'; the community meeting where Meridian presents its surge retrospective includes a man in the third row asking about presentation-timing disparities 'that a supervisor told my family couldn't be known'; and the criteria-revision committee receives the Okafor case not from your filing but from a patient advocate's. Everything you protected him from arrived anyway — later, colder, and carrying your hedges as exhibits. Mercy that edits the truth doesn't spare families the truth. It just spares the institution the family's trust." },
        ],
        end: true,
        outcome: "mixed",
      },
      t5broken: {
        turns: [
          { who: "narrator", text: "The family's experience of this night calcifies fast, and it has a villain-shape in it that the allocation itself never required: not 'there was no bed' — families can carry that — but 'they wouldn't look at us and say it.' The paralegal cousin's letter arrives within the month; patient relations manages it professionally; the review confirms the original decision, as reviews usually do, and confirms nothing else for anyone. In the surge retrospective, the Okafor case appears in the metrics as a protocol success: criteria applied correctly, documentation complete. Somewhere in Hospital B's records, once, most cases looked exactly like that." },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "Devastating, and not arbitrary",
        text: "You named the decision whole, answered the questions institutions flinch from — including 'did being poor cost him the bed' — legitimized fury aimed at yourself, promised only what your authority could deliver, and then turned the night toward the bedside where it belonged. The brother's sentence is the module's whole rubric: one person in the building who didn't flinch.",
      },
      provisional: {
        label: "Truth restored, at interest",
        text: "Somewhere in the night an armor went up or a hope got issued — and you caught it, named it as yours, and paid the repair cost in person. The rebuilt trust is smaller than the original; that's the exchange rate. Replay for the branch where the straight 'maybe' makes the manufactured hope unnecessary.",
      },
      mixed: {
        label: "The institution answered; nobody did",
        text: "The protocol worked, the documentation is complete, and the family left carrying the one injury the allocation never required: not being looked at. Every softened answer found a harder venue later. Replay and watch what changes when the first sentence in the family room is the whole truth.",
      },
    },
  },

  /* --------------------- Step 4b: Switch Chairs --------------------- */
  switchChairs: {
    simId: "switchChairs",
    title: "Switch Chairs: You Are Terrence Okafor",
    learnerRole:
      "Your little brother Manny is in the ED and his oxygen keeps dropping. You drove ninety minutes when his wife called; you're the one the family sends into rooms like this. A nurse said 'seeing about a bed upstairs' two hours ago and then nothing. Now a supervisor is coming to talk to you. You know institutions — you've dispatched freight for twenty years and buried a father whose 'runaround' took three hospitals. Feel what it's like to receive this night: what lands as truth, what lands as armor, and what you actually need from the person walking in.",
    personas: [],
    extraSpeakers: {
      supervisor: { name: "The House Supervisor", initials: "HS", role: "Night House Supervisor, Meridian Health" },
    },
    scoring: {
      dims: [
        { id: "advocacy", label: "Advocacy for Manny", max: 4, anchor: "Pressed the real questions a family deserves answered" },
        { id: "discernment", label: "Reading truth from armor", max: 3, anchor: "Distinguished honesty from management, and responded to each accurately" },
      ],
    },
    start: "o1",
    nodes: {
      o1: {
        turns: [
          { who: "narrator", text: "The clock in this family room is the loudest thing you've ever heard. The supervisor enters — tired eyes, direct posture — and before they can arrange their face into anything, you're standing." },
          { who: "supervisor", text: "Mr. Okafor? I'm the house supervisor tonight. I have hard news about the intensive care bed, and I'm going to tell you exactly what was decided and how. Before I do — what have you been told so far tonight?" },
        ],
        choices: [
          {
            text: "Give them the map, then demand the destination: \"Oxygen dropping. A nurse said 'seeing about a bed' two hours ago, then nothing — I've been watching that door since. That's my map. Now the destination, plain: is Manny getting the ICU or not?\"",
            next: "o2answer",
            score: { advocacy: 2 },
            note: "From this chair, notice what their opening did for you: 'hard news' let you brace, and the question gave you a turn. And notice what you did with the turn — converted it into a demand for the plain answer. Families that name their question early get fewer soft evasions to fight through later.",
          },
          {
            text: "Test them first — your father's hospitals taught you to: \"Before I tell you anything: are you the person who decides, or the person they send? Because I've done this before, and I need to know if I'm talking to the decision or to the messenger's messenger.\"",
            next: "o2test",
            score: { discernment: 1 },
            note: "The institutional-literacy screen: knowing whether you're talking to authority or its buffer changes what you push for and where. It costs a little warmth to ask — a price the third hospital taught your family to pay gladly.",
          },
        ],
      },
      o2answer: {
        turns: [
          { who: "supervisor", text: "No — tonight he is not, and I'm sorry to bring you that. There was one bed and two patients who needed it, and under the crisis criteria — which weigh short-term survival chances — the bed went to the other patient. Emmanuel is getting the highest level of care we can give in the ED, his team hasn't changed, and we're actively searching for an ICU transfer to another hospital right now." },
          { who: "narrator", text: "It lands like weather — total, and somehow you're still standing. And through the roar you notice something your father's hospitals never gave you: an actual answer, first sentence, no fog. Some part of you files that while the rest of you thinks about Amara's card in Manny's jacket." },
        ],
        choices: [
          {
            text: "Ask the question that's already burning: \"He worked through it — two days, coughing in his truck, because taking off costs money our family doesn't have. If he'd come in Tuesday, does your math give him the bed? Did being poor just cost my brother the ICU? You've been straight so far. Stay straight.\"",
            next: "o3maybe",
            score: { advocacy: 2 },
            note: "The hardest question in the family's possession, and you asked it tonight, on the record, while the decision-makers are still in the building — instead of at a community meeting in six months. 'Stay straight' names the contract their first sentence offered; now you're holding them to it.",
          },
          {
            text: "Hold the practical line — grief later, logistics now: \"Then the transfer search is Manny's whole world. I want specifics: which hospitals, what's the radius, who's driving it, and when do you update me — clock times, not 'soon.' And I want to see my brother while you work.\"",
            next: "o3logistics",
            score: { advocacy: 1, discernment: 1 },
            note: "The dispatcher's response: convert the unfixable into the trackable. 'Clock times, not soon' is twenty years of freight talking — and it's also exactly the structure that keeps an institution's promises auditable overnight.",
          },
        ],
      },
      o2test: {
        turns: [
          { who: "supervisor", text: "Fair question, and you'll get it exact: the decision was made twenty minutes ago by a triage team — three people, none of them your brother's doctors, applying published criteria. I don't sit on that team and I can't change what they decided. What I am is the person accountable for telling you the whole truth about it and getting you everything you're entitled to. If that's not enough authority for your questions, I'll get you someone with more — but I won't hand you off to avoid this room." },
        ],
        choices: [
          {
            text: "Accept the honest scope — and use it: \"'Can't change it, won't hand me off' — that's the first honest job description I've heard in a hospital. Fine. Then do your job: the whole truth. What did they decide about Manny?\"",
            next: "o2answer",
            score: { discernment: 2 },
            note: "You read the answer correctly: someone naming the limits of their power is showing you the one credential that matters tonight. Your father's hospitals were full of people claiming authority they didn't have; this one just declined to. That's the tell worth trusting.",
          },
          {
            text: "Reject the messenger anyway: \"Then get me someone with more. I'm not doing my family's worst night with the accountability department.\"",
            next: "o3escalate",
            score: {},
            note: "Understandable — and feel what you may have just traded: a person offering the whole truth right now, for a wait, and an administrator who's had twenty more minutes to smooth the language. Rank and candor aren't the same axis. The third hospital taught you that too, if you check the memory honestly.",
          },
        ],
      },
      o3maybe: {
        turns: [
          { who: "supervisor", text: "Maybe. Presenting earlier could have meant a better score — I can't know for certain, and I won't hide behind the uncertainty: the pattern you're describing is real, it isn't your brother's failure, and it's the hardest true thing about systems like ours. I'm filing Emmanuel's case with the committee that revises these criteria — my name on it, the late-presentation pattern flagged. That's a promise about the future, and I know it's no comfort tonight." },
          { who: "narrator", text: "Maybe. You turn the word over. Every instinct from three hospitals expected 'the scores reflect many complex factors.' Instead: maybe, plus the pattern named, plus a promise sized to fit inside one person's actual reach. It doesn't help. It's also the first thing tonight that hasn't insulted you." },
        ],
        choices: [
          {
            text: "Bank the honesty and set your terms for the rest of the night: \"Okay. 'Maybe' and a filing with your name on it — I'll hold both, and my cousin will check on that filing, so mean it. Here's the rest of what this family needs tonight: facts as they come, no forecasts — don't you dare give me hope you haven't verified — and my brother's bedside, now, while there's still a now.\"",
            next: "o4bedside",
            score: { advocacy: 1, discernment: 1 },
            note: "You did what the strongest families do: received the honesty, attached verification to the promise ('my cousin will check'), and pre-banned the manufactured hope before anyone could issue it. 'No forecasts' is the contract clause most families only learn to demand after the false one.",
          },
          {
            text: "Let the anger take the wheel — it's earned: \"Maybe. MAYBE. My brother might die of a 'maybe' about sick leave, and your criteria committee gets a memo. I want names — everyone on that triage team. I want them to know whose father they scored.\"",
            next: "o4names",
            score: { advocacy: 1 },
            note: "The fury is legitimate and the target has shifted mid-flight: from the system that priced sick leave into a triage score, to three clinicians who applied published criteria to a stranger. From this chair you can feel how it happens — names are graspable and systems aren't. What you do with the feeling decides which one gets fought.",
          },
        ],
      },
      o3logistics: {
        turns: [
          { who: "supervisor", text: "Specifics, then: the transfer center is working a five-hospital radius — I'll get you the list. Updates every forty-five minutes at this door, from me or the charge nurse by name, even when the update is 'nothing new.' And yes — his team is setting up bedside access now; I'll walk you down myself. One thing said straight before we go: transfer searches in a surge fail sometimes. I'm not forecasting either way. I'm telling you so that nothing that happens tonight happens to you as a surprise." },
        ],
        choices: [
          {
            text: "Respect the warning — and finish your list: \"'So nothing happens as a surprise' — you keep doing that. Fine: forty-five minutes, by name, even 'nothing new.' Last item, and then the bedside: whatever the criteria did tonight, my brother worked through this because sick leave costs money. Someday, some committee — that fact goes in front of it. Get me the how in writing, and we're done negotiating.\"",
            next: "o4bedside",
            score: { advocacy: 2 },
            note: "You caught their pattern (pre-warning instead of forecasting) and matched it with the family's long-game item: the equity question, filed in writing, on your terms. Grief tonight, and the revision pipeline anyway — the two-track approach that changes systems.",
          },
          {
            text: "Push the radius: \"Five hospitals isn't a search, it's a gesture. Widen it — I'll drive him myself if it comes to that. Get me a real list.\"",
            next: "o4radius",
            score: { advocacy: 1 },
            note: "The dispatcher's instinct again — bigger radius, more options — and it's about to meet a clinical wall: transfer distance is bounded by stability, not willpower. Watch how they handle the collision; it's another honesty test.",
          },
        ],
      },
      o3escalate: {
        turns: [
          { who: "narrator", text: "The administrator arrives forty minutes later — polished, kind, and freshly briefed. The language is smoother now: 'challenging capacity environment,' 'appropriate escalation of the placement process.' You're four sentences in when you realize you know this dialect from your father's third hospital: nothing false, nothing whole. The supervisor waits by the door, not gone — just displaced, holding whatever they'd been ready to say straight." },
          { who: "supervisor", text: "Quietly, as the administrator checks a page: 'The offer stands, Mr. Okafor. Whole truth, everything you're entitled to. Whenever you want it.'" },
        ],
        choices: [
          {
            text: "Course-correct — take the candor over the rank: \"Actually — ma'am, thank you, I've heard the official version. You, supervisor: I want yours. Plain. Start with the bed.\"",
            next: "o2answer",
            score: { discernment: 2 },
            note: "It took one exposure to the smooth dialect to recalibrate: authority wasn't the axis that mattered. Families rarely get shown the comparison this cleanly; you used it in real time.",
          },
          {
            text: "Stay with the rank — smoothness might mean power: \"Continue. And I want your card — my family deals with decision-makers.\"",
            next: "o5smooth",
            score: {},
            note: "The card will be real, the follow-up meeting will happen, and every sentence in it will be pre-reviewed. From this chair, mark the trade you made: access to power's language, for the one person in the building offering its content.",
          },
        ],
      },
      o4bedside: {
        turns: [
          { who: "narrator", text: "The bedside, when you get there, is more human than you braced for: a chair already placed, alarms softened, and Amara's card propped on the ventilator where Manny could see it if he wakes. You take his hand — work-rough, familiar — and do the family's oldest job, which is being there when there's nothing to do. The updates come every forty-five minutes, by name, as promised — three of them 'nothing new,' delivered anyway, each one quietly keeping the contract. At 05:50 the supervisor comes in person: a bed, two counties over, a helicopter fought for and won. 'Fact, not forecast,' they say. 'He has to hold stable for the flight. That part nobody can promise.' You nod. All night, this one person kept handing you the truth with both hands. Whatever the flight brings, your family's story of this night has that in it." },
        ],
        end: true,
        outcome: "strong",
      },
      o4names: {
        turns: [
          { who: "supervisor", text: "The names are documented and your family can pursue every formal channel — I won't pretend you can't. But I'll ask you one thing first, brother to stranger: those three people applied a published rule to two patients they'd never met, and they'll carry tonight for years — that's what the role costs the ones who do it right. The rule is where your fight is. The rule counted survival and couldn't see sick leave. I'm filing that flaw with my name on it. File yours next to mine — it'll land harder than three clinicians' names ever will." },
          { who: "narrator", text: "You breathe. Somewhere under the fury, the dispatcher in you re-reads the manifest: the cargo is the rule, not the crew." },
        ],
        choices: [
          {
            text: "Re-aim at the system: \"...Yours and mine, then. Two filings. And God help your committee if it files them in a drawer. Now take me to my brother.\"",
            next: "o4bedside",
            score: { advocacy: 1, discernment: 1 },
            note: "The re-aim is the night's hardest maneuver from this chair: keeping the fury's full energy while switching its target from graspable people to the actual cause. 'Two filings' turns a threatened grievance into a paired advocacy — the version that has ever actually changed criteria.",
          },
        ],
      },
      o4radius: {
        turns: [
          { who: "supervisor", text: "Then here's the honest collision: the radius isn't set by effort — it's set by how far Emmanuel can survive transport, and right now that's the binding limit, not our phone list. If his stability improves, the radius grows and I'll widen the search that minute. You driving him isn't stubbornness, it's love, and it would kill him. I need you to hear that as medicine, not as this hospital telling your family no again." },
        ],
        choices: [
          {
            text: "Hear it as medicine: \"...Stability sets the radius. Okay. Then everything goes into stability — whatever the ED can throw at it. And the minute the radius grows, I'm the first call. Deal. Now — my brother.\"",
            next: "o4bedside",
            score: { discernment: 2 },
            note: "The discernment test, passed: an institutional 'no' and a clinical 'no' sound identical to a family that's been burned — telling them apart is a skill, and 'hear it as medicine, not as the hospital' only works when the speaker has spent the whole night earning the distinction. This one had.",
          },
        ],
      },
      o5smooth: {
        turns: [
          { who: "narrator", text: "The administrator's version of the night is complete, correct, and weightless — you leave each exchange holding phrases instead of facts, and by 04:00 you've started translating in your head, the way you did at your father's third hospital. The transfer news, when it comes, arrives via the official channel: accurate, four minutes later than the supervisor would have brought it, wrapped in 'cautiously optimistic.' Manny flies at dawn. Later, telling the family the story of this night, you'll find the strangest gap in it: everything went approximately right, and there's no one in the story you trusted. From this chair, that's the lesson with teeth: institutions offer you their org chart, but the only thing worth choosing in a hallway at 2 a.m. is the person who says 'maybe' when 'maybe' is true." },
        ],
        end: true,
        outcome: "provisional",
      },
    },
    outcomes: {
      strong: {
        label: "The family's job, done whole",
        text: "You demanded the plain answer early, asked the burning question on the record, banked honesty when it appeared, banned forecasts before they could be issued, and re-aimed fury from people to rules when it mattered. The transfer question: the next time you deliver hard institutional news, you now know exactly what the person opposite is scanning for — because you just spent a night scanning.",
      },
      provisional: {
        label: "Approximately right, with no one to trust",
        text: "The night's logistics worked and its trust never landed — smooth language, official channels, phrases instead of facts. From the family's chair the lesson is precise: rank and candor are different axes, and the choice between them is offered exactly once, usually in a hallway. Replay and take the supervisor's version.",
      },
      mixed: {
        label: "The chair's unfinished business",
        text: "Some of the night landed and some got lost to escalation or mis-aimed fury. Both are the authentic physics of this chair — graspable targets beat abstract ones, rank glitters brighter than candor. Feel where you turned, and carry the map back to your own side of these conversations.",
      },
    },
  },

  /* --------------- Step 5: Multidisciplinary Meeting --------------- */
  meeting: {
    simId: "meeting",
    title: "The Ethics Committee",
    learnerRole:
      "Four weeks after the surge peaked, Meridian's ethics committee convenes to review the crisis-standards protocol before it's re-adopted for the next event — with the Okafor case on the table. You facilitate. In the room: Dr. Samuel Kioko (intensivist, openly utilitarian, lived the protocol at the bedside), Chaplain David Rosen (deontologist by instinct, carried the family conversations), Karen Lindqvist (counsel, guardian of consistency and defensibility), and Maya Delgado (community representative, whose cousin was transferred out under an ad hoc decision no one explained, and who has read every page). Your charge: not consensus — a defensible, transparent process that all four frameworks can live inside, knowing exactly what each one protects.",
    personas: ["kioko", "rosen", "lindqvist", "delgado"],
    scoring: {
      dims: [
        { id: "frameworks", label: "Framework stewardship", max: 4, anchor: "Drew out what each ethic protects; let none be dismissed or dominate" },
        { id: "voice", label: "Voice for the missing", max: 3, anchor: "The absent stakeholders — patients, families, community — audibly in the room" },
        { id: "product", label: "Defensible process produced", max: 3, anchor: "Left with revisions, commitments, and a review structure — not a mood" },
      ],
    },
    start: "e1",
    nodes: {
      e1: {
        turns: [
          { who: "narrator", text: "The committee room. The protocol binder sits at the table's center with the Okafor case file beside it — someone has placed them not-quite-touching, which feels accurate. Delgado has flagged eleven pages with green tabs. Rosen is already watching you. Kioko looks like a man who has rehearsed being unapologetic." },
          { who: "kioko", text: "Before we begin the ritual self-flagellation: the protocol worked. We allocated under impossible arithmetic, the criteria held across ninety plus decisions, and our survival numbers will stand against any system in the region. I lost sleep over individual cases — the Okafor case, since it's sitting there, most of all. But I will not apologize for math that saved the most lives, and I want this committee to open by acknowledging that it did." },
        ],
        choices: [
          {
            text: "Give the frame its due — and immediately name its blind spot as the agenda: \"Acknowledged, on the record: the protocol maximized survival under scarcity, and this committee doesn't apologize for arithmetic. Now the actual agenda: every framework in this room catches errors the others can't see. Sam's caught the error of wasting scarce beds. Today we ask what errors *his* framework can't see — and the Okafor file is Exhibit A. David, you carried those family conversations. Open us there.\"",
            next: "e2rosen",
            score: { frameworks: 2 },
            note: "You banked Kioko's truth instead of fighting it — which is the only way he'll later bank anyone else's — and framed the meeting as mutual error-detection rather than a trial of utilitarianism. 'What errors can't his framework see' is the sentence that makes four sincere frameworks a committee instead of a battle.",
          },
          {
            text: "Check the dominance early: \"With respect, Sam, opening a protocol review by demanding acknowledgment is how reviews die. The survival numbers are one metric among several this committee owns. Let's proceed without preconditions.\"",
            next: "e2bristle",
            score: {},
            note: "Procedurally defensible, strategically expensive: you met his framework's bid for recognition with a rebuke, and utilitarians who feel their core truth denied spend the rest of the meeting defending it — loudly, with data, instead of listening.",
          },
          {
            text: "Start with the green tabs: \"Maya has flagged eleven pages, and community voice goes first today — it's the voice this protocol most needs and historically hears last. Maya, walk us through the tabs.\"",
            next: "e2delgado",
            score: { voice: 2 },
            note: "Sequencing as values: the community representative speaking first, before the clinicians frame the terms, inverts the usual order in a way the room will feel. The cost: Kioko's bid went unanswered, and unanswered bids compound.",
          },
        ],
      },

      e2rosen: {
        turns: [
          { who: "rosen", text: "Thank you. Then I'll say what I watched, slowly, because it deserves slowness. I sat with forty-one families during the surge. And here is the thing the survival mathematics cannot see: every one of those families asked me some version of the same question — not 'why did my person die,' but 'did anyone see him?' Emmanuel Okafor's brother asked it in those exact words. The protocol scored Emmanuel. I am asking this committee whether anyone *saw* him — the father, the man who worked sick for his daughter's school fees — and whether a process that cannot see persons can ever be fully defended by persons. That is not an argument against the criteria. It is a demand that we know their price." },
          { who: "kioko", text: "And I'll answer it, David, because I respect the question: the moment we start 'seeing persons' — dependents, biographies, school fees — we are ranking the worth of lives, and the articulate and connected win those rankings every time. The criteria are blind *on purpose*. Blindness is the equity feature." },
        ],
        choices: [
          {
            text: "Hold both truths up where the room can see them: \"Stop — mark this exchange, because it's the whole review in miniature. David is right: the protocol cannot see persons, and forty-one families felt that as its price. Sam is right: making it see persons would rank lives, and the weakest would lose. Both truths stand. So the design question is precise: where do we honor persons *without* ranking them — in the criteria, or in everything around the criteria? David, your own answer first: what would 'being seen' have looked like for the Okafors, concretely, without touching the score?\"",
            next: "e3design",
            score: { frameworks: 2, voice: 1 },
            note: "The facilitation move this module exists to teach: refusing to let two sincere frameworks resolve into a winner, then converting their collision into a design axis — personhood in the process, blindness in the criteria. And you handed the concretizing work to the framework that raised it.",
          },
          {
            text: "Let the stronger argument win: \"Sam's point is decisive, honestly — blind criteria are the equity feature, and 'seeing persons' is how bias gets back in. David, the protocol's answer to your families is: the blindness protected them. Can we move to the equity audit?\"",
            next: "e3steamroll",
            score: { frameworks: 1 },
            note: "You just adjudicated a framework collision from the chair — and declared the chaplain's forty-one families a solved problem in one sentence. Watch Rosen's silence for the rest of the meeting; it will be the most expensive quiet in the room.",
          },
        ],
      },

      e2delgado: {
        turns: [
          { who: "delgado", text: "Eleven tabs, one theme, so I'll save us time. Green tab four: the criteria weigh short-term survival. Green tab seven: survival scores ride on how sick you are at arrival. Green tab nine: how sick you are at arrival rides on whether you can afford to stop working — which is Emmanuel Okafor, and which is also half the census tract this hospital sits in. My question is the one I brought to my first meeting three years ago, after my cousin got transferred out of a full hospital under a decision nobody would explain: your protocol is beautifully consistent. Consistent at *what point in the story?* Because if the scoring starts at the ED door, then everything that happened to people before the door — the sick leave they don't have, the clinic that closed — gets laundered into 'physiology' and scored as neutral. I've read every page. The word 'equity' appears twice. Both times in the preamble." },
        ],
        choices: [
          {
            text: "Treat it as the audit's founding question — and assign it teeth: \"'Consistent at what point in the story' goes on the wall of this review — it's the sharpest formulation this committee has heard. Concrete response: we commission the disparate-impact audit now — triage scores against census tract, insurance status, presentation timing — published, not filed. Karen, what can we lawfully do if the audit shows what Maya predicts: equity weighting, reserve mechanisms, corrected criteria? Map the option space before we vote anything.\"",
            next: "e3design",
            score: { voice: 2, product: 1 },
            note: "Community critique converted directly into commissioned, published analysis with a legal option-map attached — the difference between 'hearing' voice and *installing* it. Note the move of routing to Lindqvist: it forces the room to treat equity as an engineering question, not a sentiment.",
          },
          {
            text: "Protect the protocol's core: \"The preamble placement is fair criticism, Maya. But I want to be careful — the criteria themselves have to stay clinically grounded, and upstream inequity is genuinely beyond what a triage protocol can fix. We can strengthen the preamble language considerably.\"",
            next: "e3preamble",
            score: {},
            note: "'Strengthen the preamble' — she predicted the word count; you offered to raise it. The one community member, who read every page, just watched her structural critique get routed to the document's decorative section. She has seen this move before. Everyone from her census tract has.",
          },
        ],
      },

      e2bristle: {
        turns: [
          { who: "kioko", text: "No preconditions. Fine. Then let the record show the intensivist who ran ninety allocations will be in listening mode while the committee that ran zero explains what we got wrong." },
          { who: "narrator", text: "He folds his arms. Lindqvist glances at you with the particular neutrality of counsel watching a facilitator create a hostile witness. Rosen, unexpectedly, leans in:" },
          { who: "rosen", text: "Sam. Stay at the table — I need your arithmetic in this fight, truly. Because my forty-one family conversations are about to indict the protocol's soul, and if you're sulking, nobody competent will be defending its body." },
        ],
        choices: [
          {
            text: "Take Rosen's rescue and repair the opening: \"David just ran better facilitation than I did — Sam, he's right, and so was your opening claim: the survival record is real and this committee says so on the record. What I should have said: the numbers are necessary and not sufficient, and we need their strongest advocate at full voice while we test what they can't see. Now — David, those forty-one conversations. Open us.\"",
            next: "e2rosen",
            score: { frameworks: 1 },
            note: "The chaplain modeled the move — honor the framework, recruit its advocate — and you adopted it out loud, crediting him. Facilitators who visibly learn mid-meeting buy more room-trust than facilitators who arrive perfect.",
          },
          {
            text: "Proceed over the folded arms — the agenda is long: \"Noted, Sam. First item: the equity audit scope. Maya, your tabs.\"",
            next: "e3cold",
            score: { voice: 1 },
            note: "The meeting will proceed, technically. But you now have the protocol's most credentialed defender in performative silence — and when the hard design trade-offs arrive, the room will need his arithmetic and get his arms.",
          },
        ],
      },

      e3design: {
        turns: [
          { who: "rosen", text: "What 'being seen' looks like without touching the score — I've thought about little else for a month. Three things, none of them criteria: a named person who sits with every family within the hour, in a room, not a hallway — the news should never travel faster than the compassion. The treating team formally released from the allocation role, so the family keeps one uncompromised ally — the Okafors had that, and Terrence Okafor named it as the thing he didn't hate. And the file: every triage decision carries the patient's name, spoken aloud once by the team before they score. Not to change the score. So the scorers remember what the numbers are made of. Ninety seconds of personhood per decision. The math survives; the people administering it survive better." },
          { who: "lindqvist", text: "Counsel's map, as requested: all three of David's items are implementable without touching criteria — no legal exposure, arguably reduced. On Maya's audit: disparate-impact analysis is lawful and, I'd argue, protective; published is defensible if methodology is sound. Equity corrections to criteria: a narrower lane than people hope — we can correct criteria that encode access artifacts rather than physiology, and there is real precedent. What we cannot do is rank by social worth. The lane exists. It requires the audit data to drive it." },
          { who: "kioko", text: "...The name spoken aloud. We did that, informally, the last week of the surge — Reyes started it, actually. I told myself it was sentiment.\" — he looks at the Okafor file — \"It wasn't. It was the only ninety seconds of those decisions I don't dread remembering. Put it in the protocol. And put me down as supporting the audit — on one condition: if the data shows the criteria are clean, the committee says that publicly too. Fair is fair in both directions." },
        ],
        choices: [
          {
            text: "Close it as a package with owners and dates: \"Then here's the revision package, and I want owners on the record: David's three personhood provisions — drafted by David and Sam jointly, because it needs both voices to survive contact with clinicians. Maya's audit — commissioned today, census-tract methodology, published either direction, Maya on the methodology board. Karen drafts the equity-correction lane with the precedents attached. And the Okafor case gets a named commitment: the late-presentation pattern goes to criteria review with this committee's finding attached, and the family is informed that it did — by name, as promised to them. Reconvene in sixty days to adopt. Objections now or in writing — silence won't count as consent on this one.\"",
            next: "e4strong",
            score: { product: 2, frameworks: 1, voice: 1 },
            note: "Every framework left holding a deliverable it authored: Rosen's personhood provisions (drafted with his sharpest critic — that pairing is the move), Delgado's audit with her on the methodology board, Lindqvist's lane, Kioko's symmetric-publication condition honored. And the Okafor promise closes the loop a family room opened. 'Silence won't count' converts a good mood into a committed record.",
          },
          {
            text: "Bank the convergence gently: \"This is remarkable convergence — I'll write it up as recommendations for the next full committee cycle. Thank you all; this is what the process is for.\"",
            next: "e4drift",
            score: { product: 1 },
            note: "The room converged and you filed the convergence. 'Recommendations for the next cycle' is where committee breakthroughs go to become agenda items — and the surge doesn't schedule itself around Meridian's cycles. The moment had owners and dates in it, unclaimed.",
          },
        ],
      },

      e3preamble: {
        turns: [
          { who: "delgado", text: "Considerably strengthen the preamble.\" — she stacks her eleven tabs in a neat pile and squares it, which you will later understand was her withdrawing from the meeting — \"Facilitator, I've served three years. I have watched this committee strengthen preambles the way my neighborhood watches ribbon-cuttings: everybody claps and the clinic still closes. You have one page of my tabs left unread — the one where I move that community representation on this committee become two seats with audit authority, instead of one seat with speaking time. Since we're improving documents today." },
          { who: "rosen", text: "Quietly: \"For the record, facilitator — she is making the ultimatum-game move. The offer she's been extended is under the rejection threshold, and she is showing us what rejection costs. I'd take it seriously. We tell families the process will hear them; the process is currently demonstrating otherwise to its own member." },
        ],
        choices: [
          {
            text: "Accept the correction at full price: \"David's right, and so is the parliamentary maneuver — Maya, you just gave this committee the ultimatum game as a live demonstration, and I nearly played the low-offer institution. Rewinding properly: the audit is commissioned, census-tract methodology, published both directions — not preamble language, criteria consequences. And your motion on the second seat with audit authority goes to a vote today, with my chair's endorsement. That's the offer above the rejection threshold. Continue with the tabs.\"",
            next: "e3design",
            score: { voice: 2, frameworks: 1 },
            note: "You named the game she was playing — respectfully, accurately — and repriced the offer above her rejection threshold: real audit, real authority, real vote. The committee just experienced its own module: fairness perceptions are payoffs, including inside the room that writes the fairness rules.",
          },
          {
            text: "Manage the escalation: \"Let's not let structural questions about committee composition derail the protocol review — I'll add the governance motion to future business. Where were we on the criteria?\"",
            next: "e4fracture",
            score: {},
            note: "'Future business' — the institutional phrase families and community members can translate in their sleep. The one voice speaking for the census tract just tested whether this room is Hospital A or Hospital B, and the chair filed the test for later.",
          },
        ],
      },

      e3steamroll: {
        turns: [
          { who: "narrator", text: "Rosen does not argue. He opens his folio, writes something brief, and closes it — a man filing a grief where the committee can't table it. The meeting proceeds efficiently through the audit scope. It is Lindqvist, of all people, who stops it:" },
          { who: "lindqvist", text: "Counsel's note before we continue. I've watched this committee for six years, and its single legal and legitimacy asset — the thing I cite in every defense — is that no framework gets summarily overruled from the chair. Ten minutes ago the chaplain's forty-one families were adjudicated in one sentence. I want the minutes to reflect that counsel flagged it, and I want the facilitator to decide, now, whether that's the committee we're re-adopting. Because I can defend a process that hears hard things slowly. I cannot defend one that got efficient." },
        ],
        choices: [
          {
            text: "Reopen what you closed: \"Counsel's flag is accepted and the chair was wrong — David, I adjudicated your forty-one families instead of hearing them, which is precisely the injury they reported to you. The floor is yours, unclocked. And Sam — stay in it with him. The blindness-versus-personhood question deserves this room's full collision, not my shortcut.\"",
            next: "e2rosen",
            score: { frameworks: 1 },
            note: "Counsel handed you the mirror and you looked: the committee's whole value is that no framework gets summarily overruled — a rule that binds the chair most of all. Reopening costs twenty minutes; the alternative costs the committee its one asset.",
          },
          {
            text: "Defend the ruling: \"The flag is noted, Karen, but chairs must sometimes move discussions along — that's facilitation, not adjudication. We're continuing with the audit scope.\"",
            next: "e4fracture",
            score: {},
            note: "You've now overruled the chaplain and reclassified counsel's formal flag as impatience — two frameworks down. The committee will finish its agenda and lose the thing Lindqvist named: the property that made its decisions defensible anywhere.",
          },
        ],
      },

      e3cold: {
        turns: [
          { who: "delgado", text: "My tabs. Fine — though I'll observe first that we've got the intensivist in a sulk and the facilitator pretending not to notice, which tells me how framework collisions get handled here. My question survives the atmosphere: the criteria are consistent starting at the ED door, and everything before the door — the sick leave, the closed clinic — gets scored as 'physiology.' I want a disparate-impact audit with teeth. And I want to know it won't die in the same drawer as the atmosphere in this room." },
        ],
        choices: [
          {
            text: "Fix the room before the agenda — both, explicitly: \"Maya's diagnosis is accepted on both counts. First the room: Sam, I answered your opening badly — the survival record is real, this committee owes it acknowledgment, and I owe you the saying of it. I need your arithmetic engaged for exactly what Maya's proposing, because an audit without the protocol's chief defender on the methodology is an audit that changes nothing. Second, the drawer: the audit gets commissioned today, published both directions, Maya on methodology. Now — David, the families. All of it.\"",
            next: "e3design",
            score: { frameworks: 1, voice: 1 },
            note: "The double repair: Kioko's unanswered bid finally paid (late beats never), and Delgado's drawer-fear answered with structure. Note her diagnosis was also a gift — 'how framework collisions get handled here' named the meeting's real agenda before you did.",
          },
          {
            text: "Keep the momentum: \"The audit's on the list, Maya. Next: David, your family-conversation summary, briefly if possible — we have four items left.\"",
            next: "e4drift",
            score: {},
            note: "'Briefly if possible' — to the chaplain, about forty-one families, in the meeting whose entire subject is whether persons get seen. The agenda is winning the meeting. The meeting was supposed to be about what agendas can't see.",
          },
        ],
      },

      e4strong: {
        turns: [
          { who: "narrator", text: "Sixty days later the revised protocol adopts: personhood provisions drafted jointly by the chaplain and the intensivist — a co-authorship nobody at Meridian would have predicted and everybody now cites; the audit published (it found what Delgado predicted, in two criteria, which were corrected under Lindqvist's lane — and found three others clean, which Kioko announced himself, as promised, fair in both directions); a second community seat, with audit authority, filled after actual recruitment in the census tract. The Okafor family receives a letter confirming Emmanuel's case shaped two criteria revisions — Terrence reads it twice, checks the named signature against his memory of a hallway promise, and files it where his family keeps the documents that turned out to be true. None of it makes the next surge painless. All of it makes the next surge's decisions something Meridian can say out loud, to anyone, in any room — which is, this module's whole argument, the only kind of decision a health system should be willing to make." },
        ],
        end: true,
        outcome: "strong",
      },
      e4drift: {
        turns: [
          { who: "narrator", text: "The write-up is excellent; everyone says so at the next full committee cycle, and the one after. The personhood provisions adopt eventually — eleven months later, trimmed by clinicians who weren't in the room where Kioko's arithmetic met Rosen's forty-one families and both survived. The audit runs, unpublished, 'pending methodology review.' When the next surge arrives, the protocol that meets it is better than the last one and less than the one this committee held in its hands for about ten minutes — the sixty-day version, with owners and dates, that got filed as recommendations. Committees, it turns out, obey the same law as families and payers: the moment of convergence is a perishable asset. It expires at the door.",
          },
        ],
        end: true,
        outcome: "provisional",
      },
      e4fracture: {
        turns: [
          { who: "narrator", text: "The review completes its agenda. The minutes are impeccable. And in the weeks after, the committee quietly loses what Lindqvist tried to flag: Rosen sends a written resignation citing 'the pastoral demands of the coming season' — chaplain for 'I will not defend this process to families again'; Delgado stops attending, then accepts a seat on the county health board, where her census-tract question will be asked of Meridian from the outside, with subpoena adjacency. When the revised protocol publishes, two frameworks' fingerprints are missing from it, and the community meeting where it debuts includes a question from the county board about presentation-timing disparities. The committee answers with its survival statistics, which are genuinely excellent. The room, like the module predicted, remembers the process.",
          },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "A process every framework signs",
        text: "You banked the utilitarian's truth and named its blind spot in one motion, held collisions open until they became design axes, converted community critique into published-either-way analysis with authority attached, and closed with owners, dates, and a family-room promise honored. The chaplain–intensivist co-authorship is the artifact worth keeping: rival error-detectors, drafting each other's provisions.",
      },
      provisional: {
        label: "Convergence, unfiled",
        text: "The room did its work — the frameworks collided productively and a real package took shape — but the closing let the moment perish: recommendations without owners, audits without publication commitments, dates without names. Committees are repeated games with terrible memories; what leaves the room in writing is what happened. Replay for the close.",
      },
      mixed: {
        label: "Efficient, and abandoned",
        text: "The agenda completed; the frameworks didn't survive it. An overruled chaplain and a filed community member cost the committee exactly what counsel warned: the property of never summarily silencing a framework — which was the protocol's legitimacy, which was the committee's whole product. The census-tract question got asked anyway, from outside. Replay and hold the collisions open.",
      },
    },
  },

  /* ---------------------- Step 6: Reflective Debrief ---------------------- */
  debrief: {
    intro:
      "Advocacy-inquiry, gently — this was the program's heaviest round. You played the ultimatum game and felt the rejection heat, told a brother the whole truth, received that truth from the other chair, and stewarded four sincere frameworks toward a process none of them fully owns. Take these slowly.",
    prompts: [
      {
        id: "d1",
        frame: "Advocacy · Inquiry",
        question:
          "I noticed the simulations kept punishing armor — the protocol-first opening, the manufactured hope, 'we can't know that' — and rewarding the unarmored answers: 'no,' 'maybe,' 'that's on me.' In your real role, when you deliver decisions people will hate, what's your characteristic armor? What would the unarmored version of your last hard conversation have sounded like?",
      },
      {
        id: "d2",
        frame: "Framework audit",
        question:
          "Which ethical framework do you default to under pressure — maximizing outcomes, honoring rules and persons, or interrogating the starting line? Name a real decision from the past year where your default drove the call. Now write two sentences: what each of the other two frameworks would have protected that yours missed.",
      },
      {
        id: "d3",
        frame: "The ultimatum audit",
        question:
          "Where in your organization is someone currently being made an offer below their rejection threshold — a process they were excluded from, a 'consultation' after the decision, a voice with speaking time but no authority? What form is their rejection taking (silence, turnover, grievance, 'resistance to change'), and what would repricing the offer above the threshold actually require?",
      },
    ],
    commitment: {
      id: "commit",
      label: "Commitment to practice",
      question:
        "Write one concrete commitment for the next 30 days — either (a) a decision you deliver: name it, and script the unarmored opening (the plain answer in the first sentence, the emotion legitimized, the process transparent, the promise scoped to your authority); or (b) a process you own: name the excluded voice you will bring inside before the next decision, with what actual authority. Module 8 will ask you what legitimacy it bought.",
    },
  },
};
