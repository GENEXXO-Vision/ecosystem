/* ═════════ EQUALITYXX — a Society demo gateway (2026-11-27, Sean; build -100) ═════════
   Built with the _tools/README.md recipe. Palette (light): warm white, poppy red, deep teal.
   Home sector: Society (listed only there). Every company, maker, pro and product is fictional; places are real.
   Tone: practical inclusion in everyday life: access, fair workplaces, being heard. Non-partisan: no parties, no campaigns
   against anyone. Rights are explained in general terms only; not legal advice (Citizens Advice and the EHRC as signposts). */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const POPPY = 'linear-gradient(135deg,#F87171,#B91C1C)', TEAL = 'linear-gradient(135deg,#5EEAD4,#0F766E)', SUN = 'linear-gradient(135deg,#FCD34D,#D97706)', PLUM = 'linear-gradient(135deg,#C084FC,#7E22CE)';

GATEWAYS.equality = {
  name: 'EqualityXX', domain: 'equalityxx.com', emoji: '🤝', sector: 'society', live: true,
  tagline: 'The Equality Universe',
  theme: {
    bg: '#FBF8F6', text: '#1F1416', cardBg: '#FFFFFF', cardBorder: 'rgba(31,20,22,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#FBF8F6)', accent: '#B91C1C', accentAlt: '#0F766E', dark: false
  },
  gradient: 'linear-gradient(135deg,#F87171,#B91C1C,#0F766E)',
  stats: { members: '2.6M', brands: '540+', agents: '26' },
  spaces: ['All Feed', 'Access', 'Work', 'Community', 'Language', 'Your Rights'],
  trending: ['#EveryoneIn', '#StepFreeAccess', '#FairHiring'],
  brandZones: [
    { key: 'openway', name: 'Openway', color: '#B91C1C', tier: 'Founding Partner', tag: 'Access reviews for venues, shops and events' },
    { key: 'signbridge', name: 'Signbridge', color: '#0F766E', tier: 'Brand Zone', tag: 'BSL interpreters and sign language courses' },
    { key: 'easyreach', name: 'Easyreach', color: '#D97706', tier: 'Brand Zone', tag: 'Everyday products designed for every body' },
    { key: 'mosaic-books', name: 'Mosaic Books', color: '#7E22CE', tier: 'Brand Zone', tag: 'Children’s books where every child sees themselves' }
  ],
  apps: [
    { name: 'Access Checklist', color: '#B91C1C', desc: 'Is your venue easy for everyone to visit? Check in ten minutes', key: 'access-checklist', url: 'apps/access-checklist.html',
      dev: 'Openway', rating: '4.9', users: '820K', perms: ['profile', 'feed'],
      tagline: 'Open the door wider.',
      about: 'Access Checklist walks a shop, café or venue through the basics: step-free entry, toilets, seating, signs, quiet space and information online. Tick what you have and see what to fix first.',
      features: ['Entrance, inside and online', 'What to fix first', 'Your access score', 'Share your progress'],
      shots: ['apps/access-checklist/shot-1.jpg', 'apps/access-checklist/shot-2.jpg', 'apps/access-checklist/shot-3.jpg'],
      version: '2.6', size: '9 KB',
      updates: [ { v: '2.6', ago: 2, notes: 'Quiet space section.' }, { v: '2.0', ago: 70, notes: 'Fix-first list.' }, { v: '1.4', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@cafe_owner_jo', stars: 5, ago: 1, text: 'We added a ramp and a menu in large print. Simple.' }, { who: '@peter_walsh_access', stars: 5, ago: 15, text: 'A great first step for any business.' }, { who: '@wheels_and_words', stars: 4, ago: 40, text: 'Wish every café used it.' } ] },
    { name: 'Speaking Time', color: '#0F766E', desc: 'See who gets heard in your meetings', key: 'speaking-time', url: 'apps/speaking-time.html',
      dev: 'Signbridge', rating: '4.8', users: '640K', perms: ['profile', 'feed'],
      tagline: 'Fair meetings, in numbers.',
      about: 'Speaking Time lets one person tap whoever is talking in a meeting and shows the share of time each person got. It’s a gentle way to notice who is quiet, and invite them in.',
      features: ['Tap to time each speaker', 'Share of the meeting', 'Past meetings', 'Share the result'],
      shots: ['apps/speaking-time/shot-1.jpg', 'apps/speaking-time/shot-2.jpg', 'apps/speaking-time/shot-3.jpg'],
      version: '1.9', size: '9 KB',
      updates: [ { v: '1.9', ago: 3, notes: 'Past meetings.' }, { v: '1.4', ago: 66, notes: 'Share of time.' }, { v: '1.0', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@amara_okafor_inclusion', stars: 5, ago: 2, text: 'An eye-opener for every team I work with.' }, { who: '@cafe_owner_jo', stars: 5, ago: 22, text: 'Our quietest volunteer had the best idea.' }, { who: '@wheels_and_words', stars: 4, ago: 44, text: 'Simple and kind.' } ] },
    { name: 'Rights Quiz', color: '#D97706', desc: 'Ten questions on everyday equality rights', key: 'rights-quiz', url: 'apps/rights-quiz.html',
      dev: 'Easyreach', rating: '4.8', users: '560K', perms: ['profile', 'feed'],
      tagline: 'Know your rights, simply.',
      about: 'Rights Quiz asks ten questions a day about everyday equality in the UK: reasonable adjustments, fair pay and treating people fairly at work and in shops. General information, not legal advice.',
      features: ['Ten a day', 'Plain-English answers', 'Your best score', 'Share your score'],
      shots: ['apps/rights-quiz/shot-1.jpg', 'apps/rights-quiz/shot-2.jpg', 'apps/rights-quiz/shot-3.jpg'],
      version: '1.5', size: '9 KB',
      updates: [ { v: '1.5', ago: 1, notes: 'Workplace questions.' }, { v: '1.2', ago: 60, notes: 'Plain-English answers.' }, { v: '1.0', ago: 180, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@wheels_and_words', stars: 5, ago: 3, text: 'Learned what a reasonable adjustment really is.' }, { who: '@mei_lin_community', stars: 5, ago: 24, text: 'Great for our new volunteers.' }, { who: '@cafe_owner_jo', stars: 4, ago: 48, text: 'Clear and quick.' } ] }
  ],
  pros: [
    { key: 'amara-okafor-inclusion', name: 'Amara Okafor Inclusion Training', color: '#B91C1C', tag: 'Practical inclusion training for teams', role: 'Inclusion trainer',
      img: U('1757649734013-705dd6456c02', 800, 800), base: 'Birmingham, UK · and online', langs: 'English, Igbo', years: 11, rating: '4.9', reviewsN: 232, cur: '£',
      creds: ['Ten years in HR and people teams', 'Trains charities, schools and small firms', 'Writes the EqualityXX fair hiring guide'],
      about: 'Amara helps teams make everyday work fairer: how you hire, how you run meetings and how you make sure everyone can do their best. Practical, warm and never preachy.',
      services: [ { id: 'workshop', name: 'Team workshop', dur: 'Half a day', price: 520, desc: 'Fair meetings, fair hiring, real examples.' },
                  { id: 'review', name: 'Hiring process review', dur: 'Two hours', price: 240, desc: 'Your adverts, interviews and offers, checked.' },
                  { id: 'call', name: 'Ask Amara call', dur: '30 minutes', price: 50, desc: 'One question, answered properly.' } ],
      avail: { days: [1, 2, 3, 4], times: ['09:30', '13:30'] },
      reviews: [ { who: '@cafe_owner_jo', stars: 5, ago: 2, text: 'Our job adverts are kinder and we get more applicants.' }, { who: '@wheels_and_words', stars: 5, ago: 26, text: 'She listens first.' }, { who: '@mei_lin_community', stars: 5, ago: 52, text: 'Brilliant trainer.' } ],
      posts: [ { ago: 1, text: 'Send interview questions a day early. It costs nothing, and it helps everyone show what they can really do.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'peter-walsh-access', name: 'Peter Walsh Access Consulting', color: '#0F766E', tag: 'Access reviews for buildings, websites and events', role: 'Access consultant',
      img: U('1770058428159-50cca6566c19', 800, 800), base: 'Leeds, UK', langs: 'English', years: 27, rating: '5.0', reviewsN: 198, cur: '£',
      creds: ['Twenty-five years as an access consultant', 'Former building surveyor', 'Works alongside disabled testers on every review'],
      about: 'Peter reviews buildings, websites and events with disabled testers, then writes a short, practical list of what to change first. Most fixes are cheaper than people think.',
      services: [ { id: 'venue', name: 'Venue access review', dur: 'Half a day', price: 380, desc: 'On site, with a written report.' },
                  { id: 'web', name: 'Website access check', dur: 'Two days', price: 450, desc: 'Screen readers, contrast and keyboards.' },
                  { id: 'event', name: 'Event planning call', dur: '1 hour', price: 70, desc: 'Make your next event open to all.' } ],
      avail: { days: [2, 3, 4], times: ['10:00', '14:00'] },
      reviews: [ { who: '@wheels_and_words', stars: 5, ago: 4, text: 'He actually brought wheelchair users to test it.' }, { who: '@cafe_owner_jo', stars: 5, ago: 30, text: 'Cheap fixes, big difference.' }, { who: '@amara_okafor_inclusion', stars: 5, ago: 58, text: 'The best in the business.' } ],
      posts: [ { ago: 2, text: 'A ramp is great. A ramp to a door that’s too heavy to open is not. Always test the whole journey.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'mei-lin-community', name: 'Mei Lin Community Organising', color: '#D97706', tag: 'Helping community groups reach everyone', role: 'Community organiser',
      img: U('1513097633097-329a3a64e0d4', 800, 800), base: 'Manchester, UK · and online', langs: 'English, Mandarin, Cantonese', years: 8, rating: '4.9', reviewsN: 146, cur: '£',
      creds: ['Runs a multilingual residents’ network', 'Trains volunteers in community groups', 'Former housing association officer'],
      about: 'Mei helps community groups reach people who often get missed: translated posters, accessible meetings and welcoming new volunteers.',
      services: [ { id: 'session', name: 'Volunteer welcome session', dur: '2 hours', price: 120, desc: 'For your new volunteers.' },
                  { id: 'plan', name: 'Outreach plan', dur: 'Two meetings', price: 200, desc: 'Who you’re missing and how to reach them.' },
                  { id: 'call', name: 'Quick call', dur: '30 minutes', price: 30, desc: 'One question about your group.' } ],
      avail: { days: [1, 3, 5, 6], times: ['10:00', '18:00'] },
      reviews: [ { who: '@cafe_owner_jo', stars: 5, ago: 3, text: 'Our street party had twice the neighbours this year.' }, { who: '@wheels_and_words', stars: 5, ago: 32, text: 'Practical and kind.' }, { who: '@peter_walsh_access', stars: 5, ago: 60, text: 'A natural connector.' } ],
      posts: [ { ago: 3, text: 'If your poster is only in English and only on Facebook, you’ve already decided who comes. Print it, translate it, pin it up at the shop.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'equal-voices', name: 'Equal Voices', domain: 'voices.equalityxx.com', color: '#B91C1C', img: U('1761666520005-3ffcf13e74c8', 900, 500),
      scope: 'Global', where: 'Wherever you are', members: 386000, online: 4240, tagline: 'Everyday fairness, shared and practical.',
      about: 'People sharing what makes everyday life fairer: at work, in shops, in schools and in their neighbourhoods. No party politics and no pile-ons: just good ideas and kindness. For advice about a specific situation, Citizens Advice can help.',
      rules: ['No party politics', 'Disagree kindly, never attack people', 'Share what worked'],
      mods: ['@wheels_and_words', '@cafe_owner_jo'],
      threads: [ { t: 'Small changes that made our shop easier to visit', by: '@cafe_owner_jo', tag: 'ACCESS', replies: 1640, ago: 0, votes: 3420 }, { t: 'How do you make meetings fair for quiet people?', by: '@wheels_and_words', tag: 'WORK', replies: 1280, ago: 1, votes: 2760 }, { t: 'What is a reasonable adjustment? Real examples', by: '@wheels_and_words', tag: 'RIGHTS', replies: 1920, ago: 2, votes: 3880 }, { t: 'Translating our community posters: what worked', by: '@cafe_owner_jo', tag: 'LANGUAGE', replies: 640, ago: 3, votes: 1420 } ],
      events: [ { title: 'Live: fair hiring in one hour', day: 5, time: '12:30', where: 'Online' }, { title: 'Ask us anything: reasonable adjustments', day: 13, time: '18:30', where: 'Online' } ] },
    { key: 'birmingham-access-group', name: 'Birmingham Access Group', domain: 'birmingham.equalityxx.com', color: '#0F766E', img: U('1732194439368-4655fd0ea955', 900, 500),
      scope: 'Local', where: 'Birmingham', members: 1240, online: 28, tagline: 'Testing the city, one door at a time.',
      about: 'Disabled people, carers and friends who test cafés, shops and venues around Birmingham and share honest reviews, so everyone knows before they go.',
      rules: ['Honest, fair reviews', 'Thank places that get it right', 'Everyone welcome'],
      mods: ['@wheels_and_words', '@amara_okafor_inclusion'],
      threads: [ { t: 'December meet-up: the Christmas market, tested', by: '@wheels_and_words', tag: 'MEETUP', replies: 44, ago: 0, votes: 102 }, { t: 'Best step-free cafés in Digbeth', by: '@amara_okafor_inclusion', tag: 'REVIEWS', replies: 36, ago: 1, votes: 84 }, { t: 'New lift at the library: tested!', by: '@wheels_and_words', tag: 'NEWS', replies: 22, ago: 2, votes: 58 } ],
      events: [ { title: 'December meet-up: the Christmas market, tested', day: 8, time: '11:00', where: 'Birmingham' }, { title: 'January access walk', day: 44, time: '11:00', where: 'Birmingham' } ] }
  ],
  feed: [
    { av: 'EX', avBg: POPPY, author: 'EqualityXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Fairness is mostly made of small, practical things: a step-free door, a translated poster, a meeting where everyone gets heard. Ideas for everyday life, with no party politics. This is a demo: for advice about your situation, speak to Citizens Advice.',
      img: U('1630068846062-3ffe78aa5049', 800, 600), eng: '♡ 24.2K · 💬 2.0K · ↗ 3.6K' },
    { av: 'WW', avBg: TEAL, author: '@wheels_and_words', sub: 'Access · Just now', badge: 'COMMUNITY',
      text: 'Went back to the café that had two steps last spring. They’ve fitted a ramp, lowered one table and put the menu online. I said thank you. They said thank you for telling us.',
      img: U('1570793005299-c091be91bbad', 800, 600), eng: '♡ 12.4K · 💬 1.5K · ↗ 1.1K' },
    { av: 'OW', avBg: POPPY, author: 'Openway', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: an access review of a Leeds theatre, with wheelchair users, a BSL user and a guide-dog owner testing the whole visit, from booking to the bar. Follow <b>Openway</b>.',
      img: U('1760367120301-a6838ae553d7', 800, 600), eng: '♡ 15.6K · 💬 1.9K · ↗ 2.3K' },
    { av: 'SB', avBg: TEAL, author: 'Signbridge', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Ten weeks, two evenings a week, and a whole office team can now say hello, ask how you are and order a coffee in BSL. <b>Signbridge</b> beginners’ courses start in January.',
      img: U('1542323228-002ac256e7b8', 800, 600), eng: '♡ 7.8K · 💬 560 · ↗ 840' },
    { av: 'CJ', avBg: SUN, author: '@cafe_owner_jo', sub: 'Work · 2h ago', badge: 'COMMUNITY',
      text: 'We started sending interview questions a day early. Same jobs, same pay, twice as many applicants, and our best new barista said it’s why she applied.',
      img: U('1633466159898-6f5b1a7b5a79', 800, 600), eng: '♡ 6.6K · 💬 520 · ↗ 460' },
    { av: 'MB', avBg: PLUM, author: 'Mosaic Books', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Our authors are grown-ups who never found themselves in a picture book, so they wrote the ones they needed. <b>Mosaic Books</b>: families of every shape, from every corner of Britain.',
      img: U('1622352496174-9e1d969b1945', 800, 600), eng: '♡ 5.2K · 💬 340 · ↗ 480' },
    { av: 'ML', avBg: SUN, author: 'Mei Lin Community Organising', sub: 'Community · 6h ago', badge: 'PRO ZONE',
      text: 'Our residents’ meeting had interpreters for three languages for the first time. Forty new faces, and the best ideas came from people we’d never heard from.',
      img: U('1761250027507-c0be614c0254', 800, 600), eng: '♡ 4.4K · 💬 280 · ↗ 360' }
  ],
  prompts: ['What is a reasonable adjustment?', 'How do I make my shop easier to visit?', 'How can meetings be fairer?', 'What are the protected characteristics?'],
  businesses: ['brightside-recruitment', 'common-ground-cafe']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'equality', verified: true }, o);
Object.assign(ZONES, {
  'openway': brand({ key: 'openway', name: 'Openway', color: '#B91C1C', gradient: POPPY, tier: 'Founding Partner',
    tagline: 'Access reviews for venues, shops and events', stats: { followers: '264K', content: '480', products: '6' },
    ad: { badge: 'Featured', img: U('1709880631993-0ec9e9093fa7', 760, 760), hl: 'Is everyone welcome? Let’s check.', sub: 'Access reviews by disabled testers, with a fix-first list.', meta: 'From £180' },
    products: [
      { name: 'Venue Access Review', price: 'From £380', tag: 'FLAGSHIP', emoji: '🚪', rating: 4.9, reviews: 1460, cat: 'reviews', special: true, desc: 'Disabled testers visit, then you get a short fix-first report.', features: ['Whole visit tested', 'Follow-up call'], review: { who: 'Jo P.', text: 'Clear, kind and practical.' } },
      { name: 'Shop Quick Check', price: '£180', tag: 'BESTSELLER', emoji: '🛍️', rating: 4.8, reviews: 2140, cat: 'reviews', desc: 'A one-hour review for small shops and cafés.', features: ['Written list'], review: { who: 'Amara O.', text: 'Perfect for small businesses.' } },
      { name: 'Event Access Plan', price: '£240', emoji: '🎟️', rating: 4.8, reviews: 860, cat: 'events', desc: 'Make your next event open to everyone, from tickets to toilets.', features: ['Template included'], review: { who: 'Mei L.', text: 'Our festival changed for the better.' } },
      { name: 'Access Signage Pack', price: '£45', tag: 'SPECIAL', emoji: '🪧', rating: 4.7, reviews: 540, cat: 'events', special: true, desc: 'Clear, high-contrast signs for doors, toilets and quiet rooms.', features: ['Ten signs'], review: { who: 'Peter W.', text: 'Readable from across the room.' } }
    ],
    shopCats: [ { key: 'reviews', label: 'Reviews', icon: '🚪' }, { key: 'events', label: 'Events & signs', icon: '🎟️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Testing the kitchen, not just the front door. A <b>Venue Access Review</b> covers the whole visit.', img: U('1732194438396-394d2b7c2436', 800, 440), eng: '♡ 15.6K · 💬 1.9K · ↗ 2.3K', product: 0 },
      { type: 'community', who: 'Jo P.', whoBg: POPPY, sub: 'Community · 1d', text: 'We’re a tiny café with no room for a ramp. Is there any point?', eng: '♡ 840 · 💬 230', reply: 'Hi Jo! Absolutely. A portable ramp, a bell at the door, a large-print menu and a clear photo of your entrance online all help a lot, and cost little. Start with what you can do. 🚪' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Openway Live · an access review of a Leeds theatre', when: 'Live now', desc: 'Disabled testers try the whole visit, live.', registered: 8840, capacity: 20000 } ],
    about: { founded: 'Leeds · 2014', story: 'An access consultant and a group of disabled testers who wanted reviews to be practical, not just a tick-box. We joined EqualityXX as Founding Partner because everyday fairness starts at the front door.', milestones: [['2014', 'Founded'], ['2021', 'Two thousand venues reviewed'], ['2026', 'Founding Partner on EqualityXX']], values: ['Tested by disabled people', 'Practical first', 'Fix what matters most'] } }),

  'signbridge': brand({ key: 'signbridge', name: 'Signbridge', color: '#0F766E', gradient: TEAL, tier: 'Brand Zone',
    tagline: 'BSL interpreters and sign language courses', stats: { followers: '142K', content: '360', products: '12' },
    ad: { badge: 'New', img: U('1556484687-30636164638b', 760, 760), hl: 'Say hello in BSL.', sub: 'Beginners’ courses and qualified interpreters.', meta: 'From £60' },
    products: [
      { name: 'BSL Beginners’ Course', price: '£180', tag: 'FLAGSHIP', emoji: '🤟', rating: 4.9, reviews: 2860, cat: 'courses', special: true, desc: 'Ten weeks with a Deaf tutor, online or in person.', features: ['Level 1 ready', 'Small groups'], review: { who: 'Jo P.', text: 'Best thing I’ve learned in years.' } },
      { name: 'Team Taster Session', price: '£240', tag: 'BESTSELLER', emoji: '👥', rating: 4.8, reviews: 1240, cat: 'courses', desc: 'Two hours of BSL basics for a workplace.', features: ['Up to twenty people'], review: { who: 'Amara O.', text: 'Great team activity.' } },
      { name: 'Interpreter Booking', price: 'From £60 an hour', emoji: '🗣️', rating: 4.9, reviews: 1860, cat: 'interpreting', desc: 'Qualified BSL interpreters for meetings and events.', features: ['Online or in person'], review: { who: 'Mei L.', text: 'Reliable and warm.' } },
      { name: 'Fingerspelling Cards', price: '£8', tag: 'SPECIAL', emoji: '🃏', rating: 4.7, reviews: 620, cat: 'interpreting', special: true, desc: 'The two-handed alphabet on pocket cards.', features: ['Pack of 30'], review: { who: 'Peter W.', text: 'Handy for practice.' } }
    ],
    shopCats: [ { key: 'courses', label: 'Courses', icon: '🤟' }, { key: 'interpreting', label: 'Interpreting', icon: '🗣️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Hands in for week ten: a whole team graduates from the <b>BSL Beginners’ Course</b>.', img: U('1531844251246-9a1bfaae09fc', 800, 440), eng: '♡ 7.8K · 💬 560', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Free BSL taster: greetings and names', when: 'Dec 3 · 18:30', desc: 'An hour with a Deaf tutor, online.', registered: 2140, capacity: 5000 } ],
    about: { founded: 'Manchester · 2011', story: 'Deaf tutors and interpreters who want more people signing in everyday life.', milestones: [['2011', 'The first course'], ['2019', 'Interpreting service'], ['2026', 'Brand Zone on EqualityXX']], values: ['Taught by Deaf tutors', 'Qualified interpreters', 'Small classes'] } }),

  'easyreach': brand({ key: 'easyreach', name: 'Easyreach', color: '#D97706', gradient: SUN, tier: 'Brand Zone',
    tagline: 'Everyday products designed for every body', stats: { followers: '96.8K', content: '240', products: '64' },
    ad: { badge: 'Christmas', img: U('1758599669009-5a9002c09487', 760, 760), hl: 'Made for more hands.', sub: 'Kitchen, home and outdoor kit that works for everyone.', meta: 'From £9' },
    products: [
      { name: 'Easygrip Kitchen Set', price: '£34', tag: 'FLAGSHIP', emoji: '🍳', rating: 4.8, reviews: 2460, cat: 'home', special: true, desc: 'Utensils with wide, soft handles that are easy to hold.', features: ['Dishwasher safe', 'Five pieces'], review: { who: 'Jo P.', text: 'Mum can cook again.' } },
      { name: 'Lightweight Kettle Tipper', price: '£22', tag: 'BESTSELLER', emoji: '🫖', rating: 4.7, reviews: 1640, cat: 'home', desc: 'Pour a hot drink without lifting the kettle.', features: ['Fits most kettles'], review: { who: 'Peter W.', text: 'Clever and simple.' } },
      { name: 'Grab Loop Pack', price: '£9', emoji: '🎒', rating: 4.6, reviews: 980, cat: 'outdoor', desc: 'Loops that make zips and bags easier to open.', features: ['Pack of ten'], review: { who: 'Mei L.', text: 'Every coat has one now.' } },
      { name: 'Walking Trail Seat', price: '£28', tag: 'SPECIAL', emoji: '🪑', rating: 4.8, reviews: 620, cat: 'outdoor', special: true, desc: 'A light folding seat for walks and queues.', features: ['Under 1 kg'], review: { who: 'Amara O.', text: 'Gamechanger for long days.' } }
    ],
    shopCats: [ { key: 'home', label: 'Home', icon: '🍳' }, { key: 'outdoor', label: 'Out & about', icon: '🎒' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'A park, a picnic and friends. The folding <b>Walking Trail Seat</b> means nobody has to sit it out.', img: U('1763901326436-256ad090a6c9', 800, 440), eng: '♡ 4.6K · 💬 280', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas week: kitchen sets 25% off', when: 'Dec 5 · All week', desc: 'Easygrip Kitchen Sets, 25% off.', registered: 1680, capacity: 4000 } ],
    about: { founded: 'Nottingham · 2015', story: 'Designers who test every product with disabled and older people before it goes on sale.', milestones: [['2015', 'The first grip'], ['2022', 'Outdoor range'], ['2026', 'Brand Zone on EqualityXX']], values: ['Tested by real users', 'Good-looking and useful', 'Fair prices'] } }),

  'mosaic-books': brand({ key: 'mosaic-books', name: 'Mosaic Books', color: '#7E22CE', gradient: PLUM, tier: 'Brand Zone',
    tagline: 'Children’s books where every child sees themselves', stats: { followers: '118K', content: '300', products: '52' },
    ad: { badge: 'Featured', img: U('1785835394931-beaa98c42d1f', 760, 760), hl: 'Stories for every child.', sub: 'Picture books with families of every shape.', meta: 'From £7' },
    products: [
      { name: 'Our Street', price: '£8', tag: 'FLAGSHIP', emoji: '📗', rating: 4.9, reviews: 3120, cat: 'picture', special: true, desc: 'A picture book about the neighbours on one busy street.', features: ['Ages 3 to 6'], review: { who: 'Mei L.', text: 'My daughter found her grandma in it.' } },
      { name: 'Everybody Plays', price: '£7', tag: 'BESTSELLER', emoji: '⚽', rating: 4.8, reviews: 1840, cat: 'picture', desc: 'A football story where every child gets a game.', features: ['Ages 4 to 7'], review: { who: 'Jo P.', text: 'Read it every night.' } },
      { name: 'Class Book Box', price: '£65', emoji: '📦', rating: 4.9, reviews: 640, cat: 'schools', desc: 'Twelve books for a classroom library.', features: ['Teacher notes'], review: { who: 'Amara O.', text: 'Every school should have one.' } },
      { name: 'Christmas Gift Set', price: '£18', tag: 'SPECIAL', emoji: '🎁', rating: 4.8, reviews: 420, cat: 'schools', special: true, desc: 'Two books and a colouring set, gift-wrapped.', features: ['Ages 3 to 7'], review: { who: 'Peter W.', text: 'Grandson loved it.' } }
    ],
    shopCats: [ { key: 'picture', label: 'Picture books', icon: '📗' }, { key: 'schools', label: 'Schools & gifts', icon: '📦' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'A high five at the end of story time. <b>Our Street</b>, read aloud in classrooms across Britain.', img: U('1461532257246-777de18cd58b', 800, 440), eng: '♡ 5.2K · 💬 340', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Story time live: Our Street', when: 'Dec 6 · 10:30', desc: 'The author reads, with BSL interpretation.', registered: 1240, capacity: 3000 } ],
    about: { founded: 'Bristol · 2017', story: 'A teacher and an illustrator making the books they couldn’t find for their classroom.', milestones: [['2017', 'Our Street'], ['2022', 'Class book boxes'], ['2026', 'Brand Zone on EqualityXX']], values: ['Every child in the story', 'Authors from everywhere', 'Read aloud well'] } }),

  'brightside-recruitment': { key: 'brightside-recruitment', kind: 'business', gw: 'equality', name: 'Brightside Recruitment', color: '#B91C1C', gradient: POPPY, img: U('1758272133803-1cbb513689ca', 900, 500),
    tier: 'Verified', category: 'Fair recruitment agency', tagline: 'Hiring that opens doors.',
    about: { founded: 'Birmingham · 2012', story: 'We help employers hire fairly and help candidates who often get overlooked: career changers, disabled people, people returning to work and people new to the UK.' },
    stats: { years: 14, staff: 48, clients: '1,900 people placed' },
    caps: [ { name: 'Fair job adverts', detail: 'Clear, welcoming and jargon-free.' }, { name: 'Accessible interviews', detail: 'Adjustments offered to every candidate.' }, { name: 'Returners', detail: 'Support back into work after a break.' } ],
    specs: { moq: 'One role', lead: '2 to 6 weeks', regions: 'Midlands and online', certs: ['Disability Confident employer', 'Living wage', 'Fair fees'] },
    supplies: [ { kind: 'brand', key: 'signbridge', what: 'BSL interpreters for interviews' } ],
    cases: [ { title: 'A warehouse team for everyone', text: 'Fair adverts and adjusted interviews filled forty roles in a month.' } ],
    feed: [ { sub: 'Team · 3d', text: 'January returners’ programme now open.' } ],
    contact: { person: 'Kwame Asante, Employers', response: 'Replies within one working day' } },

  'common-ground-cafe': { key: 'common-ground-cafe', kind: 'business', gw: 'equality', name: 'Common Ground Café', color: '#0F766E', gradient: TEAL, img: U('1783028104792-8506735c0383', 900, 500),
    tier: 'Verified', category: 'Community café and training kitchen', tagline: 'Good coffee, made by a team that includes everyone.',
    about: { founded: 'Bristol · 2016', story: 'A community café that trains and employs people with learning disabilities, with paid roles in the kitchen, at the till and on our outside catering team.' },
    stats: { years: 10, staff: 34, clients: '120 trainees into paid work' },
    caps: [ { name: 'Café', detail: 'Breakfast, lunch and cake, six days a week.' }, { name: 'Catering', detail: 'Events and office lunches.' }, { name: 'Training', detail: 'Paid traineeships in hospitality.' } ],
    specs: { moq: 'Ten people (catering)', lead: '1 week', regions: 'Bristol', certs: ['Food hygiene 5 stars', 'Living wage', 'Community interest company'] },
    supplies: [ { kind: 'brand', key: 'easyreach', what: 'Easygrip kitchen kit' } ],
    cases: [ { title: 'An office lunch with a difference', text: 'A Bristol firm switched its weekly lunch to Common Ground catering.' } ],
    feed: [ { sub: 'Café · 5d', text: 'Christmas lunches now booking. Mince pies by our new pastry team.' } ],
    contact: { person: 'Sophie Grant, Bookings', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('equality', [
  { gw: 'equality', zone: 'openway', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Openway Live · an access review of a Leeds theatre', desc: 'Disabled testers try the whole visit, live.' },
  { gw: 'equality', zone: 'signbridge', type: 'Event', icon: '🤟', time: 'Dec 3', title: 'Free BSL taster: greetings and names', desc: 'An hour with a Deaf tutor, online.' },
  { gw: 'equality', type: 'Event', icon: '💼', time: 'Dec 2', title: 'Live: fair hiring in one hour', desc: 'Equal Voices members share what works.' },
  { gw: 'equality', zone: 'easyreach', type: 'Sale', icon: '🍳', time: 'Dec 5', title: 'Christmas week: kitchen sets 25% off', desc: 'Easygrip Kitchen Sets, 25% off.' },
  { gw: 'equality', type: 'Event', icon: '🎄', time: 'Dec 5', title: 'Birmingham Access Group: the Christmas market, tested', desc: 'A friendly meet-up and honest reviews.' },
  { gw: 'equality', zone: 'mosaic-books', type: 'Event', icon: '📗', time: 'Dec 6', title: 'Story time live: Our Street', desc: 'The author reads, with BSL interpretation.' },
  { gw: 'equality', type: 'Event', icon: '🙋', time: 'Dec 10', title: 'Ask us anything: reasonable adjustments', desc: 'Real examples, explained simply. Not legal advice.' },
  { gw: 'equality', type: 'Event', icon: '🚪', time: 'Dec 15', title: 'Venue access clinic with Peter Walsh', desc: 'Bring photos of your entrance and questions.' }
]);
})();
/* ═════════ /EQUALITYXX ═════════ */
