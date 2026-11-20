/* ═════════ CALISTHENICSXX — a Fitness demo gateway (2026-11-20, Sean; build -88) ═════════
   Built like SushiXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (dark): graphite, power red, chalk white. Home sector: Fitness. Tone: progressions over ego; warm up, build up
   gradually, stop if it hurts and see a physio or GP about injuries. Brands, pros and communities are fictional; places are real. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const RED = 'linear-gradient(135deg,#EF4444,#991B1B)', SLATE = 'linear-gradient(135deg,#64748B,#1E293B)', CHALK = 'linear-gradient(135deg,#E7E5E4,#A8A29E)', AMBER = 'linear-gradient(135deg,#F5C451,#B7791F)';

GATEWAYS.calisthenics = {
  name: 'CalisthenicsXX', domain: 'calisthenicsxx.com', emoji: '🤸', sector: 'fitness', live: true,
  tagline: 'The Calisthenics Universe',
  theme: {
    bg: '#111214', text: '#F4F4F5', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(239,68,68,.16)',
    headerBg: 'linear-gradient(180deg,#2A1416,#111214)', accent: '#EF4444', accentAlt: '#F5C451', dark: true
  },
  gradient: 'linear-gradient(135deg,#1E293B,#991B1B,#EF4444)',
  stats: { members: '5.2M', brands: '2,600+', agents: '61' },
  spaces: ['All Feed', 'First Pull-Up', 'Skills', 'Handstands', 'Street Workout', 'Mobility'],
  trending: ['#FirstPullUp', '#FrontLever', '#HandstandDaily'],
  brandZones: [
    { key: 'barline-rigs', name: 'Barline Rigs', color: '#EF4444', tier: 'Founding Partner', tag: 'Bars, rings and rigs for home and park' },
    { key: 'grip-theory', name: 'Grip Theory', color: '#F5C451', tier: 'Brand Zone', tag: 'Chalk, grips and hand care' },
    { key: 'lever-apparel', name: 'Lever Apparel', color: '#94A3B8', tier: 'Brand Zone', tag: 'Training wear that moves upside down' },
    { key: 'paralette-co', name: 'Paralette Co.', color: '#A8A29E', tier: 'Brand Zone', tag: 'Parallettes and blocks, made from ash' }
  ],
  apps: [
    { name: 'Skill Ladder', color: '#EF4444', desc: 'Progressions for every skill, one rung at a time', key: 'skill-ladder', url: 'apps/skill-ladder.html',
      dev: 'Barline Rigs', rating: '4.9', users: '1.8M', perms: ['profile', 'feed'],
      tagline: 'From your first pull-up to your first lever.',
      about: 'Skill Ladder breaks each calisthenics skill into rungs: pull-up, handstand, front lever, muscle-up and more. Log your best hold or set at each rung, and it tells you when you’re ready to try the next one (usually when you can do the current rung cleanly three sessions running).',
      features: ['Rungs for seven skills', 'Log holds and reps', 'Ready-to-progress checks', 'Share a new rung to CalisthenicsXX'],
      shots: ['apps/skill-ladder/shot-1.jpg', 'apps/skill-ladder/shot-2.jpg', 'apps/skill-ladder/shot-3.jpg'],
      version: '4.2', size: '10 KB',
      updates: [ { v: '4.2', ago: 2, notes: 'Front lever ladder.' }, { v: '4.0', ago: 70, notes: 'Ready-to-progress checks.' }, { v: '3.4', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@bar_ben', stars: 5, ago: 1, text: 'Negatives to bands to my first strict pull-up in nine weeks.' }, { who: '@handstand_hana', stars: 5, ago: 9, text: 'Stopped me rushing the straddle.' }, { who: '@park_pete', stars: 4, ago: 22, text: 'Want planche next.' } ] },
    { name: 'Interval Timer', color: '#F5C451', desc: 'EMOM, Tabata and circuits, called out loud', key: 'interval-timer', url: 'apps/interval-timer.html',
      dev: 'Grip Theory', rating: '4.8', users: '960K', perms: ['profile', 'feed'],
      tagline: 'Train. Don’t watch the clock.',
      about: 'Interval Timer runs EMOMs, Tabatas and custom circuits with big numbers and a beep you can hear across a park. Save your favourite workouts and log each session when you finish.',
      features: ['EMOM, Tabata and custom', 'Big, glanceable numbers', 'Saved workouts', 'Session log'],
      shots: ['apps/interval-timer/shot-1.jpg', 'apps/interval-timer/shot-2.jpg', 'apps/interval-timer/shot-3.jpg'],
      version: '3.0', size: '9 KB',
      updates: [ { v: '3.0', ago: 5, notes: 'Custom circuits.' }, { v: '2.6', ago: 90, notes: 'Session log.' }, { v: '2.0', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@park_pete', stars: 5, ago: 3, text: 'Loud enough for the outdoor gym.' }, { who: '@bar_ben', stars: 5, ago: 12, text: 'Clean and simple.' }, { who: '@mobility_mo', stars: 4, ago: 28, text: 'More sound options please.' } ] },
    { name: 'Hold Timer', color: '#94A3B8', desc: 'Time your holds and see your best', key: 'hold-timer', url: 'apps/hold-timer.html',
      dev: 'Lever Apparel', rating: '4.7', users: '610K', perms: ['profile', 'feed'],
      tagline: 'Every second counts.',
      about: 'Hold Timer times static holds: handstand, L-sit, plank, dead hang and lever. Tap to start, tap to stop, and see your personal bests and the trend over the last month.',
      features: ['Six holds', 'Personal bests', 'Last 30 days chart', 'Hands-free start with a countdown'],
      shots: ['apps/hold-timer/shot-1.jpg', 'apps/hold-timer/shot-2.jpg', 'apps/hold-timer/shot-3.jpg'],
      version: '2.3', size: '9 KB',
      updates: [ { v: '2.3', ago: 4, notes: 'Hands-free countdown.' }, { v: '2.0', ago: 80, notes: '30-day chart.' }, { v: '1.6', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@handstand_hana', stars: 5, ago: 2, text: 'Watching my handstand line go up is addictive.' }, { who: '@lsit_lena', stars: 5, ago: 14, text: 'The countdown means I can get set first.' }, { who: '@bar_ben', stars: 4, ago: 31, text: 'Nice and quick.' } ] }
  ],
  pros: [
    { key: 'dan-kowalski-coaching', name: 'Dan Kowalski Calisthenics Coaching', color: '#EF4444', tag: 'Bodyweight strength coaching · first pull-up to muscle-up', role: 'Calisthenics coach',
      img: U('1516082669438-2d2bb5082626', 800, 800), base: 'London, UK · and online', langs: 'English, Polish', years: 11, rating: '4.9', reviewsN: 544, cur: '£',
      creds: ['Level 3 personal trainer', 'Street workout competitor for eight years', 'Coached 900 people to a first pull-up'],
      about: 'Dan coaches strength with nothing but bars and the floor, in parks across south London and online. He builds programmes around your week, your joints and your goal, and he is strict about warm-ups.',
      services: [ { id: 'one', name: 'One-to-one session', dur: '60 minutes', price: 50, desc: 'In a London park or online. Technique first.' },
                  { id: 'plan', name: '12-week programme', dur: '12 weeks, weekly check-in', price: 180, desc: 'A plan for your goal, adjusted every week.' },
                  { id: 'group', name: 'Park group class', dur: '75 minutes', price: 12, desc: 'Saturday mornings, all levels, Brockwell Park.' } ],
      avail: { days: [1, 2, 4, 6], times: ['07:00', '12:30', '18:00'] },
      reviews: [ { who: '@bar_ben', stars: 5, ago: 4, text: 'First muscle-up at 41. Dan never let me skip the boring bits.' }, { who: '@park_pete', stars: 5, ago: 16, text: 'The Saturday class is the best £12 I spend.' }, { who: '@lsit_lena', stars: 5, ago: 40, text: 'Clear cues, real progress.' } ],
      posts: [ { ago: 1, text: 'Can’t do a pull-up yet? Do slow negatives: jump to the top, lower for five seconds. Three sets of three. Twice a week.' }, { ago: 6, text: 'January programme spaces open.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'priya-nair-physio', name: 'Priya Nair Sports Physiotherapy', color: '#F5C451', tag: 'Physiotherapy for climbers, gymnasts and calisthenics athletes', role: 'Physiotherapist',
      img: U('1758518729459-235dcaadc611', 800, 800), base: 'Manchester, UK', langs: 'English, Malayalam', years: 13, rating: '4.9', reviewsN: 372, cur: '£',
      creds: ['HCPC-registered physiotherapist', 'MSc sports and exercise medicine', 'Works with a national gymnastics squad'],
      about: 'Priya treats the injuries bodyweight training tends to cause, mostly elbows, wrists and shoulders, and builds a plan to get you back on the bar safely. If a pain is sharp, or lasts more than a week, she would rather see you early.',
      services: [ { id: 'assess', name: 'Assessment and treatment', dur: '50 minutes', price: 65, desc: 'Find what’s wrong, start fixing it, and a plan to take home.' },
                  { id: 'follow', name: 'Follow-up', dur: '30 minutes', price: 45, desc: 'Check progress and move the plan on.' },
                  { id: 'prehab', name: 'Prehab plan (video)', dur: '45 minutes', price: 55, desc: 'Wrist and shoulder routines before trouble starts.' } ],
      avail: { days: [1, 2, 3, 5], times: ['08:00', '12:00', '17:30'] },
      reviews: [ { who: '@handstand_hana', stars: 5, ago: 6, text: 'Fixed my wrist and taught me why it hurt.' }, { who: '@park_pete', stars: 5, ago: 20, text: 'Back on the rings in six weeks.' }, { who: '@mobility_mo', stars: 5, ago: 46, text: 'Knows this sport inside out.' } ],
      posts: [ { ago: 2, text: 'Wrists need a warm-up too. Circles, rocks on all fours and gentle presses before every handstand session.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'jordan-blake-handstands', name: 'Jordan Blake Handstand Lab', color: '#94A3B8', tag: 'Handstand coaching · first kick-up to press', role: 'Handstand coach',
      img: U('1701826510567-8880c3fa1e98', 800, 800), base: 'Bristol, UK · and online', langs: 'English', years: 8, rating: '4.8', reviewsN: 288, cur: '£',
      creds: ['Former circus performer', 'Handstand coach at a Bristol circus school', 'Teaches online in 30 countries'],
      about: 'Jordan spent ten years balancing upside down for a living. He teaches handstands with patience and a lot of wall work: line first, balance second, tricks much later.',
      services: [ { id: 'review', name: 'Video review', dur: 'Reply within 48 hours', price: 25, desc: 'Send a clip; get three fixes and drills.' },
                  { id: 'block', name: '8-week handstand course', dur: '8 weeks online', price: 120, desc: 'Daily drills, weekly feedback.' },
                  { id: 'workshop', name: 'Handstand workshop', dur: '3 hours', price: 45, desc: 'In Bristol, all levels.' } ],
      avail: { days: [3, 4, 6, 0], times: ['10:00', '15:00'] },
      reviews: [ { who: '@handstand_hana', stars: 5, ago: 5, text: 'My first 30-second freestanding hold. Thank you.' }, { who: '@lsit_lena', stars: 5, ago: 18, text: 'The wall drills changed everything.' }, { who: '@bar_ben', stars: 4, ago: 39, text: 'Hard work and worth it.' } ],
      posts: [ { ago: 3, text: 'Squeeze your bum, push the floor away, look between your hands. That’s 80% of a straight handstand.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'bar-crew', name: 'Bar Crew', domain: 'barcrew.calisthenicsxx.com', color: '#EF4444', img: U('1760331840426-027b269d0af2', 900, 500),
      scope: 'Global', where: 'Every bar in every park', members: 264000, online: 4820, tagline: 'Post your PR. Get a cheer.',
      about: 'Calisthenics athletes of every level: first pull-ups, form checks, progress videos and programme questions. Ego-free, form-first.',
      rules: ['Form checks get honest answers', 'Pain is a reason to rest, not to push', 'Celebrate the small wins'],
      mods: ['@bar_ben', '@park_pete'],
      threads: [ { t: 'My first strict pull-up: share yours', by: '@bar_ben', tag: 'WINS', replies: 1520, ago: 0, votes: 3840 }, { t: 'Form check: tuck front lever', by: '@lsit_lena', tag: 'FORM CHECK', replies: 286, ago: 1, votes: 410 }, { t: 'Training in winter: keep going outside?', by: '@park_pete', tag: 'Q&A', replies: 362, ago: 2, votes: 580 }, { t: 'Elbow pain from muscle-ups', by: '@ring_rory', tag: 'INJURY', replies: 148, ago: 3, votes: 260 } ],
      events: [ { title: 'December pull-up challenge starts', day: 11, time: '07:00', where: 'Online' }, { title: 'Live form-check hour', day: 4, time: '19:00', where: 'Online' } ] },
    { key: 'manchester-street-workout', name: 'Manchester Street Workout', domain: 'manchester.calisthenicsxx.com', color: '#F5C451', img: U('1758521959095-ed05f99551c3', 900, 500),
      scope: 'Local', where: 'Manchester', members: 3800, online: 76, tagline: 'Hulme Park bars, Sunday mornings, all weather.',
      about: 'A free Sunday session at the outdoor bars in Hulme Park, a beginners’ corner, and a winter indoor session when it really is too cold.',
      rules: ['Everyone warms up together', 'Beginners first on the low bars', 'Bring a towel for wet bars'],
      mods: ['@park_pete', '@mcr_mia'],
      threads: [ { t: 'Sunday session: still on in the rain?', by: '@mcr_mia', tag: 'SESSION', replies: 44, ago: 0, votes: 96 }, { t: 'Winter indoor session: venue vote', by: '@park_pete', tag: 'VOTE', replies: 62, ago: 1, votes: 118 }, { t: 'Beginners’ corner this week', by: '@mcr_mia', tag: 'BEGINNERS', replies: 18, ago: 2, votes: 40 } ],
      events: [ { title: 'Sunday bars session', day: 3, time: '10:00', where: 'Hulme Park, Manchester' }, { title: 'Winter indoor session', day: 10, time: '18:30', where: 'Ancoats, Manchester' } ] }
  ],
  feed: [
    { av: 'CX', avBg: RED, author: 'CalisthenicsXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Bars, rings, the floor and your own body. First pull-ups, handstands, levers, street workout and the coaches who get you there safely. Calisthenics, all in one place.',
      img: U('1598266663439-2056e6900339', 800, 600), eng: '♡ 51.4K · 💬 4.2K · ↗ 5.6K' },
    { av: 'PP', avBg: AMBER, author: '@park_pete', sub: 'Street Workout · Just now', badge: 'COMMUNITY',
      text: 'Two years ago I couldn’t hang from this bar for ten seconds. Today: back lever on the rings in the park. Progress is slow, then all at once 💪',
      img: U('1595554919371-7e38f2558855', 800, 600), eng: '♡ 22.6K · 💬 2.8K · ↗ 960' },
    { av: 'BR', avBg: RED, author: 'Barline Rigs', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Ash Rings</b> are back: turned from British ash, with straps that adjust in one pull. Hang them from a beam, a tree or our wall rig.',
      img: U('1571726656333-2640ca759d22', 800, 600), eng: '♡ 11.8K · 💬 920 · ↗ 1.4K' },
    { av: 'GT', avBg: AMBER, author: 'Grip Theory', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Sweaty hands on cold bars? Our <b>Liquid Chalk</b> dries in ten seconds and lasts a whole session.',
      img: U('1634225251578-d5f6ffced78a', 800, 600), eng: '♡ 5.4K · 💬 380 · ↗ 420' },
    { av: 'LH', avBg: SLATE, author: '@lsit_lena', sub: 'Skills · 2h ago', badge: 'COMMUNITY',
      text: 'Saturday session with my sister on the bridge. Side planks to finish, because Dan said so 😅',
      img: U('1627483298235-f3bac2567c1c', 800, 600), eng: '♡ 8.2K · 💬 640 · ↗ 260' },
    { av: 'LA', avBg: SLATE, author: 'Lever Apparel', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Shorts that stay put upside down. The <b>Inversion Short</b> has a liner, a zip pocket and no surprises in a handstand.',
      img: U('1634225252941-66fd95aaa7c3', 800, 600), eng: '♡ 4.6K · 💬 320 · ↗ 380' },
    { av: 'JB', avBg: SLATE, author: 'Jordan Blake Handstand Lab', sub: 'Handstands · 6h ago', badge: 'PRO ZONE',
      text: 'Practise handstands little and often: ten minutes a day beats an hour on Sunday. Your wrists will thank you too.',
      img: U('1701824429252-5ab2b467612b', 800, 600), eng: '♡ 3.8K · 💬 260 · ↗ 540' }
  ],
  prompts: ['How do I get my first pull-up?', 'Plan me a three-day calisthenics week for a beginner', 'Find an outdoor gym near me in Manchester', 'Why do my wrists hurt in handstands?'],
  businesses: ['outdoor-gym-works', 'strengthline-surfaces']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'calisthenics', verified: true }, o);
Object.assign(ZONES, {
  'barline-rigs': brand({ key: 'barline-rigs', name: 'Barline Rigs', color: '#EF4444', gradient: RED, tier: 'Founding Partner',
    tagline: 'Bars, rings and rigs for home and park', stats: { followers: '192K', content: '980', products: '34' },
    ad: { badge: 'Featured', img: U('1772450014180-39e8de531a57', 760, 760), hl: 'The Ash Rings.', sub: 'British ash, straps that adjust in one pull.', meta: 'From £24' },
    products: [
      { name: 'Ash Gymnastic Rings', price: '£48', tag: 'FLAGSHIP', emoji: '⭕', rating: 4.9, reviews: 4860, cat: 'rings', special: true, desc: 'Turned from British ash, 28mm grip, with 5m straps and numbered markings so both rings hang level.', features: ['Holds 300kg', 'Numbered straps'], review: { who: 'Pete R.', text: 'Grippy even in the rain.' } },
      { name: 'Doorway Pull-Up Bar', price: '£34', tag: 'BESTSELLER', emoji: '🚪', rating: 4.7, reviews: 6240, cat: 'bars', desc: 'Fits doorframes from 61 to 81cm, no screws. Check the frame first.', features: ['No drilling'], review: { who: 'Ben A.', text: 'Where my first pull-up happened.' } },
      { name: 'Wall-Mounted Rig', price: '£240', emoji: '🏗️', rating: 4.8, reviews: 980, cat: 'bars', desc: 'A steel pull-up bar and ring mount for a garage or garden wall.', features: ['Fixings included', 'Fit by a professional'], review: { who: 'Lena H.', text: 'Solid as a rock.' } },
      { name: 'Resistance Bands (set of 4)', price: '£24', tag: 'SPECIAL', emoji: '🎗️', rating: 4.8, reviews: 3120, cat: 'bands', special: true, desc: 'Four strengths for assisted pull-ups and dips.', features: ['Latex-free option'], review: { who: 'Mo K.', text: 'Bridged the gap to strict reps.' } }
    ],
    shopCats: [ { key: 'rings', label: 'Rings', icon: '⭕' }, { key: 'bars', label: 'Bars & rigs', icon: '🏗️' }, { key: 'bands', label: 'Bands', icon: '🎗️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'The <b>Ash Rings</b>, turned in Shropshire.', img: U('1784819482814-f8c0905d7865', 800, 440), eng: '♡ 11.8K · 💬 920 · ↗ 1.4K', product: 0 },
      { type: 'post', sub: 'Safety · Yesterday', text: 'Before you hang anything from a beam, check it can take your weight and then some. If in doubt, ask a builder.', img: U('1784819482808-79683fb356bf', 800, 440), eng: '♡ 4.2K · 💬 310' },
      { type: 'community', who: 'Ben A.', whoBg: AMBER, sub: 'Community · 1d', text: 'Will the doorway bar fit a 1930s house?', eng: '♡ 180 · 💬 44', reply: 'Hi Ben! It fits frames from 61 to 81cm wide, and the frame needs a solid lip on both sides. Older frames are often softwood: if yours flexes when you press on it, our wall rig is the safer choice. Happy to look at a photo. 🚪' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Barline Live · Front lever clinic', when: 'Live now', desc: 'Coach Dan Kowalski runs the front lever ladder live and answers form questions.', registered: 3680, capacity: 8000 } ],
    about: { founded: 'Shrewsbury · 2015', story: 'A joiner who built rings for his local park group. We still turn every ring in Shropshire, and we joined CalisthenicsXX as Founding Partner because our athletes are already here.', milestones: [['2015', 'The first ten pairs of rings'], ['2022', 'The wall rig'], ['2026', 'Founding Partner on CalisthenicsXX']], values: ['British wood, British steel', 'Tested to three times the rating', 'Spare straps for life'] } }),

  'grip-theory': brand({ key: 'grip-theory', name: 'Grip Theory', color: '#F5C451', gradient: AMBER, tier: 'Brand Zone',
    tagline: 'Chalk, grips and hand care', stats: { followers: '74.6K', content: '360', products: '28' },
    ad: { badge: 'New', img: U('1704375058325-e51b6382a95d', 760, 760), hl: 'Grip it. Don’t slip it.', sub: 'Liquid chalk that dries in ten seconds.', meta: 'From £6' },
    products: [
      { name: 'Liquid Chalk (200ml)', price: '£12', tag: 'FLAGSHIP', emoji: '🧴', rating: 4.8, reviews: 3860, cat: 'chalk', special: true, desc: 'Dries in ten seconds and lasts a session. No dust in the gym.', features: ['Fragrance-free'], review: { who: 'Pete R.', text: 'One coat for a whole session.' } },
      { name: 'Hand Balm', price: '£9', tag: 'BESTSELLER', emoji: '🤲', rating: 4.8, reviews: 2440, cat: 'care', desc: 'Beeswax and shea for the calluses that bars give you.', features: ['50g tin'], review: { who: 'Lena H.', text: 'No more torn calluses.' } },
      { name: 'Chalk Block', price: '£6', emoji: '⬜', rating: 4.7, reviews: 1620, cat: 'chalk', desc: 'Classic magnesium carbonate, 56g.', features: ['Refill size'], review: { who: 'Ben A.', text: 'Old school. Works.' } },
      { name: 'Wrist Wraps', price: '£14', tag: 'SPECIAL', emoji: '🩹', rating: 4.7, reviews: 980, cat: 'care', special: true, desc: 'Light support for handstand and planche work.', features: ['Pair'], review: { who: 'Hana T.', text: 'Comfortable for long sessions.' } }
    ],
    shopCats: [ { key: 'chalk', label: 'Chalk', icon: '🧴' }, { key: 'care', label: 'Hand care', icon: '🤲' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Cold bars, warm hands: <b>Liquid Chalk</b> and a hand balm for after.', img: U('1765302741884-e846c7a178df', 800, 440), eng: '♡ 5.4K · 💬 380', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: two-for-one chalk', when: 'Nov 27 · All day', desc: 'Two liquid chalks for the price of one.', registered: 2240, capacity: 6000 } ],
    about: { founded: 'Leeds · 2018', story: 'Two climbers who switched to the bars and missed good chalk. We make it in small batches in Leeds.', milestones: [['2018', 'The first liquid chalk'], ['2023', 'Hand care range'], ['2026', 'Brand Zone on CalisthenicsXX']], values: ['Made in Leeds', 'Fragrance-free', 'Kind to skin'] } }),

  'lever-apparel': brand({ key: 'lever-apparel', name: 'Lever Apparel', color: '#94A3B8', gradient: SLATE, tier: 'Brand Zone',
    tagline: 'Training wear that moves upside down', stats: { followers: '58.2K', content: '290', products: '42' },
    ad: { badge: 'Featured', img: U('1635031520206-2bbe2dfa4d68', 760, 760), hl: 'Stays put upside down.', sub: 'The Inversion Short, with a liner and a zip pocket.', meta: 'From £22' },
    products: [
      { name: 'Inversion Short', price: '£38', tag: 'FLAGSHIP', emoji: '🩳', rating: 4.8, reviews: 2160, cat: 'shorts', special: true, desc: 'A lined short that stays put in handstands, with a zip pocket for keys.', features: ['Recycled polyester', 'XS to 3XL'], review: { who: 'Hana T.', text: 'Finally, no flashing the park.' } },
      { name: 'Ring Tee', price: '£28', tag: 'BESTSELLER', emoji: '👕', rating: 4.7, reviews: 1840, cat: 'tops', desc: 'A slim tee that doesn’t fall over your face when you’re upside down.', features: ['Merino blend'], review: { who: 'Pete R.', text: 'Doesn’t smell after a week of sessions.' } },
      { name: 'Winter Park Layer', price: '£64', emoji: '🧥', rating: 4.8, reviews: 760, cat: 'tops', desc: 'A warm, stretchy layer for cold outdoor sessions.', features: ['Thumb loops'], review: { who: 'Mia S.', text: 'Sunday sessions in December, sorted.' } },
      { name: 'Grip Socks', price: '£12', tag: 'SPECIAL', emoji: '🧦', rating: 4.6, reviews: 540, cat: 'socks', special: true, desc: 'For indoor floor work and handstand walls.', features: ['Pair'], review: { who: 'Lena H.', text: 'No more sliding on the wall.' } }
    ],
    shopCats: [ { key: 'shorts', label: 'Shorts', icon: '🩳' }, { key: 'tops', label: 'Tops', icon: '👕' }, { key: 'socks', label: 'Socks', icon: '🧦' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Floor work, bar work, upside-down work: the <b>Inversion Short</b> stays put through all of it.', img: U('1634225253504-43d3103669dc', 800, 440), eng: '♡ 4.6K · 💬 320', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Winter range launch', when: 'Dec 4 · 18:00', desc: 'The Winter Park Layer launches with a live session from Hulme Park.', registered: 980, capacity: 3000 } ],
    about: { founded: 'Manchester · 2020', story: 'Made by people who train in parks, for people who train in parks. Every piece is tested upside down.', milestones: [['2020', 'The Inversion Short'], ['2024', 'Recycled fabrics only'], ['2026', 'Brand Zone on CalisthenicsXX']], values: ['Tested upside down', 'Recycled fabrics', 'Sizes for every body'] } }),

  'paralette-co': brand({ key: 'paralette-co', name: 'Paralette Co.', color: '#A8A29E', gradient: CHALK, tier: 'Brand Zone',
    tagline: 'Parallettes and blocks, made from ash', stats: { followers: '41.3K', content: '210', products: '16' },
    ad: { badge: 'Gift', img: U('1639998735081-01a463827abe', 760, 760), hl: 'Small kit. Big skills.', sub: 'Ash parallettes for L-sits, handstands and push-ups.', meta: 'From £19' },
    products: [
      { name: 'Low Parallettes (pair)', price: '£58', tag: 'FLAGSHIP', emoji: '🪵', rating: 4.9, reviews: 1980, cat: 'parallettes', special: true, desc: 'Ash rails on a steel-reinforced base, 15cm high. For L-sits, tuck planches and handstands.', features: ['Non-slip feet', 'Holds 150kg'], review: { who: 'Lena H.', text: 'My L-sit went from 5 to 20 seconds on these.' } },
      { name: 'Handstand Blocks', price: '£32', tag: 'BESTSELLER', emoji: '🧱', rating: 4.8, reviews: 1240, cat: 'blocks', desc: 'Two angled blocks that take pressure off the wrists.', features: ['Ash'], review: { who: 'Hana T.', text: 'My wrists love these.' } },
      { name: 'Push-Up Handles', price: '£19', emoji: '✊', rating: 4.7, reviews: 860, cat: 'blocks', desc: 'Neutral-grip handles for deeper push-ups.', features: ['Pair'], review: { who: 'Pete R.', text: 'Simple and solid.' } },
      { name: 'Tall Parallettes (pair)', price: '£96', tag: 'SPECIAL', emoji: '🏛️', rating: 4.8, reviews: 420, cat: 'parallettes', special: true, desc: 'Dip-height bars for dips, rows and swing work.', features: ['70cm high'], review: { who: 'Ben A.', text: 'A dip station in my living room.' } }
    ],
    shopCats: [ { key: 'parallettes', label: 'Parallettes', icon: '🪵' }, { key: 'blocks', label: 'Blocks & handles', icon: '🧱' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Handstand work, wrist-friendly: <b>Handstand Blocks</b>.', img: U('1576094168768-4078c686a1c5', 800, 440), eng: '♡ 2.6K · 💬 180', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 18 · 23:59', desc: 'Order by midnight on 18 December for delivery before Christmas.', registered: 820, capacity: 2500 } ],
    about: { founded: 'Hereford · 2019', story: 'A furniture maker who started making parallettes for his son. Each pair is cut, sanded and oiled by hand.', milestones: [['2019', 'The first pair'], ['2024', 'Handstand blocks'], ['2026', 'Brand Zone on CalisthenicsXX']], values: ['Made by hand', 'Ash from managed woods', 'Repairs for life'] } }),

  'outdoor-gym-works': { key: 'outdoor-gym-works', kind: 'business', gw: 'calisthenics', name: 'Outdoor Gym Works', color: '#EF4444', gradient: RED, img: U('1782923825017-986e4c7eadc8', 900, 500),
    tier: 'Verified', category: 'Outdoor gym installation', tagline: 'Calisthenics parks and outdoor gyms for councils and schools.',
    about: { founded: 'Birmingham · 2010', story: 'We design, install and maintain outdoor gyms and calisthenics parks for councils, schools and housing associations across the UK.' },
    stats: { years: 16, staff: 70, clients: '480 parks' },
    caps: [ { name: 'Calisthenics parks', detail: 'Bars, rings and dip stations laid out with athletes.' }, { name: 'Safety surfacing', detail: 'Impact-absorbing floors to the playground standard.' }, { name: 'Inspection and repair', detail: 'Yearly inspections, quick fixes.' } ],
    specs: { moq: 'One station', lead: '8 to 14 weeks', regions: 'UK-wide', certs: ['Outdoor fitness equipment standard', 'Fully insured', 'Constructionline Gold'] },
    supplies: [ { kind: 'brand', key: 'barline-rigs', what: 'Ring stations in 60 parks' } ],
    cases: [ { title: 'A city-centre park in Manchester', text: 'A 12-station calisthenics park now used by 1,200 people a week.' } ],
    feed: [ { sub: 'Projects · 3d', text: 'Just finished a new park in Cardiff Bay with a beginners’ row of low bars.' }, { sub: 'News · 1w', text: 'Winter inspections under way across 480 parks.' } ],
    contact: { person: 'Gemma Price, Councils', response: 'Replies within 24 hours' } },

  'strengthline-surfaces': { key: 'strengthline-surfaces', kind: 'business', gw: 'calisthenics', name: 'Strengthline Surfaces', color: '#94A3B8', gradient: SLATE, img: U('1593455026613-e30bfc0a54a9', 900, 500),
    tier: 'Verified', category: 'Gym flooring', tagline: 'Rubber flooring and safety surfaces for gyms and parks.',
    about: { founded: 'Doncaster · 2006', story: 'We make rubber flooring from recycled tyres for gyms, garage set-ups and outdoor parks.' },
    stats: { years: 20, staff: 54, clients: '2,300 gyms & parks' },
    caps: [ { name: 'Recycled rubber tiles', detail: 'For gyms and garages, laid in a day.' }, { name: 'Wet-pour surfacing', detail: 'Seamless impact surfaces for outdoor parks.' }, { name: 'Acoustic floors', detail: 'Quiet floors for upstairs studios.' } ],
    specs: { moq: '10 square metres', lead: '2 to 4 weeks', regions: 'UK', certs: ['Impact attenuation tested', 'ISO 14001', 'Recycled content certified'] },
    supplies: [ { kind: 'business', key: 'outdoor-gym-works', what: 'Wet-pour surfaces under every park' } ],
    cases: [ { title: 'A garage gym in Leeds', text: '18 square metres of recycled tiles, laid in an afternoon.' } ],
    feed: [ { sub: 'Product · 5d', text: 'New: a thinner tile for home gyms that lifts out for the car.' } ],
    contact: { person: 'Martin Shaw, Sales', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('calisthenics', [
  { gw: 'calisthenics', zone: 'barline-rigs', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Barline Live · Front lever clinic', desc: 'Coach Dan Kowalski runs the front lever ladder live and checks your form in the chat.' },
  { gw: 'calisthenics', type: 'Event', icon: '🌳', time: 'Nov 23', title: 'Sunday bars session, Manchester', desc: 'Manchester Street Workout at Hulme Park. Beginners’ corner from 10am.' },
  { gw: 'calisthenics', zone: 'grip-theory', type: 'Sale', icon: '🧴', time: 'Nov 27', title: 'Grip Theory Black Friday', desc: 'Two liquid chalks for the price of one.' },
  { gw: 'calisthenics', zone: 'lever-apparel', type: 'Event', icon: '🧥', time: 'Dec 4', title: 'Lever Apparel winter launch', desc: 'The Winter Park Layer, launched live from Hulme Park.' },
  { gw: 'calisthenics', type: 'Event', icon: '🤸', time: 'Dec 6', title: 'Handstand workshop, Bristol', desc: 'Jordan Blake: three hours, all levels, lots of wall work.' },
  { gw: 'calisthenics', type: 'Event', icon: '💪', time: 'Dec 1', title: 'December pull-up challenge', desc: 'Bar Crew: a little more every day for 31 days, at your level.' },
  { gw: 'calisthenics', type: 'Event', icon: '🩺', time: 'Dec 9', title: 'Wrists and shoulders: free talk', desc: 'Priya Nair on the injuries bars cause, and the warm-ups that prevent them.' },
  { gw: 'calisthenics', zone: 'paralette-co', type: 'Deadline', icon: '🎁', time: 'Dec 18', title: 'Last order for Christmas parallettes', desc: 'Paralette Co.: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /CALISTHENICSXX ═════════ */
