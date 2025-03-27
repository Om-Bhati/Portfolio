import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Heading from "../../HelperComp/Heading";
import myImage from "../../../assets/cf_logo.png";
import Contact from "../HireMeModal/Contact.jsx";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div
      className={`page-shadow bg-white ${
        isMobile ? "p-6 min-h-screen" : "p-10 h-full"
      }`}
    >
      {/* Heading */}
      <Heading
        title="About Me"
        subtitle="Passionate Developer | AI / ML Enthusiast | Problem Solver"
      />

      {/* Details Section */}
      <div className={`mt-6 orange-text ${isMobile ? "text-sm" : ""}`}>
        <p className={isMobile ? "mb-4" : ""}>
          Hi! I'm a <b>Full Stack Web Developer</b> and <b>AI/ML Enthusiast</b>{" "}
          with a passion for building scalable applications and solving complex
          problems. With experience in{" "}
          <b>Mern Stack, Python, and Machine Learning</b>, I specialize in
          creating efficient and user-friendly digital solutions.
        </p>

        <p className={isMobile ? "mb-4" : ""}>
          I love working on innovative projects, whether it's developing{" "}
          <i>web applications, AI-driven solutions, or optimizing algorithms</i>{" "}
          for better efficiency. Apart from coding, I enjoy participating in{" "}
          <b>competitive programming (CP)</b> and exploring the latest trends in
          technology.
        </p>

        <p className={isMobile ? "mb-6" : ""}>
          Open to{" "}
          <i>
            freelance work, research collaborations, and exciting tech projects
          </i>
          . Let's connect and build something amazing together!
        </p>

        {/* Social Links */}
        <div
          className={`flex ${
            isMobile ? "flex-wrap justify-center gap-4" : "space-x-4"
          } mt-6`}
        >
          <a
            href="https://www.instagram.com/ombhati760/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            onClick={(e) => e.stopPropagation()} // Add this line
          >
            <AiFillInstagram
              className={`social-btn ${isMobile ? "text-3xl" : ""}`}
            />
          </a>
          <a
            href="https://github.com/Om-Bhati"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            onClick={(e) => e.stopPropagation()} // Add this line
          >
            <AiFillGithub
              className={`social-btn ${isMobile ? "text-3xl" : ""}`}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/om-bhati-a0a620259/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            onClick={(e) => e.stopPropagation()} // Add this line
          >
            <AiFillLinkedin
              className={`social-btn ${isMobile ? "text-3xl" : ""}`}
            />
          </a>
          <a
            href="https://leetcode.com/u/Om_Bhati_Temp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            onClick={(e) => e.stopPropagation()} // Add this line
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className={isMobile ? "w-10 h-10" : "w-12 h-12"}
            />
          </a>
          <a
            href="https://codeforces.com/profile/Om_Bhati_Temp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            onClick={(e) => e.stopPropagation()} // Add this line
          >
            <img
              src={myImage}
              alt="Codeforces"
              className={isMobile ? "w-10 h-10" : "w-12 h-12"}
            />
          </a>
        </div>

        {/* Button Links */}
        <div
          className={`flex ${
            isMobile ? "flex-col space-y-4 items-center" : "space-x-4"
          } mt-6`}
        >
          <a
            href="https://drive.google.com/file/d/1vEX4D05ogYZOyUIasi6YGjCxE-bYEy7n/view?usp=drive_link"
            className={`primary-btn ${isMobile ? "w-full text-center" : ""}`}
            download
          >
            Download Resume
          </a>
          <div onClick={(e) => e.stopPropagation()}>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
