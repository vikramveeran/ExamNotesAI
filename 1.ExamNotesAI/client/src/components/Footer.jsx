import React from 'react'
import { motion } from 'motion/react'
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <motion.div
  initial={{
    opacity: 0,
    y: 50,
    scale: 0.97,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    y: -3,
    transition: { duration: 0.3 },
  }}
  className="
    z-10 mx-6 mt-24 mb-6
    rounded-3xl
    border border-white/10
      bg-black/30
    backdrop-blur-xl
    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
    px-8 py-10
    text-white
  "
>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
        <motion.div>
            <div>
                <img src={logo} alt="" />
                <span>ExamNotes<span>AI</span></span>
            </div>
        </motion.div>
  </div>
  <p className=''>
     ExamNotes AI helps students generate exam-focused notes,revision material,diagram, and printable PDFs using AI. 
  </p>
</motion.div>
  )
}

export default Footer
