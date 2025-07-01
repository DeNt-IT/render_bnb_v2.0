import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PRightMain = ({ image }) => {
  const navigate = useNavigate();

  // 1) One state object for all fields
  const [profile, setProfile] = useState({
    university: "", living: "", bd: "", interest: "",
    skill: "", time: "", job: "", lang: "",
    song: "", fact: "", bio: "", pets: ""
  });

  // 2) Generic change handler
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile(prev => ({ ...prev, [id]: value }));
  };

  // 3) Submit handler
  const handleSubmit = async () => {
    const dto = {
      University:  profile.university,
      LivingPlace: profile.living,
      BirthDecade: profile.bd,
      Interest:    profile.interest,
      Skill:       profile.skill,
      TimeSpent:   profile.time,
      Job:         profile.job,
      Languages:   profile.lang,
      FavoriteSong:profile.song,
      FunFact:     profile.fact,
      BioHeadline: profile.bio,
      Pets:        profile.pets
    };

    const token = localStorage.getItem('token');
    const res = await fetch("/api/profile", {
      method:  "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      body:    JSON.stringify({ ...dto, ProfilePictureBase64: image })
    });

    if (res.ok) {
      navigate("/guestpage");
    } else {
      console.error("Save failed", await res.text());
    }
  };

  return (
    <div className="p-right-main-container">
      {/* … your text above … */}
      <div className="p-r-main-form-c">
        <div className="p-r-main-form-l-r" style={{ paddingRight: 40 }}>
          {["university","living","bd","interest","skill","time"].map(field => (
            <div key={field} className="p-r-main-form-box">
              <input
                id={field}
                value={profile[field]}
                onChange={handleChange}
                placeholder={{
                  university: "Навчальний Заклад",
                  living:     "Місце проживання",
                  bd:         "Десятиліття, коли я народився/-лась",
                  interest:   "Найбільше захоплення",
                  skill:      "Найбільш марні навички",
                  time:       "На що я витрачаю багато часу"
                }[field]}
              />
              <hr />
            </div>
          ))}
        </div>
        <div className="p-r-main-form-l-r" style={{ paddingLeft: 40 }}>
          {["job","lang","song","fact","bio","pets"].map(field => (
            <div key={field} className="p-r-main-form-box">
              <input
                id={field}
                value={profile[field]}
                onChange={handleChange}
                placeholder={{
                  job:  "Моя професія",
                  lang: "Мови, якими я володію",
                  song: "Улюблена пісня в старших класах",
                  fact: "Цікавий факт про мене",
                  bio:  "Бажаний заголовок біографії",
                  pets: "Домашні тварини"
                }[field]}
              />
              <hr />
            </div>
          ))}
        </div>
      </div>
      <div className="form-button" onClick={handleSubmit}>
        Підтвердити
      </div>
    </div>
  );
};
