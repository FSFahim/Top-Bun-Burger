import * as actionTypes from "./actionTypes";

export const addComment = (dishId, author, rating, comment) => {
  return {
    type: actionTypes.ADD_COMMENT,
    payload: {
      author: author,
      dishId: dishId,
      comment: comment,
      rating: rating,
    },
  };
};
