import SectionScaffold from "../../feature/SectionScaffold";
import { MdWork } from "react-icons/md";
import Button from "../../feature/Button"

const Contact = () => {
  return (
    <SectionScaffold
      sectionId="contact"
      title="Contact"
      colouredText="Me"
      Icon={MdWork}
    >
      <div>
        <p className="text-center p-5 text-lg md:text-2xl">
          Ready to start a project together? Reach out to me via email or
          connect with me on Social Media
        </p>
        <div className="flex justify-center py-16">
          <Button text="Get in Touch" linkTo="mailto:mic81070@gmail.com" />
        </div>
      </div>
    </SectionScaffold>
  );
};

export default Contact;
