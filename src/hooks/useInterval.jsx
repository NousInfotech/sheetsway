"use client";

import { useEffect, useState } from "react";

function useInterval(initialState = 0, length = 0, timer = 3000) {
  const [active, setActive] = useState(initialState);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, timer);

    return () => {
      clearInterval(id);
    };
  }, [length, timer, active]);

  return [active, setActive];
}

export default useInterval;
