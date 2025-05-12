import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*Fonction pour faire défiler la pge vers le haut à chaque changment de page*/
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
