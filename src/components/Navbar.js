import React, { useState } from 'react';

const NavbarItem = ({ children, darkMode }) => (
  <button className={`text-sm font-medium ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-black'} px-3 py-2 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'} transition-colors`}>
    {children}
  </button>
);

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} shadow-md sticky top-0 z-50`}>
      <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          <a href="/" className="flex-shrink-0 flex items-center">
            <div className='flex gap-3 items-center justify-center flex-col md:flex-row'>
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Text-Utilities</span>
              <span className={`hidden md:block text-sm font-extralight ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Manipulate Text Easily</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center">
            <NavbarItem darkMode={darkMode}>Home</NavbarItem>
            <NavbarItem darkMode={darkMode}>Services</NavbarItem>
            <NavbarItem darkMode={darkMode}>About Us</NavbarItem>
            <NavbarItem darkMode={darkMode}>Contact</NavbarItem>

            <label className="ui-switch mx-3">
              <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
              <div className="slider">
                <div className="circle"></div>
              </div>
            </label>
          </nav>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex items-center justify-around">
          <NavbarItem darkMode={darkMode}>Home</NavbarItem>
          <NavbarItem darkMode={darkMode}>Services</NavbarItem>
          <NavbarItem darkMode={darkMode}>About Us</NavbarItem>
          <NavbarItem darkMode={darkMode}>Contact</NavbarItem>

          <label className="ui-switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}
