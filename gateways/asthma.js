/* ═════════ ASTHMAXX — a Health demo gateway (2026-11-17, Sean) ═════════
   Built like DoctorXX and GolfXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (light): fresh-air mint, clear teal, soft violet. Home sector: Health.
   Brands, pros and communities are fictional; places are real. Health text explains and signposts, never advises
   on medicines: every app points back to the person’s own asthma action plan. Source of truth: _lab/health/asthmaxx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const TEAL = 'linear-gradient(135deg,#2BB8A3,#0E7A6B)', VIOLET = 'linear-gradient(135deg,#9A7BFF,#5B3FD1)', SKY = 'linear-gradient(135deg,#5BB6F0,#2370B8)', SUN = 'linear-gradient(135deg,#F7C548,#D99A12)';

GATEWAYS.asthma = {
  name: 'AsthmaXX', domain: 'asthmaxx.com', emoji: '🌬️', sector: 'health', live: true,
  tagline: 'The Asthma Universe',
  theme: {
    bg: '#F2FAF7', text: '#123029', cardBg: '#FFFFFF', cardBorder: 'rgba(14,122,107,.13)',
    headerBg: 'linear-gradient(180deg,#DDF3EC,#F2FAF7)', accent: '#0E9A86', accentAlt: '#7C5CFC', dark: false
  },
  gradient: 'linear-gradient(135deg,#0E7A6B,#2BB8A3,#7C5CFC)',
  stats: { members: '3.1M', brands: '1,200+', agents: '46' },
  spaces: ['All Feed', 'Kids & Parents', 'Triggers & Seasons', 'Running & Sport', 'Home & Air', 'Inhaler Tips'],
  trending: ['#AsthmaActionPlan', '#ColdAirRunning', '#PollenSeason'],
  brandZones: [
    { key: 'clearleaf-air', name: 'Clearleaf Air', color: '#0E9A86', tier: 'Founding Partner', tag: 'Quiet air purifiers for bedrooms and classrooms' },
    { key: 'puffin-packs', name: 'Puffin Packs', color: '#7C5CFC', tier: 'Brand Zone', tag: 'Inhaler cases and spacer bags kids want to carry' },
    { key: 'dustproof-home', name: 'Dustproof Home', color: '#2370B8', tier: 'Brand Zone', tag: 'Allergy-proof bedding covers that feel like bedding' },
    { key: 'stride-air', name: 'Stride Air', color: '#D99A12', tier: 'Brand Zone', tag: 'Winter running kit that warms the air you breathe' }
  ],
  apps: [
    { name: 'Peak Flow Diary', color: '#0E9A86', desc: 'Morning and evening readings against your best', key: 'peak-flow', url: 'apps/peak-flow.html',
      dev: 'Airwave Software', rating: '4.8', users: '780K', perms: ['profile', 'feed'],
      tagline: 'See the dip before the bad day.',
      about: 'Peak Flow Diary logs your morning and evening peak flow and shows each reading as a share of your personal best, in the green, amber and red zones you agreed with your nurse or doctor. Two weeks on one chart, ready for your next asthma review. Always follow your own asthma action plan.',
      features: ['Morning and evening readings', 'Each reading against your personal best', 'Zones from your action plan', 'Two-week chart for your review'],
      shots: ['apps/peak-flow/shot-1.jpg', 'apps/peak-flow/shot-2.jpg', 'apps/peak-flow/shot-3.jpg'],
      version: '4.1', size: '10 KB',
      updates: [ { v: '4.1', ago: 3, notes: 'Two-week chart with your zones.' }, { v: '4.0', ago: 75, notes: 'Set your personal best.' }, { v: '3.5', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@wheezy_will', stars: 5, ago: 2, text: 'Showed the chart at my review and my plan got changed for the better.' }, { who: '@asthmamum_ama', stars: 5, ago: 10, text: 'Doing my daughter’s readings is a game now.' }, { who: '@runner_rhi', stars: 4, ago: 22, text: 'Would love a reminder at 8am.' } ] },
    { name: 'Inhaler Tracker', color: '#7C5CFC', desc: 'Doses left, preventer streak, renewal reminder', key: 'inhaler-tracker', url: 'apps/inhaler-tracker.html',
      dev: 'Puffin Packs', rating: '4.7', users: '540K', perms: ['profile', 'feed'],
      tagline: 'Never find an empty inhaler at 2am.',
      about: 'Inhaler Tracker counts the doses left in each inhaler as you use it, keeps a streak for taking your preventer as prescribed, and tells you when to order the next one. It also notes how often you reach for your reliever, which is worth telling your nurse about. Doses are the ones on your prescription; the app never suggests changing them.',
      features: ['Doses left in every inhaler', 'Preventer streak', 'Reorder reminder', 'Reliever use this week'],
      shots: ['apps/inhaler-tracker/shot-1.jpg', 'apps/inhaler-tracker/shot-2.jpg', 'apps/inhaler-tracker/shot-3.jpg'],
      version: '3.3', size: '10 KB',
      updates: [ { v: '3.3', ago: 4, notes: 'Reliever use this week, with a nudge to talk to your nurse.' }, { v: '3.0', ago: 95, notes: 'Preventer streak.' }, { v: '2.6', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@asthmamum_ama', stars: 5, ago: 1, text: 'No more shaking inhalers to guess if they are empty.' }, { who: '@wheezy_will', stars: 5, ago: 8, text: 'Fifty-day preventer streak. Never managed that before.' }, { who: '@coach_jas', stars: 4, ago: 26, text: 'I get my runners to use it.' } ] },
    { name: 'Air Check', color: '#D99A12', desc: 'Pollen, air quality and cold air, with your triggers', key: 'air-check', url: 'apps/air-check.html',
      dev: 'Clearleaf Air', rating: '4.6', users: '460K', perms: ['profile', 'feed'],
      tagline: 'Know what the air is doing today.',
      about: 'Air Check shows the day’s pollen, air quality and temperature for your town, and highlights the ones that match the triggers you have ticked. Log how your chest feels each day, and over time you will see which days are your hard days. This demo shows a sample forecast for Leeds.',
      features: ['Pollen, air quality and cold air', 'Highlights your own triggers', 'Three-day outlook', 'Daily symptom log'],
      shots: ['apps/air-check/shot-1.jpg', 'apps/air-check/shot-2.jpg', 'apps/air-check/shot-3.jpg'],
      version: '2.2', size: '9 KB',
      updates: [ { v: '2.2', ago: 5, notes: 'Cold-air warning for runners.' }, { v: '2.0', ago: 80, notes: 'Trigger matching.' }, { v: '1.7', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@runner_rhi', stars: 5, ago: 3, text: 'The cold-air warning is spot on for my morning runs.' }, { who: '@hayfever_hal', stars: 5, ago: 12, text: 'Grass pollen days, sorted.' }, { who: '@wheezy_will', stars: 4, ago: 29, text: 'More towns please.' } ] }
  ],
  pros: [
    { key: 'emma-clarke-asthma-nurse', name: 'Emma Clarke Asthma Nurse', color: '#0E9A86', tag: 'Respiratory nurse specialist · inhaler technique and action plan reviews', role: 'Asthma nurse',
      img: U('1494790108377-be9c29b29330', 800, 800), base: 'Nottingham, UK', langs: 'English', years: 17, rating: '4.9', reviewsN: 532, cur: '£',
      creds: ['Registered nurse (NMC)', 'Respiratory nurse specialist', 'Fifteen years in NHS asthma clinics'],
      about: 'Emma ran asthma clinics in the NHS for fifteen years. She checks inhaler technique on video, talks through your asthma action plan and helps you prepare the right questions for your GP or asthma nurse. She never changes prescriptions: that stays with your own team.',
      services: [ { id: 'tech', name: 'Inhaler technique check', dur: '30 minutes', price: 35, desc: 'On video: every inhaler you use, checked and coached.' },
                  { id: 'plan', name: 'Action plan walkthrough', dur: '45 minutes', price: 50, desc: 'Understand your plan, and what to ask at your next review.' },
                  { id: 'parents', name: 'Parents’ asthma session', dur: '60 minutes', price: 60, desc: 'For parents of a child with asthma: spacers, triggers, school.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:00', '12:30', '19:00'] },
      reviews: [ { who: '@asthmamum_ama', stars: 5, ago: 3, text: 'Turns out we had been using the spacer wrong for two years.' }, { who: '@wheezy_will', stars: 5, ago: 15, text: 'Went to my review with good questions for the first time.' }, { who: '@grandma_glenda', stars: 5, ago: 39, text: 'Patient and clear.' } ],
      posts: [ { ago: 1, text: 'Most people make at least one mistake with their inhaler. Ask for a technique check at every review.' }, { ago: 6, text: 'Your asthma action plan should be on the fridge, not in a drawer.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'tom-price-breathing', name: 'Tom Price Breathing Coach', color: '#7C5CFC', tag: 'Breathing retraining for people with asthma · alongside your usual treatment', role: 'Breathing coach',
      img: U('1568602471122-7832951cc4c5', 800, 800), base: 'Bristol, UK', langs: 'English', years: 10, rating: '4.8', reviewsN: 264, cur: '£',
      creds: ['Respiratory physiotherapist (HCPC)', 'Breathing pattern specialist', 'Yoga teacher'],
      about: 'Tom is a respiratory physiotherapist who teaches breathing exercises that many people with asthma find help them feel more in control. They work alongside your inhalers and action plan, never instead of them.',
      services: [ { id: 'one', name: 'Breathing assessment', dur: '60 minutes', price: 70, desc: 'How you breathe now, and three exercises to start with.' },
                  { id: 'course', name: 'Four-week course', dur: '4 × 45 minutes', price: 220, desc: 'Weekly online sessions and a daily ten-minute practice.' },
                  { id: 'group', name: 'Group class', dur: '60 minutes', price: 15, desc: 'Online, every Wednesday evening.' } ],
      avail: { days: [1, 3, 4, 6], times: ['08:00', '13:00', '19:30'] },
      reviews: [ { who: '@wheezy_will', stars: 5, ago: 6, text: 'I feel calmer when my chest is tight now.' }, { who: '@runner_rhi', stars: 5, ago: 19, text: 'Breathing through my nose on easy runs changed everything.' }, { who: '@grandma_glenda', stars: 4, ago: 42, text: 'Gentle and kind.' } ],
      posts: [ { ago: 2, text: 'Breathing exercises are a partner to your inhalers, not a replacement. Keep taking your preventer.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'jas-singh-running', name: 'Jas Singh Running Coach', color: '#D99A12', tag: 'Run coach for people with asthma · couch to 5K, half marathon', role: 'Running coach',
      img: U('1521119989659-a83eee488004', 800, 800), base: 'Leeds, UK', langs: 'English, Punjabi', years: 9, rating: '4.9', reviewsN: 341, cur: '£',
      creds: ['UK Athletics run leader', 'Coach in Running Fitness', 'Lives with asthma'],
      about: 'Jas has had asthma since childhood and has run eleven marathons. He coaches runners with asthma in Leeds and online: warm-ups, pacing, cold-air days and how to plan training around your action plan.',
      services: [ { id: 'c25k', name: 'Couch to 5K for asthma', dur: '9 weeks', price: 80, desc: 'A Saturday group along the Leeds Liverpool Canal.' },
                  { id: 'plan', name: 'Personal training plan', dur: '12 weeks', price: 140, desc: 'Built round your races, your asthma and your week.' },
                  { id: 'session', name: 'One-to-one run session', dur: '60 minutes', price: 40, desc: 'Form, pacing and warm-ups in Roundhay Park.' } ],
      avail: { days: [2, 4, 6, 0], times: ['07:00', '09:00', '18:00'] },
      reviews: [ { who: '@runner_rhi', stars: 5, ago: 4, text: 'From wheezing at 2K to a sub-30 5K.' }, { who: '@wheezy_will', stars: 5, ago: 18, text: 'The long warm-up is the secret.' }, { who: '@hayfever_hal', stars: 5, ago: 37, text: 'Planned my spring half round the pollen. Smart.' } ],
      posts: [ { ago: 1, text: 'Cold morning? Warm up for fifteen minutes, cover your mouth with a buff, and keep your reliever in your pocket.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'asthma-parents', name: 'Asthma Parents', domain: 'parents.asthmaxx.com', color: '#7C5CFC', img: U('1705750764097-41d9662ae865', 900, 500),
      scope: 'Global', where: 'Every school run', members: 74200, online: 1380, tagline: 'Spacers, school trips and sleepless nights, shared.',
      about: 'Parents and carers of children with asthma. Getting a five-year-old to use a spacer, talking to school, coping with winter colds, and the moment your child’s breathing finally settles. Experience here; medical advice from your own team.',
      rules: ['Share experience, not medical advice', 'Be kind, everyone is tired', 'Emergencies: call 999, not the forum'],
      mods: ['@asthmamum_ama', '@dad_of_three_dev'],
      threads: [ { t: 'How did you get your toddler to use a spacer?', by: '@asthmamum_ama', tag: 'SPACERS', replies: 386, ago: 0, votes: 840 }, { t: 'School asthma plans: what to put in', by: '@dad_of_three_dev', tag: 'SCHOOL', replies: 142, ago: 1, votes: 310 }, { t: 'Winter colds: how do you get through November?', by: '@asthmamum_ama', tag: 'WINTER', replies: 228, ago: 2, votes: 412 }, { t: 'She ran the whole school cross-country', by: '@dad_of_three_dev', tag: 'STORIES', replies: 96, ago: 3, votes: 690 } ],
      events: [ { title: 'Back-to-school asthma chat', day: 3, time: '20:00', where: 'Online' }, { title: 'Spacer tips with an asthma nurse', day: 9, time: '19:30', where: 'Online' } ] },
    { key: 'run-easy-leeds', name: 'Run Easy Leeds', domain: 'leeds.asthmaxx.com', color: '#D99A12', img: U('1739368732843-800f36a9b7d0', 900, 500),
      scope: 'Local', where: 'Leeds', members: 1240, online: 38, tagline: 'Runners with asthma. Nobody gets left behind.',
      about: 'A running group in Leeds for people with asthma. Easy-paced runs along the canal and round Roundhay Park, a long warm-up every time, and a group that waits.',
      rules: ['Reliever in your pocket', 'No one runs alone', 'Warm up properly'],
      mods: ['@coach_jas', '@runner_rhi'],
      threads: [ { t: 'Sunday: Roundhay Park 5K, meet at the Mansion', by: '@coach_jas', tag: 'RUN', replies: 28, ago: 0, votes: 46 }, { t: 'Best buff for frosty mornings?', by: '@runner_rhi', tag: 'KIT', replies: 34, ago: 1, votes: 52 }, { t: 'Leeds Half 2027: who is in?', by: '@coach_jas', tag: 'RACES', replies: 41, ago: 2, votes: 68 } ],
      events: [ { title: 'Roundhay Park easy 5K', day: 5, time: '09:00', where: 'Roundhay Park, Leeds' }, { title: 'Canal towpath run', day: 8, time: '18:30', where: 'Granary Wharf, Leeds' } ] }
  ],
  feed: [
    { av: 'AX', avBg: TEAL, author: 'AsthmaXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Triggers, inhalers, kids, running and clean air at home. From a new diagnosis to your first marathon: living well with asthma, all in one place.',
      img: U('1760389003439-c69220f03e1b', 800, 600), eng: '♡ 31.4K · 💬 2.9K · ↗ 3.2K' },
    { av: 'RR', avBg: SUN, author: '@runner_rhi', sub: 'Running & Sport · Just now', badge: 'COMMUNITY',
      text: 'Minus two in Roundhay Park this morning. Fifteen-minute warm-up, buff over my mouth, and my first 10K without stopping. Thanks Run Easy Leeds 🏃‍♀️',
      img: U('1576751691889-568b63882cd5', 800, 600), eng: '♡ 11.8K · 💬 1.4K · ↗ 420' },
    { av: 'CA', avBg: TEAL, author: 'Clearleaf Air', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Clearleaf Sleep</b> purifier runs at 22 decibels, quieter than a whisper, and cleans a bedroom’s air five times an hour.',
      img: U('1730299789489-b55bf96b22bf', 800, 600), eng: '♡ 7.6K · 💬 640 · ↗ 820' },
    { av: 'PP', avBg: VIOLET, author: 'Puffin Packs', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'A spacer bag shaped like a puffin. Kids carry it. Teachers can find it. Parents stop worrying. The <b>Puffin Spacer Bag</b> is back in stock.',
      img: U('1788201640829-5981e7ed4adf', 800, 600), eng: '♡ 4.8K · 💬 380 · ↗ 440' },
    { av: 'AA', avBg: VIOLET, author: '@asthmamum_ama', sub: 'Kids & Parents · 2h ago', badge: 'COMMUNITY',
      text: 'Six weeks of peak flow readings made into a game, one sticker a day. Her nurse said it was the best diary she had seen all year 🌟',
      img: U('1774579892207-ec624f1f03a8', 800, 600), eng: '♡ 6.2K · 💬 720 · ↗ 260' },
    { av: 'DH', avBg: SKY, author: 'Dustproof Home', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Allergy-proof covers that do not crinkle. The <b>Soft Barrier</b> mattress and pillow covers feel like ordinary cotton.',
      img: U('1711059985570-4c32ed12a12c', 800, 600), eng: '♡ 2.4K · 💬 170 · ↗ 190' },
    { av: 'EC', avBg: TEAL, author: 'Emma Clarke Asthma Nurse', sub: 'Inhaler Tips · 6h ago', badge: 'PRO ZONE',
      text: 'Winter tip: keep your action plan where you will see it, and book your review before the colds arrive, not after.',
      img: U('1558912720-8f34899318cb', 800, 600), eng: '♡ 2.8K · 💬 210 · ↗ 380' }
  ],
  prompts: ['What is a peak flow reading and why does it matter?', 'How do I run in cold air with asthma?', 'Tips to help a child use a spacer', 'Find an asthma-friendly running group in Leeds'],
  businesses: ['greenline-clean-air', 'second-breath-recycling']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'asthma', verified: true }, o);
Object.assign(ZONES, {
  'clearleaf-air': brand({ key: 'clearleaf-air', name: 'Clearleaf Air', color: '#0E9A86', gradient: TEAL, tier: 'Founding Partner',
    tagline: 'Quiet air purifiers for bedrooms and classrooms', stats: { followers: '168K', content: '640', products: '22' },
    ad: { badge: 'Featured', img: U('1730299789489-b55bf96b22bf', 760, 760), hl: 'Quieter than a whisper.', sub: 'The Clearleaf Sleep purifier, for the bedroom.', meta: 'From £19' },
    products: [
      { name: 'Clearleaf Sleep Purifier', price: '£189', tag: 'FLAGSHIP', emoji: '🌬️', rating: 4.8, reviews: 3640, cat: 'purifiers', special: true, desc: 'A true HEPA purifier for bedrooms up to 25 m², at 22 decibels on its night setting.', features: ['HEPA H13 filter', '22 dB night mode', 'Air quality light'], review: { who: 'Will T.', text: 'The room feels fresher and it is silent.' } },
      { name: 'Clearleaf Home Purifier', price: '£289', tag: 'BESTSELLER', emoji: '🏠', rating: 4.8, reviews: 2180, cat: 'purifiers', desc: 'For living rooms and open-plan spaces up to 50 m².', features: ['HEPA H13 + carbon', 'App control'], review: { who: 'Ama O.', text: 'Fewer sneezes in the lounge.' } },
      { name: 'Classroom Purifier', price: '£449', tag: 'SPECIAL', emoji: '🏫', rating: 4.9, reviews: 640, cat: 'purifiers', special: true, desc: 'Built for a classroom of thirty, with a CO₂ display for when to open a window.', features: ['CO₂ display', 'Tamper-proof'], review: { who: 'Dev K.', text: 'Our PTA bought one for every class.' } },
      { name: 'Replacement Filter', price: '£39', emoji: '🔁', rating: 4.7, reviews: 2960, cat: 'filters', desc: 'A new HEPA and carbon filter, every six to twelve months.', features: ['Fits Sleep and Home'], review: { who: 'Glenda P.', text: 'Easy to change.' } },
      { name: 'Filter Subscription', price: '£19', emoji: '📦', rating: 4.8, reviews: 1220, cat: 'filters', desc: 'A filter sent to you every six months, a little cheaper.', features: ['Cancel any time'], review: { who: 'Hal B.', text: 'Never forget again.' } }
    ],
    shopCats: [ { key: 'purifiers', label: 'Purifiers', icon: '🌬️' }, { key: 'filters', label: 'Filters', icon: '🔁' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 3h', text: 'The <b>Clearleaf Sleep</b>: 22 decibels, five air changes an hour.', img: U('1761330440311-16e160cad236', 800, 440), eng: '♡ 7.6K · 💬 640 · ↗ 820', product: 0 },
      { type: 'post', sub: 'For schools · Yesterday', text: 'Three hundred classrooms in Yorkshire now have a Clearleaf, and a CO₂ display that tells teachers when to open a window.', img: U('1766243062910-bda898a2470c', 800, 440), eng: '♡ 3.4K · 💬 260' },
      { type: 'community', who: 'Ama O.', whoBg: VIOLET, sub: 'Community · 1d', text: 'Will a purifier help my daughter’s asthma at night?', eng: '♡ 214 · 💬 66', reply: 'Hi Ama, a purifier can cut dust, pet dander and pollen in the bedroom air, which helps some people with those triggers. It is not a treatment, so keep to her action plan, and ask her asthma nurse which of her triggers matter most. If dust mites are one, our Sleep model and Dustproof Home covers are a good pair. 🌬️' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Clearleaf Air Live · Winter air at home', when: 'Live now', desc: 'An air-quality scientist answers your questions about damp, mould and clean air indoors.', registered: 3860, capacity: 9000 } ],
    about: { founded: 'Leeds · 2016', story: 'Two engineers, one with asthma, who wanted a purifier quiet enough to sleep next to. We joined GENEXXO as AsthmaXX’s Founding Partner because this is where people who care about the air they breathe gather.', milestones: [['2016', 'The first Sleep purifier'], ['2023', 'The Classroom purifier'], ['2026', 'Founding Partner on AsthmaXX']], values: ['Quiet by design', 'Honest about what purifiers can do', 'Filters recycled'] } }),

  'puffin-packs': brand({ key: 'puffin-packs', name: 'Puffin Packs', color: '#7C5CFC', gradient: VIOLET, tier: 'Brand Zone',
    tagline: 'Inhaler cases and spacer bags kids want to carry', stats: { followers: '52.4K', content: '280', products: '36' },
    ad: { badge: 'New', img: U('1788201640829-5981e7ed4adf', 760, 760), hl: 'The Puffin Spacer Bag.', sub: 'Kids carry it. Teachers find it.', meta: 'From £8' },
    products: [
      { name: 'Puffin Spacer Bag', price: '£22', tag: 'FLAGSHIP', emoji: '🐧', rating: 4.9, reviews: 3220, cat: 'bags', special: true, desc: 'A padded bag for a spacer, inhalers and the action plan, with a name tag and a bright puffin face.', features: ['Fits most spacers', 'Clear plan pocket', 'Clips to a school bag'], review: { who: 'Ama O.', text: 'She shows it off to her friends.' } },
      { name: 'Inhaler Case', price: '£12', tag: 'BESTSELLER', emoji: '🎒', rating: 4.8, reviews: 4180, cat: 'cases', desc: 'A hard case that clips to a belt or bag, with a carabiner.', features: ['Fits most inhalers', 'Six colours'], review: { who: 'Rhi J.', text: 'Clipped to my running belt.' } },
      { name: 'Spacer Mask Stickers', price: '£8', emoji: '⭐', rating: 4.7, reviews: 1460, cat: 'kids', desc: 'Sticker sheets to decorate a spacer, and a reward chart.', features: ['Wipe-clean'], review: { who: 'Dev K.', text: 'Turned spacer time into fun.' } },
      { name: 'School Asthma Kit', price: '£28', tag: 'SPECIAL', emoji: '🏫', rating: 4.9, reviews: 860, cat: 'bags', special: true, desc: 'A spacer bag, a spare inhaler case and a printed school plan template.', features: ['Name labels included'], review: { who: 'Glenda P.', text: 'Ready for the new term in one box.' } }
    ],
    shopCats: [ { key: 'bags', label: 'Spacer bags', icon: '🐧' }, { key: 'cases', label: 'Inhaler cases', icon: '🎒' }, { key: 'kids', label: 'Stickers & charts', icon: '⭐' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Back in stock: the <b>Puffin Spacer Bag</b>.', img: U('1778076498997-0bc0fd11397e', 800, 440), eng: '♡ 4.8K · 💬 380', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 18 · 23:59', desc: 'Order by midnight on 18 December for delivery before Christmas.', registered: 1120, capacity: 4000 } ],
    about: { founded: 'Aberdeen · 2019', story: 'A mum whose son kept losing his spacer at school, and a toy designer. The puffin is from the cliffs near our studio.', milestones: [['2019', 'The first spacer bag'], ['2024', 'School kits in 2,000 schools'], ['2026', 'Brand Zone on AsthmaXX']], values: ['Made for kids to love', 'Easy for teachers to find', 'Recycled fabrics'] } }),

  'dustproof-home': brand({ key: 'dustproof-home', name: 'Dustproof Home', color: '#2370B8', gradient: SKY, tier: 'Brand Zone',
    tagline: 'Allergy-proof bedding covers that feel like bedding', stats: { followers: '33.8K', content: '190', products: '28' },
    ad: { badge: 'Featured', img: U('1711059985570-4c32ed12a12c', 760, 760), hl: 'Covers that do not crinkle.', sub: 'Soft Barrier mattress and pillow covers.', meta: 'From £14' },
    products: [
      { name: 'Soft Barrier Mattress Cover', price: '£69', tag: 'FLAGSHIP', emoji: '🛏️', rating: 4.8, reviews: 1980, cat: 'covers', special: true, desc: 'A tightly woven cotton cover that keeps dust mites in the mattress and away from you.', features: ['Zipped on all sides', 'Washable at 60°', 'Silent: no plastic'], review: { who: 'Will T.', text: 'Mornings are so much better.' } },
      { name: 'Pillow Covers (2)', price: '£24', tag: 'BESTSELLER', emoji: '🛌', rating: 4.8, reviews: 2640, cat: 'covers', desc: 'The same barrier fabric, for pillows.', features: ['Zipped', 'Washable at 60°'], review: { who: 'Hal B.', text: 'Soft and quiet.' } },
      { name: 'Duvet Cover (barrier)', price: '£59', emoji: '☁️', rating: 4.7, reviews: 920, cat: 'covers', desc: 'Covers the duvet itself, under your normal duvet cover.', features: ['Single to king'], review: { who: 'Ama O.', text: 'Easy to fit.' } },
      { name: 'Hot-Wash Laundry Bag', price: '£14', emoji: '🧺', rating: 4.6, reviews: 740, cat: 'care', desc: 'For soft toys that need a 60° wash.', features: ['Two sizes'], review: { who: 'Dev K.', text: 'Teddy survived.' } }
    ],
    shopCats: [ { key: 'covers', label: 'Covers', icon: '🛏️' }, { key: 'care', label: 'Laundry', icon: '🧺' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'The <b>Soft Barrier</b> mattress cover feels like ordinary cotton.', img: U('1631049552057-403cdb8f0658', 800, 440), eng: '♡ 2.4K · 💬 170', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday bedding sale', when: 'Nov 27 · All day', desc: 'A third off every cover for one day.', registered: 1460, capacity: 5000 } ],
    about: { founded: 'Kendal · 2013', story: 'A family textile business that started weaving barrier fabric when a granddaughter was diagnosed with a dust mite allergy.', milestones: [['2013', 'The first barrier cover'], ['2021', 'The Soft Barrier range'], ['2026', 'Brand Zone on AsthmaXX']], values: ['No plastic membranes', 'Woven in Cumbria', 'Washable at 60°'] } }),

  'stride-air': brand({ key: 'stride-air', name: 'Stride Air', color: '#D99A12', gradient: SUN, tier: 'Brand Zone',
    tagline: 'Winter running kit that warms the air you breathe', stats: { followers: '29.6K', content: '160', products: '30' },
    ad: { badge: 'Featured', img: U('1576751691889-568b63882cd5', 760, 760), hl: 'Warmer air, every breath.', sub: 'The Thermal Run Buff, for frosty mornings.', meta: 'From £6' },
    products: [
      { name: 'Thermal Run Buff', price: '£22', tag: 'FLAGSHIP', emoji: '🧣', rating: 4.8, reviews: 2860, cat: 'buffs', special: true, desc: 'A merino buff with a breathable mesh panel over the mouth that warms the air you breathe.', features: ['Merino', 'Mesh breathing panel'], review: { who: 'Rhi J.', text: 'Frosty runs without the cough.' } },
      { name: 'Running Belt with Inhaler Pocket', price: '£26', tag: 'BESTSELLER', emoji: '🏃', rating: 4.8, reviews: 1740, cat: 'belts', desc: 'A bounce-free belt with a quick-grab pocket sized for an inhaler.', features: ['Reflective', 'Phone pocket'], review: { who: 'Jas S.', text: 'I recommend it to every runner I coach.' } },
      { name: 'Thermal Running Top', price: '£45', emoji: '👕', rating: 4.7, reviews: 1120, cat: 'tops', desc: 'Brushed inside, light outside, reflective for dark mornings.', features: ['Thumb loops'], review: { who: 'Will T.', text: 'Warm and not sweaty.' } },
      { name: 'Clip-On Light', price: '£12', emoji: '🔦', rating: 4.6, reviews: 960, cat: 'belts', desc: 'A small rechargeable light for winter runs.', features: ['USB-C'], review: { who: 'Hal B.', text: 'Bright and light.' } }
    ],
    shopCats: [ { key: 'buffs', label: 'Buffs', icon: '🧣' }, { key: 'belts', label: 'Belts & lights', icon: '🏃' }, { key: 'tops', label: 'Tops', icon: '👕' } ],
    feed: [ { type: 'post', sub: 'Brand post · 2h', text: 'The <b>Thermal Run Buff</b>: made for minus two in Roundhay Park.', img: U('1559166515-3452b9ed1e05', 800, 440), eng: '♡ 1.8K · 💬 130', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Winter run and kit test, Leeds', when: 'Dec 7 · Roundhay Park', desc: 'Try the winter range on an easy 5K with Run Easy Leeds.', registered: 180, capacity: 300 } ],
    about: { founded: 'Sheffield · 2018', story: 'A fell runner with exercise-induced asthma who sewed a mesh panel into a buff, and kept going.', milestones: [['2018', 'The first Thermal Run Buff'], ['2023', 'The inhaler-pocket belt'], ['2026', 'Brand Zone on AsthmaXX']], values: ['Made for real winters', 'Tested in the Peak District', 'Repairs for life'] } }),

  'greenline-clean-air': { key: 'greenline-clean-air', kind: 'business', gw: 'asthma', name: 'Greenline Clean Air Services', color: '#0E9A86', gradient: TEAL, img: U('1768471569643-717e823b5f9a', 900, 500),
    tier: 'Verified', category: 'Indoor air quality', tagline: 'Ventilation and air-quality surveys for schools and offices.',
    about: { founded: 'Manchester · 2008', story: 'We measure and improve the air inside schools, offices and homes: ventilation, damp and mould, and filtration.' },
    stats: { years: 18, staff: 120, clients: '1,400 schools & offices' },
    caps: [ { name: 'Air-quality surveys', detail: 'CO₂, particulates and humidity measured room by room.' }, { name: 'Ventilation upgrades', detail: 'Fans and heat-recovery ventilation, fitted in the holidays.' }, { name: 'Damp and mould', detail: 'Causes found and fixed in rented and social homes.' } ],
    specs: { moq: '1 building', lead: '2–6 weeks', regions: 'North of England', certs: ['ISO 9001', 'ISO 14001', 'Ventilation installer accreditation'] },
    supplies: [ { kind: 'brand', key: 'clearleaf-air', what: 'Classroom purifiers fitted with every school survey' } ],
    cases: [ { title: 'Primary schools, Greater Manchester', text: 'CO₂ monitors and ventilation fixes in 60 schools.' } ],
    feed: [ { sub: 'Homes · 3d', text: 'Winter is damp season. Free mould checks for social landlords until March.' }, { sub: 'Schools · 1w', text: 'Holiday installation slots for February half-term are open.' } ],
    contact: { person: 'Laura Okoye, Schools', response: 'Replies within one working day' } },

  'second-breath-recycling': { key: 'second-breath-recycling', kind: 'business', gw: 'asthma', name: 'Second Breath Inhaler Recycling', color: '#7C5CFC', gradient: VIOLET, img: U('1733751681919-510acfe890dc', 900, 500),
    tier: 'Verified', category: 'Medical recycling', tagline: 'Used inhalers collected from pharmacies and recycled.',
    about: { founded: 'Glasgow · 2015', story: 'We collect used inhalers from pharmacies, safely recover the leftover propellant gas, and recycle the plastic and aluminium.' },
    stats: { years: 11, staff: 64, clients: '3,200 pharmacies' },
    caps: [ { name: 'Pharmacy collection', detail: 'Return bins in every partner pharmacy, emptied monthly.' }, { name: 'Gas recovery', detail: 'Leftover propellant captured, not released.' }, { name: 'Material recycling', detail: 'Aluminium and plastic sorted and recycled.' } ],
    specs: { moq: '1 pharmacy', lead: 'Bins within 2 weeks', regions: 'UK-wide', certs: ['Waste carrier licence', 'ISO 14001', 'Carbon-reporting partner'] },
    supplies: [ { kind: 'brand', key: 'puffin-packs', what: 'Return envelopes in every School Asthma Kit' } ],
    cases: [ { title: 'Scotland pilot', text: 'Half a million inhalers recycled in two years.' } ],
    feed: [ { sub: 'Impact · 1w', text: 'Take your used inhalers back to the pharmacy: never in the household bin.' } ],
    contact: { person: 'Callum Reid, Pharmacy partners', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('asthma', [
  { gw: 'asthma', zone: 'clearleaf-air', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Clearleaf Air Live · Winter air at home', desc: 'An air-quality scientist answers questions about damp, mould and clean air indoors.' },
  { gw: 'asthma', type: 'Event', icon: '🎒', time: 'Nov 20', title: 'Asthma Parents: school asthma chat', desc: 'An online chat on school plans, spare inhalers and PE.' },
  { gw: 'asthma', type: 'Event', icon: '🏃', time: 'Nov 22', title: 'Run Easy Leeds: Roundhay Park 5K', desc: 'An easy-paced 5K with a long warm-up. Reliever in your pocket.' },
  { gw: 'asthma', zone: 'dustproof-home', type: 'Sale', icon: '🛏️', time: 'Nov 27', title: 'Dustproof Home Black Friday sale', desc: 'A third off every barrier cover for one day.' },
  { gw: 'asthma', type: 'Event', icon: '🫁', time: 'Dec 2', title: 'Breathing class with Tom Price', desc: 'An online group class: breathing exercises alongside your usual treatment.' },
  { gw: 'asthma', type: 'Event', icon: '⭐', time: 'Dec 4', title: 'Spacer tips with an asthma nurse', desc: 'Asthma Parents with Emma Clarke: getting little ones to use a spacer. Online.' },
  { gw: 'asthma', zone: 'stride-air', type: 'Event', icon: '🧣', time: 'Dec 7', title: 'Winter run and kit test, Leeds', desc: 'Stride Air: try the winter range on an easy 5K in Roundhay Park.' },
  { gw: 'asthma', zone: 'puffin-packs', type: 'Deadline', icon: '🐧', time: 'Dec 18', title: 'Last order for Christmas delivery', desc: 'Puffin Packs: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /ASTHMAXX ═════════ */
