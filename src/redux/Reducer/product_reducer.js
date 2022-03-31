import ACTION from "../actions.name";

export default function product_reducer(state = [], action) {
  switch (action.type) {
    case ACTION.ADD_PRODUCTS:
      return [action.payload, ...state];
    case ACTION.REPLACE_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}
