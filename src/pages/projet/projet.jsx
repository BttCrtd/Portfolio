import { useLocation } from "react-router-dom";
import SlideShow from "../../components/SlideShow/SlideShow";

function Projet() {
  /*Récupération des données  */
  const location = useLocation();
  const {
    title,
    link,
    number,
    info,
    imagesGallery,
    presentation,
    presentationText,
    descriptionText,
  } = location.state || {};

  /*Structure de la page Projet */
  return (
    <section className="project">
      <div className="title">
        <h1 tabIndex="6">{title}</h1>
        <div className="square">{number}</div>
      </div>
      <div className="info">
        <div className="info-project">
          {info &&
            info.map((tech, index) => (
              <div key={index} className="info-tags" tabIndex={index + 7}>
                {tech}
              </div>
            ))}
          <div className="link">
            <a href={link} tabIndex="14">
              Lien vers le code
            </a>
          </div>
        </div>
      </div>
      <div className="info-and-img">
        <div>
          <p className="main-presentation" tabIndex="15">
            {presentation}
          </p>
          <p className="objectives-presentation">{presentationText}</p>
        </div>
        <SlideShow pictures={imagesGallery} title={title} />
      </div>
      <div className="realizations-presentation">
        <p>{descriptionText}</p>
      </div>
    </section>
  );
}

export default Projet;
