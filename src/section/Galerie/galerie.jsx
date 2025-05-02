import { Link } from "react-router-dom";
import imgBookie from "../../assets/Cover/Booki-couverture.jpg";
const bookieImages = import.meta.glob("../../assets/Bookie/*.png", {
  eager: true,
});
const bookieGallery = Object.values(bookieImages).map(
  (module) => module.default
);
import imgSophie from "../../assets/Cover/Sophie-couverture.jpg";
const sophieImages = import.meta.glob("../../assets/Sophie_Bluel/*.png", {
  eager: true,
});
const sophieGallery = Object.values(sophieImages).map(
  (module) => module.default
);
import imgNina from "../../assets/Cover/Nina-Carducci-couverture.jpg";
const ninaImages = import.meta.glob("../../assets/Nina/*.png", { eager: true });
const ninaGallery = Object.values(ninaImages).map((module) => module.default);
import imgKasa from "../../assets/Cover/Kasa-couverture.jpg";
const kasaImages = import.meta.glob("../../assets/Kasa/*.png", { eager: true });
const kasaGallery = Object.values(kasaImages).map((module) => module.default);
import imgMVG from "../../assets/Cover/MVG-couverture.jpg";
const mvgImages = import.meta.glob("../../assets/MVG/*.png", { eager: true });
const mvgGallery = Object.values(mvgImages).map((module) => module.default);

const BookiDescription = `
Le projet Booki a été mon premier défi en développement web. L’objectif était simple : reproduire à l’identique la maquette du site de l’agence Bookie.
Bookie est une agence qui propose à ses utilisateurs de planifier leurs vacances en proposant en fonction de leur destination, des logements et des activités.

Cela m’a permis de plonger dans l’intégration front-end, en mettant en application les bases du HTML et du CSS.
Je me suis concentré sur le rendu visuel et la structure du code. J’ai utilisé Flexbox et les media queries pour rendre le site responsive, dans l’optique de suivre une approche mobile-first. L’idée, c’était d’avoir un rendu propre, lisible et cohérent sur tous les écrans, d’un ordinateur à un smartphone.

Ce projet m’a beaucoup appris : le respect des maquettes au pixel près, l’organisation des fichiers (HTML et CSS), et l’accessibilité.
`;

const SophieDescription = `
Ce projet consistait à développer le site vitrine d’une architecte d’intérieur, Sophie Bluel, en mettant l’accent sur l'interactivité et la gestion dynamique des contenus. 
L’objectif principal était de créer une page web moderne et dynamique en utilisant JavaScript tout en interagissant avec une API pour récupérer et afficher les projets de l’architecte en temps réel.

La page de présentation des travaux de l'architecte a été créée à partir des maquettes HTML fournies. Grâce à l'utilisation de JavaScript, j'ai rendu cette page interactive et dynamique, permettant ainsi de récupérer, d'afficher et de filtrer les projets directement depuis l'API. 
Cette approche a permis d'intégrer les données dans le DOM de manière fluide, offrant ainsi une expérience utilisateur moderne et réactive.

Ce projet a également inclus la création d’une page de connexion pour l’administrateur du site, ainsi que l’intégration d’une modale permettant la gestion et la création de nouveaux médias via un formulaire.
La gestion des événements et l’interaction avec l’API ont été des éléments clés, me permettant de renforcer mes compétences en développement front-end et dans la manipulation de données en temps réel.
`;

const NinaDescription = `
Dans ce projet, j’ai travaillé sur l’optimisation SEO et l’amélioration de l’accessibilité du site web d’une photographe : Nina Carducci. L’objectif principal était d’améliorer sa visibilité en ligne, ses performances et de garantir une expérience utilisateur inclusive.

En utilisant l’outil Lighthouse, j’ai identifié plusieurs problèmes de performance, des lacunes en accessibilité ainsi qu’un SEO techniquement correct mais nécessitant des ajustements pour atteindre les standards les plus élevés.

J’ai optimisé le référencement global du site en améliorant la sémantique HTML, en minifiant les fichiers CSS et JavaScript, ou encore en optimisant les images.
Afin de cibler une audience locale, j’ai implémenté un référencement local en intégrant des micro-données schema.org. J’ai également ajouté des métadonnées pour les réseaux sociaux afin d’optimiser le partage du site en ligne.
Pour l’accessibilité, j’ai rendu le contenu du site accessible à tous les utilisateurs, en corrigeant des erreurs de contraste, en ajoutant des descriptions alternatives et en ajoutant des attributs "for" manquants.

Enfin, à l’issue de ce projet, j’ai rédigé un rapport détaillé présentant les actions entreprises et comparant les résultats obtenus avant et après l’intervention.

`;

