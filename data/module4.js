/* Module 4 — The Contract Table: Negotiation and Bargaining
   Fully authored content: vignette, concept coach, MCQ case, one-on-one
   negotiation, Switch Chairs variant, pre-negotiation huddle, debrief. */

export const module4Content = {
  /* ------------------------- Step 1: Topic Video ------------------------- */
  video: {
    vpTitle: "The Deal That Changed Shape",
    vignette: [
      "For eleven weeks, Meridian Health and Cascade Health Plan negotiated the way health systems and payers usually do: over rates. Meridian opened at a nine percent increase; Cascade countered at one; the weeks between were spent moving decimal points and threatening network exits neither side wanted. Both negotiating teams described the process, privately, with the same word: trench warfare.",
      "The deal changed shape on a Tuesday, almost by accident. Meridian's CFO, tired and off-script, asked a question that wasn't about rates: 'What's actually killing you on our book of business?' Cascade's director answered honestly — readmissions and out-of-network imaging leakage, the two line items her own bonus rode on. Meridian happened to be sitting on an unfunded readmission-reduction program and idle imaging capacity.",
      "Six weeks later they signed something neither side had walked in wanting: a modest base increase, a shared-savings corridor on readmissions, and a steerage agreement on imaging. Meridian got more total dollars than its opening demand. Cascade's total cost of care went down. The eleven weeks of trench warfare had been a fight over how to slice the pie; the Tuesday question was the first moment anyone tried to make the pie bigger.",
    ],
    teaching: [
      {
        h: "Two games at every table",
        p: "Distributive negotiation is the fixed-pie game: every dollar you win, I lose — rates, salaries, the price of anything. Integrative negotiation creates value before claiming it: because the parties weigh things differently, trades exist that make both better off. Almost every real negotiation is both games at once, which is the negotiator's dilemma: the openness that creates value (revealing what you actually care about) is exactly what a purely distributive opponent can exploit. Skilled negotiators manage the mix; unskilled ones play pure distribution by default and leave the pie small.",
      },
      {
        h: "BATNA: where bargaining power actually lives",
        p: "Your Best Alternative To a Negotiated Agreement is what you'll do if this table produces nothing — and it, not eloquence or aggression, is the true source of leverage. Every offer should be measured against it; anything better is a candidate, anything worse is a walk. Three corollaries do most of the work: know your BATNA precisely before you sit down (vague alternatives produce vague resolve); improve it away from the table (the strongest negotiation move often happens outside the room); and estimate theirs, because their desperation or comfort prices everything they say.",
      },
      {
        h: "Anchors, interests, and the questions that find them",
        p: "First numbers gravitationally warp everything after them — that's anchoring, and it works even on people who know about it. The counter isn't matching aggression; it's re-anchoring on objective criteria: market data, benchmarks, precedent. Deeper than positions (what they say they want) lie interests (why they want it) — and interests are where trades hide. The tool for reaching them is active listening deployed as strategy: 'what's driving that number?' is not a courtesy, it's an excavation. The Tuesday question that changed the Cascade deal was an interest question asked eleven weeks late.",
      },
      {
        h: "The ethics thread: power asymmetry and the long game",
        p: "Meridian often negotiates from strength — against small physician groups, community organizations, vendors who need the contract more than Meridian does. The distributive logic says extract everything the asymmetry allows. Module 3's logic says notice what game you're actually in: today's squeezed counterpart is tomorrow's referral source, merger partner, or witness — and extractive wins are taught, remembered, and priced into every future table you sit at. Principled negotiation — interests, objective criteria, people separated from problems — isn't softness. It's what bargaining looks like when you remember the game repeats.",
      },
    ],
  },

  /* ---------------------- Step 2: AI Concept Coach ---------------------- */
  coach: {
    coachName: "The Concept Coach",
    intro:
      "Before Jordan Pierce anchors you into next fiscal year, let's sharpen the three instruments: BATNA arithmetic, the interest excavation, and anchor defense. Quick scenarios — commit to answers.",
    exchanges: [
      {
        coach:
          "BATNA first. Meridian's dialysis service is negotiating with its sole nephrology group, who demand a 20% subsidy increase. Your team's mood is 'we have no choice.' Walk the discipline: what IS Meridian's BATNA here, and what does the answer do to the negotiation?",
        options: [
          {
            text: "The BATNA is whatever Meridian would actually do on no-deal — recruit employed nephrologists, contract a competing group from the next market, telemedicine coverage, or (worst case) subsidized transfer of the service. Pricing those options, even the ugly ones, converts 'we have no choice' into 'our walk-away is X' — and the group's demands get measured against X instead of against fear.",
            quality: "good",
            feedback:
              "Exactly — and notice the sequence: the BATNA analysis comes *before* the table, because its value isn't as a threat to brandish but as a ruler to measure with. Teams that skip it negotiate against their own anxiety, which always demands more concessions than the counterpart does. And the corollary: if every alternative truly is terrible, the move is to spend six months improving one *before* renegotiating — leverage is built away from the table.",
          },
          {
            text: "Meridian has no real BATNA — you can't run dialysis without nephrologists, so the goal should be preserving the relationship while minimizing the increase.",
            quality: "partial",
            feedback:
              "You've named the feeling that kills negotiating teams: 'no real BATNA' is almost never literally true — it means 'all our alternatives are painful and we haven't priced the pain.' Unpriced pain reads as infinite, so the group's 20% looks cheap against infinity. Price the alternatives — recruitment costs, locum coverage, a two-year transition — and 20% suddenly has something to be compared to. Relationship preservation matters; it just isn't a substitute for arithmetic.",
          },
          {
            text: "The BATNA is to threaten to close the dialysis line — communicated credibly, it forces the group back to reality.",
            quality: "miss",
            feedback:
              "Two confusions in one move. First, a BATNA you wouldn't actually execute isn't a BATNA, it's a bluff — and sole-source counterparts are precisely the ones who can afford to call bluffs. Second, the BATNA's primary job is internal (your measuring stick), not theatrical (their scare). Threats derived from alternatives you fear more than they do transfer leverage to the other side the moment your fear shows.",
          },
        ],
      },
      {
        coach:
          "Interests versus positions, rapid fire. An orthopedic surgeon is demanding the 7 a.m. first-start slot every single day — schedule chaos, other surgeons furious. 'First start, every day, non-negotiable.' That's the position. Give me the three most plausible *interests* underneath it, and the question that would surface them.",
        options: [
          {
            text: "Plausible interests: predictability (school pickup, an athletic-team commitment, clinic timing), efficiency (his team assembled before add-ons wreck the day), or status (first start as visible rank). The question: 'Help me understand what first-start solves for you — what does your day look like when you don't get it?' Each interest has a different solution, and only one of them actually requires 7 a.m.",
            quality: "good",
            feedback:
              "That's the excavation. If it's predictability, a guaranteed *fixed* start at 9:30 may beat a contested 7:00. If it's efficiency, block protection and a dedicated team solve it at any hour. If it's status, the currency is recognition, which is cheaper than schedule chaos. Positions are single points; interests are regions — and regions overlap where points can't. The question format matters too: 'what does it solve for you' invites information; 'why do you insist' invites defense.",
          },
          {
            text: "The interest is obviously convenience — surgeons want the schedule built around them, and the real issue is entitlement culture.",
            quality: "partial",
            feedback:
              "Maybe! Convenience-as-entitlement is a real phenomenon. But notice what the diagnosis does: it ends the inquiry. 'Entitlement' is a character explanation (Module 1 warned you about those), and it forecloses the cheap trades that exist if the interest turns out to be a 3:15 school pickup. Hold the cynical hypothesis if you like — just ask the excavating question first, because you lose nothing by asking and everything by assuming.",
          },
          {
            text: "It doesn't matter what's underneath — rewarding a 'non-negotiable' demand with interest exploration teaches everyone to make demands.",
            quality: "miss",
            feedback:
              "You're defending against a real hazard (incentivizing bluster) with the wrong shield. Exploring interests isn't conceding the position — it's the opposite: 'non-negotiable' positions usually *collapse* under interest questions, because once the underlying need is named, the specific demand loses its cover. Refusing to look underneath leaves you with only two moves, cave or fight, which is exactly the game the demander chose. Don't play their game; change it.",
          },
        ],
      },
      {
        coach:
          "Anchor defense. A locum agency opens: 'Given the market, crisis rates are now $340 an hour — honestly we're doing you a favor holding it there.' Your budget assumed $240; the regional benchmark is $255. Script your actual next three sentences.",
        options: [
          {
            text: "\"Before we discuss your number, let's establish the objective picture: regional benchmark for this specialty is $255, and our last three contracts closed between $240 and $260 — I'll send the data. So the conversation I'm prepared to have starts from the market, not from $340. Within that frame, what flexibility matters most to you — volume commitment, scheduling certainty, length of contract?\"",
            quality: "good",
            feedback:
              "Textbook anchor defense in three moves: name-and-neutralize (refusing to counter inside their frame — countering $340 with $300 concedes the anchor worked), re-anchor on objective criteria (benchmarks and precedent, with receipts), and pivot immediately to integrative ground (what they value that's cheap for you: certainty, volume, duration). The last sentence is what separates anchor defense from anchor combat — you've re-set the frame *and* opened the pie question in one breath.",
          },
          {
            text: "Counter hard and low: \"$200. And given your 'favor' framing, maybe $190. Now we can meet in the middle like adults.\"",
            quality: "partial",
            feedback:
              "Counter-anchoring is real technique and beats capitulation — but look at the geometry: you've accepted that the negotiation is a tug-of-war between two arbitrary numbers, and the midpoint of $340 and $200 is $270, above benchmark. Aggressive counter-anchors work best when *paired* with objective criteria ('$200, and here's the benchmark data that makes even that generous'). Without the criteria, it's just theater with better posture — and it forecloses the integrative pivot entirely.",
          },
          {
            text: "\"$340 is outrageous and you know it. We'll pay $240 because that's the budget, and if you can't meet it we'll find an agency that can.\"",
            quality: "miss",
            feedback:
              "Three self-inflicted wounds: 'that's the budget' is an appeal to *your* constraint, which is not a criterion the counterpart has any reason to honor (imagine them saying 'our margin target is the price — take it'). The walk-out threat spends your BATNA before verifying it (can you actually find another agency mid-crisis? they know the answer better than you do). And 'outrageous' attacks the person holding the position instead of dissolving the position — Fisher and Ury's first rule, inverted. Criteria, not budgets; verified alternatives, not reflexive threats.",
          },
        ],
      },
    ],
    close:
      "You can price a walk-away, dig an interest out from under a position, and take an anchor's weight without absorbing it. Time to use all three against someone who does this for a living: Jordan Pierce is on the calendar, and Cascade's opening number is already loaded.",
  },

  /* ------------------- Step 3: Branching Case with MCQ ------------------- */
  mcqCase: {
    title: "The Locum Squeeze",
    narrative: [
      "Meridian Community Hospital's emergency department is three physicians short after a retirement, a relocation, and a parental leave landed in the same quarter. StatWorks, the locum agency that has filled Meridian's gaps for six years, senses the moment: mid-contract, they notify you that 'market conditions' require a rate revision on the next renewal — from $245 to $335 an hour — effective in five weeks, take it or leave it. Their coverage is currently 60% of your ED's overnight shifts.",
      "Your team's first meeting is going badly. The interim ED director wants to pay ('we cannot have gaps, period'). The CFO's delegate wants to threaten a switch to a rival agency nobody has vetted. Someone suggests reporting StatWorks to a regulator for price gouging, on grounds no one can specify. You have five weeks, one incumbent agency with real leverage, and a negotiation to design.",
    ],
    questions: [
      {
        id: "m4q1",
        stem: "First discipline: before any response to StatWorks, what does this module say the team must establish — and what's the trap in skipping it?",
        tags: ["BATNA", "Preparation"],
        options: [
          {
            key: "A",
            text: "Meridian's actual BATNA, priced: rival-agency onboarding time and cost, internal moonlighting pools, per-diem recruitment, reduced-capacity contingencies. Skipping it means negotiating against the team's fear of gaps — and fear always pays more than analysis does.",
            correct: true,
            feedback:
              "Right. 'We cannot have gaps, period' is not a strategy — it's a confession, and if it leaks across the table (it will; StatWorks has run this play before), the negotiation is over before it starts. Pricing the alternatives — even the bad ones — does two things: it sets the real walk-away line, and it usually reveals the BATNA is better than the panic assumed. Five weeks is enough time to *improve* it, too: quiet parallel outreach to the rival agency costs nothing and moves your line.",
          },
          {
            key: "B",
            text: "The relationship history: six years of partnership should anchor an appeal to loyalty and fair dealing before any hardball.",
            feedback:
              "The history matters — as data about their play, not as a card to appeal to. Read it correctly: StatWorks *knows* your dependence intimately after six years, chose this moment because of it, and priced your loyalty into the $335. Appeals to fair dealing from a position of unexamined dependence read as what they are: the sound of a party with no alternatives. Do the BATNA work first; the relationship conversation lands differently when it isn't a plea.",
          },
          {
            key: "C",
            text: "The legal position: whether mid-contract rate revisions are enforceable, and whether gouging complaints have any regulatory basis.",
            feedback:
              "Worth an hour of counsel's time, not the team's first week. The notification targets the *renewal*, which is almost certainly their right, and vague gouging theories spend credibility you'll want later. The deeper trap: legal framing converts a negotiation into a grievance, and grievances have losers. Check the contract, then return to the actual game — which is about alternatives and interests, not violations.",
          },
          {
            key: "D",
            text: "A unified message of resolve: leadership alignment that Meridian will not pay $335 under any circumstances.",
            feedback:
              "Resolve about what, measured against what? A ceiling adopted before pricing the alternatives is a number picked by pride — and if the honest BATNA math says the walk-away is $310, then 'never $335' was theater, and theater collapses exactly when tested. Alignment matters (the huddle simulation will make that painful), but alignment *follows* analysis. Teams that vote on resolve before doing arithmetic are voting on a feeling.",
          },
        ],
      },
      {
        id: "m4q2",
        stem: "The $335 'take it or leave it, five weeks' framing is doing specific work. What is it, and what's the correct handling?",
        tags: ["Anchoring", "Deadline pressure"],
        options: [
          {
            key: "A",
            text: "It's an anchor plus a manufactured deadline — designed to make $300 feel like relief and to compress your search for alternatives. Handle both explicitly: re-anchor on objective criteria (benchmarks, your contract history) and test the deadline's reality rather than absorbing it.",
            correct: true,
            feedback:
              "Yes — and note that the two devices reinforce each other: the anchor sets the scale, the deadline denies you time to build the data and alternatives that would dissolve the scale. Both are tested the same way: 'We'll respond with a market-based proposal by [your date]; if StatWorks needs an answer before we can complete diligence, we'll have to treat that as a decision to end the relationship — is that the message?' Deadlines that survive that question are real; most don't.",
          },
          {
            key: "B",
            text: "It's a signal of genuine market movement — locum rates have risen, and treating a market correction as a tactic risks insulting a partner who is passing through real costs.",
            feedback:
              "Markets do move — which is exactly why the objective-criteria step matters: if benchmarks genuinely sit near $335, the data will say so and you should pay. But a 37% jump, mid-relationship, with a five-week fuse and 'we're doing you a favor' framing is not how cost pass-throughs are communicated; it's how anchors are set. The tell isn't the number — it's the architecture around it. Verify against data, not against their narrative.",
          },
          {
            key: "C",
            text: "It's a bluff that should be called immediately: reply that Meridian declines the revision and will see them at the renewal table.",
            feedback:
              "Perhaps satisfying, and premature by exactly one BATNA analysis. Calling a bluff is spending your walk-away — and you don't yet know what your walk-away costs. If StatWorks isn't bluffing and pulls coverage at the renewal, 'we called it' is not a staffing plan. Sequence: price alternatives, quietly improve them, re-anchor with data — *then* the deadline test, from a position where you know what happens if they say fine.",
          },
          {
            key: "D",
            text: "It's standard commercial pressure not worth decoding — respond with a counteroffer at $260 and let the usual convergence process run.",
            feedback:
              "The 'usual convergence process' is precisely the machine the anchor is built to exploit: split-the-difference logic between $335 and $260 lands near $297, a 21% increase you'd have called absurd five weeks earlier — and it will feel like a win. That feeling is the anchor working. Counteroffers are fine; counteroffers *inside their frame, without criteria*, are the anchor's victory lap.",
          },
        ],
      },
      {
        id: "m4q3",
        stem: "You ask StatWorks's account director an interest question: 'What's driving this beyond rate?' She answers candidly: their physician pool is shrinking — burnout, competitors poaching, credentialing friction at hospitals like yours costing weeks of billable time per placement. Which response best converts this disclosure into integrative value?",
        tags: ["Integrative negotiation", "Interest excavation"],
        options: [
          {
            key: "A",
            text: "Trade across the difference in what you each value: offer expedited credentialing (a joint fast-track with your medical staff office), guaranteed minimum volume, and longer placements — real cost reductions for her pool problem — priced against rate moderation and a first-refusal arrangement for Meridian.",
            correct: true,
            feedback:
              "This is the Cascade deal in miniature. Her disclosure named costs that are cheap for you to reduce (credentialing friction is your bureaucracy; volume certainty is your pen stroke) and expensive for her to bear — the exact asymmetry integrative trades are made of. The package can genuinely beat $335 for *her* economics while costing you far less than $335. Note also what made the trade findable: one interest question, asked before the positional trench got dug.",
          },
          {
            key: "B",
            text: "File the disclosure as leverage: a shrinking pool means StatWorks needs Meridian's volume more than they admitted — press the rate harder.",
            feedback:
              "You've just demonstrated the negotiator's dilemma from the villain's side: she opened honestly and your response weaponizes it, which she will learn from — this table and every future one. Even distributively it misreads the position: a shrinking pool cuts both ways (they need your volume; you need their scarcer physicians). But the deeper error is strategic: exploiting disclosure teaches counterparts to stop disclosing, and undisclosed interests are where all the value you'll never find lives.",
          },
          {
            key: "C",
            text: "Express sympathy but keep the threads separate: workforce problems are their business; the rate discussion should stay clean and focused.",
            feedback:
              "'Clean' is the distributive frame flattering itself. Separating the threads means the only remaining variable is price — a pure tug-of-war you enter with the weaker BATNA. Her workforce problem isn't a distraction from the negotiation; it *is* the negotiation, because it's the thing you can fix more cheaply than she can. Deals get bigger exactly where the parties' problems interlock. Refusing the interlock doesn't make you disciplined; it makes the pie small.",
          },
          {
            key: "D",
            text: "Verify before trading: her disclosure might be a scripted sympathy play — demand documentation of the pool shrinkage before treating it as real.",
            feedback:
              "Skepticism has a place, but 'demand documentation' converts an interest conversation back into an adversarial proceeding — and most of her claims are checkable *without* the confrontation (credentialing turnaround is your own data; market poaching is industry-visible). Better: design trades that are robust to the uncertainty. Expedited credentialing costs you little even if her pool is fine; volume guarantees you'd want anyway. Trades that are good under both hypotheses don't need the interrogation.",
          },
        ],
      },
      {
        id: "m4q4",
        stem: "Internally, the interim ED director hears the integrative package and objects: 'Fast-track credentialing for locums we pay premium rates? We're rewarding the people squeezing us.' What's the strongest correct response?",
        tags: ["Negotiator's dilemma", "Internal alignment"],
        options: [
          {
            key: "A",
            text: "Separate the scoreboard from the feeling: the package likely lands total cost below their opening demand and below your realistic BATNA cost — measured against those numbers it's a win, and 'don't reward them' is a punishment preference masquerading as a strategy.",
            correct: true,
            feedback:
              "Right — and this objection deserves respect, because it's Module 3 knocking: shouldn't defection be punished? The answer is that the squeeze play gets its response in *structure*, not spite: the first-refusal clause, the parallel-agency relationship you quietly built, and the shorter renewal cycle all reduce StatWorks's future squeeze leverage — that's the tit-for-tat, encoded in terms. Meanwhile the deal itself is measured the only way deals can be: against alternatives, not against feelings about the counterpart's manners.",
          },
          {
            key: "B",
            text: "Agree with the principle and drop the credentialing concession — internal alignment is worth more than a marginally better deal.",
            feedback:
              "Alignment achieved by adopting the least-analytical position in the room is not alignment; it's surrender with extra steps. The credentialing fast-track wasn't a gift — it was the cheapest currency in the whole package, buying rate moderation with bureaucratic reform you should want anyway. Trade it away to soothe an internal feeling and you'll pay the difference in dollars. The move is to *persuade* the director (with the BATNA math), not to buy their comfort with the counterparty's price.",
          },
          {
            key: "C",
            text: "Overrule the director — negotiation strategy belongs to the negotiating team, and internal stakeholders get informed, not consulted.",
            feedback:
              "Enjoy signing a locum contract that the ED's operational leader feels was imposed over their objection — every implementation friction for the next two years will mysteriously trace back to this moment. Internal counterparts are negotiations too (the huddle simulation is entirely about this), and the director holds implementation power that outlasts the signing ceremony. The math wins this argument on its own; let it.",
          },
          {
            key: "D",
            text: "Propose a compromise: proceed with the package but add penalty clauses to the contract so StatWorks pays for any future rate aggression.",
            feedback:
              "'Penalty clauses for future aggression' aren't a thing a counterparty signs — you're describing a contract that punishes them for negotiating, which no agency accepts and no court enjoys. The legitimate version of this instinct already exists in the package: shorter cycles, first-refusal rights, a live alternative agency. Deterrence comes from your improved BATNA, not from clauses that demand the other side pre-confess.",
          },
        ],
      },
      {
        id: "m4q5",
        stem: "Wider lens: StatWorks pulled this squeeze because a staffing crisis handed them transient power. Meridian will hold the power surplus in most of its other negotiations — with small physician groups, community organizations, local vendors. What does this module (and the course) say about how to use it?",
        tags: ["Power asymmetry", "Ethics", "Repeated games"],
        options: [
          {
            key: "A",
            text: "Claim value within limits the long game sets: take good deals, but leave counterparts whole enough to stay invested — because extractive wins get remembered, referenced, and repaid across a network where Meridian negotiates forever, and because the system's mission depends on partners who survive their contracts with it.",
            correct: true,
            feedback:
              "That's the synthesis. The distributive logic of 'take everything the asymmetry allows' is correct in exactly one world: one-shot games between strangers — the world healthcare never inhabits. Every squeezed physician group tells three others; every gutted community partner is a coalition member lost for Module 7's battles; and StatWorks itself just demonstrated what counterparts do with power surpluses when their turn comes. The practical test for a strong-position deal: would you sign it from the other chair, and would you defend it to the counterpart's board? Deals that fail that test are loans against your reputation, at compound interest.",
          },
          {
            key: "B",
            text: "Use it fully — fiduciary duty requires capturing maximum value, and softening terms out of sentiment misuses institutional resources.",
            feedback:
              "The fiduciary frame is right and the time horizon is wrong. Maximum *lifetime* value across a repeated-game network is not maximized by maximum extraction per table — that's the whole arithmetic of Module 3, and StatWorks is currently demonstrating the endgame: they extracted maximally the moment power flipped, and are about to discover what it costs them (a hospital system now motivated to build alternatives and shorten every future contract). Fiduciaries who ignore relationship capital are leaving a balance-sheet item unmanaged.",
          },
          {
            key: "C",
            text: "Deliberately under-claim in every asymmetric negotiation — pay above-market and demand below-market as institutional citizenship.",
            feedback:
              "Systematic over-payment isn't ethics; it's unconditional cooperation (Module 3 priced that strategy: it gets farmed) plus a genuine stewardship failure — the surplus you donate to every vendor is surplus unavailable for patient care. The ethical constraint isn't 'never win'; it's 'win deals you could defend from the other chair.' Fair-and-firm beats generous-and-random on every axis, including the counterpart's ability to plan around you.",
          },
          {
            key: "D",
            text: "Delegate the question: adopt a standard vendor-conduct policy so individual negotiators don't have to make power-ethics judgments case by case.",
            feedback:
              "Policies help at the edges (payment terms floors, small-vendor protections — genuinely good mechanism design), but 'delegate the judgment' misses where the judgment lives: in the thousand table-level choices about anchoring, deadline pressure, and interest exploitation that no policy can specify. A negotiator who needs the policy to tell them not to squeeze a rural physician group into insolvency has a formation problem the policy can't fix. Mechanisms for the defaults; formed judgment for the table.",
          },
        ],
      },
    ],
  },

  /* -------------------- Step 4: One-on-One Simulation -------------------- */
  oneOnOne: {
    simId: "oneOnOne",
    title: "Across the Table from Jordan Pierce",
    learnerRole:
      "You are Meridian's lead negotiator for the Cascade Health Plan renewal. Your mandate from the internal huddle: base rate increase of at least 4% (reservation: 2.5%), protect the oncology carve-out, and explore value-based structures if the terms are real. Jordan Pierce negotiates for a living, opens with anchors, and — per your intelligence — has genuine flexibility on quality-bonus structure and none on base rates this cycle. Cascade is bonused on total cost of care, not on winning rate fights. Find the deal the positions are hiding.",
    personas: ["pierce"],
    scoring: {
      dims: [
        { id: "interest", label: "Interest discovery", max: 4, anchor: "Excavated Cascade's real economics instead of trading positions" },
        { id: "value", label: "Value creation", max: 3, anchor: "Built trades across differences before dividing the pie" },
        { id: "relationship", label: "Relationship preservation", max: 3, anchor: "Claimed firmly without poisoning the next cycle" },
      ],
    },
    start: "p1",
    nodes: {
      p1: {
        turns: [
          { who: "narrator", text: "A conference room at Cascade's regional office. Pierce arrives with coffee for both of you and the relaxed warmth of someone who has done this four hundred times." },
          { who: "pierce", text: "Good to see Meridian's varsity at the table. Let me save us both some throat-clearing: this cycle, base rates are flat. Not low-growth — flat. Medical costs are up, our book is bleeding, and every system in the region is getting the same message. Within that reality, I'm authorized to be creative. So — how would you like to spend our hour?" },
        ],
        choices: [
          {
            text: "Name the anchor, then open the excavation: \"'Flat' is an opening, and we both know my board didn't send me here for flat — I'll come back to that with market data. But 'authorized to be creative' interests me more. Creative against what problem? What's actually bleeding on Cascade's book — where does our contract hurt you?\"",
            next: "p2interests",
            score: { interest: 2 },
            note: "You refused the anchor without fighting it — 'that's an opening' costs one sentence — and went straight for the interest question. 'Where does our contract hurt you' is the Tuesday question from the topic video, asked in minute one instead of week eleven.",
          },
          {
            text: "Counter-anchor immediately: \"Then we have a short hour, because Meridian's position is seven percent, supported by our cost data, and flat is a non-starter. Whose number moves first?\"",
            next: "p2trench",
            score: {},
            note: "Position against position — the trench war from the topic video, digging itself in real time. Both numbers are now public commitments that will cost face to abandon, and the hour will be spent moving decimals instead of finding money.",
          },
          {
            text: "Probe the constraint itself: \"Flat as in 'my mandate says flat,' or flat as in 'Cascade goes to network-exit war over basis points'? Those are different conversations, and I'd like to know which one we're in.\"",
            next: "p2probe",
            score: { interest: 1 },
            note: "A sharp screen — you're testing whether 'flat' is a wall or a paint job. Pierce respects the question; watch whether the answer distinguishes the mandate from the theater.",
          },
        ],
      },

      p2interests: {
        turns: [
          { who: "narrator", text: "Pierce sets down the coffee — a tell you'll learn to read: the scripted portion of the meeting just ended." },
          { who: "pierce", text: "Where does it hurt. All right, since you asked like someone who wants the real meeting: two places. Your readmission rates on our Medicare Advantage book are eating my quality bonus alive — that's the number my own review rides on, if we're being candid. And your discharged patients leak to out-of-network imaging at twice the regional rate, which costs us full freight. Base rates I genuinely cannot move this cycle — that's committee-locked. Those two problems? For those I have a checkbook." },
        ],
        choices: [
          {
            text: "Build the trade across the difference: \"Then let's spend the checkbook where it fixes both our problems. Meridian has an unfunded transitional-care program that's shown a 22% readmission reduction in pilot — fund it through a shared-savings corridor and your bonus problem becomes our joint revenue. On imaging: we have idle capacity; give us a steerage incentive and your leakage becomes our volume. Both are worth more to you than basis points — and I'll price them against the rate conversation we're still going to have.\"",
            next: "p3package",
            score: { value: 2, interest: 1 },
            note: "Two integrative trades in one move, each built on the asymmetry that makes trades work: readmission reduction is expensive for Cascade to buy anywhere else and nearly free for you to scale; imaging capacity is idle for you and full-freight for them. And the last clause keeps your claiming position alive — creating value doesn't mean forgetting to claim it.",
          },
          {
            text: "Bank the disclosure and press the weakness: \"So your personal bonus rides on our readmission number. That's useful context for the rate conversation — sounds like Cascade needs this renewal smooth more than the 'flat' posture suggested.\"",
            next: "p3exploit",
            score: { interest: 1 },
            note: "The negotiator's dilemma, resolved the short-sighted way: he disclosed, you weaponized. Whatever this extracts today, Pierce has renegotiated with Meridian every cycle for years — and he just learned what candor costs at this table.",
          },
          {
            text: "Verify before building: \"Before I propose against those problems — sizes. What's the readmission bonus exposure in dollars, and what's the annual out-of-network imaging spend? I don't design trades against adjectives.\"",
            next: "p3verify",
            score: { interest: 1 },
            note: "Right instinct, slightly early — sizing turns his problems into a solvable equation, and asking now (before proposing) means your eventual package is built on numbers, not vibes. Watch that the diligence doesn't cool the candor.",
          },
        ],
      },

      p2trench: {
        turns: [
          { who: "pierce", text: "Whose number moves first — spoken like Meridian's last negotiator, and the one before. Fine, the traditional dance: you'll come down to five, I'll discover one and a half, we'll rail at each other through March and sign at two-something with a network-exit press release drafted and unused in both our files. I have that script memorized. Or — and I offer this once — we can have the other meeting. Your call." },
        ],
        choices: [
          {
            text: "Take the other meeting, with your claim intact: \"The other meeting. And so we're clear on my seriousness in both: I'll bring market data on rates before we close, because my board's floor is real. But you said 'authorized to be creative' — creative against what? Tell me where Meridian's book actually hurts Cascade.\"",
            next: "p2interests",
            score: { interest: 1, relationship: 1 },
            note: "He offered you an exit from the trench and you took it without dropping your claim — the both/and posture that separates integrative negotiation from integrative surrender.",
          },
          {
            text: "Stay in the trench — the script exists because it works: \"The traditional dance ends at two-something, you said. My floor's above that, so let's dance faster: five and a half, real data behind it, and you find more than one and a half by Friday.\"",
            next: "p4trench",
            score: {},
            note: "You heard him predict the trench's ending — 'two-something' — and chose the trench anyway, opening above it. The prediction was also an offer of information: he told you where the distributive game lands. You'll now spend weeks arriving there.",
          },
        ],
      },

      p2probe: {
        turns: [
          { who: "pierce", text: "Honest question, honest answer: committee-locked. Our actuarial board set rate posture across all systems in October — I could not move your base rate this cycle if you brought me a singing telegram from our CEO. What I hold personally is everything else: quality bonus structure, shared savings, carve-out terms, steerage incentives. That's not a paint job; that's the real shape of my authority. Next question." },
        ],
        choices: [
          {
            text: "Map the deal to his real authority: \"Then we're negotiating in the wrong currency and I appreciate knowing it. Let's price the deal in what you do hold: what would Cascade pay — in bonus structure, shared savings, steerage — to fix the two or three things on our book that cost you most? Name them.\"",
            next: "p2interests",
            score: { interest: 2 },
            note: "You converted a constraint disclosure into a currency conversion: if base rates are locked, total value moves through the instruments he *does* control. 'Name them' hands him the pen — people negotiate hardest against proposals and most honestly within their own lists.",
          },
          {
            text: "Test the lock: \"Committees unlock for network-exit risk. If Meridian's board concludes flat is unacceptable and files termination notice, does your actuarial board revisit October?\"",
            next: "p3threat",
            score: {},
            note: "You've reached for the exit threat in minute five — before establishing whether the deal space he *does* control can beat your reservation. The BATNA card played early doesn't strengthen your hand; it reveals your ceiling for creativity.",
          },
        ],
      },

      p3package: {
        turns: [
          { who: "narrator", text: "Pierce is writing — actual notes, not performance notes. The room's temperature has changed from negotiation to engineering." },
          { who: "pierce", text: "Shared-savings corridor on readmissions with your transitional-care program as the engine — I can build that; 50-50 above a 12% reduction threshold, and I'll want audit rights on the program's staffing. Imaging steerage: yes, with a rate guarantee on the steered volume. Now the part where I earn my salary: with that much new value on your side of the table, your board's rate ask is covered several times over. So — flat base, rich structure. Do we have a deal shape?" },
        ],
        choices: [
          {
            text: "Claim your share of the pie you built: \"We have half a deal shape. The structure is real value and I want it — and it's contingent value, on performance, next year's dollars. My board's floor is current, guaranteed, base. So here's the shape that signs: 3% base — under my original ask, over your flat, defensible to your committee as bought-and-paid-for by a corridor that saves you multiples of it — plus the corridor at 60-40 until our program recoups its build cost, then 50-50. And the oncology carve-out stays untouched. That's a package both our boards ratify in one meeting.\"",
            next: "p5deal",
            score: { value: 1, relationship: 1 },
            note: "The claiming move, executed inside the integrative frame: you named why contingent value can't fully substitute for guaranteed base (risk-adjusted dollars aren't par), gave his committee a story to approve the exception ('bought and paid for'), and staged the corridor split to fund your build. Creating value and claiming it are one skill, not two.",
          },
          {
            text: "Take the structure as offered: \"Flat base, rich structure — done, pending diligence on the corridor terms. This is a better deal than the rate fight was going to produce.\"",
            next: "p5soft",
            score: { value: 1 },
            note: "It IS better than the trench — and you just accepted his framing that the structure 'covers' your rate ask, without testing it. He conceded nothing base-rate-shaped, and your mandate had a floor in it. The pie grew; your slice was negotiable; you didn't negotiate it.",
          },
        ],
      },

      p3verify: {
        turns: [
          { who: "pierce", text: "Numbers — thank you for being that kind of negotiator. Readmission bonus exposure on your book: about $2.1 million against my targets this year. Out-of-network imaging: $3.4 million annual, full freight, trending up. Against that, your rate ask of — let's pretend I don't know it's around four percent — runs Cascade maybe $2.8 million. You see my geometry: your problems cost me more than your rate ask does. I'd rather buy solutions than basis points. Sell me solutions." },
        ],
        choices: [
          {
            text: "Sell solutions priced in his numbers — and your base: \"Here's the purchase: our transitional-care program, funded by a shared-savings corridor, takes a defensible bite of that $2.1M — pilot data says 22% readmission reduction. Imaging steerage with a rate guarantee repatriates most of the $3.4M into network at negotiated rates. Total value to Cascade: north of both numbers combined. Price to Cascade: 3% base — a fraction of the value, and the part my board can bank — plus corridor terms that fund our build. You're buying $5M of problem-solving for $2M of certainty. Committees approve that math.\"",
            next: "p5deal",
            score: { value: 2, interest: 1 },
            note: "You built the package inside his own arithmetic — 'your problems cost more than my rate ask' became the deal's sales pitch to his committee. Negotiators who price proposals in the counterpart's numbers close faster because the counterpart's internal sell is pre-written.",
          },
          {
            text: "Split the difference his geometry implies: \"Then flat base, and Meridian keeps 70% of all shared savings — if we're solving $5M of your problems, the corridor split should reflect who's doing the solving.\"",
            next: "p5soft",
            score: { value: 1 },
            note: "An aggressive corridor is real money — and all of it contingent, none of it base. You've let 'flat' stand entirely, trading your board's guaranteed-dollars floor for performance dollars at favorable odds. Maybe right! But it wasn't your mandate, and mandates exist because boards price risk differently than negotiators do.",
          },
        ],
      },

      p3exploit: {
        turns: [
          { who: "narrator", text: "Pierce's warmth doesn't vanish — professionals don't flinch — but something recalibrates behind it, and the coffee cup comes back up like a drawbridge." },
          { who: "pierce", text: "And there's the move. I give you the real map, you check whether my paycheck is on it. For the record: my bonus survives your readmission rates fine — I disclosed it because candor speeds good deals, an experiment I periodically rerun with Meridian. Experiment logged. So: base is flat, structure conversation available on standard terms, paper proposals through the normal channel. Anything else today?" },
        ],
        choices: [
          {
            text: "Repair now, at cost: \"Log this too, then: that was the cheap move and I knew it as I said it. You offered the real meeting and I reached for a lever instead. Here's my candor at matching risk: my mandate has a floor above flat, my board is nervous about this cycle, and I'd rather build the readmission and imaging deal with you than win a rate skirmish. Can we restart from the map you actually gave me?\"",
            next: "p2interests",
            score: { relationship: 2 },
            note: "Repair with symmetric exposure — you matched his risk by disclosing your own constraint, which is the only currency that reopens a burned candor channel (Module 3, at the contract table). Note the cost: your floor is now visible. That's what repairs cost.",
          },
          {
            text: "Shrug it off — hardball is the job: \"Noted. Standard channels, then — expect our rate proposal Thursday, opening at six.\"",
            next: "p4trench",
            score: {},
            note: "The candor channel just closed for this cycle — and Pierce renegotiates with Meridian for years. You'll get the trench outcome, plus a counterpart who opens every future meeting with the scripted version. Extractive moves are priced across all future tables; that was Module 3's whole ledger.",
          },
        ],
      },

      p3threat: {
        turns: [
          { who: "pierce", text: "Termination notice. Sure — let's price that honestly, since we're friends: you file, our press shops exchange fire, your board discovers mid-fight that 31% of your commercial volume is Cascade paper, and eleven months later we sign roughly the deal we'd have signed anyway, minus the trust and plus the legal spend. I've run that play from both chairs. It's a mutual mugging. You have real leverage at this table — it just isn't that. Want to know what it is?" },
        ],
        choices: [
          {
            text: "Take the tuition: \"...Go ahead. What's my actual leverage?\"",
            next: "p2interests",
            score: { interest: 1, relationship: 1 },
            note: "Swallowing 'teach me' from a counterpart costs pride and buys the map. His answer — your leverage is owning the solutions to his cost problems — is the integrative thesis, delivered by the opposition. Some negotiation lessons are cheapest when the other side pays to teach them.",
          },
          {
            text: "Hold the threat posture: \"My board decides what leverage we have. Flat base gets you the termination conversation — that's the message I was sent with.\"",
            next: "p4trench",
            score: {},
            note: "A threat restated after being accurately priced isn't pressure — it's a commitment to the mutual mugging he just described. The trench, with legal fees.",
          },
        ],
      },

      p4trench: {
        turns: [
          { who: "narrator", text: "The next eleven weeks proceed exactly as forecast: proposals through channels, decimal warfare, two escalation calls between executives who like each other less each time, a drafted-and-unused press release in both files. The deal signs in March: 2.1% base — under your reservation, ratified by an exhausted board — no corridor, no steerage, the oncology carve-out preserved as the sole trophy. Pierce shakes your hand warmly at the signing: professionals don't gloat. But the $2.1M readmission problem and the $3.4M imaging leak sit unsolved on Cascade's book, unfunded on yours — five million dollars of unbuilt bridge, the exact cost of the meeting that didn't happen." },
        ],
        end: true,
        outcome: "mixed",
      },

      p5deal: {
        turns: [
          { who: "pierce", text: "Three percent framed as corridor-funded... my committee will grumble and sign it, because you've handed me the memo that gets it through: 'base exception, self-financing via readmission corridor.' Sixty-forty to recoup your build, then fifty-fifty — done, with a two-year lookback audit. And the carve-out was never in danger; I keep it in every deck as the thing I graciously concede. One professional note, off the record: in eleven years of Meridian renewals, this is the first one where your side asked what was on my book before telling me what was on yours. It shows in the term sheet. Same table, next cycle — and bring the same questions." },
          { who: "narrator", text: "The package signs in five weeks, not eleven. Your board banks the 3% and, within the year, the corridor's first distribution — the transitional-care program, funded at last, performing a point above pilot. Cascade's total cost on the Meridian book drops for the first time in four cycles. Both negotiators get asked by their own sides how the other side gave that up. Neither answer is satisfying, because nothing was given up: the pie got bigger, which the trench can never explain from inside." },
        ],
        end: true,
        outcome: "strong",
      },

      p5soft: {
        turns: [
          { who: "narrator", text: "The structure signs, and it's genuinely good: the corridor funds the transitional-care program, the steerage fills idle scanners, Cascade's book improves. Your board ratifies it with one flagged abstention — the CFO delegate, who circles 'base: 0.0%' and writes in the margin: 'mandate floor was 2.5. What did we get for waiving it?' The honest answer is: nothing you asked for — the structure was available *alongside* a base increase, as the next cycle proves when Pierce, unprompted, offers 2% base to renew the corridor, revealing what this year's flat had actually cost. Good deal; unclaimed slice. The difference between them, your CFO's margin note will remind you for years, is the part of negotiation that happens after the creativity.",
          },
        ],
        end: true,
        outcome: "provisional",
      },
    },
    outcomes: {
      strong: {
        label: "The bigger pie, sliced on purpose",
        text: "You refused the anchor cheaply, asked the Tuesday question in minute one, built trades across genuine asymmetries, and then — the step most integrative negotiators skip — claimed your share with a story the counterpart could sell internally. Pierce's off-the-record note is the metric that matters: the questions you asked changed what the table could produce.",
      },
      provisional: {
        label: "Value created, share unclaimed",
        text: "You found the integrative deal — real trades, real money, a genuinely improved relationship — and left your mandate's guaranteed-dollar floor on the table without testing it. The next cycle's unprompted 2% told you what this year's 'flat' was actually worth. Creating value and claiming value are one skill with two halves; replay for the second half.",
      },
      mixed: {
        label: "The trench, as scripted",
        text: "Pierce predicted the ending in minute two — 'two-something in March, minus the trust, plus the legal spend' — and the distributive script delivered it on schedule. The five million dollars of unbuilt bridge is this module's tuition bill. Replay and take 'the other meeting' when it's offered; it's offered once.",
      },
    },
  },

  /* --------------------- Step 4b: Switch Chairs --------------------- */
  switchChairs: {
    simId: "switchChairs",
    title: "Switch Chairs: You Are Jordan Pierce",
    learnerRole:
      "You are Cascade Health Plan's regional contract director. Your actuarial board locked base rates at flat in October — genuinely locked; you couldn't move them for a singing telegram. Your own annual review rides on total cost of care, and Meridian's book is hurting you in two places: readmissions ($2.1M against your quality targets) and out-of-network imaging leakage ($3.4M, trending up). You have a checkbook for structure and nothing for rates. Across the table: Meridian's negotiator, who — history suggests — will open with a rate demand. Feel what the table looks like from the payer's chair.",
    personas: [],
    extraSpeakers: {
      meridian: { name: "Meridian's Lead Negotiator", initials: "MN", role: "VP of Payer Relations, Meridian Health" },
    },
    scoring: {
      dims: [
        { id: "candor", label: "Strategic candor", max: 4, anchor: "Disclosed real interests at calculated risk to find the bigger deal" },
        { id: "discipline", label: "Mandate discipline", max: 3, anchor: "Held the locked constraint without bluffing past your authority" },
      ],
    },
    start: "j1",
    nodes: {
      j1: {
        turns: [
          { who: "narrator", text: "Your conference room. You've brought coffee for two — eleven years of these renewals have taught you that the small courtesies are load-bearing. Meridian's negotiator opens their folder, and you recognize the posture: a board mandate is about to be recited." },
          { who: "meridian", text: "I'll be straightforward: Meridian's costs are up nine percent and our board expects this renewal to reflect that. We're proposing a seven percent base increase, supported by cost data I'm happy to walk through. We see this as the beginning of the conversation, not the end." },
        ],
        choices: [
          {
            text: "State the lock plainly and open your book — the calculated risk: \"Then let me shorten the painful part: base is committee-locked at flat this cycle, across every system — that's real, not posture, and I'd rather spend our hour where I have actual authority. Here's my candor at risk: your book costs me $2.1M in readmission bonus exposure and $3.4M in imaging leakage. For solutions to those, I hold a checkbook. Want the real meeting?\"",
            next: "j2open",
            score: { candor: 2, discipline: 1 },
            note: "You disclosed real numbers to a counterpart who might weaponize them — feel the exposure in that. It's the negotiator's dilemma from the inside: candor is the only road to the bigger deal, and it's genuinely unsafe. This is why the *first* candid move matters so much; someone has to go first.",
          },
          {
            text: "Run the standard defense — anchor low, disclose nothing: \"Seven percent — bold opening, respect for the craft. Cascade's position: our medical costs are up too, and this cycle we're at flat, possibly negative. Let's exchange data packets and schedule the follow-up.\"",
            next: "j2script",
            score: { discipline: 1 },
            note: "The scripted defense: true constraint, zero map. From this chair, notice what withholding your interests protects (nothing — the lock is real anyway) and what it costs (the only route to fixing your $5.5M of book problems). The script feels safe precisely because it forecloses the meeting where you'd have to trust someone.",
          },
          {
            text: "Bluff flexibility to extract concessions: \"Seven is steep, but there may be room on base if Meridian moves on the oncology carve-out. Let's talk trade.\"",
            next: "j2bluff",
            score: {},
            note: "You just offered flexibility you don't have — the committee lock is real. Feel where this goes: any deal shaped around base movement dies at your own committee, and the counterpart learns your representations don't clear your building. Bluffing past your authority is the payer-chair version of promising what the board won't ratify.",
          },
        ],
      },
      j2open: {
        turns: [
          { who: "meridian", text: "...That's not the meeting I prepped for, and I mean that as a compliment. Let me test the candor: if base is truly locked, why should my board accept structure instead — structure is contingent money, and my mandate floor is guaranteed dollars. Convince me the checkbook is worth more than the basis points I was sent to get." },
        ],
        choices: [
          {
            text: "Make the honest case, including its limits: \"I won't pretend contingent equals guaranteed — your board is right to discount performance dollars. Here's the honest math instead: my checkbook on those two problems is roughly $5M of annual value, and I can structure the corridor so your program's build cost recoups first — that de-risks the early years. What I can't do is base. If your floor is truly guaranteed-dollars-or-nothing, tell me now and we'll have the short sad meeting instead. But if your board prices risk like mine does, the corridor-first package beats four percent by multiples.\"",
            next: "j3build",
            score: { candor: 2, discipline: 2 },
            note: "You validated their discount of contingent money instead of arguing it away — candor about your offer's weakness is the costliest signal at any table, and the one that makes the rest of your claims credible. And you held the lock without apology. This is what 'firm on constraints, flexible on structure' feels like from inside.",
          },
          {
            text: "Oversell the structure: \"Contingent, guaranteed — accounting categories. The corridor is worth multiples of any rate ask; your board would be innumerate to prefer basis points. This is simply a better deal.\"",
            next: "j3oversell",
            score: { candor: 1 },
            note: "'Your board would be innumerate' — feel how the overclaim undermines the genuinely strong hand you hold. Risk-adjusted dollars ARE worth less than guaranteed ones; pretending otherwise tells the counterpart your other numbers deserve discounting too.",
          },
        ],
      },
      j2script: {
        turns: [
          { who: "meridian", text: "Data packets and a follow-up. Sure — that's the usual liturgy. Before we adjourn to our respective trenches, though: one question, because I've been reading about negotiation lately. What's actually hurting Cascade on our book? Not the posture — the real ledger. Because if there's a deal that fixes your problems and funds my board's ask, I'd rather find it than spend March in decimal warfare." },
          { who: "narrator", text: "There it is — the Tuesday question, asked from the other side. Your two numbers sit in your folder: $2.1M, $3.4M. Disclosing them risks a counterpart who presses harder. Withholding them guarantees the trench." },
        ],
        choices: [
          {
            text: "Answer it — they went first, match the risk: \"...All right, the real ledger. Readmissions on your Medicare Advantage book: $2.1M against my quality targets. Out-of-network imaging: $3.4M and climbing. Base is still locked — that part was true — but for those two problems I hold real money. If Meridian owns solutions, let's price them.\"",
            next: "j3build",
            score: { candor: 2 },
            note: "They opened the candor door and you walked through it — the second-mover version of strategic disclosure, lower-risk than going first but still real. From this chair you can feel what the question did: it made withholding feel more expensive than disclosing. That's what a well-asked interest question does to the person across the table.",
          },
          {
            text: "Deflect — never negotiate off-script: \"Our cost drivers are Cascade's internal business. Data packets, follow-up, and we'll see everyone in three weeks.\"",
            next: "j4trench",
            score: {},
            note: "The counterpart offered the bigger table and you chose the liturgy. Note the asymmetry you just accepted: your book problems continue costing $5.5M annually while the trench war argues about $2.8M of rate. Script-following feels like discipline; sometimes it's just the more comfortable way to lose money.",
          },
        ],
      },
      j2bluff: {
        turns: [
          { who: "meridian", text: "Room on base — that's more encouraging than we expected. Let's build there: if Meridian offers flexibility on the carve-out structure, where does base land? Give me a range I can take to my board tonight — they meet Thursday." },
          { who: "narrator", text: "And there's the trap closing: they're about to carry your phantom flexibility into their board meeting. Whatever range you name becomes a Meridian expectation that your own committee will refuse in November — and you'll be the negotiator whose word didn't clear their building." },
        ],
        choices: [
          {
            text: "Unwind it now, at the cost of the wince: \"Stop — before you brief a board on it: I overstated. Base is committee-locked at flat; I don't hold rate authority this cycle and shouldn't have implied it. What I do hold is structure — quality bonus, shared savings, steerage — and I'd rather show you real authority than sell you phantom flexibility. Can we restart there?\"",
            next: "j2open",
            score: { discipline: 2 },
            note: "Retracting a bluff before it compounds costs one hard sentence; letting it ride costs your signature's value at every future table. From this chair the lesson is visceral: authority you don't have is the one thing you can never afford to trade.",
          },
          {
            text: "Ride it — something might shake loose by Thursday: \"Say two to three percent, contingent on carve-out movement. I'll manage my committee.\"",
            next: "j4blown",
            score: {},
            note: "'I'll manage my committee' — the six most expensive words in agency. You've now sold a range you can't deliver to a board that will plan around it.",
          },
        ],
      },
      j3build: {
        turns: [
          { who: "meridian", text: "Then here's the shape from our side: our transitional-care program as the corridor's engine — pilot shows 22% readmission reduction — with recoup-first split, then 50-50. Imaging steerage with a rate guarantee on steered volume. And my board still needs base above flat; 3%, framed to your committee as corridor-funded. That's a package I can ratify in one meeting. Can you?" },
        ],
        choices: [
          {
            text: "Sign the deal you can actually deliver — and say which part you can't: \"The corridor and steerage: yes, my authority, done. The 3% base: that I cannot promise — the lock is real. What I *can* do is take the corridor-funded framing to the actuarial board as an exception request with my recommendation on it. Honest odds: better than even, not certain. If it fails, the structure deal stands on its own and we revisit base next cycle with the corridor's first-year data as your evidence. That's the whole truth of my authority — build on it?\"",
            next: "j5deal",
            score: { discipline: 1, candor: 1 },
            note: "The rarest table behavior: mapping your authority's exact edge out loud — yes, no, and 'I'll advocate with honest odds.' Deals built on a negotiator's real authority close and stay closed; deals built past it die in ratification and take reputations with them.",
          },
          {
            text: "Promise the package whole: \"Done — all of it, 3% included. I'll get it through committee.\"",
            next: "j4blown",
            score: { candor: 1 },
            note: "The package is good and the promise exceeds the lock you *know* is real. If the committee holds — and October locks hold — you'll return to this table subtracting a term they've already banked.",
          },
        ],
      },
      j3oversell: {
        turns: [
          { who: "meridian", text: "'Accounting categories.' Hm. My CFO delegate — who will read this term sheet with a red pen — prices contingent dollars at about seventy cents guaranteed, and she's right to. So when you tell me they're equivalent, I have to decide which of your other numbers get the same haircut. The 22% pilot figure? The $5M value estimate? Help me out: which of your claims are load-bearing, and which are sales?" },
        ],
        choices: [
          {
            text: "Take the haircut and re-earn the credibility: \"Fair hit. The honest version: contingent is worth less — call it your seventy cents — and the corridor still clears four percent's value at that discount; I'll show the math with the risk adjustment in it. The $2.1M and $3.4M are audited internals — load-bearing. The 'multiples' language was sales, and I'll retire it. Where were we?\"",
            next: "j3build",
            score: { candor: 2 },
            note: "Sorting your own claims into 'load-bearing' and 'sales' — out loud, at the counterpart's request — is a credibility repair few negotiators can execute. It works because it's costly: you downgraded your own pitch to keep your numbers believed.",
          },
          {
            text: "Defend the frame: \"Every negotiator discounts the other side's projections — that's table stakes. The package is strong; let's not lose it to epistemology.\"",
            next: "j4trench",
            score: {},
            note: "'Let's not lose it to epistemology' — but credibility IS the epistemology of a negotiation; it's the exchange rate on every number you'll ever quote here. They'll take the structure deal, discounted, and audit everything for two cycles.",
          },
        ],
      },
      j4trench: {
        turns: [
          { who: "narrator", text: "The liturgy proceeds: packets, follow-ups, escalations, March. Flat base holds — the lock was real, so the trench's only casualty is everything else: no corridor, no steerage, $5.5M of your book problems rolling into next year's targets, and your own review reflecting a total-cost number that a signature away from improving. From this chair, the trench's true cost was never the rate fight. It was the checkbook you never got to open.",
          },
        ],
        end: true,
        outcome: "mixed",
      },
      j4blown: {
        turns: [
          { who: "narrator", text: "November: the actuarial board holds the lock, as October locks do. You return to the table subtracting the 3% that Meridian's board has already banked — and watch, in real time, every other term get re-examined by a counterpart now auditing your signature. The corridor survives, eventually, at worse splits: distrust has a price schedule. The lesson from inside the payer's chair: your authority's edge was never a weakness to hide. It was the one thing that, stated plainly, makes everything else you say ratifiable.",
          },
        ],
        end: true,
        outcome: "mixed",
      },
      j5deal: {
        turns: [
          { who: "meridian", text: "A negotiator who tells me which promises they can't make — my board will find that stranger than the deal itself. Yes: structure signs now, base rides your exception request with the corridor data as ammunition, and either way we're building the program. One question before the handshake, professional curiosity: eleven years of these renewals, and this is the first that didn't go to the trench. What changed?" },
          { who: "narrator", text: "You consider the honest answer: someone asked where it hurt, and someone else decided the map was worth the risk. The exception request, for what it's worth, clears the actuarial board in January — 'corridor-funded' turned out to be the phrase October's lock had been waiting for. Both books improve. And at next cycle's opening meeting, the coffee is already on the table, and nobody recites a mandate: some tables, once changed, stay changed.",
          },
        ],
        end: true,
        outcome: "strong",
      },
    },
    outcomes: {
      strong: {
        label: "The checkbook, opened on purpose",
        text: "From the payer's chair you ran the calculated-candor play: disclosed real interests at real risk, held your locked constraint without bluffing past it, and mapped your authority's exact edge out loud. The transfer question: in your real negotiations, what's your equivalent of the committee lock — and have you ever considered that stating it plainly, instead of posturing around it, is what makes your other commitments believable?",
      },
      provisional: {
        label: "Candor found, discipline tested",
        text: "You reached the real meeting — the interests surfaced, the package took shape — and somewhere the edge of your authority got smudged: an overclaim, an oversold equivalence, a promise the committee would have to keep for you. From this chair the pattern is visible: counterparts don't punish limited authority; they punish discovering it late.",
      },
      mixed: {
        label: "The chair's expensive lessons",
        text: "Either the script held (and the $5.5M stayed broken), or a bluff outran your authority (and ratification collected the debt). Both endings teach the same thing from the inside: the payer's power isn't the lock — it's the checkbook, and the checkbook only opens at tables where somebody risks the first honest sentence. Replay and be that somebody.",
      },
    },
  },

  /* --------------- Step 5: Multidisciplinary Meeting --------------- */
  meeting: {
    simId: "meeting",
    title: "The Mandate Huddle",
    learnerRole:
      "Three days before you sit down with Jordan Pierce, Dr. Vasquez has convened the internal pre-negotiation huddle: CFO Marcus Webb (finance), Associate General Counsel Karen Lindqvist (legal), and Vasquez herself (clinical). Your job as lead negotiator: leave this room with a unified mandate — a real reservation point, a priority ordering, and agreement on what's tradable — because a negotiator whose own building disagrees behind them loses to Pierce before the coffee cools. The hazard: everyone in this room wants a different deal, and none of them has priced that fact.",
    personas: ["webb", "lindqvist", "vasquez"],
    scoring: {
      dims: [
        { id: "align", label: "Forging the mandate", max: 4, anchor: "Converted three agendas into one reservation point and priority order" },
        { id: "surface", label: "Surfacing hidden constraints", max: 3, anchor: "Drew out the reserve, the risk posture, and the clinical red lines" },
        { id: "clarity", label: "Negotiator's charter", max: 3, anchor: "Left with explicit authority, tradables, and an escalation protocol" },
      ],
    },
    start: "w1",
    nodes: {
      w1: {
        turns: [
          { who: "narrator", text: "The system-office conference room. Webb has a spreadsheet open before anyone sits. Lindqvist has the current Cascade contract flagged in three colors. Vasquez closes the door." },
          { who: "webb", text: "Let me start, because finance goes first when the building's margin is one-point-eight percent: we need four percent base minimum from Cascade, the oncology carve-out is untouchable, and I don't want to hear the phrase 'value-based' unless someone can show me guaranteed dollars. That's the mandate. Can we adjourn?" },
        ],
        choices: [
          {
            text: "Slow the room and structure the work: \"Not yet — because what Marcus just gave us is finance's opening position, and if I carry three different departments' opening positions to Pierce, he'll negotiate against the gaps between them. Before we set numbers: each of you, tell me what you actually need from this contract — need, not want — and what you'd trade to get it. Marcus, you first: what does the margin actually require, as distinct from what finance would like?\"",
            next: "w2interests",
            score: { align: 2 },
            note: "You just ran the interests-versus-positions drill on your own building — the huddle's whole purpose. 'What does the margin require, as distinct from what finance would like' is the internal version of the Tuesday question, and Webb has never once been asked it in this room.",
          },
          {
            text: "Accept the strongest voice's frame: \"Four percent floor, carve-out untouchable, guaranteed dollars only — noted as the mandate. Karen, legal flags? Then we're efficient.\"",
            next: "w2rubber",
            score: {},
            note: "You've adopted the loudest opening position as 'the mandate' — unpriced, untested, and owned by one of three stakeholders. Watch what the other two do with their unvoiced constraints: they don't disappear; they surface mid-negotiation, through side channels, at the worst possible moment.",
          },
          {
            text: "Open with your own read to anchor the room: \"Before we set the mandate — my intelligence says Pierce comes in at flat base, committee-locked, with real flexibility on quality-bonus structure. So four percent may be fantasy, and structure may be where the money is. React to that.\"",
            next: "w2intel",
            score: { surface: 1 },
            note: "Leading with the intelligence reframes the huddle from wish-listing to strategy — though note the risk you took: presenting Pierce's constraint as fact before the room has voiced its needs lets Webb hear 'we've already lost the rate fight' from his own negotiator.",
          },
        ],
      },

      w2interests: {
        turns: [
          { who: "webb", text: "As distinct from what finance would like. Fine — the honest arithmetic: the budget holds at 2.5% base. Below that I'm cutting somewhere clinical, which is the CMO's nightmare and therefore mine. Four was negotiating room, obviously. And 'guaranteed dollars' — look, I've been burned by contingent revenue twice; if someone shows me a structure where the downside is capped, I can move. Don't quote any of this outside this room." },
          { who: "vasquez", text: "Since we're doing needs: clinical has exactly two red lines. The oncology carve-out — that's patient access, not economics, and it is genuinely untouchable. And no utilization-review expansion; Cascade's current prior-auth burden is already costing my medical staff four hours a physician-week. Everything else — including 'value-based,' Marcus — clinical can work with, and honestly the readmission programs Cascade keeps hinting at are things we should be doing anyway." },
          { who: "lindqvist", text: "Legal's turn, and mine is a question nobody's asked: what happens if this goes to termination? Because I've reviewed the exit provisions and our notice obligations are asymmetric — expensive for us, cheap for them. Which means, colleagues, our BATNA is worse than this room assumes, and I'd rather the negotiator know that going in than discover it in a crisis." },
        ],
        choices: [
          {
            text: "Synthesize the real mandate from the disclosures: \"Then here's the actual mandate, and it's better than the opening: reservation 2.5% base — Marcus's true floor — target 4%; oncology carve-out and prior-auth scope are red lines, non-tradable; contingent structures are IN, provided downside caps, which happens to match Pierce's real flexibility; and per Karen, our exit is expensive, so nobody threatens termination as theater — I negotiate as if we're staying, because we are. Objections now, in this room — not in three weeks through side channels.\"",
            next: "w3charter",
            score: { align: 2, surface: 2 },
            note: "Three private constraints became one coherent charter: a true reservation point, ordered red lines, an opened door for structure (which your intelligence says is where Pierce's money is), and the BATNA truth priced in. 'Objections now, not through side channels' is the sentence that makes a mandate real.",
          },
          {
            text: "Focus on the most dangerous disclosure: \"Karen's point changes everything — if our exit is that expensive, Cascade holds more leverage than we thought. Should we be preparing the board for a weaker deal than expected?\"",
            next: "w3panic",
            score: { surface: 1 },
            note: "Right fact, wrong amplification. A bad BATNA is information for calibrating the reservation point — not a reason to pre-negotiate against yourself in your own huddle. Rooms that rehearse defeat deliver it.",
          },
        ],
      },

      w2rubber: {
        turns: [
          { who: "lindqvist", text: "Legal flags, since you ask: the exit provisions are asymmetric against us — termination is expensive for Meridian and cheap for Cascade. So this 'four percent or else' mandate has no 'or else' in it, and I'd rather say that here than in a deposition. Also, nobody has asked clinical what their red lines are, which historically is how we end up renegotiating against our own CMO in week six." },
          { who: "vasquez", text: "Since Karen's opened the door: clinical was not planning to volunteer this under a mandate I wasn't asked to shape, but — the oncology carve-out is untouchable for access reasons, prior-auth expansion is a red line, and if the negotiator trades either for basis points, this huddle will reconvene in a much less pleasant format." },
        ],
        choices: [
          {
            text: "Restart the huddle properly — name your own miss: \"Both of you just did my job for me, and I let a fast mandate almost walk out the door unpriced. Rewinding: Marcus, what's the real floor as distinct from the ask? Then we price Karen's exit asymmetry into the reservation, we write clinical's red lines into the charter, and we leave with a mandate all three of you will defend when Pierce's terms get uncomfortable — because they will.\"",
            next: "w2interests",
            score: { align: 1, surface: 1 },
            note: "The recovery: you named the facilitation failure ('I let a fast mandate walk out unpriced') and restarted the interest excavation. Huddles forgive a false start; they don't forgive a negotiator who defends the false start.",
          },
          {
            text: "Patch the mandate incrementally: \"Fine — four percent floor, plus carve-out and prior-auth as red lines, minus termination threats. Everyone live with that?\"",
            next: "w3patch",
            score: { clarity: 1 },
            note: "A mandate assembled by amendment: Webb's negotiating-room number is now enshrined as a 'floor' nobody tested, and 'everyone live with that' is the question that gets nods in the room and side channels afterward.",
          },
        ],
      },

      w2intel: {
        turns: [
          { who: "webb", text: "Flat and committee-locked. Wonderful — so we're negotiating with a vending machine. If base is genuinely dead, then this meeting matters MORE, not less, because the whole deal moves to structures I've been burned by twice. Contingent revenue that evaporated, both times, because the deal terms were written by optimists. If we're going to structure-land, I want this room to set the guardrails now: downside caps, audit rights, recoup-first splits. Write those down." },
          { who: "vasquez", text: "And if structure is the currency, clinical needs its red lines in the charter before the trading starts: oncology carve-out untouchable, no prior-auth expansion. I'll trade cooperation on readmission programs — genuinely, we should want those — but not access." },
        ],
        choices: [
          {
            text: "Build the mandate around the disclosed guardrails: \"This is the mandate forming — write it with me: reservation on base still matters (Marcus, real floor?), but the deal's center of gravity is structure with Webb's guardrails — caps, audit, recoup-first — and Vasquez's red lines fencing the tradable space. Karen: exit provisions, anything the room needs before we finalize authority?\"",
            next: "w2interests",
            score: { align: 1, surface: 1 },
            note: "You let the intelligence reorganize the huddle around the real deal space, then went person by person for constraints. Note Webb's transformation: told 'rates are dead' as strategy rather than defeat, he converted from rate-warrior to structure-engineer in one turn — people fight frames, not facts.",
          },
          {
            text: "Reassure the room: \"The lock may be softer than it looks — every payer says 'committee-locked.' Let's keep four percent as the target and treat structure as the fallback.\"",
            next: "w3patch",
            score: {},
            note: "Your own intelligence says the lock is real, and you just told the room to plan around its being theater — so the mandate will aim at a number your best information says is unreachable, and structure (where the actual money is) gets designed as an afterthought called 'fallback.'",
          },
        ],
      },

      w3charter: {
        turns: [
          { who: "vasquez", text: "No objections — conditions. The negotiator reports back before conceding anything inside a red-line's zip code, and clinical gets a seat at the term-sheet review. Agreed? Then clinical signs the mandate." },
          { who: "webb", text: "Finance signs with one addition: if Pierce offers structure, the guardrails travel with the authority — downside cap at program cost, audit rights, recoup-first split. Inside those, you have my delegation up to the numbers we set. Outside them, you call me from the parking lot, not after the handshake." },
          { who: "lindqvist", text: "And legal's line: no term sheet language leaves the building without my read — Cascade's drafting has cost us twice in ways I'm still cleaning up. Give me that, and I'll have the exit-asymmetry memo on your desk tomorrow so you know exactly what our silence is worth in there." },
        ],
        choices: [
          {
            text: "Close the charter with the escalation protocol: \"Then the charter, complete: reservation 2.5, target 4, red lines carved out, structure authorized inside Webb's guardrails, legal reads all paper, clinical reviews the term sheet — and one protocol binding me: anything outside this charter, I take a recess and call this room before responding. Pierce will test the mandate's seams within ten minutes; what he'll find is that there aren't any. Meeting's Thursday. I'll bring back a deal this room already agreed to want.\"",
            next: "w4strong",
            score: { clarity: 2, align: 1 },
            note: "The recess-and-call protocol is the charter's keystone: it converts 'unified mandate' from a meeting outcome into a live guarantee — the negotiator literally cannot be split from the building mid-session. Pierce-class counterparts probe for daylight between negotiator and principals; you just sealed the seam in front of witnesses.",
          },
          {
            text: "Close it faster: \"Agreed on all counts. I'll circulate a summary. Thursday, then.\"",
            next: "w4loose",
            score: { clarity: 1 },
            note: "The substance is agreed and the mechanics are vapor: no escalation protocol, no explicit authority boundaries, 'a summary' as the charter's only artifact. Mandates without mechanics hold until the first uncomfortable term — which is precisely when they're needed.",
          },
        ],
      },

      w3panic: {
        turns: [
          { who: "webb", text: "Prepare the board for a weaker deal — before the negotiation starts? Absolutely not. Karen's fact goes in the vault, it calibrates our floor, and it never leaves this room, because the fastest way to get a bad deal is for the building to start budgeting for one. Negotiator: the exit asymmetry means we don't bluff termination. It does NOT mean we pre-concede. Do you understand the difference, or does finance need to sit at your table Thursday?" },
        ],
        choices: [
          {
            text: "Take the correction and convert it to charter language: \"Understood, and Marcus said it better than I did: the asymmetry calibrates the reservation — no termination theater, no pre-concession. Let's finish the job properly: real floor from finance, red lines from clinical, and I want an escalation protocol so nothing outside this room's agreement gets conceded without this room. Building the charter now.\"",
            next: "w3charter",
            score: { align: 1, clarity: 1 },
            note: "Webb handed you the correct doctrine — bad BATNAs discipline your reservation point, silently — and you converted the correction into charter structure instead of defending the wobble. Huddles test negotiators too; recovering in front of the room is part of the audition.",
          },
          {
            text: "Defend the caution: \"With respect, Marcus, boards hate surprises more than they hate weak openings. A managed-expectations memo protects all of us.\"",
            next: "w4loose",
            score: {},
            note: "A pre-negotiation memo teaching the board to expect less is a concession Cascade never had to buy. Webb will spend the rest of the huddle protecting the mandate from its own negotiator — and Thursday's authority delegation just got narrower.",
          },
        ],
      },

      w3patch: {
        turns: [
          { who: "lindqvist", text: "Before we adjourn on 'everyone live with that': a legal observation about mandates, offered freely. In my files are two Cascade cycles where this exact room nodded at a fast mandate, and both times the seams opened mid-negotiation — clinical objecting through the CMO's office in week five, finance re-trading the floor by email. Pierce found every gap, because finding gaps is his job. If this mandate has a floor nobody stress-tested and authority nobody bounded, we are scheduling those seams now. I'd rather spend twenty more minutes than another spring cleaning up drafting we accepted under deadline." },
        ],
        choices: [
          {
            text: "Spend the twenty minutes: \"Karen's files outvote our impatience. Twenty minutes, properly: Marcus — the real floor, not the ask. Renée — red lines in writing. Karen — the exit memo and paper-review rule. And an escalation protocol binding me to this room. Then we adjourn with a mandate that doesn't have seams.\"",
            next: "w2interests",
            score: { align: 1, surface: 1 },
            note: "Lindqvist offered the institutional memory — two cycles of seam-failures — and you spent the twenty minutes. Cheap insurance: every mandate gap costs its twenty minutes eventually; the only question is whether Pierce is in the room when the bill arrives.",
          },
          {
            text: "Bank the patch: \"Noted for the retro, Karen — but we have a workable mandate and three busy calendars. Thursday. I'll be careful.\"",
            next: "w4loose",
            score: {},
            note: "'I'll be careful' — the negotiator's version of 'we'll watch him closely' from Module 5. Counsel just showed you the failure pattern from her own files, twice-documented, and the mitigation adopted is personal carefulness.",
          },
        ],
      },

      w4strong: {
        turns: [
          { who: "narrator", text: "Thursday, ten minutes in — exactly on schedule — Pierce tests the seams: a generous-sounding structure offer priced against 'flexibility on that oncology carve-out.' You don't check notes: 'The carve-out's a red line — my building signed it, all three departments, in one room. Spend your creativity elsewhere.' Pierce smiles slightly — the smile of a professional recognizing load-bearing architecture — and redirects to the corridor, where the deal actually lives. Weeks later, at the term-sheet review, Vasquez initials the clinical page, Webb checks the guardrails, Lindqvist bleeds red ink on two clauses that needed it. The deal ratifies in one meeting. The mandate huddle, everyone agrees afterward, was where the negotiation was actually won — which is what the negotiation books always say, and nobody believes until they've sat in both rooms." },
        ],
        end: true,
        outcome: "strong",
      },
      w4loose: {
        turns: [
          { who: "narrator", text: "Thursday goes well enough — until Pierce, in week three, offers a structure package with a small utilization-review expansion folded quietly into the quality-bonus terms. It looks technical; you concede it provisionally. The reconvened huddle is, as Vasquez promised, a much less pleasant format: clinical discovers a red line crossed by proxy, finance discovers 'provisional' concessions it never bounded, and you spend a week negotiating with your own building for permission to un-concede — which Pierce grants, graciously, at a price: the corridor split moves five points his way. 'Seams,' Lindqvist notes in the retro, tapping her two-cycle file, 'now three cycles thick.' The deal closes. The mandate huddle gets a standing agenda item next cycle, with your name on the lesson." },
        ],
        end: true,
        outcome: "provisional",
      },
    },
    outcomes: {
      strong: {
        label: "The negotiation, won in the huddle",
        text: "You excavated your own building's interests before facing Pierce's, converted three private constraints into one seamless charter — true reservation, ordered red lines, guardrailed structure authority, recess-and-call protocol — and the counterpart's seam-test bounced off architecture. The meeting most negotiators skip is the one that decides the table.",
      },
      provisional: {
        label: "A mandate with seams",
        text: "The huddle produced agreement without mechanics — no tested floor, no bounded authority, no escalation protocol — and Pierce found the gap on schedule, priced in corridor points and a week of internal renegotiation. The pattern was in Lindqvist's files twice before it was yours. Replay and spend the twenty minutes.",
      },
      mixed: {
        label: "Three departments, three deals",
        text: "The room never converged: the loudest position became the mandate, the quiet constraints surfaced mid-negotiation through side channels, and the counterpart negotiated against the daylight between you and your own building. The internal table is a negotiation too — replay and run it like one.",
      },
    },
  },

  /* ---------------------- Step 6: Reflective Debrief ---------------------- */
  debrief: {
    intro:
      "Advocacy-inquiry on the module where creating and claiming had to share one skill. You negotiated against a professional, sat in his chair, and forged a mandate from your own divided building — the reflections work best against a real upcoming negotiation, so bring one to mind now.",
    prompts: [
      {
        id: "d1",
        frame: "Advocacy · Inquiry",
        question:
          "I noticed the simulations turned on questions asked early — 'where does our contract hurt you,' 'what does the margin actually require' — and that the trench appeared wherever positions met positions. In your last significant negotiation (a contract, a budget, a hire), did you ever learn the counterpart's actual interests? If not, what question would have surfaced them, and what stopped you from asking it?",
      },
      {
        id: "d2",
        frame: "BATNA audit",
        question:
          "Take the real negotiation you have coming. Write the honest answers: What will you actually do if it produces nothing — priced, not vibes? What's their alternative, and how comfortable are they? What could you do in the next two weeks, away from the table, to improve your side of that equation?",
      },
      {
        id: "d3",
        frame: "The mandate mirror",
        question:
          "The huddle simulation argued that negotiators lose internally before they lose externally. For your upcoming negotiation: who are your 'Webb, Vasquez, and Lindqvist' — the stakeholders whose unvoiced constraints could surface mid-deal? Have you actually asked them what they need (not want), and do you have their mandate in a form they'll defend when the terms get uncomfortable?",
      },
    ],
    commitment: {
      id: "commit",
      label: "Commitment to practice",
      question:
        "Write one concrete commitment for the next 30 days: name the real negotiation, the interest question you will ask the counterpart in the first ten minutes, your priced reservation point, and the one thing you'll do before the meeting to improve your BATNA. Module 8 will ask you what the pie turned out to be.",
    },
  },
};
