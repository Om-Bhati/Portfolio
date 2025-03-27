// import React from "react";
// import { AiOutlineTeam } from "react-icons/ai";
// import { AiOutlineExperiment } from "react-icons/ai";
// import { AiFillLayout } from "react-icons/ai";
// import { MdOutlinePhoneAndroid } from "react-icons/md";
// import { HiMiniComputerDesktop } from "react-icons/hi2";
// import { MdSecurity } from "react-icons/md";

// const ServicesData = [
//   {
//     name: "Collaborate on Your Projects",
//     description: "Open to teaming up on innovative projects and startups.",
//     icon: <AiOutlineTeam className="text-4xl text-white" />,
//     bgColor: "bg-teal-500/70",
//   },
//   {
//     name: "AI & ML Solutions",
//     description: "Developing smart AI-based applications.",
//     icon: <AiFillLayout className="text-4xl text-white" />,
//     bgColor: "bg-purple-500/70",
//   },
//   {
//     name: "Web Development",
//     description: "Building scalable and responsive websites.",
//     icon: <AiFillLayout className="text-4xl text-white" />,
//     bgColor: "bg-green-500/70",
//   },
//   {
//     name: "Research & Development Intern",
//     description: "Assisting in AI, ML, and Web Development research projects.",
//     icon: <AiOutlineExperiment className="text-4xl text-white" />,
//     bgColor: "bg-indigo-500/70",
//   },
// ];
// const ServicesBox = () => {
//   return (
//     <div className="h-full mt-10 text-white">
//       <div className="grid grid-cols-2 gap-6">
//         {ServicesData.map(({ name, description, icon, bgColor }) => (
//           <div className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}>
//             <div className="p-3 space-y-3">
//               {icon}
//               <h1>{name}</h1>
//               <p>{description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesBox;
import React from "react";
// import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineExperiment } from "react-icons/ai";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";

const ServicesData = [
  {
    id: 1,
    name: "Collaborate on Your Projects",
    description: "Open to teaming up on innovative projects and startups.",
    icon: <AiOutlineTeam className="text-3xl md:text-4xl text-white" />,
    bgColor: "bg-teal-500/70",
  },
  {
    id: 2,
    name: "AI & ML Solutions",
    description: "Developing smart AI-based applications.",
    icon: <AiFillLayout className="text-3xl md:text-4xl text-white" />,
    bgColor: "bg-purple-500/70",
  },
  {
    id: 3,
    name: "Web Development",
    description: "Building scalable and responsive websites.",
    icon: <AiFillLayout className="text-3xl md:text-4xl text-white" />,
    bgColor: "bg-green-500/70",
  },
  {
    id: 4,
    name: "Research & Development Intern",
    description: "Assisting in AI, ML, and Web Development research projects.",
    icon: <AiOutlineExperiment className="text-3xl md:text-4xl text-white" />,
    bgColor: "bg-indigo-500/70",
  },
];

const ServicesBox = () => {
  return (
    <div className="h-full mt-6 md:mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {ServicesData.map(({ id, name, description, icon, bgColor }) => (
          <div 
            key={id}
            className={`p-4 ${bgColor} rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg min-h-[160px] flex flex-col`}
          >
            <div className="flex-grow space-y-3">
              <div className="flex items-center gap-3">
                {icon}
                <h1 className="text-lg md:text-xl font-semibold">{name}</h1>
              </div>
              <p className="text-sm md:text-base text-white/90">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;