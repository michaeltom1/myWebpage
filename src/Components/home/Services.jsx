import SectionScaffold from "../../feature/SectionScaffold"
import { MdWork } from "react-icons/md";
import ServiceCard from "../../feature/ServiceCard";
import { serviceCardItems } from "../../data/data";
import { useState } from "react";

const Services = () => {
  const [activeItem, setActiveItem ] = useState(null)
  return (
    <SectionScaffold
      sectionId="services"
      title="My"
      colouredText="Services"
      Icon={MdWork}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
        {serviceCardItems.map((item) => (
          <ServiceCard
            key={item.id}
            title={item.title}
            description={item.description}
            Icon={item.icon}
          />
        ))}
      </div>
    </SectionScaffold>
  );
}

export default Services