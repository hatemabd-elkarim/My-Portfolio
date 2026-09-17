import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Lightbox } from "./lightbox";

// ─── Image Carousel ───────────────────────────────────────────────────────────

export function ImageCarousel({
  images,
  accent,
  height = "200px",
}: {
  images: { url: string; alt: string }[];
  accent: string;
  height?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const startX = useRef(0);
  const movedRef = useRef(false);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    movedRef.current = false;
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    if (Math.abs(e.clientX - startX.current) > 6) movedRef.current = true;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragging(false);
    const dx = e.clientX - startX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
  };
  const onImageClick = () => {
    // Only treat as "open preview" if the pointer didn't drag
    if (!movedRef.current) setLightboxOpen(true);
  };

  return (
    <div
      style={{
        position: "relative",
        height,
        overflow: "hidden",
        borderBottom: "2px solid #475569",
        background: "#0a0f16",
        cursor: "zoom-in",
        userSelect: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onClick={onImageClick}
    >
      {/* Images — only mount the active slide + its immediate neighbors so we
          don't force-load every image in every project on page load */}
      {images.map((img, i) => {
        const distance = Math.min(
          Math.abs(i - idx),
          images.length - Math.abs(i - idx),
        );
        if (distance > 1) return null;
        return (
          <img
            key={i}
            src={img.url}
            alt={img.alt}
            draggable={false}
            loading="lazy"
            decoding="async"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: i === idx ? 1 : 0,
              transition: "opacity 0.25s ease",
              pointerEvents: "none",
            }}
          />
        );
      })}

      {/* Zoom hint icon */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          width: "22px",
          height: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(15,20,28,0.8)",
          border: "1px solid #475569",
          color: "#F3F4F6",
          zIndex: 5,
          pointerEvents: "none",
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </div>

      {lightboxOpen &&
        createPortal(
          <Lightbox
            images={images}
            initialIndex={idx}
            accent={accent}
            onClose={() => setLightboxOpen(false)}
            onIndexChange={setIdx}
          />,
          document.body,
        )}

      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(15,20,28,0.6) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Arrow buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        style={{
          position: "absolute",
          left: "8px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(15,20,28,0.85)",
          border: `1px solid ${accent}`,
          color: accent,
          width: "28px",
          height: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "2px 2px 0px #000000",
          fontFamily: "var(--font-pixel)",
          fontSize: "10px",
          zIndex: 5,
        }}
      >
        ◀
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        style={{
          position: "absolute",
          right: "8px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(15,20,28,0.85)",
          border: `1px solid ${accent}`,
          color: accent,
          width: "28px",
          height: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "2px 2px 0px #000000",
          fontFamily: "var(--font-pixel)",
          fontSize: "10px",
          zIndex: 5,
        }}
      >
        ▶
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "6px",
          zIndex: 5,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setIdx(i);
            }}
            style={{
              width: i === idx ? "16px" : "6px",
              height: "6px",
              background: i === idx ? accent : "#475569",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.2s, background 0.2s",
              boxShadow: i === idx ? `0 0 4px ${accent}` : "none",
            }}
          />
        ))}
      </div>

      {/* Image counter */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          fontFamily: "var(--font-pixel)",
          fontSize: "7px",
          color: "#F3F4F6",
          background: "rgba(15,20,28,0.8)",
          border: "1px solid #475569",
          padding: "3px 6px",
          zIndex: 5,
        }}
      >
        {idx + 1}/{images.length}
      </div>
    </div>
  );
}
