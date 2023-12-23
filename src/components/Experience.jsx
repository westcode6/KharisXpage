
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences} from "../constants";
import { slideIn, fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// Create The Service Card Component to render our services
export const ServiceCard = ({ index, counts, title }) => {

  return (
    <Tilt className="w-full sm:w-[200px]  glass-effect rounded-xl">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        // animation pattern
        className="w-full mb-6"
      >
        {/* The Tilt options are coming into this div */}
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="w-full  shadow-xl bg-neutral-900 border border-neutral-800 px-6 py-4 rounded-tl-2xl rounded-br-2xl rounded-md flex flex-col  items-center justify-center gap-2"
        >
   
          <h4 className="text-3xl text-priRed font-black ">{counts}</h4>
          <p className="mt-2 text-base tracking-wide text-gray-gradient">{title}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Experience = () => {

  return (
    <>
      <div
        id="about"
        className={`w-full  py-4 rounded-xl px-4 md:px-0 flex flex-col items-center justify-center text-center`}
      >
        {/* NOTE: that every motion effects must be passed as props in the motion tag */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center">

       
          <motion.div
            className="w-full md:max-w-1/2 flex items-center justify-start"
            variants={slideIn("bottom", "", 0.23, 0.3)}
   >
      <div className="w-full md:max-w-20 flex flex-col items-center sm:items-start justify-center">
     <div>
     <h2 className={`text-5xl text-priRed font-black`}>
         08
      
            </h2>
            <p className="text-lg text-gray-gradient uppercase font-bold mt-2">
         Years Experience
            </p>
     </div>
      </div>
          </motion.div>

          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 w-full sm:max-w-1/2"
          >
        <div className="w-full px-2 grid grid-cols-1 sm:grid-cols-2  gap-2">
          {experiences.map((experience, index) => (
            <ServiceCard key={experience.title} index={index} {...experience} />
          ))}
        </div>
          </motion.div>
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
