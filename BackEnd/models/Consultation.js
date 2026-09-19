const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
  {
    // اسم الشخص الذي أرسل الاستشارة
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // رقم الهاتف
    phone: {
      type: String,
      required: true,
      trim: true,
    },

    // نوع الاستشارة
    consultationType: {
      type: String,
      required: true,
      enum: ["e-commerce", "web-app", "mobile-app", "other"],
    },

    // التفاصيل الإضافية
    details: {
      type: String,
      trim: true,
      default: "",
    },

    // حالة الطلب
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true, // ينشئ createdAt و updatedAt تلقائياً
  }
);

module.exports = mongoose.model("Consultation", consultationSchema);