import './index.css'
import './App.css' 
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <section className="container mx-auto">
      <Header />
      <main>
        <Home />
        <Projects />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </section>
  )
}

export default App
