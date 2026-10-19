import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaDownload,
} from "react-icons/fa";

import aboutPhoto from "../assets/nice.png";

function About() {
  const highlights = [
    {
      icon: FaCode,
      title: "Projects",
      description: "Web applications",
    },
    {
      icon: FaGraduationCap,
      title: "Learning",
      description: "Continuous growth",
    },
    {
      icon: FaBriefcase,
      title: "Focus",
      description: "Full Stack Development",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div className="space-y-7">

            <div>
              <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                About Me
              </p>

              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Building solutions with
                <span className="text-blue-500"> purpose.</span>
              </h2>
            </div>

            <div className="space-y-5 text-gray-300 leading-8">
              <p>
                I'm Romeo Sasa JNR, a Full Stack Software Engineer focused on
                building modern, responsive and practical web applications.
                I enjoy turning ideas into functional digital products while
                keeping usability, performance and maintainability in mind.
              </p>

              <p>
                My journey into technology started with a broader foundation
                in Digital Marketing, Product Design and Software Engineering.
                This experience introduced me to user centered design,
                problem solving and understanding the needs behind a product.
              </p>

              <p>
                I chose to specialize in Software Engineering, where I now work
                with technologies across the frontend, backend and database
                layers to build complete applications.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-5">
              <p className="text-gray-400 italic leading-7">
                "Turning ideas into clean, modern, and meaningful digital
                experiences."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/cv.pdf"
                download
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-6
                  py-3
                  rounded-lg
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  duration-300
                "
              >
                <FaDownload className="text-sm" />
                Download CV
              </a>

              <a
                href="#projects"
                className="
                  border
                  border-slate-700
                  hover:border-blue-500
                  hover:bg-slate-800
                  text-white
                  px-6
                  py-3
                  rounded-lg
                  font-semibold
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                "
              >
                View Projects
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      group
                      border
                      border-slate-800
                      rounded-xl
                      p-5
                      bg-slate-950/30
                      hover:border-blue-500/60
                      hover:bg-slate-800/50
                      transition-all
                      duration-300
                    "
                  >
                    <Icon
                      className="
                        text-blue-500
                        text-xl
                        mb-4
                        group-hover:scale-110
                        transition-transform
                        duration-300
                      "
                    />

                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>

                    <p className="text-xs text-gray-500 mt-2 leading-5">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img
                src={aboutPhoto}
                alt="Romeo Sasa JNR"
                className="
                  w-full
                  max-w-md
                  h-[420px]
                  md:h-[520px]
                  object-cover
                  rounded-2xl
                  border
                  border-slate-800
                  shadow-2xl
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;