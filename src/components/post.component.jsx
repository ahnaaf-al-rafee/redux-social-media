import React from "react";

import "./post.styles.css";

function Post({ author, title, body }) {
  return (
    <div className="body">
      <h3>{title}</h3>
      <h6>{author}</h6>
      <p>{body}</p>
      <button>Like</button>
      <button>Dislike</button>
    </div>
  );
}

export default Post;
