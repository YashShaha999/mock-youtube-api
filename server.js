// mock-youtube-api/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// ============================================
// MOCK DATA - YouTube API v3 Format
// ============================================

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
      viewCount: "18450000",
      subscriberCount: "148000",
      hiddenSubscriberCount: false,
      videoCount: "12"
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
  pageInfo: { totalResults: 12, resultsPerPage: 12 },
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
        tags: ["python", "programming", "fastapi", "crash course", "backend"],
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
        publishedAt: "2026-08-25T08:00:00Z",
        channelId: "UC123456789",
        title: "Creator Economy Trends: Monetizing Influencer Content",
        description: "How top creators grow 200% faster with real-time audience analytics, brand deals, and subscription models.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["analytics", "creators", "growth", "lifestyle", "monetization"],
        categoryId: "22",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT19M45S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "38500",
        likeCount: "3100",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "380"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag404",
      id: "video4",
      snippet: {
        publishedAt: "2026-08-28T18:00:00Z",
        channelId: "UC123456789",
        title: "Full-Stack Dashboard UI/UX Design System",
        description: "Building responsive charts, stat cards, dark mode palettes, and modals with modern design tokens and CSS.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["design", "ui", "ux", "web", "dashboard"],
        categoryId: "20",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT28M10S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "32000",
        likeCount: "2800",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "680"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag505",
      id: "video5",
      snippet: {
        publishedAt: "2026-09-01T12:00:00Z",
        channelId: "UC123456789",
        title: "Building Microservices & Mock APIs on Render",
        description: "Deploy Node.js and Python microservices with automated CI/CD and custom subdomains on Render.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["devops", "cloud", "render", "deploy", "api"],
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
        viewCount: "15000",
        likeCount: "900",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "120"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag606",
      id: "video6",
      snippet: {
        publishedAt: "2026-09-02T14:30:00Z",
        channelId: "UC123456789",
        title: "Next.js 15 & Server Actions Masterclass",
        description: "Deep dive into Next.js 15 App Router, streaming SSR, Server Actions, dynamic caching, and database mutations.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["nextjs", "react", "typescript", "web development", "fullstack"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT25M40S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "52140",
        likeCount: "4890",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "742"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag707",
      id: "video7",
      snippet: {
        publishedAt: "2026-09-03T11:00:00Z",
        channelId: "UC123456789",
        title: "How Top Creators Scale to $100k/Month (Sponsorships & Merch)",
        description: "Actionable revenue breakdown from top tech creators: pitching sponsors, CPM negotiations, affiliate funnels, and digital products.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["business", "sponsorship", "revenue", "creators", "growth"],
        categoryId: "22",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT18M42S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "89400",
        likeCount: "7650",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "1120"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag808",
      id: "video8",
      snippet: {
        publishedAt: "2026-09-04T09:15:00Z",
        channelId: "UC123456789",
        title: "Top 7 AI Video Tools Every YouTuber Needs in 2026",
        description: "Transform your editing workflow with automated clipping, voice synthesis, thumbnail generation, and AI scriptwriting.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["ai", "video editing", "tools", "automation", "youtube"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT15M10S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "112000",
        likeCount: "9300",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "1450"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag909",
      id: "video9",
      snippet: {
        publishedAt: "2026-09-04T16:00:00Z",
        channelId: "UC123456789",
        title: "Mastering DaVinci Resolve: Cinematic Color Grading",
        description: "Professional node workflows, LUT creation, film emulation, and matching skin tones in DaVinci Resolve Studio.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["davinci resolve", "color grading", "cinematic", "video editing"],
        categoryId: "26",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT22M05S",
        dimension: "2d",
        definition: "hd",
        caption: "true",
        licensedContent: true,
        projection: "rectangular"
      },
      statistics: {
        viewCount: "64300",
        likeCount: "5120",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "630"
      }
    },
    {
      kind: "youtube#video",
      etag: "etag1010",
      id: "video10",
      snippet: {
        publishedAt: "2026-09-05T10:00:00Z",
        channelId: "UC123456789",
        title: "YouTube Algorithm Secrets: CTR & Audience Retention",
        description: "Understand the math behind the recommendation engine: first 24-hour velocity, packaging, average view duration, and end screen clicks.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["algorithm", "youtube growth", "ctr", "retention", "analytics"],
        categoryId: "22",
        liveBroadcastContent: "none"
      },
      contentDetails: {
        duration: "PT16M55S",
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
        itemCount: 5
      }
    },
    {
      kind: "youtube#playlist",
      id: "PL103",
      snippet: {
        publishedAt: "2026-03-01T15:00:00Z",
        channelId: "UC123456789",
        title: "AI Tools & Studio Setup",
        description: "Generative AI applications, lighting, acoustics, and color grading tutorials for modern creators.",
        thumbnails: {
          medium: { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 }
        },
        channelTitle: "CreatorIQ Official"
      },
      contentDetails: {
        itemCount: 3
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
            publishedAt: "2026-08-30T11:05:00Z"
          }
        },
        totalReplyCount: 1
      }
    }
  ]
};

