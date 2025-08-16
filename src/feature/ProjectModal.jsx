import React from "react";

export default function ProjectModal({ item, open, onClose }) {
  if (!open || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl bg-white/5 border border-white/10">
        <div className="flex items-center justify-between p-4">
          <h3 className="text-lg font-bold text-white">
            {item.title || "Project"}
          </h3>
          <button
            onClick={onClose}
            className="text-white/80 px-3 py-1 rounded-md bg-black/20"
          >
            Close
          </button>
        </div>
        <div className="w-full h-[70vh] bg-black/10">
          <img
            src={item.imgUrl}
            alt={item.title || "Project image"}
            className="w-full h-full object-contain"
          />
        </div>
        {item.description && (
          <div className="p-6 text-white/80">
            <p>{item.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
