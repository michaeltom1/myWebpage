import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import { SiGmail } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import {
  webProject1,
  webProject2,
  webProject3,
  webProject4,
  card1,
  card2,
  calender,
  blueCertificate,
  fullgist,
} from "../assets/assets";
// } from "../assets/assets";

import { FaHome, FaUser, FaServicestack, FaFolderOpen, FaEnvelope } from "react-icons/fa";
export const navItems = [
  {
    id: 0,
    name: "Home",
    url: "#home",
    icon: FaHome,
  },
  {
    id: 1,
    name: "About",
    url: "#about",
    icon: FaUser,
  },
  {
    id: 2,
    name: "Services",
    url: "#services",
    icon: FaServicestack,
  },
  {
    id: 3,
    name: "Projects",
    url: "#projects",
    icon: FaFolderOpen,
  },
  {
    id: 4,
    name: "Contact",
    url: "#contact",
    icon: FaEnvelope,
  },
];

export const FooterIcons = [
  {
    id: 0,
    icon: FaSquareFacebook,
    url: "#",
  },
  {
    id: 1,
    icon: FiInstagram,
    url: "#",
  },
  {
    id: 2,
    icon: LiaLinkedin,
    url: "#",
  },
  {
    id: 3,
    icon: SiGmail,
    url: "#",
  },
];

export const serviceCardItems = [
  {
    id: 0,
    icon: FaCode,
    title: "Web Development",
    description:
      "I am a Frontend Web developer dedicated to crafting visually stunning and functionally robust digital experiences",
  },
  {
    id: 1,
    icon: FaPaintBrush,
    title: "Graphic Design",
    description:
      "I do all kinds of Graphic Design. Ranging from Banners, Flyers, Certificates, Business cards etc.",
  },
 
  {
    id: 2,
    icon: IoMdPerson,
    title: "Tutor",
    description: "I teach ",
  },
];

export const projectsItems = [
  {
    id: 0,
    imgUrl: webProject1,
  },
  {
    id: 1,
    imgUrl: webProject2,
  },
  {
    id: 2,
    imgUrl: webProject3,
  },
  {
    id: 3,
    imgUrl: webProject4,
  },
  {
    id: 4,
    imgUrl: card1,
  },
  {
    id: 5,
    imgUrl: card2,
  },
  {
    id: 6,
    imgUrl: calender,
  },
  {
    id: 7,
    imgUrl: blueCertificate,
  },
  {
    id: 8,
    imgUrl: fullgist,
  },
];
