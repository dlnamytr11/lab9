export default function MovieCard({ movie, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}
