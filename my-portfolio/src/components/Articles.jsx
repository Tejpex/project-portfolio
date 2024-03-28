import PropTypes from "prop-types"
import "./Articles.css"

export const Articles = ({ title, writtenAt, description, image, link }) => {
  return (
    <div className="article-card">
      <img className="article-image" src={image} alt="" />
      <div className="header-box">
        <p className="tag">{writtenAt}</p>
        <h4 className="article-title">{title}</h4>
      </div>
      <p>{description}</p>
      <a className="button" id="article-button" href={link} target="_blank">
        <img src="..//src/assets/article.svg" alt="Web icon" />
        Read article
      </a>
    </div>
  )
}

Articles.propTypes = {
  title: PropTypes.string.isRequired,
  writtenAt: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
}