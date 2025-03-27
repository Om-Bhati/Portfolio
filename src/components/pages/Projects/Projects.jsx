import React, { useState, useEffect } from "react";
import ProjectBox from "./ProjectBox.jsx";
import Heading from "../../HelperComp/Heading.jsx";

const Projects = ({ ProjectData }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className={`page-shadow bg-white ${isMobile ? "p-6 min-h-screen" : "p-10 h-full"}`}>
      <Heading title="Projects" />
      <ProjectBox ProjectData={ProjectData} isMobile={isMobile} />
    </div>
  );
};

export default Projects;