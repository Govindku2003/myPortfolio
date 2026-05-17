import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

import profileImg from "../assets/profile image.jpeg";
import StitchifyImage from "../assets/Stitchify.png";
import medicationImg from "../assets/medication.png";
import projectImg4 from "../assets/project4.avif";
import { FaBrain } from "react-icons/fa";

export const assets = {
  profileImg,
};


export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["HTML", "CSS", "java script", "React.js", "Tailwind"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Excel"],
  },

  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    description: "Deploying and managing applications in cloud environments.",
    tags: ["AWS"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Vs code", "PgAdmin", " MySQl-Workbench"],
  },
  {
    title: "Programming Language",
    icon: FaBrain,
    description: " practice with programing",
    tags: ["Basic Java ", "Python ", "C"],
  },
];

export const projects = [
  {
    title: "Stitchify-Tailoring to Door Step",
    description:
      "Personalized stitching and alteration services delivered conveniently to your home..",
    image: StitchifyImage,
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Node.js"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://www.stitchify.in",
    code: "#",
  },
  {
    title: "Online Medication and prescription Tracker App",
    description: "Online Mediction and prescription tracker System prototype.",
    image: medicationImg,
    tech: ["React.js", "HTML", "CSS"],
    icons: [],
    demo: "https://info-medication-tracker-tvgi.vercel.app",
    code: "",
  },

  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and my certifications.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
];
