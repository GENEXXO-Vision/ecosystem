/* ═════════ CATTLEXX — an Agriculture demo gateway (2026-11-26, Sean; build -97) ═════════
   Built with the _tools/README.md recipe. Palette (light): meadow, hay, Highland-coat russet.
   Home sector: Agriculture (GW_HOME already says so; listed only there). Every farm, maker, pro and product is
   fictional; places, breeds and husbandry facts (283-day gestation, grazing sums) are real. Welfare first: the
   vet pro and the apps point to the farm's own vet for anything about an animal's health. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const RUSSET = 'linear-gradient(135deg,#C2763A,#7C2D12)', MEADOW = 'linear-gradient(135deg,#86EFAC,#15803D)', HAY = 'linear-gradient(135deg,#FDE68A,#CA8A04)', SLATE = 'linear-gradient(135deg,#94A3B8,#334155)';

GATEWAYS.cattle = {
  name: 'CattleXX', domain: 'cattlexx.com', emoji: '🐄', sector: 'agriculture', live: true,
  tagline: 'The Cattle Universe',
  theme: {
    bg: '#F7F8F1', text: '#1F2416', cardBg: '#FFFFFF', cardBorder: 'rgba(31,36,22,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F7F8F1)', accent: '#B45309', accentAlt: '#15803D', dark: false
  },
  gradient: 'linear-gradient(135deg,#86EFAC,#15803D,#C2763A)',
  stats: { members: '1.1M', brands: '560+', agents: '27' },
  spaces: ['All Feed', 'Beef', 'Dairy', 'Grazing', 'Calving', 'Farm Life'],
  trending: ['#HousingDay', '#GrassFed', '#CalvingSeason'],
  brandZones: [
    { key: 'hillhead-beef', name: 'Hillhead Beef', color: '#B45309', tier: 'Founding Partner', tag: 'Grass-fed beef boxes from the hills' },
    { key: 'moorland-dairy', name: 'Moorland Dairy', color: '#334155', tier: 'Brand Zone', tag: 'Cheese and milk from small herds' },
    { key: 'herdwise', name: 'Herdwise', color: '#15803D', tier: 'Brand Zone', tag: 'Collars that spot a cow off-colour early' },
    { key: 'byre-and-bale', name: 'Byre & Bale', color: '#CA8A04', tier: 'Brand Zone', tag: 'Bedding, feeders and farm kit' }
  ],
  apps: [
    { name: 'Calving Calendar', color: '#B45309', desc: 'Due dates for every cow in the herd', key: 'calving-calendar', url: 'apps/calving-calendar.html',
      dev: 'Herdwise', rating: '4.9', users: '420K', perms: ['profile', 'feed'],
      tagline: '283 days, give or take.',
      about: 'Calving Calendar works out due dates from service dates, using the average cattle pregnancy of 283 days, and lists who is due next. Your vet’s scan dates always win.',
      features: ['Due dates from service dates', 'Who’s due this week', 'Calves logged', 'Share a new arrival'],
      shots: ['apps/calving-calendar/shot-1.jpg', 'apps/calving-calendar/shot-2.jpg', 'apps/calving-calendar/shot-3.jpg'],
      version: '4.2', size: '9 KB',
      updates: [ { v: '4.2', ago: 2, notes: 'Calves logged.' }, { v: '3.6', ago: 75, notes: 'Who’s due this week.' }, { v: '2.9', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@hill_farmer_hettie', stars: 5, ago: 1, text: 'Replaced the calendar on the dairy wall.' }, { who: '@rhiannon_price_vet', stars: 5, ago: 15, text: 'My clients turn up knowing who’s due.' }, { who: '@grazier_gwyn', stars: 4, ago: 36, text: 'Simple and right.' } ] },
    { name: 'Grass Wedge', color: '#15803D', desc: 'How many days of grazing are in your fields', key: 'grass-wedge', url: 'apps/grass-wedge.html',
      dev: 'Byre & Bale', rating: '4.8', users: '310K', perms: ['profile', 'feed'],
      tagline: 'Grass is the cheapest feed.',
      about: 'Grass Wedge turns your field measurements into days of grazing: grass cover in kilograms of dry matter per hectare, field size, herd size and how much each animal eats.',
      features: ['Days of grazing ahead', 'Fields ranked by cover', 'Herd and intake settings', 'Share your wedge'],
      shots: ['apps/grass-wedge/shot-1.jpg', 'apps/grass-wedge/shot-2.jpg', 'apps/grass-wedge/shot-3.jpg'],
      version: '2.8', size: '9 KB',
      updates: [ { v: '2.8', ago: 3, notes: 'Fields ranked by cover.' }, { v: '2.2', ago: 90, notes: 'Intake settings.' }, { v: '1.5', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@grazier_gwyn', stars: 5, ago: 2, text: 'Rotational grazing made easy.' }, { who: '@imran_shah_nutrition', stars: 5, ago: 20, text: 'The sums are right.' }, { who: '@hill_farmer_hettie', stars: 4, ago: 43, text: 'Saved us buying in silage.' } ] },
    { name: 'Herd Book', color: '#334155', desc: 'Weights and growth for every animal', key: 'herd-book', url: 'apps/herd-book.html',
      dev: 'Hillhead Beef', rating: '4.8', users: '380K', perms: ['profile', 'feed'],
      tagline: 'Weigh, write, compare.',
      about: 'Herd Book records each animal’s weights and works out daily liveweight gain, so you can see who is thriving and who needs a closer look from you or your vet.',
      features: ['Daily liveweight gain', 'Best and slowest growers', 'Tag numbers and names', 'Share a weigh day'],
      shots: ['apps/herd-book/shot-1.jpg', 'apps/herd-book/shot-2.jpg', 'apps/herd-book/shot-3.jpg'],
      version: '3.3', size: '9 KB',
      updates: [ { v: '3.3', ago: 1, notes: 'Best and slowest growers.' }, { v: '2.7', ago: 66, notes: 'Names beside tags.' }, { v: '2.0', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@hill_farmer_hettie', stars: 5, ago: 2, text: 'Weigh day takes half the time.' }, { who: '@imran_shah_nutrition', stars: 5, ago: 18, text: 'Growth data I can actually use.' }, { who: '@grazier_gwyn', stars: 4, ago: 39, text: 'Does what it says.' } ] }
  ],
  pros: [
    { key: 'rhiannon-price-vet', name: 'Rhiannon Price Farm Vet', color: '#15803D', tag: 'Farm animal vet for beef and dairy herds', role: 'Farm vet',
      img: U('1791395533932-18c602a71f08', 800, 800), base: 'Carmarthen, Wales', langs: 'English, Welsh', years: 14, rating: '4.9', reviewsN: 296, cur: '£',
      creds: ['Registered veterinary surgeon', 'Certificate in cattle health', 'Grew up on a dairy farm'],
      about: 'Rhiannon looks after beef and dairy herds across west Wales: routine visits, calving, herd health plans and fertility. She’d rather prevent a problem than treat one.',
      services: [ { id: 'plan', name: 'Herd health plan visit', dur: '2 hours', price: 180, desc: 'A whole-herd review and a written plan.' },
                  { id: 'fert', name: 'Fertility visit', dur: '1 hour', price: 95, desc: 'Scanning and records, routine.' },
                  { id: 'talk', name: 'Calving workshop', dur: 'Half a day', price: 60, desc: 'Per person, for farm staff.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['07:30', '13:00'] },
      reviews: [ { who: '@hill_farmer_hettie', stars: 5, ago: 3, text: 'Our health plan cut lameness by half.' }, { who: '@grazier_gwyn', stars: 5, ago: 25, text: 'Out at 3am for a hard calving, calm as anything.' }, { who: '@imran_shah_nutrition', stars: 5, ago: 50, text: 'A pleasure to work alongside.' } ],
      posts: [ { ago: 1, text: 'As the herds come in for winter, watch the feet and the breathing. Good air in the shed matters as much as good feed.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'hamish-grant-stock', name: 'Hamish Grant Stockmanship', color: '#B45309', tag: 'Low-stress cattle handling courses', role: 'Stockman and trainer',
      img: U('1617490439585-b855defbe904', 800, 800), base: 'Inverness-shire, Scotland', langs: 'English, Gaelic', years: 45, rating: '5.0', reviewsN: 348, cur: '£',
      creds: ['Forty-five years with Highland and suckler herds', 'Teaches at agricultural colleges', 'Judge at local shows'],
      about: 'Hamish teaches calm cattle handling: reading the animal, working its flight zone and building yards that let cattle move easily. Less stress for the herd, fewer injuries for people.',
      services: [ { id: 'course', name: 'Low-stress handling day', dur: 'One day', price: 120, desc: 'On your farm or his.' },
                  { id: 'yard', name: 'Handling yard review', dur: 'Half a day', price: 150, desc: 'Your yard walked, changes suggested.' },
                  { id: 'show', name: 'Show preparation', dur: 'Two days', price: 220, desc: 'Halter training and turnout.' } ],
      avail: { days: [2, 3, 4, 5], times: ['08:00'] },
      reviews: [ { who: '@grazier_gwyn', stars: 5, ago: 2, text: 'Moved the whole herd without a stick or a shout.' }, { who: '@hill_farmer_hettie', stars: 5, ago: 29, text: 'Changed how my whole family works with cattle.' }, { who: '@rhiannon_price_vet', stars: 5, ago: 56, text: 'I send clients to him.' } ],
      posts: [ { ago: 2, text: 'Stand at the cow’s shoulder and she’ll walk forward. Stand at her head and she’ll stop. Cattle tell you everything, if you watch.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'imran-shah-nutrition', name: 'Imran Shah Cattle Nutrition', color: '#334155', tag: 'Rations and grazing plans for beef and dairy', role: 'Cattle nutritionist',
      img: U('1719154718540-8ef3d94e7712', 800, 800), base: 'Skipton, UK · and online', langs: 'English, Urdu', years: 16, rating: '4.8', reviewsN: 204, cur: '£',
      creds: ['Registered animal nutritionist', 'MSc in ruminant nutrition', 'Independent: sells no feed'],
      about: 'Imran balances winter rations and grazing plans. He tests your silage, works out what the herd needs and helps you buy less feed by using more grass.',
      services: [ { id: 'ration', name: 'Winter ration plan', dur: '1 week', price: 160, desc: 'Silage tested, ration written.' },
                  { id: 'graze', name: 'Grazing plan', dur: '1 week', price: 140, desc: 'Paddocks, rotation and covers.' },
                  { id: 'call', name: 'Feed check call', dur: '45 minutes', price: 50, desc: 'One question, answered.' } ],
      avail: { days: [1, 2, 3, 4], times: ['09:00', '14:00', '18:00'] },
      reviews: [ { who: '@grazier_gwyn', stars: 5, ago: 4, text: 'Halved our bought-in feed.' }, { who: '@hill_farmer_hettie', stars: 5, ago: 30, text: 'Our heifers have never looked better.' }, { who: '@rhiannon_price_vet', stars: 5, ago: 59, text: 'Clear and evidence-based.' } ],
      posts: [ { ago: 3, text: 'Test your silage before you write the winter ration. Two clamps from the same farm can differ more than you’d think.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'the-cattle-yard', name: 'The Cattle Yard', domain: 'yard.cattlexx.com', color: '#B45309', img: U('1783185571997-447ff47a3a74', 900, 500),
      scope: 'Global', where: 'On every farm', members: 268000, online: 3260, tagline: 'Farmers helping farmers.',
      about: 'Beef and dairy farmers, students and cattle lovers swapping advice on grazing, calving, handling, breeds and farm life.',
      rules: ['Welfare first', 'For animal health, call your vet', 'No selling in threads'],
      mods: ['@hill_farmer_hettie', '@grazier_gwyn'],
      threads: [ { t: 'Housing day: when are yours coming in?', by: '@hill_farmer_hettie', tag: 'WINTER', replies: 1460, ago: 0, votes: 2680 }, { t: 'Rotational grazing: show us your paddocks', by: '@grazier_gwyn', tag: 'GRAZING', replies: 920, ago: 1, votes: 1840 }, { t: 'Best breed for hill ground?', by: '@hill_farmer_hettie', tag: 'BREEDS', replies: 1120, ago: 2, votes: 2060 }, { t: 'Your favourite cow, and why', by: '@grazier_gwyn', tag: 'PHOTOS', replies: 1680, ago: 3, votes: 3240 } ],
      events: [ { title: 'Winter housing Q&A: live chat', day: 5, time: '20:00', where: 'Online' }, { title: 'Grazing planning for 2027', day: 21, time: '19:30', where: 'Online' } ] },
    { key: 'devon-grazing-group', name: 'Devon Grazing Group', domain: 'devon.cattlexx.com', color: '#15803D', img: U('1742071853520-946b4c80f2fe', 900, 500),
      scope: 'Local', where: 'Devon', members: 860, online: 22, tagline: 'Grass first, in the red hills.',
      about: 'Devon farmers learning from each other: farm walks, grass measuring, soil pits and a pasty after.',
      rules: ['Everyone welcome, any size of farm', 'Respect biosecurity on farm walks', 'Be kind to newcomers'],
      mods: ['@grazier_gwyn', '@imran_shah_nutrition'],
      threads: [ { t: 'December farm walk: soils in winter', by: '@grazier_gwyn', tag: 'FARM WALK', replies: 42, ago: 0, votes: 88 }, { t: 'Who’s got a plate meter to lend?', by: '@grazier_gwyn', tag: 'KIT', replies: 28, ago: 1, votes: 54 }, { t: 'Herbal leys: worth it?', by: '@imran_shah_nutrition', tag: 'DEBATE', replies: 36, ago: 2, votes: 70 } ],
      events: [ { title: 'Farm walk: soils in winter', day: 9, time: '10:30', where: 'Devon' }, { title: 'Christmas get-together', day: 23, time: '19:00', where: 'Devon' } ] }
  ],
  feed: [
    { av: 'CX', avBg: MEADOW, author: 'CattleXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From Highland hills to dairy parlours: the animals that shaped farming and the people who care for them every day. Grazing, calving, breeds, food and farm life. Cattle, all in one place.',
      img: U('1440428099904-c6d459a7e7b5', 800, 600), eng: '♡ 28.4K · 💬 2.2K · ↗ 3.1K' },
    { av: 'HF', avBg: RUSSET, author: '@hill_farmer_hettie', sub: 'Farm Life · Just now', badge: 'COMMUNITY',
      text: 'Morag has decided winter has come early. She’s been giving me that look since breakfast. Fine, Morag, the shed it is 🐄',
      img: U('1770844430642-f259a008401d', 800, 600), eng: '♡ 21.6K · 💬 2.4K · ↗ 1.8K' },
    { av: 'HB', avBg: RUSSET, author: 'Hillhead Beef', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: housing day at Hillhead. The herd walks down off the hill for winter, into fresh straw and good hay. Follow along with <b>Hillhead Beef</b>.',
      img: U('1498191923457-88552caeccb3', 800, 600), eng: '♡ 24.2K · 💬 2.6K · ↗ 3.0K' },
    { av: 'MD', avBg: SLATE, author: 'Moorland Dairy', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Sixty cows, one family, milk that becomes our <b>Moorland Cheddar</b> eighteen months later.',
      img: U('1567513068697-fca8c2af4528', 800, 600), eng: '♡ 8.8K · 💬 640 · ↗ 720' },
    { av: 'GG', avBg: MEADOW, author: '@grazier_gwyn', sub: 'Grazing · 2h ago', badge: 'COMMUNITY',
      text: 'Last check on the youngstock before dark, and the nosy lot came straight over. Grass is nearly done; the shed’s ready for them.',
      img: U('1783185572005-4c83b3086485', 800, 600), eng: '♡ 7.6K · 💬 580 · ↗ 340' },
    { av: 'HW', avBg: MEADOW, author: 'Herdwise', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'She’s eating less and lying down more. The <b>Herdwise Collar</b> noticed before anyone did, and the vet came early.',
      img: U('1636998980792-63f27ddea4e3', 800, 600), eng: '♡ 5.4K · 💬 380 · ↗ 420' },
    { av: 'RP', avBg: MEADOW, author: 'Rhiannon Price Farm Vet', sub: 'Calving · 6h ago', badge: 'PRO ZONE',
      text: 'An autumn calf, up and feeding within the hour. Colostrum in the first six hours is the best start any calf can get.',
      img: U('1500595046743-cd271d694d30', 800, 600), eng: '♡ 4.8K · 💬 320 · ↗ 380' }
  ],
  prompts: ['Why do farmers bring cattle inside for winter?', 'What is rotational grazing?', 'How long is a cow pregnant?', 'What’s the difference between beef and dairy breeds?'],
  businesses: ['taw-valley-livestock', 'clover-ley-seeds']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'cattle', verified: true }, o);
Object.assign(ZONES, {
  'hillhead-beef': brand({ key: 'hillhead-beef', name: 'Hillhead Beef', color: '#B45309', gradient: RUSSET, tier: 'Founding Partner',
    tagline: 'Grass-fed beef boxes from the hills', stats: { followers: '286K', content: '720', products: '18' },
    ad: { badge: 'Featured', img: U('1763139235459-6db1c9cff3c5', 760, 760), hl: 'Raised on the hill. Grass all the way.', sub: 'Beef boxes from our Highland herd.', meta: 'From £49' },
    products: [
      { name: 'Hillhead Family Box', price: '£89', tag: 'FLAGSHIP', emoji: '🥩', rating: 4.9, reviews: 4260, cat: 'boxes', special: true, desc: 'Steaks, mince, a roasting joint and stewing beef, 8 kg in all.', features: ['Grass-fed, hung 28 days', 'Delivered chilled'], review: { who: 'Hettie M.', text: 'Tastes like beef used to.' } },
      { name: 'Christmas Rib', price: '£69', tag: 'BESTSELLER', emoji: '🎄', rating: 4.9, reviews: 1860, cat: 'boxes', desc: 'A three-bone rib for Christmas dinner.', features: ['Order by 14 December'], review: { who: 'Gwyn E.', text: 'The star of our table.' } },
      { name: 'Mince and Stew Box', price: '£49', emoji: '🍲', rating: 4.8, reviews: 2140, cat: 'boxes', desc: '5 kg of everyday cuts.', features: ['Freezer-friendly'], review: { who: 'Imran S.', text: 'Brilliant value.' } },
      { name: 'Visit the Herd', price: '£15', tag: 'SPECIAL', emoji: '🚜', rating: 4.9, reviews: 960, cat: 'visits', special: true, desc: 'A guided farm walk to meet the Highland herd.', features: ['Spring and summer'], review: { who: 'Rhiannon P.', text: 'Happy cattle, honest farm.' } }
    ],
    shopCats: [ { key: 'boxes', label: 'Beef boxes', icon: '🥩' }, { key: 'visits', label: 'Farm visits', icon: '🚜' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Coming down off the hill, one shaggy head at a time. The herd behind every <b>Hillhead Family Box</b>.', img: U('1782892175575-b6404ec6134f', 800, 440), eng: '♡ 24.2K · 💬 2.6K · ↗ 3.0K', product: 0 },
      { type: 'post', sub: 'Farm · Yesterday', text: 'Hay in the rack and a long winter ahead. Come and say hello in spring on a <b>Visit the Herd</b> walk.', img: U('1522521612083-730fb19791c1', 800, 440), eng: '♡ 7.8K · 💬 520', product: 3 },
      { type: 'community', who: 'Hettie M.', whoBg: RUSSET, sub: 'Community · 1d', text: 'Do your cattle stay out all winter? Highlands are hardy, right?', eng: '♡ 620 · 💬 180', reply: 'Hi Hettie! They’re hardy, but the hill gets bitter in January. The cows and calves come into an open-sided shed with straw and hay, and the older bullocks stay out with shelter and extra feed. We decide with our vet each year. 🐄' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Hillhead Live · housing day', when: 'Live now', desc: 'The herd walks down off the hill into the winter shed.', registered: 9640, capacity: 24000 } ],
    about: { founded: 'Inverness-shire · 1968', story: 'Three generations of one family on the same hill farm. We joined CattleXX as Founding Partner because people should know where their beef comes from.', milestones: [['1968', 'The first Highland cows'], ['2015', 'Beef boxes'], ['2026', 'Founding Partner on CattleXX']], values: ['Grass-fed, always', 'Welfare plan with our vet', 'Hedges and wildlife on every field'] } }),

  'moorland-dairy': brand({ key: 'moorland-dairy', name: 'Moorland Dairy', color: '#334155', gradient: SLATE, tier: 'Brand Zone',
    tagline: 'Cheese and milk from small herds', stats: { followers: '118K', content: '460', products: '22' },
    ad: { badge: 'Gift', img: U('1778091959181-9798b0244734', 760, 760), hl: 'Eighteen months in the making.', sub: 'Farmhouse cheddar from sixty cows.', meta: 'From £7' },
    products: [
      { name: 'Moorland Cheddar', price: '£14', tag: 'FLAGSHIP', emoji: '🧀', rating: 4.9, reviews: 3120, cat: 'cheese', special: true, desc: 'Clothbound, aged eighteen months, 500 g.', features: ['Unpasteurised', 'Made on the farm'], review: { who: 'Gwyn E.', text: 'The best cheddar I’ve had.' } },
      { name: 'Christmas Cheese Box', price: '£39', tag: 'BESTSELLER', emoji: '🎁', rating: 4.9, reviews: 1640, cat: 'cheese', desc: 'Four cheeses, chutney and oatcakes.', features: ['Order by 16 December'], review: { who: 'Imran S.', text: 'A gift everyone loved.' } },
      { name: 'Whole Milk Subscription', price: '£7 / week', emoji: '🥛', rating: 4.8, reviews: 2240, cat: 'milk', desc: 'Four litres a week in glass bottles.', features: ['Local delivery'], review: { who: 'Hettie M.', text: 'Cream on top, like I remember.' } },
      { name: 'Clotted Cream', price: '£7', tag: 'SPECIAL', emoji: '🍨', rating: 4.9, reviews: 1460, cat: 'milk', special: true, desc: 'Thick, golden and made this week.', features: ['227 g'], review: { who: 'Rhiannon P.', text: 'Dangerous.' } }
    ],
    shopCats: [ { key: 'cheese', label: 'Cheese', icon: '🧀' }, { key: 'milk', label: 'Milk & cream', icon: '🥛' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Afternoon feed in the winter shed. Every one of these girls has a name and a say in the <b>Moorland Cheddar</b>.', img: U('1771962152057-4c3015841488', 800, 440), eng: '♡ 8.8K · 💬 640', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: free cheese with every box', when: 'Dec 4 · All day', desc: 'A free truckle with every Christmas Cheese Box, one day only.', registered: 1460, capacity: 4000 } ],
    about: { founded: 'Exmoor · 1994', story: 'A small family dairy that started making cheese to keep the farm going.', milestones: [['1994', 'The first cheddar'], ['2018', 'Glass bottles back'], ['2026', 'Brand Zone on CattleXX']], values: ['Small herd, known by name', 'Cows out at grass all summer', 'Made on the farm'] } }),

  'herdwise': brand({ key: 'herdwise', name: 'Herdwise', color: '#15803D', gradient: MEADOW, tier: 'Brand Zone',
    tagline: 'Collars that spot a cow off-colour early', stats: { followers: '54.6K', content: '220', products: '10' },
    ad: { badge: 'New', img: U('1782565569321-6351a53464be', 760, 760), hl: 'Know before you see it.', sub: 'Collars that watch eating, resting and heat.', meta: 'From £3 / cow / month' },
    products: [
      { name: 'Herdwise Collar', price: 'From £3 / cow / month', tag: 'FLAGSHIP', emoji: '📡', rating: 4.7, reviews: 860, cat: 'collars', special: true, desc: 'Watches eating, chewing and resting, and alerts you when a cow changes.', features: ['Five-year battery', 'Alerts on your phone'], review: { who: 'Hettie M.', text: 'Caught a sick cow a day early.' } },
      { name: 'Heat Alerts', price: '£1 / cow / month', tag: 'BESTSELLER', emoji: '📅', rating: 4.7, reviews: 640, cat: 'software', desc: 'Tells you which cows are bulling, so you can serve on time.', features: ['Works with the collar'], review: { who: 'Rhiannon P.', text: 'Fertility records improved straight away.' } },
      { name: 'Shed Base Station', price: '£290', emoji: '📶', rating: 4.6, reviews: 320, cat: 'collars', desc: 'Picks up every collar in the shed and yard.', features: ['Solar option'], review: { who: 'Gwyn E.', text: 'Easy to fit.' } },
      { name: 'Vet Share', price: '£5 / month', tag: 'SPECIAL', emoji: '🩺', rating: 4.8, reviews: 420, cat: 'software', special: true, desc: 'Lets your vet see the herd’s data.', features: ['You choose what’s shared'], review: { who: 'Imran S.', text: 'Helpful for planning visits.' } }
    ],
    shopCats: [ { key: 'collars', label: 'Collars', icon: '📡' }, { key: 'software', label: 'Software', icon: '📅' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'A long shed, a hundred cows, one phone that knows how each of them is eating. The <b>Herdwise Collar</b>.', img: U('1763887415522-8cf2821f109b', 800, 440), eng: '♡ 4.2K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Webinar: spotting illness early', when: 'Dec 1 · 20:00', desc: 'What collars notice, and when to call the vet, with live Q&A.', registered: 560, capacity: 1600 } ],
    about: { founded: 'Harper Adams · 2017', story: 'Agricultural engineers and a vet who wanted farmers to know sooner.', milestones: [['2017', 'The first collar'], ['2022', 'Heat Alerts'], ['2026', 'Brand Zone on CattleXX']], values: ['Earlier care for every cow', 'The farmer owns the data', 'Works alongside the vet'] } }),

  'byre-and-bale': brand({ key: 'byre-and-bale', name: 'Byre & Bale', color: '#CA8A04', gradient: HAY, tier: 'Brand Zone',
    tagline: 'Bedding, feeders and farm kit', stats: { followers: '42.8K', content: '180', products: '120' },
    ad: { badge: 'Featured', img: U('1759844288072-d6dc7a39a408', 760, 760), hl: 'Warm, dry and well fed.', sub: 'Winter kit for every shed.', meta: 'From £12' },
    products: [
      { name: 'Round Bale Feeder', price: '£389', tag: 'FLAGSHIP', emoji: '🌾', rating: 4.8, reviews: 960, cat: 'feeding', special: true, desc: 'Cuts hay waste with a roof and tombstone bars.', features: ['Galvanised', 'Holds one round bale'], review: { who: 'Gwyn E.', text: 'Wastes half what the old ring did.' } },
      { name: 'Cow Brush', price: '£249', tag: 'BESTSELLER', emoji: '🪥', rating: 4.9, reviews: 1240, cat: 'comfort', desc: 'A spinning brush cows queue up to use.', features: ['Starts when touched'], review: { who: 'Hettie M.', text: 'They love it. Happier cows.' } },
      { name: 'Straw Pellet Bedding', price: '£12', emoji: '🛏️', rating: 4.7, reviews: 860, cat: 'comfort', desc: 'Dry, absorbent bedding for calf pens.', features: ['20 kg bag'], review: { who: 'Rhiannon P.', text: 'Keeps calves dry.' } },
      { name: 'Water Trough Heater', price: '£79', tag: 'SPECIAL', emoji: '💧', rating: 4.6, reviews: 540, cat: 'feeding', special: true, desc: 'Stops troughs freezing in a hard frost.', features: ['Solar or mains'], review: { who: 'Imran S.', text: 'No more breaking ice at dawn.' } }
    ],
    shopCats: [ { key: 'feeding', label: 'Feeding', icon: '🌾' }, { key: 'comfort', label: 'Comfort', icon: '🪥' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Breakfast queue at the barrier. Less waste, more hay in bellies with the <b>Round Bale Feeder</b>.', img: U('1583095117886-ddb019562ee0', 800, 440), eng: '♡ 3.6K · 💬 220', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: 20% off winter kit', when: 'Dec 4 · All day', desc: 'A fifth off feeders, heaters and bedding.', registered: 860, capacity: 2500 } ],
    about: { founded: 'Shrewsbury · 1985', story: 'A farm supply shop that grew because farmers kept asking for kit that lasts.', milestones: [['1985', 'The first shop'], ['2019', 'Online'], ['2026', 'Brand Zone on CattleXX']], values: ['Kit that lasts', 'Advice from farmers', 'Animal comfort first'] } }),

  'taw-valley-livestock': { key: 'taw-valley-livestock', kind: 'business', gw: 'cattle', name: 'Taw Valley Livestock Market', color: '#B45309', gradient: RUSSET, img: U('1549488235-42996ae3b650', 900, 500),
    tier: 'Verified', category: 'Livestock auctions', tagline: 'Fair prices, every Tuesday.',
    about: { founded: 'Devon · 1902', story: 'A weekly cattle and sheep market run by and for local farmers, now with online bidding too.' },
    stats: { years: 124, staff: 45, clients: '2,800 farmers' },
    caps: [ { name: 'Weekly sales', detail: 'Store cattle, calves and breeding stock.' }, { name: 'Online bidding', detail: 'Watch and bid from the farm.' }, { name: 'Welfare checks', detail: 'Every animal seen on arrival.' } ],
    specs: { moq: 'One animal', lead: 'Weekly', regions: 'South West England', certs: ['Approved livestock market', 'Welfare officer on site', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'hillhead-beef', what: 'Store cattle sales for southern buyers' } ],
    cases: [ { title: 'A market goes online', text: 'Video sales kept trade going in a hard winter.' } ],
    feed: [ { sub: 'Market · 3d', text: 'Christmas show and sale entries open now.' } ],
    contact: { person: 'Jenny Harris, Sales', response: 'Replies within one working day' } },

  'clover-ley-seeds': { key: 'clover-ley-seeds', kind: 'business', gw: 'cattle', name: 'Clover Ley Seeds', color: '#15803D', gradient: MEADOW, img: U('1551174466-54af016534cc', 900, 500),
    tier: 'Verified', category: 'Grass and clover seed mixes', tagline: 'Mixes that feed cattle and soil.',
    about: { founded: 'Herefordshire · 1996', story: 'We blend grass, clover and herb seed mixes for grazing, silage and soil health.' },
    stats: { years: 30, staff: 38, clients: '6,000 farms' },
    caps: [ { name: 'Seed mixes', detail: 'Grazing, silage and herbal leys.' }, { name: 'Advice', detail: 'Right mix for your soil.' }, { name: 'Trials', detail: 'Our own test plots.' } ],
    specs: { moq: 'One acre pack', lead: '1 to 2 weeks', regions: 'UK', certs: ['Certified seed', 'Independently tested', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'hillhead-beef', what: 'Herbal ley mixes for the hill fields' } ],
    cases: [ { title: 'Clover cuts fertiliser', text: 'A farm that halved its fertiliser by sowing clover.' } ],
    feed: [ { sub: 'Trials · 5d', text: 'Winter cover counts on the herbal ley plots.' } ],
    contact: { person: 'Owen Price, Advice', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('cattle', [
  { gw: 'cattle', zone: 'hillhead-beef', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Hillhead Live · housing day', desc: 'The herd walks down off the hill into the winter shed.' },
  { gw: 'cattle', zone: 'moorland-dairy', type: 'Sale', icon: '🧀', time: 'Dec 4', title: 'Moorland Dairy Christmas sale', desc: 'A free truckle with every Christmas Cheese Box.' },
  { gw: 'cattle', zone: 'byre-and-bale', type: 'Sale', icon: '🌾', time: 'Dec 4', title: 'Byre & Bale Christmas sale', desc: '20% off winter kit.' },
  { gw: 'cattle', zone: 'herdwise', type: 'Event', icon: '📡', time: 'Dec 1', title: 'Webinar: spotting illness early', desc: 'What collars notice, and when to call the vet.' },
  { gw: 'cattle', type: 'Event', icon: '💬', time: 'Dec 1', title: 'Winter housing Q&A: live chat', desc: 'The Cattle Yard talks sheds, straw and ventilation.' },
  { gw: 'cattle', type: 'Event', icon: '🥾', time: 'Dec 5', title: 'Farm walk: soils in winter, Devon', desc: 'Devon Grazing Group digs soil pits on World Soil Day.' },
  { gw: 'cattle', type: 'Event', icon: '🌱', time: 'Dec 17', title: 'Grazing planning for 2027', desc: 'The Cattle Yard plans next year’s paddocks together.' },
  { gw: 'cattle', type: 'Event', icon: '🎄', time: 'Dec 19', title: 'Christmas get-together, Devon', desc: 'Devon Grazing Group ends the year together.' }
]);
})();
/* ═════════ /CATTLEXX ═════════ */
