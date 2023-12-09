import { useState, useLayoutEffect } from "react";

export const useWindowDimensions = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return { width, height };
};
