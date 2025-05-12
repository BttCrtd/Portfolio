import imgProfil from "../../assets/profil.webp";
import logoReact from "../../assets/Logo/React.png";
import logoJavaScript from "../../assets/Logo/JavaScript.png";
import logoPython from "../../assets/Logo/Python.png";

/******** Composant Présentation Personnelle ************/

function Presentation() {
  /*Fonction pour ouvrir le CV dans un autre onglet */
  const openCV = () => {
    window.open("/Portfolio/assets/COURTADON_Baptiste_CV.pdf", "_blank");
  };
  return (
    <div className="presentation-perso">
      <div className="presentation-perso-image">
        <img src={imgProfil} alt="Photo de profil de Baptiste Courtadon" />
      </div>
      <div className="presetation-perso-text">
        <h2 tabIndex="7">Hey ! Moi c'est Baptiste !</h2>
        <p>
          Je suis développeur web en début de parcours, curieux et motivé à
          apprendre et à progresser.
        </p>
        <p>
          J’ai une bonne maîtrise des bases du développement front-end et
          back-end, et je suis toujours à la recherche de nouveaux défis pour
          améliorer mes compétences.
        </p>
        <p>
          <strong>Ce que je préfère ?</strong> Travailler avec{" "}
          <strong>React</strong> et <strong>JavaScript</strong>, deux
          technologies qui me permettent de concevoir des applications
          dynamiques, fonctionnelles et centrées sur l’utilisateur. <br></br>
          Pour illustrer j’ai réalisé <strong>mon portfolio</strong>, ainsi que
          le <strong>projet Kasa</strong>, une application complète de location
          immobilière, avec React et JavaScript.
        </p>
        <p>
          J’ai également eu l’occasion d’apprendre les bases de la programmation{" "}
          <strong>Python</strong>, notamment pour l’automatisation de scripts,
          la manipulation de données et la conception d’algorithmes.
        </p>
        <p>
          Toujours motivé à apprendre et progresser, je suis actuellement à la
          recherche d’une alternance.<br></br>
          Je suis ouvert aux collaborations et aux opportunités qui me
          permettront d’évoluer dans le domaine du développement web.
        </p>
        <div className="cv-and-logo">
          <button onClick={openCV} tabIndex="8">
            Voici mon CV
          </button>
          <div className="logo">
            <div>
              <img src={logoReact} alt="Logo React" />
            </div>
            <div>
              <img src={logoJavaScript} alt="Logo JavaScipt" />
            </div>
            <div>
              <img src={logoPython} alt="Logo Python" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
