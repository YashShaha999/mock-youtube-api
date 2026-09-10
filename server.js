// mock-api/server.js
const express = require('express');
const cors = require('cors');

// Import modular mock datasets
const { mockChannel, mockVideos, mockPlaylists, mockCommentThreads } = require('./data/youtube');
const { mockInstagramProfile, mockInstagramPosts } = require('./data/instagram');
const { mockFacebookPage, mockFacebookPosts } = require('./data/facebook');
const {
  mockIncomeSummary,
  mockIncomeByStream,
  mockIncomeByPlatform,
  mockMonthlyIncomeTrend,
  mockTopEarningContent,
  mockRecentPayouts,
  mockSponsorshipDeals
} = require('./data/income');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// ============================================
// HEALTH CHECK ENDPOINT
// ============================================
app.get('/health', (req, res) => {
  res.json({
    status: "OK",
    service: "Mock Multi-Platform Social Media API (CreatorIQ)",
    timestamp: new Date().toISOString(),
    platforms: {
      youtube: {
        videosCount: mockVideos.items.length,
        channel: mockChannel.items[0].snippet.title,
        subscribers: mockChannel.items[0].statistics.subscriberCount,
        endpoints: {
          videos: "/youtube/v3/videos?chart=mostPopular",
          channel: "/youtube/v3/channels?id=UC123456789",
          playlists: "/youtube/v3/playlists?channelId=UC123456789",
          commentThreads: "/youtube/v3/commentThreads?videoId=video1",
          search: "/youtube/v3/search?q=react"
        }
      },
      instagram: {
        postsCount: mockInstagramPosts.items.length,
        username: mockInstagramProfile.user.username,
        followers: mockInstagramProfile.user.statistics.followersCount,
        endpoints: {
          profile: "/instagram/v1/profile",
          posts: "/instagram/v1/posts",
          singlePost: "/instagram/v1/posts/ig_post_1"
        }
      },
      facebook: {
        postsCount: mockFacebookPosts.items.length,
        pageName: mockFacebookPage.page.name,
        followers: mockFacebookPage.page.statistics.followersCount,
        endpoints: {
          page: "/facebook/v1/page",
          posts: "/facebook/v1/posts",
          singlePost: "/facebook/v1/posts/fb_post_1"
        }
      },
      income: {
        service: "Creator Monetization, Revenue & Income Analytics",
        totalGrossIncome: mockIncomeSummary.totalGrossIncome,
        thisMonthIncome: mockIncomeSummary.thisMonthIncome,
        currency: mockIncomeSummary.currency,
        currencySymbol: mockIncomeSummary.currencySymbol,
        endpoints: {
          all: "/income/all",
          summary: "/income/summary",
          trends: "/income/trends",
          streams: "/income/streams",
          platforms: "/income/platforms",
          payouts: "/income/payouts",
          sponsorships: "/income/sponsorships",
          topContent: "/income/top-content"
        }
      }
    }
  });
});

// ============================================
// YOUTUBE DATA API v3 ENDPOINTS
// ============================================

// 1. Channels
app.get('/youtube/v3/channels', (req, res) => {
  const { id } = req.query;
  if (id && id !== 'UC123456789') {
    const customChannel = JSON.parse(JSON.stringify(mockChannel));
    customChannel.items[0].id = id;
    return res.json(customChannel);
  }
  res.json(mockChannel);
});

// 2. Videos List
app.get('/youtube/v3/videos', (req, res) => {
  const { id, chart } = req.query;

  if (id) {
    const ids = id.split(',');
    const matched = mockVideos.items.filter(v => ids.includes(v.id));
    return res.json({
      kind: "youtube#videoListResponse",
      pageInfo: { totalResults: matched.length, resultsPerPage: matched.length },
      items: matched
    });
  }

  res.json(mockVideos);
});

// 3. Playlists
app.get('/youtube/v3/playlists', (req, res) => {
  res.json(mockPlaylists);
});

