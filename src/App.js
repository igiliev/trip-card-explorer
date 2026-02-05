import './App.css';
import { useState, useMemo, useTransition, useCallback } from 'react';
import { TripGrid } from './components/TripGrid/TripGrid';
import { TripModal } from './components/TripModal/TripModal';
import { TripControls } from './components/TripControls/TripControls';
import { useTrips } from './hooks/useTrips';

function App() {

    const [selectedTrip, setSelectedTrip] = useState(null);
    const [query, setQuery] = useState("");
    const [sortByRating, setSortByRating] = useState(false);
    const { trips, loading, error } = useTrips();
    const closeModal = () => setSelectedTrip(null);
    const clearSearch = () => setQuery("");

    const handleMoreInfo = (trip) => setSelectedTrip(trip);

    const visibleTrips = useMemo(() => {
      const q = query.trim().toLowerCase();
      const filtered = q ? trips.filter((t) => t.name.toLowerCase().includes(q.toLowerCase())) : trips;
      const sorted = sortByRating ? [...filtered].sort((a, b) => b.rating - a.rating) : filtered;

      return sorted;
  }, [trips, query, sortByRating]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <div className="container">
        <TripControls
          query={query}
          onQueryChange={setQuery}
          sortByRating={sortByRating}
          onToggleSort={setSortByRating}
        />

        {/* Results bar */}
        <div className="results-bar">
          <span className="results-count">
            Showing {visibleTrips.length} of {trips.length} trips
          </span>

          {query && (
            <button className="clear-btn" onClick={clearSearch}>
              Clear search
            </button>
          )}
        </div>

        {/* Empty state or grid */}
        {visibleTrips.length === 0 ? (
          <div className="empty-state">
            <p>No trips match "{query}".</p>
            <button onClick={clearSearch}>Clear search</button>
          </div>
        ) : (
          <TripGrid trips={visibleTrips} onMoreInfo={handleMoreInfo} />
        )}
      </div>

      {/* Modal via portal */}
      {selectedTrip && (
        <TripModal trip={selectedTrip} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
