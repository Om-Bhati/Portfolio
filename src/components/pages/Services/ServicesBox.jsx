import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineExperiment } from "react-icons/ai";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";

const ServicesData = [
  {
    name: "Collaborate on Your Projects",
    description: "Open to teaming up on innovative projects and startups.",
    icon: <AiOutlineTeam className="text-4xl text-white" />,
    bgColor: "bg-teal-500/70",
  },
  {
    name: "AI & ML Solutions",
    description: "Developing smart AI-based applications.",
    icon: <AiFillLayout className="text-4xl text-white" />,
    bgColor: "bg-purple-500/70",
  },
  {
    name: "Web Development",
    description: "Building scalable and responsive websites.",
    icon: <AiFillLayout className="text-4xl text-white" />,
    bgColor: "bg-green-500/70",
  },
  {
    name: "Research & Development Intern",
    description: "Assisting in AI, ML, and Web Development research projects.",
    icon: <AiOutlineExperiment className="text-4xl text-white" />,
    bgColor: "bg-indigo-500/70",
  },
];
const ServicesBox = () => {
  return (
    <div className="h-full mt-10 text-white">
      <div className="grid grid-cols-2 gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }) => (
          <div className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}>
            <div className="p-3 space-y-3">
              {icon}
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;
