// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import renderLogo from './assets/tech_logo/render.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import technohacksLogo from './assets/company_logo/technohacks_logo.jpg';
import iiitvLogo from './assets/company_logo/iiitv_logo.png';

// Education Section Logo's
// import iiitvLogo from './assets/education_logo/iiitv_logo.png';
import shivamLogo from './assets/education_logo/shivam_logo.png';
import devasyaLogo from './assets/education_logo/devasya_logo.jpg';

// Project Section Logo's
import technoVideochatLogo from './assets/work_logo/MyWork/techno-videochat.png';
import technoNotepadLogo from './assets/work_logo/MyWork/techno-notepad.png';
import ProjectImg1 from './assets/work_logo/MyWork/momo-cafe.png';
import ProjectImg2 from './assets/work_logo/MyWork/om-verse.png';
import ProjectImg3 from './assets/work_logo/MyWork/cat-dog-classifier.jpg';
import ProjectImg4 from './assets/work_logo/MyWork/chat-app.jpg';
import ProjectImg5 from './assets/work_logo/MyWork/code-tutor.png';
import ProjectImg6 from './assets/work_logo/MyWork/hotel-man-sys.png';
import ProjectImg7 from './assets/work_logo/MyWork/creative-ideas.png';
import ProjectImg8 from './assets/work_logo/MyWork/crud.webp';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Render', logo: renderLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: iiitvLogo,
    role: "Research Intern",
    company: "IIIT VADODARA",
    date: "May 2025 - Present",
    desc: "Contributed to research in Quantum AI, focusing on the integration of quantum computing with machine learning. Worked on developing and simulating quantum algorithms using Qiskit, and explored quantum-enhanced models for AI tasks.",
    skills: [
      "Python",
      "Qiskit",
      "Quantum Computing",
      "Quantum Machine Learning",
      "TensorFlow Quantum",
      "Linear Algebra",
      "NumPy",
      "Jupyter Notebooks",
      "Scientific Writing",
      "Research & Data Analysis"
    ],

  },
  {
    id: 1,
    img: technohacksLogo,
    role: "Fullstack Developer Intern",
    company: "Techno Hacks EduTech",
    date: "May 2025 - June 2025",
    desc: "Engineered a real-time chat application with integrated video calling features, designed to scale efficiently for up to 1 million users. Implemented rate limiting strategies to prevent abuse, ensure fair usage, and maintain system performance under high load. Focused on optimizing real-time communication, socket connections, and backend scalability using industry best practices.",
    skills: [
      "WebSockets",
      "Socket.IO",
      "Rate Limiting",
      "Redis",
      "Node JS",
      "Express JS",
      "React JS",
      "MongoDB",
      "WebRTC",
      "Scalable Architecture"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: iiitvLogo, // Replace with the correct logo import
    school: "Indian Institute of Information Technology, Vadodara",
    date: "Dec 2021 - Present",
    grade: "8.73 CGPA",
    desc: `Currently pursuing B.Tech in Computer Science & Engineering at IIIT Vadodara. 
    Secured a rank of 7675 in JEE Advanced and scored 98.39 percentile in JEE Main. 
    The curriculum includes Data Structures, Algorithms, Operating Systems, DBMS, and Web Development.`,
    degree: "Bachelor of Technology - B.Tech (Computer Science & Engineering)",
  },
  {
    id: 1,
    img: shivamLogo, // Replace with actual Shivam Vidhyalaya logo
    school: "Shivam Vidhyalaya, Ahmedabad",
    date: "June 2019 - March 2021",
    grade: "93.13 Percentile (Std 12 GSEB)",
    desc: `Completed Higher Secondary Education (Class 11–12) in Science stream. 
    Focused on JEE preparation during this period and achieved 98.39 percentile in JEE Main and secured AIR 7675 in JEE Advanced. 
    This period laid the foundation for my engineering journey.`,
    degree: "GSEB 12th, Science Stream (PCM) + JEE Preparation",
  },
  {
    id: 2,
    img: devasyaLogo, // Replace with actual Ad Devasya logo
    school: "Devasya International Public School, Ahmedabad",
    date: "June 2017 - March 2018",
    grade: "99.34 Percentile (Std 10 GSEB)",
    desc: `Completed Class 10 under the Gujarat State Education Board (GSEB). 
    Achieved a remarkable 99.34 percentile, building a solid academic foundation for future studies.`,
    degree: "GSEB 10th, General Curriculum",
  },
];

