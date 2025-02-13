/***************************************************************
 * File: /components/chatbot/ChatThemeProvider.js
 * Descripción:
 *  - Envuelve la app (o el chatbot) en un ThemeProvider de MUI.
 *  - Ajuste de colores primario/secondary con nuestra paleta.
 * Principios aplicados:
 *  - SRP: Solo define el theme MUI y lo provee al árbol de componentes.
 ***************************************************************/

import React, { createContext } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

export const ChatThemeContext = createContext();

export const ChatThemeProvider = ({ children }) => {
  // Definimos colores y tipografías (opcional)
  const muiTheme = createTheme({
    palette: {
      primary: {
        main: '#ff007f', // color principal (rosa neón)
      },
      secondary: {
        main: '#1ee3cf', // turquesa neón
      },
    },
    typography: {
      fontFamily: ['Work Sans', 'Arial', 'sans-serif'].join(','),
      body1: {
        fontSize: '0.95rem',
      },
      button: {
        textTransform: 'none',
      },
    },
  });

  return (
    <ChatThemeContext.Provider value={muiTheme}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ChatThemeContext.Provider>
  );
};
