import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";

const icons = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  React: FaReact,
  "Tailwind CSS": SiTailwindcss,
  "Next.js": SiNextdotjs,

  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  Prisma: SiPrisma,
  Django: FaPython,
  Python: FaPython,

  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,

  "Git & GitHub": FaGithub,
};

function SkillCard({ skill }) {
  const Icon = icons[skill.name];

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-blue-500/60 hover:bg-slate-800/60 transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="text-2xl text-blue-500 group-hover:scale-110 transition-transform duration-300">
          {Icon && <Icon />}
        </div>

        <div>
          <h3 className="text-white font-semibold">
            {skill.name}
          </h3>

          <p className="text-gray-500 text-xs mt-1">
            {skill.category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;