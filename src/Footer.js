import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  // Typography,
  IconButton,
  Grid,
  Link,
  Box,
  Container,
  Divider,
} from "@mui/material";

import './App.css';


function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper"}} fixed>
      <Container style={{ backgroundColor: "white",marginTop:"-4%",marginBottom:"-4%",position:"relative",maxWidth:"1535px"}}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4}>
            {/* <Typography variant="h6">Follow Us</Typography> */}
            <IconButton color="primary" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton color="primary" aria-label="Instagram">
              <Instagram />
            </IconButton>
            <IconButton color="primary" aria-label="Twitter">
              <Twitter />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* <Typography variant="h6">Links</Typography> */}
            <Grid container spacing={2}>
              <Grid item xs={2} sm={2}>
                <Link color="primary"  to="/about" >
                  About Us
                </Link>
              </Grid>
              <Grid item xs={2} sm={3}>
              <Link  color="primary"  to="/" variant="body2">
                Contact Us
              </Link>
             </Grid>
             <Grid item xs={2}>
              <Link color="primary"  to="/" variant="body2">
                FAQ
              </Link>
              </Grid>
              <Grid item xs={1} sm={2}>
              <Link color="primary"  to="/terms" variant="body2">
                T&amp;C
              </Link>
              </Grid>
              <br />
              <Grid item xs={1}  sm={3}>
              <Link href="#" variant="body2">
                Privacy Policy
              </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11} sm={4} textAlign="right">
            <IconButton color="primary" aria-label="Icon">
              {/* Replace with your small icon */}
              <img src="small-icon.png" alt="Icon" />
            </IconButton>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        {/* <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Your Website. All rights reserved.
        </Typography> */}
      </Container>
    </Box>
  );
}

export default Footer;
