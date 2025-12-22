import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Packages from './sections/Packages';
import Location from './sections/Location';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Packages />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
