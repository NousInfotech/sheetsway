"use client";

import { useEffect, useState } from "react";

export default function useCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("p, span, h1, h2, h3, h4, h5, h6, li, ul, img, video");

      setIsInteractive(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return [position, isInteractive];
}
