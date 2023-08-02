import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

import "./NewPost.css";
import axios from "axios";

const NewPost = () => {
  const [picture, setPicture] = useState();
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  const imageHandler = (pic) => {
    console.log(pic);
    if (
      pic.type === "image/jpeg" ||
      pic.type === "image/png" ||
      pic.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "instaclone");
      data.append("cloud_name", "cocoamit");

      fetch("https://api.cloudinary.com/v1_1/cocoamit/image/upload", {
        method: "POST",
        body: data
      })
        .then((res) => res.json())
        .then((data) => {
          setPicture(data.url.toString());
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Something went wrong");
      return;
    }
  };

  const post = async () => {
    try {
      await axios.post(
        "https://instaclone-api-uyrk.onrender.com/api/post/new",
        {
          image: picture,
          name,
          location,
          description
        }
      );
      alert("Post created successfully");
      console.log(name, location, description, picture);
      navigate("/post");
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  return (
    <>
      <Header />
      <div className="form-container">
        <form method="POST">
          <div>
            <input
              type="file"
              inputProps={{ accept: "image/*" }}
              onChange={(e) => imageHandler(e.target.files[0])}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "75px",
              marginRight: "75px"
            }}
          >
            <input
              style={{ width: "30%" }}
              type="text"
              placeholder="Author"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              style={{ width: "30%" }}
              type="text"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>
        <button onClick={post}>Post</button>
      </div>
    </>
  );
};

export default NewPost;
