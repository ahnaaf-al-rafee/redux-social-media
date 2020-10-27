import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import "./post.styles.css";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { dislike, like } from "../redux/actions/likeDislikeAction";

function Post({ author, title, body }) {
  const likeCount = useSelector((state) => state.like);
  const dislikeCount = useSelector((state) => state.dislike);

  const dispatch = useDispatch();

  return (
    <div className="body">
      <h3>{title}</h3>
      <em>{author}</em>
      <p>{body}</p>
      <Button
        variant="contained"
        startIcon={<ThumbUpAltIcon />}
        onClick={() => dispatch(like())}
      >
        {likeCount}
      </Button>
      <Button
        variant="contained"
        startIcon={<ThumbDownIcon />}
        onClick={() => dispatch(dislike())}
      >
        {dislikeCount}
      </Button>
    </div>
  );
}

export default Post;
