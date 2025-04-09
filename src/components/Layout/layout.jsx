import { Link, useLocation, useNavigate } from "react-router-dom";
import PresentationPorfolio from "../../section/PresentationPortfolio/presentationPortfolio";
import imgFond from "../../assets/imgFond.webp";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isIndexPage = location.pathname === "/";
  const isProjetPage = location.pathname === "/projet";

  const [isRedirectToProjects, setIsRedirectToProjects] = useState(false);
  const [isRedirectToCompetences, setIsRedirectToCompetences] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById("mesProjets");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = () => {
    setIsRedirectToProjects(true);
    if (!isIndexPage) {
      navigate("/");
    } else {
      scrollToProjects();
    }
  };

  useEffect(() => {
    if (isRedirectToProjects) {
      setIsRedirectToProjects(false);
      setTimeout(() => {
        scrollToProjects();
      }, 250);
    }
  }, [isRedirectToProjects]);

  const scrollToCompetences = () => {
    const element = document.getElementById("mesCompetences");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCompetencesClick = () => {
    setIsRedirectToCompetences(true);
    if (!isIndexPage) {
      navigate("/");
    } else {
      scrollToCompetences();
    }
  };

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
        className="content-with-background"
        style={{
          backgroundImage: `url(${imgFond})`,
        }}
      >
        <header>
          <p>Courtadon Baptiste</p>
          <nav>
            <Link to="/">Index</Link>
            <a onClick={handleCompetencesClick}>Mes Compétences</a>
            <a onClick={handleProjectClick}>Mes Projets</a>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        {!isProjetPage && <PresentationPorfolio />}
      </div>
      <main>{children}</main>
      <footer>
        <div>
          <p>© 2025 Courtadon Baptiste.</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
