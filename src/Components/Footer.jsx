import { LuMail, LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";

const footerLinks = [
  { icon: LuMail, url: "mailto:michaeltomdev@gmail.com", label: "Mail" },
  { icon: LuGithub, url: "https://github.com/michaeltom1", label: "Github" },
  { icon: LuTwitter, url: "https://x.com/michaeltom1", label: "Twitter/X" },
  {
    icon: LuLinkedin,
    url: "https://linkedin.com/in/michaeltom1",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="relative py-10 mt-16 overflow-hidden flex justify-center border-t border-white/20">
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
              id="footer-grid"
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
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>
      <div className="w-full max-w-3xl px-6">
        <div className=" flex flex-col items-center py-8">
          <div className="flex gap-6 justify-center py-2">
            {footerLinks.map((item, idx) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group transition-transform duration-300 hover:scale-110"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 shadow-lg backdrop-blur-lg border border-white/20 ">
                  <item.icon
                    size={28}
                    className="text-blue-500 group-hover:text-cyan-400 transition-colors duration-300 wiggle-on-hover"
                  />
                </span>
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 mt-6">
            <p className="text-center text-base text-white/50">
              Designed and Developed by Michael Tom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
