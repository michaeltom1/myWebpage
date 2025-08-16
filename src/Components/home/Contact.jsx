import SectionScaffold from "../../feature/SectionScaffold";
import { MdWork } from "react-icons/md";
import Button from "../../feature/Button";
import useScrollFadeIn from "../../feature/useScrollFadeIn";

const Contact = () => {
  const fadeRef = useScrollFadeIn();
  return (
    <SectionScaffold
      sectionId="contact"
      title="Contact"
      colouredText="Me"
      Icon={MdWork}
    >
      <div
        ref={fadeRef}
        className="relative py-12 flex flex-col items-center justify-center gap-8"
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
                id="contact-grid"
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
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>
        <div className="max-w-xl w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Ready to start a project together? Reach out to me via email or
            connect with me on Social Media.
          </p>
          <Button
            text="Get in Touch"
            linkTo="mailto:mic81070@gmail.com"
            className="!px-8 !py-3 !rounded-xl !font-bold !shadow-lg"
          />
        </div>
      </div>
    </SectionScaffold>
  );
};

export default Contact;
