import { Link} from "react-router-dom"
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

function Galerie () {
    return (
        <section className="galerie">
            <div className="grid-container">
                <Link to="/projet" state={{ imagesGallery: bookieGallery, title: "Bookie", link: "https://github.com/BttCrtd/Projet-2.git", number: "1", info: ["HTML", "CSS"] }} className="grid-item">
                    <img src={imgBookie} />
                    <div className="filter"></div>
                </Link>
                <div className="grid-item without"></div>
                <Link to="/projet" state={{ imagesGallery: sophieGallery, title: "Sophie Bluel", link:"https://github.com/BttCrtd/Projet---3.git", number: "2", info: ["HTML", "CSS", "JavaScript"] }} className="grid-item">
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