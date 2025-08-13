import React from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Your content will go here */}
       <Navbar />
       <Landingpage />
       <Cards />
       <Footer />
    </div>
  );
}

export default App;