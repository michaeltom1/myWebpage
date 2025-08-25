import React from "react";
import { LuEye } from "react-icons/lu";

export default function ProjectCard({ item, onView }) {
  const hasTitle = Boolean(item && item.title);
  return (
    <article
      className="relative h-80 w-full rounded-3xl overflow-hidden shadow-2xl group transition-transform duration-300 hover:scale-[1.02]"
      aria-labelledby={hasTitle ? `project-${item.id}-title` : undefined}
    >
      <img
        src={item.imgUrl}
        alt={item.title || "Project image"}
        className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105 cursor-pointer"
        onClick={() => onView && onView(item)}
      />

      {/* Thin animated accent bar */}
      <div className="absolute left-4 top-4 w-1 h-16 rounded-full bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-400 opacity-90 animate-pulse-slow" />

      {/* meta panel removed per request */}

      {/* Top-right view icon overlay */}
      <button
        onClick={() => onView && onView(item)}
        aria-label={item.title ? `View ${item.title}` : "View project"}
        className="absolute right-4 top-4 z-30 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 text-white hover:scale-110 transition-transform shadow-lg"
      >
        <LuEye size={20} />
      </button>

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </article>
  );
}
