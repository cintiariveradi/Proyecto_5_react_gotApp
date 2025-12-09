import { Component } from "react";
import { Box, Typography, Button } from "@mui/material";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error capturado por ErrorBoundary:", error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            bgcolor: "#050509",
            minHeight: "100vh",
            color: "#f5f5f5",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            p: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Cinzel, serif",
              color: "#d4af37",
              mb: 2,
            }}
          >
            Algo salió mal
          </Typography>

          <Typography sx={{ mb: 3, opacity: 0.8 }}>
            Ocurrió un error inesperado al renderizar la aplicación.
          </Typography>

          <Button
            variant="outlined"
            onClick={this.handleReload}
            sx={{
              borderColor: "#d4af37",
              color: "#d4af37",
              "&:hover": {
                borderColor: "#b58e2c",
                color: "#b58e2c",
              },
            }}
          >
            Recargar página
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}
