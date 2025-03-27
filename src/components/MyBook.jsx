import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover/Cover";
import coverImg from "../assets/cover_page_new.jpg";
import EndImg from "../assets/last-page.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects.jsx";
import HireMeModal from "./pages/HireMeModal/HireMeModal";

import ProjectImg1 from "../assets/projects/momo-cafe.png";
import ProjectImg2 from "../assets/projects/om-verse.png";
import ProjectImg3 from "../assets/projects/cat-dog-classifier.jpg";
import ProjectImg4 from "../assets/projects/chat-app.jpg";

import ProjectImg5 from "../assets/projects/code-tutor.png";
import ProjectImg6 from "../assets/projects/hotel-man-sys.jpg";
import ProjectImg7 from "../assets/projects/creative-ideas.png";
import ProjectImg8 from "../assets/projects/crud.webp";
const ProjectData = [
  {
    name: "Techno's Momo Cafe",
    description:
      "A dynamic website for Techno Momo Cafe, featuring a menu, online ordering, and location details.",
    image: ProjectImg1, // Add actual image path
    GitRepo_Link: "https://github.com/Om-Bhati/Techno-s-Momo-Cafe",
  },
  {
    name: "OmVerse",
    description:
      "A full-fledged social media web app built with the MERN stack, inspired by Instagram.",
    image: ProjectImg2,
    GitRepo_Link: "https://github.com/Om-Bhati/OmVerse",
  },
];
const ProjectData2 = [
  {
    name: "Real-time Chat App",
    description:
      "A chat application with real-time messaging features, built using WebSockets.",
    image: ProjectImg4,
    GitRepo_Link: "https://github.com/Om-Bhati/Real-Time-Chat-App",
  },
  {
    name: "Cat-Dog Classifier",
    description:
      "A ML application that accurately classifies images as either a cat or a dog using deep learning techniques.",
    image: ProjectImg3,
    GitRepo_Link: "https://github.com/Om-Bhati/Cat-vs-Dog-Classifier",
  },
];
const ProjectData3 = [
  {
    name: "Frontend Basic Projects",
    description:
      "A collection of frontend projects demonstrating UI/UX skills with modern web technologies.",
    image: ProjectImg5,
    GitRepo_Link: "https://github.com/Om-Bhati/Frontend_Projects",
  },
  {
    name: "Hotel_Management System",
    description:
      "A comprehensive hotel management system that handles booking, room management, customer details, and payment processing, with a user-friendly interface and admin dashboard.",
    image: ProjectImg6,
    GitRepo_Link: "https://github.com/Om-Bhati/Hotel-Management-System",
  },
];
const ProjectData4 = [
  {
    name: "Creative Ideas",
    description:
      "A React-based web application to easily add our creative ideas in one place.",
    image: ProjectImg7,
    GitRepo_Link: "https://github.com/Om-Bhati/Creative-Idea-s",
  },
  {
    name: "Crud_backend_Om",
    description:
      "A backend project implementing CRUD operations with authentication and database integration.",
    image: ProjectImg8,
    GitRepo_Link: "https://github.com/Om-Bhati/Crud_backend_Om",
  },
];

function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="Portfolio Website" name=" Om Bhati" />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Skills />
      </Page>
      <Page number={4}>
        <Services />
      </Page>
      <Page number={5}>
        <About />
      </Page>
      <Page number={6}>
        <Projects ProjectData={ProjectData} />
      </Page>
      <Page number={7}>
        <Projects ProjectData={ProjectData2} />
      </Page>
      <Page number={8}>
        <Projects ProjectData={ProjectData3} />
      </Page>
      <Page number={9}>
        <Projects ProjectData={ProjectData4} />
      </Page>
      <Page number={10}>
        <Cover coverImg={EndImg} title="Thanks" />
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