// 4. Comment Threads
app.get('/youtube/v3/commentThreads', (req, res) => {
  const { videoId } = req.query;
  if (videoId) {
    const matched = mockCommentThreads.items.filter(c => c.snippet.videoId === videoId);
    return res.json({
      kind: "youtube#commentThreadListResponse",
      pageInfo: { totalResults: matched.length, resultsPerPage: matched.length },
      items: matched.length > 0 ? matched : mockCommentThreads.items
    });
  }
  res.json(mockCommentThreads);
});

// 5. Video Search
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

// ============================================
// INSTAGRAM GRAPH API v1 ENDPOINTS
// ============================================

// 1. Instagram Profile
app.get('/instagram/v1/profile', (req, res) => {
  res.json(mockInstagramProfile);
});

// 2. Instagram Posts (Feed & Reels)
app.get('/instagram/v1/posts', (req, res) => {
  const { mediaType, limit } = req.query;
  let items = mockInstagramPosts.items;

  if (mediaType) {
    items = items.filter(p => p.mediaType.toLowerCase() === mediaType.toLowerCase());
  }
  if (limit) {
    items = items.slice(0, parseInt(limit));
  }

  res.json({
    kind: "instagram#mediaListResponse",
    pageInfo: { totalResults: items.length, resultsPerPage: items.length },
    items: items
  });
});

// 3. Single Instagram Post
app.get('/instagram/v1/posts/:id', (req, res) => {
  const post = mockInstagramPosts.items.find(p => p.id === req.params.id);
  if (!post) {
    return res.status(404).json({ error: "Instagram post not found" });
  }
  res.json(post);
});

// ============================================
// FACEBOOK GRAPH API v1 ENDPOINTS
// ============================================

// 1. Facebook Page Details
app.get('/facebook/v1/page', (req, res) => {
  res.json(mockFacebookPage);
});

// 2. Facebook Feed & Videos
app.get('/facebook/v1/posts', (req, res) => {
  const { type, limit } = req.query;
  let items = mockFacebookPosts.items;

  if (type) {
    items = items.filter(p => p.type.toLowerCase() === type.toLowerCase());
  }
  if (limit) {
    items = items.slice(0, parseInt(limit));
  }

  res.json({
    kind: "facebook#feedListResponse",
    pageInfo: { totalResults: items.length, resultsPerPage: items.length },
    items: items
  });
});

// 3. Single Facebook Post
app.get('/facebook/v1/posts/:id', (req, res) => {
  const post = mockFacebookPosts.items.find(p => p.id === req.params.id);
  if (!post) {
    return res.status(404).json({ error: "Facebook post not found" });
  }
  res.json(post);
});

// ============================================
// GENERIC FUTURE PLATFORM HANDLER (TikTok, Twitter, Threads, etc.)
// ============================================
app.get('/:platform/v1/posts', (req, res) => {
  const platform = req.params.platform.toLowerCase();
  if (platform === 'instagram') return res.json(mockInstagramPosts);
  if (platform === 'facebook') return res.json(mockFacebookPosts);
  if (platform === 'youtube') return res.json(mockVideos);

  const platName = platform.charAt(0).toUpperCase() + platform.slice(1);
  const futurePosts = [
    {
      id: `${platform}_post_1`,
      title: `Top Viral Post on ${platName} 🚀`,
      description: `CreatorIQ automated analytics and performance tracking for ${platName}.`,
      platform: platform,
      views: 54000,
      likes: 4200,
      comments: 380,
      shares: 950,
      engagement_rate: 10.24,
      duration: "PT00M45S",
      thumbnail_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&auto=format&fit=crop&q=80"
    },
    {
      id: `${platform}_post_2`,
      title: `Scaling Audience Reach & Engagement on ${platName} ✨`,
      description: `Deep-dive engagement tactics and audience retention metrics.`,
      platform: platform,
      views: 38500,
      likes: 2900,
      comments: 240,
      shares: 610,
      engagement_rate: 9.74,
      duration: "PT00M30S",
      thumbnail_url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=480&auto=format&fit=crop&q=80"
    }
  ];

  res.json({
    kind: `${platform}#mediaListResponse`,
    pageInfo: { totalResults: futurePosts.length, resultsPerPage: futurePosts.length },
    items: futurePosts
  });
});

