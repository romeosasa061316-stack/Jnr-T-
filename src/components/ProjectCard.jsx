function ProjectCard({ project }) {
  const buttonLabel =
    project.category === "uiux"
      ? "View Case Study"
      : project.category === "marketing"
      ? "View Campaign"
      : "View Project";

  return (
    <div
      className="
      group
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      overflow-hidden
      shadow-lg
      hover:shadow-blue-500/20
      hover:border-blue-500
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      {/* Project Image */}

      <div className="relative overflow-hidden h-56">
        <img
          src={project.image || "https://via.placeholder.com/600x400"}
          alt={project.title}
          className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-to from-slate-950 via-transparent to-transparent"></div>
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-7 mb-5">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="
              px-3
              py-1
              rounded-full
              bg-blue-600/10
              border
              border-blue-500/20
              text-blue-300
              text-xs
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}

        <div className="flex items-center justify-between">

          <span className="text-sm text-gray-500">
            Portfolio Project
          </span>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-5
            py-2.5
            rounded-full
            font-medium
            transition
            "
          >
            {buttonLabel}
          </a>

        </div>

      </div>
    </div>
  );
}

export default ProjectCard;