import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
import { combineReducers } from "redux";

const dishReducer = (dishState = DISHES, action) => {
  return dishState;
};

const commentReducer = (commentState = COMMENTS, action) => {
  if (action.type === "ADD_COMMENT") {
    let comment = action.payload;
    comment.id = commentState.length;
    const now = new Date();
    comment.date = now.toDateString();
    return commentState.concat(comment);
  } else {
    return commentState;
  }
};

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});
