import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducers/restaurantReducer";
import { menuReducer } from "./reducers/menuReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  restaurants: restaurantReducer,
  menus: menuReducer,
  cart: cartReducer,
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
