import SectionScaffold from "../../feature/SectionScaffold";
import { michael } from "../../assets/assets";
import useScrollFadeIn from "../../feature/useScrollFadeIn";

const About = () => {
  const fadeRef = useScrollFadeIn();
  return (
    <SectionScaffold title="ABOUT" colouredText="ME" sectionId="about">
      <div
        ref={fadeRef}
        className="relative py-12 flex flex-col md:flex-row items-center justify-center gap-12"
      >
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
                id="about-grid"
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
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
        {/* Profile image */}
        <div className="flex-shrink-0">
          <div className="h-80 w-80 bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 opacity-30 rounded-full blur-2xl absolute left-0 top-1/2 -translate-y-1/2 -z-10" />
          <div className="h-80 w-80 bg-white/10 border border-white/20 shadow-2xl rounded-3xl overflow-hidden flex items-center justify-center relative">
            <img
              src={michael}
              alt="Michael Tom"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        {/* About text */}
        <div className="max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-3xl p-8">
          <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Hello, I'm Michael Tom
          </h2>
          <p className="text-lg text-white/90">
            Passionate web developer and graphic designer with experience in
            crafting visually appealing websites and stunning graphic designs.
            <br />
            My portfolio showcases my journey and expertise in these fields.
          </p>
        </div>
      </div>
    </SectionScaffold>
  );
};

export default About;
