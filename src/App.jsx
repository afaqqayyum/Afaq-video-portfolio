import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Services from "./components/Services";
import About from "./components/About";
import Contact  from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero/>
      <FeaturedWork/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;