/* Module 3 — Repeat Customers: Reputation, Trust, and the Shadow of the Future
   Fully authored content: vignette, concept coach, MCQ case, one-on-one
   repair simulation, Switch Chairs variant, safety-huddle meeting, debrief. */

export const module3Content = {
  /* ------------------------- Step 1: Topic Video ------------------------- */
  video: {
    vpTitle: "One Defection, Echoing",
    vignette: [
      "Eight months ago, at the nurses' station on 4W at Meridian Community Hospital, a charge nurse escalated a concern about a post-operative patient. The covering physician — tired, certain, and within earshot of six people — said: 'If I came running every time nursing got a feeling, I'd never finish a note. He's fine.' The patient was, as it happened, fine. The unit was not.",
      "Nothing was announced. No one filed a complaint. But the unit's incident reports dropped forty percent over the next two quarters. Near-misses that used to surface in the reporting system started surfacing nowhere — or in a private notebook the charge nurse keeps in her locker, where they protect no one. Ask anyone on 4W why they stopped reporting and no one mentions the incident. Most weren't even there. They just know, the way units know things, what speaking up costs here now.",
      "One interaction. Six witnesses. Months of silence. This is what game theorists mean when they say a defection echoes: the physician played one round; the unit updated its forecast for every round to come.",
    ],
    teaching: [
      {
        h: "You never play a one-shot game",
        p: "Most strategy failures in healthcare come from misclassifying the game. A one-shot game — played once, against a stranger, with no memory — rewards hard bargaining and costless defection. But in a health system, the nurse you dismiss tonight staffs your unit for years; the colleague you undercut in budget season co-chairs your committee in spring. When interactions repeat, today's move is also a message about all your future moves — and everyone is listening. The folk theorem's practical content: cooperation becomes rational precisely because the future casts a shadow over the present.",
      },
      {
        h: "Axelrod's tournaments: what actually wins",
        p: "When strategies competed over thousands of repeated rounds, the winner was not the most aggressive or the most forgiving — it was tit-for-tat: start by cooperating, then mirror what the other player did last. Its virtues are legible ones: it is nice (never defects first), retaliatory (defection has a next-round price), forgiving (returns to cooperation the moment you do), and clear (opponents can learn its rules fast). Permanent grudges lose — they convert one bad round into an infinite losing streak. Unconditional niceness loses too — it teaches exploiters that exploitation is free.",
      },
      {
        h: "Noise: why hospitals need generosity",
        p: "Hospitals are noisy environments in the technical sense: apparent defections are often misunderstandings. The consult that never came back was a page that never arrived; the 'ignored' concern was heard by someone sprinting to a code. In noisy games, strict tit-for-tat spirals — one misread signal triggers retaliation, which triggers counter-retaliation, forever. The fix, proven in the tournaments: generous tit-for-tat, which forgives a defection some fraction of the time. In practice: before you retaliate, ask one clarifying question. Most of the time, there was no defection to punish.",
      },
      {
        h: "The communication anchor: repair, and tools that protect the future",
        p: "Two toolkits ride on this module. First, mutual support and structured challenge — the two-challenge rule and CUS exist so a team member can contest a decision without it registering as a defection; protocol converts a challenge from an attack into a move both players recognize as cooperative. Second, repair. Reputation capital, once spent, is rebuilt only by costly signals (Module 2's lesson, turned inward): a genuine apology names the specific act, names its harm, offers no exculpatory clause, and attaches a concrete forward commitment. 'I'm sorry if you felt dismissed' fails all four tests — and every nurse who hears it knows it.",
      },
    ],
  },

  /* ---------------------- Step 2: AI Concept Coach ---------------------- */
  coach: {
    coachName: "The Concept Coach",
    intro:
      "Before you attempt a repair on 4W, let's tune your strategy instincts. Three situations; in each, the question is the same — what does the repeated game reward here?",
    exchanges: [
      {
        coach:
          "A surgeon and an anesthesiologist share an OR schedule for the foreseeable future. Last month the surgeon ran ninety minutes over and blamed 'slow turnover' — publicly, inaccurately. The anesthesiologist is choosing a strategy for the years ahead: (a) permanent minimal cooperation — protect yourself, expect the worst; (b) match the last move — cooperate when treated fairly, visibly withdraw goodwill after cheap shots, restore it when fairness returns; (c) absorb it and stay maximally helpful regardless. Which does the repeated game favor, and why?",
        options: [
          {
            text: "Option (b) — tit-for-tat. It makes fairness the surgeon's cheapest strategy: cooperation is rewarded next round, cheap shots have a visible next-round price, and the door back is always open.",
            quality: "good",
            feedback:
              "Right — and notice what makes (b) work is its legibility. The surgeon must be able to *learn the rule* from your behavior: fairness gets warmth, blame-shifting gets correctness-without-favors, repair gets the relationship back. A strategy the counterpart can't decode teaches nothing. One refinement coming in the next question: in noisy environments, (b) needs a forgiveness clause.",
          },
          {
            text: "Option (c) — someone has to be the adult, and patients benefit from a maximally cooperative anesthesiologist regardless of how the surgeon behaves.",
            quality: "partial",
            feedback:
              "Patient care can't be the retaliation surface — true, and (b) never touches it; goodwill withdrawal means no favors, not no vigilance. But unconditional absorption has a game-theoretic consequence you must own: it prices public blame at zero, and what costs nothing repeats. Axelrod's finding was blunt — strategies that can't retaliate get farmed. Kindness needs a spine to survive contact with incentives.",
          },
          {
            text: "Option (a) — the surgeon has revealed their character; expecting the worst and protecting yourself is just realism.",
            quality: "miss",
            feedback:
              "That's the grim trigger, and it converts one bad round into a permanent losing streak for both of you — years of minimal cooperation over ninety minutes of blame. It also misreads the data: one defection reveals one defection, not a character. The tournaments were unambiguous: permanent grudges finish near the bottom, because they can never find their way back to the payoffs cooperation generates.",
          },
        ],
      },
      {
        coach:
          "Now the noise problem. You page a hospitalist about a concerning potassium; no response for two hours. Strict tit-for-tat says: defection — retaliate (be slower for them next time). Before you adopt that, what does 'generous tit-for-tat' have you do, and why does it outperform in a hospital specifically?",
        options: [
          {
            text: "Verify before retaliating — one clarifying move ('checking my page went through — did you get the K of 6.1?'). Hospitals are full of failed pages and mid-code silences: most apparent defections are noise, and retaliating against noise starts spirals no one chose.",
            quality: "good",
            feedback:
              "Exactly. The clarifying question is generosity in operational form — it costs you thirty seconds and buys the relationship insurance against phantom defections. And note the compounding effect: a unit where the norm is 'verify before you retaliate' has almost no spirals, which means its tit-for-tat energy is spent only on *real* defections — making the deterrent more credible, not less.",
          },
          {
            text: "Let it go entirely — assume good intent every time, and never adjust your behavior based on unanswered pages.",
            quality: "partial",
            feedback:
              "Generosity isn't amnesia — it's a discount rate on single events. Forgive the first unanswered page; but if pages to this hospitalist go unanswered *as a pattern*, that's data, and a strategy that never updates teaches the same lesson as unconditional niceness: this channel tolerates neglect. Generous tit-for-tat forgives noise and still responds to trends.",
          },
          {
            text: "Escalate immediately to their chief — unanswered critical labs are a patient-safety issue, not a relationship game.",
            quality: "miss",
            feedback:
              "For the potassium itself, escalate clinically, absolutely — patient safety runs on its own track and always wins. But the question was your *relationship strategy* afterward, and jumping to their chief on the first ambiguous silence is retaliation at maximum volume against what is probably a dead pager battery. You'd spend reputation capital punishing noise — and telegraph to every colleague that your first move under uncertainty is over their head.",
          },
        ],
      },
      {
        coach:
          "Last one — the anatomy of repair. A colleague publicly undermined your proposal in a meeting, then sends: 'Hey — sorry if things got heated yesterday. We good?' Grade that apology as a trust-repair signal, using what Module 2 taught you about cheap versus costly signals.",
        options: [
          {
            text: "It fails as a signal because it costs nothing: no naming of the act ('things got heated'), no ownership (passive voice, 'if'), no named harm, no forward commitment. A repair that could be sent equally by someone who meant it and someone managing optics carries no information.",
            quality: "good",
            feedback:
              "That's the full diagnosis. Apologies are signals, and they obey signaling economics: credibility comes from cost. A costly apology names the act specifically (exposure), owns it without an 'if' clause (no escape hatch), names the harm to you (demonstrates understanding), and commits to something checkable going forward (posts a bond against repetition). 'We good?' asks you to refinance their debt at zero interest — and how you respond teaches them the price of the next defection.",
          },
          {
            text: "It's imperfect but worth accepting — holding out for a better apology is pride, and the relationship matters more than the wording.",
            quality: "partial",
            feedback:
              "The instinct to preserve the relationship is the right instinct — this whole module argues for forgiveness. But accepting a costless apology *as if it were costly* isn't forgiveness; it's mispricing. You can hold both: respond warmly, and name what repair actually requires ('I appreciate the note. What landed hard was X in front of Y — can we talk about how that goes differently next time?'). That keeps the door open and the price signal accurate.",
          },
          {
            text: "It's fine — over-analyzing apology wording is exactly the kind of grudge-keeping this module warns against.",
            quality: "miss",
            feedback:
              "The module warns against permanent grudges, not against reading signals — those are opposites. Forgiveness in the tournament sense means returning to cooperation once repair happens; it doesn't mean declaring repair to have happened when it hasn't. 'Sorry if' after a public undermining, accepted at face value, teaches a precise lesson: public defections against you can be settled with eleven words in a chat window. That lesson will be reapplied.",
          },
        ],
      },
    ],
    close:
      "You can now pick strategies by what the repeated game rewards, forgive noise without licensing patterns, and price an apology by what it costs the person offering it. Now comes the hard part: on 4W, the person who owes the costly apology is you.",
  },

  /* ------------------- Step 3: Branching Case with MCQ ------------------- */
  mcqCase: {
    title: "The Second Chance",
    narrative: [
      "Dana Reyes, PharmD, directs pharmacy at Meridian Community Hospital. In last month's budget hearings, the director of surgical services — Tom Calloway — blindsided her: he presented pharmacy's automation proposal as 'nice-to-have technology we can defer,' using cost figures he'd asked her team for 'just to understand the landscape.' The proposal died in the room. Two colleagues texted her afterward: 'That was not okay.'",
      "This week, the COO announced that Reyes and Calloway will co-lead the hospital's medication-safety initiative for the next three quarters — high visibility, shared credit or shared failure, weekly joint meetings starting Monday. Reyes has range: she can freeze him out and work through intermediaries, match his move at the next opportunity, raise it with him directly, or pretend the budget meeting never happened. Whatever she chooses will be legible to him — and to the two colleagues who texted, and to everyone watching how this partnership starts.",
    ],
    questions: [
      {
        id: "m3q1",
        stem: "What single fact most changes Reyes's optimal strategy, compared to a world where she never had to work with Calloway again?",
        tags: ["Repeated games", "Shadow of the future"],
        options: [
          {
            key: "A",
            text: "The co-leadership assignment: three quarters of forced repeated interaction converts this from a one-shot game (where writing him off is cheap) into a repeated game where her strategy choice compounds weekly.",
            correct: true,
            feedback:
              "Yes — the COO's announcement changed the game's structure, which changes everything downstream. In a one-shot world, freezing Calloway out costs her nothing. In a repeated game, every strategy she considers gets played dozens of times and observed throughout — grudges compound, but so does well-structured cooperation. Diagnose the game before picking the move.",
          },
          {
            key: "B",
            text: "The two supportive texts: with colleagues on her side, she has the political cover to retaliate safely.",
            feedback:
              "The texts matter — they're evidence the defection was publicly legible, which shapes *how* repair or accountability should happen. But cover for retaliation isn't a strategy; it's an enablement. The structural fact that should drive her choice is the three quarters of forced interaction, which makes 'safely retaliate and move on' a fantasy — there is no 'moving on' from someone you meet every Monday.",
          },
          {
            key: "C",
            text: "The severity of the betrayal: using requested data against her crosses a line that justifies permanent defensive posture.",
            feedback:
              "It was a genuine defection — costly, deliberate, public. And the grim-trigger response still loses, for the tournament reason: permanent defense converts his one bad move into three quarters of degraded output *for her own initiative*, with her name on it. Severity should raise the price of repair she demands, not eliminate the possibility of repair.",
          },
          {
            key: "D",
            text: "Nothing changed: the right strategy is the same whether or not they work together again — professionalism at all times.",
            feedback:
              "'Professionalism' names a floor, not a strategy — it doesn't tell her whether to raise the budget meeting, how to respond to his next move, or what to do with the trust question every Monday will silently re-ask. Game structure determines which professional-looking strategies actually work; ignoring the structure is how people end up professionally frozen out for nine months.",
          },
        ],
      },
      {
        id: "m3q2",
        stem: "Reyes considers her opening move for Monday. Which option best implements tit-for-tat's actual logic — nice, retaliatory, forgiving, clear?",
        tags: ["Tit-for-tat", "Strategy selection"],
        options: [
          {
            key: "A",
            text: "Open with full cooperation on the initiative and a direct, private naming of the defection: 'Before we start — the budget meeting. You used numbers my team gave you in good faith to kill our proposal. I'm walking in cooperating because this initiative matters, and I need to know that's not how we'll operate with each other.'",
            correct: true,
            feedback:
              "This is tit-for-tat translated into adult speech. Nice: she leads with cooperation. Retaliatory (in the useful sense): the defection has been priced — he knows she saw it, named it, and will not absorb repeats silently. Forgiving: the door to full partnership is explicitly open. Clear: he can derive her whole rule set from one conversation. Note what makes it work — the naming is *private* and the cooperation is *public*, which lets him repair without losing face.",
          },
          {
            key: "B",
            text: "Cooperate fully and never mention the budget meeting — the initiative is a fresh start, and raising old grievances poisons wells.",
            feedback:
              "Unconditional niceness, and it prices his defection at zero. He learns that blindsiding Reyes costs one slightly awkward month — an excellent trade he can repeat at the next budget cycle. Fresh starts that skip the accounting aren't forgiveness; they're a subsidy. (Notice also what it teaches the two colleagues who texted: defections here get memory-holed.)",
          },
          {
            key: "C",
            text: "Cooperate minimally and correctly while quietly building a documented record of his behavior, in case escalation is needed later.",
            feedback:
              "Defensive-crouch tit-for-tat — retaliatory without being nice or clear. He experiences months of unexplained coolness, can't decode the rule (documentation is invisible), and the initiative gets co-leads who are managing files on each other. Strategies the counterpart can't read teach nothing; strategies that start cold invite matching coldness. This is how nine-month stalemates are built.",
          },
          {
            key: "D",
            text: "Wait for the right moment in an early meeting to counter one of his proposals publicly — a proportionate, symmetric response he'll understand.",
            feedback:
              "Symmetric retaliation, one round late, in front of the new initiative's team — this is the spiral's opening move. He'll read it as an unprovoked attack (people discount their own defections and inflate yours; that's the noise problem in human form), retaliate 'proportionately' back, and the medication-safety initiative becomes the arena. Retaliation without naming isn't clear; it's just violence with a theory.",
          },
        ],
      },
      {
        id: "m3q3",
        stem: "Suppose Reyes learns, before Monday, that Calloway's version is different: the COO had privately told him the automation budget was already dead, and he believed presenting it as 'deferrable' was softening a decision already made — clumsy, but not the ambush she experienced. What does this module say this new information changes?",
        tags: ["Noise", "Generous tit-for-tat"],
        options: [
          {
            key: "A",
            text: "It moves the event from 'defection' toward 'noise' — which means her opening move should start with a screen, not a sentence: ask for his account of the budget meeting before pricing it, because retaliating against a misunderstanding starts a spiral over nothing.",
            correct: true,
            feedback:
              "Right — and feel how the game changed shape. If his story holds, there was no betrayal to price, just terrible communication to fix (he still owes her a heads-up he never gave — name that). If his story doesn't hold, she's back to the tit-for-tat opening, now with better information. Either way, the generous move — one clarifying question before retaliation — dominates. In noisy environments, the first move of a good strategy is almost always a question.",
          },
          {
            key: "B",
            text: "Nothing — the impact on her team was identical regardless of his intent, and strategy should respond to impact.",
            feedback:
              "Impact determines the harm; intent determines the *forecast* — and strategy is entirely about forecasts. A colleague who ambushes you will ambush you again; a colleague who communicated disastrously once needs a communication protocol, not deterrence. Treating both identically means retaliating against someone who never defected, which is precisely the spiral-starter generous tit-for-tat exists to prevent.",
          },
          {
            key: "C",
            text: "It exonerates him — she should drop the matter entirely and open Monday as if nothing happened.",
            feedback:
              "It might exonerate the ambush; it doesn't exonerate the silence. On his own account, he walked into a meeting knowing her proposal was dead, used her team's numbers to frame its death, and never told her before or after. The generous move is to re-classify the event, not to erase it: 'I understand the budget was already decided — what I needed was to hear that from you, not discover it in the room.' Noise-tolerance without standards is just the unconditional-niceness trap wearing empathy.",
          },
          {
            key: "D",
            text: "It's probably a self-serving cover story, and sophisticated players should discount exculpatory accounts that arrive conveniently late.",
            feedback:
              "Some cover stories are cover stories — which is why the move is a screen, not blind acceptance: his account is checkable (the COO exists; the timeline exists). But defaulting to disbelief has the same expected cost as strict tit-for-tat in noise: you will sometimes punish innocents, they will retaliate against the injustice, and the spiral runs on pure misunderstanding. Verify; don't presume either way.",
          },
        ],
      },
      {
        id: "m3q4",
        stem: "Alternate branch: Calloway opens Monday's first meeting with, 'Look, budget season got messy, apologies if anyone felt steamrolled — clean slate?' The room waits for Reyes's response. What does the module's repair framework say about this moment?",
        tags: ["Repair", "Costly signals", "Apology anatomy"],
        options: [
          {
            key: "A",
            text: "The apology is costless (no named act, 'if anyone felt,' no commitment), so accepting it as full repair would misprice the defection — but the room is the wrong venue to litigate. Accept the gesture warmly in public, then privately name what actual repair looks like.",
            correct: true,
            feedback:
              "Both halves matter. Publicly rejecting even a weak apology reads as grudge-keeping and poisons the initiative's launch — you'd pay the spiral tax in front of the whole team. But privately, the accounting still needs to be accurate: 'I appreciated the opening. Here's what I need to actually reset: acknowledge the numbers thing directly, and agree that between us, dead proposals get a phone call before a public framing.' Warm in public, precise in private, and the forward commitment is the checkable part — that's repair with a spine.",
          },
          {
            key: "B",
            text: "Accept it fully and move on — he extended a hand in front of witnesses, which took courage, and demanding more is extracting a pound of flesh.",
            feedback:
              "Grade the signal by its cost: a vague 'apologies if' in a meeting he was going to attend anyway, phrased to admit nothing, costs approximately nothing. Accepting it *as full settlement* teaches him — and the watching room — the exchange rate: one public ambush equals eleven words of passive voice. Generosity is about forgiving noise and rewarding repair; this was neither noise nor repair. It was an opening bid.",
          },
          {
            key: "C",
            text: "Respond in front of the room: 'I'd like to talk about what specifically happened at the budget meeting, since we're doing clean slates' — transparency now prevents problems later.",
            feedback:
              "Accurate accounting, catastrophic venue. Forcing the specifics in front of the initiative team converts his face-saving gesture into a public trial — which he will experience as a defection, and retaliate against, and now the co-leads are spiraling in week one. The repair conversation is genuinely necessary; holding it in the room where he can't concede without humiliation guarantees it fails. Separate the audience from the accounting.",
          },
          {
            key: "D",
            text: "Deflect neutrally ('let's focus on the initiative') and decide later — no response is the safest response.",
            feedback:
              "The room heard an olive branch; a visible non-response reads as a frozen 'no' — coldest available interpretation, his face lost anyway, and you've spent the retaliation without getting the accounting. Ambiguity in repeated games isn't safety; it's noise you're injecting yourself, for others to misread. Warm publicly, precise privately — the framework needs both, and 'neither, later' delivers neither.",
          },
        ],
      },
      {
        id: "m3q5",
        stem: "Zoom out. The COO privately asks Reyes: 'What would stop the next budget-season ambush — for anyone, not just you two?' Which answer applies this module's systems lesson rather than its interpersonal one?",
        tags: ["Shadow of the future", "Mechanism thinking", "System design"],
        options: [
          {
            key: "A",
            text: "Lengthen the shadow of the future structurally: make budget-season conduct visible and consequential across time — proposals presented by their owners, cross-department data requests logged with their stated purpose, and next year's co-leadership assignments explicitly informed by how people fought this year.",
            correct: true,
            feedback:
              "That's the module's two halves joined: interpersonal strategy manages *your* games; mechanism design changes *everyone's*. Each element works the same way — it makes today's defection expensive in tomorrow's rounds. When data requests carry their stated purpose, weaponizing borrowed numbers becomes checkable; when the ambusher predictably co-leads with the ambushed (as just happened by accident!), one-shot thinking dies. Meridian stumbled into Reyes–Calloway; a well-designed system does it on purpose.",
          },
          {
            key: "B",
            text: "A civility policy: written standards for interdepartmental conduct during budget season, with HR review for violations.",
            feedback:
              "Module 1's lesson knocking: conduct codes are exhortation with a signature line. Calloway's move violated no writable rule — he presented accurate numbers with a frame. Policies against 'ambushes' either stay too vague to enforce or get gamed into new, compliant ambush formats. Change what the structure makes visible and repeated, not what the handbook forbids.",
          },
          {
            key: "C",
            text: "Better people-picking: staff budget committees with collaborative personalities and keep known sharp elbows away from cross-department decisions.",
            feedback:
              "The fundamental attribution error, institutionalized. Calloway's sharp elbows are a strategy that Meridian's current game rewards — one-shot budget seasons, invisible data provenance, no memory between cycles. Swap the people and keep the payoffs, and the collaborative personalities will either learn the elbows or lose the budgets. The roster isn't the mechanism.",
          },
          {
            key: "D",
            text: "Transparency: record budget hearings and circulate minutes so behavior like Calloway's is at least on the record.",
            feedback:
              "Visibility without consequence is a camera pointed at a payoff matrix — it documents the equilibrium beautifully. His presentation was already public; six people already knew; the reports still dropped. Records only lengthen the shadow of the future if something downstream *reads* them and responds — which is the part this answer leaves out and option A builds in.",
          },
        ],
      },
    ],
  },

  /* -------------------- Step 4: One-on-One Simulation -------------------- */
  oneOnOne: {
    simId: "oneOnOne",
    title: "The Repair on 4W",
    learnerRole:
      "You are the new medical director of Unit 4W at Meridian Community Hospital — and eight months ago, before the promotion, you were the covering physician at that nurses' station. It was your voice, in front of six people, that told charge nurse Angela Brooks that nursing's 'feelings' weren't worth your time. The patient was fine. The unit's reporting fell forty percent. Now you need this unit to speak up again, and the path runs through her. Repair requires: specific acknowledgment, a genuine apology, and a concrete forward commitment.",
    personas: ["brooks"],
    scoring: {
      dims: [
        { id: "ack", label: "Specific acknowledgment", max: 4, anchor: "Named the act, the audience, and the echo — no soft-focus" },
        { id: "apology", label: "Costly apology", max: 3, anchor: "No 'if,' no excuse clause; owned the harm at your own expense" },
        { id: "commit", label: "Forward commitment", max: 3, anchor: "Offered something concrete, checkable, and priced" },
      ],
    },
    start: "a1",
    nodes: {
      a1: {
        turns: [
          { who: "narrator", text: "The 4W break room, end of Brooks's shift. She agreed to fifteen minutes with the flat courtesy she'd give a vendor. She sits with her arms folded and her badge already off." },
          { who: "brooks", text: "You're the new medical director. Congratulations. I assume this is the part where you tell me your door is always open. Mine's the one that says 4W on it — what do you need?" },
        ],
        choices: [
          {
            text: "Name it, all of it: \"I'm here about the nurses' station, eight months ago. You escalated a patient concern and I said — in front of six people — that if I came running every time nursing got a feeling, I'd never finish a note. I've thought about that sentence more than any other sentence I've said in this building.\"",
            next: "a2named",
            score: { ack: 2 },
            note: "You quoted yourself. That's the costliest available opening — no soft-focus 'the incident,' no 'what happened between us.' She now knows you carry the exact words, which is the first evidence this conversation isn't maintenance.",
          },
          {
            text: "Ease in through the data: \"I've been reviewing unit metrics, and 4W's incident reporting is down forty percent over two quarters. You know this unit better than anyone — what's your read on it?\"",
            next: "a2data",
            score: {},
            note: "You've asked her to diagnose, out loud, a wound you inflicted — while you hold the metrics like a clipboard. She knows exactly why reporting fell. The question isn't whether she'll say it; it's what it costs you to make her do the naming.",
          },
          {
            text: "Lead with the mission: \"I'll be direct — I need 4W's reporting culture rebuilt, and I can't do it without you. Whatever's happened before, I'm hoping we can start fresh and get this unit speaking up again.\"",
            next: "a2fresh",
            score: {},
            note: "'Whatever's happened before' — from the person it happened with. You've asked for a clean slate while declining to read the old one aloud. Watch what a charge nurse with a locker notebook does with a costless reset request.",
          },
        ],
      },

      a2named: {
        turns: [
          { who: "narrator", text: "Her arms stay folded, but something recalibrates — this was not the meeting she'd prepared for." },
          { who: "brooks", text: "Six people. You counted. So did I. Here's what you don't know: two of them were new grads, first month on the unit. They learned what escalating gets you before they learned where we keep the crash cart. So — you've thought about the sentence. What do you think it did?" },
        ],
        choices: [
          {
            text: "Own the echo, not just the moment: \"It taught this unit my price list. That escalating to me costs public humiliation — and I've seen the reporting numbers, so I know the unit did the math. You personally kept escalating anyway. The forty percent who stopped were listening to me, not to you. That's what it did, and it's mine.\"",
            next: "a3apology",
            score: { ack: 2, apology: 1 },
            note: "You traced the defection to its full radius — the new grads, the numbers, the fact that her courage partially masked your damage. 'It's mine' with no softening clause is the sound of a costly signal being paid for.",
          },
          {
            text: "Own it, but reach for the context: \"It did damage — I know that. I was nineteen hours in and the last three escalations that night had been nothing. Which explains the sentence, even though it doesn't excuse it.\"",
            next: "a3context",
            score: { ack: 1 },
            note: "'Explains but doesn't excuse' is the most seductive clause in the apology language — it feels honest and functions as a discount. She heard: the sentence had reasons. Every future escalation she makes will now be weighed against how tired you might be.",
          },
          {
            text: "Turn to solutions before finishing the accounting: \"Damage I want to undo. That's why I'm here — I want to design an escalation standard for this unit, with you, so nothing like it can happen again.\"",
            next: "a3rush",
            score: { commit: 1 },
            note: "The mechanism instinct is right — and it arrived one beat early. She asked what you think the sentence *did*. Repair has an order: the debt is named in full before the payment plan is proposed, or the plan reads as a way to shorten the naming.",
          },
        ],
      },

      a2data: {
        turns: [
          { who: "brooks", text: "My read. Sure. My read is that forty percent of this unit watched a physician tell their charge nurse that her concern was a 'feeling' not worth his time, and made a rational decision about paperwork. You were there, Doctor. You want the read, or do you want to say the thing you came to say?" },
        ],
        choices: [
          {
            text: "Drop the clipboard: \"You're right, and I'm doing it again — making you carry the naming. Let me do it. I said it. Six people heard it. Two were new grads. The forty percent is mine, and I've known that longer than I've been willing to say it in this room.\"",
            next: "a3apology",
            score: { ack: 2, apology: 1 },
            note: "She offered you one exit ramp — 'say the thing you came to say' — and you took it at full price. Recovering from a managerial opening into a personal accounting is rare; she noticed.",
          },
          {
            text: "Stay in the frame: \"That's fair, and it's part of why I'm here. But I want to keep this forward-looking — relitigating one bad night helps no one. What would rebuild reporting on this unit?\"",
            next: "a4transactional",
            score: {},
            note: "'Relitigating' — as if the account were settled and she keeps reopening it. The account was never opened. She'll now give you exactly what you asked for: a forward-looking, professional, hollow transaction.",
          },
        ],
      },

      a2fresh: {
        turns: [
          { who: "brooks", text: "'Whatever's happened before.' That's one way to file it. Doctor, I keep a notebook in my locker — you should know this, as my new medical director. Near-misses. The ones that used to go in the reporting system before your predecessor-self explained the house rules at my nurses' station. Eleven entries since March. You want a fresh start? Tell me what we're starting fresh *from*.",
          },
        ],
        choices: [
          {
            text: "Say it — the sentence, the station, all of it: \"From me. From the night I told you, in front of six people, that nursing's feelings weren't worth my time. From eleven near-misses protecting no one because I taught this unit that reporting has a price. That's what we'd be starting from, and none of it is yours to fix.\"",
            next: "a3apology",
            score: { ack: 2, apology: 1 },
            note: "She showed you the notebook — the exact cost of your defection, kept in ink — and you matched it with the full naming. This branch only opens for people willing to be told about the notebook.",
          },
          {
            text: "Acknowledge the notebook, negotiate the framing: \"Eleven entries that should be in the system — that's exactly the problem I want to solve. I hear that there's history here. Can we agree the goal is getting those into the reporting system where they protect people?\"",
            next: "a4transactional",
            score: { commit: 1 },
            note: "'I hear that there's history here' — the passive-distance construction, from the man who is the history. You've treated her notebook as a workflow problem. She will hand you a workflow, and keep the notebook.",
          },
        ],
      },

      a3apology: {
        turns: [
          { who: "narrator", text: "The arms unfold. She looks at you the way she looks at a monitor that's finally reading true." },
          { who: "brooks", text: "That's the first accurate account of that night I've heard from anyone with an MD. So let's have the rest of it. I've heard 'sorry' in this building before — it usually comes with an 'if' and a hurry. Take your time. What exactly are you sorry for?" },
        ],
        choices: [
          {
            text: "The full instrument — act, harm, no clause: \"I'm sorry I humiliated you in front of your unit for doing your job right. Not sorry 'it landed badly' — sorry I did it. You escalated correctly, and I made the correct thing expensive. And I'm sorry it took a promotion and a metrics report to bring me to this room, because you deserved this conversation eight months ago.\"",
            next: "a4commit",
            score: { apology: 2 },
            note: "Every component, on the table: the act (humiliated you), the wrongness (you were right), no escape clause, and — costliest of all — an apology for the lateness of the apology itself. There is nothing in that statement a reputation-manager would say.",
          },
          {
            text: "Sincere, with the institutional wrapper: \"I'm sorry — genuinely. That night wasn't the physician I want to be, and it's not the culture this unit deserves. I want you to know the new medical director role will be different.\"",
            next: "a4roleplay",
            score: { apology: 1 },
            note: "Warmer than most — and watch the pronouns drift: 'the physician I want to be,' 'the culture,' 'the role.' The apology keeps sliding off you and onto abstractions. She was humiliated by a person, not a culture.",
          },
        ],
      },

      a3context: {
        turns: [
          { who: "brooks", text: "Nineteen hours. You know what I was on? Hour eleven of a double, because we were short — the same short that had me escalating instead of watching and waiting. Everyone at that station was tired, Doctor. One of us got a sentence they repeat at orientation now, as a cautionary tale. Try the apology again, without the mileage." },
        ],
        choices: [
          {
            text: "Strip it down: \"You're right. Here it is without the mileage: I'm sorry I humiliated you for being right. No conditions, no fatigue, no context. It was my sentence, said my way, and everything it cost this unit traces to me.\"",
            next: "a4commit",
            score: { apology: 2, ack: 1 },
            note: "She gave you a second attempt — that's generosity in the Axelrod sense, forgiving one round of hedge — and you used it cleanly. The phrase 'without the mileage' will now mean something between you two.",
          },
          {
            text: "Hold your ground gently: \"I'm not offering context as a defense — but I don't think pretending conditions don't exist serves either of us. Systems put tired people in hard rooms. I want to fix the system too.\"",
            next: "a4roleplay",
            score: {},
            note: "Systems thinking — true, valuable, and deployed at the precise moment it functions as armor. She asked for the apology without the mileage; you re-attached the mileage with a systems label on it. Module 1's lens, used as Module 3's shield.",
          },
        ],
      },

      a3rush: {
        turns: [
          { who: "brooks", text: "An escalation standard. Designed with me. That's a good idea — I'll say that plainly. And you've skipped a step. You asked me what your sentence did and then answered with a project plan. I don't need the plan yet, Doctor. I need to know you can sit in what it cost before you start renovating. What did it cost?" },
        ],
        choices: [
          {
            text: "Sit in it: \"You're right, I reached for the fix because the accounting is worse to sit in. What it cost: two new grads learned silence in their first month. Eleven near-misses live in your locker instead of the system. And you've spent eight months being the only person on this unit still paying full price to do the right thing. That's the bill. The plan can wait until you've heard me read it.\"",
            next: "a4commit",
            score: { ack: 2, apology: 1 },
            note: "'The accounting is worse to sit in' — naming your own avoidance mid-conversation is a costly signal about future conversations, not just this one. And you read the bill without rounding down.",
          },
          {
            text: "Redirect once more: \"It cost trust, clearly. And the fastest way I know to rebuild trust is to act — visibly, together. I'd rather show you than keep telling you.\"",
            next: "a4transactional",
            score: { commit: 1 },
            note: "'Show don't tell' is a fine principle for code and a poor one for repair — the telling *is* part of the repair, because the naming is the cost. She asked twice. Charge nurses don't ask three times.",
          },
        ],
      },

      a4commit: {
        turns: [
          { who: "narrator", text: "She's quiet for a moment. Then she reaches into her bag and puts a worn spiral notebook on the table between you — not sliding it over. Just visible." },
          { who: "brooks", text: "Eleven entries. I'll consider putting them in the system — as historical reports, with my name on them, which costs me something too. But first: you've named it and you've apologized, and both were real, so here's the last question. Eight months from now, when you're tired and I page you at three a.m. with a feeling — what happens? Because that's the only version of this that matters." },
        ],
        choices: [
          {
            text: "Commit to something checkable, and price it: \"Three things, and hold me to them out loud. Any escalation from 4W gets a bedside response or a documented reason — no dismissals at stations, ever. If I break that, you say the word 'notebook' to me, in front of whoever's there, and I will stop and fix it in the moment. And the apology I owed you privately, I'll make its substance public — I'm telling the unit at Thursday's huddle that the reporting drop was my sentence, and the standard changes now.\"",
            next: "a5strong",
            score: { commit: 3 },
            note: "A rule, a tripwire she controls, and a public settlement of a public debt. 'Say notebook to me in front of whoever's there' hands her the enforcement mechanism — the costliest commitment available, because it prices your future defections in advance.",
          },
          {
            text: "Commit sincerely, keep it private: \"What happens is I come. Every time. I can't prove eight-months-from-now to you today, but I can promise it — and the escalation standard we'll write together will make it structural.\"",
            next: "a5good",
            score: { commit: 2 },
            note: "A real commitment with a structural backstop — solid. The gap: the original defection was public, and this repair lives entirely in a break room. The six witnesses and two new grads inherit the old information and none of the new.",
          },
        ],
      },

      a4roleplay: {
        turns: [
          { who: "brooks", text: "The role will be different. Roles usually are — that's what they're for. Doctor, I've worked for four medical directors. Every one of them arrived with a culture speech. The ones who mattered, I could tell you what they personally did differently by Thursday. What are you personally doing differently, and how would I know if you stopped?" },
        ],
        choices: [
          {
            text: "Answer her exactly: \"Personally: every 4W escalation gets bedside response or a documented reason — from me, starting tonight. How you'd know if I stopped: you'd say so, to my face, with immunity — and I'm announcing that arrangement at Thursday's huddle so the whole unit holds the receipt, not just you.\"",
            next: "a5strong",
            score: { commit: 3, apology: 1 },
            note: "She asked for falsifiability — 'how would I know if you stopped' — and you gave her a personally-costly rule plus public enforcement. The huddle announcement converts a private promise into a reputational bond.",
          },
          {
            text: "Offer the partnership: \"Fair challenge. I'd rather not decide that alone — will you co-design the escalation standard with me? Your name and mine on it, and we present it together.\"",
            next: "a5good",
            score: { commit: 2 },
            note: "Co-authorship is real currency (Module 1 taught you that), and she'll likely take the work. Note what's still unpriced: what *you personally* do at three a.m., and what it costs you if you don't. Standards bind units; she asked what binds you.",
          },
        ],
      },

      a4transactional: {
        turns: [
          { who: "brooks", text: "Fine. Forward-looking it is. Here's forward-looking: I'll support your reporting push, professionally. I'll tell my nurses the system's worth using again and we'll see if they believe me. You'll get your metrics back, probably — most of the way. Anything else, Doctor? I'm off shift." },
          { who: "narrator", text: "She's giving you exactly what you asked for — cooperation without trust, the unit-culture equivalent of correct-but-minimal charting. The notebook stays in the locker. The two of you will work together fine, the way people work together fine. Somewhere in the metrics, a forty percent recovers to a twenty-five, and stays there." },
        ],
        choices: [
          {
            text: "Stop the transaction before the door: \"Angela — wait. I did this wrong. I came in managing when I owed you an accounting. The sentence at the station was mine, the forty percent is mine, and you've been the only one paying to do things right for eight months. Can I have five more minutes to do this properly?\"",
            next: "a3apology",
            score: { ack: 1, apology: 1 },
            note: "Catching the transaction as it closes — naming your own management-speak — is itself a costly signal. She's been watching you choose the cheap version all meeting; choosing the expensive one at the door is data.",
          },
          {
            text: "Take the deal: \"That's all I can ask. Thank you, Angela — I think we'll do good work together.\"",
            next: "a5cold",
            score: {},
            note: "You accepted cooperation-without-trust as the final state. It will look fine in the metrics and hold until the first three a.m. test — the one moment when the difference between compliance and trust is the whole game.",
          },
        ],
      },

      a5strong: {
        turns: [
          { who: "brooks", text: "Thursday's huddle. You're going to stand in front of my nurses and claim the forty percent." },
          { who: "brooks", text: "...Then here's mine: the notebook goes into the system this weekend. All eleven, my name attached, filed as what they are. And Doctor — the two new grads I mentioned. They're on Thursday. Make sure the sentence you say in front of them is one worth repeating at orientation, because that's what happens to your sentences here." },
          { who: "narrator", text: "Thursday, you say it plainly: the drop was your sentence, the standard changes today, and Angela Brooks holds the tripwire. Eleven historical reports enter the system that weekend; three new ones arrive within the month — one from a new grad. In Module 7, when you need a coalition for something bigger, remember who moved first here: the person with the least reason to." },
        ],
        end: true,
        outcome: "strong",
      },

      a5good: {
        turns: [
          { who: "brooks", text: "Every time. All right — I've heard that before, but not usually after an apology that expensive, so you get the working version of trust: I escalate, you show, and each round we both remember. The standard we write together — that I'll believe in ink." },
          { who: "narrator", text: "It holds. The standard gets written, escalations get answered, and reporting climbs most of the way back over a quarter. The notebook comes out of the locker entry by entry, as tests are passed — tit-for-tat with a human face, trust rebuilt at the pace defections are unlearned. Only the public half stays unfinished: at the station, six people once heard the price of speaking up, and no one has yet heard, out loud, that the price changed." },
        ],
        end: true,
        outcome: "provisional",
      },

      a5cold: {
        turns: [
          { who: "narrator", text: "The initiative works, technically. Reporting recovers to respectable. Brooks is professional in every interaction, which is exactly the word for it. Fourteen months later — you'll hear this from Osei-Mensah, in the context of Module 7's coalition math — when your name comes up for something that needs champions, the answer from 4W is a shrug: 'He's fine.' In a repeated game, 'fine' is what breaking even sounds like. The notebook, as far as anyone knows, is still in the locker." },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "The debt named, priced, and publicly settled",
        text: "You quoted your own defection, read the full bill without rounding down, apologized with no escape clause, and attached a commitment she can enforce — including settling a public debt in public. Her notebook entering the system is the trust signal money can't buy. This is what a costly repair signal looks like when it's fully paid.",
      },
      provisional: {
        label: "Repair real, radius incomplete",
        text: "The private repair was genuine — real acknowledgment, real apology, working trust restored round by round. What's left unfinished is the audience: the defection was public and the repair wasn't, so six witnesses and two new grads still carry the old price list. Replay for the Thursday-huddle branch and notice what public settlement adds.",
      },
      mixed: {
        label: "Cooperation without trust",
        text: "You reached the transactional equilibrium — professional, metric-recovering, hollow. It's stable, which is what makes it dangerous: nothing will force a renegotiation until the three a.m. moment when trust is the only currency accepted. The notebook stayed in the locker. Replay and pay the accounting in full this time.",
      },
    },
  },

  /* --------------------- Step 4b: Switch Chairs --------------------- */
  switchChairs: {
    simId: "switchChairs",
    title: "Switch Chairs: You Are Angela Brooks",
    learnerRole:
      "Eight months ago a physician told you, in front of six people including two brand-new nurses, that your escalation was a 'feeling' not worth his time. You kept escalating — someone has to — but you stopped filing reports, and you started a notebook. Eleven entries. Now that physician is your new medical director, and he's asked for fifteen minutes. Feel what it's like to hold the receipts, price an apology in real time, and decide what your trust costs.",
    personas: [],
    extraSpeakers: {
      director: { name: "The New Medical Director", initials: "MD", role: "Medical Director, 4W — the physician from the nurses' station" },
    },
    scoring: {
      dims: [
        { id: "price", label: "Pricing the signal", max: 4, anchor: "Graded his words by their cost, not their warmth" },
        { id: "voice", label: "Advocacy with a spine", max: 3, anchor: "Held the standard for the unit without slamming the door" },
      ],
    },
    start: "s1",
    nodes: {
      s1: {
        turns: [
          { who: "narrator", text: "The break room. You've rehearsed versions of this meeting for eight months, and none of them started with him requesting it. Your badge is off. The notebook is in your bag — you're not sure why you brought it." },
          { who: "director", text: "Thanks for staying, Angela. I'll be direct — I need 4W's reporting culture rebuilt, and I can't do it without you. Whatever's happened before, I'm hoping we can start fresh and get this unit speaking up again." },
        ],
        choices: [
          {
            text: "Price the opening honestly — name what 'whatever's happened' skips: \"'Whatever's happened before.' Doctor, you were there. If you want a fresh start, tell me what we're starting fresh from — specifically. I'll wait.\"",
            next: "s2test",
            score: { price: 2, voice: 1 },
            note: "From this chair you can feel exactly why the vague version is worthless: he's asking you to co-sign a settlement without reading the debt aloud. Demanding the naming isn't grudge-keeping — it's refusing to misprice.",
          },
          {
            text: "Take the professional exit — it's easier and you're tired: \"Fine. Fresh start. Send me the reporting initiative and I'll tell the nurses to use the system.\"",
            next: "s2fold",
            score: {},
            note: "Feel the pull of this one honestly: it costs nothing tonight, avoids the conversation you've rehearsed too many times, and settles his public defection for free. The forty percent stays taught. This is how cheap apologies get accepted — exhaustion, not agreement.",
          },
          {
            text: "Make him pay retail — the door-slam you've rehearsed: \"Rebuilt by me, for you? That's rich. You broke it in one sentence, Doctor. Rebuild it yourself.\"",
            next: "s2slam",
            score: { voice: 1 },
            note: "Eight months of rehearsal, finally performed. It's not wrong as an account — it's wrong as a strategy: the grim trigger forfeits every future round, including the ones where this unit needs a medical director who owes you honest listening.",
          },
        ],
      },
      s2test: {
        turns: [
          { who: "narrator", text: "He holds your eyes. Whatever he came in with, he's recalculating." },
          { who: "director", text: "...From me. From the night I told you — in front of six of your nurses, two of them new grads — that if I came running every time nursing got a feeling, I'd never finish a note. You were right to escalate. I made being right expensive. The reporting drop is mine. That's what we'd be starting from." },
        ],
        choices: [
          {
            text: "Acknowledge the payment and set the forward price: \"That's the first honest accounting I've heard from an MD in this building. So here's the forward price: 4W escalations get bedside response or a documented reason. Break it once, and I'll say one word — you'll know the word. And the apology you just made me privately? The unit heard the original. They hear the repair too, or it didn't happen.\"",
            next: "s3contract",
            score: { price: 2, voice: 2 },
            note: "You did what Brooks does at her best: received a real signal without discounting it, then converted it into an enforceable contract with a public-settlement clause. Costly apology in, checkable commitment out — that's the exchange rate.",
          },
          {
            text: "Accept it warmly and close the matter: \"Thank you. That's... more than I expected, honestly. Let's call it settled and get to work.\"",
            next: "s3soft",
            score: { price: 1 },
            note: "The apology was real, and you accepted it at slightly below value — no forward commitment, no public settlement, no tripwire. Generosity is right; leaving the enforcement clause unwritten is how real repairs erode by June.",
          },
        ],
      },
      s2fold: {
        turns: [
          { who: "director", text: "That's — good. Great. I'll have the initiative materials to you by Friday. And Angela... thank you for being bigger than the history." },
          { who: "narrator", text: "'Bigger than the history.' In the hallway afterward, you translate it: the history now has an official size, and it's small. You tell the nurses the system's worth using again. Torres, one of the new grads from that night, asks quietly: 'Did he actually apologize?' You consider the question longer than you expected to." },
        ],
        choices: [
          {
            text: "Answer Torres honestly — and reopen your own case: \"No. He didn't. And I shouldn't have let that slide — for your sake more than mine. I'm going back in.\"",
            next: "s2reopen",
            score: { voice: 2 },
            note: "The new grad's question is the whole module: the audience of a public defection holds shares in its repair. You can't privately settle a debt that was publicly incurred — and Torres just reminded you whose trust is actually at stake.",
          },
          {
            text: "Shade it: \"More or less. What matters is the system works again — use it.\"",
            next: "s4taught",
            score: {},
            note: "'More or less' — from you, to a first-year nurse, about whether speaking up got its price back. Feel what just happened: to end your own discomfort, you passed the mispricing downstream. This is how forty percents become permanent.",
          },
        ],
      },
      s2slam: {
        turns: [
          { who: "director", text: "...That's fair. Not useful, maybe, but fair. I'll say one thing before I go, and then I'll leave you alone: you were right that night, I made it cost you, and I know eleven months of 'rebuild it yourself' won't fix what one sentence broke. If you ever want the version of this conversation where I say that properly, the door's open." },
          { who: "narrator", text: "He leaves. You have the satisfaction, whole and warm, for about a shift and a half. Then Ramos pages the new director at 02:40 with a soft concern, and you catch yourself listening for how it goes — because whatever he owes you, the unit still needs the channel you just declined to rebuild." },
        ],
        choices: [
          {
            text: "Take the reopened door — on your terms: \"Doctor — the version where you say it properly. I'm listening now. Start with the six people who heard the original.\"",
            next: "s2test",
            score: { voice: 1 },
            note: "Coming back from a grim trigger is the forgiveness half of the strategy — and note you returned with the standard intact ('start with the six people'). The door reopens at your price, not at zero.",
          },
          {
            text: "Let it stand — some doors should stay shut.",
            next: "s4frozen",
            score: {},
            note: "The tournament data on permanent grudges is unsentimental: both players lose every remaining round. On 4W, 'both players' includes twenty-two nurses and every patient whose near-miss stays in a locker.",
          },
        ],
      },
      s2reopen: {
        turns: [
          { who: "narrator", text: "You knock on his office door the same afternoon. He looks up, and something in your face tells him this is the real meeting." },
          { who: "director", text: "Angela. I got the initiative acceptance email and I've been sitting here feeling like I stole something. Sit down — I think I owe you a conversation I tried to skip." },
        ],
        choices: [
          {
            text: "Set the terms of the real conversation: \"You do. Here's the shape of it: you name what happened — the sentence, the audience, the eight months. Then we talk about what changes and how the unit hears it. I didn't come back for 'we good.' I came back because Torres asked me if you apologized and I didn't have an answer I could say to a new grad.\"",
            next: "s2test",
            score: { price: 1, voice: 1 },
            note: "You gave him the repair specification — act, audience, echo, forward terms — before letting the conversation start. From this chair it's suddenly obvious why: the person owed the debt is the only one who can define what settlement means.",
          },
        ],
      },
      s3contract: {
        turns: [
          { who: "director", text: "Bedside or documented reason — done, starting tonight. The word — understood, and I'll take it standing up, whoever's there. And Thursday's huddle: I'll tell the unit the drop was my sentence and the standard changes now. One request: be there when I say it. Not for support — for verification." },
          { who: "narrator", text: "Thursday, he says it plainly, no mileage. Torres watches you while he talks, and you nod once — verified. That weekend, you file all eleven entries, your name attached. It costs you something, exactly as you knew it would; that's what makes it a signal. Within a month there are three new reports in the system, and one of them is Torres's. The channel works because both directions finally paid full price." },
        ],
        end: true,
        outcome: "strong",
      },
      s3soft: {
        turns: [
          { who: "narrator", text: "The work goes well — genuinely. He answers escalations; you tell the nurses the system's worth using; numbers climb. But 'settled' turns out to have been a private word: at the station, the six who heard the original sentence never hear its retraction, and the new grads keep the old price list with a question mark on it now instead of a period. Reporting recovers to most-of-the-way. In this building, you reflect, most-of-the-way is what un-finished repairs always plateau at." },
        ],
        end: true,
        outcome: "provisional",
      },
      s4taught: {
        turns: [
          { who: "narrator", text: "The metrics recover; the initiative succeeds; your professional relationship with the director is, by any audit, fine. But you notice what you did with Torres's question for months — because Torres noticed too, and Torres is watching how you escalate now, learning charge-nursing from the version of you that says 'more or less.' The notebook stays in your bag. Some habits transmit whether or not you meant to teach them. From this chair, the lesson has a particular sting: the defended became the defender who taught the discount." },
        ],
        end: true,
        outcome: "mixed",
      },
      s4frozen: {
        turns: [
          { who: "narrator", text: "You work the next fourteen months as excellent, adjacent professionals. He builds his reporting initiative around you — carefully, respectfully, and without you. It half-works. At 02:40 calls, you're correct and complete and nothing more, and so is he. Sometimes, restocking the med room, you feel the shape of the conversation that would have fixed this, still available, going stale. The grim trigger's true cost, you understand now, isn't the relationship — it's every version of the unit that needed the two of you to have had it." },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "The receipts, honored in full",
        text: "You demanded the naming, received a costly apology without discounting it, and converted it into an enforceable contract — tripwire, public settlement, verification. The transfer question: someone owes you a repair right now, in your real work. Have you ever specified for them what settlement would actually consist of? From this chair, you now know they can't guess.",
      },
      provisional: {
        label: "Real repair, quietly underpriced",
        text: "You held the line where it mattered most and softened it where it was easiest — the forward commitment, the public settlement, the enforcement clause. From Brooks's chair the lesson lands differently than from the director's: accepting slightly-cheap repair feels like grace in the moment and reads as a price signal forever.",
      },
      mixed: {
        label: "The chair's hardest lessons",
        text: "Either the grudge held (and the unit paid for it round after round), or the discount got passed downstream to a new grad learning what escalation costs. Both are true stories from real units. Replay for the branch where the receipts get honored — it requires the wronged party to do something almost as hard as apologizing: naming their price.",
      },
    },
  },

  /* --------------- Step 5: Multidisciplinary Meeting --------------- */
  meeting: {
    simId: "meeting",
    title: "The Huddle That Learned Silence",
    learnerRole:
      "Three weeks after your repair conversation with Angela Brooks, you're leading 4W's first weekly safety huddle under the new escalation standard. In the room: Brooks, pharmacist Ify Adeyemi, and two of the unit's nurses — Dev Torres (the new grad who was at the station eight months ago) and Marisol Vance (eleven years on 4W, seen every initiative come and go). CNO Renée Osei-Mensah is observing from the back, unannounced agenda of her own. The unit has learned that speaking up is expensive. Your job: run the huddle so that the first person to test the new price wins — visibly.",
    personas: ["brooks", "adeyemi", "osei"],
    extraSpeakers: {
      torres: { name: "Dev Torres, RN", initials: "DT", role: "Staff Nurse, 4W — first year" },
      vance: { name: "Marisol Vance, RN", initials: "MV", role: "Staff Nurse, 4W — eleven years" },
    },
    scoring: {
      dims: [
        { id: "invite", label: "Making challenge cheap", max: 3, anchor: "Specific invitations, named safety, no fishing with 'any concerns?'" },
        { id: "respond", label: "Rewarding the first mover", max: 4, anchor: "The first speak-up was visibly thanked, acted on, and closed" },
        { id: "future", label: "Lengthening the shadow", max: 3, anchor: "Installed a mechanism that outlives this huddle" },
      ],
    },
    start: "h1",
    nodes: {
      h1: {
        turns: [
          { who: "narrator", text: "07:15, the 4W conference alcove. Coffee, clipboards, folded arms. Torres stands near the door. Vance has the expression of a woman attending her fourth culture reboot. Osei-Mensah nods at you from the back wall: proceed." },
        ],
        choices: [
          {
            text: "Open by re-pricing, with the history named: \"Before the census: most of you know the reporting on this unit dropped because of a sentence I said at that nurses' station. The standard changed three weeks ago — bedside or documented reason, and Angela holds the tripwire. This huddle is where we test it. I'm asking for the near-miss nobody filed, and the first person to bring one is doing this unit a favor, not confessing.\"",
            next: "h2opened",
            score: { invite: 2 },
            note: "You named the history (which everyone was thinking about anyway), restated the price change, and reframed the first speak-up as a contribution rather than an exposure. The room's math just changed — whether it changed enough, the next silence will tell you.",
          },
          {
            text: "Open neutral and procedural: \"Morning, everyone. New weekly safety huddle — quick census review, then I'd love to hear any concerns. Anyone have anything?\"",
            next: "h2silence",
            score: {},
            note: "'Any concerns, anyone?' — the generic invitation, priced at zero information. On a unit that learned silence, an open question is a mirror: it reflects the culture back at you. Six seconds of quiet coming.",
          },
        ],
      },

      h2opened: {
        turns: [
          { who: "narrator", text: "Vance studies you with eleven years of initiative-scar tissue. Torres looks at Brooks. Brooks looks at the room — deliberately neutral. She filed her eleven; the rest is theirs to test." },
          { who: "vance", text: "Since you're asking directly, Doctor — a question first, not a report. Rodriguez, two months ago, flagged a pharmacy substitution issue to the last covering doc. Got told 'noted.' Never heard another word. She's not here today, and that's probably not an accident. Why would this time be different? And don't say 'because of the standard.'" },
        ],
        choices: [
          {
            text: "Answer with a demonstration, not a promise — resolve Rodriguez's flag now: \"Fair rule. Then not the standard — this: Ify, the substitution flag from two months ago. Do you know it, and what happened downstream?\" — and to Vance — \"Watch what happens to a two-month-old 'noted' in the next five minutes. That's my answer.\"",
            next: "h3demo",
            score: { respond: 2, invite: 1 },
            note: "Vance asked for evidence and you offered a live specimen: the unclosed loop, reopened in front of the room. Nothing you could say would out-signal actually closing Rodriguez's loop with witnesses.",
          },
          {
            text: "Answer with sincerity: \"Because I'm accountable for it now, personally, and because Angela will call it if I slip. I know words are cheap after eight months — I'm asking for one test case.\"",
            next: "h3promise",
            score: { invite: 1 },
            note: "Honest, and it hears as another culture speech to a woman on her fourth reboot. Vance offered you something better than an opening for sincerity — she offered a checkable failure. Unclosed loops are repair opportunities wearing complaint costumes.",
          },
        ],
      },

      h2silence: {
        turns: [
          { who: "narrator", text: "Six seconds. Seven. The census sheet gets studied like scripture. Torres opens their mouth, glances at the back wall where the CNO stands, closes it. Vance examines her coffee. Brooks — deliberately — lets the silence run: this is the data, Doctor, her face says. This is what forty percent sounds like." },
        ],
        choices: [
          {
            text: "Read the silence out loud and lower the price: \"Okay — that silence is the most honest thing said this morning, and it's mine to own. This unit learned that speaking up costs. So let me go first: the near-miss I know about is my own — the sentence at that station, and the forty percent that followed. Now I'm asking for one specific thing, not 'concerns': Dev — you started your mouth a second ago and stopped. That stop is exactly what I'm trying to buy back. What was it?\"",
            next: "h3torres",
            score: { invite: 2, respond: 1 },
            note: "Three moves in one: you named the silence as data (no pretending), went first with your own failure (lowering the price by paying it yourself), and converted the generic invitation into a specific, personal, warm one. 'What was the stop?' is very hard not to answer.",
          },
          {
            text: "Fill the silence with structure: \"All right — nothing today, which is fine. Let's institute a standing format: each week, one near-miss minimum, rotating by assignment. Marisol, you'll have next week's.\"",
            next: "h3mandated",
            score: { future: 1 },
            note: "Mandated vulnerability — a quota for candor. You'll get a report next week; it will be the safest, most curated near-miss on the unit. Compliance formats produce compliance content. The silence was the thing to work with, and it just got papered over.",
          },
        ],
      },

      h3torres: {
        turns: [
          { who: "torres", text: "It's — okay. Tuesday. Bed 12's insulin drip. The pump settings and the order didn't match after transport, and I fixed it and... didn't file it. Because the mismatch happened on handoff and I didn't want it to look like I was writing up the float nurse. Who was covering because we were short. It didn't seem worth what it might cost her." },
          { who: "narrator", text: "The room is very quiet — a different quality of quiet than before. Torres has just filed the first live report on 4W in months, verbally, with the CNO watching. What you do in the next thirty seconds is the new price list, published." },
        ],
        choices: [
          {
            text: "Pay the first mover in full, in public: \"Dev — that's the most valuable thing anyone's brought this unit in months, and notice what it is: a system catch, not a person catch. The pump-order mismatch survives transport — that's a process hole, and the float nurse is a witness, not a defendant. File it today exactly as you told it; I'll co-sign the systems framing. And everyone heard what just happened: Torres tested the new price, and the answer is thank you, in front of the CNO, on the record.\"",
            next: "h4cascade",
            score: { respond: 2, invite: 1 },
            note: "First-mover economics, handled precisely: named the contribution, protected the third party Torres was shielding (which was the real barrier), and made the reward as public as the old punishment was. The unit just watched someone speak up and profit.",
          },
          {
            text: "Accept it and process it properly: \"Thank you, Dev. File it through the system today and route it to pharmacy for the pump-library review. Next item — census.\"",
            next: "h4flat",
            score: { respond: 1 },
            note: "Procedurally correct, economically flat. Torres paid the first-mover price — with the CNO watching — and received standard processing. The unit's takeaway: speaking up is safe now. Not rewarding, just safe. Safe alone doesn't reverse a forty percent.",
          },
        ],
      },

      h3demo: {
        turns: [
          { who: "adeyemi", text: "I know the flag. Heparin substitution during the shortage — Rodriguez caught a concentration difference the transition orders didn't reflect. I flagged it upstream the same day; it stalled somewhere between pharmacy and the medical staff office. Since we're doing this in daylight: I can trace exactly where it stalled by this afternoon. It's the kind of thing that stalls quietly." },
          { who: "brooks", text: "And for the record — the 'somewhere it stalled' has a name and it's the old covering-doc structure. Which is the point of the standard, so: Doctor, close it. Bedside or documented reason. The room's watching." },
        ],
        choices: [
          {
            text: "Close it, assign it, and route the credit backwards: \"Then here's the close: Ify traces the stall today; whatever it is, I own unsticking it and reporting back at Thursday's huddle — by name, what happened, what changed. And Rodriguez gets told personally that her two-month-old flag just fixed a heparin process — because the person who caught it should be the first to hear it mattered, not the last. Marisol — good enough, or hold me to more?\"",
            next: "h4cascade",
            score: { respond: 2, future: 1 },
            note: "The loop closes with a date, an owner, and — the move most leaders skip — retroactive credit to the original reporter who got 'noted.' Paying old debts publicly is what makes new deposits rational. And you handed Vance the verification role she was born for.",
          },
          {
            text: "Take it offline: \"Good — Ify, trace it and email me. Vance, fair challenge, and I think you'll see the difference over time. Let's get to census.\"",
            next: "h4flat",
            score: { respond: 1 },
            note: "'Email me' just moved the demonstration back into the invisible channel where Rodriguez's flag originally died. Vance asked why this time is different; the answer became 'you'll see, eventually' — the fourth reboot's official slogan.",
          },
        ],
      },

      h3promise: {
        turns: [
          { who: "vance", text: "One test case. All right, Doctor — but I pick it. Rodriguez's substitution flag, the one that got 'noted' into oblivion. Resurrect that, show this room what happened to it and what happens now, and you'll have your reporting culture by Friday. Words about the future are free. Archaeology costs something." },
        ],
        choices: [
          {
            text: "Accept her test on her terms: \"Deal — and out loud, so it's checkable: Ify, can you trace the flag? I'll report the full chain Thursday — where it stalled, why, what changed — and Rodriguez hears it from me first. Marisol, you're the judge of whether it counts.\"",
            next: "h3demo",
            score: { respond: 1, invite: 1 },
            note: "She designed a costly signal for you — resurrect a dead report, in public, with her as verifier — and you accepted without haggling. Skeptics who set the test and watch you pass it convert harder than believers.",
          },
          {
            text: "Counter with something more current: \"The Rodriguez thing predates the standard — I'd rather demonstrate on something live. Bring me this week's concern and watch what happens to it.\"",
            next: "h4flat",
            score: {},
            note: "You just declined the archaeology — which was the whole test. 'Predates the standard' hears as 'old debts aren't covered,' and every unfiled near-miss in the room is an old debt. The unit doesn't need the new system demonstrated; it needs the old failure repaired.",
          },
        ],
      },

      h3mandated: {
        turns: [
          { who: "vance", text: "Rotating near-miss quota. Sure, Doctor. I'll have one for you next week — clean, minor, and true. That's what quotas get: the truth that's safe to schedule. Rodriguez had a real one two months ago, brought it voluntarily, and got 'noted.' Fix that math and you won't need a rota." },
        ],
        choices: [
          {
            text: "Let her redirect you — drop the quota, take the case: \"That's the second time this meeting has tried to tell me something and I've reached for a format instead. You're right. Tell me about Rodriguez's flag — and let's fix that math in front of everyone, right now.\"",
            next: "h3demo",
            score: { invite: 1, respond: 1 },
            note: "Naming your own format-reflex mid-meeting — 'the second time this meeting has tried to tell me something' — is the leader-side version of speaking up. Vance has watched four directors reach for formats; she's never watched one put the format down.",
          },
          {
            text: "Defend the structure: \"The rota stays — structure is how habits form. But yes, send me the Rodriguez details and I'll look into it.\"",
            next: "h4flat",
            score: { future: 1 },
            note: "Both moves half-taken: a quota that will generate curated content, and a real failure routed to the private channel ('send me details') where its predecessor died. Structure without demonstrated payoff is scaffolding on an empty lot.",
          },
        ],
      },

      h4cascade: {
        turns: [
          { who: "narrator", text: "Something shifts in the alcove's economics. Vance — Vance — says: 'Since we're doing daylight: the weekend med-room workflow has a gap I've been working around for a year and a half.' A year and a half. Adeyemi is writing. Torres is sitting down now, near the table." },
          { who: "osei", text: "Stepping out of observer mode, briefly. I've stood in the back of perhaps two hundred safety huddles at this hospital. What I just watched — a first-year nurse testing the price of candor and profiting, an eleven-year nurse unretiring a workaround — is what the start of the reversal looks like, and I'd like to make it structural before it evaporates. Doctor: what do you need from my office to make this huddle's economics permanent?" },
        ],
        choices: [
          {
            text: "Ask for mechanisms, not endorsement: \"Three things. Protected time — huddle attendance counted as clinical hours, so candor doesn't compete with patient care. A closed-loop guarantee with teeth: every report gets a named owner and a report-back date, tracked on the unit board where the census hangs. And the tripwire goes system-wide: any 4W nurse can invoke the standard to any physician, with your office as the backstop when the physician outranks the unit. The culture piece we'll do ourselves — what I need from you is the payoff structure.\"",
            next: "h5strong",
            score: { future: 2 },
            note: "Offered executive sponsorship, you asked for payoff engineering: time (candor costs hours), visibility (the board makes closure checkable), and enforcement across hierarchy (the backstop for when the gradient is steepest). 'The culture piece we'll do ourselves' — Osei-Mensah will remember that sentence in Module 7.",
          },
          {
            text: "Ask for air cover: \"Honestly, Renée — your visible support. If your office endorses the huddle and the standard, it signals to every department that 4W's approach is the system's direction.\"",
            next: "h5good",
            score: { future: 1 },
            note: "Endorsement is real currency, but it's cheap-signal currency — a memo from the CNO's office costs the CNO's office nothing, and every unit has a binder of endorsed initiatives. She offered you structural change and you ordered a reference letter.",
          },
        ],
      },

      h4flat: {
        turns: [
          { who: "narrator", text: "The huddle completes its agenda. Reports tick up over the following weeks — modestly, politely: the safe catches, the scheduled truths. The workaround Vance has nursed for eighteen months stays hers. In the hallway afterward, Osei-Mensah falls into step beside you." },
          { who: "osei", text: "A fair start, Doctor. May I offer one observation from two hundred huddles? Somewhere in there, someone offered you a test — the old flag, the silence, the stopped sentence — and you processed it instead of paying it. Units don't believe new prices until they watch the first purchase. Find your Rodriguez case, close it in daylight, and run that huddle again. The window doesn't stay open forever, but it's open." },
        ],
        choices: [
          {
            text: "Take the coaching and name the miss: \"You're right — Vance handed me the test and I routed it to email. Thursday's huddle opens with the Rodriguez chain, closed end to end, with her as the verifier. And Renée — when it works, I'm going to come asking for the structural version. Protected time, tracked closure, a backstop above my rank.\"",
            next: "h5recover",
            score: { respond: 1, future: 1 },
            note: "The CNO told you precisely where the huddle leaked and you neither defended nor deflected — you scheduled the repair and pre-ordered the mechanism. Coachability, in front of the coach who decides Module 7's coalitions.",
          },
          {
            text: "Note it politely: \"Appreciated — though I'd argue steady and modest is the sustainable path. Cultures turn slowly.\"",
            next: "h5slow",
            score: {},
            note: "'Cultures turn slowly' is true, and it's also the sentence slow turns hide behind. She watched a window open and named it for you; 'steady and modest' declined the information. Reports will plateau at polite.",
          },
        ],
      },

      h5strong: {
        turns: [
          { who: "osei", text: "Clinical-hours protection, a tracked closure board, and a cross-hierarchy backstop. You're the first person to answer that question with a list I can actually budget. You'll have all three in writing by Friday — and Doctor, when my office next needs a unit to prove something can work, I now know which board to point at." },
          { who: "narrator", text: "Within a quarter: the closure board hangs beside the census, every report wearing an owner and a date. Vance's eighteen-month workaround becomes a system fix with her name on the report. Torres precepts new grads on 'how we file here.' And in the metrics review, 4W's line crosses its old baseline going up — past the forty percent, past 'recovered,' into a unit that reports more than it ever did before the sentence. That's the tell of real repair: not restoration. Improvement, because the mechanism is better than what the defection broke." },
        ],
        end: true,
        outcome: "strong",
      },
      h5good: {
        turns: [
          { who: "narrator", text: "The endorsement memo arrives, professionally warm. The huddle holds its gains — Torres keeps filing, the demonstrated loops stay closed — and the deeper economics stay personal: it works because you personally answer, Brooks personally enforces, Adeyemi personally traces. Personal mechanisms work until the people rotate; nothing yet survives you. The line climbs to 'recovered' and rests there. From the back wall at the next huddle, Osei-Mensah watches with an expression you'll learn to read in Module 7: an executive holding a budget line no one has asked her to spend." },
        ],
        end: true,
        outcome: "provisional",
      },
      h5recover: {
        turns: [
          { who: "narrator", text: "Thursday's huddle opens with archaeology: the Rodriguez chain on the screen, stall point named, fix described, Rodriguez in the room hearing — first and publicly — that her flag mattered. Vance, appointed verifier, renders judgment in four words: 'It counts. Next case.' Then she reports the med-room workaround. The reversal starts one huddle late, which — as the CNO notes on her way out — is within tolerance: 'Windows care that you climb through them, Doctor, not how gracefully.'" },
        ],
        end: true,
        outcome: "provisional",
      },
      h5slow: {
        turns: [
          { who: "narrator", text: "Steady and modest holds: reports plateau at polite, the huddle becomes a well-run meeting, and the unit's deeper inventory — the workarounds, the eighteen-month gaps, the things Vance knows — stays off the books. Cultures do turn slowly, it's true. But standing at the med-room door some weeks later, watching Vance execute her workaround with eleven years of quiet fluency, you can see the actual speed limit: cultures turn at the rate someone pays the first mover, and on 4W the first purchase is still waiting at the register." },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "The price list, rewritten in public",
        text: "You named the history, made the first speak-up profitable in front of witnesses, paid old debts retroactively, and converted executive goodwill into payoff mechanics — protected time, tracked closure, a backstop above your rank. The line crossing its old baseline going up is the module's thesis in one metric: repaired trust plus better mechanism beats the world before the defection.",
      },
      provisional: {
        label: "The reversal started — one layer shy",
        text: "The huddle's economics changed and the first movers got paid; what's missing is the layer that survives personnel: structure. Personal trust decays with rotation schedules; mechanisms don't. Note what Osei-Mensah offered and what was asked of her — the gap between endorsement and infrastructure is the gap between 'recovered' and 'better than before.'",
      },
      mixed: {
        label: "A well-run meeting on a silent unit",
        text: "The huddle succeeded as a meeting and stalled as an intervention: the tests offered — the silence, the stopped sentence, the dead flag — got processed instead of paid. Units watch what happens to the first mover, and no one moved because moving hasn't visibly paid yet. Replay and find the moment someone handed you a test; the whole session turns on whether you recognize it as a gift.",
      },
    },
  },

  /* ---------------------- Step 6: Reflective Debrief ---------------------- */
  debrief: {
    intro:
      "Advocacy-inquiry, one more time. This module asked you to play both sides of a broken relationship — the debtor and the creditor — and then to reprice speaking up for a whole room. The reflections below work best if you let real names into them.",
    prompts: [
      {
        id: "d1",
        frame: "Advocacy · Inquiry",
        question:
          "I noticed the simulations turned on costly signals: quoting your own worst sentence, filing eleven notebook entries, closing a dead report in public. Cheap versions were always available and always detected. Think of a repair you've attempted that didn't take — what was the cheap element in it, and what would the costly version have required of you?",
      },
      {
        id: "d2",
        frame: "Concept transfer",
        question:
          "Which of your real relationships are you currently playing as one-shot games that are actually repeated games — where you're hard-bargaining, scoring points, or writing someone off as though there were no next round? Name the relationship and the next scheduled 'round' where the game will be played again.",
      },
      {
        id: "d3",
        frame: "Noise audit",
        question:
          "Recall a defection you're currently holding against someone — a slight, a silence, an undermining. Apply the noise test honestly: what's the most plausible innocent explanation, and have you actually run the one clarifying question that would distinguish it from the guilty one? If not, what's the question, and what does it cost you to ask it?",
      },
    ],
    commitment: {
      id: "commit",
      label: "Commitment to practice",
      question:
        "Write one concrete commitment for the next 30 days — either (a) a specific repair: the person, the act you'll name without an 'if,' and the checkable forward commitment you'll attach; or (b) a first-mover payment: one place you lead where someone recently spoke up and got 'noted,' and how you'll close their loop visibly enough that the room learns the new price. Module 7 will ask you what the repaired relationship made possible.",
    },
  },
};
