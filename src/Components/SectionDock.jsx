import React, { useState, useEffect, useRef } from "react";
import {
  LuHome,
  LuUser,
  LuLayers,
  LuFolder,
  LuMail,
  LuFileText,
} from "react-icons/lu";

const dockItems = [
  { id: "home", icon: LuHome, label: "Home" },
  { id: "about", icon: LuUser, label: "About" },
  { id: "services", icon: LuLayers, label: "Services" },
  { id: "projects", icon: LuFolder, label: "Projects" },
  { id: "contact", icon: LuMail, label: "Contact" },
  {
    id: "resume",
    icon: LuFileText,
    label: "Resume",
    href: "/assets/Michael-Resume.pdf",
  },
];

export default function SectionDock() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;
    const onScroll = () => {
      const current = window.scrollY;
      if (current < 80) {
        setIsVisible(true);
        lastScrollY.current = current;
        return;
      }
      if (current > lastScrollY.current + 10) {
        setIsVisible(false);
      } else if (current < lastScrollY.current - 10) {
        setIsVisible(true);
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {/* Desktop vertical dock */}
      <nav aria-label="Section dock" className="hidden md:block">
        <div className="fixed right-6 bottom-12 z-40">
          <div className="flex flex-col items-center gap-3">
            {dockItems.map((item) => {
              const Icon = item.icon;
              const href = item.href || `#${item.id}`;
              return (
                <a
                  key={item.id}
                  href={href}
                  className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 text-white shadow-md hover:scale-110 transition-transform duration-200"
                  aria-label={item.label}
                >
                  <Icon
                    className="text-slate-100 group-hover:text-accent"
                    size={20}
                  />
                  <span className="pointer-events-none absolute -left-24 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile bottom dock - centered, iOS-like */}
      <nav aria-label="Mobile dock" className="md:hidden">
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 bottom-4 z-50 transition-all duration-300 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-4 bg-white/6 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full shadow-lg">
            {dockItems
              .filter((item) => item.id !== "resume")
              .map((item) => {
                const Icon = item.icon;
                const href = item.href || `#${item.id}`;
                return (
                  <a
                    key={item.id}
                    href={href}
                    className="group flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 text-white shadow-sm active:scale-95 transition-transform duration-150 touch-manipulation"
                    aria-label={item.label}
                  >
                    <Icon
                      className="text-white group-hover:text-accent"
                      size={20}
                    />
                  </a>
                );
              })}
          </div>
        </div>
      </nav>
    </>
  );
}
