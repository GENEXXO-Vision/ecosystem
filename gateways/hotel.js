/* ═════════ HOTELXX — a Travel demo gateway (2026-11-17, Sean) ═════════
   Built like DoctorXX and GolfXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (dark): midnight plum, brass gold, soft lilac. Home sector: Travel (tourism).
   Brands, pros and communities are fictional; places are real. Source of truth: _lab/travel/hotelxx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const PLUM = 'linear-gradient(135deg,#8E5BD9,#4A2582)', GOLD = 'linear-gradient(135deg,#E2B866,#A27A2E)', SAGE = 'linear-gradient(135deg,#7FA88E,#3E6650)', ROSE = 'linear-gradient(135deg,#D98BA5,#93415E)';

GATEWAYS.hotel = {
  name: 'HotelXX', domain: 'hotelxx.com', emoji: '🏨', sector: 'tourism', live: true,
  tagline: 'The Hotel Universe',
  theme: {
    bg: '#140E1C', text: '#F3ECF7', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(226,184,102,.16)',
    headerBg: 'linear-gradient(180deg,#2B1B3D,#140E1C)', accent: '#E2B866', accentAlt: '#A78BFA', dark: true
  },
  gradient: 'linear-gradient(135deg,#2B1B3D,#8E5BD9,#E2B866)',
  stats: { members: '6.4M', brands: '9,800+', agents: '112' },
  spaces: ['All Feed', 'Weekends Away', 'City Stays', 'Spa & Wellness', 'Points & Perks', 'Working in Hotels'],
  trending: ['#WeekendAway', '#HotelBreakfast', '#LateCheckout'],
  brandZones: [
    { key: 'linen-lantern', name: 'Linen & Lantern Hotels', color: '#E2B866', tier: 'Founding Partner', tag: 'Small hotels in big-hearted places' },
    { key: 'pillowry', name: 'Pillowry', color: '#A78BFA', tier: 'Brand Zone', tag: 'The hotel bed, at home' },
    { key: 'bramble-bath', name: 'Bramble & Bath', color: '#7FA88E', tier: 'Brand Zone', tag: 'Refillable bathroom goods, made in Somerset' },
    { key: 'concierge-club', name: 'The Concierge Club', color: '#D98BA5', tier: 'Brand Zone', tag: 'Upgrades, late checkouts and a person who answers' }
  ],
  apps: [
    { name: 'Stay Wallet', color: '#E2B866', desc: 'Every booking, check-in and code in one place', key: 'stay-wallet', url: 'apps/stay-wallet.html',
      dev: 'Keyring Labs', rating: '4.8', users: '1.2M', perms: ['profile', 'feed'],
      tagline: 'Your next stay, ready at the desk.',
      about: 'Stay Wallet keeps every hotel booking in one place: dates, check-in and checkout times, the confirmation code and the address for the taxi. It counts down to your next trip, tells you how many nights you have stayed this year, and shares a stay to HotelXX when you are home.',
      features: ['Every booking in one list', 'Countdown to your next check-in', 'Confirmation code ready to show', 'Nights stayed this year'],
      shots: ['apps/stay-wallet/shot-1.jpg', 'apps/stay-wallet/shot-2.jpg', 'apps/stay-wallet/shot-3.jpg'],
      version: '4.3', size: '9 KB',
      updates: [ { v: '4.3', ago: 3, notes: 'Nights-this-year counter on the home view.' }, { v: '4.0', ago: 80, notes: 'Show the confirmation code full-screen at the desk.' }, { v: '3.5', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@weekender_wren', stars: 5, ago: 1, text: 'No more scrolling through email at reception.' }, { who: '@roadwarrior_raj', stars: 5, ago: 6, text: 'Forty-one nights this year and every one in here.' }, { who: '@cityhopper_cat', stars: 4, ago: 15, text: 'Would love a map view.' } ] },
    { name: 'Room Service', color: '#A78BFA', desc: 'Order to your room from the hotel menu', key: 'room-service', url: 'apps/room-service.html',
      dev: 'Linen & Lantern Hotels', rating: '4.7', users: '386K', perms: ['profile', 'feed'],
      tagline: 'Breakfast in bed, two taps away.',
      about: 'Room Service brings the in-room menu to your phone at any Linen & Lantern hotel. Choose breakfast, all-day dining or a nightcap, pick a time, and follow your order from the kitchen to your door. This demo runs on the menu at the Edinburgh hotel.',
      features: ['Breakfast, all-day and late-night menus', 'Order now or for a time', 'Follow your order to the door', 'Dietary labels on every dish'],
      shots: ['apps/room-service/shot-1.jpg', 'apps/room-service/shot-2.jpg', 'apps/room-service/shot-3.jpg'],
      version: '2.6', size: '10 KB',
      updates: [ { v: '2.6', ago: 5, notes: 'Order breakfast the night before.' }, { v: '2.2', ago: 100, notes: 'Live order tracking.' }, { v: '2.0', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@weekender_wren', stars: 5, ago: 2, text: 'Ordered breakfast for 8 the night before. It arrived at 8. Magic.' }, { who: '@foodie_finn', stars: 5, ago: 9, text: 'The dietary labels are a big help for a coeliac.' }, { who: '@roadwarrior_raj', stars: 4, ago: 21, text: 'Want it at every hotel I stay in.' } ] },
    { name: 'Points Tracker', color: '#7FA88E', desc: 'Every hotel loyalty scheme in one view', key: 'points-tracker', url: 'apps/points-tracker.html',
      dev: 'Perkline Software', rating: '4.6', users: '540K', perms: ['profile', 'feed'],
      tagline: 'Know what your nights are worth.',
      about: 'Points Tracker adds up your hotel loyalty points and status nights across schemes, shows how close you are to the next tier, and suggests what you could book with the points you have. Log a stay in seconds when you check out.',
      features: ['All your schemes in one place', 'Nights to the next tier', 'What your points could book', 'Log a stay as you check out'],
      shots: ['apps/points-tracker/shot-1.jpg', 'apps/points-tracker/shot-2.jpg', 'apps/points-tracker/shot-3.jpg'],
      version: '3.1', size: '9 KB',
      updates: [ { v: '3.1', ago: 4, notes: 'What-you-could-book suggestions.' }, { v: '3.0', ago: 70, notes: 'Tier progress for every scheme.' }, { v: '2.4', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@roadwarrior_raj', stars: 5, ago: 3, text: 'Found out I was two nights from Gold. Booked them.' }, { who: '@pointsnerd_pip', stars: 5, ago: 10, text: 'Clean, fast, no ads. Rare.' }, { who: '@cityhopper_cat', stars: 4, ago: 26, text: 'Expiry reminders next, please.' } ] }
  ],
  pros: [
    { key: 'clara-lind-travel', name: 'Clara Lind Travel Planning', color: '#E2B866', tag: 'Hotel-led trip planning · honeymoons, city breaks, special birthdays', role: 'Travel planner',
      img: U('1580489944761-15a19d654956', 800, 800), base: 'Edinburgh, UK', langs: 'English, Swedish', years: 12, rating: '4.9', reviewsN: 538, cur: '£',
      creds: ['Former hotel guest-relations manager', 'Destination specialist: Scotland, Scandinavia, Italy', 'Member of a travel trade body'],
      about: 'Clara spent ten years running guest relations at hotels in Stockholm and Edinburgh before planning trips for other people. She picks the right room, not just the right hotel, and knows who to call for the view.',
      services: [ { id: 'call', name: 'Trip idea call', dur: '30 minutes', price: 35, desc: 'Tell Clara the occasion and budget; leave with three hotel ideas.' },
                  { id: 'plan', name: 'Full trip plan', dur: 'Delivered in 5 days', price: 180, desc: 'Hotels, rooms, restaurants and a day-by-day plan, booked with you.' },
                  { id: 'honeymoon', name: 'Honeymoon planning', dur: 'Delivered in 10 days', price: 340, desc: 'Every night planned and every hotel told it is your honeymoon.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['10:00', '13:00', '18:00'] },
      reviews: [ { who: '@weekender_wren', stars: 5, ago: 4, text: 'She got us the turret room. We did not even know it existed.' }, { who: '@newlyweds_nat', stars: 5, ago: 14, text: 'Our honeymoon was perfect, every single night.' }, { who: '@cityhopper_cat', stars: 5, ago: 32, text: 'Worth every penny for a big birthday.' } ],
      posts: [ { ago: 1, text: 'Ask for the room, not just the hotel. Corner rooms on a high floor are often the same price.' }, { ago: 7, text: 'Two places left for February honeymoon planning.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'james-okafor-hospitality', name: 'James Okafor Hospitality Coaching', color: '#A78BFA', tag: 'Coaching for hotel teams and owners · service, reviews, front desk', role: 'Hospitality coach',
      img: U('1560250097-0b93528c311a', 800, 800), base: 'London, UK', langs: 'English, Yoruba', years: 16, rating: '4.8', reviewsN: 296, cur: '£',
      creds: ['Former general manager, two London hotels', 'Hospitality degree, Oxford Brookes', 'Certified executive coach'],
      about: 'James ran front desks and then whole hotels in London for sixteen years. Now he coaches small hotel teams to give the kind of welcome guests write about, and owners to read their reviews without wincing.',
      services: [ { id: 'one', name: 'One-to-one coaching', dur: '60 minutes', price: 90, desc: 'For managers and owners: one problem, a clear plan.' },
                  { id: 'team', name: 'Front-desk team workshop', dur: 'Half day', price: 450, desc: 'Arrivals, complaints and the first five minutes, on site.' },
                  { id: 'reviews', name: 'Review audit', dur: 'Delivered in 7 days', price: 220, desc: 'A year of guest reviews read and turned into five actions.' } ],
      avail: { days: [1, 2, 4, 5], times: ['09:00', '14:00', '17:00'] },
      reviews: [ { who: '@innkeeper_iona', stars: 5, ago: 6, text: 'Our review score went from 8.4 to 9.1 in six months.' }, { who: '@frontdesk_femi', stars: 5, ago: 18, text: 'The workshop changed how our whole team does check-in.' }, { who: '@gm_georgia', stars: 4, ago: 45, text: 'Straight talking and practical.' } ],
      posts: [ { ago: 2, text: 'The first ninety seconds at the desk decide the review. Look up, use the name, say what is good about their room.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'sofia-reyes-photography', name: 'Sofia Reyes Hotel Photography', color: '#D98BA5', tag: 'Interior and lifestyle photography for hotels, B&Bs and holiday lets', role: 'Photographer',
      img: U('1573496359142-b8d87734a5a2', 800, 800), base: 'Bath, UK', langs: 'English, Spanish', years: 9, rating: '4.9', reviewsN: 214, cur: '£',
      creds: ['Interiors photographer', 'Published in UK travel magazines', 'Drone-licensed (CAA)'],
      about: 'Sofia photographs small hotels the way guests remember them: morning light on the bed, the view from the bath, breakfast on the terrace. Shoots across the South West and Wales.',
      services: [ { id: 'room', name: 'Room shoot', dur: '2 hours', price: 280, desc: 'Up to four rooms, styled and shot, twenty edited images.' },
                  { id: 'full', name: 'Full hotel shoot', dur: 'Full day', price: 950, desc: 'Rooms, public spaces, food and exteriors, sixty edited images.' },
                  { id: 'drone', name: 'Drone and exterior add-on', dur: '1 hour', price: 180, desc: 'Aerial and golden-hour exterior images.' } ],
      avail: { days: [2, 3, 4, 6], times: ['08:00', '13:00', '16:00'] },
      reviews: [ { who: '@innkeeper_iona', stars: 5, ago: 9, text: 'Bookings went up the month the new photos went live.' }, { who: '@bnb_bramwell', stars: 5, ago: 22, text: 'Made our little B&B look like a magazine.' }, { who: '@gm_georgia', stars: 5, ago: 50, text: 'Calm, quick and brilliant with light.' } ],
      posts: [ { ago: 3, text: 'Shoot rooms at 9am with the curtains open and every lamp on. Thank me later.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'hotel-hunters', name: 'Hotel Hunters', domain: 'hunters.hotelxx.com', color: '#E2B866', img: U('1551882547-ff40c63fe5fa', 900, 500),
      scope: 'Global', where: 'Everywhere with a bed', members: 214000, online: 3820, tagline: 'Honest reviews from people who stay a lot.',
      about: 'Frequent guests, weekenders and the plain curious, sharing honest reviews, the best room in the house, breakfast rankings and the small hotels nobody has found yet.',
      rules: ['Say what you paid', 'Photos of your own stay only', 'Be fair to the staff'],
      mods: ['@roadwarrior_raj', '@weekender_wren'],
      threads: [ { t: 'Best hotel breakfast in the UK: final answers', by: '@foodie_finn', tag: 'BREAKFAST', replies: 864, ago: 0, votes: 1820 }, { t: 'Is a late checkout worth paying for?', by: '@pointsnerd_pip', tag: 'Q&A', replies: 312, ago: 1, votes: 540 }, { t: 'Small hotels in Lisbon under £150', by: '@cityhopper_cat', tag: 'FINDS', replies: 188, ago: 2, votes: 402 }, { t: 'The room with the best view I have ever had', by: '@weekender_wren', tag: 'STORIES', replies: 241, ago: 3, votes: 690 } ],
      events: [ { title: 'Breakfast awards vote closes', day: 4, time: '20:00', where: 'Online' }, { title: 'Hotel Hunters winter meet-up', day: 9, time: '18:30', where: 'Covent Garden, London' } ] },
    { key: 'london-hospitality', name: 'London Hospitality Network', domain: 'london.hotelxx.com', color: '#A78BFA', img: U('1660557989695-14fac79c086d', 900, 500),
      scope: 'Local', where: 'London', members: 12800, online: 310, tagline: 'For people who make London’s hotels work.',
      about: 'Front desk, housekeeping, concierge, kitchen and management across London’s hotels: jobs, training, shift swaps and a monthly night out when the rota allows.',
      rules: ['No guest details, ever', 'Jobs posts must show the pay', 'Help the new starters'],
      mods: ['@frontdesk_femi', '@gm_georgia'],
      threads: [ { t: 'Concierge roles in Mayfair: who is hiring?', by: '@frontdesk_femi', tag: 'JOBS', replies: 64, ago: 0, votes: 118 }, { t: 'Night audit survival tips', by: '@nightaudit_noor', tag: 'TIPS', replies: 92, ago: 1, votes: 160 }, { t: 'December social: vote for the venue', by: '@gm_georgia', tag: 'SOCIAL', replies: 77, ago: 2, votes: 104 } ],
      events: [ { title: 'Front-desk skills evening', day: 3, time: '18:00', where: 'Southwark, London' }, { title: 'Hospitality winter social', day: 8, time: '22:30', where: 'Soho, London' } ] }
  ],
  feed: [
    { av: 'HX', avBg: GOLD, author: 'HotelXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Weekends away, city stays, spas, points and the people who make hotels work. From the first look at a room to the last breakfast: hotels, all in one place.',
      img: U('1783504560129-7bfaf7df227d', 800, 600), eng: '♡ 52.8K · 💬 4.6K · ↗ 5.2K' },
    { av: 'WR', avBg: ROSE, author: '@weekender_wren', sub: 'Weekends Away · Just now', badge: 'COMMUNITY',
      text: 'Asked for a room with a view and got the whole of Edinburgh Castle out of the window. Breakfast for two ordered for 9 the night before 🏰',
      img: U('1761039265583-9489b4246454', 800, 600), eng: '♡ 18.2K · 💬 2.1K · ↗ 760' },
    { av: 'LL', avBg: GOLD, author: 'Linen & Lantern Hotels', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Winter Weekend</b> is back: two nights, breakfast both mornings, dinner on Saturday and a late checkout on Sunday, in Edinburgh, Bath or Grasmere.',
      img: U('1611892440504-42a792e24d32', 800, 600), eng: '♡ 11.6K · 💬 940 · ↗ 1.4K' },
    { av: 'PW', avBg: PLUM, author: 'Pillowry', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'The pillow guests ask to take home. The <b>Hotel Pillow</b> is now in two firmnesses, and it ships in a box the size of a shoebox.',
      img: U('1618773928121-c32242e63f39', 800, 600), eng: '♡ 6.2K · 💬 480 · ↗ 520' },
    { av: 'FF', avBg: SAGE, author: '@foodie_finn', sub: 'City Stays · 2h ago', badge: 'COMMUNITY',
      text: 'Hotel Hunters breakfast awards: my vote goes to the full Scottish with a tattie scone. Coeliac-safe too, and they did not make a fuss 🍳',
      img: U('1786422982682-91af1a6c5d79', 800, 600), eng: '♡ 7.4K · 💬 1.2K · ↗ 310' },
    { av: 'BB', avBg: SAGE, author: 'Bramble & Bath', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'No more tiny bottles. Our <b>refillable bathroom range</b> is in 340 hotels now, and you can buy the same bottles for home.',
      img: U('1750271336429-8b0a507785c0', 800, 600), eng: '♡ 3.8K · 💬 260 · ↗ 280' },
    { av: 'CL', avBg: GOLD, author: 'Clara Lind Travel Planning', sub: 'Weekends Away · 6h ago', badge: 'PRO ZONE',
      text: 'Booking a special weekend? Tell the hotel why you are coming when you book, not when you arrive. That is when the upgrades are decided.',
      img: U('1759472659432-3232e42d04d2', 800, 600), eng: '♡ 2.6K · 💬 190 · ↗ 340' }
  ],
  prompts: ['Find me a hotel in Edinburgh with a castle view under £200', 'Is a late checkout worth paying for?', 'Which hotel loyalty scheme suits someone who travels twice a month?', 'Plan a spa weekend in Bath for two'],
  businesses: ['harbourline-linen', 'lumen-hospitality']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'hotel', verified: true }, o);
Object.assign(ZONES, {
  'linen-lantern': brand({ key: 'linen-lantern', name: 'Linen & Lantern Hotels', color: '#E2B866', gradient: GOLD, tier: 'Founding Partner',
    tagline: 'Small hotels in big-hearted places', stats: { followers: '248K', content: '1.1K', products: '18' },
    ad: { badge: 'Featured', img: U('1611892440504-42a792e24d32', 760, 760), hl: 'The Winter Weekend.', sub: 'Two nights, two breakfasts, dinner and a late checkout.', meta: 'From £45' },
    products: [
      { name: 'Winter Weekend for Two', price: '£420', tag: 'FLAGSHIP', emoji: '🏨', rating: 4.9, reviews: 3260, cat: 'stays', special: true, desc: 'Two nights, breakfast both mornings, dinner on Saturday and a late checkout on Sunday.', features: ['Edinburgh, Bath or Grasmere', 'Late checkout at 2pm', 'Free cancellation to 7 days'], review: { who: 'Wren H.', text: 'The best weekend we have had in years.' } },
      { name: 'Midweek Escape (2 nights)', price: '£290', tag: 'BESTSELLER', emoji: '🌙', rating: 4.8, reviews: 2140, cat: 'stays', desc: 'Sunday to Thursday nights with breakfast, at the quiet end of the week.', features: ['Any of our nine hotels', 'Breakfast included'], review: { who: 'Cat L.', text: 'Half the price of a weekend, all of the calm.' } },
      { name: 'Turret Room Upgrade', price: '£60', tag: 'SPECIAL', emoji: '🏰', rating: 4.9, reviews: 860, cat: 'extras', special: true, desc: 'The round room at the top of the Edinburgh hotel, with the castle in the window.', features: ['Edinburgh only', 'Subject to availability'], review: { who: 'Nat P.', text: 'Worth it just for the morning view.' } },
      { name: 'Breakfast in Bed', price: '£18', emoji: '🥐', rating: 4.8, reviews: 1980, cat: 'extras', desc: 'Our full breakfast on a tray, at the time you choose.', features: ['Order in the Room Service app'], review: { who: 'Finn O.', text: 'Arrived hot, right on time.' } },
      { name: 'Gift Voucher', price: '£45', emoji: '🎁', rating: 4.9, reviews: 1420, cat: 'gifts', desc: 'A voucher for any stay, dinner or extra, in a linen-wrapped card.', features: ['Valid 24 months', 'Any hotel'], review: { who: 'Pip D.', text: 'The present my parents still talk about.' } }
    ],
    shopCats: [ { key: 'stays', label: 'Stays', icon: '🏨' }, { key: 'extras', label: 'Extras', icon: '🥐' }, { key: 'gifts', label: 'Gift vouchers', icon: '🎁' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 3h', text: 'The <b>Winter Weekend</b> is back at all nine hotels.', img: U('1759328257280-28bdb3050be3', 800, 440), eng: '♡ 11.6K · 💬 940 · ↗ 1.4K', product: 0 },
      { type: 'post', sub: 'Behind the desk · Yesterday', text: 'Every new guest gets a handwritten note with three things to do within ten minutes’ walk.', img: U('1573052905904-34ad8c27f0cc', 800, 440), eng: '♡ 4.8K · 💬 320' },
      { type: 'community', who: 'Nat P.', whoBg: ROSE, sub: 'Community · 1d', text: 'Proposing in Edinburgh in December. Can you help make the room special?', eng: '♡ 412 · 💬 88', reply: 'Congratulations, Nat! Book the Turret Room Upgrade and add a note when you book. Our Edinburgh team will have flowers, a bottle on ice and the curtains open on the castle at sunset. We will keep it secret. 🏰' }
    ],
    events: [ { zoneEvent: true, tag: 'OFFER', title: 'Winter Weekend early booking', when: 'Nov 30 · 23:59', desc: 'Book a January or February Winter Weekend by 30 November for a free dinner upgrade.', registered: 2840, capacity: 6000 } ],
    about: { founded: 'Edinburgh · 2012', story: 'One townhouse hotel in Edinburgh that became nine small hotels in places we love. We joined GENEXXO as HotelXX’s Founding Partner because our guests already talk about us here.', milestones: [['2012', 'The first hotel opens in Edinburgh'], ['2020', 'Bath and Grasmere join'], ['2026', 'Founding Partner on HotelXX']], values: ['Small on purpose', 'Local staff, local food', 'No hidden charges'] } }),

  'pillowry': brand({ key: 'pillowry', name: 'Pillowry', color: '#A78BFA', gradient: PLUM, tier: 'Brand Zone',
    tagline: 'The hotel bed, at home', stats: { followers: '96.4K', content: '380', products: '32' },
    ad: { badge: 'New', img: U('1618773928121-c32242e63f39', 760, 760), hl: 'The Hotel Pillow.', sub: 'Now in medium and firm, the one guests ask to take home.', meta: 'From £22' },
    products: [
      { name: 'The Hotel Pillow', price: '£55', tag: 'FLAGSHIP', emoji: '🛏️', rating: 4.8, reviews: 6120, cat: 'pillows', special: true, desc: 'The pillow on the beds of 600 hotels, in medium or firm.', features: ['Washable at 60°', 'Two firmnesses', '100-night trial'], review: { who: 'Raj M.', text: 'Finally sleep at home like I do away.' } },
      { name: 'Percale Sheet Set', price: '£95', tag: 'BESTSELLER', emoji: '🧺', rating: 4.8, reviews: 3480, cat: 'linen', desc: 'Crisp 400-thread cotton percale: fitted sheet, duvet cover and two pillowcases.', features: ['Single to super king', 'Organic cotton'], review: { who: 'Wren H.', text: 'That cool hotel-sheet feeling.' } },
      { name: 'Hotel Duvet (13.5 tog)', price: '£120', emoji: '☁️', rating: 4.7, reviews: 2210, cat: 'duvets', desc: 'Soft, heavy and warm, like the one you did not want to leave.', features: ['Recycled fill', 'Washable'], review: { who: 'Cat L.', text: 'Like sleeping under a cloud.' } },
      { name: 'Mattress Topper', price: '£140', tag: 'SPECIAL', emoji: '🛌', rating: 4.8, reviews: 1640, cat: 'toppers', special: true, desc: 'A five-centimetre topper that turns a tired mattress into a hotel bed.', features: ['Five centimetres deep', 'Removable cover'], review: { who: 'Pip D.', text: 'Saved us buying a new mattress.' } },
      { name: 'Pillow Spray', price: '£22', emoji: '🌿', rating: 4.6, reviews: 1180, cat: 'extras', desc: 'Lavender and cedar, the same scent as our hotel turndown.', features: ['100ml'], review: { who: 'Nat P.', text: 'Smells like a weekend away.' } }
    ],
    shopCats: [ { key: 'pillows', label: 'Pillows', icon: '🛏️' }, { key: 'linen', label: 'Bed linen', icon: '🧺' }, { key: 'duvets', label: 'Duvets', icon: '☁️' }, { key: 'toppers', label: 'Toppers', icon: '🛌' }, { key: 'extras', label: 'Extras', icon: '🌿' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'The <b>Hotel Pillow</b>, now in two firmnesses.', img: U('1631049307264-da0ec9d70304', 800, 440), eng: '♡ 6.2K · 💬 480', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday bedding sale', when: 'Nov 27 · All day', desc: 'A quarter off sheets, duvets and toppers for one day.', registered: 4120, capacity: 10000 } ],
    about: { founded: 'Manchester · 2015', story: 'We made pillows for hotels for ten years before guests started asking where to buy them. Now we sell to both.', milestones: [['2015', 'The first hotel order'], ['2022', 'Selling to guests at home'], ['2026', 'Brand Zone on HotelXX']], values: ['Made to be washed', 'Recycled fills', '100-night trial'] } }),

  'bramble-bath': brand({ key: 'bramble-bath', name: 'Bramble & Bath', color: '#7FA88E', gradient: SAGE, tier: 'Brand Zone',
    tagline: 'Refillable bathroom goods, made in Somerset', stats: { followers: '58.1K', content: '240', products: '22' },
    ad: { badge: 'Featured', img: U('1750271336429-8b0a507785c0', 760, 760), hl: 'No more tiny bottles.', sub: 'The refillable hotel bathroom, for home.', meta: 'From £9' },
    products: [
      { name: 'Hotel Bathroom Set', price: '£48', tag: 'FLAGSHIP', emoji: '🧴', rating: 4.8, reviews: 1820, cat: 'sets', special: true, desc: 'Shampoo, conditioner, body wash and hand lotion in four refillable bottles.', features: ['Refillable glass', 'Bramble and fig scent'], review: { who: 'Wren H.', text: 'Every shower smells like Bath.' } },
      { name: 'Body Wash Refill (1L)', price: '£18', tag: 'BESTSELLER', emoji: '♻️', rating: 4.8, reviews: 2460, cat: 'refills', desc: 'One litre in a pouch that goes back to us to be refilled.', features: ['Free returns'], review: { who: 'Pip D.', text: 'Lasts months.' } },
      { name: 'Bath Soak', price: '£16', emoji: '🛁', rating: 4.7, reviews: 1120, cat: 'bath', desc: 'Mineral salts with oat and lavender.', features: ['500g'], review: { who: 'Cat L.', text: 'The best soak after a long trip.' } },
      { name: 'Travel Trio', price: '£14', tag: 'SPECIAL', emoji: '🧳', rating: 4.8, reviews: 980, cat: 'sets', special: true, desc: 'Three refillable 50ml bottles in a wash bag, fine for hand luggage.', features: ['Under 100ml each'], review: { who: 'Raj M.', text: 'Lives in my carry-on.' } },
      { name: 'Hand Soap Refill (500ml)', price: '£9', emoji: '🫧', rating: 4.6, reviews: 760, cat: 'refills', desc: 'Our hand soap in a returnable pouch.', features: ['Free returns'], review: { who: 'Finn O.', text: 'Gentle and smells lovely.' } }
    ],
    shopCats: [ { key: 'sets', label: 'Sets', icon: '🧴' }, { key: 'refills', label: 'Refills', icon: '♻️' }, { key: 'bath', label: 'Bath', icon: '🛁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'In 340 hotels and counting. Our <b>Hotel Bathroom Set</b> brings it home.', img: U('1648042497232-25de1ed8aaf2', 800, 440), eng: '♡ 3.8K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 18 · 23:59', desc: 'Order by midnight on 18 December for delivery before Christmas.', registered: 920, capacity: 3000 } ],
    about: { founded: 'Frome · 2018', story: 'Two former hotel housekeepers who hated throwing away half-used tiny bottles. Everything we make is refillable.', milestones: [['2018', 'The first refill pouch'], ['2024', 'In 300 hotels'], ['2026', 'Brand Zone on HotelXX']], values: ['Refill, never landfill', 'Made in Somerset', 'Kind to skin'] } }),

  'concierge-club': brand({ key: 'concierge-club', name: 'The Concierge Club', color: '#D98BA5', gradient: ROSE, tier: 'Brand Zone',
    tagline: 'Upgrades, late checkouts and a person who answers', stats: { followers: '71.9K', content: '520', products: '6' },
    ad: { badge: 'Featured', img: U('1782890790046-2aefb0b503cb', 760, 760), hl: 'A person who answers.', sub: 'Membership perks at 1,400 independent hotels.', meta: 'From £15' },
    products: [
      { name: 'Annual Membership', price: '£149', tag: 'FLAGSHIP', emoji: '🔑', rating: 4.7, reviews: 2840, cat: 'membership', special: true, desc: 'Room upgrades when available, late checkout, breakfast offers and a concierge on chat.', features: ['1,400 independent hotels', 'Concierge chat, 7am–11pm'], review: { who: 'Raj M.', text: 'Paid for itself by March.' } },
      { name: 'Gift Membership', price: '£149', tag: 'GIFT', emoji: '🎁', rating: 4.8, reviews: 640, cat: 'membership', desc: 'A year of membership, wrapped and sent to someone who travels.', features: ['Digital or posted card'], review: { who: 'Wren H.', text: 'My dad uses it more than I do.' } },
      { name: 'Weekend Pass', price: '£15', tag: 'BESTSELLER', emoji: '🗝️', rating: 4.6, reviews: 1980, cat: 'passes', special: true, desc: 'Every member perk for a single stay.', features: ['One stay', 'Use within 12 months'], review: { who: 'Cat L.', text: 'Got a suite for the price of a double.' } },
      { name: 'Airport Lounge Day Pass', price: '£32', emoji: '✈️', rating: 4.5, reviews: 1260, cat: 'passes', desc: 'A lounge at eleven UK airports before your flight.', features: ['Three hours', 'Food and drinks'], review: { who: 'Pip D.', text: 'Calm before the chaos.' } }
    ],
    shopCats: [ { key: 'membership', label: 'Membership', icon: '🔑' }, { key: 'passes', label: 'Passes', icon: '🗝️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 6h', text: 'Members: late checkout at 2pm is now standard at every partner hotel.', img: U('1621293954908-907159247fc8', 800, 440), eng: '♡ 2.4K · 💬 210', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Concierge Club Live · Winter hotel deals', when: 'Live now', desc: 'Our concierges pick the best winter stays and answer your questions live.', registered: 3420, capacity: 8000 } ],
    about: { founded: 'London · 2017', story: 'A former hotel concierge who thought everyone should have one. We work only with independent hotels.', milestones: [['2017', 'The first 50 hotels'], ['2023', '1,000 partner hotels'], ['2026', 'Brand Zone on HotelXX']], values: ['Independent hotels only', 'A real person answers', 'No blackout dates'] } }),

  'harbourline-linen': { key: 'harbourline-linen', kind: 'business', gw: 'hotel', name: 'Harbourline Linen Services', color: '#A78BFA', gradient: PLUM, img: U('1629140727571-9b5c6f6267b4', 900, 500),
    tier: 'Verified', category: 'Hotel laundry', tagline: 'Hotel linen, washed, pressed and delivered daily.',
    about: { founded: 'Bristol · 1994', story: 'We wash and supply bed and bath linen for hotels across the South West and South Wales, collected and delivered every day.' },
    stats: { years: 32, staff: 380, clients: '640 hotels & B&Bs' },
    caps: [ { name: 'Linen hire', detail: 'Sheets, towels and robes on a rental plan, replaced as they wear.' }, { name: 'Daily laundry', detail: 'Collected in the morning, back pressed by evening.' }, { name: 'Low-water washing', detail: 'Tunnel washers that use a third of the water.' } ],
    specs: { moq: '1 delivery a week', lead: 'Start within 2 weeks', regions: 'South West England & South Wales', certs: ['ISO 14001', 'Textile services standard', 'Living Wage employer'] },
    supplies: [ { kind: 'brand', key: 'linen-lantern', what: 'All bed and bath linen for the Bath hotel' } ],
    cases: [ { title: 'Seaside hotel group, Cornwall', text: 'Moved four hotels to linen hire and cut laundry costs by a fifth.' } ],
    feed: [ { sub: 'Sustainability · 3d', text: 'Our new Bristol plant uses a third of the water per kilo of linen.' }, { sub: 'News · 1w', text: 'Christmas collections: extra runs every day from 20 December.' } ],
    contact: { person: 'Megan Rees, Hotel accounts', response: 'Replies within 24 hours' } },

  'lumen-hospitality': { key: 'lumen-hospitality', kind: 'business', gw: 'hotel', name: 'Lumen Hospitality Systems', color: '#E2B866', gradient: GOLD, img: U('1758193783649-13371d7fb8dd', 900, 500),
    tier: 'Verified', category: 'Hotel technology', tagline: 'Booking, check-in and room keys for small hotels.',
    about: { founded: 'Leeds · 2011', story: 'We build the system small hotels run on: bookings, the front desk, phone keys and housekeeping lists, on one screen.' },
    stats: { years: 15, staff: 160, clients: '2,100 hotels' },
    caps: [ { name: 'Property system', detail: 'Bookings, rates and the front desk for hotels of 5 to 150 rooms.' }, { name: 'Phone keys', detail: 'Guests open their door with their phone.' }, { name: 'Housekeeping', detail: 'Live room status for the whole team.' } ],
    specs: { moq: '5 rooms', lead: 'Live in 3 weeks', regions: 'UK, Ireland & Nordics', certs: ['ISO 27001', 'PCI DSS', 'Cyber Essentials Plus'] },
    supplies: [ { kind: 'brand', key: 'concierge-club', what: 'Member perks shown at check-in' } ],
    cases: [ { title: 'Nine-hotel group, Scotland and England', text: 'One system across nine hotels and check-in down to two minutes.' } ],
    feed: [ { sub: 'Product · 5d', text: 'Phone keys now work on every major smartwatch.' } ],
    contact: { person: 'Tariq Hussain, New hotels', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('hotel', [
  { gw: 'hotel', zone: 'concierge-club', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Concierge Club Live · Winter hotel deals', desc: 'Two concierges pick the best winter stays and answer your questions in the chat.' },
  { gw: 'hotel', type: 'Event', icon: '🍳', time: 'Nov 21', title: 'Hotel Hunters breakfast awards: vote closes', desc: 'The community’s vote for the best hotel breakfast in the UK closes at 8pm.' },
  { gw: 'hotel', zone: 'pillowry', type: 'Sale', icon: '🛏️', time: 'Nov 27', title: 'Pillowry Black Friday bedding sale', desc: 'A quarter off sheets, duvets and toppers for one day.' },
  { gw: 'hotel', zone: 'linen-lantern', type: 'Deadline', icon: '🏨', time: 'Nov 30', title: 'Winter Weekend early booking ends', desc: 'Linen & Lantern: book January or February by midnight for a free dinner upgrade.' },
  { gw: 'hotel', type: 'Event', icon: '🛎️', time: 'Dec 2', title: 'Front-desk skills evening, London', desc: 'London Hospitality Network with James Okafor: arrivals, complaints and the first five minutes.' },
  { gw: 'hotel', type: 'Event', icon: '🥂', time: 'Dec 6', title: 'Hotel Hunters winter meet-up', desc: 'Drinks in Covent Garden and the breakfast awards results.' },
  { gw: 'hotel', type: 'Event', icon: '📷', time: 'Dec 11', title: 'Photograph your rooms: online masterclass', desc: 'Sofia Reyes on light, styling and phone settings for small hotels and B&Bs. Free.' },
  { gw: 'hotel', zone: 'bramble-bath', type: 'Deadline', icon: '🧴', time: 'Dec 18', title: 'Last order for Christmas delivery', desc: 'Bramble & Bath: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /HOTELXX ═════════ */
