import { DISLIKE } from "../types/actionTypes";

const dislikeReducer = (state = 0, action) => {
  switch (action.type) {
    case DISLIKE:
      return state + 1;

    default:
      return state;
  }
};

export default dislikeReducer;
