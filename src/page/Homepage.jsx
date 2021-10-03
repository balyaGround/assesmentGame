import React from "react";
import Game from "../component/game";
import Header from "../component/header";
import ColorTabs from "../component/navbar";
import "./balyaStyle.css";
const Homepage = () => {
  return (
    <div>
      <Header />
      <ColorTabs />
      <Game />
    </div>
  );
};

export default Homepage;
