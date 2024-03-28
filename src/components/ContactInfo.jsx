import "./ContactInfo.css"
import profilePicture from "../assets/CV-bild-vanster.jpg";

export const ContactInfo = () => {
  return (
    <div>
      <h1>Let´s talk</h1>
      <img
        src={profilePicture}
        alt="Picture of Erika"
        className="profile-picture"
      />
      <div className="contact-info-box">
        <p>Erika Wernbro</p>
        <p>+46(0)76 242 42 42</p>
        <p>erikaellerekki@gmail.com</p>
      </div>
    </div>
  );
};
