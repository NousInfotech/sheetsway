"use client";

import { useEffect, useRef } from "react";

const useAutoScroll = (activeIndex) => {
  const containerRef = useRef(null);
  const activeButtonRef = useRef(null);

  useEffect(() => {
    if (activeButtonRef.current && containerRef.current) {
      const container = containerRef.current;
      const activeButton = activeButtonRef.current;

      // Calculate scroll position to center the active button
      const scrollLeft =
        activeButton.offsetLeft -
        container.offsetWidth / 2 +
        activeButton.offsetWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return { containerRef, activeButtonRef };
};

export default useAutoScroll;
