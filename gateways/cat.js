/* ═════════ CATXX — a Pets demo gateway (2026-11-21, Sean; build -89) ═════════
   Built with the _tools/README.md recipe. Palette (light): warm cream, ginger, violet (the existing SECTOR_FEED accent).
   Home sector: Pets (key pet). Tone: welfare first; health questions go to the person's own vet; apps record and remind,
   they never diagnose. Brands, pros and communities are fictional; places are real. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const GINGER = 'linear-gradient(135deg,#F2A35E,#C2621F)', VIOLET = 'linear-gradient(135deg,#A78BFA,#6D28D9)', CREAM = 'linear-gradient(135deg,#EADBC4,#B39470)', TEAL = 'linear-gradient(135deg,#7CC4BA,#2F7E73)';

GATEWAYS.cat = {
  name: 'CatXX', domain: 'catxx.com', emoji: '🐈', sector: 'pet', live: true,
  tagline: 'The Cat Universe',
  theme: {
    bg: '#FFF8F1', text: '#2B211B', cardBg: '#FFFFFF', cardBorder: 'rgba(194,98,31,.12)',
    headerBg: 'linear-gradient(180deg,#FDEBD9,#FFF8F1)', accent: '#D9772E', accentAlt: '#6D28D9', dark: false
  },
  gradient: 'linear-gradient(135deg,#6D28D9,#C2621F,#F2A35E)',
  stats: { members: '11.2M', brands: '6,800+', agents: '78' },
  spaces: ['All Feed', 'New Kittens', 'Cat Health', 'Indoor Cats', 'Adoption', 'Catios'],
  trending: ['#Catio', '#AdoptDontShop', '#CatsOfCatXX'],
  brandZones: [
    { key: 'purrch', name: 'Purrch', color: '#D9772E', tier: 'Founding Partner', tag: 'Cat trees, shelves and catios, made in Wales' },
    { key: 'tabby-kitchen', name: 'Tabby Kitchen', color: '#6D28D9', tier: 'Brand Zone', tag: 'Complete cat food, cooked in small batches' },
    { key: 'litterly', name: 'Litterly', color: '#2F7E73', tier: 'Brand Zone', tag: 'Plant-based litter, delivered when you need it' },
    { key: 'pounce-play', name: 'Pounce Play', color: '#B39470', tier: 'Brand Zone', tag: 'Toys that keep indoor cats busy' }
  ],
  apps: [
    { name: 'Cat Diary', color: '#D9772E', desc: 'Meals, litter, weight and vet visits in one place', key: 'cat-diary', url: 'apps/cat-diary.html',
      dev: 'Tabby Kitchen', rating: '4.8', users: '2.2M', perms: ['profile', 'feed'],
      tagline: 'Notice the small changes.',
      about: 'Cat Diary keeps a simple daily record for each cat: meals, water, litter and weight. Small changes are often the first sign something is up, so it flags a missed meal or a weight drop and suggests you check in with your vet.',
      features: ['A daily log per cat', 'Weight chart', 'Flags for missed meals and weight change', 'Vet visit notes'],
      shots: ['apps/cat-diary/shot-1.jpg', 'apps/cat-diary/shot-2.jpg', 'apps/cat-diary/shot-3.jpg'],
      version: '3.6', size: '10 KB',
      updates: [ { v: '3.6', ago: 3, notes: 'Weight-change flags.' }, { v: '3.2', ago: 80, notes: 'Two-cat households.' }, { v: '2.8', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@two_tabbies_tess', stars: 5, ago: 1, text: 'Spotted Mo eating less before I did. Vet caught a sore tooth.' }, { who: '@kitten_mum_kim', stars: 5, ago: 8, text: 'Perfect for a new kitten.' }, { who: '@old_cat_owen', stars: 4, ago: 22, text: 'Helps me keep track of my 17-year-old.' } ] },
    { name: 'Cat Years', color: '#6D28D9', desc: 'How old is your cat in human years?', key: 'cat-years', url: 'apps/cat-years.html',
      dev: 'Pounce Play', rating: '4.7', users: '1.4M', perms: ['profile', 'feed'],
      tagline: 'Fifteen at one. Twenty-four at two.',
      about: 'Cat Years converts your cat’s age into human years using the common rule (15 at one, 24 at two, then about four a year) and tells you which life stage they’re in, from kitten to super-senior, with the things to think about at each stage.',
      features: ['Cat years to human years', 'Life stages explained', 'Birthday countdown', 'Share a birthday to CatXX'],
      shots: ['apps/cat-years/shot-1.jpg', 'apps/cat-years/shot-2.jpg', 'apps/cat-years/shot-3.jpg'],
      version: '2.1', size: '8 KB',
      updates: [ { v: '2.1', ago: 5, notes: 'Life-stage notes.' }, { v: '1.8', ago: 90, notes: 'Birthday countdown.' }, { v: '1.4', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@old_cat_owen', stars: 5, ago: 2, text: 'Biscuit is 84 in human years. Respect.' }, { who: '@kitten_mum_kim', stars: 4, ago: 12, text: 'Cute and useful.' }, { who: '@two_tabbies_tess', stars: 5, ago: 30, text: 'Lovely birthday cards.' } ] },
    { name: 'Care Reminders', color: '#2F7E73', desc: 'Flea, worming, vaccination and check-up reminders', key: 'care-reminders', url: 'apps/care-reminders.html',
      dev: 'Purrch', rating: '4.8', users: '980K', perms: ['profile', 'feed'],
      tagline: 'Never miss the boring bits.',
      about: 'Care Reminders keeps track of the routine jobs your vet has set: flea and worm treatments, vaccination boosters, check-ups and claw trims. Enter the schedule your vet gave you and it reminds you a few days before.',
      features: ['Your vet’s schedule, not ours', 'Reminders a few days before', 'A record of every treatment', 'Two or more cats'],
      shots: ['apps/care-reminders/shot-1.jpg', 'apps/care-reminders/shot-2.jpg', 'apps/care-reminders/shot-3.jpg'],
      version: '2.4', size: '9 KB',
      updates: [ { v: '2.4', ago: 4, notes: 'Claw-trim reminders.' }, { v: '2.0', ago: 80, notes: 'Multiple cats.' }, { v: '1.6', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@two_tabbies_tess', stars: 5, ago: 3, text: 'Finally on top of the flea treatments.' }, { who: '@rescue_ruth', stars: 5, ago: 14, text: 'We use it for all our foster cats.' }, { who: '@kitten_mum_kim', stars: 4, ago: 31, text: 'Clear and simple.' } ] }
  ],
  pros: [
    { key: 'hannah-price-behaviour', name: 'Hannah Price Cat Behaviour', color: '#D9772E', tag: 'Cat behaviour help · scratching, spraying, cats who don’t get on', role: 'Cat behaviourist',
      img: U('1773394184847-04cbdaf8c962', 800, 800), base: 'Leeds, UK · and online', langs: 'English', years: 12, rating: '4.9', reviewsN: 468, cur: '£',
      creds: ['Clinical animal behaviourist', 'MSc companion animal behaviour', 'Works on vet referral'],
      about: 'Hannah helps when cats and their humans aren’t getting on: scratching the sofa, toileting outside the tray, two cats who fight. She always asks for a vet check first, because many behaviour problems start with pain.',
      services: [ { id: 'video', name: 'Video consultation', dur: '90 minutes', price: 95, desc: 'Your home, your cats, a written plan within a week.' },
                  { id: 'home', name: 'Home visit', dur: '2 hours', price: 160, desc: 'Within 30 miles of Leeds, with a follow-up call.' },
                  { id: 'new', name: 'Introducing a new cat', dur: '60 minutes', price: 60, desc: 'A step-by-step plan for bringing a second cat home.' } ],
      avail: { days: [1, 2, 3, 4], times: ['10:00', '14:00', '18:00'] },
      reviews: [ { who: '@two_tabbies_tess', stars: 5, ago: 5, text: 'Our two finally share a sofa.' }, { who: '@rescue_ruth', stars: 5, ago: 16, text: 'Brilliant with nervous rescues.' }, { who: '@old_cat_owen', stars: 5, ago: 40, text: 'Kind, practical and calm.' } ],
      posts: [ { ago: 1, text: 'One more litter tray than you have cats, in different rooms. It solves more problems than you’d think.' }, { ago: 6, text: 'Bringing a new cat home for Christmas? Book an introduction plan first.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'grace-adeyemi-grooming', name: 'Grace Adeyemi Cat Grooming', color: '#6D28D9', tag: 'Calm grooming for long-haired and senior cats · mobile', role: 'Cat groomer',
      img: U('1611432579699-484f7990b127', 800, 800), base: 'London, UK', langs: 'English, Yoruba', years: 8, rating: '4.9', reviewsN: 352, cur: '£',
      creds: ['Certified feline groomer', 'Cat-friendly handling trained', 'Fully insured'],
      about: 'Grace grooms cats at home, quietly and slowly, so they don’t have to travel. Mats, long coats, claw trims and senior cats who can’t reach to groom themselves any more.',
      services: [ { id: 'groom', name: 'Full groom (long hair)', dur: '75 minutes', price: 65, desc: 'Brush out, de-mat, tidy and claws.' },
                  { id: 'tidy', name: 'Tidy and claws', dur: '30 minutes', price: 30, desc: 'For short-haired and senior cats.' },
                  { id: 'mat', name: 'Mat removal', dur: '45 minutes', price: 45, desc: 'Gentle mat removal at home.' } ],
      avail: { days: [2, 3, 5, 6], times: ['09:00', '12:00', '15:00'] },
      reviews: [ { who: '@fluffy_fiona', stars: 5, ago: 6, text: 'My Persian actually purred.' }, { who: '@old_cat_owen', stars: 5, ago: 18, text: 'So gentle with my old boy.' }, { who: '@kitten_mum_kim', stars: 4, ago: 42, text: 'Lovely and patient.' } ],
      posts: [ { ago: 2, text: 'Long-haired cat? Five minutes with a wide-toothed comb every day saves a lot of mats later.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ruth-davies-catsitting', name: 'Ruth Davies Cat Sitting', color: '#2F7E73', tag: 'Home visits while you’re away · Cardiff and the Vale', role: 'Cat sitter',
      img: U('1493101561740-e745892775b2', 800, 800), base: 'Cardiff, UK', langs: 'English, Welsh', years: 10, rating: '4.9', reviewsN: 416, cur: '£',
      creds: ['Cat first-aid trained', 'DBS checked', 'Insured and key-holding'],
      about: 'Ruth visits your cats at home while you’re away: food, water, litter, play and a photo for you every visit. Cats stay in their own territory, which most of them much prefer to a cattery.',
      services: [ { id: 'visit', name: 'Daily visit', dur: '30 minutes', price: 16, desc: 'Feed, clean, play, photo update.' },
                  { id: 'twice', name: 'Twice-daily visits', dur: '2 × 30 minutes', price: 28, desc: 'For kittens, seniors or medication.' },
                  { id: 'meet', name: 'Meet and greet', dur: '30 minutes', price: 0, desc: 'Free. Meet Ruth before you book.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6, 0], times: ['08:00', '12:00', '18:00'] },
      reviews: [ { who: '@two_tabbies_tess', stars: 5, ago: 4, text: 'Photos every day. Cats didn’t even notice we’d gone.' }, { who: '@old_cat_owen', stars: 5, ago: 19, text: 'Gave my old cat his tablets perfectly.' }, { who: '@rescue_ruth', stars: 5, ago: 37, text: 'Completely reliable.' } ],
      posts: [ { ago: 3, text: 'Christmas bookings are nearly full. If you’re away over the holidays, book this week.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'cat-lounge', name: 'Cat Lounge', domain: 'lounge.catxx.com', color: '#D9772E', img: U('1482434368596-fbd06cae4f89', 900, 500),
      scope: 'Global', where: 'Every sunny windowsill', members: 624000, online: 12840, tagline: 'Show us the cat. That’s the rule.',
      about: 'Cat photos, new-kitten questions, senior cat care, rescue stories and the occasional cat who has absolutely got into the Christmas tree. Health questions get one answer first: ask your vet.',
      rules: ['Every post needs a cat', 'Health worries: your vet first', 'Adopt, don’t shop, where you can'],
      mods: ['@two_tabbies_tess', '@rescue_ruth'],
      threads: [ { t: 'Your cat vs the Christmas tree: photo thread', by: '@two_tabbies_tess', tag: 'PHOTOS', replies: 3240, ago: 0, votes: 8420 }, { t: 'First kitten: what do I need?', by: '@kitten_mum_kim', tag: 'NEW KITTEN', replies: 682, ago: 1, votes: 1240 }, { t: 'Senior cats: how old is yours?', by: '@old_cat_owen', tag: 'SENIORS', replies: 920, ago: 2, votes: 2110 }, { t: 'Catio builds: show us yours', by: '@diy_dan', tag: 'CATIOS', replies: 418, ago: 3, votes: 960 } ],
      events: [ { title: 'Ask a behaviourist live', day: 4, time: '19:00', where: 'Online' }, { title: 'Cats vs Christmas trees photo contest', day: 12, time: '20:00', where: 'Online' } ] },
    { key: 'cardiff-cat-rescue', name: 'Cardiff Cat Rescue Volunteers', domain: 'cardiff.catxx.com', color: '#2F7E73', img: U('1773683067888-1d0560fde989', 900, 500),
      scope: 'Local', where: 'Cardiff', members: 2900, online: 64, tagline: 'Fostering, fundraising and finding forever homes.',
      about: 'Volunteers who foster cats and kittens in Cardiff, help at adoption days and raise money for vet bills. New fosters always welcome: we train you and cover the costs.',
      rules: ['Fosters follow the vet’s plan', 'Photos of foster cats only with the rescue’s OK', 'Be kind, rescue is hard'],
      mods: ['@rescue_ruth', '@cardiff_cerys'],
      threads: [ { t: 'Christmas adoption day: volunteers', by: '@cardiff_cerys', tag: 'EVENT', replies: 46, ago: 0, votes: 110 }, { t: 'Kitten season is over, but we still need fosters', by: '@rescue_ruth', tag: 'FOSTERING', replies: 34, ago: 1, votes: 88 }, { t: 'Bake sale for vet bills: who can bake?', by: '@cardiff_cerys', tag: 'FUNDRAISING', replies: 52, ago: 2, votes: 74 } ],
      events: [ { title: 'Christmas adoption day', day: 14, time: '11:00', where: 'Canton, Cardiff' }, { title: 'New foster training', day: 6, time: '18:30', where: 'Roath, Cardiff' } ] }
  ],
  feed: [
    { av: 'CX', avBg: GINGER, author: 'CatXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Kittens, seniors, rescues, catios and the people who care for them. Every cat question, every cat story: cats, all in one place.',
      img: U('1573865526739-10659fec78a5', 800, 600), eng: '♡ 96.4K · 💬 9.2K · ↗ 12.6K' },
    { av: 'KK', avBg: VIOLET, author: '@kitten_mum_kim', sub: 'New Kittens · Just now', badge: 'COMMUNITY',
      text: 'Meet Pip. Twelve weeks old, from the Cardiff rescue, and she has opinions about everything already 😾',
      img: U('1574144611937-0df059b5ef3e', 800, 600), eng: '♡ 44.8K · 💬 5.2K · ↗ 1.8K' },
    { av: 'PR', avBg: GINGER, author: 'Purrch', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Garden Catio</b>: a safe outdoor room that fits against any wall, built from Welsh larch. Fresh air, birds to watch, no traffic.',
      img: U('1765714714461-174be7eaad85', 800, 600), eng: '♡ 18.6K · 💬 1.6K · ↗ 2.4K' },
    { av: 'TK', avBg: VIOLET, author: 'Tabby Kitchen', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Slow-cooked, complete, and gone in thirty seconds. Our <b>Senior Recipe</b> is softer for older teeth.',
      img: U('1759588032622-1388cf9505ad', 800, 600), eng: '♡ 7.8K · 💬 640 · ↗ 520' },
    { av: 'DD', avBg: CREAM, author: '@diy_dan', sub: 'Indoor Cats · 2h ago', badge: 'COMMUNITY',
      text: 'Ten years together. He still insists on riding round the house on my shoulder like a very small, very warm scarf 🧡',
      img: U('1601758066503-27afdf1b9316', 800, 600), eng: '♡ 26.2K · 💬 2.4K · ↗ 960' },
    { av: 'PP', avBg: CREAM, author: 'Pounce Play', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Never underestimate a box with a hole in it. Our <b>Hide & Pounce</b> den is cardboard, recyclable and endlessly fascinating.',
      img: U('1774876267601-501fa7d17ac7', 800, 600), eng: '♡ 11.4K · 💬 820 · ↗ 1.1K' },
    { av: 'HP', avBg: GINGER, author: 'Hannah Price Cat Behaviour', sub: 'Cat Health · 6h ago', badge: 'PRO ZONE',
      text: 'A cat that suddenly hides, stops eating or changes its toilet habits is often telling you it hurts. Vet first, behaviourist second.',
      img: U('1545529468-42764ef8c85f', 800, 600), eng: '♡ 5.6K · 💬 380 · ↗ 1.4K' }
  ],
  prompts: ['What do I need for a new kitten?', 'How old is my 9-year-old cat in human years?', 'How do I introduce a second cat?', 'Find a cat sitter in Cardiff for Christmas'],
  businesses: ['feline-feed-mills', 'cattery-supply-co']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'cat', verified: true }, o);
Object.assign(ZONES, {
  'purrch': brand({ key: 'purrch', name: 'Purrch', color: '#D9772E', gradient: GINGER, tier: 'Founding Partner',
    tagline: 'Cat trees, shelves and catios, made in Wales', stats: { followers: '312K', content: '1.4K', products: '48' },
    ad: { badge: 'Featured', img: U('1592194996308-7b43878e84a6', 760, 760), hl: 'Up is where they want to be.', sub: 'Cat trees, wall shelves and catios from Welsh wood.', meta: 'From £24' },
    products: [
      { name: 'Garden Catio', price: '£680', tag: 'FLAGSHIP', emoji: '🏡', rating: 4.9, reviews: 1860, cat: 'catios', special: true, desc: 'A 2m outdoor room in Welsh larch with shelves, a hammock and a cat flap link. Fits against any wall.', features: ['Flat-pack, fits in an afternoon', 'Escape-proof mesh', 'Ten-year guarantee'], review: { who: 'Dan H.', text: 'Indoor cats, outdoor life.' } },
      { name: 'Tall Cat Tree', price: '£140', tag: 'BESTSELLER', emoji: '🌳', rating: 4.8, reviews: 4280, cat: 'trees', desc: 'A solid oak and sisal tree, 160cm, that doesn’t wobble.', features: ['Replaceable sisal'], review: { who: 'Tess W.', text: 'Both cats fight for the top.' } },
      { name: 'Wall Shelf Set', price: '£68', emoji: '🪜', rating: 4.8, reviews: 2140, cat: 'shelves', desc: 'Five shelves and a bridge for a climbing route round the room.', features: ['Fixings included'], review: { who: 'Kim L.', text: 'Our living room is a cat motorway now.' } },
      { name: 'Window Hammock', price: '£24', tag: 'SPECIAL', emoji: '🪟', rating: 4.7, reviews: 3260, cat: 'shelves', special: true, desc: 'A suction-cup hammock for bird-watching in the sun.', features: ['Holds 15kg'], review: { who: 'Owen P.', text: 'My old boy lives in it.' } }
    ],
    shopCats: [ { key: 'catios', label: 'Catios', icon: '🏡' }, { key: 'trees', label: 'Cat trees', icon: '🌳' }, { key: 'shelves', label: 'Shelves', icon: '🪜' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Testing the <b>Tall Cat Tree</b> on the stairs. Approved.', img: U('1495360010541-f48722b34f7d', 800, 440), eng: '♡ 18.6K · 💬 1.6K · ↗ 2.4K', product: 1 },
      { type: 'post', sub: 'Catio life · Yesterday', text: 'Every catio is tested by our workshop cats before it ships. Their standards are high.', img: U('1503777119540-ce54b422baff', 800, 440), eng: '♡ 6.4K · 💬 420' },
      { type: 'community', who: 'Kim L.', whoBg: VIOLET, sub: 'Community · 1d', text: 'Is the catio safe for a 12-week-old kitten?', eng: '♡ 280 · 💬 64', reply: 'Hi Kim! The mesh is fine for kittens, but we’d wait until Pip has had all her vaccinations and your vet is happy for her to be outdoors. Until then, the Window Hammock gives her the birds without the garden. 🐈' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Purrch Live · Build a catio with us', when: 'Live now', desc: 'Watch a Garden Catio go up in an afternoon, with workshop cats supervising.', registered: 5240, capacity: 12000 } ],
    about: { founded: 'Machynlleth · 2014', story: 'A furniture maker in mid-Wales whose cats kept wrecking cheap cat trees. Now we make ones that last, and we joined CatXX as Founding Partner because cat people are already here.', milestones: [['2014', 'The first cat tree'], ['2021', 'The Garden Catio'], ['2026', 'Founding Partner on CatXX']], values: ['Welsh wood', 'Built to last ten years', 'Tested by real cats'] } }),

  'tabby-kitchen': brand({ key: 'tabby-kitchen', name: 'Tabby Kitchen', color: '#6D28D9', gradient: VIOLET, tier: 'Brand Zone',
    tagline: 'Complete cat food, cooked in small batches', stats: { followers: '146K', content: '620', products: '24' },
    ad: { badge: 'New', img: U('1543852786-1cf6624b9987', 760, 760), hl: 'Gone in thirty seconds.', sub: 'Complete wet food, slow-cooked in Somerset.', meta: 'From £8' },
    products: [
      { name: 'Chicken Recipe (12 × 85g)', price: '£14', tag: 'FLAGSHIP', emoji: '🍗', rating: 4.8, reviews: 5420, cat: 'wet', special: true, desc: 'Complete wet food for adult cats: chicken, a little liver and broth, slow-cooked.', features: ['Complete and balanced', 'No added sugar'], review: { who: 'Tess W.', text: 'Both my fussy ones eat it.' } },
      { name: 'Senior Recipe (12 × 85g)', price: '£15', tag: 'BESTSELLER', emoji: '🐟', rating: 4.8, reviews: 2860, cat: 'wet', desc: 'Softer, with extra moisture, for cats over eleven.', features: ['Soft texture'], review: { who: 'Owen P.', text: 'My 17-year-old loves it.' } },
      { name: 'Kitten Recipe (12 × 85g)', price: '£14', emoji: '🍼', rating: 4.8, reviews: 1920, cat: 'wet', desc: 'Complete food for growing kittens up to a year old.', features: ['Small chunks'], review: { who: 'Kim L.', text: 'Pip wolfs it down.' } },
      { name: 'Taster Box', price: '£8', tag: 'SPECIAL', emoji: '📦', rating: 4.7, reviews: 1460, cat: 'boxes', special: true, desc: 'Six flavours to find out what your cat likes. Change food gradually over a week.', features: ['Free delivery'], review: { who: 'Fiona R.', text: 'Saved us buying a case of the wrong one.' } }
    ],
    shopCats: [ { key: 'wet', label: 'Wet food', icon: '🍗' }, { key: 'boxes', label: 'Taster boxes', icon: '📦' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Kitten-sized chunks: the <b>Kitten Recipe</b>, for the first year.', img: U('1529778873920-4da4926a72c2', 800, 440), eng: '♡ 7.8K · 💬 640', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: a free taster box', when: 'Dec 4 · All day', desc: 'A free taster box with any order of two cases.', registered: 4120, capacity: 10000 } ],
    about: { founded: 'Frome · 2016', story: 'A vet nurse and a chef who wanted cat food made like proper food. Every recipe is checked by our vet nutritionist.', milestones: [['2016', 'The first recipe'], ['2022', 'Senior Recipe'], ['2026', 'Brand Zone on CatXX']], values: ['Complete and balanced', 'Small batches', 'Checked by a vet nutritionist'] } }),

  'litterly': brand({ key: 'litterly', name: 'Litterly', color: '#2F7E73', gradient: TEAL, tier: 'Brand Zone',
    tagline: 'Plant-based litter, delivered when you need it', stats: { followers: '68.4K', content: '280', products: '12' },
    ad: { badge: 'Featured', img: U('1764708844823-00d2188dafd8', 760, 760), hl: 'Never carry litter again.', sub: 'Plant-based litter, delivered on your schedule.', meta: 'From £9' },
    products: [
      { name: 'Pea Fibre Litter (10L)', price: '£12', tag: 'FLAGSHIP', emoji: '🌱', rating: 4.8, reviews: 3640, cat: 'litter', special: true, desc: 'Clumping litter made from pea fibre. Light, low-dust and compostable (not with food crops).', features: ['Flushable in small amounts where allowed', 'Low dust'], review: { who: 'Tess W.', text: 'No more dust everywhere.' } },
      { name: 'Litter Subscription', price: '£9', tag: 'BESTSELLER', emoji: '📦', rating: 4.8, reviews: 2240, cat: 'subscription', desc: 'Delivered every two, four or six weeks.', features: ['Change any time'], review: { who: 'Owen P.', text: 'Turns up just as I run out.' } },
      { name: 'Covered Litter Tray', price: '£34', emoji: '🚪', rating: 4.7, reviews: 1460, cat: 'trays', desc: 'A big, covered tray with a carbon filter and a swing door.', features: ['Easy-clean coating'], review: { who: 'Kim L.', text: 'Big enough for our Maine Coon.' } },
      { name: 'Starter Kit', price: '£28', tag: 'SPECIAL', emoji: '🎁', rating: 4.8, reviews: 860, cat: 'trays', special: true, desc: 'A tray, a scoop and a bag of litter for a new kitten.', features: ['Kitten-height tray'], review: { who: 'Fiona R.', text: 'Everything sorted for day one.' } }
    ],
    shopCats: [ { key: 'litter', label: 'Litter', icon: '🌱' }, { key: 'subscription', label: 'Subscriptions', icon: '📦' }, { key: 'trays', label: 'Trays', icon: '🚪' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'Low-dust, light and plant-based: <b>Pea Fibre Litter</b>.', img: U('1676053922722-9917810bc23b', 800, 440), eng: '♡ 3.4K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Litter Q&A with a vet nurse', when: 'Dec 2 · 19:00', desc: 'Trays, litter types and what changes in the tray can mean.', registered: 860, capacity: 2500 } ],
    about: { founded: 'Norwich · 2019', story: 'Made from pea fibre left over from food processing in East Anglia.', milestones: [['2019', 'The first bag'], ['2024', 'Subscriptions'], ['2026', 'Brand Zone on CatXX']], values: ['Plant-based', 'Low dust', 'Delivered, not carried'] } }),

  'pounce-play': brand({ key: 'pounce-play', name: 'Pounce Play', color: '#B39470', gradient: CREAM, tier: 'Brand Zone',
    tagline: 'Toys that keep indoor cats busy', stats: { followers: '92.6K', content: '440', products: '40' },
    ad: { badge: 'Gift', img: U('1763839361290-4d711e42ab5f', 760, 760), hl: 'Hunt. Pounce. Nap.', sub: 'Toys for the hunter in every indoor cat.', meta: 'From £5' },
    products: [
      { name: 'Hide & Pounce Den', price: '£18', tag: 'FLAGSHIP', emoji: '📦', rating: 4.9, reviews: 3860, cat: 'toys', special: true, desc: 'A recyclable cardboard den with peep holes and a scratch floor.', features: ['Recyclable'], review: { who: 'Dan H.', text: 'Better than any expensive toy.' } },
      { name: 'Feather Wand', price: '£8', tag: 'BESTSELLER', emoji: '🪶', rating: 4.8, reviews: 5120, cat: 'toys', desc: 'A long wand with swappable feathers. Put it away after play: strings can be swallowed.', features: ['Three feathers'], review: { who: 'Kim L.', text: 'Ten minutes and Pip sleeps for hours.' } },
      { name: 'Puzzle Feeder', price: '£16', emoji: '🧩', rating: 4.7, reviews: 1860, cat: 'feeders', desc: 'Makes dry food a little hunt instead of a bowl.', features: ['Three difficulty levels'], review: { who: 'Tess W.', text: 'Slowed down my speed-eater.' } },
      { name: 'Advent Calendar', price: '£15', tag: 'SPECIAL', emoji: '🎄', rating: 4.8, reviews: 960, cat: 'gifts', special: true, desc: 'Twenty-four small toys and treats, one for each day of Advent.', features: ['Limited run'], review: { who: 'Owen P.', text: 'He knows which door is next.' } }
    ],
    shopCats: [ { key: 'toys', label: 'Toys', icon: '🪶' }, { key: 'feeders', label: 'Feeders', icon: '🧩' }, { key: 'gifts', label: 'Gifts', icon: '🎄' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'The <b>Advent Calendar</b> is back. Twenty-four doors, one very interested kitten.', img: U('1764323170445-37743bbb2ec1', 800, 440), eng: '♡ 4.2K · 💬 320', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 17 · 23:59', desc: 'Order by midnight on 17 December for delivery before Christmas.', registered: 980, capacity: 3000 } ],
    about: { founded: 'Bristol · 2018', story: 'A behaviourist and a designer making toys that let indoor cats hunt, safely.', milestones: [['2018', 'The first den'], ['2023', 'Puzzle feeders'], ['2026', 'Brand Zone on CatXX']], values: ['Enrichment first', 'Safe by design', 'Recyclable where possible'] } }),

  'feline-feed-mills': { key: 'feline-feed-mills', kind: 'business', gw: 'cat', name: 'Feline Feed Mills', color: '#6D28D9', gradient: VIOLET, img: U('1757430757969-3d2b92025097', 900, 500),
    tier: 'Verified', category: 'Pet food manufacturing', tagline: 'Small-batch cat food made for independent brands.',
    about: { founded: 'Taunton · 2001', story: 'We make wet and dry cat food for independent pet brands, from recipe development with vet nutritionists to filled and labelled cans.' },
    stats: { years: 25, staff: 160, clients: '70 pet brands' },
    caps: [ { name: 'Recipe development', detail: 'With qualified vet nutritionists, to complete-food standards.' }, { name: 'Small-batch production', detail: 'Runs from 5,000 cans.' }, { name: 'Testing', detail: 'Every batch tested before release.' } ],
    specs: { moq: '5,000 cans', lead: '6 to 8 weeks', regions: 'UK & Ireland', certs: ['Pet food industry code of practice', 'BRCGS', 'ISO 22000'] },
    supplies: [ { kind: 'brand', key: 'tabby-kitchen', what: 'Every Tabby Kitchen recipe' } ],
    cases: [ { title: 'A new senior cat recipe', text: 'From brief to shelf in four months.' } ],
    feed: [ { sub: 'Production · 3d', text: 'Christmas production is under way: twelve recipes this week.' } ],
    contact: { person: 'Helen Ward, New brands', response: 'Replies within 24 hours' } },

  'cattery-supply-co': { key: 'cattery-supply-co', kind: 'business', gw: 'cat', name: 'Cattery Supply Co.', color: '#2F7E73', gradient: TEAL, img: U('1787404200329-78b2aaee13c1', 900, 500),
    tier: 'Verified', category: 'Pet trade supplies', tagline: 'Wholesale supplies for catteries, rescues and vets.',
    about: { founded: 'Peterborough · 2008', story: 'We supply catteries, rescues and vet practices with beds, trays, litter, carriers and cleaning products, with rescue discounts on everything.' },
    stats: { years: 18, staff: 48, clients: '1,400 catteries & rescues' },
    caps: [ { name: 'Cattery fit-outs', detail: 'Pens, beds and shelving for new catteries.' }, { name: 'Rescue discount', detail: 'A third off for registered rescues.' }, { name: 'Next-day delivery', detail: 'Order by 3pm.' } ],
    specs: { moq: '£50 order', lead: 'Next day', regions: 'UK', certs: ['Licensed boarding standards compliant', 'Fully insured', 'Living Wage employer'] },
    supplies: [ { kind: 'brand', key: 'litterly', what: 'Bulk litter for 300 rescues' } ],
    cases: [ { title: 'A rescue in Cardiff', text: 'Thirty foster kits for kitten season, delivered next day.' } ],
    feed: [ { sub: 'News · 5d', text: 'Our winter rescue appeal has sent 4,000 beds to shelters.' } ],
    contact: { person: 'Mark Ellis, Rescue accounts', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('cat', [
  { gw: 'cat', zone: 'purrch', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Purrch Live · Build a catio with us', desc: 'A Garden Catio goes up in an afternoon, with workshop cats supervising.' },
  { gw: 'cat', type: 'Event', icon: '🐾', time: 'Dec 2', title: 'Ask a behaviourist live', desc: 'Cat Lounge with Hannah Price: scratching, spraying and cats who don’t get on.' },
  { gw: 'cat', zone: 'tabby-kitchen', type: 'Sale', icon: '🍗', time: 'Dec 4', title: 'Tabby Kitchen Christmas sale', desc: 'A free taster box with any order of two cases.' },
  { gw: 'cat', type: 'Event', icon: '🏠', time: 'Dec 4', title: 'New foster training, Cardiff', desc: 'Cardiff Cat Rescue Volunteers: learn to foster. All costs covered.' },
  { gw: 'cat', zone: 'litterly', type: 'Event', icon: '🌱', time: 'Dec 2', title: 'Litter Q&A with a vet nurse', desc: 'Trays, litter and what changes in the tray can mean.' },
  { gw: 'cat', type: 'Event', icon: '🎄', time: 'Dec 3', title: 'Cats vs Christmas trees photo contest', desc: 'Cat Lounge: show us the chaos. Winners chosen by vote.' },
  { gw: 'cat', type: 'Event', icon: '❤️', time: 'Dec 5', title: 'Christmas adoption day, Cardiff', desc: 'Meet cats looking for homes, with the rescue team on hand.' },
  { gw: 'cat', zone: 'pounce-play', type: 'Deadline', icon: '🎁', time: 'Dec 17', title: 'Last order for Christmas toys', desc: 'Pounce Play: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /CATXX ═════════ */
