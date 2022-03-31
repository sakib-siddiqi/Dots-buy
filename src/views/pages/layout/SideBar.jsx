import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckIcon from "@mui/icons-material/Check";
import {
  Button,
  Grid,
  IconButton,
  ListItemText,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useDispatch, useSelector } from "react-redux";
import {
  remove_from_cart,
  clear_cart,
} from "../../../redux/action/cart_actions";

export default function TemporaryDrawer({ show, handleShow }) {
  const cart_list = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const list = (anchor) => (
    <Box maxWidth="450px" sx={{ width: "100%" }} role="presentation">
      <List
        sx={{
          position: "relative",
          height: "100vh",
        }}
        subheader={
          <ListItem>
            <ListItemIcon>
              <LocalMallIcon />
            </ListItemIcon>
            <ListItemText primary="CART" />
            <IconButton onClick={() => handleShow(false)}>
              <CloseIcon />
            </IconButton>
          </ListItem>
        }
      >
        {cart_list?.map((item) => (
          <>
            <ListItem>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <img
                    src={item.img}
                    alt=""
                    sx={{ aspectRatio: 1 }}
                    width="100%"
                  />
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800 }}
                    color="primary"
                  >
                    $ {item.price}
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: "center" }}>
                  <IconButton
                    onClick={() => dispatch(remove_from_cart(item.id))}
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
          </>
        ))}

        <ListItem
          sx={{
            position: "sticky",
            bottom: 0,
            left: 0,
            width: "100%",
            p: 2,
            bgcolor: (theme) => theme.palette.primary.main,
          }}
        >
          <Grid
            container
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Grid item>
              <Typography variant="h5" sx={{ fontWeight: 700 }} color="white">
                $ {cart_list.reduce((a, b) => a + b.price, 0)}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="success"
                endIcon={<CheckIcon />}
                onClick={() => dispatch(clear_cart())}
              >
                Order
              </Button>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={`right`} open={show} onClose={() => handleShow(false)}>
        {console.log(show)}
        {list(`right`)}
      </Drawer>
    </div>
  );
}
