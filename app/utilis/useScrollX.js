import { useEffect, useState } from "react";

export function useScrollX(maxX = 400) {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      // Clamp the value between 0 and maxX
      setScrollX(Math.min(scrollTop, maxX));
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [maxX]);

  return scrollX;
}
