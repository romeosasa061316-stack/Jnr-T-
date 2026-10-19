import { useState } from "react";

import projects from "../data/projects";
import certificates from "../data/certificates";

import ProjectCard from "./ProjectCard";

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiPhp,
  SiLaravel,
  SiNextdotjs,
  SiJavascript,
  SiMysql,
} from "react-icons/si";

const techStack = [
  { name: "React.js", icon: SiReact, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
];

const categories = [
  {
    id: "software",
    title: "Software Engineering",
    image: "SEimages.png",
    description:
      "Full Stack and frontend applications built with modern technologies like React, JavaScript, Django and databases.",
  },
  {
    id: "uiux",
    title: "UI / UX Design",
    image: "UXimages.png",
    description:
      "User-centered designs, prototypes, research, wireframes and digital product experiences.",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    image: "DMimages.png",
    description:
      "Marketing campaigns, branding strategies, audience research and social media growth.",
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "techstack", label: "Tech Stack" },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-16 sm:py-20 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Portfolio Showcase
          </h2>

          <p className="text-gray-400 leading-7">
            Explore my journey through projects, certifications, and technical
            expertise.
          </p>
        </div>

        {/* Tabs */}
        <div className="inline-flex flex-wrap justify-center bg-slate-900 border border-slate-800 rounded-full p-1 mb-8 sm:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedCategory(null);
              }}
              className={`
                px-4 sm:px-6
                py-2
                rounded-full
                text-sm
                font-medium
                transition
                ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <>
            {!selectedCategory ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category) => {
                  const projectCount = projects.filter(
                    (project) => project.category === category.id
                  ).length;

                  return (
                    <div
                      key={category.id}
                      className="
                        group
                        bg-slate-900
                        border border-slate-800
                        rounded-2xl
                        overflow-hidden
                        text-left
                        hover:border-blue-500/60
                        hover:-translate-y-1
                        transition-all
                        duration-300
                        shadow-lg
                      "
                    >
                      {/* Category Image */}
                      <div className="h-48 overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                        />
                      </div>

                      {/* Category Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-white">
                          {category.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-7 mb-6">
                          {category.description}
                        </p>

                        <p className="text-blue-400 font-semibold text-sm mb-6">
                          {projectCount}{" "}
                          {projectCount === 1 ? "Project" : "Projects"}
                        </p>

                        <button
                          onClick={() => setSelectedCategory(category.id)}
                          className="
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            px-5
                            py-2.5
                            rounded-lg
                            transition
                            font-medium
                            text-sm
                          "
                        >
                          View Collection
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <>
                {/* Back Button */}
                <div className="flex justify-start mb-8">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="
                      text-blue-400
                      hover:text-blue-300
                      text-sm
                      font-medium
                      transition
                    "
                  >
                    Back to Categories
                  </button>
                </div>

                {/* Projects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                  {projects
                    .filter(
                      (project) => project.category === selectedCategory
                    )
                    .map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                      />
                    ))}
                </div>
              </>
            )}
          </>
        )}

        {/* CERTIFICATES */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="
                  bg-slate-900
                  border border-slate-800
                  rounded-xl
                  overflow-hidden
                  hover:border-blue-500/60
                  transition
                  cursor-pointer
                "
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-bold text-white">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TECH STACK */}
        {activeTab === "techstack" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techStack.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="
                  bg-slate-900
                  border border-slate-800
                  rounded-xl
                  p-6
                  flex
                  flex-col
                  items-center
                  gap-3
                  hover:border-blue-500/60
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <Icon className={`w-8 h-8 ${color}`} />

                <span className="text-xs text-gray-400">
                  {name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CERTIFICATE MODAL */}
      {selectedCert && (
        <div
          className="
            fixed
            inset-0
            bg-black/90
            z-50
            flex
            items-center
            justify-center
            p-6
          "
          onClick={() => setSelectedCert(null)}
        >
          <button
            onClick={() => setSelectedCert(null)}
            aria-label="Close certificate"
            className="
              absolute
              top-6
              right-6
              text-white
              text-2xl
              hover:text-blue-400
              transition
            "
          >
            ✕
          </button>

          <img
            src={selectedCert.image}
            alt={selectedCert.title}
            className="
              max-w-full
              max-h-[90vh]
              rounded-lg
              object-contain
            "
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Projects;