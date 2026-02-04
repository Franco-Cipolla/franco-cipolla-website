import { useEffect, useRef, useState } from "react";

export default function UseInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
        ...options,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [inView, options]);

  return { ref, inView };
}
