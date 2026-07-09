export const initialSiteConfig = {
  hero: {
    tagline: "EST. 2025 | WINDSOR, ON",
    title: "School of Life",
    description: "Connect with the outdoors through structured camps, expeditions, and mentorship. Build strength, discipline, and community in nature.",
  },
  vision: {
    tagline: "Our Vision",
    title: "Connecting with Allah's Creation",
    paragraph1: "School of Life helps community members connect deeply with the outdoors. The Prophet ﷺ encouraged physical readiness and outdoor skills like archery, swimming, and appreciation for the natural world. These activities build physical strength, mental resilience, and gratitude.",
    paragraph2: "We provide lessons in water safety, traditional archery, wilderness navigation, and outdoor cooking. Our activities help build self-reliance, teamwork, and spiritual awareness in nature.",
    paragraph3: "Every excursion, campfire, and challenge is designed to build character, patience, and community connection.",
  },
  timeline: {
    title: "Timeline",
    items: [
      {
        year: "2025",
        title: "The Foundation",
        description: "Community hikes, fishing trips, and water safety training sessions established our initial programs.",
      },
      {
        year: "2026",
        title: "Program Expansion",
        description: "Launched structured skills development, outdoor camps, and the scouts portal for tracking achievements.",
      },
    ],
  },
  cta: {
    title: "Join the Next Expedition",
    description: "Register for our upcoming camps and workshops. Build practical skills, connect with the community, and experience the outdoors.",
  },
  events: [
    {
      id: 1,
      title: "Monthly Halaqa and Bonfire",
      date: "2026-06-26",
      time: "05:00 PM - 11:00 PM",
      location: "Windsor Mosque",
      skills: ["Community Halaqa", "Outdoor Bonfire Safety", "Nature Reflection"],
      whatToBring: ["Foldable camp chair", "Warm jacket", "Snacks to share"],
      flyerUrl: "/flyers/BrothersBonfire_Flyer.jpeg",
      type: "outdoor",
    },
    {
      id: 2,
      title: "School of Life Summer Session",
      date: "2026-07-10",
      time: "10:00 AM - 03:00 PM",
      location: "Oldcastle, ON (3940 ON-3)",
      skills: ["Swimming and Water Safety", "Kayaking and Paddle Control", "Fishing Techniques", "Traditional Archery", "Outdoor Cooking"],
      whatToBring: ["Towel and modest swimwear", "Sunscreen and bug spray", "Water bottle (1.5L+)"],
      flyerUrl: "/flyers/SchoolofLife_Summer2026.jpeg",
      type: "outdoor",
    },
    {
      id: 101,
      title: "Marriage & Family Workshop: What It Takes To Get Married",
      date: "2026-01-17",
      time: "10:30 AM - 05:30 PM",
      location: "WIA Centre (2555 McKay Ave)",
      skills: ["Marriage Workshop", "Spouse Selection Guidelines", "Engagement Etiquette"],
      whatToBring: ["Notebook and pen", "Course handbook (provided)", "Willing to learn"],
      flyerUrl: "/flyers/MarriageandFamily_WhatItTakes ToGetMarried.JPG",
      type: "life",
    },
    {
      id: 102,
      title: "Marriage & Family Workshop: Keeping It Together",
      date: "2026-02-07",
      time: "10:30 AM - 04:30 PM",
      location: "WIA Centre (2555 McKay Ave)",
      skills: ["Islamic Intimacy Guidelines", "Marital Privacy Rights", "Family Harmony Rules"],
      whatToBring: ["Notebook and pen", "Course handbook (provided)", "18+ Age Verification"],
      flyerUrl: "/flyers/MarriageandFamily_KeepingItTogether.png",
      type: "life",
    },
    {
      id: 103,
      title: "Marriage & Family Workshop: Marital Arts",
      date: "2026-04-11",
      time: "10:30 AM - 04:30 PM",
      location: "WIA Centre (2555 McKay Ave)",
      skills: ["Dispute Resolution", "Healthy Marital Communication", "Active Listening Drills"],
      whatToBring: ["Notebook and pen", "Course handbook (provided)"],
      flyerUrl: "/flyers/MarriageandFamily_MaritalArts.JPG",
      type: "life",
    },
    {
      id: 104,
      title: "Marriage & Family Workshop: Parenting Essentials",
      date: "2026-05-09",
      time: "10:30 AM - 01:30 PM",
      location: "WIA Centre (2555 McKay Ave)",
      skills: ["Early Childhood Support", "Sunnah Parenting Practices", "Effective Communication"],
      whatToBring: ["Notebook and pen", "Course handbook (provided)", "Refreshments included"],
      flyerUrl: "/flyers/MarriageandFamily_Parenting.JPG",
      type: "life",
    },
    {
      id: 105,
      title: "Kids Nature Storytime",
      date: "2026-06-14",
      time: "11:30 AM - 01:00 PM",
      location: "WIA Centre (2555 McKay Ave)",
      skills: ["Islamic Character Stories", "Family Connection Activities", "Kite Flying"],
      whatToBring: ["Ages 5 to 9 kids", "FEE: $5 per child", "Appetite for pizza"],
      flyerUrl: "/flyers/Storytime_Flyer.jpeg",
      type: "life",
    },
  ],
};

export function loadSiteConfig() {
  const saved = localStorage.getItem('sol_site_config');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse saved site config", e);
    }
  }
  return initialSiteConfig;
}

export function saveSiteConfig(config) {
  localStorage.setItem('sol_site_config', JSON.stringify(config));
}
