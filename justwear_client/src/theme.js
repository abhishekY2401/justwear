import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["'Montserrat', sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Taviraj", "sans-serif"].join(","),
      fontSize: 48,
      fontWeight: 800
    },
    h2: {
      fontFamily: ["Playfair Display", "sans-serif"].join(","),
      fontSize: 36,
      fontWeight: 500
    },
    h3: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
