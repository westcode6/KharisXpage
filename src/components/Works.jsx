import React from "react";
import { Tilt } from "react-tilt";
// The Tilt element must be wrapped in a motion container
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { animations} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const VideoCard = ({ index, description, video }) => {
  return (
    <div className="w-full sm:w-[320px] rounded-2xl border border-neutral-700 shadow-2xl hover:shadow-inner bg-neutral-800">
      <a href="/">
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="rounded-2xl glass-effect hover:shadow-2xl border-neutral-700 w-full p-4"
          >
            <div className="relative w-full sm:max:w-[300px]  rounded-xl overflow-hidden">
              <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <span />
            <div className="p-2 rounded-xl">
              <h2 className="mt-2 text-2xl sm:text-base text-gray-gradient font-medium">
                {description}
              </h2>
            </div>
          </Tilt>
        </motion.div>
      </a>
    </div>
  );
};

const ProjectCard = ({ index, description, image }) => {
  return (
    <div className="w-full sm:w-[320px] rounded-2xl border border-neutral-700 shadow-2xl hover:shadow-inner bg-neutral-800">
      <a href="/">
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="rounded-2xl glass-effect hover:shadow-2xl border-neutral-700 w-full p-4"
          >
            <div className="relative w-full sm:max:w-[300px]  rounded-xl overflow-hidden">
              <img
                src={image}
                alt={description}
                className="w-full  object-center rounded-2xl object-contain"
              />
            </div>
            <span />
            <div className="p-2 rounded-xl">
              <h2 className="mt-2 text-2xl sm:text-base text-gray-gradient font-medium">
                {description}
              </h2>
            </div>
          </Tilt>
        </motion.div>
      </a>
    </div>
  );
};

const Works = () => {
  return (
    <div
      className={`${styles.paddingX} bg-neutral-900 shadow-2xl rounded-2xl text-center flex flex-col items-center justify-center p-10`}
    >
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center text-center"
      >
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

      <div className="w-full  block text-left py-10">
        <h2 className="text-2xl text-red-500 font-semibold">Animated Designs</h2>
        <div className="w-full  mt-20 lg:mt-10 flex flex-wrap gap-10">
          {animations.map((project, index) => (
            <VideoCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>


      <div className="w-full  block text-left py-10">
        <h2 className="text-2xl text-red-500 font-semibold">Graphics Designs</h2>
        <div className="w-full  mt-20 lg:mt-10 flex flex-wrap gap-10">
          {animations.map((project, index) => (
            <VideoCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>


      <div className="w-full  mt-20 lg:mt-10 flex flex-wrap gap-10">

        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
