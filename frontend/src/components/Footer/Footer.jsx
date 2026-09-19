import React from "react";
import './Footer.css'
const Footer = () => {
    return (
        <footer className="Footer">

            {/* معلومات التواصل */}
            <div className="footer-section">
                <h2>معلومات التواصل</h2>

                <p>📍 الموقع: دمشق، سوريا</p>
                <p>💻 برمجة وتطوير مواقع وتطبيقات الويب</p>
                <p>📱 للتواصل والاستفسار يمكنكم التواصل معنا عبر وسائل التواصل الاجتماعي</p>
            </div>


            {/* أسعار الاستضافة */}
            <div className="footer-section">
                <h2>أسعار تقريبية للاستضافة</h2>

                <ul>
                    <li>
                        استضافة مشتركة بسيطة:
                        <strong> $30 - $60 سنوياً</strong>
                    </li>

                    <li>
                        استضافات تدعم تشغيل بيئات العمل:
                        <strong> $60 - $120 سنوياً</strong>
                    </li>

                    <li>
                        تكلفة الدومين تختلف عن تكلفة الاستضافة،
                        ويتم الاتفاق عليها بعد تحديد اسم ونوع المشروع.
                    </li>
                </ul>

                <p className="footer-note">
                    💡 الأسعار تقريبية وقد تختلف حسب شركة الاستضافة
                    ومتطلبات المشروع.
                </p>
            </div>


            {/* خدماتنا */}
            <div className="footer-section">
                <h2>خدماتنا</h2>

                <ul>
                    <li>🌐 تطوير مواقع الويب</li>
                    <li>⚛️ تطوير تطبيقات React</li>
                    <li>🖥️ تطوير Backend وواجهات API</li>
                    <li>🗄️ تصميم وربط قواعد البيانات</li>
                    <li>📱 تصميم مواقع متجاوبة مع الهاتف</li>
                    <li>🔧 صيانة وتطوير المشاريع</li>
                </ul>
            </div>


            {/* مواقع التواصل */}
            <div className="footer-section">
                <h2>تابعنا</h2>

                <div className="social-links">

                    <a
                        href="
                             https://www.facebook.com/mohamad.firas.740652/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>

                    <a
                        href="https://www.instagram.com/firas_alabloog/?__pwa=1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>

                    {/* <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a> */}

                 

                </div>
            </div>


            {/* الجزء السفلي */}
            <div className="footer-bottom">

                <h2>نحوّل أفكارك إلى واقع رقمي 🚀</h2>

                <p>
                    نقدم حلولاً برمجية عصرية بتصميم احترافي وأداء عالي،
                    لمساعدتك على الدخول إلى العالم الرقمي بثقة.
                </p>

                <p>
                    © {new Date().getFullYear()} Firas ALABLOOG
                    {" "}— جميع الحقوق محفوظة.
                </p>

            </div>

        </footer>
    );
};

export default Footer;