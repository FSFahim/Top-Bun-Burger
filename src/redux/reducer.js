import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
import dateFormat from "dateformat";

const initState = {
  dishes: DISHES,
  comments: COMMENTS,
};

export const Reducer = (state = initState, action) => {
  if (action.type === "ADD_COMMENT") {
    let comment = action.payload;
    comment.id = state.comments.length;
    const now = new Date();
    comment.date = now.toDateString();
    return {
      ...state,
      comments: state.comments.concat(comment),
    };
  } else {
    return state;
  }
};
