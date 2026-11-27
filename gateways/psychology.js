/* ═════════ PSYCHOLOGYXX — an Education demo gateway (2026-11-27, Sean; build -100) ═════════
   Built with the _tools/README.md recipe. Palette (light): lecture-hall paper, indigo, warm amber.
   Home sector: Education (Sean’s list): GW_HOME.psychology = 'education' below, and 'education' is in HOME_ONLY
   (it is also listed in Mind, which keeps its own gateways). Every company, maker, pro and product is fictional; places are real.
   CARE (_tools/CARE-BRIEFS.md): studying psychology only: A-level, degree, careers, how the mind works. Never therapy,
   diagnosis or “what’s wrong with me” quizzes. Signposts: Samaritans 116 123, NHS 111 (option 2 for mental health), your GP. */
GW_HOME.psychology = 'education';
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const INDIGO = 'linear-gradient(135deg,#818CF8,#3730A3)', AMBER = 'linear-gradient(135deg,#FCD34D,#B45309)', ROSE = 'linear-gradient(135deg,#FDA4AF,#BE123C)', SLATE = 'linear-gradient(135deg,#94A3B8,#334155)';

GATEWAYS.psychology = {
  name: 'PsychologyXX', domain: 'psychologyxx.com', emoji: '🧠', sector: 'education', live: true,
  tagline: 'The Psychology Universe',
  theme: {
    bg: '#F6F6FB', text: '#15142B', cardBg: '#FFFFFF', cardBorder: 'rgba(21,20,43,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F6F6FB)', accent: '#3730A3', accentAlt: '#B45309', dark: false
  },
  gradient: 'linear-gradient(135deg,#818CF8,#3730A3,#B45309)',
  stats: { members: '3.1M', brands: '560+', agents: '30' },
  spaces: ['All Feed', 'A-level', 'Degree', 'Research', 'Careers', 'Big Ideas'],
  trending: ['#KeyStudies', '#ResearchMethods', '#MemoryAndSleep'],
  brandZones: [
    { key: 'mindspring', name: 'Mindspring', color: '#3730A3', tier: 'Founding Partner', tag: 'Psychology summer schools and online lectures' },
    { key: 'cortex-press', name: 'Cortex Press', color: '#334155', tier: 'Brand Zone', tag: 'Psychology textbooks and revision guides' },
    { key: 'recall-cards', name: 'Recall Cards', color: '#B45309', tier: 'Brand Zone', tag: 'Revision flashcards that actually stick' },
    { key: 'open-lab', name: 'Open Lab', color: '#BE123C', tier: 'Brand Zone', tag: 'Take part in real, ethical research studies' }
  ],
  apps: [
    { name: 'Study Cards', color: '#3730A3', desc: 'The key studies on flashcards: aim, method, result, criticism', key: 'study-cards', url: 'apps/study-cards.html',
      dev: 'Recall Cards', rating: '4.9', users: '1.4M', perms: ['profile', 'feed'],
      tagline: 'Know your studies cold.',
      about: 'Study Cards puts the classic psychology studies on flashcards: who, what they did, what they found and one criticism. Mark the ones you know and revise the rest.',
      features: ['Classic studies', 'Aim, method, result, criticism', 'Known and still learning', 'Share your progress'],
      shots: ['apps/study-cards/shot-1.jpg', 'apps/study-cards/shot-2.jpg', 'apps/study-cards/shot-3.jpg'],
      version: '3.0', size: '9 KB',
      updates: [ { v: '3.0', ago: 2, notes: 'Criticism on every card.' }, { v: '2.4', ago: 70, notes: 'Known and learning piles.' }, { v: '1.8', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@alevel_amira', stars: 5, ago: 1, text: 'Got through all the memory studies on the bus.' }, { who: '@hannah_ruiz_tutor', stars: 5, ago: 14, text: 'I set it for every class.' }, { who: '@uni_psych_dan', stars: 4, ago: 38, text: 'Clean and quick.' } ] },
    { name: 'Methods Helper', color: '#B45309', desc: 'Spot the variables, pick the design, ace the methods questions', key: 'methods-helper', url: 'apps/methods-helper.html',
      dev: 'Cortex Press', rating: '4.8', users: '920K', perms: ['profile', 'feed'],
      tagline: 'Research methods, made friendly.',
      about: 'Methods Helper gives you short study scenarios and asks you to find the independent and dependent variables and the design. A glossary covers sampling, ethics and reliability.',
      features: ['Scenario practice', 'IV, DV and design', 'Plain-English glossary', 'Share your score'],
      shots: ['apps/methods-helper/shot-1.jpg', 'apps/methods-helper/shot-2.jpg', 'apps/methods-helper/shot-3.jpg'],
      version: '2.2', size: '9 KB',
      updates: [ { v: '2.2', ago: 3, notes: 'Ethics glossary.' }, { v: '1.7', ago: 74, notes: 'New scenarios.' }, { v: '1.2', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@uni_psych_dan', stars: 5, ago: 2, text: 'Finally understand repeated measures.' }, { who: '@kenji_mori_lectures', stars: 5, ago: 20, text: 'I recommend it to first-years.' }, { who: '@alevel_amira', stars: 4, ago: 44, text: 'Helped with paper 2.' } ] },
    { name: 'Psych Careers', color: '#BE123C', desc: 'Where a psychology degree can take you', key: 'psych-careers', url: 'apps/psych-careers.html',
      dev: 'Mindspring', rating: '4.8', users: '610K', perms: ['profile', 'feed'],
      tagline: 'More paths than you think.',
      about: 'Psych Careers shows the jobs psychology graduates do, from clinical and educational psychology to research, HR and design, with how long training takes and what each day looks like. Save the ones that interest you.',
      features: ['Twelve careers', 'Training routes', 'Save favourites', 'Share a career'],
      shots: ['apps/psych-careers/shot-1.jpg', 'apps/psych-careers/shot-2.jpg', 'apps/psych-careers/shot-3.jpg'],
      version: '1.7', size: '9 KB',
      updates: [ { v: '1.7', ago: 1, notes: 'Design and research roles.' }, { v: '1.3', ago: 62, notes: 'Training routes.' }, { v: '1.0', ago: 170, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@alevel_amira', stars: 5, ago: 3, text: 'I didn’t know about UX research!' }, { who: '@zara_bello_careers', stars: 5, ago: 24, text: 'Accurate and encouraging.' }, { who: '@uni_psych_dan', stars: 4, ago: 52, text: 'Useful for my placement year.' } ] }
  ],
  pros: [
    { key: 'hannah-ruiz-tutor', name: 'Hannah Ruiz Psychology Tutoring', color: '#3730A3', tag: 'A-level and degree psychology tutoring', role: 'Psychology tutor',
      img: U('1786677772080-f908094ea342', 800, 800), base: 'Leeds, UK · and online', langs: 'English, Spanish', years: 9, rating: '4.9', reviewsN: 244, cur: '£',
      creds: ['Psychology degree and master’s in research methods', 'Former sixth-form teacher', 'A-level examiner'],
      about: 'Hannah makes psychology make sense: key studies, research methods and essay technique. She’s a tutor, not a therapist, and lessons are about the subject only.',
      services: [ { id: 'one', name: 'One-to-one lesson', dur: '1 hour', price: 42, desc: 'Online or in Leeds.' },
                  { id: 'essay', name: 'Essay feedback', dur: 'Within 3 days', price: 30, desc: 'Marked with exam-board criteria.' },
                  { id: 'group', name: 'Revision group', dur: '90 minutes', price: 18, desc: 'Per student, up to six.' } ],
      avail: { days: [1, 2, 3, 4], times: ['16:00', '17:30', '19:00'] },
      reviews: [ { who: '@alevel_amira', stars: 5, ago: 2, text: 'My methods marks doubled.' }, { who: '@uni_psych_dan', stars: 5, ago: 22, text: 'Clear and patient.' }, { who: '@kenji_mori_lectures', stars: 5, ago: 50, text: 'An excellent teacher.' } ],
      posts: [ { ago: 1, text: 'Evaluation tip: one well-explained criticism beats four you just list. Say why it matters for the conclusion.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'kenji-mori-lectures', name: 'Dr Kenji Mori Talks', color: '#334155', tag: 'Public lectures on memory, sleep and learning', role: 'Lecturer in cognitive psychology',
      img: U('1758600431229-191932ccee81', 800, 800), base: 'Manchester, UK', langs: 'English, Japanese', years: 24, rating: '4.9', reviewsN: 176, cur: '£',
      creds: ['Senior lecturer in cognitive psychology', 'Researches memory and sleep', 'Gives talks in schools and libraries'],
      about: 'Kenji explains how memory and learning really work, and what the research does and doesn’t show. His talks are for students, teachers and anyone curious.',
      services: [ { id: 'talk', name: 'School talk', dur: '1 hour', price: 200, desc: 'Memory and revision, for a year group.' },
                  { id: 'online', name: 'Online lecture', dur: '45 minutes', price: 120, desc: 'For classes and clubs anywhere.' },
                  { id: 'cpd', name: 'Teacher session', dur: '2 hours', price: 260, desc: 'The science of learning, for staff.' } ],
      avail: { days: [2, 4], times: ['10:00', '14:00'] },
      reviews: [ { who: '@hannah_ruiz_tutor', stars: 5, ago: 4, text: 'My students now revise properly.' }, { who: '@alevel_amira', stars: 5, ago: 28, text: 'Mind-blowing in the best way.' }, { who: '@uni_psych_dan', stars: 5, ago: 56, text: 'Inspiring.' } ],
      posts: [ { ago: 2, text: 'Rereading your notes feels like learning. Testing yourself actually is. Close the book and try to remember.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'zara-bello-careers', name: 'Zara Bello Psychology Careers', color: '#BE123C', tag: 'Careers guidance for psychology students and graduates', role: 'Careers adviser',
      img: U('1767884022291-3c4f75cd7833', 800, 800), base: 'London, UK · and online', langs: 'English, Yoruba', years: 10, rating: '4.9', reviewsN: 158, cur: '£',
      creds: ['University careers adviser', 'Psychology graduate', 'Specialises in training routes and placements'],
      about: 'Zara helps psychology students find their path: clinical training, research, education, HR, design and more, plus applications and interviews.',
      services: [ { id: 'call', name: 'Careers call', dur: '45 minutes', price: 40, desc: 'Your options, mapped out.' },
                  { id: 'cv', name: 'CV and application review', dur: 'Within 3 days', price: 35, desc: 'For placements, master’s and jobs.' },
                  { id: 'mock', name: 'Mock interview', dur: '1 hour', price: 55, desc: 'With feedback.' } ],
      avail: { days: [1, 3, 5], times: ['12:00', '18:00'] },
      reviews: [ { who: '@uni_psych_dan', stars: 5, ago: 3, text: 'Got my placement year!' }, { who: '@alevel_amira', stars: 5, ago: 30, text: 'Made me excited about the future.' }, { who: '@hannah_ruiz_tutor', stars: 5, ago: 60, text: 'I send all my students to Zara.' } ],
      posts: [ { ago: 3, text: 'Only some psychology graduates become psychologists. The rest use the same skills in research, HR, design, teaching and health. All good paths.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'psychology-students', name: 'Psychology Students', domain: 'students.psychologyxx.com', color: '#3730A3', img: U('1758270703878-de80505b6714', 900, 500),
      scope: 'Global', where: 'Wherever you study', members: 412000, online: 5480, tagline: 'Revise together, ask anything, cite your sources.',
      about: 'A-level, degree and curious learners helping each other study psychology. We talk about the subject, not personal diagnoses. If you’re struggling, please talk to your GP, call NHS 111 (option 2 for mental health) or Samaritans on 116 123. This is a demo community, not a substitute for professional help.',
      rules: ['Study talk only: no diagnosing anyone', 'Cite your sources', 'Be kind to beginners'],
      mods: ['@alevel_amira', '@uni_psych_dan'],
      threads: [ { t: 'Explain working memory like I’m twelve', by: '@alevel_amira', tag: 'MEMORY', replies: 1860, ago: 0, votes: 3920 }, { t: 'Independent groups vs repeated measures: the trick', by: '@uni_psych_dan', tag: 'METHODS', replies: 1420, ago: 1, votes: 3060 }, { t: 'Best evaluation points for Milgram?', by: '@alevel_amira', tag: 'SOCIAL', replies: 1260, ago: 2, votes: 2640 }, { t: 'Placement year: is it worth it?', by: '@uni_psych_dan', tag: 'CAREERS', replies: 980, ago: 3, votes: 2120 } ],
      events: [ { title: 'Live revision: research methods in an hour', day: 4, time: '18:00', where: 'Online' }, { title: 'Ask a psychology lecturer anything', day: 11, time: '19:00', where: 'Online' } ] },
    { key: 'manchester-psych-society', name: 'Manchester Psych Society', domain: 'manchester.psychologyxx.com', color: '#B45309', img: U('1653762379443-b2c7f1f7c627', 900, 500),
      scope: 'Local', where: 'Manchester', members: 1460, online: 34, tagline: 'Talks, study nights and coffee.',
      about: 'Psychology students and curious locals in Manchester who meet for talks, study nights and the occasional quiz. Everyone welcome, whatever your course.',
      rules: ['Everyone welcome', 'Study talk, not diagnosis', 'Bring a friend'],
      mods: ['@kenji_mori_lectures', '@uni_psych_dan'],
      threads: [ { t: 'December talk: why we forget', by: '@kenji_mori_lectures', tag: 'MEETUP', replies: 38, ago: 0, votes: 94 }, { t: 'Study night before January exams', by: '@uni_psych_dan', tag: 'STUDY', replies: 30, ago: 1, votes: 66 }, { t: 'Psychology pub quiz: team names please', by: '@uni_psych_dan', tag: 'SOCIAL', replies: 24, ago: 2, votes: 52 } ],
      events: [ { title: 'December talk: why we forget', day: 7, time: '19:00', where: 'Manchester' }, { title: 'January study night', day: 42, time: '18:30', where: 'Manchester' } ] }
  ],
  feed: [
    { av: 'PX', avBg: INDIGO, author: 'PsychologyXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'How we remember, decide, learn and get along: the science of the mind, for students and the curious. We teach psychology, we don’t diagnose. If you’re struggling, talk to your GP, call NHS 111 (option 2) or Samaritans on 116 123.',
      img: U('1559757148-5c350d0d3c56', 800, 600), eng: '♡ 28.4K · 💬 2.3K · ↗ 3.8K' },
    { av: 'AA', avBg: AMBER, author: '@alevel_amira', sub: 'A-level · Just now', badge: 'COMMUNITY',
      text: 'Swapped rereading for testing myself with flashcards. Two weeks later I could write the whole of Loftus and Palmer from memory. The research on revision is right.',
      img: U('1593698054469-2bb6fdf4b512', 800, 600), eng: '♡ 12.6K · 💬 1.5K · ↗ 1.2K' },
    { av: 'MS', avBg: INDIGO, author: 'Mindspring', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: a lecture on memory and sleep, from a real lecture hall. Why an all-nighter is the worst revision plan, and what the studies show instead. Follow <b>Mindspring</b>.',
      img: U('1758270704602-9d4103704ad4', 800, 600), eng: '♡ 16.2K · 💬 2.0K · ↗ 2.4K' },
    { av: 'OL', avBg: ROSE, author: 'Open Lab', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Take part in a real study from your sofa: twenty minutes, fully explained and ethically approved, and you can stop any time. <b>Open Lab</b> lists studies looking for volunteers.',
      img: U('1759984782632-732eea46df77', 800, 600), eng: '♡ 6.4K · 💬 480 · ↗ 620' },
    { av: 'UD', avBg: SLATE, author: '@uni_psych_dan', sub: 'Degree · 2h ago', badge: 'COMMUNITY',
      text: 'First-year statistics finally clicked when I stopped memorising tests and started asking what the question was. Our seminar group cheered. Genuinely.',
      img: U('1758270704262-ecc82b23dc37', 800, 600), eng: '♡ 7.2K · 💬 560 · ↗ 480' },
    { av: 'CP', avBg: SLATE, author: 'Cortex Press', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Every key study, one page each, with an evaluation box. The <b>A-level Psychology Companion</b>, updated for this year’s exams.',
      img: U('1434030216411-0b793f4b4173', 800, 600), eng: '♡ 5.2K · 💬 320 · ↗ 440' },
    { av: 'KM', avBg: AMBER, author: 'Dr Kenji Mori Talks', sub: 'Big Ideas · 6h ago', badge: 'PRO ZONE',
      text: 'Gave the memory talk to three hundred Year 12s today. My favourite question: “If sleep helps memory, can I revise in my sleep?” Sadly not. But sleep after revising really does help.',
      img: U('1758270704587-43339a801396', 800, 600), eng: '♡ 4.8K · 💬 300 · ↗ 380' }
  ],
  prompts: ['How does memory work?', 'What’s the difference between an IV and a DV?', 'What can I do with a psychology degree?', 'How should I revise key studies?'],
  businesses: ['clearmind-tutoring', 'insight-research']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'psychology', verified: true }, o);
Object.assign(ZONES, {
  'mindspring': brand({ key: 'mindspring', name: 'Mindspring', color: '#3730A3', gradient: INDIGO, tier: 'Founding Partner',
    tagline: 'Psychology summer schools and online lectures', stats: { followers: '312K', content: '580', products: '8' },
    ad: { badge: 'Featured', img: U('1758270703884-e1c40c43465f', 760, 760), hl: 'A week of psychology, done properly.', sub: 'Summer schools and online lectures from real researchers.', meta: 'From £15' },
    products: [
      { name: 'Summer School', price: 'From £420', tag: 'FLAGSHIP', emoji: '🎓', rating: 4.9, reviews: 1640, cat: 'courses', special: true, desc: 'Five days of lectures, labs and seminars for sixteen to eighteen-year-olds.', features: ['Bursaries available', 'Leeds and online'], review: { who: 'Amira K.', text: 'Why I applied for psychology.' } },
      { name: 'Online Lecture Pass', price: '£15 a month', tag: 'BESTSELLER', emoji: '💻', rating: 4.8, reviews: 2860, cat: 'courses', desc: 'Two live lectures a week, plus the archive.', features: ['Cancel any time'], review: { who: 'Dan R.', text: 'Like a free extra module.' } },
      { name: 'Teacher Resource Pack', price: '£35', emoji: '📁', rating: 4.8, reviews: 640, cat: 'schools', desc: 'Lesson slides and activities on memory and learning.', features: ['Editable'], review: { who: 'Hannah R.', text: 'Saved me hours.' } },
      { name: 'School Day Visit', price: '£380', tag: 'SPECIAL', emoji: '🏫', rating: 4.9, reviews: 320, cat: 'schools', special: true, desc: 'A researcher spends a day with your sixth form.', features: ['Talk and workshop'], review: { who: 'Kenji M.', text: 'Students loved it.' } }
    ],
    shopCats: [ { key: 'courses', label: 'Courses', icon: '🎓' }, { key: 'schools', label: 'For schools', icon: '🏫' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Hands up for questions on day three of the <b>Summer School</b>. Nobody wanted to leave.', img: U('1524178232363-1fb2b075b655', 800, 440), eng: '♡ 16.2K · 💬 2.0K · ↗ 2.4K', product: 0 },
      { type: 'community', who: 'Amira K.', whoBg: INDIGO, sub: 'Community · 1d', text: 'Do I need A-level psychology to study it at university?', eng: '♡ 920 · 💬 260', reply: 'Hi Amira! Usually not. Most universities don’t require it, though they often like a science or maths. Check each course’s entry requirements, and come to an online lecture to see if you love it. 🎓' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Mindspring Live · memory and sleep, a lecture', when: 'Live now', desc: 'Why all-nighters fail, and what the studies show.', registered: 9840, capacity: 24000 } ],
    about: { founded: 'Leeds · 2013', story: 'Researchers who wanted students to meet real psychology before choosing a degree. We joined PsychologyXX as Founding Partner because good science should be open to everyone.', milestones: [['2013', 'The first summer school'], ['2020', 'Online lectures'], ['2026', 'Founding Partner on PsychologyXX']], values: ['Real research', 'Bursaries for all', 'Evidence first'] } }),

  'cortex-press': brand({ key: 'cortex-press', name: 'Cortex Press', color: '#334155', gradient: SLATE, tier: 'Brand Zone',
    tagline: 'Psychology textbooks and revision guides', stats: { followers: '128K', content: '340', products: '46' },
    ad: { badge: 'New', img: U('1514369118554-e20d93546b30', 760, 760), hl: 'Every study on one page.', sub: 'Revision guides written by examiners.', meta: 'From £9' },
    products: [
      { name: 'A-level Psychology Companion', price: '£16', tag: 'FLAGSHIP', emoji: '📘', rating: 4.9, reviews: 3640, cat: 'books', special: true, desc: 'Every key study on one page, with evaluation.', features: ['All exam boards'], review: { who: 'Amira K.', text: 'My bible.' } },
      { name: 'Research Methods Made Simple', price: '£12', tag: 'BESTSELLER', emoji: '📗', rating: 4.8, reviews: 2140, cat: 'books', desc: 'Variables, designs, sampling and statistics, explained kindly.', features: ['Practice questions'], review: { who: 'Dan R.', text: 'Saved my first year.' } },
      { name: 'Introduction to Psychology', price: '£38', emoji: '📕', rating: 4.8, reviews: 860, cat: 'degree', desc: 'A first-year degree textbook.', features: ['Online quizzes'], review: { who: 'Kenji M.', text: 'I set it for my students.' } },
      { name: 'Exam Practice Papers', price: '£9', tag: 'SPECIAL', emoji: '📝', rating: 4.7, reviews: 1120, cat: 'degree', special: true, desc: 'Three full papers with mark schemes.', features: ['Model answers'], review: { who: 'Hannah R.', text: 'Exactly exam style.' } }
    ],
    shopCats: [ { key: 'books', label: 'A-level', icon: '📘' }, { key: 'degree', label: 'Degree & practice', icon: '📕' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Notebook, highlighter and one page per study. <b>Research Methods Made Simple</b> for the evenings before the exam.', img: U('1758874573188-5d7380fa647a', 800, 440), eng: '♡ 5.2K · 💬 320', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Examiner Q&A: writing top-band essays', when: 'Dec 2 · 18:30', desc: 'An examiner answers your questions, live.', registered: 1860, capacity: 5000 } ],
    about: { founded: 'Oxford · 2009', story: 'Teachers and examiners writing the books they wanted their students to have.', milestones: [['2009', 'The first guide'], ['2018', 'Degree textbooks'], ['2026', 'Brand Zone on PsychologyXX']], values: ['Written by examiners', 'Clear and kind', 'Updated every year'] } }),

  'recall-cards': brand({ key: 'recall-cards', name: 'Recall Cards', color: '#B45309', gradient: AMBER, tier: 'Brand Zone',
    tagline: 'Revision flashcards that actually stick', stats: { followers: '146K', content: '280', products: '24' },
    ad: { badge: 'Christmas', img: U('1758876020491-9560594ec362', 760, 760), hl: 'Test yourself. Remember more.', sub: 'Flashcards built on the science of memory.', meta: 'From £7' },
    products: [
      { name: 'Key Studies Deck', price: '£12', tag: 'FLAGSHIP', emoji: '🗂️', rating: 4.9, reviews: 2960, cat: 'decks', special: true, desc: 'Seventy studies: aim, method, result, criticism.', features: ['All exam boards'], review: { who: 'Amira K.', text: 'Best revision I’ve done.' } },
      { name: 'Methods Deck', price: '£9', tag: 'BESTSELLER', emoji: '📊', rating: 4.8, reviews: 1640, cat: 'decks', desc: 'Every methods term with an example.', features: ['Fifty cards'], review: { who: 'Dan R.', text: 'Pocket-sized lifesaver.' } },
      { name: 'Blank Card Pack', price: '£7', emoji: '📇', rating: 4.7, reviews: 980, cat: 'extras', desc: 'Two hundred blank cards in three colours.', features: ['Ring included'], review: { who: 'Hannah R.', text: 'Students make their own.' } },
      { name: 'Revision Bundle', price: '£24', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 540, cat: 'extras', special: true, desc: 'Both decks and a revision planner.', features: ['Gift wrapped'], review: { who: 'Zara B.', text: 'Perfect present for a student.' } }
    ],
    shopCats: [ { key: 'decks', label: 'Decks', icon: '🗂️' }, { key: 'extras', label: 'Extras', icon: '📇' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Ten minutes, twenty cards, no peeking. That’s how the <b>Key Studies Deck</b> works.', img: U('1536925155833-43e9c2b2f499', 800, 440), eng: '♡ 4.4K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Revision bundles 30% off', when: 'Dec 4 · All week', desc: 'Both decks and a planner, 30% off.', registered: 1420, capacity: 4000 } ],
    about: { founded: 'Sheffield · 2016', story: 'Two psychology teachers who used the research on memory to design better flashcards.', milestones: [['2016', 'The first deck'], ['2022', 'Study Cards app'], ['2026', 'Brand Zone on PsychologyXX']], values: ['Built on evidence', 'Small and handy', 'Fair prices'] } }),

  'open-lab': brand({ key: 'open-lab', name: 'Open Lab', color: '#BE123C', gradient: ROSE, tier: 'Brand Zone',
    tagline: 'Take part in real, ethical research studies', stats: { followers: '98.6K', content: '220', products: '3' },
    ad: { badge: 'Featured', img: U('1647613561332-3d88a6a0048e', 760, 760), hl: 'Help science. From your sofa.', sub: 'Ethically approved studies looking for volunteers.', meta: 'Free to join' },
    products: [
      { name: 'Volunteer Membership', price: '£1 a year', tag: 'FLAGSHIP', emoji: '🧪', rating: 4.8, reviews: 2140, cat: 'join', special: true, desc: 'Get matched with studies you can take part in.', features: ['Every study ethically approved', 'Stop any time'], review: { who: 'Dan R.', text: 'Fascinating to see research from inside.' } },
      { name: 'Researcher Listing', price: '£40 a study', tag: 'BESTSELLER', emoji: '📋', rating: 4.7, reviews: 640, cat: 'research', desc: 'List an approved study and find participants.', features: ['Ethics number required'], review: { who: 'Kenji M.', text: 'Recruitment in days, not months.' } },
      { name: 'Methods Workshop', price: '£25', emoji: '🧑‍🏫', rating: 4.8, reviews: 420, cat: 'research', desc: 'Online workshop on running your first study.', features: ['For students'], review: { who: 'Hannah R.', text: 'Great for dissertations.' } },
      { name: 'Open Lab Tote', price: '£10', tag: 'SPECIAL', emoji: '👜', rating: 4.6, reviews: 220, cat: 'join', special: true, desc: '“I helped science” tote bag.', features: ['Organic cotton'], review: { who: 'Amira K.', text: 'Wear it with pride.' } }
    ],
    shopCats: [ { key: 'join', label: 'Volunteers', icon: '🧪' }, { key: 'research', label: 'Researchers', icon: '📋' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'A big lecture hall, but every result started with one volunteer. Join <b>Open Lab</b>.', img: U('1606761568499-6d2451b23c66', 800, 440), eng: '♡ 3.8K · 💬 210', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'How research ethics work: a live explainer', when: 'Dec 9 · 18:00', desc: 'Consent, debriefs and your right to stop.', registered: 960, capacity: 2400 } ],
    about: { founded: 'Cambridge · 2019', story: 'Researchers who wanted studies to reach everyone, not just students on campus.', milestones: [['2019', 'Founded'], ['2023', '100,000 volunteers'], ['2026', 'Brand Zone on PsychologyXX']], values: ['Ethics first', 'Open results', 'You can always stop'] } }),

  'clearmind-tutoring': { key: 'clearmind-tutoring', kind: 'business', gw: 'psychology', name: 'Clearmind Tutoring', color: '#3730A3', gradient: INDIGO, img: U('1561089489-f13d5e730d72', 900, 500),
    tier: 'Verified', category: 'Psychology tutoring agency', tagline: 'Qualified psychology tutors, matched to you.',
    about: { founded: 'Leeds · 2014', story: 'We match A-level and degree students with qualified psychology tutors for lessons online and in person. Tutoring only: we don’t offer therapy.' },
    stats: { years: 12, staff: 120, clients: '8,400 students tutored' },
    caps: [ { name: 'A-level', detail: 'Every exam board.' }, { name: 'Degree', detail: 'Statistics and methods support.' }, { name: 'Groups', detail: 'Small revision classes.' } ],
    specs: { moq: 'One lesson', lead: '2 to 5 days', regions: 'UK and online', certs: ['DBS-checked tutors', 'Qualified teachers', 'Free first chat'] },
    supplies: [ { kind: 'brand', key: 'cortex-press', what: 'Revision guides for every student' } ],
    cases: [ { title: 'A whole class up a grade', text: 'A Bradford sixth form’s weekly group sessions lifted results.' } ],
    feed: [ { sub: 'Team · 3d', text: 'January mock revision groups now booking.' } ],
    contact: { person: 'Priya Nair, Matching', response: 'Replies within one working day' } },

  'insight-research': { key: 'insight-research', kind: 'business', gw: 'psychology', name: 'Insight Research', color: '#B45309', gradient: AMBER, img: U('1541829070764-84a7d30dd3f3', 900, 500),
    tier: 'Verified', category: 'Research participant recruitment', tagline: 'Ethical research, with the right participants.',
    about: { founded: 'Bristol · 2015', story: 'We help university teams find participants for ethically approved studies, and run accessible testing rooms in Bristol and London.' },
    stats: { years: 11, staff: 26, clients: '640 studies supported' },
    caps: [ { name: 'Recruitment', detail: 'Diverse participants, fairly paid.' }, { name: 'Testing rooms', detail: 'Quiet, accessible spaces.' }, { name: 'Online studies', detail: 'Set-up and support.' } ],
    specs: { moq: 'One study', lead: '1 to 3 weeks', regions: 'UK', certs: ['Ethics approval checked', 'Data protection trained', 'Fair participant pay'] },
    supplies: [ { kind: 'brand', key: 'open-lab', what: 'Volunteer listings' } ],
    cases: [ { title: 'A thousand voices', text: 'A memory study reached participants aged eighteen to ninety.' } ],
    feed: [ { sub: 'Lab · 5d', text: 'New accessible testing room opens in London.' } ],
    contact: { person: 'Tom Ellis, Studies', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('psychology', [
  { gw: 'psychology', zone: 'mindspring', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Mindspring Live · memory and sleep, a lecture', desc: 'Why all-nighters fail, and what the studies show.' },
  { gw: 'psychology', zone: 'cortex-press', type: 'Event', icon: '📘', time: 'Dec 2', title: 'Examiner Q&A: writing top-band essays', desc: 'An examiner answers your questions, live.' },
  { gw: 'psychology', type: 'Event', icon: '📊', time: 'Dec 1', title: 'Live revision: research methods in an hour', desc: 'Psychology Students revise together.' },
  { gw: 'psychology', zone: 'recall-cards', type: 'Sale', icon: '🗂️', time: 'Dec 4', title: 'Revision bundles 30% off', desc: 'Both decks and a planner.' },
  { gw: 'psychology', type: 'Event', icon: '🧠', time: 'Dec 4', title: 'Manchester Psych Society: why we forget', desc: 'A talk and coffee, everyone welcome.' },
  { gw: 'psychology', zone: 'open-lab', type: 'Event', icon: '🧪', time: 'Dec 9', title: 'How research ethics work: a live explainer', desc: 'Consent, debriefs and your right to stop.' },
  { gw: 'psychology', type: 'Event', icon: '🙋', time: 'Dec 8', title: 'Ask a psychology lecturer anything', desc: 'Study questions only. No personal advice.' },
  { gw: 'psychology', type: 'Event', icon: '💼', time: 'Dec 11', title: 'Psychology careers evening with Zara Bello', desc: 'Training routes, placements and jobs.' }
]);
})();
/* ═════════ /PSYCHOLOGYXX ═════════ */
