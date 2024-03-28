import React from "react";
import { Container } from "@mui/system";
import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import MenuView from "../MenuView";
import DecoMenu from "../DecoMenu";
import NuevoPresupuesto from "../NuevoPresupuesto";

const HomeView = () => {
  let [menuViewState, setMenuViewState] = React.useState("menu");
  const regresarMenu = () => {
    setMenuViewState("menu");
  };

  return (
    <Container>
      <Paper
        sx={{
          marginTop: "40px",
          bgcolor: "#fafafa",
          minHeighteight: "90vh",
          paddingBottom: "30px",
          paddingLeft: "30px",
        }}
        elevation={7}
      >
        <Grid container spacing={2}>
          {menuViewState == "menu" && (
            <MenuView setMenuViewState={setMenuViewState} />
          )}

          {menuViewState == "Presupuesto" && (
            <NuevoPresupuesto regresarMenu={regresarMenu} />
          )}

          {menuViewState == "Facturación" && (
            <>
              <div>Facturación</div>
              <Button variant="outlined" onClick={regresarMenu}>
                atras
              </Button>
            </>
          )}

          {menuViewState == "Proveedores" && (
            <>
              <div>Proveedores</div>
              <Button variant="outlined" onClick={regresarMenu}>
                atras
              </Button>
            </>
          )}

          {menuViewState == "Clientes" && (
            <>
              <div>Clientes</div>
              <Button variant="outlined" onClick={regresarMenu}>
                atras
              </Button>
            </>
          )}

          {menuViewState == "Bancos" && (
            <>
              <div>Bancos</div>
              <Button variant="outlined" onClick={regresarMenu}>
                atras
              </Button>
            </>
          )}

          <DecoMenu />
        </Grid>
      </Paper>
    </Container>
  );
};

export default HomeView;
