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
        padding: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Cinzel, serif",
          color: "#d4af37",
          mb: 2,
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
        Explora los personajes de Game of thrones y descubre sus casas, títulos y más.
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
      bgcolor: "#B343FF", // morado hover
      color: "#fff",
    },
    "&:active": {
      bgcolor: "#B343FF", // al hacer click
      color: "#fff",
    },
    "&:focus": {
      bgcolor: "#B343FF", // cuando queda con foco
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
