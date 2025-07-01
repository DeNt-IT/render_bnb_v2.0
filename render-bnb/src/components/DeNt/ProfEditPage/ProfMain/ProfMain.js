import "../../../../css/DeNt/ProfEditPage/ProfEditPage.css";
import { useState } from "react";
import { PLeftMain } from "./ProfMainComps/PLeftMain";
import { PRightMain } from "./ProfMainComps/PRightMain";

export const ProfMain = () => {
  const [image, setImage] = useState(null);

  return (
    <div className="prof-main-wrapper">
      <PLeftMain image={image} setImage={setImage} />
      <PRightMain image={image} />
    </div>
  );
}