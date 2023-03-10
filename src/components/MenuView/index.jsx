import React from "react";
import { Grid,  Box, Typography, Button } from "@mui/material";

const HomeView = (props) => {
    const imgBoton = [
        {
            titulo:"Presupuesto",
            alt:"Boton presupuesto",
            ruta:"./public/img/presupuestoBoton.png",
            width:130,
        },
        {
            titulo:"Facturación",
            alt:"Boton facturacion",
            ruta:"../../../public/img/facturacionBoton.png",
            width:130,
        },
        {
            titulo:"Proveedores",
            alt:"Boton proveedores",
            ruta:"../../../public/img/proveedoresBoton.png",
            width:130,
        },
        {
            titulo:"Clientes",
            alt:"Boton clientes",
            ruta:"../../../public/img/clientesBoton.png",
            width:130,
        },
        {
            titulo:"Bancos",
            alt:"Boton bancos",
            ruta:"../../../public/img/bancosBoton.png",
            width:130,
        },
    ]

    const seleccionMenu= (e) =>{
        props.setMenuViewState(e.target.id)
    }

    return(
        <React.Fragment>

            <Typography
                variant="h4"
                sx={{
                    fontFamily:"Shantell Sans",
                    marginTop:"30px",
                    marginBottom:"30px",
                    textAlign:"center"
                }}
            >
                Bienvenido Suchmolin11
            </Typography>
            <Grid container spacing={2} sx={{padding:"30px"}}>

                {
                    imgBoton.map((item)=>(
                        <Grid 
                            key={item.alt}
                            item 
                            lg={3} md={6} sm={3} xs={12}
                            
                        >
                            <Button
                                sx={{
                                    display:"flex",
                                    alignItems:"center",
                                    justifyContent:"center",
                                    flexDirection:"column",
                                    "&:hover": {
                                        backgroundColor: 'lightblue'
                                    },
                                }}
                                onClick={seleccionMenu}
                                >
                                <Box
                                    id={item.titulo}
                                    sx={{borderRadius:"5px", marginBottom:"8px"}}
                                    width={item.width}
                                    component="img"
                                    alt={item.alt}
                                    src={item.ruta}
                                />
                                <Typography 
                                    variant="subtitle2"
                                    sx={{
                                        fontFamily:"Shantell Sans",
                                        fontWeight:"bold"
                                    }}
                                    >
                                    {item.titulo}
                                </Typography>
                            </Button>
                        </Grid>

                    ))
                }
                
            </Grid>
        </React.Fragment>
    );
}

export default HomeView;