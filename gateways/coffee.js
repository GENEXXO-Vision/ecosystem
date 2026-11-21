/* ═════════ COFFEEXX — a Drinks demo gateway (2026-11-21, Sean; build -89) ═════════
   Built with the _tools/README.md recipe: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (dark): espresso, crema, burnt orange. Home sector: Drinks. Brands, pros and communities are fictional; places are real.
   The Founding Partner's Live event picks up the existing SECTOR_FEED story about Ethiopia's 2026 harvest. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const CREMA = 'linear-gradient(135deg,#D4A373,#8A5A2B)', ROAST = 'linear-gradient(135deg,#7C4A2D,#2E1A10)', EMBER = 'linear-gradient(135deg,#E8783A,#A23B10)', OAT = 'linear-gradient(135deg,#E9DCC7,#A8916C)';

GATEWAYS.coffee = {
  name: 'CoffeeXX', domain: 'coffeexx.com', emoji: '☕', sector: 'drinks', live: true,
  tagline: 'The Coffee Universe',
  theme: {
    bg: '#15100C', text: '#F5EDE4', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(212,163,115,.18)',
    headerBg: 'linear-gradient(180deg,#2E1E14,#15100C)', accent: '#D4A373', accentAlt: '#E8783A', dark: true
  },
  gradient: 'linear-gradient(135deg,#2E1A10,#7C4A2D,#D4A373)',
  stats: { members: '9.4M', brands: '8,200+', agents: '84' },
  spaces: ['All Feed', 'Home Brewing', 'Espresso', 'Roasters', 'Cafés', 'Origins'],
  trending: ['#LatteArt', '#PourOver', '#Ethiopia2026'],
  brandZones: [
    { key: 'ember-bean', name: 'Ember & Bean Roasters', color: '#D4A373', tier: 'Founding Partner', tag: 'Speciality coffee, roasted in Bristol' },
    { key: 'pourwell', name: 'Pourwell', color: '#E8783A', tier: 'Brand Zone', tag: 'Grinders, kettles and drippers for home brewers' },
    { key: 'crema-club', name: 'Crema Club', color: '#A8916C', tier: 'Brand Zone', tag: 'A new roaster in your letterbox every month' },
    { key: 'kettle-kiln', name: 'Kettle & Kiln', color: '#C08A5E', tier: 'Brand Zone', tag: 'Cups and pourers, thrown in Cornwall' }
  ],
  apps: [
    { name: 'Brew Ratio', color: '#D4A373', desc: 'The right coffee-to-water ratio for every method', key: 'brew-ratio', url: 'apps/brew-ratio.html',
      dev: 'Pourwell', rating: '4.9', users: '2.6M', perms: ['profile', 'feed'],
      tagline: 'Weigh it. Brew it. Love it.',
      about: 'Brew Ratio works out how much coffee and water you need for pour-over, cafetière, AeroPress or espresso, for one cup or a whole pot, with the grind, water temperature and brew time that go with each.',
      features: ['Ratios for six methods', 'Scales to any number of cups', 'Grind, temperature and time', 'A built-in brew timer'],
      shots: ['apps/brew-ratio/shot-1.jpg', 'apps/brew-ratio/shot-2.jpg', 'apps/brew-ratio/shot-3.jpg'],
      version: '4.4', size: '9 KB',
      updates: [ { v: '4.4', ago: 3, notes: 'Brew timer with bloom.' }, { v: '4.0', ago: 70, notes: 'AeroPress and cold brew.' }, { v: '3.5', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@pourover_priya', stars: 5, ago: 1, text: 'My V60 finally tastes like the café’s.' }, { who: '@flat_white_fred', stars: 5, ago: 9, text: 'Weighing changed everything.' }, { who: '@beanie_bex', stars: 4, ago: 20, text: 'Want a moka pot setting.' } ] },
    { name: 'Bean Diary', color: '#E8783A', desc: 'Tasting notes for every bag you brew', key: 'bean-diary', url: 'apps/bean-diary.html',
      dev: 'Ember & Bean Roasters', rating: '4.8', users: '840K', perms: ['profile', 'feed'],
      tagline: 'Remember the good ones.',
      about: 'Bean Diary keeps a note of every coffee you brew: origin, process, roaster, the flavours you tasted and a score. Over time it shows which origins and processes you love, so your next bag is a better guess.',
      features: ['A note for every bag', 'Flavour wheel picks', 'Your favourite origins and processes', 'Share a coffee to CoffeeXX'],
      shots: ['apps/bean-diary/shot-1.jpg', 'apps/bean-diary/shot-2.jpg', 'apps/bean-diary/shot-3.jpg'],
      version: '2.7', size: '10 KB',
      updates: [ { v: '2.7', ago: 5, notes: 'Your favourites, by origin and process.' }, { v: '2.3', ago: 90, notes: 'Flavour wheel.' }, { v: '1.9', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@cupping_cal', stars: 5, ago: 2, text: 'Turns out I love washed Kenyans. Who knew.' }, { who: '@pourover_priya', stars: 5, ago: 12, text: 'Beautiful and simple.' }, { who: '@flat_white_fred', stars: 4, ago: 30, text: 'Nice way to remember bags.' } ] },
    { name: 'Fresh Check', color: '#A8916C', desc: 'Is your coffee at its best? Track roast dates', key: 'fresh-check', url: 'apps/fresh-check.html',
      dev: 'Crema Club', rating: '4.7', users: '410K', perms: ['profile', 'feed'],
      tagline: 'Brew it at its peak.',
      about: 'Fresh Check counts from the roast date on the bag. Filter coffee usually tastes best from a few days to about four weeks after roasting; espresso likes a little longer to rest. It tells you which bag to open next and when to finish one.',
      features: ['Roast dates for every bag', 'Resting and peak windows', 'Open-next suggestions', 'Reminders before a bag fades'],
      shots: ['apps/fresh-check/shot-1.jpg', 'apps/fresh-check/shot-2.jpg', 'apps/fresh-check/shot-3.jpg'],
      version: '1.8', size: '9 KB',
      updates: [ { v: '1.8', ago: 4, notes: 'Espresso resting times.' }, { v: '1.5', ago: 80, notes: 'Open-next suggestions.' }, { v: '1.1', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@beanie_bex', stars: 5, ago: 3, text: 'Stopped me opening the fresh bag first.' }, { who: '@cupping_cal', stars: 4, ago: 15, text: 'Handy with three bags on the go.' }, { who: '@home_barista_hal', stars: 5, ago: 33, text: 'My espresso is better rested.' } ] }
  ],
  pros: [
    { key: 'maya-brooks-barista', name: 'Maya Brooks Barista Training', color: '#D4A373', tag: 'Barista courses · espresso, milk, latte art', role: 'Barista trainer',
      img: U('1507914372368-b2b085b925a1', 800, 800), base: 'Bristol, UK', langs: 'English', years: 11, rating: '4.9', reviewsN: 588, cur: '£',
      creds: ['Head trainer at a Bristol roastery', 'UK latte art championship finalist', 'Coffee skills diploma'],
      about: 'Maya teaches espresso the way cafés do: dose, grind, time, taste. Her latte art class takes you from a white blob to a heart in an afternoon, and her home-barista session sorts out the machine you already own.',
      services: [ { id: 'latte', name: 'Latte art class', dur: '3 hours', price: 75, desc: 'Steam silky milk, pour a heart, then a tulip. Groups of four.' },
                  { id: 'home', name: 'Home barista session', dur: '2 hours', price: 120, desc: 'At your house, with your machine and grinder.' },
                  { id: 'pro', name: 'Café team training', dur: 'Full day', price: 480, desc: 'For new cafés: workflow, recipes and consistency.' } ],
      avail: { days: [2, 3, 4, 6], times: ['09:30', '13:30'] },
      reviews: [ { who: '@flat_white_fred', stars: 5, ago: 4, text: 'Poured my first heart. Then my second.' }, { who: '@home_barista_hal', stars: 5, ago: 15, text: 'Fixed my shots in twenty minutes.' }, { who: '@new_cafe_nina', stars: 5, ago: 40, text: 'Our team training was brilliant.' } ],
      posts: [ { ago: 1, text: 'Sour espresso? Grind finer. Bitter? Grind coarser. Change one thing at a time.' }, { ago: 6, text: 'December latte art classes: two places left.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'leo-marchetti-roasting', name: 'Leo Marchetti Coffee Consulting', color: '#E8783A', tag: 'Roasting and café consulting · menus, sourcing, new roasteries', role: 'Coffee consultant',
      img: U('1705645930353-0e335311ef20', 800, 800), base: 'London, UK · and online', langs: 'English, Italian', years: 17, rating: '4.8', reviewsN: 214, cur: '£',
      creds: ['Q grader (licensed cupper)', 'Roaster for 12 years', 'Set up 30 independent cafés'],
      about: 'Leo has roasted, cupped and sourced coffee for seventeen years. He helps new roasteries choose a roaster and a first range, and new cafés build a coffee menu that sells.',
      services: [ { id: 'call', name: 'Consultation call', dur: '60 minutes', price: 90, desc: 'Your plan, your questions, honest answers.' },
                  { id: 'roastery', name: 'New roastery set-up', dur: '8 weeks', price: 2600, desc: 'Machine, sourcing, first five coffees, roast profiles.' },
                  { id: 'cupping', name: 'Private cupping', dur: '2 hours', price: 160, desc: 'Taste eight coffees side by side and learn to score them.' } ],
      avail: { days: [1, 2, 4], times: ['10:00', '14:00'] },
      reviews: [ { who: '@new_cafe_nina', stars: 5, ago: 8, text: 'Our menu sells twice as many filters now.' }, { who: '@cupping_cal', stars: 5, ago: 22, text: 'The cupping was a masterclass.' }, { who: '@roaster_ray', stars: 4, ago: 50, text: 'Saved us from buying the wrong roaster.' } ],
      posts: [ { ago: 2, text: 'This year’s Ethiopian naturals are extraordinary. Blueberry, jasmine, and no ferment. Buy them while they last.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'sam-okeke-espresso-repair', name: 'Sam Okeke Espresso Care', color: '#A8916C', tag: 'Home espresso machine servicing and repairs · grinders too', role: 'Espresso engineer',
      img: U('1517701848373-805868efd0ac', 800, 800), base: 'Manchester, UK', langs: 'English, Igbo', years: 9, rating: '4.9', reviewsN: 432, cur: '£',
      creds: ['Manufacturer-trained on six machine brands', 'Water treatment specialist', 'Fully insured'],
      about: 'Sam services and repairs home espresso machines and grinders across the North West: descaling, new seals, pumps and that strange noise. He’ll also tell you how to stop scale coming back.',
      services: [ { id: 'service', name: 'Machine service', dur: '2 hours, at your home', price: 85, desc: 'Descale, new group seals, clean and test.' },
                  { id: 'repair', name: 'Repair call-out', dur: 'Diagnosis on the day', price: 55, desc: 'Parts quoted before any work.' },
                  { id: 'grinder', name: 'Grinder clean and align', dur: '1 hour', price: 45, desc: 'Burrs cleaned, checked and aligned.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:00', '13:00', '16:00'] },
      reviews: [ { who: '@home_barista_hal', stars: 5, ago: 5, text: 'Machine is quieter and hotter than new.' }, { who: '@flat_white_fred', stars: 5, ago: 17, text: 'Explained the hard-water problem properly.' }, { who: '@beanie_bex', stars: 5, ago: 36, text: 'Quick, kind and fair.' } ],
      posts: [ { ago: 3, text: 'Hard water area? Use filtered water in your machine. Scale is the number one reason I get called out.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'brew-club', name: 'Brew Club', domain: 'brewclub.coffeexx.com', color: '#D4A373', img: U('1600093463592-8e36ae95ef56', 900, 500),
      scope: 'Global', where: 'Every kitchen with a kettle', members: 436000, online: 8120, tagline: 'Show us your morning cup.',
      about: 'Home brewers, café regulars and the occasional professional: recipes, gear advice, latte art attempts (all of them) and the beans worth buying this month.',
      rules: ['Share your recipe with your photo', 'No gear snobbery', 'Every brewer started with instant'],
      mods: ['@pourover_priya', '@home_barista_hal'],
      threads: [ { t: 'Latte art progress: week one vs now', by: '@flat_white_fred', tag: 'LATTE ART', replies: 1840, ago: 0, votes: 4620 }, { t: 'Best grinder under £150?', by: '@beanie_bex', tag: 'GEAR', replies: 862, ago: 1, votes: 1420 }, { t: 'This year’s Ethiopian naturals: tasting thread', by: '@cupping_cal', tag: 'ORIGINS', replies: 512, ago: 2, votes: 960 }, { t: 'Cafetière recipe that changed my mornings', by: '@pourover_priya', tag: 'RECIPES', replies: 396, ago: 3, votes: 810 } ],
      events: [ { title: 'Live home cupping', day: 3, time: '19:00', where: 'Online' }, { title: 'Latte art throwdown', day: 10, time: '20:00', where: 'Online' } ] },
    { key: 'brighton-coffee-crawl', name: 'Brighton Coffee Crawl', domain: 'brighton.coffeexx.com', color: '#E8783A', img: U('1764489307253-da5c9c311fa2', 900, 500),
      scope: 'Local', where: 'Brighton', members: 4200, online: 88, tagline: 'Five cafés, one Saturday, every month.',
      about: 'A walking tour of Brighton’s independent cafés on the first Saturday of every month, plus a home-brewers’ swap and the occasional roastery visit.',
      rules: ['Buy something at every stop', 'Tip your barista', 'Walk, don’t drive'],
      mods: ['@brighton_bea', '@pourover_priya'],
      threads: [ { t: 'December crawl: the North Laine route', by: '@brighton_bea', tag: 'CRAWL', replies: 54, ago: 0, votes: 120 }, { t: 'Bean swap: what have you got?', by: '@beanie_bex', tag: 'SWAP', replies: 38, ago: 1, votes: 64 }, { t: 'New café on Trafalgar Street: any good?', by: '@flat_white_fred', tag: 'NEW', replies: 41, ago: 2, votes: 72 } ],
      events: [ { title: 'December coffee crawl', day: 14, time: '10:00', where: 'North Laine, Brighton' }, { title: 'Home brewers’ bean swap', day: 5, time: '11:00', where: 'Kemptown, Brighton' } ] }
  ],
  feed: [
    { av: 'CX', avBg: CREMA, author: 'CoffeeXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From the farm to your first sip. Roasters, home brewing, espresso, cafés, origins and the baristas who pour it. Coffee, all in one place.',
      img: U('1512568400610-62da28bc8a13', 800, 600), eng: '♡ 72.6K · 💬 6.4K · ↗ 8.2K' },
    { av: 'PB', avBg: OAT, author: '@pourover_priya', sub: 'Home Brewing · Just now', badge: 'COMMUNITY',
      text: 'Saturday ritual: a V60 of the new Ethiopian, an almond croissant and a book I keep not finishing ☕',
      img: U('1542372147193-a7aca54189cd', 800, 600), eng: '♡ 21.4K · 💬 2.6K · ↗ 820' },
    { av: 'EB', avBg: CREMA, author: 'Ember & Bean Roasters', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Ripe cherries at our partner farm in Yirgacheffe. The <b>2026 Ethiopian naturals</b> land in Bristol next week: blueberry, jasmine, cacao.',
      img: U('1586095516671-d085ff58cdd4', 800, 600), eng: '♡ 14.2K · 💬 1.1K · ↗ 1.8K' },
    { av: 'PW', avBg: EMBER, author: 'Pourwell', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Slow, steady, spiral. The <b>Pourwell Dripper</b> and gooseneck kettle make pour-over easy to repeat every morning.',
      img: U('1619860703338-9c70a1af6a63', 800, 600), eng: '♡ 6.8K · 💬 520 · ↗ 610' },
    { av: 'NN', avBg: ROAST, author: '@new_cafe_nina', sub: 'Cafés · 2h ago', badge: 'COMMUNITY',
      text: 'Three months since we opened our little café in Hove. Thank you to everyone who has come in, and to Maya for training the team 🙏',
      img: U('1769114474398-a7aef0625ef0', 800, 600), eng: '♡ 9.8K · 💬 960 · ↗ 340' },
    { av: 'CC', avBg: OAT, author: 'Crema Club', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'December’s box: a Colombian from a women-led co-op, roasted by a tiny roastery in the Peak District. Out on the 1st.',
      img: U('1670404161009-29548c027d06', 800, 600), eng: '♡ 5.6K · 💬 430 · ↗ 520' },
    { av: 'MB', avBg: CREMA, author: 'Maya Brooks Barista Training', sub: 'Espresso · 6h ago', badge: 'PRO ZONE',
      text: 'Latte art starts with the milk, not the pour. Stretch it for three seconds, then spin it until it shines like wet paint.',
      img: U('1507915135761-41a0a222c709', 800, 600), eng: '♡ 4.4K · 💬 310 · ↗ 760' }
  ],
  prompts: ['How much coffee do I need for a V60?', 'Why does my espresso taste sour?', 'Which beans should I try if I like fruity coffee?', 'Find a latte art class in Bristol'],
  businesses: ['green-bean-traders', 'steam-service']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'coffee', verified: true }, o);
Object.assign(ZONES, {
  'ember-bean': brand({ key: 'ember-bean', name: 'Ember & Bean Roasters', color: '#D4A373', gradient: CREMA, tier: 'Founding Partner',
    tagline: 'Speciality coffee, roasted in Bristol', stats: { followers: '228K', content: '1.2K', products: '42' },
    ad: { badge: 'Featured', img: U('1783926014847-748a8074eb38', 760, 760), hl: 'The 2026 Ethiopians.', sub: 'Blueberry, jasmine, cacao. Roasted this week.', meta: 'From £9' },
    products: [
      { name: 'Yirgacheffe Natural (250g)', price: '£14', tag: 'FLAGSHIP', emoji: '🫐', rating: 4.9, reviews: 3260, cat: 'beans', special: true, desc: 'A natural-process Ethiopian from a single washing station: blueberry, jasmine and cacao.', features: ['Roasted to order', 'Whole bean or ground', 'Filter or espresso roast'], review: { who: 'Cal D.', text: 'The best coffee I’ve had this year.' } },
      { name: 'House Espresso (1kg)', price: '£32', tag: 'BESTSELLER', emoji: '☕', rating: 4.8, reviews: 4840, cat: 'beans', desc: 'Brazil and Colombia: chocolate, hazelnut, a little cherry. Lovely with milk.', features: ['1kg bag'], review: { who: 'Hal T.', text: 'My daily shot. Never fails.' } },
      { name: 'Decaf Colombia (250g)', price: '£11', emoji: '🌙', rating: 4.7, reviews: 1420, cat: 'beans', desc: 'Sugarcane-process decaf with caramel and red apple.', features: ['Naturally decaffeinated'], review: { who: 'Bex M.', text: 'A decaf I actually enjoy.' } },
      { name: 'Roaster’s Choice Subscription', price: '£12', tag: 'SPECIAL', emoji: '📦', rating: 4.9, reviews: 2180, cat: 'subscription', special: true, desc: 'A different single origin every two weeks, roasted the day before it ships.', features: ['Pause any time'], review: { who: 'Priya S.', text: 'Like travelling, but in my kitchen.' } },
      { name: 'Gift Card', price: '£25', emoji: '🎁', rating: 4.9, reviews: 960, cat: 'gifts', desc: 'For the coffee person in your life.', features: ['Never expires'], review: { who: 'Fred W.', text: 'Always lands well.' } }
    ],
    shopCats: [ { key: 'beans', label: 'Beans', icon: '☕' }, { key: 'subscription', label: 'Subscriptions', icon: '📦' }, { key: 'gifts', label: 'Gift cards', icon: '🎁' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Freshly roasted: the <b>Yirgacheffe Natural</b>, out of the cooler and into bags.', img: U('1553292218-4892c2e7e1ae', 800, 440), eng: '♡ 14.2K · 💬 1.1K · ↗ 1.8K', product: 0 },
      { type: 'post', sub: 'At the roastery · Yesterday', text: 'We cup every batch before it ships. If it doesn’t taste like the bag says, it doesn’t go out.', img: U('1606486544554-164d98da4889', 800, 440), eng: '♡ 5.2K · 💬 380' },
      { type: 'community', who: 'Hal T.', whoBg: ROAST, sub: 'Community · 1d', text: 'Can I use the Yirgacheffe for espresso?', eng: '♡ 310 · 💬 72', reply: 'Hi Hal! Yes: choose the espresso roast when you order. Try 18g in, 40g out, in about 28 seconds, and let the bag rest for a week after roasting first. It makes a wild, blueberry flat white. ☕' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Ember & Bean Live · Cupping the 2026 Ethiopians', when: 'Live now', desc: 'Our head roaster cups six new Ethiopian lots live and tells you which to buy.', registered: 4260, capacity: 9000 } ],
    about: { founded: 'Bristol · 2012', story: 'A two-kilo roaster in a Stokes Croft garage that grew into a roastery buying directly from farms in eight countries. We joined CoffeeXX as Founding Partner because coffee people are already here.', milestones: [['2012', 'The first roast'], ['2019', 'Direct trade with Yirgacheffe'], ['2026', 'Founding Partner on CoffeeXX']], values: ['Pay farmers properly', 'Roast to order', 'Taste every batch'] } }),

  'pourwell': brand({ key: 'pourwell', name: 'Pourwell', color: '#E8783A', gradient: EMBER, tier: 'Brand Zone',
    tagline: 'Grinders, kettles and drippers for home brewers', stats: { followers: '126K', content: '540', products: '36' },
    ad: { badge: 'New', img: U('1511920170033-f8396924c348', 760, 760), hl: 'Brew it again tomorrow.', sub: 'Grinders, kettles and drippers that repeat.', meta: 'From £18' },
    products: [
      { name: 'Hand Grinder', price: '£89', tag: 'FLAGSHIP', emoji: '⚙️', rating: 4.9, reviews: 2840, cat: 'grinders', special: true, desc: 'Steel conical burrs and 40 click settings, from espresso to cafetière.', features: ['Steel burrs', 'Five-year warranty'], review: { who: 'Bex M.', text: 'Best upgrade I’ve made.' } },
      { name: 'Gooseneck Kettle', price: '£64', tag: 'BESTSELLER', emoji: '🫖', rating: 4.8, reviews: 3120, cat: 'kettles', desc: 'Temperature control to the degree, and a spout that pours like a pencil line.', features: ['Holds temperature for 30 minutes'], review: { who: 'Priya S.', text: 'Pour-over became easy.' } },
      { name: 'Pourwell Dripper', price: '£18', emoji: '🔻', rating: 4.8, reviews: 2460, cat: 'drippers', desc: 'A cone dripper in Cornish ceramic.', features: ['Fits most mugs'], review: { who: 'Cal D.', text: 'Clean, bright cups.' } },
      { name: 'Brew Scale', price: '£36', tag: 'SPECIAL', emoji: '⚖️', rating: 4.7, reviews: 1680, cat: 'scales', special: true, desc: 'Weighs to 0.1g with a built-in timer.', features: ['USB-C charging'], review: { who: 'Fred W.', text: 'Consistency, finally.' } }
    ],
    shopCats: [ { key: 'grinders', label: 'Grinders', icon: '⚙️' }, { key: 'kettles', label: 'Kettles', icon: '🫖' }, { key: 'drippers', label: 'Drippers', icon: '🔻' }, { key: 'scales', label: 'Scales', icon: '⚖️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Steam, stretch, pour: our milk jug is back in stock alongside the <b>Brew Scale</b>.', img: U('1757495152561-1f632725b271', 800, 440), eng: '♡ 6.8K · 💬 520', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: a fifth off grinders', when: 'Nov 27 · All day', desc: 'A fifth off every grinder, for one day.', registered: 3860, capacity: 9000 } ],
    about: { founded: 'Sheffield · 2017', story: 'Two engineers who wanted their home coffee to taste the same every day. Our grinders are machined in Sheffield.', milestones: [['2017', 'The first hand grinder'], ['2023', 'The gooseneck kettle'], ['2026', 'Brand Zone on CoffeeXX']], values: ['Made to repeat', 'Spare parts for everything', 'Machined in Britain'] } }),

  'crema-club': brand({ key: 'crema-club', name: 'Crema Club', color: '#A8916C', gradient: OAT, tier: 'Brand Zone',
    tagline: 'A new roaster in your letterbox every month', stats: { followers: '84.6K', content: '360', products: '8' },
    ad: { badge: 'Featured', img: U('1773894480003-955c58ddf4af', 760, 760), hl: 'Twelve roasters a year.', sub: 'A new small roaster in your letterbox every month.', meta: 'From £10' },
    products: [
      { name: 'Monthly Box', price: '£14', tag: 'FLAGSHIP', emoji: '📬', rating: 4.8, reviews: 3640, cat: 'boxes', special: true, desc: 'One 250g bag from a different independent roaster each month, letterbox-sized.', features: ['Whole bean or ground', 'Skip any month'], review: { who: 'Bex M.', text: 'I’ve found three new favourite roasters.' } },
      { name: 'Double Box', price: '£24', tag: 'BESTSELLER', emoji: '📦', rating: 4.8, reviews: 1820, cat: 'boxes', desc: 'Two bags each month, for households that drink a lot.', features: ['Two roasters'], review: { who: 'Fred W.', text: 'Enough for the two of us.' } },
      { name: 'Gift: Three Months', price: '£40', emoji: '🎁', rating: 4.9, reviews: 1240, cat: 'gifts', desc: 'Three boxes, with a card to say who it’s from.', features: ['Choose the start month'], review: { who: 'Nina K.', text: 'My dad’s favourite present.' } },
      { name: 'Tasting Notebook', price: '£10', tag: 'SPECIAL', emoji: '📓', rating: 4.7, reviews: 520, cat: 'gifts', special: true, desc: 'A notebook with flavour wheels and space for 60 coffees.', features: ['Recycled paper'], review: { who: 'Cal D.', text: 'Pairs nicely with Bean Diary.' } }
    ],
    shopCats: [ { key: 'boxes', label: 'Boxes', icon: '📬' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'December’s roaster is a two-person outfit in the Peak District, roasting on a ten-kilo machine.', img: U('1757949921983-ab4c911cc3fe', 800, 440), eng: '♡ 5.6K · 💬 430', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'December box reveal', when: 'Dec 1 · 08:00', desc: 'Meet December’s roaster in a live Q&A as the boxes land.', registered: 2240, capacity: 5000 } ],
    about: { founded: 'Leeds · 2018', story: 'Two coffee lovers who wanted to try every small roaster in Britain. Now we do it for 30,000 members.', milestones: [['2018', 'The first box'], ['2023', '100 roasters featured'], ['2026', 'Brand Zone on CoffeeXX']], values: ['Small roasters first', 'Fair prices for roasters', 'Plastic-free boxes'] } }),

  'kettle-kiln': brand({ key: 'kettle-kiln', name: 'Kettle & Kiln', color: '#C08A5E', gradient: ROAST, tier: 'Brand Zone',
    tagline: 'Cups and pourers, thrown in Cornwall', stats: { followers: '46.8K', content: '220', products: '28' },
    ad: { badge: 'Gift', img: U('1541167760496-1628856ab772', 760, 760), hl: 'Every cup, different.', sub: 'Thrown by hand in a St Ives studio.', meta: 'From £16' },
    products: [
      { name: 'Flat White Cup and Saucer', price: '£28', tag: 'FLAGSHIP', emoji: '☕', rating: 4.9, reviews: 1460, cat: 'cups', special: true, desc: 'A 160ml cup shaped for latte art, glazed in sea-green or cream.', features: ['Dishwasher safe'], review: { who: 'Fred W.', text: 'My hearts look better in this cup.' } },
      { name: 'Espresso Cups (pair)', price: '£32', tag: 'BESTSELLER', emoji: '🥃', rating: 4.8, reviews: 980, cat: 'cups', desc: 'Two 80ml cups with thick walls to keep the shot hot.', features: ['Pair'], review: { who: 'Hal T.', text: 'Beautiful weight in the hand.' } },
      { name: 'Ceramic Pour-Over Set', price: '£58', emoji: '🔻', rating: 4.8, reviews: 620, cat: 'brewing', desc: 'A dripper, a jug and two cups in matching glaze.', features: ['Gift boxed'], review: { who: 'Priya S.', text: 'Too pretty to put away.' } },
      { name: 'Seconds Mug', price: '£16', tag: 'SPECIAL', emoji: '♻️', rating: 4.7, reviews: 840, cat: 'cups', special: true, desc: 'A mug with a tiny glaze slip, half price.', features: ['While stocks last'], review: { who: 'Bex M.', text: 'Couldn’t find the flaw.' } }
    ],
    shopCats: [ { key: 'cups', label: 'Cups', icon: '☕' }, { key: 'brewing', label: 'Brewing', icon: '🔻' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Shaped for a pour: the <b>Flat White Cup</b>, thrown in St Ives.', img: U('1532713107108-dfb5d8d2fc42', 800, 440), eng: '♡ 2.8K · 💬 190', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 16 · 23:59', desc: 'Order by midnight on 16 December for delivery before Christmas.', registered: 720, capacity: 2000 } ],
    about: { founded: 'St Ives · 2015', story: 'A potter who made cups for the café next door, and then for cafés all over the country.', milestones: [['2015', 'Cups for one café'], ['2022', 'In 80 cafés'], ['2026', 'Brand Zone on CoffeeXX']], values: ['Thrown by hand', 'Made to be used', 'Seconds, never wasted'] } }),

  'green-bean-traders': { key: 'green-bean-traders', kind: 'business', gw: 'coffee', name: 'Green Bean Traders', color: '#D4A373', gradient: CREMA, img: U('1776176623814-a570759b5190', 900, 500),
    tier: 'Verified', category: 'Green coffee import', tagline: 'Green coffee for roasters, traceable to the farm.',
    about: { founded: 'London · 2009', story: 'We import green coffee from farms and co-operatives in twelve countries and sell it to roasters across the UK, from one sack to a container.' },
    stats: { years: 17, staff: 34, clients: '520 roasters' },
    caps: [ { name: 'Traceable lots', detail: 'Every sack traced to the farm or washing station.' }, { name: 'Sample service', detail: 'Roast samples of any lot within 48 hours.' }, { name: 'Forward contracts', detail: 'Buy next year’s harvest at this year’s price.' } ],
    specs: { moq: 'One 60kg sack', lead: 'In stock: 3 days', regions: 'UK & Ireland', certs: ['Organic certified', 'Fair Trade licensed', 'BRCGS storage'] },
    supplies: [ { kind: 'brand', key: 'ember-bean', what: 'The 2026 Yirgacheffe naturals' }, { kind: 'brand', key: 'crema-club', what: 'Green coffee for featured roasters' } ],
    cases: [ { title: 'A new roastery in Cardiff', text: 'From first samples to a six-coffee range in two months.' } ],
    feed: [ { sub: 'Harvest news · 2d', text: 'Ethiopian naturals are arriving at Tilbury this week. Samples on request.' }, { sub: 'Notice · 1w', text: 'Christmas: last deliveries 19 December.' } ],
    contact: { person: 'Amara Bekele, Roaster accounts', response: 'Replies within 24 hours' } },

  'steam-service': { key: 'steam-service', kind: 'business', gw: 'coffee', name: 'Steam & Service', color: '#E8783A', gradient: EMBER, img: U('1763343030530-d76455f7526f', 900, 500),
    tier: 'Verified', category: 'Espresso machine engineering', tagline: 'Commercial espresso machines installed, serviced and repaired.',
    about: { founded: 'Birmingham · 2004', story: 'We install and service espresso machines and grinders for cafés, offices and restaurants across England, with engineers on call seven days a week.' },
    stats: { years: 22, staff: 96, clients: '3,100 cafés' },
    caps: [ { name: 'Installation', detail: 'Machine, grinder and water filtration, fitted in a day.' }, { name: 'Planned maintenance', detail: 'Services every six months, so nothing stops on a Saturday.' }, { name: 'Emergency call-out', detail: 'An engineer within four hours in most cities.' } ],
    specs: { moq: 'One machine', lead: 'Install within 7 days', regions: 'England & Wales', certs: ['Gas Safe', 'Water regulations approved', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'ember-bean', what: 'Machines in Ember & Bean’s three cafés' } ],
    cases: [ { title: 'A new café in Hove', text: 'Machine, grinders and water filtration fitted the day before opening.' } ],
    feed: [ { sub: 'Engineering · 5d', text: 'Most breakdowns we see are scale. A water filter is cheaper than a call-out.' } ],
    contact: { person: 'Darren Webb, New cafés', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('coffee', [
  { gw: 'coffee', zone: 'ember-bean', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Ember & Bean Live · Cupping the 2026 Ethiopians', desc: 'Six new Ethiopian lots cupped live, and which ones to buy.' },
  { gw: 'coffee', type: 'Event', icon: '☕', time: 'Nov 24', title: 'Live home cupping', desc: 'Brew Club: four coffees, one kitchen table, everyone tasting together.' },
  { gw: 'coffee', zone: 'pourwell', type: 'Sale', icon: '⚙️', time: 'Nov 27', title: 'Pourwell Black Friday', desc: 'A fifth off every grinder, for one day.' },
  { gw: 'coffee', zone: 'crema-club', type: 'Event', icon: '📬', time: 'Dec 1', title: 'Crema Club: December box reveal', desc: 'Meet December’s roaster live as the boxes land.' },
  { gw: 'coffee', type: 'Event', icon: '🔄', time: 'Nov 26', title: 'Home brewers’ bean swap, Brighton', desc: 'Brighton Coffee Crawl: bring a bag, take a bag.' },
  { gw: 'coffee', type: 'Event', icon: '🥛', time: 'Dec 4', title: 'Latte art class, Bristol', desc: 'Maya Brooks: silky milk, a heart, then a tulip.' },
  { gw: 'coffee', type: 'Event', icon: '🚶', time: 'Dec 5', title: 'December coffee crawl, Brighton', desc: 'Five independent cafés in the North Laine, on foot.' },
  { gw: 'coffee', zone: 'kettle-kiln', type: 'Deadline', icon: '🎁', time: 'Dec 16', title: 'Last order for Christmas cups', desc: 'Kettle & Kiln: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /COFFEEXX ═════════ */
