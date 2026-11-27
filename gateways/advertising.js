/* ═════════ ADVERTISINGXX — a Marketing demo gateway (2026-11-27, Sean; build -98) ═════════
   Built with the _tools/README.md recipe. Palette (dark): night street, poster-light orange, studio violet.
   Home sector: Marketing (listed only there). Every agency, maker, pro and product is fictional; places are real.
   Tone: craft and honesty: ads that respect people, are clearly ads and never mislead. Figures in apps are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const POSTER = 'linear-gradient(135deg,#FDBA74,#C2410C)', VIOLET = 'linear-gradient(135deg,#A78BFA,#5B21B6)', INK = 'linear-gradient(135deg,#475569,#0F172A)', PINK = 'linear-gradient(135deg,#F9A8D4,#BE185D)';

GATEWAYS.advertising = {
  name: 'AdvertisingXX', domain: 'advertisingxx.com', emoji: '📣', sector: 'marketing', live: true,
  tagline: 'The Advertising Universe',
  theme: {
    bg: '#0E0B14', text: '#F4EFFA', cardBg: 'rgba(255,255,255,.05)', cardBorder: 'rgba(255,255,255,.09)',
    headerBg: 'linear-gradient(180deg,#1A1424,#0E0B14)', accent: '#FB923C', accentAlt: '#A78BFA', dark: true
  },
  gradient: 'linear-gradient(135deg,#FB923C,#BE185D,#5B21B6)',
  stats: { members: '2.2M', brands: '960+', agents: '30' },
  spaces: ['All Feed', 'Creative', 'Outdoor', 'Media', 'Craft', 'Careers'],
  trending: ['#PosterOfTheWeek', '#WriteItShorter', '#ClearlyAnAd'],
  brandZones: [
    { key: 'bigboard-media', name: 'Bigboard Media', color: '#FB923C', tier: 'Founding Partner', tag: 'Poster sites for local businesses, bought by the week' },
    { key: 'lumen-studios', name: 'Lumen Studios', color: '#A78BFA', tier: 'Brand Zone', tag: 'Photo and film studios to hire by the hour' },
    { key: 'inkwell-print', name: 'Inkwell Print', color: '#F472B6', tier: 'Brand Zone', tag: 'Posters, leaflets and shop windows, printed well' },
    { key: 'clearcopy', name: 'Clearcopy', color: '#94A3B8', tier: 'Brand Zone', tag: 'Writing tools that make ads shorter and clearer' }
  ],
  apps: [
    { name: 'Headline Lab', color: '#94A3B8', desc: 'Write a headline, see it on a poster, a phone and a search ad', key: 'headline-lab', url: 'apps/headline-lab.html',
      dev: 'Clearcopy', rating: '4.8', users: '1.1M', perms: ['profile', 'feed'],
      tagline: 'Shorter is usually better.',
      about: 'Headline Lab shows your headline on a roadside poster, a phone screen and a search ad, counts words and characters, and flags anything too long to read at a glance. Keep your best ones in a swipe file.',
      features: ['Poster, phone and search previews', 'Words and characters', 'Your swipe file', 'Share a headline'],
      shots: ['apps/headline-lab/shot-1.jpg', 'apps/headline-lab/shot-2.jpg', 'apps/headline-lab/shot-3.jpg'],
      version: '3.6', size: '9 KB',
      updates: [ { v: '3.6', ago: 2, notes: 'Search ad preview.' }, { v: '3.0', ago: 70, notes: 'Swipe file.' }, { v: '2.2', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@sophie_marsh_copy', stars: 5, ago: 1, text: 'The poster test is brutal and right.' }, { who: '@nightshift_designer', stars: 5, ago: 16, text: 'I check every headline here now.' }, { who: '@patrick_doyle_creative', stars: 4, ago: 40, text: 'Good discipline.' } ] },
    { name: 'Reach Planner', color: '#FB923C', desc: 'What your budget buys: people reached and how often', key: 'reach-planner', url: 'apps/reach-planner.html',
      dev: 'Bigboard Media', rating: '4.7', users: '640K', perms: ['profile', 'feed'],
      tagline: 'Spend it where people will see it.',
      about: 'Reach Planner turns a budget into impressions, people reached and how many times each sees your ad, for posters, social, radio and local press. Illustrative rates; your media seller will quote real ones.',
      features: ['Four channels side by side', 'Reach and frequency', 'Save a plan', 'Share a plan'],
      shots: ['apps/reach-planner/shot-1.jpg', 'apps/reach-planner/shot-2.jpg', 'apps/reach-planner/shot-3.jpg'],
      version: '2.4', size: '9 KB',
      updates: [ { v: '2.4', ago: 3, notes: 'Local radio.' }, { v: '2.0', ago: 80, notes: 'Frequency.' }, { v: '1.4', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@mei_chen_media', stars: 5, ago: 2, text: 'Teaches reach and frequency better than most courses.' }, { who: '@nightshift_designer', stars: 5, ago: 21, text: 'Helped my client pick posters over social.' }, { who: '@sophie_marsh_copy', stars: 4, ago: 44, text: 'Handy.' } ] },
    { name: 'Fair Ad Quiz', color: '#F472B6', desc: 'Ten questions a day: is this ad fair and clear?', key: 'fair-ad-quiz', url: 'apps/fair-ad-quiz.html',
      dev: 'Inkwell Print', rating: '4.8', users: '820K', perms: ['profile', 'feed'],
      tagline: 'Good ads tell the truth.',
      about: 'Fair Ad Quiz shows everyday ad situations, from “free” offers to influencer posts, and asks whether they’re fair and clear. Every answer explains the principle. A learning game, not legal advice.',
      features: ['Ten questions a day', 'The principle behind each answer', 'Your best score', 'Share your score'],
      shots: ['apps/fair-ad-quiz/shot-1.jpg', 'apps/fair-ad-quiz/shot-2.jpg', 'apps/fair-ad-quiz/shot-3.jpg'],
      version: '1.8', size: '9 KB',
      updates: [ { v: '1.8', ago: 1, notes: 'Influencer questions.' }, { v: '1.4', ago: 64, notes: 'Principles explained.' }, { v: '1.0', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@patrick_doyle_creative', stars: 5, ago: 3, text: 'Every junior should play this.' }, { who: '@nightshift_designer', stars: 5, ago: 20, text: 'Learned what “clearly an ad” means.' }, { who: '@mei_chen_media', stars: 4, ago: 46, text: 'Fun and useful.' } ] }
  ],
  pros: [
    { key: 'sophie-marsh-copy', name: 'Sophie Marsh Copywriting', color: '#94A3B8', tag: 'Headlines, scripts and words for small brands', role: 'Copywriter',
      img: U('1701096351544-7de3c7fa0272', 800, 800), base: 'Brighton, UK · and online', langs: 'English', years: 12, rating: '4.9', reviewsN: 236, cur: '£',
      creds: ['Ten years at creative agencies', 'Writes for posters, radio and social', 'Teaches evening copywriting classes'],
      about: 'Sophie writes ads that sound like people, not brochures: short headlines, honest claims and a clear reason to care.',
      services: [ { id: 'headline', name: 'Headline sprint', dur: '2 days', price: 240, desc: 'Twenty headlines, three polished.' },
                  { id: 'review', name: 'Copy review call', dur: '45 minutes', price: 70, desc: 'Your ad, made shorter and clearer.' },
                  { id: 'class', name: 'Copywriting class', dur: 'Four evenings', price: 160, desc: 'Online, small group.' } ],
      avail: { days: [1, 2, 3, 4], times: ['10:00', '14:00', '19:00'] },
      reviews: [ { who: '@nightshift_designer', stars: 5, ago: 2, text: 'Cut our poster from 22 words to 6. It works.' }, { who: '@mei_chen_media', stars: 5, ago: 23, text: 'Sharp and generous.' }, { who: '@patrick_doyle_creative', stars: 5, ago: 49, text: 'One of the best writers I’ve worked with.' } ],
      posts: [ { ago: 1, text: 'If a poster headline takes longer to read than a car takes to pass it, it isn’t a poster headline. Six words or fewer.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'mei-chen-media', name: 'Mei Chen Media Planning', color: '#FB923C', tag: 'Media plans for small budgets that work hard', role: 'Media planner',
      img: U('1604904612715-47bf9d9bc670', 800, 800), base: 'London, UK · and online', langs: 'English, Mandarin', years: 15, rating: '4.9', reviewsN: 198, cur: '£',
      creds: ['Fifteen years planning media', 'Outdoor, radio, social and press', 'Specialises in small budgets'],
      about: 'Mei helps small businesses decide where their ad money goes: who needs to see it, where they’ll be, and how often is enough.',
      services: [ { id: 'plan', name: 'Media plan', dur: '1 week', price: 380, desc: 'Channels, budget split and timings.' },
                  { id: 'call', name: 'Budget check call', dur: '45 minutes', price: 65, desc: 'Is your spend in the right place?' },
                  { id: 'report', name: 'Campaign review', dur: '3 days', price: 220, desc: 'What worked, and what to change.' } ],
      avail: { days: [1, 2, 4, 5], times: ['09:30', '13:30'] },
      reviews: [ { who: '@nightshift_designer', stars: 5, ago: 3, text: 'Moved our money from feeds to bus stops. Footfall up.' }, { who: '@sophie_marsh_copy', stars: 5, ago: 26, text: 'Thinks like a customer.' }, { who: '@patrick_doyle_creative', stars: 5, ago: 52, text: 'Clear thinking.' } ],
      posts: [ { ago: 2, text: 'Reach first, then frequency. There’s no point showing the same person your ad nine times if most of your town never sees it.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'patrick-doyle-creative', name: 'Patrick Doyle Creative Direction', color: '#A78BFA', tag: 'Ideas, campaigns and creative mentoring', role: 'Creative director',
      img: U('1608649672403-3609a75eae18', 800, 800), base: 'Manchester, UK', langs: 'English, Irish', years: 38, rating: '5.0', reviewsN: 264, cur: '£',
      creds: ['Thirty-five years in advertising', 'Former executive creative director', 'Mentors young creatives'],
      about: 'Patrick has made ads for everything from crisps to charities. Now he helps small brands find one simple idea, and mentors the next generation.',
      services: [ { id: 'idea', name: 'Big idea workshop', dur: 'One day', price: 720, desc: 'Your brand, one idea to build on.' },
                  { id: 'crit', name: 'Portfolio crit', dur: '60 minutes', price: 60, desc: 'For students and juniors.' },
                  { id: 'mentor', name: 'Monthly mentoring', dur: 'Four calls', price: 240, desc: 'For creative teams.' } ],
      avail: { days: [2, 3, 4], times: ['10:00', '15:00'] },
      reviews: [ { who: '@nightshift_designer', stars: 5, ago: 4, text: 'His crit got me my first job.' }, { who: '@sophie_marsh_copy', stars: 5, ago: 31, text: 'Still the best in the room.' }, { who: '@mei_chen_media', stars: 5, ago: 57, text: 'Kind and honest.' } ],
      posts: [ { ago: 3, text: 'A good brief fits on one page. A great one fits in one sentence. Start there, and the wall fills itself.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'ad-crit', name: 'Ad Crit', domain: 'crit.advertisingxx.com', color: '#FB923C', img: U('1493612276216-ee3925520721', 900, 500),
      scope: 'Global', where: 'Studios and kitchen tables everywhere', members: 286000, online: 3240, tagline: 'Kind, honest feedback on your work.',
      about: 'Copywriters, designers, students and small-business owners sharing ads in progress and getting kind, honest feedback. Ideas first, egos last.',
      rules: ['Critique the work, not the person', 'Say one good thing first', 'No real brands’ logos in mock-ups'],
      mods: ['@nightshift_designer', '@sophie_marsh_copy'],
      threads: [ { t: 'Poster of the week: vote now', by: '@nightshift_designer', tag: 'POSTER', replies: 1640, ago: 0, votes: 3480 }, { t: 'My first radio script: be gentle', by: '@nightshift_designer', tag: 'RADIO', replies: 860, ago: 1, votes: 1520 }, { t: 'Headlines that lost the extra words', by: '@sophie_marsh_copy', tag: 'COPY', replies: 1220, ago: 2, votes: 2380 }, { t: 'Portfolio advice for juniors', by: '@sophie_marsh_copy', tag: 'CAREERS', replies: 940, ago: 3, votes: 1960 } ],
      events: [ { title: 'Live crit: your posters', day: 5, time: '19:00', where: 'Online' }, { title: 'Portfolio night for juniors', day: 13, time: '18:30', where: 'Online' } ] },
    { key: 'manchester-creatives', name: 'Manchester Creatives', domain: 'manchester.advertisingxx.com', color: '#A78BFA', img: U('1666698809123-44e998e93f23', 900, 500),
      scope: 'Local', where: 'Manchester', members: 2140, online: 48, tagline: 'Ideas, pints and portfolios.',
      about: 'Copywriters, designers, photographers and planners from around Manchester. Monthly talks, portfolio nights and a photo walk when the light is good.',
      rules: ['Everyone’s welcome, juniors especially', 'Share jobs freely', 'Be kind in crits'],
      mods: ['@patrick_doyle_creative', '@nightshift_designer'],
      threads: [ { t: 'December talk: making radio ads', by: '@patrick_doyle_creative', tag: 'TALK', replies: 54, ago: 0, votes: 118 }, { t: 'Junior designer roles in town', by: '@nightshift_designer', tag: 'JOBS', replies: 38, ago: 1, votes: 84 }, { t: 'Photo walk: Ancoats at dusk', by: '@nightshift_designer', tag: 'WALK', replies: 26, ago: 2, votes: 60 } ],
      events: [ { title: 'Talk: making radio ads', day: 7, time: '18:30', where: 'Manchester' }, { title: 'Photo walk: Ancoats at dusk', day: 16, time: '15:30', where: 'Manchester' } ] }
  ],
  feed: [
    { av: 'AX', avBg: POSTER, author: 'AdvertisingXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Posters, radio, film and the words that make them work. The people who make ads, the craft behind them, and why the best ones respect you.',
      img: U('1787724691064-22c08d59c049', 800, 600), eng: '♡ 28.6K · 💬 2.2K · ↗ 3.8K' },
    { av: 'ND', avBg: PINK, author: '@nightshift_designer', sub: 'Creative · Just now', badge: 'COMMUNITY',
      text: 'Friday crit at the studio: twelve posters on the wall, three survived. Nobody’s feelings hurt, every poster better. That’s the job.',
      img: U('1764006195843-e6f9a5781500', 800, 600), eng: '♡ 12.4K · 💬 1.6K · ↗ 1.1K' },
    { av: 'BB', avBg: POSTER, author: 'Bigboard Media', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: this blank board becomes a Leeds bakery’s first ever poster. Watch the paste-up, then see who stops to look. Follow <b>Bigboard Media</b>.',
      img: U('1513757378314-e46255f6ed16', 800, 600), eng: '♡ 16.2K · 💬 2.1K · ↗ 2.4K' },
    { av: 'LS', avBg: VIOLET, author: 'Lumen Studios', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'White walls, good light, the kettle on. Our <b>Daylight Studio</b> is free on Thursday mornings this month.',
      img: U('1758613654271-0885b35ae255', 800, 600), eng: '♡ 7.8K · 💬 560 · ↗ 820' },
    { av: 'IP', avBg: PINK, author: 'Inkwell Print', sub: 'Brand Zone · 2h ago', badge: 'BRAND ZONE',
      text: 'An empty frame is just a question waiting for a good answer. <b>Bus Shelter Posters</b>, printed overnight.',
      img: U('1610376094992-6c3913ce221c', 800, 600), eng: '♡ 5.4K · 💬 380 · ↗ 520' },
    { av: 'MC', avBg: POSTER, author: 'Mei Chen Media Planning', sub: 'Media · 4h ago', badge: 'PRO ZONE',
      text: 'Eleven at night, rain on the glass, and that bus shelter is still working. Outdoor never switches off.',
      img: U('1635873432087-50eba4c4392d', 800, 600), eng: '♡ 4.6K · 💬 320 · ↗ 410' },
    { av: 'PD', avBg: INK, author: 'Patrick Doyle Creative Direction', sub: 'Creative · 6h ago', badge: 'PRO ZONE',
      text: 'One brief, one wall, two hours. By the end there was a single idea worth making. That’s a good day.',
      img: U('1758873272540-439a105db676', 800, 600), eng: '♡ 3.8K · 💬 260 · ↗ 340' }
  ],
  prompts: ['How do I write a good headline?', 'Posters or social: where should my budget go?', 'What makes an ad misleading?', 'How do I get my first job in advertising?'],
  businesses: ['fieldwork-research', 'reelhouse-films']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'advertising', verified: true }, o);
Object.assign(ZONES, {
  'bigboard-media': brand({ key: 'bigboard-media', name: 'Bigboard Media', color: '#FB923C', gradient: POSTER, tier: 'Founding Partner',
    tagline: 'Poster sites for local businesses, bought by the week', stats: { followers: '264K', content: '620', products: '8' },
    ad: { badge: 'Featured', img: U('1794406345454-3a7ad53416fc', 760, 760), hl: 'Your town is watching.', sub: 'Book a local poster site for a week, from your phone.', meta: 'From £95 a week' },
    products: [
      { name: 'Bus Shelter Week', price: '£95 a week', tag: 'FLAGSHIP', emoji: '🚏', rating: 4.8, reviews: 2860, cat: 'sites', special: true, desc: 'One bus shelter poster in a street you choose, for seven days.', features: ['Printing included', 'Photo proof on day one'], review: { who: 'Ali N.', text: 'People came in saying they saw it.' } },
      { name: 'Roadside Billboard', price: '£480 a fortnight', tag: 'BESTSELLER', emoji: '🪧', rating: 4.7, reviews: 1240, cat: 'sites', desc: 'A large roadside board on a main route into town.', features: ['Two weeks'], review: { who: 'Mei C.', text: 'Great value for a launch.' } },
      { name: 'Poster Design Help', price: '£120', emoji: '🎨', rating: 4.8, reviews: 860, cat: 'help', desc: 'A designer turns your idea into a poster that reads at a glance.', features: ['Two rounds of changes'], review: { who: 'Sophie M.', text: 'Clean and bold.' } },
      { name: 'Town Bundle', price: '£590', tag: 'SPECIAL', emoji: '🏙️', rating: 4.8, reviews: 420, cat: 'sites', special: true, desc: 'Eight shelters across one town for a week.', features: ['Map of every site'], review: { who: 'Patrick D.', text: 'Everywhere at once.' } }
    ],
    shopCats: [ { key: 'sites', label: 'Poster sites', icon: '🚏' }, { key: 'help', label: 'Design help', icon: '🎨' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Painted by hand, seen by thousands. Big walls work for small brands too: ask about a <b>Town Bundle</b>.', img: U('1762430187249-fe08df17185c', 800, 440), eng: '♡ 16.2K · 💬 2.1K · ↗ 2.4K', product: 3 },
      { type: 'community', who: 'Ali N.', whoBg: POSTER, sub: 'Community · 1d', text: 'Is one poster for a week enough to make a difference?', eng: '♡ 760 · 💬 240', reply: 'Hi Ali! One well-placed poster near your shop can really help, especially with a simple message and an offer. For a bigger push, a few sites in the same area for two weeks works better. 🚏' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Bigboard Live · a bakery’s first poster goes up', when: 'Live now', desc: 'Watch the paste-up in Leeds, then see who stops to look.', registered: 8460, capacity: 22000 } ],
    about: { founded: 'Leeds · 2013', story: 'Poster people who wanted local shops to afford the same sites as big brands. We joined AdvertisingXX as Founding Partner because a good poster is still one of the best ads there is.', milestones: [['2013', 'Founded'], ['2021', 'Book from your phone'], ['2026', 'Founding Partner on AdvertisingXX']], values: ['Local first', 'Honest prices', 'No ads for gambling or junk food near schools'] } }),

  'lumen-studios': brand({ key: 'lumen-studios', name: 'Lumen Studios', color: '#A78BFA', gradient: VIOLET, tier: 'Brand Zone',
    tagline: 'Photo and film studios to hire by the hour', stats: { followers: '128K', content: '480', products: '14' },
    ad: { badge: 'New', img: U('1654170313791-f369c06f460b', 760, 760), hl: 'Good light, by the hour.', sub: 'Studios with lights, backdrops and tea included.', meta: 'From £45 an hour' },
    products: [
      { name: 'Daylight Studio', price: '£45 an hour', tag: 'FLAGSHIP', emoji: '☀️', rating: 4.9, reviews: 2140, cat: 'studios', special: true, desc: 'A white studio with huge north-facing windows.', features: ['Lights and backdrops included'], review: { who: 'Ali N.', text: 'Our product shots look expensive.' } },
      { name: 'Film Stage', price: '£120 an hour', tag: 'BESTSELLER', emoji: '🎬', rating: 4.8, reviews: 860, cat: 'studios', desc: 'A blackout stage for video and ads.', features: ['Sound-treated'], review: { who: 'Patrick D.', text: 'Perfect for small shoots.' } },
      { name: 'Lighting Kit Hire', price: '£35 a day', emoji: '💡', rating: 4.7, reviews: 640, cat: 'kit', desc: 'Three lights, stands and soft boxes.', features: ['Fits in a car'], review: { who: 'Mei C.', text: 'Easy to set up.' } },
      { name: 'Learn to Light', price: '£60', tag: 'SPECIAL', emoji: '🎓', rating: 4.8, reviews: 380, cat: 'kit', special: true, desc: 'A three-hour class on lighting products and people.', features: ['Small groups'], review: { who: 'Sophie M.', text: 'Finally understand soft light.' } }
    ],
    shopCats: [ { key: 'studios', label: 'Studios', icon: '☀️' }, { key: 'kit', label: 'Kit & classes', icon: '💡' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'One frame, one light, one confident pose. Shot this morning in the <b>Daylight Studio</b>.', img: U('1758613653735-9d7e87996110', 800, 440), eng: '♡ 7.8K · 💬 560', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Open studio: shoot your product free', when: 'Dec 3 · 10:00', desc: 'Bring one product, leave with three photos.', registered: 920, capacity: 2400 } ],
    about: { founded: 'Glasgow · 2016', story: 'Two photographers who turned an old print works into studios anyone can hire.', milestones: [['2016', 'The first studio'], ['2022', 'The Film Stage'], ['2026', 'Brand Zone on AdvertisingXX']], values: ['Fair hourly rates', 'Kit that works', 'Help when you need it'] } }),

  'inkwell-print': brand({ key: 'inkwell-print', name: 'Inkwell Print', color: '#F472B6', gradient: PINK, tier: 'Brand Zone',
    tagline: 'Posters, leaflets and shop windows, printed well', stats: { followers: '96.8K', content: '340', products: '60' },
    ad: { badge: 'Christmas', img: U('1540331547168-8b63109225b7', 760, 760), hl: 'Bright ideas, printed bright.', sub: 'Posters and leaflets on recycled paper.', meta: 'From £18' },
    products: [
      { name: 'Bus Shelter Posters', price: '£38 for two', tag: 'FLAGSHIP', emoji: '🖼️', rating: 4.8, reviews: 2460, cat: 'posters', special: true, desc: 'Weatherproof posters sized for bus shelters.', features: ['Printed overnight', 'Recycled paper'], review: { who: 'Ali N.', text: 'Colours really pop.' } },
      { name: 'Leaflets x 500', price: '£42', tag: 'BESTSELLER', emoji: '📄', rating: 4.7, reviews: 3120, cat: 'leaflets', desc: 'A5 leaflets on thick recycled paper.', features: ['Free proof'], review: { who: 'Sam R.', text: 'Quick and cheap.' } },
      { name: 'Window Graphics', price: '£85', emoji: '🪟', rating: 4.7, reviews: 640, cat: 'posters', desc: 'Peel-off window vinyl for shops.', features: ['Fitting guide'], review: { who: 'Sophie M.', text: 'The shop looks brand new.' } },
      { name: 'A3 Poster Pack', price: '£18', tag: 'SPECIAL', emoji: '📌', rating: 4.6, reviews: 860, cat: 'posters', special: true, desc: 'Ten A3 posters for noticeboards and windows.', features: ['Next-day'], review: { who: 'Mei C.', text: 'Great for events.' } }
    ],
    shopCats: [ { key: 'posters', label: 'Posters', icon: '🖼️' }, { key: 'leaflets', label: 'Leaflets', icon: '📄' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Brick, gold frame, your message. A3 or bigger, our <b>A3 Poster Pack</b> starts small.', img: U('1727488962226-e271159f7a93', 800, 440), eng: '♡ 5.4K · 💬 380', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: free delivery on posters', when: 'Nov 27 · All day', desc: 'Free next-day delivery on every poster order.', registered: 1340, capacity: 4000 } ],
    about: { founded: 'Nottingham · 1994', story: 'A family print shop that went from wedding invitations to bus shelters.', milestones: [['1994', 'The first press'], ['2019', 'All recycled paper'], ['2026', 'Brand Zone on AdvertisingXX']], values: ['Recycled paper', 'Proofs you can trust', 'Friendly people'] } }),

  'clearcopy': brand({ key: 'clearcopy', name: 'Clearcopy', color: '#94A3B8', gradient: INK, tier: 'Brand Zone',
    tagline: 'Writing tools that make ads shorter and clearer', stats: { followers: '82.4K', content: '260', products: '6' },
    ad: { badge: 'Featured', img: U('1758613654410-5da4d6c9acdb', 760, 760), hl: 'Say it in six words.', sub: 'A writing tool that cuts the waffle.', meta: 'From £6 a month' },
    products: [
      { name: 'Clearcopy Writer', price: '£6 a month', tag: 'FLAGSHIP', emoji: '✍️', rating: 4.8, reviews: 1860, cat: 'tools', special: true, desc: 'Highlights long words, passive voice and claims you can’t back up.', features: ['Works in your browser'], review: { who: 'Sophie M.', text: 'A tough, fair editor.' } },
      { name: 'Clearcopy Team', price: '£4 a user a month', tag: 'BESTSELLER', emoji: '👥', rating: 4.7, reviews: 640, cat: 'tools', desc: 'Shared style guide for the whole team.', features: ['Brand words list'], review: { who: 'Patrick D.', text: 'Keeps us all on voice.' } },
      { name: 'Headline Workbook', price: '£12', emoji: '📓', rating: 4.8, reviews: 960, cat: 'learn', desc: 'Fifty exercises for better headlines.', features: ['Print or PDF'], review: { who: 'Mei C.', text: 'Great for juniors.' } },
      { name: 'Copy Clinic', price: '£40', tag: 'SPECIAL', emoji: '🩺', rating: 4.8, reviews: 320, cat: 'learn', special: true, desc: 'A writer reviews one ad in a live call.', features: ['30 minutes'], review: { who: 'Ali N.', text: 'Our flyer is half the length and twice as good.' } }
    ],
    shopCats: [ { key: 'tools', label: 'Tools', icon: '✍️' }, { key: 'learn', label: 'Learn', icon: '📓' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'Every idea on the wall, then cut it in half. That’s what <b>Clearcopy Writer</b> does to a draft.', img: U('1758873272414-c0bf30332738', 800, 440), eng: '♡ 3.2K · 💬 210', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Live: cut a real ad in half', when: 'Dec 8 · 12:30', desc: 'Send your ad copy; we edit it live.', registered: 760, capacity: 2000 } ],
    about: { founded: 'Edinburgh · 2019', story: 'Copywriters and a linguist who built the editor they wanted.', milestones: [['2019', 'The first version'], ['2024', 'Teams'], ['2026', 'Brand Zone on AdvertisingXX']], values: ['Plain English', 'Claims you can prove', 'Your words stay yours'] } }),

  'fieldwork-research': { key: 'fieldwork-research', kind: 'business', gw: 'advertising', name: 'Fieldwork Research', color: '#A78BFA', gradient: VIOLET, img: U('1758691736433-4078b93abd72', 900, 500),
    tier: 'Verified', category: 'Ad testing and research', tagline: 'Find out if your ad works before you pay to run it.',
    about: { founded: 'Birmingham · 2012', story: 'We show draft ads to real people and ask what they understood, remembered and felt. Small studies, clear answers, honest reports.' },
    stats: { years: 14, staff: 40, clients: '1,800 ads tested' },
    caps: [ { name: 'Ad testing', detail: 'Draft ads shown to real people.' }, { name: 'Focus groups', detail: 'In person and online.' }, { name: 'After the campaign', detail: 'Did people notice, and did it work?' } ],
    specs: { moq: 'One study', lead: '1 to 3 weeks', regions: 'UK', certs: ['Research code of conduct', 'Data kept safe', 'Participants paid fairly'] },
    supplies: [ { kind: 'brand', key: 'bigboard-media', what: 'Poster tests before booking' } ],
    cases: [ { title: 'The headline nobody understood', text: 'Testing caught a confusing poster before a £20,000 campaign.' } ],
    feed: [ { sub: 'Studio · 3d', text: 'Forty people, twelve posters, one clear winner.' } ],
    contact: { person: 'Grace Okafor, Studies', response: 'Replies within one working day' } },

  'reelhouse-films': { key: 'reelhouse-films', kind: 'business', gw: 'advertising', name: 'Reelhouse Films', color: '#FB923C', gradient: POSTER, img: U('1574446615002-35ec8a8f0da2', 900, 500),
    tier: 'Verified', category: 'Ad film production', tagline: 'Short films and ads for brands of every size.',
    about: { founded: 'Bristol · 2011', story: 'A small crew making ads for TV, cinema and phones. We scale to the budget, and we always pay our crew on time.' },
    stats: { years: 15, staff: 22, clients: '600 films made' },
    caps: [ { name: 'Ad films', detail: 'From six seconds to a minute.' }, { name: 'Product films', detail: 'Clean shots, good light.' }, { name: 'Edit and sound', detail: 'Finished for every screen.' } ],
    specs: { moq: 'One film', lead: '3 to 8 weeks', regions: 'UK and Europe', certs: ['Green production practices', 'Fair crew rates', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'lumen-studios', what: 'Studio days for small shoots' } ],
    cases: [ { title: 'A charity ad on a tiny budget', text: 'Shot in one day; seen by two million people.' } ],
    feed: [ { sub: 'Set · 5d', text: 'Wrapped a Christmas film for a Bristol bakery. Mince pies all round.' } ],
    contact: { person: 'Tom Ashby, Producer', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('advertising', [
  { gw: 'advertising', zone: 'bigboard-media', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Bigboard Live · a bakery’s first poster goes up', desc: 'Watch the paste-up in Leeds, then see who stops to look.' },
  { gw: 'advertising', zone: 'inkwell-print', type: 'Sale', icon: '🖼️', time: 'Nov 27', title: 'Inkwell Black Friday', desc: 'Free next-day delivery on every poster order.' },
  { gw: 'advertising', type: 'Event', icon: '🗳️', time: 'Dec 2', title: 'Live crit: your posters', desc: 'Ad Crit gives kind, honest feedback.' },
  { gw: 'advertising', zone: 'lumen-studios', type: 'Event', icon: '📸', time: 'Dec 3', title: 'Open studio: shoot your product free', desc: 'Bring one product, leave with three photos.' },
  { gw: 'advertising', type: 'Event', icon: '📻', time: 'Dec 4', title: 'Manchester Creatives: making radio ads', desc: 'A talk and pints in Manchester.' },
  { gw: 'advertising', zone: 'clearcopy', type: 'Event', icon: '✂️', time: 'Dec 8', title: 'Live: cut a real ad in half', desc: 'Send your copy; Clearcopy edits it live.' },
  { gw: 'advertising', type: 'Event', icon: '💼', time: 'Dec 10', title: 'Portfolio night for juniors', desc: 'Ad Crit reviews student and junior books.' },
  { gw: 'advertising', type: 'Event', icon: '🌆', time: 'Dec 13', title: 'Photo walk: Ancoats at dusk', desc: 'Manchester Creatives with cameras.' }
]);
})();
/* ═════════ /ADVERTISINGXX ═════════ */
