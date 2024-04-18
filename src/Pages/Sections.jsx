import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdWork } from "react-icons/md";


import michael from "../assets/michael.png";
import boy from "../assets/boy.jpg";
// import woman from "../assets/woman(1).jpg";
function Sections() {
  return (
    <>
      <div className="sec2">
        <div className="header h-[80vh]">
          <h2 id="about" className="text-center font-extrabold text-[2rem]">
            ABOUT ME
          </h2>
          <div className="px-10">
            <hr className="border-[#38bdf8] " />
          </div>
          <div className="md:flex md:flex-row-reverse md:gap-10 md:mt-5 md:mx-20 md:justify-center ">
            <div className="p-5 text-lg text-center items-center md:w-[100%] md:text-left md:text-[22px]">
              <p>
                Greetings! I&apos;m Michael Tom, a passionate web developer and
                graphic designer with over a year of experience in crafting
                visually appealing websites and stunning graphic designs. My
                portfolio showcases my journey and expertise in these fields
              </p>
            </div>
            <div className="flex place-content-center md:block md:w-[50%] m-10">
              <div className="w-[50%]  md:rounded-sm h-56 rounded-full mb-5 place-content-center grid md:place-content-start md:h-[25rem] md:w-[100%] md:bg-transparent">
                <img
                  src={michael}
                  alt="Michael Tom"
                  className=" bg-slate-900 rounded-full mb-5 hover:border-slate-400 w-50 md:w-25 md:h-[25rem] md:rounded-2xl md:border-y-2 md:border-x-2 md:border-slate-500 hover:hover:border-[#38bdf8] m-5"
                />
              </div>
            </div>
          </div>
        </div>
        {/* under const */}
        <div className="px-5 sm:p-20 sec2">
          <h2 id="projects" className="text-center font-extrabold text-[2rem]">
            <span className="material-symbols-outlined">work</span>
            {/* <MdWork /> */}
            PROJECTS
          </h2>
          <hr className="border-[#38bdf8]" />
          <div className="p-5 text-lg text-center items-center md:text-[22px]">
            <p>
              Explore a curated selection of my projects, including website
              designs, logo creations, branding campaigns, and more. Each
              project comes with a brief description highlighting the
              objectives, challenges, and solutions implemented
            </p>
          </div>
          <div className="w-[100%] h-60 bg-slate-900 rounded-md mb-5 border border-slate-500/100 hover:border-slate-400 hover:bg-slate-600">
            <img src="" alt="" />
          </div>

          {/* under const2 */}

          <h2
            id="testimonials"
            className="text-center font-extrabold text-[2rem]"
          >
            <span className="material-symbols-outlined mx-3">group</span>
            TESTIMONIALS
          </h2>
          <hr className="border-[#38bdf8]" />
          <div className="p-5 text-center items-center text-lg md:text-[22px]">
            <p>
              Hear what my clients have to say! Testimonials from satisfied
              clients underscore my dedication, professionalism, and ability to
              deliver exceptional results
            </p>
          </div>

          <figure className="bg-slate-100 rounded-xl dark:bg-slate-800 hover:border border-slate-400 p-2 mb-2 text-black dark:text-white">
            <img
              className="w-24 h-24 rounded-full"
              src={boy}
              alt=""
              width={384}
              height={512}
            />

            <div className="pt-6 space-y-4">
              <blockquote>
                <p className="text-lg px-10 ">
                  &quot;Michael pushes boundaries. His unconventional designs
                  challenge norms and leave a lasting impression. His creativity
                  knows no bounds, and our brand is forever transformed because
                  of it.&quot;
                </p>
              </blockquote>
              <figcaption className="pb-2 px-10">
                <div>Eduok Tom</div>
                <div>Web Developer</div>
              </figcaption>
            </div>
          </figure>

          {/* under const 3 */}

          <h2
            id="contact"
            className="text-center font-extrabold text-[2rem] border-[#38bdf8]"
          >
            <span className="material-symbols-outlined  mx-2">call</span>
            CONTACT ME
          </h2>
          <hr className="border-[#38bdf8]" />
          <div className="p-5 text-center items-center text-lg md:text-[22px]">
            <p>
              Ready to start a project together? Reach out to me via email at
              mic81070@gmail.com or connect with me on Facebook and WhatsApp
            </p>
          </div>
          <div className="w-[100%] h-60 dark:bg-slate-900 bg-slate-100 rounded-md mb-5 border border-slate-500/100 hover:border-slate-400 items-center md:w-1/2">
            <div className=" items-center m-4 pb-2 border-b-2 flex  gap-2 justify-between pr-2">
              {/* <label >Name</label> */}
              <input
                type="email"
                placeholder="Name"
                required
                className="bg-transparent "
              />
              <MdOutlineDriveFileRenameOutline />
            </div>

            <div className=" items-center m-4 pb-2 border-b-2 flex  gap-2 justify-between pr-2">
              {/* <label >Email</label> */}
              <input
                type="email"
                placeholder="Email"
                required
                className="bg-transparent "
              />
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div className=" items-center m-4 pb-2 border-b-2 flex  gap-2 justify-between pr-2">
              {/* <label >Message</label> */}
              <input
                type="email"
                placeholder="Message"
                required
                className="bg-transparent "
              />
              <span className="material-symbols-outlined">mode_comment</span>
            </div>
            <div className=" items-center m-4 pb-2 flex  gap-2 justify-between pr-2">
              <button className="w-[100%]"> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sections;
