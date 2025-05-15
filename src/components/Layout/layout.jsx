import { Link, useLocation, useNavigate } from "react-router-dom";
import imgFond from "../../assets/imgFond.webp";
import { useEffect, useState } from "react";

/* Composant Layout pour l'en-tête et le pied de page */

function Layout({ children }) {
  /*Accée à la localisation actuelle dans l'application*/
  const location = useLocation();
  /*Navigation vers une route de l'application*/
  const navigate = useNavigate();
  /*Vérifie si on est sur la page d'accueil*/
  const isIndexPage = location.pathname === "/";

  /*Gestion des redirection vers les sections projet, compétences de la page d'accueil*/
  const [isRedirectToProjects, setIsRedirectToProjects] = useState(false);
  const [isRedirectToCompetences, setIsRedirectToCompetences] = useState(false);

  /*Vérification de l'état ouvert/fermé du menu hamburger pour la version mobile*/
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*Fonction qui fait défiler jusqu'à la section projet */
  const scrollToProjects = () => {
    const element = document.getElementById("mesProjets");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  /*Fonction qui fait défiler jusqu'à la section projet suivant si on se trouve sur la page d'accueil ou non de l'application*/
  const handleProjectClick = () => {
    setIsRedirectToProjects(true);
    setIsMenuOpen(false);
    if (!isIndexPage) {
      navigate("/");
    } else {
      scrollToProjects();
    }
  };

  /*Gestion du temps avant le défilement jusqu'à la section projet */
  useEffect(() => {
    if (isRedirectToProjects) {
      setIsRedirectToProjects(false);
      setTimeout(() => {
        scrollToProjects();
      }, 250);
    }
  }, [isRedirectToProjects]);

  /*Fonction qui fait défiler jusqu'à la section compétences */
  const scrollToCompetences = () => {
    const element = document.getElementById("mesCompetences");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  /*Fonction qui fait défiler jusqu'à la section compétences suivant si on se trouve sur la page d'accueil ou non de l'application*/
  const handleCompetencesClick = () => {
    setIsRedirectToCompetences(true);
    setIsMenuOpen(false);
    if (!isIndexPage) {
      navigate("/");
    } else {
      scrollToCompetences();
    }
  };

  /*Gestion du temps avant le défilement jusqu'à la section compétences */
  useEffect(() => {
    if (isRedirectToCompetences) {
      setIsRedirectToCompetences(false);
      setTimeout(() => {
        scrollToCompetences();
      }, 250);
    }
  }, [isRedirectToCompetences]);

  return (
    <div>
      <div
        className={`content-with-background ${isMenuOpen ? "open" : ""}`}
        style={{
          backgroundImage: `url(${imgFond})`,
        }}
      >
        <header className={`${isMenuOpen ? "open" : ""}`}>
          <p className={isMenuOpen ? "open" : ""} tabIndex="1">
            Courtadon Baptiste
          </p>

          <div
            tabIndex="3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
          >
            {isMenuOpen ? (
              <>
                <p>X</p>
              </>
            ) : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </div>

          <nav className={isMenuOpen ? "open" : ""}>
            <Link
              to="/"
              className={isMenuOpen ? "open" : ""}
              onClick={() => setIsMenuOpen(false)}
              tabIndex="3"
            >
              Accueil
            </Link>
            <a
              className={isMenuOpen ? "open" : ""}
              onClick={handleCompetencesClick}
              tabIndex="4"
            >
              Mes Compétences
            </a>
            <a
              className={isMenuOpen ? "open" : ""}
              onClick={handleProjectClick}
              tabIndex="5"
            >
              Mes Projets
            </a>
            <Link
              className={isMenuOpen ? "open" : ""}
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              tabIndex="6"
            >
              Contact
            </Link>
          </nav>
        </header>
        <div className="presentation">
          <h1 tabIndex="2">Développeur Web</h1>
          <p>Vos idées méritent d'exister. Réalisons-les ensemble !</p>
        </div>
      </div>

      <main>{children}</main>

      <footer>
        <div>
          <p>Contact :</p>
          <Link to="/contact" tabIndex="19">
            courtadon.baptiste@gmail.com
          </Link>
        </div>
        <div>
          <p>Localisation :</p>
          <p>France, Clermont-Ferrand</p>
        </div>
        <div className="ARR">
          <p>© 2025 Courtadon Baptiste.</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
