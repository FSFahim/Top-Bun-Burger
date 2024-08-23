import * as actionTypes from "./actionTypes";
import { baseURL } from "./baseURL";
import axios from "axios";

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

export const loadComments = (comments) => {
  return {
    type: actionTypes.LOAD_COMMENTS,
    payload: comments,
  };
};

export const commentsLoading = () => {
  return {
    type: actionTypes.COMMENTS_LOADING,
  };
};

export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading());

    axios
      .get(baseURL + "dishes")
      .then((response) => response.data)
      .then((dishes) => dispatch(loadDishes(dishes)));
  };
};

export const fetchCommnets = () => {
  return (dispatch) => {
    dispatch(dishesLoading());

    axios
      .get(baseURL + "comments")
      .then((response) => response.data)
      .then((comments) => dispatch(loadComments(comments)));
  };
};
