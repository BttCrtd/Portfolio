import { useLocation } from "react-router-dom";
import SlideShow from "../../components/SlideShow/SlideShow";

function Projet() {
    const location = useLocation();
    const {title, link, number, info, imagesGallery} = location.state || {};
    return (
        <section className="projet">
            <div className="title">
                <h1>{title}</h1>
                <div className="square">
                    {number}
                </div>
            </div>
            <div className="info-and-img">
                <div className="info">
                    <div className="info-project">
                        {info && info.map((tech, index) => (
                            <div key={index} className="info-bubble">{tech}</div>
                        ))}
                    </div>
                    <div className="link">
                        <a href={link}>Lien vers le code</a>
                    </div>
                </div>
                <SlideShow pictures={imagesGallery} title={title} />
            </div>
        </section>
    )
}

export default Projet