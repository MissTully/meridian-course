/* Module 1 — Morning Report: The Games We Are Already Playing
   Fully authored pilot content: vignette, concept coach, MCQ case,
   one-on-one simulation, Switch Chairs variant, multidisciplinary meeting,
   and the reflective debrief. */

export const module1Content = {
  /* ------------------------- Step 1: Topic Video ------------------------- */
  video: {
    vpTitle: "Two Chairs, One Schedule",
    vignette: [
      "It is 7:10 on a Tuesday morning at Meridian Academic Medical Center, and operating room 6 is dark. So is OR 9. Down the hall, the surgical scheduler is telling a spine patient's family that the next available slot is in five weeks.",
      "Dr. Tomas Herrera, Chair of Surgery, holds fourteen blocks he isn't filling. He knows it. But the last time a chair released time 'temporarily,' it never came back — so he schedules phantom follow-ups to keep his utilization numbers defensible. Two floors up, the chair of orthopedics is doing exactly the same thing, for exactly the same reason.",
      "Neither of these people is behaving badly. Each is making the individually rational choice, given what happened to the last person who cooperated. And the result is a system in which everyone — both departments, the schedulers, and the patient waiting five weeks — is worse off than if both had shared.",
    ],
    teaching: [
      {
        h: "This situation has a name",
        p: "It is a Prisoner's Dilemma: a game in which each player's dominant strategy — the move that is best for them no matter what the other does — is to defect (hoard), even though mutual cooperation (sharing) would leave everyone better off. Once you can see the structure, you stop asking 'why are these people so difficult?' and start asking 'what payoffs are they responding to?'",
      },
      {
        h: "The four pieces of any game",
        p: "Players (who is choosing), strategies (what they can choose), payoffs (what each combination of choices costs and rewards them), and information (what each player knows when choosing). Most 'personality conflicts' in healthcare dissolve into payoff conflicts when you write these four pieces down.",
      },
      {
        h: "The tragedy of the commons",
        p: "OR block time, float pool nurses, and imaging slots are shared resources. When each service captures the full benefit of hoarding but the cost of underutilization is spread across the whole system, hoarding is the predictable equilibrium — not a moral failure. Exhortation ('be more collaborative!') does not change equilibria. Changing payoffs does.",
      },
      {
        h: "The communication anchor: psychological safety",
        p: "TeamSTEPPS begins with team structure and psychological safety for a game-theoretic reason: information sharing is a cooperative move, and people will not make cooperative moves while they expect defection to be punished with silence or exploitation. Safety is the precondition that makes truth-telling individually rational.",
      },
    ],
  },

  /* ---------------------- Step 2: AI Concept Coach ---------------------- */
  coach: {
    coachName: "The Concept Coach",
    intro:
      "Before you walk into any room at Meridian, let's make sure the concept is solid. I'll give you short scenarios; you tell me what you see. There are no grades here — wrong turns are where the learning is.",
    exchanges: [
      {
        coach:
          "Scenario one. Two hospitalist groups share weekend coverage. Each group can staff generously or leanly. If both staff generously, weekends are safe and everyone's load is fair. If one staffs leanly while the other is generous, the lean group's doctors get easy weekends while the generous group drowns. If both go lean, weekends become dangerous for everyone. Who are the players, and what's the dominant strategy?",
        options: [
          {
            text: "The players are the two groups; each group's dominant strategy is to staff leanly — it's better for them whether or not the other group is generous.",
            quality: "good",
            feedback:
              "Exactly. Lean beats generous for each group no matter what the other does — which is what 'dominant' means — and the equilibrium (lean, lean) is worse for both than (generous, generous). That's the Prisoner's Dilemma signature.",
          },
          {
            text: "The players are the individual physicians, and the dominant strategy is to be generous, because patient safety comes first.",
            quality: "partial",
            feedback:
              "Careful — you've named what people *should* do, not what the payoffs reward. The choosing units here are the groups, and the game rewards lean staffing whichever way the other group goes. Diagnosis before prescription: first see the structure honestly, then change it.",
          },
          {
            text: "There's no real game here — it's a management failure that better scheduling software would fix.",
            quality: "miss",
            feedback:
              "Software can help, but look closer: each group is better off lean *regardless of what the other does*. That incentive structure exists with or without software. Until the payoffs change, any tool will be gamed the same way the schedule is.",
          },
        ],
      },
      {
        coach:
          "Now the misconception I hear most from smart leaders: 'Game theory tells us cooperation is naive — protect yourself first.' A colleague says this to you in the hallway. What's the strongest true reply?",
        options: [
          {
            text: "Cooperation without structure is naive; cooperation with structure is strategy. The point of seeing the dilemma is to redesign payoffs — verification, reciprocity, consequences — so cooperating becomes the rational move.",
            quality: "good",
            feedback:
              "That's the heart of this whole course. The Prisoner's Dilemma isn't an argument against cooperating; it's a diagnosis of *when unconditional cooperation gets exploited* — and an instruction manual for building conditions where it doesn't.",
          },
          {
            text: "Game theory is just a model; real colleagues aren't that calculating, so we should trust each other.",
            quality: "partial",
            feedback:
              "Warmer than it sounds, but it concedes too much. People don't need to be consciously calculating — payoffs shape behavior anyway (nobody 'decided' to create weekend coverage gaps). The reply that lands with a skeptic is that cooperation can be *made* rational, not that we should hope it is.",
          },
          {
            text: "They're right — in a competitive system, the defector always wins, so leaders should hoard defensively.",
            quality: "miss",
            feedback:
              "That's true only in games played exactly once between strangers. Healthcare is a repeated game with the same cast for years — where defection is punished by lost trust in every future round. (Module 3 is entirely about this.) Even here, notice the goal: change the game, don't just play the sad one well.",
          },
        ],
      },
      {
        coach:
          "Last one, and it's the transfer test. Meridian's two medicine units keep 'borrowing' each other's supplies and not restocking. The manager's fix: a poster campaign about teamwork. Using the four pieces of a game — players, strategies, payoffs, information — predict the result and propose one fix that actually changes a payoff.",
        options: [
          {
            text: "The poster changes no payoffs, so hoarding continues. A real fix: automatic par-level restocking charged to the borrowing unit's budget — now defection costs the defector.",
            quality: "good",
            feedback:
              "Perfect structure: you predicted the equilibrium from the unchanged payoffs, then moved a cost onto the defecting strategy. Notice you never needed anyone to become a better person — that's the signature of a mechanism fix. Hold onto that instinct for Module 8.",
          },
          {
            text: "The poster will work if leadership models the behavior, because culture change starts at the top.",
            quality: "partial",
            feedback:
              "Leadership modeling matters — it's information about what will be rewarded — but by itself it leaves the payoff matrix untouched: borrowing without restocking is still free. Pair the modeling with a mechanism (restocking charges, visible par audits) and now the culture message and the payoffs agree.",
          },
          {
            text: "Discipline the worst offenders publicly; once people see consequences, the borrowing will stop.",
            quality: "miss",
            feedback:
              "You did change a payoff — but you also taught everyone that admitting resource problems gets you punished, which kills the information flow psychological safety exists to protect. The best mechanisms make the cooperative move cheap and automatic, not the defection publicly shameful.",
          },
        ],
      },
    ],
    close:
      "You can now name players, strategies, payoffs, and information; you know a dominant strategy when you see one; and you know the difference between exhorting cooperation and engineering it. That's everything you need for the rooms ahead. First stop: the float pool.",
  },

  /* ------------------- Step 3: Branching Case with MCQ ------------------- */
  mcqCase: {
    title: "The Float Pool Problem",
    narrative: [
      "Meridian Community Hospital runs a shared float pool: six flexible nurses assigned each shift to the units with the highest acuity. Units report their acuity scores at 05:30 and the staffing office allocates the pool.",
      "Over six months, something odd has happened. Unit 4W and Unit 5E — the two busiest medical-surgical units — have both begun reporting *lower* acuity than their charge nurses privately believe is accurate. Interviews reveal why: last winter, units that reported honestly high acuity were 'rewarded' with extra floats — but then had those floats pulled mid-shift to whichever unit shouted loudest, leaving them worse off than if they had never asked. Meanwhile, units that quietly kept census pressure off the books held onto their core staff and their sanity.",
      "Now both units under-report, the pool is allocated on fiction, and two consecutive safety events have been traced to under-staffed shifts on exactly those units.",
    ],
    questions: [
      {
        id: "m1q1",
        stem: "What game structure best describes what 4W and 5E are playing?",
        tags: ["Prisoner's Dilemma", "Game identification"],
        options: [
          {
            key: "A",
            text: "A zero-sum game: one unit's float nurse is necessarily another's loss, so competition is the only possible outcome.",
            feedback:
              "The pool is fixed per shift, but the game isn't zero-sum across time: honest reporting by both would put floats where acuity is highest, reducing safety events for everyone. Both units can win — that's precisely what zero-sum rules out.",
          },
          {
            key: "B",
            text: "A Prisoner's Dilemma: each unit's dominant strategy is to under-report, though mutual honesty would leave both better off.",
            correct: true,
            feedback:
              "Yes. Whatever 5E reports, 4W does better (keeps staff, avoids mid-shift pulls) by under-reporting — and vice versa. Both defect, the pool allocates on fiction, and both end up with the safety events neither wanted.",
          },
          {
            key: "C",
            text: "A coordination game: both units want the same outcome but have failed to agree on a reporting convention.",
            feedback:
              "Tempting — but in a coordination game there's no incentive to deviate once aligned. Here, even if both units agreed to report honestly, each would still profit from quietly breaking the agreement. Misaligned incentives, not misaligned expectations. (Module 5 sharpens this exact distinction.)",
          },
          {
            key: "D",
            text: "Not a game at all: this is an individual integrity problem among charge nurses.",
            feedback:
              "The interviews say otherwise: the same nurses reported honestly until honesty was punished. When behavior tracks payoffs that consistently, character explanations mislead — and interventions aimed at character (integrity training, exhortation) will fail.",
          },
        ],
      },
      {
        id: "m1q2",
        stem: "If nothing changes, what does game theory predict will happen next?",
        tags: ["Equilibrium prediction", "Prisoner's Dilemma"],
        options: [
          {
            key: "A",
            text: "The equilibrium is stable: both units keep under-reporting, allocation quality keeps degrading, and other units learn to copy the strategy.",
            correct: true,
            feedback:
              "Right — and the last clause is the dangerous one. Equilibria teach. Every unit watching 4W and 5E hold onto staff learns the same lesson, and the reporting system's information value decays toward zero.",
          },
          {
            key: "B",
            text: "The situation will self-correct: after enough safety events, the units will recognize their shared interest and return to honest reporting.",
            feedback:
              "Shared interest was never the problem — both units would already prefer mutual honesty. The problem is that unilateral honesty is punished. Pain doesn't fix a dilemma; it usually deepens defensive play.",
          },
          {
            key: "C",
            text: "One unit will eventually defect from defection — reporting honestly to claim the moral high ground — and the other will follow.",
            feedback:
              "The first honest reporter gets exactly what happened last winter: floats granted, then pulled, plus exposure. Unilateral cooperation in an unchanged dilemma is a losing move, which is why it doesn't spread.",
          },
          {
            key: "D",
            text: "Impossible to say: human behavior in organizations is too complex for equilibrium predictions.",
            feedback:
              "Six months of consistent, explicable behavior by two independent units says the prediction is working fine. Complexity is real, but this structure has been reproducing the same outcome reliably — that's what makes it worth diagnosing.",
          },
        ],
      },
      {
        id: "m1q3",
        stem: "The CNO asks you to fix this. Which intervention changes the payoffs rather than merely exhorting cooperation?",
        tags: ["Mechanism thinking", "Payoff design"],
        options: [
          {
            key: "A",
            text: "A mandatory workshop for charge nurses on the importance of accurate acuity reporting, with a signed honesty pledge.",
            feedback:
              "This is exhortation in workshop form. Every charge nurse already knows accurate reporting matters; they under-report because accuracy is punished. After the workshop, the payoffs — and therefore the equilibrium — are unchanged.",
          },
          {
            key: "B",
            text: "Audit acuity reports and discipline units caught under-reporting.",
            feedback:
              "It's a payoff change, but aimed at the wrong node — it adds punishment for the defensive move while leaving honesty as unprotected as before, and it teaches units to game the audit next. You'd get compliance theater, plus a chilling effect on exactly the information flow you need.",
          },
          {
            key: "C",
            text: "Guarantee that floats allocated on reported acuity cannot be pulled mid-shift without the receiving unit's charge nurse agreeing, and publish pool allocation against reported vs. observed acuity weekly.",
            correct: true,
            feedback:
              "This is the mechanism fix. The no-pull guarantee removes the punishment that made honesty a losing move; the published reconciliation makes under-reporting visible and self-defeating. Honest reporting becomes the individually rational strategy — no pledge required.",
          },
          {
            key: "D",
            text: "Remove the acuity self-reports entirely and allocate the float pool evenly across all units every shift.",
            feedback:
              "This ends the lying by ending the information. Even allocation sends floats to quiet units while 4W drowns — you've traded a gamed signal for no signal. The goal is to make the signal honest, not to stop listening.",
          },
        ],
      },
      {
        id: "m1q4",
        stem: "You present the fix at the unit council. A charge nurse says: 'So you're saying we were lying? That's insulting.' What is the best response — and why, in game terms?",
        tags: ["Psychological safety", "Assuming good intent"],
        options: [
          {
            key: "A",
            text: "'No one behaved badly. The old system punished accurate reporting, so protecting your unit was the rational response. We're changing the system so accuracy protects you instead.'",
            correct: true,
            feedback:
              "This is 'assuming good intent' made operational: you reframe the behavior as a rational response to payoffs, which is both true and face-saving — and it protects the psychological safety you'll need for honest reporting to actually resume.",
          },
          {
            key: "B",
            text: "'The data speaks for itself — reported acuity diverged from observed acuity for six months. Let's not make this personal.'",
            feedback:
              "Accurate and disastrous. 'The data speaks for itself' is heard as a formal accusation, and 'don't make it personal' makes it more personal. You'd win the exchange and lose the room — and information sharing dies with it.",
          },
          {
            key: "C",
            text: "'I'm not here to relitigate the past. Let's focus on the new process going forward.'",
            feedback:
              "Dodging the question leaves the accusation ('you called us liars') standing unanswered, and unanswered accusations calcify. The past *is* the payoff history that explains the behavior — naming it without blame is what dissolves the sting.",
          },
          {
            key: "D",
            text: "'You're right, and I apologize — the reports were probably fine and we'll revisit whether any change is needed.'",
            feedback:
              "Appeasement that surrenders the diagnosis. The reports were not fine — the safety events are real. You can honor the people while being honest about the system; abandoning the fix to soothe the moment repurchases the old equilibrium.",
          },
        ],
      },
      {
        id: "m1q5",
        stem: "Six weeks after the fix, reported acuity has risen system-wide by 15% and the float pool is oversubscribed every shift. What is the most likely explanation a game-theorist would check first?",
        tags: ["Payoff design", "Second-order effects", "Goodhart's law"],
        options: [
          {
            key: "A",
            text: "The fix failed and units are lying in the opposite direction; return to the old allocation method.",
            feedback:
              "Check before concluding. Some of the rise is the *point* — six months of under-reporting just ended, so truth looks like inflation against a dishonest baseline. Reverting on the first noisy signal would teach everyone that the new rules are temporary, which re-creates the old game.",
          },
          {
            key: "B",
            text: "Now that reporting high is rewarded and protected, the new rational strategy is over-reporting — the mechanism needs a cost or verification on the high side too.",
            correct: true,
            feedback:
              "Yes — you fixed one direction of misreporting and opened the other. Every mechanism creates its own new game (Goodhart's law, formally arriving in Module 8). The published reported-vs-observed reconciliation you built is exactly the verification lever to now attach gentle consequences to.",
          },
          {
            key: "C",
            text: "Acuity has genuinely risen 15%; the timing with the mechanism change is coincidence.",
            feedback:
              "Possible, and worth ruling out with the observed-acuity data — but a system-wide jump landing in the same six weeks as a payoff change that rewards high reports is a pattern a game-thinker interrogates before accepting coincidence.",
          },
          {
            key: "D",
            text: "The float pool is simply too small and should be expanded to meet the reported demand.",
            feedback:
              "Expanding supply to meet a possibly-inflated signal bakes the inflation in permanently — and future budget cycles will be negotiated against it. Verify the signal first; size the pool second.",
          },
        ],
      },
    ],
  },

  /* -------------------- Step 4: One-on-One Simulation -------------------- */
  oneOnOne: {
    simId: "oneOnOne",
    title: "Thirty Minutes with Dr. Raman",
    learnerRole:
      "You are the newly appointed Service Line Director for Hospital Medicine at Meridian AMC. You want to propose transparent sharing of imaging slots and step-down capacity with Cardiovascular. Dr. Priya Raman has agreed to thirty minutes. You know she was burned badly the last time she cooperated.",
    personas: ["raman"],
    scoring: {
      dims: [
        { id: "ack", label: "Acknowledgment before advocacy", max: 4, anchor: "Named her history and its legitimacy before proposing anything" },
        { id: "structure", label: "Payoff-changing structure", max: 4, anchor: "Proposed verification, protection, and reciprocity — not goodwill" },
        { id: "trust", label: "Trust trajectory", max: 3, anchor: "Left the relationship stronger than you found it" },
      ],
    },
    start: "n1",
    nodes: {
      n1: {
        turns: [
          { who: "narrator", text: "Dr. Raman's office. Journals in exact stacks. She does not offer coffee. She looks at the clock, then at you." },
          { who: "raman", text: "You have thirty minutes. And I'll save us both some time: when a new director books a meeting to 'align on capacity,' I've learned what that means. So — what do you want from my service?" },
        ],
        choices: [
          {
            text: "Lead with the proposal: a shared, transparent dashboard of imaging slots and step-down beds across both services, with monthly rebalancing.",
            next: "n2cold",
            score: { structure: 1 },
            note: "The proposal is sound — but watch what just happened to her posture. Structure offered before acknowledgment sounds, to a burned cooperator, like the opening move of another grab.",
          },
          {
            text: "Name the history first: \"Before I ask for anything — I know what happened three years ago with the shared-governance initiative. You shared your capacity data in good faith and orthopedics used it against you. If I were you, I'd assume I was here to do the same thing.\"",
            next: "n2thaw",
            score: { ack: 2, trust: 1 },
            note: "Acknowledgment before advocacy. You've told her that her guardedness is rational — which, in this building, it is.",
          },
          {
            text: "Build rapport first: congratulate her on the cardiology program's rankings and ask how her fellowship recruiting is going.",
            next: "n2deflect",
            score: {},
            note: "Flattery is cheap talk — costless to say, therefore carrying no information. She's been managing meetings like this for fifteen years.",
          },
        ],
      },

      n2cold: {
        turns: [
          { who: "raman", text: "A dashboard. So everyone can see exactly what cardiology holds, in real time. I did something like that once — I published my true imaging capacity to a joint committee. Within two quarters, eleven of my slots were 'temporarily reallocated.' They never came back. Why would I get in that pool again?" },
        ],
        choices: [
          {
            text: "Stop and acknowledge: \"That's a fair question, and honestly the history answers it. You cooperated, it was exploited, and defending your service since then has been the rational move. I should have started there.\"",
            next: "n3",
            score: { ack: 2, trust: 1 },
            note: "Recovering with acknowledgment mid-conversation still counts — repair is a skill this program returns to in Module 3.",
          },
          {
            text: "Reassure her: \"This time is different — I'm not orthopedics, and I give you my word this stays between our services.\"",
            next: "n3cheap",
            score: {},
            note: "\"Trust me\" is the definition of cheap talk. She has heard those words before, from someone who meant them at the time.",
          },
          {
            text: "Press the logic: \"Because the current arrangement is failing both of us — your patients wait for step-down beds that medicine is holding, and mine wait for imaging you're not using.\"",
            next: "n3logic",
            score: { structure: 1 },
            note: "True, and she knows it's true. But being right about the dilemma isn't the same as being safe to cooperate with — she needs protection, not proof.",
          },
        ],
      },

      n2thaw: {
        turns: [
          { who: "narrator", text: "Something shifts, slightly. She sits back." },
          { who: "raman", text: "You did your homework. Eleven imaging slots — that's what cooperating cost me. My department still brings it up when I suggest working with anyone. So yes: assume I think that's why you're here. What's different this time?" },
        ],
        choices: [
          {
            text: "Offer protection before asking for anything: \"Structure, not promises. Any slot either service releases is escrowed — it reverts automatically after ninety days unless we both renew. Neither of us can lose what we lend. And we pilot it with me releasing first.\"",
            next: "n3strong",
            score: { structure: 3, trust: 1 },
            note: "Escrow, reversion, and going first: you've made her cooperation safe and yours costly — a credible signal, not cheap talk.",
          },
          {
            text: "Appeal to the shared upside: \"What's different is the size of the prize. Modeling says shared scheduling frees up eleven percent capacity for both services. We're both leaving money on the table.\"",
            next: "n3upside",
            score: { structure: 1 },
            note: "The upside was never in dispute — mutual cooperation always pays better in a dilemma. Her question is about the downside: what happens to her if she cooperates and you don't.",
          },
          {
            text: "Ask instead of telling: \"You tell me. You've seen a version of this fail from the inside. What would it have taken, three years ago, for sharing to have been safe for cardiology?\"",
            next: "n3ask",
            score: { ack: 1, structure: 1, trust: 1 },
            note: "Handing her the pen. People rarely walk away from mechanisms they designed — and her answer will tell you her true reservation terms.",
          },
        ],
      },

      n2deflect: {
        turns: [
          { who: "raman", text: "Recruiting is fine. Rankings are fine. You have twenty-six minutes, and I notice you haven't answered my question. What do you want from my service?" },
        ],
        choices: [
          {
            text: "Drop the warm-up and acknowledge: \"Fair. Here it is directly — and before the proposal, the context: I know cooperating on capacity cost you eleven imaging slots three years ago. Any version of this that can be used against you the same way is a version I don't want either.\"",
            next: "n2thaw",
            score: { ack: 1 },
            note: "She punished the deflection; you answered with directness plus acknowledgment. The meeting is recoverable.",
          },
          {
            text: "Present the dashboard proposal now, crisply, with the modeling numbers.",
            next: "n2cold",
            score: { structure: 1 },
            note: "Crisp is better than evasive — but you're now proposing structure to someone whose central question ('will this be used against me?') is still unaddressed.",
          },
        ],
      },

      n3cheap: {
        turns: [
          { who: "raman", text: "Your word. The director who took my slots gave me her word too — she meant it, right up until her own numbers were on the line. I don't doubt your sincerity. I doubt sincerity as a mechanism. We're at fifteen minutes. Do you have anything sturdier?" },
        ],
        choices: [
          {
            text: "\"Yes. Forget promises — escrowed releases with automatic reversion after ninety days, quarterly joint review of a reported-versus-actual utilization dashboard, and I release capacity first.\"",
            next: "n3strong",
            score: { structure: 3 },
            note: "She told you exactly what she needed — something sturdier than sincerity — and you delivered mechanism design.",
          },
          {
            text: "\"What would 'sturdier' look like to you? You've seen where the last design failed — I'd rather build this around those failure points than around my assurances.\"",
            next: "n3ask",
            score: { ack: 1, structure: 1, trust: 1 },
            note: "Turning her skepticism into co-authorship. Notice she becomes more specific — and more invested — the moment she's designing rather than defending.",
          },
        ],
      },

      n3logic: {
        turns: [
          { who: "raman", text: "You're right about the waste. I could recite those numbers in my sleep. But you're describing why cooperation would be nice, and I'm telling you why it isn't safe. Those are different problems. Solve mine." },
        ],
        choices: [
          {
            text: "\"Fair distinction. Safety, then: escrowed releases that revert automatically unless we both renew, a joint utilization dashboard so hoarding is visible in both directions, and medicine releases first.\"",
            next: "n3strong",
            score: { structure: 3, ack: 1 },
            note: "She handed you the frame — nice versus safe — and you built the mechanism to her actual objection.",
          },
          {
            text: "\"The safety is in leadership: Dr. Vasquez has agreed to sponsor this, and her office will arbitrate any disputes.\"",
            next: "n4sponsor",
            score: { structure: 1 },
            note: "Sponsorship helps — but arbitration after a grab is a remedy, not a protection. She's already lived through the version where remedies come too late.",
          },
        ],
      },

      n3: {
        turns: [
          { who: "raman", text: "Well. That's more candor than this office usually hears. The history is exactly as you said, so let me ask the only question that matters: if we build your dashboard and medicine has a bad quarter, what stops you — or whoever replaces you — from doing to me what orthopedics did?" },
        ],
        choices: [
          {
            text: "\"A rule, not a person: released capacity is escrowed and reverts automatically after ninety days unless both services renew. Nobody — including my successor — can keep what you lend. And I'll release first, so the early risk is mine.\"",
            next: "n3strong",
            score: { structure: 3 },
            note: "You answered 'what stops you?' with a mechanism that binds you too. That is the only answer a burned cooperator can bank.",
          },
          {
            text: "\"Nothing but my judgment and my incentives — and my incentives are aligned with yours, because my quality metrics depend on your step-down beds.\"",
            next: "n4align",
            score: { structure: 1 },
            note: "Incentive alignment is real and worth naming, but incentives change with every budget cycle — she is pricing in your successor, not just you.",
          },
        ],
      },

      n3upside: {
        turns: [
          { who: "raman", text: "Eleven percent. I believe the model. Here's what the model doesn't price: the afternoon I sat in a committee meeting watching my own published data get used to justify taking my slots. The upside was never my objection, Director. The exposure is. What are you doing about the exposure?" },
        ],
        choices: [
          {
            text: "\"You're right — I answered the wrong question. For the exposure: escrowed releases, automatic reversion in ninety days unless we both renew, mutual visibility so hoarding shows in both directions, and I go first.\"",
            next: "n3strong",
            score: { structure: 3, ack: 1 },
            note: "She had to ask twice, but you got there: protection is the product; upside is just the brochure.",
          },
          {
            text: "\"The exposure is shared — I'm publishing medicine's numbers too. We're equally visible.\"",
            next: "n4align",
            score: { structure: 1 },
            note: "Mutual visibility is a real payoff change — but symmetric exposure only comforts the party who wasn't previously the one exploited.",
          },
        ],
      },

      n3ask: {
        turns: [
          { who: "narrator", text: "She's quiet for a moment. It's the first question she's been asked in this building that she didn't already know the answer to." },
          { who: "raman", text: "Three things, since you ask. The data flows both ways — I see your utilization the day you see mine. Anything I release comes back automatically unless I renew it — no committee can 'temporarily' keep it. And whoever proposes this shares the risk visibly, because last time the proposer walked away clean. Design me that, and we're talking." },
        ],
        choices: [
          {
            text: "\"Then that's the design: mutual real-time dashboards, escrowed releases with ninety-day automatic reversion, and hospital medicine releases the first tranche before cardiology commits anything.\"",
            next: "n3strong",
            score: { structure: 3, trust: 1 },
            note: "You built her mechanism out of her own three requirements. She is now defending this design in committee, not you.",
          },
          {
            text: "\"The first two are easy. The third is hard for me politically — can we say we announce jointly and share the risk that way?\"",
            next: "n4negotiate",
            score: { structure: 2 },
            note: "Honest about your constraint — that's not nothing. But watch: the one term you softened is the costly signal, the thing that made the other two believable.",
          },
        ],
      },

      n4sponsor: {
        turns: [
          { who: "raman", text: "Vasquez sponsored the last initiative too. Sponsors write supportive emails; they don't sit in the room when the reallocation vote happens. I'll consider your dashboard when it comes with rules that work even when nobody sympathetic is watching. Send me something in writing." },
          { who: "narrator", text: "The meeting ends civilly — and provisionally. She is unpersuaded but not closed. The door is ajar exactly as wide as your next proposal's enforcement mechanism." },
        ],
        end: true,
        outcome: "provisional",
      },

      n4align: {
        turns: [
          { who: "raman", text: "Aligned incentives, shared exposure. Better answers than I expected, honestly — and still answers about *this year*, with *you* in the chair. Rules outlast alignment. Put reversion rights and mutual data in writing, and I'll bring it to my division with a neutral summary. That's more than anyone else has gotten from me on this topic in three years." },
          { who: "narrator", text: "Not a yes — a genuine maybe, from someone whose maybes are famously expensive. The mechanism details will decide it." },
        ],
        end: true,
        outcome: "provisional",
      },

      n4negotiate: {
        turns: [
          { who: "raman", text: "Joint announcement. Hm. Shared podiums are where risk goes to hide — but I'll take it with one amendment: the written protocol states hospital medicine's release executes thirty days before ours. You can announce it however you like. Do we have an understanding?" },
        ],
        choices: [
          {
            text: "\"Done. Thirty days, in the protocol, and I'll own it with my chairs. You'll have the draft Friday.\"",
            next: "n5win",
            score: { structure: 1, trust: 1 },
            note: "She rebuilt the costly signal you softened, and you accepted it. Going first was always the price; at least you let her name it.",
          },
          {
            text: "\"Let me take thirty days to my chairs first — I don't want to commit to sequencing I can't deliver.\"",
            next: "n5cautious",
            score: { trust: 1 },
            note: "Prudent, and honest — but notice the asymmetry she'll hear: you asked her to accept exposure in this room, and took none away with you.",
          },
        ],
      },

      n3strong: {
        turns: [
          { who: "narrator", text: "She reads your one-page sketch twice. Then she does something unrecorded in recent departmental history: she gets up and pours two coffees." },
          { who: "raman", text: "Escrow with automatic reversion. Mutual visibility. And you first. You understand this isn't how it usually goes — usually I'm told the sharing is the safety. One more thing before I take this to my division: when Herrera hears about this — and he will — he'll come for whatever we've pooled. What's your answer for him?" },
        ],
        choices: [
          {
            text: "\"The same mechanism, offered openly: any service can join the pool on identical terms — escrow, reversion, mutual data. What nobody gets is access to pooled capacity without accepting the visibility. The rules are the answer.\"",
            next: "n5win",
            score: { structure: 1, trust: 1 },
            note: "You extended the mechanism instead of forming a defensive alliance — turning a bilateral truce into the seed of a system norm. Remember this move in Module 7.",
          },
          {
            text: "\"Then we keep this quiet between our two services as long as we can. What Herrera doesn't know about, he can't raid.\"",
            next: "n5quiet",
            score: {},
            note: "Secrecy feels safe and prices in its own discovery — and when it surfaces, your transparency initiative was born in concealment. She notices the irony even if you don't say it aloud.",
          },
          {
            text: "\"Honestly? I don't have Herrera solved yet. I'd rather tell you that than improvise an answer — and I'd like your read, because you've fought him longer than I have.\"",
            next: "n5win",
            score: { trust: 1, ack: 1 },
            note: "Admitting the gap is a costly signal of its own — and asking a former adversary of Herrera's for counsel converts her from evaluator to strategist.",
          },
        ],
      },

      n5win: {
        turns: [
          { who: "raman", text: "All right, Director. Send me the protocol — escrow terms, reversion clause, the dashboard spec, and your release date in writing. I'll walk it into my division meeting myself, which is worth more than my signature. And — thank you for starting with the history. Nobody starts with the history." },
          { who: "narrator", text: "Thirty minutes, on the nose. You came for capacity and left with something rarer at Meridian: a burned cooperator willing to try one more round — because this time, the game itself was redesigned." },
        ],
        end: true,
        outcome: "strong",
      },

      n5cautious: {
        turns: [
          { who: "raman", text: "Take your thirty days to your chairs, then. I've watched proposals go into that room and come out lighter. If yours comes back with sequencing intact, so does my interest. Fair?" },
          { who: "narrator", text: "Fair — and suspended. The deal is alive, resting entirely on whether the costly signal survives your own building. Which, she would note, is exactly the point of costly signals." },
        ],
        end: true,
        outcome: "provisional",
      },

      n5quiet: {
        turns: [
          { who: "raman", text: "Hm. A transparency pact, conducted in secret. I'll pretend I don't see the shape of that. Write me the protocol anyway — but when this surfaces, and it will, the first question will be why we hid it. Have an answer ready that sounds better than 'we were afraid of Herrera.'" },
          { who: "narrator", text: "You leave with a deal and a flaw baked into it. She saw the flaw before you did — worth remembering, next time you're tempted to solve a visibility problem with concealment." },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "A burned cooperator, back at the table",
        text: "Dr. Raman is personally sponsoring your protocol to her division. You acknowledged her history before advocating, answered her exposure with mechanisms rather than promises, and made your own commitment costly and visible. This is what changing the payoffs — instead of exhorting cooperation — looks like in a single conversation.",
      },
      provisional: {
        label: "The door is ajar",
        text: "Raman is unpersuaded but genuinely open — an expensive concession from her. What's missing is the part promises can't supply: enforceable protection against another grab. Replay and notice where she told you, almost in plain words, what safety would look like.",
      },
      mixed: {
        label: "A deal with a crack in it",
        text: "You have an agreement, and it carries a concealed defect she spotted immediately. Structure was strong; the final move traded long-run trust for short-run cover. Worth a replay — the strongest branch extends the mechanism to Herrera instead of hiding from him.",
      },
    },
  },

  /* --------------------- Step 4b: Switch Chairs --------------------- */
  switchChairs: {
    simId: "switchChairs",
    title: "Switch Chairs: You Are Dr. Raman",
    learnerRole:
      "Same office, same thirty minutes — but now you are Dr. Priya Raman. Three years ago you shared capacity data in good faith and lost eleven imaging slots. Your division still brings it up. A new hospital-medicine director has just asked to 'align on capacity.' Feel what the ask feels like from this chair.",
    personas: [],
    extraSpeakers: {
      director: { name: "The New Director", initials: "ND", role: "Service Line Director, Hospital Medicine" },
    },
    scoring: {
      dims: [
        { id: "perspective", label: "Perspective fidelity", max: 3, anchor: "Advocated Raman's legitimate interests rather than role-playing agreeableness" },
        { id: "candor", label: "Productive candor", max: 3, anchor: "Named the history and the required protections out loud" },
      ],
    },
    start: "s1",
    nodes: {
      s1: {
        turns: [
          { who: "narrator", text: "Your office. Your journals, your exact stacks. Eleven slots, three years ago. The new director sits down with the particular brightness of someone who has not yet been taken advantage of." },
          { who: "director", text: "Thanks for the time, Dr. Raman. I'll be direct: I think our services are leaving capacity on the table, and I'd like to propose a shared dashboard — imaging slots and step-down beds, fully transparent, rebalanced monthly. The modeling shows eleven percent upside for both of us." },
        ],
        choices: [
          {
            text: "Test them with the real question: \"Before the modeling — do you know what happened the last time this service published its true capacity? Because if you don't, you haven't done your homework, and if you do, I'd like to hear you say it.\"",
            next: "s2test",
            score: { candor: 2, perspective: 1 },
            note: "This is what it feels like from her side: the history isn't grievance, it's due diligence. You're testing whether they've priced in your exposure.",
          },
          {
            text: "Be agreeable — the upside is real, after all: \"Eleven percent is compelling. Send me the dashboard spec and I'll look at it.\"",
            next: "s2soft",
            score: {},
            note: "Notice what you just did: you played Raman as easier than she is. Switch Chairs only teaches if you defend her interests as fiercely as she would.",
          },
          {
            text: "Decline flatly: \"We tried transparency here once. It cost this department eleven imaging slots. The answer is no, and it will keep being no.\"",
            next: "s2wall",
            score: { perspective: 1 },
            note: "The guardedness is authentic — but pure refusal overshoots her. Even at her most burned, Raman keeps a price at which cooperation is rational. Find it.",
          },
        ],
      },
      s2test: {
        turns: [
          { who: "director", text: "I do know. The shared-governance initiative — you published cardiology's capacity data and orthopedics used it to take eleven of your imaging slots, which never came back. If I were in your chair, I'd assume this meeting was attempt number two." },
        ],
        choices: [
          {
            text: "Name your terms — the three protections: \"Good. Then here's what a serious version looks like: mutual data or none, automatic reversion of anything I release, and you go first. Bring me that, and I'll bring it to my division.\"",
            next: "s3terms",
            score: { candor: 1, perspective: 2 },
            note: "You just articulated the counterpart's reservation terms from the inside. In your real negotiations, this is the list to elicit — the one the other side always has.",
          },
          {
            text: "Stay guarded and reveal nothing: \"Knowing the history is the easy part. Impress me with the proposal and we'll see.\"",
            next: "s3guard",
            score: { perspective: 1 },
            note: "Defensible — but notice the cost from this chair: withholding your terms forces them to guess, and their guesses will be built around their interests, not yours.",
          },
        ],
      },
      s2soft: {
        turns: [
          { who: "narrator", text: "The director beams and slides the spec across. Somewhere, three years ago, a version of you slid data across a table with the same optimism." },
          { who: "director", text: "Wonderful — that was easier than I was warned it would be. I'll note cardiology as supportive when I take this to the capacity committee, then?" },
        ],
        choices: [
          {
            text: "Catch it — feel the exposure and correct course: \"No. 'Reviewing' is not 'supportive,' and there it is — the exact slippage that cost me eleven slots. Sit back down. Let me tell you what protections this actually requires.\"",
            next: "s3terms",
            score: { perspective: 2, candor: 1 },
            note: "You felt the grab from the receiving end — how fast an open posture becomes a committed position on someone else's slide deck. That sensation is the lesson.",
          },
          {
            text: "Let it go — it's approximately true: \"Fine, note us as supportive pending details.\"",
            next: "s3lost",
            score: {},
            note: "And this is precisely how it happened last time: not one betrayal, but a series of small unresisted slippages. The replay will sting usefully.",
          },
        ],
      },
      s2wall: {
        turns: [
          { who: "director", text: "I hear you, and I'm not going to argue the history — you lived it. But can I ask one question before the no is final? If sharing could be made *safe* — structurally safe, not promised safe — what would that have to look like?" },
        ],
        choices: [
          {
            text: "Answer honestly — give them the mechanism: \"Automatic reversion. Mutual visibility. And the proposer goes first. It would have to be a design that protects me even from your successor.\"",
            next: "s3terms",
            score: { candor: 2, perspective: 1 },
            note: "Even burned, Raman answers a genuine design question — because a rational player's 'no' is a price, not an identity. That's assuming good intent, applied to yourself.",
          },
          {
            text: "Hold the wall: \"It would have to look like three years ago never happening. We're done here.\"",
            next: "s3done",
            score: {},
            note: "Understandable — and it forecloses the branch where cardiology gets protected access to medicine's step-down beds. Grudges have payoffs too, and they're usually negative-sum.",
          },
        ],
      },
      s3terms: {
        turns: [
          { who: "director", text: "Mutual data, automatic reversion, and we release first. I can build that — honestly, it's a better design than what I walked in with. I'll have a written protocol to you by Friday, your protections on page one." },
          { who: "narrator", text: "After they leave, you notice something unfamiliar in the room: the possibility of cooperating without flinching. Not because anyone promised harder — because the rules finally did the protecting." },
        ],
        end: true,
        outcome: "strong",
      },
      s3guard: {
        turns: [
          { who: "director", text: "Then I'll come back with something worth your division's time. Thank you for the meeting — and for the history lesson I didn't have to be taught twice." },
          { who: "narrator", text: "A respectable draw. But sitting in this chair, you now know what the guardedness costs: every round of 'impress me' is a round of your own capacity problem going unsolved." },
        ],
        end: true,
        outcome: "provisional",
      },
      s3lost: {
        turns: [
          { who: "narrator", text: "Three weeks later, the capacity committee minutes list cardiology as 'supportive' of open rebalancing. Your division chief forwards them with a single line: 'Again?' You know exactly how this happened, because this time you watched yourself do it." },
        ],
        end: true,
        outcome: "mixed",
      },
      s3done: {
        turns: [
          { who: "narrator", text: "The director leaves politely. The slots stay protected; so does the stalemate. Medicine's step-down beds stay full of patients who could be yours to place. From this chair you can feel it clearly: the wall keeps things out, and it keeps things out." },
        ],
        end: true,
        outcome: "mixed",
      },
    },
    outcomes: {
      strong: {
        label: "You defended her — and found the deal",
        text: "You played Raman with full fidelity: tested for homework, named the history, and priced cooperation in enforceable protections rather than refusing or capitulating. The transfer question: in your real negotiations, who across the table holds a list like the one you just voiced — and have you ever actually asked for it?",
      },
      provisional: {
        label: "Faithful, but fortified",
        text: "You kept Raman's guard authentically high — and felt what the guardedness costs her. The strongest version of this chair names its terms out loud: a burned cooperator's fastest route to safety is telling the counterpart exactly what safety requires.",
      },
      mixed: {
        label: "The chair had more to teach",
        text: "Either the wall held (and the stalemate with it), or agreeableness let the grab happen again in slow motion. Both are instructive from the inside. Replay once and try the branch where Raman states her three protections plainly — it changes who she is in the story.",
      },
    },
  },

  /* --------------- Step 5: Multidisciplinary Meeting --------------- */
  meeting: {
    simId: "meeting",
    title: "The Capacity Committee",
    learnerRole:
      "Dr. Vasquez has asked you to present system capacity findings to the monthly committee — surgery (Dr. Herrera), anesthesia (Dr. Blake), nursing (CNO Osei-Mensah), finance (CFO Webb). Utilization data shows significant hoarding across several services, Herrera's most of all. Your charge: surface the dynamic and move toward a fix — without indicting anyone. Everyone in this room will be across other tables from you for the next decade.",
    personas: ["herrera", "blake", "osei", "webb", "vasquez"],
    scoring: {
      dims: [
        { id: "system", label: "System framing", max: 4, anchor: "Named the game and its payoffs, not the players' character" },
        { id: "noBlame", label: "Blame avoidance", max: 3, anchor: "No individual indicted, even under provocation" },
        { id: "voices", label: "Psychological safety moves", max: 3, anchor: "Drew in held-back information (Blake, Osei-Mensah)" },
      ],
    },
    start: "m1",
    nodes: {
      m1: {
        turns: [
          { who: "narrator", text: "The Meridian boardroom. Webb has the utilization report open. Herrera has his own binder — he always has his own binder. Vasquez nods for you to begin." },
          { who: "vasquez", text: "You've all seen the topline: OR utilization at 71 percent while our surgical wait times grow. The floor is yours, Director. Tell us what you found." },
        ],
        choices: [
          {
            text: "Present it as a system diagnosis: \"What I found is a structure, not a culprit. Under our current rules, every chair's rational move is to hold blocks defensively — because released time historically never comes back. I'd have made the same choices in their seat. The data shows the equilibrium, and I'd like this committee to change the rules that produce it.\"",
            next: "m2sys",
            score: { system: 2, noBlame: 1 },
            note: "You named the game and pre-forgave the players in one move — 'I'd have made the same choices' is assuming good intent, said out loud.",
          },
          {
            text: "Lead with the sharpest numbers: \"Three services hold blocks at under 65 percent utilization while others queue. Surgery holds the largest share — fourteen blocks, several sustained by pattern-anomalous scheduling. The data is unambiguous.\"",
            next: "m2sharp",
            score: { system: 1 },
            note: "Accurate — and the room heard an indictment with exhibits. Watch what the next ten minutes are spent defending instead of designing.",
          },
          {
            text: "Open by soliciting the room: \"Before I present anything — you each see a piece of this system I can't. I'd like two minutes from each of you on what capacity looks like from your chair.\"",
            next: "m2voices",
            score: { voices: 2 },
            note: "A brief, TeamSTEPPS-style. It costs you the podium and buys you information — and everyone who speaks early is harder to alienate later.",
          },
        ],
      },

      m2sys: {
        turns: [
          { who: "herrera", text: "A refreshing framing — usually these meetings start by measuring my department for a coffin. So I'll say plainly what everyone pretends not to know: I hold blocks because the last chair who released them is still waiting for their return. Three years and counting. Change that, and we can talk." },
          { who: "webb", text: "What I'm hearing is that everyone's behaving rationally and it's costing this system eight figures a year. Someone tell me why I shouldn't just mandate reallocation from this room and be done with it." },
        ],
        choices: [
          {
            text: "Answer Webb with the mechanism: \"Because a mandate is one more grab — it confirms the exact fear that causes hoarding, and next year's version of this meeting is worse. The alternative: released blocks escrow and revert automatically unless renewed, utilization is mutually visible, and no service can lose time it lends. Make cooperation safe and the hoarding stops paying.\"",
            next: "m3design",
            score: { system: 2 },
            note: "You defended the hoarders from the mandate while dismantling the hoarding — that combination is what lets Herrera say yes in public.",
          },
          {
            text: "Validate the mandate: \"Honestly, a mandate may be what it takes — voluntary approaches have had three years to work.\"",
            next: "m3mandate",
            score: {},
            note: "The mandate will pass this room and lose the building: blocks will be defended with sicker-sounding schedules, and the data you rely on will get worse. Payoffs, not orders.",
          },
          {
            text: "Bring in the quiet expertise first: \"Before we choose instruments — Dr. Blake schedules against everyone's claimed demand. Owen, how far apart are claimed and actual, and don't spare anyone, including medicine?\"",
            next: "m3blake",
            score: { voices: 2, noBlame: 1 },
            note: "Blake volunteers nothing unasked — you asked. And 'including medicine' made it safe by making it symmetric; that's a psychological safety move disguised as a data request.",
          },
        ],
      },

      m2sharp: {
        turns: [
          { who: "herrera", text: "Pattern-anomalous scheduling. In English: you're calling my department liars, with the entire C-suite as audience. Shall I walk this committee through the case-length data behind every one of those blocks, or shall we simply admit medicine wants surgery's time?" },
          { who: "narrator", text: "Webb sits back — this is now theater. Osei-Mensah is studying the table. You have perhaps one sentence before positions fossilize." },
        ],
        choices: [
          {
            text: "Repair with the system frame: \"No — and if it landed that way, I said it badly. My claim is that our rules make defensive scheduling rational for every service. In your seat, with your history, I'd hold those blocks too. I'm asking this committee to change the rules, not to litigate anyone's binder.\"",
            next: "m2sys",
            score: { noBlame: 2, system: 1 },
            note: "Recovery is a skill: you withdrew the indictment without withdrawing the data. 'I'd hold those blocks too' cost you nothing and disarmed the theater.",
          },
          {
            text: "Stand on the data: \"The scheduling patterns are what they are, Dr. Herrera. I'm happy to review them line by line if that's how the committee wants to spend the hour.\"",
            next: "m3trench",
            score: {},
            note: "You just accepted his framing — a trial about surgery's honesty — and whatever the line-by-line shows, every chair watching learns that sharing data with you is dangerous.",
          },
        ],
      },

      m2voices: {
        turns: [
          { who: "osei", text: "Since you're asking: nursing eats every one of these decisions downstream. When blocks run over because schedules are padded against loss, my post-op units staff blind. I've got float grievances stacking up that trace straight back to schedule fiction — I haven't formally escalated them, but they're real." },
          { who: "blake", text: "And since the box is open — anesthesia sees everyone's actual demand. I'll just say the gap between what services claim and what they use would... reward this committee's attention. I've kept those records to myself for reasons the room can probably reconstruct." },
          { who: "narrator", text: "Herrera's jaw tightens — the meeting has produced information he doesn't control. Webb, on the other hand, has started taking notes." },
        ],
        choices: [
          {
            text: "Protect the disclosers, then name the game: \"Two people just shared information that costs them something — that's what this committee needs more of, and it should be safe here. What Renée and Owen are describing is one structure: rules that punish honest signals. I'd like to propose we redesign the rules rather than grade the players.\"",
            next: "m3design",
            score: { voices: 1, system: 2, noBlame: 1 },
            note: "You marked the disclosures as protected and valuable before using them — that's how a room learns that speaking up pays. Then you aimed the energy at rules, not people.",
          },
          {
            text: "Drive at the revealed gap: \"Owen, put numbers on it — whose claimed demand diverges most from actual?\"",
            next: "m3trench",
            score: { voices: 1 },
            note: "You converted Blake's carefully hedged disclosure into a public accusation with his name on the exhibit. He will remember what asking cost him — and so will everyone deciding whether to speak in future meetings.",
          },
        ],
      },

      m3blake: {
        turns: [
          { who: "blake", text: "Since I'm asked directly, and symmetrically: claimed demand runs about eighteen percent over actual, system-wide. Surgery is not the worst offender per block — medicine's evening claims are their own fiction. It's everyone, in every direction. It has been for three years. Nobody asked because nobody wanted the answer on the record." },
          { who: "webb", text: "Eighteen percent. That's the first number in this meeting I believe. So the reporting system is fiction in all directions — what exactly do we do with that?" },
        ],
        choices: [
          {
            text: "Now the mechanism, on Blake's foundation: \"We make honest reporting the winning strategy: escrowed releases with automatic reversion, mutually visible utilization for every service — medicine's included — and Owen's actuals as the neutral verification layer. Nobody can lose what they lend, and nobody's fiction survives contact with the dashboard.\"",
            next: "m3design",
            score: { system: 2, voices: 1 },
            note: "Blake's symmetric data made the mechanism proposable without a villain — which is why you drew it out before proposing. Sequencing is strategy (Module 7 will formalize this).",
          },
          {
            text: "Hand it to authority: \"Dr. Vasquez, with that number on the table, I think this needs an executive directive rather than committee design.\"",
            next: "m3mandate",
            score: {},
            note: "You surfaced gold and then asked hierarchy to spend it. The room was, for one moment, safe enough to design in — that moment is the scarce resource, not the directive.",
          },
        ],
      },

      m3design: {
        turns: [
          { who: "herrera", text: "Escrow and reversion. If — if — no service can pocket what another releases, then surgery will put four blocks into your pilot. Not fourteen. Four, ninety days, and I see everyone's dashboard the same hour they see mine. Cross me on this and every chair in this building will know by Friday." },
          { who: "osei", text: "Nursing wants one thing in the protocol: allocations made on the new data can't be yanked mid-shift without charge-nurse consent. If this committee wants honest signals, protect the people who send them." },
          { who: "webb", text: "Four blocks at demonstrated utilization is roughly $2.1 million of found capacity. Run the ninety-day pilot; my office will score it. If the number holds, I'll fund the dashboard build myself." },
        ],
        choices: [
          {
            text: "Close it clean: \"Then that's the pilot: four surgical blocks in escrow, automatic reversion at ninety days, mutual same-hour dashboards, Owen's actuals as verification, Renée's no-pull rule in writing, finance scoring. Dr. Vasquez, we'll bring the protocol next month — and I'd like Dr. Herrera as co-sponsor, since the design protects exactly what he's spent three years defending.\"",
            next: "m4end",
            score: { system: 1, voices: 1, noBlame: 1 },
            note: "Co-sponsorship converts your most dangerous critic into a defender of the rules — he now owns the mechanism's success. That's coalition thinking, three modules early.",
          },
          {
            text: "Close it fast: \"Agreed on all points — I'll write it up and circulate. Next agenda item?\"",
            next: "m4endfast",
            score: { system: 1 },
            note: "The substance survived; the ownership evaporated. A protocol 'circulated by medicine' defends itself much less well than one co-sponsored by surgery.",
          },
        ],
      },

      m3mandate: {
        turns: [
          { who: "vasquez", text: "I could issue that directive tomorrow, and here is what would happen: compliance on paper, padded schedules underneath, and this same meeting in a year with worse data and better hidden. I've signed that memo before. Director — you diagnosed this as a payoff problem. I'd rather you finish the thought." },
        ],
        choices: [
          {
            text: "Finish the thought: \"You're right. The mechanism, then: escrowed releases with automatic reversion, mutual same-hour visibility, anesthesia's actuals as neutral verification, and a no-mid-shift-pull rule so honest signals are protected. Voluntary, starting with any service willing to pilot.\"",
            next: "m3design",
            score: { system: 2 },
            note: "Vasquez handed the design back to you — sponsors sponsor; designers design. This time you finished with payoffs instead of orders.",
          },
          {
            text: "Hold your position: \"With respect, three years of voluntary hasn't worked. Sometimes the system needs the memo.\"",
            next: "m4mandate",
            score: {},
            note: "Three years of *unprotected* voluntary hasn't worked — nothing voluntary-with-mechanisms has been tried. The distinction was the entire morning's lesson.",
          },
        ],
      },

      m3trench: {
        turns: [
          { who: "narrator", text: "Forty minutes of case-length forensics later: two committee members on their phones, Herrera's binder half-performed, and Blake studying the ceiling with the expression of a man deleting a data offer from his mental outbox. Vasquez calls time." },
          { who: "vasquez", text: "We're adjourned; this format isn't producing decisions. Director, stay a moment. You walked in holding a system diagnosis — I read your pre-brief. Somewhere in the first ten minutes it became a prosecution. Next month I need the version of this meeting where nobody has to be guilty for the rules to change. Can you run that meeting?" },
        ],
        choices: [
          {
            text: "\"Yes — and I know where it turned. I led with exhibits when I should have led with the game. Next month: the structure named without culprits, Blake's actuals as neutral ground, and a mechanism — escrow, reversion, mutual visibility — that Herrera can join without conceding anything he said today.\"",
            next: "m4recover",
            score: { system: 1, noBlame: 1 },
            note: "Precise self-diagnosis, no defensiveness, and a design that lets your opponent climb down without losing face. The month's delay was tuition.",
          },
          {
            text: "\"I can — though I'll note the data genuinely was unambiguous. The room just wasn't ready to hear it.\"",
            next: "m4recover",
            score: {},
            note: "Half a lesson. The data was right, and 'the room wasn't ready' relocates your framing error into other people's maturity. Vasquez lets it pass; the next meeting won't.",
          },
        ],
      },

      m4end: {
        turns: [
          { who: "narrator", text: "Herrera pauses — co-sponsorship was not in his binder — then signs the whiteboard sketch with theatrical flourish, because a mechanism that protects his blocks is a mechanism he can champion. Osei-Mensah catches your eye: the no-pull rule made nursing whole. One committee meeting; the game, redesigned in miniature. The pilot starts Monday." },
        ],
        end: true,
        outcome: "strong",
      },
      m4endfast: {
        turns: [
          { who: "narrator", text: "Agreement in the room; ownership in your inbox. The protocol goes out under medicine's letterhead, and by week three Herrera is 'clarifying his understanding' of the reversion clause to anyone who'll listen. The pilot survives — but you're defending it alone, and feeling precisely the difference between a deal and a coalition." },
        ],
        end: true,
        outcome: "provisional",
      },
      m4mandate: {
        turns: [
          { who: "narrator", text: "Vasquez, to her credit, signs the directive. Utilization compliance hits 94 percent within a month — on paper. Blake's actuals, which nobody made part of the design, quietly show claimed case lengths growing eleven percent. The hoarding didn't stop; it professionalized. You've booked a front-row seat to Module 8's lesson: players beat referees, unless you change the rules they're playing under." },
        ],
        end: true,
        outcome: "mixed",
      },
      m4recover: {
        turns: [
          { who: "narrator", text: "A month later you run the meeting again — game named first, no culprits, Blake's symmetric data on the screen, escrow and reversion on the table. It goes the way the first one could have. Nothing was lost but a month; what was gained is a lesson most leaders buy far more expensively: the sharpest data in the room is worthless in an unsafe room." },
        ],
        end: true,
        outcome: "provisional",
      },
    },
    outcomes: {
      strong: {
        label: "The game, redesigned in one meeting",
        text: "You named the structure without indicting a single player, made held-back information safe to share (and marked it as valuable when it arrived), and closed with a mechanism your fiercest critic now co-sponsors. This meeting is the whole module in miniature: diagnose the game, protect the players, change the rules.",
      },
      provisional: {
        label: "The right design, incompletely landed",
        text: "The mechanism survived — escrow, reversion, visibility — but somewhere you paid an avoidable cost: ownership left in your lap alone, or a month lost to a prosecution that didn't need to happen. Replay for the sequencing: safety first, symmetric data second, mechanism third, co-sponsorship last.",
      },
      mixed: {
        label: "Compliance achieved; game intact",
        text: "The mandate path delivered exactly what mandates deliver against unchanged payoffs: better-hidden defection and degraded data. The consolation is that you now viscerally understand why Module 8 exists. Replay and try letting the room design its own rules.",
      },
    },
  },

  /* ---------------------- Step 6: Reflective Debrief ---------------------- */
  debrief: {
    intro:
      "This debrief uses advocacy-inquiry: I'll tell you what I observed and what it made me think, then ask what was going on for you. Your answers are yours — they're saved locally so you can return to them in later rounds.",
    prompts: [
      {
        id: "d1",
        frame: "Advocacy · Inquiry",
        question:
          "In the simulations, the pivotal moments came before any proposal — acknowledgment of history, protection of disclosers. I noticed the conversations turned on whether safety preceded structure. When you think about how you open high-stakes conversations at work, what do you typically lead with — and what does that choice cost or buy you?",
      },
      {
        id: "d2",
        frame: "Concept transfer",
        question:
          "Where in your real organization is a Prisoner's Dilemma operating right now — two parties defecting rationally against each other while both lose? Name the players, the defecting strategies, and the payoff that keeps it stable.",
      },
      {
        id: "d3",
        frame: "Mechanism thinking",
        question:
          "For the dilemma you just named: what is one payoff you could realistically change — a protection, a verification, a reversion rule — that would make the cooperative move individually rational? (Exhortation doesn't count.)",
      },
    ],
    commitment: {
      id: "commit",
      label: "Commitment to practice",
      question:
        "Write one concrete commitment: a specific conversation or proposal, with a named counterpart, in the next 30 days, where you will acknowledge history before advocating and propose a payoff change rather than asking for goodwill. Modules 4, 7, and 8 will ask you how it went.",
    },
  },
};
