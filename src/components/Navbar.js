import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-gradient-to-r from-slate-800  to-slate-900 text-white px-4 py-3 md:px-10 md:py-4 flex flex-col md:flex-row items-center justify-between shadow-lg'>
      {/* Logo Section */}
      <div className='flex items-center gap-4'>
        <span className='text-4xl font-extrabold text-blue-400'>Text Tools</span>
        <span className='hidden md:inline text-gray-300'>Manipulate Text Easily</span>
      </div>

      {/* Navigation Links */}
      <div className='flex items-center gap-4 mt-4 md:mt-0'>
        <button className='hover:bg-blue-600 focus:bg-blue-700 text-white font-semibold py-2 px-5 rounded transition duration-300 ease-in-out'>
          Home
        </button>
        <button className='hover:bg-blue-600 focus:bg-blue-700 text-white font-semibold py-2 px-5 rounded transition duration-300 ease-in-out'>
          Services
        </button>
        <button className='hover:bg-blue-600 focus:bg-blue-700 text-white font-semibold py-2 px-5 rounded transition duration-300 ease-in-out'>
          About Us
        </button>
      </div>
    </nav>
  )
}