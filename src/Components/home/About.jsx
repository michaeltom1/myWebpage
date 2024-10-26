import SectionScaffold from "../../feature/SectionScaffold";
import { michael } from "../../assets/assets";

const About = () => {
  return (
    <SectionScaffold title="ABOUT" colouredText="ME" sectionId="about">
      <div className="grid grid-cols-1 md:grid-cols-2 py-4">
        <div>
          <div className="h-80 max-w-sm bg-slate-800 rounded-full md:rounded-xl overflow-hidden">
            <img src={michael} alt="" className="w-full h-full object-cover object-top"/>
          </div>
        </div>
        <div>
          <p className="text-xl text-center md:text-start">
            Greetings! I&#39;m Michael Tom, a passionate web developer and
            graphic designer with over a year of experience in crafting visually
            appealing websites and stunning graphic designs. My portfolio
            showcases my journey and expertise in these fields.
          </p>
        </div>
      </div>
    </SectionScaffold>
  );
};

export default About;