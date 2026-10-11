# 🚀 CSI SBC • Cloud Deployment Demo

A simple, attractive full-stack demo showcasing:
- **Frontend** deployed on **Vercel**
- **Backend API** deployed on **Render** (using Cloud Environment Variables)

---

## 📁 Simple Project Structure

```text
├── backend/
│   ├── .env.example
│   ├── package.json
│   └── server.js      <-- only 20 lines of simple Express code!
├── frontend/
│   ├── index.html     <-- Attractive UI + simple fetch script
│   ├── style.css      <-- Modern styling
│   └── vercel.json    <-- Vercel config
├── render.yaml        <-- Render Blueprint with SECRET_KEY
├── vercel.json        <-- Root Vercel config
└── README.md
```

---

## 🔐 The Environment Variable

In `backend/server.js`:
```javascript
// Reads SECRET_KEY from Render environment (with a local fallback)
const SECRET_KEY = process.env.SECRET_KEY || "Local-Secret-123";
```

In the Render Dashboard:
- **Key**: `SECRET_KEY`
- **Value**: `CSI-Secret-Key-From-Render-Cloud`

---

## 🚀 Live Demo Steps (Vercel First ➜ Render Second)

### 1. Deploy Frontend on Vercel
1. Push this repository to GitHub.
2. In [vercel.com](https://vercel.com): Click **Add New...** ➜ **Project** ➜ Select your repo.
3. Set **Root Directory**: `frontend` and click **Deploy**.
4. Open your live Vercel URL.

---

### 2. Deploy Backend on Render (With Environment Variable)
1. In [render.com](https://render.com): Click **New +** ➜ **Web Service** ➜ Select your repo.
2. Settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: `Free`
3. In **Environment Variables**:
   - Add **Key**: `SECRET_KEY`
   - Add **Value**: `CSI-Secret-Key-From-Render-Cloud`
4. Click **Deploy Web Service** and copy your live Render URL when status says **Live**.

---

### 3. Connect & Show Live
1. Open your live **Vercel website**.
2. In the **Backend API URL** box, paste your **Render URL** (e.g. `https://your-backend.onrender.com`).
3. Click **"🚀 Test Backend Connection"**.
4. You'll see:
   - **Message**: `"CSI SBC Backend is running successfully!"`
   - **Render Secret Key**: `"CSI-Secret-Key-From-Render-Cloud"`

> **Simple Explanation for Audience**:  
> *"The secret key was never hardcoded in our GitHub repository. Render injected it safely via environment variables at runtime!"*
