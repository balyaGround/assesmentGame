import React from "react";
import Game from "../component/game";
import ColorTabs from "../component/navbar";
import "./balyaStyle.css";
const Homepage = () => {
  return (
    <div>
      <ColorTabs />
      <Game />
    </div>
  );
};

export default Homepage;
