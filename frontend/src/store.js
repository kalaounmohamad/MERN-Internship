import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";

import { restaurantReducer } from "./reducers/restaurantReducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
  restaurants: restaurantReducer,
});

let initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlware))
);

export default store;
