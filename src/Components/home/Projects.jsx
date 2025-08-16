import SectionScaffold from "../../feature/SectionScaffold";
import { MdWork } from "react-icons/md";
import { projectsItems } from "../../data/data";
import useScrollFadeIn from "../../feature/useScrollFadeIn";
import ProjectCard from "../../feature/ProjectCard";
import ProjectModal from "../../feature/ProjectModal";
import { useState } from "react";

function Projects() {
  const fadeRef = useScrollFadeIn();
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  function handleView(item) {
    setActive(item);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setActive(null);
  }

  return (
    <SectionScaffold
      sectionId="projects"
      title="Recent "
      colouredText="Projects"
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
                id="projects-grid"
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
            <rect width="100%" height="100%" fill="url(#projects-grid)" />
          </svg>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsItems.map((item) => (
            <ProjectCard key={item.id} item={item} onView={handleView} />
          ))}
        </div>
        <ProjectModal item={active} open={open} onClose={handleClose} />
      </div>
    </SectionScaffold>
  );
}

export default Projects;
