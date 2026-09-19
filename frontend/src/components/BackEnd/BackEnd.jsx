import React from "react";
import "./BackEnd.css";

const backendSkills = [
  {
    title: "Node.js",
    description:
      "بيئة تشغيل تسمح بتشغيل JavaScript خارج المتصفح وبناء تطبيقات Backend سريعة.",
    type: "node",
  },
  {
    title: "Event Loop",
    description:
      "نظام يسمح لـ Node.js بالتعامل مع عدة عمليات بدون إيقاف تنفيذ البرنامج.",
    type: "event",
  },
  {
    title: "Express.js",
    description:
      "إطار خفيف لبناء REST APIs والـ Routes والـ Middleware بسهولة.",
    type: "express",
  },
  {
    title: "Authentication",
    description:
      "نظام للتحقق من هوية المستخدم وتسجيل الدخول وحماية الحسابات.",
    type: "auth",
  },
  {
    title: "Authorization",
    description:
      "تحديد الصلاحيات التي يمكن لكل مستخدم الوصول إليها داخل التطبيق.",
    type: "authorization",
  },
  {
    title: "REST API",
    description:
      "طريقة منظمة لربط الواجهة الأمامية بالـ Backend باستخدام HTTP.",
    type: "api",
  },
  {
    title: "Middleware",
    description:
      "وظائف تمر بين الطلب والاستجابة لتنفيذ التحقق أو المعالجة.",
    type: "middleware",
  },
  {
    title: "MongoDB",
    description:
      "قاعدة بيانات NoSQL لتخزين البيانات بطريقة مرنة وسريعة.",
    type: "database",
  },
  {
    title: "Mongoose",
    description:
      "مكتبة تساعد Node.js على التعامل مع MongoDB وإنشاء Models منظمة.",
    type: "mongoose",
  },
  {
    title: "JWT",
    description:
      "طريقة آمنة نسبياً لإرسال معلومات المستخدم داخل Token بعد تسجيل الدخول.",
    type: "jwt",
  },
  {
    title: "Async / Await",
    description:
      "طريقة سهلة للتعامل مع العمليات غير المتزامنة مثل قواعد البيانات والـ APIs.",
    type: "async",
  },
  {
    title: "HTTP",
    description:
      "البروتوكول الأساسي الذي يتم من خلاله إرسال واستقبال الطلبات بين العميل والخادم.",
    type: "http",
  },
];


/* =========================================================
   رسم الكرت
========================================================= */

