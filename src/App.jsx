import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Achievement from './sections/Achievement/Achievement';
import Transcript from './sections/Transcript/Transcript';

function App() {
  return (
    <>
      <Hero />
      <Transcript />
      <Projects />
      <Skills />
      <Achievement />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
