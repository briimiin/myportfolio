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
    <div className='flex flex-row flex-wrap '>
      
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>tech</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-5'>
      {technologies.map((technology) => (
        <div className='w-20 h-20' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
       
      ))}
       </div>
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");