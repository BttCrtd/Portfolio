import { Link } from "react-router-dom";
import { projectsData } from "../../data/projetsData";
import photoPlus from "../../assets/Cover/couverture_plus.jpg";

function Galerie() {
  const isOdd = projectsData.length % 2 !== 0;

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
              presentation: project.presentationDetail,
              presentationText: project.presentation,
              descriptionText: project.description,
            }}
            className="grid-item"
            tabIndex={index + 13}
          >
            <img
              src={project.cover}
              alt={`Image de couverture du projet ${project.title}`}
            />
            <div className="filter"></div>
          </Link>
        ))}
        {isOdd && (
          <Link to="/contact" className="grid-item-plus">
            <img
              src={photoPlus}
              alt="Et si votre projet devenait notre projet ?"
            />
            <div className="filter-plus">
              <p>Et si ...</p>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}

export default Galerie;
