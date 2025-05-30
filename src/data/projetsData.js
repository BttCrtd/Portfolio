import imgBookie from "../assets/Cover/Booki-couverture.jpg";
import imgSophie from "../assets/Cover/Sophie-couverture.jpg";
import imgNina from "../assets/Cover/Nina-Carducci-couverture.jpg";
import imgKasa from "../assets/Cover/Kasa-couverture.jpg";
import imgMVG from "../assets/Cover/MVG-couverture.jpg";

const bookieImages = import.meta.glob("../assets/Bookie/*.png", {
  eager: true,
});
const sophieImages = import.meta.glob("../assets/Sophie_Bluel/*.png", {
  eager: true,
});
const ninaImages = import.meta.glob("../assets/Nina/*.png", { eager: true });
const kasaImages = import.meta.glob("../assets/Kasa/*.png", { eager: true });
const mvgImages = import.meta.glob("../assets/MVG/*.png", { eager: true });

const toGallery = (images) => Object.values(images).map((m) => m.default);

export const projectsData = [
  {
    title: "Kasa",
    cover: imgKasa,
    link: "https://github.com/BttCrtd/Projet5.git",
    gallery: toGallery(kasaImages),
    number: "1",
    info: [
      "Web / Mobile",
      "React",
      "React Router",
      "Vite",
      "HTML",
      "Sass",
      "JavaScript",
    ],
    presentationDetail:
      "Kasa est un site de location d'appartements entres particuliers.",
    presentation: `Dans ce projet, j’ai développé le front-end d’une application en utilisant React, React Router et l’outil de build Vite, dans le but de créer une interface moderne, fluide et responsive.
L’objectif était de construire une expérience utilisateur efficace en se basant sur des maquettes précises et en affichant dynamiquement des données simulées issues d’un fichier JSON.`,
    description: `
J’ai mis en place une architecture modulaire en composants réutilisables, facilitant la maintenance et l’évolution du code.
Grâce à React Router, j’ai géré la navigation entre les différentes pages de manière fluide, sans rechargement complet du site, tout en respectant les bonnes pratiques du Single Page Application (SPA).
Ce projet m’a permis de renforcer mes compétences en développement front-end moderne, en structuration d’applications React, et en gestion du routage avec React Router, tout en adoptant un environnement de développement rapide et performant grâce à Vite.
`,
  },
  {
    title: "Sophie Bluel",
    cover: imgSophie,
    link: "https://github.com/BttCrtd/Projet---3.git",
    gallery: toGallery(sophieImages),
    number: "2",
    info: ["Web / Mobile", "HTML", "CSS", "JavaScript"],
    presentationDetail:
      "Site vitrine dynamique, conçu pour mettre en valeur les réalisations de l'architecte d’intérieur Sophie Bluel.",
    presentation: `Ce projet consistait à développer un portfolio interactif, en mettant l’accent sur l'interactivité et la gestion dynamique des contenus. 
L’objectif principal était de créer une page web moderne et dynamique en utilisant JavaScript tout en interagissant avec une API pour récupérer et afficher les projets de l’architecte en temps réel.
`,
    description: `
La page de présentation des travaux de l'architecte a été créée à partir des maquettes HTML fournies. Grâce à l'utilisation de JavaScript, j'ai rendu cette page interactive et dynamique, permettant ainsi de récupérer, d'afficher et de filtrer les projets directement depuis l'API. 
Cette approche a permis d'intégrer les données dans le DOM de manière fluide, offrant ainsi une expérience utilisateur moderne et réactive.

Ce projet a également inclus la création d’une page de connexion pour l’administrateur du site, ainsi que l’intégration d’une modale permettant la gestion et la création de nouveaux médias via un formulaire.
La gestion des événements et l’interaction avec l’API ont été des éléments clés, me permettant de renforcer mes compétences en développement front-end et dans la manipulation de données en temps réel.
`,
  },
  {
    title: "Nina Carducci",
    cover: imgNina,
    link: "https://github.com/BttCrtd/Projet-4.git",
    gallery: toGallery(ninaImages),
    number: "3",
    info: [
      "Web / Mobile",
      "SEO",
      "Débugage",
      "Chrome DevTools",
      "Lighthouse",
      "Schema.org",
    ],
    presentationDetail:
      "Site vitrine professionnel présentant le portfolio de la photographe Nina Carducci.",
    presentation: `Dans ce projet, j’ai travaillé sur l’optimisation SEO et l’amélioration de l’accessibilité du site de Nina Carducci. L’objectif principal était d’améliorer sa visibilité en ligne, ses performances et de garantir une expérience utilisateur inclusive.`,
    description: `
En utilisant l’outil Lighthouse, j’ai identifié plusieurs problèmes de performance, des lacunes en accessibilité ainsi qu’un SEO techniquement correct mais nécessitant des ajustements pour atteindre les standards les plus élevés.

J’ai optimisé le référencement global du site en améliorant la sémantique HTML, en minifiant les fichiers CSS et JavaScript, ou encore en optimisant les images.
Afin de cibler une audience locale, j’ai implémenté un référencement local en intégrant des micro-données schema.org. J’ai également ajouté des métadonnées pour les réseaux sociaux afin d’optimiser le partage du site en ligne.
Pour l’accessibilité, j’ai rendu le contenu du site accessible à tous les utilisateurs, en corrigeant des erreurs de contraste, en ajoutant des descriptions alternatives et en ajoutant des attributs "for" manquants.

Enfin, à l’issue de ce projet, j’ai rédigé un rapport détaillé présentant les actions entreprises et comparant les résultats obtenus avant et après l’intervention.

`,
  },
  {
    title: "Bookie",
    cover: imgBookie,
    link: "https://github.com/BttCrtd/Projet-2.git",
    gallery: toGallery(bookieImages),
    number: "4",
    info: ["Web / Mobile", "HTML", "CSS", "Responsive Design"],
    presentationDetail:
      "Booki est le site vitrine d'une plateforme de réservation d'hébergements et d'activités touristiques.",
    presentation: `Le projet Booki a été mon premier défi en développement web. L’objectif était simple : reproduire à l’identique la maquette du site de l’agence Bookie.
Le site propose à ses utilisateurs de planifier leurs vacances en proposant en fonction de leur destination, des logements et des activités.`,
    description: `
Ce projet m’a permis de plonger dans l’intégration front-end, en mettant en application les bases du HTML et du CSS.
Je me suis concentré sur le rendu visuel et la structure du code. J’ai utilisé Flexbox et les media queries pour rendre le site responsive, dans l’optique de suivre une approche mobile-first. L’idée, c’était d’avoir un rendu propre, lisible et cohérent sur tous les écrans, d’un ordinateur à un smartphone.

Ce projet m’a beaucoup appris : le respect des maquettes au pixel près, l’organisation des fichiers (HTML et CSS), et l’accessibilité.
`,
  },
  {
    title: "Mon Vieux Grimoire",
    cover: imgMVG,
    link: "https://github.com/BttCrtd/Projet6.git",
    gallery: toGallery(mvgImages),
    number: "5",
    info: [
      "Web",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "API REST",
      "JavaScript",
    ],
    presentationDetail:
      "Mon Vieux Grimoire est une application web communautaire dédiée au partage et à la notation de livres.",
    presentation: `Dans ce projet, j’ai développé le back-end d’un site de notation de livres en utilisant Node.js, Express et MongoDB. Mon objectif principal était de construire un serveur sécurisé et performant, capable de gérer les interactions entre les utilisateurs et la base de données.`,
    description: `
J’ai mis en place une architecture MVC (Modèle-Vue-Contrôleur) pour structurer l’application de manière claire et scalable. À l’aide de Mongoose, j’ai modélisé les données et développé les différentes opérations CRUD pour permettre l’ajout, la modification, la suppression et la consultation des différentes annonces.
Le projet intègre également : un système d’authentification sécurisé avec gestion des tokens pour protéger l’accès aux fonctionnalités du site ; la gestion de fichiers pour le téléchargement et l’optimisation des images des livres.
Ce projet m’a permis de consolider mes compétences en développement back-end, en gestion de base de données, en sécurité des API, et en structuration d’application serveur.
`,
  },
];

export const skillsData = [
  {
    title: "Front-end",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "SASS"],
  },
  {
    title: "Back-end",
    skills: ["Node.js", "Express", "MongoDB", "Python", "API REST"],
  },
  {
    title: "Outils",
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "Notion",
      "Chrome DevTools",
      "Lighthouse",
      "Wave",
    ],
  },
];
