/* ═════════ GUITARXX — a Music demo gateway (2026-11-21, Sean; build -89) ═════════
   Built with the _tools/README.md recipe. Palette (dark): stage black, lilac (the existing SECTOR_FEED accent), sunburst amber.
   Home sector: Music. Picks up the existing SECTOR_FEED story of a 52-year-old learner at open mics.
   Brands, pros and communities are fictional; places are real; no real guitar maker's name or logo is used. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const SUN = 'linear-gradient(135deg,#F5B342,#B4581C)', LILAC = 'linear-gradient(135deg,#C084FC,#6B21A8)', WOOD = 'linear-gradient(135deg,#C99A6B,#6E4527)', STAGE = 'linear-gradient(135deg,#4B5563,#111827)';

GATEWAYS.guitar = {
  name: 'GuitarXX', domain: 'guitarxx.com', emoji: '🎸', sector: 'music', live: true,
  tagline: 'The Guitar Universe',
  theme: {
    bg: '#120F14', text: '#F3EFF6', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(192,132,252,.16)',
    headerBg: 'linear-gradient(180deg,#26182F,#120F14)', accent: '#C084FC', accentAlt: '#F5B342', dark: true
  },
  gradient: 'linear-gradient(135deg,#111827,#6B21A8,#F5B342)',
  stats: { members: '7.8M', brands: '5,600+', agents: '69' },
  spaces: ['All Feed', 'Learning', 'Acoustic', 'Electric', 'Gear', 'Open Mics'],
  trending: ['#OpenMic', '#NeverTooLate', '#NGD'],
  brandZones: [
    { key: 'northbridge', name: 'Northbridge Guitars', color: '#F5B342', tier: 'Founding Partner', tag: 'Acoustic guitars, built by hand in Cumbria' },
    { key: 'fretwise', name: 'Fretwise', color: '#C084FC', tier: 'Brand Zone', tag: 'Strings, picks and capos' },
    { key: 'tonebox', name: 'Tonebox Amps', color: '#9CA3AF', tier: 'Brand Zone', tag: 'Valve amps and pedals, made in London' },
    { key: 'gig-bag-co', name: 'Gig Bag Co.', color: '#C99A6B', tier: 'Brand Zone', tag: 'Cases and straps that survive the tour' }
  ],
  apps: [
    { name: 'Chord Finder', color: '#C084FC', desc: 'Every chord shape, with the easy versions too', key: 'chord-finder', url: 'apps/chord-finder.html',
      dev: 'Fretwise', rating: '4.9', users: '3.1M', perms: ['profile', 'feed'],
      tagline: 'Any chord, at your fingertips.',
      about: 'Chord Finder shows the shape for any chord on a fretboard diagram, with an easier version for beginners. Build a song from the chords you know and practise switching between them.',
      features: ['Major, minor, sevenths and more', 'Easy versions for beginners', 'Your song’s chords in one place', 'Switch practice with a timer'],
      shots: ['apps/chord-finder/shot-1.jpg', 'apps/chord-finder/shot-2.jpg', 'apps/chord-finder/shot-3.jpg'],
      version: '5.2', size: '10 KB',
      updates: [ { v: '5.2', ago: 3, notes: 'Easy versions for every chord.' }, { v: '4.8', ago: 80, notes: 'Song builder.' }, { v: '4.0', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@late_starter_lou', stars: 5, ago: 1, text: 'The easy G saved my fingers and my sanity.' }, { who: '@open_mic_olly', stars: 5, ago: 9, text: 'My whole set list lives in here.' }, { who: '@teen_strummer_tia', stars: 4, ago: 20, text: 'Wish it had a left-handed view.' } ] },
    { name: 'Metronome', color: '#F5B342', desc: 'Keep time, speed up slowly, play it right', key: 'metronome', url: 'apps/metronome.html',
      dev: 'Northbridge Guitars', rating: '4.8', users: '1.6M', perms: ['profile', 'feed'],
      tagline: 'Slow is smooth. Smooth is fast.',
      about: 'Metronome keeps time with a clear click and an accent on the first beat. Practice mode starts slow and nudges the tempo up a little each time you play it cleanly.',
      features: ['40 to 220 beats a minute', 'Accent on the one', 'Tap tempo', 'Speed-up practice mode'],
      shots: ['apps/metronome/shot-1.jpg', 'apps/metronome/shot-2.jpg', 'apps/metronome/shot-3.jpg'],
      version: '3.0', size: '8 KB',
      updates: [ { v: '3.0', ago: 5, notes: 'Speed-up practice mode.' }, { v: '2.6', ago: 90, notes: 'Tap tempo.' }, { v: '2.1', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@open_mic_olly', stars: 5, ago: 2, text: 'Speed-up mode got me through a solo I’d avoided for years.' }, { who: '@late_starter_lou', stars: 5, ago: 13, text: 'Clear click, no faff.' }, { who: '@teen_strummer_tia', stars: 4, ago: 29, text: 'Want more sounds.' } ] },
    { name: 'Practice Log', color: '#C99A6B', desc: 'Track your practice and watch the streak grow', key: 'practice-log', url: 'apps/practice-log.html',
      dev: 'Gig Bag Co.', rating: '4.7', users: '720K', perms: ['profile', 'feed'],
      tagline: 'Twenty minutes a day adds up.',
      about: 'Practice Log times your sessions, notes what you worked on and keeps a streak. Weekly goals and a simple chart show how far you’ve come, which is the thing that keeps most people playing.',
      features: ['Session timer', 'What you worked on', 'Streaks and weekly goals', 'Share a milestone to GuitarXX'],
      shots: ['apps/practice-log/shot-1.jpg', 'apps/practice-log/shot-2.jpg', 'apps/practice-log/shot-3.jpg'],
      version: '2.3', size: '9 KB',
      updates: [ { v: '2.3', ago: 4, notes: 'Weekly goals.' }, { v: '2.0', ago: 80, notes: 'Streaks.' }, { v: '1.6', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@late_starter_lou', stars: 5, ago: 3, text: '412 days in a row. At 54.' }, { who: '@teen_strummer_tia', stars: 5, ago: 14, text: 'The streak keeps me honest.' }, { who: '@dad_rock_dev', stars: 4, ago: 33, text: 'Simple and motivating.' } ] }
  ],
  pros: [
    { key: 'callum-reid-guitar', name: 'Callum Reid Guitar Lessons', color: '#C084FC', tag: 'Guitar lessons for adults and teens · beginners especially welcome', role: 'Guitar teacher',
      img: U('1767462454361-81ef7690aea8', 800, 800), base: 'Glasgow, UK · and online', langs: 'English', years: 12, rating: '4.9', reviewsN: 624, cur: '£',
      creds: ['Music degree, guitar performance', 'Graded exam teacher', 'Teaches 40 adult beginners a year'],
      about: 'Callum teaches the songs you actually want to play, from your very first chord. Half his students started after forty, and he thinks that’s brilliant.',
      services: [ { id: 'trial', name: 'First lesson', dur: '30 minutes', price: 15, desc: 'Meet, play something, set a goal.' },
                  { id: 'lesson', name: 'Weekly lesson', dur: '45 minutes', price: 35, desc: 'In Glasgow or online.' },
                  { id: 'block', name: 'Ten-lesson block', dur: '10 × 45 minutes', price: 300, desc: 'With a practice plan between lessons.' } ],
      avail: { days: [1, 2, 3, 4, 6], times: ['10:00', '16:00', '19:00'] },
      reviews: [ { who: '@late_starter_lou', stars: 5, ago: 4, text: 'Started at 52. Open mic at 54. Thank you, Callum.' }, { who: '@teen_strummer_tia', stars: 5, ago: 15, text: 'Taught me the songs I love, not boring exercises.' }, { who: '@dad_rock_dev', stars: 5, ago: 40, text: 'Patient and very funny.' } ],
      posts: [ { ago: 1, text: 'Sore fingertips in week two are normal. Little and often, and they toughen up in a month.' }, { ago: 6, text: 'Gift vouchers for first lessons, in time for Christmas.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'freya-lund-luthier', name: 'Freya Lund Luthier', color: '#F5B342', tag: 'Guitar setups, repairs and restorations · Kendal workshop', role: 'Luthier',
      img: U('1764971591006-b6eb67a8f0cb', 800, 800), base: 'Kendal, UK', langs: 'English, Swedish', years: 10, rating: '4.9', reviewsN: 386, cur: '£',
      creds: ['Trained in guitar making', 'Repair tech for a UK guitar maker', 'Restores vintage acoustics'],
      about: 'Freya makes guitars easier to play. A proper setup (action, relief and intonation) can turn a guitar you fight into one you love, and it’s the best money a beginner can spend.',
      services: [ { id: 'setup', name: 'Full setup', dur: 'Ready in 3 days', price: 55, desc: 'Action, neck relief, intonation, new strings.' },
                  { id: 'frets', name: 'Fret level and crown', dur: 'Ready in 1 week', price: 140, desc: 'For buzzing frets and worn guitars.' },
                  { id: 'restore', name: 'Vintage restoration', dur: 'Quoted per guitar', price: 300, desc: 'Cracks, braces, bridges and a lot of care.' } ],
      avail: { days: [2, 3, 4, 5], times: ['10:00', '14:00'] },
      reviews: [ { who: '@dad_rock_dev', stars: 5, ago: 6, text: 'My cheap guitar plays like an expensive one now.' }, { who: '@open_mic_olly', stars: 5, ago: 18, text: 'Saved my grandad’s guitar.' }, { who: '@late_starter_lou', stars: 5, ago: 42, text: 'Wish I’d done this on day one.' } ],
      posts: [ { ago: 2, text: 'Central heating dries guitars out. Keep yours in its case in winter, away from radiators.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'nina-hart-songwriting', name: 'Nina Hart Songwriting', color: '#C99A6B', tag: 'Songwriting and performance coaching · first songs, first gigs', role: 'Songwriting coach',
      img: U('1627161683077-e34782c24d81', 800, 800), base: 'Manchester, UK · and online', langs: 'English', years: 14, rating: '4.8', reviewsN: 248, cur: '£',
      creds: ['Singer-songwriter, three albums', 'Runs a Manchester open mic', 'Songwriting tutor at a music college'],
      about: 'Nina helps guitarists write their own songs and get them in front of people. Her first-gig coaching covers setlists, nerves and what to do when a string breaks.',
      services: [ { id: 'write', name: 'Songwriting session', dur: '60 minutes', price: 50, desc: 'Bring a riff or a line; leave with a song.' },
                  { id: 'gig', name: 'First-gig coaching', dur: '3 × 45 minutes', price: 120, desc: 'Setlist, nerves, stagecraft.' },
                  { id: 'review', name: 'Demo feedback', dur: 'Reply within 5 days', price: 30, desc: 'Send a demo, get honest notes.' } ],
      avail: { days: [1, 3, 5], times: ['12:00', '18:00'] },
      reviews: [ { who: '@open_mic_olly', stars: 5, ago: 5, text: 'Wrote my first song. Played it the next Tuesday.' }, { who: '@teen_strummer_tia', stars: 5, ago: 19, text: 'Made me brave.' }, { who: '@late_starter_lou', stars: 4, ago: 37, text: 'Great notes on my demo.' } ],
      posts: [ { ago: 3, text: 'Your first open mic: play your two easiest songs, not your two hardest. Nerves eat difficulty.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'open-mic-club', name: 'Open Mic Club', domain: 'openmic.guitarxx.com', color: '#C084FC', img: U('1595971294624-80bcf0d7eb24', 900, 500),
      scope: 'Global', where: 'Every pub back room', members: 348000, online: 5640, tagline: 'Play badly in public. It’s the best.',
      about: 'Guitarists of every level: first-chord victories, open mic nerves, gear chat, and the long-running thread for people who started late and never looked back.',
      rules: ['Encourage, always', 'Gear chat is welcome; gear snobbery isn’t', 'Post your progress, however small'],
      mods: ['@open_mic_olly', '@late_starter_lou'],
      threads: [ { t: 'Started after 50: show us your progress', by: '@late_starter_lou', tag: 'NEVER TOO LATE', replies: 2420, ago: 0, votes: 6180 }, { t: 'New guitar day! Post yours', by: '@dad_rock_dev', tag: 'NGD', replies: 1180, ago: 1, votes: 2860 }, { t: 'First open mic tonight. Help.', by: '@teen_strummer_tia', tag: 'OPEN MIC', replies: 486, ago: 2, votes: 1240 }, { t: 'Best beginner acoustic under £300?', by: '@first_guitar_fin', tag: 'GEAR', replies: 624, ago: 3, votes: 980 } ],
      events: [ { title: 'Online open mic', day: 5, time: '20:00', where: 'Online' }, { title: 'Christmas songs jam', day: 18, time: '19:30', where: 'Online' } ] },
    { key: 'glasgow-guitar-circle', name: 'Glasgow Guitar Circle', domain: 'glasgow.guitarxx.com', color: '#F5B342', img: U('1782208101685-1e23befd83d1', 900, 500),
      scope: 'Local', where: 'Glasgow', members: 3100, online: 58, tagline: 'Jams, lessons swaps and a Tuesday open mic.',
      about: 'Guitarists across Glasgow: a monthly jam, a Tuesday open mic in the West End, a gear swap and a WhatsApp group for last-minute gigs.',
      rules: ['Everyone gets a turn', 'Bring a capo to share', 'Sell gear with prices'],
      mods: ['@glasgow_gav', '@open_mic_olly'],
      threads: [ { t: 'Tuesday open mic sign-up', by: '@glasgow_gav', tag: 'OPEN MIC', replies: 48, ago: 0, votes: 104 }, { t: 'Gear swap: December', by: '@dad_rock_dev', tag: 'SWAP', replies: 36, ago: 1, votes: 62 }, { t: 'Who fancies a blues jam?', by: '@glasgow_gav', tag: 'JAM', replies: 28, ago: 2, votes: 58 } ],
      events: [ { title: 'Tuesday open mic', day: 3, time: '20:00', where: 'West End, Glasgow' }, { title: 'Monthly jam', day: 11, time: '19:00', where: 'Finnieston, Glasgow' } ] }
  ],
  feed: [
    { av: 'GX', avBg: LILAC, author: 'GuitarXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Your first chord to your first gig. Acoustic and electric, lessons, gear, makers and the open mics where it all comes together. Guitar, all in one place.',
      img: U('1558098329-a11cff621064', 800, 600), eng: '♡ 68.2K · 💬 6.1K · ↗ 7.4K' },
    { av: 'FF', avBg: WOOD, author: '@first_guitar_fin', sub: 'Learning · Just now', badge: 'COMMUNITY',
      text: 'Bought myself a guitar for my 40th. It lives next to the plants so I see it every day and actually pick it up 🌿',
      img: U('1784288196035-59d7674cf262', 800, 600), eng: '♡ 18.6K · 💬 2.2K · ↗ 640' },
    { av: 'NB', avBg: SUN, author: 'Northbridge Guitars', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Inside the Kendal workshop: twelve guitars a month, each one built by a single maker from start to finish. The <b>Fellside Dreadnought</b> is back.',
      img: U('1655569615075-6ae8a1b4e6f3', 800, 600), eng: '♡ 13.8K · 💬 1.1K · ↗ 1.6K' },
    { av: 'FW', avBg: LILAC, author: 'Fretwise', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'New strings, new guitar. Our <b>Phosphor Bronze Lights</b> stay bright for weeks, not days.',
      img: U('1579797990179-4ca11c8b47fd', 800, 600), eng: '♡ 6.4K · 💬 480 · ↗ 520' },
    { av: 'OO', avBg: STAGE, author: '@open_mic_olly', sub: 'Open Mics · 2h ago', badge: 'COMMUNITY',
      text: 'Six months ago I couldn’t play a full song. Last night I played three at the Tuesday open mic and nobody threw anything 🎶',
      img: U('1471478331149-c72f17e33c73', 800, 600), eng: '♡ 15.2K · 💬 1.8K · ↗ 480' },
    { av: 'TB', avBg: STAGE, author: 'Tonebox Amps', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Fifteen watts of valve warmth, small enough for the living room. The <b>Tonebox 15</b> is hand-wired in east London.',
      img: U('1564186763535-ebb21ef5277f', 800, 600), eng: '♡ 5.8K · 💬 420 · ↗ 480' },
    { av: 'CR', avBg: LILAC, author: 'Callum Reid Guitar Lessons', sub: 'Learning · 6h ago', badge: 'PRO ZONE',
      text: 'Can’t switch chords in time? Practise only the switch: G to C, sixty times, slowly. Then add the strumming back.',
      img: U('1510915361894-db8b60106cb1', 800, 600), eng: '♡ 4.6K · 💬 340 · ↗ 820' }
  ],
  prompts: ['What’s the easiest first song on guitar?', 'Acoustic or electric for a beginner?', 'Find an open mic in Glasgow this week', 'Why does my guitar buzz on the low frets?'],
  businesses: ['tonewood-timber', 'backline-hire']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'guitar', verified: true }, o);
Object.assign(ZONES, {
  'northbridge': brand({ key: 'northbridge', name: 'Northbridge Guitars', color: '#F5B342', gradient: SUN, tier: 'Founding Partner',
    tagline: 'Acoustic guitars, built by hand in Cumbria', stats: { followers: '184K', content: '920', products: '22' },
    ad: { badge: 'Featured', img: U('1579289416573-55ef29dfed62', 760, 760), hl: 'The Fellside Dreadnought.', sub: 'Built start to finish by one maker in Kendal.', meta: 'From £45' },
    products: [
      { name: 'Fellside Dreadnought', price: '£2,400', tag: 'FLAGSHIP', emoji: '🎸', rating: 4.9, reviews: 860, cat: 'acoustic', special: true, desc: 'Solid spruce top, walnut back and sides, built by one maker over six weeks.', features: ['Hard case included', 'Lifetime warranty', 'Made to order'], review: { who: 'Olly B.', text: 'Sounds like a piano in a church.' } },
      { name: 'Wainwright Parlour', price: '£1,450', tag: 'BESTSELLER', emoji: '🪕', rating: 4.9, reviews: 1240, cat: 'acoustic', desc: 'A small-bodied guitar, comfortable on the sofa, loud enough for a folk club.', features: ['Short scale'], review: { who: 'Lou T.', text: 'Perfect for smaller hands.' } },
      { name: 'Workshop Tour', price: '£45', emoji: '🏭', rating: 4.9, reviews: 620, cat: 'experiences', desc: 'Two hours in the Kendal workshop, with tea and a play of every model.', features: ['Saturdays'], review: { who: 'Dev K.', text: 'Wonderful morning.' } },
      { name: 'Starter Acoustic', price: '£399', tag: 'SPECIAL', emoji: '🌱', rating: 4.8, reviews: 2380, cat: 'acoustic', special: true, desc: 'Our first-guitar model: laminated body, solid top, set up to play easily from day one.', features: ['Gig bag included', 'Pro setup'], review: { who: 'Fin A.', text: 'Easy to play, sounds lovely.' } }
    ],
    shopCats: [ { key: 'acoustic', label: 'Guitars', icon: '🎸' }, { key: 'experiences', label: 'Workshop tours', icon: '🏭' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'A <b>Fellside Dreadnought</b> body, braced and ready for its back.', img: U('1695727036766-4d06ac90d7f3', 800, 440), eng: '♡ 13.8K · 💬 1.1K · ↗ 1.6K', product: 0 },
      { type: 'post', sub: 'In the workshop · Yesterday', text: 'Every maker signs the inside of their guitar. Look through the soundhole on yours.', img: U('1541689592655-f5f52825a3b8', 800, 440), eng: '♡ 5.4K · 💬 360' },
      { type: 'community', who: 'Fin A.', whoBg: WOOD, sub: 'Community · 1d', text: 'Is the Starter Acoustic good enough to keep, or will I outgrow it?', eng: '♡ 240 · 💬 58', reply: 'Hi Fin! Plenty of players keep theirs for years: the solid top improves as it’s played in. If you do upgrade, we’ll take it back against a Wainwright or Fellside at a fair price. 🎸' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Northbridge Live · Workshop tour', when: 'Live now', desc: 'Walk the Kendal workshop with our makers and hear every model played.', registered: 3920, capacity: 9000 } ],
    about: { founded: 'Kendal · 2006', story: 'A cabinet maker who built his first guitar in a shed. Now eight makers build twelve guitars a month. We joined GuitarXX as Founding Partner because guitarists are already here.', milestones: [['2006', 'The first guitar'], ['2018', 'The Kendal workshop'], ['2026', 'Founding Partner on GuitarXX']], values: ['One maker per guitar', 'Responsibly sourced wood', 'Made to be played'] } }),

  'fretwise': brand({ key: 'fretwise', name: 'Fretwise', color: '#C084FC', gradient: LILAC, tier: 'Brand Zone',
    tagline: 'Strings, picks and capos', stats: { followers: '96.4K', content: '480', products: '64' },
    ad: { badge: 'New', img: U('1520167112707-56e25f2d7d6e', 760, 760), hl: 'Bright for weeks.', sub: 'Phosphor bronze strings that last.', meta: 'From £3' },
    products: [
      { name: 'Phosphor Bronze Lights', price: '£11', tag: 'FLAGSHIP', emoji: '🎼', rating: 4.8, reviews: 6240, cat: 'strings', special: true, desc: 'Acoustic strings, 12–53, coated to stay bright for weeks.', features: ['Coated', 'Made in Britain'], review: { who: 'Olly B.', text: 'Still bright after a month.' } },
      { name: 'Electric Strings 10–46', price: '£8', tag: 'BESTSELLER', emoji: '⚡', rating: 4.8, reviews: 5120, cat: 'strings', desc: 'Nickel-wound, the classic electric set.', features: ['Three-pack option'], review: { who: 'Dev K.', text: 'Stay in tune really well.' } },
      { name: 'Pick Tin (24)', price: '£6', emoji: '🔺', rating: 4.7, reviews: 2860, cat: 'picks', desc: 'Twenty-four picks in four thicknesses, so you can find yours.', features: ['Recycled tin'], review: { who: 'Tia R.', text: 'Turns out I’m a medium.' } },
      { name: 'Quick-Change Capo', price: '£18', tag: 'SPECIAL', emoji: '🔧', rating: 4.8, reviews: 1860, cat: 'capos', special: true, desc: 'One-handed, adjustable tension, no buzz.', features: ['Acoustic and electric'], review: { who: 'Lou T.', text: 'Unlocked so many songs.' } }
    ],
    shopCats: [ { key: 'strings', label: 'Strings', icon: '🎼' }, { key: 'picks', label: 'Picks', icon: '🔺' }, { key: 'capos', label: 'Capos', icon: '🔧' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Electric or acoustic, we’ve got your set. <b>10–46s</b> are back in three-packs.', img: U('1516924962500-2b4b3b99ea02', 800, 440), eng: '♡ 6.4K · 💬 480', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: strings three for two', when: 'Nov 27 · All day', desc: 'Three sets for the price of two, for one day.', registered: 4260, capacity: 10000 } ],
    about: { founded: 'Birmingham · 2011', story: 'A string-winding workshop in Digbeth that started making its own sets.', milestones: [['2011', 'The first set'], ['2020', 'Coated acoustics'], ['2026', 'Brand Zone on GuitarXX']], values: ['Wound in Britain', 'Recyclable packaging', 'Tested on real guitars'] } }),

  'tonebox': brand({ key: 'tonebox', name: 'Tonebox Amps', color: '#9CA3AF', gradient: STAGE, tier: 'Brand Zone',
    tagline: 'Valve amps and pedals, made in London', stats: { followers: '71.2K', content: '340', products: '18' },
    ad: { badge: 'Featured', img: U('1786121990395-5d3658ed15a9', 760, 760), hl: 'Valve warmth, living-room size.', sub: 'The Tonebox 15, hand-wired in east London.', meta: 'From £79' },
    products: [
      { name: 'Tonebox 15', price: '£899', tag: 'FLAGSHIP', emoji: '🔊', rating: 4.9, reviews: 960, cat: 'amps', special: true, desc: 'A 15-watt valve combo with a 1-watt setting for home and a 12-inch speaker for the pub.', features: ['Hand-wired', 'Five-year warranty'], review: { who: 'Dev K.', text: 'The tone I’ve chased for twenty years.' } },
      { name: 'Overdrive Pedal', price: '£129', tag: 'BESTSELLER', emoji: '🟠', rating: 4.8, reviews: 1840, cat: 'pedals', desc: 'From a light crunch to a full roar, with a tone knob that actually works.', features: ['True bypass'], review: { who: 'Olly B.', text: 'Lives on my board.' } },
      { name: 'Practice Amp 10', price: '£79', emoji: '🎧', rating: 4.7, reviews: 2620, cat: 'amps', desc: 'A small practice amp with a headphone socket.', features: ['Headphone out'], review: { who: 'Tia R.', text: 'Mum is very grateful for the headphones.' } },
      { name: 'Reverb Pedal', price: '£149', tag: 'SPECIAL', emoji: '🌊', rating: 4.8, reviews: 720, cat: 'pedals', special: true, desc: 'Spring, hall and a shimmer that makes chords float.', features: ['Stereo'], review: { who: 'Lou T.', text: 'Instant cathedral.' } }
    ],
    shopCats: [ { key: 'amps', label: 'Amps', icon: '🔊' }, { key: 'pedals', label: 'Pedals', icon: '🟠' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'On stage in Camden last night: a <b>Tonebox 15</b> and an overdrive, nothing else.', img: U('1498038432885-c6f3f1b912ee', 800, 440), eng: '♡ 5.8K · 💬 420', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Valve amp clinic', when: 'Dec 3 · 19:00', desc: 'How valve amps work and how to look after yours, live from the workshop.', registered: 640, capacity: 2000 } ],
    about: { founded: 'Hackney · 2013', story: 'An electronics engineer who repaired amps for pub bands, then started building them.', milestones: [['2013', 'The first amp'], ['2021', 'The Tonebox 15'], ['2026', 'Brand Zone on GuitarXX']], values: ['Hand-wired', 'Repairable for life', 'Built for real rooms'] } }),

  'gig-bag-co': brand({ key: 'gig-bag-co', name: 'Gig Bag Co.', color: '#C99A6B', gradient: WOOD, tier: 'Brand Zone',
    tagline: 'Cases and straps that survive the tour', stats: { followers: '44.8K', content: '210', products: '30' },
    ad: { badge: 'Gift', img: U('1787074191751-78c2044f2fb7', 760, 760), hl: 'Protect the thing you love.', sub: 'Padded gig bags, hard cases and leather straps.', meta: 'From £22' },
    products: [
      { name: 'Padded Gig Bag', price: '£68', tag: 'FLAGSHIP', emoji: '🎒', rating: 4.8, reviews: 2140, cat: 'cases', special: true, desc: '25mm padding, a neck cradle and rucksack straps for the bus.', features: ['Acoustic or electric sizes'], review: { who: 'Olly B.', text: 'Survived a year of open mics.' } },
      { name: 'Leather Strap', price: '£32', tag: 'BESTSELLER', emoji: '🟫', rating: 4.8, reviews: 1860, cat: 'straps', desc: 'Veg-tanned leather that softens with you.', features: ['Initials free'], review: { who: 'Lou T.', text: 'Looks better every month.' } },
      { name: 'Hard Case', price: '£149', emoji: '🧳', rating: 4.8, reviews: 860, cat: 'cases', desc: 'A plywood case with a humidity pouch for winter.', features: ['Lockable'], review: { who: 'Fin A.', text: 'Peace of mind on trains.' } },
      { name: 'Personalised Strap', price: '£22', tag: 'SPECIAL', emoji: '✨', rating: 4.9, reviews: 640, cat: 'straps', special: true, desc: 'Your name or a lyric, stamped into the leather.', features: ['Gift boxed'], review: { who: 'Tia R.', text: 'Best present I’ve ever got.' } }
    ],
    shopCats: [ { key: 'cases', label: 'Cases', icon: '🎒' }, { key: 'straps', label: 'Straps', icon: '🟫' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Personalised straps for Christmas: a name, a date or a lyric.', img: U('1568193755668-aae18714a9f1', 800, 440), eng: '♡ 2.8K · 💬 190', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for personalised straps', when: 'Dec 14 · 23:59', desc: 'Order by midnight on 14 December for delivery before Christmas.', registered: 820, capacity: 2500 } ],
    about: { founded: 'Walsall · 2016', story: 'A saddler from Walsall’s leather quarter who started making guitar straps for his son.', milestones: [['2016', 'The first strap'], ['2022', 'Padded gig bags'], ['2026', 'Brand Zone on GuitarXX']], values: ['Walsall leather', 'Built to tour', 'Repairs for life'] } }),

  'tonewood-timber': { key: 'tonewood-timber', kind: 'business', gw: 'guitar', name: 'Tonewood Timber Co.', color: '#C99A6B', gradient: WOOD, img: U('1559304732-41b6a6a618c3', 900, 500),
    tier: 'Verified', category: 'Instrument timber', tagline: 'Responsibly sourced tonewoods for guitar makers.',
    about: { founded: 'Hereford · 1998', story: 'We source, season and supply tonewoods to guitar makers across Europe: spruce and cedar tops, walnut and maple backs, all from managed forests.' },
    stats: { years: 28, staff: 22, clients: '600 makers' },
    caps: [ { name: 'Seasoned tonewood', detail: 'Air-dried for at least five years.' }, { name: 'Bookmatched sets', detail: 'Tops and backs cut and matched.' }, { name: 'Local hardwoods', detail: 'British walnut and cherry instead of rainforest woods.' } ],
    specs: { moq: 'One set', lead: 'In stock: 3 days', regions: 'UK & Europe', certs: ['FSC certified', 'CITES compliant', 'Responsible sourcing audit'] },
    supplies: [ { kind: 'brand', key: 'northbridge', what: 'Spruce tops and walnut sets for the Fellside' } ],
    cases: [ { title: 'A small maker’s first range', text: 'Twelve matched sets in British walnut, seasoned and ready.' } ],
    feed: [ { sub: 'Wood yard · 3d', text: 'A fine batch of Alpine spruce tops has just finished seasoning.' } ],
    contact: { person: 'Tom Briggs, Makers', response: 'Replies within 24 hours' } },

  'backline-hire': { key: 'backline-hire', kind: 'business', gw: 'guitar', name: 'Backline Hire North', color: '#C084FC', gradient: LILAC, img: U('1764573272514-0fc34d230360', 900, 500),
    tier: 'Verified', category: 'Gig equipment hire', tagline: 'Amps, drums and PA for gigs and festivals.',
    about: { founded: 'Manchester · 2007', story: 'We hire backline (amps, drum kits, keyboards and PA) to venues, festivals and touring bands across the North, delivered and set up.' },
    stats: { years: 19, staff: 40, clients: '900 venues & bands' },
    caps: [ { name: 'Backline packages', detail: 'Amps, cabs and drums matched to the rider.' }, { name: 'Festival stages', detail: 'Whole-stage backline with a tech.' }, { name: 'Open mic kits', detail: 'A small PA and two vocal mics for pub nights.' } ],
    specs: { moq: 'One night', lead: '48 hours', regions: 'North of England & Scotland', certs: ['PAT tested', 'Fully insured', 'Living Wage employer'] },
    supplies: [ { kind: 'brand', key: 'tonebox', what: 'Tonebox 15s in the hire fleet' } ],
    cases: [ { title: 'A weekly open mic in Glasgow', text: 'A small PA kit every Tuesday for two years.' } ],
    feed: [ { sub: 'News · 4d', text: 'New open mic kits for pubs: PA, two mics, one price.' } ],
    contact: { person: 'Jo Fenwick, Bookings', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('guitar', [
  { gw: 'guitar', zone: 'northbridge', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Northbridge Live · Workshop tour', desc: 'Walk the Kendal workshop with the makers and hear every model played.' },
  { gw: 'guitar', type: 'Event', icon: '🎤', time: 'Nov 24', title: 'Tuesday open mic, Glasgow', desc: 'Glasgow Guitar Circle in the West End. Sign-up from 7:30.' },
  { gw: 'guitar', type: 'Event', icon: '💻', time: 'Nov 26', title: 'Online open mic', desc: 'Open Mic Club: play one song from your living room.' },
  { gw: 'guitar', zone: 'fretwise', type: 'Sale', icon: '🎼', time: 'Nov 27', title: 'Fretwise Black Friday', desc: 'Three sets of strings for the price of two.' },
  { gw: 'guitar', zone: 'tonebox', type: 'Event', icon: '🔊', time: 'Dec 3', title: 'Valve amp clinic', desc: 'Tonebox: how valve amps work and how to look after yours.' },
  { gw: 'guitar', type: 'Event', icon: '🎸', time: 'Dec 2', title: 'Monthly jam, Glasgow', desc: 'Glasgow Guitar Circle: bring a guitar, any level.' },
  { gw: 'guitar', type: 'Event', icon: '🎄', time: 'Dec 9', title: 'Christmas songs jam', desc: 'Open Mic Club: carols, Christmas pop and a lot of capos.' },
  { gw: 'guitar', zone: 'gig-bag-co', type: 'Deadline', icon: '🎁', time: 'Dec 14', title: 'Last order for personalised straps', desc: 'Gig Bag Co.: order by midnight for Christmas.' }
]);
})();
/* ═════════ /GUITARXX ═════════ */
