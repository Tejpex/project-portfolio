import { TitleCard } from "./components/TitleCard"
import { Projects } from "./components/Projects"
import { Articles } from "./components/Articles"
import './App.css'
import data from "../projects.json"

function App() {
  const { projects } = data
  const renderProjects = projects.map(
    ({ name, description, image, tags, netlify, github }) => (
      <Projects
        key={name}
        name={name}
        description={description}
        image={image}
        tags={tags}
        netlify={netlify}
        github={github}
      />
    )
  )

  return (
    <div>
      <TitleCard />
      <div className="projects-section">
        {renderProjects}
      </div>
      <div className="articles-section">
        <Articles />
      </div>
    </div>
  )
}

export default App
