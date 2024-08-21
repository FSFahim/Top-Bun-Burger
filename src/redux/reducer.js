import COMMENTS from "../data/comments";
import { combineReducers } from "redux";
import * as actionTypes from "../redux/actionTypes";

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
  switch (action.type) {
    case actionTypes.DISHES_LOADING:
      return {
        ...dishState,
        isLoading: true,
        dishes: [],
      };
    case actionTypes.LOAD_DIHSES:
      return {
        ...dishState,
        isLoading: false,
        dishes: action.payload,
      };
    default:
      return dishState;
  }
};

const commentReducer = (commentState = COMMENTS, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      let comment = action.payload;
      comment.id = commentState.length;
      const now = new Date();
      comment.date = now.toDateString();
      return commentState.concat(comment);
    default:
      return commentState;
  }
};

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});
