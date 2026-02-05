
import "./TripGrid.scss";
import { TripCard } from "../TripCard/TripCard";
import { memo } from "react";

export const TripGrid = memo(function TripGrid({ trips, onMoreInfo }) {
    
  return (
    <section className="trip-grid" aria-label="Trips">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} onMoreInfo={onMoreInfo} />
      ))}
    </section>
  );
});
