import PropTypes from "prop-types"
import arrow from "../assets/arrow.svg"
import profilePicture from "../assets/CV-bild.jpg"
import "./Introduction.css"

export const Introduction = ({ data }) => {
  return (
    <div className="section" id="intro-section">
      <div className="card" id="intro-card">
        <img
          src={profilePicture}
          alt="Picture of Erika"
          className="profile-picture"
          id="top-intro-picture"
        />
        <div id="greeting-box">
          <h2 id="greeting">{data.greeting}</h2>
          <h1 id="intro-heading">{data.title}</h1>
        </div>
        <p className="profile-text">
          {data.description}
        </p>
      </div>
      <div className="arrow-box card">
        <img className="arrow" src={arrow} alt="down arrow" />
      </div>
    </div>
  )
}

Introduction.propTypes = {
  data: PropTypes.object
}