const SkillVisual = ({ type }) => {

  switch (type) {

    case "node":
      return (
        <div className="visual node-visual">
          <div className="node-circle">JS</div>

          <div className="node-line line-1"></div>
          <div className="node-line line-2"></div>
          <div className="node-line line-3"></div>

          <span className="node-dot dot-1"></span>
          <span className="node-dot dot-2"></span>
          <span className="node-dot dot-3"></span>
        </div>
      );


    case "event":
      return (
        <div className="visual event-visual">

          <div className="event-center">
            EVENT
          </div>

          <div className="event-circle event-1">
            I/O
          </div>

          <div className="event-circle event-2">
            API
          </div>

          <div className="event-circle event-3">
            DB
          </div>

          <div className="event-arrow arrow-1"></div>
          <div className="event-arrow arrow-2"></div>
          <div className="event-arrow arrow-3"></div>

        </div>
      );


    case "express":
      return (
        <div className="visual express-visual">

          <div className="express-box">
            <span>GET</span>
            <span>/users</span>
          </div>

          <div className="express-arrow">
            →
          </div>

          <div className="express-server">
            EXPRESS
          </div>

          <div className="express-arrow">
            →
          </div>

          <div className="express-box response">
            JSON
          </div>

        </div>
      );


    case "auth":
      return (
        <div className="visual auth-visual">

          <div className="lock">

            <div className="lock-top"></div>

            <div className="lock-body">
              <span>✓</span>
            </div>

          </div>

          <div className="auth-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      );


    case "authorization":
      return (
        <div className="visual authorization-visual">

          <div className="permission">
            <span>USER</span>

            <div className="permission-arrow">
              →
            </div>

            <strong>ROLE</strong>

            <div className="permission-arrow">
              →
            </div>

            <span>ACCESS</span>
          </div>

        </div>
      );


    case "api":
      return (
        <div className="visual api-visual">

          <div className="api-client">
            CLIENT
          </div>

          <div className="api-arrow">
            <span>REQUEST</span>
            →
          </div>

          <div className="api-server">
            API
          </div>

          <div className="api-arrow">
            ←
            <span>RESPONSE</span>
          </div>

          <div className="api-client">
            JSON
          </div>

        </div>
      );


    case "middleware":
      return (
        <div className="visual middleware-visual">

          <div className="middleware-item">
            REQUEST
          </div>

          <div className="middleware-arrow">
            ↓
          </div>

          <div className="middleware-item active">
            MIDDLEWARE
          </div>

          <div className="middleware-arrow">
            ↓
          </div>

          <div className="middleware-item">
            RESPONSE
          </div>

        </div>
      );


    case "database":
      return (
        <div className="visual database-visual">

          <div className="database-cylinder">

            <div className="database-top">
              DB
            </div>

            <div className="database-body">
              MongoDB
            </div>

            <div className="database-bottom"></div>

          </div>

        </div>
      );


    case "mongoose":
      return (
        <div className="visual mongoose-visual">

          <div className="mongoose-model">
            MODEL
          </div>

          <div className="mongoose-arrow">
            →
          </div>

          <div className="mongoose-db">
            MongoDB
          </div>

        </div>
      );


    case "jwt":
      return (
        <div className="visual jwt-visual">

          <div className="jwt-token">

            <span className="jwt-red">
              HEADER
            </span>

            <span className="jwt-purple">
              PAYLOAD
            </span>

            <span className="jwt-blue">
              SIGN
            </span>

          </div>

        </div>
      );


    case "async":
      return (
        <div className="visual async-visual">

          <div className="async-code">
            <span>await</span>
          </div>

          <div className="async-arrow">
            ↓
          </div>

          <div className="async-result">
            RESULT
          </div>

        </div>
      );


    case "http":
      return (
        <div className="visual http-visual">

          <div className="http-method">
            POST
          </div>

          <div className="http-arrow">
            →
          </div>

          <div className="http-server">
            SERVER
          </div>

          <div className="http-arrow">
            →
          </div>

          <div className="http-response">
            200
          </div>

        </div>
      );


    default:
      return null;
  }
};


/* =========================================================
   الصفحة
========================================================= */

const BackEnd = () => {

  return (

    <main className="backend-page">

      {/* العنوان */}

      <header className="backend-header">

        <span className="backend-small-title">
          BACKEND DEVELOPMENT
        </span>

        <h1>
          Backend
        </h1>

        <div className="backend-title-line"></div>

        <p>
          مجموعة من أهم تقنيات ومفاهيم تطوير الـ Backend
        </p>

      </header>


      {/* تعريف Node Runtime */}

      <section className="runtime-section">

        <div className="runtime-line"></div>

        <div className="runtime-content">

          <span className="runtime-number">
            01
          </span>

          <h2>
            نحن نستخدم
            <strong> Node.js Runtime </strong>
            في الـ Backend
          </h2>

          <p>
            باستخدام Node.js نستطيع تشغيل JavaScript على الخادم
            وبناء APIs وتطبيقات Backend تتعامل مع قواعد البيانات
            والطلبات والعمليات المختلفة.
          </p>

        </div>

      </section>


      {/* المعرض */}

      <section className="backend-gallery">

        {backendSkills.map((skill, index) => (

          <article
            className="backend-card"
            key={skill.title}
          >

            {/* رقم الكرت */}

            <span className="card-number">
              {String(index + 1).padStart(2, "0")}
            </span>


            {/* الرسم */}

            <div className="card-visual-wrapper">

              <SkillVisual type={skill.type} />

            </div>


            {/* المحتوى */}

            <div className="card-content">

              <h3>
                {skill.title}
              </h3>

              <p>
                {skill.description}
              </p>

            </div>

          </article>

        ))}

      </section>

    </main>

  );
};

export default BackEnd;