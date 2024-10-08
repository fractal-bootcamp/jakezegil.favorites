import { useState, useEffect } from "react";
import "./App.css";
import { MovieCard } from "./components/MovieCard";

const useMovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3001/movies?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [searchTerm]);

  return { movies, isLoading, error, searchTerm, setSearchTerm };
};

function App() {
  const { movies, isLoading, error, searchTerm, setSearchTerm } = useMovieSearch();

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          imageUrl={movie.imageUrl}
          description={movie.description}
          isLiked={movie.isLiked}
          onLike={() => {/* Implement like functionality */}}
        />
      ))}
    </div>
  );
}

export default App;
