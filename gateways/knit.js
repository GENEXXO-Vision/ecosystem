/* ═════════ KNITXX — a Hobbies demo gateway (2026-11-20, Sean; build -88) ═════════
   Built like SushiXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (light): oatmeal cream, heather purple, rose. Home sector: Hobbies (KnitXX was homed in Art; Sean's list puts it
   in Hobbies, so GW_HOME is set below). Brands, pros and communities are fictional; places are real. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const HEATHER = 'linear-gradient(135deg,#A855F7,#6B21A8)', ROSE = 'linear-gradient(135deg,#F0ABFC,#BE4BA8)', MOSS = 'linear-gradient(135deg,#9CB58A,#56704A)', OAT = 'linear-gradient(135deg,#E4D3B8,#A88B62)';
GW_HOME.knit = 'hobby';

GATEWAYS.knit = {
  name: 'KnitXX', domain: 'knitxx.com', emoji: '🧶', sector: 'hobby', live: true,
  tagline: 'The Knitting Universe',
  theme: {
    bg: '#FBF7F2', text: '#2A2230', cardBg: '#FFFFFF', cardBorder: 'rgba(107,33,168,.12)',
    headerBg: 'linear-gradient(180deg,#F3E8F8,#FBF7F2)', accent: '#9333EA', accentAlt: '#BE4BA8', dark: false
  },
  gradient: 'linear-gradient(135deg,#6B21A8,#A855F7,#F0ABFC)',
  stats: { members: '4.6M', brands: '3,900+', agents: '58' },
  spaces: ['All Feed', 'Beginners', 'Patterns', 'Yarn', 'Mending', 'Knit Nights'],
  trending: ['#KnitAlong', '#FairIsle', '#VisibleMending'],
  brandZones: [
    { key: 'heather-hank', name: 'Heather & Hank', color: '#9333EA', tier: 'Founding Partner', tag: 'Shetland wool, spun and dyed in Scotland' },
    { key: 'needle-nook', name: 'Needle & Nook', color: '#BE4BA8', tier: 'Brand Zone', tag: 'Needles, hooks and notions that last' },
    { key: 'pattern-post', name: 'Pattern Post', color: '#56704A', tier: 'Brand Zone', tag: 'A new pattern in your inbox every month' },
    { key: 'cast-on-kits', name: 'Cast On Kits', color: '#A88B62', tier: 'Brand Zone', tag: 'Everything for your first make, in one box' }
  ],
  apps: [
    { name: 'Row Counter', color: '#9333EA', desc: 'Count rows and repeats without losing your place', key: 'row-counter', url: 'apps/row-counter.html',
      dev: 'Purl Labs', rating: '4.9', users: '2.1M', perms: ['profile', 'feed'],
      tagline: 'Never lose your place again.',
      about: 'Row Counter keeps count of rows and pattern repeats for every project on your needles. Tap to count, set a reminder for the row where you decrease, and see how far through the pattern you are.',
      features: ['Counts for every project', 'Repeat counter that resets itself', 'Reminders on the rows that matter', 'Progress through the pattern'],
      shots: ['apps/row-counter/shot-1.jpg', 'apps/row-counter/shot-2.jpg', 'apps/row-counter/shot-3.jpg'],
      version: '5.4', size: '9 KB',
      updates: [ { v: '5.4', ago: 3, notes: 'Row reminders for decreases and colour changes.' }, { v: '5.0', ago: 80, notes: 'Repeat counter.' }, { v: '4.2', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@purl_pip', stars: 5, ago: 1, text: 'Finally finished a sleeve without counting on my fingers.' }, { who: '@cable_cath', stars: 5, ago: 8, text: 'The decrease reminders saved my yoke.' }, { who: '@newknitter_nat', stars: 4, ago: 19, text: 'Simple. Exactly what I needed.' } ] },
    { name: 'Yarn Calculator', color: '#BE4BA8', desc: 'How much yarn, and what can you swap it for', key: 'yarn-calc', url: 'apps/yarn-calc.html',
      dev: 'Heather & Hank', rating: '4.8', users: '880K', perms: ['profile', 'feed'],
      tagline: 'Buy the right amount, first time.',
      about: 'Yarn Calculator works out how many balls you need when you swap the pattern’s yarn for another, and checks the weights match. Pick a garment and size for a quick estimate, then add 10% for your tension.',
      features: ['Swap yarns by metres, not balls', 'Yarn weights checked', 'Garment and size estimates', 'Your stash, so you know what you have'],
      shots: ['apps/yarn-calc/shot-1.jpg', 'apps/yarn-calc/shot-2.jpg', 'apps/yarn-calc/shot-3.jpg'],
      version: '3.1', size: '9 KB',
      updates: [ { v: '3.1', ago: 5, notes: 'Your stash.' }, { v: '2.8', ago: 90, notes: 'Garment estimates.' }, { v: '2.2', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@cable_cath', stars: 5, ago: 2, text: 'Swapped a discontinued yarn and had exactly enough.' }, { who: '@stash_queen', stars: 5, ago: 11, text: 'The stash list stops me buying the same blue twice.' }, { who: '@purl_pip', stars: 4, ago: 27, text: 'Want crochet estimates too.' } ] },
    { name: 'Knit Along', color: '#56704A', desc: 'Knit a pattern together, a clue at a time', key: 'knit-along', url: 'apps/knit-along.html',
      dev: 'Pattern Post', rating: '4.8', users: '540K', perms: ['profile', 'feed'],
      tagline: 'One pattern, thousands of needles.',
      about: 'Knit Along releases a pattern a clue at a time, so everyone knits the same section in the same week. Tick off each clue, see how far the group has got, and share your progress photo when you finish a clue.',
      features: ['Weekly clues', 'Tick off as you go', 'See the group’s progress', 'Share each finished clue'],
      shots: ['apps/knit-along/shot-1.jpg', 'apps/knit-along/shot-2.jpg', 'apps/knit-along/shot-3.jpg'],
      version: '2.2', size: '10 KB',
      updates: [ { v: '2.2', ago: 4, notes: 'The Christmas jumper knit-along.' }, { v: '2.0', ago: 70, notes: 'Group progress.' }, { v: '1.5', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@newknitter_nat', stars: 5, ago: 3, text: 'My first jumper, one clue at a time. It worked.' }, { who: '@knitnight_kaz', stars: 5, ago: 12, text: 'Our whole knit night did it together.' }, { who: '@stash_queen', stars: 4, ago: 30, text: 'Love it. Clues could come a day earlier.' } ] }
  ],
  pros: [
    { key: 'morag-flett-knitting', name: 'Morag Flett Knitting School', color: '#9333EA', tag: 'Knitting lessons · beginners, Fair Isle, finishing', role: 'Knitting teacher',
      img: U('1655249493799-9cee4fe983bb', 800, 800), base: 'Edinburgh, UK · and online', langs: 'English', years: 19, rating: '4.9', reviewsN: 612, cur: '£',
      creds: ['Taught knitting for nearly twenty years', 'Learned Fair Isle from her grandmother in Shetland', 'Teaches at UK yarn festivals'],
      about: 'Morag teaches knitting the way she learned it: slowly, with good wool and a cup of tea. Beginners leave with a scarf and the confidence to read a pattern; improvers leave with their first Fair Isle hat.',
      services: [ { id: 'start', name: 'Learn to knit (4 weeks)', dur: '4 × 2 hours', price: 120, desc: 'Cast on to cast off, in a group of six. Wool and needles included.' },
                  { id: 'fairisle', name: 'Fair Isle workshop', dur: 'Full day', price: 95, desc: 'Two colours, one hat, and how to hold a yarn in each hand.' },
                  { id: 'clinic', name: 'Knitting clinic (online)', dur: '30 minutes', price: 25, desc: 'Bring the project that has gone wrong. We will fix it.' } ],
      avail: { days: [2, 3, 4, 6], times: ['10:00', '14:00', '19:00'] },
      reviews: [ { who: '@newknitter_nat', stars: 5, ago: 4, text: 'From never holding needles to a finished scarf in four weeks.' }, { who: '@cable_cath', stars: 5, ago: 15, text: 'The Fair Isle day made it click.' }, { who: '@purl_pip', stars: 5, ago: 38, text: 'Patient, funny and very good.' } ],
      posts: [ { ago: 1, text: 'Dropped a stitch? Don’t panic. Pop a safety pin through it and keep going to the end of the row. Then we ladder it up.' }, { ago: 6, text: 'January beginners course: two places left.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'amara-okoye-designs', name: 'Amara Okoye Designs', color: '#BE4BA8', tag: 'Knitwear patterns · colourful jumpers, cardigans and hats', role: 'Pattern designer',
      img: U('1627130595904-ebeeb6540a93', 800, 800), base: 'Manchester, UK', langs: 'English, Igbo', years: 9, rating: '4.9', reviewsN: 398, cur: '£',
      creds: ['Patterns in 14 sizes, tech-edited', 'Designer of a best-selling yoke cardigan', 'Teaches pattern grading online'],
      about: 'Amara designs bold, colourful knitwear that fits a wide range of bodies: every pattern comes in fourteen sizes and is test-knitted before release. She also runs the online course on writing your own patterns.',
      services: [ { id: 'pattern', name: 'Single pattern', dur: 'Instant download', price: 7, desc: 'Any pattern from the collection, all sizes.' },
                  { id: 'course', name: 'Write your own pattern (course)', dur: '6 weeks online', price: 140, desc: 'From swatch to sizes to a pattern others can knit.' },
                  { id: 'test', name: 'Test-knit coordination', dur: 'Per pattern', price: 260, desc: 'For designers: recruit and run a test knit.' } ],
      avail: { days: [1, 3, 5], times: ['10:00', '13:00', '18:00'] },
      reviews: [ { who: '@stash_queen', stars: 5, ago: 6, text: 'The first pattern that fitted me without changes.' }, { who: '@knitnight_kaz', stars: 5, ago: 18, text: 'Brilliant colourwork charts.' }, { who: '@newknitter_nat', stars: 4, ago: 44, text: 'The course is a lot, in a good way.' } ],
      posts: [ { ago: 2, text: 'Swatch, wash, dry, then measure. A swatch you haven’t washed is a swatch that lies.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'tom-hughes-mending', name: 'Tom Hughes Visible Mending', color: '#56704A', tag: 'Darning and repairs for knitwear · by post and in workshops', role: 'Mender',
      img: U('1764451850143-428a7f9e931d', 800, 800), base: 'Bristol, UK', langs: 'English', years: 7, rating: '4.9', reviewsN: 286, cur: '£',
      creds: ['Repairs over 1,500 jumpers a year', 'Runs mending workshops in Bristol', 'Swiss darning and patching specialist'],
      about: 'Tom mends holes so you can see them: bright darns, neat patches and new elbows that make an old jumper better than new. Post it to him or come and learn to do it yourself.',
      services: [ { id: 'darn', name: 'Darn a hole (by post)', dur: 'About 2 weeks', price: 18, desc: 'Up to a 2cm hole, in a colour you choose. Return post included.' },
                  { id: 'elbows', name: 'New elbows', dur: 'About 3 weeks', price: 45, desc: 'Both elbows reknitted or patched.' },
                  { id: 'workshop', name: 'Mending workshop', dur: '3 hours', price: 40, desc: 'Learn to darn, with a mushroom and wool to keep.' } ],
      avail: { days: [2, 4, 6], times: ['10:00', '14:00'] },
      reviews: [ { who: '@purl_pip', stars: 5, ago: 5, text: 'My dad’s old jumper, saved. The darn is my favourite bit.' }, { who: '@cable_cath', stars: 5, ago: 17, text: 'The workshop was so calming.' }, { who: '@stash_queen', stars: 5, ago: 33, text: 'Perfect colour match on a cashmere hole.' } ],
      posts: [ { ago: 3, text: 'Moths hate cedar and sunshine. Air your knits on a bright day, then fold them away with a cedar block.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'knit-night', name: 'Knit Night', domain: 'knitnight.knitxx.com', color: '#9333EA', img: U('1632649027900-389e810204e6', 900, 500),
      scope: 'Global', where: 'Every sofa with a lamp', members: 318000, online: 5480, tagline: 'Show us what’s on your needles.',
      about: 'Knitters of every level sharing works in progress, finished objects, dropped-stitch rescues and the occasional heroic frog. Kind first, always.',
      rules: ['Credit the designer', 'No pattern piracy', 'Every question is a good question'],
      mods: ['@knitnight_kaz', '@cable_cath'],
      threads: [ { t: 'First jumper: show us yours', by: '@newknitter_nat', tag: 'FINISHED', replies: 1680, ago: 0, votes: 3920 }, { t: 'Christmas jumper knit-along: clue 1 is out', by: '@knitnight_kaz', tag: 'KAL', replies: 742, ago: 1, votes: 1540 }, { t: 'How do you store your stash?', by: '@stash_queen', tag: 'Q&A', replies: 388, ago: 2, votes: 620 }, { t: 'Frogged it after 40 rows. Support group thread', by: '@purl_pip', tag: 'SUPPORT', replies: 512, ago: 3, votes: 1210 } ],
      events: [ { title: 'Knit Night online', day: 2, time: '19:30', where: 'Online' }, { title: 'Knit-along clue 2 release', day: 7, time: '09:00', where: 'Online' } ] },
    { key: 'leeds-knit-natter', name: 'Leeds Knit & Natter', domain: 'leeds.knitxx.com', color: '#56704A', img: U('1641642231157-0849081598a2', 900, 500),
      scope: 'Local', where: 'Leeds', members: 2600, online: 48, tagline: 'Tuesdays, tea and a lot of talking.',
      about: 'A weekly knit night in Leeds city centre, a yarn swap every season and a stall at the Christmas craft fair. Beginners very welcome: someone will always cast on for you.',
      rules: ['Bring something to knit', 'Tea money in the tin', 'Swap, don’t sell'],
      mods: ['@leeds_lou', '@knitnight_kaz'],
      threads: [ { t: 'Christmas craft fair stall: who can help?', by: '@leeds_lou', tag: 'EVENT', replies: 34, ago: 0, votes: 72 }, { t: 'Yarn swap list', by: '@stash_queen', tag: 'SWAP', replies: 58, ago: 1, votes: 90 }, { t: 'Beginners: bring 4mm needles', by: '@leeds_lou', tag: 'TIPS', replies: 16, ago: 2, votes: 40 } ],
      events: [ { title: 'Tuesday knit & natter', day: 4, time: '18:30', where: 'Kirkgate Market café, Leeds' }, { title: 'Christmas craft fair', day: 16, time: '10:00', where: 'Leeds Corn Exchange' } ] }
  ],
  feed: [
    { av: 'KX', avBg: HEATHER, author: 'KnitXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Yarn, patterns, needles, knit nights, mending and the people who teach it. From your first cast-on to your first Fair Isle: knitting, all in one place.',
      img: U('1550376026-7375b92bb318', 800, 600), eng: '♡ 46.2K · 💬 3.8K · ↗ 4.4K' },
    { av: 'NN', avBg: ROSE, author: '@newknitter_nat', sub: 'Beginners · Just now', badge: 'COMMUNITY',
      text: 'Sunday morning, coffee, and row 112 of my very first jumper. Row Counter says I’m 61% of the way there ☕',
      img: U('1541944743827-e04aa6427c33', 800, 600), eng: '♡ 18.4K · 💬 2.2K · ↗ 540' },
    { av: 'HH', avBg: HEATHER, author: 'Heather & Hank', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Winter Shades</b> are here: twelve new colours of Shetland 4-ply, dyed by hand in small batches on the Moray coast.',
      img: U('1700170726155-fe844921b8b3', 800, 600), eng: '♡ 12.6K · 💬 980 · ↗ 1.6K' },
    { av: 'NK', avBg: ROSE, author: 'Needle & Nook', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Birch needles, smooth as anything and warm in the hand. The <b>Interchangeable Set</b> has every size from 3mm to 10mm.',
      img: U('1773747203069-50170091264e', 800, 600), eng: '♡ 5.8K · 💬 420 · ↗ 380' },
    { av: 'GR', avBg: OAT, author: '@grandad_reg', sub: 'Knit Nights · 2h ago', badge: 'COMMUNITY',
      text: 'Eighty-three and still knitting socks for the whole family. My granddaughter taught me magic loop last month. Never too late 🧦',
      img: U('1780564080641-e5869749c72e', 800, 600), eng: '♡ 24.8K · 💬 3.1K · ↗ 1.2K' },
    { av: 'PP', avBg: MOSS, author: 'Pattern Post', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'December’s pattern is a <b>Fair Isle yoke</b> in five colours. Out on Monday, in your inbox.',
      img: U('1611911813383-67769b37a149', 800, 600), eng: '♡ 6.2K · 💬 510 · ↗ 640' },
    { av: 'AO', avBg: ROSE, author: 'Amara Okoye Designs', sub: 'Patterns · 6h ago', badge: 'PRO ZONE',
      text: 'The Rosehip cardigan, now in fourteen sizes. Test-knitted by thirty people on four continents, and it fits every one of them.',
      img: U('1758981400298-78cd18eb6793', 800, 600), eng: '♡ 4.6K · 💬 380 · ↗ 720' }
  ],
  prompts: ['What should I knit first as a complete beginner?', 'How much yarn do I need for a jumper in size M?', 'How do I fix a dropped stitch?', 'Find a knit night near me in Leeds'],
  businesses: ['borders-spinning', 'moray-dyehouse']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'knit', verified: true }, o);
Object.assign(ZONES, {
  'heather-hank': brand({ key: 'heather-hank', name: 'Heather & Hank', color: '#9333EA', gradient: HEATHER, tier: 'Founding Partner',
    tagline: 'Shetland wool, spun and dyed in Scotland', stats: { followers: '204K', content: '1.1K', products: '140' },
    ad: { badge: 'Featured', img: U('1700170726155-fe844921b8b3', 760, 760), hl: 'The Winter Shades.', sub: 'Twelve new colours of Shetland 4-ply.', meta: 'From £6' },
    products: [
      { name: 'Shetland 4-ply (25g)', price: '£6', tag: 'FLAGSHIP', emoji: '🧶', rating: 4.9, reviews: 5240, cat: 'yarn', special: true, desc: 'Pure Shetland wool, spun in the Borders and dyed by hand on the Moray coast. 110m per ball.', features: ['72 colours', 'For Fair Isle and colourwork', 'Grows softer with washing'], review: { who: 'Cath B.', text: 'Sticky in the best way: colourwork stays put.' } },
      { name: 'Winter Shades Colour Pack', price: '£48', tag: 'BESTSELLER', emoji: '🎨', rating: 4.9, reviews: 1860, cat: 'packs', special: true, desc: 'All twelve new colours in one box, enough for a Fair Isle yoke.', features: ['12 × 25g'], review: { who: 'Kaz M.', text: 'Every colour is gorgeous together.' } },
      { name: 'Aran Wool (100g)', price: '£12', emoji: '🐑', rating: 4.8, reviews: 2140, cat: 'yarn', desc: 'A soft, round Aran for cables and cosy jumpers.', features: ['166m per skein'], review: { who: 'Pip L.', text: 'Cables pop beautifully.' } },
      { name: 'Jumper Kit: Fair Isle Yoke', price: '£96', emoji: '🧥', rating: 4.8, reviews: 760, cat: 'packs', desc: 'Yarn for a Fair Isle yoke jumper in your size, with Pattern Post’s December pattern.', features: ['Sizes XS to 4XL'], review: { who: 'Nat O.', text: 'Everything in one box. Brilliant.' } },
      { name: 'Gift Card', price: '£20', emoji: '🎁', rating: 4.9, reviews: 980, cat: 'gifts', desc: 'For the knitter who has everything except more yarn.', features: ['Never expires'], review: { who: 'Lou T.', text: 'Always the right present.' } }
    ],
    shopCats: [ { key: 'yarn', label: 'Yarn', icon: '🧶' }, { key: 'packs', label: 'Packs & kits', icon: '🎨' }, { key: 'gifts', label: 'Gift cards', icon: '🎁' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Twelve <b>Winter Shades</b>, dyed in batches of forty skeins.', img: U('1773590776463-4a0f1c2b79cb', 800, 440), eng: '♡ 12.6K · 💬 980 · ↗ 1.6K', product: 1 },
      { type: 'post', sub: 'At the dyehouse · Yesterday', text: 'Every batch is a little different. We number them, so buy enough from one batch for a whole jumper.', img: U('1557303696-f0a415dc1b3e', 800, 440), eng: '♡ 4.8K · 💬 320' },
      { type: 'community', who: 'Nat O.', whoBg: ROSE, sub: 'Community · 1d', text: 'Is Shetland 4-ply OK for a beginner?', eng: '♡ 240 · 💬 58', reply: 'Hi Nat! It’s lovely to knit with, but the fine yarn and small needles make it slow for a first project. For your first jumper we’d suggest our Aran: thicker yarn, bigger needles, faster progress. Come back to Shetland for your first Fair Isle hat. 🧶' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Heather & Hank Live · Christmas jumper knit-along', when: 'Live now', desc: 'Cast on with us live: clue 1 of the Christmas jumper, with tips from the dyehouse.', registered: 4120, capacity: 9000 } ],
    about: { founded: 'Lerwick · 2008', story: 'A crofting family in Shetland who wanted their own sheep’s wool back from the mill. Now we sell to knitters all over the world, and we joined KnitXX as Founding Partner because our knitters are already here.', milestones: [['2008', 'The first 200 balls'], ['2018', 'Our own dyehouse on the Moray coast'], ['2026', 'Founding Partner on KnitXX']], values: ['Shetland sheep, Scottish mills', 'Small batches', 'Undyed options always'] } }),

  'needle-nook': brand({ key: 'needle-nook', name: 'Needle & Nook', color: '#BE4BA8', gradient: ROSE, tier: 'Brand Zone',
    tagline: 'Needles, hooks and notions that last', stats: { followers: '88.4K', content: '420', products: '96' },
    ad: { badge: 'New', img: U('1773747203069-50170091264e', 760, 760), hl: 'Birch, not bamboo.', sub: 'Interchangeable needles, 3mm to 10mm.', meta: 'From £4' },
    products: [
      { name: 'Interchangeable Needle Set', price: '£68', tag: 'FLAGSHIP', emoji: '🪡', rating: 4.9, reviews: 2980, cat: 'needles', special: true, desc: 'Birch tips in 13 sizes, four cable lengths, in a linen roll.', features: ['3mm to 10mm', 'Sharp, smooth tips'], review: { who: 'Cath B.', text: 'The joins never snag.' } },
      { name: 'Circular Needle (80cm)', price: '£9', tag: 'BESTSELLER', emoji: '⭕', rating: 4.8, reviews: 4120, cat: 'needles', desc: 'Birch tips on a soft, flexible cable.', features: ['All sizes'], review: { who: 'Reg H.', text: 'Perfect for magic loop.' } },
      { name: 'Project Bag', price: '£16', emoji: '👜', rating: 4.8, reviews: 1460, cat: 'bags', desc: 'A drawstring linen bag with a yarn hole and a pocket for the pattern.', features: ['Washable'], review: { who: 'Lou T.', text: 'One for every project now.' } },
      { name: 'Notions Tin', price: '£12', tag: 'SPECIAL', emoji: '📎', rating: 4.9, reviews: 880, cat: 'notions', special: true, desc: 'Stitch markers, tape measure, darning needles and a cable needle in a tin.', features: ['Gift ready'], review: { who: 'Nat O.', text: 'Everything I didn’t know I needed.' } }
    ],
    shopCats: [ { key: 'needles', label: 'Needles', icon: '🪡' }, { key: 'bags', label: 'Bags', icon: '👜' }, { key: 'notions', label: 'Notions', icon: '📎' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Everything for the project in one place: the <b>Project Bag</b>, with a yarn hole and a pocket for the pattern.', img: U('1762955911310-f068a0622703', 800, 440), eng: '♡ 5.8K · 💬 420', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: a fifth off needles', when: 'Nov 27 · All day', desc: 'A fifth off every needle and set, for one day.', registered: 2860, capacity: 7000 } ],
    about: { founded: 'Sheffield · 2014', story: 'A woodturner and a knitter who wanted needles that felt nice to hold. Every tip is turned from FSC birch.', milestones: [['2014', 'The first straight needles'], ['2021', 'The interchangeable set'], ['2026', 'Brand Zone on KnitXX']], values: ['Made to last', 'FSC birch', 'Spare parts for everything'] } }),

  'pattern-post': brand({ key: 'pattern-post', name: 'Pattern Post', color: '#56704A', gradient: MOSS, tier: 'Brand Zone',
    tagline: 'A new pattern in your inbox every month', stats: { followers: '62.1K', content: '310', products: '180' },
    ad: { badge: 'Featured', img: U('1611911813383-67769b37a149', 760, 760), hl: 'December: a Fair Isle yoke.', sub: 'A new pattern every month, from new designers.', meta: 'From £4' },
    products: [
      { name: 'Pattern Club (monthly)', price: '£6', tag: 'FLAGSHIP', emoji: '📬', rating: 4.8, reviews: 3140, cat: 'club', special: true, desc: 'One new pattern a month from an up-and-coming designer, with a video tutorial for the tricky bit.', features: ['Cancel any time', 'All sizes'], review: { who: 'Kaz M.', text: 'I look forward to the first of the month.' } },
      { name: 'Annual Pattern Club', price: '£60', tag: 'BESTSELLER', emoji: '🗓️', rating: 4.9, reviews: 1220, cat: 'club', desc: 'Twelve patterns for the price of ten.', features: ['Gift option'], review: { who: 'Pip L.', text: 'A whole year of makes.' } },
      { name: 'Single Pattern', price: '£4', emoji: '📄', rating: 4.7, reviews: 2860, cat: 'patterns', desc: 'Any back-catalogue pattern.', features: ['Instant download'], review: { who: 'Nat O.', text: 'Clear and well written.' } },
      { name: 'Beginner Bundle', price: '£10', tag: 'SPECIAL', emoji: '🌱', rating: 4.9, reviews: 960, cat: 'patterns', special: true, desc: 'Five patterns that build skills in order: scarf, hat, mitts, socks, jumper.', features: ['With video lessons'], review: { who: 'Reg H.', text: 'The perfect order to learn in.' } }
    ],
    shopCats: [ { key: 'club', label: 'Pattern Club', icon: '📬' }, { key: 'patterns', label: 'Patterns', icon: '📄' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'A sneak peek at December’s <b>Fair Isle yoke</b>.', img: U('1643015862949-5c8d15a4242e', 800, 440), eng: '♡ 6.2K · 💬 510', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'December pattern release', when: 'Dec 1 · 09:00', desc: 'The Fair Isle yoke lands in every inbox, with a live Q&A at lunchtime.', registered: 3420, capacity: 8000 } ],
    about: { founded: 'Glasgow · 2019', story: 'Two technical editors who wanted new designers to get paid fairly. Designers keep 70% of every pattern.', milestones: [['2019', 'The first monthly pattern'], ['2024', '40,000 members'], ['2026', 'Brand Zone on KnitXX']], values: ['Designers paid fairly', 'Every pattern tech-edited', 'Sizes for every body'] } }),

  'cast-on-kits': brand({ key: 'cast-on-kits', name: 'Cast On Kits', color: '#A88B62', gradient: OAT, tier: 'Brand Zone',
    tagline: 'Everything for your first make, in one box', stats: { followers: '71.6K', content: '380', products: '24' },
    ad: { badge: 'Gift', img: U('1668072587819-7b393944b426', 760, 760), hl: 'Learn to knit this Christmas.', sub: 'Yarn, needles, pattern and video lessons, in one box.', meta: 'From £22' },
    products: [
      { name: 'Learn to Knit Kit: Scarf', price: '£28', tag: 'FLAGSHIP', emoji: '🧣', rating: 4.9, reviews: 4460, cat: 'kits', special: true, desc: 'Chunky wool, 8mm needles, a simple pattern and six short video lessons.', features: ['Finished in a weekend', 'Video lessons'], review: { who: 'Nat O.', text: 'My first ever knitting. And I wore it.' } },
      { name: 'Chunky Hat Kit', price: '£22', tag: 'BESTSELLER', emoji: '🧢', rating: 4.8, reviews: 2380, cat: 'kits', desc: 'A chunky hat in an evening, with a pompom maker.', features: ['Six colours'], review: { who: 'Lou T.', text: 'Made three for Christmas presents.' } },
      { name: 'First Jumper Kit', price: '£85', emoji: '🧥', rating: 4.8, reviews: 1140, cat: 'kits', desc: 'A top-down raglan in Aran, with a video for every step.', features: ['Sizes XS to 4XL'], review: { who: 'Pip L.', text: 'It actually fits!' } },
      { name: 'Kids’ Finger Knitting Kit', price: '£12', tag: 'SPECIAL', emoji: '🧒', rating: 4.7, reviews: 680, cat: 'kids', special: true, desc: 'No needles: chunky yarn and a picture guide for ages 6 and up.', features: ['Ages 6+'], review: { who: 'Kaz M.', text: 'Kept my two busy all afternoon.' } }
    ],
    shopCats: [ { key: 'kits', label: 'Kits', icon: '🧣' }, { key: 'kids', label: 'For kids', icon: '🧒' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'The <b>Learn to Knit Kit</b> is our top Christmas gift for the third year running.', img: U('1773499129478-933a7a421f84', 800, 440), eng: '♡ 3.4K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 18 · 23:59', desc: 'Order by midnight on 18 December for delivery before Christmas.', registered: 1240, capacity: 4000 } ],
    about: { founded: 'Bristol · 2017', story: 'A knitting teacher whose beginners kept asking what to buy. So she put it all in a box.', milestones: [['2017', 'The first scarf kit'], ['2023', '200,000 kits sent'], ['2026', 'Brand Zone on KnitXX']], values: ['Beginners first', 'British wool', 'Plastic-free boxes'] } }),

  'borders-spinning': { key: 'borders-spinning', kind: 'business', gw: 'knit', name: 'Borders Spinning Mill', color: '#9333EA', gradient: HEATHER, img: U('1584992236310-6edddc08acff', 900, 500),
    tier: 'Verified', category: 'Wool spinning', tagline: 'Spinning British wool for yarn brands since 1921.',
    about: { founded: 'Galashiels · 1921', story: 'A family mill in the Scottish Borders spinning wool from British farms into yarn for knitting brands, from fifty-kilo runs to full collections.' },
    stats: { years: 105, staff: 86, clients: '140 yarn brands' },
    caps: [ { name: 'Small-batch spinning', detail: 'Runs from 50kg, so small brands can make their own yarn.' }, { name: 'Breed-specific yarns', detail: 'Shetland, Bluefaced Leicester, Jacob and more, kept separate.' }, { name: 'Undyed and natural shades', detail: 'Yarn straight from the sheep, in its own colours.' } ],
    specs: { moq: '50kg', lead: '8 to 12 weeks', regions: 'UK & Europe', certs: ['British Wool approved', 'ISO 14001', 'Living Wage employer'] },
    supplies: [ { kind: 'brand', key: 'heather-hank', what: 'All Shetland 4-ply, spun from Heather & Hank’s own fleece' } ],
    cases: [ { title: 'A first-time yarn brand', text: 'From 60kg of fleece to 2,400 balls of yarn in ten weeks.' } ],
    feed: [ { sub: 'Mill news · 3d', text: 'Our new carding machine handles fleece as small as one sheep’s worth.' }, { sub: 'Notice · 1w', text: 'Spring 2027 spinning slots are filling up.' } ],
    contact: { person: 'Euan Scott, Brand accounts', response: 'Replies within 24 hours' } },

  'moray-dyehouse': { key: 'moray-dyehouse', kind: 'business', gw: 'knit', name: 'Moray Dyehouse', color: '#BE4BA8', gradient: ROSE, img: U('1626779723011-be3a3cf85d50', 900, 500),
    tier: 'Verified', category: 'Yarn dyeing', tagline: 'Hand and small-batch dyeing for yarn brands.',
    about: { founded: 'Findhorn · 2012', story: 'We dye yarn for independent brands in small pots and big vats, with colour matching that keeps a shade the same from batch to batch.' },
    stats: { years: 14, staff: 22, clients: '90 yarn brands' },
    caps: [ { name: 'Hand dyeing', detail: 'Speckles, gradients and semi-solids, by hand.' }, { name: 'Colour matching', detail: 'Your shade, the same every batch.' }, { name: 'Low-impact dyes', detail: 'Dyes that meet strict effluent limits.' } ],
    specs: { moq: '10kg per colour', lead: '3 to 5 weeks', regions: 'UK', certs: ['Low-impact dye certified', 'SEPA-licensed discharge', 'Living Wage employer'] },
    supplies: [ { kind: 'brand', key: 'heather-hank', what: 'The Winter Shades collection' } ],
    cases: [ { title: 'A 72-colour range', text: 'Matched and reproduced every colour across three years of batches.' } ],
    feed: [ { sub: 'Studio · 5d', text: 'Testing a new heather purple for spring. Version 14 is the one.' } ],
    contact: { person: 'Isla Grant, Colour', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('knit', [
  { gw: 'knit', zone: 'heather-hank', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Heather & Hank Live · Christmas jumper knit-along', desc: 'Cast on with the dyehouse team live: clue 1 of the Christmas jumper.' },
  { gw: 'knit', type: 'Event', icon: '🧶', time: 'Nov 22', title: 'Knit Night online', desc: 'Knit Night: bring what’s on your needles and say hello.' },
  { gw: 'knit', zone: 'needle-nook', type: 'Sale', icon: '🪡', time: 'Nov 27', title: 'Needle & Nook Black Friday', desc: 'A fifth off every needle and set, for one day.' },
  { gw: 'knit', zone: 'pattern-post', type: 'Event', icon: '📬', time: 'Dec 1', title: 'December pattern release: Fair Isle yoke', desc: 'Pattern Post: out at 9am, live Q&A at lunchtime.' },
  { gw: 'knit', type: 'Event', icon: '🧵', time: 'Dec 5', title: 'Mending workshop, Bristol', desc: 'Tom Hughes: learn to darn, and take home a darning mushroom.' },
  { gw: 'knit', type: 'Event', icon: '🎄', time: 'Dec 6', title: 'Christmas craft fair, Leeds', desc: 'Leeds Knit & Natter has a stall at the Corn Exchange. Come and say hello.' },
  { gw: 'knit', type: 'Event', icon: '🧥', time: 'Dec 10', title: 'Fair Isle workshop, Edinburgh', desc: 'Morag Flett: two colours, one hat, a full day.' },
  { gw: 'knit', zone: 'cast-on-kits', type: 'Deadline', icon: '🎁', time: 'Dec 18', title: 'Last order for Christmas kits', desc: 'Cast On Kits: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /KNITXX ═════════ */
