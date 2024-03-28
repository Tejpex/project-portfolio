import { TitleCard } from "./components/TitleCard"
import { TechSection } from "./components/TechSection"
import { Projects } from "./components/Projects/Projects"
import { DividerLine } from "./components/DividerLine"
import { Articles } from "./components/Articles"
import { Skills } from "./components/Skills"
import { ContactInfo } from "./components/ContactInfo"

import './App.css'
import projectData from "../projects.json"
import articlesData from "../articles.json"
import dividerLine from "./assets/divider.svg"

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
      <DividerLine line={dividerLine}/>
      <div className="articles-section">
        <h1 className="word-heading">My words</h1>
        {renderArticles}
      </div>
      <Skills />
      <ContactInfo />
    </div>
  );
}

export default App
