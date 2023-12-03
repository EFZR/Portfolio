import perfil from "../assets/home-perfil.png";
import "../styles/ProfileImage.css";

function ProfileImage() {
  return (
    <div className="perfil">
      <div className="perfil__content">
        <img src={perfil} alt="img" className="perfil__img" />
      </div>
    </div>
  );
}

export default ProfileImage;
