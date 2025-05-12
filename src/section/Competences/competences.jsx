import { skillsData } from "../../data/projetsData";

function Competence() {
  return (
    <section className="my-skills">
      <h2 tabIndex="9">Mes compétences</h2>
      <div className="skills">
        {skillsData.map((article, index) => (
          <div key={index} className="skills-contener">
            <h3 tabIndex={10 + index}>{article.title}</h3>
            <div className="skill-list-contener">
              <ul>
                {article.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competence;
