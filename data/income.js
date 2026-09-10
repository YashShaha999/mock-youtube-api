// mock-api/data/income.js
// Realistic Creator Monetization, Income & Revenue Analytics Dataset

const mockIncomeSummary = {
  currency: "USD",
  currencySymbol: "$",
  totalGrossIncome: 48250.00,
  thisMonthIncome: 6840.00,
  lastMonthIncome: 5920.00,
  growthRateMoM: 15.54,
  pendingPayout: 3420.00,
  nextPayoutDate: "2026-09-21",
  averageRPM: 7.45,
  averageCPM: 11.20,
  monetizedViews: 2840000,
  activeSponsorships: 4,
  activeSubscribers: 680
};

const mockIncomeByStream = [
  {
    source: "Ad Revenue (AdSense)",
    amount: 22400.00,
    percentage: 46.43,
    color: "#3b82f6",
    description: "In-stream video ads, display ads & YouTube Shorts revenue share"
  },
  {
    source: "Brand Sponsorships & Deals",
    amount: 15800.00,
    percentage: 32.75,
    color: "#10b981",
    description: "Dedicated brand collaborations, integrations & product reviews"
  },
  {
    source: "Channel Memberships & Subscriptions",
    amount: 5250.00,
    percentage: 10.88,
    color: "#8b5cf6",
    description: "Monthly recurring fan memberships, exclusive perks & badge tiers"
  },
  {
    source: "Affiliate Marketing & Merch",
    amount: 3600.00,
    percentage: 7.46,
    color: "#f59e0b",
    description: "Creator store merchandise sales and referral affiliate commissions"
  },
  {
    source: "Creator Rewards & SuperChats",
    amount: 1200.00,
    percentage: 2.48,
    color: "#ec4899",
    description: "Live stream SuperChats, SuperThanks, and platform creator bonuses"
  }
];

const mockIncomeByPlatform = [
  {
    platform: "YouTube",
    amount: 26500.00,
    percentage: 54.92,
    color: "#ef4444",
    monetizedViews: "3.55M",
    averageRpm: 7.46,
    topStream: "AdSense + Memberships"
  },
  {
    platform: "Instagram",
    amount: 12800.00,
    percentage: 26.53,
    color: "#e1306c",
    monetizedViews: "1.20M",
    averageRpm: 10.67,
    topStream: "Sponsored Reels & Stories"
  },
  {
    platform: "TikTok",
    amount: 5750.00,
    percentage: 11.92,
    color: "#000000",
    monetizedViews: "980K",
    averageRpm: 5.87,
    topStream: "Creator Rewards & Live Gifts"
  },
  {
    platform: "Facebook",
    amount: 3200.00,
    percentage: 6.63,
    color: "#1877f2",
    monetizedViews: "450K",
    averageRpm: 7.11,
    topStream: "In-Stream Video Ads"
  }
];

const mockMonthlyIncomeTrend = [
  { month: "Oct 2025", total: 3100, ads: 1600, sponsorships: 1000, memberships: 350, affiliate: 150 },
  { month: "Nov 2025", total: 3450, ads: 1750, sponsorships: 1150, memberships: 380, affiliate: 170 },
  { month: "Dec 2025", total: 4200, ads: 2200, sponsorships: 1400, memberships: 420, affiliate: 180 },
  { month: "Jan 2026", total: 3600, ads: 1800, sponsorships: 1200, memberships: 430, affiliate: 170 },
  { month: "Feb 2026", total: 3850, ads: 1900, sponsorships: 1350, memberships: 430, affiliate: 170 },
  { month: "Mar 2026", total: 4100, ads: 2050, sponsorships: 1400, memberships: 470, affiliate: 180 },
  { month: "Apr 2026", total: 4400, ads: 2150, sponsorships: 1550, memberships: 500, affiliate: 200 },
  { month: "May 2026", total: 4750, ads: 2300, sponsorships: 1700, memberships: 520, affiliate: 230 },
  { month: "Jun 2026", total: 5100, ads: 2450, sponsorships: 1850, memberships: 550, affiliate: 250 },
  { month: "Jul 2026", total: 5500, ads: 2600, sponsorships: 2050, memberships: 580, affiliate: 270 },
  { month: "Aug 2026", total: 5920, ads: 2750, sponsorships: 2250, memberships: 620, affiliate: 300 },
  { month: "Sep 2026", total: 6840, ads: 3100, sponsorships: 2650, memberships: 740, affiliate: 350 }
];

