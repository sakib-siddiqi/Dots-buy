import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import DotsContainer from "../../components/custom/container/DotsContainer";
import TemporaryDrawer from "./SideBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const pages = ["Home", "Products", "Blog", "contact"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openCart, setOpenCart] = React.useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          boxShadow: 0,
        }}
      >
        <DotsContainer>
          <Toolbar disableGutters>
            <img
              src="./logo.svg"
              alt="dots-logo"
              style={{
                maxWidth: "80px",
              }}
            />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <IconButton
              size="large"
              onClick={() => setOpenCart(true)}
              color="inherit"
            >
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </DotsContainer>
      </AppBar>
      <TemporaryDrawer
        show={openCart}
        handleShow={(state) => setOpenCart(state)}
      />
    </>
  );
};
export default Header;
