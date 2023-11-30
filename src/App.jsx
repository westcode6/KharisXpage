// Import the BrowserRouter used for routing between pages
import { BrowserRouter } from "react-router-dom";

// import all of our components from  the components folder
import {

  Hero, Navbar,

} from "./components";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="w-full glass-effect">
          <div className="w-full glass-effect">
            <div>
              <Navbar />
              <Hero />
              {/* <StarsCanvas /> */}
            </div>
        
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
