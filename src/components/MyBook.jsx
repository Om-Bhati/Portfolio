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

import { useState, useEffect } from 'react';

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


// ... (keep all your imports and ProjectData arrays)

function MyBook(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handlePageClick = (e) => {
    if (!isMobile) return;

    const clickX = e.clientX;
    const windowWidth = window.innerWidth;

    if (clickX > windowWidth / 2) {
      setCurrentPage(prev => Math.min(prev + 1, totalPages));
    } else {
      setCurrentPage(prev => Math.max(prev - 1, 1));
    }
  };

  if (isMobile) {
    return (
      <div 
        className="w-full h-screen overflow-y-auto bg-gray-100" // Changed overflow-hidden to overflow-y-auto
        onClick={handlePageClick}
      >
        {/* Current page content */}
        <div className="w-full min-h-screen p-4"> {/* Changed h-full to min-h-screen */}
          {currentPage === 1 && (
            <div className="min-h-screen"> {/* Added container with min-height */}
              <Cover coverImg={coverImg} title="Portfolio Website" name=" Om Bhati" />
            </div>
          )}
          {currentPage === 2 && (
            <div className="min-h-screen">
              <FirstPage />
            </div>
          )}
          {currentPage === 3 && (
            <div className="min-h-screen">
              <Skills />
            </div>
          )}
          {/* Continue with the same pattern for other pages */}
          {currentPage === 4 && (
            <div className="min-h-screen">
              <Services />
            </div>
          )}
          {currentPage === 5 && (
            <div className="min-h-screen">
              <About />
            </div>
          )}
          {currentPage === 6 && (
            <div className="min-h-screen">
              <Projects ProjectData={ProjectData} />
            </div>
          )}
          {currentPage === 7 && (
            <div className="min-h-screen">
              <Projects ProjectData={ProjectData2} />
            </div>
          )}
          {currentPage === 8 && (
            <div className="min-h-screen">
              <Projects ProjectData={ProjectData3} />
            </div>
          )}
          {currentPage === 9 && (
            <div className="min-h-screen">
              <Projects ProjectData={ProjectData4} />
            </div>
          )}
          {currentPage === 10 && (
            <div className="min-h-screen">
              <Cover coverImg={EndImg} title="Thanks" />
            </div>
          )}
        </div>

        {/* Page indicator */}
        <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
          <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentPage} / {totalPages}
          </div>
        </div>
      </div>
    );
  }

  // ... (keep your desktop view the same)
  // Desktop view - flip book
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