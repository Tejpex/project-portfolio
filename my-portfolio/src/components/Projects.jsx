import PropTypes from "prop-types"
import "./Projects.css"

export const Projects = ( {name, description,
            image,
            tags,
            netlify,
            github}) => {
  return (
    <div>
      Project:
      {name},{description},{tags}
      <img className="project-image" src={image} alt="" />
      <a href={netlify}>See it</a>
      <a href={github}>Code it</a>
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