import { Link } from "react-router-dom";

function PresentationPorfolio() {
  return (
    <section className="presentation">
      <h1>Développeur Web</h1>
      <div className="information">
        <div>
          <p>Mis à jour :</p>
          <p>Avril 2025</p>
        </div>
        <div>
          <p>Contact :</p>
          <Link to="/contact">courtadon.baptiste@gmail.com</Link>
        </div>
        <div>
          <p>Localisation :</p>
          <p>France, Clermont-Ferrand</p>
        </div>
      </div>
    </section>
  );
}

export default PresentationPorfolio;
