import { useEffect, useState } from "react";

export function useTrips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const optimizeImageUrl = (url) => {
    if (!url.includes("images.unsplash.com")) return url;

    const joiner = url.includes("?") ? "&" : "?";

    return `${url}${joiner}w=800&auto=format&fit=crop&q=70`;
  };

  useEffect(() => {
    fetch("/data/data.json")
      .then((r) => {
        if (!r.ok) throw new Error("Data fetching failed!");
        return r.json();
      })
      .then((data) => {
        const optimized = data.trips.map((t) => ({
          ...t,
          image: optimizeImageUrl(t.image),
        }));

        setTrips(optimized);
     })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { trips, loading, error };
}
