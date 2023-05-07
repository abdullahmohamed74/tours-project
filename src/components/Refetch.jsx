function Refetch({fetchTours}) {
  return (
    <main>
      <div className="title">
        <h2>No tours left</h2>
        <button
          className="btn"
          style={{ marginTop: '1rem' }}
          onClick={fetchTours}
        >
          refresh
        </button>
      </div>
    </main>
  );
}
export default Refetch;
