# 🌐 Mock Social Media API (YouTube, Instagram, Facebook)

Standalone Mock Social Media Data API (YouTube, Instagram, Facebook) microservice for the **CreatorIQ** platform.

## 🚀 Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/health` | GET | Health check status and endpoint list |
| `/youtube/v3/channels?id=UC123456789` | GET | Channel metadata, banner, views & subscribers |
| `/youtube/v3/videos?chart=mostPopular` | GET | List of 12 rich mock videos with stats & durations |
| `/youtube/v3/videos?id=video1` | GET | Single or multiple comma-separated video details |
| `/youtube/v3/playlists?channelId=UC123456789` | GET | Mock channel playlists |
| `/youtube/v3/commentThreads?videoId=video1` | GET | Mock comment threads and replies |
| `/youtube/v3/search?q=react` | GET | Search mock video catalogue by title, tag, or description |
| `/instagram/v1/profile` | GET | Mock Instagram creator profile & stats |
| `/instagram/v1/posts` | GET | Mock Instagram posts & reels |
| `/facebook/v1/page` | GET | Mock Facebook creator page data |
| `/facebook/v1/posts` | GET | Mock Facebook feed posts |
| `/income/all` | GET | **Complete unified creator income & revenue payload** |
| `/income/summary` | GET | Revenue summary KPIs, streams & platform breakdown |
| `/income/trends` | GET | 12-month monthly earnings trajectory |
| `/income/streams` | GET | Revenue breakdown by income stream |
| `/income/platforms` | GET | Income & RPM breakdown across social platforms |
| `/income/payouts` | GET | Payout history, next settlement date & amount |
| `/income/sponsorships` | GET | Active & past brand sponsorship contracts |
| `/income/top-content` | GET | Top revenue-generating posts & videos |

## 🛠️ Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Run server
npm start
```

Runs at `http://localhost:3000`.

## ☁️ Deploy to Render

Configured with `render.yaml` for automatic cloud deployment upon pushing to `main`.
GitHub Repo: `https://github.com/YashShaha999/mock-api`
Live URL: `https://mock-api.onrender.com/` (or `https://mock-youtube-api.onrender.com/`)
