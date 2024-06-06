import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
       
      ))}
       </div>
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");