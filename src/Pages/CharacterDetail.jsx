// CharacterDetail.jsx - Página de detalle de personaje GOT

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCharacterById } from "../services/api";
import { Box, Typography, Button } from "@mui/material";

export default function CharacterDetail() {
  const { id } = useParams(); // ← obtenemos el id desde la URL
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
      {/* Imagen grande tipo póster */}
      <img
        src={character.imageUrl}
        alt={character.fullName}
        style={{
          width: "300px",
          height: "400px",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />

      {/* Nombre */}
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

      {/* Título */}
      <Typography
        variant="h6"
        sx={{
          opacity: 0.8,
          fontFamily: "Cinzel, serif",
          mb: 1,
        }}
      >
        {character.title || "Sin título"}
      </Typography>

      {/* Casa */}
      <Typography sx={{ opacity: 0.7, mb: 4 }}>
        Casa: <strong>{character.family || "Desconocida"}</strong>
      </Typography>

      {/* Botón volver */}
      <Button
        component={Link}
        to="/personajes"
        variant="outlined"
        sx={{
          bgcolor: "#d4af37",
      color: "#000",
    fontWeight: "bold",
    "&:hover": {
      bgcolor: "#B343FF", // morado hover
      color: "#fff",
          },
        }}
      >
        ← Volver a los personajes
      </Button>
    </Box>
  );
}