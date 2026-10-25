export default function MovieCard({ movie, index, onDeleteMovie }) {
  const badgeConfig = {
    completed: { text: 'Selesai Ditonton', class: 'bg-success' },
    watching: { text: 'Sedang Ditonton', class: 'bg-warning text-dark' },
    plan_to_watch: { text: 'Ingin Ditonton', class: 'bg-info text-dark' }
  };

  const currentBadge = badgeConfig[movie.status] || badgeConfig.plan_to_watch;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img src={movie.poster} alt={movie.judul} width="45" className="rounded" />
      </td>
      <td className="fw-semibold">{movie.judul}</td>
      <td><span className="badge bg-secondary">{movie.tipe}</span></td>
      <td>{movie.genre}</td>
      <td><span className={`badge ${currentBadge.class}`}>{currentBadge.text}</span></td>
      <td className="text-warning fw-bold">{movie.rating ? `${movie.rating}/10` : '-'}</td>
      <td className="text-center">
        <button
          onClick={() => onDeleteMovie(movie.id)}
          className="btn btn-outline-danger btn-sm"
        >
          Hapus
        </button>
      </td>
    </tr>
  );
}