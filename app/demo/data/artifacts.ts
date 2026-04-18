export type Comment = {
  professorId: number
  text: string
  daysAgo: number
}

export type Review = {
  professorId: number
  rating: number
  headline: string
  body: string
  daysAgo: number
}

export type Artifact = {
  id: number
  title: string
  description: string
  subject: string
  levels: string[]    // filterable tags: "Year 1" | "Year 2" | "Year 3" | "Graduate"
  levelLabel: string  // display string
  tool: string
  rating: number
  usageCount: number
  dateAdded: string
  comments: Comment[]
  reviews: Review[]
}

export const SUBJECTS = [
  "History",
  "Mathematics",
  "Environmental Science",
  "English Literature",
  "Biology",
  "Economics",
  "Philosophy",
  "Chemistry",
]

export const LEVEL_GROUPS: { label: string; options: string[] }[] = [
  { label: "Undergraduate", options: ["Year 1", "Year 2", "Year 3"] },
  { label: "Graduate",      options: ["Graduate"] },
]

export const ARTIFACTS: Artifact[] = [
  {
    id: 1,
    title: "Socratic Seminar Facilitator — Cold War Historiography",
    description: "A structured Socratic discussion framework with curated primary sources on Cold War ideology. Moves students from passive reading to active historical argument within two sessions.",
    subject: "History",
    levels: ["Year 2", "Year 3"],
    levelLabel: "Undergrad · Year 2–3",
    tool: "NotebookLM",
    rating: 4.9,
    usageCount: 312,
    dateAdded: "2026-03-15",
    comments: [
      { professorId: 1, text: "Running this in my Cold War seminar right now. The Kennan/Khrushchev source pairing is exactly right — set up the ideological contrast within the first session. Will use again next semester.", daysAgo: 14 },
      { professorId: 3, text: "Glad you mentioned the source pairing, Dr. Okonkwo. I adapted it for a postcolonial unit — swapped some Western sources for Bandung Conference documents. Did your Year 2s need much scaffolding going in?", daysAgo: 11 },
      { professorId: 1, text: "Minimal, actually. The discussion prompts do the heavy lifting. Year 2s arrived having actually done the reading, which doesn't always happen.", daysAgo: 9 },
      { professorId: 6, text: "Second Dr. Achebe's experience. Used it for just war theory — different subject entirely, same Socratic structure. Held up well. Framework is more portable than you'd expect.", daysAgo: 3 },
    ],
    reviews: [
      {
        professorId: 2,
        rating: 4.8,
        headline: "Methodologically rigorous, broadly transferable",
        body: "The source curation reflects genuine archival depth, and the Socratic scaffolding adheres to well-established deliberative pedagogy. I adapted the discussion protocol for an interdisciplinary environmental governance seminar without meaningful loss of structure. The primary limitation is the anglophone source bias, which instructors teaching global or comparative history cohorts will need to supplement.",
        daysAgo: 18,
      },
      {
        professorId: 7,
        rating: 4.7,
        headline: "Exemplary discussion architecture",
        body: "The progression from document analysis to structured argumentation is cleanly designed and reproducible by instructors with limited experience in discussion-based formats. I have used this framework as a model when developing my own seminar structures in mathematics education. Recommended without reservation for Year 2 and above.",
        daysAgo: 12,
      },
    ],
  },
  {
    id: 2,
    title: "Real Analysis Intuition Builder: Limits & Continuity",
    description: "An interactive exploration of limits and continuity that builds formal intuition before introducing epsilon-delta definitions. Bridges the transition from calculus to rigorous proof.",
    subject: "Mathematics",
    levels: ["Year 2"],
    levelLabel: "Undergrad · Year 2",
    tool: "Interactive Tool",
    rating: 4.8,
    usageCount: 289,
    dateAdded: "2026-03-28",
    comments: [
      { professorId: 7, text: "Integrated this directly into Year 2 analysis. Measurable improvement on proof-based assessments — students are constructing arguments rather than pattern-matching. The limit explorer fills a gap I haven't seen addressed elsewhere.", daysAgo: 20 },
      { professorId: 4, text: "Used it for students struggling with formal definitions — came in from a biology background. Surprised by how accessible the visual scaffolding is. Did you find the epsilon-delta section lands without prior exposure?", daysAgo: 15 },
      { professorId: 7, text: "It helps to assign Section 2 first and revisit epsilon-delta after the interactive module. The visual grounding makes the formal definition feel motivated rather than arbitrary.", daysAgo: 13 },
    ],
    reviews: [
      {
        professorId: 5,
        rating: 4.6,
        headline: "Quantitative scaffolding with broad applicability",
        body: "The treatment of limits and continuity is precise without being inaccessible, and the interactive component bridges the gap between intuition and formal proof that typically causes attrition in Year 2 mathematics. I adapted the quantitative reasoning modules for an econometrics course and found them directly usable. The section on epsilon-delta definitions would benefit from additional worked examples.",
        daysAgo: 22,
      },
      {
        professorId: 3,
        rating: 4.5,
        headline: "Unexpected relevance to qualitative disciplines",
        body: "I engaged with this artifact to assess its logic structure for argumentation training purposes, and found the formal reasoning scaffolding relevant beyond mathematics. The emphasis on constructing arguments from definitions rather than intuition is a pedagogical model I have borrowed for close reading instruction. A genuinely cross-disciplinary resource.",
        daysAgo: 10,
      },
    ],
  },
  {
    id: 3,
    title: "Climate Policy Case Study — Bangladesh",
    description: "A policy case study using Bangladesh as a lens for adaptation, mitigation, and climate justice trade-offs. Structured for seminar debate and accessible across any undergraduate year.",
    subject: "Environmental Science",
    levels: ["Year 1", "Year 2", "Year 3"],
    levelLabel: "Undergrad · Any year",
    tool: "Lesson Plan",
    rating: 4.7,
    usageCount: 201,
    dateAdded: "2026-04-01",
    comments: [
      { professorId: 2, text: "Best seminar I've facilitated in five years. Paired with the IPCC AR6 synthesis and ran it as a structured debate — students were genuinely arguing about adaptation vs mitigation trade-offs, not just summarising.", daysAgo: 17 },
      { professorId: 5, text: "Used the economic framing section standalone for an environmental economics module. Section 3 on cost-benefit analysis is more nuanced than typical introductory materials. How did you handle the discount rate discussion?", daysAgo: 12 },
      { professorId: 2, text: "Left it open-ended deliberately — let students argue both positions before presenting the literature. The disagreement is the point.", daysAgo: 10 },
      { professorId: 1, text: "Adapting this for a comparative global history unit on colonial legacies and climate vulnerability. The Bangladesh context is well-chosen — historically legible and quantitatively rich.", daysAgo: 4 },
    ],
    reviews: [
      {
        professorId: 6,
        rating: 4.9,
        headline: "Outstanding case selection and ethical framing",
        body: "The Bangladesh case instantiates multiple dimensions of climate justice simultaneously — historical responsibility, vulnerability differential, and institutional capacity — without sacrificing analytical rigour. The discussion of policy trade-offs is philosophically sophisticated and would serve an applied ethics seminar as readily as an environmental science course. Among the strongest artifacts in the library.",
        daysAgo: 19,
      },
      {
        professorId: 4,
        rating: 4.5,
        headline: "Strong interdisciplinary grounding, minor quantitative gaps",
        body: "The ecological and hydrological data underpinning the case is accurate and appropriately sourced. My reservation is the limited treatment of uncertainty quantification, which is central to contemporary climate science pedagogy. Instructors in quantitative programmes should supplement with materials on probabilistic climate projections.",
        daysAgo: 8,
      },
    ],
  },
  {
    id: 4,
    title: "Close Reading Practicum: Modernist Poetry",
    description: "A close reading practicum built around Eliot and Pound, using guided annotation to develop independent critical voice. Calibrated for students encountering modernism for the first time.",
    subject: "English Literature",
    levels: ["Year 1", "Year 2"],
    levelLabel: "Undergrad · Year 1–2",
    tool: "NotebookLM",
    rating: 4.6,
    usageCount: 178,
    dateAdded: "2026-04-05",
    comments: [
      { professorId: 3, text: "Students who arrive to tutorials unprepared started arguing about Eliot and Pound by session two. The annotation prompts are calibrated precisely — they ask for the right kind of close attention without being prescriptive.", daysAgo: 13 },
      { professorId: 6, text: "Used this for a semiotics unit. The phenomenology of reading section is surprisingly sophisticated — it introduced Jakobson without naming him, which is exactly the right approach for Year 1. Did you find students resistant to the ambiguity in the prompts?", daysAgo: 9 },
      { professorId: 3, text: "Initially, yes. But that resistance became the discussion. By week three they were generating the ambiguity themselves rather than waiting to be told what to find.", daysAgo: 7 },
    ],
    reviews: [
      {
        professorId: 1,
        rating: 4.8,
        headline: "Sophisticated hermeneutic framework, precisely calibrated",
        body: "The close reading methodology is rigorous and draws appropriately on established literary critical traditions. The juxtaposition of Eliot and Pound provides productive interpretive tension, and the guided annotation prompts are calibrated precisely for students beginning to develop an independent critical voice. This artifact would repay use across multiple literature courses without modification.",
        daysAgo: 16,
      },
      {
        professorId: 7,
        rating: 4.3,
        headline: "Valuable beyond the humanities",
        body: "I evaluated this artifact as a model for structured analytical writing, which is a persistent challenge for mathematics students. The prompting architecture — moving from observation to interpretation to argument — is directly applicable to mathematical exposition. The subject matter is discipline-specific, but the pedagogical structure is not.",
        daysAgo: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Molecular Biology Simulation + Assessment Bank",
    description: "An interactive simulation covering transcription, translation, and post-translational processes, paired with a comprehensive assessment bank. Replaces static diagrams with discoverable mechanisms.",
    subject: "Biology",
    levels: ["Year 2"],
    levelLabel: "Undergrad · Year 2",
    tool: "Interactive Tool",
    rating: 4.8,
    usageCount: 143,
    dateAdded: "2026-04-08",
    comments: [
      { professorId: 4, text: "Replaced my own quiz bank entirely. Students reconstruct the central dogma from first principles after one session — not from memory, from understanding. Retention on the end-of-term assessment was noticeably higher.", daysAgo: 10 },
      { professorId: 8, text: "Borrowed the enzyme kinetics module for biochemistry. Logic maps cleanly onto Michaelis-Menten without any adaptation. Is the assessment bank customisable or fixed?", daysAgo: 7 },
      { professorId: 4, text: "Fixed currently, but the question types are varied enough that I haven't needed to modify. If you need specific EC classifications covered you might need to supplement.", daysAgo: 5 },
    ],
    reviews: [
      {
        professorId: 2,
        rating: 4.7,
        headline: "Scientifically accurate, pedagogically sound",
        body: "The simulation logic is consistent with current molecular biology curricula, and the progression from conceptual overview to mechanistic detail is well-judged for Year 2 students. The assessment bank is comprehensive and well-aligned with learning objectives. I recommend requesting an expanded treatment of post-translational modification, which is currently underrepresented relative to its importance in contemporary cell biology.",
        daysAgo: 12,
      },
      {
        professorId: 6,
        rating: 4.4,
        headline: "Epistemically interesting framing, accessible across disciplines",
        body: "The artifact structures biological processes as logical systems, which creates productive analogies for students approaching complex information from humanistic backgrounds. The visual explanations are unusually clear. The later sections require prior biological knowledge that may not be universal, and instructors should assess student readiness before assigning independently.",
        daysAgo: 5,
      },
    ],
  },
  {
    id: 6,
    title: "Behavioural Economics Simulation — Nudge Design",
    description: "A simulation in which students design, test, and critique behavioural interventions across diverse social contexts. Grounded in Thaler and Sunstein, with a built-in ethical critique module.",
    subject: "Economics",
    levels: ["Year 3", "Graduate"],
    levelLabel: "Undergrad · Year 3 / Grad",
    tool: "Lesson Plan",
    rating: 4.5,
    usageCount: 134,
    dateAdded: "2026-04-10",
    comments: [
      { professorId: 5, text: "Students design real interventions, not toy examples. The scenario variety is intentional — works across income backgrounds in a way that most behavioural economics materials don't. Strong ethical critique built into the final session too.", daysAgo: 8 },
      { professorId: 2, text: "Used the environmental nudge module for a policy seminar. Students ran their own informal field tests the following week — I didn't suggest it, they just did. That's the sign of a good artifact.", daysAgo: 5 },
      { professorId: 5, text: "That tracks. The design component generates genuine ownership. I've had the same thing happen — students continuing the work outside of class without being asked.", daysAgo: 3 },
    ],
    reviews: [
      {
        professorId: 3,
        rating: 4.6,
        headline: "Rigorous real-world design with strong equity orientation",
        body: "The scenario design is notably inclusive: the range of income contexts and institutional settings ensures that the nudge design challenge is meaningful across student backgrounds. The theoretical grounding in Thaler and Sunstein is well-handled, and the applied component generates genuine intellectual investment. One recommendation: expand the section on ethical critique of nudge interventions, which receives less attention than the design component.",
        daysAgo: 11,
      },
      {
        professorId: 7,
        rating: 4.5,
        headline: "Quantitative depth appropriate for level",
        body: "The statistical reasoning embedded in the effect-size discussions is appropriately scoped for Year 3 students and does not require advanced econometrics. The simulation outcomes are well-calibrated. I would suggest more explicit treatment of external validity, which is currently underemphasised relative to its importance in applied social science.",
        daysAgo: 4,
      },
    ],
  },
  {
    id: 7,
    title: "Argumentation Coach — AI Adversarial Debate",
    description: "An AI debate partner that steelmans counterarguments in real time, forcing students to engage with the strongest version of opposing positions before writing their own.",
    subject: "Philosophy",
    levels: ["Year 1", "Year 2", "Year 3"],
    levelLabel: "Undergrad · Any year",
    tool: "NotebookLM",
    rating: 4.7,
    usageCount: 97,
    dateAdded: "2026-04-12",
    comments: [
      { professorId: 6, text: "Essay quality on the following assignment jumped. The AI steelmans every counterargument rather than just opposing — students had to engage seriously with the best version of the objection, not a strawman.", daysAgo: 7 },
      { professorId: 3, text: "Used this for a rhetoric seminar. The adversarial structure forces students to anticipate objections rather than ignore them. Did you assign it before or after the writing task?", daysAgo: 5 },
      { professorId: 6, text: "Before, as deliberate preparation. The contrast between the AI session and their first draft was instructive — several students revised unprompted after seeing how their arguments held up.", daysAgo: 4 },
      { professorId: 3, text: "That's the right sequencing. Going to try it that way next term.", daysAgo: 2 },
    ],
    reviews: [
      {
        professorId: 1,
        rating: 4.8,
        headline: "Transformative for seminar preparation",
        body: "The adversarial debate format produces a qualitative shift in student argumentation that I have not observed with conventional preparation materials. The AI interlocutor is sufficiently rigorous to expose weak arguments without being discouraging. This artifact is directly transferable to any discipline where evidence-based reasoning is a learning outcome. I recommend it without qualification.",
        daysAgo: 9,
      },
      {
        professorId: 5,
        rating: 4.6,
        headline: "Effective for policy and argumentation-heavy curricula",
        body: "I deployed this in an economic policy seminar where students consistently struggled to anticipate counterarguments. The improvement in written work was measurable by the following assessment. The philosophical framing of the prompts — emphasising steelmanning over refutation — is methodologically sound and more rigorous than typical argumentation resources.",
        daysAgo: 3,
      },
    ],
  },
  {
    id: 8,
    title: "Organic Chemistry Mechanism Explorer",
    description: "An interactive mechanism explorer that guides students through organic reaction pathways inductively, deriving rules from electronic principles rather than memorisation.",
    subject: "Chemistry",
    levels: ["Year 1", "Year 2"],
    levelLabel: "Undergrad · Year 1–2",
    tool: "Interactive Tool",
    rating: 4.4,
    usageCount: 76,
    dateAdded: "2026-04-15",
    comments: [
      { professorId: 8, text: "Students derived the reaction pathways themselves rather than memorising them. The 'aha' moment was visible across the lecture hall. Running this before the formal mechanism lectures next year.", daysAgo: 4 },
      { professorId: 4, text: "Used the nucleophilic substitution module for biochem students. Interface is clean and well-paced. Did you encounter any issues with the mechanism checker on branched substrates?", daysAgo: 2 },
      { professorId: 8, text: "Yes — a couple of edge cases with tertiary carbocations. Doesn't break the experience but worth flagging to students as a known limitation rather than letting them think they're wrong.", daysAgo: 1 },
    ],
    reviews: [
      {
        professorId: 2,
        rating: 4.5,
        headline: "Technically sound, pedagogically inventive",
        body: "The mechanism explorer takes an appropriately inductive approach — students derive pathways from electronic principles rather than memorising outcomes — which aligns with best practices in chemistry education. The visual representation of electron movement is unusually clear. The artifact would benefit from expanded coverage of stereochemistry, which is currently a notable omission for Year 2 use.",
        daysAgo: 5,
      },
      {
        professorId: 7,
        rating: 4.3,
        headline: "Logical architecture exemplary across disciplines",
        body: "The systematic derivation approach — establishing rules and then applying them to novel cases — mirrors formal proof methodology in mathematics and is worth examining as a pedagogical model. The interactive component is well-designed. From a purely disciplinary standpoint I deferred to chemistry colleagues for content evaluation, but the logical architecture is exemplary.",
        daysAgo: 2,
      },
    ],
  },
]
