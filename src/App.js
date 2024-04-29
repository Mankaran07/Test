import React, { useState } from "react";
import "./App.css";
import photo from "./photo.jpeg";

function App() {
  const [heart, setHeart] = useState(false);
  const name = "Ravi Kumar Singh";
  const role = "VP of Domestic Sales";

  const showHeart = () => {
    setHeart(true);
  };

  return (
    <div className="container">
      <div className="react-container">
        <div
          className={`heart ${heart ? "active" : ""}`} // Apply "active" class if heart state is true
          // style={{ backgroundImage: `url(${heartImage})` }}
        ></div>
      </div>
      <img src={photo} alt="sir-name" className="photo" />
      <div className="congratulation-container">
        <h1>Congratulations</h1>
        <h2>{name}</h2>
        <p>
          We are thrilled to announce your promotion to the position of {role}.
        </p>
        <p>Congratulations once again!</p>
        <button className="btn" onClick={showHeart}>
          Congratulations
        </button>
      </div>
    </div>
  );
}

export default App;
