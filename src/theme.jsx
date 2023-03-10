import React from 'react';
import { createTheme} from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: '#0535F9',
      },
      primaryLight: {
        main: '#00C1FF',
      },
      secondary: {
        main: '#00BFD3',
      },
      secondaryLight: {
        main: '#00FFE0'
      },
      warning: {
        main: '#FF8F00',
      },
      warningLight: {
        main: '#FFC100',
      },
      error: {
        main: '#EF2808',
      },
      pruebaLight: {
        main: '#000'
      }
    },
  });
  
export default theme;  