import "../../../../css/DeNt/ProfEditPage/ProfEditPage.css";
import { useState, useEffect } from "react";
import { fetchCurrentUser } from "../../../../services/currentUserService";
import { PLeftMain } from "./ProfMainComps/PLeftMain";
import { PRightMain } from "./ProfMainComps/PRightMain";

export const ProfMain = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchCurrentUser()
      .then(u => {
        if (u && u.profilePictureBase64) {
          setImage(u.profilePictureBase64);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="prof-main-wrapper">
      <PLeftMain image={image} setImage={setImage} />
      <PRightMain image={image} />
    </div>
  );
}