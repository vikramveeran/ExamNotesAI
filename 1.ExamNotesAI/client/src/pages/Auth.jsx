import React from 'react'
import { motion } from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { linkWithCredential, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase.js';
import axios from "axios"
import { serverUrl } from '../App.jsx';
const Auth = () => {

  const handleGoogleAuth = async()=>{
     try {
      const response = await signInWithPopup(auth,provider)
      const User = response.user
      const name = User.displayName
      const email = User.email
      const result = await axios.post(serverUrl+"/api/auth/google",{name,email},
        {withCredentials:true}
      )
      console.log(result.data)
     } catch (error) {
      console.log(error)
     }
  }
  return (
    <div  className='min-h-screen overflow-hidden bg-white text-black px-8'>
        <motion.header  
        initial={{ opacity:0,y:-25 }}
         animate={{ opacity:1,y:0}}
          transition={{duration:1.5}}
        className='max-w-7xl mx-auto mt-8
        rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-6 
        shadow-[0_20px_45px_rgba(0,0,0,0.6)]
        '>   
        <h1 className='text-2xl font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>
          ExamNotes AI
        </h1>
      <h1 className="text-sm md:text-base font-semibold tracking-wide text-white/90">
  AI-powered{" "}
  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
    exam-oriented notes & revision
  </span>
</h1>
        </motion.header>
        <main className='max-w-7xl mx-auto py-10 gird grid-cols-1 1g:grid-cols-2 gap-40 flex justify-center  items-center'>
         {/* left content */}     
         <motion.div initial={{ opacity:0,x:-60 }} animate={{ opacity:1,x:0}} transition={{duration:1.5}} className=''>
            <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br 
             from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent
            '>
           Unlock smart <br/> AI Notes
            </h1>                      

            <button 
            onClick={handleGoogleAuth} 
            className="flex items-center justify-center gap-2 px-6 py-2.5 mt-4 rounded-xl font-semibold text-white
                                          bg-black border border-white/20 shadow-lg shadow-black/30 hover:bg-black hover:border-white/40
                                              hover:scale-105 hover:shadow-xl
                                                    transition-all duration-300">
                <FcGoogle />  
                Continue with google                   
            </button>
            <p className="text-sm leading-6 text-gray-400 mt-4">
  You get{" "}
             <span className="font-semibold ">50 FREE credits</span>{" "}
              to create exam notes, project notes, charts,<br /> graphs, and download clean
              PDFs — instantly using AI.
            </p>
            <p className='mt-4 text-sm text-gray-400'>
              Start with 50 free credits - Upgrade anytime for more credits - Instant access
            </p>
         </motion.div>
         {/* right content */}
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <Feature index={0} icon="🎁" title="50 Free Credits" des="Start  with 50 credits to generate notes without paying."/>
                <Feature index={1} icon="📋" title="Exam Notes" des="High-yield,revision-ready exam-oriented notes."/>
                <Feature index={2} icon="📂" title="Project Notes" des="well-structured documentation for assignment & projects."/>
                <Feature index={3} icon="📊" title="Charts & Graphs" des="Auto-generated diagram,charts and flow graphs."/>
                <Feature index={4} icon="⬇️" title="Free PDF Download" des="Download clean printable PDFs instantly."/>
         </div>
        </main>
        </div>
  )
}
function Feature({ icon, title, des, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.5,
        delay: index * 0.15,
      }}
      className="hover:scale-105 transition-all duration-400 relative rounded-2xl p-4 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)] text-white"
    >
      <div className="relative z-10">
        <div className="text-4xl mb-3">{icon}</div>

        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed">
          {des}
        </p>
      </div>
    </motion.div>
  );
}

export default Auth