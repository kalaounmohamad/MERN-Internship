// Action creators are created

import axios from "axios"; // to make HTTP Requests
import {
  ALL_RESTAURANTS_REQUEST,
  ALL_RESTAURANTS_SUCCESS,
  ALL_RESTAURANTS_FAIL,
  CLEAR_ERRORS,
} from "../constants/restaurantConstant";

export const getRestaurants = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_RESTAURANTS_REQUEST });
    let link = "/api/v1/eats/stores"; //this is added to the proxy set link
    const { data } = await axios.get(link);
    const { restaurant, count } = data;

    dispatch({
      type: ALL_RESTAURANTS_SUCCESS,
      payload: { restaurant, count },
    });
  } catch (error) {
    dispatch({
      type: ALL_RESTAURANTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const CLEAR_ERRORS = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
