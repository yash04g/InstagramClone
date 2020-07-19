import React, { useState } from "react";
import "./App.css";
import Post from "./Posts";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "yash04g",
      caption: "Learning React",
      Imageurl:
        "https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg",
    },
    {
      username: "yash04g",
      caption: "Learning React",
      Imageurl:
        "https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg",
    },
  ]); /*hooks*/

  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
          className="app__headerImage"
        />
      </div>
      <h1>Instagram Clone</h1>

      {/* Posts */}
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          Imageurl={post.Imageurl}
        />
      ))}

      {/* Posts */}
    </div>
  );
}

export default App;
