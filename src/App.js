import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicePage';
import ContactUsPage from './components/ContactUsPage';

function App() {
  return (
    <>
      <Navbar />
      <Main />

      <AboutPage/>
      <ServicesPage/>
      <ContactUsPage/>

      <Footer />



    </>
  );
}

export default App;
