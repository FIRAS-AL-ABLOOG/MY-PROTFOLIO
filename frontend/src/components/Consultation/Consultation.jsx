import React, { useState } from "react";
import "./Consultation.css";

const Consultation = () => {
  // فتح وإغلاق النافذة
  const [isOpen, setIsOpen] = useState(false);

  // بيانات الفورم
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    consultationType: "",
    details: "",
  });

  // حالة الإرسال
  const [isLoading, setIsLoading] = useState(false);

  // رسالة النجاح أو الخطأ
  const [message, setMessage] = useState("");

  // فتح وإغلاق الـ Modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
    setMessage("");
  };

  // تغيير بيانات الحقول
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // إرسال الاستشارة
  const handleSubmit = async (e) => {
    e.preventDefault();

    // منع الضغط أكثر من مرة أثناء الإرسال
    if (isLoading) return;

    setIsLoading(true);
    setMessage("");

    console.log("🚀 بدأ إرسال الاستشارة");
    console.log("📦 البيانات:", formData);

    try {
      const response = await fetch(
        "https://my-protfolio-theta-beige.vercel.app/api/consultations",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      console.log("📡 حالة الطلب:", response.status);

      const data = await response.json();

      console.log("📨 رد الـ Backend:", data);

      // إذا كان هناك خطأ من الـ Backend
      if (!response.ok) {
        throw new Error(
          data.message || "حدث خطأ أثناء إرسال الطلب"
        );
      }

      // نجاح الإرسال
      setMessage("تم إرسال طلب الاستشارة بنجاح ✅");

      // تفريغ الحقول
      setFormData({
        name: "",
        phone: "",
        consultationType: "",
        details: "",
      });

      // إغلاق النافذة بعد ثانيتين
      setTimeout(() => {
        setIsOpen(false);
        setMessage("");
      }, 2000);
    } catch (error) {
      console.error("❌ خطأ في إرسال الاستشارة:", error);

      // إظهار الخطأ للمستخدم
      setMessage(
        error.message ||
          "حدث خطأ أثناء إرسال الاستشارة ❌"
      );
    } finally {
      // إيقاف حالة التحميل
      setIsLoading(false);
    }
  };

  return (
    <div className="consultation-container">

      {/* البطاقة الرئيسية */}
      <div className="sendtome">

        <h2>استشارة برمجية</h2>

        <p>
          احصل على استشارة برمجية تخص مشروعك، تحديد التكلفة،
          والتقنيات المناسبة.
        </p>

        <button
          type="button"
          className="open-modal-btn"
          onClick={toggleModal}
        >
          طلب استشارة الآن
        </button>

      </div>

      {/* النافذة المنبثقة */}
      {isOpen && (
        <div
          className="modal-overlay"
          onClick={toggleModal}
        >

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* زر الإغلاق */}
            <button
              type="button"
              className="close-btn"
              onClick={toggleModal}
            >
              &times;
            </button>

            <h3>طلب استشارة برمجية</h3>

            <form
              className="consultation-form"
              onSubmit={handleSubmit}
            >

              {/* الاسم */}
              <label>الاسم الكامل:</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="أدخل اسمك"
                required
              />

              {/* رقم الهاتف */}
              <label>رقم الهاتف:</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="09xxxxxxxx"
                required
              />

              {/* نوع الاستشارة */}
              <label>نوع الاستشارة:</label>

              <select
                name="consultationType"
                value={formData.consultationType}
                onChange={handleChange}
                required
              >
                <option value="">
                  اختر نوع الاستشارة...
                </option>

                <option value="e-commerce">
                  تكلفة متجر إلكتروني
                </option>

                <option value="web-app">
                  تطبيق ويب خاص
                </option>

                <option value="mobile-app">
                  تطبيق اندرويد
                </option>

                <option value="other">
                  استشارة عامة
                </option>
              </select>

              {/* التفاصيل */}
              <label>تفاصيل إضافية:</label>

              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="اكتب استفسارك هنا..."
                rows="3"
              />

              {/* رسالة النتيجة */}
              {message && (
                <p className="consultation-message">
                  {message}
                </p>
              )}

              {/* زر الإرسال */}
              <button
                type="submit"
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading
                  ? "جاري الإرسال..."
                  : "إرسال الطلب"}
              </button>

            </form>

          </div>

        </div>
      )}

    </div>
  );
};

export default Consultation;
