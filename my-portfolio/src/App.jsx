import { TitleCard } from "./components/TitleCard"
import { TechSection } from "./components/TechSection"
import { Projects } from "./components/Projects/Projects"
import { Articles } from "./components/Articles"
import './App.css'
import projectData from "../projects.json"
import articlesData from "../articles.json";

function App() {
  const { projects } = projectData
  const { articles } = articlesData

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

  const renderArticles = articles.map(
    ({ title, writtenAt, description, image, link }) => (
      <Articles
        key={link}
        title={title}
        writtenAt={writtenAt}
        description={description}
        image={image}
        link={link}
      />
    )
  )

  return (
    <div>
      <TitleCard />
      <TechSection />
      <div className="projects-section">
        <h1>Featured projects</h1>
        {renderProjects}
      </div>
      <div className="articles-section">
        <h1>My words</h1>
        {renderArticles}
      </div>
    </div>
  );
}

export default App
