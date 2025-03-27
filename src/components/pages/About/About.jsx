import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";
import myImage from "../../../assets/cf_logo.png";
import Contact from "../HireMeModal/Contact.jsx";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* Heading */}
      <Heading
        title="About Me"
        subtitle="Passionate Developer | AI / ML Enthusiast | Problem Solver"
      />

      {/* Details Section */}
      <div className="mt-10 orange-text">
        <p>
          Hi! I'm a <b>Full Stack Web Developer</b> and <b>AI/ML Enthusiast</b>{" "}
          with a passion for building scalable applications and solving complex
          problems. With experience in{" "}
          <b>Mern Stack, Python, and Machine Learning</b>, I specialize in
          creating efficient and user-friendly digital solutions.
        </p>
        <br />
        <p>
          I love working on innovative projects, whether it's developing{" "}
          <i>web applications, AI-driven solutions, or optimizing algorithms</i>{" "}
          for better efficiency. Apart from coding, I enjoy participating in{" "}
          <b>competitive programming (CP)</b> and exploring the latest trends in
          technology.
        </p>
        <br />
        <p>
          Open to{" "}
          <i>
            freelance work, research collaborations, and exciting tech projects
          </i>
          . Let's connect and build something amazing together!
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-10 ">
          <a
            href="https://www.instagram.com/ombhati760/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="social-btn" />
          </a>
          <a
            href="https://github.com/Om-Bhati"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="social-btn" />
          </a>
          <a
            href="https://www.linkedin.com/in/om-bhati-a0a620259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="social-btn" />
          </a>
         
          <a
            href="https://leetcode.com/u/Om_Bhati_Temp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="w-12 h-12"
            />
          </a>

          <a
            href="https://codeforces.com/profile/Om_Bhati_Temp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src= { myImage }
              alt="Codeforces"
              className="w-12 h-12"
            />
          </a>
        </div>

        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="https://drive.google.com/file/d/1vEX4D05ogYZOyUIasi6YGjCxE-bYEy7n/view?usp=drive_link" className="primary-btn" download>
            Download Resume
          </a>
          <Contact />
          
        </div>
      </div>
    </div>
  );
};

export default About;
