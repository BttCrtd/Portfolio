import Galerie from "../../section/Galerie/galerie";
import Layout from "../../components/Layout/layout";
import BannerText from "../../components/BannerText/BannerText";
import Presentation from "../../components/Presentation/Presentation";
import Competence from "../../section/Competences/competences";

function Index() {
  return (
    <div>
      <Presentation />
      <BannerText message={"MES COMPETENCES / "} id={"mesCompetences"} />
      <Competence />
      <BannerText message={"MES PROJETS / "} id={"mesProjets"} />
      <Galerie />
    </div>
  );
}

export default Index;
