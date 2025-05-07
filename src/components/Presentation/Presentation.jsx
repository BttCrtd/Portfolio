import imgProfil from "../../assets/profil.webp";

function Presentation() {
  const openCV = () => {
    window.open("/Portfolio/assets/COURTADON_Baptiste_CV.pdf", "_blank");
  };
  return (
    <div className="presentation-perso">
      <div className="presentation-perso-image">
        <img src={imgProfil} alt="Photo de profil de Baptiste Courtadon" />
      </div>
      <div className="presetation-perso-text">
        <h2>Hey ! Moi c'est Baptiste !</h2>
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
          dynamiques, fonctionnelles et centrées sur l’utilisateur.
        </p>
        <p>
          Toujours motivé à apprendre et progresser, je suis actuellement à la
          recherche d’une alternance.<br></br>
          Je suis ouvert aux collaborations et aux opportunités qui me
          permettront d’évoluer dans le domaine du développement web.
        </p>
        <button onClick={openCV}>Voici mon CV</button>
      </div>
    </div>
  );
}

export default Presentation;
