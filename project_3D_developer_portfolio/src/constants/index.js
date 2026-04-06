import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import cpp from '../assets/tech/cpp.png' 
import python from '../assets/tech/python.png'
import c from '../assets/tech/c-programming.png'
import frontend from '../assets/tech/front.jpg'
import react from '../assets/tech/reactjs.png'
import ship from '../assets/tech/ship.jpeg'


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
    
  },
  {
    name: "MongoDB",
    icon: mongodb,
    
  },
  {
    name: "Three JS",
    icon: threejs,
    
  },
  {
    name: "git",
    icon: git,
    
  },
  {
    name:"c",
    icon:c,
    
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "CPP",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: " ",
    icon: react,
    iconBg: "#383E56",
    date: "March 2025 - April 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Python Developer",
    company_name: " ",
    icon: python,
    iconBg: "#383E56",
    date: "Septmber 2025 - November 2023",
    points: [
      "Developing Python programs using core concepts like functions, loops, and data structures.",
      "Using NumPy for basic numerical operations, array handling, and mathematical computations.",
      "Working with Pandas for data manipulation, data cleaning, and basic data analysis.",
      "Building beginner to intermediate level Python scripts for automation and data processing."


    ],
  },
  {
    title: "Frontend Developer",
    company_name: "",
    icon:frontend,
    iconBg: "#E6DEDD",
    date: "December 2025 - Present",
    points: [
     "Developing and maintaining responsive frontend interfaces using React.js and modern JavaScript.",
     "Converting UI/UX designs into clean, reusable, and interactive components.",
     "Ensuring cross-browser compatibility and mobile-first responsive design.",
     "Debugging frontend issues, optimizing performance, and improving user experience."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Powered Ship Collision Risk Prediction",
    description:
      "An intelligent web application that uses machine learning models to analyze ship movement data and predict potential collision risks in real time, helping improve maritime safety and navigation decisions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: ship, 
    
    
  },
];

export { services, technologies, experiences, testimonials, projects };
