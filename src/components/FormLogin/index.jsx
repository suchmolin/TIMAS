import React, { useState, useEffect } from "react";
import {
  Container,
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
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const FormLogin = () => {
  const navitateTo = useNavigate();
  const { loginFire, isLogged } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [errorLogin, setErrorLogin] = useState(false);
  const [vacioLogin, setVacioLogin] = useState(false);
  const [handlerLogin, setHandlerLogin] = useState({ user: "", pass: "" });

  const iniciandoSesion = async () => {
    setErrorLogin(false);
    setVacioLogin(false);
    if (handlerLogin.user == "" || handlerLogin.pass == "") {
      setVacioLogin(true);
      return;
    }

    const response = await loginFire(handlerLogin.user, handlerLogin.pass);
    if (response && response.operationType === "signIn") {
      navitateTo("/home");
    } else {
      setErrorLogin(true);
    }

    return;
  };

  return (
    <Container
      sx={{ height: "450px", marginTop: "40px", paddingBottom: "50px" }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form onSubmit={iniciandoSesion} action="#">
            <Stack
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <Typography
                variant="h4"
                color="primary"
                sx={{
                  letterSpacing: ".3rem",
                  fontFamily: "Shantell Sans",
                  fontWeight: "bold",
                }}
              >
                Iniciar Sesión
              </Typography>
              <FormControl fullWidth>
                <InputLabel htmlFor="inputUsuario">Usuario</InputLabel>
                <OutlinedInput
                  id="inputUsuario"
                  type="email"
                  label="usuario"
                  value={handlerLogin.user}
                  onChange={(e) =>
                    setHandlerLogin((prevState) => ({
                      ...prevState,
                      user: e.target.value,
                    }))
                  }
                  aria-label
                />
              </FormControl>

              <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
                <InputLabel htmlFor="inputPassword">Contraseña</InputLabel>
                <OutlinedInput
                  value={handlerLogin.pass}
                  onChange={(e) =>
                    setHandlerLogin((prevState) => ({
                      ...prevState,
                      pass: e.target.value,
                    }))
                  }
                  id="inputPassword"
                  type={showPassword ? "text" : "password"}
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

              {errorLogin && (
                <Typography color="error">
                  Usuario o contraseña incorrectos.
                </Typography>
              )}
              {vacioLogin && (
                <Typography color="error">
                  Ingrese los campos Solicitados para iniciar Sesion
                </Typography>
              )}
              <Button
                onClick={iniciandoSesion}
                id="botonInicioSesion"
                variant="outlined"
                color="primary"
              >
                Iniciar Sesión
              </Button>
            </Stack>
          </form>
        </Grid>
        <Grid item display={{ xs: "none", md: "flex" }} md={7}>
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
};

export default FormLogin;
