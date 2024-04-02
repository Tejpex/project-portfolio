import PropTypes from "prop-types"
import "./Articles.css"

export const Articles = ({ title, writtenAt, description, image, altText, link, articleIcon, }) => {
  return (
    <div className="card" id="article-card">
      <img className="article-image" src={image} alt={altText} />
      <div className="header-box">
        <p className="tag">{writtenAt}</p>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
      <a className="button" id="article-button" href={link} target="_blank">
        <img src={articleIcon} alt="Text icon" />
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
  altText: PropTypes.string,
  link: PropTypes.string,
  articleIcon: PropTypes.string,
}