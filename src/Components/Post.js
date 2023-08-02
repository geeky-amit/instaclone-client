import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import heart from "../Assets/heart2x.png";
import share from "../Assets/share.png";
import "./Post.css";

const Post = () => {
  const [posts, setPosts] = useState([]);
  //"proxy":"https://instaclone-api-uyrk.onrender.com",
  const getData = async () => {
    const res = await axios.get(
      "https://instaclone-api-uyrk.onrender.com/api/post"
    );
    //console.log(res.data);
    setPosts(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(posts);
  return (
    <>
      <Header />
      {posts.map((post) => (
        <div key={post._id} className="post-container">
          <div className="post-head">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="name-text">{post.name}</div>
              <div className="location-text">{post.location}</div>
            </div>
            <div style={{ display: "flex", gap: "3px", marginTop: "20px" }}>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>

          <div>
            <img src={post.image} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "32px",
              marginRight: "28px",
              marginTop: "12px"
            }}
          >
            <div
              style={{ display: "flex", gap: "10px", flexDirection: "column" }}
            >
              <div style={{ display: "flex", gap: "25px" }}>
                <img
                  src={heart}
                  alt="heart-icon"
                  style={{ height: "28px", width: "28px" }}
                />

                <img
                  src={share}
                  alt="share-icon"
                  style={{ height: "28px", width: "28px" }}
                />
              </div>
              <div style={{ textAlign: "left" }}>{post.likes}</div>
            </div>
            <div>{post.date.split("T")[0]}</div>
          </div>
          <div className="comment-text">{post.description}</div>
        </div>
      ))}
    </>
  );
};

export default Post;
