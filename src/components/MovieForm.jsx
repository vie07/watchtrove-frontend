import { useState } from 'react';

export default function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Film');
  const [genre, setGenre] = useState('');
  const [status, setStatus] = useState('plan_to_watch');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newMovie = {
      id: Date.now(),
      judul: title,
      tipe: type,
      genre: genre || 'Umum',
      status: status,
      rating: rating ? parseFloat(rating) : '-',
      poster: '/images/poster-interstellar.jpg'
    };

    onAddMovie(newMovie);
    setTitle('');
    setGenre('');
    setRating('');
  };

  return (
    <div className="card bg-surface p-4 border-secondary mb-4">
      <h4 className="text-info mb-3">Tambah Entri ke Watchlist</h4>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label className="form-label text-light small">Judul Film / Series:</label>
            <input
              type="text"
              className="form-control bg-input text-light border-secondary"
              placeholder="Contoh: Oppenheimer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label text-light small">Tipe:</label>
            <select
              className="form-select bg-input text-light border-secondary"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Film">Film</option>
              <option value="Series">Series</option>
              <option value="Anime">Anime</option>
            </select>
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label text-light small">Genre:</label>
            <input
              type="text"
              className="form-control bg-input text-light border-secondary"
              placeholder="Contoh: Sci-Fi, Drama"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label text-light small">Status:</label>
            <select
              className="form-select bg-input text-light border-secondary"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="plan_to_watch">Ingin Ditonton</option>
              <option value="watching">Sedang Ditonton</option>
              <option value="completed">Selesai Ditonton</option>
            </select>
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label text-light small">Rating (0 - 10):</label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="10"
              className="form-control bg-input text-light border-secondary"
              placeholder="8.5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary btn-sm px-4">Tambah</button>
          </div>
        </div>
      </form>
    </div>
  );
}