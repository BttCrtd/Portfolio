import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../style/style.css";
import { useState } from "react";

function Collapse({ name, text }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="element">
      <div>
        <h2>{name}</h2>
        <button
          className={isVisible ? "rotated" : ""}
          onClick={toggleVisibility}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      <div className={`content ${isVisible ? "active" : "close"}`}>
        {text ? <p>{text}</p> : <p>Pas encore de description</p>}
      </div>
    </div>
  );
}

export default Collapse;
