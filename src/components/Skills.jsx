import skills from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "Tools",
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 leading-7">
            A growing toolkit of technologies I use to design,
            develop and build modern web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category
            );

            // Do not display empty categories
            if (categorySkills.length === 0) {
              return null;
            }

            return (
              <div key={category}>
                <div className="flex items-center gap-4 mb-5">
                  <h3 className="text-xl font-bold text-white">
                    {category}
                  </h3>

                  <div className="h-px bg-slate-800 flex-1" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill) => (
                    <SkillCard
                      key={skill.id}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;