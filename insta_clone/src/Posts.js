import React from "react";
import "./Posts.css";
import Avatar from "@material-ui/core/Avatar";

function Posts({ username, caption, Imageurl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="Yash" src="/static/1.jpg" />
        <h3>Username</h3>
      </div>
      <img className="post__image" src={Imageurl} alt="React logo" />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Posts;
