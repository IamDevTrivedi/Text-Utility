import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800  to-slate-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Text Tools</h2>
          <p className="mt-4 text-sm">
            A powerful suite of tools to manipulate and format text. Fast, secure, and easy to use.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Text Tools. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400 transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>

          <SocialLinks />

          <h3 className="text-xl font-semibold text-white mt-6 mb-4">Contact Us</h3>
          <p className="text-sm">
            Email: <a href="mailto:support@texttools.com" className="hover:text-blue-400">support@texttools.com</a>
          </p>
          <p className="text-sm">
            Phone: <a href="tel:+123456789" className="hover:text-blue-400">+1 234 567 89</a>
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
