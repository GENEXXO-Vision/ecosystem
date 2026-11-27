/* ═════════ DIABETESXX — a Health demo gateway (2026-11-17, Sean) ═════════
   Built like DoctorXX and GolfXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (light): clean white-blue, diabetes blue, warm orange. Home sector: Health.
   Brands, pros and communities are fictional; places are real. Health text explains and signposts, never advises
   on doses: every app and answer points back to the person’s own care team. Source of truth: _lab/health/diabetesxx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const BLUE = 'linear-gradient(135deg,#3B82F6,#1D4ED8)', ORANGE = 'linear-gradient(135deg,#FBA94C,#E2711D)', GREEN = 'linear-gradient(135deg,#34C38F,#16805A)', BERRY = 'linear-gradient(135deg,#C06BD8,#7A2E9C)';

GATEWAYS.diabetes = {
  name: 'DiabetesXX', domain: 'diabetesxx.com', emoji: '💙', sector: 'health', live: true,
  tagline: 'The Diabetes Universe',
  theme: {
    bg: '#F4F8FD', text: '#14213D', cardBg: '#FFFFFF', cardBorder: 'rgba(29,78,216,.12)',
    headerBg: 'linear-gradient(180deg,#E3EDFB,#F4F8FD)', accent: '#1D6FD8', accentAlt: '#F28C28', dark: false
  },
  gradient: 'linear-gradient(135deg,#1D4ED8,#3B82F6,#F28C28)',
  stats: { members: '4.2M', brands: '1,900+', agents: '58' },
  spaces: ['All Feed', 'Type 1', 'Type 2', 'Food & Carbs', 'Moving More', 'Tech & Kit'],
  trending: ['#TimeInRange', '#WorldDiabetesDay', '#Type1Together'],
  brandZones: [
    { key: 'glucora', name: 'Glucora', color: '#1D6FD8', tier: 'Founding Partner', tag: 'Covers, cases and kit for life with a sensor' },
    { key: 'balance-bakery', name: 'Balance Bakery', color: '#F28C28', tier: 'Brand Zone', tag: 'Real bread, with the carbs printed on the slice' },
    { key: 'solewell', name: 'Solewell', color: '#16805A', tier: 'Brand Zone', tag: 'Socks and foot care for feet that matter' },
    { key: 'quick-lift', name: 'Quick Lift', color: '#7A2E9C', tier: 'Brand Zone', tag: 'Glucose tablets and gels for a low' }
  ],
  apps: [
    { name: 'Glucose Diary', color: '#1D6FD8', desc: 'Log readings and see your time in range', key: 'glucose-diary', url: 'apps/glucose-diary.html',
      dev: 'Steady Software', rating: '4.8', users: '1.6M', perms: ['profile', 'feed'],
      tagline: 'Your numbers, your patterns, your appointment ready.',
      about: 'Glucose Diary keeps your blood glucose readings with a note of meals, activity and how you felt. It shows your time in range for the week against the range you and your care team set, and the times of day you tend to run high or low, so you have something useful to bring to your next review. It does not advise on doses.',
      features: ['Log a reading with a note', 'Time in range for the week', 'Highs and lows by time of day', 'Your own target range'],
      shots: ['apps/glucose-diary/shot-1.jpg', 'apps/glucose-diary/shot-2.jpg', 'apps/glucose-diary/shot-3.jpg'],
      version: '5.4', size: '10 KB',
      updates: [ { v: '5.4', ago: 3, notes: 'Time-of-day pattern view.' }, { v: '5.0', ago: 85, notes: 'Set your own target range.' }, { v: '4.6', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@t1_tasha', stars: 5, ago: 2, text: 'Took the pattern view to clinic. My nurse loved it.' }, { who: '@t2_trevor', stars: 5, ago: 9, text: 'Simple enough that I actually use it.' }, { who: '@pumpmum_priya', stars: 4, ago: 20, text: 'Would love to import from a meter.' } ] },
    { name: 'Carb Counter', color: '#F28C28', desc: 'Count the carbs on your plate', key: 'carb-counter', url: 'apps/carb-counter.html',
      dev: 'Balance Bakery', rating: '4.7', users: '920K', perms: ['profile', 'feed'],
      tagline: 'Know the carbs before the first bite.',
      about: 'Carb Counter adds up the carbohydrate in a meal from everyday UK foods and portion sizes: a slice of toast, a jacket potato, a bowl of porridge. Build a plate, see the total, and save meals you eat often. Figures are typical values; check packet labels where you have them.',
      features: ['Everyday UK foods and portions', 'Typical UK portion sizes', 'Save meals you eat often', 'Daily carb total'],
      shots: ['apps/carb-counter/shot-1.jpg', 'apps/carb-counter/shot-2.jpg', 'apps/carb-counter/shot-3.jpg'],
      version: '3.2', size: '10 KB',
      updates: [ { v: '3.2', ago: 5, notes: 'Saved meals.' }, { v: '3.0', ago: 70, notes: 'Portion sizes in grams and household measures.' }, { v: '2.5', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@t1_tasha', stars: 5, ago: 4, text: 'Lunch in thirty seconds.' }, { who: '@pumpmum_priya', stars: 5, ago: 12, text: 'My son counts his own school dinners now.' }, { who: '@t2_trevor', stars: 4, ago: 28, text: 'More takeaway foods, please.' } ] },
    { name: 'Hypo Helper', color: '#7A2E9C', desc: 'The steps for a low, with a timer', key: 'hypo-helper', url: 'apps/hypo-helper.html',
      dev: 'Quick Lift', rating: '4.9', users: '680K', perms: ['profile', 'feed'],
      tagline: 'Treat, wait, check. Calmly.',
      about: 'Hypo Helper walks you through the usual steps for treating a low blood glucose: fast-acting sugar, a fifteen-minute wait with a timer, a re-check, and a follow-up snack once you are back in range. It keeps a log of your lows to talk through with your care team. Always follow your own care plan; in an emergency call 999.',
      features: ['Step-by-step low treatment', 'Fifteen-minute re-check timer', 'Log of recent lows', 'Your own treatment written in'],
      shots: ['apps/hypo-helper/shot-1.jpg', 'apps/hypo-helper/shot-2.jpg', 'apps/hypo-helper/shot-3.jpg'],
      version: '2.3', size: '9 KB',
      updates: [ { v: '2.3', ago: 2, notes: 'Write in your own treatment from your care plan.' }, { v: '2.0', ago: 90, notes: 'Log of recent lows.' }, { v: '1.6', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@pumpmum_priya', stars: 5, ago: 1, text: 'My daughter’s teacher uses it. It keeps everyone calm.' }, { who: '@t1_tasha', stars: 5, ago: 7, text: 'Stops me over-treating, which I always did.' }, { who: '@runner_ravi', stars: 5, ago: 18, text: 'Used it mid-run. Clear and quick.' } ] }
  ],
  pros: [
    { key: 'sarah-quinn-dietitian', name: 'Sarah Quinn Diabetes Dietitian', color: '#F28C28', tag: 'Registered dietitian · carb counting, type 2 remission support, family meals', role: 'Dietitian',
      img: U('1573497019940-1c28c88b4f3e', 800, 800), base: 'Leeds, UK', langs: 'English', years: 13, rating: '4.9', reviewsN: 486, cur: '£',
      creds: ['Registered dietitian (HCPC)', 'Ten years in an NHS diabetes team', 'Structured education trainer'],
      about: 'Sarah worked in an NHS diabetes team for ten years before setting up her own practice. She teaches carb counting that fits real life, helps people with type 2 who want to work on their weight and glucose, and plans family meals that suit everyone at the table.',
      services: [ { id: 'first', name: 'First consultation', dur: '60 minutes', price: 85, desc: 'Your food, your numbers and your goals, with a written plan.' },
                  { id: 'carbs', name: 'Carb counting course', dur: '3 × 90 minutes', price: 160, desc: 'Small group, online: labels, portions and eating out.' },
                  { id: 'review', name: 'Follow-up review', dur: '30 minutes', price: 45, desc: 'Check in on progress and adjust the plan.' } ],
      avail: { days: [1, 2, 3, 4], times: ['09:30', '12:30', '18:00'] },
      reviews: [ { who: '@t2_trevor', stars: 5, ago: 5, text: 'First time food advice has made sense to me.' }, { who: '@pumpmum_priya', stars: 5, ago: 17, text: 'The family meal plan stopped the dinner-time battles.' }, { who: '@t1_tasha', stars: 5, ago: 36, text: 'The carb course gave me my confidence back.' } ],
      posts: [ { ago: 1, text: 'Eating out this Christmas? Look up the menu in advance and pick your dish before you arrive. Less guessing, more enjoying.' }, { ago: 9, text: 'New carb counting course starts in January. Six places.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'marcus-lee-fitness', name: 'Marcus Lee Diabetes Fitness', color: '#1D6FD8', tag: 'Personal trainer living with type 1 · exercise that works with your glucose', role: 'Personal trainer',
      img: U('1507003211169-0a1dd7228f2d', 800, 800), base: 'Manchester, UK', langs: 'English, Cantonese', years: 8, rating: '4.8', reviewsN: 318, cur: '£',
      creds: ['Level 3 personal trainer', 'Exercise referral qualification', 'Living with type 1 for 20 years'],
      about: 'Marcus has had type 1 diabetes since he was twelve and has trained people with diabetes for eight years. He helps you build strength and fitness, and keeps a log of how sessions affect your glucose so you can talk it through with your care team.',
      services: [ { id: 'pt', name: 'Personal training session', dur: '60 minutes', price: 50, desc: 'In the gym or the park in Manchester, or online.' },
                  { id: 'plan', name: 'Twelve-week programme', dur: '12 weeks', price: 360, desc: 'A weekly plan, a check-in call each week, and a glucose and exercise log.' },
                  { id: 'run', name: 'Couch to 5K group', dur: '9 weeks', price: 90, desc: 'A small group for people with diabetes, on Saturday mornings.' } ],
      avail: { days: [1, 3, 5, 6], times: ['07:00', '12:00', '18:30'] },
      reviews: [ { who: '@runner_ravi', stars: 5, ago: 3, text: 'Ran my first 10K this year. Marcus gets it because he lives it.' }, { who: '@t2_trevor', stars: 5, ago: 14, text: 'Stronger at 61 than I was at 40.' }, { who: '@t1_tasha', stars: 4, ago: 33, text: 'Tough but kind.' } ],
      posts: [ { ago: 2, text: 'Keep a note of your glucose before, during and after a new kind of workout. Patterns beat guesses.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'anika-shah-podiatry', name: 'Anika Shah Podiatry', color: '#16805A', tag: 'Podiatrist · diabetes foot checks, nail care, footwear advice', role: 'Podiatrist',
      img: U('1772987413078-e94f66e7047d', 800, 800), base: 'London, UK', langs: 'English, Gujarati, Hindi', years: 15, rating: '4.9', reviewsN: 402, cur: '£',
      creds: ['Registered podiatrist (HCPC)', 'Former NHS diabetes foot clinic', 'Member of a podiatry professional body'],
      about: 'Anika ran an NHS diabetes foot clinic for nine years. Her clinic in Harrow offers foot checks, nail and skin care and footwear advice, and she will always refer you on quickly if something needs your GP or foot team.',
      services: [ { id: 'check', name: 'Diabetes foot check', dur: '30 minutes', price: 45, desc: 'Circulation, sensation and skin, with a written summary.' },
                  { id: 'care', name: 'Nail and skin care', dur: '45 minutes', price: 55, desc: 'Nails cut, hard skin removed and advice on daily care.' },
                  { id: 'shoes', name: 'Footwear assessment', dur: '40 minutes', price: 50, desc: 'Find shoes that fit and protect your feet.' } ],
      avail: { days: [1, 2, 4, 5, 6], times: ['09:00', '13:00', '16:30'] },
      reviews: [ { who: '@t2_trevor', stars: 5, ago: 6, text: 'Explained every test and why it mattered.' }, { who: '@grandad_gerald', stars: 5, ago: 21, text: 'Gentle and thorough. My feet have never felt better.' }, { who: '@t1_tasha', stars: 5, ago: 44, text: 'Spotted a problem early and got me seen fast.' } ],
      posts: [ { ago: 4, text: 'Check your feet every day: tops, soles, between the toes. Use a mirror or ask someone to help.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'type1-together', name: 'Type 1 Together', domain: 'type1.diabetesxx.com', color: '#1D6FD8', img: U('1511632765486-a01980e01a18', 900, 500),
      scope: 'Global', where: 'Everywhere, at 3am included', members: 162000, online: 2940, tagline: 'Nobody gets it like someone who lives it.',
      about: 'People living with type 1, their parents and partners. Wins, hard days, tech tips, travel stories and the questions you forget to ask in clinic. We share experience here, not medical advice.',
      rules: ['Share experience, not doses', 'Be kind about numbers', 'Signpost to your care team'],
      mods: ['@t1_tasha', '@pumpmum_priya'],
      threads: [ { t: 'Your best tip for Christmas dinner with type 1', by: '@t1_tasha', tag: 'FOOD', replies: 528, ago: 0, votes: 1240 }, { t: 'Starting secondary school with a pump: what helped?', by: '@pumpmum_priya', tag: 'PARENTS', replies: 214, ago: 1, votes: 460 }, { t: 'Twenty years with type 1 today', by: '@marcus_lifts', tag: 'STORIES', replies: 302, ago: 2, votes: 980 }, { t: 'Sensor fell off on day two again. Covers that last?', by: '@runner_ravi', tag: 'KIT', replies: 176, ago: 3, votes: 288 } ],
      events: [ { title: 'Parents’ evening chat (online)', day: 2, time: '20:00', where: 'Online' }, { title: 'Type 1 tech show-and-tell', day: 10, time: '19:00', where: 'Online' } ] },
    { key: 'diabetes-walkers-glasgow', name: 'Diabetes Walkers Glasgow', domain: 'glasgow.diabetesxx.com', color: '#16805A', img: U('1770563182367-1e1b5c094b02', 900, 500),
      scope: 'Local', where: 'Glasgow', members: 1860, online: 46, tagline: 'Walk, talk, and a cuppa at the end.',
      about: 'A friendly walking group for people with type 1 or type 2 diabetes and their families. Gentle walks in Glasgow’s parks every Saturday morning, a longer one once a month, and always a café at the end.',
      rules: ['Walk at the pace of the slowest', 'Bring your hypo kit', 'Everyone welcome'],
      mods: ['@glasgow_gail', '@grandad_gerald'],
      threads: [ { t: 'Saturday: Kelvingrove Park loop, meet at the bandstand', by: '@glasgow_gail', tag: 'WALK', replies: 34, ago: 0, votes: 58 }, { t: 'Monthly longer walk: Pollok Country Park?', by: '@grandad_gerald', tag: 'PLANS', replies: 22, ago: 1, votes: 41 }, { t: 'Best café with a lower-carb option near the West End', by: '@glasgow_gail', tag: 'FOOD', replies: 29, ago: 2, votes: 37 } ],
      events: [ { title: 'Kelvingrove Park walk', day: 4, time: '10:00', where: 'Kelvingrove Park, Glasgow' }, { title: 'Pollok Country Park long walk', day: 11, time: '10:00', where: 'Pollok Country Park, Glasgow' } ] }
  ],
  feed: [
    { av: 'DX', avBg: BLUE, author: 'DiabetesXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Food, tech, moving more, and people who get it. Type 1, type 2, newly diagnosed or decades in: living well with diabetes, all in one place.',
      img: U('1767277672167-18105701959b', 800, 600), eng: '♡ 36.8K · 💬 3.4K · ↗ 3.9K' },
    { av: 'TT', avBg: BLUE, author: '@t1_tasha', sub: 'Type 1 · Just now', badge: 'COMMUNITY',
      text: 'Seventy-eight per cent time in range this week, my best since diagnosis. Took the Glucose Diary pattern view to clinic and we finally worked out my mornings 💙',
      img: U('1684156486280-ff59f07fc5bb', 800, 600), eng: '♡ 14.2K · 💬 1.6K · ↗ 480' },
    { av: 'GL', avBg: BLUE, author: 'Glucora', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Sensor fell off at the gym again? The <b>Glucora Overpatch</b> holds for fourteen days through showers, swims and runs, in sixteen colours.',
      img: U('1683727186226-910f31a9da45', 800, 600), eng: '♡ 8.6K · 💬 720 · ↗ 940' },
    { av: 'BB', avBg: ORANGE, author: 'Balance Bakery', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'A proper sourdough with <b>9 g of carbohydrate a slice</b>, printed on the bag. Made with seeds, rye and patience.',
      img: U('1767065888377-e5ffb4e39645', 800, 600), eng: '♡ 5.4K · 💬 410 · ↗ 380' },
    { av: 'GG', avBg: GREEN, author: '@glasgow_gail', sub: 'Moving More · 2h ago', badge: 'COMMUNITY',
      text: 'Twenty-two of us round Kelvingrove this morning in the frost, then tea and scones. Newcomers always welcome, every Saturday at ten 🚶',
      img: U('1786723221771-f880fa78a25f', 800, 600), eng: '♡ 4.1K · 💬 360 · ↗ 150' },
    { av: 'SW', avBg: GREEN, author: 'Solewell', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Seam-free, non-binding and padded at the sole: the <b>Daily Diabetic Sock</b>, now in a five-pack.',
      img: U('1585499583264-491df5142e83', 800, 600), eng: '♡ 2.6K · 💬 180 · ↗ 210' },
    { av: 'SQ', avBg: ORANGE, author: 'Sarah Quinn Diabetes Dietitian', sub: 'Food & Carbs · 6h ago', badge: 'PRO ZONE',
      text: 'Breakfast idea with a steady start: Greek yoghurt, berries and a handful of nuts. Around 15 g of carbohydrate, depending on the berries.',
      img: U('1494390248081-4e521a5940db', 800, 600), eng: '♡ 3.2K · 💬 240 · ↗ 520' }
  ],
  prompts: ['What does time in range mean?', 'Lower-carb breakfast ideas for type 2', 'How do I count carbs when eating out?', 'Find a diabetes walking group near Glasgow'],
  businesses: ['brightwell-pharmacy', 'carelink-education']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'diabetes', verified: true }, o);
Object.assign(ZONES, {
  'glucora': brand({ key: 'glucora', name: 'Glucora', color: '#1D6FD8', gradient: BLUE, tier: 'Founding Partner',
    tagline: 'Covers, cases and kit for life with a sensor', stats: { followers: '204K', content: '860', products: '64' },
    ad: { badge: 'Featured', img: U('1683727186226-910f31a9da45', 760, 760), hl: 'Fourteen days. Showers included.', sub: 'The Glucora Overpatch, in sixteen colours.', meta: 'From £8' },
    products: [
      { name: 'Overpatch (14-pack)', price: '£16', tag: 'FLAGSHIP', emoji: '🩹', rating: 4.8, reviews: 8420, cat: 'patches', special: true, desc: 'Breathable, waterproof covers that hold a glucose sensor in place for its full wear.', features: ['Fits most common sensors', 'Sixteen colours', 'Gentle on skin'], review: { who: 'Ravi P.', text: 'Survived a half marathon and a swim.' } },
      { name: 'Kit Case', price: '£28', tag: 'BESTSELLER', emoji: '👝', rating: 4.8, reviews: 4260, cat: 'cases', desc: 'Room for a meter, pen, strips, hypo treatment and a spare sensor.', features: ['Insulated pocket', 'Wipe-clean'], review: { who: 'Tasha M.', text: 'Everything in one place, finally.' } },
      { name: 'Insulin Cooling Wallet', price: '£24', tag: 'SPECIAL', emoji: '❄️', rating: 4.7, reviews: 2180, cat: 'cases', special: true, desc: 'A water-activated cooling wallet that keeps insulin pens cool on holiday.', features: ['Reusable', 'No fridge needed'], review: { who: 'Priya S.', text: 'Two weeks in Spain, no problems.' } },
      { name: 'Kids’ Sensor Armband', price: '£12', emoji: '🦖', rating: 4.8, reviews: 1640, cat: 'patches', desc: 'A soft armband that protects a sensor during play and PE.', features: ['Dinosaur, space and rainbow'], review: { who: 'Priya S.', text: 'My son actually wants to wear it.' } },
      { name: 'Medical ID Bracelet', price: '£19', emoji: '📿', rating: 4.7, reviews: 1320, cat: 'id', desc: 'A silicone bracelet engraved with your condition and an emergency contact.', features: ['Engraving included'], review: { who: 'Gerald B.', text: 'Peace of mind for my wife.' } }
    ],
    shopCats: [ { key: 'patches', label: 'Patches & armbands', icon: '🩹' }, { key: 'cases', label: 'Cases & cooling', icon: '👝' }, { key: 'id', label: 'Medical ID', icon: '📿' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 3h', text: 'The <b>Overpatch</b> holds for fourteen days, through everything.', img: U('1624454002429-40ed87a5ec04', 800, 440), eng: '♡ 8.6K · 💬 720 · ↗ 940', product: 0 },
      { type: 'post', sub: 'Made by us · Yesterday', text: 'Every new colour is voted for by the Type 1 Together community. Next up: midnight blue.', img: U('1684156486280-ff59f07fc5bb', 800, 440), eng: '♡ 3.8K · 💬 410' },
      { type: 'community', who: 'Priya S.', whoBg: BERRY, sub: 'Community · 1d', text: 'My son is six and pulls his sensor off at night. Anything that helps?', eng: '♡ 268 · 💬 92', reply: 'Hi Priya, that is so common at six! Lots of families use the Kids’ Sensor Armband at night with an Overpatch underneath. Have a word with your diabetes team about placement too: they will have seen it many times. 💙' }
    ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Colour vote: 2027 Overpatch', when: 'Dec 3 · Online', desc: 'Pick the next three Overpatch colours with the community.', registered: 6200, capacity: 20000 } ],
    about: { founded: 'Cambridge · 2017', story: 'Founded by a designer with type 1 who was tired of sensors falling off and kit bags that did not fit. We joined GENEXXO as DiabetesXX’s Founding Partner because this is where people with diabetes talk.', milestones: [['2017', 'The first Overpatch'], ['2023', 'One million patches a year'], ['2026', 'Founding Partner on DiabetesXX']], values: ['Designed by people who wear it', 'Skin-friendly materials', 'A colour for everyone'] } }),

  'balance-bakery': brand({ key: 'balance-bakery', name: 'Balance Bakery', color: '#F28C28', gradient: ORANGE, tier: 'Brand Zone',
    tagline: 'Real bread, with the carbs printed on the slice', stats: { followers: '88.4K', content: '420', products: '24' },
    ad: { badge: 'New', img: U('1767065888377-e5ffb4e39645', 760, 760), hl: '9 g of carbs a slice.', sub: 'Seeded rye sourdough, carbs printed on the bag.', meta: 'From £3' },
    products: [
      { name: 'Seeded Rye Sourdough', price: '£4', tag: 'FLAGSHIP', emoji: '🍞', rating: 4.8, reviews: 5620, cat: 'bread', special: true, desc: 'A slow-proved sourdough with rye and seeds: about 9 g of carbohydrate per 25 g slice.', features: ['Carbs per slice on the bag', 'High fibre'], review: { who: 'Trevor H.', text: 'Toast is back on the menu.' } },
      { name: 'Bread Subscription (weekly)', price: '£15', tag: 'BESTSELLER', emoji: '📦', rating: 4.8, reviews: 2140, cat: 'subs', special: true, desc: 'Three loaves a week, sliced and frozen-ready, delivered.', features: ['Pause any time', 'Free delivery'], review: { who: 'Gail R.', text: 'Never run out now.' } },
      { name: 'Oat & Seed Crackers', price: '£3', emoji: '🥨', rating: 4.7, reviews: 1860, cat: 'snacks', desc: 'Crunchy crackers with about 3 g of carbohydrate each.', features: ['Carbs per cracker on the box'], review: { who: 'Tasha M.', text: 'My desk drawer is full of them.' } },
      { name: 'Christmas Stollen Slices', price: '£6', tag: 'SEASONAL', emoji: '🎄', rating: 4.6, reviews: 940, cat: 'snacks', desc: 'Our stollen, cut into smaller slices, with the carbs for each one printed on the wrapper.', features: ['Eight slices'], review: { who: 'Gerald B.', text: 'A Christmas treat I can plan for.' } },
      { name: 'Baking Class (online)', price: '£25', emoji: '👩‍🍳', rating: 4.9, reviews: 620, cat: 'classes', desc: 'Bake our seeded sourdough at home, with the head baker.', features: ['Two hours, live'], review: { who: 'Priya S.', text: 'My first loaf actually rose.' } }
    ],
    shopCats: [ { key: 'bread', label: 'Bread', icon: '🍞' }, { key: 'subs', label: 'Subscriptions', icon: '📦' }, { key: 'snacks', label: 'Snacks & seasonal', icon: '🥨' }, { key: 'classes', label: 'Classes', icon: '👩‍🍳' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Fresh from the oven in Bradford: the <b>Seeded Rye Sourdough</b>.', img: U('1763297014734-e2ac58a6f3c0', 800, 440), eng: '♡ 5.4K · 💬 410', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Balance Bakery Live · Christmas baking', when: 'Live now', desc: 'Our head baker makes stollen and mince pies live, with the carbs worked out as she goes.', registered: 4860, capacity: 10000 } ],
    about: { founded: 'Bradford · 2014', story: 'A baker whose dad was diagnosed with type 2 and missed his toast. Every loaf has the carbs per slice on the bag.', milestones: [['2014', 'The first seeded loaf'], ['2021', 'Nationwide delivery'], ['2026', 'Brand Zone on DiabetesXX']], values: ['Real ingredients', 'Carbs on every label', 'Baked in Yorkshire'] } }),

  'solewell': brand({ key: 'solewell', name: 'Solewell', color: '#16805A', gradient: GREEN, tier: 'Brand Zone',
    tagline: 'Socks and foot care for feet that matter', stats: { followers: '41.6K', content: '230', products: '38' },
    ad: { badge: 'Featured', img: U('1585499583264-491df5142e83', 760, 760), hl: 'No seams. No marks.', sub: 'The Daily Diabetic Sock, now in a five-pack.', meta: 'From £9' },
    products: [
      { name: 'Daily Diabetic Socks (5 pairs)', price: '£25', tag: 'FLAGSHIP', emoji: '🧦', rating: 4.8, reviews: 4120, cat: 'socks', special: true, desc: 'Seam-free toes, a non-binding top and a padded sole.', features: ['Seam-free', 'Non-binding', 'Pale soles to spot marks'], review: { who: 'Gerald B.', text: 'No more red rings round my ankles.' } },
      { name: 'Foot Cream (urea 10%)', price: '£9', tag: 'BESTSELLER', emoji: '🧴', rating: 4.7, reviews: 2860, cat: 'care', desc: 'A rich cream for dry skin on the feet. Not between the toes.', features: ['150ml', 'Fragrance-free'], review: { who: 'Trevor H.', text: 'Heels smooth in a week.' } },
      { name: 'Inspection Mirror', price: '£12', emoji: '🪞', rating: 4.6, reviews: 980, cat: 'care', desc: 'A long-handled mirror for checking the soles of your feet.', features: ['Folds flat'], review: { who: 'Gail R.', text: 'Makes the daily check easy.' } },
      { name: 'Wide-Fit Walking Shoes', price: '£79', tag: 'SPECIAL', emoji: '👟', rating: 4.8, reviews: 1460, cat: 'shoes', special: true, desc: 'Deep, wide, seam-free inside, with a rocker sole.', features: ['Widths E to 6E', 'Removable insole'], review: { who: 'Gerald B.', text: 'Walked round Pollok Park in comfort.' } }
    ],
    shopCats: [ { key: 'socks', label: 'Socks', icon: '🧦' }, { key: 'care', label: 'Foot care', icon: '🧴' }, { key: 'shoes', label: 'Shoes', icon: '👟' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Pale soles so you can see a mark. The <b>Daily Diabetic Sock</b>.', img: U('1773837463640-e615246f7fa4', 800, 440), eng: '♡ 2.6K · 💬 180', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Winter sock sale', when: 'Nov 28 · All weekend', desc: 'Buy two five-packs, get a third free, this weekend only.', registered: 1840, capacity: 5000 } ],
    about: { founded: 'Leicester · 2011', story: 'A third-generation sock mill that started making diabetic socks when a podiatrist asked. Still knitted in Leicester.', milestones: [['2011', 'The first diabetic sock'], ['2019', 'Wide-fit shoes'], ['2026', 'Brand Zone on DiabetesXX']], values: ['Knitted in Leicester', 'Designed with podiatrists', 'Built to last'] } }),

  'quick-lift': brand({ key: 'quick-lift', name: 'Quick Lift', color: '#7A2E9C', gradient: BERRY, tier: 'Brand Zone',
    tagline: 'Glucose tablets and gels for a low', stats: { followers: '36.2K', content: '180', products: '20' },
    ad: { badge: 'Featured', img: U('1685485276223-0bb0226dcca8', 760, 760), hl: 'Ready when you are low.', sub: 'Glucose tablets in a tube that fits any pocket.', meta: 'From £2' },
    products: [
      { name: 'Glucose Tablets (tube of 10)', price: '£2', tag: 'FLAGSHIP', emoji: '🍬', rating: 4.8, reviews: 6420, cat: 'tablets', special: true, desc: 'Fast-acting glucose tablets with 4 g of glucose each.', features: ['4 g glucose per tablet', 'Five flavours'], review: { who: 'Tasha M.', text: 'One in every bag I own.' } },
      { name: 'Glucose Gel (6 pouches)', price: '£9', tag: 'BESTSELLER', emoji: '💧', rating: 4.7, reviews: 3120, cat: 'gels', desc: 'Liquid glucose for when chewing is hard.', features: ['10 g glucose per pouch'], review: { who: 'Ravi P.', text: 'Easy to take mid-run.' } },
      { name: 'Hypo Kit Pouch', price: '£14', tag: 'SPECIAL', emoji: '👛', rating: 4.8, reviews: 1860, cat: 'kits', special: true, desc: 'A bright pouch with tablets, gel and a card that says what to do, for school bags and handbags.', features: ['Instructions card', 'Clip-on'], review: { who: 'Priya S.', text: 'The school keeps one in every classroom.' } },
      { name: 'Multipack (5 tubes)', price: '£8', emoji: '📦', rating: 4.8, reviews: 2420, cat: 'tablets', desc: 'Five tubes, mixed flavours.', features: ['Mixed flavours'], review: { who: 'Gail R.', text: 'Car, coat, bag, desk, bedside.' } }
    ],
    shopCats: [ { key: 'tablets', label: 'Tablets', icon: '🍬' }, { key: 'gels', label: 'Gels', icon: '💧' }, { key: 'kits', label: 'Hypo kits', icon: '👛' } ],
    feed: [ { type: 'post', sub: 'Brand post · 2h', text: 'A <b>Hypo Kit Pouch</b> for every classroom: tablets, gel and the steps on a card.', img: U('1543362906-acfc16c67564', 800, 440), eng: '♡ 1.9K · 💬 140', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Schools pack orders for January', when: 'Dec 12 · 23:59', desc: 'Order hypo kit pouches for the new term by 12 December.', registered: 620, capacity: 2000 } ],
    about: { founded: 'Nottingham · 2008', story: 'Made by a pharmacist who wanted glucose tablets that tasted nice and fitted a pocket.', milestones: [['2008', 'The first tube'], ['2020', 'The Hypo Kit Pouch'], ['2026', 'Brand Zone on DiabetesXX']], values: ['Clear labels', 'Tastes good', 'Fits a pocket'] } }),

  'brightwell-pharmacy': { key: 'brightwell-pharmacy', kind: 'business', gw: 'diabetes', name: 'Brightwell Pharmacy Group', color: '#1D6FD8', gradient: BLUE, img: U('1624454002429-40ed87a5ec04', 900, 500),
    tier: 'Verified', category: 'Community pharmacy', tagline: 'Prescriptions, delivered, and a pharmacist who knows your name.',
    about: { founded: 'Sheffield · 1986', story: 'Ninety community pharmacies across Yorkshire and the Midlands, with free prescription delivery and diabetes checks in every branch.' },
    stats: { years: 40, staff: 1100, clients: '90 pharmacies' },
    caps: [ { name: 'Repeat prescriptions', detail: 'Ordered for you and delivered free.' }, { name: 'Diabetes checks', detail: 'Blood pressure, weight and medicine reviews in a private room.' }, { name: 'Sharps disposal', detail: 'Bins supplied and collected.' } ],
    specs: { moq: 'n/a', lead: 'Same or next day', regions: 'Yorkshire & the Midlands', certs: ['GPhC-registered pharmacies', 'ISO 9001', 'Healthy Living Pharmacy'] },
    supplies: [ { kind: 'brand', key: 'quick-lift', what: 'Glucose tablets and hypo kits in every branch' } ],
    cases: [ { title: 'Sheffield delivery', text: 'Twelve thousand prescriptions a month delivered to people’s doors.' } ],
    feed: [ { sub: 'Service · 2d', text: 'Christmas opening hours are up. Order repeat prescriptions by 16 December.' }, { sub: 'News · 1w', text: 'Diabetes check clinics now in every branch.' } ],
    contact: { person: 'Helen Ward, Partnerships', response: 'Replies within one working day' } },

  'carelink-education': { key: 'carelink-education', kind: 'business', gw: 'diabetes', name: 'Carelink Diabetes Education', color: '#F28C28', gradient: ORANGE, img: U('1660314002642-77bbfe3e9b48', 900, 500),
    tier: 'Verified', category: 'Health education', tagline: 'Diabetes education courses for employers and community groups.',
    about: { founded: 'Birmingham · 2009', story: 'We run diabetes awareness and self-management courses for employers, schools and community groups, in English and seven other languages.' },
    stats: { years: 17, staff: 48, clients: '600 employers & schools' },
    caps: [ { name: 'Workplace awareness', detail: 'What colleagues and managers need to know, in an hour.' }, { name: 'School training', detail: 'Hypo awareness for teachers and support staff.' }, { name: 'Community courses', detail: 'Type 2 self-management, in eight languages.' } ],
    specs: { moq: '1 session', lead: '2–4 weeks', regions: 'UK-wide, online or on site', certs: ['Quality-assured curriculum', 'ISO 9001', 'Safeguarding trained'] },
    supplies: [ { kind: 'brand', key: 'quick-lift', what: 'Hypo kit pouches for every school we train' } ],
    cases: [ { title: 'Midlands primary schools', text: 'Hypo awareness training for staff in 140 schools.' } ],
    feed: [ { sub: 'Courses · 6d', text: 'January dates for school hypo training are open.' } ],
    contact: { person: 'Imran Patel, Courses', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('diabetes', [
  { gw: 'diabetes', zone: 'balance-bakery', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Balance Bakery Live · Christmas baking', desc: 'Stollen and mince pies baked live, with the carbs per portion worked out on screen.' },
  { gw: 'diabetes', type: 'Event', icon: '💬', time: 'Dec 3', title: 'Type 1 Together parents’ evening chat', desc: 'An online chat for parents of children with type 1. School, sleep and sensors.' },
  { gw: 'diabetes', type: 'Event', icon: '🚶', time: 'Nov 28', title: 'Kelvingrove Park walk, Glasgow', desc: 'Diabetes Walkers Glasgow: an easy loop from the bandstand, then tea.' },
  { gw: 'diabetes', zone: 'glucora', type: 'Event', icon: '🎨', time: 'Dec 3', title: 'Glucora colour vote', desc: 'Pick the next three Overpatch colours with the community.' },
  { gw: 'diabetes', zone: 'solewell', type: 'Sale', icon: '🧦', time: 'Nov 28', title: 'Solewell winter sock sale', desc: 'Buy two five-packs, get a third free, all weekend.' },
  { gw: 'diabetes', type: 'Event', icon: '🍽️', time: 'Dec 3', title: 'Eating out at Christmas: online talk', desc: 'Sarah Quinn on menus, carbs and enjoying the party. Free.' },
  { gw: 'diabetes', type: 'Event', icon: '🌳', time: 'Dec 5', title: 'Pollok Country Park long walk', desc: 'Diabetes Walkers Glasgow’s monthly longer walk. Bring your hypo kit.' },
  { gw: 'diabetes', zone: 'quick-lift', type: 'Deadline', icon: '👛', time: 'Dec 12', title: 'Schools pack orders for January', desc: 'Quick Lift: order hypo kit pouches for the new term.' }
]);
})();
/* ═════════ /DIABETESXX ═════════ */