const KasaDescription = `
Dans ce projet, j’ai développé le front-end d’une application en utilisant React, React Router et l’outil de build Vite, dans le but de créer une interface moderne, fluide et responsive.
L’objectif était de construire une expérience utilisateur efficace en se basant sur des maquettes précises et en affichant dynamiquement des données simulées issues d’un fichier JSON. J’ai mis en place une architecture modulaire en composants réutilisables, facilitant la maintenance et l’évolution du code.
Grâce à React Router, j’ai géré la navigation entre les différentes pages de manière fluide, sans rechargement complet du site, tout en respectant les bonnes pratiques du Single Page Application (SPA).
Ce projet m’a permis de renforcer mes compétences en développement front-end moderne, en structuration d’applications React, et en gestion du routage avec React Router, tout en adoptant un environnement de développement rapide et performant grâce à Vite.
`;

const MvgDescription = `
Dans ce projet, j’ai développé le back-end d’un site de notation de livres en utilisant Node.js, Express et MongoDB. Mon objectif principal était de construire un serveur sécurisé et performant, capable de gérer les interactions entre les utilisateurs et la base de données.
J’ai mis en place une architecture MVC (Modèle-Vue-Contrôleur) pour structurer l’application de manière claire et scalable. À l’aide de Mongoose, j’ai modélisé les données et développé les différentes opérations CRUD pour permettre l’ajout, la modification, la suppression et la consultation des différentes annonces.
Le projet intègre également : un système d’authentification sécurisé avec gestion des tokens pour protéger l’accès aux fonctionnalités du site ; la gestion de fichiers pour le téléchargement et l’optimisation des images des livres.
Ce projet m’a permis de consolider mes compétences en développement back-end, en gestion de base de données, en sécurité des API, et en structuration d’application serveur.
`;

function Galerie() {
  return (
    <section className="galerie">
      <div className="grid-container">
        <Link
          to="/projet"
          state={{
            imagesGallery: bookieGallery,
            title: "Bookie",
            link: "https://github.com/BttCrtd/Projet-2.git",
            number: "1",
            info: ["HTML", "CSS", "Responsive Design"],
            presentationText: BookiDescription,
          }}
          className="grid-item"
        >
          <img
            src={imgBookie}
            alt="Image de couverture du premier projet: Booki"
          />
          <div className="filter"></div>
        </Link>
        <Link
          to="/projet"
          state={{
            imagesGallery: sophieGallery,
            title: "Sophie Bluel",
            link: "https://github.com/BttCrtd/Projet---3.git",
            number: "2",
            info: ["HTML", "CSS", "JavaScript"],
            presentationText: SophieDescription,
          }}
          className="grid-item"
        >
          <img
            src={imgSophie}
            alt="Image de couverture du deuxième projet: Sophie Bluel"
          />
          <div className="filter"></div>
        </Link>
        <Link
          to="/projet"
          state={{
            imagesGallery: ninaGallery,
            title: "Nina Carducci",
            link: "https://github.com/BttCrtd/Projet-4.git",
            number: "3",
            info: [
              "SEO",
              "Débugage",
              "Chrome DevTools",
              "Lighthouse",
              "Schema.org",
            ],
            presentationText: NinaDescription,
          }}
          className="grid-item"
        >
          <img
            src={imgNina}
            alt="Image de couverture du troisième projet: Nina Carducci"
          />
          <div className="filter"></div>
        </Link>
        <Link
          to="/projet"
          state={{
            imagesGallery: kasaGallery,
            title: "Kasa",
            link: "https://github.com/BttCrtd/Projet5.git",
            number: "4",
            info: [
              "React",
              "React Router",
              "Vite",
              "HTML",
              "Sass",
              "JavaScript",
            ],
            presentationText: KasaDescription,
          }}
          className="grid-item"
        >
          <img
            src={imgKasa}
            alt="Image de couverture du quatrième projet: Kasa"
          />
          <div className="filter"></div>
        </Link>
        <Link
          to="/projet"
          state={{
            imagesGallery: mvgGallery,
            title: "Mon Vieux Grimoire",
            link: "https://github.com/BttCrtd/Projet6.git",
            number: "5",
            info: [
              "Node.js",
              "Express.js",
              "MongoDB",
              "Mongoose",
              "API REST",
              "JavaScript",
            ],
            presentationText: MvgDescription,
          }}
          className="grid-item"
        >
          <img
            src={imgMVG}
            alt="Image de couverture du cinquième projet: Mon Vieux Grimoire"
          />
          <div className="filter"></div>
        </Link>
      </div>
    </section>
  );
}

export default Galerie;
