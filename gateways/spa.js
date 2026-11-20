/* ═════════ SPAXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.spa = {
 "name": "SpaXX",
 "domain": "spaxx.com",
 "emoji": "🛁",
 "sector": "wellness",
 "live": true,
 "tagline": "The Thermal Wellness Universe",
 "theme": {
  "bg": "#F8F4F9",
  "text": "#1A0E1F",
  "cardBg": "#FFFBFF",
  "cardBorder": "rgba(26,14,31,.07)",
  "headerBg": "linear-gradient(180deg,#EDE4F0,#F8F4F9)",
  "accent": "#9B72B0",
  "accentAlt": "#6B4984",
  "dark": false
 },
 "gradient": "linear-gradient(135deg,#1A0E1F,#6B4984,#9B72B0)",
 "stats": {
  "members": "312K",
  "brands": "1,800+",
  "agents": "89"
 },
 "spaces": [
  "All Feed",
  "Sauna & Steam",
  "Cold Plunge",
  "Hot Springs & Onsen",
  "Spa Reviews",
  "Recovery Science"
 ],
 "trending": [
  "#ColdPlunge",
  "#SaunaScience",
  "#OnsenCulture"
 ],
 "brandZones": [
  {
   "key": "therme",
   "name": "Thermarum Group",
   "color": "#1A0E1F",
   "tier": "Founding Partner",
   "tag": "Urban thermal wellbeing resorts"
  },
  {
   "key": "cryo-plunge",
   "name": "Cryo Plunge",
   "color": "#3B82F6",
   "tier": "Brand Zone",
   "tag": "Cold water immersion"
  }
 ],
 "apps": [
  {
   "name": "Spa Finder",
   "color": "#9B72B0",
   "desc": "8,400 spas & springs worldwide"
  },
  {
   "name": "Cold Protocol",
   "color": "#3B82F6",
   "desc": "Build your plunge routine"
  }
 ],
 "feed": [
  {
   "av": "SX",
   "avBg": "linear-gradient(135deg,#9B72B0,#7B5291)",
   "author": "SpaXX Editorial",
   "sub": "Featured · Just now",
   "badge": "★ FEATURED",
   "text": "The home of rest and recovery. From Nordic saunas to Japanese onsen, cold-plunge science to luxury spa culture — thermal traditions, modern wellness and the art of taking care of yourself.",
   "video": "genexxo-videos/spaxx.mp4",
   "eng": "♡ 12.8K · 💬 1.4K · ↗ 860"
  },
  {
   "av": "SX",
   "avBg": "linear-gradient(135deg,#6B4984,#9B72B0)",
   "author": "SpaXX Editorial",
   "sub": "Recovery Science · Just now",
   "badge": "EDITORIAL",
   "text": "Found this hidden hot spring two hours off the main road in Iceland. No signs, no fences — just a steaming pool carved into black volcanic rock, mountains on every side, 39°C. We had the whole place to ourselves for three hours, steam rising into freezing air. No spa on earth comes close.",
   "video": "genexxo-videos/spa1.mp4",
   "eng": "♡ 34.1K · 💬 4.6K · ↗ 3.2K"
  },
  {
   "av": "TG",
   "avBg": "linear-gradient(135deg,#1A0E1F,#2A1A38)",
   "author": "Thermarum Group",
   "sub": "Founding Partner · Brand Zone",
   "badge": "BRAND ZONE",
   "text": "Thermarum Manchester opens Q1 2027 — 28 pools, 35 saunas and steam rooms, 30,000 sqm of thermal wellness. Founding memberships open now inside the zone.",
   "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 18.4K · 💬 2.4K · ↗ 1.2K"
  },
  {
   "av": "CP",
   "avBg": "linear-gradient(135deg,#1E3A5F,#2563EB)",
   "author": "Cryo Plunge",
   "sub": "Brand Zone · 2h ago",
   "badge": "BRAND ZONE",
   "text": "The Cold Plunge Pro: chills to 2°C in four hours, self-cleaning, whisper-quiet, Wi-Fi control. Day 180 of daily 2°C plunges and the discipline transfer is the real benefit — when you can step into freezing water, everything else feels manageable.",
   "img": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 8.4K · 💬 1.1K · ↗ 567"
  }
 ],
 "prompts": [
  "Build me a sauna and cold-plunge contrast protocol",
  "Where are the best onsen in Japan?"
 ]
};
Object.assign(ZONES, {
 "therme": {
  "key": "therme",
  "kind": "brand",
  "gw": "spa",
  "name": "Thermarum Group",
  "color": "#1A0E1F",
  "gradient": "linear-gradient(135deg,#1A0E1F,#2A1A38,#3D2850)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "Urban thermal wellbeing resorts",
  "stats": {
   "followers": "67.2K",
   "content": "890",
   "products": "3"
  },
  "event": {
   "zoneEvent": true,
   "tag": "PREVIEW",
   "title": "Thermarum Manchester — Founder Preview",
   "when": "Q1 2027 · Manchester",
   "desc": "A first-look preview evening for founding members — 28 pools, 35 saunas, 30,000 sqm of thermal wellness before public opening, with the Thermarum design team walking the galaxy of zones. RSVP inside the zone.",
   "registered": 2600,
   "capacity": 4000
  },
  "products": [
   {
    "name": "Founding Membership",
    "price": "£149/mo",
    "tag": "FLAGSHIP",
    "emoji": "🛁",
    "rating": 4.9,
    "reviews": 1240,
    "desc": "Unlimited access to every thermal zone with priority booking — the full Thermarum experience, all year.",
    "features": [
     "Unlimited access, all zones",
     "Priority booking",
     "Guest passes included"
    ],
    "review": {
     "who": "sauna_scientist_sven",
     "text": "Visited Thermarum Bucharest — the Galaxy thermal area is genuinely otherworldly. Counting the days to Manchester."
    }
   },
   {
    "name": "Day Pass Bundle (10)",
    "price": "£450",
    "tag": "BEST VALUE",
    "emoji": "✨",
    "rating": 4.8,
    "reviews": 680,
    "desc": "Ten full-day passes to all facilities — thermal wellness without the commitment.",
    "features": [
     "10 full-day passes",
     "All facilities",
     "Share with friends"
    ],
    "review": {
     "who": "thermal_thea",
     "text": "Split a bundle with three friends. Best spa days of the year, at a fraction of the drop-in price."
    }
   },
   {
    "name": "Corporate Wellness",
    "price": "Custom",
    "emoji": "🏢",
    "rating": 4.7,
    "reviews": 210,
    "desc": "Team wellness days and private thermal zones — recovery as company culture.",
    "features": [
     "Team wellness days",
     "Private zone hire",
     "Wellbeing packages"
    ],
    "review": {
     "who": "ops_olivia",
     "text": "Booked a private zone for our team offsite. People still talk about it months later."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "<b>Thermarum Manchester</b>: 28 pools, 35 saunas and steam rooms, 30,000 sqm of thermal wellness. Opening Q1 2027. Founding memberships open now.",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 18.4K · 💬 2.4K · ↗ 1.2K",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Recovery Science · 5h ago",
    "text": "The Finnish evidence, in one line: sauna use <b>4–7 times a week</b> is associated with a 40% lower risk of all-cause mortality versus once weekly. 80–100°C. 15–20 minutes. Thermal wellness is no longer preliminary.",
    "img": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 24.8K · 💬 3.6K · ↗ 2.1K"
   },
   {
    "type": "community",
    "who": "sauna_scientist_sven",
    "whoBg": "linear-gradient(135deg,#9B72B0,#6B4984)",
    "sub": "Community · 5h ago",
    "text": "Visited Thermarum Bucharest. The Galaxy thermal area is genuinely otherworldly. If Manchester is anything like this, it will be the best thing to happen to UK wellness in a decade.",
    "eng": "♡ 1.6K · 💬 118",
    "reply": "Galaxy is our most ambitious zone — wait until you see Manchester. Same philosophy, twice the scale. 🛁"
   }
  ],
  "about": {
   "founded": "Vienna · 2005",
   "story": "Thermarum Group builds urban thermal wellbeing resorts — vast pools, saunas and steam rooms that bring the Nordic and Roman bathing traditions into the heart of the city. Founding Partner on SpaXX, because recovery should be part of everyday life.",
   "milestones": [
    [
     "2005",
     "First urban thermal resort in Vienna"
    ],
    [
     "2016",
     "The Galaxy thermal concept debuts"
    ],
    [
     "2023",
     "One million annual visitors"
    ],
    [
     "2026",
     "Founding Partner on SpaXX · Manchester opens"
    ]
   ],
   "values": [
    "Thermal wellness for the city",
    "Tradition at modern scale",
    "Recovery as routine"
   ]
  }
 },
 "cryo-plunge": {
  "key": "cryo-plunge",
  "kind": "brand",
  "gw": "spa",
  "name": "Cryo Plunge",
  "color": "#3B82F6",
  "gradient": "linear-gradient(135deg,#1E3A5F,#2563EB,#3B82F6)",
  "tier": "Claimed & Verified",
  "verified": true,
  "tagline": "Professional-grade cold water immersion",
  "stats": {
   "followers": "34.8K",
   "content": "560",
   "products": "2"
  },
  "event": {
   "live": true,
   "tag": "Cryo Live",
   "title": "Sunrise Plunge — Live Cold Session",
   "subtitle": "A guided 2°C group plunge and breath-up · settle the nervous system, together.",
   "now": "Live · minute two, breathing through the cold",
   "viewers": "1,940",
   "poster": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=440&fit=crop&q=80"
  },
  "products": [
   {
    "name": "Cold Plunge Pro",
    "price": "£4,995",
    "tag": "FLAGSHIP",
    "emoji": "❄️",
    "rating": 4.9,
    "reviews": 340,
    "desc": "Chills to 2°C in four hours, self-cleaning, whisper-quiet, Wi-Fi enabled — professional-grade immersion at home.",
    "features": [
     "40°F / 2°C capable",
     "Self-cleaning + ozone sanitation",
     "Whisper-quiet chiller",
     "Wi-Fi control & scheduling"
    ],
    "review": {
     "who": "cold_water_carl",
     "text": "Six months, every single day at 2°C. Best health purchase I’ve ever made. The discipline transfer is the real benefit."
    }
   },
   {
    "name": "Cold Plunge Standard",
    "price": "£2,995",
    "tag": "BESTSELLER",
    "emoji": "❄️",
    "rating": 4.7,
    "reviews": 220,
    "desc": "Built-in chiller and ozone sanitation — the everyday plunge, without the plumbing.",
    "features": [
     "Built-in chiller",
     "Ozone sanitation",
     "Plug-and-plunge setup"
    ],
    "review": {
     "who": "plunge_priya",
     "text": "No plumbing, no ice runs. Fill it once, plunge every morning. Two minutes that reset my whole day."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "The <b>Cold Plunge Pro</b>: chills to 2°C in four hours, self-cleaning, whisper-quiet, Wi-Fi control. The research on cold exposure is real — a measurable dopamine increase that lasts hours, and a discipline that transfers to everything else.",
    "img": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 8.4K · 💬 1.1K · ↗ 567",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Protocol · 4h ago",
    "text": "The beginner protocol: <b>start at 3 minutes, 10–15°C</b>, breathe slow through the first 30 seconds, build to 2°C over weeks. The goal is not suffering — it’s learning to stay calm when your body wants to panic. That skill is the whole point.",
    "img": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 6.2K · 💬 834 · ↗ 312"
   },
   {
    "type": "community",
    "who": "cold_water_carl",
    "whoBg": "linear-gradient(135deg,#3B82F6,#2563EB)",
    "sub": "Community · 2h ago",
    "text": "Day 180 of daily cold plunge. 2°C for 3 minutes. The dopamine increase is real and measurable. But the discipline transfer is the real benefit — when you can voluntarily step into freezing water, everything else feels manageable.",
    "eng": "♡ 1.2K · 💬 96",
    "reply": "180 days straight — top 1% of daily users. The data shows exactly what the research predicts. The calm you build in the cold is the transferable skill. ❄️"
   }
  ],
  "about": {
   "founded": "Los Angeles · 2020",
   "story": "Cryo Plunge brings professional-grade cold water immersion home — self-cleaning, chiller-driven tubs that hold 2°C on demand, so the daily plunge is one decision, not a logistics problem. Brand Zone on SpaXX for the recovery community.",
   "milestones": [
    [
     "2020",
     "First home chiller-plunge"
    ],
    [
     "2022",
     "Self-cleaning + ozone system"
    ],
    [
     "2025",
     "Used by 250+ pro athletes"
    ],
    [
     "2026",
     "Brand Zone on SpaXX"
    ]
   ],
   "values": [
    "Cold, on demand",
    "Calm is the skill",
    "Recovery you’ll actually do"
   ]
  }
 }
});
})();
