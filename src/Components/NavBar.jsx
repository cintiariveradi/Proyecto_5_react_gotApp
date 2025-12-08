import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#050509", // Fondo oscuro estilo GOT
          borderBottom: "1px solid #d4af37", // Línea dorada
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Brand / Logo */}
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
                "&:link": { color: "#d4af37" },      // evita azul
                "&:visited": { color: "#d4af37" },   // evita morado/azul de link visitado
                "&:hover": { color: "#B343FF" },     // opcional: hover morado
                "&:active": { color: "#B343FF" },    // al hacer click
                "&:focus": { color: "#B343FF" },     // cuando queda con foco
                "&:focus-visible": { outline: "none" },
                WebkitTapHighlightColor: "transparent",
              }}
            >
              GOT Characters 🐉
            </Typography>

            {/* Items de navegación */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                component={Link}
                to="/"
                disableRipple
                sx={{
                  color: "#f5f5f5",
                  textTransform: "none",
                  "&:hover": { color: "#B343FF" },
                  "&:active": { color: "#B343FF" },
                  "&:focus": { color: "#B343FF" },
                  "&:focus-visible": { outline: "none" },
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                Home
              </Button>

              <Button
                component={Link}
                to="/personajes"
                disableRipple
                sx={{
                  color: "#f5f5f5",
                  textTransform: "none",
                  "&:hover": { color: "#B343FF" },
                  "&:active": { color: "#B343FF" },
                  "&:focus": { color: "#B343FF" },
                  "&:focus-visible": { outline: "none" },
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                Personajes
              </Button>

              <Button
                component={Link}
                to="/buscar" // en minúscula
                disableRipple
                sx={{
                  color: "#f5f5f5",
                  textTransform: "none",
                  "&:hover": { color: "#B343FF" },
                  "&:active": { color: "#B343FF" },
                  "&:focus": { color: "#B343FF" },
                  "&:focus-visible": { outline: "none" },
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                Buscar
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Espacio para que el contenido no quede debajo del navbar */}
      <Box sx={{ height: "70px" }} />
    </>
  );
}

