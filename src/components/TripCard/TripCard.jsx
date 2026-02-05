import { memo, useState, useEffect } from "react";
import { useInView } from "../../hooks/useInView";
import "./TripCard.scss";

export const TripCard = memo(function TripCard({ trip, onMoreInfo }) {
  const [ref, inView] = useInView();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
    setImgFailed(false);
  }, [trip.id]);

  const src = imgFailed ? "/images/placeholder.jpg" : trip.image;

  return (
    <article ref={ref} className="trip-card">
      <div className="trip-card__media">
        {!imgLoaded && (
          <div className="trip-card__skeleton" />
        )}

        {inView && (
          <img
            className={`trip-card__image ${imgLoaded ? "is-loaded" : ""}`}
            src={src}
            alt={trip.name}
            decoding="async"
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => {
              setImgFailed(true);
              setImgLoaded(false);
            }}
          />
        )}
      </div>

      <div className="trip-card__body">
        <div className="trip-card__header">
          <h3 className="trip-card__title">{trip.name}</h3>
          <span className="trip-card__rating">{trip.rating}★</span>
        </div>

        <p className="trip-card__desc">{trip.description}</p>

        <button
          className="trip-card__button"
          onClick={() => onMoreInfo(trip)}
        >
          More Info
        </button>
      </div>
    </article>
  );
});
