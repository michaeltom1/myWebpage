import Button from "../../feature/Button";
import TypedComponent from "../../feature/TypedComponent";
import { MichaelResume } from "../../assets/assets";
const Hero = () => {
  return (
    <main
      id="home"
      className=" from-slate-950 py-20 bg-gradient-to-tr to-slate-900"
    >
      <div className="h-screen mx-auto w-4/5 flex justify-center items-center">
        <div className={`text-white text-center space-y-4`}>
          <div className="fadeInTop font-extrabold text-6xl md:text-8xl space-y-4">
            <h1 className={``}>
              HI<span className={`text-accent`}>,</span> I AM <br />
              MICHAEL <br />
              TOM<span className={`text-accent`}>.</span>
            </h1>
            <h2 className={`text-xl md:text-4xl`}>
              I&#39;m a&thinsp;
              <span className={`text-accent`}>
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
    </main>
  );
};

export default Hero; 