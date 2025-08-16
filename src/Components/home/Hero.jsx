import Button from "../../feature/Button";
import TypedComponent from "../../feature/TypedComponent";
import { MichaelResume } from "../../assets/assets";
import useScrollFadeIn from "../../feature/useScrollFadeIn";

const Hero = () => {
  const fadeRef = useScrollFadeIn({ threshold: 0.1 });
  return (
    <main
      id="home"
      ref={fadeRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-slate-950 to-slate-900"
    >
      {/* Subtle grid and animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid background */}
        <div className="absolute inset-0 w-full h-full">
          <svg
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ minHeight: "100vh" }}
          >
            <defs>
              <pattern
                id="hero-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="#64748b22"
                  strokeWidth="1.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
        {/* Animated blobs */}
        <div className="animate-pulse-slow absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 opacity-30 rounded-full blur-3xl" />
        <div className="animate-pulse-slow absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500 via-pink-400 to-cyan-400 opacity-20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-3xl flex justify-center items-center">
        <div className="bg-transparent px-8 py-12 text-center space-y-8">
          <div className="fadeInTop font-extrabold text-5xl md:text-7xl space-y-4">
            <h1 className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              HI<span className="text-accent">,</span> I AM <br />
              MICHAEL <br />
              TOM<span className="text-accent">.</span>
            </h1>
            <h2 className="text-xl md:text-3xl text-white/80">
              I&#39;m a&thinsp;
              <span className="text-accent">
                <TypedComponent />
              </span>
            </h2>
          </div>
          <Button
            text="Download Resume"
            linkTo={MichaelResume}
            className="my-6"
            target="_blank"
          />
        </div>
      </div>
      {/* Animation keyframes */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </main>
  );
};

export default Hero;
