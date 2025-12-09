import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCharacterById } from "../services/api";
import { Box, Typography, Button } from "@mui/material";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar el personaje");
      } finally {
        setLoading(false);
      }
    }
    fetchDetail();
  }, [id]);

  if (loading) {
    return <p style={{ color: "white", textAlign: "center" }}>Cargando personaje...</p>;
  }

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  }

  return (
    <Box
      sx={{
        bgcolor: "#050509",
        minHeight: "100vh",
        color: "#d4af37",
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Imagen tipo póster */}
      <Box
        component="img"
        src={character.imageUrl}
        alt={character.fullName}
        sx={{
          width: "300px",
          height: "400px",
          objectFit: "cover",
          mb: 3,
          borderRadius: "4px",
          border: "1px solid #2e2e3a",
        }}
      />

      <Typography
        variant="h4"
        sx={{
          fontFamily: "Cinzel, serif",
          color: "#B343FF",
          mb: 2,
          letterSpacing: "0.1em",
        }}
      >
        {character.fullName}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          opacity: 0.85,
          fontFamily: "Cinzel, serif",
          mb: 1,
        }}
      >
        {character.title || "Sin título"}
      </Typography>

      <Typography sx={{ opacity: 0.75, mb: 4 }}>
        Casa: <strong>{character.family || "Desconocida"}</strong>
      </Typography>

      <Button
        component={Link}
        to="/personajes"
        variant="outlined"
        sx={{
          bgcolor: "#d4af37",
          color: "#000",
          fontWeight: "bold",
          "&:hover": {
            bgcolor: "#B343FF",
            color: "#fff",
          },
        }}
      >
        ← Volver a los personajes
      </Button>
    </Box>
  );
}
