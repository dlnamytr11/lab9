import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        placeholder="Введите название фильма..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Поиск</button>
    </form>
  );
}
