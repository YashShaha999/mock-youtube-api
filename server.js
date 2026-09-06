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
      description: "Official channel for CreatorIQ Analytics & Performance Tutorials",
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
      viewCount: "2500000",
      subscriberCount: "24800",
      hiddenSubscriberCount: false,
      videoCount: "125"
    }
  }]
};

const mockVideos = {
  kind: "youtube#videoListResponse",
  etag: "etag789",
  pageInfo: { totalResults: 5, resultsPerPage: 5 },
  items: [
    {
      kind: "youtube#video",
      etag: "etag101",
      id: "video1",
      snippet: {
        publishedAt: "2026-08-15T10:00:00Z",
        channelId: "UC123456789",
        title: "React Tutorial for Beginners 2026",
        description: "Learn React from scratch in this comprehensive tutorial. Covers hooks, state, props, and more.",
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
        description: "Master Python basics and modern async REST APIs quickly.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["python", "programming", "fastapi", "crash course"],
        categoryId: "28",
        liveBroadcastContent: "none"
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
        description: "How top creators grow 200% faster with real-time audience analytics.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["analytics", "creators", "growth", "lifestyle"],
        categoryId: "22",
        liveBroadcastContent: "none"
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
        description: "Building responsive charts, stat cards, and modals with modern design tokens.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["design", "ui", "ux", "web"],
        categoryId: "20",
        liveBroadcastContent: "none"
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
        description: "Deploy Node.js and Python microservices with automated CI/CD on Render.",
        thumbnails: {
          default: { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=320&auto=format&fit=crop&q=80", width: 120, height: 90 },
          medium: { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=480&auto=format&fit=crop&q=80", width: 320, height: 180 },
          high: { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=640&auto=format&fit=crop&q=80", width: 480, height: 360 }
        },
        channelTitle: "CreatorIQ Official",
        tags: ["devops", "cloud", "render", "deploy"],
        categoryId: "28",
        liveBroadcastContent: "none"
      },
      statistics: {
        viewCount: "15000",
        likeCount: "900",
        dislikeCount: "0",
        favoriteCount: "0",
        commentCount: "120"
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
    version: '1.0.0',
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
      search: '/youtube/v3/search?q=react'
    }
  });
});

app.get('/youtube/v3/channels', (req, res) => {
  res.json(mockChannel);
});

app.get('/youtube/v3/videos', (req, res) => {
  const videoId = req.query.id;
  if (videoId) {
    const video = mockVideos.items.find(v => v.id === videoId);
    return res.json({ 
      kind: "youtube#videoListResponse",
      etag: "etag-single",
      items: video ? [video] : [mockVideos.items[0]]
    });
  }
  res.json(mockVideos);
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

app.get('/youtube/v3/search', (req, res) => {
  const query = (req.query.q || '').toLowerCase();
  const maxResults = parseInt(req.query.maxResults) || 5;
  const results = mockVideos.items.filter(v => 
    v.snippet.title.toLowerCase().includes(query) ||
    v.snippet.description.toLowerCase().includes(query)
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
});
