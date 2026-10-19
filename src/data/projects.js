import todoImg from "../assets/taskflow.jpeg";
import calcImg from "../assets/nice.png";
import djangoImg from "../assets/djangopic.png";
import dreamlanceImg from "../assets/dreamlance.png";
import dmImg from "../assets/RoyalP.png";

import dreamlanceCase from "../assets/dreamlance-case-study.pdf";
import dmCase from "../assets/dm-case-study.pdf";

const projects = [
  {
    id: 1,
    category: "uiux",
    title: "Dreamlance Marketplace",
    description:
      "A UI/UX project solving trust issues between clients and freelancers. Built through empathy mapping and SWOT analysis to design a marketplace experience that fosters confidence and transparency on both sides.",
    technologies: [
      "UI/UX Design",
      "Empathy Mapping",
      "SWOT Analysis",
    ],
    github: dreamlanceCase,
    image: dreamlanceImg,
  },

  {
    id: 2,
    category: "marketing",
    title: "Local Business Marketing Campaign",
    description:
      "A digital marketing campaign designed for a local business, covering audience targeting, messaging strategy, and campaign execution to grow visibility and engagement.",
    technologies: [
      "Digital Marketing",
      "Campaign Strategy",
      "Social Media",
    ],
    github: dmCase,
    image: dmImg,
  },

  {
    id: 3,
    category: "software",
    title: "Interactive To-Do App",
    description:
      "A JavaScript-based task management application that allows users to add, complete, and organize tasks. It demonstrates DOM manipulation, event listeners, and array methods.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "#",
    image: todoImg,
  },

  {
    id: 4,
    category: "software",
    title: "Calculator Application",
    description:
      "A calculator application built to practice JavaScript fundamentals, functions, logic operations, and handling user input through an interactive interface.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "#",
    image: calcImg,
  },

  {
    id: 5,
    category: "software",
    title: "Django Web Application",
    description:
      "A backend web application built with Django, including database models, forms, migrations, and server-side functionality.",
    technologies: [
      "Python",
      "Django",
      "SQLite",
    ],
    github: "#",
    image: djangoImg,
  },
];

export default projects;