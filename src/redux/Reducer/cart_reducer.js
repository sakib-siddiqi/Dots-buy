import ACTION from "../actions.name";

export default function cartReducer(state={}, payload) {
  switch (payload.type) {
    case ACTION.ADD_TO_CART:
      return [payload, ...state];
    case ACTION.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== payload);
    case ACTION.CLEAR_CART:
      return [];
    default:
      return state;
  }
}
