import skills from "../data/skills";
import SkillCircle from "./SkillCircle";

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCircle key={skill.id} name={skill.name} level={skill.level} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;