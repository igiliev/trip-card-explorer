import { useEffect, useState } from "react";

export function useTrips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((r) => {
        if (!r.ok) throw new Error("Data fetching failed!");
        return r.json();
      })
      .then((data) => setTrips(data.trips))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { trips, loading, error };
}
