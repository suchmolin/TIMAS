import React from "react";
import { Container } from "@mui/system";
import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import MenuView from '../MenuView';
import DecoMenu from "../DecoMenu";



const HomeView = () => {
    let [menuViewState, setMenuViewState] = React.useState("menu");
    const regresarMenu= () => {setMenuViewState("menu")}
    
    return(
        <Container>
            <Paper sx={{marginTop:"40px",bgcolor:"#fafafa"}} elevation={7}>
                <Grid container spacing={2}>
                    <Grid item
                        xs={12} md={7} lg={8}
                        sx={{
                            display:"flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >

                        {menuViewState == "menu" && <MenuView setMenuViewState={setMenuViewState}/>}

                        {menuViewState == "Presupuesto" && <><div>presupuesto</div><Button variant="outlined" onClick={regresarMenu}>atras</Button></>}

                        {menuViewState == "Facturación" && <><div>Facturación</div><Button variant="outlined" onClick={regresarMenu}>atras</Button></>}

                        {menuViewState == "Proveedores" && <><div>Proveedores</div><Button  variant="outlined" onClick={regresarMenu}>atras</Button></>}

                        {menuViewState == "Clientes" && <><div>Clientes</div><Button  variant="outlined" onClick={regresarMenu}>atras</Button></>}

                        {menuViewState == "Bancos" && <><div>Bancos</div><Button  variant="outlined" onClick={regresarMenu}>atras</Button></>}

                    </Grid>

                    <DecoMenu/>
                    
                </Grid>
            </Paper>
        </Container>

    );
}

export default HomeView;