import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">

      {/* عنوان القسم */}
      <h1>معرض أعمالي</h1>

      {/* أزرار المشاريع */}
      <div className="projects-buttons">

        {/* Website */}
         <Link to="/website" className="project-button">
          Website
          </Link>

       

        {/* BackEnd */}
        <Link to="/backend" className="project-button">
          BackEnd
        </Link>

      </div>

    </div>
  );
};

export default Projects;