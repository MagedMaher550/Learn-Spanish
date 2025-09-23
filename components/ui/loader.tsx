"use client";

import type { JSX } from "react";

interface LoaderProps {
  fullHeight?: boolean;
  width?: number;
  height?: number;
}

export default function Loader({
  fullHeight = true,
  width = 110,
  height = 110,
}: LoaderProps): JSX.Element {
  return (
    <div
      className={`flex justify-center items-center bg-#121212 ${
        fullHeight ? "h-screen" : "h-auto"
      }`}
    >
      <div
        className="rounded-full border-[5px] border-gray-400 border-l-gray-200 animate-spin"
        style={{ width: `${width}px`, height: `${height}px`, margin: "100px" }}
      />
    </div>
  );
}
