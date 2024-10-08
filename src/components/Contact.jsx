
import {CONTACT} from "../constants"

import {motion} from "framer-motion"
const Contact = () => {
  return (  
    <div className="border-b border-neutral-900 text-4xl">
      <motion.h1 
      className="my-10 text-center text-4xl">
        Get in Touch 
      </motion.h1>       
        <motion.div 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-50}}
       transition={{duration:0.5}}
        className="text-center tracking-tighter text-sm">
            <p className="">{CONTACT.address}</p>
            <p className="">{CONTACT.phoneNo}</p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </motion.div> 
    </div>
  )
}

export default Contact
