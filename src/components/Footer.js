import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer({ darkMode, toggleDarkMode }) {
  return (
    <footer className={`transition-all-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} ${darkMode ? 'text-white' : 'text-gray-800'} py-8 border-t border-black`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        <div>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Text Tools</h2>
          <p className={`${darkMode ? 'text-white' : 'text-gray-800'} mt-4 text-sm`}>
            A powerful suite of tools to manipulate and format text. Fast, secure, and easy to use.
          </p>
          <p className={`mt-4 text-sm opacity-80 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            &copy; {new Date().getFullYear()} Text Tools. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/about">
                About Us
              </a>
            </li>
            <li>
              <a href="/services">
                Services
              </a>
            </li>
            <li>
              <a href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={`${darkMode ? 'text-white' : 'text-gray-800'} text-xl font-semibold mb-4`}>Follow Us</h3>

          <SocialLinks />

          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mt-6 mb-4`}>Contact Us</h3>
          <p className="text-sm">
            Email: <a href="mailto:support@texttools.com" className="">support@texttools.com</a>
          </p>
          <p className="text-sm">
            Phone: <a href="tel:+123456789" className="">+1 234 567 89</a>
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-sm text-gray-500">
          Made with <span className="text-red-500">&hearts;</span> by Text Tools Team.
        </p>
      </div>
    </footer>
  );
}
