// Home page - GOT

import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#050509",
        color: "#B343FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Cinzel, serif",
          color: "#d4af37",
          mb: 2,
          letterSpacing: "0.05em",
        }}
      >
        GOT Characters
      </Typography>

      <Typography
        variant="h6"
        sx={{
          maxWidth: "600px",
          opacity: 0.8,
          mb: 4,
        }}
      >
        Explora los personajes de Game of Thrones y descubre sus casas, títulos y más.
      </Typography>

      <Button
        component={Link}
        to="/personajes"
        variant="contained"
        disableRipple
        sx={{
          bgcolor: "#d4af37",
          color: "#000",
          fontWeight: "bold",
          "&:hover": {
            bgcolor: "#B343FF",
            color: "#fff",
          },
          "&:active": {
            bgcolor: "#B343FF",
            color: "#fff",
          },
          "&:focus": {
            bgcolor: "#B343FF",
            color: "#fff",
          },
          "&:focus-visible": { outline: "none" },
          WebkitTapHighlightColor: "transparent",
        }}
      >
        Ver personajes
      </Button>
    </Box>
  );
}
