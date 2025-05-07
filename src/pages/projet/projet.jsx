import { useLocation } from "react-router-dom";
import SlideShow from "../../components/SlideShow/SlideShow";
import Collapse from "../../components/Collapse/collapse";

function Projet() {
  const location = useLocation();
  const {
    title,
    type,
    link,
    number,
    info,
    imagesGallery,
    presentationText,
    descriptionText,
  } = location.state || {};
  return (
    <section className="projet">
      <div className="title">
        <div className="title-type">
          <h1>{title}</h1>
          <p className="type">{type}</p>
        </div>
        <div className="square">{number}</div>
      </div>
      <div className="info">
        <div className="info-project">
          {info &&
            info.map((tech, index) => (
              <div key={index} className="info-bubble">
                {tech}
              </div>
            ))}
          <div className="link">
            <a href={link}>Lien vers le code</a>
          </div>
        </div>
      </div>
      <div className="info-and-img">
        <p className="presentation-txt">{presentationText}</p>
        <SlideShow pictures={imagesGallery} title={title} />
      </div>
      <div className="collapse">
        <h2>Description :</h2>
        <p>{descriptionText}</p>
      </div>
    </section>
  );
}

export default Projet;
