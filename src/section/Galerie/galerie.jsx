import { Link} from "react-router-dom"
import imgFond from "../../assets/GalerieFond.webp";
import imgBookie from "../../assets/Cover/Booki-couverture.jpg"
const bookieImages = import.meta.glob("../../assets/Bookie/*.png", { eager: true });
const bookieGallery = Object.values(bookieImages).map((module) => module.default);
import imgSophie from "../../assets/Cover/Sophie-couverture.jpg"
const sophieImages = import.meta.glob("../../assets/Sophie_Bluel/*.png", { eager: true });
const sophieGallery = Object.values(sophieImages).map((module) => module.default);
import imgNina from "../../assets/Cover/Nina-Carducci-couverture.jpg"
const ninaImages = import.meta.glob("../../assets/Nina/*.png", { eager: true });
const ninaGallery = Object.values(ninaImages).map((module) => module.default);
import imgKasa from "../../assets/Cover/Kasa-couverture.jpg"
const kasaImages = import.meta.glob("../../assets/Kasa/*.png", { eager: true });
const kasaGallery = Object.values(kasaImages).map((module) => module.default);
import imgMVG from "../../assets/Cover/MVG-couverture.jpg"
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
`

function Galerie () {
    return (
        <section className="galerie" id="mesProjets" style={{ backgroundImage: `url(${imgFond})`, backgroundSize: 'cover', width: '100%'}}>
            <div className="grid-container">
                <Link to="/projet" state={{ imagesGallery: bookieGallery, title: "Bookie", link: "https://github.com/BttCrtd/Projet-2.git", number: "1", info: ["HTML", "CSS", "Responsive Design"], presentationText: BookiDescription}} className="grid-item" >
                    <img src={imgBookie} />
                    <div className="filter"></div>
                </Link>
                <div className="grid-item without"></div>
                <Link to="/projet" state={{ imagesGallery: sophieGallery, title: "Sophie Bluel", link:"https://github.com/BttCrtd/Projet---3.git", number: "2", info: ["HTML", "CSS", "JavaScript"], presentationText: SophieDescription }} className="grid-item">
                    <img src={imgSophie} />
                    <div className="filter"></div>
                </Link>
                <Link to="/projet" state={{ imagesGallery: ninaGallery, title: "Nina Carducci", link:"https://github.com/BttCrtd/Projet-4.git", number: "3", info: ["SEO", "Débugage"] }} className="grid-item">
                    <img src={imgNina} />
                    <div className="filter"></div>
                </Link>
                <Link to="/projet" state={{ imagesGallery: kasaGallery, title: "Kasa", link:"https://github.com/BttCrtd/Projet5.git", number: "4", info: ["HTML", "Sass", "JavaScript", "React"]}} className="grid-item">
                    <img src={imgKasa} />
                    <div className="filter"></div>
                </Link>
                <div className="grid-item without"></div>
                <div className="grid-item without"></div>
                <div className="grid-item without"></div>
                <Link to="/projet" state={{ imagesGallery: mvgGallery, title: "Mon Vieux Grimoire", link:"https://github.com/BttCrtd/Projet6.git", number: "5", info: ["Node.js", "Express", "API REST", "MongoDB"] }} className="grid-item">
                    <img src={imgMVG} />
                    <div className="filter"></div>
                </Link>
            </div>
        </section>
    )
}

export default Galerie