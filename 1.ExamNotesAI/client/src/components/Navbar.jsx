import React from 'react'
import { AnimatePresence, motion } from "motion/react"
import logo from "../assets/logo.png"
import {useDispatch, useSelector} from "react-redux"
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { serverUrl } from '../App.jsx';
import { setUserData } from '../redux/userSlice.js';
import axios from "axios";
const Navbar = () => {
  const{userData} = useSelector((state) =>state.user)
  const credits = userData?.credits
  const [showCredits, setShowCredits] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleSignOut = async () => {
        try {
          await axios.post(serverUrl+"/api/auth/logout",{withCredentials:true})
          dispatch(setUserData(null))
           navigate("/auth")
        } catch (error) {
          console.log(error)
        }
  }
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
              <div className='relative  '>
                <motion.div onClick={()=>{setShowCredits(!showCredits);setShowProfile(false)}} whileHover={{scale:1.07}}
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
               
                <AnimatePresence>
                  {showCredits &&
                      <motion.div 
                      initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }} className='absolute right-[-60px] mt-6 w-64 rounded-2xl bg-black/90 text-gray-300 p-3'>
                       <h4 className='font-semibold mb-2 '>Buy Credits</h4>
                       <p className='text-5m  mb-4'>Use credits to generate AI notes, diagram & PDFs.</p>
                       <button onClick={()=>{setShowCredits(false);navigate("/pricing")}}>Buy More Credits</button>
                      </motion.div>
                  }</AnimatePresence>
                
              </div>
               <div className="relative">

  {/* PROFILE BUTTON */}
  <motion.div
    onClick={() => {
      setShowProfile(!showProfile);
      setShowCredits(false);
    }}
    whileHover={{ scale: 1.07 }}
    whileTap={{ scale: 0.97 }}
    className="flex items-center gap-1 px-4 py-2 rounded-full 
               text-white bg-[#5e5b5b] border border-white/20 cursor-pointer"
  >
    <span className="text-lg">
      {userData?.name.slice(0, 1).toUpperCase()}
    </span>
  </motion.div>


  {/* DROPDOWN */}
  <AnimatePresence>
    {showProfile && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute right-0 top-full mt-6 w-64 
                   rounded-2xl bg-black/90 text-gray-300 p-3"
      >
        <MenuItem text="History" onClick={()=>{setShowProfile(false);navigate("/history")}}/>

        <div className="h-px bg-white/10 mx-3 my-2" />

        <MenuItem text="SignOut" red={true} onClick={handleSignOut}/>
      </motion.div>
    )}
  </AnimatePresence>

</div>
           </div>
    </motion.div>
  )
}

function MenuItem({onClick,text,red}){
  return(
     <div onClick={onClick} className={`w-full text px-4 py-3 text-sm 
    transition-colors ${red ?"text-red-400 hover:bg-red-500/10":"text-gray-200 hover:bg-white/10"}
    `}>
    {text}
   </div>
  )
  
}

export default Navbar

