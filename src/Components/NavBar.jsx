import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#050509",
          borderBottom: "1px solid #d4af37",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "Cinzel, serif",
                color: "#d4af37",
                textDecoration: "none",
                "&:hover": { color: "#B343FF" },
                "&:focus-visible": { outline: "none" },
                WebkitTapHighlightColor: "transparent",
              }}
            >
              GOT Characters 🐉
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                component={Link}
                to="/"
                disableRipple
                sx={{
                  color: "#d4af37",
                  textTransform: "none",
                  "&:hover": { color: "#B343FF" },
                }}
              >
                Home
              </Button>

              <Button
                component={Link}
                to="/personajes"
                disableRipple
                sx={{
                  color: "#d4af37",
                  textTransform: "none",
                  "&:hover": { color: "#B343FF" },
                }}
              >
                Personajes
              </Button>

              <Button
                component={Link}
                to="/buscar"
                disableRipple
                sx={{
                  color: "#d4af37",
                  textTransform: "none",
                  "&:hover": { color: "#B343FF" },
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
