import { MdGroup } from "react-icons/md";
import testimonial from "../assets/testimonial1.jpg";
import testimonial1 from "../assets/team-3.jpg";
import testimonial2 from "../assets/team-2.jpg";
import { global } from "../Styles/globalStyle";
import { testimonials } from "../Styles/testimonials";

function Testimonials() {
  return (
    <div>
      <section id="testimonials">
        <div className={`${global.subhead}`}>
          <h2 className={`${global.subheadIcon}`}>
            <MdGroup />
          </h2>
          <h2 className={`${global.subheadH2}`}>TESTIMONIALS</h2>
        </div>
        <hr className={`${global.hr}`} />
        <div className={`${testimonials.text}`}>
          <p>
            Hear what my clients have to say! Testimonials from satisfied
            clients underscore my dedication, professionalism, and ability to
            deliver exceptional results
          </p>
        </div>

        <div className={`${testimonials.displayGrid}`}>
          <figure className={`${testimonials.figure}`}>
            <div className={`${testimonials.displayFlex}`}>
              <img
                className={`${testimonials.img}`}
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

            <div className="pt-6">
              <blockquote>
                <p className="text-lg px-10 ">
                  {/* &quot;Michael pushes boundaries. His unconventional designs
                  challenge norms and leave a lasting impression. His creativity
                  knows no bounds, and our brand is forever transformed because
                  of it.&quot; */}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit, eius, cum eum et ex dignissimos culpa iste vel perspiciatis dolor. Minus tenetur distinctio aut, deleniti cumque excepturi non saepe.
                  
                </p>
              </blockquote>
            </div>
          </figure>
          <figure className={`${testimonials.figure}`}>
            <div className={`${testimonials.displayFlex}`}>
              <img
                className={`${testimonials.img}`}
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
            <div className="pt-6">
              <blockquote>
                <p className="text-lg px-10 ">
                  {/* &quot;Michael&#39;s attention to detail is awe-inspiring. His
                  pixel-perfect designs elevate our user experience. Whether
                  it&#39;s a mobile app or a website, He crafts interfaces that
                  users love to explore.&quot; */}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit, eius, cum eum et ex dignissimos culpa iste vel perspiciatis dolor. Minus tenetur distinctio aut, deleniti cumque excepturi non saepe.
                </p>
              </blockquote>
            </div>
          </figure>
          <figure className={`${testimonials.figure}`}>
            <div className={`${testimonials.displayFlex}`}>
              <img
                className={`${testimonials.img}`}
                src={testimonial2}
                alt=""
                width={384}
                height={512}
              />
              <figcaption className="px-5">
                <div>
                  <b>Sarah Willaiams</b>
                </div>
                <div></div>
              </figcaption>
            </div>

            <div className="pt-6">
              <blockquote>
                <p className="text-lg px-10 ">
                  {/* Michael&#39;s designs speak louder than words. His took our
                  branding to new heights with elegant logos, captivating
                  visuals, and cohesive color schemes. His ability to convey our
                  brand story through graphics is unmatched. */}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit, eius, cum eum et ex dignissimos culpa iste vel perspiciatis dolor. Minus tenetur distinctio aut, deleniti cumque excepturi non saepe.
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
