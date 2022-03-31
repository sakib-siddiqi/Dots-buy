import ACTION from "../actions.name";

export const add_to_cart = (payload) => ({ type: ACTION.ADD_TO_CART, payload });

export const remove_from_cart = (payload) => ({
  type: ACTION.REMOVE_FROM_CART,
  payload,
});

export const clear_cart = () => ({ type: ACTION.CLEAR_CART });
