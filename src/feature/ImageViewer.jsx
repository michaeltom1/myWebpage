import React, { useEffect, useCallback } from "react";

export default function ImageViewer({
  images = [],
  index = 0,
  open,
  onClose,
  onChange,
}) {
  const current = images && images.length ? images[index] : null;

  const prev = useCallback(() => {
    if (!images || images.length === 0) return;
    const nextIndex = (index - 1 + images.length) % images.length;
    onChange(nextIndex);
  }, [images, index, onChange]);

  const next = useCallback(() => {
    if (!images || images.length === 0) return;
    const nextIndex = (index + 1) % images.length;
    onChange(nextIndex);
  }, [images, index, onChange]);

  const onKey = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [open, onClose, prev, next]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  if (!open || !current) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl w-full max-h-[90vh] bg-black rounded-2xl overflow-hidden">
        <button
          className="absolute left-3 top-3 z-20 text-white/90 bg-black/30 rounded-full p-2"
          onClick={onClose}
          aria-label="Close viewer"
        >
          ✕
        </button>

        <button
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 text-white/90 bg-black/30 rounded-full p-2"
          onClick={prev}
          aria-label="Previous image"
        >
          ‹
        </button>

        <button
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 text-white/90 bg-black/30 rounded-full p-2"
          onClick={next}
          aria-label="Next image"
        >
          ›
        </button>

        <div className="w-full h-[85vh] flex items-center justify-center bg-black">
          <img
            src={current}
            alt={`Project image ${index + 1}`}
            className="max-w-full max-h-full object-contain select-none"
          />
        </div>

        <div className="p-3 bg-black/40 text-white/80 text-sm flex items-center justify-between">
          <div>
            {images && images.length ? (
              <span>
                {index + 1} of {images.length}
              </span>
            ) : null}
          </div>
          <div className="text-xs opacity-80">
            ← → to navigate • Esc to close
          </div>
        </div>
      </div>
    </div>
  );
}
