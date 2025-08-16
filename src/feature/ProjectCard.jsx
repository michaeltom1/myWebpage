import React from "react";

export default function ProjectCard({ item, onView }) {
  return (
    <article
      className="relative h-80 w-full rounded-3xl overflow-hidden shadow-2xl group transition-transform duration-300 hover:scale-[1.02]"
      aria-labelledby={`project-${item.id}-title`}
    >
      <img
        src={item.imgUrl}
        alt={item.title || "Project image"}
        className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
      />

      {/* Thin animated accent bar */}
      <div className="absolute left-4 top-4 w-1 h-16 rounded-full bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-400 opacity-90 animate-pulse-slow" />

      {/* Soft glass panel for meta */}
      <div className="absolute inset-x-4 bottom-4 z-20">
        <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-4 flex flex-col gap-2">
          <div className="flex items-start justify-between">
            <div>
              <h3
                id={`project-${item.id}-title`}
                className="text-lg font-extrabold text-white"
              >
                {item.title || "Untitled Project"}
              </h3>
              {item.tags && (
                <div className="flex gap-2 mt-2 flex-wrap">
                  {item.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {item.link && (
              <button
                onClick={() => onView(item)}
                className="ml-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold shadow-md hover:translate-y-[-2px] transition-transform"
              >
                View
              </button>
            )}
          </div>
          {item.description && (
            <p className="text-sm text-white/80 line-clamp-2">
              {item.description}
            </p>
          )}
        </div>
      </div>

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </article>
  );
}
