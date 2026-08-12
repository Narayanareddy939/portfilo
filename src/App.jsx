import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import WaveDivider from './components/WaveDivider';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <WaveDivider fill="#ffffff" path="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" />
      <About />
      <WaveDivider fill="#fdddd4" path="M0,32 C480,64 960,0 1440,32 L1440,64 L0,64 Z" />
      <Experience />
      <WaveDivider fill="#e9f6f5" path="M0,20 C360,60 1080,0 1440,40 L1440,64 L0,64 Z" />
      <Projects />
      <WaveDivider fill="#fdf9f7" path="M0,40 C480,0 960,64 1440,20 L1440,64 L0,64 Z" />
      <Skills />
      <WaveDivider fill="#ffffff" path="M0,30 C400,64 1040,0 1440,35 L1440,64 L0,64 Z" />
      <Publications />
      <WaveDivider fill="#c8e9e7" path="M0,30 C400,64 1040,0 1440,35 L1440,64 L0,64 Z" />
      <Certifications />
      <WaveDivider fill="#1a2e2c" path="M0,35 C360,0 1080,64 1440,25 L1440,64 L0,64 Z" />
      <Contact />
    </>
  );
}
