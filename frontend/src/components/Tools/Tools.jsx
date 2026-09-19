import React from "react";
import "./Tools.css";

// استيراد أيقونات الأدوات
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiPostman, SiFigma, SiDocker } from "react-icons/si";


const tools = [
    {
        name: "VS Code",
        icon: <VscVscode />,
        description: "Code Editor"
    },
    {
        name: "Git",
        icon: <FaGitAlt />,
        description: "Version Control"
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        description: "Code Hosting"
    },
    {
        name: "Postman",
        icon: <SiPostman />,
        description: "API Testing"
    },
    {
        name: "Figma",
        icon: <SiFigma />,
        description: "UI Design"
    },
    {
        name: "Docker",
        icon: <SiDocker />,
        description: "Containers"
    }
];


const Tools = () => {

    return (

        <section className="tools-section">

            {/* عنوان القسم */}
            <div className="tools-header">

                <span>MY TOOLS</span>

                <h2>
                    الأدوات التي أستخدمها
                </h2>

                <p>
                    مجموعة من الأدوات التي أستخدمها
                    في تطوير وتصميم وإدارة المشاريع.
                </p>

            </div>


            {/* جميع الأدوات */}
            <div className="tools-container">

                {tools.map((tool, index) => (

                    <div
                        className="tool-card"
                        key={index}
                    >

                        {/* أيقونة الأداة */}
                        <div className="tool-icon">
                            {tool.icon}
                        </div>


                        {/* معلومات الأداة */}
                        <div className="tool-info">

                            <h3>
                                {tool.name}
                            </h3>

                            <p>
                                {tool.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );
};


export default Tools;