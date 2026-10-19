import {
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaPhone,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-16 sm:py-20 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Let's work together.
          </h2>

          <p className="text-gray-400 leading-7">
            Have a project idea, collaboration opportunity, or simply want to
            connect? Send me a message and I'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-8">

            <h3 className="text-2xl font-bold">
              Romeo JNR
            </h3>

            <p className="text-gray-400 text-sm mt-2 leading-6">
              Junior Full Stack Software Engineer focused on building modern,
              responsive and practical web applications.
            </p>

            <div className="flex flex-col gap-3 mt-6">

              <a
                href="https://wa.me/263776643374"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  hover:border-green-500
                  transition
                "
              >
                <FaWhatsapp className="text-green-500 text-lg" />
                <span>WhatsApp: +263 77 664 3374</span>
              </a>

              <a
                href="tel:+263776643374"
                className="
                  flex
                  items-center
                  gap-3
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  hover:border-blue-500
                  transition
                "
              >
                <FaPhone className="text-blue-500 text-sm" />
                <span>Call: +263 77 664 3374</span>
              </a>

              <a
                href="mailto:romeo061316@gmail.com"
                className="
                  flex
                  items-center
                  gap-3
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  hover:border-red-500
                  transition
                "
              >
                <SiGmail className="text-red-500" />
                <span>romeo061316@gmail.com</span>
              </a>

            </div>

            <hr className="border-slate-800 my-6" />

            <h3 className="text-lg font-semibold mb-4">
              Send Me a Message
            </h3>

            <form
              action="https://formspree.io/f/maqrqvql"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-blue-500
                  transition
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-blue-500
                  transition
                "
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-blue-500
                  transition
                  resize-none
                "
              />

              <button
                type="submit"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                "
              >
                Send Message
              </button>
            </form>

            <hr className="border-slate-800 my-6" />

            <p className="text-gray-500 text-sm mb-4">
              Connect With Me
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              <a
                href="https://www.linkedin.com/in/romeo-sasa-a9440a3b0"
                className="
                  flex
                  items-center
                  gap-2
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  hover:border-blue-500
                  transition
                "
              >
                <FaLinkedin className="text-blue-500" />
                LinkedIn
              </a>

              <a
                href="mailto:romeo061316@gmail.com"
                className="
                  flex
                  items-center
                  gap-2
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  hover:border-red-500
                  transition
                "
              >
                <SiGmail className="text-red-500" />
                Gmail
              </a>

              <a
                href="https://wa.me/263776643374"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  hover:border-green-500
                  transition
                "
              >
                <FaWhatsapp className="text-green-500" />
                WhatsApp
              </a>

              <a
                href="https://github.com/romeosasa061316-stack"
                className="
                  flex
                  items-center
                  gap-2
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  hover:border-gray-500
                  transition
                "
              >
                <FaGithub />
                GitHub
              </a>

            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl px-5 sm:px-8 py-8">

            <h3 className="text-2xl font-bold">
              Comments
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Leave your thoughts here.
            </p>

            <form className="mt-6 flex flex-col gap-4">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-blue-500
                  transition
                "
              />

              <textarea
                placeholder="Your Comment"
                rows="4"
                className="
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-blue-500
                  transition
                  resize-none
                "
              />

              <button
                type="button"
                className="
                  border
                  border-slate-800
                  bg-slate-950
                  text-gray-300
                  rounded-lg
                  py-3
                  text-sm
                  hover:border-blue-500
                  hover:text-white
                  transition
                "
              >
                Upload Image
              </button>

              <button
                type="submit"
                className="
                  bg-slate-700
                  hover:bg-slate-600
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                "
              >
                Post Comment
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;