import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Packages from "./sections/Packages";
import Location from "./sections/Location";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Packages />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
