import { MdCall, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { global } from "../Styles/globalStyle";
import { contact } from "../Styles/contact";



function Contact() {
  return (
    <div>
      <section id="contact" className="pb-10">
        <div className={`${global.subhead}`}>
          <h2 className={`${global.subheadIcon}`}>
            <MdCall />
          </h2>
          <h2 className={`${global.subheadH2}`}>CONTACT ME</h2>
        </div>
        <hr className={`${global.hr}`} />
        <div className={`${contact.text}`}>
          <p>
            Ready to start a project together? Reach out to me via email or
            connect with me on Facebook and WhatsApp
          </p>
        </div>
        <form className={`${contact.form}`}>
          <div className={`${contact.input}`}>
            <input
              type="text"
              placeholder="Name"
              required
              className="bg-transparent "
            />
            <MdOutlineDriveFileRenameOutline />
          </div>

          <div className={`${contact.input}`}>
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-transparent "
            />
            <span className="text-xl font-extrabold">
              <MdOutlineMail />
            </span>
          </div>
          <div className={`${contact.input}`}>
            <input
              type="text"
              placeholder="Message"
              required
              className="bg-transparent "
            />
            <span className="text-xl">
              <FiMessageSquare />
            </span>
          </div>
          <div className="px-3">
            <button type="submit" className="w-[100%] text-white">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact
