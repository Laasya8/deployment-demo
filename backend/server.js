const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Environment variable from Render (with local fallback)
const SECRET_KEY = process.env.SECRET_KEY || "Local-Secret-123";

// Allow requests from frontend (Vercel)
app.use(cors());

// Simple API route
app.get("/api", (req, res) => {
  res.json({
    message: "CSI SBC Backend is running successfully!",
    secretKey: SECRET_KEY,
    deployedOn: "Render"
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
