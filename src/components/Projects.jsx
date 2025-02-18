import PropTypes from "prop-types"

import "./Projects.css"
import { Tags } from "./Tags"
import { Button } from "./Button"

export const Projects = ({
  name,
  description,
  image,
  tags,
  netlify,
  github,
}) => {
  return (
    <div className="card" id="project-card">
      <img className="project-image" src={image} alt="Screenshot of website" />
      <div className="project-box">
        <div className="project-info">
          <h2 className="project-title">{name}</h2>
          <p>{description}</p>
          <Tags tags={tags} />
        </div>
        <div className="button-box">
          <Button
            type="button view-live"
            link={netlify}
            icon="web"
            text="Live demo"
          />
          <Button
            type="button view-code"
            link={github}
            icon="github"
            text="View the code"
          />
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
}
