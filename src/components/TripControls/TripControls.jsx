import "./TripControls.scss";

export const TripControls = ({ query, onQueryChange, sortByRating, onToggleSort }) => {
  return (
    <div className="controls">
      <input
        className="controls__search"
        type="search"
        placeholder="Search trips by name..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />

      <label className="controls__toggle">
        <input
          type="checkbox"
          checked={sortByRating}
          onChange={(e) => onToggleSort(e.target.checked)}
        />
        <span>Sort by rating</span>
      </label>
    </div>
  );
};
