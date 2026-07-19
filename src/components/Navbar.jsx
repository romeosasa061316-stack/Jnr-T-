import { useState } from "react";
import { Menu, X } from "lucide-react";
import navigation from "../data/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md text-white z-40 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-4">
        <a href="#hero" className="text-2xl font-bold text-blue-500 tracking-wide">
          &lt;RJ /&gt;
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Download CV Button */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition duration-300"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-lg p-2 text-white hover:bg-slate-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-center py-2 rounded-lg transition duration-300 block"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;