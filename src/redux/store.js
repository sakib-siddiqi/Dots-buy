import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./Reducer/cart_reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import product_reducer from "./Reducer/product_reducer";
import ReduxThunk from "redux-thunk";


const rootReducer = combineReducers({
  products: product_reducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
