import React from 'react'
import { motion } from "motion/react"
const Navbar = () => {
  return (
    <motion.div 
    initial={{ opacity:0,x:-60 }} 
    animate={{ opacity:1,x:0}} 
    transition={{duration:1.5}}
    className='w-full px-6 py-4 flex items-center justify-between bg-white shadow-md rounded-2xl '>
           
    </motion.div>
  )
}

export default Navbar