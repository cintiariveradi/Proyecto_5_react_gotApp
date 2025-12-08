// Navbar component - GOT
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#050509", // fondo oscuro tipo GOT
        borderBottom: "1px solid #d4af37", // línea dorada
      }}
    >
      <Toolbar>
        {/* Título / Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#d4af37",
            textDecoration: "none",
          }}
        >
          GOT Characters
        </Typography>

        {/* Links de navegación */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: "#f5f5f5", textTransform: "none" }}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/personajes"
            sx={{ color: "#f5f5f5", textTransform: "none" }}
          >
            Personajes
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
