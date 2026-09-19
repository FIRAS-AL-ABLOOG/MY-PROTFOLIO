const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const consultationRoutes = require("./routes/consultationRoutes");

const app = express();

// السماح للـ Frontend بالتواصل مع الـ Backend
app.use(cors());

// استقبال البيانات بصيغة JSON
app.use(express.json());


// Routes الخاصة بالاستشارات
app.use("/api/consultations", consultationRoutes);

// الاتصال بقاعدة البيانات
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((error) => {
    console.error("MongoDB connection failed ❌");
    console.error(error.message);
  });

// اختبار السيرفر
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Portfolio Backend is running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Server available on network port ${PORT}`);
});