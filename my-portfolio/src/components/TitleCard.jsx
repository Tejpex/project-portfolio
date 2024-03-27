import arrow from "../assets/arrow.svg"
import profilePicture from "../assets/CV-bild-vanster.jpg"
import "./TitleCard.css"

export const TitleCard = () => {
  return (
    <div className="title-page">
      <div className="title-card">
        <h2 className="greeting">Hi, I´m Erika Wernbro</h2>
        <h1>Frontend Developer</h1>
        <div className="profile-box">
          <img
            src={profilePicture}
            alt="Picture of Erika"
            className="profile-picture"
          />
          <p>
            Erika is a frontend developer with a background in teaching. She´s
            passionate about combining creativity and organizational skills, to
            make information more available and to contribute to the
            ever-evolving landscape of web development. Her creativity and
            aptitude for learning new skills makes her an asset to the field of
            technology!
          </p>
        </div>
      </div>
      <img className="arrow" src={arrow} alt="down arrow" />
    </div>
  );
}