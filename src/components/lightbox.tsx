import { useState, useEffect, useRef } from "react";

// ─── Image Lightbox (full preview, swipe left/right) ─────────────────────────

export function Lightbox({
  images,
  initialIndex,
  accent,
  onClose,
  onIndexChange,
}: {
  images: { url: string; alt: string }[];
  initialIndex: number;
  accent: string;
  onClose: () => void;
  onIndexChange?: (i: number) => void;
}) {
  const [idx, setIdx] = useState(initialIndex);
  const [dragX, setDragX] = useState(0);
  const draggingRef = useRef(false);
  const startX = useRef(0);

  const goTo = (i: number) => {
    const next = (i + images.length) % images.length;
    setIdx(next);
    onIndexChange?.(next);
  };
  const prev = () => goTo(idx - 1);
  const next = () => goTo(idx + 1);

  // Lock page scroll while open + keyboard navigation
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    startX.current = e.clientX;
    setDragX(0);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setDragX(e.clientX - startX.current);
  };
  const endDrag = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const dx = e.clientX - startX.current;
    if (dx > 60) prev();
    else if (dx < -60) next();
    setDragX(0);
  };

  return (
    <div
      className="font-mono"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(8,13,19,0.94)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close preview"
        className="btn-retro"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B2230",
          border: "2px solid #475569",
          color: "#F3F4F6",
          boxShadow: "3px 3px 0px #000000",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <line x1="4" y1="4" x2="20" y2="20" />
          <line x1="20" y1="4" x2="4" y2="20" />
        </svg>
      </button>

      {/* Counter */}
      <div
        className="font-pixel"
        style={{
          position: "absolute",
          top: "26px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "9px",
          color: accent,
          background: "#1B2230",
          border: `1px solid ${accent}`,
          padding: "6px 12px",
          zIndex: 10,
        }}
      >
        {idx + 1} / {images.length}
      </div>

      {/* Image stage */}
      <div
        style={{
          position: "relative",
          width: "min(90vw, 1100px)",
          height: "min(74vh, 700px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          touchAction: "pan-y",
          cursor: draggingRef.current ? "grabbing" : "grab",
        }}
        onClick={(e) => e.stopPropagation()}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <img
          key={idx}
          src={images[idx].url}
          alt={images[idx].alt}
          draggable={false}
          decoding="async"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            border: "2px solid #475569",
            boxShadow: "6px 6px 0px #000000",
            transform: `translateX(${dragX}px)`,
            transition: draggingRef.current ? "none" : "transform 0.2s ease",
            userSelect: "none",
          }}
        />
      </div>

      {/* Alt text / caption */}
      <div
        style={{
          marginTop: "16px",
          fontSize: "12px",
          color: "#94A3B8",
          maxWidth: "80vw",
          textAlign: "center",
        }}
      >
        {images[idx].alt}
      </div>

      {/* Arrow buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="btn-retro"
            style={{
              position: "absolute",
              left: "clamp(10px, 4vw, 40px)",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#1B2230",
              border: `2px solid ${accent}`,
              color: accent,
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "3px 3px 0px #000000",
              fontFamily: "var(--font-pixel)",
              fontSize: "14px",
              zIndex: 10,
            }}
          >
            ◀
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="btn-retro"
            style={{
              position: "absolute",
              right: "clamp(10px, 4vw, 40px)",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#1B2230",
              border: `2px solid ${accent}`,
              color: accent,
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "3px 3px 0px #000000",
              fontFamily: "var(--font-pixel)",
              fontSize: "14px",
              zIndex: 10,
            }}
          >
            ▶
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            display: "flex",
            gap: "8px",
            zIndex: 10,
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                goTo(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              style={{
                width: i === idx ? "20px" : "8px",
                height: "8px",
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
      )}
    </div>
  );
}
