import { memo } from "react";
import "./TripCard.scss";

export const TripCard = memo(function TripCard({ trip, onMoreInfo }) {

  const handleImgError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "/images/placeholder.jpg";
    e.currentTarget.alt = `${trip.name} (image unavailable)`;
  };

  return (
    <article className="trip-card">
      <img
        className="trip-card__image"
        src={trip.image}
        alt={trip.name}
        loading="lazy"
        onError={handleImgError}
      />

      <div className="trip-card__body">
        <div className="trip-card__header">
          <h3 className="trip-card__title">{trip.name}</h3>
          <span className="trip-card__rating">{trip.rating}★</span>
        </div>

        <p className="trip-card__desc">{trip.description}</p>

        <button className="trip-card__button" type="button" onClick={() => onMoreInfo(trip)}>
          More Info
        </button>
      </div>
    </article>
  );
});
