// mock-api/data/instagram.js

const mockInstagramProfile = {
  kind: "instagram#profileResponse",
  user: {
    id: "ig_user_123456",
    username: "alex.creator.official",
    fullName: "Alex Morgan Official",
    bio: "Tech Creator & Full-Stack Architect 🚀 Building modern apps & sharing weekly developer playbooks | SF & Remote",
    website: "https://creatoriq.com",
    profilePicUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80",
    isVerified: true,
    statistics: {
      mediaCount: 10,
      followersCount: 94500,
      followingCount: 420,
      totalViews: 593000,
      averageEngagementRate: 11.7
    }
  }
};

const mockInstagramPosts = {
  kind: "instagram#mediaListResponse",
  pageInfo: { totalResults: 10, resultsPerPage: 10 },
  items: [
    {
      id: "ig_post_1",
      mediaType: "VIDEO",
      caption: "10 React UI Design Rules Every Developer Should Know (Carousel + Reel) 🎨✨ #coding #webdev #react",
      title: "10 React UI Design Rules Every Developer Should Know (Carousel + Reel)",
      description: "Essential layout principles, glassmorphic card patterns, dynamic color tokens, and contrast ratios.",
      mediaUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&auto=format&fit=crop&q=80",
      permalink: "https://instagram.com/p/ig_post_1",
      timestamp: "2026-09-01T15:30:00Z",
      platform: "instagram",
      duration: "PT00M45S",
      statistics: {
        viewCount: 68400,
        likeCount: 6200,
        commentCount: 480,
        shareCount: 1250,
        engagementRate: 11.59
      }
    },
    {
      id: "ig_post_2",
      mediaType: "VIDEO",
      caption: "My Aesthetic Minimalist Desk Setup 2026 🖥️✨ Clean cable routing and ambient backlighting. #setup #minimalism",
      title: "My Aesthetic Minimalist Desk Setup 2026 🖥️✨",
      description: "Clean cable management, ambient smart lighting, ergonomic mechanical keyboards, and 4K ultra-wide monitors.",
      mediaUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=480&auto=format&fit=crop&q=80",
      permalink: "https://instagram.com/p/ig_post_2",
      timestamp: "2026-09-02T18:00:00Z",
      platform: "instagram",
      duration: "PT00M30S",
      statistics: {
        viewCount: 92300,
        likeCount: 8900,
        commentCount: 720,
        shareCount: 2100,
        engagementRate: 12.70
      }
    },
    {
      id: "ig_post_3",
      mediaType: "IMAGE",
      caption: "FastAPI vs Express: Which should you choose for high-concurrency production? #python #javascript",
      title: "FastAPI vs Express: Which should you choose for production? #coding",
      description: "Comparing benchmark speeds, async concurrency, type validation with Pydantic vs TypeScript, and developer velocity.",
      mediaUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=480&auto=format&fit=crop&q=80",
      permalink: "https://instagram.com/p/ig_post_3",
      timestamp: "2026-09-03T12:15:00Z",
      platform: "instagram",
      duration: "PT00M55S",
      statistics: {
        viewCount: 43200,
        likeCount: 3800,
        commentCount: 310,
        shareCount: 640,
        engagementRate: 10.99
      }
    },
    {
      id: "ig_post_4",
      mediaType: "VIDEO",
      caption: "Day in the Life of a Tech Content Creator in Silicon Valley ☕ B-roll, AI coding assistants, and coffee runs.",
      title: "Day in the Life of a Tech Content Creator in Silicon Valley ☕",
      description: "Morning coffee, recording b-roll, script brainstorming with AI agents, and editing in DaVinci Resolve.",
      mediaUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=480&auto=format&fit=crop&q=80",
      permalink: "https://instagram.com/p/ig_post_4",
      timestamp: "2026-09-04T10:00:00Z",
      platform: "instagram",
      duration: "PT00M50S",
      statistics: {
        viewCount: 76500,
        likeCount: 7100,
        commentCount: 540,
        shareCount: 980,
        engagementRate: 11.26
      }
    },
    {
      id: "ig_post_5",
      mediaType: "VIDEO",
      caption: "Top 5 AI Tools That Will Save You 10 Hours Every Week ⚡ Automate the boring parts of development. #aitools",
      title: "Top 5 AI Tools That Will Save You 10 Hours Every Week",
      description: "Automated subtitling, background noise elimination, semantic code search, and high-CTR thumbnail generation.",
      mediaUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=480&auto=format&fit=crop&q=80",
      permalink: "https://instagram.com/p/ig_post_5",
      timestamp: "2026-09-05T14:45:00Z",
      platform: "instagram",
      duration: "PT01M00S",
      statistics: {
        viewCount: 115000,
        likeCount: 10800,
        commentCount: 1290,
        shareCount: 3400,
        engagementRate: 13.46
      }
    },
    {
      id: "ig_post_6",
      mediaType: "CAROUSEL",
      caption: "How I Grew from 0 to 100k Followers Without Paid Ads 📈 Swipe for the exact 4-step framework. #growth",
      title: "How I Grew from 0 to 100k Followers Without Paid Ads",
      description: "The exact content flywheel: high-retention hooks, weekly recurring series, and genuine community interactions.",
      mediaUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&auto=format&fit=crop&q=80",
      permalink: "https://instagram.com/p/ig_post_6",
      timestamp: "2026-09-06T16:20:00Z",
      platform: "instagram",
      duration: "PT00M40S",
      statistics: {
        viewCount: 84000,
        likeCount: 7400,
        commentCount: 610,
        shareCount: 1450,
        engagementRate: 11.26
      }
    },
    {
      id: "ig_post_7",
      mediaType: "IMAGE",
      caption: "CSS Grid vs Flexbox: The Visual Guide You Always Wanted 📐 Save this for your next frontend interview!",
      title: "CSS Grid vs Flexbox: The Visual Guide You Always Wanted",
      description: "When to use 1D flex layouts vs 2D grid systems with live code comparisons and responsive breakpoints.",
      mediaUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=480&auto=format&fit=crop&q=80",
      permalink: "https://instagram.com/p/ig_post_7",
      timestamp: "2026-09-07T11:00:00Z",
      platform: "instagram",
      duration: "PT00M35S",
      statistics: {
        viewCount: 51200,
        likeCount: 4900,
        commentCount: 390,
        shareCount: 820,
        engagementRate: 11.93
      }
    },
    {
      id: "ig_post_8",
      mediaType: "CAROUSEL",
      caption: "3 Secrets to Building High-Converting Creator Landing Pages 💎 Swipe through the UX wireframes.",
      title: "3 Secrets to Building High-Converting Creator Landing Pages",
      description: "Clear social proof badges, zero friction call-to-actions, and interactive performance calculators.",
      mediaUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&auto=format&fit=crop&q=80",
      permalink: "https://instagram.com/p/ig_post_8",
      timestamp: "2026-09-08T09:30:00Z",
      platform: "instagram",
      duration: "PT00M42S",
      statistics: {
        viewCount: 62100,
        likeCount: 5300,
        commentCount: 410,
        shareCount: 910,
        engagementRate: 10.66
      }
    },
    {
      id: "ig_post_9",
      mediaType: "VIDEO",
      caption: "How Autonomous AI Agents Are Writing Real Production Code in 2026 🤖 Full demo in bio!",
      title: "Autonomous AI Agents in Production: 60-Second Breakdown",
      description: "Multi-agent orchestration, self-healing pull requests, and automated regression test generation.",
      mediaUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&auto=format&fit=crop&q=80",
      permalink: "https://instagram.com/p/ig_post_9",
      timestamp: "2026-09-08T13:00:00Z",
      platform: "instagram",
      duration: "PT00M58S",
      statistics: {
        viewCount: 98000,
        likeCount: 8900,
        commentCount: 840,
        shareCount: 2200,
        engagementRate: 12.18
      }
    },
    {
      id: "ig_post_10",
      mediaType: "IMAGE",
      caption: "The 2026 Tech Stack Tier List: S-Tier vs F-Tier Frameworks 🔥 What's in your daily stack?",
      title: "The 2026 Tech Stack Tier List: Ranked by Dev Velocity",
      description: "Ranking TypeScript, Vite, TailwindCSS, MongoDB Atlas, and FastAPI based on real production reliability.",
      mediaUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=480&auto=format&fit=crop&q=80",
      permalink: "https://instagram.com/p/ig_post_10",
      timestamp: "2026-09-08T17:45:00Z",
      platform: "instagram",
      duration: "PT00M30S",
      statistics: {
        viewCount: 78500,
        likeCount: 6800,
        commentCount: 650,
        shareCount: 1350,
        engagementRate: 11.21
      }
    }
  ]
};

module.exports = {
  mockInstagramProfile,
  mockInstagramPosts
};
