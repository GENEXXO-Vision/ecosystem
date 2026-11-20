/* ═════════ SAILXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.sail = {
 "name": "SailXX",
 "domain": "sailxx.com",
 "emoji": "⛵",
 "sector": "adventure",
 "live": true,
 "tagline": "The Sailing Universe",
 "theme": {
  "bg": "#F5F7FA",
  "text": "#0A1628",
  "cardBg": "#FFFFFF",
  "cardBorder": "rgba(10,22,40,.07)",
  "headerBg": "linear-gradient(180deg,#E3E9F2,#F5F7FA)",
  "accent": "#1B3A6B",
  "accentAlt": "#C9A84C",
  "dark": false
 },
 "gradient": "linear-gradient(135deg,#0A1628,#1B3A6B,#C9A84C)",
 "stats": {
  "members": "187K",
  "brands": "620+",
  "agents": "41"
 },
 "spaces": [
  "All Feed",
  "Ocean Racing",
  "Coastal Cruising",
  "Weather & Navigation",
  "Boat Talk"
 ],
 "trending": [
  "#OceanRacing",
  "#SoloGlobe",
  "#CoastalCruising"
 ],
 "brandZones": [
  {
   "key": "gimbal-marine",
   "name": "Gimbal Marine",
   "color": "#1B3A6B",
   "tier": "Brand Zone",
   "tag": "Deck hardware & rigging"
  },
  {
   "key": "halcyon-harbor",
   "name": "Halcyon Harbor",
   "color": "#C9A84C",
   "tier": "Brand Zone",
   "tag": "Ocean-grade technical clothing"
  }
 ],
 "apps": [
  {
   "name": "Weather Router",
   "color": "#0066CC",
   "desc": "GRIB data, 6h updates, global",
   "key": "weather-router",
   "url": "apps/weather-router.html",
   "dev": "Isobar Labs",
   "rating": "4.8",
   "users": "6.1K",
   "perms": [
    "profile",
    "feed"
   ],
   "tagline": "Plan the passage around the wind, not the other way round.",
   "about": "Weather Router plans your passage on the latest wind data. Choose your ports, departure and boat, and it breaks the route into legs with true wind angle, sail plan and boat speed, then gives you a reliable ETA. Alerts flag gusts, wind against tide and poor visibility before you slip the lines.",
   "features": [
    "Leg-by-leg wind, angle and sail plan",
    "ETA that adapts to your boat and departure",
    "Chart view with the wind field",
    "Gust, tide-race and fog alerts"
   ],
   "shots": [
    "apps/weather-router/shot-1.jpg",
    "apps/weather-router/shot-2.jpg",
    "apps/weather-router/shot-3.jpg"
   ],
   "version": "4.2",
   "size": "11 KB",
   "updates": [
    {
     "v": "4.2",
     "ago": 3,
     "notes": "Departure picker: compare the next four days at a glance."
    },
    {
     "v": "4.1",
     "ago": 19,
     "notes": "Chart view redrawn with live wind barbs."
    },
    {
     "v": "4.0",
     "ago": 52,
     "notes": "Wind-against-tide warnings for major headlands."
    }
   ],
   "reviews": [
    {
     "who": "@saltwater_sam",
     "stars": 5,
     "ago": 2,
     "text": "Cowes to Cherbourg planned in a minute. The leg breakdown is superb."
    },
    {
     "who": "@reefearly",
     "stars": 5,
     "ago": 10,
     "text": "The gust alerts have saved me from a rough night more than once."
    },
    {
     "who": "@solent_skipper",
     "stars": 4,
     "ago": 23,
     "text": "Excellent. Would like polars for my own boat."
    }
   ]
  },
  {
   "name": "Logbook Pro",
   "color": "#16A34A",
   "desc": "Passages, crew & maintenance",
   "key": "logbook-pro",
   "url": "apps/logbook-pro.html",
   "dev": "Bosun Software",
   "rating": "4.7",
   "users": "4.9K",
   "perms": [
    "profile",
    "feed"
   ],
   "tagline": "The ship’s log, done properly.",
   "about": "Logbook Pro is the logbook every skipper means to keep. Record each passage with distance, time, crew and conditions, watch your season’s miles build, and keep on top of the boat with a maintenance list that tells you what is due.",
   "features": [
    "Log a passage in seconds",
    "Season totals for miles, passages and hours",
    "Maintenance list with due and overdue jobs",
    "Share passages to the SailXX feed"
   ],
   "shots": [
    "apps/logbook-pro/shot-1.jpg",
    "apps/logbook-pro/shot-2.jpg",
    "apps/logbook-pro/shot-3.jpg"
   ],
   "version": "5.3",
   "size": "9 KB",
   "updates": [
    {
     "v": "5.3",
     "ago": 5,
     "notes": "Maintenance jobs now show due dates and overdue warnings."
    },
    {
     "v": "5.2",
     "ago": 30,
     "notes": "Season totals on the Passages tab."
    },
    {
     "v": "5.0",
     "ago": 61,
     "notes": "A cleaner, paper-log design."
    }
   ],
   "reviews": [
    {
     "who": "@bluewater_bea",
     "stars": 5,
     "ago": 4,
     "text": "Finally replaced my soggy paper log. Looks the part too."
    },
    {
     "who": "@engine_hours",
     "stars": 5,
     "ago": 12,
     "text": "The maintenance list is the best bit. Nothing slips."
    },
    {
     "who": "@harbourmaster_h",
     "stars": 4,
     "ago": 20,
     "text": "Lovely app. Tide notes per passage would be ideal."
    }
   ]
  }
 ],
 "pros": [
  {
   "key": "solent-sea-school",
   "name": "Solent Sea School",
   "color": "#1B3A6B",
   "tag": "RYA Yachtmaster courses & coaching",
   "role": "RYA sailing school",
   "img": "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&h=800&fit=crop&q=75",
   "base": "Hamble, UK",
   "langs": "English",
   "years": 21,
   "rating": "4.8",
   "reviewsN": 402,
   "cur": "£",
   "creds": [
    "RYA Recognised Training Centre",
    "Yachtmaster Instructors on every course",
    "MCA-coded yachts"
   ],
   "about": "From Day Skipper to Yachtmaster Offshore, taught aboard well-kept 38ft yachts on the busy, tidal, brilliant Solent. Small crews of up to five, live-aboard courses, and a skipper who has seen everything the Channel can throw at you.",
   "services": [
    {
     "id": "dayskip",
     "name": "Day Skipper practical",
     "dur": "5 days",
     "price": 895,
     "desc": "Live-aboard. Pilotage, passage planning and skippering under supervision."
    },
    {
     "id": "ymprep",
     "name": "Yachtmaster prep & exam",
     "dur": "6 days",
     "price": 1150,
     "desc": "Intensive prep week ending with the RYA examiner."
    },
    {
     "id": "own",
     "name": "Own-boat coaching day",
     "dur": "1 day",
     "price": 380,
     "desc": "An instructor on your boat, focused on what you want to improve."
    }
   ],
   "avail": {
    "days": [
     1,
     2,
     4,
     5,
     6
    ],
    "times": [
     "09:00"
    ]
   },
   "reviews": [
    {
     "who": "@saltwater_sam",
     "stars": 5,
     "ago": 6,
     "text": "Passed Yachtmaster first time. The night passage to Cherbourg was the making of me."
    },
    {
     "who": "@new_skipper_nia",
     "stars": 5,
     "ago": 20,
     "text": "Patient, thorough and fun. The Day Skipper course was perfect."
    },
    {
     "who": "@harbour_hal",
     "stars": 4,
     "ago": 41,
     "text": "Great instructors. Boats a little dated but very well maintained."
    }
   ],
   "posts": [
    {
     "ago": 2,
     "text": "Spring Day Skipper dates are open. A week aboard is the fastest way to confidence on tidal water."
    },
    {
     "ago": 8,
     "text": "Exam tip: brief your crew out loud. Examiners want to hear your plan."
    }
   ],
   "tier": "Pro Zone",
   "verified": true
  },
  {
   "key": "bluewater-deliveries",
   "name": "Bluewater Deliveries",
   "color": "#0E7490",
   "tag": "Delivery skipper · offshore passages",
   "role": "Professional delivery skipper",
   "img": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=800&fit=crop&q=75",
   "base": "Falmouth, UK · worldwide",
   "langs": "English, Spanish",
   "years": 15,
   "rating": "4.9",
   "reviewsN": 97,
   "cur": "£",
   "creds": [
    "MCA Yachtmaster Ocean, commercially endorsed",
    "STCW safety and medical",
    "40,000+ offshore miles"
   ],
   "about": "Your boat, delivered safely: Biscay crossings, Mediterranean repositioning and transatlantics. Crew places are available for sailors who want to build offshore miles alongside a professional skipper.",
   "services": [
    {
     "id": "biscay",
     "name": "Biscay delivery, skipper + mate",
     "dur": "5–7 days",
     "price": 2400,
     "desc": "UK to northern Spain, with weather routing and full passage reporting."
    },
    {
     "id": "crew",
     "name": "Offshore crew place",
     "dur": "7 days",
     "price": 650,
     "desc": "Join a delivery as crew. Watches, navigation and night sailing."
    },
    {
     "id": "survey",
     "name": "Pre-passage boat check",
     "dur": "Half day",
     "price": 250,
     "desc": "Rig, safety kit and systems checked before a big trip."
    }
   ],
   "avail": {
    "days": [
     1,
     3,
     5
    ],
    "times": [
     "10:00"
    ]
   },
   "reviews": [
    {
     "who": "@bluewater_bea",
     "stars": 5,
     "ago": 9,
     "text": "Delivered our boat to A Coruña flawlessly. Daily updates the whole way."
    },
    {
     "who": "@miles_builder",
     "stars": 5,
     "ago": 27,
     "text": "Crew place across Biscay: learned more in a week than in two seasons."
    },
    {
     "who": "@cat_owner",
     "stars": 5,
     "ago": 52,
     "text": "Calm, organised, and he left the boat cleaner than he found it."
    }
   ],
   "posts": [
    {
     "ago": 4,
     "text": "Weather window opening for Biscay next week. One crew berth free, Falmouth to Bayona."
    },
    {
     "ago": 15,
     "text": "Pre-passage checklist: chafe on the furler line is the most common failure I see."
    }
   ],
   "tier": "Pro Zone",
   "verified": true
  }
 ],
 "communities": [
  {
   "key": "solent-fleet",
   "name": "Solent Racing Fleet",
   "domain": "solentfleet.sailxx.com",
   "color": "#1B3A6B",
   "img": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=900&h=500&fit=crop&q=75",
   "scope": "Local",
   "where": "Solent, UK",
   "members": 1310,
   "online": 27,
   "tagline": "Crew wanted, boats wanted, every Wednesday evening.",
   "about": "The Solent’s crew-finding and racing community. Owners post crew spaces, sailors post availability, and everyone argues about the results on Thursday morning. Wednesday evening series all season.",
   "rules": [
    "Crew requests need a date and boat",
    "Results disputes go to the protest thread",
    "No selling in the main feed"
   ],
   "mods": [
    "@saltwater_sam",
    "@solent_skipper"
   ],
   "threads": [
    {
     "t": "Crew needed: J/109, Wednesday series",
     "by": "@solent_skipper",
     "tag": "CREW",
     "replies": 11,
     "ago": 0,
     "votes": 24
    },
    {
     "t": "Results: race 6, a nail-biter at the line",
     "by": "@race_officer",
     "tag": "RESULTS",
     "replies": 27,
     "ago": 1,
     "votes": 48
    },
    {
     "t": "Best foul-weather jacket for night racing?",
     "by": "@new_skipper_nia",
     "tag": "GEAR",
     "replies": 19,
     "ago": 3,
     "votes": 31
    },
    {
     "t": "Round the Island planning thread",
     "by": "@saltwater_sam",
     "tag": "EVENT",
     "replies": 56,
     "ago": 5,
     "votes": 89
    }
   ],
   "events": [
    {
     "title": "Wednesday series, race 7",
     "day": 3,
     "time": "18:30",
     "where": "Cowes, Royal Yacht Squadron line"
    },
    {
     "title": "Crew-finding drinks",
     "day": 8,
     "time": "19:30",
     "where": "Island Sailing Club, Cowes"
    }
   ]
  },
  {
   "key": "bluewater-cruisers",
   "name": "Bluewater Cruisers Network",
   "domain": "bluewater.sailxx.com",
   "color": "#0E7490",
   "img": "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=900&h=500&fit=crop&q=75",
   "scope": "Global",
   "where": "Worldwide",
   "members": 8730,
   "online": 204,
   "tagline": "Long-distance cruising, one anchorage at a time.",
   "about": "A global network of liveaboard and long-distance sailors sharing passage notes, anchorage reviews and weather windows. From Biscay first-timers to circumnavigators.",
   "rules": [
    "Anchorage reviews need a date",
    "No paid charter adverts",
    "Help first, judge never"
   ],
   "mods": [
    "@bluewater_bea",
    "@miles_builder"
   ],
   "threads": [
    {
     "t": "Biscay window next week, who is going?",
     "by": "@miles_builder",
     "tag": "PASSAGE",
     "replies": 42,
     "ago": 0,
     "votes": 71
    },
    {
     "t": "Anchorage review: Ría de Arousa",
     "by": "@bluewater_bea",
     "tag": "ANCHORAGE",
     "replies": 18,
     "ago": 2,
     "votes": 55
    },
    {
     "t": "Watermaker or jerry cans for the Atlantic?",
     "by": "@cat_owner",
     "tag": "GEAR",
     "replies": 64,
     "ago": 3,
     "votes": 82
    },
    {
     "t": "ARC 2026 crew list",
     "by": "@arc_planner",
     "tag": "EVENT",
     "replies": 37,
     "ago": 6,
     "votes": 60
    }
   ],
   "events": [
    {
     "title": "Online talk: crossing Biscay safely",
     "day": 4,
     "time": "19:00",
     "where": "Online"
    },
    {
     "title": "Falmouth departures meet-up",
     "day": 11,
     "time": "18:00",
     "where": "Falmouth Haven"
    }
   ]
  }
 ],
 "feed": [
  {
   "av": "SL",
   "avBg": "linear-gradient(135deg,#0A1628,#1B3A6B)",
   "author": "SailXX Editorial",
   "sub": "Featured · Just now",
   "badge": "★ FEATURED",
   "text": "The open water awaits. Ocean racing, coastal cruising and the community of those who answer to the wind — weather, boats and blue-water navigation, all in one place.",
   "video": "genexxo-videos/sailxx.mp4",
   "eng": "♡ 14.6K · 💬 1.7K · ↗ 980"
  },
  {
   "av": "HW",
   "avBg": "linear-gradient(135deg,#0066CC,#0044AA)",
   "author": "@helm_and_wake",
   "sub": "Coastal Cruising · 2h ago",
   "badge": "COMMUNITY",
   "text": "Slipped the mooring at first light and rode a clean 15-knot northerly down the coast. Sails full, kettle on, nobody else on the water. Some passages you do for the destination — this one was purely for the sail.",
   "video": "genexxo-videos/sail1.mp4",
   "eng": "♡ 3.4K · 💬 289 · ↗ 141"
  },
  {
   "av": "GM",
   "avBg": "linear-gradient(135deg,#0A1628,#1B3A6B)",
   "author": "Gimbal Marine",
   "sub": "Brand Zone · 3h ago",
   "badge": "BRAND ZONE",
   "text": "ChartPro 923xsv firmware update: AI weather routing now integrates GRIB files directly into the chartplotter — route around developing systems without leaving the helm. Tested by the Global Ocean fleet.",
   "img": "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 4.2K · 💬 523 · ↗ 189"
  },
  {
   "av": "HH",
   "avBg": "linear-gradient(135deg,#C9A84C,#B8963A)",
   "author": "Halcyon Harbor",
   "sub": "Brand Zone · 4h ago",
   "badge": "BRAND ZONE",
   "text": "The Aegir Ocean Jacket — born in the Southern Ocean, refined by 12 Global Ocean campaigns. 20,000mm hydrostatic head, double-sealed seams, harness compatible. When conditions turn critical, this is what stands between you and the sea.",
   "img": "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 6.8K · 💬 789 · ↗ 334"
  }
 ],
 "prompts": [
  "Plan a weather window for a Channel crossing",
  "Best first cruising yacht under £60k?"
 ],
 "businesses": [
  "atlantic-sailmakers",
  "nautilink"
 ]
};
Object.assign(ZONES, {
 "gimbal-marine": {
  "key": "gimbal-marine",
  "kind": "brand",
  "gw": "sail",
  "name": "Gimbal Marine",
  "color": "#1B3A6B",
  "gradient": "linear-gradient(135deg,#0A1628,#1B3A6B,#2A4A8B)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "Navigation & marine electronics",
  "stats": {
   "followers": "19.8K",
   "content": "456",
   "products": "67"
  },
  "event": {
   "live": true,
   "tag": "Gimbal Live",
   "title": "Solo Globe — Southern Ocean Tracker",
   "subtitle": "Follow the fleet live on Gimbal ChartPro routing as the leaders push into the Southern Ocean.",
   "now": "Delmar leads · 3 boats within 40nm",
   "viewers": "2,190",
   "poster": "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&h=440&fit=crop&q=80"
  },
  "products": [
   {
    "name": "ChartPro 923xsv",
    "price": "£1,299",
    "tag": "FLAGSHIP",
    "emoji": "🗺️",
    "rating": 4.8,
    "reviews": 342,
    "cat": "chartplotters",
    "special": true,
    "desc": "9\" chartplotter with built-in sonar, BlueChart g3 and AI GRIB routing — the helm that thinks ahead.",
    "features": [
     "9\" chartplotter, built-in sonar",
     "BlueChart g3 cartography",
     "AI GRIB weather routing at the helm"
    ],
    "review": {
     "who": "Nadia N.",
     "text": "Routed us around a North Sea low that could have been genuinely dangerous. The most important safety feature added to chartplotters in years."
    }
   },
   {
    "name": "ChartPro 1243xsv",
    "price": "£2,199",
    "tag": "OFFSHORE",
    "emoji": "🗺️",
    "rating": 4.9,
    "reviews": 158,
    "cat": "chartplotters",
    "special": true,
    "desc": "The 12\" offshore helm — the chartplotter that navigated a record Solo Globe run, with full AI routing and radar integration.",
    "features": [
     "12\" glass helm display",
     "Radar & AIS overlay",
     "AI GRIB weather routing"
    ],
    "review": {
     "who": "Nadia N.",
     "text": "Navigated the Southern Ocean on this. When it matters most, it does not miss."
    }
   },
   {
    "name": "Quatix 7 Sapphire",
    "price": "£799",
    "tag": "SMARTWATCH",
    "emoji": "⌚",
    "rating": 4.8,
    "reviews": 271,
    "cat": "wearables",
    "desc": "Marine smartwatch with auto-tack, race timer and sailing analytics — everything your wrist needs at the helm.",
    "features": [
     "Auto-tack, race timer & anchor alarm",
     "Sailing analytics on the wrist",
     "ActiveCaptain marina & tidal integration"
    ],
    "review": {
     "who": "Tom H.",
     "text": "The race timer and auto-tack alone changed how I sail solo. Battery lasts a full offshore leg."
    }
   },
   {
    "name": "VHF 315i Radio",
    "price": "£299",
    "emoji": "📡",
    "rating": 4.7,
    "reviews": 196,
    "cat": "comms",
    "desc": "Fixed-mount VHF with built-in GPS, DSC distress and a floating, waterproof design.",
    "features": [
     "Built-in GPS + DSC distress",
     "Floating, waterproof design",
     "Clear-voice noise cancelling"
    ],
    "review": {
     "who": "Ben C.",
     "text": "Crystal-clear even in a blow, and knowing it floats if it goes over the side is real peace of mind."
    }
   },
   {
    "name": "AIS 800 Transceiver",
    "price": "£549",
    "emoji": "📶",
    "rating": 4.7,
    "reviews": 132,
    "cat": "comms",
    "desc": "A Class B transceiver that puts you on other vessels’ screens — see and be seen, day or night, fog or clear.",
    "features": [
     "Transmit + receive AIS",
     "Integrates with the ChartPro helm",
     "Built-in GPS antenna"
    ],
    "review": {
     "who": "Ben C.",
     "text": "Being visible to shipping in the Channel at night is priceless. Simple install too."
    }
   }
  ],
  "shopCats": [
   {
    "key": "chartplotters",
    "label": "Chartplotters",
    "icon": "🗺️"
   },
   {
    "key": "wearables",
    "label": "Wearables",
    "icon": "⌚"
   },
   {
    "key": "comms",
    "label": "Radios & AIS",
    "icon": "📡"
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "<b>ChartPro 923xsv</b> firmware update: new AI weather routing integrates GRIB files directly into the chartplotter. Route around developing systems without leaving the helm. Tested by the Global Ocean fleet.",
    "img": "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 4.2K · 💬 523 · ↗ 189",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Ocean racing · 3h ago",
    "text": "Eleven Solo Globe boats running Gimbal Marine chartplotters. Charles Delmar’s record-breaking run was navigated on the ChartPro 1243xsv. When the Southern Ocean demands perfection, this is the standard.",
    "eng": "♡ 8.9K · 💬 1.2K · ↗ 567"
   },
   {
    "type": "community",
    "who": "nav_nadia",
    "whoBg": "linear-gradient(135deg,#0066CC,#0044AA)",
    "sub": "Community · 2h ago",
    "text": "Gimbal ChartPro routed us around a North Sea low that could have been genuinely dangerous. The AI routing update is not a gimmick — it is the most important safety feature added to chartplotters in years.",
    "eng": "♡ 2.8K · 💬 312",
    "reply": "Navigation safety is our first priority — the routing AI was two years in development with professional weather-routing partners. Glad it delivered when it mattered. Stay safe out there. ⛵"
   },
   {
    "type": "post",
    "sub": "Product · 1d ago",
    "text": "<b>Quatix 7 Sapphire</b> now integrates with ActiveCaptain for real-time marina availability and tidal-gate planning. Anchor alarm, auto-tack, race timer — everything your wrist needs at the helm.",
    "img": "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 3.6K · 💬 412 · ↗ 156",
    "product": 1
   }
  ],
  "about": {
   "founded": "Southampton, UK · 1991",
   "story": "Gimbal Marine builds the navigation electronics ocean racers and weekend sailors trust alike — chartplotters, marine smartwatches and VHF, engineered so the boat can be navigated safely from the helm in any conditions. Two years of routing-AI development with professional weather partners underpins the current fleet.",
   "milestones": [
    [
     "1991",
     "Founded in Southampton"
    ],
    [
     "2006",
     "First integrated chartplotter-sonar unit"
    ],
    [
     "2024",
     "AI GRIB weather routing on ChartPro"
    ],
    [
     "2026",
     "11 of the Solo Globe fleet navigate on Gimbal"
    ]
   ],
   "values": [
    "Safety first, always",
    "Data you can trust at the helm",
    "Support for the life of the vessel"
   ]
  }
 },
 "halcyon-harbor": {
  "key": "halcyon-harbor",
  "kind": "brand",
  "gw": "sail",
  "name": "Halcyon Harbor",
  "color": "#C9A84C",
  "gradient": "linear-gradient(135deg,#C9A84C,#B8963A,#8B6914)",
  "tier": "Brand Zone",
  "verified": true,
  "tagline": "Ocean-grade technical clothing",
  "stats": {
   "followers": "28.4K",
   "content": "890",
   "products": "240"
  },
  "products": [
   {
    "name": "Aegir Ocean Jacket",
    "price": "£649",
    "tag": "FLAGSHIP",
    "emoji": "🧥",
    "rating": 4.9,
    "reviews": 512,
    "cat": "jackets",
    "special": true,
    "desc": "20,000mm hydrostatic head, double-sealed seams and harness compatibility — born in the Southern Ocean.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "features": [
     "20,000mm hydrostatic head",
     "Double-sealed seams, harness compatible",
     "12 Global Ocean campaign-tested"
    ],
    "review": {
     "who": "Ben W.",
     "text": "Atlantic crossing, 21 days, three squalls and a gale — stayed completely dry inside, vented perfectly in the tropics. This is the one."
    }
   },
   {
    "name": "Coastal Inshore Jacket",
    "price": "£279",
    "tag": "INSHORE",
    "emoji": "🧥",
    "rating": 4.7,
    "reviews": 206,
    "cat": "jackets",
    "desc": "A lighter, more affordable shell for coastal and day sailing — waterproof, breathable, easy to pack.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "features": [
     "10,000mm hydrostatic head",
     "Fleece-lined collar & hand pockets",
     "Packs down for the kit bag"
    ],
    "review": {
     "who": "Jo T.",
     "text": "Perfect for club racing and weekend cruising. All the dryness without the offshore price."
    }
   },
   {
    "name": "Foil Pro Bib Trouser",
    "price": "£349",
    "tag": "BIB",
    "emoji": "🧥",
    "rating": 4.8,
    "reviews": 388,
    "cat": "bibs",
    "special": true,
    "desc": "Racing-cut bib with 4-way stretch and a reinforced seat — fully waterproof, built to move.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL",
     "XXL"
    ],
    "features": [
     "Racing cut, 4-way stretch",
     "Reinforced seat & knees",
     "Fully waterproof, taped seams"
    ],
    "review": {
     "who": "Sara L.",
     "text": "Freedom of movement on the rail without a drop getting through. My default offshore bib now."
    }
   },
   {
    "name": "Lifa Active Base Layer",
    "price": "£89",
    "emoji": "👕",
    "rating": 4.7,
    "reviews": 294,
    "cat": "base",
    "desc": "Next-to-skin Lifa base with moisture transport, anti-odour and quick-dry — the offshore foundation.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ],
    "features": [
     "Lifa moisture-transport fibre",
     "Anti-odour, quick-dry",
     "Worn next-to-skin offshore"
    ],
    "review": {
     "who": "Marek P.",
     "text": "Kept me dry from the skin out on a week-long delivery. The layer everything else builds on."
    }
   },
   {
    "name": "Lifa Merino Crew",
    "price": "£119",
    "emoji": "👕",
    "rating": 4.8,
    "reviews": 171,
    "cat": "base",
    "desc": "A two-layer Lifa-and-merino crew — merino warmth outside, Lifa dryness against the skin.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ],
    "features": [
     "Merino + Lifa two-layer knit",
     "Warm even when damp",
     "Anti-odour for long passages"
    ],
    "review": {
     "who": "Marek P.",
     "text": "The warmth-to-weight is unreal. Wore it four days straight offshore with no smell."
    }
   }
  ],
  "shopCats": [
   {
    "key": "jackets",
    "label": "Jackets",
    "icon": "🧥"
   },
   {
    "key": "bibs",
    "label": "Bibs & Trousers",
    "icon": "👖"
   },
   {
    "key": "base",
    "label": "Base Layers",
    "icon": "👕"
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "The <b>Aegir Ocean Jacket</b> — born in the Southern Ocean, refined by 12 Global Ocean campaigns. 20,000mm hydrostatic head. Double-sealed seams. Integrated harness compatibility. When conditions turn critical, this is what stands between you and the sea.",
    "img": "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 6.8K · 💬 789 · ↗ 334",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Global Ocean · 3h ago",
    "text": "Our Global Ocean sailing team wore the Aegir jacket for 25,000 nautical miles — through the Southern Ocean, around Cape Horn, into the North Atlantic storm. Zero failures. That is the standard we hold ourselves to.",
    "eng": "♡ 9.2K · 💬 1.1K · ↗ 567"
   },
   {
    "type": "community",
    "who": "blue_water_ben",
    "whoBg": "linear-gradient(135deg,#C9A84C,#B8963A)",
    "sub": "Community · 3h ago",
    "text": "Atlantic crossing in the Aegir jacket. 21 days. Three squalls including one genuine gale. Jacket stayed completely dry inside, and at 21°C in the tropics the venting worked perfectly. This is the one.",
    "eng": "♡ 4.6K · 💬 402",
    "reply": "An Atlantic crossing is the ultimate test — three squalls and a gale is exactly what the Aegir was built for. Congratulations on your crossing. The ocean gives nothing for free. ⛵"
   },
   {
    "type": "post",
    "sub": "Heritage · 1d ago",
    "text": "1877: Captain Halcyon Harbor began waterproofing canvas with linseed oil to protect Norwegian fishermen. 149 years later the mission is identical — keep the people who work, race and play on the water safe, warm and dry.",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 12.4K · 💬 1.6K · ↗ 789"
   }
  ],
  "event": {
   "zoneEvent": true,
   "tag": "CLINIC",
   "title": "Halcyon Harbor — Offshore Layering Clinic",
   "when": "Next Saturday · 10:00 GMT",
   "desc": "A live walkthrough of the Global Ocean layering system — base to shell, sizing and harness fit — with the Halcyon technical team. Bring your kit questions.",
   "registered": 2400,
   "capacity": 4000
  },
  "about": {
   "founded": "Moss, Norway · 1877",
   "story": "Halcyon Harbor has protected people on the water since 1877, when Captain Halcyon Harbor began waterproofing canvas with linseed oil for Norwegian fishermen. Nearly 150 years on, the mission is unchanged — ocean-grade jackets, bibs and base layers proven across Global Ocean campaigns and Cape Horn roundings.",
   "milestones": [
    [
     "1877",
     "Founded in Moss, Norway"
    ],
    [
     "1952",
     "First fully-taped waterproof smock"
    ],
    [
     "2018",
     "Aegir jacket debuts on the Global Ocean fleet"
    ],
    [
     "2026",
     "25,000-mile zero-failure campaign"
    ]
   ],
   "values": [
    "Keep people safe on the water",
    "Tested where it matters — offshore",
    "Repairable, built to last decades"
   ]
  }
 },
 "atlantic-sailmakers": {
  "key": "atlantic-sailmakers",
  "kind": "business",
  "gw": "sail",
  "name": "Atlantic Sailmakers",
  "color": "#1E3A8A",
  "gradient": "linear-gradient(135deg,#1E3A8A,#3B82F6)",
  "img": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&h=500&fit=crop&q=75",
  "tier": "Verified",
  "category": "Manufacturing",
  "tagline": "Performance and cruising sails, designed and built in Cornwall.",
  "about": {
   "founded": "Falmouth, UK · 1984",
   "story": "A Cornish sail loft designing and building cruising and racing sails, from Dacron cruising mains to membrane race inventories, with on-the-water fitting by our own sailmakers."
  },
  "stats": {
   "years": 41,
   "staff": 58,
   "clients": "2,000+ yachts"
  },
  "caps": [
   {
    "name": "Cruising sails",
    "detail": "Dacron and hydranet cruising inventories, with a 10-year cloth warranty."
   },
   {
    "name": "Race sails",
    "detail": "Membrane and moulded race sails with VPP-designed shapes."
   },
   {
    "name": "Service & repair",
    "detail": "Winter service, UV strips and fast race-week repairs."
   }
  ],
  "specs": {
   "moq": "One sail",
   "lead": "3–5 weeks",
   "regions": "Worldwide",
   "certs": [
    "ISO 9001",
    "World Sailing measurement certified"
   ]
  },
  "supplies": [
   {
    "kind": "brand",
    "key": "gimbal-marine",
    "what": "Sail inventory for the Gimbal 36 demo boat"
   },
   {
    "kind": "pro",
    "key": "solent-sea-school",
    "what": "Training-fleet sails, renewed every two seasons"
   }
  ],
  "cases": [
   {
    "title": "Solent Sea School fleet",
    "text": "Ten matched Dacron inventories, with a 48-hour repair promise in the season."
   },
   {
    "title": "An Atlantic crossing refit",
    "text": "A full offshore wardrobe for a family crossing on the ARC."
   }
  ],
  "feed": [
   {
    "sub": "Company news · 2d",
    "text": "Winter service booking is open. Drop sails by 30 November for priority turnaround."
   },
   {
    "sub": "New cloth · 4w",
    "text": "Hydranet radial now available for cruisers who want longevity without weight."
   }
  ],
  "contact": {
   "person": "Rob Penrose, Head sailmaker",
   "response": "Replies within 24 hours"
  }
 },
 "nautilink": {
  "key": "nautilink",
  "kind": "business",
  "gw": "sail",
  "name": "Nautilink Marine Electronics",
  "color": "#0E7490",
  "gradient": "linear-gradient(135deg,#164E63,#0891B2)",
  "img": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=500&fit=crop&q=75",
  "tier": "Claimed",
  "category": "Wholesale",
  "tagline": "Marine electronics distribution and installation partners.",
  "about": {
   "founded": "Southampton, UK · 2003",
   "story": "We distribute chartplotters, instruments, AIS and autopilots to chandleries and boatyards across the UK and northern Europe, with a certified installer network behind every product."
  },
  "stats": {
   "years": 22,
   "staff": 64,
   "clients": "450 chandleries & yards"
  },
  "caps": [
   {
    "name": "Trade distribution",
    "detail": "Next-day trade supply of navigation, AIS and autopilot systems."
   },
   {
    "name": "Installer network",
    "detail": "Certified installers for commissioning and NMEA 2000 networking."
   },
   {
    "name": "Fleet packages",
    "detail": "Specified packages for charter and training fleets."
   }
  ],
  "specs": {
   "moq": "Trade account",
   "lead": "Next day",
   "regions": "UK & northern Europe",
   "certs": [
    "NMEA certified installers",
    "ISO 14001"
   ]
  },
  "supplies": [
   {
    "kind": "brand",
    "key": "halcyon-harbor",
    "what": "Marina Wi-Fi and AIS base stations"
   },
   {
    "kind": "pro",
    "key": "bluewater-deliveries",
    "what": "Delivery-boat tracking kits"
   }
  ],
  "cases": [
   {
    "title": "Halcyon Harbor marina",
    "text": "AIS base stations and berth sensors across 400 berths."
   },
   {
    "title": "Training-fleet refit",
    "text": "Matching instrument packs for a 12-boat sailing school."
   }
  ],
  "feed": [
   {
    "sub": "Trade news · 1d",
    "text": "New AIS-B+ units in stock for trade accounts."
   },
   {
    "sub": "Event · 2w",
    "text": "Installer training day in Southampton on the 24th."
   }
  ],
  "contact": {
   "person": "Priya Nair, Trade accounts",
   "response": "Replies within 4 working hours"
  }
 }
});
})();
