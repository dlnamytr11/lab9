import MovieCard from "./MovieCard";

export default function MovieList({ movies, onSelect }) {
  if (!movies || movies.length === 0) return <p>Ничего не найдено.</p>;

  return (
    <div className="grid">
      {movies.map((movie, index) => (
  <MovieCard
    key={movie.imdbID + "_" + index}
    movie={movie}
    onClick={() => onSelect(movie)}
  />
))}
    </div>
  );
}
