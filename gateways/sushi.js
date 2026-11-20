/* ═════════ SUSHIXX — a Food demo gateway (2026-11-19, Sean) ═════════
   Built like HotelXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (dark): ink night, salmon, wasabi, rice cream. Home sector: Food.
   Brands, pros and communities are fictional; places are real. Allergens are always shown; raw fish is labelled raw.
   Source of truth: _lab/home85/sushixx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const SALMON = 'linear-gradient(135deg,#FF9F7A,#D9542E)', WASABI = 'linear-gradient(135deg,#B9D46A,#5F8A2A)', INK = 'linear-gradient(135deg,#4A5A72,#1C2636)', RICE = 'linear-gradient(135deg,#EFE4CF,#B9A47C)';

GATEWAYS.sushi = {
  name: 'SushiXX', domain: 'sushixx.com', emoji: '🍣', sector: 'food', live: true,
  tagline: 'The Sushi Universe',
  theme: {
    bg: '#0E1318', text: '#F2EEE8', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(255,138,101,.16)',
    headerBg: 'linear-gradient(180deg,#1C2636,#0E1318)', accent: '#FF8A65', accentAlt: '#A3C45A', dark: true
  },
  gradient: 'linear-gradient(135deg,#1C2636,#D9542E,#FF9F7A)',
  stats: { members: '5.6M', brands: '4,800+', agents: '74' },
  spaces: ['All Feed', 'Omakase', 'Make It at Home', 'Fish & Rice', 'Sake & Tea', 'Sushi Chefs'],
  trending: ['#Omakase', '#HomeSushi', '#SakeSeason'],
  brandZones: [
    { key: 'kaito', name: 'Kaito Sushi Bar', color: '#FF8A65', tier: 'Founding Partner', tag: 'Counter sushi in London, Manchester and Edinburgh' },
    { key: 'hinoki-knives', name: 'Hinoki Knife Co.', color: '#7C8CA6', tier: 'Brand Zone', tag: 'Japanese kitchen knives, finished by hand in Seki' },
    { key: 'umami-pantry', name: 'Umami Pantry', color: '#C9B48A', tier: 'Brand Zone', tag: 'Rice, nori, soy and everything in between' },
    { key: 'rolly', name: 'Rolly', color: '#A3C45A', tier: 'Brand Zone', tag: 'Sushi kits to roll at home' }
  ],
  apps: [
    { name: 'Sushi Guide', color: '#FF8A65', desc: 'What is it, is it raw, and what is in it?', key: 'sushi-guide', url: 'apps/sushi-guide.html',
      dev: 'Kaito Sushi Bar', rating: '4.8', users: '1.9M', perms: ['profile', 'feed'],
      tagline: 'Order like you have done it for years.',
      about: 'Sushi Guide explains every piece on the menu: nigiri, maki, sashimi, temaki and more. Each one is labelled raw, cooked or vegetarian, with its allergens, and you can save the ones you love to show the chef.',
      features: ['Every type of sushi explained', 'Raw, cooked and veggie labels', 'Allergens on every piece', 'Your favourites list'],
      shots: ['apps/sushi-guide/shot-1.jpg', 'apps/sushi-guide/shot-2.jpg', 'apps/sushi-guide/shot-3.jpg'],
      version: '3.4', size: '10 KB',
      updates: [ { v: '3.4', ago: 3, notes: 'Allergen filter: hide anything with sesame, shellfish or gluten.' }, { v: '3.0', ago: 70, notes: 'Favourites to show the chef.' }, { v: '2.5', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@firstomakase_fay', stars: 5, ago: 1, text: 'Read it on the train to my first omakase. Felt like a regular.' }, { who: '@shellfishfree_sid', stars: 5, ago: 9, text: 'The allergen filter is a lifesaver. Literally, for me.' }, { who: '@rollmaster_ray', stars: 4, ago: 22, text: 'Add regional styles please!' } ] },
    { name: 'Rice Timer', color: '#A3C45A', desc: 'Perfect sushi rice, step by step', key: 'rice-timer', url: 'apps/rice-timer.html',
      dev: 'Umami Pantry', rating: '4.9', users: '760K', perms: ['profile', 'feed'],
      tagline: 'Rice is the sushi. Get it right.',
      about: 'Rice Timer walks you through sushi rice: how much to cook for how many rolls, rinse, soak, cook, rest and season, with a timer for each step and the vinegar mix worked out for you.',
      features: ['Rice and vinegar for any number of rolls', 'A timer for every step', 'Rinse, soak, cook, rest, season', 'Share your rolls to SushiXX'],
      shots: ['apps/rice-timer/shot-1.jpg', 'apps/rice-timer/shot-2.jpg', 'apps/rice-timer/shot-3.jpg'],
      version: '2.1', size: '9 KB',
      updates: [ { v: '2.1', ago: 5, notes: 'Scales to any number of rolls.' }, { v: '1.8', ago: 90, notes: 'Step timers.' }, { v: '1.4', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@rollmaster_ray', stars: 5, ago: 2, text: 'My rice used to be mush. Now it is perfect every time.' }, { who: '@homecook_hana', stars: 5, ago: 11, text: 'The vinegar maths alone is worth it.' }, { who: '@firstomakase_fay', stars: 4, ago: 27, text: 'Would love a brown rice option.' } ] },
    { name: 'Counter Seats', color: '#7C8CA6', desc: 'Book a seat at the sushi counter', key: 'counter-seats', url: 'apps/counter-seats.html',
      dev: 'Kaito Sushi Bar', rating: '4.7', users: '410K', perms: ['profile', 'feed'],
      tagline: 'Pick your seat. Watch the chef.',
      about: 'Counter Seats books a seat at the Kaito counter: pick a night and a sitting, choose your seats (the corner sees the knife work best), tell the chef about allergies, and get your booking in one tap.',
      features: ['Pick your exact seats', 'Two sittings a night', 'Allergies sent to the chef', 'Your booking, ready to show'],
      shots: ['apps/counter-seats/shot-1.jpg', 'apps/counter-seats/shot-2.jpg', 'apps/counter-seats/shot-3.jpg'],
      version: '1.7', size: '10 KB',
      updates: [ { v: '1.7', ago: 4, notes: 'Allergies go straight to the chef.' }, { v: '1.4', ago: 80, notes: 'Edinburgh counter added.' }, { v: '1.0', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@datenight_dan', stars: 5, ago: 3, text: 'Booked the two corner seats for our anniversary. Perfect.' }, { who: '@shellfishfree_sid', stars: 5, ago: 13, text: 'The chef already knew about my allergy when I sat down.' }, { who: '@homecook_hana', stars: 4, ago: 31, text: 'Smooth and quick.' } ] }
  ],
  pros: [
    { key: 'joel-mensah-sushi-school', name: 'Joel Mensah Sushi School', color: '#FF8A65', tag: 'Sushi-making classes · beginners, couples, private groups', role: 'Sushi chef & teacher',
      img: U('1595211877493-41a4e5f236b3', 800, 800), base: 'London, UK', langs: 'English, Japanese', years: 22, rating: '4.9', reviewsN: 864, cur: '£',
      creds: ['Trained for seven years in Osaka', 'Former head chef at a London omakase counter', 'Level 3 food hygiene'],
      about: 'Joel trained in Osaka and ran a London counter for a decade before opening his school. Classes start with the rice, because that is where sushi lives, and end with everyone eating what they made.',
      services: [ { id: 'class', name: 'Sushi basics class', dur: '3 hours', price: 85, desc: 'Rice, maki and nigiri, then dinner. Groups of ten.' },
                  { id: 'couple', name: 'Couples class', dur: '2.5 hours', price: 150, desc: 'For two, with a glass of sake each.' },
                  { id: 'private', name: 'Private group', dur: '3 hours', price: 680, desc: 'Up to eight people, at the school or at home.' } ],
      avail: { days: [3, 4, 5, 6], times: ['11:00', '15:00', '18:30'] },
      reviews: [ { who: '@homecook_hana', stars: 5, ago: 4, text: 'Joel’s rice tips changed everything.' }, { who: '@datenight_dan', stars: 5, ago: 15, text: 'Best date night we have ever had.' }, { who: '@rollmaster_ray', stars: 5, ago: 38, text: 'Patient, precise and very funny.' } ],
      posts: [ { ago: 1, text: 'Wet your hands with vinegar water before touching the rice, and do not squeeze. Sushi is held, not pressed.' }, { ago: 6, text: 'December classes: four places left.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'anna-cole-sake', name: 'Anna Cole Sake & Tea', color: '#A3C45A', tag: 'Sake tastings and pairings · private, corporate, restaurants', role: 'Sake sommelier',
      img: U('1765005204058-10418f5123c5', 800, 800), base: 'Edinburgh, UK', langs: 'English, Japanese', years: 9, rating: '4.8', reviewsN: 296, cur: '£',
      creds: ['Certified sake sommelier', 'Two years working at a brewery in Niigata', 'Wine and spirits diploma'],
      about: 'Anna fell for sake while teaching English in Niigata and stayed two years to work a brewing season. She runs tastings that make sake simple: dry or sweet, warm or chilled, and what to eat with it.',
      services: [ { id: 'tasting', name: 'Sake tasting evening', dur: '2 hours', price: 45, desc: 'Six sakes, warm and chilled, with small plates.' },
                  { id: 'pairing', name: 'Restaurant pairing menu', dur: 'Delivered in 10 days', price: 380, desc: 'A sake list and pairings for your menu, with staff notes.' },
                  { id: 'private', name: 'Private tasting', dur: '2 hours', price: 420, desc: 'For up to twelve, at your home or office.' } ],
      avail: { days: [2, 4, 5, 6], times: ['17:00', '19:00'] },
      reviews: [ { who: '@firstomakase_fay', stars: 5, ago: 6, text: 'Did not know sake could taste like melon.' }, { who: '@datenight_dan', stars: 5, ago: 20, text: 'The warm sake was a revelation.' }, { who: '@edinburgh_eats', stars: 4, ago: 44, text: 'Great for a team night out.' } ],
      posts: [ { ago: 2, text: 'Cold night? Try junmai sake warmed to about 45°C. Not hot. Just warm, like a bath.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'sami-haddad-private-chef', name: 'Sami Haddad Private Sushi Chef', color: '#7C8CA6', tag: 'Omakase at home · dinners, birthdays, weddings', role: 'Private chef',
      img: U('1758691737646-79dbce8e25fb', 800, 800), base: 'Manchester, UK', langs: 'English, Arabic', years: 12, rating: '4.9', reviewsN: 388, cur: '£',
      creds: ['Ten years at sushi counters in London and Manchester', 'Level 3 food hygiene', 'Allergen awareness trained'],
      about: 'Sami brings the counter to your kitchen table: twelve courses, made in front of you, with fish from Grimsby and rice he seasons on the spot. He asks about every allergy before he plans the menu.',
      services: [ { id: 'omakase', name: 'Omakase at home (per guest)', dur: '3 hours', price: 120, desc: 'Twelve courses for four to ten guests.' },
                  { id: 'platter', name: 'Party platters', dur: 'Delivered', price: 240, desc: 'Sixty pieces for a party, delivered and arranged.' },
                  { id: 'wedding', name: 'Wedding sushi station', dur: 'Up to 4 hours', price: 1800, desc: 'A live counter for up to 120 guests.' } ],
      avail: { days: [4, 5, 6, 0], times: ['18:00', '19:30'] },
      reviews: [ { who: '@datenight_dan', stars: 5, ago: 5, text: 'Sami made my wife’s 40th unforgettable.' }, { who: '@shellfishfree_sid', stars: 5, ago: 17, text: 'Planned a whole menu around my shellfish allergy. Not one compromise.' }, { who: '@manc_foodie', stars: 5, ago: 36, text: 'Better than most restaurants.' } ],
      posts: [ { ago: 3, text: 'Christmas omakase dates are nearly gone. Two Sundays left in December.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'roll-call', name: 'Roll Call', domain: 'rollcall.sushixx.com', color: '#FF8A65', img: U('1553621042-f6e147245754', 900, 500),
      scope: 'Global', where: 'Every counter and kitchen', members: 284000, online: 4120, tagline: 'Show us your rolls.',
      about: 'Home cooks, counter regulars and chefs: share your rolls, your restaurant finds, your rice disasters and your best piece of the year.',
      rules: ['Say where you ate it', 'Be kind about wonky rolls', 'Allergies are not a joke'],
      mods: ['@rollmaster_ray', '@homecook_hana'],
      threads: [ { t: 'Your first-ever homemade roll vs now', by: '@rollmaster_ray', tag: 'HOME', replies: 1420, ago: 0, votes: 3260 }, { t: 'Omakase under £60 in the UK', by: '@firstomakase_fay', tag: 'FINDS', replies: 612, ago: 1, votes: 1180 }, { t: 'Where to buy fish you can eat raw', by: '@homecook_hana', tag: 'Q&A', replies: 388, ago: 2, votes: 740 }, { t: 'Nigiri etiquette: fingers or chopsticks?', by: '@datenight_dan', tag: 'ETIQUETTE', replies: 524, ago: 3, votes: 960 } ],
      events: [ { title: 'Roll-along live', day: 1, time: '19:00', where: 'Online' }, { title: 'Best piece of the year vote', day: 12, time: '20:00', where: 'Online' } ] },
    { key: 'edinburgh-sushi-club', name: 'Edinburgh Sushi Club', domain: 'edinburgh.sushixx.com', color: '#A3C45A', img: U('1608060146923-7b8ab13e22bb', 900, 500),
      scope: 'Local', where: 'Edinburgh', members: 4100, online: 72, tagline: 'Eating our way round the city, one counter at a time.',
      about: 'A monthly dinner at a different Edinburgh sushi spot, sake nights with local experts, and a group chat for the best lunchtime deals.',
      rules: ['Book through the club, pay your share', 'Tell us your allergies', 'Honest reviews only'],
      mods: ['@edinburgh_eats', '@anna_cole'],
      threads: [ { t: 'December dinner: vote for the venue', by: '@edinburgh_eats', tag: 'DINNER', replies: 46, ago: 0, votes: 112 }, { t: 'Best lunch bento near the Royal Mile?', by: '@newinedi_nk', tag: 'Q&A', replies: 28, ago: 1, votes: 54 }, { t: 'Sake night with Anna: sign-up', by: '@anna_cole', tag: 'SAKE', replies: 34, ago: 2, votes: 88 } ],
      events: [ { title: 'Warm sake night', day: 5, time: '19:00', where: 'Leith, Edinburgh' }, { title: 'Christmas sushi dinner', day: 25, time: '19:30', where: 'New Town, Edinburgh' } ] }
  ],
  feed: [
    { av: 'SX', avBg: SALMON, author: 'SushiXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From a Friday-night platter to a twelve-seat omakase counter. Restaurants, home rolling, fish, rice, sake and the chefs behind it all. Sushi, all in one place.',
      img: U('1770164520620-a5612325635b', 800, 600), eng: '♡ 58.6K · 💬 4.4K · ↗ 6.2K' },
    { av: 'RR', avBg: WASABI, author: '@rollmaster_ray', sub: 'Make It at Home · Just now', badge: 'COMMUNITY',
      text: 'Six months of Rice Timer and Friday sushi nights. Salmon nigiri with a little roe on top. My dad asked which restaurant I got it from 🍣',
      img: U('1781478990255-f4f61976a1dc', 800, 600), eng: '♡ 19.4K · 💬 2.2K · ↗ 640' },
    { av: 'KS', avBg: SALMON, author: 'Kaito Sushi Bar', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Winter Omakase</b> starts on 1 December: fourteen courses at the counter, with yellowtail, scallop and winter citrus, in London, Manchester and Edinburgh.',
      img: U('1783797407105-8fe9464ec94c', 800, 600), eng: '♡ 12.2K · 💬 980 · ↗ 1.5K' },
    { av: 'HK', avBg: INK, author: 'Hinoki Knife Co.', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'One long pull, never a saw. The <b>Yanagiba</b> is made for slicing fish in a single stroke, finished by hand in Seki.',
      img: U('1675870791262-99ab4c09e2fd', 800, 600), eng: '♡ 6.8K · 💬 520 · ↗ 620' },
    { av: 'FY', avBg: RICE, author: '@firstomakase_fay', sub: 'Omakase · 2h ago', badge: 'COMMUNITY',
      text: 'First omakase last night. Sat at the corner, watched every cut, and the chef remembered I don’t eat shellfish without me saying it twice ✨',
      img: U('1767265581515-afe9ff46ad76', 800, 600), eng: '♡ 8.2K · 💬 740 · ↗ 260' },
    { av: 'RL', avBg: WASABI, author: 'Rolly', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Roll-along Night is live now. Grab a <b>Rolly kit</b>, put the camera on the counter and roll with us.',
      img: U('1761314025602-d9a27593476f', 800, 600), eng: '♡ 4.6K · 💬 420 · ↗ 380' },
    { av: 'JM', avBg: SALMON, author: 'Joel Mensah Sushi School', sub: 'Sushi Chefs · 6h ago', badge: 'PRO ZONE',
      text: 'Twenty years at the counter, and the most important lesson is still the first one: wash the rice until the water runs clear.',
      img: U('1502364271109-0a9a75a2a9df', 800, 600), eng: '♡ 3.8K · 💬 260 · ↗ 540' }
  ],
  prompts: ['Find an omakase in London under £80', 'Which sushi is cooked, not raw?', 'How do I make sushi rice for four people?', 'What sake goes with salmon nigiri?'],
  businesses: ['north-sea-line', 'counter-craft']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'sushi', verified: true }, o);
Object.assign(ZONES, {
  'kaito': brand({ key: 'kaito', name: 'Kaito Sushi Bar', color: '#FF8A65', gradient: SALMON, tier: 'Founding Partner',
    tagline: 'Counter sushi in London, Manchester and Edinburgh', stats: { followers: '226K', content: '1.2K', products: '24' },
    ad: { badge: 'Featured', img: U('1778071073381-1a4dc5650727', 760, 760), hl: 'The Winter Omakase.', sub: 'Fourteen courses at the counter, from 1 December.', meta: 'From £18' },
    products: [
      { name: 'Winter Omakase (per guest)', price: '£95', tag: 'FLAGSHIP', emoji: '🍣', rating: 4.9, reviews: 3260, cat: 'counter', special: true, desc: 'Fourteen courses at the counter, made in front of you: yellowtail, scallop, winter citrus and the chef’s choice.', features: ['Two sittings a night', 'Allergies planned around', 'Twelve seats'], review: { who: 'Fay M.', text: 'Ninety minutes of pure theatre.' } },
      { name: 'Lunch Nigiri Set', price: '£24', tag: 'BESTSELLER', emoji: '🍱', rating: 4.8, reviews: 4120, cat: 'counter', desc: 'Eight nigiri, a roll and miso soup, weekday lunchtimes.', features: ['Under 40 minutes'], review: { who: 'Dan R.', text: 'The best lunch hour in Soho.' } },
      { name: 'Sushi Platter to Take Away', price: '£48', emoji: '🥡', rating: 4.7, reviews: 1860, cat: 'takeaway', desc: 'Thirty-two pieces for two to three people.', features: ['Order by 4pm'], review: { who: 'Ray T.', text: 'Friday night sorted.' } },
      { name: 'Omakase Gift Voucher', price: '£190', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 960, cat: 'gifts', special: true, desc: 'Omakase for two, in a hand-folded envelope.', features: ['Valid 12 months', 'Any Kaito counter'], review: { who: 'Hana S.', text: 'The present my partner still talks about.' } },
      { name: 'Miso Soup', price: '£4', emoji: '🥣', rating: 4.6, reviews: 1240, cat: 'takeaway', desc: 'White miso, tofu and wakame.', features: ['Contains soy'], review: { who: 'Sid P.', text: 'Proper dashi, you can taste it.' } }
    ],
    shopCats: [ { key: 'counter', label: 'At the counter', icon: '🍣' }, { key: 'takeaway', label: 'Take away', icon: '🥡' }, { key: 'gifts', label: 'Gift vouchers', icon: '🎁' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'The <b>Winter Omakase</b> begins on 1 December at all three counters.', img: U('1772285283419-b34f42b4a4df', 800, 440), eng: '♡ 12.2K · 💬 980 · ↗ 1.5K', product: 0 },
      { type: 'post', sub: 'Behind the counter · Yesterday', text: 'Our fish comes from Grimsby every morning at six. The rice is seasoned four times a night, never in advance.', img: U('1758384075930-6e3835d22b1d', 800, 440), eng: '♡ 5.2K · 💬 380' },
      { type: 'community', who: 'Sid P.', whoBg: INK, sub: 'Community · 1d', text: 'I have a shellfish allergy. Can I still do the omakase?', eng: '♡ 340 · 💬 72', reply: 'Hi Sid, yes. Add the allergy when you book in Counter Seats and it goes straight to the chef, who will plan your fourteen courses without shellfish and prepare them on a separate board. Please remind us when you sit down too. 🍣' }
    ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Winter Omakase opening night', when: 'Dec 1 · 18:00', desc: 'The first night of the winter menu, at all three counters.', registered: 2860, capacity: 3000 } ],
    about: { founded: 'London · 2011', story: 'A twelve-seat counter off Berwick Street that now has siblings in Manchester and Edinburgh. Still twelve seats each. Founding Partner on SushiXX because sushi lovers already talk about us here.', milestones: [['2011', 'The first counter in Soho'], ['2019', 'Manchester and Edinburgh'], ['2026', 'Founding Partner on SushiXX']], values: ['Twelve seats, never more', 'British fish where we can', 'Every allergy planned for'] } }),

  'hinoki-knives': brand({ key: 'hinoki-knives', name: 'Hinoki Knife Co.', color: '#7C8CA6', gradient: INK, tier: 'Brand Zone',
    tagline: 'Japanese kitchen knives, finished by hand in Seki', stats: { followers: '84.6K', content: '360', products: '28' },
    ad: { badge: 'New', img: U('1711991022613-63df8929f311', 760, 760), hl: 'One long pull.', sub: 'The Yanagiba, for slicing fish in a single stroke.', meta: 'From £24' },
    products: [
      { name: 'Yanagiba (270mm)', price: '£189', tag: 'FLAGSHIP', emoji: '🔪', rating: 4.9, reviews: 1460, cat: 'knives', special: true, desc: 'A long single-bevel slicing knife for sashimi and nigiri, with a magnolia handle.', features: ['Hand-finished in Seki', 'Right-handed', 'Free sharpening for life'], review: { who: 'Ray T.', text: 'Salmon slices like silk.' } },
      { name: 'Santoku (165mm)', price: '£98', tag: 'BESTSELLER', emoji: '🗡️', rating: 4.8, reviews: 3280, cat: 'knives', desc: 'The everyday Japanese kitchen knife: fish, veg and rice-cake.', features: ['Double bevel', 'Left or right hand'], review: { who: 'Hana S.', text: 'The only knife I use now.' } },
      { name: 'Whetstone (1000/6000)', price: '£42', emoji: '🪨', rating: 4.8, reviews: 1980, cat: 'care', desc: 'A two-sided stone for sharpening and polishing.', features: ['Non-slip base'], review: { who: 'Dan R.', text: 'Learning to sharpen is weirdly calming.' } },
      { name: 'Hinoki Chopping Board', price: '£24', tag: 'SPECIAL', emoji: '🪵', rating: 4.9, reviews: 1120, cat: 'care', special: true, desc: 'Japanese cypress: soft on blades and smells of a forest.', features: ['36 × 24 cm'], review: { who: 'Fay M.', text: 'Smells amazing every time it is wet.' } }
    ],
    shopCats: [ { key: 'knives', label: 'Knives', icon: '🔪' }, { key: 'care', label: 'Boards & stones', icon: '🪨' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Chef Mei has used the same <b>Santoku</b> every service for eleven years. Sharpened free, every spring.', img: U('1787504916907-10106151ae01', 800, 440), eng: '♡ 6.8K · 💬 520', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: free whetstone', when: 'Nov 27 · All day', desc: 'A free whetstone with every knife, for one day.', registered: 2140, capacity: 5000 } ],
    about: { founded: 'Seki · 1948 · UK since 2017', story: 'A family knife workshop in Seki, Japan’s knife city, now selling direct to cooks in Britain with a UK sharpening service.', milestones: [['1948', 'The workshop opens in Seki'], ['2017', 'The UK shop and sharpening service'], ['2026', 'Brand Zone on SushiXX']], values: ['Finished by hand', 'Sharpened free for life', 'One knife, used for decades'] } }),

  'umami-pantry': brand({ key: 'umami-pantry', name: 'Umami Pantry', color: '#C9B48A', gradient: RICE, tier: 'Brand Zone',
    tagline: 'Rice, nori, soy and everything in between', stats: { followers: '62.4K', content: '280', products: '140' },
    ad: { badge: 'Featured', img: U('1579584425555-c3ce17fd4351', 760, 760), hl: 'Start with the rice.', sub: 'Everything for sushi at home, in one box.', meta: 'From £3' },
    products: [
      { name: 'Sushi Pantry Box', price: '£34', tag: 'FLAGSHIP', emoji: '📦', rating: 4.8, reviews: 2240, cat: 'boxes', special: true, desc: 'Sushi rice, rice vinegar, nori, soy, pickled ginger and wasabi: enough for six sushi nights.', features: ['Allergens on every item', 'Gluten-free tamari option'], review: { who: 'Hana S.', text: 'Everything in one go. No more hunting.' } },
      { name: 'Sushi Rice (2kg)', price: '£8', tag: 'BESTSELLER', emoji: '🍚', rating: 4.9, reviews: 4860, cat: 'rice', desc: 'Short-grain rice that turns glossy and holds together.', features: ['2kg'], review: { who: 'Ray T.', text: 'The difference from regular rice is huge.' } },
      { name: 'Toasted Nori (50 sheets)', price: '£9', emoji: '🟩', rating: 4.7, reviews: 1680, cat: 'nori', desc: 'Crisp, dark, full sheets.', features: ['Resealable'], review: { who: 'Dan R.', text: 'Stays crisp for weeks.' } },
      { name: 'Real Wasabi Root', price: '£22', tag: 'SPECIAL', emoji: '🌱', rating: 4.8, reviews: 420, cat: 'extras', special: true, desc: 'Fresh wasabi grown in Britain, with a sharkskin grater.', features: ['Lasts 3 weeks in the fridge'], review: { who: 'Fay M.', text: 'Nothing like the paste. Sweet then hot.' } }
    ],
    shopCats: [ { key: 'boxes', label: 'Boxes', icon: '📦' }, { key: 'rice', label: 'Rice', icon: '🍚' }, { key: 'nori', label: 'Nori', icon: '🟩' }, { key: 'extras', label: 'Extras', icon: '🌱' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'Fresh <b>British wasabi</b> is back in stock for December.', img: U('1761314026068-f07ec1ce6e2b', 800, 440), eng: '♡ 2.8K · 💬 190', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 18 · 23:59', desc: 'Order by midnight on 18 December for delivery before Christmas.', registered: 980, capacity: 3000 } ],
    about: { founded: 'Bristol · 2015', story: 'A Japanese grocery in Bristol that started posting rice to customers who had moved away. Now we post to the whole country.', milestones: [['2015', 'The shop in Bristol'], ['2021', 'The Sushi Pantry Box'], ['2026', 'Brand Zone on SushiXX']], values: ['Allergens on everything', 'Real ingredients', 'Small producers'] } }),

  'rolly': brand({ key: 'rolly', name: 'Rolly', color: '#A3C45A', gradient: WASABI, tier: 'Brand Zone',
    tagline: 'Sushi kits to roll at home', stats: { followers: '96.8K', content: '620', products: '12' },
    ad: { badge: 'Live', img: U('1761314025602-d9a27593476f', 760, 760), hl: 'Roll-along Night.', sub: 'A kit, a camera and a chef, live now.', meta: 'From £29' },
    products: [
      { name: 'Friday Night Kit for Two', price: '£39', tag: 'FLAGSHIP', emoji: '🍣', rating: 4.8, reviews: 3640, cat: 'kits', special: true, desc: 'Fish frozen to food-safety rules for eating raw, rice, nori, a mat and the video lesson. Makes 40 pieces.', features: ['Delivered chilled', 'Video lesson included', 'Allergens listed'], review: { who: 'Dan R.', text: 'Our new Friday ritual.' } },
      { name: 'Veggie Roll Kit', price: '£29', tag: 'BESTSELLER', emoji: '🥒', rating: 4.8, reviews: 2120, cat: 'kits', desc: 'Avocado, cucumber, pickled radish and sweet tofu. No fish.', features: ['Vegan'], review: { who: 'Hana S.', text: 'The kids love making these.' } },
      { name: 'Bamboo Mat and Paddle', price: '£12', emoji: '🎋', rating: 4.7, reviews: 1460, cat: 'kit-bits', desc: 'The rolling mat and a rice paddle.', features: ['Washable'], review: { who: 'Ray T.', text: 'Better than my old one.' } },
      { name: 'Party Kit for Six', price: '£89', tag: 'SPECIAL', emoji: '🎉', rating: 4.9, reviews: 680, cat: 'kits', special: true, desc: 'Everything for a sushi party: three fish, veg, mats for everyone.', features: ['Makes 120 pieces'], review: { who: 'Fay M.', text: 'Best birthday party we have thrown.' } }
    ],
    shopCats: [ { key: 'kits', label: 'Kits', icon: '🍣' }, { key: 'kit-bits', label: 'Mats & tools', icon: '🎋' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Live now: <b>Roll-along Night</b> with Chef Mika. Next week’s kits ship on Monday.', img: U('1617196034796-73dfa7b1fd56', 800, 440), eng: '♡ 4.6K · 💬 420', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Rolly Live · Roll-along Night', when: 'Live now', desc: 'Roll along with Chef Mika, live, and ask anything in the chat.', registered: 3920, capacity: 8000 } ],
    about: { founded: 'Manchester · 2020', story: 'Started in lockdown, when sushi restaurants were closed and people wanted a fun night in. Now 20,000 kits a month.', milestones: [['2020', 'The first kits'], ['2023', 'Roll-along Night goes live'], ['2026', 'Brand Zone on SushiXX']], values: ['Fun first', 'Fish safe to eat raw, always', 'No food waste'] } }),

  'north-sea-line': { key: 'north-sea-line', kind: 'business', gw: 'sushi', name: 'North Sea Line Seafood', color: '#7C8CA6', gradient: INK, img: U('1770839112008-f6a165687cca', 900, 500),
    tier: 'Verified', category: 'Seafood supply', tagline: 'Fish for sushi, from the Grimsby market to your counter.',
    about: { founded: 'Grimsby · 1986', story: 'We buy at the Grimsby fish market every morning and supply sushi restaurants and home-kit companies, with fish prepared and frozen to the rules for eating raw.' },
    stats: { years: 40, staff: 120, clients: '460 restaurants & brands' },
    caps: [ { name: 'Sushi-ready fish', detail: 'Salmon, tuna, yellowtail and mackerel, frozen to food-safety rules for raw eating.' }, { name: 'Daily delivery', detail: 'Chilled vans across England and Scotland, before 9am.' }, { name: 'Traceability', detail: 'Every fish traced to the boat or farm.' } ],
    specs: { moq: '10kg a week', lead: 'Next-day delivery', regions: 'England & Scotland', certs: ['BRCGS food safety', 'Responsibly sourced', 'HACCP'] },
    supplies: [ { kind: 'brand', key: 'kaito', what: 'All fish for the three Kaito counters' }, { kind: 'brand', key: 'rolly', what: 'Fish for the Rolly kits' } ],
    cases: [ { title: 'A home-kit company', text: 'Portioned and frozen fish for 20,000 kits a month, with no missed delivery in two years.' } ],
    feed: [ { sub: 'Market report · 1d', text: 'Scottish salmon is excellent this week. Mackerel season is winding down.' }, { sub: 'News · 1w', text: 'New chilled depot in Glasgow for faster Scottish deliveries.' } ],
    contact: { person: 'Sarah Kemp, Restaurant accounts', response: 'Replies within 24 hours' } },

  'counter-craft': { key: 'counter-craft', kind: 'business', gw: 'sushi', name: 'Counter & Craft Kitchens', color: '#FF8A65', gradient: SALMON, img: U('1760169799369-2b8574466735', 900, 500),
    tier: 'Verified', category: 'Restaurant fit-out', tagline: 'Sushi counters and kitchens, designed and built.',
    about: { founded: 'London · 2009', story: 'We design and build sushi counters, chilled display cases and small restaurant kitchens, from a twelve-seat bar to a food-hall stand.' },
    stats: { years: 17, staff: 70, clients: '180 restaurants' },
    caps: [ { name: 'Counter design', detail: 'Timber counters, sightlines and seat spacing that work.' }, { name: 'Chilled display', detail: 'Fish cases that hold the right temperature all night.' }, { name: 'Kitchen fit-out', detail: 'Extraction, sinks and storage for small spaces.' } ],
    specs: { moq: 'One counter', lead: 'Built in 6 to 10 weeks', regions: 'UK-wide', certs: ['Fully insured', 'Gas Safe engineers', 'ISO 9001'] },
    supplies: [ { kind: 'brand', key: 'kaito', what: 'The Manchester and Edinburgh counters' } ],
    cases: [ { title: 'A food-hall sushi stand', text: 'A six-seat counter in a 9 square metre unit, built in five weeks.' } ],
    feed: [ { sub: 'Projects · 4d', text: 'Just finished a hinoki counter for a new Leeds omakase.' } ],
    contact: { person: 'Tom Ikeda, New projects', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('sushi', [
  { gw: 'sushi', zone: 'rolly', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Rolly Live · Roll-along Night', desc: 'Roll along with Chef Mika and ask anything in the chat.' },
  { gw: 'sushi', type: 'Event', icon: '🍶', time: 'Nov 24', title: 'Warm sake night, Edinburgh', desc: 'Edinburgh Sushi Club with Anna Cole: six sakes, warm and chilled, in Leith.' },
  { gw: 'sushi', zone: 'hinoki-knives', type: 'Sale', icon: '🔪', time: 'Nov 27', title: 'Hinoki Black Friday: free whetstone', desc: 'A free whetstone with every knife, for one day.' },
  { gw: 'sushi', zone: 'kaito', type: 'Event', icon: '🍣', time: 'Dec 1', title: 'Kaito Winter Omakase opening night', desc: 'The winter menu begins at the London, Manchester and Edinburgh counters.' },
  { gw: 'sushi', type: 'Event', icon: '🍚', time: 'Dec 4', title: 'Sushi basics class, London', desc: 'Joel Mensah Sushi School: rice, maki and nigiri, then dinner.' },
  { gw: 'sushi', type: 'Event', icon: '🏆', time: 'Dec 10', title: 'Roll Call: best piece of the year vote', desc: 'The community picks its favourite piece of sushi of 2026.' },
  { gw: 'sushi', type: 'Event', icon: '🎄', time: 'Dec 14', title: 'Christmas sushi dinner, Edinburgh', desc: 'Edinburgh Sushi Club’s Christmas dinner in the New Town.' },
  { gw: 'sushi', zone: 'umami-pantry', type: 'Deadline', icon: '📦', time: 'Dec 18', title: 'Last order for Christmas delivery', desc: 'Umami Pantry: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /SUSHIXX ═════════ */
