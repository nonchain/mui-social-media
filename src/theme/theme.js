import { amber, grey } from '@mui/material/colors';

export const getDesignTokens = (mode) => ({
   palette: {
      mode,
      ...(mode === 'light'
         ? {
            primary: {
               main: "#2967e1",
               light: "#4988e1",
               dark: "#2927e1",
            },
            background: {
               default: "#fafafa",
               paper: "#fefefa",
            },
            divider: amber[200],
            text: {
               primary: grey[900],
               secondary: grey[800],
            },
         }
         : {
            primary: {
               main: "#323232"
            },
            divider: "#1f1f1f",
            background: {
               default: "#1f1f1f",
               paper: "#2f2f2f",
            },
            text: {
               primary: '#fff',
               secondary: grey[500],
            },
         }),
   },
   shape: {
      minRadius: "2px",
      midRadius: "4px",
      maxRadius: "8px"
   },
   typography: {
      fontFamily: "Josefin Sans, sans-serif",
      body1: {
         fontFamily: 'Poppins, Arial, sans-serif',
      },
   },
});