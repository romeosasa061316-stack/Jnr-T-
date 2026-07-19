function ProjectCard({ project }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 transition duration-300">

      <div className="h-40 bg-slate-950 flex items-center justify-center">
        <img
          src={project.image || "https://via.placeholder.com/300x160"}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-gray-400 mt-2 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-gray-500 text-sm">
            {project.github === "#" ? "No Link" : "Live Link"}
          </span>
          <a
            href={project.github}
            className="bg-slate-800 hover:bg-slate-700 text-sm px-4 py-2 rounded-lg flex items-center gap-1"
          >
            Details →
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;