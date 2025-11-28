import React, { useState } from 'react';
import { Menu, X, Sparkles, Github } from 'lucide-react';
import { APP_NAME, NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-800 bg-gray-900/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 space-x-reverse rtl:space-x-reverse">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white tracking-tighter">
            {APP_NAME}
          </span>
        </a>

        {/* Mobile Menu Button */}
        <div className="flex md:order-2 space-x-3 space-x-reverse md:space-x-0 rtl:space-x-reverse">
          <a
            href="https://github.com" // Replace with actual repo link
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all border border-gray-700"
          >
            <Github className="w-4 h-4" />
            <span>گیت‌هاب</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">منو</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Links */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 md:space-x-reverse rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="md:hidden mt-2">
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-3 text-white bg-gray-700 rounded"
                >
                    <Github className="w-4 h-4" />
                    <span>گیت‌هاب</span>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;