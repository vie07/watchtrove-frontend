import { useState } from 'react';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

const INITIAL_DATA = [
  {
    id: 1,
    judul: "Interstellar",
    tipe: "Film",
    genre: "Sci-Fi, Adventure",
    status: "completed",
    rating: 9.5,
    poster: "/images/poster-interstellar.jpg"
  },
  {
    id: 2,
    judul: "Stranger Things",
    tipe: "Series",
    genre: "Drama, Sci-Fi",
    status: "watching",
    rating: 8.8,
    poster: "/images/poster-stranger-things.jpg"
  },
  {
    id: 3,
    judul: "Spirited Away",
    tipe: "Film",
    genre: "Animasi, Fantasy",
    status: "plan_to_watch",
    rating: 8.6,
    poster: "/images/poster-spirited-away.jpg"
  }
];

export default function App() {
  const [movies, setMovies] = useState(INITIAL_DATA);

  const handleAddMovie = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <>
      <Navbar />
      <main className="container pb-5">
        <Summary movies={movies} />
        <MovieForm onAddMovie={handleAddMovie} />
        <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} />
      </main>
    </>
  );
}