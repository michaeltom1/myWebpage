import { useRef, useEffect } from "react";

export default function useScrollFadeIn(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("fade-in-section-visible");
        }
      },
      { threshold: options.threshold || 0.2 }
    );
    node.classList.add("fade-in-section");
    observer.observe(node);
    return () => observer.disconnect();
  }, [options.threshold]);

  return ref;
}

// CSS classes to add in global styles:
// .fade-in-section { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(.5,0,0,1), transform 0.8s cubic-bezier(.5,0,0,1); }
// .fade-in-section-visible { opacity: 1; transform: none; }
