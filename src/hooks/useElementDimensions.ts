import { RefObject, useLayoutEffect, useState } from "react";

export const useElementDimensions = <T>(ref: RefObject<MeasurableRef<T>>) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleSize = () => {
    if (!ref.current) {
      return;
    }

    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return { width, height, minSize: width < height ? width : height };
};
