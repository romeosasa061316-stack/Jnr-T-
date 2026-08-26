import aboutPhoto from "../assets/nice.png";

function About() {
  return (
    <section id="about" className="bg-slate-900 text-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 gap-12 md:grid-cols-2 items-center">

        <div className="space-y-6">
          <p className="text-gray-500 text-sm tracking-widest">ABOUT ME</p>

          <h2 className="text-5xl font-extrabold leading-tight">
            Romeo JNR
          </h2>

          <div className="space-y-4 text-gray-300 leading-8">
            <p>
              My journey into software engineering began in healthcare, where I
              served as a Community Adolescent Treatment Supporter (CATs). That
              experience shaped my empathy, communication, and problem solving
              and showed me how real world challenges can be improved through
              technology.
            </p>
            <p>
              My path into tech itself started with a crash course covering
              Digital Marketing, Product Design, and Software Engineering. Along
              the way I learned UI/UX fundamentals including empathy mapping
              and SWOT analysis through building Dreamlance, a marketplace
              solving trust issues between clients and freelancers. I ultimately
              chose to specialize in Software Engineering, and that broader
              foundation now shapes how I build: with the end user and business
              goals always in mind.
            </p>
          </div>

          <p className="italic text-gray-400 border border-slate-800 rounded-lg px-4 py-3 inline-block">
            "Turning ideas into clean, modern, and meaningful digital experiences."
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/cv.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
            >
              📄 Download CV
            </a>
            <a
              href="#projects"
              className="border border-slate-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition"
            >
              ↗ View Projects
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="border border-slate-800 rounded-xl p-4 hover:border-blue-500 transition">
              <p className="text-xl">{"</>"}</p>
              <p className="text-sm text-gray-400 mt-2 uppercase tracking-wide">Projects</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-4 hover:border-blue-500 transition">
              <p className="text-xl">🎓</p>
              <p className="text-sm text-gray-400 mt-2 uppercase tracking-wide">Certificates</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-4 hover:border-blue-500 transition">
              <p className="text-xl">🌐</p>
              <p className="text-sm text-gray-400 mt-2 uppercase tracking-wide">Completed Works</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={aboutPhoto}
            alt="Romeo JNR"
            className="w-72 h-72 rounded-full object-cover border-4 border-slate-800 md:w-96 md:h-96"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
