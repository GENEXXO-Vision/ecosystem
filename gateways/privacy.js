/* ═════════ PRIVACYXX — a Security demo gateway (2026-11-27, Sean; build -99) ═════════
   Built with the _tools/README.md recipe. Palette (light): calm paper, deep green, ink navy.
   Home sector: Security (also listed in Tech; GW_HOME.privacy = 'security' in genexxo-data.js, and 'security' is in HOME_ONLY).
   Every company, maker, pro and product is fictional; places are real.
   Tone: everyday privacy for normal people: practical, calm, never scary. No hacking how-tos. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const GREEN = 'linear-gradient(135deg,#4ADE80,#15803D)', NAVY = 'linear-gradient(135deg,#475569,#0F172A)', AMBER = 'linear-gradient(135deg,#FCD34D,#B45309)', VIOLET = 'linear-gradient(135deg,#A78BFA,#6D28D9)';

GATEWAYS.privacy = {
  name: 'PrivacyXX', domain: 'privacyxx.com', emoji: '🔒', sector: 'security', live: true,
  tagline: 'The Privacy Universe',
  theme: {
    bg: '#F3F7F4', text: '#0E1A14', cardBg: '#FFFFFF', cardBorder: 'rgba(14,26,20,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F3F7F4)', accent: '#15803D', accentAlt: '#0F172A', dark: false
  },
  gradient: 'linear-gradient(135deg,#4ADE80,#15803D,#0F172A)',
  stats: { members: '3.2M', brands: '860+', agents: '28' },
  spaces: ['All Feed', 'Phones', 'Passwords', 'Home', 'Small Business', 'Your Rights'],
  trending: ['#PrivacyCheckUp', '#PassphraseNotPassword', '#AskForYourData'],
  brandZones: [
    { key: 'quietkey', name: 'Quietkey', color: '#15803D', tier: 'Founding Partner', tag: 'The password manager your whole family can use' },
    { key: 'unlisted', name: 'Unlisted', color: '#0F172A', tier: 'Brand Zone', tag: 'Gets your address off people-search websites' },
    { key: 'coverlet', name: 'Coverlet', color: '#B45309', tier: 'Brand Zone', tag: 'Webcam covers and privacy screens' },
    { key: 'hushline', name: 'Hushline', color: '#6D28D9', tier: 'Brand Zone', tag: 'Private email with no adverts and no tracking' }
  ],
  apps: [
    { name: 'Password Check', color: '#15803D', desc: 'How strong is it, really? Checked on your phone, never sent', key: 'password-check', url: 'apps/password-check.html',
      dev: 'Quietkey', rating: '4.9', users: '2.1M', perms: ['profile', 'feed'],
      tagline: 'Stronger passwords in a minute.',
      about: 'Password Check tells you how long a password would take to guess, and makes you a memorable four-word passphrase instead. Everything happens on your phone: nothing you type is saved or sent.',
      features: ['Strength in plain words', 'Four-word passphrases', 'Nothing saved or sent', 'Share your passphrase count'],
      shots: ['apps/password-check/shot-1.jpg', 'apps/password-check/shot-2.jpg', 'apps/password-check/shot-3.jpg'],
      version: '4.1', size: '9 KB',
      updates: [ { v: '4.1', ago: 2, notes: 'Passphrases.' }, { v: '3.5', ago: 64, notes: 'Plain-words strength.' }, { v: '2.8', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@locked_down_lou', stars: 5, ago: 1, text: 'Finally a password I can remember.' }, { who: '@sophie_hart_privacy', stars: 5, ago: 12, text: 'I use it in every workshop.' }, { who: '@dad_does_tech', stars: 4, ago: 40, text: 'Simple. My dad gets it.' } ] },
    { name: 'Privacy Check-Up', color: '#0F172A', desc: 'Twenty-minute checklist for your phone, accounts and home', key: 'privacy-checkup', url: 'apps/privacy-checkup.html',
      dev: 'Unlisted', rating: '4.8', users: '1.4M', perms: ['profile', 'feed'],
      tagline: 'Twenty minutes, a lot more private.',
      about: 'Privacy Check-Up walks you through the settings that matter most: location, ad tracking, two-step sign-in, old accounts and your home Wi-Fi. Tick each one off and watch your score go up.',
      features: ['Phone, accounts and home', 'Why each step matters', 'Your privacy score', 'Share your score'],
      shots: ['apps/privacy-checkup/shot-1.jpg', 'apps/privacy-checkup/shot-2.jpg', 'apps/privacy-checkup/shot-3.jpg'],
      version: '2.9', size: '9 KB',
      updates: [ { v: '2.9', ago: 3, notes: 'Home Wi-Fi steps.' }, { v: '2.2', ago: 80, notes: 'Why each step matters.' }, { v: '1.6', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@dad_does_tech', stars: 5, ago: 2, text: 'Did it with Mum over a cup of tea.' }, { who: '@locked_down_lou', stars: 5, ago: 18, text: '92 out of 100 and climbing.' }, { who: '@margaret_ellis_online', stars: 4, ago: 44, text: 'Clear, no jargon.' } ] },
    { name: 'Data Request', color: '#6D28D9', desc: 'Ask any company what they hold on you', key: 'data-request', url: 'apps/data-request.html',
      dev: 'Hushline', rating: '4.8', users: '760K', perms: ['profile', 'feed'],
      tagline: 'It’s your data. Ask for it.',
      about: 'Data Request writes a subject access request letter for you and keeps track of the one-month reply deadline. It explains your rights in plain English. It’s a demo, not legal advice.',
      features: ['Letter written for you', 'One-month deadline tracker', 'Your rights, explained', 'Share a request'],
      shots: ['apps/data-request/shot-1.jpg', 'apps/data-request/shot-2.jpg', 'apps/data-request/shot-3.jpg'],
      version: '1.8', size: '9 KB',
      updates: [ { v: '1.8', ago: 1, notes: 'Deadline tracker.' }, { v: '1.4', ago: 70, notes: 'Rights explained.' }, { v: '1.0', ago: 180, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@locked_down_lou', stars: 5, ago: 3, text: 'Got 40 pages back from my old gym.' }, { who: '@sami_haddad_safety', stars: 5, ago: 20, text: 'Brilliant for showing people their rights.' }, { who: '@dad_does_tech', stars: 4, ago: 50, text: 'Easy letter.' } ] }
  ],
  pros: [
    { key: 'sophie-hart-privacy', name: 'Sophie Hart Privacy Training', color: '#15803D', tag: 'Privacy training for small businesses', role: 'Privacy trainer',
      img: U('1543949806-2c9935e6aa78', 800, 800), base: 'Leeds, UK · and online', langs: 'English', years: 12, rating: '4.9', reviewsN: 238, cur: '£',
      creds: ['Ten years as a data protection officer', 'Trains shops, clinics and charities', 'Writes the PrivacyXX small business guide'],
      about: 'Sophie helps small businesses look after customer data properly: what to keep, what to delete, and what to say on your website, in plain English.',
      services: [ { id: 'check', name: 'Small business privacy check', dur: '90 minutes', price: 150, desc: 'Your forms, files and website, checked together.' },
                  { id: 'team', name: 'Team workshop', dur: 'Half a day', price: 480, desc: 'Everyday privacy for the whole team.' },
                  { id: 'qa', name: 'Ask Sophie call', dur: '30 minutes', price: 45, desc: 'One question, answered properly.' } ],
      avail: { days: [1, 2, 3, 4], times: ['09:30', '13:00', '16:00'] },
      reviews: [ { who: '@locked_down_lou', stars: 5, ago: 2, text: 'Our salon’s customer list is finally sorted.' }, { who: '@dad_does_tech', stars: 5, ago: 22, text: 'Calm and practical.' }, { who: '@sami_haddad_safety', stars: 5, ago: 48, text: 'The best trainer I know.' } ],
      posts: [ { ago: 1, text: 'If you don’t need it, don’t collect it. The safest customer data is the data you never asked for.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'sami-haddad-safety', name: 'Sami Haddad Family Online Safety', color: '#0F172A', tag: 'Helping families set up phones and tablets safely', role: 'Online safety adviser',
      img: U('1692197393247-c76e1bd8f29e', 800, 800), base: 'Birmingham, UK · and online', langs: 'English, Arabic', years: 9, rating: '4.9', reviewsN: 196, cur: '£',
      creds: ['Former school IT manager', 'Runs parent evenings across the Midlands', 'Father of three'],
      about: 'Sami helps parents set up children’s phones and tablets: sensible settings, honest conversations and no spying. He keeps it calm and practical.',
      services: [ { id: 'home', name: 'Family set-up visit', dur: '2 hours', price: 90, desc: 'Every device in the house, set up together.' },
                  { id: 'talk', name: 'Parent evening talk', dur: '1 hour', price: 220, desc: 'For schools and parent groups.' },
                  { id: 'call', name: 'Quick video call', dur: '30 minutes', price: 35, desc: 'One device, one worry, sorted.' } ],
      avail: { days: [2, 3, 4, 6], times: ['10:00', '17:30'] },
      reviews: [ { who: '@dad_does_tech', stars: 5, ago: 4, text: 'Our eleven-year-old’s first phone, set up properly.' }, { who: '@locked_down_lou', stars: 5, ago: 26, text: 'No scare stories, just good sense.' }, { who: '@margaret_ellis_online', stars: 5, ago: 52, text: 'Kind and clear.' } ],
      posts: [ { ago: 2, text: 'Before you set any controls, have the conversation. Settings help, but trust does most of the work.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'margaret-ellis-online', name: 'Margaret Ellis Online Confidence', color: '#B45309', tag: 'Friendly online safety sessions for older people', role: 'Digital skills tutor',
      img: U('1566616213894-2d4e1baee5d8', 800, 800), base: 'Bath, UK', langs: 'English', years: 18, rating: '5.0', reviewsN: 164, cur: '£',
      creds: ['Retired librarian', 'Runs weekly sessions in Bath libraries', 'Taught over a thousand people to spot scams'],
      about: 'Margaret helps older people feel confident online: spotting scam messages, using strong passwords and keeping in touch with family safely.',
      services: [ { id: 'one', name: 'One-to-one session', dur: '1 hour', price: 25, desc: 'At home or in the library.' },
                  { id: 'group', name: 'Group session', dur: '90 minutes', price: 60, desc: 'For clubs and care homes.' },
                  { id: 'phone', name: 'Phone help', dur: '20 minutes', price: 10, desc: 'A quick question, any time.' } ],
      avail: { days: [1, 3, 5], times: ['10:00', '14:00'] },
      reviews: [ { who: '@dad_does_tech', stars: 5, ago: 3, text: 'My mother now spots the scam texts before I do.' }, { who: '@sophie_hart_privacy', stars: 5, ago: 30, text: 'Patience of a saint.' }, { who: '@locked_down_lou', stars: 5, ago: 60, text: 'A treasure.' } ],
      posts: [ { ago: 3, text: 'A real bank will never ask you to move money to a “safe account”. If in doubt, hang up and ring the number on your card.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'privacy-for-everyone', name: 'Privacy for Everyone', domain: 'everyone.privacyxx.com', color: '#15803D', img: U('1532356884227-66d7c0e9e4c2', 900, 500),
      scope: 'Global', where: 'Wherever you are online', members: 486000, online: 5240, tagline: 'No jargon, no fear, just good habits.',
      about: 'Normal people helping each other stay private online: phones, passwords, scams and your rights. Beginners very welcome, and no question is silly.',
      rules: ['No hacking or snooping how-tos', 'Never post anyone’s personal details', 'Be kind to beginners'],
      mods: ['@locked_down_lou', '@dad_does_tech'],
      threads: [ { t: 'The five settings I change on every new phone', by: '@locked_down_lou', tag: 'PHONES', replies: 2140, ago: 0, votes: 4380 }, { t: 'Got a “parcel held” text? Here’s how to check', by: '@dad_does_tech', tag: 'SCAMS', replies: 1860, ago: 1, votes: 3720 }, { t: 'I asked my supermarket for my data. Here’s what came back', by: '@locked_down_lou', tag: 'RIGHTS', replies: 1240, ago: 2, votes: 2960 }, { t: 'Passphrases for beginners', by: '@dad_does_tech', tag: 'PASSWORDS', replies: 980, ago: 3, votes: 2140 } ],
      events: [ { title: 'Live: twenty-minute privacy check-up', day: 3, time: '19:00', where: 'Online' }, { title: 'Ask us anything: scams and fake texts', day: 10, time: '12:30', where: 'Online' } ] },
    { key: 'leeds-digital-safety-cafe', name: 'Leeds Digital Safety Café', domain: 'leeds.privacyxx.com', color: '#B45309', img: U('1593733925160-6f78dc0be8b6', 900, 500),
      scope: 'Local', where: 'Leeds', members: 1340, online: 31, tagline: 'Bring your phone, have a brew, leave safer.',
      about: 'A monthly drop-in café in Leeds where volunteers help anyone with their phone, passwords or a worrying message. Free, friendly and no question too small.',
      rules: ['Never share anyone’s passwords', 'Volunteers never take your phone away', 'Tea is free'],
      mods: ['@sophie_hart_privacy', '@locked_down_lou'],
      threads: [ { t: 'December café: Christmas shopping safely online', by: '@sophie_hart_privacy', tag: 'MEETUP', replies: 38, ago: 0, votes: 88 }, { t: 'Volunteers wanted for the new year', by: '@locked_down_lou', tag: 'VOLUNTEER', replies: 26, ago: 1, votes: 60 }, { t: 'Thank you from the Headingley group', by: '@sophie_hart_privacy', tag: 'THANKS', replies: 18, ago: 2, votes: 44 } ],
      events: [ { title: 'December café: shopping safely online', day: 8, time: '10:30', where: 'Leeds' }, { title: 'January café: new year, new passwords', day: 43, time: '10:30', where: 'Leeds' } ] }
  ],
  feed: [
    { av: 'PX', avBg: GREEN, author: 'PrivacyXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Privacy isn’t about having something to hide. It’s about choosing who knows what. Phones, passwords, scams and your rights, explained calmly for everyone.',
      img: U('1584433144859-1fc3ab64a957', 800, 600), eng: '♡ 28.6K · 💬 2.2K · ↗ 3.8K' },
    { av: 'LL', avBg: GREEN, author: '@locked_down_lou', sub: 'Passwords · Just now', badge: 'COMMUNITY',
      text: 'Spent Sunday afternoon swapping my mum’s 14 passwords for passphrases and turning on two-step sign-in. She says it was easier than her new telly.',
      img: U('1647183565362-bf13f742c41e', 800, 600), eng: '♡ 12.8K · 💬 1.6K · ↗ 1.2K' },
    { av: 'QK', avBg: GREEN, author: 'Quietkey', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: a real family does a privacy check-up together, start to finish. Passwords, phones and old accounts, sorted in an hour. Follow <b>Quietkey</b>.',
      img: U('1614064548237-096f735f344f', 800, 600), eng: '♡ 16.4K · 💬 2.1K · ↗ 2.4K' },
    { av: 'UL', avBg: NAVY, author: 'Unlisted', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Your home address shouldn’t be one search away. <b>Unlisted</b> asks people-search websites to take it down, and checks every month that it stays down.',
      img: U('1570101945621-945409a6370f', 800, 600), eng: '♡ 7.8K · 💬 560 · ↗ 820' },
    { av: 'DT', avBg: NAVY, author: '@dad_does_tech', sub: 'Phones · 2h ago', badge: 'COMMUNITY',
      text: 'Went through my phone’s location settings. Eleven apps could see where I was all the time. Now it’s two, and only while I’m using them.',
      img: U('1572016047668-5b5e909e1605', 800, 600), eng: '♡ 6.4K · 💬 480 · ↗ 410' },
    { av: 'CV', avBg: AMBER, author: 'Coverlet', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'A slide, a click, done. The <b>Coverlet Slide</b> webcam cover fits every laptop and tablet we’ve tried.',
      img: U('1702390734475-d81dd8ae8fde', 800, 600), eng: '♡ 4.2K · 💬 260 · ↗ 380' },
    { av: 'ME', avBg: AMBER, author: 'Margaret Ellis Online Confidence', sub: 'Scams · 6h ago', badge: 'PRO ZONE',
      text: 'This week’s library group learned the golden rule: a real bank never rushes you. If a message feels urgent, put the phone down and ring the number on your card.',
      img: U('1689799514696-b16af9b53753', 800, 600), eng: '♡ 5.6K · 💬 340 · ↗ 720' }
  ],
  prompts: ['What should I change on a new phone?', 'How do I make a strong password I can remember?', 'How do I spot a scam text?', 'How do I ask a company for my data?'],
  businesses: ['clearpath-privacy', 'homeguard-visits']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'privacy', verified: true }, o);
Object.assign(ZONES, {
  'quietkey': brand({ key: 'quietkey', name: 'Quietkey', color: '#15803D', gradient: GREEN, tier: 'Founding Partner',
    tagline: 'The password manager your whole family can use', stats: { followers: '412K', content: '680', products: '5' },
    ad: { badge: 'Featured', img: U('1774898989484-0b9becf69efb', 760, 760), hl: 'One passphrase. Every account.', sub: 'A password manager simple enough for the whole family.', meta: 'From £2.50 a month' },
    products: [
      { name: 'Quietkey Family', price: '£4 a month', tag: 'FLAGSHIP', emoji: '🔑', rating: 4.9, reviews: 6240, cat: 'plans', special: true, desc: 'Passwords for up to six people, with shared folders for the household.', features: ['Phone, tablet and laptop', 'Emergency access'], review: { who: 'Lou B.', text: 'Mum, Dad and the kids all use it.' } },
      { name: 'Quietkey Personal', price: '£2.50 a month', tag: 'BESTSELLER', emoji: '🔐', rating: 4.8, reviews: 8120, cat: 'plans', desc: 'Every password, one passphrase to remember.', features: ['Warns about reused passwords'], review: { who: 'Dan T.', text: 'Set up in ten minutes.' } },
      { name: 'Security Key', price: '£24', emoji: '🗝️', rating: 4.8, reviews: 1460, cat: 'keys', desc: 'A small key you tap to sign in. Phishing sites can’t fake it.', features: ['USB-C and NFC'], review: { who: 'Sophie H.', text: 'The best £24 you’ll spend.' } },
      { name: 'Family Set-Up Call', price: '£30', tag: 'SPECIAL', emoji: '📞', rating: 4.9, reviews: 620, cat: 'keys', special: true, desc: 'A friendly expert sets up the whole family on a video call.', features: ['Up to six people'], review: { who: 'Margaret E.', text: 'Patient and kind.' } }
    ],
    shopCats: [ { key: 'plans', label: 'Plans', icon: '🔑' }, { key: 'keys', label: 'Keys & help', icon: '🗝️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Fourteen passwords became one passphrase. That’s a Sunday with <b>Quietkey Family</b>.', img: U('1614064643392-8dd713152ae9', 800, 440), eng: '♡ 16.4K · 💬 2.1K · ↗ 2.4K', product: 0 },
      { type: 'community', who: 'Lou B.', whoBg: GREEN, sub: 'Community · 1d', text: 'What happens to my passwords if I lose my phone?', eng: '♡ 920 · 💬 240', reply: 'Hi Lou! Your vault is encrypted, so a lost phone can’t open it. Sign in on a new one with your passphrase and everything’s back. Set up emergency access too, just in case. 🔑' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Quietkey Live · a family privacy check-up', when: 'Live now', desc: 'A real family sorts passwords, phones and old accounts in an hour.', registered: 10240, capacity: 24000 } ],
    about: { founded: 'Edinburgh · 2016', story: 'Two engineers whose parents kept passwords on sticky notes. We joined PrivacyXX as Founding Partner because privacy should be easy for everyone, not just experts.', milestones: [['2016', 'Founded'], ['2022', 'One million families'], ['2026', 'Founding Partner on PrivacyXX']], values: ['Simple first', 'We can’t see your passwords', 'Help from real people'] } }),

  'unlisted': brand({ key: 'unlisted', name: 'Unlisted', color: '#0F172A', gradient: NAVY, tier: 'Brand Zone',
    tagline: 'Gets your address off people-search websites', stats: { followers: '138K', content: '320', products: '4' },
    ad: { badge: 'New', img: U('1488509082528-cefbba5ad692', 760, 760), hl: 'Your address, off the internet.', sub: 'We ask the sites to remove it and check it stays gone.', meta: 'From £5 a month' },
    products: [
      { name: 'Unlisted Monthly', price: '£5 a month', tag: 'FLAGSHIP', emoji: '🧹', rating: 4.7, reviews: 3120, cat: 'plans', special: true, desc: 'Removal requests to people-search sites, checked every month.', features: ['Monthly report', 'Cancel any time'], review: { who: 'Lou B.', text: 'My address is gone from all of them.' } },
      { name: 'Unlisted Household', price: '£9 a month', tag: 'BESTSELLER', emoji: '🏠', rating: 4.7, reviews: 1460, cat: 'plans', desc: 'Everyone at your address, covered.', features: ['Up to four people'], review: { who: 'Dan T.', text: 'Peace of mind.' } },
      { name: 'One-Off Sweep', price: '£29', emoji: '🔍', rating: 4.6, reviews: 860, cat: 'once', desc: 'A single round of removal requests, with a report.', features: ['Done in 30 days'], review: { who: 'Sami H.', text: 'Good starting point.' } },
      { name: 'Privacy Guide Book', price: '£8', tag: 'SPECIAL', emoji: '📗', rating: 4.8, reviews: 540, cat: 'once', special: true, desc: 'Plain-English guide to keeping your details private.', features: ['Paperback'], review: { who: 'Margaret E.', text: 'Lent it to the whole group.' } }
    ],
    shopCats: [ { key: 'plans', label: 'Plans', icon: '🧹' }, { key: 'once', label: 'One-off', icon: '🔍' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'This month we removed 41,000 addresses from people-search sites. Your street, your business. <b>Unlisted Monthly</b>.', img: U('1483478550801-ceba5fe50e8e', 800, 440), eng: '♡ 7.8K · 💬 560', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Where is your address online? A live demo', when: 'Dec 2 · 19:00', desc: 'How people-search sites work, and how to opt out yourself.', registered: 1640, capacity: 4000 } ],
    about: { founded: 'Manchester · 2019', story: 'Started after a friend was found by someone she’d moved away from. Now we help anyone keep their address private.', milestones: [['2019', 'Founded'], ['2023', 'Household plans'], ['2026', 'Brand Zone on PrivacyXX']], values: ['Safety first', 'Honest reports', 'Cancel any time'] } }),

  'coverlet': brand({ key: 'coverlet', name: 'Coverlet', color: '#B45309', gradient: AMBER, tier: 'Brand Zone',
    tagline: 'Webcam covers and privacy screens', stats: { followers: '86.2K', content: '210', products: '18' },
    ad: { badge: 'Christmas', img: U('1525547719571-a2d4ac8945e2', 760, 760), hl: 'Close the curtains on your camera.', sub: 'Covers and screens that just work.', meta: 'From £6' },
    products: [
      { name: 'Coverlet Slide', price: '£6', tag: 'FLAGSHIP', emoji: '📷', rating: 4.8, reviews: 7420, cat: 'covers', special: true, desc: 'A thin sliding webcam cover. Pack of three.', features: ['Fits laptops and tablets', 'Leaves no marks'], review: { who: 'Dan T.', text: 'Barely know it’s there.' } },
      { name: 'Privacy Screen 14"', price: '£34', tag: 'BESTSELLER', emoji: '🖥️', rating: 4.7, reviews: 2160, cat: 'screens', desc: 'Your screen looks dark to anyone beside you.', features: ['Magnetic, clips on and off'], review: { who: 'Sophie H.', text: 'Essential on the train.' } },
      { name: 'Phone Privacy Glass', price: '£14', emoji: '📱', rating: 4.6, reviews: 1820, cat: 'screens', desc: 'Screen protector that hides your phone from side angles.', features: ['Case friendly'], review: { who: 'Lou B.', text: 'No more nosy neighbours on the bus.' } },
      { name: 'Stocking Filler Pack', price: '£10', tag: 'SPECIAL', emoji: '🎁', rating: 4.8, reviews: 640, cat: 'covers', special: true, desc: 'Six slide covers in gift wrap.', features: ['Christmas only'], review: { who: 'Margaret E.', text: 'Gave one to everyone in my class.' } }
    ],
    shopCats: [ { key: 'covers', label: 'Webcam covers', icon: '📷' }, { key: 'screens', label: 'Privacy screens', icon: '🖥️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Lid open, camera closed. The <b>Coverlet Slide</b>, three for £6.', img: U('1562813733-b31f71025d54', 800, 440), eng: '♡ 4.2K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Stocking filler week: covers half price', when: 'Dec 7 · All week', desc: 'Coverlet Slide packs at half price, wrapped for Christmas.', registered: 2380, capacity: 6000 } ],
    about: { founded: 'Bristol · 2017', story: 'A designer who taped over her laptop camera and thought there must be a neater way.', milestones: [['2017', 'The first slide'], ['2021', 'Privacy screens'], ['2026', 'Brand Zone on PrivacyXX']], values: ['Small and neat', 'Made to last', 'Plastic-free packaging'] } }),

  'hushline': brand({ key: 'hushline', name: 'Hushline', color: '#6D28D9', gradient: VIOLET, tier: 'Brand Zone',
    tagline: 'Private email with no adverts and no tracking', stats: { followers: '164K', content: '380', products: '4' },
    ad: { badge: 'Featured', img: U('1550751827-4bd374c3f58b', 760, 760), hl: 'Email that isn’t reading along.', sub: 'No adverts, no tracking, no selling your inbox.', meta: 'From £3 a month' },
    products: [
      { name: 'Hushline Mail', price: '£3 a month', tag: 'FLAGSHIP', emoji: '✉️', rating: 4.8, reviews: 4860, cat: 'mail', special: true, desc: 'Encrypted email with your own address.', features: ['Blocks tracking pixels', 'Works with any phone'], review: { who: 'Lou B.', text: 'Moved over in an evening.' } },
      { name: 'Hushline Aliases', price: '£1.50 a month', tag: 'BESTSELLER', emoji: '🎭', rating: 4.8, reviews: 2640, cat: 'mail', desc: 'A different email address for every shop. Switch one off if it gets spammy.', features: ['Unlimited aliases'], review: { who: 'Dan T.', text: 'Now I know who sold my address.' } },
      { name: 'Hushline Business', price: '£5 a user a month', emoji: '🏢', rating: 4.7, reviews: 860, cat: 'work', desc: 'Private email for small teams.', features: ['Your own domain'], review: { who: 'Sophie H.', text: 'I recommend it to every client.' } },
      { name: 'Move-Over Help', price: '£20', tag: 'SPECIAL', emoji: '📦', rating: 4.8, reviews: 420, cat: 'work', special: true, desc: 'We move your old emails and contacts across for you.', features: ['Done in a day'], review: { who: 'Sami H.', text: 'Painless.' } }
    ],
    shopCats: [ { key: 'mail', label: 'Personal', icon: '✉️' }, { key: 'work', label: 'Business', icon: '🏢' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'One address for the gym, one for the shops, one for friends. <b>Hushline Aliases</b> show you exactly who passed your email on.', img: U('1512428559087-560fa5ceab42', 800, 440), eng: '♡ 5.2K · 💬 310', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Ask for your data: a live walkthrough', when: 'Dec 10 · 18:30', desc: 'Write a subject access request together, step by step.', registered: 1120, capacity: 3000 } ],
    about: { founded: 'Cambridge · 2018', story: 'A small team who believe email should work for you, not for advertisers.', milestones: [['2018', 'Hushline Mail'], ['2022', 'Aliases'], ['2026', 'Brand Zone on PrivacyXX']], values: ['No adverts, ever', 'Encrypted by default', 'Paid for by members'] } }),

  'clearpath-privacy': { key: 'clearpath-privacy', kind: 'business', gw: 'privacy', name: 'Clearpath Privacy', color: '#15803D', gradient: GREEN, img: U('1614064642639-e398cf05badb', 900, 500),
    tier: 'Verified', category: 'Data protection help for small businesses', tagline: 'Data protection, sorted in plain English.',
    about: { founded: 'Leeds · 2014', story: 'We help shops, clinics, charities and trades look after customer data properly: privacy notices, staff training and what to do if something goes wrong. No scare tactics, no jargon.' },
    stats: { years: 12, staff: 24, clients: '1,800 small businesses helped' },
    caps: [ { name: 'Privacy notices', detail: 'Written for your website in plain English.' }, { name: 'Staff training', detail: 'Short sessions, on site or online.' }, { name: 'Breach help', detail: 'Calm advice when something goes wrong.' } ],
    specs: { moq: 'One session', lead: '1 to 2 weeks', regions: 'UK', certs: ['Qualified data protection practitioners', 'Fully insured', 'Fixed prices'] },
    supplies: [ { kind: 'brand', key: 'hushline', what: 'Private email for client teams' } ],
    cases: [ { title: 'A dental practice, sorted', text: 'Patient forms, files and staff training updated in two visits.' } ],
    feed: [ { sub: 'Team · 3d', text: 'Our free small business checklist has been downloaded 20,000 times. Thank you!' } ],
    contact: { person: 'Anita Shah, Client help', response: 'Replies within one working day' } },

  'homeguard-visits': { key: 'homeguard-visits', kind: 'business', gw: 'privacy', name: 'Homeguard Visits', color: '#0F172A', gradient: NAVY, img: U('1776161560127-a8623e0fa820', 900, 500),
    tier: 'Verified', category: 'Home tech set-up visits', tagline: 'Your home Wi-Fi, phones and accounts, set up safely.',
    about: { founded: 'Bristol · 2016', story: 'A friendly expert visits your home and sets up the Wi-Fi, phones, tablets and smart speakers so they’re private and safe, then shows everyone how they work.' },
    stats: { years: 10, staff: 40, clients: '9,000 homes visited' },
    caps: [ { name: 'Home Wi-Fi', detail: 'New passwords and safer settings.' }, { name: 'Family devices', detail: 'Phones and tablets set up together.' }, { name: 'Smart home', detail: 'Doorbells and speakers, private by default.' } ],
    specs: { moq: 'One visit', lead: '3 to 10 days', regions: 'South West England and Wales', certs: ['DBS checked', 'Fully insured', 'Never takes devices away'] },
    supplies: [ { kind: 'brand', key: 'quietkey', what: 'Family password set-up' } ],
    cases: [ { title: 'Three generations, one afternoon', text: 'Grandparents, parents and teenagers, all set up safely in one visit.' } ],
    feed: [ { sub: 'Visits · 5d', text: 'December visits booking up fast: perfect before new Christmas gadgets arrive.' } ],
    contact: { person: 'Gareth Lewis, Bookings', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('privacy', [
  { gw: 'privacy', zone: 'quietkey', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Quietkey Live · a family privacy check-up', desc: 'A real family sorts passwords, phones and old accounts in an hour.' },
  { gw: 'privacy', zone: 'unlisted', type: 'Event', icon: '🧹', time: 'Dec 2', title: 'Where is your address online? A live demo', desc: 'How people-search sites work, and how to opt out.' },
  { gw: 'privacy', type: 'Event', icon: '📱', time: 'Nov 30', title: 'Live: twenty-minute privacy check-up', desc: 'Privacy for Everyone members do it together.' },
  { gw: 'privacy', zone: 'coverlet', type: 'Sale', icon: '📷', time: 'Dec 7', title: 'Stocking filler week: covers half price', desc: 'Coverlet Slide packs at half price.' },
  { gw: 'privacy', type: 'Event', icon: '☕', time: 'Dec 5', title: 'Leeds Digital Safety Café: shopping safely', desc: 'Bring your phone and have a brew in Leeds.' },
  { gw: 'privacy', zone: 'hushline', type: 'Event', icon: '✉️', time: 'Dec 10', title: 'Ask for your data: a live walkthrough', desc: 'Write a subject access request together.' },
  { gw: 'privacy', type: 'Event', icon: '🙋', time: 'Dec 7', title: 'Ask us anything: scams and fake texts', desc: 'How to check a message before you tap.' },
  { gw: 'privacy', type: 'Event', icon: '🏢', time: 'Dec 14', title: 'Small business privacy clinic with Sophie Hart', desc: 'Bring your forms and questions.' }
]);
})();
/* ═════════ /PRIVACYXX ═════════ */
