import { useEffect, useState } from "react";

const useViewPortWidth = () => {
  const [viewPortWidth, setViewPortWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setViewPortWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      setViewPortWidth(window.innerWidth);
    }
  }, []);

  return { viewPortWidth, setViewPortWidth };
};

export default useViewPortWidth;
