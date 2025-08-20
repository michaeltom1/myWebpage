import { useRef, useEffect } from "react";

export default function useStaggeredReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const items = node.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            const delay = (options.stagger || 120) * i;
            setTimeout(() => el.classList.add("reveal-visible"), delay);
          });
          observer.disconnect();
        }
      },
      { threshold: options.threshold || 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options.stagger, options.threshold]);

  return ref;
}
