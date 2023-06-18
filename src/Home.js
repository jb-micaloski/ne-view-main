import React from "react";
import { Typography, Box, Button } from "@mui/material";
import MyProfile from "./MyProfile.js";

export default function Home() {
  const styles = {
    "font-family": "'Baloo Bhaijaan', cursive",
    "font-size": "30px",
    padding: "5px",
    color: "white",
  };

  const back = {
    height: "100vh",
    background: "url(../../images/background.jpeg)",
  };

  const typography = {
    width: "fit-content",
    padding: "10px",
    margin: "10px",
    "background-color": "#1976d2",
    "border-radius": "5px",
    "background-opacity": "0.7",
  };

  return (
    <div>
      <Box style={back}>
        <Box style={{ padding: "5px" }}>
          <Box style={typography}>
            <Typography variant="contained" style={styles}>
              NAVIO ESCOLA 'BRASIL'
            </Typography>
          </Box>
          <Box style={typography}>
            <Typography style={styles}>VIRTUAL TOUR</Typography>
          </Box>
          <Box>
          </Box>
          <Box style={{ padding: "5px" }}>
            <Button href="/profile" style={styles} variant="contained">
              Start
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