app.get('/:platform/v1/profile', (req, res) => {
  const platform = req.params.platform.toLowerCase();
  if (platform === 'instagram') return res.json(mockInstagramProfile);
  if (platform === 'facebook') return res.json(mockFacebookPage);

  const platName = platform.charAt(0).toUpperCase() + platform.slice(1);
  res.json({
    kind: `${platform}#profileResponse`,
    user: {
      username: `creator.${platform}`,
      fullName: `CreatorIQ ${platName} Official`,
      statistics: {
        followersCount: 25000,
        totalViews: 145000,
        averageEngagementRate: 8.5
      }
    }
  });
});

// ============================================
// CREATOR INCOME & REVENUE ANALYTICS ENDPOINTS
// ============================================

// 1. Unified Complete Income Payload (Single-call dashboard load)
app.get('/income/all', (req, res) => {
  res.json({
    summary: mockIncomeSummary,
    streams: mockIncomeByStream,
    platforms: mockIncomeByPlatform,
    trends: mockMonthlyIncomeTrend,
    topContent: mockTopEarningContent,
    payouts: mockRecentPayouts,
    sponsorships: mockSponsorshipDeals
  });
});

// 2. Income Summary KPIs
app.get('/income/summary', (req, res) => {
  res.json({
    summary: mockIncomeSummary,
    streams: mockIncomeByStream,
    platforms: mockIncomeByPlatform
  });
});

// 3. 12-Month Monthly Revenue Trends
app.get('/income/trends', (req, res) => {
  res.json({
    currency: mockIncomeSummary.currency,
    currencySymbol: mockIncomeSummary.currencySymbol,
    trends: mockMonthlyIncomeTrend
  });
});

// 4. Revenue Streams Breakdown
app.get('/income/streams', (req, res) => {
  res.json({
    streams: mockIncomeByStream
  });
});

// 5. Income by Platform
app.get('/income/platforms', (req, res) => {
  res.json({
    platforms: mockIncomeByPlatform
  });
});

// 6. Recent Payouts & Settlement Schedule
app.get('/income/payouts', (req, res) => {
  res.json({
    pendingPayout: mockIncomeSummary.pendingPayout,
    nextPayoutDate: mockIncomeSummary.nextPayoutDate,
    payouts: mockRecentPayouts
  });
});

// 7. Brand Sponsorship Deals
app.get('/income/sponsorships', (req, res) => {
  res.json({
    activeSponsorships: mockIncomeSummary.activeSponsorships,
    sponsorships: mockSponsorshipDeals
  });
});

// 8. Top Earning Content
app.get('/income/top-content', (req, res) => {
  res.json({
    topContent: mockTopEarningContent
  });
});

// ============================================
// ROOT & SERVER START
// ============================================
app.get('/', (req, res) => {
  res.redirect('/health');
});

app.listen(PORT, () => {
  console.log(`✅ Multi-Platform Mock API running on http://localhost:${PORT}`);
  console.log(`📺 YouTube:   http://localhost:${PORT}/youtube/v3/videos?chart=mostPopular`);
  console.log(`📸 Instagram: http://localhost:${PORT}/instagram/v1/posts`);
  console.log(`👥 Facebook:  http://localhost:${PORT}/facebook/v1/posts`);
  console.log(`💰 Income:    http://localhost:${PORT}/income/all`);
  console.log(`🔍 Health:    http://localhost:${PORT}/health`);
});
