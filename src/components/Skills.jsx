import "./Skills.css"

export const Skills = () => {
  return (
    <div className="section" id="skills-section">
      <h1 className="ivory-text" id="skills-heading">
        Skills
      </h1>
      <div className="card ivory-text" id="skills-card">
        <div id="skills-box">
          <h2 className="cerise">Code</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
          </ul>
        </div>
        <div id="skills-box">
          <h2 className="green">Toolbox</h2>
          <ul>
            <li>VSCode</li>
            <li>GitHub</li>
            <li>MongoDB</li>
            <li>Postman</li>
            <li>Figma</li>
            <li>Adobe Illustrator</li>
            <li>Adobe InDesign</li>
            <li>Slack</li>
            <li>PyCharm</li>
          </ul>
        </div>
        <div id="skills-box">
          <h2 className="orange">Upcoming</h2>
          <ul>
            <li>React Native</li>
            <li>PostreSQL</li>
          </ul>
        </div>
        <div id="skills-box">
          <h2 className="blue">More</h2>
          <ul>
            <li>Teaching</li>
            <li>Leadership</li>
            <li>Agile methodology</li>
            <li>Mob-programming</li>
            <li>Pair-programming</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