const mockTopEarningContent = [
  {
    id: "content_earn_1",
    title: "Full Stack Web Development Roadmap 2026 🚀",
    platform: "YouTube",
    views: 185000,
    earnings: 1420.00,
    rpm: 7.68,
    type: "Long-form Video",
    publishedAt: "2026-08-14"
  },
  {
    id: "content_earn_2",
    title: "React 19 Complete Mastery Guide & Best Practices",
    platform: "YouTube",
    views: 152000,
    earnings: 1180.00,
    rpm: 7.76,
    type: "Long-form Video",
    publishedAt: "2026-08-22"
  },
  {
    id: "content_earn_3",
    title: "A Day in the Life of a Software Engineer (Tech Sponsor)",
    platform: "Instagram",
    views: 95000,
    earnings: 850.00,
    rpm: 8.95,
    type: "Sponsored Reel",
    publishedAt: "2026-09-02"
  },
  {
    id: "content_earn_4",
    title: "Top 5 Productivity Desk Setups for Creators",
    platform: "YouTube",
    views: 110000,
    earnings: 780.00,
    rpm: 7.09,
    type: "Long-form Video",
    publishedAt: "2026-07-30"
  },
  {
    id: "content_earn_5",
    title: "Coding on a Foldable Phone: Impressive or Gimmick?",
    platform: "TikTok",
    views: 82000,
    earnings: 420.00,
    rpm: 5.12,
    type: "Short Reel",
    publishedAt: "2026-09-05"
  }
];

const mockRecentPayouts = [
  {
    id: "PAY-98214",
    payoutDate: "2026-08-21",
    amount: 5920.00,
    currency: "USD",
    source: "AdSense & Direct Sponsorships",
    status: "Paid",
    method: "Direct Deposit (Chase •••• 4821)",
    referenceNumber: "ACH-20260821-98214"
  },
  {
    id: "PAY-87342",
    payoutDate: "2026-07-21",
    amount: 5500.00,
    currency: "USD",
    source: "Creator Revenue Share & Brand Deals",
    status: "Paid",
    method: "Direct Deposit (Chase •••• 4821)",
    referenceNumber: "ACH-20260721-87342"
  },
  {
    id: "PAY-76291",
    payoutDate: "2026-06-21",
    amount: 5100.00,
    currency: "USD",
    source: "Multi-Platform Partner Earnings",
    status: "Paid",
    method: "Direct Deposit (Chase •••• 4821)",
    referenceNumber: "ACH-20260621-76291"
  },
  {
    id: "PAY-65103",
    payoutDate: "2026-05-21",
    amount: 4750.00,
    currency: "USD",
    source: "Monthly Creator Payout",
    status: "Paid",
    method: "Direct Deposit (Chase •••• 4821)",
    referenceNumber: "ACH-20260521-65103"
  }
];

const mockSponsorshipDeals = [
  {
    id: "DEAL-001",
    brand: "TechGadgets Pro",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80",
    amount: 2500.00,
    deliverable: "60-second Dedicated Video Integration",
    status: "In Progress",
    deadline: "2026-09-25",
    platform: "YouTube"
  },
  {
    id: "DEAL-002",
    brand: "CodeFlow AI",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80",
    amount: 1800.00,
    deliverable: "1 Dedicated Reel + 2 Story Mentions",
    status: "Completed",
    deadline: "2026-09-10",
    platform: "Instagram"
  },
  {
    id: "DEAL-003",
    brand: "CloudDevs Hosting",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80",
    amount: 3200.00,
    deliverable: "2 Video Sponsorships (Q4 Campaign)",
    status: "Scheduled",
    deadline: "2026-10-05",
    platform: "YouTube"
  },
  {
    id: "DEAL-004",
    brand: "ErgoChair Global",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80",
    amount: 1200.00,
    deliverable: "Multi-Platform Short Form Video Review",
    status: "Completed",
    deadline: "2026-08-28",
    platform: "Multi-Platform"
  }
];

module.exports = {
  mockIncomeSummary,
  mockIncomeByStream,
  mockIncomeByPlatform,
  mockMonthlyIncomeTrend,
  mockTopEarningContent,
  mockRecentPayouts,
  mockSponsorshipDeals
};
