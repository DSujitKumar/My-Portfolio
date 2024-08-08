
import { SiDotnet } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { SiCsharp } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";

import {motion} from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y: -10 },
  animate: {
    y: [10, -10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});


const Technology = () => {
  return (
    <div className="border-b border-neutral-900 text-4xl">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
       className="my-20 text-center text-4xl">
        Technologies
      </motion.h1>
      <motion.div 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-4 mb-20">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <VscAzure className="text-7xl text-blue-700"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCsharp className="text-7xl text-cyan-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiDotnet className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbFileTypeSql className="text-7xl text-green-700"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiRedis className="text-7xl text-red-600"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <VscGithub className="text-7xl text-cyan-100"/>
        </motion.div>
           
      </motion.div>
    </div>
  )
}

export default Technology
