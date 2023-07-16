import React from 'react';
import { AppBar, Toolbar, Typography, Button,  Menu, MenuItem} from '@mui/material';
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
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Your Logo
        </Typography>
        <div>
          <Button color="inherit">Link 1</Button>
          <Button color="inherit">Link 2</Button>
          <Button aria-controls="dropdown-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
            Dropdown
          </Button>
          <Menu
            id="dropdown-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Dropdown Item 1</MenuItem>
            <MenuItem onClick={handleClose}>Dropdown Item 2</MenuItem>
          </Menu>
        </div>
        <Button color="inherit">Button</Button>
        <Button color="inherit">Link</Button>
      </Toolbar>
    </AppBar>
       {/* <SliderComponent/> */}
       {/* <ImageCarousel/> */}
       </>
  );
};

export default Navbar
