import PropTypes from "prop-types"
import "./Projects.css"

export const Projects = ( {name, description,
            image,
            tags,
            netlify,
            github}) => {
  return (
    <div className="project-card">
      <img className="project-image" src={image} alt="" />
      <div className="project-info">
        <h3 className="project-title">{name}</h3>
        <p>{description}</p>
        <p>{tags}</p>
        <div className="button-box">
          <a className="button view-live" href={netlify}>
            <img src="..//src/assets/live-demo.svg" alt="Web icon" />
            Live demo
          </a>
          <a className="button view-code" href={github}>
            <img src="..//src/assets/github.svg" alt="Github icon" />
            View the code
          </a>
        </div>
      </div>
    </div>
  );
}

Projects.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.array,
  netlify: PropTypes.string,
  github: PropTypes.string,
}