import './index.css';
import './App.css';
import Header from './components/Menu/Header';
import Home from './components/Home';
import Projects from './components/ProjectsSection/Projects';
import About from './components/About/About';
import Services from './components/ServiceSection/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // Ejecutar la animación solo una vez
    });
  }, []);

  const dataAos = {
    fadeUp: 'fade-up',
    zoomIn: 'zoom-in',
    fadeRight: 'fade-right',
    fadeLeft: 'fade-left',
  };

  return (
    <section className="container mx-auto">
      <Header />
      <main>
        <Home />
        <Projects dataAos={dataAos} />
        <About dataAos={dataAos} />
        <Services dataAos={dataAos} />
        <Contact dataAos={dataAos} />
      </main>
      <Footer />
    </section>
  );
}

export default App;
