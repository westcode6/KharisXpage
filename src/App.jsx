// Import the BrowserRouter used for routing between pages
import { BrowserRouter } from "react-router-dom";

// import all of our components from  the components folder
import { Hero, Navbar } from "./components";
import About from "./components/About";
import Cta from "./components/Cta";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="w-full glass-effect">
          <div className="w-full glass-effect">
            <div>
              <div className="w-full">
                <div className="relative z-0">
                  <Hero />
                  {/* <StarsCanvas /> */}
                </div>
              </div>

              <About />

              <Works />

              <div className="w-full relative z-0">
                <Contact />
                <StarsCanvas />

              
              </div>
              <Cta />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
