import { DISLIKE, LIKE } from "../types/actionTypes";

export const like = () => {
  return {
    type: LIKE,
  };
};

export const dislike = () => {
  return {
    type: DISLIKE,
  };
};
