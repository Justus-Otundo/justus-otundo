import { Navbar, Footer } from './components/layout';
import {
  Hero,
  About,
  Projects,
  Experience,
  Services,
  Testimonials,
  Contact
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
