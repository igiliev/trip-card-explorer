import { useCallback, useEffect, useRef, useState } from "react";

export function useInView(options = {}) {
  const [node, setNode] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const observerRef = useRef(null);

  const {
    root = null,
    rootMargin = "200px",
    threshold = 0.1,
  } = options;

  const ref = useCallback((el) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return;

    setIsVisible(false);

    if (observerRef.current) observerRef.current.disconnect();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);
    observerRef.current = observer;

    return () => observer.disconnect();
  }, [node, root, rootMargin, threshold]);

  return [ref, isVisible];
}
