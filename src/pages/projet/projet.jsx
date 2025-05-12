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
    <section className="projet">
      <div className="title">
        <div className="title-type">
          <h1 tabIndex="6">{title}</h1>
        </div>
        <div className="square">{number}</div>
      </div>
      <div className="info">
        <div className="info-project">
          {info &&
            info.map((tech, index) => (
              <div key={index} className="info-bubble" tabIndex={index + 7}>
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
        <div className="projet-présentation">
          <p className="presentationStrong" tabIndex="15">
            {presentation}
          </p>
          <p className="presentation-txt">{presentationText}</p>
        </div>
        <SlideShow pictures={imagesGallery} title={title} />
      </div>
      <div className="collapse">
        <p>{descriptionText}</p>
      </div>
    </section>
  );
}

export default Projet;
