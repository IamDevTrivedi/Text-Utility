import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Workspace from './components/Workspace';
import ContactUsPage from './components/ContactUsPage';
import ServicesPage from './components/ServicePage';
import AboutPage from './components/AboutPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-white'}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Workspace darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ServicesPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <AboutPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ContactUsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;