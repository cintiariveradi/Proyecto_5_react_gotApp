// src/styles/theme.js
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#050509",
      paper: "#0b0b10",
    },
    primary: {
      main: "#d4af37",
    },
    secondary: {
      main: "#B343FF",
    },
    text: {
      primary: "#f5f5f5",
      secondary: "rgba(245,245,245,0.7)",
    },
  },
  typography: {
    fontFamily: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "sans-serif",
    ].join(","),
  },
});
