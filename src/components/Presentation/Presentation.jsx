import imgProfil from "../../assets/profil.webp";

function Presentation() {
    return(
        <div className="presentation-perso">
            <div className="presentation-perso-image">
                <img src={imgProfil} alt="Photo de profil de Baptiste Courtadon" />
            </div>
            <div className="presetation-perso-text">
                <h2>Hey ! Moi c'est Baptiste !</h2>
                <p>Je suis développeur web en début de parcours, curieux et motivé à apprendre et à progresser.</p> 
                <p>J’ai une bonne maîtrise des bases du développement front-end et back-end, et je suis toujours à la recherche de nouveaux défis pour améliorer mes compétences.<br></br>J’aime créer des interfaces dynamiques et fonctionnelles, en mettant l’accent sur la simplicité et l’expérience utilisateur.</p> 
                <p>Je suis ouvert aux collaborations et aux opportunités qui me permettront d’évoluer dans le domaine du développement web.</p>
            </div>
        </div>
    )
}

export default Presentation