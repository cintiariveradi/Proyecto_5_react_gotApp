// Characters list page - GOT
import { useState, useEffect } from "react";
import { getCharacters } from "../services/api";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]); 
  const [loading, setLoading] = useState(true);    
  const [error, setError] = useState(null);         

  useEffect(() => {
    async function fetchCharacters() {
      try {
        setLoading(true);
        setError(null);

        const data = await getCharacters(); 
        setCharacters(data);                
      } catch (err) {
        setError("Ocurrió un error al cargar los personajes");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, []); 

  // Mientras carga
  if (loading) {
    return <p style={{ color: "white", textAlign: "center" }}>Cargando personajes...</p>;
  }

  // Si hubo error
  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  }

  // Si todo salió bien
  return (
    <div style={{ color: "white", padding: "1.5rem" }}>
      <h1>Personajes de Game of Thrones</h1>
      <p>Total de personajes: {characters.length}</p>

      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.fullName}</li>
        ))}
      </ul>
    </div>
  );
}