import { combineReducers, createStore } from "redux";
import cartReducer from "./Reducer/cart_reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
