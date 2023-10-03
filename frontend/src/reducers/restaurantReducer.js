import {
  ALL_RESTAURANTS_REQUEST,
  ALL_RESTAURANTS_SUCCESS,
  ALL_RESTAURANTS_FAIL,
  CLEAR_ERRORS,
} from "../constants/restaurantConstant";

const initialState = {
  restaurants: [],
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_RESTAURANTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ALL_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
      };
    case ALL_RESTAURANTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
