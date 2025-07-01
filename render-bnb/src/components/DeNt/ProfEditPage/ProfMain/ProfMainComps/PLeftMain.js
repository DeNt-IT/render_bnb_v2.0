import "../../../../../css/DeNt/ProfEditPage/ProfEditPage.css";
import pfp from "../../../../../assets/imgs/DeNt//ProfEditPage/pfp.png";

export const PLeftMain = ({ image, setImage }) => {
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
                  }
              })
              .catch(() => {});
      }, []);

  return (
    <div className="p-left-main-container">
      <img alt="pfp" src={u.profilePictureBase64} />
      <input type="file" accept="image/*" onChange={handleFile} />
    </div>
  );
}