/* ═════════ FILMXX — a Media demo gateway (2026-11-21, Sean; build -90) ═════════
   Built with the _tools/README.md recipe. Palette (dark): cinema black, velvet red, violet. Home sector: Media.
   Every cinema, studio, film, festival and filmmaker here is fictional; no real films, posters or studios are named or
   pictured (photos are of auditoriums, crews and unbranded kit). Places are real. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const VELVET = 'linear-gradient(135deg,#E0464E,#8E1B22)', VIOLET = 'linear-gradient(135deg,#9F67FA,#4C1D95)', GOLD = 'linear-gradient(135deg,#F2C14E,#A8741A)', INK = 'linear-gradient(135deg,#3F3F50,#141420)';

GATEWAYS.film = {
  name: 'FilmXX', domain: 'filmxx.com', emoji: '🎬', sector: 'media', live: true,
  tagline: 'The Film Universe',
  theme: {
    bg: '#0F0D14', text: '#F3F0F7', cardBg: 'rgba(255,255,255,.05)', cardBorder: 'rgba(243,240,247,.1)',
    headerBg: 'linear-gradient(180deg,#1E1828,#0F0D14)', accent: '#8B5CF6', accentAlt: '#E0464E', dark: true
  },
  gradient: 'linear-gradient(135deg,#141420,#4C1D95,#E0464E)',
  stats: { members: '9.2M', brands: '5,600+', agents: '71' },
  spaces: ['All Feed', 'Now Showing', 'Film Clubs', 'Make Films', 'Festivals', 'At Home'],
  trending: ['#ChristmasClassics', '#ShortFilm', '#FilmClub'],
  brandZones: [
    { key: 'lantern-cinemas', name: 'Lantern Cinemas', color: '#E0464E', tier: 'Founding Partner', tag: 'Independent cinemas in six UK cities' },
    { key: 'reelhouse', name: 'Reelhouse', color: '#8B5CF6', tier: 'Brand Zone', tag: 'Independent and classic films, streamed' },
    { key: 'clapper-kit', name: 'Clapper Kit', color: '#F2C14E', tier: 'Brand Zone', tag: 'Filmmaking kit for first-time directors' },
    { key: 'short-film-academy', name: 'Short Film Academy', color: '#14B8A6', tier: 'Brand Zone', tag: 'Learn to make films, from script to screen' }
  ],
  apps: [
    { name: 'Watchlist', color: '#8B5CF6', desc: 'Films to see, films you’ve seen and what you thought', key: 'watchlist', url: 'apps/watchlist.html',
      dev: 'Reelhouse', rating: '4.8', users: '2.6M', perms: ['profile', 'feed'],
      tagline: 'Never forget a recommendation.',
      about: 'Watchlist keeps the films people tell you to see, rates the ones you’ve watched and picks something for tonight from your list by mood and running time.',
      features: ['Want to see and seen', 'Star ratings and a line of review', 'Pick for tonight by mood and length', 'Share your year in film'],
      shots: ['apps/watchlist/shot-1.jpg', 'apps/watchlist/shot-2.jpg', 'apps/watchlist/shot-3.jpg'],
      version: '3.4', size: '9 KB',
      updates: [ { v: '3.4', ago: 2, notes: 'Pick for tonight.' }, { v: '3.0', ago: 70, notes: 'Your year in film.' }, { v: '2.4', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@film_club_fi', stars: 5, ago: 1, text: 'Ended the “what shall we watch” argument in our house.' }, { who: '@cinephile_cal', stars: 5, ago: 9, text: 'My notes app is finally free of film titles.' }, { who: '@sofa_critic_sue', stars: 4, ago: 23, text: 'Love the year in film.' } ] },
    { name: 'Shot List', color: '#F2C14E', desc: 'Plan every shot of your short film', key: 'shot-list', url: 'apps/shot-list.html',
      dev: 'Clapper Kit', rating: '4.8', users: '380K', perms: ['profile', 'feed'],
      tagline: 'Know the shot before you roll.',
      about: 'Shot List breaks your film into scenes and shots, with the size, movement and lens for each, then orders them for the shoot day so you film everything at one location together.',
      features: ['Scenes and shots', 'Shot sizes and moves', 'A shoot-day order', 'Tick off as you go'],
      shots: ['apps/shot-list/shot-1.jpg', 'apps/shot-list/shot-2.jpg', 'apps/shot-list/shot-3.jpg'],
      version: '2.1', size: '9 KB',
      updates: [ { v: '2.1', ago: 4, notes: 'Shoot-day order.' }, { v: '1.8', ago: 80, notes: 'Lens notes.' }, { v: '1.2', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@first_short_fin', stars: 5, ago: 3, text: 'Shot my whole short in one day because of this.' }, { who: '@indie_ines', stars: 5, ago: 14, text: 'My crew loves the tick list.' }, { who: '@cinephile_cal', stars: 4, ago: 31, text: 'Clear and quick.' } ] },
    { name: 'Runtime', color: '#E0464E', desc: 'Will it finish before the last train?', key: 'runtime', url: 'apps/runtime.html',
      dev: 'Lantern Cinemas', rating: '4.7', users: '540K', perms: ['profile', 'feed'],
      tagline: 'Plan the night around the film.',
      about: 'Runtime adds the trailers and the running time to a start time and tells you when you’ll walk out, then checks it against your last train or bus and a bedtime. Good for double bills too.',
      features: ['Trailers added in', 'Double bills', 'Last train check', 'Share the plan'],
      shots: ['apps/runtime/shot-1.jpg', 'apps/runtime/shot-2.jpg', 'apps/runtime/shot-3.jpg'],
      version: '1.4', size: '7 KB',
      updates: [ { v: '1.4', ago: 5, notes: 'Double bills.' }, { v: '1.2', ago: 100, notes: 'Last train check.' }, { v: '1.0', ago: 250, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@sofa_critic_sue', stars: 5, ago: 2, text: 'Made the last train by four minutes.' }, { who: '@film_club_fi', stars: 4, ago: 16, text: 'Handy for babysitter maths.' }, { who: '@cinephile_cal', stars: 5, ago: 40, text: 'Essential for all-nighters.' } ] }
  ],
  pros: [
    { key: 'kofi-mensah-director', name: 'Kofi Mensah Filmmaking', color: '#14B8A6', tag: 'Short-film mentoring and directing workshops · script to festival', role: 'Film director and mentor',
      img: U('1758335068076-7564a9ada09f', 800, 800), base: 'Cardiff, UK · and online', langs: 'English, Twi', years: 11, rating: '4.9', reviewsN: 268, cur: '£',
      creds: ['Shorts shown at forty festivals', 'Film school tutor', 'Mentors new directors'],
      about: 'Kofi directs short films and helps first-time filmmakers get theirs made: shaping the script, planning a shoot you can afford and getting it in front of festivals.',
      services: [ { id: 'mentor', name: 'Mentoring session', dur: '60 minutes', price: 60, desc: 'Script, shoot plan or edit, on a call.' },
                  { id: 'workshop', name: 'Weekend directing workshop', dur: '2 days', price: 220, desc: 'Make a one-minute film in a weekend in Cardiff.' },
                  { id: 'festival', name: 'Festival plan', dur: '90 minutes', price: 80, desc: 'Which festivals, what to send and when.' } ],
      avail: { days: [1, 3, 6, 0], times: ['10:00', '14:00', '19:00'] },
      reviews: [ { who: '@first_short_fin', stars: 5, ago: 4, text: 'My first short got into a festival.' }, { who: '@indie_ines', stars: 5, ago: 18, text: 'Honest, kind and very practical.' }, { who: '@cinephile_cal', stars: 5, ago: 44, text: 'The weekend workshop is brilliant.' } ],
      posts: [ { ago: 1, text: 'Your first short should be under five minutes. Festivals programme short shorts.' }, { ago: 6, text: 'January directing weekend: four places left.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'jonah-reyes-colour', name: 'Jonah Reyes Colour', color: '#8B5CF6', tag: 'Colour grading for shorts, features and music videos', role: 'Colourist',
      img: U('1764546373114-2d7a87221733', 800, 800), base: 'London, UK', langs: 'English, Spanish', years: 13, rating: '4.9', reviewsN: 194, cur: '£',
      creds: ['Graded twelve features', 'Former senior colourist at a Soho facility', 'Teaches grading online'],
      about: 'Jonah grades films so they look the way they felt on set. He has an independent rate for shorts and teaches grading to editors and directors.',
      services: [ { id: 'short', name: 'Short film grade', dur: 'Up to 15 minutes', price: 450, desc: 'A full grade, with one round of notes.' },
                  { id: 'look', name: 'Look development', dur: '2 hours', price: 160, desc: 'Find the look before you shoot.' },
                  { id: 'lesson', name: 'Grading lesson', dur: '90 minutes', price: 90, desc: 'One to one, online.' } ],
      avail: { days: [1, 2, 4, 5], times: ['10:00', '14:00', '17:00'] },
      reviews: [ { who: '@indie_ines', stars: 5, ago: 7, text: 'He made our tiny short look like a feature.' }, { who: '@first_short_fin', stars: 5, ago: 22, text: 'The lesson was eye-opening.' }, { who: '@cinephile_cal', stars: 5, ago: 50, text: 'Superb eye.' } ],
      posts: [ { ago: 2, text: 'Get the skin tones right first. Audiences forgive a lot, but not odd faces.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ellis-ward-composer', name: 'Ellis Ward Film Music', color: '#F2C14E', tag: 'Original scores for shorts, features and documentaries', role: 'Film composer',
      img: U('1780732997580-df3992363434', 800, 800), base: 'Bristol, UK', langs: 'English, French', years: 20, rating: '4.9', reviewsN: 156, cur: '£',
      creds: ['Scored thirty films', 'Music for television documentaries', 'Guest lecturer in film music'],
      about: 'Ellis writes scores that sit under the picture and lift it. For short films he offers a fixed-price score; for features, a conversation over coffee.',
      services: [ { id: 'short', name: 'Short film score', dur: 'Up to 15 minutes', price: 800, desc: 'An original score, mixed and delivered.' },
                  { id: 'spot', name: 'Spotting session', dur: '90 minutes', price: 90, desc: 'Watch the cut together and plan where music goes.' },
                  { id: 'licence', name: 'Library track licence', dur: 'Same day', price: 60, desc: 'A ready-made track from his catalogue.' } ],
      avail: { days: [2, 3, 4], times: ['10:00', '15:00'] },
      reviews: [ { who: '@indie_ines', stars: 5, ago: 8, text: 'The score made people cry at the premiere.' }, { who: '@first_short_fin', stars: 5, ago: 25, text: 'Generous with his time.' }, { who: '@cinephile_cal', stars: 4, ago: 49, text: 'Beautiful work.' } ],
      posts: [ { ago: 3, text: 'Temp music is a trap: directors fall in love with it. Talk to your composer early.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'film-club', name: 'The Film Club', domain: 'club.filmxx.com', color: '#8B5CF6', img: U('1574267432553-4b4628081c31', 900, 500),
      scope: 'Global', where: 'Every sofa and every cinema', members: 486000, online: 8240, tagline: 'Watch together, talk after.',
      about: 'A film club for everyone: a film of the week, watch parties, spoiler-tagged discussions and recommendations from people who watch everything.',
      rules: ['Tag your spoilers', 'Disagree about the film, not the person', 'Every genre welcome'],
      mods: ['@film_club_fi', '@cinephile_cal'],
      threads: [ { t: 'Film of the week: The Quiet Harbour (spoilers tagged)', by: '@film_club_fi', tag: 'FILM OF THE WEEK', replies: 2860, ago: 0, votes: 6420 }, { t: 'Your Christmas film tradition', by: '@sofa_critic_sue', tag: 'CHRISTMAS', replies: 1240, ago: 1, votes: 2860 }, { t: 'Small cinemas worth travelling to', by: '@cinephile_cal', tag: 'CINEMAS', replies: 480, ago: 2, votes: 960 }, { t: 'How do I start making films?', by: '@first_short_fin', tag: 'Q&A', replies: 312, ago: 3, votes: 520 } ],
      events: [ { title: 'Watch party: film of the week', day: 5, time: '20:00', where: 'Online' }, { title: 'Christmas classics marathon', day: 33, time: '14:00', where: 'Online' } ] },
    { key: 'cardiff-film-society', name: 'Cardiff Film Society', domain: 'cardiff.filmxx.com', color: '#E0464E', img: U('1595769816263-9b910be24d5f', 900, 500),
      scope: 'Local', where: 'Cardiff', members: 1900, online: 36, tagline: 'Monday nights, any film, a good argument after.',
      about: 'Cardiff’s film society: a screening every Monday, a pub chat afterwards and a short-film night where members show their own work.',
      rules: ['Phones off, always', 'Everyone gets a say after', 'Bring a friend once'],
      mods: ['@indie_ines', '@cardiff_cerys'],
      threads: [ { t: 'Members’ short-film night: send your films', by: '@indie_ines', tag: 'SHORTS', replies: 34, ago: 0, votes: 76 }, { t: 'Christmas screening vote', by: '@cardiff_cerys', tag: 'VOTE', replies: 58, ago: 1, votes: 110 }, { t: 'Who wants to crew on a weekend shoot?', by: '@first_short_fin', tag: 'CREW', replies: 21, ago: 2, votes: 38 } ],
      events: [ { title: 'Monday screening', day: 2, time: '19:30', where: 'Cardiff city centre' }, { title: 'Members’ short-film night', day: 16, time: '19:30', where: 'Cardiff city centre' } ] }
  ],
  feed: [
    { av: 'FX', avBg: VIOLET, author: 'FilmXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From the front row to the director’s chair. Cinemas, film clubs, festivals, streaming, filmmaking and the people who live for the moment the lights go down. Film, all in one place.',
      img: U('1485095329183-d0797cdc5676', 800, 600), eng: '♡ 86.4K · 💬 6.2K · ↗ 9.4K' },
    { av: 'SS', avBg: INK, author: '@sofa_critic_sue', sub: 'Film Clubs · Just now', badge: 'COMMUNITY',
      text: 'Christmas film night tradition: everyone brings one film, we draw them from a hat, nobody complains. Popcorn is mandatory 🍿',
      img: U('1770597105062-648a2fbfa052', 800, 600), eng: '♡ 22.4K · 💬 3.1K · ↗ 860' },
    { av: 'LC', avBg: VELVET, author: 'Lantern Cinemas', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: '<b>Christmas at the Lantern</b>: festive classics, a 35 mm season and a parent-and-baby screening every morning, in six cities.',
      img: U('1762541693135-fb989de961e1', 800, 600), eng: '♡ 18.6K · 💬 1.4K · ↗ 2.6K' },
    { av: 'CK', avBg: GOLD, author: 'Clapper Kit', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Everything for your first short in one case: the <b>First Film Kit</b>, with a clapperboard, a microphone, two lights and a shot-list notebook.',
      img: U('1594909122845-11baa439b7bf', 800, 600), eng: '♡ 6.4K · 💬 520 · ↗ 680' },
    { av: 'FN', avBg: INK, author: '@first_short_fin', sub: 'Make Films · 2h ago', badge: 'COMMUNITY',
      text: 'Wrapped my first short film. Seven friends, one borrowed camera, a field outside Cardiff and the best weekend of my life.',
      img: U('1782889187454-a568fe1f20e2', 800, 600), eng: '♡ 11.2K · 💬 1.2K · ↗ 420' },
    { av: 'RH', avBg: VIOLET, author: 'Reelhouse', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Our <b>December Collection</b>: 31 films for 31 nights, from forgotten black-and-white gems to this year’s festival hits.',
      img: U('1517604931442-7e0c8ed2963c', 800, 600), eng: '♡ 7.8K · 💬 640 · ↗ 920' },
    { av: 'KM', avBg: VIOLET, author: 'Kofi Mensah Filmmaking', sub: 'Make Films · 6h ago', badge: 'PRO ZONE',
      text: 'Sound matters more than picture. Audiences watch a grainy image; they walk out of bad sound.',
      img: U('1759417501248-0aa9489dab3f', 800, 600), eng: '♡ 4.2K · 💬 310 · ↗ 760' }
  ],
  prompts: ['Find an independent cinema showing Christmas films near me', 'What should our film club watch next?', 'How do I make my first short film?', 'Which film festivals take short films?'],
  businesses: ['bluebell-stages', 'frame-by-frame-post']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'film', verified: true }, o);
Object.assign(ZONES, {
  'lantern-cinemas': brand({ key: 'lantern-cinemas', name: 'Lantern Cinemas', color: '#E0464E', gradient: VELVET, tier: 'Founding Partner',
    tagline: 'Independent cinemas in six UK cities', stats: { followers: '342K', content: '1.6K', products: '18' },
    ad: { badge: 'Featured', img: U('1595769816263-9b910be24d5f', 760, 760), hl: 'Christmas at the Lantern.', sub: 'Festive classics and a 35 mm season, in six cities.', meta: 'From £6' },
    products: [
      { name: 'Christmas Classics Season', price: '£11', tag: 'FLAGSHIP', emoji: '🎄', rating: 4.9, reviews: 4860, cat: 'tickets', special: true, desc: 'Festive favourites on the big screen, with mince pies and mulled wine in the bar.', features: ['1–31 December', 'Relaxed screenings every Sunday', 'Under-16s £6'], review: { who: 'Sue H.', text: 'Our family’s favourite night of the year.' } },
      { name: 'The 35 mm Season', price: '£12', tag: 'BESTSELLER', emoji: '🎞️', rating: 4.9, reviews: 1860, cat: 'tickets', desc: 'Ten films projected from real 35 mm prints.', features: ['Introduced by our projectionists'], review: { who: 'Cal J.', text: 'The flicker, the grain. Perfect.' } },
      { name: 'Parent and Baby Screening', price: '£6', emoji: '👶', rating: 4.8, reviews: 1240, cat: 'tickets', desc: 'Lights up a little, sound down a little and crying welcome.', features: ['Weekday mornings'], review: { who: 'Fi R.', text: 'My only trip out some weeks.' } },
      { name: 'Lantern Membership', price: '£45', tag: 'SPECIAL', emoji: '🏮', rating: 4.9, reviews: 2140, cat: 'membership', special: true, desc: 'Two free tickets, a fifth off every film and members’ previews.', features: ['A year, all six cinemas'], review: { who: 'Ines A.', text: 'Pays for itself by February.' } }
    ],
    shopCats: [ { key: 'tickets', label: 'Tickets', icon: '🎟️' }, { key: 'membership', label: 'Membership', icon: '🏮' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Projector warming up for the first night of <b>Christmas at the Lantern</b>.', img: U('1762541693135-fb989de961e1', 800, 440), eng: '♡ 18.6K · 💬 1.4K · ↗ 2.6K', product: 0 },
      { type: 'post', sub: 'Behind the screen · Yesterday', text: 'Every seat in Screen 1 re-covered in time for Christmas. 212 seats, all velvet.', img: U('1574267432553-4b4628081c31', 800, 440), eng: '♡ 6.2K · 💬 410' },
      { type: 'community', who: 'Fi R.', whoBg: VIOLET, sub: 'Community · 1d', text: 'Are the relaxed screenings OK for my son? He has autism and big crowds are hard.', eng: '♡ 620 · 💬 120', reply: 'Hi Fi! Yes, that’s exactly who they’re for: lights left low rather than off, softer sound, no trailers, smaller audiences, and moving around or making noise is completely fine. There’s a quiet room too. Every Sunday at 11am in all six cinemas. 🎄' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Lantern Live · Q&A with the director of The Quiet Harbour', when: 'Live now', desc: 'Straight after tonight’s screening, the director answers questions from all six cinemas and from you.', registered: 6420, capacity: 15000 } ],
    about: { founded: 'York · 1998', story: 'One old picture house in York, saved by its audience. Now six independent cinemas with real seats, a proper bar and a lot of 35 mm film. We joined FilmXX as Founding Partner because film lovers are here.', milestones: [['1998', 'The first Lantern, in York'], ['2014', 'Six cities'], ['2026', 'Founding Partner on FilmXX']], values: ['Relaxed screenings every week', 'Real film, when we can', 'A bar worth staying for'] } }),

  'reelhouse': brand({ key: 'reelhouse', name: 'Reelhouse', color: '#8B5CF6', gradient: VIOLET, tier: 'Brand Zone',
    tagline: 'Independent and classic films, streamed', stats: { followers: '212K', content: '3.4K', products: '6' },
    ad: { badge: 'New', img: U('1517604931442-7e0c8ed2963c', 760, 760), hl: '31 films for 31 nights.', sub: 'The December Collection, chosen by people who love film.', meta: 'From £3.50' },
    products: [
      { name: 'Monthly Membership', price: '£7.99', tag: 'FLAGSHIP', emoji: '🎬', rating: 4.8, reviews: 8640, cat: 'membership', special: true, desc: 'A new film every day, chosen by hand, and a library of 1,800.', features: ['No adverts', 'Watch on any screen'], review: { who: 'Cal J.', text: 'Found more good films here in a month than elsewhere in a year.' } },
      { name: 'Rent a New Release', price: '£4.99', tag: 'BESTSELLER', emoji: '🍿', rating: 4.7, reviews: 3260, cat: 'rentals', desc: 'Festival films, straight from the cinema.', features: ['48 hours to watch'], review: { who: 'Sue H.', text: 'Saturday night sorted.' } },
      { name: 'Classic Rental', price: '£3.50', emoji: '🎞️', rating: 4.8, reviews: 1460, cat: 'rentals', desc: 'Restored classics, in their original language.', features: ['Subtitles in 12 languages'], review: { who: 'Fi R.', text: 'Beautiful restorations.' } },
      { name: 'Gift: Twelve Months', price: '£79', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 860, cat: 'membership', special: true, desc: 'A year of films, as a gift.', features: ['Choose a start date'], review: { who: 'Ines A.', text: 'Dad watches every night.' } }
    ],
    shopCats: [ { key: 'membership', label: 'Membership', icon: '🎬' }, { key: 'rentals', label: 'Rentals', icon: '🍿' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Night one of the <b>December Collection</b>: a black-and-white comedy nobody has seen since 1954.', img: U('1766844649143-af98d71e346b', 800, 440), eng: '♡ 7.8K · 💬 640', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'The December Collection begins', when: 'Dec 1 · 18:00', desc: 'A new film every night of December.', registered: 8460, capacity: 20000 } ],
    about: { founded: 'London · 2016', story: 'Three programmers from independent cinemas who wanted the same care online.', milestones: [['2016', 'The first film'], ['2022', '1,000 films'], ['2026', 'Brand Zone on FilmXX']], values: ['Chosen by hand', 'Filmmakers paid fairly', 'No adverts'] } }),

  'clapper-kit': brand({ key: 'clapper-kit', name: 'Clapper Kit', color: '#F2C14E', gradient: GOLD, tier: 'Brand Zone',
    tagline: 'Filmmaking kit for first-time directors', stats: { followers: '74.6K', content: '380', products: '58' },
    ad: { badge: 'Featured', img: U('1594909122845-11baa439b7bf', 760, 760), hl: 'Your first film, in one case.', sub: 'The First Film Kit: sound, light and a clapperboard.', meta: 'From £12' },
    products: [
      { name: 'First Film Kit', price: '£249', tag: 'FLAGSHIP', emoji: '🎬', rating: 4.8, reviews: 1240, cat: 'kits', special: true, desc: 'A shotgun microphone, two LED panels, stands, a clapperboard and a shot-list notebook, in a hard case.', features: ['Works with phones and cameras', 'Video lessons included'], review: { who: 'Fin O.', text: 'Shot my whole short with it.' } },
      { name: 'Shotgun Microphone', price: '£89', tag: 'BESTSELLER', emoji: '🎙️', rating: 4.8, reviews: 2860, cat: 'sound', desc: 'Clear dialogue from a camera or a boom pole.', features: ['Dead cat windshield included'], review: { who: 'Ines A.', text: 'Sound is everything.' } },
      { name: 'Clapperboard', price: '£12', emoji: '🎞️', rating: 4.7, reviews: 1860, cat: 'kits', desc: 'Acrylic, wipe-clean, with colour sticks.', features: ['Two sizes'], review: { who: 'Cal J.', text: 'Makes you feel like a real crew.' } },
      { name: 'LED Panel Pair', price: '£119', tag: 'SPECIAL', emoji: '💡', rating: 4.7, reviews: 640, cat: 'light', special: true, desc: 'Two bi-colour panels with batteries and stands.', features: ['Dimmable'], review: { who: 'Fin O.', text: 'Bright and light.' } }
    ],
    shopCats: [ { key: 'kits', label: 'Kits', icon: '🎬' }, { key: 'sound', label: 'Sound', icon: '🎙️' }, { key: 'light', label: 'Light', icon: '💡' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Scene one, take one. The <b>First Film Kit</b>, out on a student shoot in Manchester.', img: U('1515634928627-2a4e0dae3ddf', 800, 440), eng: '♡ 6.4K · 💬 520', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: a fifth off kits', when: 'Nov 27 · All day', desc: 'A fifth off every kit, for one day.', registered: 1640, capacity: 5000 } ],
    about: { founded: 'Manchester · 2018', story: 'Two film graduates who wished someone had sold them the right kit when they started.', milestones: [['2018', 'The first kit'], ['2023', 'Video lessons'], ['2026', 'Brand Zone on FilmXX']], values: ['Kit that lasts', 'Free lessons', 'Student discounts'] } }),

  'short-film-academy': brand({ key: 'short-film-academy', name: 'Short Film Academy', color: '#14B8A6', gradient: INK, tier: 'Brand Zone',
    tagline: 'Learn to make films, from script to screen', stats: { followers: '96.2K', content: '1.2K', products: '10' },
    ad: { badge: 'Gift', img: U('1612544409025-e1f6a56c1152', 760, 760), hl: 'Script to screen in twelve weeks.', sub: 'Make a short film with a mentor and a crew.', meta: 'From £39' },
    products: [
      { name: 'Make Your First Short', price: '£390', tag: 'FLAGSHIP', emoji: '🎓', rating: 4.9, reviews: 860, cat: 'courses', special: true, desc: 'Twelve weeks online, from idea to finished film, with a mentor and a premiere for every student.', features: ['Any camera, even a phone', 'Festival plan included'], review: { who: 'Fin O.', text: 'My film is in two festivals.' } },
      { name: 'Screenwriting Basics', price: '£89', tag: 'BESTSELLER', emoji: '✍️', rating: 4.8, reviews: 1460, cat: 'courses', desc: 'Write a ten-page short in six weeks.', features: ['Notes on every draft'], review: { who: 'Sue H.', text: 'I finished a script!' } },
      { name: 'Editing Weekend', price: '£39', emoji: '🖥️', rating: 4.7, reviews: 920, cat: 'courses', desc: 'Cut a scene from real footage in free software.', features: ['Online'], review: { who: 'Cal J.', text: 'Learned more in two days than a year of videos.' } },
      { name: 'Gift: Any Course', price: '£89', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 380, cat: 'gifts', special: true, desc: 'Give someone the course of their choice.', features: ['Valid for a year'], review: { who: 'Ines A.', text: 'Best present I ever gave.' } }
    ],
    shopCats: [ { key: 'courses', label: 'Courses', icon: '🎓' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Students on set for week eight of <b>Make Your First Short</b>.', img: U('1612544409025-e1f6a56c1152', 800, 440), eng: '♡ 3.2K · 💬 240', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'January course: last day to enrol', when: 'Dec 15 · 23:59', desc: 'Enrol by 15 December to start in January.', registered: 280, capacity: 400 } ],
    about: { founded: 'Glasgow · 2019', story: 'A film school without the fees: online, with real mentors, and every student finishes a film.', milestones: [['2019', 'The first course'], ['2024', '500 films made'], ['2026', 'Brand Zone on FilmXX']], values: ['Everyone finishes a film', 'Bursaries every term', 'Real mentors'] } }),

  'bluebell-stages': { key: 'bluebell-stages', kind: 'business', gw: 'film', name: 'Bluebell Stages', color: '#14B8A6', gradient: INK, img: U('1471341971476-ae15ff5dd4ea', 900, 500),
    tier: 'Verified', category: 'Studio hire', tagline: 'Sound stages and studios for film, TV and advertising.',
    about: { founded: 'Cardiff · 2010', story: 'Four sound stages, a white cyclorama studio and workshops, on the edge of Cardiff, for productions large and small.' },
    stats: { years: 16, staff: 45, clients: '300 productions' },
    caps: [ { name: 'Sound stages', detail: 'Four stages, from 2,000 to 12,000 square feet.' }, { name: 'Cyclorama studio', detail: 'A white cyc for adverts and music videos.' }, { name: 'Indie rates', detail: 'Day rates for short films and students.' } ],
    specs: { moq: 'Half a day', lead: '1 to 4 weeks', regions: 'UK', certs: ['Albert-certified sustainable studio', 'Fully insured', 'Step-free throughout'] },
    supplies: [ { kind: 'brand', key: 'short-film-academy', what: 'Studio days for student shoots' } ],
    cases: [ { title: 'A first feature', text: 'Six weeks on Stage 2 for a low-budget feature, at an indie rate.' } ],
    feed: [ { sub: 'Studios · 3d', text: 'Stage 3 dressed as a snowy village for a Christmas advert.' } ],
    contact: { person: 'Bethan Lloyd, Bookings', response: 'Replies within 24 hours' } },

  'frame-by-frame-post': { key: 'frame-by-frame-post', kind: 'business', gw: 'film', name: 'Frame by Frame Post', color: '#8B5CF6', gradient: VIOLET, img: U('1515634928627-2a4e0dae3ddf', 900, 500),
    tier: 'Verified', category: 'Post-production', tagline: 'Editing, colour and sound for independent films.',
    about: { founded: 'London · 2008', story: 'A post-production house in Soho for independent features, documentaries and shorts: editing suites, a grading theatre and a sound mix stage.' },
    stats: { years: 18, staff: 34, clients: '220 films' },
    caps: [ { name: 'Editing', detail: 'Suites to rent or editors to hire.' }, { name: 'Colour', detail: 'A grading theatre with a 4K projector.' }, { name: 'Sound', detail: 'Mixing, foley and ADR.' } ],
    specs: { moq: 'One day', lead: '1 to 6 weeks', regions: 'UK & Europe', certs: ['Secure facility', 'Fully insured', 'Albert-certified'] },
    supplies: [ { kind: 'brand', key: 'lantern-cinemas', what: 'Restorations for the 35 mm season' } ],
    cases: [ { title: 'A festival short', text: 'Graded and mixed in five days to make a festival deadline.' } ],
    feed: [ { sub: 'Grading theatre · 5d', text: 'Final grade on a documentary bound for a winter festival.' } ],
    contact: { person: 'Ade Okafor, Producer', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('film', [
  { gw: 'film', zone: 'lantern-cinemas', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Lantern Live · Q&A with the director of The Quiet Harbour', desc: 'Straight after the screening, live to six cinemas and to you.' },
  { gw: 'film', type: 'Event', icon: '🎞️', time: 'Nov 30', title: 'Monday screening, Cardiff', desc: 'Cardiff Film Society: a film, then a pub and a good argument.' },
  { gw: 'film', type: 'Event', icon: '🍿', time: 'Nov 26', title: 'Watch party: film of the week', desc: 'The Film Club watches together online, spoilers tagged.' },
  { gw: 'film', zone: 'clapper-kit', type: 'Sale', icon: '🎬', time: 'Nov 27', title: 'Clapper Kit Black Friday', desc: 'A fifth off every filmmaking kit, for one day.' },
  { gw: 'film', zone: 'reelhouse', type: 'Event', icon: '🎄', time: 'Dec 1', title: 'The December Collection begins', desc: 'Reelhouse: a new film every night of December.' },
  { gw: 'film', type: 'Event', icon: '🎥', time: 'Dec 7', title: 'Members’ short-film night, Cardiff', desc: 'Cardiff Film Society members screen their own films.' },
  { gw: 'film', zone: 'short-film-academy', type: 'Deadline', icon: '🎓', time: 'Dec 15', title: 'January course: last day to enrol', desc: 'Short Film Academy: enrol by midnight to start in January.' },
  { gw: 'film', type: 'Event', icon: '⭐', time: 'Dec 24', title: 'Christmas classics marathon', desc: 'The Film Club: festive films back to back, online, all afternoon.' }
]);
})();
/* ═════════ /FILMXX ═════════ */
