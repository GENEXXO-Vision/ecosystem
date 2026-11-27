/* ═════════ GENETICSXX — a Science demo gateway (2026-11-27, Sean; build -99) ═════════
   Built with the _tools/README.md recipe. Palette (light): lab white, teal, deep violet.
   Home sector: Science (also listed in Health and Education; GW_HOME.genetics = 'science' in genexxo-data.js, and 'science' is in HOME_ONLY).
   Every company, maker, pro and product is fictional; places are real.
   Tone: the science of inheritance, explained with wonder. It never reads anyone’s health results and never predicts illness:
   for health questions, it points people to their GP and NHS genetics services. Family-history DNA is ancestry only. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const TEAL = 'linear-gradient(135deg,#2DD4BF,#0F766E)', VIOLET = 'linear-gradient(135deg,#A78BFA,#5B21B6)', BLUE = 'linear-gradient(135deg,#60A5FA,#1D4ED8)', AMBER = 'linear-gradient(135deg,#FCD34D,#B45309)';

GATEWAYS.genetics = {
  name: 'GeneticsXX', domain: 'geneticsxx.com', emoji: '🧬', sector: 'science', live: true,
  tagline: 'The Genetics Universe',
  theme: {
    bg: '#F2F9F8', text: '#0B1F1E', cardBg: '#FFFFFF', cardBorder: 'rgba(11,31,30,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F2F9F8)', accent: '#0F766E', accentAlt: '#5B21B6', dark: false
  },
  gradient: 'linear-gradient(135deg,#2DD4BF,#0F766E,#5B21B6)',
  stats: { members: '2.4M', brands: '640+', agents: '30' },
  spaces: ['All Feed', 'DNA Basics', 'In the Lab', 'Family History', 'Students', 'Discoveries'],
  trending: ['#StrawberryDNA', '#PunnettSquare', '#FamilyTreeDNA'],
  brandZones: [
    { key: 'helixa', name: 'Helixa', color: '#0F766E', tier: 'Founding Partner', tag: 'DNA experiment kits for schools and curious kitchens' },
    { key: 'basepair', name: 'Basepair', color: '#5B21B6', tier: 'Brand Zone', tag: 'Books and podcasts that make genetics make sense' },
    { key: 'brightfield', name: 'Brightfield', color: '#1D4ED8', tier: 'Brand Zone', tag: 'Microscopes for classrooms and kitchen tables' },
    { key: 'rootline', name: 'Rootline', color: '#B45309', tier: 'Brand Zone', tag: 'Family-history DNA: ancestry only, no health reports' }
  ],
  apps: [
    { name: 'Punnett Square', color: '#0F766E', desc: 'Cross two parents and see what the offspring could inherit', key: 'punnett-square', url: 'apps/punnett-square.html',
      dev: 'Helixa', rating: '4.9', users: '1.3M', perms: ['profile', 'feed'],
      tagline: 'Mendel’s peas, in your pocket.',
      about: 'Punnett Square lets you pick two parents for a classic trait, like pea colour or fruit-fly eyes, and shows every possible combination and the chances of each. Made for GCSE and A-level students.',
      features: ['Six classic traits', 'Ratios and percentages', 'Dominant and recessive, explained', 'Share a cross'],
      shots: ['apps/punnett-square/shot-1.jpg', 'apps/punnett-square/shot-2.jpg', 'apps/punnett-square/shot-3.jpg'],
      version: '3.2', size: '9 KB',
      updates: [ { v: '3.2', ago: 2, notes: 'Fruit-fly traits.' }, { v: '2.6', ago: 70, notes: 'Ratios explained.' }, { v: '2.0', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@ella_morgan_biology', stars: 5, ago: 1, text: 'My students finally get 3:1.' }, { who: '@pipette_priya', stars: 5, ago: 14, text: 'Clean and quick.' }, { who: '@year12_jamie', stars: 4, ago: 36, text: 'Saved my homework.' } ] },
    { name: 'DNA Decoder', color: '#5B21B6', desc: 'Turn DNA into a protein, one codon at a time', key: 'dna-decoder', url: 'apps/dna-decoder.html',
      dev: 'Basepair', rating: '4.8', users: '880K', perms: ['profile', 'feed'],
      tagline: 'Read the code of life.',
      about: 'DNA Decoder turns a DNA sequence into messenger RNA and then into amino acids, using the real codon table. Change one letter and see what a mutation does.',
      features: ['DNA to RNA to protein', 'Try a mutation', 'The full codon table', 'Share your protein'],
      shots: ['apps/dna-decoder/shot-1.jpg', 'apps/dna-decoder/shot-2.jpg', 'apps/dna-decoder/shot-3.jpg'],
      version: '2.4', size: '9 KB',
      updates: [ { v: '2.4', ago: 3, notes: 'Mutation mode.' }, { v: '1.9', ago: 76, notes: 'Codon table.' }, { v: '1.2', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@year12_jamie', stars: 5, ago: 2, text: 'Translation finally makes sense.' }, { who: '@tom_reeve_science', stars: 5, ago: 20, text: 'I use it in every school show.' }, { who: '@pipette_priya', stars: 4, ago: 44, text: 'Nice touch with the stop codons.' } ] },
    { name: 'Gene Quiz', color: '#1D4ED8', desc: 'Ten genetics questions a day', key: 'gene-quiz', url: 'apps/gene-quiz.html',
      dev: 'Brightfield', rating: '4.8', users: '1.1M', perms: ['profile', 'feed'],
      tagline: 'Ten questions, every day.',
      about: 'Gene Quiz asks ten questions a day about DNA, inheritance and the scientists who worked it out. Every answer comes with a short explanation.',
      features: ['Ten a day', 'Why each answer is right', 'Your best score', 'Share your score'],
      shots: ['apps/gene-quiz/shot-1.jpg', 'apps/gene-quiz/shot-2.jpg', 'apps/gene-quiz/shot-3.jpg'],
      version: '2.1', size: '9 KB',
      updates: [ { v: '2.1', ago: 1, notes: 'New questions on Rosalind Franklin.' }, { v: '1.6', ago: 60, notes: 'Explanations.' }, { v: '1.0', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@pipette_priya', stars: 5, ago: 3, text: 'Ten out of ten on Tuesday!' }, { who: '@ella_morgan_biology', stars: 5, ago: 24, text: 'Perfect revision starter.' }, { who: '@year12_jamie', stars: 4, ago: 48, text: 'Addictive.' } ] }
  ],
  pros: [
    { key: 'ella-morgan-biology', name: 'Ella Morgan Biology Tutoring', color: '#0F766E', tag: 'GCSE and A-level biology, genetics a speciality', role: 'Biology tutor',
      img: U('1777398586025-c1718e67c9cc', 800, 800), base: 'Cardiff, UK · and online', langs: 'English, Welsh', years: 8, rating: '4.9', reviewsN: 212, cur: '£',
      creds: ['Degree in genetics', 'Former secondary school teacher', 'Examiner for A-level biology'],
      about: 'Ella makes genetics click: Punnett squares, protein synthesis and the exam questions that trip everyone up, one step at a time.',
      services: [ { id: 'one', name: 'One-to-one lesson', dur: '1 hour', price: 40, desc: 'Online or in Cardiff.' },
                  { id: 'group', name: 'Revision group', dur: '90 minutes', price: 18, desc: 'Per student, up to six.' },
                  { id: 'paper', name: 'Past paper review', dur: '45 minutes', price: 30, desc: 'Your answers, marked and explained.' } ],
      avail: { days: [1, 2, 3, 4], times: ['16:00', '17:30', '19:00'] },
      reviews: [ { who: '@year12_jamie', stars: 5, ago: 2, text: 'From a D to an A in genetics questions.' }, { who: '@pipette_priya', stars: 5, ago: 20, text: 'Patient and clear.' }, { who: '@tom_reeve_science', stars: 5, ago: 50, text: 'A brilliant teacher.' } ],
      posts: [ { ago: 1, text: 'Exam tip: always write out the parents’ gametes before you draw the square. It’s where most marks are lost.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ruth-kendall-family-history', name: 'Ruth Kendall Family History', color: '#B45309', tag: 'Family trees from records and DNA matches', role: 'Genealogist',
      img: U('1616286608358-0e1b143f7d2f', 800, 800), base: 'York, UK · and online', langs: 'English', years: 22, rating: '5.0', reviewsN: 184, cur: '£',
      creds: ['Twenty years of family-history research', 'Former county archivist', 'Teaches evening classes in York'],
      about: 'Ruth helps families trace their roots using parish records, census returns and DNA matches. She works only on ancestry, never on health.',
      services: [ { id: 'start', name: 'Getting started session', dur: '1 hour', price: 45, desc: 'Where to begin and what to look for.' },
                  { id: 'dna', name: 'Understanding your DNA matches', dur: '90 minutes', price: 70, desc: 'Which cousins are which, and how to tell.' },
                  { id: 'tree', name: 'Research package', dur: 'Four weeks', price: 380, desc: 'Ruth researches one line of your tree.' } ],
      avail: { days: [2, 3, 5], times: ['10:00', '14:00'] },
      reviews: [ { who: '@pipette_priya', stars: 5, ago: 4, text: 'Found my great-grandmother’s village.' }, { who: '@tom_reeve_science', stars: 5, ago: 28, text: 'Careful and kind.' }, { who: '@year12_jamie', stars: 5, ago: 58, text: 'Grandad cried happy tears.' } ],
      posts: [ { ago: 2, text: 'A DNA match is a clue, not an answer. Always check it against the records before you add anyone to your tree.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'tom-reeve-science', name: 'Tom Reeve Science Shows', color: '#5B21B6', tag: 'Hands-on DNA shows for schools and festivals', role: 'Science communicator',
      img: U('1600603406200-5b2a104684ac', 800, 800), base: 'Norwich, UK', langs: 'English', years: 11, rating: '4.9', reviewsN: 246, cur: '£',
      creds: ['PhD in plant genetics', 'Presents at science festivals', 'Visits 120 schools a year'],
      about: 'Tom brings genetics to life with strawberries, sweets and a lot of enthusiasm. His shows suit everyone from Year 5 to grandparents.',
      services: [ { id: 'show', name: 'School show', dur: '1 hour', price: 260, desc: 'For a year group, in your hall.' },
                  { id: 'workshop', name: 'Lab workshop', dur: 'Half a day', price: 420, desc: 'Students extract their own DNA.' },
                  { id: 'talk', name: 'Online talk', dur: '45 minutes', price: 120, desc: 'For clubs and classes anywhere.' } ],
      avail: { days: [1, 2, 4, 5], times: ['09:00', '13:30'] },
      reviews: [ { who: '@ella_morgan_biology', stars: 5, ago: 3, text: 'My class still talks about it.' }, { who: '@year12_jamie', stars: 5, ago: 30, text: 'Why I chose biology.' }, { who: '@pipette_priya', stars: 5, ago: 54, text: 'Pure joy.' } ],
      posts: [ { ago: 3, text: 'A strawberry has eight copies of each chromosome. That’s why it gives up so much DNA in a kitchen experiment.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'genetics-explained', name: 'Genetics Explained', domain: 'explained.geneticsxx.com', color: '#0F766E', img: U('1637929476734-bd7f5f78e40a', 900, 500),
      scope: 'Global', where: 'Wherever you are', members: 368000, online: 4120, tagline: 'Curious about DNA? Ask anything.',
      about: 'Students, teachers, scientists and the simply curious explaining genetics to each other. We talk about the science, not anyone’s health results: for those, speak to your GP.',
      rules: ['No medical advice or reading test results', 'Cite your sources', 'Every question is welcome'],
      mods: ['@pipette_priya', '@year12_jamie'],
      threads: [ { t: 'Why do siblings look so different?', by: '@year12_jamie', tag: 'BASICS', replies: 1640, ago: 0, votes: 3480 }, { t: 'I extracted DNA from a banana: photos inside', by: '@pipette_priya', tag: 'KITCHEN LAB', replies: 1120, ago: 1, votes: 2860 }, { t: 'Rosalind Franklin’s Photo 51, explained', by: '@pipette_priya', tag: 'HISTORY', replies: 920, ago: 2, votes: 2240 }, { t: 'Revision help: protein synthesis', by: '@year12_jamie', tag: 'STUDENTS', replies: 860, ago: 3, votes: 1960 } ],
      events: [ { title: 'Live: kitchen DNA extraction, step by step', day: 5, time: '17:00', where: 'Online' }, { title: 'Ask a geneticist anything', day: 12, time: '19:00', where: 'Online' } ] },
    { key: 'cambridge-gene-club', name: 'Cambridge Gene Club', domain: 'cambridge.geneticsxx.com', color: '#5B21B6', img: U('1630959305790-4c956ce6c0b6', 900, 500),
      scope: 'Local', where: 'Cambridge', members: 980, online: 22, tagline: 'Talks, pints and the odd pipette.',
      about: 'Students, researchers and curious locals who meet monthly in Cambridge for a short talk on genetics and a friendly chat afterwards. Everyone welcome, no science degree needed.',
      rules: ['Everyone welcome', 'Speakers keep it jargon-free', 'Bring a question'],
      mods: ['@tom_reeve_science', '@pipette_priya'],
      threads: [ { t: 'December talk: how bananas got their genes', by: '@tom_reeve_science', tag: 'MEETUP', replies: 34, ago: 0, votes: 82 }, { t: 'Lab tour sign-up for January', by: '@pipette_priya', tag: 'TOUR', replies: 28, ago: 1, votes: 60 }, { t: 'Reading list for newcomers', by: '@tom_reeve_science', tag: 'BOOKS', replies: 20, ago: 2, votes: 46 } ],
      events: [ { title: 'December talk: how bananas got their genes', day: 9, time: '19:00', where: 'Cambridge' }, { title: 'January lab tour', day: 46, time: '14:00', where: 'Cambridge' } ] }
  ],
  feed: [
    { av: 'GX', avBg: TEAL, author: 'GeneticsXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Three billion letters, four bases, one code shared by every living thing. GeneticsXX explains the science of inheritance. For questions about your own health, talk to your GP.',
      img: U('1633167606207-d840b5070fc2', 800, 600), eng: '♡ 26.8K · 💬 2.1K · ↗ 3.6K' },
    { av: 'PP', avBg: TEAL, author: '@pipette_priya', sub: 'In the Lab · Just now', badge: 'COMMUNITY',
      text: 'First week as a lab technician. Today I loaded my first gel and the bands came out exactly where they should. I may have done a small dance.',
      img: U('1582560475093-ba66accbc424', 800, 600), eng: '♡ 11.6K · 💬 1.4K · ↗ 980' },
    { av: 'HX', avBg: TEAL, author: 'Helixa', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: a Year 9 class in Leicester pulls DNA out of strawberries, using washing-up liquid, salt and cold alcohol. Watch the strands appear. Follow <b>Helixa</b>.',
      img: U('1766297248084-b32bacb4a1e4', 800, 600), eng: '♡ 15.8K · 💬 2.0K · ↗ 2.2K' },
    { av: 'BF', avBg: BLUE, author: 'Brightfield', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Onion skin, cheek cells, pond water. The <b>Brightfield School 400</b> is tough enough for Year 7 and sharp enough for A-level.',
      img: U('1562789233-495f52b583dd', 800, 600), eng: '♡ 6.8K · 💬 480 · ↗ 620' },
    { av: 'YJ', avBg: VIOLET, author: '@year12_jamie', sub: 'Students · 2h ago', badge: 'COMMUNITY',
      text: 'Finally understood why two brown-eyed parents can have a blue-eyed child. Drew the Punnett square three times. It’s just maths with letters.',
      img: U('1681911046064-e663d5192921', 800, 600), eng: '♡ 7.4K · 💬 620 · ↗ 540' },
    { av: 'RL', avBg: AMBER, author: 'Rootline', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Grandad’s photo album and a cheek swab. <b>Rootline Ancestry</b> found 212 cousins and a village in County Mayo. Ancestry only, never health.',
      img: U('1458323679487-2ebd81b13c5f', 800, 600), eng: '♡ 5.4K · 💬 360 · ↗ 480' },
    { av: 'TR', avBg: VIOLET, author: 'Tom Reeve Science Shows', sub: 'Schools · 6h ago', badge: 'PRO ZONE',
      text: 'Fifteen schools this term, about four thousand strawberries. Every single time, the room gasps when the DNA appears.',
      img: U('1766297246931-7b861269dab0', 800, 600), eng: '♡ 4.6K · 💬 280 · ↗ 360' }
  ],
  prompts: ['What is a gene, simply?', 'How does a Punnett square work?', 'How do I get DNA out of a strawberry?', 'How do DNA family-history tests work?'],
  businesses: ['sequence-north', 'gene-roadshow']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'genetics', verified: true }, o);
Object.assign(ZONES, {
  'helixa': brand({ key: 'helixa', name: 'Helixa', color: '#0F766E', gradient: TEAL, tier: 'Founding Partner',
    tagline: 'DNA experiment kits for schools and curious kitchens', stats: { followers: '348K', content: '620', products: '14' },
    ad: { badge: 'Featured', img: U('1486825586573-7131f7991bdd', 760, 760), hl: 'See DNA with your own eyes.', sub: 'Experiment kits for classrooms and kitchen tables.', meta: 'From £14' },
    products: [
      { name: 'Helixa Class Kit', price: '£89', tag: 'FLAGSHIP', emoji: '🧪', rating: 4.9, reviews: 2860, cat: 'kits', special: true, desc: 'DNA extraction for a class of thirty, with teacher notes.', features: ['Safe for Year 5 and up', 'Lesson plans included'], review: { who: 'Ella M.', text: 'The lesson they remember all year.' } },
      { name: 'Kitchen DNA Kit', price: '£14', tag: 'BESTSELLER', emoji: '🍓', rating: 4.8, reviews: 5240, cat: 'kits', desc: 'Everything for strawberry and banana DNA at home.', features: ['Six experiments'], review: { who: 'Priya K.', text: 'My kids did it three times.' } },
      { name: 'Gel Electrophoresis Set', price: '£420', emoji: '⚡', rating: 4.8, reviews: 640, cat: 'lab', desc: 'A safe, low-voltage gel kit for A-level and college labs.', features: ['Food-dye practice samples'], review: { who: 'Tom R.', text: 'Bombproof.' } },
      { name: 'Teacher Training Day', price: '£120', tag: 'SPECIAL', emoji: '🎓', rating: 4.9, reviews: 380, cat: 'lab', special: true, desc: 'A day of hands-on practicals for science teachers.', features: ['Certificate'], review: { who: 'Ella M.', text: 'Confidence boost.' } }
    ],
    shopCats: [ { key: 'kits', label: 'Kits', icon: '🧪' }, { key: 'lab', label: 'Lab & training', icon: '⚡' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Gloves on, samples ready, a whole class at the bench. The <b>Helixa Class Kit</b>.', img: U('1707944746033-0232ca340fc6', 800, 440), eng: '♡ 15.8K · 💬 2.0K · ↗ 2.2K', product: 0 },
      { type: 'community', who: 'Priya K.', whoBg: TEAL, sub: 'Community · 1d', text: 'Our strawberry DNA came out cloudy, not stringy. What went wrong?', eng: '♡ 760 · 💬 210', reply: 'Hi Priya! Usually the alcohol wasn’t cold enough, or it got stirred in. Chill it in the freezer and pour it gently down the side of the tube so it floats on top. 🍓' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Helixa Live · strawberry DNA with a Year 9 class', when: 'Live now', desc: 'A Leicester class extracts DNA, live.', registered: 9120, capacity: 22000 } ],
    about: { founded: 'Leicester · 2013', story: 'A biology teacher and a lab technician who wanted every child to see DNA, not just read about it. We joined GeneticsXX as Founding Partner because wonder is the best way into science.', milestones: [['2013', 'Founded'], ['2020', 'In 4,000 schools'], ['2026', 'Founding Partner on GeneticsXX']], values: ['Hands-on learning', 'Safe for schools', 'Teachers first'] } }),

  'basepair': brand({ key: 'basepair', name: 'Basepair', color: '#5B21B6', gradient: VIOLET, tier: 'Brand Zone',
    tagline: 'Books and podcasts that make genetics make sense', stats: { followers: '126K', content: '440', products: '32' },
    ad: { badge: 'New', img: U('1628595351029-c2bf17511435', 760, 760), hl: 'The code of life, in plain English.', sub: 'Books and podcasts for the curious.', meta: 'From £9' },
    products: [
      { name: 'Four Letters', price: '£14', tag: 'FLAGSHIP', emoji: '📘', rating: 4.9, reviews: 3640, cat: 'books', special: true, desc: 'The story of DNA, from Mendel’s peas to today, for everyone.', features: ['Paperback and audio'], review: { who: 'Jamie P.', text: 'Read it in a weekend.' } },
      { name: 'Genetics for A-level', price: '£12', tag: 'BESTSELLER', emoji: '📗', rating: 4.8, reviews: 2120, cat: 'books', desc: 'Clear chapters and past-paper practice.', features: ['Worked answers'], review: { who: 'Ella M.', text: 'I recommend it to every student.' } },
      { name: 'Basepair Podcast Plus', price: '£3 a month', emoji: '🎧', rating: 4.7, reviews: 980, cat: 'audio', desc: 'Weekly episodes with scientists, without the adverts.', features: ['Bonus episodes'], review: { who: 'Priya K.', text: 'My commute companion.' } },
      { name: 'Scientists Card Set', price: '£9', tag: 'SPECIAL', emoji: '🃏', rating: 4.8, reviews: 540, cat: 'audio', special: true, desc: 'Forty cards on the people behind genetics.', features: ['Classroom friendly'], review: { who: 'Tom R.', text: 'Great for starters.' } }
    ],
    shopCats: [ { key: 'books', label: 'Books', icon: '📘' }, { key: 'audio', label: 'Podcasts & more', icon: '🎧' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Peas, flies and a photograph that changed everything. <b>Four Letters</b>, now in paperback.', img: U('1641903202531-bfa6bf0c6419', 800, 440), eng: '♡ 5.8K · 💬 340', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Author talk: Four Letters', when: 'Dec 3 · 19:00', desc: 'The story of DNA, live with questions.', registered: 1380, capacity: 4000 } ],
    about: { founded: 'London · 2017', story: 'A science writer and a podcast producer who believe anyone can understand genetics.', milestones: [['2017', 'The podcast'], ['2021', 'Four Letters'], ['2026', 'Brand Zone on GeneticsXX']], values: ['Clear, not dumbed down', 'Checked by scientists', 'Curious about everything'] } }),

  'brightfield': brand({ key: 'brightfield', name: 'Brightfield', color: '#1D4ED8', gradient: BLUE, tier: 'Brand Zone',
    tagline: 'Microscopes for classrooms and kitchen tables', stats: { followers: '98.4K', content: '280', products: '22' },
    ad: { badge: 'Christmas', img: U('1511174511562-5f7f18b874f8', 760, 760), hl: 'A whole world, ×400.', sub: 'Microscopes built for curious hands.', meta: 'From £59' },
    products: [
      { name: 'Brightfield School 400', price: '£149', tag: 'FLAGSHIP', emoji: '🔬', rating: 4.8, reviews: 2460, cat: 'scopes', special: true, desc: 'A tough classroom microscope, up to 400×.', features: ['LED light', 'Five-year warranty'], review: { who: 'Ella M.', text: 'Survived Year 8.' } },
      { name: 'Brightfield Junior', price: '£59', tag: 'BESTSELLER', emoji: '🧒', rating: 4.7, reviews: 3120, cat: 'scopes', desc: 'A real microscope for ages eight and up.', features: ['Twenty prepared slides'], review: { who: 'Priya K.', text: 'Christmas present of the year.' } },
      { name: 'Prepared Slides: Cells', price: '£18', emoji: '🧫', rating: 4.8, reviews: 860, cat: 'slides', desc: 'Twenty-five slides of plant and animal cells.', features: ['Labelled'], review: { who: 'Jamie P.', text: 'Saved my practical.' } },
      { name: 'Phone Camera Adapter', price: '£16', tag: 'SPECIAL', emoji: '📱', rating: 4.6, reviews: 620, cat: 'slides', special: true, desc: 'Take photos through the eyepiece with your phone.', features: ['Fits most phones'], review: { who: 'Tom R.', text: 'Brilliant for sharing.' } }
    ],
    shopCats: [ { key: 'scopes', label: 'Microscopes', icon: '🔬' }, { key: 'slides', label: 'Slides & extras', icon: '🧫' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Cheek cells at 400×: you can see the nucleus where your DNA lives. <b>Brightfield School 400</b>.', img: U('1738778344503-f6e0df318895', 800, 440), eng: '♡ 6.8K · 💬 480', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas week: Junior microscopes £20 off', when: 'Dec 8 · All week', desc: 'Brightfield Junior with twenty slides, £20 off.', registered: 2040, capacity: 5000 } ],
    about: { founded: 'Sheffield · 2009', story: 'Optics engineers who were tired of school microscopes that broke in a term.', milestones: [['2009', 'The School 400'], ['2018', 'Junior range'], ['2026', 'Brand Zone on GeneticsXX']], values: ['Built to last', 'Repairable', 'Made for learning'] } }),

  'rootline': brand({ key: 'rootline', name: 'Rootline', color: '#B45309', gradient: AMBER, tier: 'Brand Zone',
    tagline: 'Family-history DNA: ancestry only, no health reports', stats: { followers: '204K', content: '360', products: '4' },
    ad: { badge: 'Featured', img: U('1528569937393-ee892b976859', 760, 760), hl: 'Find the people in the photographs.', sub: 'Family-history DNA and records. Ancestry only, never health.', meta: 'From £59' },
    products: [
      { name: 'Rootline Ancestry Kit', price: '£59', tag: 'FLAGSHIP', emoji: '🧬', rating: 4.7, reviews: 6840, cat: 'kits', special: true, desc: 'A cheek swab that finds relatives and where your ancestors lived.', features: ['Ancestry only: no health reports', 'Delete your data any time'], review: { who: 'Priya K.', text: 'Found cousins in three countries.' } },
      { name: 'Records Membership', price: '£8 a month', tag: 'BESTSELLER', emoji: '📜', rating: 4.7, reviews: 3260, cat: 'records', desc: 'Census returns, parish registers and ship lists.', features: ['UK and Ireland'], review: { who: 'Ruth K.', text: 'The records I use most.' } },
      { name: 'Family Tree Book', price: '£45', emoji: '📖', rating: 4.8, reviews: 960, cat: 'records', desc: 'Your tree, printed and bound.', features: ['Hardback'], review: { who: 'Tom R.', text: 'Grandma’s favourite present.' } },
      { name: 'Gift Kit', price: '£64', tag: 'SPECIAL', emoji: '🎁', rating: 4.7, reviews: 1120, cat: 'kits', special: true, desc: 'The Ancestry Kit, gift-wrapped with a card.', features: ['Christmas delivery'], review: { who: 'Jamie P.', text: 'Dad loved it.' } }
    ],
    shopCats: [ { key: 'kits', label: 'DNA kits', icon: '🧬' }, { key: 'records', label: 'Records', icon: '📜' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'A wedding photo from 1931 and a match in Ontario. Two halves of one family, back together. <b>Rootline Ancestry Kit</b>.', img: U('1794129980718-661655420ce3', 800, 440), eng: '♡ 5.4K · 💬 360', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Family-history evening: reading your DNA matches', when: 'Dec 9 · 18:30', desc: 'Which cousins are which, explained live.', registered: 1820, capacity: 5000 } ],
    about: { founded: 'Dublin · 2015', story: 'Genealogists and scientists helping families find each other. We never offer health reports and we never sell your data.', milestones: [['2015', 'Records first'], ['2020', 'DNA kits'], ['2026', 'Brand Zone on GeneticsXX']], values: ['Ancestry only', 'Your data, your choice', 'Records and DNA together'] } }),

  'sequence-north': { key: 'sequence-north', kind: 'business', gw: 'genetics', name: 'Sequence North', color: '#0F766E', gradient: TEAL, img: U('1758206523826-a65d4cf070aa', 900, 500),
    tier: 'Verified', category: 'DNA sequencing for research labs', tagline: 'Fast, careful sequencing for universities and research teams.',
    about: { founded: 'York · 2011', story: 'We sequence DNA for university labs, plant breeders and wildlife researchers across the north. Research samples only: we don’t test people for health.' },
    stats: { years: 15, staff: 64, clients: '320 research groups' },
    caps: [ { name: 'Sanger sequencing', detail: 'Back in two working days.' }, { name: 'Whole genomes', detail: 'For plants, animals and microbes.' }, { name: 'Training', detail: 'Lab skills for PhD students.' } ],
    specs: { moq: 'One sample', lead: '2 days to 3 weeks', regions: 'UK and Europe', certs: ['Accredited laboratory', 'Research use only', 'Samples tracked end to end'] },
    supplies: [ { kind: 'brand', key: 'helixa', what: 'Gel kits for our training courses' } ],
    cases: [ { title: 'Counting red squirrels', text: 'DNA from hair samples helped map squirrels across Northumberland.' } ],
    feed: [ { sub: 'Lab · 3d', text: 'Our new sequencer is running. Twice the samples, same careful team.' } ],
    contact: { person: 'Dr Hannah Clarke, Lab manager', response: 'Replies within one working day' } },

  'gene-roadshow': { key: 'gene-roadshow', kind: 'business', gw: 'genetics', name: 'Gene Roadshow', color: '#5B21B6', gradient: VIOLET, img: U('1745638913789-51e805716c22', 900, 500),
    tier: 'Verified', category: 'Science workshops for schools', tagline: 'A genetics lab that comes to your school.',
    about: { founded: 'Norwich · 2014', story: 'A van full of microscopes, pipettes and enthusiastic scientists. We run hands-on genetics days for primary and secondary schools across the East of England.' },
    stats: { years: 12, staff: 18, clients: '1,400 schools visited' },
    caps: [ { name: 'DNA days', detail: 'Extraction and microscopes for a whole year group.' }, { name: 'A-level practicals', detail: 'Gel electrophoresis, done properly.' }, { name: 'Family science evenings', detail: 'Parents and children together.' } ],
    specs: { moq: 'One day', lead: '2 to 6 weeks', regions: 'East of England', certs: ['DBS checked', 'Fully insured', 'Risk assessments provided'] },
    supplies: [ { kind: 'brand', key: 'brightfield', what: 'Microscopes for every workshop' } ],
    cases: [ { title: 'A whole town’s Year 6', text: 'Every Year 6 in King’s Lynn extracted DNA in one week.' } ],
    feed: [ { sub: 'Schools · 5d', text: 'Spring term bookings are open. The van is ready.' } ],
    contact: { person: 'Callum Ward, Schools', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('genetics', [
  { gw: 'genetics', zone: 'helixa', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Helixa Live · strawberry DNA with a Year 9 class', desc: 'A Leicester class extracts DNA, live.' },
  { gw: 'genetics', zone: 'basepair', type: 'Event', icon: '📘', time: 'Dec 3', title: 'Author talk: Four Letters', desc: 'The story of DNA, live with questions.' },
  { gw: 'genetics', type: 'Event', icon: '🍓', time: 'Dec 2', title: 'Live: kitchen DNA extraction, step by step', desc: 'Genetics Explained members try it together.' },
  { gw: 'genetics', zone: 'brightfield', type: 'Sale', icon: '🔬', time: 'Dec 8', title: 'Christmas week: Junior microscopes £20 off', desc: 'Brightfield Junior with twenty slides.' },
  { gw: 'genetics', type: 'Event', icon: '🍌', time: 'Dec 6', title: 'Cambridge Gene Club: how bananas got their genes', desc: 'A short talk and a friendly chat.' },
  { gw: 'genetics', zone: 'rootline', type: 'Event', icon: '🌳', time: 'Dec 9', title: 'Family-history evening: reading your DNA matches', desc: 'Which cousins are which, explained live.' },
  { gw: 'genetics', type: 'Event', icon: '🙋', time: 'Dec 9', title: 'Ask a geneticist anything', desc: 'The science, explained. No medical advice.' },
  { gw: 'genetics', type: 'Event', icon: '📝', time: 'Dec 12', title: 'A-level genetics revision with Ella Morgan', desc: 'Punnett squares and protein synthesis.' }
]);
})();
/* ═════════ /GENETICSXX ═════════ */
