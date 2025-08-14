import React from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Program from "./components/Program";
import Recource from "./components/Recource";
import Projects from "./components/Projects";
import Aboutt from "./components/Aboutt";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div>
      {/* Your content will go here */}
      <Navbar />
      <Landingpage />
      <Aboutt />
      <Program />
      <Projects />
      <Recource />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
