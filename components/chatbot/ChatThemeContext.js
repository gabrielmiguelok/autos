import React, { createContext } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

export const ChatThemeContext = createContext();

export const ChatThemeProvider = ({ children, mode = 'light' }) => {
  // Paleta de colores más corporativa y formal para 'light' y 'dark'
  const colors = {
    light: {
      primary: '#00509e',       // Azul corporativo
      primaryDark: '#003b73',   // Versión más oscura
      accent: '#ffbc42',        // Acento cálido
      secondary: {
        main: '#ffbc42',        // También para 'secondary'
      },
      background: '#ffffff',
      backgroundSecondary: '#f5f5f5',
      textPrimary: '#000000',
      textSecondary: '#757575',
    },
    dark: {
      primary: '#00509e',
      primaryDark: '#003b73',
      accent: '#ffbc42',
      secondary: {
        main: '#ffbc42',
      },
      background: '#1b1b1b',     // Fondo principal oscuro
      backgroundSecondary: '#2b2b2b',
      textPrimary: '#ffffff',
      textSecondary: '#cccccc',
    },
  };

  const currentColors = colors[mode] || colors.light;

  // Creación de un objeto de tema personalizado
  const theme = {
    mode,
    colors: currentColors,
    fonts: {
      main: 'Work Sans, Arial, sans-serif',
    },
  };

  // Creamos un theme de Material UI con valores de primary y secondary
  const muiTheme = createTheme({
    palette: {
      mode,
      primary: {
        main: currentColors.primary,
      },
      secondary: {
        main: currentColors.secondary.main,
      },
      background: {
        default: currentColors.background,
        paper: currentColors.backgroundSecondary,
      },
    },
    typography: {
      fontFamily: 'Work Sans, Arial, sans-serif',
    },
  });

  return (
    <ChatThemeContext.Provider value={theme}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ChatThemeContext.Provider>
  );
};
