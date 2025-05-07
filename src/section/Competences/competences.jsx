function Competence() {
  return (
    <section className="mes-competences">
      <h2>Mes compétences</h2>
      <div className="competences">
        <div className="frontend">
          <h3>Front-end</h3>
          <div className="list-contener">
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
            </ul>
          </div>
        </div>
        <div className="backend">
          <h3>Back-end</h3>
          <div className="list-contener">
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Python</li>
              <li>API REST</li>
            </ul>
          </div>
        </div>
        <div className="others">
          <h3>Outils</h3>
          <div className="list-contener">
            <ul>
              <li>VS Code</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Notion</li>
              <li>Chrome DevTools</li>
              <li>Lighthouse</li>
              <li>Wave</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competence;