export const projects = [
  {
    id: 0,
    title: "TechnoVideochat",
    description:
      "A scalable video chat application with real-time messaging and video calls, capable of handling up to 1 million users. Implemented rate limiting to ensure smooth performance and secure communication.",
    image: technoVideochatLogo, // add your image import
    tags: ["React JS", "Node.js", "Socket.io", "WebRTC", "Scaling", "Rate Limiting"],
    github: "https://github.com/Om-Bhati/Techno-Videochat",
    webapp: "https://techno-notepad.onrender.com", // add if available
  },
  {
    id: 1,
    title: "TechnoNotepad",
    description:
      "A lightweight, intuitive web-based notepad application featuring rich text editing and cross-device accessibility for quick note-taking and management.",
    image: technoNotepadLogo, // add your image import
    tags: ["React JS", "JavaScript", "CSS", "LocalStorage"],
    github: "https://github.com/Om-Bhati/Techno-Notepad",
    webapp: "https://techno-videochat.onrender.com", // add if available
  },
  {
    id: 2,
    title: "Techno's Momo Cafe",
    description:
      "A dynamic website for Techno Momo Cafe, featuring a menu, online ordering system, and location details for visitors and customers.",
    image: ProjectImg1,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://github.com/Om-Bhati/Techno-s-Momo-Cafe",
    webapp: "https://techno-s-momo-cafe.vercel.app/", // add if available
  },
  {
    id: 3,
    title: "OmVerse",
    description:
      "A full-fledged social media web app built with the MERN stack, inspired by Instagram, featuring user posts, follows, likes, and real-time updates.",
    image: ProjectImg2,
    tags: ["MongoDB", "Express", "React JS", "Node.js", "MERN Stack"],
    github: "https://github.com/Om-Bhati/Om-Verse",
    webapp: "", // add if available
  },
  {
    id: 4,
    title: "Real-time Chat App",
    description:
      "A chat application with real-time messaging features implemented using WebSockets to enable instant communication between users.",
    image: ProjectImg4,
    tags: ["Node.js", "Socket.io", "React JS", "WebSocket"],
    github: "https://github.com/Om-Bhati/Real-Time-Chat-App",
    webapp: "", // add if available
  },
  {
    id: 5,
    title: "Cat-Dog Classifier",
    description:
      "A machine learning application that accurately classifies images as cats or dogs using convolutional neural networks and deep learning techniques.",
    image: ProjectImg3,
    tags: ["Python", "TensorFlow", "Keras", "Deep Learning", "CNN"],
    github: "https://github.com/Om-Bhati/Cat-vs-Dog-Classifier",
    webapp: "", // add if available
  },
  {
    id: 6,
    title: "Frontend Basic Projects",
    description:
      "A collection of frontend projects showcasing UI/UX skills using modern web technologies such as HTML, CSS, and JavaScript frameworks.",
    image: ProjectImg5,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://github.com/Om-Bhati/Frontend_Projects",
    webapp: "", // add if available
  },
  {
    id: 7,
    title: "Hotel Management System",
    description:
      "A comprehensive hotel management system handling bookings, room management, customer details, and payment processing, along with an admin dashboard.",
    image: ProjectImg6,
    tags: ["Java", "MySQL", "Servlets", "JSP", "Backend"],
    github: "https://github.com/Om-Bhati/Hotel-Management-System",
    webapp: "", // add if available
  },
  {
    id: 8,
    title: "Creative Ideas",
    description:
      "A React-based web application to easily add and organize creative ideas in one centralized platform for quick access and editing.",
    image: ProjectImg7,
    tags: ["React JS", "JavaScript", "CSS"],
    github: "https://github.com/Om-Bhati/Creative-Idea-s",
    webapp: "", // add if available
  },
  {
    id: 9,
    title: "Crud_backend_Om",
    description:
      "A backend project implementing CRUD operations with authentication, authorization, and database integration for efficient data management.",
    image: ProjectImg8,
    tags: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/Om-Bhati/Crud_backend_Om",
    webapp: "", // add if available
  },
];
