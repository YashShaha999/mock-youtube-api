// mock-api/data/youtube.js

const mockChannel = {
  kind: "youtube#channelListResponse",
  etag: "etag123",
  pageInfo: { totalResults: 1, resultsPerPage: 1 },
  items: [{
    kind: "youtube#channel",
    etag: "etag456",
    id: "UC123456789",
    snippet: {
      title: "CreatorIQ Official",
      description: "Official channel for CreatorIQ Analytics & Performance Tutorials. We teach creators how to scale retention, optimize CTR, and build high-converting content engines.",
      customUrl: "@creatoriq",
      publishedAt: "2020-01-01T00:00:00Z",
      thumbnails: {
        default: { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80", width: 88, height: 88 },
        medium: { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80", width: 240, height: 240 },
        high: { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=480&auto=format&fit=crop&q=80", width: 800, height: 800 }
      },
      localized: {
        title: "CreatorIQ Official",
        description: "Official channel for CreatorIQ Analytics & Performance Tutorials"
      },
      country: "US"
    },
    statistics: {
      viewCount: "19850000",
      subscriberCount: "156000",
      hiddenSubscriberCount: false,
      videoCount: "15"
    },
    brandingSettings: {
      channel: {
        title: "CreatorIQ Official",
        description: "Official channel for CreatorIQ Analytics & Performance Tutorials",
        keywords: "creator economy analytics youtube tutorials tech dashboard"
      },
      image: {
        bannerExternalUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&auto=format&fit=crop&q=80"
      }
    }
  }]
};

const mockVideos = {
  kind: "youtube#videoListResponse",
  etag: "etag789",
  pageInfo: { totalResults: 15, resultsPerPage: 15 },
  items: [
    {
      kind: "youtube#video",
      etag: "etag101",
      id: "video1",
      snippet: {
        publishedAt: "2026-08-15T10:00:00Z",
        channelId: "UC123456789",
        title: "React Tutorial for Beginners 2026",
        description: "Learn React from scratch in this comprehensive tutorial. Covers hooks, state, props, performance optimization, and clean architecture.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["react", "javascript", "tutorial", "beginner", "frontend"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT21M15S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "45234",
        likeCount: "3421",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "567"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag202",
      id: "video2",
      snippet: {
        publishedAt: "2026-08-20T15:00:00Z",
        channelId: "UC123456789",
        title: "Python Crash Course: Build APIs with FastAPI",
        description: "Master Python basics and modern async REST APIs quickly. Learn Pydantic schemas, dependency injection, and JWT auth.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["python", "fastapi", "backend", "api", "rest"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT34M20S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "28000",
        likeCount: "2100",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "450"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag303",
      id: "video3",
      snippet: {
        publishedAt: "2026-08-25T18:30:00Z",
        channelId: "UC123456789",
        title: "Creator Economy Trends: Monetizing Influencer Content",
        description: "Discover high-yield revenue streams beyond ad revenue. Brand deals, digital storefronts, cohort sponsorships, and memberships.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["monetization", "influencer", "business", "creator economy"],
        categoryId: "27",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT18M45S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "62100",
        likeCount: "4890",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "890"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag404",
      id: "video4",
      snippet: {
        publishedAt: "2026-08-27T12:15:00Z",
        channelId: "UC123456789",
        title: "MongoDB Atlas Best Practices for Web Scale",
        description: "Index design, compound queries, and connection pooling for zero-latency document applications.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["mongodb", "database", "atlas", "nosql", "scaling"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT25M10S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "19400",
        likeCount: "1420",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "230"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag505",
      id: "video5",
      snippet: {
        publishedAt: "2026-08-29T14:00:00Z",
        channelId: "UC123456789",
        title: "Full-Stack Dashboard Architecture with Vite & Tailwind",
        description: "Architecting clean state management, modular components, chart visualizations, and authentication guards in modern SPAs.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["dashboard", "vite", "react", "architecture", "ui"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT42M30S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "51200",
        likeCount: "4150",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "712"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag606",
      id: "video6",
      snippet: {
        publishedAt: "2026-08-30T09:45:00Z",
        channelId: "UC123456789",
        title: "Async Python Mastery: Asyncio & Concurrent HTTP",
        description: "Deep dive into event loops, coroutines, httpx, and non-blocking asynchronous Python pipelines.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["python", "asyncio", "concurrency", "performance"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT16M50S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "34900",
        likeCount: "2870",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "395"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag707",
      id: "video7",
      snippet: {
        publishedAt: "2026-08-31T16:20:00Z",
        channelId: "UC123456789",
        title: "Microservices Architecture: Docker, Gateways & Deployments",
        description: "Splitting monolithic apps into scalable microservices with Docker containerization and Render cloud deployment.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["microservices", "docker", "devops", "cloud", "render"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT31M05S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "42800",
        likeCount: "3620",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "540"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag808",
      id: "video8",
      snippet: {
        publishedAt: "2026-09-01T11:00:00Z",
        channelId: "UC123456789",
        title: "Top 7 AI Video Tools Every YouTuber Needs in 2026",
        description: "Automate video editing, speech cleanup, auto-captions, and script generation using state-of-the-art AI tooling.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["ai", "tools", "video editing", "youtube", "creator tools"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT19M40S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "98500",
        likeCount: "8920",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "1420"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag909",
      id: "video9",
      snippet: {
        publishedAt: "2026-09-03T13:30:00Z",
        channelId: "UC123456789",
        title: "Build a Real-Time Notification System with WebSockets",
        description: "Implement bi-directional event streaming, push notifications, and live dashboard metrics with WebSockets.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["websockets", "realtime", "fullstack", "notifications"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT28M15S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "22600",
        likeCount: "1840",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "310"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag1010",
      id: "video10",
      snippet: {
        publishedAt: "2026-09-04T15:00:00Z",
        channelId: "UC123456789",
        title: "YouTube Algorithm Secrets: CTR & Audience Retention",
        description: "How YouTube ranks videos in 2026. A/B testing thumbnails, the 30-second retention hook, and browse feature velocity.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["youtube", "growth", "algorithm", "ctr", "retention"],
        categoryId: "27",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT23M55S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "145000",
        likeCount: "12800",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "2340"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag1111",
      id: "video11",
      snippet: {
        publishedAt: "2026-09-05T17:45:00Z",
        channelId: "UC123456789",
        title: "Studio Setup Tour 2026: Lighting, Audio & 4K Cameras",
        description: "Full walkthrough of our multi-camera recording setup: Key lights, Shure SM7B signal chain, acoustic panels, and teleprompter setup.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["studio", "gear", "lighting", "audio", "camera"],
        categoryId: "26",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT13M30S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "41800",
        likeCount: "3750",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "490"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag1212",
      id: "video12",
      snippet: {
        publishedAt: "2026-09-06T12:00:00Z",
        channelId: "UC123456789",
        title: "Podcast Ep 12: Future of Content Creation with AI Agents",
        description: "Join our guest AI researchers as we discuss autonomous video generation, dynamic personalized thumbnails, and the next wave of creator tooling.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["podcast", "interview", "ai agents", "technology", "future"],
        categoryId: "24",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT45M12S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "73600",
        likeCount: "6400",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "980"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag1313",
      id: "video13",
      snippet: {
        publishedAt: "2026-09-07T14:30:00Z",
        channelId: "UC123456789",
        title: "Next.js 15 & AI Agents Full-Stack Crash Course 2026",
        description: "Build enterprise SaaS web apps with Next.js 15 App Router, Server Actions, autonomous AI agents, and vector databases from zero to production.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["nextjs", "react", "ai agents", "fullstack", "saas"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT38M45S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "89200",
        likeCount: "7820",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "1150"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag1414",
      id: "video14",
      snippet: {
        publishedAt: "2026-09-08T09:15:00Z",
        channelId: "UC123456789",
        title: "How to Build a High-Converting SaaS in 2026",
        description: "The complete playbook for bootstrap founders: validation, dynamic pricing, conversion rate optimization, and virality loops.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["saas", "startup", "growth", "business", "monetization"],
        categoryId: "27",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT27M10S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "62400",
        likeCount: "5180",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "820"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag1515",
      id: "video15",
      snippet: {
        publishedAt: "2026-09-08T18:00:00Z",
        channelId: "UC123456789",
        title: "Creator Analytics: Decoding CTR & Audience Retention",
        description: "Deep dive into YouTube studio analytics: how to read impression click-through rates, retention dips, and end screen conversions.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["analytics", "youtube", "ctr", "retention", "audience"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT22M40S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "54300",
        likeCount: "4620",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "695"
      }
    }
  ]
};

const mockPlaylists = {
  kind: "youtube#playlistListResponse",
  etag: "etagPlaylists",
  pageInfo: { totalResults: 3, resultsPerPage: 3 },
  items: [
    {
      kind: "youtube#playlist",
      id: "PL101",
      snippet: {
        publishedAt: "2026-01-10T10:00:00Z",
        channelId: "UC123456789",
        title: "Creator Masterclass & Growth Strategies",
        description: "Proven playbooks for scaling audience retention, improving CTR, and negotiating brand deals.",
        thumbnails: {
          medium: { url: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 }
        },
        channelTitle: "CreatorIQ Official"
      },
      contentDetails: {
        itemCount: 4
      }
    },
    {
      kind: "youtube#playlist",
      id: "PL102",
      snippet: {
        publishedAt: "2026-02-15T12:00:00Z",
        channelId: "UC123456789",
        title: "Full-Stack Development & Modern APIs",
        description: "From beginner React and FastAPI tutorials to enterprise microservices deployment.",
        thumbnails: {
          medium: { url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 }
        },
        channelTitle: "CreatorIQ Official"
      },
      contentDetails: {
        itemCount: 6
      }
    },
    {
      kind: "youtube#playlist",
      id: "PL103",
      snippet: {
        publishedAt: "2026-03-01T09:00:00Z",
        channelId: "UC123456789",
        title: "AI Workflows for Content Creators",
        description: "Automate short-form edits, voice transcription, thumbnail prompts, and script drafts.",
        thumbnails: {
          medium: { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 }
        },
        channelTitle: "CreatorIQ Official"
      },
      contentDetails: {
        itemCount: 5
      }
    }
  ]
};

const mockCommentThreads = {
  kind: "youtube#commentThreadListResponse",
  etag: "etagComments",
  pageInfo: { totalResults: 3, resultsPerPage: 3 },
  items: [
    {
      kind: "youtube#commentThread",
      id: "comment1",
      snippet: {
        videoId: "video1",
        topLevelComment: {
          kind: "youtube#comment",
          id: "c1",
          snippet: {
            authorDisplayName: "Sarah Jenkins",
            authorProfileImageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
            textDisplay: "This tutorial saved me hours of debugging! The explanation on hooks was crystal clear.",
            likeCount: 42,
            publishedAt: "2026-08-16T14:20:00Z"
          }
        },
        totalReplyCount: 3
      }
    },
    {
      kind: "youtube#commentThread",
      id: "comment2",
      snippet: {
        videoId: "video10",
        topLevelComment: {
          kind: "youtube#comment",
          id: "c2",
          snippet: {
            authorDisplayName: "Alex Rivera",
            authorProfileImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
            textDisplay: "The tip on improving CTR in the first 48 hours bumped my video impressions by 35%!",
            likeCount: 89,
            publishedAt: "2026-08-27T09:15:00Z"
          }
        },
        totalReplyCount: 7
      }
    },
    {
      kind: "youtube#commentThread",
      id: "comment3",
      snippet: {
        videoId: "video8",
        topLevelComment: {
          kind: "youtube#comment",
          id: "c3",
          snippet: {
            authorDisplayName: "Emily Chen",
            authorProfileImageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
            textDisplay: "Incredible curation of AI tools. Are there any open-source alternatives you recommend?",
            likeCount: 15,
            publishedAt: "2026-09-02T18:40:00Z"
          }
        },
        totalReplyCount: 2
      }
    }
  ]
};

module.exports = {
  mockChannel,
  mockVideos,
  mockPlaylists,
  mockCommentThreads
};
