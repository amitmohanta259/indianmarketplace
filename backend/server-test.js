const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  console.log("✅ /test route hit");
  res.json({ message: "Server is working" });
});

const PORT = 5006;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
