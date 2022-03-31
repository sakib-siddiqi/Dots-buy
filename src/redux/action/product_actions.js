import ACTION from "../actions.name";

export const add_product = (payload) => ({
  type: ACTION.ADD_PRODUCTS,
  payload,
});

export const replace_product = (url) => {
  if (!url) {
    console.warn("'replace_product(url)' missing url params ");
    return;
  } else {
    return (dispatch) => {
      fetch(url)
        .then((res) => res.json())
        .then((dt) => {
          dispatch({ type: ACTION.REPLACE_PRODUCT, payload: dt });
        })
        .catch((err) => console.warn(err));
    };
  }
};
