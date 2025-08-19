import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/Landingpage";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Program from "./components/Program";
import Recource from "./components/Recource";
import Projects from "./components/Projects";
import Aboutt from "./components/Aboutt";
import Reviews from "./components/Reviews";
import PreTestimonials from "./components/PreTestimonials";
import PreProjects from "./components/PreProjects";


function App() {
  return (
    <div>
      {/* Your content will go here */}
      <Navbar />
      <LandingPage />
      <Aboutt />
      <Program />
      <PreProjects />
      <Projects />
      <Recource />
      <PreTestimonials />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
