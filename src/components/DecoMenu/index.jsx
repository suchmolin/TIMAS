import React from "react";
import { Grid, Box } from "@mui/material";

const DecoMenu = () => {
  return (
    <Grid
      item
      display={{ xs: "none", md: "flex" }}
      md={4}
      sx={{
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        sx={{
          width: 180,
          marginLeft: "70px",
        }}
        alt="decorationMenu"
        src="../../public/img/timaslogo.png"
      />
      <Box
        component="img"
        sx={{
          width: 280,
        }}
        alt="decorationMenu"
        src="../../public/img/logo.png"
      />
    </Grid>
  );
};

export default DecoMenu;
