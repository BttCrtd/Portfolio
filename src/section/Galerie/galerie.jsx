import { Link } from "react-router-dom";
import { projectsData } from "../../data/projetsData";

function Galerie() {
  return (
    <section className="galerie">
      <div className="grid-container">
        {projectsData.map((project, index) => (
          <Link
            to="/projet"
            key={index}
            state={{
              imagesGallery: project.gallery,
              title: project.title,
              link: project.link,
              number: project.number,
              info: project.info,
              presentationText: project.description,
            }}
            className="grid-item"
          >
            <img
              src={project.cover}
              alt={`Image de couverture du projet ${project.title}`}
            />
            <div className="filter"></div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Galerie;
