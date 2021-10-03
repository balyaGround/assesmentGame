import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/">
            <a class="navbar-brand" style={{ marginLeft: "50rem" }}>
              <img src="https://www.kindpng.com/picc/m/275-2759715_logo-gaming-png-team-transparent-png.png" alt="" width="300" height="300" class="d-inline-block align-text-top" />
            </a>
          </Link>
        </div>
      </nav>{" "}
    </div>
  );
};

export default Header;
