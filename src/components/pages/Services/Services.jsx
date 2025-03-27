import React from "react";
import ServicesBox from "./ServicesBox.jsx";
import Heading from "../../HelperComp/Heading.jsx";

const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-4 md:p-10 overflow-y-auto">
      {/* heading */}
      <Heading
        title="Services"
        subtitle="Tailored Solutions to Help You Achieve Your Goals"
      />

      {/* Services Card - Added padding bottom for scroll space */}
      <div className="pb-6">
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;