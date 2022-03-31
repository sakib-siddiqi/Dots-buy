import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { replace_product } from "../../../redux/action/product_actions";
import Products from "./components/Products";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(
    replace_product(
      "https://raw.githubusercontent.com/sakib-siddiqi/Dots-buy/main/src/Data/products.data.json"
    )
  );

  return (
    <main>
      <Products />
    </main>
  );
};

export default Home;
