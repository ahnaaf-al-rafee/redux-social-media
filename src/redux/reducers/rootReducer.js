import dislikeReducer from "./dislikeReducer";
import likeReducer from "./likeReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  like: likeReducer,
  dislike: dislikeReducer,
});

export default rootReducer;
