import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./TripModal.scss";

export const TripModal = ({ trip, onClose }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const modalContent = (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose}>×</button>

        <img
            className="modal__image"
            src={trip.image}
            alt={trip.name}
            decoding="async"
            loading="eager"
            onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/placeholder.jpg";
                e.currentTarget.alt = `${trip.name} (image unavailable)`;
            }}
    />

        <div className="modal__content">
          <h2>{trip.name}</h2>
          <p><strong>Rating:</strong> {trip.rating}★</p>
          <p>{trip.long_description}</p>
        </div>
      </div>
    </div>
  );

  return createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};
