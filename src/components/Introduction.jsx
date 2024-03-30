import arrow from "../assets/arrow.svg"
import profilePicture from "../assets/CV-bild-vanster.jpg"
import "./Introduction.css"

export const Introduction = () => {
  return (
    <div className="intro section">
      <div className="intro-card">
        <div className="intro-box">
          <h2 className="greeting">Hi, I&apos;m Erika Wernbro</h2>
          <h1 className="intro-heading">Frontend Developer</h1>
        </div>
        <div className="profile-box">
          <img
            src={profilePicture}
            alt="Picture of Erika"
            className="profile-picture"
          />
          <p>
            I am a frontend developer with a background in teaching. I&apos;m
            passionate about combining creativity and organizational skills, to
            make information more available and to contribute to the
            ever-evolving landscape of web development. My creativity and
            aptitude for learning new skills makes me an asset to the field of
            technology!
          </p>
        </div>
      </div>
      <div className="arrow-box">
        <img className="arrow" src={arrow} alt="down arrow" />
      </div>
    </div>
  )
}