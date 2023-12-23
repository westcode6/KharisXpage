import React from "react";
import { Tilt } from "react-tilt";
// The Tilt element must be wrapped in a motion container
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ProjectCard = ({
  index,
  description,
  image,
}) => {
  return (
    <div className="rounded-2xl shadow-2xl hover:shaow-inner">
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}

          className="rounded-2xl glass-effect  shadow-2xl border-neutral-700 w-full sm:w-[320px] p-4"
        >
          <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
            <img src={image} alt={description} className="w-full object-center rounded-2xl object-cover" />
          </div>
<span />
          <div className="p-2 rounded-xl">
            <h2 className="mt-2 text-2xl sm:text-base text-gray-gradient font-medium">{description}</h2>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};


const Works = () => {
  return (
    <div className={`${styles.paddingX} bg-neutral-900 shadow-2xl rounded-2xl text-center flex flex-col items-center justify-center p-10`}>
      <motion.div variants={textVariant()} className="flex flex-col items-center text-center">
      <h2 className={`${styles.sectionHeadText} uppercase`}>
        featured projects
     
            </h2>
            <span className="w-4 h-2  block rounded-full bg-priRed"></span>
      </motion.div>

      <div className="max-w-xl flex items-center justify-center py-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-base text-neutral-400 max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-work
          examples of my work. Each project is briefly described with links t
        </motion.p>
      </div>

      <div className="w-full  mt-20 flex flex-wrap items-center justify-between gap-5">
        {projects.map((project, index) => (
           <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
