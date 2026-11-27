/* ═════════ CHRISTMASXX — a seasonal live demo gateway (2026-11-04, Sean) ═════════
   Built like ClimbXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette: deep evergreen, berry red, warm gold, cream. `theme.festive` turns on the seasonal dress
   (holly, berries, header snow) in genexxo-app.html. Brands, pros and communities are fictional; places are real.
   Seasonal: pinned in PINNED_GWS until January. Source of truth: _lab/christmasxx/christmasxx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const RED = 'linear-gradient(135deg,#C62F3A,#7A1220)', GREEN = 'linear-gradient(135deg,#1F5A3A,#0E2E1D)', GOLD = 'linear-gradient(135deg,#E9C46A,#B7791F)';

GATEWAYS.christmas = {
  name: 'ChristmasXX', domain: 'christmasxx.com', emoji: '🎄', sector: 'celebrations', live: true,
  tagline: 'The Christmas Universe',
  theme: {
    bg: '#0E1712', text: '#F3EBDD', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(233,196,106,.14)',
    headerBg: 'linear-gradient(180deg,#1B3A28,#0E1712)', accent: '#C62F3A', accentAlt: '#E9C46A', dark: true,
    festive: true
  },
  gradient: 'linear-gradient(135deg,#1F5A3A,#C62F3A,#E9C46A)',
  stats: { members: '1.2M', brands: '2,400+', agents: '64' },
  spaces: ['All Feed', 'Markets & Events', 'Gifts', 'Food & Baking', 'Decorating', 'Carols & Music'],
  trending: ['#ChristmasMarkets', '#GiftGuide', '#AdventCountdown'],
  brandZones: [
    { key: 'northpine-ornaments', name: 'Northpine Ornaments', color: '#8B1E2D', tier: 'Founding Partner', tag: 'Hand-blown glass baubles & heirloom decorations' },
    { key: 'hollyhock-hampers', name: 'Hollyhock Hampers', color: '#1F5A3A', tier: 'Brand Zone', tag: 'Festive hampers from British makers' },
    { key: 'kindle-co', name: 'Kindle & Co', color: '#B7791F', tier: 'Brand Zone', tag: 'Hand-poured winter candles & home scents' },
    { key: 'fairisle-frost', name: 'Fairisle & Frost', color: '#2B4C7E', tier: 'Brand Zone', tag: 'Christmas jumpers & winter knitwear' }
  ],
  apps: [
    { name: 'Advent Countdown', color: '#C62F3A', desc: 'A door a day, and the days left', key: 'advent-countdown', url: 'apps/advent-countdown.html',
      dev: 'Snowglobe Studio', rating: '4.9', users: '86.2K', perms: ['profile', 'feed'],
      tagline: 'Twenty-four doors, one every morning.',
      about: 'Advent Countdown is the calendar everyone in the house can open. A new door every morning from 1 December: a recipe, a carol, a tiny job to get ahead, or a little bit of joy. It counts the sleeps to Christmas Day and remembers which doors you have opened. Share today’s door to the ChristmasXX feed in one tap.',
      features: ['A new door every morning from 1 December', 'Counts the sleeps to Christmas Day', 'Remembers every door you have opened', 'One-tap share to the ChristmasXX feed'],
      shots: ['apps/advent-countdown/shot-1.jpg', 'apps/advent-countdown/shot-2.jpg', 'apps/advent-countdown/shot-3.jpg'],
      version: '3.0', size: '9 KB',
      updates: [ { v: '3.0', ago: 4, notes: 'This year’s 24 doors are in. Counting down from today.' }, { v: '2.6', ago: 330, notes: 'Family mode: everyone opens the same door together.' }, { v: '2.5', ago: 360, notes: 'Signed in with GENEXXO. Your doors follow you between devices.' } ],
      reviews: [ { who: '@fairylight_fran', stars: 5, ago: 2, text: 'The kids fight over who opens the door each morning. Best kind of fight.' }, { who: '@mince_pie_mo', stars: 5, ago: 6, text: 'Opened straight from ChristmasXX, no download. Lovely little thing.' }, { who: '@tinsel_tom', stars: 4, ago: 9, text: 'More doors with recipes please!' } ] },
    { name: 'Gift Planner', color: '#E9C46A', desc: 'Everyone on your list, on budget', key: 'gift-planner', url: 'apps/gift-planner.html',
      dev: 'Ribbon & Co', rating: '4.8', users: '41.7K', perms: ['profile', 'feed'],
      tagline: 'Everyone on your list. Nobody forgotten. Still on budget.',
      about: 'Gift Planner keeps the whole Christmas list in one place: who, the idea, the budget and whether it is bought and wrapped. A running total tells you where you stand, and ideas from the ChristmasXX Gift Guide are one tap away.',
      features: ['Every person, idea and budget in one list', 'Bought and wrapped ticks as you go', 'A running total against your budget', 'Ideas from the ChristmasXX Gift Guide'],
      shots: ['apps/gift-planner/shot-1.jpg', 'apps/gift-planner/shot-2.jpg', 'apps/gift-planner/shot-3.jpg'],
      version: '2.2', size: '8 KB',
      updates: [ { v: '2.2', ago: 3, notes: 'Wrapped tick added. Totals now split bought / still to buy.' }, { v: '2.1', ago: 340, notes: 'Gift Guide ideas inside the app.' }, { v: '2.0', ago: 365, notes: 'Signed in with GENEXXO. One list across your devices.' } ],
      reviews: [ { who: '@list_lady', stars: 5, ago: 1, text: 'First December in years I haven’t overspent. The running total is everything.' }, { who: '@uncle_bert', stars: 5, ago: 5, text: 'Simple and does exactly what it says.' }, { who: '@secret_santa_sam', stars: 4, ago: 12, text: 'Would love a Secret Santa draw built in.' } ] },
    { name: 'Dinner Timer', color: '#4ADE80', desc: 'Works back from when you eat', key: 'dinner-timer', url: 'apps/dinner-timer.html',
      dev: 'Roast & Ready', rating: '4.9', users: '58.3K', perms: ['profile', 'feed'],
      tagline: 'Tell it when you want to eat. It tells you when to start.',
      about: 'Dinner Timer plans Christmas dinner backwards from the moment you sit down. Choose what is on the table, set the time, and it builds a minute-by-minute schedule: when the turkey goes in, when it rests, when the potatoes and the sprouts start, so everything lands on the plate together.',
      features: ['A schedule that works back from dinner time', 'Turkey, potatoes, veg, pigs in blankets and gravy', 'Resting time built in', 'Share the plan with whoever is helping'],
      shots: ['apps/dinner-timer/shot-1.jpg', 'apps/dinner-timer/shot-2.jpg', 'apps/dinner-timer/shot-3.jpg'],
      version: '4.1', size: '9 KB',
      updates: [ { v: '4.1', ago: 2, notes: 'Bigger birds: timings now up to 8 kg.' }, { v: '4.0', ago: 320, notes: 'Pick exactly what is on your table.' }, { v: '3.8', ago: 350, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@gravy_queen', stars: 5, ago: 1, text: 'Everything hot at the same time for the first time ever. Witchcraft.' }, { who: '@first_time_host', stars: 5, ago: 4, text: 'Hosting for 12 and I was actually calm.' }, { who: '@nut_roast_nina', stars: 4, ago: 8, text: 'Please add a nut roast option!' } ] }
  ],
  pros: [
    { key: 'clementine-bake-school', name: 'Clementine Bake School', color: '#C62F3A', tag: 'Christmas baking classes · cakes, gingerbread & mince pies', role: 'Baking teacher',
      img: U('1765451490469-099b47124cdb', 800, 800), base: 'Bath, UK', langs: 'English', years: 14, rating: '4.9', reviewsN: 486, cur: '£',
      creds: ['Le Cordon Bleu Diplôme de Pâtisserie', 'Level 2 Food Hygiene certified', 'Fully insured kitchen school'],
      about: 'Clementine teaches small, warm, flour-everywhere classes from her kitchen school in Bath. Christmas is her favourite term: the cake that lasts until Easter, a gingerbread house that actually stands up, and mince pies with proper pastry. Everything you bake goes home with you.',
      services: [ { id: 'cake', name: 'The Christmas Cake class', dur: '3 hours', price: 85, desc: 'Bake, feed and learn to ice a classic fruit cake. You take home the cake and a feeding plan.' },
                  { id: 'ginger', name: 'Gingerbread house workshop', dur: '2.5 hours', price: 65, desc: 'Templates, royal icing that sets, and a house that stands. Great for parents and children together.' },
                  { id: 'pies', name: 'Mince pies & festive pastry', dur: '2 hours', price: 55, desc: 'Sweet shortcrust from scratch, two fillings, and two dozen pies to take home.' } ],
      avail: { days: [2, 3, 4, 5, 6], times: ['10:00', '14:00', '18:30'] },
      reviews: [ { who: '@mince_pie_mo', stars: 5, ago: 3, text: 'My pastry has never been this short. Clementine is a joy.' }, { who: '@gingerbread_gem', stars: 5, ago: 7, text: 'Our gingerbread house survived to Twelfth Night. A first.' }, { who: '@baker_ben', stars: 5, ago: 15, text: 'Booked the cake class as a gift for my mum. She has booked two more.' } ],
      posts: [ { ago: 1, text: 'Stir-up Sunday is the 22nd: if you are making a Christmas cake this year, start it now and feed it weekly.' }, { ago: 6, text: 'Three places left on the Saturday gingerbread workshop. Bring a small helper.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'holly-hazel-wreaths', name: 'Holly & Hazel Wreaths', color: '#1F5A3A', tag: 'Wreath-making workshops · foraged & sustainable', role: 'Florist',
      img: U('1767458478220-aeb13c881cb6', 800, 800), base: 'Cotswolds, UK', langs: 'English', years: 9, rating: '4.9', reviewsN: 271, cur: '£',
      creds: ['Accredited florist, BFA', 'Sustainable floristry pledge (no foam)', 'Public liability insured'],
      about: 'Hazel runs cosy wreath-making evenings in a Cotswold barn with a wood burner, mulled wine and everything foraged or grown nearby. You leave with a wreath that lasts the season and the know-how to make one every year. No floral foam, ever.',
      services: [ { id: 'wreath', name: 'Wreath-making evening', dur: '2.5 hours', price: 68, desc: 'Moss-and-willow base, foraged greenery, dried oranges and ribbon. Mulled wine included.' },
                  { id: 'table', name: 'Christmas table centrepiece', dur: '2 hours', price: 58, desc: 'A long, low table garland with candles that is safe to leave lit.' },
                  { id: 'private', name: 'Private group workshop (up to 10)', dur: '3 hours', price: 520, desc: 'Your own evening in the barn for friends, family or the office team.' } ],
      avail: { days: [3, 4, 5, 6], times: ['11:00', '18:30'] },
      reviews: [ { who: '@fairylight_fran', stars: 5, ago: 2, text: 'Best evening of the season. My wreath still looks perfect.' }, { who: '@office_elf', stars: 5, ago: 9, text: 'Booked the private workshop for our team. Everyone loved it.' }, { who: '@greenfingers_g', stars: 4, ago: 18, text: 'Lovely. Book early, the Fridays go fast.' } ],
      posts: [ { ago: 2, text: 'This week’s wreaths: blue spruce, eucalyptus and dried blood orange. Fridays are full; Thursdays have space.' }, { ago: 8, text: 'Tip: mist your wreath every few days and it will stay fresh into January.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'twinkle-installs', name: 'Twinkle Installs', color: '#B7791F', tag: 'Festive lights installed, safely · homes & shopfronts', role: 'Lighting installer',
      img: U('1470938017644-581bd9737a31', 800, 800), base: 'London & the Home Counties', langs: 'English, Polish', years: 11, rating: '4.8', reviewsN: 352, cur: '£',
      creds: ['NICEIC approved electricians', 'Working-at-height trained', '£5m public liability'],
      about: 'Twinkle Installs puts up Christmas lights properly: planned, weatherproof, on timers and taken down in January. Rooflines, trees, porches and whole shopfronts, using low-energy LEDs. We store your lights for next year if you like.',
      services: [ { id: 'home', name: 'Home roofline & porch install', dur: 'Half day', price: 395, desc: 'Warm-white LED roofline, porch garland and a timer. Takedown in January included.' },
                  { id: 'tree', name: 'Garden tree wrap', dur: '2 hours', price: 180, desc: 'One large tree wrapped trunk to tip in warm-white LEDs.' },
                  { id: 'shop', name: 'Shopfront design & install', dur: '1 day', price: 950, desc: 'A designed window and frontage that stops people in the street.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6], times: ['08:00', '13:00'] },
      reviews: [ { who: '@lights_on_larry', stars: 5, ago: 4, text: 'Up in a morning, perfect lines, and they come back to take it all down.' }, { who: '@corner_cafe', stars: 5, ago: 11, text: 'Our shopfront brought people in all December.' }, { who: '@suburb_sue', stars: 4, ago: 20, text: 'Great work. Book by mid-November.' } ],
      posts: [ { ago: 1, text: 'Late-November installs are nearly full. A few early-December mornings left.' }, { ago: 7, text: 'Warm white or cool white? Warm, every time, for a home.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'bath-market-friends', name: 'Bath Christmas Market Friends', domain: 'bathmarket.christmasxx.com', color: '#C62F3A', img: U('1766086893303-1494a76d1980', 900, 500),
      scope: 'Local', where: 'Bath', members: 3860, online: 118, tagline: 'Stalls, meet-ups and the best mulled wine in town.',
      about: 'Locals and visitors who love the Bath Christmas Market. We share which stalls are back, when it is quietest, where to park, and meet up for a mulled wine most Friday evenings. Founded 2015, run by volunteers.',
      rules: ['Be kind, it is Christmas', 'No ticket touting', 'Support the small makers'],
      mods: ['@fairylight_fran', '@mince_pie_mo'],
      threads: [ { t: 'Quietest time to visit on a weekday?', by: '@first_time_bath', tag: 'Q&A', replies: 31, ago: 0, votes: 52 }, { t: 'The toffee apple stall is back!', by: '@sweet_tooth_sal', tag: 'STALLS', replies: 18, ago: 1, votes: 77 }, { t: 'Friday meet-up by the Abbey, who is in?', by: '@mince_pie_mo', tag: 'MEET', replies: 26, ago: 1, votes: 64 }, { t: 'Park & ride tips for the busy weekends', by: '@bath_local', tag: 'TIPS', replies: 14, ago: 3, votes: 39 } ],
      events: [ { title: 'Friday mulled wine meet-up', day: 5, time: '18:00', where: 'By the Abbey, Bath' }, { title: 'Market morning walk', day: 6, time: '10:00', where: 'Abbey Green' } ] },
    { key: 'chamber-carollers', name: 'The Chamber Carollers', domain: 'carollers.christmasxx.com', color: '#E9C46A', img: U('1543978571-a065f649f95c', 900, 500),
      scope: 'Local', where: 'Edinburgh', members: 640, online: 22, tagline: 'Carols by candlelight. Everyone sings.',
      about: 'A friendly community choir that sings carols by candlelight in churches, care homes and on the street every December. No auditions, all voices welcome, and we raise money for local charities as we go.',
      rules: ['All voices welcome', 'Turn up, warm up, sing out', 'Every penny to charity'],
      mods: ['@alto_annie', '@tenor_tam'],
      threads: [ { t: 'Rehearsal tracks for O Holy Night', by: '@alto_annie', tag: 'MUSIC', replies: 12, ago: 0, votes: 33 }, { t: 'Care home visits, sign-up list', by: '@tenor_tam', tag: 'VISITS', replies: 21, ago: 1, votes: 45 }, { t: 'First time singing with a choir, any tips?', by: '@new_voice', tag: 'Q&A', replies: 17, ago: 2, votes: 29 } ],
      events: [ { title: 'Open rehearsal', day: 2, time: '19:30', where: 'St Cuthbert’s, Edinburgh' }, { title: 'Carols on the Mound', day: 6, time: '16:00', where: 'The Mound, Edinburgh' } ] }
  ],
  feed: [
    { av: 'CX', avBg: GREEN, author: 'ChristmasXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Markets, gifts, the perfect roast, carols by candlelight, and the communities that make the season. Christmas, all in one place.',
      img: U('1765044203136-fa42c59771ff', 800, 600), eng: '♡ 24.6K · 💬 3.1K · ↗ 2.2K' },
    { av: 'FF', avBg: RED, author: '@fairylight_fran', sub: 'Decorating · Just now', badge: 'COMMUNITY',
      text: 'Our street voted to go all out this year: 23 houses, one theme, the Nutcracker. Lights on at 6pm Saturday and everyone is welcome 🎄✨',
      img: U('1766217979783-7a78b5004101', 800, 600), eng: '♡ 6.4K · 💬 512 · ↗ 391' },
    { av: 'NO', avBg: 'linear-gradient(135deg,#8B1E2D,#4A0E17)', author: 'Northpine Ornaments', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Heritage Collection</b> is here: 24 hand-blown baubles, each painted in our Cumbrian workshop. Numbered, boxed, and made to be handed down.',
      img: U('1512474932049-78ac69ede12c', 800, 600), eng: '♡ 9.8K · 💬 744 · ↗ 1.1K' },
    { av: 'HH', avBg: GREEN, author: 'Hollyhock Hampers', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: '<b>The Big Christmas Hamper</b> is back: 31 treats from 18 British makers, delivered by 20 December or your money back.',
      img: U('1545608444-f045a6db6133', 800, 600), eng: '♡ 4.2K · 💬 388 · ↗ 506' },
    { av: 'GG', avBg: GOLD, author: '@gingerbread_gem', sub: 'Food & Baking · 2h ago', badge: 'COMMUNITY',
      text: 'Cookie-decorating Sunday is now a family tradition. Forty biscuits, three colours of icing, one very sticky kitchen 😅',
      img: U('1639610806386-661d00972b55', 800, 600), eng: '♡ 3.9K · 💬 276 · ↗ 158' },
    { av: 'KC', avBg: GOLD, author: 'Kindle & Co', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Meet <b>Fireside & Clementine</b>, this winter’s scent: hand-poured in small batches in Bath, with a wooden wick that crackles like a log fire.',
      img: U('1765541268140-c40997e7a61b', 800, 600), eng: '♡ 2.7K · 💬 193 · ↗ 240' },
    { av: 'TC', avBg: 'linear-gradient(135deg,#E9C46A,#8A5A12)', author: 'The Chamber Carollers', sub: 'Carols & Music · 5h ago', badge: 'COMMUNITY',
      text: 'Carols by candlelight at St Cuthbert’s on Saturday 12 December. No tickets, no auditions: just bring your voice and a warm coat.',
      img: U('1543978571-a065f649f95c', 800, 600), eng: '♡ 1.8K · 💬 142 · ↗ 205' }
  ],
  prompts: ['Best Christmas markets within 2 hours of London?', 'Plan my Christmas dinner so everything is ready at 3pm', 'Gift ideas for my dad who loves walking, under £50', 'Where can I hear carols by candlelight near me?'],
  businesses: ['evergreen-hill-farm', 'sugarplum-bakehouse']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'christmas', verified: true }, o);
Object.assign(ZONES, {
  'northpine-ornaments': brand({ key: 'northpine-ornaments', name: 'Northpine Ornaments', color: '#8B1E2D', gradient: 'linear-gradient(135deg,#8B1E2D,#4A0E17)', tier: 'Founding Partner',
    tagline: 'Hand-blown glass, painted in Cumbria since 1952', stats: { followers: '48.2K', content: '512', products: '140' },
    ad: { badge: 'Featured', img: U('1512474932049-78ac69ede12c', 760, 760), hl: 'The Heritage Collection.', sub: '24 hand-blown baubles, numbered and boxed, painted in our Cumbrian workshop.', meta: 'From £18' },
    products: [
      { name: 'Heritage Bauble, Crimson', price: '£24', tag: 'HERITAGE', emoji: '🔴', rating: 4.9, reviews: 1820, cat: 'baubles', special: true, desc: 'Our signature hand-blown bauble in deep crimson glass, gold-leaf crown, numbered.', features: ['Mouth-blown glass', 'Hand-painted gold leaf', 'Numbered gift box'], review: { who: 'Fran B.', text: 'The colour in the tree lights is something else. Bought one for each of the grandchildren.' } },
      { name: 'Heritage Bauble, Forest Green', price: '£24', emoji: '🟢', rating: 4.8, reviews: 940, cat: 'baubles', desc: 'Deep forest-green glass with a frosted pine motif.', features: ['Mouth-blown glass', 'Frosted hand-etched pine', 'Numbered gift box'], review: { who: 'Tom K.', text: 'Heavy, beautiful, clearly made by hand.' } },
      { name: 'Midnight Gold set of 6', price: '£58', tag: 'BESTSELLER', emoji: '✨', rating: 4.8, reviews: 2210, cat: 'baubles', special: true, desc: 'Six smaller baubles in midnight blue and antique gold.', features: ['Six 6cm baubles', 'Mixed matte and gloss', 'Reusable keepsake box'], review: { who: 'Priya S.', text: 'Elegant without being fussy. Perfect on a slim tree.' } },
      { name: 'Personalised First Christmas', price: '£28', tag: 'PERSONALISED', emoji: '👶', rating: 4.9, reviews: 1305, cat: 'personal', desc: 'A hand-lettered bauble for a baby’s first Christmas, with name and year.', features: ['Hand-lettered name and year', 'Order by 10 December', 'Gift wrapped'], review: { who: 'Hannah (parent)', text: 'Will be on the tree every year. Lettering is beautiful.' } },
      { name: 'Hand-painted Robin', price: '£19', emoji: '🐦', rating: 4.7, reviews: 688, cat: 'figures', desc: 'A plump glass robin with a clip-on tail, to perch on any branch.', features: ['Clip-on glass robin', 'Hand-painted breast', '8cm'], review: { who: 'Ellie M.', text: 'Sits on the branch like the real thing.' } },
      { name: 'Glass Tree Topper Star', price: '£45', tag: 'TOPPER', emoji: '⭐', rating: 4.8, reviews: 412, cat: 'figures', desc: 'A gold-leaf glass star that catches every light in the room.', features: ['Fits most tree tips', 'Gold-leaf finish', '20cm'], review: { who: 'Marco D.', text: 'Finally a topper that looks expensive and actually is good.' } },
      { name: 'Paper-chain Garland Kit', price: '£12', tag: 'FAMILY', emoji: '🎀', rating: 4.6, reviews: 530, cat: 'garlands', desc: 'Recycled-paper chains in our heritage colours, for an afternoon at the kitchen table.', features: ['200 strips', 'Recycled card', 'Makes 6 metres'], review: { who: 'Dan W.', text: 'Kept the kids busy for a whole wet Sunday.' } },
      { name: 'Bauble Repair & Restore', price: '£15', tag: 'SERVICE', emoji: '🔧', rating: 4.9, reviews: 302, cat: 'care', special: true, desc: 'Send us a family bauble with a chipped cap or faded paint and we will restore it.', features: ['Cap and hanger replaced', 'Paint retouched by hand', 'Back in 14 days'], review: { who: 'June R.', text: 'My mother’s bauble from 1968 came back looking new. I cried.' } }
    ],
    shopCats: [ { key: 'baubles', label: 'Baubles', icon: '🔴' }, { key: 'figures', label: 'Figures & toppers', icon: '⭐' }, { key: 'personal', label: 'Personalised', icon: '✍️' }, { key: 'garlands', label: 'Garlands', icon: '🎀' }, { key: 'care', label: 'Repair & care', icon: '🔧' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'The <b>Heritage Collection</b> is here: 24 hand-blown baubles, numbered and boxed.', img: U('1512474932049-78ac69ede12c', 800, 440), eng: '♡ 9.8K · 💬 744 · ↗ 1.1K', product: 0 },
      { type: 'post', sub: 'Workshop · Yesterday', text: 'Inside the Cumbrian workshop: each bauble takes four people and three days.', img: U('1480618757544-81c31930008e', 800, 440), eng: '♡ 5.1K · 💬 320' },
      { type: 'community', who: 'June R.', whoBg: RED, sub: 'Community · 1d', text: 'Can you really fix a bauble from the 1960s? The cap has gone and the paint is fading.', eng: '♡ 188 · 💬 41', reply: 'We can, June. Our Repair & Restore service replaces the cap and retouches the paint by hand, back in 14 days. 🔧' }
    ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Workshop open evening', when: 'Dec 4 · Kendal, Cumbria + livestream', desc: 'Watch a bauble blown and painted live, then paint your own to take home.', registered: 412, capacity: 600 } ],
    about: { founded: 'Kendal, Cumbria · 1952', story: 'A family glass workshop in the Lake District that has made Christmas ornaments by hand for three generations. We joined GENEXXO as ChristmasXX’s Founding Partner because this is where people who keep their decorations for a lifetime gather.', milestones: [['1952', 'The first bauble blown in a Kendal garage'], ['1988', 'The Heritage Crimson becomes our signature'], ['2026', 'Founding Partner on ChristmasXX']], values: ['Made by hand', 'Repair, never replace', 'Plastic-free packaging'] } }),

  'hollyhock-hampers': brand({ key: 'hollyhock-hampers', name: 'Hollyhock Hampers', color: '#1F5A3A', gradient: GREEN, tier: 'Brand Zone',
    tagline: 'British makers, one beautiful box', stats: { followers: '31.6K', content: '288', products: '46' },
    ad: { badge: 'Featured', img: U('1545608444-f045a6db6133', 760, 760), hl: 'The Big Christmas Hamper.', sub: '31 treats from 18 British makers, delivered by 20 December or your money back.', meta: 'From £35' },
    products: [
      { name: 'The Big Christmas Hamper', price: '£125', tag: 'FLAGSHIP', emoji: '🧺', rating: 4.9, reviews: 2840, cat: 'hampers', special: true, desc: '31 treats from 18 British makers in a reusable wicker basket.', features: ['Cheese, chutney, crackers, wine', 'Christmas cake and mince pies', 'Delivered by 20 December'], review: { who: 'Bert L.', text: 'Sent one to my brother in Aberdeen. He has called twice to say thank you.' } },
      { name: 'The Sweet Tooth', price: '£48', emoji: '🍫', rating: 4.8, reviews: 1120, cat: 'hampers', desc: 'Fudge, truffles, gingerbread and hot chocolate.', features: ['12 sweet treats', 'Gift box', 'Vegetarian'], review: { who: 'Sal T.', text: 'Did not last until Christmas Day. No regrets.' } },
      { name: 'Cheese & Port', price: '£65', tag: 'BESTSELLER', emoji: '🧀', rating: 4.9, reviews: 1630, cat: 'hampers', special: true, desc: 'Three British cheeses, oatcakes, quince and a bottle of tawny port.', features: ['Stilton, Cornish Yarg, Wensleydale', 'Tawny port 75cl', 'Chilled delivery'], review: { who: 'Graham P.', text: 'The Stilton alone is worth it.' } },
      { name: 'Mulled Wine Kit', price: '£22', emoji: '🍷', rating: 4.7, reviews: 760, cat: 'drinks', desc: 'A bottle of red, our spice blend and dried oranges.', features: ['Makes 8 glasses', 'Non-alcoholic option', 'Recipe card'], review: { who: 'Nina R.', text: 'Smelled like Christmas in five minutes.' } },
      { name: 'Little Hamper', price: '£35', tag: 'UNDER £40', emoji: '🎁', rating: 4.7, reviews: 905, cat: 'hampers', desc: 'Eight favourites in a keepsake tin, perfect for neighbours and teachers.', features: ['8 treats', 'Keepsake tin', 'Letterbox friendly'], review: { who: 'Ella J.', text: 'Gave these to all the teachers. Very popular.' } },
      { name: 'Build-your-own Hamper', price: 'From £40', tag: 'CUSTOM', emoji: '🛠️', rating: 4.8, reviews: 420, cat: 'custom', desc: 'Choose every item yourself from 120 British products.', features: ['Pick 10 to 30 items', 'Gift message', 'Choose the delivery day'], review: { who: 'Ravi K.', text: 'Built one for a coeliac friend. Everything was right.' } }
    ],
    shopCats: [ { key: 'hampers', label: 'Hampers', icon: '🧺' }, { key: 'drinks', label: 'Drinks', icon: '🍷' }, { key: 'custom', label: 'Build your own', icon: '🛠️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 1h', text: '<b>The Big Christmas Hamper</b> is back: 31 treats from 18 British makers.', img: U('1545608444-f045a6db6133', 800, 440), eng: '♡ 4.2K · 💬 388 · ↗ 506', product: 0 },
      { type: 'post', sub: 'Makers · 2d', text: 'Meet our makers: the Christmas cake in every hamper is baked by Sugarplum Bakehouse in Somerset.', img: U('1576665503489-065390b2f490', 800, 440), eng: '♡ 1.9K · 💬 110' }
    ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order date for Christmas delivery', when: 'Dec 17 · 23:59', desc: 'Order by midnight on 17 December for guaranteed delivery by 20 December.', registered: 2210, capacity: 5000 } ],
    about: { founded: 'Frome, Somerset · 2009', story: 'We started with one basket and three local makers. Today every Hollyhock hamper is a showcase of small British food and drink producers, and every maker is named on the card inside.', milestones: [['2009', 'The first hamper, packed on a kitchen table'], ['2019', '100 British makers on board'], ['2026', 'Brand Zone on ChristmasXX']], values: ['Small British makers', 'Named on every card', 'Recyclable packing'] } }),

  'kindle-co': brand({ key: 'kindle-co', name: 'Kindle & Co', color: '#B7791F', gradient: GOLD, tier: 'Brand Zone',
    tagline: 'Hand-poured in Bath, one small batch at a time', stats: { followers: '22.9K', content: '196', products: '38' },
    ad: { badge: 'New', img: U('1765541268140-c40997e7a61b', 760, 760), hl: 'Fireside & Clementine.', sub: 'This winter’s scent, with a wooden wick that crackles like a log fire.', meta: 'From £28' },
    products: [
      { name: 'Fireside & Clementine', price: '£34', tag: 'NEW', emoji: '🕯️', rating: 4.9, reviews: 860, cat: 'candles', special: true, desc: 'Smoky cedar, clementine peel and clove, with a crackling wooden wick.', features: ['Soy and coconut wax', '60-hour burn', 'Wooden crackle wick'], review: { who: 'Ann P.', text: 'My living room smells like a country pub at Christmas. Perfect.' } },
      { name: 'Frosted Pine', price: '£30', tag: 'BESTSELLER', emoji: '🌲', rating: 4.8, reviews: 1540, cat: 'candles', desc: 'Fresh pine needles and eucalyptus on a cold morning.', features: ['Soy and coconut wax', '50-hour burn'], review: { who: 'Jo M.', text: 'Like having a real tree without the needles.' } },
      { name: 'Mulled Plum', price: '£30', emoji: '🍷', rating: 4.7, reviews: 690, cat: 'candles', desc: 'Dark plum, cinnamon and a splash of red wine.', features: ['50-hour burn', 'Amber glass jar'], review: { who: 'Kev L.', text: 'Rich without being sickly.' } },
      { name: 'Advent Candle', price: '£22', tag: 'ADVENT', emoji: '🗓️', rating: 4.9, reviews: 980, cat: 'advent', special: true, desc: 'Burn it down one day at a time from 1 to 24 December.', features: ['Numbered 1 to 24', 'Unscented', 'Hand-painted numbers'], review: { who: 'Sara H.', text: 'A family ritual every evening.' } },
      { name: 'Reed Diffuser, Winter Spice', price: '£28', emoji: '🌿', rating: 4.6, reviews: 412, cat: 'home', desc: 'Orange, clove and nutmeg for three months.', features: ['100ml', 'Rattan reeds', 'Refillable'], review: { who: 'Tim A.', text: 'Hallway smells amazing as soon as you open the door.' } },
      { name: 'Refill & Return', price: '£16', tag: 'SERVICE', emoji: '♻️', rating: 4.9, reviews: 530, cat: 'home', desc: 'Send back your empty jar and we refill it with any scent.', features: ['Free returns label', 'Any scent', '10-day turnaround'], review: { who: 'Ruth D.', text: 'Love not throwing the jars away.' } }
    ],
    shopCats: [ { key: 'candles', label: 'Candles', icon: '🕯️' }, { key: 'advent', label: 'Advent', icon: '🗓️' }, { key: 'home', label: 'Home & refills', icon: '🌿' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Meet <b>Fireside & Clementine</b>, this winter’s scent.', img: U('1765541268140-c40997e7a61b', 800, 440), eng: '♡ 2.7K · 💬 193', product: 0 },
            { type: 'post', sub: 'Pouring day · 3d', text: 'Pouring day in Bath: 600 Frosted Pines, one ladle at a time.', img: U('1607838660853-a2cf34eec5b9', 800, 440), eng: '♡ 1.4K · 💬 86' } ],
    events: [ { zoneEvent: true, tag: 'WORKSHOP', title: 'Pour your own candle', when: 'Dec 6 · Bath studio', desc: 'Choose your scent, pour your candle and take it home the same afternoon.', registered: 64, capacity: 80 } ],
    about: { founded: 'Bath · 2017', story: 'Two friends, one kitchen and a lot of failed batches. Kindle & Co pours every candle by hand in a small studio behind Walcot Street.', milestones: [['2017', 'The first candle poured in a kitchen'], ['2022', 'Refill & Return launches'], ['2026', 'Brand Zone on ChristmasXX']], values: ['Hand-poured', 'Plant-based wax', 'Refill, do not replace'] } }),

  'fairisle-frost': brand({ key: 'fairisle-frost', name: 'Fairisle & Frost', color: '#2B4C7E', gradient: 'linear-gradient(135deg,#2B4C7E,#132544)', tier: 'Brand Zone',
    tagline: 'Christmas jumpers you will want to wear in January', stats: { followers: '27.3K', content: '240', products: '64' },
    ad: { badge: 'Featured', img: U('1640998011471-5d79071a2ae3', 760, 760), hl: 'The Family Fair Isle.', sub: 'Matching jumpers for the whole family, knitted in Scotland.', meta: 'From £39' },
    products: [
      { name: 'Family Fair Isle, Adult', price: '£89', tag: 'BESTSELLER', emoji: '🧶', rating: 4.8, reviews: 1980, cat: 'jumpers', special: true, desc: 'A classic Fair Isle yoke in cream, red and forest green.', features: ['Lambswool', 'Knitted in Scotland', 'Sizes XS to XXL'], review: { who: 'Ian S.', text: 'Wore it all winter, not just Christmas. Beautifully made.' } },
      { name: 'Family Fair Isle, Kids', price: '£49', emoji: '🧒', rating: 4.9, reviews: 860, cat: 'jumpers', desc: 'The same yoke, sized for ages 2 to 12.', features: ['Soft merino blend', 'Machine washable'], review: { who: 'Lucy (parent)', text: 'The family photo this year is going to be ridiculous. In a good way.' } },
      { name: 'Reindeer Jumper', price: '£69', tag: 'FUN', emoji: '🦌', rating: 4.6, reviews: 720, cat: 'jumpers', desc: 'A proper knitted reindeer, no flashing lights required.', features: ['Recycled wool blend', 'Unisex fit'], review: { who: 'Dev P.', text: 'Won the office jumper day. Obviously.' } },
      { name: 'Cable Scarf', price: '£39', emoji: '🧣', rating: 4.8, reviews: 640, cat: 'accessories', desc: 'A long chunky cable scarf in berry red.', features: ['Lambswool', '180cm'], review: { who: 'Meg F.', text: 'So warm, and the colour is gorgeous.' } },
      { name: 'Nordic Mittens', price: '£29', emoji: '🧤', rating: 4.7, reviews: 510, cat: 'accessories', desc: 'Fleece-lined mittens with a snowflake pattern.', features: ['Fleece lined', 'One size'], review: { who: 'Ola N.', text: 'Market-night essential.' } },
      { name: 'Mend & Darn', price: '£18', tag: 'SERVICE', emoji: '🪡', rating: 4.9, reviews: 288, cat: 'care', desc: 'Moth holes and pulled stitches darned by hand.', features: ['Any brand of knitwear', '14-day turnaround'], review: { who: 'Pat G.', text: 'My twenty-year-old jumper lives on.' } }
    ],
    shopCats: [ { key: 'jumpers', label: 'Jumpers', icon: '🧶' }, { key: 'accessories', label: 'Scarves & mittens', icon: '🧣' }, { key: 'care', label: 'Mend & care', icon: '🪡' } ],
    feed: [ { type: 'post', sub: 'Brand post · 6h', text: 'The <b>Family Fair Isle</b> is back in four sizes of human and one size of dog.', img: U('1766957358780-dc2545702009', 800, 440), eng: '♡ 3.6K · 💬 290', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Christmas Jumper Day', when: 'Dec 11 · everywhere', desc: 'Wear your jumper, share a photo in ChristmasXX, and we give £1 per photo to Save the Children.', registered: 8400, capacity: 20000 } ],
    about: { founded: 'Lerwick, Shetland · 1994', story: 'Fair Isle knitting is our home tradition. We design in Shetland and knit in the Scottish Borders, and we would rather you kept one jumper for twenty years than bought a new one every December.', milestones: [['1994', 'First jumpers sold at the Lerwick market'], ['2015', 'Mend & Darn service launches'], ['2026', 'Brand Zone on ChristmasXX']], values: ['Knitted in Scotland', 'Made to last', 'Mend before you replace'] } }),

  'evergreen-hill-farm': { key: 'evergreen-hill-farm', kind: 'business', gw: 'christmas', name: 'Evergreen Hill Tree Farm', color: '#1F5A3A', gradient: GREEN, img: U('1638324781201-ef28ac131886', 900, 500),
    tier: 'Verified', category: 'Growers & suppliers', tagline: 'British-grown Christmas trees, wholesale and for events.',
    about: { founded: 'Herefordshire · 1978', story: 'Two hundred acres of Nordmann fir, Norway spruce and Fraser fir, grown slowly and cut to order. We supply garden centres, markets and events across the UK, and replant three trees for every one we cut.' },
    stats: { years: 48, staff: 65, clients: '300+ retailers & markets' },
    caps: [ { name: 'Wholesale trees', detail: 'Nordmann, Fraser and Norway spruce, 4 ft to 30 ft, netted and graded.' }, { name: 'Event trees', detail: 'Giant trees delivered, installed and lit for towns, hotels and shopping centres.' }, { name: 'Pot-grown trees', detail: 'Living trees in pots, returnable for replanting in January.' } ],
    specs: { moq: '50 trees', lead: 'Cut to order, 3–5 days', regions: 'UK & Ireland', certs: ['British Christmas Tree Growers Association', 'LEAF Marque', 'Plant Healthy certified'] },
    supplies: [ { kind: 'brand', key: 'hollyhock-hampers', what: 'Fresh-cut mini trees for the Big Christmas Hamper' } ],
    cases: [ { title: 'Bath Christmas Market', text: 'Forty-two trees lining the market streets, cut and delivered the same week.' }, { title: 'Replanting programme', text: 'Three trees planted for every tree cut since 1990.' } ],
    feed: [ { sub: 'Season update · 2d', text: 'Wholesale orders for the second December delivery window close on Friday.' }, { sub: 'Farm news · 1w', text: 'Pot-grown trees now available for returnable rental.' } ],
    contact: { person: 'Will Hargreaves, Trade sales', response: 'Replies within 24 hours' } },

  'sugarplum-bakehouse': { key: 'sugarplum-bakehouse', kind: 'business', gw: 'christmas', name: 'Sugarplum Bakehouse', color: '#C62F3A', gradient: RED, img: U('1576665503489-065390b2f490', 900, 500),
    tier: 'Verified', category: 'Food manufacturing', tagline: 'Christmas cakes, puddings and mince pies, baked for retailers.',
    about: { founded: 'Somerset · 1996', story: 'A bakery that bakes Christmas all year. Our cakes mature for twelve weeks and our puddings for a year, and we bake own-label for delis, hamper companies and farm shops.' },
    stats: { years: 30, staff: 120, clients: '85 retailers' },
    caps: [ { name: 'Christmas cakes', detail: 'Matured fruit cakes in six sizes, iced or naked, own-label available.' }, { name: 'Puddings', detail: 'Year-matured puddings in 1 lb and 2 lb, microwave and steam instructions.' }, { name: 'Mince pies', detail: 'All-butter pastry, packs of 6 and 12, frozen or fresh.' } ],
    specs: { moq: '200 units', lead: '4–6 weeks (cakes need 12 weeks to mature)', regions: 'UK', certs: ['BRCGS Food Safety AA', 'SALSA', 'Organic option (Soil Association)'] },
    supplies: [ { kind: 'brand', key: 'hollyhock-hampers', what: 'The Christmas cake and mince pies in every hamper' } ],
    cases: [ { title: 'Hollyhock Hampers', text: 'Twelve thousand cakes a season for the Big Christmas Hamper, each one named on the card.' } ],
    feed: [ { sub: 'Production · 4d', text: 'Final cake batch of the season is in the ovens. Next year’s puddings start maturing in January.' } ],
    contact: { person: 'Grace Okafor, Trade accounts', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('christmas', [
  { gw: 'christmas', zone: 'northpine-ornaments', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Northpine Live · Bauble Blowing, Kendal', desc: 'The Cumbrian workshop is blowing this year’s Heritage Crimson baubles live. Pull up a chair.' },
  { gw: 'christmas', type: 'Event', icon: '🎄', time: 'Dec 3', title: 'Bath Christmas Market: late-night shopping', desc: 'The chalets around the Abbey stay open late. Bath Christmas Market Friends meet by the Abbey at six.' },
  { gw: 'christmas', type: 'Event', icon: '✨', time: 'Nov 28', title: 'Fairy Light Street, the Nutcracker', desc: 'Twenty-three houses, one theme. Lights on at 6pm, everyone welcome. Posted by @fairylight_fran.' },
  { gw: 'christmas', zone: 'northpine-ornaments', type: 'Event', icon: '📅', time: 'Dec 4', title: 'Northpine workshop open evening', desc: 'Watch a bauble blown and painted live, then paint your own. RSVP inside the Northpine Ornaments zone.' },
  { gw: 'christmas', zone: 'kindle-co', type: 'Event', icon: '🕯️', time: 'Dec 6', title: 'Pour your own candle, Bath', desc: 'Choose your scent and pour your own candle in the Kindle & Co studio.' },
  { gw: 'christmas', zone: 'fairisle-frost', type: 'Event', icon: '🧶', time: 'Dec 11', title: 'Christmas Jumper Day', desc: 'Share a photo of your jumper in ChristmasXX and Fairisle & Frost gives £1 per photo to charity.' },
  { gw: 'christmas', type: 'Event', icon: '🎶', time: 'Dec 12', title: 'Carols by candlelight, St Cuthbert’s', desc: 'The Chamber Carollers sing by candlelight in Edinburgh. No tickets, everyone sings.' },
  { gw: 'christmas', zone: 'hollyhock-hampers', type: 'Deadline', icon: '🧺', time: 'Dec 17', title: 'Last order date for Christmas hampers', desc: 'Order Hollyhock hampers by midnight for guaranteed delivery by 20 December.' }
]);
})();
/* ═════════ /CHRISTMASXX ═════════ */
