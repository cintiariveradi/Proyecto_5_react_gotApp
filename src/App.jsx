// App main file - GOT project

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./Pages/Home";
import CharactersPage from "./Pages/CharactersPage";
import CharacterDetail from "./Pages/CharacterDetail";

// Import components
import Navbar from "./Components/NavBar";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<CharactersPage />} />
          <Route path="/personajes/:id" element={<CharacterDetail />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
