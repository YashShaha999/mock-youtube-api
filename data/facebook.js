// mock-api/data/facebook.js

const mockFacebookPage = {
  kind: "facebook#pageResponse",
  page: {
    id: "fb_page_987654",
    name: "Alex Morgan Tech & Creator Studio",
    category: "Software Creator & Community",
    about: "Official community hub for software developers, content creators, and indie founders building scalable web applications.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80",
    coverUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
    isVerified: true,
    statistics: {
      followersCount: 42100,
      likesCount: 38900,
      totalViews: 270500,
      postsCount: 10,
      averageEngagementRate: 9.3
    }
  }
};

const mockFacebookPosts = {
  kind: "facebook#feedListResponse",
  pageInfo: { totalResults: 10, resultsPerPage: 10 },
  items: [
    {
      id: "fb_post_1",
      type: "video",
      title: "The Future of Full-Stack Web Development: Trends, Salaries & Frameworks",
      description: "Detailed community breakdown of developer salaries, remote opportunities, and full-stack architecture paradigms.",
      message: "Here is our comprehensive analysis of the full-stack landscape heading into 2027. Which stack are you focusing on?",
      mediaUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=480&auto=format&fit=crop&q=80",
      createdTime: "2026-08-28T14:00:00Z",
      platform: "facebook",
      duration: "PT03M15S",
      statistics: {
        viewCount: 34500,
        likeCount: 2100,
        commentCount: 340,
        shareCount: 520,
        engagementRate: 8.57
      }
    },
    {
      id: "fb_post_2",
      type: "live_video",
      title: "Live Community Q&A: Building and Scaling Microservices on Cloud Platforms",
      description: "Interactive recording covering containerization, service meshes, automatic health checks, and CI/CD pipelines.",
      message: "Thanks to everyone who joined our weekend livestream on microservices scaling! Full replay now up.",
      mediaUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=480&auto=format&fit=crop&q=80",
      createdTime: "2026-08-30T16:30:00Z",
      platform: "facebook",
      duration: "PT12M40S",
      statistics: {
        viewCount: 28900,
        likeCount: 1850,
        commentCount: 460,
        shareCount: 310,
        engagementRate: 9.06
      }
    },
    {
      id: "fb_post_3",
      type: "article",
      title: "Creator Economy Insights: Why Audience Retention Matters More Than Follower Count",
      description: "Analyzing deep fan loyalty, repeat viewership, and monetization conversion across modern digital platforms.",
      message: "Stop obsessing over vanity follower counts. Focus on retention, CTR, and community ownership.",
      mediaUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=480&auto=format&fit=crop&q=80",
      createdTime: "2026-09-01T11:20:00Z",
      platform: "facebook",
      duration: "PT05M20S",
      statistics: {
        viewCount: 42000,
        likeCount: 2900,
        commentCount: 380,
        shareCount: 640,
        engagementRate: 9.33
      }
    },
    {
      id: "fb_post_4",
      type: "guide",
      title: "Complete Guide to MongoDB Indexing & Query Optimization for Startups",
      description: "How compound indexes, query explain plans, and proper projection can speed up response times by 10x.",
      message: "Here are the top 5 query mistakes we see in high-traffic NoSQL schemas and how to resolve them.",
      mediaUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=480&auto=format&fit=crop&q=80",
      createdTime: "2026-09-02T13:45:00Z",
      platform: "facebook",
      duration: "PT04M10S",
      statistics: {
        viewCount: 21400,
        likeCount: 1400,
        commentCount: 210,
        shareCount: 290,
        engagementRate: 8.87
      }
    },
    {
      id: "fb_post_5",
      type: "discussion",
      title: "Tech Stack Discussion: Are you team Next.js, Vite React, or Remix in 2026?",
      description: "Over 500 developers shared their production experiences, deployment challenges, and developer velocity benchmarks.",
      message: "The great frontend debate! What is your go-to framework for shipping fast MVPs today?",
      mediaUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=480&auto=format&fit=crop&q=80",
      createdTime: "2026-09-03T17:15:00Z",
      platform: "facebook",
      duration: "PT02M50S",
      statistics: {
        viewCount: 38200,
        likeCount: 2750,
        commentCount: 590,
        shareCount: 410,
        engagementRate: 9.81
      }
    },
    {
      id: "fb_post_6",
      type: "case_study",
      title: "Open Source AI Models: How Small Teams are Competing with Tech Giants",
      description: "Case studies of indie developers building profitable SaaS tools with fine-tuned open-weights models.",
      message: "You don't need a multi-million dollar compute budget to ship impactful AI software. Read the breakdown.",
      mediaUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=480&auto=format&fit=crop&q=80",
      createdTime: "2026-09-04T19:00:00Z",
      platform: "facebook",
      duration: "PT06M35S",
      statistics: {
        viewCount: 46700,
        likeCount: 3200,
        commentCount: 480,
        shareCount: 730,
        engagementRate: 9.44
      }
    },
    {
      id: "fb_post_7",
      type: "gear_review",
      title: "Remote Work & Digital Nomad Gear: Our Studio Essentials This Year",
      description: "Portable power stations, noise-canceling audio interfaces, and high-speed satellite setups for remote creation.",
      message: "Our exact hardware packing list for traveling and producing high-production video content on the move.",
      mediaUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=480&auto=format&fit=crop&q=80",
      createdTime: "2026-09-05T10:30:00Z",
      platform: "facebook",
      duration: "PT03M45S",
      statistics: {
        viewCount: 27800,
        likeCount: 1950,
        commentCount: 270,
        shareCount: 330,
        engagementRate: 9.17
      }
    },
    {
      id: "fb_post_8",
      type: "spotlight",
      title: "Weekly Creator Spotlight: Community member scales newsletter to 50k subscribers",
      description: "Inspiring community story showing step-by-step newsletter referral loops and high-open-rate subject lines.",
      message: "Huge shoutout to community member David on crossing 50,000 active readers! Check out his key insights.",
      mediaUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&auto=format&fit=crop&q=80",
      createdTime: "2026-09-06T12:00:00Z",
      platform: "facebook",
      duration: "PT04M00S",
      statistics: {
        viewCount: 31000,
        likeCount: 2200,
        commentCount: 310,
        shareCount: 450,
        engagementRate: 9.54
      }
    },
    {
      id: "fb_post_9",
      type: "video",
      title: "How to Build and Automate Your Content Pipeline with Webhooks",
      description: "Triggering social syndication, thumbnail resize, and multi-platform analytics from a single webhook.",
      message: "Automating your distribution saves you 15+ hours every month. Here is our architecture diagram.",
      mediaUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=480&auto=format&fit=crop&q=80",
      createdTime: "2026-09-07T15:40:00Z",
      platform: "facebook",
      duration: "PT05M15S",
      statistics: {
        viewCount: 39500,
        likeCount: 2600,
        commentCount: 390,
        shareCount: 580,
        engagementRate: 9.03
      }
    },
    {
      id: "fb_post_10",
      type: "discussion",
      title: "The Developer Burnout Playbook: Boundaries, Async Communication & Work-Life Balance",
      description: "Actionable frameworks for avoiding software engineering fatigue and maintaining creative energy.",
      message: "Burnout is real in tech. Here are 3 habits our team implemented this quarter that made the biggest difference.",
      mediaUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=480&auto=format&fit=crop&q=80",
      thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=480&auto=format&fit=crop&q=80",
      createdTime: "2026-09-08T16:00:00Z",
      platform: "facebook",
      duration: "PT04M30S",
      statistics: {
        viewCount: 48500,
        likeCount: 3400,
        commentCount: 510,
        shareCount: 710,
        engagementRate: 9.52
      }
    }
  ]
};

module.exports = {
  mockFacebookPage,
  mockFacebookPosts
};
