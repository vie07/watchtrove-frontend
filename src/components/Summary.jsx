export default function Summary({ movies }) {
  const completed = movies.filter((m) => m.status === 'completed').length;
  const watching = movies.filter((m) => m.status === 'watching').length;
  const plan = movies.filter((m) => m.status === 'plan_to_watch').length;

  return (
    <div className="row g-3 mb-4">
      <div className="col-12 col-md-4">
        <div className="card bg-surface text-light p-3 border-secondary h-100">
          <span className="text-secondary small">Selesai Ditonton</span>
          <h3 className="text-success fw-bold my-1">{completed}</h3>
          <small className="text-secondary">Film ditamatkan</small>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="card bg-surface text-light p-3 border-secondary h-100">
          <span className="text-secondary small">Sedang Ditonton</span>
          <h3 className="text-warning fw-bold my-1">{watching}</h3>
          <small className="text-secondary">Sedang berjalan</small>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="card bg-surface text-light p-3 border-secondary h-100">
          <span className="text-secondary small">Rencana Tontonan</span>
          <h3 className="text-info fw-bold my-1">{plan}</h3>
          <small className="text-secondary">Masuk watchlist</small>
        </div>
      </div>
    </div>
  );
}