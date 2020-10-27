import React, { useState } from "react";
import Post from "./post.component";
import POST_DATA from "./POST_DATA";

function Posts() {
  const [postData, setPostData] = useState(POST_DATA);
  return (
    <div>
      {postData.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          author={post.author}
        />
      ))}
    </div>
  );
}

export default Posts;
