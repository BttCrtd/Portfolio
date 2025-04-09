function Competence() {
  return (
    <section className="competences">
      <div className="frontend">
        <h2>Front-end</h2>
        <div className="list-contener">
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </div>
      <div className="backend">
        <h2>Back-end</h2>
        <div className="list-contener">
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Pyton</li>
            <li>API REST</li>
          </ul>
        </div>
      </div>
      <div className="others">
        <h2>Outils</h2>
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
    </section>
  );
}

export default Competence;
