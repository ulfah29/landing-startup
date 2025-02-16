import { useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/Hero';
import Feature from './components/Feature';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  const myRef = useRef(null)

  const scrollToSection = () => myRef.current.scrollIntoView();

  return (
    <div>
      <Header />
      <HeroSection cta={scrollToSection} />
      <div ref={myRef}>
        <Feature />
      </div>
      <AboutUs />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
