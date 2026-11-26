/* ═════════ ELEPHANTXX — a Nature demo gateway (2026-11-26, Sean; build -97) ═════════
   Built with the _tools/README.md recipe. Palette (light): savanna dust, elephant grey, acacia green.
   Home sector: Nature (GW_HOME already says so; listed only there). Every operator, maker, pro and product is
   fictional; places, elephant biology and conservation methods (beehive fences, ear-notch ID) are real.
   Care: ethical wildlife tourism only. No elephant riding, no ivory, no touching wild animals. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const DUST = 'linear-gradient(135deg,#D6A86A,#8A5A2B)', GREY = 'linear-gradient(135deg,#9CA3AF,#4B5563)', ACACIA = 'linear-gradient(135deg,#84CC16,#3F6212)', HONEY = 'linear-gradient(135deg,#FCD34D,#B45309)';

GATEWAYS.elephant = {
  name: 'ElephantXX', domain: 'elephantxx.com', emoji: '🐘', sector: 'nature', live: true,
  tagline: 'The Elephant Universe',
  theme: {
    bg: '#FAF6EE', text: '#2A2118', cardBg: '#FFFFFF', cardBorder: 'rgba(42,33,24,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#FAF6EE)', accent: '#8A5A2B', accentAlt: '#4D7C0F', dark: false
  },
  gradient: 'linear-gradient(135deg,#D6A86A,#8A5A2B,#4B5563)',
  stats: { members: '2.6M', brands: '480+', agents: '24' },
  spaces: ['All Feed', 'Herds', 'Safari', 'Conservation', 'Photography', 'Kids'],
  trending: ['#HerdWatch', '#NewCalf', '#BeehiveFence'],
  brandZones: [
    { key: 'savanna-trails', name: 'Savanna Trails', color: '#8A5A2B', tier: 'Founding Partner', tag: 'Small-group safaris that put elephants first' },
    { key: 'greygiant-prints', name: 'Greygiant Prints', color: '#4B5563', tier: 'Brand Zone', tag: 'Fine-art elephant photography' },
    { key: 'hivefence-honey', name: 'Hivefence Honey', color: '#B45309', tier: 'Brand Zone', tag: 'Honey from the hives that keep elephants off farms' },
    { key: 'ranger-kit', name: 'Ranger Kit', color: '#4D7C0F', tier: 'Brand Zone', tag: 'Binoculars and field gear for wildlife watchers' }
  ],
  apps: [
    { name: 'Ear ID', color: '#8A5A2B', desc: 'Tell elephants apart by their ears', key: 'ear-id', url: 'apps/ear-id.html',
      dev: 'Savanna Trails', rating: '4.9', users: '1.2M', perms: ['profile', 'feed'],
      tagline: 'Every ear is a fingerprint.',
      about: 'Ear ID teaches the method researchers use: the notches, holes and tears in an elephant’s ears, and the shape of its tusks. Practise on a sample herd, then try to name each one.',
      features: ['Learn ear notches', 'A sample herd of eight', 'Spot-the-elephant game', 'Share your score'],
      shots: ['apps/ear-id/shot-1.jpg', 'apps/ear-id/shot-2.jpg', 'apps/ear-id/shot-3.jpg'],
      version: '3.1', size: '9 KB',
      updates: [ { v: '3.1', ago: 2, notes: 'Spot-the-elephant game.' }, { v: '2.6', ago: 80, notes: 'Tusk shapes.' }, { v: '1.9', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@herd_watcher_hana', stars: 5, ago: 1, text: 'I named Nashipai on our game drive before the guide did.' }, { who: '@daniel_lemayian_guide', stars: 5, ago: 14, text: 'Exactly how we learn them.' }, { who: '@wild_lens_will', stars: 4, ago: 37, text: 'Clever and kind.' } ] },
    { name: 'Sighting Log', color: '#4D7C0F', desc: 'Record every elephant you see', key: 'sighting-log', url: 'apps/sighting-log.html',
      dev: 'Ranger Kit', rating: '4.8', users: '760K', perms: ['profile', 'feed'],
      tagline: 'Where, when, how many.',
      about: 'Sighting Log keeps your safari notes: where you were, how big the herd was, calves, behaviour and your photos’ numbers. Your trips add up to a life list.',
      features: ['Herd size and calves', 'Behaviour notes', 'Trip by trip', 'Share a sighting'],
      shots: ['apps/sighting-log/shot-1.jpg', 'apps/sighting-log/shot-2.jpg', 'apps/sighting-log/shot-3.jpg'],
      version: '2.4', size: '9 KB',
      updates: [ { v: '2.4', ago: 3, notes: 'Trip by trip.' }, { v: '1.9', ago: 70, notes: 'Behaviour notes.' }, { v: '1.3', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@wild_lens_will', stars: 5, ago: 2, text: 'Matches my photos to sightings perfectly.' }, { who: '@herd_watcher_hana', stars: 5, ago: 19, text: 'My kids fill it in every evening.' }, { who: '@helen_marsh_elephants', stars: 4, ago: 41, text: 'Good habits for future scientists.' } ] },
    { name: 'Trunk Quiz', color: '#B45309', desc: 'Ten elephant questions a day', key: 'trunk-quiz', url: 'apps/trunk-quiz.html',
      dev: 'Hivefence Honey', rating: '4.8', users: '980K', perms: ['profile', 'feed'],
      tagline: 'How much do you know?',
      about: 'Trunk Quiz asks ten questions a day about African and Asian elephants: herds, matriarchs, trunks, ears and how people and elephants share land.',
      features: ['Ten questions a day', 'The story behind each answer', 'Your best score', 'Share your score'],
      shots: ['apps/trunk-quiz/shot-1.jpg', 'apps/trunk-quiz/shot-2.jpg', 'apps/trunk-quiz/shot-3.jpg'],
      version: '2.0', size: '9 KB',
      updates: [ { v: '2.0', ago: 1, notes: 'Stories behind each answer.' }, { v: '1.6', ago: 60, notes: 'Asian elephants.' }, { v: '1.1', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@herd_watcher_hana', stars: 5, ago: 1, text: 'The beehive question got my whole family.' }, { who: '@helen_marsh_elephants', stars: 5, ago: 22, text: 'Accurate. I checked.' }, { who: '@wild_lens_will', stars: 4, ago: 46, text: 'Great on a long drive.' } ] }
  ],
  pros: [
    { key: 'daniel-lemayian-guide', name: 'Daniel Lemayian Safari Guiding', color: '#8A5A2B', tag: 'Walking and driving safaris in northern Kenya', role: 'Safari guide',
      img: U('1580552309834-9a9b1de80492', 800, 800), base: 'Samburu, Kenya', langs: 'English, Swahili, Samburu', years: 18, rating: '5.0', reviewsN: 412, cur: '£',
      creds: ['Senior guide qualification', 'Grew up herding beside elephants', 'Trains young guides from his community'],
      about: 'Daniel has guided in Samburu for eighteen years and knows the local herds by name. His safaris keep a respectful distance and let the elephants decide how close.',
      services: [ { id: 'drive', name: 'Private game drive', dur: 'Half a day', price: 140, desc: 'Up to six people, with Daniel.' },
                  { id: 'walk', name: 'Guided bush walk', dur: '3 hours', price: 80, desc: 'Tracks, plants and stories, on foot.' },
                  { id: 'plan', name: 'Safari planning call', dur: '45 minutes', price: 40, desc: 'When to come, where to stay, what to bring.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6], times: ['06:00', '15:30'] },
      reviews: [ { who: '@herd_watcher_hana', stars: 5, ago: 3, text: 'He switched the engine off and let the herd walk round us.' }, { who: '@wild_lens_will', stars: 5, ago: 25, text: 'Knew exactly where the light would be.' }, { who: '@helen_marsh_elephants', stars: 5, ago: 52, text: 'The best guide I’ve worked with.' } ],
      posts: [ { ago: 1, text: 'If an elephant flaps its ears and stares, it’s asking for space. Give it. A good sighting is one the elephant doesn’t mind.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'arjun-nair-wildlife', name: 'Arjun Nair Wildlife Photography', color: '#4B5563', tag: 'Wildlife photography trips and workshops', role: 'Wildlife photographer',
      img: U('1628600881785-20238ebee731', 800, 800), base: 'Bristol, UK · and in the field', langs: 'English, Malayalam', years: 15, rating: '4.9', reviewsN: 268, cur: '£',
      creds: ['Fifteen years photographing elephants in Africa and India', 'Exhibited in UK galleries', 'Teaches ethical wildlife photography'],
      about: 'Arjun photographs elephants in Kenya and southern India. His workshops teach patience, light and the rule that the animal always comes first.',
      services: [ { id: 'review', name: 'Portfolio review', dur: '60 minutes', price: 70, desc: 'Your wildlife pictures, honestly critiqued.' },
                  { id: 'workshop', name: 'Photo day at a UK safari park', dur: 'One day', price: 160, desc: 'Long lenses, light and patience.' },
                  { id: 'trip', name: 'Kenya photo safari', dur: 'Ten days', price: 4800, desc: 'Small group, with Arjun.' } ],
      avail: { days: [2, 3, 4, 6], times: ['09:00', '14:00'] },
      reviews: [ { who: '@wild_lens_will', stars: 5, ago: 2, text: 'My pictures went from snapshots to portraits.' }, { who: '@herd_watcher_hana', stars: 5, ago: 28, text: 'Patient and generous with his tips.' }, { who: '@daniel_lemayian_guide', stars: 5, ago: 55, text: 'He never pushes the animals.' } ],
      posts: [ { ago: 2, text: 'Get low, wait for the dust and the late light. The best elephant pictures take an afternoon of sitting still.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'helen-marsh-elephants', name: 'Dr Helen Marsh Elephant Talks', color: '#4D7C0F', tag: 'Talks and courses on elephant behaviour', role: 'Elephant behaviour scientist',
      img: U('1758685848177-93817e9ad5a2', 800, 800), base: 'Edinburgh, UK · and online', langs: 'English', years: 22, rating: '4.9', reviewsN: 214, cur: '£',
      creds: ['PhD on elephant family behaviour', 'Twenty years of field research', 'Former university lecturer'],
      about: 'Helen spent two decades following elephant families. She gives talks for schools, clubs and travellers, and runs short online courses on how elephants think and live.',
      services: [ { id: 'talk', name: 'Talk for your group', dur: '60 minutes', price: 150, desc: 'Schools, clubs and societies.' },
                  { id: 'course', name: 'Elephant minds: online course', dur: 'Four evenings', price: 90, desc: 'Families, memory and communication.' },
                  { id: 'trip', name: 'Pre-safari briefing', dur: '45 minutes', price: 45, desc: 'What to look for, before you go.' } ],
      avail: { days: [1, 2, 3, 4], times: ['16:00', '19:00'] },
      reviews: [ { who: '@herd_watcher_hana', stars: 5, ago: 4, text: 'Our safari meant so much more after her briefing.' }, { who: '@wild_lens_will', stars: 5, ago: 31, text: 'Fascinating course.' }, { who: '@daniel_lemayian_guide', stars: 5, ago: 58, text: 'She understands the herds deeply.' } ],
      posts: [ { ago: 3, text: 'Elephants rumble to each other below the range we can hear, and the sound carries for kilometres through the ground.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'herd-watchers', name: 'Herd Watchers', domain: 'herd.elephantxx.com', color: '#8A5A2B', img: U('1785064361847-3f8c9dec1591', 900, 500),
      scope: 'Global', where: 'Wherever elephants roam', members: 412000, online: 4860, tagline: 'Every herd has a story.',
      about: 'People who love elephants: sightings, photos, new calves, conservation news and safari advice, always with the elephants’ welfare first.',
      rules: ['No riding, no ivory, no selfies with captive elephants', 'Never share live locations of herds', 'Kindness to beginners'],
      mods: ['@herd_watcher_hana', '@wild_lens_will'],
      threads: [ { t: 'Your first wild elephant: where and when?', by: '@herd_watcher_hana', tag: 'STORIES', replies: 2240, ago: 0, votes: 4120 }, { t: 'How to choose an ethical safari', by: '@wild_lens_will', tag: 'ADVICE', replies: 1180, ago: 1, votes: 2640 }, { t: 'Best calf photos of the year', by: '@herd_watcher_hana', tag: 'PHOTOS', replies: 1460, ago: 2, votes: 3380 }, { t: 'Beehive fences: does anyone know a farm using them?', by: '@wild_lens_will', tag: 'CONSERVATION', replies: 520, ago: 3, votes: 1180 } ],
      events: [ { title: 'Live waterhole watch: chat along', day: 7, time: '16:00', where: 'Online' }, { title: 'Ask a guide: planning your first safari', day: 19, time: '19:30', where: 'Online' } ] },
    { key: 'manchester-wildlife-talks', name: 'Manchester Wildlife Talks', domain: 'manchester.elephantxx.com', color: '#4D7C0F', img: U('1515586838455-8f8f940d6853', 900, 500),
      scope: 'Local', where: 'Manchester', members: 1840, online: 42, tagline: 'The wild world, in a Manchester pub.',
      about: 'Wildlife lovers in Manchester: monthly talks from scientists, guides and photographers, fundraising quizzes and a pint after.',
      rules: ['Everyone welcome', 'Animal welfare first', 'Be kind to newcomers'],
      mods: ['@herd_watcher_hana', '@helen_marsh_elephants'],
      threads: [ { t: 'December talk: how elephants remember', by: '@helen_marsh_elephants', tag: 'TALK', replies: 58, ago: 0, votes: 124 }, { t: 'Christmas quiz teams', by: '@herd_watcher_hana', tag: 'QUIZ', replies: 44, ago: 1, votes: 90 }, { t: 'Photo exhibition volunteers', by: '@herd_watcher_hana', tag: 'VOLUNTEER', replies: 26, ago: 2, votes: 54 } ],
      events: [ { title: 'Talk: how elephants remember', day: 12, time: '19:00', where: 'Manchester' }, { title: 'Christmas wildlife quiz', day: 21, time: '19:30', where: 'Manchester' } ] }
  ],
  feed: [
    { av: 'EX', avBg: DUST, author: 'ElephantXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'The largest animals on land, led by grandmothers with long memories. Watch herds, plan an ethical safari, learn how they think and meet the people keeping them safe. Elephants, all in one place.',
      img: U('1759483412972-dcfcadf6ccec', 800, 600), eng: '♡ 52.6K · 💬 4.4K · ↗ 6.8K' },
    { av: 'HW', avBg: ACACIA, author: '@herd_watcher_hana', sub: 'Herds · Just now', badge: 'COMMUNITY',
      text: 'A calf no taller than its mum’s knee, keeping up at the back of the herd. We sat with the engine off for twenty minutes and nobody said a word 🐘',
      img: U('1526226128118-9ef71fc2f34b', 800, 600), eng: '♡ 18.2K · 💬 2.1K · ↗ 1.4K' },
    { av: 'ST', avBg: DUST, author: 'Savanna Trails', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: the afternoon waterhole, streamed from our hide in Samburu. Three families are coming in to drink. Watch from home with <b>Savanna Trails</b>.',
      img: U('1777794949570-4b56da4348b7', 800, 600), eng: '♡ 31.4K · 💬 3.8K · ↗ 4.2K' },
    { av: 'GP', avBg: GREY, author: 'Greygiant Prints', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Storm light, red dust, one bull. <b>Storm Bull</b>, our print of the season, in three sizes.',
      img: U('1603483080228-04f2313d9f10', 800, 600), eng: '♡ 11.6K · 💬 820 · ↗ 1.1K' },
    { av: 'WL', avBg: GREY, author: '@wild_lens_will', sub: 'Photography · 2h ago', badge: 'COMMUNITY',
      text: 'Black and white suits elephants. Two hours at the waterhole and this was the frame: trunks up, dust flying, everyone drinking at once.',
      img: U('1517486430290-35657bdcef51', 800, 600), eng: '♡ 9.8K · 💬 760 · ↗ 520' },
    { av: 'HH', avBg: HONEY, author: 'Hivefence Honey', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Elephants avoid bees. Farmers hang hives along their fences, the crops stay safe and the honey comes to you. <b>Hivefence Wildflower Honey</b>.',
      img: U('1505148230895-d9a785a555fa', 800, 600), eng: '♡ 7.4K · 💬 540 · ↗ 880' },
    { av: 'DL', avBg: DUST, author: 'Daniel Lemayian Safari Guiding', sub: 'Safari · 6h ago', badge: 'PRO ZONE',
      text: 'This morning’s drive. We stopped, she crossed, we waited until the whole family was through. Their road first, always.',
      img: U('1765706729543-348de9e073b1', 800, 600), eng: '♡ 6.2K · 💬 410 · ↗ 480' }
  ],
  prompts: ['How do I choose an ethical safari?', 'Why do elephants follow the oldest female?', 'What is the difference between African and Asian elephants?', 'How do beehive fences protect farms from elephants?'],
  businesses: ['acacia-camps', 'trackwise-collars']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'elephant', verified: true }, o);
Object.assign(ZONES, {
  'savanna-trails': brand({ key: 'savanna-trails', name: 'Savanna Trails', color: '#8A5A2B', gradient: DUST, tier: 'Founding Partner',
    tagline: 'Small-group safaris that put elephants first', stats: { followers: '524K', content: '1.1K', products: '12' },
    ad: { badge: 'Featured', img: U('1779925772662-620c4b17eaac', 760, 760), hl: 'Meet the herd. Leave no trace.', sub: 'Small-group safaris with local guides.', meta: 'From £2,890' },
    products: [
      { name: 'Samburu Elephant Safari', price: 'From £2,890', tag: 'FLAGSHIP', emoji: '🐘', rating: 4.9, reviews: 3240, cat: 'safaris', special: true, desc: 'Seven nights with local guides, small camps and the Samburu herds.', features: ['Six guests per vehicle', 'Community-owned camps'], review: { who: 'Hana T.', text: 'Life-changing, and the guides put the elephants first every time.' } },
      { name: 'Family Safari', price: 'From £2,190', tag: 'BESTSELLER', emoji: '👨‍👩‍👧', rating: 4.9, reviews: 1860, cat: 'safaris', desc: 'Shorter drives, junior ranger lessons, pools at camp.', features: ['Ages 6 and up'], review: { who: 'Will R.', text: 'The kids still talk about the calves.' } },
      { name: 'Waterhole Live Pass', price: '£4 / month', emoji: '📺', rating: 4.8, reviews: 6420, cat: 'live', desc: 'Watch our hide cameras live, with guide commentary.', features: ['Cancel any time'], review: { who: 'Helen M.', text: 'My students watch every Friday.' } },
      { name: 'Adopt-a-Guide Gift', price: '£35', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 980, cat: 'live', special: true, desc: 'Helps train a young guide from a local community.', features: ['Certificate and updates'], review: { who: 'Arjun N.', text: 'A gift that does good.' } }
    ],
    shopCats: [ { key: 'safaris', label: 'Safaris', icon: '🐘' }, { key: 'live', label: 'Live & gifts', icon: '📺' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'The first family on the move this afternoon, heading for the waterhole as the light turns gold. Join us on the <b>Samburu Elephant Safari</b>.', img: U('1759213997390-da57e76726f9', 800, 440), eng: '♡ 31.4K · 💬 3.8K · ↗ 4.2K', product: 0 },
      { type: 'post', sub: 'Game drive · Yesterday', text: 'Engine off, voices low, cameras down for a moment. How every <b>Family Safari</b> drive ends.', img: U('1544211412-2a32426e7fd5', 800, 440), eng: '♡ 8.6K · 💬 520', product: 1 },
      { type: 'community', who: 'Hana T.', whoBg: ACACIA, sub: 'Community · 1d', text: 'Do you offer elephant rides or bathing?', eng: '♡ 840 · 💬 260', reply: 'Hi Hana! Never. Riding and bathing elephants harms them, so we only watch wild herds from a respectful distance, and we don’t work with any venue that offers rides. 🐘' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Savanna Trails Live · the afternoon waterhole', when: 'Live now', desc: 'Three elephant families come in to drink, streamed from our hide in Samburu.', registered: 12480, capacity: 30000 } ],
    about: { founded: 'Nairobi and Bristol · 2009', story: 'A Kenyan guide and a British zoologist who wanted safaris that paid communities and left herds undisturbed. We joined ElephantXX as Founding Partner because elephant lovers deserve honest travel.', milestones: [['2009', 'Founded'], ['2018', 'Community-owned camps'], ['2026', 'Founding Partner on ElephantXX']], values: ['Elephants first', 'Local guides, local camps', 'No riding, ever'] } }),

  'greygiant-prints': brand({ key: 'greygiant-prints', name: 'Greygiant Prints', color: '#4B5563', gradient: GREY, tier: 'Brand Zone',
    tagline: 'Fine-art elephant photography', stats: { followers: '142K', content: '620', products: '40' },
    ad: { badge: 'Gift', img: U('1557050543-4d5f4e07ef46', 760, 760), hl: 'A giant on your wall.', sub: 'Fine-art elephant prints, signed.', meta: 'From £45' },
    products: [
      { name: 'Storm Bull Print', price: '£120', tag: 'FLAGSHIP', emoji: '🖼️', rating: 4.9, reviews: 860, cat: 'prints', special: true, desc: 'A lone bull in storm light, on cotton rag paper.', features: ['Signed and numbered', 'Three sizes'], review: { who: 'Will R.', text: 'Even better in person.' } },
      { name: 'Matriarch Print', price: '£95', tag: 'BESTSELLER', emoji: '🐘', rating: 4.9, reviews: 1240, cat: 'prints', desc: 'An old female leading her family home.', features: ['Framed or unframed'], review: { who: 'Hana T.', text: 'Above our sofa now.' } },
      { name: 'Herd Calendar 2027', price: '£18', emoji: '📅', rating: 4.8, reviews: 2140, cat: 'gifts', desc: 'Twelve months, twelve families.', features: ['Recycled paper'], review: { who: 'Helen M.', text: 'My annual treat.' } },
      { name: 'Card Pack', price: '£12', tag: 'SPECIAL', emoji: '💌', rating: 4.8, reviews: 960, cat: 'gifts', special: true, desc: 'Eight cards, blank inside.', features: ['10% to elephant conservation'], review: { who: 'Arjun N.', text: 'Lovely quality.' } }
    ],
    shopCats: [ { key: 'prints', label: 'Prints', icon: '🖼️' }, { key: 'gifts', label: 'Gifts', icon: '💌' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Dust, ears wide, coming straight on. The <b>Matriarch Print</b>.', img: U('1507461476191-0ed4f9f18533', 800, 440), eng: '♡ 11.6K · 💬 820', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: 25% off prints', when: 'Nov 27 · All day', desc: 'A quarter off every print, one day only.', registered: 1820, capacity: 4500 } ],
    about: { founded: 'Bristol · 2014', story: 'Three wildlife photographers who print what they love and give a share to conservation.', milestones: [['2014', 'The first prints'], ['2021', 'The calendar'], ['2026', 'Brand Zone on ElephantXX']], values: ['Ethical photography only', 'Printed in Bristol', 'A share to conservation'] } }),

  'hivefence-honey': brand({ key: 'hivefence-honey', name: 'Hivefence Honey', color: '#B45309', gradient: HONEY, tier: 'Brand Zone',
    tagline: 'Honey from the hives that keep elephants off farms', stats: { followers: '96.4K', content: '340', products: '14' },
    ad: { badge: 'New', img: U('1581852017103-68ac65514cf7', 760, 760), hl: 'Bees keep the peace.', sub: 'Honey from beehive fences on Kenyan farms.', meta: 'From £9' },
    products: [
      { name: 'Hivefence Wildflower Honey', price: '£12', tag: 'FLAGSHIP', emoji: '🍯', rating: 4.9, reviews: 2860, cat: 'honey', special: true, desc: 'Raw honey from hives on farm fences, where elephants pass by.', features: ['340 g jar', 'Fair price to farmers'], review: { who: 'Hana T.', text: 'Delicious, and it does real good.' } },
      { name: 'Acacia Honey', price: '£14', tag: 'BESTSELLER', emoji: '🌼', rating: 4.8, reviews: 1460, cat: 'honey', desc: 'Light and floral, from acacia blossom.', features: ['340 g jar'], review: { who: 'Helen M.', text: 'My favourite honey, full stop.' } },
      { name: 'Beeswax Candle', price: '£9', emoji: '🕯️', rating: 4.7, reviews: 640, cat: 'gifts', desc: 'Hand-poured from hive wax.', features: ['Burns 20 hours'], review: { who: 'Will R.', text: 'Smells wonderful.' } },
      { name: 'Sponsor a Hive', price: '£40', tag: 'SPECIAL', emoji: '🐝', rating: 4.9, reviews: 860, cat: 'gifts', special: true, desc: 'A new hive on a farm fence, with photos and a jar.', features: ['Updates through the year'], review: { who: 'Arjun N.', text: 'The best present I gave this year.' } }
    ],
    shopCats: [ { key: 'honey', label: 'Honey', icon: '🍯' }, { key: 'gifts', label: 'Gifts', icon: '🐝' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'A family walks the long way round, past the farm and its humming fence. <b>Sponsor a Hive</b> to add another.', img: U('1481464904474-a575a33b44a0', 800, 440), eng: '♡ 5.2K · 💬 360', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: hive gift sets', when: 'Nov 27 · All day', desc: 'A free candle with every Sponsor a Hive, one day only.', registered: 980, capacity: 3000 } ],
    about: { founded: 'Nanyuki · 2016', story: 'A co-operative of farmers who found that hives on their fences kept elephants away, and that the honey sold.', milestones: [['2016', 'The first hive fence'], ['2022', '1,000 hives'], ['2026', 'Brand Zone on ElephantXX']], values: ['Fair prices to farmers', 'Elephants and farms, side by side', 'Raw, unblended honey'] } }),

  'ranger-kit': brand({ key: 'ranger-kit', name: 'Ranger Kit', color: '#4D7C0F', gradient: ACACIA, tier: 'Brand Zone',
    tagline: 'Binoculars and field gear for wildlife watchers', stats: { followers: '68.2K', content: '260', products: '46' },
    ad: { badge: 'Featured', img: U('1575187105891-be9b5d30cecd', 760, 760), hl: 'See every wrinkle.', sub: 'Binoculars and kit for safari and home.', meta: 'From £19' },
    products: [
      { name: 'Ranger 10x42 Binoculars', price: '£189', tag: 'FLAGSHIP', emoji: '🔭', rating: 4.8, reviews: 1860, cat: 'optics', special: true, desc: 'Bright, waterproof and light enough for a long day.', features: ['Ten-year warranty', 'Dust-sealed'], review: { who: 'Hana T.', text: 'Saw the notches in her ears from 200 metres.' } },
      { name: 'Safari Field Jacket', price: '£89', tag: 'BESTSELLER', emoji: '🧥', rating: 4.7, reviews: 1240, cat: 'clothing', desc: 'Neutral colours, lots of pockets, light as a shirt.', features: ['Insect-repellent fabric'], review: { who: 'Will R.', text: 'Every pocket has a job.' } },
      { name: 'Beanbag Camera Rest', price: '£29', emoji: '🎒', rating: 4.8, reviews: 960, cat: 'optics', desc: 'Steadies a long lens on a vehicle door.', features: ['Fill on arrival'], review: { who: 'Arjun N.', text: 'Essential on game drives.' } },
      { name: 'Junior Ranger Kit', price: '£19', tag: 'SPECIAL', emoji: '🧒', rating: 4.9, reviews: 1460, cat: 'clothing', special: true, desc: 'Kids’ binoculars, a notebook and a field guide.', features: ['Ages 5 to 11'], review: { who: 'Helen M.', text: 'Perfect for little scientists.' } }
    ],
    shopCats: [ { key: 'optics', label: 'Optics', icon: '🔭' }, { key: 'clothing', label: 'Clothing', icon: '🧥' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Three generations crossing the grass. Through the <b>Ranger 10x42</b> you’ll see every wrinkle.', img: U('1582292060813-09aef839c627', 800, 440), eng: '♡ 4.6K · 💬 300', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Webinar: packing for your first safari', when: 'Dec 3 · 19:00', desc: 'What to bring, what to leave, with live Q&A.', registered: 720, capacity: 2000 } ],
    about: { founded: 'Kendal · 2011', story: 'Lake District walkers who started making kit for their own safaris.', milestones: [['2011', 'The first binoculars'], ['2020', 'Junior Ranger Kit'], ['2026', 'Brand Zone on ElephantXX']], values: ['Built to last', 'Repairs for life', 'A share to rangers'] } }),

  'acacia-camps': { key: 'acacia-camps', kind: 'business', gw: 'elephant', name: 'Acacia Camps', color: '#8A5A2B', gradient: DUST, img: U('1528732533941-ffd7083d5dfe', 900, 500),
    tier: 'Verified', category: 'Eco-camp building and management', tagline: 'Light-footprint camps, owned by communities.',
    about: { founded: 'Nanyuki · 2007', story: 'We design, build and run tented camps on community land, solar-powered and built so they can be taken away without a trace.' },
    stats: { years: 19, staff: 240, clients: '22 camps' },
    caps: [ { name: 'Camp design', detail: 'Tents, solar and water.' }, { name: 'Training', detail: 'Staff from the local community.' }, { name: 'Running', detail: 'Day to day, with the landowners.' } ],
    specs: { moq: 'One camp', lead: '6 to 18 months', regions: 'East Africa', certs: ['Solar-powered camps', 'Community ownership', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'savanna-trails', what: 'Builds and runs Savanna Trails’ camps' } ],
    cases: [ { title: 'A camp the community owns', text: 'Twelve tents, all solar, owned by a Samburu conservancy.' } ],
    feed: [ { sub: 'Camp · 3d', text: 'New water tanks before the dry season.' } ],
    contact: { person: 'Grace Wanjiru, Projects', response: 'Replies within two working days' } },

  'trackwise-collars': { key: 'trackwise-collars', kind: 'business', gw: 'elephant', name: 'Trackwise Collars', color: '#4B5563', gradient: GREY, img: U('1563994798145-aac79dece602', 900, 500),
    tier: 'Verified', category: 'Wildlife tracking technology', tagline: 'GPS collars that help herds and farms share land.',
    about: { founded: 'Cambridge · 2013', story: 'We build GPS tracking collars for elephant research, and alerts that warn farmers when a herd is heading their way.' },
    stats: { years: 13, staff: 60, clients: '40 research teams' },
    caps: [ { name: 'Collars', detail: 'Five years on one battery.' }, { name: 'Alerts', detail: 'A text to farmers before a herd arrives.' }, { name: 'Data', detail: 'Maps of where herds really go.' } ],
    specs: { moq: 'Five collars', lead: '2 to 4 months', regions: 'Africa and Asia', certs: ['Fitted only by wildlife vets', 'Research permits checked', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'hivefence-honey', what: 'Herd alerts for Hivefence farms' } ],
    cases: [ { title: 'A corridor mapped', text: 'Two years of tracking showed where to leave a gap between farms.' } ],
    feed: [ { sub: 'Lab · 5d', text: 'A lighter collar, tested before the next fitting season.' } ],
    contact: { person: 'Dr Femi Adeyemi, Research', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('elephant', [
  { gw: 'elephant', zone: 'savanna-trails', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Savanna Trails Live · the afternoon waterhole', desc: 'Three elephant families come in to drink, streamed from a hide in Samburu.' },
  { gw: 'elephant', zone: 'greygiant-prints', type: 'Sale', icon: '🖼️', time: 'Nov 27', title: 'Greygiant Black Friday', desc: '25% off every elephant print.' },
  { gw: 'elephant', zone: 'hivefence-honey', type: 'Sale', icon: '🐝', time: 'Nov 27', title: 'Hivefence Black Friday', desc: 'A free candle with every Sponsor a Hive.' },
  { gw: 'elephant', zone: 'ranger-kit', type: 'Event', icon: '🎒', time: 'Dec 3', title: 'Webinar: packing for your first safari', desc: 'What to bring and what to leave, with Ranger Kit.' },
  { gw: 'elephant', type: 'Event', icon: '💧', time: 'Dec 3', title: 'Live waterhole watch: chat along', desc: 'Herd Watchers watch the waterhole together.' },
  { gw: 'elephant', type: 'Event', icon: '🎤', time: 'Dec 8', title: 'Talk: how elephants remember, Manchester', desc: 'Manchester Wildlife Talks hears from an elephant scientist.' },
  { gw: 'elephant', type: 'Event', icon: '🧭', time: 'Dec 15', title: 'Ask a guide: planning your first safari', desc: 'Herd Watchers put your questions to a safari guide.' },
  { gw: 'elephant', type: 'Event', icon: '🎄', time: 'Dec 17', title: 'Christmas wildlife quiz, Manchester', desc: 'Manchester Wildlife Talks’ festive fundraiser.' }
]);
})();
/* ═════════ /ELEPHANTXX ═════════ */
