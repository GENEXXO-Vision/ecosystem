/* ═════════ SLEEPXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.sleep = {
 "name": "SleepXX",
 "domain": "sleepxx.com",
 "emoji": "😴",
 "sector": "wellness",
 "live": true,
 "tagline": "The Sleep Universe",
 "theme": {
  "bg": "#0D0B1A",
  "text": "#E8E4FF",
  "cardBg": "rgba(255,255,255,.04)",
  "cardBorder": "rgba(255,255,255,.07)",
  "headerBg": "linear-gradient(180deg,#1A1630,#0D0B1A)",
  "accent": "#7C6FF7",
  "accentAlt": "#A89BFF",
  "dark": true
 },
 "gradient": "linear-gradient(135deg,#0D0B1A,#312E81,#7C6FF7)",
 "stats": {
  "members": "312K",
  "brands": "640+",
  "agents": "56"
 },
 "spaces": [
  "All Feed",
  "Sleep Science",
  "Sleep Tracking",
  "Circadian Health",
  "Recovery",
  "Sleep Disorders"
 ],
 "trending": [
  "#SleepScience",
  "#CircadianRhythm",
  "#RecoveryFirst"
 ],
 "brandZones": [
  {
   "key": "whim",
   "name": "Whim",
   "color": "#7C6FF7",
   "tier": "Founding Partner",
   "tag": "Recovery & sleep wearable"
  },
  {
   "key": "calma",
   "name": "Calma",
   "color": "#312E81",
   "tier": "Brand Zone",
   "tag": "Sleep stories & meditation"
  }
 ],
 "apps": [
  {
   "name": "Sleep Score",
   "color": "#7C6FF7",
   "desc": "Your night, scored each morning"
  },
  {
   "name": "Circadian Planner",
   "color": "#F59E0B",
   "desc": "Anchor light, wake and wind-down"
  }
 ],
 "feed": [
  {
   "av": "SX",
   "avBg": "linear-gradient(135deg,#312E81,#7C6FF7)",
   "author": "SleepXX Editorial",
   "sub": "Sleep Science · Just now",
   "badge": "★ FEATURED",
   "text": "Matthew Walker’s new paper: chronic restriction below 7 hours produces cognitive deficits equivalent to 24 hours of total deprivation — but you don’t feel it. You think you’re fine. Your prefrontal cortex disagrees.",
   "img": "https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 28.4K · 💬 4.2K · ↗ 2.1K"
  },
  {
   "av": "SX",
   "avBg": "linear-gradient(135deg,#312E81,#7C6FF7)",
   "author": "SleepXX Editorial",
   "sub": "Spotlight · Just now",
   "badge": "★ SPOTLIGHT",
   "text": "The science of the perfect night, in sixty seconds — light, rhythm, recovery and the dark that repairs you. Press play.",
   "video": "genexxo-videos/sleepxx.mp4",
   "eng": "♡ 21.3K · 💬 2.9K · ↗ 1.8K"
  },
  {
   "av": "PP",
   "avBg": "linear-gradient(135deg,#312E81,#6366F1)",
   "author": "@pillow_protocol",
   "sub": "Sleep Routines · Just now",
   "badge": "COMMUNITY",
   "text": "Finally nailed my wind-down and I’m never going back. Blackout by 9, lavender diffuser on, phone in the other room, ten minutes of breathing, lights out by 9:30. Woke at 5:45 without an alarm three weeks running. No supplements, no gadgets — just discipline and darkness.",
   "video": "genexxo-videos/sleep1.mp4",
   "eng": "♡ 19.6K · 💬 2.8K · ↗ 1.7K"
  },
  {
   "av": "Wh",
   "avBg": "linear-gradient(135deg,#7C6FF7,#A89BFF)",
   "author": "Whim",
   "sub": "Founding Partner · Brand Zone",
   "badge": "BRAND ZONE",
   "text": "Whim 4.0 sleep staging: 93.4% accuracy validated against polysomnography. REM, light, deep and awake — all tracked without a sleep lab. Your recovery score is built on data your doctor would trust.",
   "img": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 12.4K · 💬 1.8K · ↗ 890"
  },
  {
   "av": "Ca",
   "avBg": "linear-gradient(135deg,#312E81,#4338CA)",
   "author": "Calma",
   "sub": "Brand Zone · 4h ago",
   "badge": "BRAND ZONE",
   "text": "New for 2026: Henry Fairburn narrates ‘The Moonlit Garden’ — our most requested Sleep Story, finally recorded. Plus 40 new soundscapes and seven guided meditations from Dr. Matthew Walker. Your best night starts here.",
   "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 45.2K · 💬 6.8K · ↗ 3.4K"
  }
 ],
 "prompts": [
  "Why does alcohol wreck my REM sleep?",
  "Build me a wind-down routine for a 10pm bedtime"
 ]
};
Object.assign(ZONES, {
 "whim": {
  "key": "whim",
  "kind": "brand",
  "gw": "sleep",
  "name": "Whim",
  "color": "#7C6FF7",
  "gradient": "linear-gradient(135deg,#7C6FF7,#A89BFF,#312E81)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "The wearable that tells you how recovered you really are",
  "stats": {
   "followers": "56.8K",
   "content": "1,200",
   "products": "3"
  },
  "event": {
   "zoneEvent": true,
   "tag": "CLINIC",
   "title": "Whim — Recovery Data Clinic",
   "when": "Tuesday · 19:00 BST",
   "desc": "A live read-your-data session — what your recovery score really means, why consistency beats duration, and how alcohol and late meals show up in your REM. Bring your Whim metrics and your questions.",
   "registered": 1800,
   "capacity": 3000
  },
  "products": [
   {
    "name": "Whim 4.0 Band",
    "price": "£239",
    "tag": "FLAGSHIP",
    "emoji": "⌚",
    "rating": 4.8,
    "reviews": 1240,
    "desc": "Continuous recovery monitoring with a 5-day battery, fully waterproof — sleep staging validated at 93.4% against polysomnography.",
    "sizes": [
     "S",
     "M",
     "L"
    ],
    "features": [
     "Continuous HR & HRV monitoring",
     "5-day battery, waterproof",
     "93.4% sleep-staging accuracy",
     "No screen — just data"
    ],
    "review": {
     "who": "whoop_wendy",
     "text": "Three months of data. Every suspicion about alcohol and late meals confirmed in the numbers. Whim made the implicit explicit."
    }
   },
   {
    "name": "Monthly Membership",
    "price": "£30/mo",
    "emoji": "📊",
    "rating": 4.6,
    "reviews": 980,
    "desc": "Full data access, AI coaching and the community — the membership that turns the band into an interpreter.",
    "features": [
     "Full data access + trends",
     "Whim Coach (AI)",
     "Community challenges"
    ],
    "review": {
     "who": "recovery_rhonda",
     "text": "The Coach connects the dots I never would. My 5k PR came after my best data week — no coincidence."
    }
   },
   {
    "name": "Annual Membership",
    "price": "£239/yr",
    "tag": "BEST VALUE",
    "emoji": "⭐",
    "rating": 4.8,
    "reviews": 640,
    "desc": "Twelve months plus the device — the best-value way into the full Whim system.",
    "features": [
     "12 months membership",
     "Includes the 4.0 Band",
     "Priority feature access"
    ],
    "review": {
     "who": "anchor_andy",
     "text": "Bought the annual for the free band, stayed for the sleep-consistency insight. Changed my bedtime for good."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "Whim 4.0 sleep staging accuracy: <b>93.4%</b> validated against polysomnography in our latest clinical study. REM, light, deep and awake — all tracked without a sleep lab. Your recovery score is built on data your doctor would trust.",
    "img": "https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 12.4K · 💬 1.8K · ↗ 890",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Research · 3h ago",
    "text": "Analysis of <b>1.2 million users</b>: the single strongest predictor of next-day performance is sleep consistency, not duration. Going to bed at the same time every night outperforms sleeping longer but inconsistently. Anchor your schedule.",
    "img": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 18.9K · 💬 2.6K · ↗ 1.2K"
   },
   {
    "type": "community",
    "who": "whoop_wendy",
    "whoBg": "linear-gradient(135deg,#7C6FF7,#A89BFF)",
    "sub": "Community · 2h ago",
    "text": "Three months of Whim data. Every suspicion I had about alcohol and late meals confirmed in the numbers. My best sleep scores happen on the nights I’d have predicted. Whim just made the implicit explicit.",
    "eng": "♡ 1.4K · 💬 112",
    "reply": "This is exactly what we built Whim for — not to tell you what to do, but to show you what your body is already telling you. The data is yours. The choices are yours. 📊"
   }
  ],
  "about": {
   "founded": "San Francisco · 2012",
   "story": "Whim makes recovery measurable — a screenless wearable that reads your sleep, strain and HRV and turns them into one number you can act on. Founding Partner on SleepXX because the science only matters when the community can see it.",
   "milestones": [
    [
     "2012",
     "First recovery-first wearable"
    ],
    [
     "2020",
     "Validated sleep staging"
    ],
    [
     "2025",
     "Whim Coach launches"
    ],
    [
     "2026",
     "Founding Partner on SleepXX"
    ]
   ],
   "values": [
    "Data your doctor would trust",
    "Consistency over duration",
    "Your data is yours"
   ]
  }
 },
 "calma": {
  "key": "calma",
  "kind": "brand",
  "gw": "sleep",
  "name": "Calma",
  "color": "#312E81",
  "gradient": "linear-gradient(135deg,#312E81,#4338CA,#6366F1)",
  "tier": "Claimed & Verified",
  "verified": true,
  "tagline": "The world’s leading app for sleep and meditation — 100 million downloads",
  "stats": {
   "followers": "234.8K",
   "content": "2,800+",
   "products": "3"
  },
  "event": {
   "live": true,
   "tag": "Calma Live",
   "title": "The Moonlit Garden — Live Premiere",
   "subtitle": "Henry Fairburn narrates our most-requested Sleep Story, live · lights low, phones away.",
   "now": "Live · chapter two, the garden gate",
   "viewers": "12,480",
   "poster": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=440&fit=crop&q=80"
  },
  "products": [
   {
    "name": "Calma Premium Annual",
    "price": "£54.99/yr",
    "tag": "BESTSELLER",
    "emoji": "🌙",
    "rating": 4.9,
    "reviews": 8600,
    "desc": "The full library — 700 Sleep Stories, 2,800 meditations, masterclasses and new content daily, all offline-ready.",
    "features": [
     "700+ Sleep Stories",
     "2,800 guided meditations",
     "Masterclasses from leading experts",
     "Offline access"
    ],
    "review": {
     "who": "insomnia_ivan",
     "text": "Broke an 11-year anxiety spiral. Not magic — it gives the mind a track to follow instead of its own catastrophising."
    }
   },
   {
    "name": "Calma Family Plan",
    "price": "£99.99/yr",
    "tag": "BEST VALUE",
    "emoji": "👨‍👩‍👧",
    "rating": 4.8,
    "reviews": 2140,
    "desc": "Up to six accounts with Family Sleep Stories and kids’ content — a calmer household, one subscription.",
    "features": [
     "Up to 6 accounts",
     "Family & kids Sleep Stories",
     "Shared favourites"
    ],
    "review": {
     "who": "bedtime_bex",
     "text": "The kids ask for a Sleep Story now instead of another screen. Worth it for that alone."
    }
   },
   {
    "name": "Calma for Teams",
    "price": "Custom",
    "emoji": "🏢",
    "rating": 4.7,
    "reviews": 320,
    "desc": "Employee wellbeing at scale — group licences, analytics and a calmer workforce.",
    "features": [
     "Group licences",
     "Wellbeing analytics",
     "Manager toolkit"
    ],
    "review": {
     "who": "people_first_pri",
     "text": "Rolled it out to 400 staff. Sick days down, the feedback has been genuinely moving."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "New: Henry Fairburn narrates <b>‘The Moonlit Garden’</b> — our most requested Sleep Story of all time, finally recorded. 38 minutes. Beautifully written, perfectly narrated. Your best night’s sleep starts here.",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 45.2K · 💬 6.8K · ↗ 3.4K",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Community · 1d ago",
    "text": "<b>100 million downloads.</b> We started with a breathing exercise and one meditation. Now: 700 Sleep Stories, 2,800 meditations, masterclasses from the world’s leading experts. The mission stays the same — a calmer world.",
    "img": "https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 67.8K · 💬 9.4K · ↗ 4.8K"
   },
   {
    "type": "community",
    "who": "insomnia_ivan",
    "whoBg": "linear-gradient(135deg,#EF4444,#DC2626)",
    "sub": "Community · 7h ago",
    "text": "Calma Sleep Stories broke the anxiety spiral that kept me awake for 11 years. Not because they’re magical — because they give the mind something to follow instead of its own catastrophising. Henry Fairburn’s voice is genuinely therapeutic.",
    "eng": "♡ 3.2K · 💬 241",
    "reply": "Giving the anxious mind a track to follow is exactly the mechanism we designed Sleep Stories around. The research on narrative-based sleep intervention is compelling. You deserve good sleep. 🌙"
   }
  ],
  "about": {
   "founded": "San Francisco · 2012",
   "story": "Calma began with a single breathing exercise and a belief that a calmer mind should be within everyone’s reach. A decade and 100 million downloads later, it is the world’s leading sleep and meditation app — Sleep Stories, meditations and masterclasses for a calmer world.",
   "milestones": [
    [
     "2012",
     "Founded with one meditation"
    ],
    [
     "2017",
     "Sleep Stories launch"
    ],
    [
     "2022",
     "100 million downloads"
    ],
    [
     "2026",
     "Brand Zone on SleepXX"
    ]
   ],
   "values": [
    "A calmer world",
    "Access for everyone",
    "Sleep is the foundation"
   ]
  }
 }
});
})();
