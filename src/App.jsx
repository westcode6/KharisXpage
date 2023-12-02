// Import the BrowserRouter used for routing between pages
import { BrowserRouter } from "react-router-dom";

// import all of our components from  the components folder
import {

  Hero, Navbar,

} from "./components";
import About from "./components/About";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />

        <div className="w-full glass-effect">
          <div className="w-full glass-effect">
            <div>
              <Hero />
              <About />
              {/* <StarsCanvas /> */}
            </div>
        
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
