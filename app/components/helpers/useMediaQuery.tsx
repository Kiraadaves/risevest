"use client";
import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMdScreen(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMdScreen(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMdScreen;
};

export default useMediaQuery;
