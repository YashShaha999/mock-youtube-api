# 📺 Mock YouTube API

Standalone Mock YouTube Data API v3 microservice for the **CreatorIQ** platform.

## 🚀 Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/health` | GET | Health check status |
| `/youtube/v3/channels?id=UC123456789` | GET | Channel metadata & subscribers |
| `/youtube/v3/videos?chart=mostPopular` | GET | Popular videos list with views/likes |
| `/youtube/v3/videos?id=video1` | GET | Single video details |
| `/youtube/v3/search?q=react` | GET | Search mock video catalogue |

## 🛠️ Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Run server
npm start
```

Runs at `http://localhost:3000`.

## ☁️ Deploy to Render

Configured with `render.yaml` for 1-click cloud deployment.
