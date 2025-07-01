import "../../../../../css/DeNt/ProfEditPage/ProfEditPage.css";
import pfp from "../../../../../assets/imgs/DeNt//ProfEditPage/pfp.png";
import { useEffect, useState } from "react";
import { fetchCurrentUser } from "../../../../../services/currentUserService";

export const PLeftMain = ({ image, setImage }) => {
  const [profilePic, setProfilePic] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    fetchCurrentUser()
      .then(u => {
        if (u && u.profilePictureBase64) {
          setProfilePic(u.profilePictureBase64);
          if (!image) setImage(u.profilePictureBase64);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="p-left-main-container">
      <img alt="pfp" src={image || profilePic} />
      <input type="file" accept="image/*" onChange={handleFile} />
    </div>
  );
};
