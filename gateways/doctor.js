/* ═════════ DOCTORXX — a Career demo gateway (2026-11-16, Sean) ═════════
   Built like GolfXX and ChristmasXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (dark): night-ward teal, scrub teal, heart coral. Home sector: Career (Healthcare Careers).
   Brands, pros and communities are fictional; places are real. Source of truth: _lab/careers/doctorxx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const TEAL = 'linear-gradient(135deg,#19B3A6,#0B5E58)', CORAL = 'linear-gradient(135deg,#FF7B7B,#C23B4E)', INDIGO = 'linear-gradient(135deg,#7A6CF0,#3B2F99)', SLATE = 'linear-gradient(135deg,#4F7A8C,#1E3A47)';

GATEWAYS.doctor = {
  name: 'DoctorXX', domain: 'doctorxx.com', emoji: '🩺', sector: 'career', live: true,
  tagline: 'The Doctor Universe',
  theme: {
    bg: '#071A1F', text: '#E8F3F1', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(25,179,166,.16)',
    headerBg: 'linear-gradient(180deg,#0E3B41,#071A1F)', accent: '#19B3A6', accentAlt: '#FF6B6B', dark: true
  },
  gradient: 'linear-gradient(135deg,#0E3B41,#19B3A6,#FF6B6B)',
  stats: { members: '2.9M', brands: '1,600+', agents: '64' },
  spaces: ['All Feed', 'Exams & Training', 'On Shift', 'Kit & Scrubs', 'Wellbeing', 'Careers & Jobs'],
  trending: ['#NightShift', '#ExamSeason', '#DoctorsWellbeing'],
  brandZones: [
    { key: 'ward-weave', name: 'Ward & Weave', color: '#19B3A6', tier: 'Founding Partner', tag: 'Scrubs made for a thirteen-hour shift' },
    { key: 'auscult', name: 'Auscult', color: '#E05A5A', tier: 'Brand Zone', tag: 'Stethoscopes, engraved and serviced for life' },
    { key: 'ward-round-press', name: 'Ward Round Press', color: '#6C5CE7', tier: 'Brand Zone', tag: 'Question banks, handbooks and exam courses' },
    { key: 'bleepwise', name: 'Bleepwise', color: '#4F7A8C', tier: 'Brand Zone', tag: 'Wipe-clean pocket kit for the ward' }
  ],
  apps: [
    { name: 'Shift Rota', color: '#19B3A6', desc: 'Your rota, your hours and your rest', key: 'shift-rota', url: 'apps/shift-rota.html',
      dev: 'Night Ward Software', rating: '4.8', users: '412K', perms: ['profile', 'feed'],
      tagline: 'Know your week before it starts.',
      about: 'Shift Rota lays out your next two weeks of long days, nights and days off, adds up your hours and flags any gap between shifts shorter than eleven hours. Tap a day to change it when you swap. When the week is done, share it to the DoctorXX feed.',
      features: ['Two weeks of shifts at a glance', 'Hours this week and across the rota', 'Short rest gaps flagged', 'Tap a day to swap a shift'],
      shots: ['apps/shift-rota/shot-1.jpg', 'apps/shift-rota/shot-2.jpg', 'apps/shift-rota/shot-3.jpg'],
      version: '5.2', size: '10 KB',
      updates: [ { v: '5.2', ago: 4, notes: 'Nights in a row counted on the week view.' }, { v: '5.0', ago: 90, notes: 'Rest-gap checks between shifts.' }, { v: '4.6', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@fy1_femi', stars: 5, ago: 2, text: 'Finally know how many hours I actually did this week.' }, { who: '@reg_rosa', stars: 5, ago: 7, text: 'The rest-gap warning caught a swap I should never have agreed to.' }, { who: '@gp_trainee_gus', stars: 4, ago: 18, text: 'Would love a calendar export.' } ] },
    { name: 'CPD Log', color: '#FF6B6B', desc: 'Your CPD credits for appraisal', key: 'cpd-log', url: 'apps/cpd-log.html',
      dev: 'Ward Round Press', rating: '4.7', users: '188K', perms: ['profile', 'feed'],
      tagline: 'Fifty credits, logged as you go.',
      about: 'CPD Log keeps your continuing professional development in one place: courses, teaching, reading and reflection, each with its credits. See how far you are towards a year’s target, split into clinical, non-clinical and personal, ready for your appraisal. Many UK colleges ask for 50 credits a year; check your own.',
      features: ['Log an activity in seconds', 'Progress towards your yearly target', 'Clinical, non-clinical and personal', 'A short reflection with every entry'],
      shots: ['apps/cpd-log/shot-1.jpg', 'apps/cpd-log/shot-2.jpg', 'apps/cpd-log/shot-3.jpg'],
      version: '3.4', size: '9 KB',
      updates: [ { v: '3.4', ago: 6, notes: 'Reflection prompts on every entry.' }, { v: '3.0', ago: 120, notes: 'Split by category for appraisal.' }, { v: '2.6', ago: 260, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@consultant_kemi', stars: 5, ago: 3, text: 'Appraisal prep went from a weekend to an hour.' }, { who: '@reg_rosa', stars: 5, ago: 11, text: 'Logging on the bus home actually works.' }, { who: '@locum_leo', stars: 4, ago: 24, text: 'Good. Would like certificate photos.' } ] },
    { name: 'Exam Cards', color: '#7A6CF0', desc: 'Spaced-repetition revision cards', key: 'exam-cards', url: 'apps/exam-cards.html',
      dev: 'Bleep Labs', rating: '4.8', users: '265K', perms: ['profile', 'feed'],
      tagline: 'Ten minutes a day, between bleeps.',
      about: 'Exam Cards is a revision deck that learns what you know. Cards you get right come back less often; cards you miss come back soon. This demo carries anatomy, physiology and biochemistry basics for finals and the early membership exams.',
      features: ['Anatomy, physiology and biochemistry decks', 'Spaced repetition in three boxes', 'A daily streak', 'Share a mastered deck to DoctorXX'],
      shots: ['apps/exam-cards/shot-1.jpg', 'apps/exam-cards/shot-2.jpg', 'apps/exam-cards/shot-3.jpg'],
      version: '6.1', size: '10 KB',
      updates: [ { v: '6.1', ago: 2, notes: 'Biochemistry deck added.' }, { v: '6.0', ago: 75, notes: 'Three-box spaced repetition.' }, { v: '5.4', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@mrcp_maya', stars: 5, ago: 1, text: 'Doing ten cards on every break. It adds up.' }, { who: '@med_student_sam', stars: 5, ago: 9, text: 'Finals revision that fits in a coffee queue.' }, { who: '@fy1_femi', stars: 4, ago: 20, text: 'More decks please, pharmacology next?' } ] }
  ],
  pros: [
    { key: 'dr-priya-nair-tutoring', name: 'Dr Priya Nair Exam Tutoring', color: '#7A6CF0', tag: 'Membership exam tutor · MRCP Part 1, Part 2 and PACES', role: 'Exam tutor',
      img: U('1758691462651-611d730c5272', 800, 800), base: 'London, UK', langs: 'English, Malayalam', years: 11, rating: '4.9', reviewsN: 612, cur: '£',
      creds: ['Consultant physician', 'MRCP(UK)', 'Medical education fellowship'],
      about: 'Priya is a consultant physician in London who has tutored doctors through the membership exams for eleven years. Small groups, past-paper technique and mock PACES stations with real feedback.',
      services: [ { id: 'one', name: 'One-to-one exam session', dur: '60 minutes', price: 70, desc: 'A plan for your weak topics and the question technique to go with it.' },
                  { id: 'group', name: 'Small-group course (4 weeks)', dur: '4 × 2 hours', price: 240, desc: 'Six doctors, weekly evening sessions, timed papers and review.' },
                  { id: 'paces', name: 'Mock PACES carousel', dur: 'Half day', price: 180, desc: 'Five stations with examiners and written feedback on every one.' } ],
      avail: { days: [1, 2, 3, 4, 6], times: ['18:30', '19:30', '10:00'] },
      reviews: [ { who: '@mrcp_maya', stars: 5, ago: 4, text: 'Passed Part 1 at the second go after four weeks with Priya.' }, { who: '@reg_rosa', stars: 5, ago: 13, text: 'The mock PACES was harder than the real thing. Good.' }, { who: '@locum_leo', stars: 5, ago: 30, text: 'Clear, kind and very organised.' } ],
      posts: [ { ago: 1, text: 'Spring sitting: start a timed paper a week from now and you will thank yourself in March.' }, { ago: 6, text: 'Read the last line of the question first. Then the stem.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'dr-tom-hale-careers', name: 'Dr Tom Hale Medical Careers', color: '#19B3A6', tag: 'Career coaching for doctors · specialty applications, interviews, portfolio', role: 'Careers coach',
      img: U('1758691463582-11aea602cd4a', 800, 800), base: 'Manchester, UK', langs: 'English', years: 9, rating: '4.8', reviewsN: 344, cur: '£',
      creds: ['GP and medical educator', 'Specialty interview panel experience', 'ICF-trained coach'],
      about: 'Tom is a GP and coach who helps doctors choose a specialty, build a portfolio that scores, and walk into interviews ready. Also there for the bigger question: is this still the right path?',
      services: [ { id: 'call', name: 'Career clarity call', dur: '45 minutes', price: 55, desc: 'Talk through your options and leave with a short written plan.' },
                  { id: 'portfolio', name: 'Portfolio review', dur: '60 minutes', price: 85, desc: 'Scored against the self-assessment criteria, with what to do next.' },
                  { id: 'mock', name: 'Mock specialty interview', dur: '75 minutes', price: 110, desc: 'Two stations, recorded, with detailed feedback.' } ],
      avail: { days: [1, 3, 4, 5], times: ['17:30', '19:00', '20:00'] },
      reviews: [ { who: '@fy1_femi', stars: 5, ago: 5, text: 'Helped me see why I kept circling back to anaesthetics.' }, { who: '@gp_trainee_gus', stars: 5, ago: 16, text: 'Mock interview was the reason I got my first choice.' }, { who: '@consultant_kemi', stars: 4, ago: 40, text: 'Sent two of my trainees. Both thrived.' } ],
      posts: [ { ago: 2, text: 'Application season: your portfolio evidence should be ready before the window opens, not during it.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'kwame-mensah-surgical-skills', name: 'Mr Kwame Mensah Surgical Skills', color: '#FF6B6B', tag: 'Suturing and basic surgical skills courses · core surgical training prep', role: 'Surgical skills tutor',
      img: U('1769072610024-5b8a50f05c73', 800, 800), base: 'Birmingham, UK', langs: 'English, Twi', years: 14, rating: '4.9', reviewsN: 428, cur: '£',
      creds: ['Consultant general surgeon', 'FRCS', 'Simulation faculty'],
      about: 'Kwame runs small-group skills days in Birmingham for students and junior doctors: knots, suturing and the basics of theatre, on simulation tissue, with a consultant at your elbow the whole time.',
      services: [ { id: 'suture', name: 'Suturing workshop', dur: '3 hours', price: 95, desc: 'Instrument ties, interrupted and continuous sutures, on simulation skin.' },
                  { id: 'skills', name: 'Basic surgical skills day', dur: 'Full day', price: 220, desc: 'Knots, suturing, theatre etiquette and a laparoscopic trainer.' },
                  { id: 'cst', name: 'Core surgical training prep', dur: '90 minutes', price: 120, desc: 'Portfolio scoring and a mock interview with a consultant.' } ],
      avail: { days: [6, 0, 3], times: ['09:00', '13:30', '18:00'] },
      reviews: [ { who: '@med_student_sam', stars: 5, ago: 6, text: 'Left the suturing workshop actually confident.' }, { who: '@fy1_femi', stars: 5, ago: 19, text: 'The skills day is the best £220 I have spent in medicine.' }, { who: '@locum_leo', stars: 4, ago: 35, text: 'Brilliant. Bring a snack, it is a long day.' } ],
      posts: [ { ago: 1, text: 'December skills day has four places left. Simulation tissue, real instruments, a consultant per three.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'night-shift-club', name: 'The Night Shift Club', domain: 'nights.doctorxx.com', color: '#19B3A6', img: U('1516574187841-cb9cc2ca948b', 900, 500),
      scope: 'Global', where: 'Every ward, 3am', members: 48200, online: 1260, tagline: 'Awake when everyone else is asleep. Never alone.',
      about: 'Doctors, nurses and everyone else working nights. We share tips for sleeping in the day, food that works at 4am, the moments that made a long shift worth it, and a quiet word when it did not.',
      rules: ['Be kind, everyone here is tired', 'No patient details, ever', 'Signpost, do not diagnose'],
      mods: ['@reg_rosa', '@night_nurse_nia'],
      threads: [ { t: 'What do you eat at 4am that does not wreck you?', by: '@fy1_femi', tag: 'FOOD', replies: 312, ago: 0, votes: 640 }, { t: 'Blackout blinds that actually work', by: '@locum_leo', tag: 'SLEEP', replies: 148, ago: 1, votes: 286 }, { t: 'A patient said thank you at 5am and I nearly cried', by: '@night_nurse_nia', tag: 'STORIES', replies: 96, ago: 2, votes: 512 }, { t: 'Switching back to days: how long does it take you?', by: '@reg_rosa', tag: 'Q&A', replies: 74, ago: 4, votes: 130 } ],
      events: [ { title: 'Midnight check-in (online)', day: 3, time: '00:00', where: 'Online' }, { title: 'Day-sleep masterclass', day: 6, time: '15:00', where: 'Online' } ] },
    { key: 'med-students-manchester', name: 'Med Students Manchester', domain: 'manchester.doctorxx.com', color: '#7A6CF0', img: U('1571260899304-425eee4c7efc', 900, 500),
      scope: 'Local', where: 'Manchester', members: 3420, online: 88, tagline: 'Placements, revision and a social life. Mostly revision.',
      about: 'Medical students across Manchester: placement tips, shared revision sessions, OSCE practice in pairs and a monthly social when the exams allow it.',
      rules: ['Share notes generously', 'No patient details', 'OSCE partners welcome every year'],
      mods: ['@med_student_sam', '@osce_olu'],
      threads: [ { t: 'OSCE practice partners for December?', by: '@osce_olu', tag: 'OSCE', replies: 58, ago: 0, votes: 92 }, { t: 'Best quiet library on Oxford Road after 6pm', by: '@med_student_sam', tag: 'REVISION', replies: 41, ago: 1, votes: 64 }, { t: 'Christmas social: vote for the venue', by: '@osce_olu', tag: 'SOCIAL', replies: 87, ago: 2, votes: 120 } ],
      events: [ { title: 'OSCE practice night', day: 2, time: '18:30', where: 'Oxford Road, Manchester' }, { title: 'Winter social', day: 5, time: '19:30', where: 'Northern Quarter, Manchester' } ] }
  ],
  feed: [
    { av: 'DX', avBg: TEAL, author: 'DoctorXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Exams, rotas, kit, careers and the people who get you through a night shift. From your first day as a student to your last on-call: medicine, all in one place.',
      img: U('1504813184591-01572f98c85f', 800, 600), eng: '♡ 38.4K · 💬 4.1K · ↗ 3.6K' },
    { av: 'FF', avBg: CORAL, author: '@fy1_femi', sub: 'On Shift · Just now', badge: 'COMMUNITY',
      text: 'First run of nights as an FY1: done. Four shifts, one very kind registrar, and a lot of toast. Going to sleep for a week 🌙',
      img: U('1586773860418-d37222d8fce3', 800, 600), eng: '♡ 12.6K · 💬 1.8K · ↗ 540' },
    { av: 'WW', avBg: TEAL, author: 'Ward & Weave', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Long Day Scrub Set</b>: four-way stretch, eleven pockets, and fabric that still looks fresh at hour thirteen. Washes at 60°.',
      img: U('1761234852472-85aeea9c3eac', 800, 600), eng: '♡ 9.4K · 💬 820 · ↗ 1.1K' },
    { av: 'AU', avBg: CORAL, author: 'Auscult', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Engraved with your name and your graduation year: the <b>Auscult Classic</b> for the class of 2027. Serviced free for life.',
      img: U('1532938911079-1b06ac7ceec7', 800, 600), eng: '♡ 5.1K · 💬 402 · ↗ 380' },
    { av: 'MM', avBg: INDIGO, author: '@mrcp_maya', sub: 'Exams & Training · 2h ago', badge: 'COMMUNITY',
      text: 'Passed MRCP Part 1! Four weeks of small-group sessions with Dr Priya Nair and ten Exam Cards on every break. Part 2, here I come 📚',
      img: U('1758876201901-68f8f413bf4c', 800, 600), eng: '♡ 6.8K · 💬 910 · ↗ 260' },
    { av: 'BW', avBg: SLATE, author: 'Bleepwise', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'The <b>Wipe-Clean Ward Case</b> fits every common tablet and survives the cleaning wipes your ward uses. Drop-tested to 1.5 metres.',
      img: U('1758691463203-cce9d415b2b5', 800, 600), eng: '♡ 2.9K · 💬 210 · ↗ 190' },
    { av: 'PN', avBg: INDIGO, author: 'Dr Priya Nair Exam Tutoring', sub: 'Exams & Training · 6h ago', badge: 'PRO ZONE',
      text: 'Spring sitting group starts 1 December: six doctors, four evenings, timed papers and honest feedback. Two places left.',
      img: U('1758691461990-03b49d969495', 800, 600), eng: '♡ 2.2K · 💬 154 · ↗ 210' }
  ],
  prompts: ['Find me an MRCP Part 1 study group in London', 'How do I plan sleep around a run of four nights?', 'Which specialties suit someone who loves procedures?', 'Book a suturing workshop near Birmingham'],
  businesses: ['meridian-medical-supplies', 'clearwater-locums']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'doctor', verified: true }, o);
Object.assign(ZONES, {
  'ward-weave': brand({ key: 'ward-weave', name: 'Ward & Weave', color: '#19B3A6', gradient: TEAL, tier: 'Founding Partner',
    tagline: 'Scrubs made for a thirteen-hour shift', stats: { followers: '186K', content: '940', products: '74' },
    ad: { badge: 'Featured', img: U('1761234852472-85aeea9c3eac', 760, 760), hl: 'The Long Day Scrub Set.', sub: 'Four-way stretch, eleven pockets, fresh at hour thirteen.', meta: 'From £12' },
    products: [
      { name: 'Long Day Scrub Set', price: '£58', tag: 'FLAGSHIP', emoji: '🩺', rating: 4.9, reviews: 4820, cat: 'sets', special: true, desc: 'Top and trousers in four-way stretch fabric that keeps its shape all shift.', features: ['Four-way stretch', 'Eleven pockets', 'Washes at 60°'], review: { who: 'Femi A.', text: 'Wore them for four nights straight. Still comfortable at 7am.' } },
      { name: 'V-Neck Scrub Top', price: '£32', tag: 'BESTSELLER', emoji: '👕', rating: 4.8, reviews: 3610, cat: 'tops', desc: 'A soft, breathable top with a pen pocket that actually fits a pen.', features: ['Nine colours', 'Sizes 4XS to 4XL'], review: { who: 'Rosa M.', text: 'The pen pocket alone is worth it.' } },
      { name: 'Jogger Scrub Trousers', price: '£30', emoji: '👖', rating: 4.8, reviews: 2940, cat: 'trousers', desc: 'Jogger-cut trousers with a drawstring and deep cargo pockets.', features: ['Short, regular and tall', 'Phone-sized pockets'], review: { who: 'Leo K.', text: 'Finally trousers in a tall length.' } },
      { name: 'Personalised Theatre Cap', price: '£12', tag: 'PERSONALISED', emoji: '🧢', rating: 4.9, reviews: 2210, cat: 'caps', special: true, desc: 'A cotton theatre cap with your name and role embroidered on the front.', features: ['Name and role', 'Thirty prints'], review: { who: 'Kemi O.', text: 'Nobody calls me “the anaesthetist” any more.' } },
      { name: 'Compression Socks (3 pairs)', price: '£24', emoji: '🧦', rating: 4.7, reviews: 1870, cat: 'socks', desc: 'Graduated compression socks for long days on your feet.', features: ['Graduated compression', 'Cushioned sole'], review: { who: 'Nia B.', text: 'My legs at the end of a long day: transformed.' } },
      { name: 'Name Embroidery', price: '£6', tag: 'SERVICE', emoji: '🪡', rating: 4.9, reviews: 1320, cat: 'service', desc: 'Your name and role stitched onto any Ward & Weave top.', features: ['Ready in 3 days'], review: { who: 'Sam T.', text: 'Looks properly professional.' } }
    ],
    shopCats: [ { key: 'sets', label: 'Scrub sets', icon: '🩺' }, { key: 'tops', label: 'Tops', icon: '👕' }, { key: 'trousers', label: 'Trousers', icon: '👖' }, { key: 'caps', label: 'Theatre caps', icon: '🧢' }, { key: 'socks', label: 'Socks', icon: '🧦' }, { key: 'service', label: 'Embroidery', icon: '🪡' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 3h', text: 'The <b>Long Day Scrub Set</b>: fresh at hour thirteen.', img: U('1761234852472-85aeea9c3eac', 800, 440), eng: '♡ 9.4K · 💬 820 · ↗ 1.1K', product: 0 },
      { type: 'post', sub: 'Behind the seams · Yesterday', text: 'Every scrub set is wear-tested by a doctor or nurse for a full run of nights before it goes on sale.', img: U('1624727828489-a1e03b79bba8', 800, 440), eng: '♡ 4.2K · 💬 290' },
      { type: 'community', who: 'Sam T.', whoBg: INDIGO, sub: 'Community · 1d', text: 'Starting placements in January. Which set should I get as a student?', eng: '♡ 188 · 💬 46', reply: 'Welcome, Sam! The Long Day Scrub Set is the one most students start with, and our student discount takes 20% off with your university email. Add a Personalised Theatre Cap for theatre placements. 🩺' }
    ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Scrubs fitting pop-up', when: 'Dec 3 · Manchester', desc: 'Try every cut and size, get your name embroidered while you wait.', registered: 620, capacity: 900 } ],
    about: { founded: 'Leeds · 2016', story: 'Started by an A&E nurse and a pattern-cutter who were tired of scrubs that fell apart by spring. We joined GENEXXO as DoctorXX’s Founding Partner because this is where the people who wear our scrubs gather.', milestones: [['2016', 'The first Long Day set, sewn in Leeds'], ['2022', 'Wear-tested by 1,000 clinicians'], ['2026', 'Founding Partner on DoctorXX']], values: ['Wear-tested on real shifts', 'Made to last', 'Repair before replace'] } }),

  'auscult': brand({ key: 'auscult', name: 'Auscult', color: '#E05A5A', gradient: CORAL, tier: 'Brand Zone',
    tagline: 'Hear more. Engraved and serviced for life.', stats: { followers: '72.3K', content: '310', products: '26' },
    ad: { badge: 'New', img: U('1532938911079-1b06ac7ceec7', 760, 760), hl: 'Auscult Classic, engraved.', sub: 'Your name and your year, serviced free for life.', meta: 'From £15' },
    products: [
      { name: 'Auscult Cardio Stethoscope', price: '£189', tag: 'FLAGSHIP', emoji: '🩺', rating: 4.9, reviews: 1460, cat: 'stethoscopes', special: true, desc: 'A dual-lumen stethoscope for cardiology, with a tunable diaphragm.', features: ['Dual-lumen tubing', 'Tunable diaphragm', 'Free engraving'], review: { who: 'Kemi O.', text: 'The best I have used in twenty years.' } },
      { name: 'Auscult Classic', price: '£89', tag: 'BESTSELLER', emoji: '❤️', rating: 4.8, reviews: 5240, cat: 'stethoscopes', desc: 'The everyday stethoscope for wards and clinics, in twelve colours.', features: ['Single-lumen', 'Twelve colours', 'Free engraving'], review: { who: 'Femi A.', text: 'Clear, light, and mine has my name on it.' } },
      { name: 'Auscult Student', price: '£59', emoji: '🎓', rating: 4.7, reviews: 3120, cat: 'stethoscopes', desc: 'A dependable first stethoscope for clinical years.', features: ['Lightweight', 'Spare earpieces'], review: { who: 'Sam T.', text: 'Perfect for OSCEs.' } },
      { name: 'Engraving', price: '£15', tag: 'PERSONALISED', emoji: '✍️', rating: 4.9, reviews: 2040, cat: 'service', special: true, desc: 'Name and year laser-engraved on the chest piece of any Auscult.', features: ['Two lines', 'Ready in 2 days'], review: { who: 'Maya P.', text: 'A lovely graduation gift.' } },
      { name: 'Spare Parts Kit', price: '£18', emoji: '🔩', rating: 4.8, reviews: 960, cat: 'parts', desc: 'Earpieces, diaphragm and rim for any Auscult model.', features: ['Fits every model'], review: { who: 'Leo K.', text: 'Like a new stethoscope for £18.' } },
      { name: 'Service & Re-tube', price: '£25', tag: 'SERVICE', emoji: '🔧', rating: 4.9, reviews: 610, cat: 'service', desc: 'New tubing, new diaphragm, cleaned and tested. Free for life on the Cardio.', features: ['5-day turnaround'], review: { who: 'Rosa M.', text: 'Eight years old and sounds new.' } }
    ],
    shopCats: [ { key: 'stethoscopes', label: 'Stethoscopes', icon: '🩺' }, { key: 'parts', label: 'Parts', icon: '🔩' }, { key: 'service', label: 'Engraving & service', icon: '✍️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'The <b>Auscult Classic</b>, engraved for the class of 2027.', img: U('1505751172876-fa1923c5c528', 800, 440), eng: '♡ 5.1K · 💬 402', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'MASTERCLASS', title: 'Heart sounds masterclass', when: 'Nov 27 · Online', desc: 'A cardiologist talks through murmurs with recorded heart sounds. Free.', registered: 2140, capacity: 5000 } ],
    about: { founded: 'Sheffield · 2009', story: 'An engineer and a cardiologist who thought a good stethoscope should last a career. Every Auscult is serviced for life.', milestones: [['2009', 'The first Classic'], ['2019', 'The Cardio launches'], ['2026', 'Brand Zone on DoctorXX']], values: ['Built for a career', 'Serviced for life', 'Recycled packaging'] } }),

  'ward-round-press': brand({ key: 'ward-round-press', name: 'Ward Round Press', color: '#6C5CE7', gradient: INDIGO, tier: 'Brand Zone',
    tagline: 'Pass the exam. Then be the doctor.', stats: { followers: '94.6K', content: '1.2K', products: '40' },
    ad: { badge: 'Featured', img: U('1758876201901-68f8f413bf4c', 760, 760), hl: 'Spring exam bundle.', sub: 'Question bank, mock papers and a revision plan that fits around shifts.', meta: 'From £19' },
    products: [
      { name: 'MRCP Part 1 Question Bank (6 months)', price: '£79', tag: 'FLAGSHIP', emoji: '📝', rating: 4.8, reviews: 3860, cat: 'qbank', special: true, desc: '3,000 questions written by consultants, with explanations and timed mocks.', features: ['3,000 questions', 'Timed mocks', 'Works offline'], review: { who: 'Maya P.', text: 'The explanations taught me more than the textbooks.' } },
      { name: 'Finals Revision Bundle', price: '£49', tag: 'BESTSELLER', emoji: '🎓', rating: 4.8, reviews: 5120, cat: 'qbank', desc: 'Single best answer questions and OSCE checklists for medical finals.', features: ['2,000 questions', 'OSCE checklists'], review: { who: 'Sam T.', text: 'Did every question twice. Passed.' } },
      { name: 'OSCE Station Cards', price: '£24', emoji: '🃏', rating: 4.7, reviews: 1980, cat: 'books', desc: '120 printed station cards for practising in pairs.', features: ['120 stations', 'Examiner mark sheets'], review: { who: 'Olu D.', text: 'Our whole year shares two sets.' } },
      { name: 'Pocket Ward Handbook', price: '£19', tag: 'BESTSELLER', emoji: '📕', rating: 4.9, reviews: 6240, cat: 'books', special: true, desc: 'The pocket book for your first year on the wards: jobs, calls and handover.', features: ['Fits a scrub pocket', 'Updated every August'], review: { who: 'Femi A.', text: 'Lived in my pocket all of FY1.' } },
      { name: 'Specialty Interview Course', price: '£120', emoji: '🎤', rating: 4.8, reviews: 840, cat: 'courses', desc: 'Online course and two recorded mock stations with feedback.', features: ['Six modules', 'Two mock stations'], review: { who: 'Gus R.', text: 'Walked in calm. Got the job.' } }
    ],
    shopCats: [ { key: 'qbank', label: 'Question banks', icon: '📝' }, { key: 'books', label: 'Books & cards', icon: '📕' }, { key: 'courses', label: 'Courses', icon: '🎤' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'Spring sitting? Our <b>MRCP Part 1 Question Bank</b> has a 12-week plan that fits around nights.', img: U('1759852692971-a2abc6799cbd', 800, 440), eng: '♡ 3.6K · 💬 280', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Spring exam bundle early-bird', when: 'Dec 10 · 23:59', desc: 'Early-bird pricing on the spring bundle ends at midnight on 10 December.', registered: 3180, capacity: 8000 } ],
    about: { founded: 'Edinburgh · 2011', story: 'Two registrars who wrote revision notes for their friends, and kept going. Every question is written and checked by practising doctors.', milestones: [['2011', 'The first finals question bank'], ['2018', 'The Pocket Ward Handbook'], ['2026', 'Brand Zone on DoctorXX']], values: ['Written by doctors', 'Explanations first', 'Fair prices for students'] } }),

  'bleepwise': brand({ key: 'bleepwise', name: 'Bleepwise', color: '#4F7A8C', gradient: SLATE, tier: 'Brand Zone',
    tagline: 'Pocket kit that survives the ward', stats: { followers: '31.2K', content: '170', products: '34' },
    ad: { badge: 'Featured', img: U('1758691463203-cce9d415b2b5', 760, 760), hl: 'The Wipe-Clean Ward Case.', sub: 'Survives the wipes, survives the drop.', meta: 'From £8' },
    products: [
      { name: 'Wipe-Clean Ward Case', price: '£39', tag: 'FLAGSHIP', emoji: '📱', rating: 4.8, reviews: 1240, cat: 'cases', special: true, desc: 'A sealed tablet case that stands up to clinical cleaning wipes.', features: ['Sealed seams', 'Drop-tested to 1.5 m', 'Hand strap'], review: { who: 'Rosa M.', text: 'Our ward bought twelve.' } },
      { name: 'Rugged Phone Case', price: '£29', tag: 'BESTSELLER', emoji: '🛡️', rating: 4.7, reviews: 2180, cat: 'cases', desc: 'A wipe-clean phone case with a lanyard loop.', features: ['Wipe-clean', 'Lanyard loop'], review: { who: 'Leo K.', text: 'Dropped it down a stairwell. Fine.' } },
      { name: 'Pocket Penlight', price: '£12', emoji: '🔦', rating: 4.8, reviews: 3420, cat: 'pocket', special: true, desc: 'A warm-white penlight with a printed pupil gauge.', features: ['Pupil gauge', 'Pocket clip'], review: { who: 'Sam T.', text: 'Fits right next to my pens.' } },
      { name: 'Scrub Pocket Organiser', price: '£16', emoji: '🗂️', rating: 4.7, reviews: 1560, cat: 'pocket', desc: 'Holds pens, penlight, tape and a notebook in one wipe-clean sleeve.', features: ['Wipe-clean', 'Fits any scrub pocket'], review: { who: 'Femi A.', text: 'No more lost pens.' } },
      { name: 'Badge Reel & Lanyard', price: '£8', emoji: '🪪', rating: 4.6, reviews: 980, cat: 'pocket', desc: 'A breakaway lanyard with a retractable badge reel.', features: ['Breakaway clasp', 'Wipe-clean'], review: { who: 'Nia B.', text: 'Cheap and cheerful, and it lasts.' } }
    ],
    shopCats: [ { key: 'cases', label: 'Cases', icon: '📱' }, { key: 'pocket', label: 'Pocket kit', icon: '🔦' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'The <b>Wipe-Clean Ward Case</b>: drop-tested, wipe-tested, ward-tested.', img: U('1576091160550-2173dba999ef', 800, 440), eng: '♡ 2.9K · 💬 210', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 18 · 23:59', desc: 'Order by midnight on 18 December for delivery before Christmas.', registered: 840, capacity: 3000 } ],
    about: { founded: 'Bristol · 2019', story: 'A junior doctor and a product designer who got fed up with cracked phones and lost penlights. Everything we make is wipe-clean.', milestones: [['2019', 'The first Pocket Penlight'], ['2024', 'The Wipe-Clean Ward Case'], ['2026', 'Brand Zone on DoctorXX']], values: ['Wipe-clean everything', 'Tested on the ward', 'Fair repairs'] } }),

  'meridian-medical-supplies': { key: 'meridian-medical-supplies', kind: 'business', gw: 'doctor', name: 'Meridian Medical Supplies', color: '#19B3A6', gradient: TEAL, img: U('1551601651-2a8555f1a136', 900, 500),
    tier: 'Verified', category: 'Clinical consumables', tagline: 'Theatre and ward consumables for hospitals and clinics.',
    about: { founded: 'Nottingham · 1988', story: 'We supply hospitals, clinics and practices with theatre packs, dressings, gloves and ward consumables, with next-day delivery and stock managed for you.' },
    stats: { years: 38, staff: 420, clients: '900+ hospitals & clinics' },
    caps: [ { name: 'Theatre packs', detail: 'Custom procedure packs built to each theatre’s list.' }, { name: 'Ward consumables', detail: 'Dressings, gloves and sundries with managed stock levels.' }, { name: 'Clinic supply', detail: 'Everything a GP practice or clinic orders, on one account.' } ],
    specs: { moq: '1 case', lead: 'Next day; custom packs 3–4 weeks', regions: 'UK & Ireland', certs: ['ISO 13485', 'ISO 9001', 'Sustainable packaging programme'] },
    supplies: [ { kind: 'brand', key: 'bleepwise', what: 'Wipe-clean cases bundled into ward starter kits' } ],
    cases: [ { title: 'Day-surgery unit, Midlands', text: 'Custom theatre packs cut set-up time per list and halved packaging waste.' } ],
    feed: [ { sub: 'Winter · 3d', text: 'Winter pressures: we are holding extra stock of the essentials for every account until March.' }, { sub: 'Sustainability · 1w', text: 'Theatre packs now ship in recyclable trays.' } ],
    contact: { person: 'Joanna Price, Hospital accounts', response: 'Replies within 24 hours' } },

  'clearwater-locums': { key: 'clearwater-locums', kind: 'business', gw: 'doctor', name: 'Clearwater Locum Partners', color: '#FF6B6B', gradient: CORAL, img: U('1519494026892-80bbd2d6fd0d', 900, 500),
    tier: 'Verified', category: 'Medical staffing', tagline: 'Locum doctors for hospitals and practices, fairly placed.',
    about: { founded: 'Manchester · 2007', story: 'We place locum doctors with hospitals and GP practices across the UK, with compliance checked once, clear rates and payment within a week.' },
    stats: { years: 19, staff: 140, clients: '320 trusts & practices' },
    caps: [ { name: 'Hospital locums', detail: 'Short- and long-term cover across most specialties.' }, { name: 'GP locums', detail: 'Sessions booked in minutes, paid weekly.' }, { name: 'Compliance', detail: 'Checks and training records held once, shared with consent.' } ],
    specs: { moq: '1 session', lead: 'Same day to 4 weeks', regions: 'England, Scotland & Wales', certs: ['Framework-approved supplier', 'ISO 27001', 'Cyber Essentials Plus'] },
    supplies: [ { kind: 'brand', key: 'ward-weave', what: 'Scrubs for locums starting on new wards' } ],
    cases: [ { title: 'Winter cover, North West', text: 'Forty locum doctors placed across three trusts for the winter months.' } ],
    feed: [ { sub: 'News · 5d', text: 'Winter rota gaps: register now for December and January sessions.' } ],
    contact: { person: 'Amir Shah, Locum partnerships', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('doctor', [
  { gw: 'doctor', zone: 'ward-round-press', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Ward Round Press Live · Exam Q&A', desc: 'Two consultants work through ten membership-exam questions live and take yours in the chat.' },
  { gw: 'doctor', type: 'Event', icon: '🌙', time: 'Nov 28', title: 'Night Shift Club midnight check-in', desc: 'A quiet online catch-up for anyone on nights. Bring a cup of tea.' },
  { gw: 'doctor', zone: 'auscult', type: 'Event', icon: '❤️', time: 'Nov 27', title: 'Heart sounds masterclass', desc: 'Auscult: a cardiologist talks through murmurs with recorded heart sounds. Online and free.' },
  { gw: 'doctor', zone: 'ward-weave', type: 'Event', icon: '🩺', time: 'Dec 3', title: 'Scrubs fitting pop-up, Manchester', desc: 'Ward & Weave: try every cut and size, embroidery while you wait.' },
  { gw: 'doctor', type: 'Event', icon: '🎄', time: 'Dec 5', title: 'Med Students Manchester winter social', desc: 'The end-of-term social in the Northern Quarter. Exams permitting.' },
  { gw: 'doctor', zone: 'ward-round-press', type: 'Deadline', icon: '📝', time: 'Dec 10', title: 'Spring exam bundle early-bird ends', desc: 'Ward Round Press: early-bird pricing ends at midnight.' },
  { gw: 'doctor', type: 'Event', icon: '🪡', time: 'Dec 12', title: 'Suturing workshop, Birmingham', desc: 'Mr Kwame Mensah: three hours of knots and sutures on simulation skin. Four places left.' },
  { gw: 'doctor', zone: 'bleepwise', type: 'Deadline', icon: '📱', time: 'Dec 18', title: 'Last order for Christmas delivery', desc: 'Bleepwise: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /DOCTORXX ═════════ */
