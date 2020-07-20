import React, { useState, useEffect } from "react";
import "./Posts.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";

function Posts({ username, caption, imageUrl, postId }) {
  const [comments, setComments] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {};

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
      <form className="post__commentBox">
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          className="post__input"
        />
        <button
          className="post__button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default Posts;
