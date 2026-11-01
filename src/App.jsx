import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi mengambil data API (TVMaze API)
  const fetchMovies = async () => {
    setLoading(true);
    setError(null);

    try {
      // Mengambil data katalog serial/film dari endpoint publik gratis tanpa API key
      const response = await fetch('https://api.tvmaze.com/shows');
      
      if (!response.ok) {
        throw new Error(`Gagal memuat data dari server (Status: ${response.status})`);
      }

      const data = await response.json();

      // Transformasi data API menyesuaikan structure WatchTrove
      const formattedData = data.slice(0, 12).map((item) => ({
        id: item.id,
        judul: item.name,
        tipe: item.type || "Series",
        genre: item.genres && item.genres.length > 0 ? item.genres.join(', ') : 'Umum',
        status: item.status === 'Ended' ? 'completed' : 'watching',
        rating: item.rating?.average || 7.5,
        poster: item.image?.medium || '/images/poster-interstellar.jpg'
      }));

      setMovies(formattedData);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat menghubungi API.');
    } finally {
      setLoading(false);
    }
  };

  // fetch otomatis saat komponen pertama kali dimuat
  useEffect(() => {
    fetchMovies();
  }, []);

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
        
        {/* State 1: Kondisi Loading */}
        {loading && (
          <div className="card bg-surface p-5 text-center border-secondary mb-4">
            <div className="spinner-border text-info mx-auto mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h5 className="text-light">Sedang memuat data tontonan dari API...</h5>
            <p className="text-secondary small mb-0">Mohon tunggu beberapa saat.</p>
          </div>
        )}

        {/* State 2: Kondisi Error & Tombol Coba Lagi */}
        {error && !loading && (
          <div className="alert alert-danger bg-surface border-danger text-light p-4 mb-4" role="alert">
            <div className="d-flex align-items-center mb-2">
              <strong className="text-danger fs-5">Terjadi Kesalahan Pengambilan Data</strong>
            </div>
            <p className="text-secondary">{error}</p>
            <button 
              className="btn btn-outline-danger btn-sm px-3"
              onClick={fetchMovies}
            >
              🔄 Coba Lagi
            </button>
          </div>
        )}

        {/* State 3: Kondisi Sukses (Menampilkan Form & Daftar Film) */}
        {!loading && !error && (
          <>
            <MovieForm onAddMovie={handleAddMovie} />
            <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} />
          </>
        )}
      </main>
    </>
  );
}