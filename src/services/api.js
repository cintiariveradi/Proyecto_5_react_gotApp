// URL base de la API de Game of Thrones
const BASE_URL = "https://thronesapi.com/api/v2";

// Función 1: traer todos los personajes (53)
export async function getCharacters() {
    try {
  const response = await fetch(`${BASE_URL}/Characters`);

  if (!response.ok) {
    throw new Error("Error al obtener los personajes");
  }

  const data = await response.json(); 
  return data;
   } 
   catch (error) {
    console.error("Error en getCharacters:", error);
    throw error;
}
}

// Función 2: traer un personaje por id
export async function getCharacterById(id) {
  try {
    const response = await fetch(`${BASE_URL}/Characters/${id}`);

    if (!response.ok) {
      throw new Error("Error al obtener el personaje");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getCharacterById:", error);
    throw error;
  }
}