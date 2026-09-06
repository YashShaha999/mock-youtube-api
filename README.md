# 📺 Mock YouTube API

Standalone Mock YouTube Data API v3 microservice for the **CreatorIQ** platform.

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
Live URL: `https://mock-youtube-api.onrender.com/`
