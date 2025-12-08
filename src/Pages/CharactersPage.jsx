// Characters list page - GOT

import { useState, useEffect } from "react";
import { getCharacters } from "../services/api";
import { Box, Grid, Typography } from "@mui/material";
import CharacterCard from "../Components/CharacterCard";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
  async function fetchData() {
    try {
      const data = await getCharacters();
      setCharacters(data);
    } catch (err) {
      console.error(err); // ← agregado
      setError("Ocurrió un error al cargar los personajes");
    } finally {
      setLoading(false);
    }
  }
  fetchData();
}, []);

  if (loading) {
    return <p style={{ color: "white", textAlign: "center" }}>Cargando personajes...</p>;
  }

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  }

  return (
    <Box
      sx={{
        bgcolor: "#050509",
        minHeight: "100vh",
        color: "#f5f5f5",
        py: 4,
      }}
    >
      <Box sx={{ width: "100%", px: 4 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 1,
            fontFamily: "Cinzel, serif",
            color: "#d4af37",
            textAlign: "center",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Personajes de Game of Thrones
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 4,
            textAlign: "center",
            opacity: 0.8,
            color: "#B343FF",
          }}
        >
          Total de personajes: {characters.length}
        </Typography>

        <Grid
  container
  spacing={3}
  justifyContent="center"
>
  {characters.map((character) => (
    <Grid
      item
      key={character.id}
      sx={{ width: "230px" }} // 👈 ANCHO FIJO
    >
      <CharacterCard character={character} />
    </Grid>
  ))}
</Grid>
      </Box>
    </Box>
  );
}
