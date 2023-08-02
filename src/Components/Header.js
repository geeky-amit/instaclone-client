import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/icon.png";
import camera_icon from "../Assets/camera_icon.png";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const post = () => {
    navigate("/post/new");
  };
  return (
    <>
      <div className="header-container">
        <div style={{ display: "flex" }}>
          <div>
            <img className="logo" alt="logo" src={logo} />
          </div>
          <div className="header-text">Instaclone</div>
        </div>
        <div>
          <img className="cam" alt="cam" src={camera_icon} onClick={post} />
        </div>
      </div>
      <div style={{ height: "1px", backgroundColor: "#006238" }}></div>
    </>
  );
};

export default Header;
