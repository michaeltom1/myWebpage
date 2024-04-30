// import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

function Services() {
  return (
    <>
      <div>
        <section id="services" className="pt-16 services">
          <div className="text-center flex items-center font-extrabold place-content-center">
            <h2 className="text-3xl m-3">
              <MdWork />
            </h2>
            <h2 className=" text-[2rem] flex items-center">MY SERVICES</h2>
          </div>
          <div className="px-5 md:px-20">
            <hr className="border-[#38bdf8]" />
          </div>

          <div className=" sm:grid sm:grid-cols-2- md:grid-cols-3 md:mx-10">
            <div className="service-box bg-slate-800 text-center justify-center flex-col flex items-center rounded-2xl border-sky-400 border-y-4 hover:my-4 place-content-center transition-all transform mx-5 py-5 my-5 sm:mx-2 ">
              <span className="text-[3rem]">&lt;/&gt;</span>
              <div className="text">
                <h3 className="font-extrabold text-2xl">Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <button className="mt-2">
                <a href="servicePage">Read more</a>
              </button>
            </div>
            <div className="service-box bg-slate-800 text-center justify-center flex-col flex items-center rounded-2xl border-sky-400 border-y-4 hover:my-4 place-content-center transition-all transform mx-5 py-5 my-5 sm:mx-2">
              <span className="text-[3rem]">&lt;/&gt;</span>
              <div className="text">
                <h3 className="font-extrabold text-2xl">Graphic Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <button className="mt-2">
                <a href="servicePage">Read more</a>
              </button>
            </div>
            <div className="service-box bg-slate-800 text-center justify-center flex-col flex items-center rounded-2xl border-sky-400 border-y-4 hover:my-4 place-content-center transition-all transform mx-5 py-5 my-5 sm:mx-2">
              <span className="text-[3rem]">&lt;/&gt;</span>
              <div className="text">
                <h3 className="font-extrabold text-2xl">Digital Marketing</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <button className="mt-2">
                <a href="servicePage">Read more</a>
              </button>
            </div>
            <div className="service-box bg-slate-800 text-center justify-center flex-col flex items-center rounded-2xl border-sky-400 border-y-4 hover:my-4 place-content-center transition-all transform mx-5 py-5 my-5 sm:mx-2 flex-grow col-span-3">
              <span className="text-[3rem]">&lt;/&gt;</span>
              <div className="text">
                <h3 className="font-extrabold text-2xl">Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <button className="mt-2">
                <a href="servicePage">Read more</a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
