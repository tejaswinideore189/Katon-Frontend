import React from "react";
import Logo from "./Image/logo.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
// import ImageCarousel from './ImageCarousel';
// import SliderComponent from './SliderComponent';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 0.7 }}>
            <img src={Logo} alt="" style={{ width: "100px", height: "40px" }} />
          </Typography>
          <div style={{ textAlign: "center" }}>
            <Button
              aria-controls="dropdown-menu"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              TLMS
            </Button>
            <Button color="inherit">KNOWLEDGE HUB</Button>
            <Button color="inherit">KATON LIVE</Button>
            <Menu
              id="dropdown-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Ghana</MenuItem>
              <MenuItem onClick={handleClose}>Dropdown Item 2</MenuItem>
            </Menu>
          </div>
          <Button style={{ marginLeft: "20%" }} color="inherit">
            Download App
          </Button>
          <Button color="inherit">Link</Button>
        </Toolbar>
      </AppBar>
      {/* <SliderComponent/> */}
      {/* <ImageCarousel/> */}
    </>
  );
};

export default Navbar;
