"use client";
import { useEffect, useState } from "react";

export const useViewportWidth = ({
  width,
  points,
}: Readonly<{ width: number[]; points: number[] }>) => {
  const getWidth = () =>
    typeof window !== "undefined" ? window.innerWidth : 1920;

  const [winWidth, setWinWidth] = useState(getWidth);

  useEffect(() => {
    const handleResize = () => {
      setWinWidth(getWidth());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  for (let i = 0; i < points.length; i++) {
    if (winWidth < points[i]) {
      return width[i];
    }
  }

  return width[width.length - 1]; 
};
