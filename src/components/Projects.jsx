import PropTypes from "prop-types"

import { Tags } from "./Tags"
import "./Projects.css"

export const Projects = ({
  name,
  description,
  image,
  tags,
  netlify,
  github,
  githubIcon,
  webIcon,
}) => {
  return (
    <div className="card" id="project-card">
      <img className="project-image" src={image} alt="" />
      <div className="project-info">
        <h2 className="project-title">{name}</h2>
        <p>{description}</p>
        <Tags tags={tags} />
        <div className="button-box">
          <a className="button view-live" href={netlify} target="_blank">
            <img src={webIcon} alt="Web icon" />
            Live demo
          </a>
          <a className="button view-code" href={github} target="_blank">
            <img src={githubIcon} alt="Github icon" />
            View the code
          </a>
        </div>
      </div>
    </div>
  )
}

Projects.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.array,
  netlify: PropTypes.string,
  github: PropTypes.string,
  githubIcon: PropTypes.string,
  webIcon: PropTypes.string,
}
