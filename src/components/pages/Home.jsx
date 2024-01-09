import React from "react";
import avatar from "../../assets/avatar.png";

function Home() {
  // Change background colour for home page
  document.body.style.backgroundColor = "#4901ff";
  //   Change document title
  document.title = "Anna Brisland";

  return (
    <div className="name-container">
      <div className="first-name">
        <h1 className="name">ANNA</h1>
        <img src={avatar} style={{ width: "70px" }}></img>
      </div>
      <h1 className="name">BRISLAND</h1>
      <h2>WEB DESIGNER & DEVELOPER</h2>
    </div>
  );
}

export default Home;
