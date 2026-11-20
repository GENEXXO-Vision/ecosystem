/* ═════════ CYCLEXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.cycle = {
 "name": "CycleXX",
 "domain": "cyclexx.com",
 "emoji": "🚴",
 "sector": "adventure",
 "live": true,
 "tagline": "The Cycling Universe",
 "theme": {
  "bg": "#0F0F0F",
  "text": "#F0F0F0",
  "cardBg": "rgba(255,255,255,.04)",
  "cardBorder": "rgba(255,255,255,.07)",
  "headerBg": "linear-gradient(180deg,#1a1a1a,#0F0F0F)",
  "accent": "#F5C400",
  "accentAlt": "#FFD700",
  "dark": true
 },
 "gradient": "linear-gradient(135deg,#0F0F0F,#F5C400,#FFD700)",
 "stats": {
  "members": "567K",
  "brands": "1,400+",
  "agents": "76"
 },
 "spaces": [
  "All Feed",
  "Road & Gran Fondo",
  "Mountain Biking",
  "Gravel & Adventure",
  "Data & Training"
 ],
 "trending": [
  "#VO2MaxSeason",
  "#GravelGang",
  "#WattsPerKg"
 ],
 "brandZones": [
  {
   "key": "whirl",
   "name": "Whirl",
   "color": "#F5C400",
   "tier": "Brand Zone",
   "tag": "Carbon wheelsets"
  },
  {
   "key": "ravelin",
   "name": "Ravelin",
   "color": "#CC0000",
   "tier": "Brand Zone",
   "tag": "Pro team apparel"
  }
 ],
 "apps": [
  {
   "name": "Power Analyser",
   "color": "#F5C400",
   "desc": "Training load & FTP tracking",
   "key": "power-analyser",
   "url": "apps/power-analyser.html",
   "dev": "Wattage Labs",
   "rating": "4.8",
   "users": "27.9K",
   "perms": [
    "profile",
    "feed"
   ],
   "tagline": "Train with power. Peak on purpose.",
   "about": "Power Analyser turns your rides into training load. Enter a ride and see its intensity and training stress instantly; watch fitness, fatigue and form build week by week; and train in the right zones for your FTP.",
   "features": [
    "Intensity and TSS for every ride",
    "Fitness, fatigue and form tracking",
    "Eight weeks of training load at a glance",
    "Power zones set from your FTP"
   ],
   "shots": [
    "apps/power-analyser/shot-1.jpg",
    "apps/power-analyser/shot-2.jpg",
    "apps/power-analyser/shot-3.jpg"
   ],
   "version": "8.2",
   "size": "8 KB",
   "updates": [
    {
     "v": "8.2",
     "ago": 4,
     "notes": "Form now reads fresh, neutral, productive or overreaching."
    },
    {
     "v": "8.1",
     "ago": 25,
     "notes": "Weekly TSS chart."
    },
    {
     "v": "8.0",
     "ago": 50,
     "notes": "Live calculation as you type."
    }
   ],
   "reviews": [
    {
     "who": "@watts_up",
     "stars": 5,
     "ago": 1,
     "text": "The fitness and fatigue numbers finally make my training make sense."
    },
    {
     "who": "@gc_gemma",
     "stars": 5,
     "ago": 8,
     "text": "Clean and accurate. Exactly the maths I use."
    },
    {
     "who": "@sunday_steve",
     "stars": 4,
     "ago": 18,
     "text": "Great. Would love automatic ride import."
    }
   ]
  },
  {
   "name": "Route Builder",
   "color": "#D97706",
   "desc": "2.4M routes indexed worldwide",
   "key": "route-builder",
   "url": "apps/route-builder.html",
   "dev": "Lanes",
   "rating": "4.6",
   "users": "33.4K",
   "perms": [
    "profile",
    "feed"
   ],
   "tagline": "Tell it where and how far. Ride.",
   "about": "Route Builder makes a loop from wherever you are. Pick a start, a distance and road, gravel or mixed, and it builds the route with the map, the elevation profile, the climbing and the ride time. Save your favourites and share a loop with the club in one tap.",
   "features": [
    "Loops from any start and distance",
    "Elevation profile and total climbing",
    "Road, gravel or mixed surfaces",
    "Share a route to the CycleXX feed"
   ],
   "shots": [
    "apps/route-builder/shot-1.jpg",
    "apps/route-builder/shot-2.jpg",
    "apps/route-builder/shot-3.jpg"
   ],
   "version": "9.0",
   "size": "9 KB",
   "updates": [
    {
     "v": "9.0",
     "ago": 2,
     "notes": "Gravel and mixed surfaces."
    },
    {
     "v": "8.9",
     "ago": 20,
     "notes": "Elevation profile under every route."
    },
    {
     "v": "8.8",
     "ago": 43,
     "notes": "Explore tab with classic climbs."
    }
   ],
   "reviews": [
    {
     "who": "@climb_carla",
     "stars": 5,
     "ago": 3,
     "text": "Built a 100km Mallorca loop in seconds. The profile is so useful."
    },
    {
     "who": "@gravel_gus",
     "stars": 5,
     "ago": 10,
     "text": "Gravel mode found lanes I never knew existed."
    },
    {
     "who": "@club_captain",
     "stars": 4,
     "ago": 17,
     "text": "Brilliant for planning club runs."
    }
   ]
  }
 ],
 "pros": [
  {
   "key": "geometry-bike-fit",
   "name": "Geometry Bike Fit",
   "color": "#CA8A04",
   "tag": "Professional bike fitting",
   "role": "Bike-fit specialists",
   "img": "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=800&fit=crop&q=75",
   "base": "London, UK",
   "langs": "English",
   "years": 8,
   "rating": "4.9",
   "reviewsN": 211,
   "cur": "£",
   "creds": [
    "Retül and GURU certified fitters",
    "Physiotherapist on the team",
    "Fits for Continental pro riders"
   ],
   "about": "A fit that makes you faster and keeps you riding pain-free. Motion-capture analysis, saddle pressure mapping and a physio-led flexibility check, then your bike adjusted in the studio, with a report you can take to any shop.",
   "services": [
    {
     "id": "full",
     "name": "Full motion-capture fit",
     "dur": "2.5 hours",
     "price": 245,
     "desc": "3D capture, pressure mapping, adjustments and a full report."
    },
    {
     "id": "saddle",
     "name": "Saddle fit & pressure map",
     "dur": "1 hour",
     "price": 95,
     "desc": "Find the saddle that works for you, tested on the bike."
    },
    {
     "id": "refit",
     "name": "Refit / new-bike transfer",
     "dur": "1 hour",
     "price": 110,
     "desc": "Move your position to a new bike exactly."
    }
   ],
   "avail": {
    "days": [
     1,
     2,
     3,
     4,
     5,
     6
    ],
    "times": [
     "09:00",
     "12:00",
     "15:00",
     "18:00"
    ]
   },
   "reviews": [
    {
     "who": "@watts_up",
     "stars": 5,
     "ago": 4,
     "text": "Knee pain gone and 10 watts at threshold. Worth every penny."
    },
    {
     "who": "@gc_gemma",
     "stars": 5,
     "ago": 16,
     "text": "The physio check found a hip restriction nobody else noticed."
    },
    {
     "who": "@sunday_steve",
     "stars": 5,
     "ago": 31,
     "text": "Super professional. The report is brilliant."
    }
   ],
   "posts": [
    {
     "ago": 3,
     "text": "Numb hands on long rides? It is usually reach, not your gloves. Book a quick saddle and reach check."
    },
    {
     "ago": 12,
     "text": "New-bike season: we transfer your exact position in an hour."
    }
   ],
   "tier": "Pro Zone",
   "verified": true
  },
  {
   "key": "girona-cycling-camps",
   "name": "Girona Cycling Camps",
   "color": "#EA580C",
   "tag": "Coaching & training camps",
   "role": "Cycling coach & camps",
   "img": "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&h=800&fit=crop&q=75",
   "base": "Girona, Spain",
   "langs": "English, Spanish, Catalan",
   "years": 13,
   "rating": "4.8",
   "reviewsN": 189,
   "cur": "€",
   "creds": [
    "British Cycling Level 3 coach",
    "Former Continental-team rider",
    "Fully supported routes, mechanics and vans"
   ],
   "about": "Train where the pros live. Guided camps on Girona’s quiet roads and famous climbs (Els Àngels, Rocacorba, the coast road), plus remote coaching with plans that sync with Power Analyser.",
   "services": [
    {
     "id": "camp",
     "name": "Spring training camp",
     "dur": "5 days",
     "price": 1190,
     "desc": "Guided rides, coaching, mechanic, and hotel with breakfast."
    },
    {
     "id": "ride",
     "name": "Guided ride",
     "dur": "4 hours",
     "price": 120,
     "desc": "A coach on your wheel up Els Àngels, with a café stop."
    },
    {
     "id": "remote",
     "name": "Monthly remote coaching",
     "dur": "Monthly",
     "price": 140,
     "desc": "Personal plan, weekly review and power-file analysis."
    }
   ],
   "avail": {
    "days": [
     1,
     2,
     3,
     4,
     5,
     6,
     0
    ],
    "times": [
     "08:30",
     "09:00"
    ]
   },
   "reviews": [
    {
     "who": "@climb_carla",
     "stars": 5,
     "ago": 6,
     "text": "The spring camp was perfect: tough, beautifully organised, incredible roads."
    },
    {
     "who": "@club_captain",
     "stars": 5,
     "ago": 17,
     "text": "Brought our club out for a guided week. Everyone came back fitter and grinning."
    },
    {
     "who": "@gravel_gus",
     "stars": 4,
     "ago": 35,
     "text": "Great coaching. Book early for March and April."
    }
   ],
   "posts": [
    {
     "ago": 2,
     "text": "Rocacorba repeats this week, with the coffee stop at the top guaranteed."
    },
    {
     "ago": 10,
     "text": "Spring camp: 4 places left for the April week."
    }
   ],
   "tier": "Pro Zone",
   "verified": true
  }
 ],
 "communities": [
  {
   "key": "london-sunday-riders",
   "name": "London Sunday Riders",
   "domain": "sundayriders.cyclexx.com",
   "color": "#CA8A04",
   "img": "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=900&h=500&fit=crop&q=75",
   "scope": "Local",
   "where": "London",
   "members": 4020,
   "online": 96,
   "tagline": "No-drop Sunday rides, coffee guaranteed.",
   "about": "Sunday group rides out of London into the Surrey Hills and Chilterns. Three paces, no-drop at every level, and a café stop that is not negotiable.",
   "rules": [
    "No-drop: we wait at every junction",
    "Lights and a spare tube, always",
    "The café stop is mandatory"
   ],
   "mods": [
    "@sunday_steve",
    "@club_captain"
   ],
   "threads": [
    {
     "t": "This Sunday: Box Hill and Leith Hill, 3 paces",
     "by": "@club_captain",
     "tag": "RIDE",
     "replies": 24,
     "ago": 0,
     "votes": 53
    },
    {
     "t": "Best café in the Surrey Hills? Vote",
     "by": "@sunday_steve",
     "tag": "POLL",
     "replies": 61,
     "ago": 1,
     "votes": 70
    },
    {
     "t": "First group ride nerves, tips?",
     "by": "@new_rider_ria",
     "tag": "Q&A",
     "replies": 18,
     "ago": 2,
     "votes": 36
    },
    {
     "t": "Winter bike: guards or no guards?",
     "by": "@watts_up",
     "tag": "GEAR",
     "replies": 27,
     "ago": 4,
     "votes": 25
    }
   ],
   "events": [
    {
     "title": "Sunday ride: Box Hill loop",
     "day": 2,
     "time": "08:00",
     "where": "Richmond Park, Roehampton Gate"
    },
    {
     "title": "Winter maintenance night",
     "day": 6,
     "time": "19:00",
     "where": "The Bike Shed, Shoreditch"
    }
   ]
  },
  {
   "key": "gravel-grinders",
   "name": "Gravel Grinders UK",
   "domain": "gravel.cyclexx.com",
   "color": "#D97706",
   "img": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=900&h=500&fit=crop&q=75",
   "scope": "National",
   "where": "UK",
   "members": 6310,
   "online": 147,
   "tagline": "Byways, bridleways and the long way round.",
   "about": "The UK gravel community: route swaps, bikepacking trips, kit talk and monthly ride-outs. Every route is shared as a GPX file, with honest notes on the muddy bits.",
   "rules": [
    "Every route post includes a GPX",
    "Respect bridleway users",
    "Close gates, pack it out"
   ],
   "mods": [
    "@gravel_gus",
    "@bikepack_bex"
   ],
   "threads": [
    {
     "t": "South Downs Way in a day, worth it?",
     "by": "@gravel_gus",
     "tag": "ROUTE",
     "replies": 44,
     "ago": 0,
     "votes": 62
    },
    {
     "t": "Bikepacking kit list for 3 days",
     "by": "@bikepack_bex",
     "tag": "GEAR",
     "replies": 29,
     "ago": 1,
     "votes": 58
    },
    {
     "t": "Muddy byway warning: Ridgeway near Wantage",
     "by": "@trail_tom",
     "tag": "CONDITIONS",
     "replies": 7,
     "ago": 1,
     "votes": 33
    },
    {
     "t": "Ride-out: Peak District gravel, 80 km",
     "by": "@gravel_gus",
     "tag": "EVENT",
     "replies": 21,
     "ago": 3,
     "votes": 47
    }
   ],
   "events": [
    {
     "title": "Peak District gravel ride-out",
     "day": 5,
     "time": "09:00",
     "where": "Hathersage"
    },
    {
     "title": "Online: bikepacking 101",
     "day": 10,
     "time": "19:30",
     "where": "Online"
    }
   ]
  }
 ],
 "feed": [
  {
   "av": "CY",
   "avBg": "linear-gradient(135deg,#0F0F0F,#F5C400)",
   "author": "CycleXX Editorial",
   "sub": "Featured · Just now",
   "badge": "★ FEATURED",
   "text": "Every ride, every rider. From gran fondo to gravel, racing to commuting — road, mountain and the numbers behind the ride. The cycling universe, connected.",
   "video": "genexxo-videos/cyclexx.mp4",
   "eng": "♡ 19.8K · 💬 2.3K · ↗ 1.4K"
  },
  {
   "av": "SS",
   "avBg": "linear-gradient(135deg,#16A34A,#4ADE80)",
   "author": "@sunday_spokes",
   "sub": "Road Cycling · Just now",
   "badge": "COMMUNITY",
   "text": "Sunday morning countryside loop with my husband. 42 miles through the Cotswolds before the rest of the world woke up. Empty lanes, misty fields, a café stop in Bourton-on-the-Water, home by 11. This is why we ride.",
   "video": "genexxo-videos/cycle1.mp4",
   "eng": "♡ 14.2K · 💬 2.1K · ↗ 1.3K"
  },
  {
   "av": "Wh",
   "avBg": "linear-gradient(135deg,#F5C400,#D4A800)",
   "author": "Whirl",
   "sub": "Brand Zone · 2h ago",
   "badge": "BRAND ZONE",
   "text": "Cadence Move is here — the first smart trainer that moves with you. 10° of fore/aft and lateral motion, so your indoor rides engage the same stabilising muscles as the road. ±1% power, ERG mode. Shop it in the zone.",
   "img": "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 12.4K · 💬 1.8K · ↗ 890"
  },
  {
   "av": "Ra",
   "avBg": "linear-gradient(135deg,#CC0000,#991A1A)",
   "author": "Ravelin",
   "sub": "Brand Zone · 3h ago",
   "badge": "BRAND ZONE",
   "text": "The Pro Team Aero Jersey is back for 2026 — wind-tunnel tested, UCI legal, AlpineShell SHAKEDRY. Worn by six ProLeague teams. Available exclusively through the Ravelin zone on CycleXX.",
   "img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 11.2K · 💬 1.6K · ↗ 778"
  }
 ],
 "prompts": [
  "Build me a 100km route with under 800m of climbing",
  "What is a good FTP for my age group?"
 ],
 "businesses": [
  "velocarbon",
  "pedal-logistics"
 ]
};
Object.assign(ZONES, {
 "whirl": {
  "key": "whirl",
  "kind": "brand",
  "gw": "cycle",
  "name": "Whirl",
  "color": "#F5C400",
  "gradient": "linear-gradient(135deg,#F5C400,#FFD700,#D4A800)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "Smart trainers & cycling computers",
  "stats": {
   "followers": "31.2K",
   "content": "890",
   "products": "24"
  },
  "event": {
   "live": true,
   "tag": "Whirl Live",
   "title": "Cadence Live — Sunday ERG Session",
   "subtitle": "Group indoor session on the Cadence Core · threshold intervals with the Whirl coaching team.",
   "now": "Interval 3 of 6 · 280w threshold block",
   "viewers": "1,847",
   "poster": "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&h=440&fit=crop&q=80"
  },
  "products": [
   {
    "name": "Cadence Core Smart Trainer",
    "price": "£699",
    "tag": "FLAGSHIP",
    "emoji": "🚴",
    "rating": 4.9,
    "reviews": 612,
    "cat": "trainers",
    "special": true,
    "desc": "1500w resistance, ±1% power accuracy and ERG mode — the control environment that builds watts.",
    "features": [
     "1500w resistance, ±1% power accuracy",
     "ERG mode with structured workouts",
     "Direct-drive, near-silent"
    ],
    "review": {
     "who": "Will W.",
     "text": "Six months on the Cadence took my FTP from 267 to 312w. The ERG precision is unlike anything I’ve trained on."
    }
   },
   {
    "name": "Cadence Move Smart Trainer",
    "price": "£1,099",
    "tag": "NEW",
    "emoji": "🚴",
    "rating": 4.8,
    "reviews": 184,
    "cat": "trainers",
    "special": true,
    "desc": "The first trainer that moves with you — 10° of fore/aft and lateral motion so indoor rides engage the same stabilising muscles as the road.",
    "features": [
     "10° fore/aft + lateral motion",
     "±1% power, ERG mode",
     "Near-silent direct drive"
    ],
    "review": {
     "who": "Grace T.",
     "text": "The motion is subtle but my core knows it after an hour. Closest thing to riding outside."
    }
   },
   {
    "name": "ELEMNT Roam 2 GPS",
    "price": "£349",
    "tag": "COMPUTER",
    "emoji": "📱",
    "rating": 4.8,
    "reviews": 438,
    "cat": "computers",
    "desc": "3.5\" colour display, 17-hour battery and Climb Pro — the head unit that thinks with you.",
    "features": [
     "3.5\" colour display, 17hr battery",
     "Climb Pro gradient guidance",
     "AI route recalculation on power & fatigue"
    ],
    "review": {
     "who": "Grace T.",
     "text": "Never bonk on a long ride again — the fatigue-aware rerouting is genuinely clever."
    }
   },
   {
    "name": "TICKR X Heart Rate",
    "price": "£79",
    "emoji": "❤️",
    "rating": 4.7,
    "reviews": 289,
    "cat": "sensors",
    "desc": "Dual-band HR with running dynamics and built-in memory — train with or without your phone.",
    "features": [
     "Running dynamics + cycling HR",
     "ANT+ & Bluetooth dual-band",
     "Built-in memory, no phone needed"
    ],
    "review": {
     "who": "Leo P.",
     "text": "Rock-solid pairing, tiny, and the on-board memory means I can leave the phone at home."
    }
   },
   {
    "name": "RPM Speed & Cadence Set",
    "price": "£55",
    "emoji": "⚙️",
    "rating": 4.6,
    "reviews": 342,
    "cat": "sensors",
    "desc": "A magnet-free speed and cadence sensor pair that installs in seconds and pairs to everything.",
    "features": [
     "No magnets — quick install",
     "ANT+ & Bluetooth",
     "120-hour battery each"
    ],
    "review": {
     "who": "Leo P.",
     "text": "On in two minutes, accurate, and I forget they’re there. Just works."
    }
   }
  ],
  "shopCats": [
   {
    "key": "trainers",
    "label": "Smart Trainers",
    "icon": "🚴"
   },
   {
    "key": "computers",
    "label": "Computers",
    "icon": "📱"
   },
   {
    "key": "sensors",
    "label": "Sensors",
    "icon": "⚙️"
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "<b>Cadence Move</b> is here — the first smart trainer that moves with you. 10° of fore/aft and lateral motion, so your indoor rides engage the same stabilising muscles as outdoor cycling. ±1% power, ERG mode, near-silent. Game changing.",
    "img": "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 12.4K · 💬 1.8K · ↗ 890",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Training science · 3h ago",
    "text": "New research with Team Visma confirms it: 12 weeks on the Cadence with structured ERG workouts produces the same FTP gains as 16 weeks of outdoor training. The control environment makes the difference.",
    "eng": "♡ 8.9K · 💬 1.1K · ↗ 567"
   },
   {
    "type": "community",
    "who": "watts_wizard_will",
    "whoBg": "linear-gradient(135deg,#F5C400,#FFD700)",
    "sub": "Community · 2h ago",
    "text": "Cadence + ELEMNT Roam combo for six months. FTP from 267 to 312w — a 16.9% jump. The ERG mode accuracy is unlike anything I’ve trained on. If you’re serious about watts, this is the ecosystem.",
    "eng": "♡ 4.1K · 💬 534",
    "reply": "Those numbers are elite-level — 16.9% is a serious jump. The ±1% ERG precision is exactly what makes structured training pay off. Keep it up, and share your next block with the community! 🚴"
   },
   {
    "type": "post",
    "sub": "Product · 1d ago",
    "text": "ELEMNT Roam 2 firmware update live: AI-powered route recalculation based on your real-time power output and fatigue index. Never bonk on a long ride again.",
    "img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 6.8K · 💬 890 · ↗ 389",
    "product": 1
   }
  ],
  "about": {
   "founded": "Boulder, Colorado · 2009",
   "story": "Whirl was founded by engineers obsessed with one number: watts. Smart trainers, cycling computers and heart-rate tech built to measure the ride precisely and make every indoor hour count — the training ecosystem for riders who want the data to be true.",
   "milestones": [
    [
     "2009",
     "Founded in Boulder, Colorado"
    ],
    [
     "2015",
     "First ±1% direct-drive smart trainer"
    ],
    [
     "2024",
     "ELEMNT Roam 2 with Climb Pro"
    ],
    [
     "2026",
     "Cadence Move — motion smart trainer"
    ]
   ],
   "values": [
    "Accuracy over marketing numbers",
    "Open standards (ANT+ & Bluetooth)",
    "Firmware support for the life of the device"
   ]
  }
 },
 "ravelin": {
  "key": "ravelin",
  "kind": "brand",
  "gw": "cycle",
  "name": "Ravelin",
  "color": "#CC0000",
  "gradient": "linear-gradient(135deg,#CC0000,#991A1A,#7A0000)",
  "tier": "Brand Zone",
  "verified": true,
  "tagline": "Premium cycling apparel",
  "stats": {
   "followers": "45.6K",
   "content": "1,200",
   "products": "180"
  },
  "products": [
   {
    "name": "Pro Team Aero Jersey",
    "price": "£260",
    "tag": "FLAGSHIP",
    "emoji": "🚴",
    "rating": 4.9,
    "reviews": 734,
    "cat": "jerseys",
    "special": true,
    "desc": "Wind-tunnel tested, UCI legal, AlpineShell SHAKEDRY — every gram validated against performance data.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "features": [
     "Wind-tunnel tested, UCI legal",
     "AlpineShell SHAKEDRY membrane",
     "Worn by six ProLeague teams"
    ],
    "review": {
     "who": "Marco R.",
     "text": "Race-fit without being a straitjacket. The SHAKEDRY panels shrug off rain like nothing else."
    }
   },
   {
    "name": "Souplesse Jersey",
    "price": "£175",
    "emoji": "🚴",
    "rating": 4.7,
    "reviews": 388,
    "cat": "jerseys",
    "desc": "The endurance jersey — a slightly relaxed race fit with three deep pockets and a full-length hidden zip for all-day rides.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "features": [
     "Relaxed race fit",
     "Three deep rear pockets",
     "Lightweight, breathable knit"
    ],
    "review": {
     "who": "Sofia L.",
     "text": "The all-day jersey. Race-adjacent fit but I can actually breathe on the climbs."
    }
   },
   {
    "name": "Classic Bib Short II",
    "price": "£220",
    "tag": "BIB",
    "emoji": "🚴",
    "rating": 4.9,
    "reviews": 912,
    "cat": "bibs",
    "special": true,
    "desc": "Elastic Interface chamois developed over four years with 500 test riders — the most important 28cm of any kit.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "features": [
     "Elastic Interface chamois, 4-year dev",
     "6-panel, 4-way stretch",
     "500-rider tested"
    ],
    "review": {
     "who": "Sofia L.",
     "text": "Comfortable past the 6-hour mark. I own three pairs and won’t ride in anything else."
    }
   },
   {
    "name": "Core Rain Jacket",
    "price": "£145",
    "emoji": "🧥",
    "rating": 4.7,
    "reviews": 356,
    "cat": "outerwear",
    "desc": "100% recycled, packable, taped seams — quick-dry protection built for multi-day adventures.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ],
    "features": [
     "100% recycled fabric",
     "Packable, fully taped seams",
     "Quick-dry for multi-day rides"
    ],
    "review": {
     "who": "Grace M.",
     "text": "Eight days of Pyrenees bikepacking, sink-washed nightly. Performed as well on day 8 as day 1."
    }
   },
   {
    "name": "Pro Team Gilet",
    "price": "£110",
    "emoji": "🦺",
    "rating": 4.6,
    "reviews": 212,
    "cat": "outerwear",
    "desc": "A packable wind gilet for the descents and the grey mornings — stuffs into a jersey pocket, blocks the chill.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ],
    "features": [
     "Windproof front panel",
     "Packs into a rear pocket",
     "Mesh back to vent heat"
    ],
    "review": {
     "who": "Marco R.",
     "text": "Lives in my pocket all winter. On for the descent, off for the climb."
    }
   }
  ],
  "shopCats": [
   {
    "key": "jerseys",
    "label": "Jerseys",
    "icon": "🚴"
   },
   {
    "key": "bibs",
    "label": "Bibs & Shorts",
    "icon": "🩳"
   },
   {
    "key": "outerwear",
    "label": "Outerwear",
    "icon": "🧥"
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "The <b>Pro Team Aero Jersey</b> for 2026. Six ProLeague teams. Wind tunnel at TotalEnergies. Every gram of fabric validated against performance data. Available only through Ravelin Brand Zones. This is what racing looks like.",
    "img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 11.2K · 💬 1.6K · ↗ 778",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Community · 3h ago",
    "text": "<b>Ravelin Cycling Club</b> new rides announced. 180 cities. Every Saturday. Every level. Coffee at the end is non-negotiable. Find your local chapter in the zone.",
    "eng": "♡ 9.4K · 💬 1.2K · ↗ 567"
   },
   {
    "type": "community",
    "who": "gravel_grace",
    "whoBg": "linear-gradient(135deg,#D97706,#B45309)",
    "sub": "Community · 4h ago",
    "text": "Ravelin Core kit for 8 days of Pyrenees bikepacking. Washed it every other night in a hostel sink, dried overnight. Performed as well on day 8 as day 1. That is what premium means in cycling kit.",
    "eng": "♡ 6.8K · 💬 789",
    "reply": "The Pyrenees in the Core kit — exactly the use case we design for. The quick-dry finish was engineered for multi-day adventures. See you on the road. 🚴"
   },
   {
    "type": "post",
    "sub": "Craft · 1d ago",
    "text": "How we build the <b>Classic Bib Short II</b>: six panels, four-way stretch, and an Elastic Interface chamois developed over four years with 500 test riders. The most important 28cm of any cycling kit.",
    "img": "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 7.8K · 💬 934 · ↗ 445",
    "product": 1
   }
  ],
  "event": {
   "zoneEvent": true,
   "tag": "CLUB RIDE",
   "title": "Ravelin Cycling Club — Global Saturday Ride",
   "when": "This Saturday · 08:00 local",
   "desc": "180 cities, every level, one ride. Roll out with your local chapter, earn the coffee at the end. Find your start point and RSVP inside the zone.",
   "registered": 12400,
   "capacity": 20000
  },
  "about": {
   "founded": "London, UK · 1997",
   "story": "Ravelin makes premium cycling apparel for people who ride because they must. Wind-tunnel race kit, four-years-in-development chamois, and a global cycling club in 180 cities — clothing built from performance data and worn by the peloton and the Saturday café run alike.",
   "milestones": [
    [
     "1997",
     "Founded in London"
    ],
    [
     "2008",
     "First Elastic Interface race chamois"
    ],
    [
     "2019",
     "Ravelin Cycling Club passes 100 cities"
    ],
    [
     "2026",
     "Pro Team Aero Jersey — six ProLeague teams"
    ]
   ],
   "values": [
    "Performance validated, not claimed",
    "Ride together — the club comes first",
    "Repairs & crash replacement"
   ]
  }
 },
 "velocarbon": {
  "key": "velocarbon",
  "kind": "business",
  "gw": "cycle",
  "name": "Velocarbon Frames",
  "color": "#A16207",
  "gradient": "linear-gradient(135deg,#713F12,#EAB308)",
  "img": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=500&fit=crop&q=75",
  "tier": "Verified",
  "category": "Manufacturing",
  "tagline": "OEM carbon frames and forks for cycling brands.",
  "about": {
   "founded": "Girona, Spain · 2008",
   "story": "We engineer and lay up carbon road, gravel and track frames for cycling brands, from first sketch to UCI approval, in our Girona factory."
  },
  "stats": {
   "years": 17,
   "staff": 140,
   "clients": "22 bike brands"
  },
  "caps": [
   {
    "name": "OEM frames",
    "detail": "Road, gravel and track frames, with full in-house layup and testing."
   },
   {
    "name": "Engineering",
    "detail": "FEA, prototyping and ISO 4210 lab testing in-house."
   },
   {
    "name": "UCI approval",
    "detail": "We manage UCI frame approval for race models."
   }
  ],
  "specs": {
   "moq": "200 frames",
   "lead": "12–16 weeks",
   "regions": "Worldwide",
   "certs": [
    "ISO 4210 tested",
    "ISO 9001",
    "UCI approved models"
   ]
  },
  "supplies": [
   {
    "kind": "brand",
    "key": "ravelin",
    "what": "Aero frames for the ProLeague team bikes"
   },
   {
    "kind": "brand",
    "key": "whirl",
    "what": "Test rigs for the Cadence Move trainer"
   }
  ],
  "cases": [
   {
    "title": "Ravelin ProLeague aero frame",
    "text": "Six ProLeague teams race on frames engineered and built in Girona."
   },
   {
    "title": "A gravel launch",
    "text": "From sketch to shop floor in 11 months for a new UK gravel brand."
   }
  ],
  "feed": [
   {
    "sub": "Company news · 3d",
    "text": "A new layup line doubles our capacity for small runs."
   },
   {
    "sub": "Event · 2w",
    "text": "Meet us at Eurobike, Hall 9."
   }
  ],
  "contact": {
   "person": "Ana Soler, OEM sales",
   "response": "Replies within 24 hours"
  }
 },
 "pedal-logistics": {
  "key": "pedal-logistics",
  "kind": "business",
  "gw": "cycle",
  "name": "Pedal Logistics",
  "color": "#C2410C",
  "gradient": "linear-gradient(135deg,#9A3412,#F97316)",
  "img": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=500&fit=crop&q=75",
  "tier": "Claimed",
  "category": "Services",
  "tagline": "Bike shipping, fulfilment and event logistics.",
  "about": {
   "founded": "Bristol, UK · 2014",
   "story": "Specialist logistics for the cycling world: frame-safe shipping, direct-to-consumer fulfilment for bike brands, and event logistics for camps and races."
  },
  "stats": {
   "years": 11,
   "staff": 38,
   "clients": "90 cycling brands"
  },
  "caps": [
   {
    "name": "Bike shipping",
    "detail": "Frame-safe boxes and insured door-to-door transit across Europe."
   },
   {
    "name": "Fulfilment",
    "detail": "Warehousing and same-day dispatch for direct-to-consumer brands."
   },
   {
    "name": "Event logistics",
    "detail": "Bikes, vans and mechanics for camps and races."
   }
  ],
  "specs": {
   "moq": "No minimum",
   "lead": "Same-day dispatch",
   "regions": "UK & Europe",
   "certs": [
    "ISO 9001",
    "Carbon-neutral delivery"
   ]
  },
  "supplies": [
   {
    "kind": "brand",
    "key": "ravelin",
    "what": "UK direct-to-consumer fulfilment"
   },
   {
    "kind": "pro",
    "key": "girona-cycling-camps",
    "what": "Bike transport for every spring camp"
   }
  ],
  "cases": [
   {
    "title": "Girona camps",
    "text": "300 bikes moved to Girona and back every spring, with zero damage claims in three seasons."
   }
  ],
  "feed": [
   {
    "sub": "Service news · 4d",
    "text": "New frame-safe box cuts transit damage to zero in trials."
   },
   {
    "sub": "Company news · 2w",
    "text": "Same-day dispatch now until 4pm."
   }
  ],
  "contact": {
   "person": "Sam Okafor, Partnerships",
   "response": "Replies within 4 working hours"
  }
 }
});
})();
