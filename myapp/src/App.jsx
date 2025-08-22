import React from "react";
import "aos/dist/aos.css";
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
import WebDevCourse from "./components/webdev";
import Webcarrier from "./components/carrier";

function App() {
  return (
    <div>
      {/* Your content will go here */}
      <Navbar />
      <LandingPage />
      <Aboutt />
      <Webcarrier />
      <Program />
      <PreProjects />
      <Projects />
      <Recource />
      <PreTestimonials />
      <Reviews />
      <Footer />
      <WebDevCourse />


    </div>
  );
}

export default App;
