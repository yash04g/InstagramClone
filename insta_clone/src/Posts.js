import React from "react";
import "./Posts.css";
import Avatar from "@material-ui/core/Avatar";

function Posts({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt={username} src="/static/1.jpg" />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="React logo" />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Posts;
