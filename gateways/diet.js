/* ═════════ DIETXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.diet = {
 "name": "DietXX",
 "domain": "dietxx.com",
 "emoji": "🥗",
 "sector": "wellness",
 "live": true,
 "tagline": "The Nutrition Universe",
 "theme": {
  "bg": "#F5FBF5",
  "text": "#0A1A0A",
  "cardBg": "#FAFFF8",
  "cardBorder": "rgba(10,26,10,.07)",
  "headerBg": "linear-gradient(180deg,#E8F5E8,#F5FBF5)",
  "accent": "#2D7A3A",
  "accentAlt": "#4CAF50",
  "dark": false
 },
 "gradient": "linear-gradient(135deg,#0A1A0A,#2D7A3A,#4CAF50)",
 "stats": {
  "members": "634K",
  "brands": "1,800+",
  "agents": "98"
 },
 "spaces": [
  "All Feed",
  "Macro Tracking",
  "Meal Planning",
  "Gut Health",
  "Weight Management",
  "Recipes & Cook"
 ],
 "trending": [
  "#GutHealth",
  "#MacroTracking",
  "#EvidenceBased"
 ],
 "brandZones": [
  {
   "key": "myflexplate",
   "name": "MyFlexPlate",
   "color": "#2D7A3A",
   "tier": "Founding Partner",
   "tag": "Nutrition tracking · 14M foods"
  },
  {
   "key": "zoia",
   "name": "Zoia",
   "color": "#0A1A0A",
   "tier": "Brand Zone",
   "tag": "Personalised nutrition science"
  }
 ],
 "apps": [
  {
   "name": "Macro Tracker",
   "color": "#2D7A3A",
   "desc": "Log macros, hit your targets"
  },
  {
   "name": "Meal Planner",
   "color": "#4CAF50",
   "desc": "A week of meals, built for you"
  }
 ],
 "feed": [
  {
   "av": "DX",
   "avBg": "linear-gradient(135deg,#0A1A0A,#2D7A3A)",
   "author": "DietXX Editorial",
   "sub": "Featured · Just now",
   "badge": "★ FEATURED",
   "text": "Food is information. Every meal sends signals to your gut, your cells, your hormones. This is what eating with intention actually looks like — evidence-based nutrition and the community that eats on purpose.",
   "video": "genexxo-videos/diet1.mp4",
   "eng": "♡ 22.4K · 💬 3.1K · ↗ 1.6K"
  },
  {
   "av": "DX",
   "avBg": "linear-gradient(135deg,#0A1A0A,#2D7A3A)",
   "author": "DietXX Editorial",
   "sub": "Spotlight · Just now",
   "badge": "★ SPOTLIGHT",
   "text": "Food is information — and this is what eating with intention actually looks like. A minute inside the nutrition universe. Press play.",
   "video": "genexxo-videos/dietxx.mp4",
   "eng": "♡ 24.1K · 💬 3.3K · ↗ 1.7K"
  },
  {
   "av": "GG",
   "avBg": "linear-gradient(135deg,#8B6914,#D4A843)",
   "author": "@gut_first_grace",
   "sub": "Gut Health · 3h ago",
   "badge": "COMMUNITY",
   "text": "Completed the full Zoia test. Microbiome diversity 87th percentile. Blood sugar response to white rice: catastrophic. To sweet potato: perfect. Same calories, completely different metabolic outcome. This is why blanket dietary advice fails most people.",
   "img": "https://images.unsplash.com/photo-1543352634-99a5d50ae78e?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 9.2K · 💬 1.3K · ↗ 567"
  },
  {
   "av": "MF",
   "avBg": "linear-gradient(135deg,#2D7A3A,#4CAF50)",
   "author": "MyFlexPlate",
   "sub": "Founding Partner · Brand Zone",
   "badge": "BRAND ZONE",
   "text": "AI meal planning is live. Tell us your macros, your preferences, your schedule — your week builds automatically. 14 million foods, barcode scanning, restaurant menus. Nutrition has never been this frictionless.",
   "img": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 22.4K · 💬 3.1K · ↗ 1.6K"
  },
  {
   "av": "Zo",
   "avBg": "linear-gradient(135deg,#0A1A0A,#1A3A1A)",
   "author": "Zoia",
   "sub": "Brand Zone · 3h ago",
   "badge": "BRAND ZONE",
   "text": "INSIGHT study update: over 1 million gut microbiome samples analysed. The variation in how individuals respond to identical foods is more dramatic than we first found. The era of personalised nutrition is not coming. It is here.",
   "img": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 18.9K · 💬 2.8K · ↗ 1.3K"
  }
 ],
 "prompts": [
  "Build me a high-protein day under 2,000 kcal",
  "Explain why my blood sugar spikes on white rice"
 ]
};
Object.assign(ZONES, {
 "myflexplate": {
  "key": "myflexplate",
  "kind": "brand",
  "gw": "diet",
  "name": "MyFlexPlate",
  "color": "#2D7A3A",
  "gradient": "linear-gradient(135deg,#2D7A3A,#4CAF50,#1A5C28)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "The world’s most trusted nutrition tracker — 14 million foods",
  "stats": {
   "followers": "178.4K",
   "content": "3,200+",
   "products": "3"
  },
  "event": {
   "zoneEvent": true,
   "tag": "MASTERCLASS",
   "title": "MyFlexPlate — 21-Day Tracking Reset",
   "when": "Monday · 18:00 BST",
   "desc": "A live kickoff for the 21-day consistency challenge — macro targets, food logging, and the habit that outperforms any single diet, with the MyFlexPlate nutrition team taking your questions.",
   "registered": 3400,
   "capacity": 6000
  },
  "products": [
   {
    "name": "Premium Annual",
    "price": "£79.99/yr",
    "tag": "BESTSELLER",
    "emoji": "🥗",
    "rating": 4.7,
    "reviews": 4210,
    "desc": "AI meal planning, advanced analytics and an ad-free experience — the full MyFlexPlate, built around your macros and your schedule.",
    "features": [
     "AI meal planning across 14M foods",
     "Barcode scanning + restaurant menus",
     "Advanced macro & micro analytics",
     "No ads, ever"
    ],
    "review": {
     "who": "macro_marco",
     "text": "Lost 8kg and gained muscle over six months. The AI planner removed all decision fatigue — I just log, it just works."
    }
   },
   {
    "name": "Premium Monthly",
    "price": "£9.99/mo",
    "emoji": "📊",
    "rating": 4.6,
    "reviews": 2680,
    "desc": "Full premium access, cancel anytime — the same 14-million-food database and AI planning, month to month.",
    "features": [
     "Everything in Premium",
     "Cancel anytime",
     "Syncs with the DietXX Macro Tracker"
    ],
    "review": {
     "who": "flex_first_fran",
     "text": "Started monthly to try it, never cancelled. The restaurant integration alone is worth it."
    }
   },
   {
    "name": "Family Plan",
    "price": "£119.99/yr",
    "tag": "BEST VALUE",
    "emoji": "👨‍👩‍👧",
    "rating": 4.8,
    "reviews": 1340,
    "desc": "Up to six accounts with shared meal planning — the whole household eating with intention.",
    "features": [
     "Up to 6 accounts",
     "Shared meal planning & shopping lists",
     "Best per-person value"
    ],
    "review": {
     "who": "family_table_tom",
     "text": "Feeding four with different goals used to be chaos. Shared planning fixed it in a week."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "<b>AI meal planning is live</b> for Premium members. Input your macros, your food preferences, your schedule — your week is built automatically. 14 million foods. Barcode scanning. Restaurant menus. Nutrition has never been this effortless.",
    "img": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 22.4K · 💬 3.1K · ↗ 1.6K",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Research · 3h ago",
    "text": "Our analysis of <b>6 million user journeys</b>: people who log consistently for 21 days are 89% more likely to reach their goals. The habit of tracking is more powerful than any specific diet. Consistency beats perfection.",
    "img": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 14.8K · 💬 2.1K · ↗ 934"
   },
   {
    "type": "community",
    "who": "macro_marco",
    "whoBg": "linear-gradient(135deg,#2D7A3A,#4CAF50)",
    "sub": "Community · 2h ago",
    "text": "Six months on Premium. Lost 8kg, gained measurable muscle. The AI meal planning removed all decision fatigue. I just log. It just works. The one tool I genuinely could not do without.",
    "eng": "♡ 1.9K · 💬 148",
    "reply": "Eight months and 8kg is exactly what the research predicts — the planner learns your preferences over time, so it only gets better. Thank you for being part of the MFP community. 🥗"
   }
  ],
  "about": {
   "founded": "London · 2011",
   "story": "MyFlexPlate exists to make nutrition tracking effortless — a 14-million-food database, barcode scanning and AI meal planning that builds your week around your macros. Founding Partner on DietXX because the community that logs together, learns together.",
   "milestones": [
    [
     "2011",
     "Founded as a simple food logger"
    ],
    [
     "2018",
     "14-million-food database milestone"
    ],
    [
     "2024",
     "AI meal planning launches"
    ],
    [
     "2026",
     "Founding Partner on DietXX"
    ]
   ],
   "values": [
    "Consistency over perfection",
    "Evidence-based by default",
    "Frictionless logging"
   ]
  }
 },
 "zoia": {
  "key": "zoia",
  "kind": "brand",
  "gw": "diet",
  "name": "Zoia",
  "color": "#0A1A0A",
  "gradient": "linear-gradient(135deg,#0A1A0A,#1A3A1A,#2D7A3A)",
  "tier": "Claimed & Verified",
  "verified": true,
  "tagline": "Personalised nutrition science — your body is unique, your diet should be too",
  "stats": {
   "followers": "45.6K",
   "content": "890",
   "products": "2"
  },
  "event": {
   "zoneEvent": true,
   "tag": "RESULTS LIVE",
   "title": "Zoia INSIGHT 3 — Results Livestream",
   "when": "Thursday · 17:00 GMT",
   "desc": "A live walkthrough of the INSIGHT 3 cohort findings — how microbiome diversity predicts mood, why the glycaemic index fails, and what a personalised nutrition score really reveals. With the Zoia science team.",
   "registered": 2100,
   "capacity": 4000
  },
  "products": [
   {
    "name": "Full Nutrition Test",
    "price": "£299",
    "tag": "FLAGSHIP",
    "emoji": "🦠",
    "rating": 4.9,
    "reviews": 640,
    "desc": "Gut microbiome, blood sugar and blood fat responses measured and turned into personalised food scores — the science of eating for your own biology.",
    "features": [
     "Gut microbiome sequencing",
     "Blood sugar + blood fat response",
     "Personalised food scores in the app",
     "Expert-reviewed report"
    ],
    "review": {
     "who": "gut_first_grace",
     "text": "Microbiome diversity 87th percentile. White rice catastrophic, sweet potato perfect. Same calories, completely different outcome. Worth every penny."
    }
   },
   {
    "name": "Zoia Membership",
    "price": "£24.99/mo",
    "tag": "SUBSCRIPTION",
    "emoji": "📱",
    "rating": 4.7,
    "reviews": 412,
    "desc": "12 months of personalised guidance, the app and expert support — your scores, kept live as your biology changes.",
    "features": [
     "Personalised guidance in-app",
     "Ongoing expert support",
     "Re-test discounts"
    ],
    "review": {
     "who": "insight_ivy",
     "text": "The app turned my test into actual daily choices. My energy crashes are gone."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "<b>INSIGHT study update</b>: we have now analysed over 1 million gut microbiome samples. The variation in how individuals respond to identical foods is more dramatic than we first found. The era of personalised nutrition is not coming. It is here.",
    "img": "https://images.unsplash.com/photo-1543352634-99a5d50ae78e?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 31.2K · 💬 4.8K · ↗ 2.4K",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Education · 1d ago",
    "text": "Why the glycaemic index is nearly useless: your personal blood sugar response to the same food can be <b>40% different</b> from the person next to you. GI was measured on averages. Your body is not average.",
    "img": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 22.4K · 💬 3.4K · ↗ 1.6K"
   },
   {
    "type": "community",
    "who": "gut_first_grace",
    "whoBg": "linear-gradient(135deg,#8B6914,#D4A843)",
    "sub": "Community · 3h ago",
    "text": "Zoia test results in. Microbiome diversity 87th percentile. My blood sugar response to white rice is catastrophic, to sweet potato perfect. Same calories, completely different metabolic outcome.",
    "eng": "♡ 2.1K · 💬 167",
    "reply": "An 87th percentile diversity is genuinely exceptional — strongly linked to long-term metabolic health. The rice vs sweet potato finding is one of the most striking individual responses we see. Trust the data. 🦠"
   }
  ],
  "about": {
   "founded": "London · 2017",
   "story": "Zoia turns the science of personalised nutrition into everyday food choices — gut microbiome, blood sugar and blood fat responses measured and scored for your unique biology. Because there is no universal healthy diet, only yours.",
   "milestones": [
    [
     "2017",
     "Founded from the PREDICT nutrition studies"
    ],
    [
     "2021",
     "1 million microbiome samples analysed"
    ],
    [
     "2025",
     "INSIGHT 3 cohort — the gut-brain data"
    ],
    [
     "2026",
     "Brand Zone on DietXX"
    ]
   ],
   "values": [
    "Personalised over average",
    "Science you can eat by",
    "Your data, your biology"
   ]
  }
 }
});
})();
