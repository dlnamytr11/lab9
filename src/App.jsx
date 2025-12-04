import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";

function App() {
  const [query, setQuery] = useState("batman");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = "e1fa2d96"; // заменишь на свой

  useEffect(() => {
  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;

      const res = await fetch(url);

      if (!res.ok) throw new Error("Ошибка сети");

      const data = await res.json();

      if (data.Response === "False") {
        setMovies([]);
        setError(data.Error);
      } else {
        setMovies(data.Search);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (query.trim() !== "") fetchMovies();
}, [query]);


  return (
    <div className="container">
      <h1>Каталог фильмов</h1>

      <SearchBar onSearch={setQuery} />

      {isLoading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}

      <MovieList movies={movies} onSelect={setSelectedMovie} />

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default App
