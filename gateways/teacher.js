/* ═════════ TEACHERXX — a Career demo gateway (2026-11-16, Sean) ═════════
   Built like GolfXX and ChristmasXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (light): exercise-book paper, chalkboard green, apple red, pencil yellow. Home sector: Career (Education Careers).
   Brands, pros and communities are fictional; places are real. Source of truth: _lab/careers/teacherxx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const CHALK = 'linear-gradient(135deg,#3E7A69,#1F4237)', APPLE = 'linear-gradient(135deg,#E8574E,#A52A24)', PENCIL = 'linear-gradient(135deg,#F7C548,#C98C0E)', PLUM = 'linear-gradient(135deg,#8E6BB8,#4E3473)', SKY = 'linear-gradient(135deg,#5A9BD5,#2C5F8F)';

GATEWAYS.teacher = {
  name: 'TeacherXX', domain: 'teacherxx.com', emoji: '🍎', sector: 'career', live: true,
  tagline: 'The Teacher Universe',
  theme: {
    bg: '#FBF7EE', text: '#1E2A26', cardBg: '#FFFDF8', cardBorder: 'rgba(30,42,38,.08)',
    headerBg: 'linear-gradient(180deg,#E6EFE9,#FBF7EE)', accent: '#2F5D50', accentAlt: '#D9433B', dark: false
  },
  gradient: 'linear-gradient(135deg,#1F4237,#2F5D50,#F2B632)',
  stats: { members: '6.1M', brands: '4,100+', agents: '88' },
  spaces: ['All Feed', 'Lesson Ideas', 'Classroom Kit', 'Marking & Planning', 'Wellbeing', 'Jobs & CPD'],
  trending: ['#ECTyear', '#ChristmasConcert', '#MarkingMountain'],
  brandZones: [
    { key: 'inkwell-co', name: 'Inkwell & Co', color: '#D9433B', tier: 'Founding Partner', tag: 'Classroom stationery that lasts the year' },
    { key: 'planwell', name: 'Planwell', color: '#2F5D50', tier: 'Brand Zone', tag: 'Teacher planners, made by teachers' },
    { key: 'bright-sparks-science', name: 'Bright Sparks Science', color: '#E0A21B', tier: 'Brand Zone', tag: 'Science kits that make a lesson unforgettable' },
    { key: 'story-corner', name: 'Story Corner Books', color: '#6B4E9B', tier: 'Brand Zone', tag: 'Class reading packs and library boxes' }
  ],
  apps: [
    { name: 'Seating Plan', color: '#2F5D50', desc: 'Seating plans in seconds', key: 'seating-plan', url: 'apps/seating-plan.html',
      dev: 'Staffroom Software', rating: '4.8', users: '538K', perms: ['profile', 'feed'],
      tagline: 'Who sits where, sorted before the bell.',
      about: 'Seating Plan lays out your classroom in rows or groups. Tap two pupils to swap them, shuffle the whole room, or mix by group for project work. Mark who needs to sit near the front and the shuffle keeps them there. The demo uses first names only.',
      features: ['Rows or table groups', 'Tap two seats to swap', 'Shuffle that keeps front-row needs', 'One plan per class'],
      shots: ['apps/seating-plan/shot-1.jpg', 'apps/seating-plan/shot-2.jpg', 'apps/seating-plan/shot-3.jpg'],
      version: '6.4', size: '10 KB',
      updates: [ { v: '6.4', ago: 3, notes: 'Front-row seats stay put when you shuffle.' }, { v: '6.0', ago: 100, notes: 'Table groups layout.' }, { v: '5.5', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@ect_ellie', stars: 5, ago: 2, text: 'Made my Year 9 plan in four minutes. On a Sunday night. Bliss.' }, { who: '@mr_okafor_maths', stars: 5, ago: 9, text: 'Shuffle with front-row needs is genius.' }, { who: '@ks2_kofi', stars: 4, ago: 22, text: 'Would love printing.' } ] },
    { name: 'Class Timer', color: '#D9433B', desc: 'Countdown timer and name picker', key: 'class-timer', url: 'apps/class-timer.html',
      dev: 'Inkwell & Co', rating: '4.9', users: '722K', perms: ['profile', 'feed'],
      tagline: 'Five minutes on the clock. And it’s… Amara’s turn.',
      about: 'Class Timer puts a big, clear countdown on your board for tasks and tidy-ups, and picks names at random so everyone gets a turn: nobody is picked twice until the whole class has had a go.',
      features: ['Big countdown for the board', 'One-tap 1, 3, 5 and 10 minutes', 'Fair name picker, no repeats', 'Calm chime when time is up'],
      shots: ['apps/class-timer/shot-1.jpg', 'apps/class-timer/shot-2.jpg', 'apps/class-timer/shot-3.jpg'],
      version: '9.1', size: '9 KB',
      updates: [ { v: '9.1', ago: 2, notes: 'Name picker skips anyone absent today.' }, { v: '9.0', ago: 80, notes: 'Fair picker: no repeats until all have had a turn.' }, { v: '8.2', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@ks2_kofi', stars: 5, ago: 1, text: 'My class cheer when the picker spins. Every time.' }, { who: '@head_of_year_hana', stars: 5, ago: 6, text: 'Simple, big, fair. Perfect.' }, { who: '@supply_sophie', stars: 5, ago: 15, text: 'First thing I open in a new classroom.' } ] },
    { name: 'Marking Tracker', color: '#E0A21B', desc: 'Climb the marking mountain', key: 'marking-tracker', url: 'apps/marking-tracker.html',
      dev: 'Planwell', rating: '4.7', users: '214K', perms: ['profile', 'feed'],
      tagline: 'See the pile shrink. Plan the evenings you get back.',
      about: 'Marking Tracker keeps every pile of books and assessments in one list, with a deadline and a count. Tick books off as you go and see how long is left at your own pace, so you can plan the week and protect your evenings.',
      features: ['Every pile with its deadline', 'Tick off books one by one', 'Time left at your own pace', 'Share a cleared pile to TeacherXX'],
      shots: ['apps/marking-tracker/shot-1.jpg', 'apps/marking-tracker/shot-2.jpg', 'apps/marking-tracker/shot-3.jpg'],
      version: '3.2', size: '9 KB',
      updates: [ { v: '3.2', ago: 4, notes: 'Your own minutes per book.' }, { v: '3.0', ago: 120, notes: 'Deadlines sorted soonest first.' }, { v: '2.5', ago: 250, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@mr_okafor_maths', stars: 5, ago: 3, text: 'Knowing it’s 2h 40m left makes it less scary.' }, { who: '@ect_ellie', stars: 5, ago: 10, text: 'Ticking books off is weirdly satisfying.' }, { who: '@english_dept_dee', stars: 4, ago: 27, text: 'Would love department sharing.' } ] }
  ],
  pros: [
    { key: 'ruth-ellison-coaching', name: 'Ruth Ellison Teacher Coaching', color: '#2F5D50', tag: 'Coach for early-career teachers · planning, workload, observations', role: 'Teacher coach',
      img: U('1580894732444-8ecded7900cd', 800, 800), base: 'Birmingham, UK', langs: 'English', years: 17, rating: '4.9', reviewsN: 466, cur: '£',
      creds: ['Qualified teacher, 17 years', 'Former ECT induction lead', 'NPQ in Leading Teacher Development'],
      about: 'Ruth taught English for twelve years and led early-career training in a large Birmingham trust. She coaches new teachers through the first two years: planning that does not eat your weekend, behaviour routines and feeling ready for observations.',
      services: [ { id: 'call', name: 'One-to-one coaching', dur: '45 minutes', price: 45, desc: 'Online, after school. One thing to change, and how.' },
                  { id: 'obs', name: 'Observation prep', dur: '60 minutes', price: 60, desc: 'Plan a lesson together and rehearse the tricky bits.' },
                  { id: 'term', name: 'Termly coaching (6 sessions)', dur: '6 × 45 min', price: 240, desc: 'Fortnightly sessions through a whole term.' } ],
      avail: { days: [1, 2, 3, 4, 0], times: ['16:30', '18:00', '19:30'] },
      reviews: [ { who: '@ect_ellie', stars: 5, ago: 4, text: 'I nearly quit in October. Ruth is why I didn’t.' }, { who: '@supply_sophie', stars: 5, ago: 14, text: 'Practical, kind, and fast.' }, { who: '@mr_okafor_maths', stars: 5, ago: 33, text: 'My planning time halved.' } ],
      posts: [ { ago: 1, text: 'December is the longest month in a school. Protect one evening a week, no matter what.' }, { ago: 7, text: 'Plan the questions you will ask, not just the slides you will show.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'dan-morley-behaviour', name: 'Dan Morley Behaviour Training', color: '#D9433B', tag: 'Behaviour and classroom routines · INSET days, coaching', role: 'Behaviour trainer',
      img: U('1758270704021-361c165d68fd', 800, 800), base: 'Leeds, UK', langs: 'English', years: 21, rating: '4.8', reviewsN: 352, cur: '£',
      creds: ['Former deputy head', 'Qualified teacher, 21 years', 'Trauma-informed practice trained'],
      about: 'Dan was a deputy head in Leeds for ten years. He trains staff in calm, consistent routines that work for every child, and coaches teachers one-to-one when a class has gone off the rails.',
      services: [ { id: 'one', name: 'One-to-one behaviour coaching', dur: '60 minutes', price: 55, desc: 'Talk through a class and leave with three routines to try tomorrow.' },
                  { id: 'twilight', name: 'Twilight staff session', dur: '90 minutes', price: 450, desc: 'In your school, for the whole staff.' },
                  { id: 'inset', name: 'INSET day', dur: 'Full day', price: 1200, desc: 'Routines, consistency and de-escalation for your whole school.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['16:00', '17:30'] },
      reviews: [ { who: '@head_of_year_hana', stars: 5, ago: 6, text: 'Our INSET with Dan changed corridors overnight.' }, { who: '@ect_ellie', stars: 5, ago: 17, text: 'Three routines, used the next day, worked.' }, { who: '@supply_sophie', stars: 4, ago: 38, text: 'Wish I’d found Dan years ago.' } ],
      posts: [ { ago: 2, text: 'Same words, same routine, every lesson. Consistency is kindness.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'science-show-workshops', name: 'Science Show Workshops', color: '#E0A21B', tag: 'Science shows and STEM days for schools · KS1 to KS4', role: 'School science shows',
      img: U('1758685733987-54952cd1c8c6', 800, 800), base: 'Cambridge, UK', langs: 'English', years: 13, rating: '4.9', reviewsN: 618, cur: '£',
      creds: ['Former secondary science teachers', 'Enhanced DBS checked', 'Fully risk-assessed shows'],
      about: 'Two former science teachers who bring the bangs, fizzes and foam to your school hall. Shows match the National Curriculum, and every one comes with a lesson pack for the follow-up.',
      services: [ { id: 'show', name: 'Science show (one hall)', dur: '50 minutes', price: 395, desc: 'Up to 200 pupils, any key stage, with a curriculum lesson pack.' },
                  { id: 'stem', name: 'STEM day', dur: 'Full school day', price: 895, desc: 'Workshops class by class, ending in a whole-school show.' },
                  { id: 'cpd', name: 'Practical science CPD for staff', dur: '90 minutes', price: 350, desc: 'Ten safe, cheap practicals any teacher can run.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:15', '13:15'] },
      reviews: [ { who: '@ks2_kofi', stars: 5, ago: 5, text: 'Year 5 are still talking about the elephant toothpaste.' }, { who: '@head_of_year_hana', stars: 5, ago: 20, text: 'Best STEM day we have ever had.' }, { who: '@science_sam', stars: 5, ago: 41, text: 'The staff CPD paid for itself in a week.' } ],
      posts: [ { ago: 1, text: 'Spring term STEM days are booking fast. Ask about British Science Week.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'the-staffroom', name: 'The Staffroom', domain: 'staffroom.teacherxx.com', color: '#2F5D50', img: U('1509062522246-3755977927d7', 900, 500),
      scope: 'Global', where: 'Every school', members: 84600, online: 2140, tagline: 'The kettle’s on. Pull up a chair.',
      about: 'Teachers, teaching assistants and school staff from everywhere. Lesson ideas, workload hacks, the funniest thing a child said today, and support on the hard days.',
      rules: ['No pupil names or photos, ever', 'Be kind, it is a hard job', 'Share freely, credit generously'],
      mods: ['@head_of_year_hana', '@ta_tess'],
      threads: [ { t: 'What did a child say today that made you laugh?', by: '@ks2_kofi', tag: 'STORIES', replies: 486, ago: 0, votes: 1240 }, { t: 'Christmas concert survival guide', by: '@music_mrs_m', tag: 'TIPS', replies: 212, ago: 1, votes: 520 }, { t: 'Marking feedback that takes under a minute a book', by: '@english_dept_dee', tag: 'MARKING', replies: 168, ago: 2, votes: 410 }, { t: 'How do you switch off in the holidays?', by: '@ect_ellie', tag: 'WELLBEING', replies: 134, ago: 4, votes: 288 } ],
      events: [ { title: 'Sunday night staffroom (online)', day: 0, time: '19:30', where: 'Online' }, { title: 'Christmas lesson swap', day: 4, time: '17:00', where: 'Online' } ] },
    { key: 'primary-teachers-bristol', name: 'Primary Teachers, Bristol', domain: 'bristol.teacherxx.com', color: '#D9433B', img: U('1588075592446-265fd1e6e76f', 900, 500),
      scope: 'Local', where: 'Bristol', members: 2280, online: 64, tagline: 'Glitter on everything. Coffee in everything.',
      about: 'Primary teachers and TAs across Bristol: resource swaps, moderation buddies, a termly social and a WhatsApp-free zone for planning together.',
      rules: ['No pupil names or photos', 'Resources shared freely', 'Supply teachers very welcome'],
      mods: ['@ks2_kofi', '@reception_rhi'],
      threads: [ { t: 'Year 6 writing moderation buddies?', by: '@ks2_kofi', tag: 'MODERATION', replies: 34, ago: 0, votes: 58 }, { t: 'Nativity costume swap: who has a donkey?', by: '@reception_rhi', tag: 'SWAP', replies: 61, ago: 1, votes: 112 }, { t: 'End-of-term social: date poll', by: '@ta_tess', tag: 'SOCIAL', replies: 49, ago: 2, votes: 70 } ],
      events: [ { title: 'Resource swap', day: 3, time: '16:30', where: 'Bedminster, Bristol' }, { title: 'End-of-term social', day: 5, time: '18:00', where: 'Harbourside, Bristol' } ] }
  ],
  feed: [
    { av: 'TX', avBg: CHALK, author: 'TeacherXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Lesson ideas, classroom kit, marking, coaching and the people who get you to the end of term. From your first placement to headship: teaching, all in one place.',
      img: U('1577896851231-70ef18881754', 800, 600), eng: '♡ 61.3K · 💬 7.8K · ↗ 6.2K' },
    { av: 'EE', avBg: APPLE, author: '@ect_ellie', sub: 'Jobs & CPD · Just now', badge: 'COMMUNITY',
      text: 'First formal observation as an ECT today and it went WELL. Ruth Ellison’s prep session, a seating plan that finally works, and a Year 9 class that rose to it 🍎',
      img: U('1758270703928-6a8597669abc', 800, 600), eng: '♡ 14.9K · 💬 2.3K · ↗ 680' },
    { av: 'IC', avBg: APPLE, author: 'Inkwell & Co', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Classroom Pencil Pot</b>: 144 pencils that do not snap when sharpened, in a tin that survives Year 3. Free delivery to schools.',
      img: U('1629652487043-fb2825838f8c', 800, 600), eng: '♡ 11.2K · 💬 940 · ↗ 1.4K' },
    { av: 'PW', avBg: CHALK, author: 'Planwell', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Spring term inserts are here: the <b>Planwell Academic Planner</b> refills from January to July, with a marking tracker on every week.',
      img: U('1632772998001-cc9bf6f7c852', 800, 600), eng: '♡ 6.4K · 💬 510 · ↗ 620' },
    { av: 'KK', avBg: PENCIL, author: '@ks2_kofi', sub: 'Lesson Ideas · 2h ago', badge: 'COMMUNITY',
      text: 'Microscopes out in Year 5 today: onion skin cells, and thirty gasps at once. Best lesson of the term 🔬',
      img: U('1518152006812-edab29b069ac', 800, 600), eng: '♡ 7.1K · 💬 860 · ↗ 410' },
    { av: 'BS', avBg: PENCIL, author: 'Bright Sparks Science', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'The <b>Kitchen Chemistry Class Kit</b>: thirty safe experiments for a class of thirty, with goggles, a risk assessment and lesson plans in the box.',
      img: U('1633828763399-e29f1cd3f4c1', 800, 600), eng: '♡ 4.8K · 💬 330 · ↗ 520' },
    { av: 'SC', avBg: PLUM, author: 'Story Corner Books', sub: 'Brand Zone · 6h ago', badge: 'BRAND ZONE',
      text: 'Our <b>Winter Reading Box</b> for KS2: twenty-five books chosen by teachers, ready for the last weeks of term and the holidays.',
      img: U('1583468982228-19f19164aee2', 800, 600), eng: '♡ 3.9K · 💬 280 · ↗ 360' }
  ],
  prompts: ['Plan a 50-minute Year 8 lesson on the water cycle', 'How do I cut my marking time without cutting feedback?', 'Book a science show for a primary school in Cambridge', 'Ideas for the last day of the Christmas term'],
  businesses: ['brightboard-classroom', 'ashgrove-furniture']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'teacher', verified: true }, o);
Object.assign(ZONES, {
  'inkwell-co': brand({ key: 'inkwell-co', name: 'Inkwell & Co', color: '#D9433B', gradient: APPLE, tier: 'Founding Partner',
    tagline: 'Classroom stationery that lasts the year', stats: { followers: '168K', content: '1.1K', products: '320' },
    ad: { badge: 'Featured', img: U('1629652487043-fb2825838f8c', 760, 760), hl: 'The Classroom Pencil Pot.', sub: '144 pencils that do not snap, in a tin that survives Year 3.', meta: 'From £4' },
    products: [
      { name: 'Classroom Pencil Pot (144)', price: '£29', tag: 'FLAGSHIP', emoji: '✏️', rating: 4.9, reviews: 4120, cat: 'pencils', special: true, desc: 'HB pencils with bonded leads that do not snap when sharpened, in a sturdy tin.', features: ['Bonded leads', 'Pre-sharpened', 'Refills available'], review: { who: 'Kofi A.', text: 'Lasted the whole autumn term. Unheard of.' } },
      { name: 'Colouring Pencils, Class Pack (288)', price: '£34', tag: 'BESTSELLER', emoji: '🖍️', rating: 4.8, reviews: 3260, cat: 'pencils', desc: 'Twenty-four colours, twelve of each, soft and bright.', features: ['24 colours', 'Sorting tray'], review: { who: 'Rhi P.', text: 'Bright colours, no waxy mess.' } },
      { name: 'Whiteboard Pens (48)', price: '£22', emoji: '🖊️', rating: 4.7, reviews: 2840, cat: 'pens', special: true, desc: 'Low-odour pens that wipe clean and last.', features: ['Four colours', 'Low odour'], review: { who: 'Ellie W.', text: 'They actually last more than a week.' } },
      { name: 'Exercise Books (50)', price: '£18', emoji: '📓', rating: 4.8, reviews: 1980, cat: 'books', desc: 'A4 exercise books, lined or squared, recycled paper.', features: ['Recycled paper', 'Name panel'], review: { who: 'Dee R.', text: 'Nice paper, no bleed-through.' } },
      { name: 'Teacher’s Desk Kit', price: '£4', tag: 'GIFT', emoji: '🎁', rating: 4.6, reviews: 880, cat: 'pens', desc: 'Red pen, green pen, stickers and a stamp: the marking basics.', features: ['Stamp says “Well done!”'], review: { who: 'Sophie L.', text: 'Brilliant little gift for my TA.' } }
    ],
    shopCats: [ { key: 'pencils', label: 'Pencils', icon: '✏️' }, { key: 'pens', label: 'Pens & markers', icon: '🖊️' }, { key: 'books', label: 'Exercise books', icon: '📓' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 3h', text: 'The <b>Classroom Pencil Pot</b>: 144 pencils that make it to July.', img: U('1629652487043-fb2825838f8c', 800, 440), eng: '♡ 11.2K · 💬 940 · ↗ 1.4K', product: 0 },
      { type: 'post', sub: 'In the box · Yesterday', text: 'Every colouring class pack is sorted by colour, so tidy-up takes thirty seconds.', img: U('1501349800519-48093d60bde0', 800, 440), eng: '♡ 5.6K · 💬 310' },
      { type: 'community', who: 'Ellie W.', whoBg: CHALK, sub: 'Community · 1d', text: 'ECT with a tiny budget. What should I buy first for my classroom?', eng: '♡ 204 · 💬 62', reply: 'Welcome, Ellie! Start with Whiteboard Pens and a Teacher’s Desk Kit; most schools supply the books and pencils. Our ECT discount takes 20% off your first order with your school email. ✏️' }
    ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Order for delivery before term ends', when: 'Dec 11 · 23:59', desc: 'School orders placed by 11 December arrive before the end of term.', registered: 2480, capacity: 6000 } ],
    about: { founded: 'Keswick · 1932', story: 'Pencil-makers in the Lake District for nearly a century, now making stationery for classrooms. We joined GENEXXO as TeacherXX’s Founding Partner because this is where teachers gather.', milestones: [['1932', 'The first pencils made in Keswick'], ['2004', 'The Classroom Pencil Pot'], ['2026', 'Founding Partner on TeacherXX']], values: ['Made to last a school year', 'Recycled where we can', 'Free delivery to schools'] } }),

  'planwell': brand({ key: 'planwell', name: 'Planwell', color: '#2F5D50', gradient: CHALK, tier: 'Brand Zone',
    tagline: 'Planners made by teachers', stats: { followers: '94.2K', content: '480', products: '46' },
    ad: { badge: 'New', img: U('1632772998001-cc9bf6f7c852', 760, 760), hl: 'Spring term inserts.', sub: 'January to July, with a marking tracker on every week.', meta: 'From £6' },
    products: [
      { name: 'Planwell Academic Planner', price: '£28', tag: 'FLAGSHIP', emoji: '📘', rating: 4.9, reviews: 3840, cat: 'planners', special: true, desc: 'A refillable September-to-July planner with timetable, seating and marking pages.', features: ['Refillable', 'Lesson, marking and seating pages', 'Lies flat'], review: { who: 'Hana Y.', text: 'Fourth year with Planwell. Can’t teach without it.' } },
      { name: 'Spring Term Inserts', price: '£12', tag: 'NEW', emoji: '🗓️', rating: 4.8, reviews: 1260, cat: 'inserts', desc: 'January to July refill pages for the Academic Planner.', features: ['Ready for January'], review: { who: 'Ellie W.', text: 'Fresh start for spring.' } },
      { name: 'Class Record Book', price: '£14', emoji: '📗', rating: 4.8, reviews: 1640, cat: 'planners', desc: 'Marks, attendance and notes for up to eight classes.', features: ['Eight classes', 'Tabbed sections'], review: { who: 'Dee R.', text: 'Everything for parents’ evening in one place.' } },
      { name: 'Sticky Planning Notes', price: '£6', emoji: '🟨', rating: 4.7, reviews: 2210, cat: 'inserts', desc: 'Lesson-shaped sticky notes that fit every planner page.', features: ['Six designs'], review: { who: 'Sophie L.', text: 'Cover work notes, sorted.' } },
      { name: 'Personalised Cover', price: '£8', tag: 'PERSONALISED', emoji: '✍️', rating: 4.9, reviews: 980, cat: 'planners', special: true, desc: 'Your name and subject on the cover, in gold foil.', features: ['Gold foil', 'Ready in 3 days'], review: { who: 'Kofi A.', text: 'Mr Asante, Year 5. Feels official.' } }
    ],
    shopCats: [ { key: 'planners', label: 'Planners', icon: '📘' }, { key: 'inserts', label: 'Inserts & notes', icon: '🗓️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Spring term inserts are here: <b>January to July</b>, ready to clip in.', img: U('1506784983877-45594efa4cbe', 800, 440), eng: '♡ 6.4K · 💬 510', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Spring inserts before January', when: 'Dec 12 · 23:59', desc: 'Order spring term inserts by 12 December to have them for the first day back.', registered: 1860, capacity: 5000 } ],
    about: { founded: 'York · 2013', story: 'A maths teacher who designed her own planner because none fitted the job. Every page is tested in real classrooms.', milestones: [['2013', 'The first Planwell, printed for one staffroom'], ['2020', 'Refillable inserts'], ['2026', 'Brand Zone on TeacherXX']], values: ['Designed by teachers', 'Refill, do not replace', 'Printed in the UK'] } }),

  'bright-sparks-science': brand({ key: 'bright-sparks-science', name: 'Bright Sparks Science', color: '#E0A21B', gradient: PENCIL, tier: 'Brand Zone',
    tagline: 'Lessons they will remember', stats: { followers: '58.3K', content: '340', products: '64' },
    ad: { badge: 'Featured', img: U('1758685734030-a31d96462eec', 760, 760), hl: 'Kitchen Chemistry Class Kit.', sub: 'Thirty safe experiments for a class of thirty.', meta: 'From £9' },
    products: [
      { name: 'Kitchen Chemistry Class Kit', price: '£89', tag: 'FLAGSHIP', emoji: '🧪', rating: 4.9, reviews: 1460, cat: 'kits', special: true, desc: 'Thirty safe experiments with goggles, risk assessment and lesson plans.', features: ['For 30 pupils', 'Risk assessment included', 'KS2 and KS3'], review: { who: 'Kofi A.', text: 'Everything in one box. Year 5 loved it.' } },
      { name: 'Classroom Microscope Set (6)', price: '£149', emoji: '🔬', rating: 4.8, reviews: 620, cat: 'kits', desc: 'Six sturdy LED microscopes with prepared slides.', features: ['LED light', '40× to 400×', '30 prepared slides'], review: { who: 'Sam B.', text: 'Robust enough for Year 4.' } },
      { name: 'Elephant Toothpaste Demo Kit', price: '£24', tag: 'BESTSELLER', emoji: '🐘', rating: 4.9, reviews: 2380, cat: 'demos', special: true, desc: 'The foamy classic, with everything for five demos and a safety card.', features: ['Five demos', 'Teacher-only safety card'], review: { who: 'Hana Y.', text: 'The gasp is worth every penny.' } },
      { name: 'Safety Goggles (30)', price: '£45', emoji: '🥽', rating: 4.7, reviews: 1140, cat: 'safety', desc: 'Child-size goggles with soft straps, anti-fog.', features: ['EN 166', 'Child size'], review: { who: 'Rhi P.', text: 'Fit the little ones properly.' } },
      { name: 'Lesson Plan Pack (KS2)', price: '£9', emoji: '📄', rating: 4.8, reviews: 860, cat: 'demos', desc: 'Twelve practical science lessons matched to the curriculum.', features: ['Printable', 'Curriculum-mapped'], review: { who: 'Ellie W.', text: 'Saved me a weekend.' } }
    ],
    shopCats: [ { key: 'kits', label: 'Class kits', icon: '🧪' }, { key: 'demos', label: 'Demos & plans', icon: '🐘' }, { key: 'safety', label: 'Safety', icon: '🥽' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Thirty experiments, one box: the <b>Kitchen Chemistry Class Kit</b>.', img: U('1633828763399-e29f1cd3f4c1', 800, 440), eng: '♡ 4.8K · 💬 330', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'LIVE LESSON', title: 'Elephant toothpaste, live to classrooms', when: 'Live now · Online', desc: 'A free live science lesson for KS2 classes, with a worksheet to follow.', registered: 1840, capacity: 5000 } ],
    about: { founded: 'Cambridge · 2012', story: 'Two former science teachers who wanted every school to run real practicals, whatever the budget.', milestones: [['2012', 'The first Kitchen Chemistry kit'], ['2022', 'Live lessons for classrooms'], ['2026', 'Brand Zone on TeacherXX']], values: ['Safe and simple', 'Curriculum-matched', 'Refills, not replacements'] } }),

  'story-corner': brand({ key: 'story-corner', name: 'Story Corner Books', color: '#6B4E9B', gradient: PLUM, tier: 'Brand Zone',
    tagline: 'The right book for every reader', stats: { followers: '72.6K', content: '620', products: '140' },
    ad: { badge: 'Featured', img: U('1583468982228-19f19164aee2', 760, 760), hl: 'The Winter Reading Box.', sub: 'Twenty-five books for KS2, chosen by teachers.', meta: 'From £5' },
    products: [
      { name: 'Winter Reading Box (KS2, 25 books)', price: '£119', tag: 'FLAGSHIP', emoji: '📚', rating: 4.9, reviews: 1180, cat: 'boxes', special: true, desc: 'Twenty-five books for 7 to 11 year olds, with discussion cards.', features: ['25 books', 'Discussion cards', 'Mixed reading levels'], review: { who: 'Kofi A.', text: 'Every child found something.' } },
      { name: 'Class Reader Set (30 copies)', price: '£165', emoji: '📖', rating: 4.8, reviews: 640, cat: 'sets', desc: 'Thirty copies of one novel, with a teaching guide.', features: ['30 copies', 'Teaching guide'], review: { who: 'Dee R.', text: 'Saved hours of planning.' } },
      { name: 'Early Readers Library Box', price: '£79', tag: 'BESTSELLER', emoji: '🧸', rating: 4.9, reviews: 1520, cat: 'boxes', special: true, desc: 'Forty picture and phonics books for Reception and KS1.', features: ['40 books', 'Phonics-matched'], review: { who: 'Rhi P.', text: 'My reading corner is transformed.' } },
      { name: 'Reading Corner Cushions (4)', price: '£48', emoji: '🛋️', rating: 4.7, reviews: 560, cat: 'corner', desc: 'Washable floor cushions for the reading corner.', features: ['Washable covers'], review: { who: 'Tess B.', text: 'Comfiest corner in school.' } },
      { name: 'Bookplates for Gifting (50)', price: '£5', emoji: '🏷️', rating: 4.8, reviews: 780, cat: 'corner', desc: '“This book belongs to…” bookplates for end-of-year gift books.', features: ['Fifty plates'], review: { who: 'Ellie W.', text: 'Gave every child a book with one.' } }
    ],
    shopCats: [ { key: 'boxes', label: 'Reading boxes', icon: '📚' }, { key: 'sets', label: 'Class sets', icon: '📖' }, { key: 'corner', label: 'Reading corner', icon: '🛋️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 6h', text: 'The <b>Winter Reading Box</b>: twenty-five books, chosen by teachers.', img: U('1497633762265-9d179a990aa6', 800, 440), eng: '♡ 3.9K · 💬 280', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'LAUNCH', title: 'Christmas reading list launch', when: 'Dec 2 · Online', desc: 'Our teacher panel picks the twenty best books of the year for every key stage.', registered: 3120, capacity: 8000 } ],
    about: { founded: 'Hay-on-Wye · 2008', story: 'A school librarian and a bookseller from the town of books. We choose every title with a panel of working teachers.', milestones: [['2008', 'The first school library box'], ['2019', 'The teacher panel begins'], ['2026', 'Brand Zone on TeacherXX']], values: ['Chosen by teachers', 'Every reader matters', 'Books for keeps'] } }),

  'brightboard-classroom': { key: 'brightboard-classroom', kind: 'business', gw: 'teacher', name: 'Brightboard Classroom Tech', color: '#5A9BD5', gradient: SKY, img: U('1580582932707-520aed937b7b', 900, 500),
    tier: 'Verified', category: 'Classroom technology', tagline: 'Interactive displays and classroom audio-visual for schools.',
    about: { founded: 'Reading · 2006', story: 'We fit interactive displays, visualisers and classroom audio in schools and colleges, train the staff and look after it all for five years.' },
    stats: { years: 20, staff: 210, clients: '2,600+ schools' },
    caps: [ { name: 'Interactive displays', detail: 'Supplied, fitted and set up with your school’s accounts.' }, { name: 'Staff training', detail: 'Short twilight sessions so every teacher is confident on day one.' }, { name: 'Five-year care', detail: 'Repairs and swaps included, usually within 48 hours.' } ],
    specs: { moq: '1 classroom', lead: '2–4 weeks; holiday installs booked early', regions: 'UK', certs: ['DfE framework supplier', 'ISO 9001', 'Cyber Essentials'] },
    supplies: [ { kind: 'brand', key: 'bright-sparks-science', what: 'Visualisers for live science lessons' } ],
    cases: [ { title: 'Primary trust, West Midlands', text: 'Eighty classrooms fitted over one summer holiday, with staff trained in September.' } ],
    feed: [ { sub: 'Installs · 3d', text: 'Christmas holiday installs: three slots left for December.' }, { sub: 'Tips · 1w', text: 'A visualiser is the cheapest upgrade a classroom can get.' } ],
    contact: { person: 'Priya Desai, School partnerships', response: 'Replies within 24 hours' } },

  'ashgrove-furniture': { key: 'ashgrove-furniture', kind: 'business', gw: 'teacher', name: 'Ashgrove School Furniture', color: '#2F5D50', gradient: CHALK, img: U('1635424239131-32dc44986b56', 900, 500),
    tier: 'Verified', category: 'School furniture', tagline: 'Classroom furniture, built to last a generation.',
    about: { founded: 'High Wycombe · 1958', story: 'We make school tables, chairs and storage in the Chilterns, from FSC timber, and we repair and refurbish what schools already have.' },
    stats: { years: 68, staff: 160, clients: '5,000+ schools' },
    caps: [ { name: 'Classroom furniture', detail: 'Tables and chairs in every school size, made to order.' }, { name: 'Libraries and reading corners', detail: 'Shelving, kinderboxes and soft seating.' }, { name: 'Refurbishment', detail: 'Old furniture repaired and refinished instead of replaced.' } ],
    specs: { moq: '1 classroom set', lead: '4–8 weeks', regions: 'UK', certs: ['FSC certified', 'BS EN 1729', 'ISO 14001'] },
    supplies: [ { kind: 'brand', key: 'story-corner', what: 'Kinderboxes for Story Corner library boxes' } ],
    cases: [ { title: 'Victorian school, Bristol', text: 'Two hundred chairs refurbished instead of replaced, saving the school £18,000.' } ],
    feed: [ { sub: 'Workshop · 5d', text: 'Summer refurbishment slots for 2027 are open. Book early.' } ],
    contact: { person: 'Martin Hale, Schools', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('teacher', [
  { gw: 'teacher', zone: 'bright-sparks-science', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Bright Sparks Live · Elephant Toothpaste', desc: 'A free live science lesson streamed to KS2 classrooms, with a worksheet to follow along.' },
  { gw: 'teacher', type: 'Event', icon: '☕', time: 'Nov 22', title: 'The Staffroom: Sunday night check-in', desc: 'An online cuppa before the week starts. Bring your planning, or don’t.' },
  { gw: 'teacher', type: 'Event', icon: '🔬', time: 'Nov 28', title: 'Science show tour, Cambridge', desc: 'Science Show Workshops: open show for teachers thinking of booking a STEM day.' },
  { gw: 'teacher', zone: 'story-corner', type: 'Event', icon: '📚', time: 'Dec 2', title: 'Christmas reading list launch', desc: 'Story Corner Books: the teacher panel’s twenty best books of the year. Online.' },
  { gw: 'teacher', type: 'Event', icon: '🎒', time: 'Dec 3', title: 'Bristol primary resource swap', desc: 'Primary Teachers, Bristol: bring what you don’t need, take what you do.' },
  { gw: 'teacher', zone: 'inkwell-co', type: 'Deadline', icon: '✏️', time: 'Dec 11', title: 'Order for delivery before term ends', desc: 'Inkwell & Co: school orders placed by midnight arrive before the holidays.' },
  { gw: 'teacher', zone: 'planwell', type: 'Deadline', icon: '🗓️', time: 'Dec 12', title: 'Spring inserts before January', desc: 'Planwell: order by midnight to have them for the first day back.' },
  { gw: 'teacher', type: 'Event', icon: '🧭', time: 'Jan 8', title: 'Behaviour CPD day, Leeds', desc: 'Dan Morley: calm, consistent routines for the new term. Open to all schools.' }
]);
})();
/* ═════════ /TEACHERXX ═════════ */
