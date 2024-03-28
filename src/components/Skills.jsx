import "./Skills.css"

export const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-container">
        <div className="skills-box">
            <h2>Code</h2>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>ES6</li>
                <li>React</li>
                <li>Styled Components</li>
                <li>GitHub</li>
            </ul>
        </div>
        <div className="skills-box">
            <h2>Toolbox</h2>
            <ul>
                <li>VSCode</li>
                <li>Postman</li>
                <li>Figma</li>
                <li>Adobe Illustrator</li>
                <li>Adobe InDesign</li>
                <li>Slack</li>
            </ul>
        </div>
        <div className="skills-box">
            <h2>Upcoming</h2>
            <ul>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Python</li>
            </ul>
        </div>
        <div className="skills-box">
            <h2>More</h2>
            <ul>
                <li>Teaching</li>
                <li>Leadership</li>
                <li>Agile methodology</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