// ============================================
// API ENDPOINTS
// ============================================

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    service: 'CreatorIQ Mock YouTube API v3',
    version: '1.1.0',
    totalVideos: mockVideos.items.length,
    documentation: 'https://github.com/YashShaha999/mock-youtube-api'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Mock YouTube API is running',
    endpoints: {
      channel: '/youtube/v3/channels?id=UC123456789',
      videos: '/youtube/v3/videos?chart=mostPopular',
      singleVideo: '/youtube/v3/videos?id=video1',
      playlists: '/youtube/v3/playlists?channelId=UC123456789',
      commentThreads: '/youtube/v3/commentThreads?videoId=video1',
      search: '/youtube/v3/search?q=react'
    }
  });
});

app.get('/youtube/v3/channels', (req, res) => {
  res.json(mockChannel);
});

app.get('/youtube/v3/videos', (req, res) => {
  const videoId = req.query.id;
  const maxResults = parseInt(req.query.maxResults) || mockVideos.items.length;

  if (videoId) {
    // Support comma-separated IDs (e.g. ?id=video1,video2) or single ID
    const ids = videoId.split(',').map(id => id.trim());
    const matched = mockVideos.items.filter(v => ids.includes(v.id));
    return res.json({ 
      kind: "youtube#videoListResponse",
      etag: "etag-video-query",
      pageInfo: { totalResults: matched.length, resultsPerPage: matched.length },
      items: matched.length > 0 ? matched : [mockVideos.items[0]]
    });
  }

  const items = mockVideos.items.slice(0, maxResults);
  res.json({
    kind: "youtube#videoListResponse",
    etag: "etag-videos-all",
    pageInfo: { totalResults: mockVideos.items.length, resultsPerPage: items.length },
    items: items
  });
});

app.get('/youtube/v3/videos/:videoId', (req, res) => {
  const video = mockVideos.items.find(v => v.id === req.params.videoId);
  if (video) {
    return res.json({
      kind: "youtube#videoListResponse",
      items: [video]
    });
  }
  res.status(404).json({ error: "Video not found" });
});

app.get('/youtube/v3/playlists', (req, res) => {
  res.json(mockPlaylists);
});

app.get('/youtube/v3/commentThreads', (req, res) => {
  const videoId = req.query.videoId;
  if (videoId) {
    const filtered = mockCommentThreads.items.filter(c => c.snippet.videoId === videoId);
    return res.json({
      kind: "youtube#commentThreadListResponse",
      etag: "etagCommentsFiltered",
      pageInfo: { totalResults: filtered.length, resultsPerPage: filtered.length },
      items: filtered
    });
  }
  res.json(mockCommentThreads);
});

app.get('/youtube/v3/search', (req, res) => {
  const query = (req.query.q || '').toLowerCase();
  const maxResults = parseInt(req.query.maxResults) || 5;
  const results = mockVideos.items.filter(v => 
    v.snippet.title.toLowerCase().includes(query) ||
    v.snippet.description.toLowerCase().includes(query) ||
    (v.snippet.tags && v.snippet.tags.some(t => t.toLowerCase().includes(query)))
  ).slice(0, maxResults);

  res.json({
    kind: "youtube#searchListResponse",
    pageInfo: { totalResults: results.length, resultsPerPage: maxResults },
    items: results.map(v => ({
      kind: "youtube#searchResult",
      id: { kind: "youtube#video", videoId: v.id },
      snippet: v.snippet
    }))
  });
});

app.listen(PORT, () => {
  console.log(`✅ Mock YouTube API running on http://localhost:${PORT}`);
  console.log(`📺 Videos: http://localhost:${PORT}/youtube/v3/videos?chart=mostPopular`);
  console.log(`👤 Channel: http://localhost:${PORT}/youtube/v3/channels?id=UC123456789`);
  console.log(`📑 Playlists: http://localhost:${PORT}/youtube/v3/playlists?channelId=UC123456789`);
});
