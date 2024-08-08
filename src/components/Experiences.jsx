import {EXPERIENCES} from "../constants"
import {motion} from "framer-motion"
const Experiences = () => {
  return (
    <div className="border-b border-neutral-900 text-4xl">
      <motion.h1 
      className="my-20 text-center text-4xl">
        Experiences 
      </motion.h1>  
        <div>
            {EXPERIENCES.map((experoence,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-50}}
                    transition={{duration:1.5}}
                    className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-natural-400">{experoence.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:50}}
                    transition={{duration:1.5}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 text-sm font-semibold">{experoence.role} - <span className="text-sm text-purple-100">{experoence.company}</span></h6>
                        <p className="mb-4 text-sm text-neutral-400">{experoence.description}</p>
                        {experoence.technologies.map((tech,index)=>(
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600">{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>    
    </div>
  )
}

export default Experiences
