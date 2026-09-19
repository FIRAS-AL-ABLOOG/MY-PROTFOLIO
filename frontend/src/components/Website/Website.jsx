import React from "react";
import "./Website.css";

import {
  FiExternalLink,
  FiGithub,
  FiArrowLeft,
} from "react-icons/fi";


// ======================================================
// مشاريع المواقع
// ======================================================

const websites = [
  {
    id: 1,
    title: "مطعم",
    description:
      "موقع مطعم احترافي لعرض الوجبات والمنيو والأسعار مع تصميم مناسب للموبايل.",
    image: "/images/restaurant.png",
    technologies: ["React.js" , "CSS"],
    demo: "https://restaurant-la-casa-two.vercel.app/",
    github: "https://github.com/FIRAS-AL-ABLOOG/restaurant-LA-CASA",
  },

  {
    id: 2,
    title: "موقع عيادة أطفال",
    description:
      "موقع عيادة كامل ومجهز بمتجر صغير خاص بطبيب بل اضافة لصفحة منشورات ",
    image: "/images/clinic.png",
    technologies: ["React", "CSS", "JavaScript"],
    demo: "https://pediatricclinic-ten.vercel.app/",
    github: "https://github.com/FIRAS-AL-ABLOOG/PediatricClinic",
  },

  {
    id: 3,
    title: "متجر إلكتروني",
    description:
      "واجهة متجر إلكتروني لعرض المنتجات والتصنيفات وتفاصيل المنتجات.",
    image: "/images/store.png",
    technologies: ["React.js", "CSS"],
    demo: "https://store-react-js.vercel.app/",
    github: "https://github.com/FIRAS-AL-ABLOOG/store-react.js",
  },

  // {
  //   id: 4,
  //   title: "موقع شركة",
  //   description:
  //     "موقع تعريفي لشركة يعرض الخدمات والمشاريع ومعلومات التواصل.",
  //   image: "/images/company.png",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   demo: "https://example.com",
  //   github: "https://github.com/",
  // },

  // {
  //   id: 5,
  //   title: "موقع خدمات",
  //   description:
  //     "موقع لعرض الخدمات بطريقة بسيطة وحديثة مع تجربة استخدام متجاوبة.",
  //   image: "/images/services.png",
  //   technologies: ["React", "CSS"],
  //   demo: "https://example.com",
  //   github: "https://github.com/",
  // },

  {
    id: 6,
    title: "portfolio ",
    description:
      "معرض أعمال قديم ببدايات التطوير",
    image: "/images/landing.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://firas-al-abloog.github.io/",
    github: "https://github.com/FIRAS-AL-ABLOOG",
  },
];


// ======================================================
// الصفحة
// ======================================================

const Websites = () => {
  return (
    <main className="websites-page">

      {/* ==========================================
          Header
          ========================================== */}

      <section className="websites-header">

        <div className="websites-small-title">
          MY WEBSITES
        </div>

        <h1>
          مشاريعي
          <span> الإلكترونية</span>
        </h1>

        <p>
          مجموعة من المواقع الإلكترونية التي قمت بتطويرها
          وتصميم واجهاتها وتجربة استخدامها.
        </p>

      </section>


      {/* ==========================================
          Projects
          ========================================== */}

      <section className="websites-projects">

        {websites.map((project) => (

          <article
            className="website-card"
            key={project.id}
          >

            {/* صورة المشروع */}

            <div className="website-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="website-image-overlay">
                <span>
                  Website
                </span>
              </div>

            </div>


            {/* محتوى الكرت */}

            <div className="website-content">

              <h2>
                {project.title}
              </h2>

              <p className="website-description">
                {project.description}
              </p>


              {/* التقنيات */}

              <div className="website-technologies">

                {project.technologies.map((technology, index) => (

                  <span key={index}>
                    {technology}
                  </span>

                ))}

              </div>


              {/* الأزرار */}

              <div className="website-buttons">

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website-demo"
                >
                  مشاهدة الموقع
                  <FiExternalLink />
                </a>


                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website-github"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>

              </div>

            </div>

          </article>

        ))}

      </section>


      {/* ==========================================
          Bottom
          ========================================== */}

      <div className="websites-bottom">

        <p>
          هل تريد موقعًا إلكترونيًا لمشروعك؟
        </p>

<a
  href={`https://wa.me/963951427056?text=${encodeURIComponent(
    "مرحبا فراس 🫶 فيني اتواصل معك بخصوص برنامج ويب"
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  تواصل معي
  <FiArrowLeft />
</a>

      </div>

    </main>
  );
};

export default Websites;