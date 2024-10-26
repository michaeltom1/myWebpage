import SectionScaffold from "../../feature/SectionScaffold";
import { MdWork } from "react-icons/md";
import { projectsItems } from "../../data/data";

function Projects() {
  return (
    <SectionScaffold
      sectionId="projects"
      title="Recent "
      colouredText="Projects"
      Icon={MdWork}
    >
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 py-6">
          {projectsItems.map((item) => (
            <div key={item.id} className="h-80 w-full bg-slate-800 rounded-xl overflow-hidden">
              <img src={item.imgUrl} alt="" className="h-full w-full object-cover"/>
            </div>

          ))}
        </div>
      </div>
    </SectionScaffold>
  );
}

export default Projects;
