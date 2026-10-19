import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";
import HangingPhoto from "./HangingPhoto";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0a0e27] text-white flex items-center pt-20 sm:pt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center px-6 sm:px-8 py-12 sm:py-16">

        <div className="text-center md:text-left w-full max-w-2xl mx-auto md:mx-0">

          <div className="inline-flex items-center gap-2 border border-slate-800 bg-slate-900/70 px-4 py-2 rounded-full mb-6">
            <span className="text-gray-300 text-sm">
              Hello, I'm Romeo Sasa JNR
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Building
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold mt-6 text-gray-200">
            Full Stack Software Engineer
          </h2>

          <p className="text-gray-400 mt-6 leading-8 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            I build responsive and user focused web applications across the
            frontend, backend and database layers, turning ideas into
            practical digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-9">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              View Projects
              <FaArrowRight className="text-sm" />
            </a>

            <a
              href="#contact"
              className="border border-slate-700 hover:border-blue-500 hover:bg-slate-900 text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <FaEnvelope className="text-sm" />
              Contact Me
            </a>
          </div>
          <div className="mt-9">
            <p className="text-gray-500 text-sm mb-4 text-center md:text-left">
              Connect with men
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">

              <a
                href="https://github.com/romeosasa061316-stack"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                <FaGithub className="text-base" />
              </a>

              <a
                href="https://www.linkedin.com/in/romeo-sasa-a9440a3b0"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                <FaLinkedin className="text-base" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                <FaTwitter className="text-base" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                <FaInstagram className="text-base" />
              </a>

            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <HangingPhoto />
        </div>

      </div>
    </section>
  );
}

export default Hero;