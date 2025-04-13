import { useGenre } from "./hooks/useGenres";

export default function GenresList() {
  const { data:genres } = useGenre();
  return (
    <ul>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
}
