import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 text-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left: Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold">Hubungi Saya</h2>
            <p className="text-gray-400 text-sm mt-2">
              Feel free to reach out if you want to collaborate, discuss ideas, or simply say hello.
            </p>

            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://wa.me/263776643374"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm hover:border-green-500 transition"
              >
                <FaWhatsapp className="text-green-500" /> WhatsApp: +263 77 664 3374
              </a>

              <a
                href="tel:+263776643374"
                className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm hover:border-blue-500 transition"
              >
                📞 Call: +263 77 664 3374
              </a>

              <a
                href="mailto:romeo061316@gmail.com"
                className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm hover:border-blue-500 transition"
              >
                <SiGmail className="text-red-500" /> romeo061316@gmail.com
              </a>
            </div>

            <hr className="border-slate-800 my-6" />

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
                className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
              >
                ✈ Send Message
              </button>
            </form>

            <hr className="border-slate-800 my-6" />

            <p className="text-gray-500 text-sm mb-4">Connect With Me</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="#" className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm hover:border-blue-500 transition">
                <FaLinkedin className="text-blue-500" /> LinkedIn
              </a>

              <a
                href="mailto:romeo061316@gmail.com"
                className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm hover:border-blue-500 transition"
              >
                <SiGmail className="text-red-500" /> Gmail
              </a>

              <a
                href="https://wa.me/263776643374"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm hover:border-blue-500 transition"
              >
                <FaWhatsapp className="text-green-500" /> WhatsApp
              </a>

              <a href="#" className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm hover:border-blue-500 transition">
                <FaGithub /> Github
              </a>
            </div>
          </div>

          {/* Right: Comments */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl px-10 py-8">
            <h2 className="text-2xl font-bold">Comments</h2>
            <p className="text-gray-400 text-sm mt-2">Leave your thoughts here</p>

            <form className="mt-6 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Your Comment"
                rows="4"
                className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
              <button
                type="button"
                className="flex items-center gap-2 justify-center bg-slate-950 border border-slate-800 rounded-lg py-3 text-sm hover:border-blue-500 transition"
              >
                ⬆ Upload Image
              </button>
              <button
                type="submit"
                className="bg-slate-700 hover:bg-slate-600 py-3 rounded-lg font-semibold transition"
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