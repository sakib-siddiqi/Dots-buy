import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  add_to_cart,
  remove_from_cart,
} from "../../../../redux/action/cart_actions";

export default function ProductCard({ productData = {} }) {
  const cart_list = useSelector((store) => store.cart);
  const this_item_in_cart = cart_list?.find(
    (item) => item?.id === productData?.id
  );
  const dispatch = useDispatch();

  return (
    <Card>
      <CardMedia
        component="img"
        image={productData.img}
        alt="Paella dish"
        sx={{
          aspectRatio: "1",
        }}
      />
      <CardContent>
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{ fontWeight: 700 }}
        >
          {productData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productData.desc}
        </Typography>
        <Typography
          variant="subtitle1"
          color="primary"
          sx={{ fontWeight: 700 }}
        >
          {productData.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Cart"
          sx={{
            bgcolor: (theme) =>
              this_item_in_cart ? theme.palette.primary.main : "",
          }}
          onClick={() =>
            dispatch(
              this_item_in_cart
                ? remove_from_cart(productData.id)
                : add_to_cart(productData)
            )
          }
        >
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
