import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

/************************ Composant SlideShow pour gérer le carousel d'images *****************************/

function SlideShow({ pictures, title }) {
  /*Indexe de l'image affichée*/
  const [currentIndex, setCurrentIndex] = useState(0);

  /** Fonction pour passer à l'image suivante**/
  const nexPicture = () => {
    setCurrentIndex((nexIndex) => {
      /*Si on est à la dernière image on revient à la première sinon à la suivante*/
      return nexIndex === pictures.length - 1
        ? nexIndex - pictures.length + 1
        : nexIndex + 1;
    });
  };

  /** Fonction pour passer à l'image précédente**/
  const prevPicture = () => {
    setCurrentIndex((prevIndex) => {
      /*Si on est à la première image on passe à la dernière sinon à la précédente*/
      return prevIndex === 0 ? pictures.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className="carousel">
      {/*Conteneur images et boutons de navigation entre les images */}
      <div className="picture">
        <img
          src={pictures[currentIndex]}
          alt={`Photo ${currentIndex + 1} sur ${pictures.length} du site ${title}`}
          tabIndex="16"
        />
        {pictures.length !== 1 ? (
          <>
            <div className="button">
              <button onClick={prevPicture} tabIndex="17">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button onClick={nexPicture} tabIndex="18">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </>
        ) : null}
      </div>
      {/*Bulles pour indiquer l'image visualisée sur le nombre totale d'images */}
      <div className="pictureBubbles">
        {pictures.map((_, index) => (
          <span
            key={index}
            className={`bubble ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
