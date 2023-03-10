import React from 'react';
import './App.css'
import { ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import BoxPaper from './components/BoxPaper';
import HomeView from './components/HomeView';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <BoxPaper/>,
    },
    {
      path: '/home',
      element: <HomeView/>,
    },
  ]
)

function App() {

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App
