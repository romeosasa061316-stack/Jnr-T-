import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import HangingPhoto from "./HangingPhoto";


function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0a0e27] text-white flex items-center pt-20 sm:pt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center px-4 sm:px-6 py-10 sm:py-12">
        
        <div className="text-center md:text-left w-full max-w-2xl mx-auto md:mx-0">
          <span className="inline-block bg-slate-900/60 border border-slate-800 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="text-blue-500">●</span>{" "}
            <span className="text-gray-300">Hello, I'm</span>
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Romeo <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Junior
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            Full Stack{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </h2>

          <p className="text-gray-400 mt-6 leading-8 max-w-xl mx-auto md:mx-0">
            I build responsive, user friendly and modern web applications
            using React, Tailwind CSS, Node.js and more.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 mt-8 w-full max-w-xl mx-auto md:mx-0">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 w-full sm:w-auto text-center"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="border border-slate-700 hover:bg-slate-900 px-6 py-3 rounded-lg font-semibold transition w-full sm:w-auto text-center"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8">
            <p className="text-gray-500 text-sm mb-3 text-center md:text-left">Find me on</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-500 transition">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-500 transition">
                <FaLinkedin className="w-4 h-4 text-blue-500" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-500 transition">
                <FaTwitter className="w-4 h-4 text-sky-400" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-500 transition">
                <FaInstagram className="w-4 h-4 text-pink-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end mt-8 sm:mt-10 md:mt-0">
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-blue-600/30 rounded-full blur-3xl"></div>
          <HangingPhoto />
        </div>

      </div>
    </section>
  );
}

export default Hero;