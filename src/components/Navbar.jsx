import { useState } from "react";
import { Menu, X } from "lucide-react";
import navigation from "../data/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/70 text-white z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">

        {/* Logo */}
        <a
          href="#hero"
          onClick={closeMenu}
          className="text-2xl font-bold text-blue-500 tracking-wide hover:text-blue-400 transition-colors"
          aria-label="Romeo JNR home"
        >
          &lt;RJ /&gt;
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/cv.pdf"
            download
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-5
              py-2.5
              rounded-lg
              text-sm
              font-semibold
              transition-colors
              duration-300
            "
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            rounded-lg
            p-2
            text-white
            hover:bg-slate-800
            transition
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-6 py-5">
            <ul className="flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      block
                      py-2
                      text-gray-300
                      hover:text-blue-400
                      transition-colors
                      duration-300
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <li className="pt-2">
                <a
                  href="/cv.pdf"
                  download
                  onClick={closeMenu}
                  className="
                    block
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    text-center
                    py-3
                    rounded-lg
                    font-semibold
                    transition-colors
                    duration-300
                  "
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;