import DISHES from "../data/dishes";
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

export const loadDishes = (dishes) => {
  return {
    type: actionTypes.LOAD_DIHSES,
    payload: dishes,
  };
};

export const dishesLoading = () => {
  return {
    type: actionTypes.DISHES_LOADING,
  };
};

export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading());

    setTimeout(() => {
      dispatch(loadDishes(DISHES));
    }, 2000);
  };
};
