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
      <Header></Header>
      <HeroSection cta={scrollToSection}></HeroSection>
      <div ref={myRef}>
        <Feature></Feature>
      </div>
      <AboutUs></AboutUs>
      <FAQ></FAQ>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
