import React from 'react';
import { Container,
        Grid,
        Typography,
        Stack,
        FormControl,
        InputLabel,
        OutlinedInput,
        InputAdornment,
        IconButton,
        Box,
        Button,
    } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';


const FormLogin = () => {
  const navitateTo = useNavigate();

  const users = [
    {
      user:"suchmolin11",
      pass:"qwe123",
    },
    {
      user:"romel",
      pass:"asd123",
    }
  ]
  

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [loged, setLoged] = React.useState("");
    const [errorLogin, setErrorLogin] = React.useState(false);
    const [vacioLogin, setVacioLogin] = React.useState(false);
    
  
    const iniciandoSesion = () => {

      setVacioLogin(false);

      let usuario = document.getElementById('inputUsuario')
      let password = document.getElementById('inputPassword')
      let control = 0;

      if (usuario.value == '' || password.value == '') {
        setVacioLogin(true);
        return
      }
      
      users.forEach((item)=>{
        if (item.user == usuario.value && item.pass == password.value){
          setLoged(item.user);
          control = 1
          setErrorLogin(false);
          setTimeout(() => {
            navitateTo("/home");
          }, 2000);
        }
        if (control == 0){
          setErrorLogin(true);
        }
      })

      return
    }

    return(
        <Container sx={{ height:"450px", marginTop:"40px", paddingBottom:"50px"}}>
            <Grid container spacing={3}>
              <Grid 
                item
                xs={12} md={5}
                sx={{
                  display:"flex",
                  justifyContent:"center"
                }}
              > 
                <Stack 
                  spacing={2}
                  sx={{
                    display:"flex",
                    alignItems: "center",
                    marginTop:"40px"
                  }}
                >
                  <Typography 
                    variant="h4"
                    color="primary"
                    sx={{
                      letterSpacing: '.3rem',
                      fontFamily: "Shantell Sans",
                      fontWeight: "bold"
                    }}

                  >
                    Iniciar Sesión
                  </Typography>
                  <FormControl fullWidth >
                      <InputLabel htmlFor="inputUsuario" >Usuario</InputLabel>
                          <OutlinedInput
                              id="inputUsuario"
                              type='text'
                              label="usuario"
                              aria-label
                          />
                  </FormControl>

                  <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                      <InputLabel htmlFor="inputPassword">Contraseña</InputLabel>
                          <OutlinedInput
                              id="inputPassword"
                              type={showPassword ? 'text' : 'password'}
                              endAdornment={
                              <InputAdornment position="end">
                                  <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                  >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                              </InputAdornment>
                              }
                              label="Password"
                          />
                  </FormControl>

                  {errorLogin && 
                    <Typography color="error">Usuario o contraseña incorrectos.</Typography>
                  } 
                  {vacioLogin && 
                    <Typography color="error">Ingrese los campos Solicitados para iniciar Sesion</Typography>
                  } 

                  <Button 
                    id="botonInicioSesion"
                    variant="outlined"
                    color="primary"
                    onClick={iniciandoSesion}
                  >
                      Iniciar Sesión
                  </Button>
                </Stack>
              </Grid>
              <Grid item display={{xs:"none", md:"flex"}} md={7}>
                <Box
                  component="img"
                  sx={{
                    width: 500,
                  }}
                  alt="decorationLogin"
                  src="../../public/img/deco1.png"
                />
              </Grid>
            </Grid>
          </Container>

    );
}

export default FormLogin;