// import React from 'react'
import { MdGroup } from "react-icons/md";
import testimonial from "../assets/testimonial1.jpg";
import testimonial1 from "../assets/team-3.jpg";
import testimonial2 from "../assets/team-2.jpg";

function Testimonials() {
  return (
    <div>
      <section id="testimonials">
        <div className="flex place-content-center items-center">
          <span className="text-[2rem] font-bold text-3xl px-4">
            <MdGroup />
          </span>
          <h2 className="text-center font-extrabold text-[2rem]">
            TESTIMONIALS
          </h2>
        </div>
        <hr className="border-[#38bdf8]" />
        <div className="p-5 text-center items-center text-lg md:text-[22px]">
          <p>
            Hear what my clients have to say! Testimonials from satisfied
            clients underscore my dedication, professionalism, and ability to
            deliver exceptional results
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 gap-5 sm:block">
          <figure className="bg-slate-100 rounded-xl dark:bg-slate-800 hover:border border-slate-400 p-5 mb-2 text-black dark:text-white transition-all">
            <div className="flex items-center">
              <img
                className="w-24 h-24 rounded-full"
                src={testimonial}
                alt=""
                width={384}
                height={512}
              />

              <figcaption className="px-5">
                <div>
                  <b>Alex Johnson</b>
                </div>
                <div>Web Developer</div>
              </figcaption>
            </div>
            <div className="pt-6 space-y-4">
              <blockquote>
                <p className="text-lg px-10 ">
                  &quot;Michael pushes boundaries. His unconventional designs
                  challenge norms and leave a lasting impression. His creativity
                  knows no bounds, and our brand is forever transformed because
                  of it.&quot;
                </p>
              </blockquote>
            </div>
          </figure>
          <figure className="bg-slate-100 rounded-xl dark:bg-slate-800 hover:border border-slate-400 p-5 mb-2 text-black dark:text-white">
            <div className="flex items-center">
              <img
                className="w-24 h-24 rounded-full"
                src={testimonial1}
                alt=""
                width={384}
                height={512}
              />
              <figcaption className="px-5">
                <div>
                  <b>Sam Jeff</b>
                </div>
                <div>Graphic Designer</div>
              </figcaption>
            </div>

            <div className="pt-6 space-y-4">
              <blockquote>
                <p className="text-lg px-10 ">
                  &quot;Michael&#39;s attention to detail is awe-inspiring. His
                  pixel-perfect designs elevate our user experience. Whether
                  it&#39;s a mobile app or a website, He crafts interfaces that
                  users love to explore.&quot;
                </p>
              </blockquote>
            </div>
          </figure>
          <figure className="bg-slate-100 rounded-xl dark:bg-slate-800 hover:border border-slate-400 p-5 mb-2 text-black dark:text-white">
            <div className="flex items-center">
              <img
                className="w-24 h-24 rounded-full"
                src={testimonial2}
                alt=""
                width={384}
                height={512}
              />
              {/* pb-2 px-10 */}
              <figcaption className="px-5">
                <div>
                  <b>Sarah Willaiams</b>
                </div>
                <div></div>
              </figcaption>
            </div>

            <div className="pt-6 space-y-4">
              <blockquote>
                <p className="text-lg px-10 ">
                  Michael&#39;s designs speak louder than words. His took our
                  branding to new heights with elegant logos, captivating
                  visuals, and cohesive color schemes. His ability to convey our
                  brand story through graphics is unmatched.
                </p>
              </blockquote>
            </div>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
