const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

// ---------------- ROUTE IMPORTS ----------------
const superAdminUserRoutes = require("./routes/admin/superAdminUserRoutes");
const enterpriseRoutes = require("./routes/enterprise/enterpriseRoutes");
const userRoutes = require("./routes/enterprise/userRoutes");
const customerRoutes = require("./routes/consumer/customerRoutes");
const authRoutes = require("./routes/admin/authRoutes");

const app = express();

// ---------------- MIDDLEWARE ----------------
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-tenant-name"],
  })
);

// ---------------- ROUTE MOUNTING ----------------
app.use("/api/auth", authRoutes);
app.use("/api/admin/superadminusers", superAdminUserRoutes);
app.use("/api/enterprise/enterprises", enterpriseRoutes);
app.use("/api/enterprise/users", userRoutes);
app.use("/api/consumer/customers", customerRoutes);

// ---------------- HEALTH CHECK ----------------
app.get("/", (req, res) =>
  res.status(200).send("✅ Multi-tenant Marketplace API running")
);

// ---------------- ERROR HANDLING ----------------
app.use((req, res) => res.status(404).json({ error: "Route not found" }));
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// ---------------- START SERVER ----------------
const PORT = process.env.PORT || 5006;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
