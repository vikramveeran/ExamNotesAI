import React from 'react'
import { AnimatePresence, motion } from "motion/react"
import logo from "../assets/logo.png"
import {useSelector} from "react-redux"
import {useState} from 'react'
const Navbar = () => {
  const{userData} = useSelector((state) =>state.user)
  const credits = userData.credits
  const [showCredits, setShowCredits] = useState(false)
  return (
    <motion.div 
    initial={{ opacity:0,x:-60 }} 
    animate={{ opacity:1,x:0}} 
    transition={{duration:1.5}}
    className='w-full  px-5 py-4 mt-4  flex items-center justify-between bg-black shadow-md rounded-2xl '>
           <div className='flex items-center gap-3 '>
              <img src={logo} alt="examnotes" className='w-9 h-9 '/>
              <span className='text-lg hidden md:block font-semibold text-white'>
                ExamNotes <span className='text-gray-400'>AI</span>
              </span>
           </div>
           <div className='flex items-center gap-6 relative'>
              <div className='relative '>
                <motion.div onClick={()=>setShowCredits(!showCredits)} whileHover={{scale:1.07}}
                whileTap={{scale:0.97}} className='flex items-center gap-1
                px-4 py-2 rounded-full text-white bg-[#5e5b5b] border border-white/20
                cursor-pointer'>
                     <span className='text-xl'>💎</span>
                     <span >{credits}</span>
                     <motion.span whileHover={{scale:1.07}}
                whileTap={{scale:0.97}} className='ml-2 h-5 w-5 flex items-center justify-center rounded-full bg-white text-xs '>
                      ➕
                     </motion.span>
                </motion.div>
               
                  {showCredits && <AnimatePresence>
                      <motion.div 
                      initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }} className='absolute right-0 mt-4 w-64 rounded-2xl bg-black/90 '>
                       <h4 className='font-semibold mb-2'>Buy Credits</h4>
                       <p className='text-5m text-gray-300 mb-4'>Use credits to generate AI notes, diagram & PDFs.</p>
                       <button>Buy More Credits</button>
                      </motion.div>
                  </AnimatePresence>}
                
              </div>
           </div>
    </motion.div>
  )
}

export default Navbar

