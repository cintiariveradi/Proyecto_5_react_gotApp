// Buscar.jsx - Página de búsqueda de personajes GOT

import { useState, useEffect, useRef } from "react";
import { Box, Typography, TextField, Grid } from "@mui/material";
import { getCharacters } from "../services/api";
import CharacterCard from "../Components/CharacterCard";

export default function Buscar() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔥 useRef DIRECTO en el input (como en el ejemplo de tu profe)
  const inputRef = useRef(null);

  // Llamada a la API
  useEffect(() => {
    async function fetchCharacters() {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (err) {
        console.error(err);
        setError("Ocurrió un error al cargar los personajes");
      } finally {
        setLoading(false);
      }
    }
    fetchCharacters();
  }, []);

  // 🔥 Foco automático EXACTO (igual al ejemplo de tu profe)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  if (loading) {
    return <p style={{ color: "white", textAlign: "center" }}>Cargando personajes...</p>;
  }

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  }

  // Filtrar personajes por nombre
  const filteredCharacters = characters.filter((character) =>
    character.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        bgcolor: "#050509",
        minHeight: "100vh",
        color: "#f5f5f5",
        py: 4,
      }}
    >
      <Box sx={{ width: "100%", px: 4, boxSizing: "border-box" }}>
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontFamily: "Cinzel, serif",
            color: "#d4af37",
            textAlign: "center",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Buscar personajes
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 3,
            textAlign: "center",
            opacity: 0.8,
          }}
        >
          Escribe el nombre de un personaje de Game of Thrones para buscarlo.
        </Typography>

        {/* 🔥 Input de búsqueda CON auto-focus real */}
        <Box sx={{ maxWidth: 400, mx: "auto", mb: 4 }}>
          <TextField
            inputRef={inputRef} // ← AQUÍ SE LOGRA EL AUTOFOCUS REAL
            fullWidth
            variant="outlined"
            label="Nombre del personaje"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": { color: "#f5f5f5" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#d4af37" },
              "& .MuiOutlinedInput-root": {
                color: "#f5f5f5",
                "& fieldset": { borderColor: "#d4af37" },
                "&:hover fieldset": { borderColor: "#b58e2c" },
                "&.Mui-focused fieldset": { borderColor: "#b58e2c" },
              },
            }}
          />
        </Box>

        {/* Resultados */}
        {filteredCharacters.length === 0 ? (
          <Typography sx={{ textAlign: "center", opacity: 0.8, mt: 4 }}>
            No se encontraron personajes con ese nombre.
          </Typography>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {filteredCharacters.map((character) => (
              <Grid item key={character.id} sx={{ width: "230px" }}>
                <CharacterCard character={character} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}
