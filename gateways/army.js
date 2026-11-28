/* ═════════ ARMYXX — a Defence demo gateway (2026-11-28, Sean; build -101) ═════════
   Built with the _tools/README.md recipe. Palette (light): olive, sand and a warm brass.
   Home sector: Defence (key 'aerospace'; listed only there). Every company, maker, pro and product is fictional; places are real.
   CARE (_tools/CARE-BRIEFS.md): careers, training, service families and veterans. Never weapons, combat footage,
   real units or operations. Signposts: Veterans’ Gateway 0808 802 1212; Samaritans 116 123; forces families’ federations. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const OLIVE = 'linear-gradient(135deg,#BEF264,#3F6212)', SAND = 'linear-gradient(135deg,#FDE68A,#A16207)', BRICK = 'linear-gradient(135deg,#FDBA74,#9A3412)', SLATE = 'linear-gradient(135deg,#CBD5E1,#334155)';

GATEWAYS.army = {
  name: 'ArmyXX', domain: 'armyxx.com', emoji: '🎖️', sector: 'aerospace', live: true,
  tagline: 'The Service Life Universe',
  theme: {
    bg: '#F7F7F2', text: '#1A1F14', cardBg: '#FFFFFF', cardBorder: 'rgba(26,31,20,.09)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F7F7F2)', accent: '#4D6B1F', accentAlt: '#A16207', dark: false
  },
  gradient: 'linear-gradient(135deg,#3F6212,#A16207,#BEF264)',
  stats: { members: '1.8M', brands: '340+', agents: '21' },
  spaces: ['All Feed', 'Careers', 'Training & Fitness', 'Service Families', 'Veterans', 'Wellbeing'],
  trending: ['#ServiceFamilies', '#VeteransWelcome', '#DayOne'],
  brandZones: [
    { key: 'homefront-families', name: 'Homefront Families', color: '#4D6B1F', tier: 'Founding Partner', tag: 'A charity for the families of people who serve' },
    { key: 'ridgeline-kit', name: 'Ridgeline Kit', color: '#A16207', tier: 'Brand Zone', tag: 'Boots, rucksacks and running kit built for training' },
    { key: 'second-watch-coffee', name: 'Second Watch Coffee', color: '#9A3412', tier: 'Brand Zone', tag: 'A coffee roastery run by veterans' },
    { key: 'pathfinder-careers', name: 'Pathfinder Careers', color: '#334155', tier: 'Brand Zone', tag: 'Guides for joining up, and for life after' }
  ],
  apps: [
    { name: 'Fitness Test Trainer', color: '#4D6B1F', desc: 'An eight-week plan for a run, press-ups and a carry', key: 'fitness-trainer', url: 'apps/fitness-trainer.html',
      dev: 'Ridgeline Kit', rating: '4.8', users: '580K', perms: ['profile', 'feed'],
      tagline: 'Ready for day one.',
      about: 'Fitness Test Trainer builds a gentle eight-week plan towards a typical entry fitness test: a timed run, press-ups and a carry. Log your sessions and watch your times come down. Check with your GP before starting a new exercise plan.',
      features: ['Eight-week plan', 'Log runs and press-ups', 'Your best times', 'Share a milestone'],
      shots: ['apps/fitness-trainer/shot-1.jpg', 'apps/fitness-trainer/shot-2.jpg', 'apps/fitness-trainer/shot-3.jpg'],
      version: '2.3', size: '9 KB',
      updates: [ { v: '2.3', ago: 2, notes: 'Carry training.' }, { v: '1.9', ago: 68, notes: 'Your best times.' }, { v: '1.4', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@recruit_rhys', stars: 5, ago: 1, text: 'Took two minutes off my run.' }, { who: '@ben_carter_pt', stars: 5, ago: 18, text: 'Sensible progression. I recommend it.' }, { who: '@forces_mum_kerry', stars: 4, ago: 42, text: 'My son swears by it.' } ] },
    { name: 'Deployment Countdown', color: '#A16207', desc: 'A family countdown to coming home', key: 'deployment-countdown', url: 'apps/deployment-countdown.html',
      dev: 'Homefront Families', rating: '4.9', users: '360K', perms: ['profile', 'feed'],
      tagline: 'Every day, one day closer.',
      about: 'Deployment Countdown helps families, especially children, count down while someone is away: a big number, a jar of days to colour in and small things to look forward to. No locations or dates are shared beyond your family.',
      features: ['Days until home', 'A jar of days for children', 'Small milestones', 'Share a milestone, never a location'],
      shots: ['apps/deployment-countdown/shot-1.jpg', 'apps/deployment-countdown/shot-2.jpg', 'apps/deployment-countdown/shot-3.jpg'],
      version: '1.9', size: '8 KB',
      updates: [ { v: '1.9', ago: 3, notes: 'Jar of days.' }, { v: '1.5', ago: 74, notes: 'Milestones.' }, { v: '1.0', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@forces_mum_kerry', stars: 5, ago: 2, text: 'My daughter colours a day in every night.' }, { who: '@maya_singh_families', stars: 5, ago: 24, text: 'Gentle and thoughtful.' }, { who: '@recruit_rhys', stars: 4, ago: 50, text: 'Mum loves it.' } ] },
    { name: 'Veterans’ Services Finder', color: '#9A3412', desc: 'Help with work, housing, health and money, in one place', key: 'veterans-finder', url: 'apps/veterans-finder.html',
      dev: 'Pathfinder Careers', rating: '4.8', users: '290K', perms: ['profile', 'feed'],
      tagline: 'You served. Help is here.',
      about: 'Veterans’ Services Finder points veterans and their families to the right kind of help: work and training, housing, health, money and someone to talk to. It always starts with Veterans’ Gateway (0808 802 1212), the free first point of contact. In a crisis, call Samaritans on 116 123 or 999.',
      features: ['Six kinds of help', 'Free helplines first', 'Save what helps', 'Share with a friend'],
      shots: ['apps/veterans-finder/shot-1.jpg', 'apps/veterans-finder/shot-2.jpg', 'apps/veterans-finder/shot-3.jpg'],
      version: '1.4', size: '9 KB',
      updates: [ { v: '1.4', ago: 1, notes: 'Families section.' }, { v: '1.2', ago: 60, notes: 'Saved help.' }, { v: '1.0', ago: 180, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@sgt_retd_george', stars: 5, ago: 3, text: 'Wish I’d had this when I left.' }, { who: '@marcus_reid_careers', stars: 5, ago: 26, text: 'I share it with every client.' }, { who: '@forces_mum_kerry', stars: 4, ago: 54, text: 'Clear and kind.' } ] }
  ],
  pros: [
    { key: 'ben-carter-pt', name: 'Ben Carter Fitness', color: '#4D6B1F', tag: 'Fitness coaching for anyone preparing to join', role: 'Personal trainer (ex-forces)',
      img: U('1590873803005-539ede4d828a', 800, 800), base: 'Aldershot, UK · and online', langs: 'English', years: 12, rating: '4.9', reviewsN: 194, cur: '£',
      creds: ['Served nine years as a physical training instructor', 'Qualified personal trainer', 'Runs free park sessions'],
      about: 'Ben helps people get fit for entry fitness tests, safely: running, strength and carrying, built up gradually. He also coaches veterans getting back into exercise.',
      services: [ { id: 'one', name: 'One-to-one session', dur: '1 hour', price: 35, desc: 'In the park or online.' },
                  { id: 'plan', name: 'Eight-week plan', dur: 'Eight weeks', price: 90, desc: 'A plan and weekly check-ins.' },
                  { id: 'group', name: 'Group park session', dur: '1 hour', price: 8, desc: 'Saturdays, all levels.' } ],
      avail: { days: [1, 3, 6], times: ['07:00', '12:00', '18:00'] },
      reviews: [ { who: '@recruit_rhys', stars: 5, ago: 2, text: 'Passed the run with time to spare.' }, { who: '@sgt_retd_george', stars: 5, ago: 30, text: 'Got me running again at sixty.' }, { who: '@forces_mum_kerry', stars: 5, ago: 58, text: 'Patient and encouraging.' } ],
      posts: [ { ago: 1, text: 'The best training plan is the one you can stick to. Three runs a week, a few press-ups every day, and rest when your body asks.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'maya-singh-families', name: 'Maya Singh Family Support', color: '#A16207', tag: 'Support for service families through separation and moves', role: 'Family counsellor',
      img: U('1607990283143-e81e7a2c9349', 800, 800), base: 'Plymouth, UK · and online', langs: 'English, Punjabi', years: 14, rating: '5.0', reviewsN: 148, cur: '£',
      creds: ['Registered counsellor', 'Grew up in a service family', 'Specialist in children and deployment'],
      about: 'Maya supports service families through time apart, homecomings and frequent moves, with a special focus on children. She’ll point you to forces families’ federations and free support where it helps.',
      services: [ { id: 'family', name: 'Family session', dur: '1 hour', price: 60, desc: 'Online or in Plymouth.' },
                  { id: 'child', name: 'Children’s session', dur: '45 minutes', price: 45, desc: 'For ages six to fourteen.' },
                  { id: 'talk', name: 'School staff talk', dur: '1 hour', price: 120, desc: 'Supporting pupils from service families.' } ],
      avail: { days: [2, 4, 5], times: ['10:00', '15:30', '18:30'] },
      reviews: [ { who: '@forces_mum_kerry', stars: 5, ago: 3, text: 'She understood straight away.' }, { who: '@recruit_rhys', stars: 5, ago: 32, text: 'Helped my little brother so much.' }, { who: '@ben_carter_pt', stars: 5, ago: 62, text: 'Wonderful with children.' } ],
      posts: [ { ago: 2, text: 'Homecoming is happy, and it can also be strange. Give everyone a few weeks to find the new normal, and keep the routines the children relied on.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'marcus-reid-careers', name: 'Marcus Reid Career Coaching', color: '#334155', tag: 'From service to civilian work', role: 'Career coach',
      img: U('1776781205743-33b4c1106adc', 800, 800), base: 'Birmingham, UK · and online', langs: 'English', years: 9, rating: '4.9', reviewsN: 112, cur: '£',
      creds: ['Served twelve years in logistics', 'Qualified career coach', 'Volunteers with a veterans’ employment charity'],
      about: 'Marcus helps service leavers and veterans translate their experience for civilian employers: CVs, interviews and choosing what’s next.',
      services: [ { id: 'cv', name: 'CV review', dur: '1 hour', price: 45, desc: 'Your service, in employers’ language.' },
                  { id: 'coach', name: 'Career coaching', dur: 'Four sessions', price: 160, desc: 'Plan your next step.' },
                  { id: 'mock', name: 'Mock interview', dur: '1 hour', price: 50, desc: 'Practise, with feedback.' } ],
      avail: { days: [1, 2, 4], times: ['09:30', '13:00', '19:00'] },
      reviews: [ { who: '@sgt_retd_george', stars: 5, ago: 4, text: 'Landed a job in three months.' }, { who: '@recruit_rhys', stars: 5, ago: 34, text: 'Great advice for my dad.' }, { who: '@maya_singh_families', stars: 5, ago: 64, text: 'Practical and kind.' } ],
      posts: [ { ago: 3, text: '“Led a team of eight under pressure” is worth more on a CV than any job title. Say what you did, and what changed because of it.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'forces-families-together', name: 'Forces Families Together', domain: 'families.armyxx.com', color: '#4D6B1F', img: U('1674049406385-08fb37eeebd4', 900, 500),
      scope: 'Global', where: 'Wherever you’re posted', members: 168000, online: 1920, tagline: 'Time apart, moves and homecomings. You’re not alone.',
      about: 'Partners, parents and children of people who serve, sharing what helps through time apart, moves and homecomings. Never post locations, dates or anything about operations. Forces families’ federations can help with housing, schools and welfare. This is a demo community.',
      rules: ['Never share locations, dates or operations', 'Kindness first', 'Children’s privacy always'],
      mods: ['@forces_mum_kerry', '@maya_singh_families'],
      threads: [ { t: 'Christmas apart: your traditions', by: '@forces_mum_kerry', tag: 'CHRISTMAS', replies: 1460, ago: 0, votes: 3120 }, { t: 'Helping little ones with goodbyes', by: '@maya_singh_families', tag: 'CHILDREN', replies: 980, ago: 1, votes: 2240 }, { t: 'Moving again: school tips', by: '@forces_mum_kerry', tag: 'MOVES', replies: 720, ago: 2, votes: 1680 }, { t: 'Homecoming: the first week', by: '@maya_singh_families', tag: 'HOMECOMING', replies: 640, ago: 3, votes: 1520 } ],
      events: [ { title: 'Live: Christmas apart, together', day: 4, time: '19:30', where: 'Online' }, { title: 'Ask a family counsellor', day: 11, time: '19:00', where: 'Online' } ] },
    { key: 'plymouth-veterans-breakfast', name: 'Plymouth Veterans’ Breakfast', domain: 'plymouth.armyxx.com', color: '#A16207', img: U('1761839258605-d1b118266ccc', 900, 500),
      scope: 'Local', where: 'Plymouth', members: 420, online: 12, tagline: 'A full breakfast and good company, every month.',
      about: 'Veterans of every service, and their families, who meet for breakfast in Plymouth once a month. No speeches, no pressure, just company. If you’re struggling, Veterans’ Gateway is free on 0808 802 1212.',
      rules: ['Everyone welcome, whatever you did', 'What’s said at breakfast stays there', 'Look out for each other'],
      mods: ['@sgt_retd_george', '@ben_carter_pt'],
      threads: [ { t: 'December breakfast: who’s coming?', by: '@sgt_retd_george', tag: 'MEETUP', replies: 34, ago: 0, votes: 72 }, { t: 'Lift needed from Saltash', by: '@sgt_retd_george', tag: 'LIFTS', replies: 12, ago: 1, votes: 28 }, { t: 'Thank you for last month', by: '@ben_carter_pt', tag: 'THANKS', replies: 16, ago: 2, votes: 40 } ],
      events: [ { title: 'December breakfast', day: 7, time: '09:00', where: 'Plymouth' }, { title: 'New year breakfast', day: 42, time: '09:00', where: 'Plymouth' } ] }
  ],
  feed: [
    { av: 'AX', avBg: OLIVE, author: 'ArmyXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Service life: careers and training, the families who wait at home and the veterans who come back to it. If you’re a veteran who needs help, Veterans’ Gateway is free on 0808 802 1212. In a crisis, call Samaritans on 116 123.',
      img: U('1758575514459-8a9b37d68047', 800, 600), eng: '♡ 17.4K · 💬 1.5K · ↗ 2.6K' },
    { av: 'HF', avBg: OLIVE, author: 'Homefront Families', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: “A day at basic training.” Recruits and instructors answer families’ questions: what the first week is like, when phone calls happen and how to send post. Follow <b>Homefront Families</b>.',
      img: U('1786637602441-931b831748f1', 800, 600), eng: '♡ 12.2K · 💬 1.8K · ↗ 2.0K' },
    { av: 'RR', avBg: SAND, author: '@recruit_rhys', sub: 'Training & Fitness · Just now', badge: 'COMMUNITY',
      text: 'Week six of the plan. Pushed a tractor tyre across a field this morning with three mates and my legs are jelly. The run is two minutes faster than in September.',
      img: U('1791987113526-b37058cde793', 800, 600), eng: '♡ 7.6K · 💬 820 · ↗ 640' },
    { av: 'RK', avBg: SAND, author: 'Ridgeline Kit', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Broken in, laced tight, ready for the long walk. <b>Ridgeline Trail Boots</b>, built for training.',
      img: U('1608396941316-ea89219bd56e', 800, 600), eng: '♡ 4.6K · 💬 300 · ↗ 420' },
    { av: 'FK', avBg: BRICK, author: '@forces_mum_kerry', sub: 'Service Families · 2h ago', badge: 'COMMUNITY',
      text: 'Forty-one days coloured in on the jar. My daughter asked if she could do two tonight to make it go faster. Not long now.',
      img: U('1674049406387-86c6d13a8285', 800, 600), eng: '♡ 9.2K · 💬 1.1K · ↗ 780' },
    { av: 'SW', avBg: BRICK, author: 'Second Watch Coffee', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Roasted by veterans in Plymouth, a share of every bag supports veterans’ breakfast clubs. <b>First Light</b> medium roast.',
      img: U('1511537190424-bbbab87ac5eb', 800, 600), eng: '♡ 3.8K · 💬 220 · ↗ 360' },
    { av: 'MR', avBg: SLATE, author: 'Marcus Reid Career Coaching', sub: 'Veterans · 6h ago', badge: 'PRO ZONE',
      text: 'One client wrote her whole CV in a notebook before she left: every course, every team, every problem solved. It made the civilian version easy.',
      img: U('1766497299982-0504b3da3517', 800, 600), eng: '♡ 4.2K · 💬 280 · ↗ 440' }
  ],
  prompts: ['What happens at basic training?', 'How can I get fit for the entry test?', 'How do families cope with time apart?', 'Where can veterans get help?'],
  businesses: ['forward-march-fitness', 'civvy-street-skills']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'army', verified: true }, o);
Object.assign(ZONES, {
  'homefront-families': brand({ key: 'homefront-families', name: 'Homefront Families', color: '#4D6B1F', gradient: OLIVE, tier: 'Founding Partner',
    tagline: 'A charity for the families of people who serve', stats: { followers: '176K', content: '440', products: '8' },
    ad: { badge: 'Featured', img: U('1758575514447-eaec2f7334a2', 760, 760), hl: 'Families serve too.', sub: 'Support through time apart, moves and homecomings.', meta: 'From £5' },
    products: [
      { name: 'Time Apart Family Pack', price: '£18', tag: 'FLAGSHIP', emoji: '📦', rating: 4.9, reviews: 2460, cat: 'families', special: true, desc: 'A countdown jar, a letter-writing set and a story book for children.', features: ['Ages 3 to 11'], review: { who: 'Kerry M.', text: 'My kids open it every Sunday.' } },
      { name: 'Hug Bear', price: '£16', tag: 'BESTSELLER', emoji: '🧸', rating: 4.9, reviews: 1840, cat: 'families', desc: 'A soft bear with a pocket for a recorded message.', features: ['Washable'], review: { who: 'Maya S.', text: 'A lovely comfort.' } },
      { name: 'Moving Again Guide', price: '£5', emoji: '🏠', rating: 4.7, reviews: 860, cat: 'guides', desc: 'Schools, GPs and settling in, with a checklist.', features: ['Printable'], review: { who: 'Kerry M.', text: 'Fourth move, easiest yet.' } },
      { name: 'Homecoming Kit', price: '£12', tag: 'SPECIAL', emoji: '🎉', rating: 4.8, reviews: 540, cat: 'guides', special: true, desc: 'A banner, a guide to the first weeks home and a family plan.', features: ['Reusable banner'], review: { who: 'Rhys D.', text: 'Mum cried, in a good way.' } }
    ],
    shopCats: [ { key: 'families', label: 'Families', icon: '📦' }, { key: 'guides', label: 'Guides', icon: '🏠' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Home at last, and the biggest hug. Our <b>Homecoming Kit</b> helps families with the first weeks back together.', img: U('1771759781939-1bb00c353adf', 800, 440), eng: '♡ 12.2K · 💬 1.8K · ↗ 2.0K', product: 3 },
      { type: 'community', who: 'Kerry M.', whoBg: OLIVE, sub: 'Community · 1d', text: 'Is it normal to find the first week home hard?', eng: '♡ 720 · 💬 210', reply: 'Hi Kerry. Very normal. Everyone has changed a little, and routines need re-finding. Go gently, and if it stays hard, a forces families’ federation or your GP can help. 💚' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Homefront Live · a day at basic training', when: 'Live now', desc: 'Recruits and instructors answer families’ questions.', registered: 6980, capacity: 16000 } ],
    about: { founded: 'Aldershot · 2008', story: 'Founded by service partners who wanted no family to feel alone while someone they love is away. We joined ArmyXX as Founding Partner to put families first.', milestones: [['2008', 'Founded'], ['2017', 'Time Apart packs'], ['2026', 'Founding Partner on ArmyXX']], values: ['Families serve too', 'Nobody alone', 'Children first'] } }),

  'ridgeline-kit': brand({ key: 'ridgeline-kit', name: 'Ridgeline Kit', color: '#A16207', gradient: SAND, tier: 'Brand Zone',
    tagline: 'Boots, rucksacks and running kit built for training', stats: { followers: '88.4K', content: '240', products: '42' },
    ad: { badge: 'New', img: U('1639487015979-5834df23ca5b', 760, 760), hl: 'Built for the long walk.', sub: 'Boots and packs for training and the hills.', meta: 'From £24' },
    products: [
      { name: 'Ridgeline Trail Boots', price: '£110', tag: 'FLAGSHIP', emoji: '🥾', rating: 4.8, reviews: 2140, cat: 'boots', special: true, desc: 'Leather boots with a cushioned sole for long distances.', features: ['Waterproof', 'Half sizes'], review: { who: 'Rhys D.', text: 'No blisters after twelve miles.' } },
      { name: 'Training Rucksack 35L', price: '£75', tag: 'BESTSELLER', emoji: '🎒', rating: 4.8, reviews: 1360, cat: 'packs', desc: 'A padded pack for weighted walks.', features: ['Hip belt', 'Rain cover'], review: { who: 'Ben C.', text: 'Carries weight well.' } },
      { name: 'Blister Kit', price: '£12', emoji: '🩹', rating: 4.7, reviews: 860, cat: 'boots', desc: 'Plasters, tape and socks for long walks.', features: ['Pocket size'], review: { who: 'George T.', text: 'Every pack needs one.' } },
      { name: 'Merino Socks Pair', price: '£24', tag: 'SPECIAL', emoji: '🧦', rating: 4.9, reviews: 640, cat: 'packs', special: true, desc: 'Three pairs of cushioned merino socks.', features: ['Anti-blister'], review: { who: 'Kerry M.', text: 'Bought for my son.' } }
    ],
    shopCats: [ { key: 'boots', label: 'Boots', icon: '🥾' }, { key: 'packs', label: 'Packs & socks', icon: '🎒' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Up and over the wall. Train in the <b>Ridgeline Trail Boots</b>.', img: U('1776938023428-60ddf175a2d1', 800, 440), eng: '♡ 4.6K · 💬 300', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Winter boots: 20% off', when: 'Dec 3 · All week', desc: 'Trail Boots, 20% off.', registered: 1240, capacity: 3000 } ],
    about: { founded: 'Northampton · 2012', story: 'Bootmakers who started out resoling boots for recruits, and decided to make their own.', milestones: [['2012', 'The first boot'], ['2020', 'Packs'], ['2026', 'Brand Zone on ArmyXX']], values: ['Made to last', 'Comfort first', 'Repair, don’t replace'] } }),

  'second-watch-coffee': brand({ key: 'second-watch-coffee', name: 'Second Watch Coffee', color: '#9A3412', gradient: BRICK, tier: 'Brand Zone',
    tagline: 'A coffee roastery run by veterans', stats: { followers: '56.8K', content: '170', products: '16' },
    ad: { badge: 'Christmas', img: U('1529787730-bdcabd22a644', 760, 760), hl: 'Coffee with a purpose.', sub: 'Roasted by veterans, supporting veterans.', meta: 'From £8' },
    products: [
      { name: 'First Light', price: '£9', tag: 'FLAGSHIP', emoji: '☕', rating: 4.8, reviews: 1640, cat: 'coffee', special: true, desc: 'A smooth medium roast, 250g.', features: ['Whole bean or ground'], review: { who: 'George T.', text: 'My morning ritual.' } },
      { name: 'Night Shift', price: '£9', tag: 'BESTSELLER', emoji: '🌙', rating: 4.8, reviews: 1120, cat: 'coffee', desc: 'A dark roast with chocolate notes, 250g.', features: ['Whole bean or ground'], review: { who: 'Marcus R.', text: 'Rich and strong.' } },
      { name: 'Enamel Mug', price: '£12', emoji: '🫖', rating: 4.7, reviews: 620, cat: 'gifts', desc: 'An enamel mug with our badge.', features: ['Tough'], review: { who: 'Ben C.', text: 'Goes everywhere with me.' } },
      { name: 'Gift Box', price: '£28', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 420, cat: 'gifts', special: true, desc: 'Two coffees and a mug.', features: ['Gift note'], review: { who: 'Kerry M.', text: 'Perfect present.' } }
    ],
    shopCats: [ { key: 'coffee', label: 'Coffee', icon: '☕' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'A scoop of fresh beans, straight from the roaster. Try <b>Night Shift</b>, our dark roast.', img: U('1755498208443-5d2b6180d934', 800, 440), eng: '♡ 3.8K · 💬 220', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Roastery open morning', when: 'Dec 6 · 10:00', desc: 'Plymouth: coffee, cake and a tour.', registered: 380, capacity: 800 } ],
    about: { founded: 'Plymouth · 2018', story: 'Three veterans who found purpose, and each other, in roasting coffee.', milestones: [['2018', 'First roast'], ['2022', 'Breakfast club fund'], ['2026', 'Brand Zone on ArmyXX']], values: ['Purpose', 'Quality', 'Looking out for each other'] } }),

  'pathfinder-careers': brand({ key: 'pathfinder-careers', name: 'Pathfinder Careers', color: '#334155', gradient: SLATE, tier: 'Brand Zone',
    tagline: 'Guides for joining up, and for life after', stats: { followers: '62.2K', content: '200', products: '14' },
    ad: { badge: 'Featured', img: U('1511989130945-c2b632959395', 760, 760), hl: 'Know the path ahead.', sub: 'Plain guides to joining, training and leaving.', meta: 'From £6' },
    products: [
      { name: 'Joining Up Guide', price: '£8', tag: 'FLAGSHIP', emoji: '🧭', rating: 4.8, reviews: 1480, cat: 'guides', special: true, desc: 'Applying, assessment, basic training and roles, explained.', features: ['Updated yearly'], review: { who: 'Rhys D.', text: 'Answered everything.' } },
      { name: 'Leaving Well Guide', price: '£8', tag: 'BESTSELLER', emoji: '🚪', rating: 4.8, reviews: 980, cat: 'guides', desc: 'Planning your move to civilian life.', features: ['Checklists'], review: { who: 'George T.', text: 'Should be issued to everyone.' } },
      { name: 'CV Workshop', price: '£25', emoji: '📝', rating: 4.8, reviews: 540, cat: 'workshops', desc: 'A live online workshop for service leavers.', features: ['Two hours'], review: { who: 'Marcus R.', text: 'Great value.' } },
      { name: 'Parents’ Guide to Joining', price: '£6', tag: 'SPECIAL', emoji: '👪', rating: 4.9, reviews: 360, cat: 'workshops', special: true, desc: 'For parents whose son or daughter is applying.', features: ['Questions to ask'], review: { who: 'Kerry M.', text: 'Calmed my nerves.' } }
    ],
    shopCats: [ { key: 'guides', label: 'Guides', icon: '🧭' }, { key: 'workshops', label: 'Workshops', icon: '📝' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'Dog tags in a drawer and a new chapter ahead. The <b>Leaving Well Guide</b>.', img: U('1453683685760-b8db0bbb8dc2', 800, 440), eng: '♡ 3.2K · 💬 190', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'CV workshop for service leavers', when: 'Dec 8 · 18:30', desc: 'Online, two hours.', registered: 460, capacity: 1200 } ],
    about: { founded: 'Birmingham · 2016', story: 'Written by people who joined, served and left, and wished someone had explained it all.', milestones: [['2016', 'Joining Up Guide'], ['2021', 'Leaving Well'], ['2026', 'Brand Zone on ArmyXX']], values: ['Straight answers', 'Families included', 'Life after service'] } }),

  'forward-march-fitness': { key: 'forward-march-fitness', kind: 'business', gw: 'army', name: 'Forward March Fitness', color: '#4D6B1F', gradient: OLIVE, img: U('1645238426817-8c3e7d1396cf', 900, 500),
    tier: 'Verified', category: 'Veteran-led outdoor fitness', tagline: 'Outdoor fitness classes led by veterans.',
    about: { founded: 'Aldershot · 2014', story: 'Veteran instructors running outdoor fitness classes for anyone, and pre-joining courses for those applying. Everyone works at their own level.' },
    stats: { years: 12, staff: 28, clients: '9,000 people trained' },
    caps: [ { name: 'Park classes', detail: 'Mornings and evenings.' }, { name: 'Pre-joining courses', detail: 'Eight weeks to fitness-test ready.' }, { name: 'Workplace fitness', detail: 'For teams.' } ],
    specs: { moq: 'One class', lead: 'Same week', regions: 'Hampshire, Surrey and online', certs: ['Qualified instructors', 'First-aid trained', 'All levels'] },
    supplies: [ { kind: 'brand', key: 'ridgeline-kit', what: 'Kit testing for boots and packs' } ],
    cases: [ { title: 'Ready on day one', text: 'Nine in ten of our pre-joining group passed their fitness test first time.' } ],
    feed: [ { sub: 'Team · 3d', text: 'January pre-joining course: places open.' } ],
    contact: { person: 'Lee Grant, Classes', response: 'Replies within one working day' } },

  'civvy-street-skills': { key: 'civvy-street-skills', kind: 'business', gw: 'army', name: 'Civvy Street Skills', color: '#334155', gradient: SLATE, img: U('1761839259484-4741afbbdcbf', 900, 500),
    tier: 'Verified', category: 'Training for service leavers', tagline: 'New skills for life after service.',
    about: { founded: 'Birmingham · 2013', story: 'Short courses that help service leavers and veterans retrain: project management, trades, driving and digital skills, with a careers adviser alongside.' },
    stats: { years: 13, staff: 34, clients: '6,400 learners' },
    caps: [ { name: 'Trade courses', detail: 'Electrical, plumbing and building.' }, { name: 'Office skills', detail: 'Project management and digital.' }, { name: 'Careers advice', detail: 'One-to-one, with every course.' } ],
    specs: { moq: 'One learner', lead: '2 to 6 weeks', regions: 'England and online', certs: ['Recognised qualifications', 'Veteran tutors', 'Family members welcome'] },
    supplies: [ { kind: 'brand', key: 'pathfinder-careers', what: 'Workshops and guides for learners' } ],
    cases: [ { title: 'A new trade at forty', text: 'A former driver retrained as an electrician and now runs her own firm.' } ],
    feed: [ { sub: 'Team · 5d', text: 'New project management course starts in January.' } ],
    contact: { person: 'Joanne Price, Admissions', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('army', [
  { gw: 'army', zone: 'homefront-families', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Homefront Live · a day at basic training', desc: 'Recruits and instructors answer families’ questions.' },
  { gw: 'army', type: 'Event', icon: '🎄', time: 'Dec 2', title: 'Live: Christmas apart, together', desc: 'Forces Families Together shares traditions.' },
  { gw: 'army', zone: 'ridgeline-kit', type: 'Sale', icon: '🥾', time: 'Dec 3', title: 'Winter boots: 20% off', desc: 'Trail Boots, 20% off.' },
  { gw: 'army', type: 'Event', icon: '🍳', time: 'Dec 5', title: 'Plymouth Veterans’ Breakfast', desc: 'A full breakfast and good company.' },
  { gw: 'army', zone: 'second-watch-coffee', type: 'Event', icon: '☕', time: 'Dec 6', title: 'Roastery open morning', desc: 'Plymouth: coffee, cake and a tour.' },
  { gw: 'army', zone: 'pathfinder-careers', type: 'Event', icon: '📝', time: 'Dec 8', title: 'CV workshop for service leavers', desc: 'Online, two hours.' },
  { gw: 'army', type: 'Event', icon: '💬', time: 'Dec 9', title: 'Ask a family counsellor', desc: 'Maya Singh on time apart and homecomings.' },
  { gw: 'army', type: 'Event', icon: '🏃', time: 'Dec 12', title: 'Saturday park session with Ben Carter', desc: 'All levels, Aldershot.' }
]);
})();
/* ═════════ /ARMYXX ═════════ */
