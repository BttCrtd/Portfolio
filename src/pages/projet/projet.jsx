import { useLocation } from "react-router-dom";
import SlideShow from "../../components/SlideShow/SlideShow";
import Collapse from "../../components/Collapse/collapse";

function Projet() {
    const location = useLocation();
    const {title, link, number, info, imagesGallery, presentationText} = location.state || {};
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
                <div className="collapse">
                    <Collapse name={'Présentation du projet'} text={presentationText}/>
                </div>
            </section>
    )
}

export default Projet