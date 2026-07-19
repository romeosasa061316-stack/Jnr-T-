import { useState } from "react";
import projects from "../data/projects";
import certificates from "../data/certificates";
import ProjectCard from "./ProjectCard";
import {
  SiReact, SiTypescript, SiTailwindcss, SiHtml5,
  SiPhp, SiLaravel, SiNextdotjs, SiJavascript, SiMysql
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

function Projects() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedCert, setSelectedCert] = useState(null);

  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "techstack", label: "Tech Stack" },
  ];

  return (
    <section id="projects" className="bg-slate-950 text-white py-20 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-3">Portfolio Showcase</h2>
        <p className="text-gray-400 mb-10">
          Explore my journey through projects, certifications, and technical expertise.
        </p>

        {/* Pill Tab Switcher */}
        <div className="inline-flex bg-slate-900 border border-slate-800 rounded-full p-1 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-slate-700 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === "certificates" && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition text-left cursor-pointer"
              >
                <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{cert.issuer} · {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Tab */}
        {activeTab === "techstack" && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {techStack.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center gap-2 hover:border-blue-500 transition"
              >
                <Icon className={`w-8 h-8 ${color}`} />
                <span className="text-xs text-gray-400">{name}</span>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Certificate Full View Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedCert(null)}
        >
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-blue-400 transition"
          >
            ✕
          </button>
          <img
            src={selectedCert.image}
            alt={selectedCert.title}
            className="max-w-full max-h-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Projects;