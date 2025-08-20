import SectionScaffold from "../../feature/SectionScaffold";
import { MdWork } from "react-icons/md";
import ServiceCard from "../../feature/ServiceCard";
import { serviceCardItems } from "../../data/data";
import { useState } from "react";
import useScrollFadeIn from "../../feature/useScrollFadeIn";
import useStaggeredReveal from "../../feature/useStaggeredReveal";

const Services = () => {
  const fadeRef = useScrollFadeIn();
  const stagRef = useStaggeredReveal({ stagger: 140 });
  const [activeItem, setActiveItem] = useState(null);
  return (
    <SectionScaffold
      sectionId="services"
      title="My"
      colouredText="Services"
      Icon={MdWork}
    >
      <div ref={fadeRef} className="relative py-12">
        {/* Subtle grid background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <svg
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ minHeight: "100%" }}
          >
            <defs>
              <pattern
                id="services-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#64748b22"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>
        <div ref={stagRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCardItems.map((item) => (
            <div
              key={item.id}
              className="reveal bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-3xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 text-white text-3xl shadow-lg">
                  <item.icon />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-white/80 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionScaffold>
  );
};

export default Services;
