import ACTION from "../actions.name";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ACTION.ADD_TO_CART:
      return [action.payload, ...state];
    case ACTION.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    case ACTION.CLEAR_CART:
      return [];
    default:
      return state;
  }
}
