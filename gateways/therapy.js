/* ═════════ THERAPYXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.therapy = {
 "name": "TherapyXX",
 "domain": "therapyxx.com",
 "emoji": "💬",
 "sector": "wellness",
 "live": true,
 "tagline": "The Mental Health Universe",
 "theme": {
  "bg": "#F4F9F6",
  "text": "#0D1F18",
  "cardBg": "#FAFFFC",
  "cardBorder": "rgba(13,31,24,.07)",
  "headerBg": "linear-gradient(180deg,#E4F0EA,#F4F9F6)",
  "accent": "#52B788",
  "accentAlt": "#2D6A4F",
  "dark": false
 },
 "gradient": "linear-gradient(135deg,#0D1F18,#2D6A4F,#52B788)",
 "stats": {
  "members": "567K",
  "brands": "2,400+",
  "agents": "156"
 },
 "spaces": [
  "All Feed",
  "CBT & Behavioural",
  "Trauma & EMDR",
  "Psychodynamic",
  "Therapist Community",
  "Self-Help & Books"
 ],
 "trending": [
  "#TherapyWorks",
  "#MentalHealthMatters",
  "#TraumaRecovery"
 ],
 "brandZones": [
  {
   "key": "balancehelp",
   "name": "BalanceHelp",
   "color": "#2D6A4F",
   "tier": "Founding Partner",
   "tag": "Online therapy platform"
  },
  {
   "key": "headcalm",
   "name": "Headcalm",
   "color": "#F47D31",
   "tier": "Brand Zone",
   "tag": "Mindfulness & mental health"
  }
 ],
 "apps": [
  {
   "name": "Therapist Finder",
   "color": "#52B788",
   "desc": "Matched by modality & need"
  },
  {
   "name": "Mood Tracker",
   "color": "#3B82F6",
   "desc": "Spot patterns over time"
  }
 ],
 "feed": [
  {
   "av": "TX",
   "avBg": "linear-gradient(135deg,#52B788,#40916C)",
   "author": "TherapyXX Editorial",
   "sub": "Featured · Just now",
   "badge": "★ FEATURED",
   "text": "Support that meets you where you are. Evidence-based voices, verified practitioners and a community that understands — from CBT to psychodynamic, EMDR to IFS.",
   "video": "genexxo-videos/therapyxx.mp4",
   "eng": "♡ 13.2K · 💬 1.5K · ↗ 870"
  },
  {
   "av": "QP",
   "avBg": "linear-gradient(135deg,#7C3AED,#A78BFA)",
   "author": "@quiet_progress",
   "sub": "Mental Health · Just now",
   "badge": "COMMUNITY",
   "text": "One year of therapy today. Walked into that first session convinced I was broken. Walked out today knowing I never was — just carrying things that weren’t mine to carry. There’s no movie moment. It’s slowly learning to sit with yourself without flinching. If you’re on the fence, this is your sign.",
   "video": "genexxo-videos/therapy1.mp4",
   "eng": "♡ 42.3K · 💬 5.7K · ↗ 3.9K"
  },
  {
   "av": "BH",
   "avBg": "linear-gradient(135deg,#2D6A4F,#1B3D2F)",
   "author": "BalanceHelp",
   "sub": "Founding Partner · Brand Zone",
   "badge": "BRAND ZONE",
   "text": "BalanceHelp now matches you by therapeutic modality — CBT, DBT, EMDR, psychodynamic, IFS. 4.2 million people served, 35,000 licensed therapists. The modality matters, but the therapeutic alliance matters more.",
   "img": "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 24.8K · 💬 3.2K · ↗ 1.8K"
  },
  {
   "av": "Hs",
   "avBg": "linear-gradient(135deg,#F47D31,#FF6B35)",
   "author": "Headcalm",
   "sub": "Brand Zone · 8h ago",
   "badge": "BRAND ZONE",
   "text": "28 published clinical studies. Headcalm reduces stress by 14% in 10 days, improves focus by 14% in 4 weeks. This isn’t wellness fluff — it’s evidence-based mental health support that happens to start with a 5-minute meditation.",
   "img": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 11.2K · 💬 1.4K · ↗ 678"
  }
 ],
 "prompts": [
  "Which therapy modality fits anxiety best?",
  "Walk me through a CBT thought record"
 ]
};
Object.assign(ZONES, {
 "balancehelp": {
  "key": "balancehelp",
  "kind": "brand",
  "gw": "therapy",
  "name": "BalanceHelp",
  "color": "#2D6A4F",
  "gradient": "linear-gradient(135deg,#2D6A4F,#1B3D2F,#0D1F18)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "The world’s largest online therapy platform",
  "stats": {
   "followers": "124.8K",
   "content": "2,400",
   "products": "2"
  },
  "event": {
   "zoneEvent": true,
   "tag": "WEBINAR",
   "title": "BalanceHelp — Finding the Right Therapist",
   "when": "Wednesday · 18:30 GMT",
   "desc": "A live guide to modality matching — CBT, DBT, EMDR, psychodynamic and IFS — how to know which fits, what a first session is really like, and the questions to ask. With the BalanceHelp clinical team.",
   "registered": 2800,
   "capacity": 5000
  },
  "products": [
   {
    "name": "Monthly Therapy Plan",
    "price": "£260/mo",
    "tag": "BESTSELLER",
    "emoji": "💬",
    "rating": 4.7,
    "reviews": 2140,
    "desc": "Weekly live sessions and unlimited messaging with a licensed therapist matched to your modality preference.",
    "features": [
     "Weekly live sessions",
     "Unlimited messaging",
     "Matched by modality",
     "35,000 licensed therapists"
    ],
    "review": {
     "who": "therapy_journal_jade",
     "text": "Six months with a CBT therapist — the modality matching worked, first therapist was the right fit. Life-changing."
    }
   },
   {
    "name": "Couples Therapy",
    "price": "£340/mo",
    "emoji": "💚",
    "rating": 4.6,
    "reviews": 940,
    "desc": "Joint and individual sessions with a relationship specialist — the whole picture, supported together.",
    "features": [
     "Joint + individual sessions",
     "Relationship specialists",
     "Shared and private spaces"
    ],
    "review": {
     "who": "together_theo",
     "text": "The private individual sessions alongside joint ones made all the difference. We’re still here, better."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "BalanceHelp now matches you based on <b>therapeutic modality</b>. CBT, DBT, EMDR, psychodynamic, IFS. 4.2 million people served. 35,000 licensed therapists. The modality matters — but the therapeutic alliance matters more.",
    "img": "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 24.8K · 💬 3.2K · ↗ 1.8K",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Research · 5h ago",
    "text": "From 12,000 community outcomes: CBT leads for anxiety (<b>71% improvement</b> at 12 weeks), EMDR for PTSD (84% symptom reduction at 8 sessions). But across every modality, the strongest predictor of progress is the relationship with your therapist.",
    "img": "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 18.6K · 💬 2.4K · ↗ 1.2K"
   },
   {
    "type": "community",
    "who": "therapy_journal_jade",
    "whoBg": "linear-gradient(135deg,#52B788,#40916C)",
    "sub": "Community · 2h ago",
    "text": "Six months on BalanceHelp with a CBT therapist. The modality matching worked — the first therapist was the right fit. Cognitive restructuring changed my life more than any medication. 18 months in, I am not the same person.",
    "eng": "♡ 2.1K · 💬 178",
    "reply": "Your thought-record consistency is in the top 5% of clients — that dedication is what makes CBT work. Getting the right match on the first try is exactly what modality matching is for. 💚"
   }
  ],
  "about": {
   "founded": "Mountain View · 2013",
   "story": "BalanceHelp makes therapy accessible — matching you with one of 35,000 licensed therapists by the modality that fits, with live sessions and unlimited messaging. Founding Partner on TherapyXX because access is the whole point.",
   "milestones": [
    [
     "2013",
     "Founded to widen therapy access"
    ],
    [
     "2019",
     "Modality matching launches"
    ],
    [
     "2024",
     "4.2 million people served"
    ],
    [
     "2026",
     "Founding Partner on TherapyXX"
    ]
   ],
   "values": [
    "Access above all",
    "Match by modality",
    "The alliance matters most"
   ]
  }
 },
 "headcalm": {
  "key": "headcalm",
  "kind": "brand",
  "gw": "therapy",
  "name": "Headcalm",
  "color": "#F47D31",
  "gradient": "linear-gradient(135deg,#F47D31,#FF6B35,#FFA62F)",
  "tier": "Claimed & Verified",
  "verified": true,
  "tagline": "Mindfulness and mental health — meditation made simple",
  "stats": {
   "followers": "156.8K",
   "content": "2,400+",
   "products": "3"
  },
  "event": {
   "zoneEvent": true,
   "tag": "COURSE",
   "title": "Headcalm — 10-Day Anxiety Course, Live Cohort",
   "when": "Starts Monday · daily 08:00",
   "desc": "A guided live cohort through the evidence-based 10-day anxiety course — 5-minute daily sessions, in-the-moment tools, and a Q&A with a Headcalm coach each morning. RSVP inside the zone.",
   "registered": 4200,
   "capacity": 8000
  },
  "products": [
   {
    "name": "Headcalm Premium Annual",
    "price": "£49.99/yr",
    "tag": "BESTSELLER",
    "emoji": "🧘",
    "rating": 4.8,
    "reviews": 6400,
    "desc": "1,000+ meditations plus sleep content, focus music and movement workouts — the full library, evidence-based.",
    "features": [
     "1,000+ meditations",
     "Sleep & focus content",
     "Move workouts",
     "New content daily"
    ],
    "review": {
     "who": "anxious_no_more",
     "text": "The 10-day anxiety course genuinely changed my relationship with panic attacks. I now have tools I can use in the moment."
    }
   },
   {
    "name": "Headcalm for Work",
    "price": "£12/user/mo",
    "tag": "FOR TEAMS",
    "emoji": "🏢",
    "rating": 4.7,
    "reviews": 820,
    "desc": "Team mindfulness and stress management with manager tools and analytics — wellbeing at work, measured.",
    "features": [
     "Team mindfulness",
     "Stress-management programmes",
     "Manager tools + analytics"
    ],
    "review": {
     "who": "people_first_pri",
     "text": "Rolled it out company-wide. Uptake is high because it starts with a 3-minute session, not a commitment."
    }
   },
   {
    "name": "Headcalm Health",
    "price": "Via employer",
    "emoji": "🧠",
    "rating": 4.6,
    "reviews": 340,
    "desc": "Clinical-grade CBT, coaching and psychiatry referral integrated with mindfulness — support that scales with need.",
    "features": [
     "Clinical-grade CBT",
     "Coaching + psychiatry referral",
     "EAP integration"
    ],
    "review": {
     "who": "steady_sam",
     "text": "Started with meditation, stepped up to coaching when I needed it. The escalation felt seamless and safe."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "<b>Headcalm Health</b>: clinical-grade mental health support integrated with mindfulness. CBT. Coaching. Psychiatry referral when needed. 65 million users trust us with their mental health. From a 3-minute breathing exercise to full clinical support — we meet you where you are.",
    "img": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 14.8K · 💬 1.9K · ↗ 890",
    "product": 2
   },
   {
    "type": "post",
    "sub": "Science · 8h ago",
    "text": "<b>28 published clinical studies.</b> Headcalm reduces stress by 14% in 10 days, improves focus by 14% in 4 weeks, reduces aggression by 57% in 3 weeks. This isn’t wellness fluff — it’s evidence-based support that happens to start with a 5-minute meditation.",
    "img": "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 11.2K · 💬 1.4K · ↗ 678"
   },
   {
    "type": "community",
    "who": "anxious_no_more",
    "whoBg": "linear-gradient(135deg,#F47D31,#FFA62F)",
    "sub": "Community · 5h ago",
    "text": "Started Headcalm 6 months ago because my therapist suggested it between sessions. The 10-day anxiety course genuinely changed my relationship with panic attacks. I now have tools I can use in the moment. Haven’t had a full attack since month 3.",
    "eng": "♡ 2.4K · 💬 201",
    "reply": "Your therapist gave great advice — we designed the anxiety course as a companion to clinical care, not a replacement. The techniques become automatic with practice. Three months without a full attack is real progress. Be proud. 🧡"
   }
  ],
  "about": {
   "founded": "London · 2010",
   "story": "Headcalm set out to make meditation accessible to people who will never sit in a monastery — 5-minute sessions backed by 28 clinical studies, now scaling into clinical-grade mental health support. Brand Zone on TherapyXX, meeting people wherever they are.",
   "milestones": [
    [
     "2010",
     "Founded to make meditation accessible"
    ],
    [
     "2018",
     "First clinical validation studies"
    ],
    [
     "2023",
     "65 million users"
    ],
    [
     "2026",
     "Brand Zone on TherapyXX"
    ]
   ],
   "values": [
    "Meet people where they are",
    "Evidence over fluff",
    "From breath to clinical care"
   ]
  }
 }
});
})();
