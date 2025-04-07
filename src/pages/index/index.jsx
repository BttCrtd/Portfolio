import Galerie from "../../section/Galerie/galerie";
import Layout from "../../components/Layout/layout";
import BannerText from "../../components/BannerText/BannerText";
import Presentation from "../../components/Presentation/Presentation";


function Index() {
    return (
        <div>
            <Presentation />
            <BannerText message={"MES PROJETS / "} />
            <Galerie />
        </div>
    )
}

export default Index