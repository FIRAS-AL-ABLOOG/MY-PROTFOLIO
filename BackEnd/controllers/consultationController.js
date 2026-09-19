const Consultation = require("../models/Consultation");

// إرسال استشارة جديدة
const createConsultation = async (req, res) => {
  try {
    // أخذ البيانات القادمة من React
    const { name, phone, consultationType, details } = req.body;

    // التأكد من الحقول الأساسية
    if (!name || !phone || !consultationType) {
      return res.status(400).json({
        status: "error",
        message: "الاسم ورقم الهاتف ونوع الاستشارة مطلوبة",
      });
    }

    // إنشاء الاستشارة
    const consultation = await Consultation.create({
      name,
      phone,
      consultationType,
      details,
    });

    // إرسال نجاح العملية
    res.status(201).json({
      status: "success",
      message: "تم إرسال طلب الاستشارة بنجاح",
      consultation,
    });
  } catch (error) {
    console.error("Create consultation error:", error);

    res.status(500).json({
      status: "error",
      message: "حدث خطأ أثناء إرسال الاستشارة",
    });
  }
};

module.exports = {
  createConsultation,
};