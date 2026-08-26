import skills from "../data/skills";
import SkillCircle from "./SkillCircle";

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCircle key={skill.id} name={skill.name} level={skill.level} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;