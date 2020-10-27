import { LIKE } from "../types/actionTypes";

const likeReducer = (state = 0, action) => {
  switch (action.type) {
    case LIKE:
      return state + 1;

    default:
      return state;
  }
};

export default likeReducer;
