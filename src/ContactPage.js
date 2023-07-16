import React, { useState } from "react";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const ContantPage = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  return (
    <Grid container spacing={2}>
      <Grid item mt={5} mb={25} xs={6} sx={{ width: "auto", height: "25rem" }}>
        <form>
          <h2>Content Section</h2>
          {/* Add your content here */}
          <Grid item xs={12} mt={2}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              name="message"
              label="Message"
              fullWidth
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
      <Grid item mt={5} mb={25} xs={6}>
        <Paper>
          {/* Google Map section */}
          <LoadScript googleMapsApiKey="AIzaSyCWNaN9bYZNzSahELo3ST7dswBAjrVwrnU">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Add your map markers or other map components here */}
            </GoogleMap>
          </LoadScript>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContantPage;
