"use client";
import { useState } from "react";
export function Photo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={"photo " + className}>
      {failed ? (
        <div className="photo-missing">
          <span>JM GUITARS</span>
          <small>Фотография пока недоступна</small>
        </div>
      ) : (
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
