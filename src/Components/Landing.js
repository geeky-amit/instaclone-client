import React from "react";
import home from "../Assets/home.png";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const post = () => {
    navigate("/post");
  };
  return (
    <div className="landing-container">
      <div className="img-container">
        <img className="landing-img" src={home} alt="home_image" />
      </div>
      <div>
        <div className="text">10x Team 04</div>
        <div>
          <button className="btn" onClick={post}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
