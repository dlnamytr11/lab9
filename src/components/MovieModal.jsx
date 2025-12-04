import { useEffect, useState } from "react";

export default function MovieModal({ movie, onClose }) {
  const [details, setDetails] = useState(null);

  const API_KEY = "e1fa2d96";

  useEffect(() => {
    const loadDetails = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
      );
      const data = await res.json();
      setDetails(data);
    };
    loadDetails();
  }, [movie]);

  if (!details) return <p>Загрузка...</p>;

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{details.Title}</h2>
        <img src={details.Poster} alt="" />
        <p><b>Год:</b> {details.Year}</p>
        <p><b>Жанр:</b> {details.Genre}</p>
        <p><b>Рейтинг IMDb:</b> {details.imdbRating}</p>
        <p><b>Описание:</b> {details.Plot}</p>

        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}
