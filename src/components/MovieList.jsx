import MovieCard from './MovieCard';

export default function MovieList({ movies, onDeleteMovie }) {
  return (
    <article className="card bg-surface p-4 border-secondary mb-4">
      <h4 className="text-light border-start border-4 border-info ps-2 mb-3">Koleksi Watchlist</h4>
      
      {movies.length === 0 ? (
        <p className="text-secondary text-center py-4 my-0">Belum ada data tontonan</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-dark table-hover align-middle mb-0">
            <thead>
              <tr className="text-info">
                <th>No</th>
                <th>Poster</th>
                <th>Judul Film/Series</th>
                <th>Tipe</th>
                <th>Genre</th>
                <th>Status</th>
                <th>Rating</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((film, index) => (
                <MovieCard
                  key={film.id}
                  movie={film}
                  index={index}
                  onDeleteMovie={onDeleteMovie}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </article>
  );
}