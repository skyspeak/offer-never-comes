window.JOBS = [
  {
    id: "design-engineer",
    title: "Design engineer",
    org: "Northline",
    practice: "Interface tools",
    city: "Copenhagen",
    comp: "$180–220k",
    months: 12,
    hours: 6,
    appetites: ["craft"],
    recruiter: "Maja",
    blurb: "You draw the component, then you ship the component.",
    about: [
      "Northline makes the pieces other products are built from: menus, fields, the small machines of an interface. The design engineer owns one of those pieces from the first sketch to the release.",
      "The team is nine people in Islands Brygge. You will not manage anyone. You will argue about type, state, and the edge where a component fails."
    ],
    tuesday: "You take the train to Islands Brygge. Standup is six minutes because the board is the standup. The morning goes to a select menu that misbehaves when the type is large. After lunch you pair with the person who wrote the layout engine. At four you push a fix and the docs site updates itself. You bike home along the harbor before it gets dark.",
    reviews: [
      { name: "Signe", tenure: "4 years in the seat", text: "The work is the design. There is no handoff and no deck." },
      { name: "Jonah", tenure: "2 years in the seat", text: "Copenhagen pays less than San Francisco. The Tuesday is better." },
      { name: "Mei", tenure: "6 years in the seat", text: "The seat suits someone who likes type, state, and edges. It is a poor fit if you want a team to manage." }
    ],
    path: [
      { months: 0, text: "Ship one small interface in public. A menu, a picker, something with real states." },
      { months: 3, text: "Write the decisions beside it. What broke, what you kept, what you refused to animate." },
      { months: 6, text: "Use it yourself for a month. Fix the parts you avoid." },
      { months: 9, text: "Ask another engineer to change it without you in the room. Fix what they could not find." },
      { months: 12, text: "Show the thing, the notes, and one place it is used by someone other than you." }
    ],
    rejection: "a note that the seat had gone to someone already in the building",
    whyHint: "I want the Tuesday where the select menu is the whole problem.",
    lineHint: "Shipped a public menu component and used it every day for a month."
  },
  {
    id: "product-manager",
    title: "Product manager",
    org: "Ledgerline",
    practice: "Developer tools",
    city: "New York",
    comp: "$220–280k",
    months: 14,
    hours: 8,
    appetites: ["money", "status"],
    recruiter: "Noah",
    blurb: "You decide what the API refuses to do.",
    about: [
      "Ledgerline sells the pipes under other companies' software. The product manager for the public API decides which requests get a clear error, which get a feature, and which get a no.",
      "You can arrive from engineering or from support. The writing has to change a decision. A slide does not count as the work."
    ],
    tuesday: "You read overnight tickets before the coffee is done. At ten you sit with two engineers and kill a feature a customer asked for by name. The afternoon is a short spec, with the error states written first. You leave the office at 6:40 and answer one thread from the train.",
    reviews: [
      { name: "Priya", tenure: "3 years in the seat", text: "Customers are loud. The useful part is the second sentence." },
      { name: "Chris", tenure: "5 years in the seat", text: "The pay is real. So is the thread after dinner." },
      { name: "Elena", tenure: "2 years in the seat", text: "The people who last came from building or from support, and they write in specifics." }
    ],
    path: [
      { months: 0, text: "Pick a tool you use every day. Write the three errors it should catch." },
      { months: 4, text: "Ship a public change, even a docs fix that removes a wrong path." },
      { months: 9, text: "Sit with one user and do not pitch. Write what they did." },
      { months: 11, text: "Write a spec with the error states first. Cut every sentence that does not change a decision." },
      { months: 14, text: "A packet: the change, the notes, and the thing you refused to build." }
    ],
    rejection: "a recruiter who meant to reply and then went quiet",
    whyHint: "I want to be the person who writes the error before the feature.",
    lineHint: "Cut a requested feature after watching a user hit the real error."
  },
  {
    id: "founding-pm",
    title: "Founding product manager",
    org: "Fieldnote",
    practice: "Climate software",
    city: "Remote",
    comp: "$160k + 1%",
    months: 10,
    hours: 5,
    appetites: ["freedom", "craft"],
    recruiter: "Ruth",
    blurb: "Eight people. The product is how a site crew files the day.",
    about: [
      "Fieldnote is a small company building software for crews who work outside: the form at the end of a hot day, the photo, the thing that has to sync when the truck is back in range.",
      "The salary is what you can spend. The equity is a story until a later round says otherwise. The work is talking to people who are tired at 6pm."
    ],
    tuesday: "You are on a call at 7am with a foreman in Arizona who has twenty minutes. You spend the rest of the morning cutting a screen he will not open. Lunch is your kitchen. At two you write the migration for last season's forms. Nobody asks for a roadmap deck.",
    reviews: [
      { name: "Andre", tenure: "1 year in the seat", text: "The equity is a story. The salary is the part I can spend." },
      { name: "Laila", tenure: "2 years in the seat", text: "You talk to people who are dirty at the end of the day. That is the product." },
      { name: "Tom", tenure: "Founding team", text: "Remote means you own the clock. You also own the silence after the call." }
    ],
    path: [
      { months: 0, text: "Write one page on a workflow you have watched in person." },
      { months: 2, text: "Build a prototype someone in that workflow can tap through on a phone." },
      { months: 6, text: "Put it in front of three people who do the job. Keep the version they finish." },
      { months: 10, text: "Bring the page, the prototype, and a note on what you threw out." }
    ],
    rejection: "a calendar hold that disappeared overnight",
    whyHint: "I want the product to be a form a tired person can finish.",
    lineHint: "Prototyped a field form and threw out the screen crews skipped."
  },
  {
    id: "research-engineer",
    title: "Research engineer",
    org: "Lowglass",
    practice: "Applied models",
    city: "London",
    comp: "£140–180k",
    months: 18,
    hours: 11,
    appetites: ["craft", "status"],
    recruiter: "Owen",
    blurb: "You measure whether the model did the thing, then you say so in public.",
    about: [
      "Lowglass trains models for narrow work: extraction, ranking, the kind of answer that can be wrong in a way you can count. The research engineer owns an eval, not a vibe.",
      "A public set of examples will carry you further here than a famous advisor. The lab note is two paragraphs and a number."
    ],
    tuesday: "An eval failed overnight. You find the scorer was wrong, not the model. Late morning is a review with the person who trained the checkpoint. You write two paragraphs for the lab note and go down to the canteen. The afternoon is a small harness.",
    reviews: [
      { name: "Amira", tenure: "3 years in the seat", text: "London is quieter than the Bay. The bar for a result is the same." },
      { name: "Ben", tenure: "4 years in the seat", text: "One public eval did more for me than the name at the top of my old paper." },
      { name: "Hana", tenure: "2 years in the seat", text: "There are meetings. They are not where the number comes from." }
    ],
    path: [
      { months: 0, text: "Pick a task with a right answer. Score a model on fifty examples by hand." },
      { months: 4, text: "Publish the set, the scorer, and the number. Include the cases you marked wrong." },
      { months: 10, text: "Repeat on a second task. Write what changed in the method." },
      { months: 14, text: "Have someone else run the harness on a machine you cannot see. Publish their number beside yours." },
      { months: 18, text: "Two evals, one harness other people ran, and a note with no adjectives." }
    ],
    rejection: "a kind note that they had already filled the seat",
    whyHint: "I want a number I am willing to put next to my name.",
    lineHint: "Published an eval, the scorer, and the cases I marked wrong."
  },
  {
    id: "associate",
    title: "Associate",
    org: "Harbor & Pine",
    practice: "Early-stage fund",
    city: "San Francisco",
    comp: "$180k + carry",
    months: 18,
    hours: 7,
    appetites: ["money", "status"],
    recruiter: "Camille",
    blurb: "You write the memo before the partner has a feeling.",
    about: [
      "Harbor & Pine writes small checks into young companies. The associate's job is the memo: what is true, what you would need to see, and what would make you pass.",
      "Carry is a lottery ticket on nice paper. The salary is why you can stay long enough to get better at the memos."
    ],
    tuesday: "You read a company from eight to ten, then walk to a coffee in the Mission to meet the founder. You do not perform excitement. Back at the office you write two pages. The partner reads them at five. Sometimes that is the whole decision.",
    reviews: [
      { name: "Noah", tenure: "2 years in the seat", text: "Carry is a lottery ticket. The salary is why I stayed." },
      { name: "Grace", tenure: "4 years in the seat", text: "The job is the reading. The meeting is how you check the reading." },
      { name: "Victor", tenure: "3 years in the seat", text: "People who need to be the founder are unhappy here by month six." }
    ],
    path: [
      { months: 0, text: "Write one memo a week on a company you do not work at. Two pages, a pass or a pursue." },
      { months: 6, text: "Twelve memos. Mark the ones that were wrong, and why." },
      { months: 9, text: "Sit in the back of a real conversation if you can. If you cannot, say so in the memo." },
      { months: 12, text: "Talk to two founders. Write what they avoided saying." },
      { months: 18, text: "A folder someone could read in a sitting. A point of view, with dates." }
    ],
    rejection: "a partner who liked the coffee and passed on the memo",
    whyHint: "I want the memo to be finished before anyone has a feeling about it.",
    lineHint: "Wrote a year of two-page memos and marked the ones that were wrong."
  },
  {
    id: "staff-designer",
    title: "Staff product designer",
    org: "Smallweather",
    practice: "Consumer",
    city: "Los Angeles",
    comp: "$200–250k",
    months: 16,
    hours: 9,
    appetites: ["craft", "status"],
    recruiter: "Felix",
    blurb: "You own a surface people touch when they are bored and when they are late.",
    about: [
      "Smallweather makes a consumer app people open in line and in bed. The staff designer owns one surface end to end: the words, the states, the build that ships.",
      "The portfolio that works here is a flow a real person finished. A redesign of a famous app will not get you the seat."
    ],
    tuesday: "You review yesterday's build on your phone in the parking lot, because the office light lies. Critique is at eleven and you bring one flow. The afternoon is pixels and one argument about a word in the empty state. You eat late. The screen looks simple. That took all day.",
    reviews: [
      { name: "June", tenure: "5 years in the seat", text: "Staff means you stop waiting for permission. You also stop hiding behind the team." },
      { name: "Omar", tenure: "3 years in the seat", text: "Los Angeles is good if you like leaving while the sun is still a fact." },
      { name: "Ruth", tenure: "7 years in the seat", text: "Bring a thing people finished. Leave the famous-app redesign at home." }
    ],
    path: [
      { months: 0, text: "Ship one flow in something real. A signup, a return, a message. Record yourself using it." },
      { months: 5, text: "Cut the flow in half. Write the three decisions that mattered." },
      { months: 10, text: "Watch people who are not designers use it. Keep their stuck points." },
      { months: 13, text: "Ship the smaller version. Leave the ambitious one in the notes." },
      { months: 16, text: "One case study, short, with the ugly middle left in." }
    ],
    rejection: "a loop that ended with praise and no offer",
    whyHint: "I want one surface, and I want to be responsible for the empty state.",
    lineHint: "Shipped a signup, cut it in half, and kept the version people finished."
  },
  {
    id: "editor",
    title: "Technology editor",
    org: "The Evening Index",
    practice: "A magazine",
    city: "Brooklyn",
    comp: "$140–170k",
    months: 12,
    hours: 4,
    appetites: ["craft", "freedom"],
    recruiter: "Paul",
    blurb: "You decide which sentence the reader meets first.",
    about: [
      "The Evening Index runs a small magazine about how things get made: factories, software, the companies in between. The technology editor assigns, cuts, and puts the day's lineup to bed.",
      "The pay is a magazine's pay. You will read more than you write. That is the seat."
    ],
    tuesday: "You edit a piece about a chip factory before the others arrive. The morning meeting is you and two writers at a table in Gowanus. You cut 400 words and put back 30. Lunch is a walk. The afternoon is a commissioning email you rewrite until it sounds like a person. You file the next day's lineup at six.",
    reviews: [
      { name: "Leah", tenure: "6 years in the seat", text: "The pay is magazine pay. The work is the work I said I wanted." },
      { name: "Samir", tenure: "2 years in the seat", text: "I read more than I write. That took a year to stop feeling like failure." },
      { name: "Nina", tenure: "4 years in the seat", text: "Brooklyn is the office. It is also the excuse to walk at lunch." }
    ],
    path: [
      { months: 0, text: "Publish one reported piece. A person, a place, a number." },
      { months: 3, text: "Edit someone else's draft. Save the diff." },
      { months: 8, text: "Four pieces that sound like the same mind." },
      { months: 10, text: "Commission one piece from a writer you have not published before. Keep the diff." },
      { months: 12, text: "The clips, one edit, and a list of stories you would assign next month." }
    ],
    rejection: "a form letter from a magazine that had already closed the search",
    whyHint: "I want to be the person who cuts the piece and puts the lineup to bed.",
    lineHint: "Published four reported pieces and kept the diffs of edits I made for other writers."
  },
  {
    id: "chief-of-staff",
    title: "Chief of staff",
    org: "Parcel North",
    practice: "Series B",
    city: "Austin",
    comp: "$160–190k",
    months: 12,
    hours: 6,
    appetites: ["status", "freedom"],
    recruiter: "Miles",
    blurb: "You make the week happen, then you tell the founder what the room avoided.",
    about: [
      "Parcel North moves goods for mid-size brands. The company is past the scramble and deep in the part where meetings multiply. The chief of staff keeps the week short and says the delayed thing out loud.",
      "People picture this seat as proximity to power. It is a calendar, a closed loop, and one hard sentence a week."
    ],
    tuesday: "You prep the leadership meeting at eight, which means you already know who is stuck. The meeting runs fifty minutes because you cut it. The middle of the day is a hiring loop that was drifting, and a customer issue the founder should not touch. At 4:30 you say the thing the room avoided. You are home for dinner.",
    reviews: [
      { name: "Drew", tenure: "2 years in the seat", text: "People expect glamour. I have a calendar and a spine." },
      { name: "Kim", tenure: "3 years in the seat", text: "Austin is cheaper than the coasts. The company still thinks it is in a hurry." },
      { name: "Alicia", tenure: "1 year in the seat", text: "One operator said my name in a room. The rest was proof I could point at." }
    ],
    path: [
      { months: 0, text: "Run one recurring meeting until it gets shorter and clearer. Write the before and after." },
      { months: 4, text: "Take a mess off someone's plate and close it. Keep the notes." },
      { months: 8, text: "Say the hard sentence out loud. The one that names the delay." },
      { months: 12, text: "A one-page brief an operator can forward, and a person who will say your name in a room." }
    ],
    rejection: "a founder who said you were impressive and hired a friend",
    whyHint: "I want the week to get shorter, and I want to be the one who says the delay out loud.",
    lineHint: "Cut a weekly meeting in half and closed a loop the founder had been carrying."
  },
  {
    id: "forward-deployed",
    title: "Forward-deployed engineer",
    org: "Sluice",
    practice: "Data infrastructure",
    city: "Chicago",
    comp: "$190–230k",
    months: 9,
    hours: 8,
    appetites: ["money", "craft"],
    recruiter: "Ade",
    blurb: "You sit with the customer's data until the nightly job is boring.",
    about: [
      "Sluice builds the pipelines under warehouses, hospitals, and anyone else with a file that has to arrive by morning. Forward-deployed means you go there.",
      "Chicago is the base. The airports are the rest of the job. Come from engineering or from support, and bring one story where you stayed until it worked."
    ],
    tuesday: "You are on-site in a warehouse office that smells like cardboard. The morning is their broken nightly job. You find the partition nobody owned. Lunch is a cafeteria tray. You ship a fix before you fly home and write the runbook on the plane, so they are not calling you at 1am.",
    reviews: [
      { name: "Marcus", tenure: "4 years in the seat", text: "Travel is the tax. The days on-site are the best days." },
      { name: "Sophie", tenure: "2 years in the seat", text: "I live in Chicago. I understand the airports better than my own block." },
      { name: "Imani", tenure: "5 years in the seat", text: "The story that matters is the one where you stayed until the job went green." }
    ],
    path: [
      { months: 0, text: "Write up one production incident you touched. Timeline, cause, the change." },
      { months: 3, text: "Do it again on a system that is not yours, with permission." },
      { months: 6, text: "Write a runbook a stranger could follow at midnight." },
      { months: 9, text: "Two incidents, one runbook, and a person who would take your call." }
    ],
    rejection: "a hiring manager who needed someone who could fly on Thursday",
    whyHint: "I want to be in the room when the nightly job fails, and still there when it doesn't.",
    lineHint: "Wrote the midnight runbook for a pipeline I did not originally own."
  },
  {
    id: "studio",
    title: "Studio lead",
    org: "Your studio",
    practice: "Independent",
    city: "Your city",
    comp: "Your rate",
    months: 12,
    hours: 5,
    appetites: ["freedom", "craft"],
    recruiter: "Luis",
    blurb: "Three clients, a rate you say out loud, and a Tuesday you designed.",
    about: [
      "This seat is one you give yourself. A studio of one, sometimes two. The work is specific enough that a stranger can hire it, and priced so a quiet month does not end the practice.",
      "Your city is the office. The work can travel. The rate is how the first year gets less lumpy."
    ],
    tuesday: "You work from a table you like. One client call at ten, scoped, ended on time. Four hours go to the actual work, not to finding the next work. You invoice before dinner. Some seasons there is one other person. Most Tuesdays it is you.",
    reviews: [
      { name: "Rosa", tenure: "Year 4", text: "Freedom is a schedule I defend on purpose." },
      { name: "Elliot", tenure: "Year 2", text: "The first year was lumpy. Saying the rate out loud made it less so." },
      { name: "Hana", tenure: "Year 6", text: "I stayed in my city. The good work still arrived from elsewhere." }
    ],
    path: [
      { months: 0, text: "Name the studio. One sentence on who it is for." },
      { months: 3, text: "One paid project, however small. Finish it." },
      { months: 6, text: "A rate you have said to a person." },
      { months: 9, text: "A second client, or a clear note on how the first one found you." },
      { months: 12, text: "Three clients who paid, a name, and a Tuesday that looks like the one on this page." }
    ],
    rejection: "a month you would have spent pitching instead of invoicing",
    whyHint: "I want a named studio, three paying clients, and a Tuesday I designed.",
    lineHint: "Finished three paid projects under a studio name and a rate I say out loud."
  },
  {
    id: "markets",
    title: "Markets researcher",
    org: "South Window",
    practice: "Public markets",
    city: "New York",
    comp: "$250–400k",
    months: 18,
    hours: 10,
    appetites: ["money", "craft"],
    recruiter: "Naomi",
    blurb: "You publish a screen and stand next to the number when it is wrong.",
    about: [
      "South Window is a small research shop. The seat is a published screen: a universe, a rule, a result someone else can rerun. When the result moves, you write the miss in the same place.",
      "The pay is high because the mistakes are visible. A credential is worth less here than a note with a date on it."
    ],
    tuesday: "The market opens and you already have the question. You pull the filings before the note. Late morning you argue with your own model and change one assumption in public. Lunch is at the desk. The afternoon note is one page. If you are right, the day is quiet. If you are wrong, you say so tomorrow.",
    reviews: [
      { name: "Claire", tenure: "6 years in the seat", text: "The number is the job. The prose is how anyone trusts it." },
      { name: "David", tenure: "8 years in the seat", text: "They pay this much because a wrong call has my name on it." },
      { name: "Farah", tenure: "3 years in the seat", text: "I got in with a screen people could rerun. The degree was a footnote." }
    ],
    path: [
      { months: 0, text: "Publish one screen. The universe, the rule, what you excluded, the result." },
      { months: 6, text: "Update it when the result moves. Write the miss in the same place." },
      { months: 12, text: "A second screen that disagrees with the first, and why both can exist." },
      { months: 18, text: "A body of notes someone could skim. Dated, rerunnable, signed." }
    ],
    rejection: "a desk that wanted the screen and hired someone they already knew",
    whyHint: "I want a screen with my name on it, including the week it is wrong.",
    lineHint: "Published a screen, updated it when it missed, and signed the note."
  },
  {
    id: "cohort",
    title: "Cohort lead",
    org: "Room North",
    practice: "A small school",
    city: "Remote",
    comp: "$120–150k",
    months: 8,
    hours: 4,
    appetites: ["freedom", "craft"],
    recruiter: "Greta",
    blurb: "You run the room where twelve people get better at the work.",
    about: [
      "Room North runs short cohorts for people changing the kind of work they do. The cohort lead teaches one concept, gives one exercise, and writes feedback that names the sentence to cut.",
      "The pay is teaching pay. The day ends when the session ends, if you let it."
    ],
    tuesday: "Office hours at nine for anyone stuck. You teach from eleven to one: one concept, one exercise, no slide you have not tested. The afternoon is feedback on their drafts, specific, with the sentence they should cut. You stop when the session stops. The cohort is the product.",
    reviews: [
      { name: "Paul", tenure: "3 years in the seat", text: "The pay is teaching pay. The days are the ones I wanted when I was in an office." },
      { name: "Asha", tenure: "2 years in the seat", text: "You have to like people who are not good yet. That is most of the hours." },
      { name: "Luis", tenure: "4 years in the seat", text: "Remote works when I start on time and end on time. The rest is drift." }
    ],
    path: [
      { months: 0, text: "Run a single hour for four people you know. One exercise." },
      { months: 2, text: "Do it again with people you do not know. Charge a small amount." },
      { months: 5, text: "A four-week cohort. Finish every session you scheduled." },
      { months: 8, text: "A curriculum, a roster of people who completed it, and one specific sentence they said." }
    ],
    rejection: "a semester you would have spent applying to teach instead of teaching",
    whyHint: "I want a room of twelve people and an exercise I have already tested.",
    lineHint: "Ran a four-week cohort, finished every session, and kept one sentence a student said."
  },
  {
    id: "brand",
    title: "Brand designer",
    org: "Casa Lumen",
    practice: "Hospitality",
    city: "Mexico City",
    comp: "$85–120k",
    months: 14,
    hours: 6,
    appetites: ["craft", "freedom"],
    recruiter: "Sol",
    blurb: "The mark, the menu, the room, and the way the staff says the name.",
    about: [
      "Casa Lumen is a small group of rooms and restaurants in Mexico City. The brand designer makes the things a guest touches and a cook has to live with: the menu, the window type, the way the name is said at the door.",
      "The band is a Mexico City band. The work ends up on paper and on a window. It also has to survive an 11pm service."
    ],
    tuesday: "You walk the new room in Roma Norte before it opens, with a printer's proof in your bag. The morning is type on a window. You argue gently with the chef about a word on the menu. The afternoon is a photo direction for the rooms. You eat at the bar at six, because that is how you know if it feels like the place.",
    reviews: [
      { name: "Inés", tenure: "4 years in the seat", text: "The salary is Mexico City. The work is on paper I can touch." },
      { name: "Marco", tenure: "2 years in the seat", text: "They use the menu at 11pm, when I am asleep. I design for that hour." },
      { name: "Beatriz", tenure: "7 years in the seat", text: "Taste gets you the interview. Liking service is what the job actually is." }
    ],
    path: [
      { months: 0, text: "Design one complete identity for a place that exists. A stand, a dinner, a room." },
      { months: 4, text: "See it printed or installed. Photograph the failure along with the hero shot." },
      { months: 9, text: "Do it with a client who has opinions. Keep the argument and the result." },
      { months: 14, text: "Three pieces in the world, and a note on how the staff actually uses them." }
    ],
    rejection: "a studio that loved the portfolio and needed someone in another city",
    whyHint: "I want the menu in a real room, and I want to eat there on a Tuesday.",
    lineHint: "Put an identity on a real room and wrote down how the staff used it at night."
  },
  {
    id: "hardware-pm",
    title: "Hardware product manager",
    org: "Little Circuit",
    practice: "Small devices",
    city: "Taipei",
    comp: "$140–180k",
    months: 20,
    hours: 9,
    appetites: ["craft", "status"],
    recruiter: "Pat",
    blurb: "You hold the next version before anyone is allowed to talk about it.",
    about: [
      "Little Circuit designs small devices and builds them with factories in and around Taipei. The product manager lives close to the tool cut. A button that feels wrong is the work, not a ticket about the button.",
      "Software habits will slow you down here. Lead time is the product. The object changes in Taipei, not in a slide."
    ],
    tuesday: "You are at the factory in the morning. A button feels wrong. You stay until you and the mechanical engineer agree on the next tool cut. Lunch is downstairs. The afternoon is a spreadsheet of slips and a call with the person who will sell it. You carry a sample home and use it while you cook.",
    reviews: [
      { name: "Kenji", tenure: "5 years in the seat", text: "Taipei is where the object actually changes. I stopped pretending otherwise." },
      { name: "Angela", tenure: "3 years in the seat", text: "My software habits hurt for a year. Lead time does not care about a standup." },
      { name: "Wei", tenure: "8 years in the seat", text: "The week it ships is gorgeous. Every week before that is ordinary and exact." }
    ],
    path: [
      { months: 0, text: "Take apart one device you own. Write what each part is for." },
      { months: 6, text: "Ship anything physical, even a small run." },
      { months: 12, text: "Spend real time where it is made. Write the constraints you cannot see from a desk." },
      { months: 20, text: "One object in someone's hands, an honest schedule, and the next tool cut." }
    ],
    rejection: "a team that needed the seat filled before the next tool cut",
    whyHint: "I want to be in the factory when the button feels wrong.",
    lineHint: "Shipped a small physical run and wrote down the constraints I learned on the floor."
  },
  {
    id: "policy",
    title: "Policy lead",
    org: "Your city",
    practice: "A city team",
    city: "Where you live",
    comp: "$115–155k",
    months: 15,
    hours: 5,
    appetites: ["status", "freedom"],
    recruiter: "Ellis",
    blurb: "You write the rule, then you sit in the room where people live with it.",
    about: [
      "The seat is on a city team, in the city you already live in. You draft the rule, you go to the hearing, and you rewrite the sentence a resident caught you smoothing over.",
      "The band above is a mid-size American city. Yours may sit higher or lower. The leverage is the sentence, and you have to use the thing you change."
    ],
    tuesday: "You bike to a hearing with a two-page brief. The morning is public comment, slower than you want and more useful than the memo. You rewrite one paragraph at lunch because a resident named a fact you had smoothed. The afternoon is a call with the department that has to enforce it. You go home in the city you changed by a sentence.",
    reviews: [
      { name: "Dana", tenure: "6 years in the seat", text: "The pay is public. The leverage showed up in a sentence I rewrote after a hearing." },
      { name: "Omar", tenure: "3 years in the seat", text: "Patience and a hard fact do the work. Charm is how I have watched this job go wrong." },
      { name: "Ruth", tenure: "9 years in the seat", text: "Living here is the job. I use the rule I touch." }
    ],
    path: [
      { months: 0, text: "Pick one rule in your city that touches your week. Write what it does." },
      { months: 4, text: "Go to one meeting where it is discussed. Note who is affected and who spoke." },
      { months: 9, text: "Publish a plain-language brief. Send it to one person who works on the rule." },
      { months: 15, text: "A record of showing up, one brief a department could use, and the sentence you would change." }
    ],
    rejection: "a city inbox that never wrote back",
    whyHint: "I want to change one sentence in a rule I already live with.",
    lineHint: "Went to the hearing, published a plain brief, and named the sentence I would change."
  },
  {
    id: "founder",
    title: "Founder",
    org: "Your company",
    practice: "One product",
    city: "Where you start",
    comp: "What it makes",
    months: 18,
    hours: 7,
    appetites: ["freedom", "money"],
    recruiter: "Noor",
    blurb: "One product, a price, and a person who is not your friend paying for it.",
    about: [
      "The seat is a company of one product. Not a vision deck. A price, a person the product is for, and a Tuesday that is mostly building and support.",
      "You can start in any city. You will need a sentence specific enough that a stranger can tell whether it is for them. Praise from people you know is not the signal. The charge is."
    ],
    tuesday: "You talk to one user before you open the editor. You ship a fix by noon. The afternoon is support, which is the research. You send one invoice, or you watch one charge succeed. You stop at a set hour. The company will take the evening if you let it.",
    reviews: [
      { name: "Lena", tenure: "Year 3", text: "The announcement was the fantasy. Tuesday is the job." },
      { name: "Chris", tenure: "Year 1", text: "I could start anywhere. I could not stay vague and keep the company." },
      { name: "Amina", tenure: "Year 5", text: "The charge is the signal. Kind words from friends were a different thing entirely." }
    ],
    path: [
      { months: 0, text: "Name the person and the job the product does for them. One sentence." },
      { months: 3, text: "A version they can use this week. Charge something." },
      { months: 9, text: "Ten people who paid, or a clear note on why the tenth did not." },
      { months: 18, text: "One product, a price, and a Tuesday that is the work." }
    ],
    rejection: "a launch week you would have spent announcing a thing nobody could buy",
    whyHint: "I want one product with a price, and a stranger who pays it.",
    lineHint: "Charged for a product, and wrote down why the tenth person did or did not pay."
  }
];
