import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'motion/react'
import img from "../assets/imgg.png"
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className=' min-h-screen overflow-hidden bg-white text-black'>
       <Navbar/>
       {/* top */}
       <section className='max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 
       lg:grid-cols-2 gap-20 items-center'>

        <div>
          <motion.div 
          initial={{ opacity:0,x:-60 }}
         animate={{ opacity:1,x:0}}
          transition={{duration:1.5}} 
          whileHover={{rotateX:6,rotateY:-6}} 
           className="transform-gpu" 
           style={{transformStyle:"preserve-3d"}}>
            <motion.h1 
                    initial={{ opacity: 0, y: 60, scale: 0.95 }} 
                    animate={{ opacity: 1, y: 1, scale: 1 }} 
                    transition={{ 
                               duration: 1, 
                                ease: [0.22, 1, 0.36, 1] 
                               }} 
                    className="text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-800 mt-[-30px]"
             > 
                     Create Smart <br />  
               <motion.span 
               animate={{ 
               color: ["#374151", "#3B82F6", "#374151"] 
                      }} 
                     transition={{ 
                     duration: 3, 
                  repeat: Infinity, 
                ease: "easeInOut" 
                 }} 
               > 
           AI Notes
          </motion.span>{" "} 
          in <br /> 
       seconds 
            </motion.h1>
            <motion.p whileHover={{y:-2}} className='mt-6 text-lg'>
              Generate exam-focused notes, project documentation,
              flow diagram and revision-ready content using AI -   <span className="text-gray-400"> faster, cleaner and smarter.</span>
            </motion.p>
             <button 
                        className="flex items-center justify-center gap-2 px-6 py-2.5 mt-4 rounded-xl font-semibold text-white
                                                      bg-black border border-white/20 shadow-lg shadow-black/30 hover:bg-black hover:border-white/40
                                                          hover:scale-105 hover:shadow-xl
                                                                transition-all duration-300">
                  
                           Get Started                  
                        </button>
          </motion.div>
         
        </div>
      <motion.div
  initial={{
    opacity: 0,
    x: -80,
    rotateY: -15,
    scale: 0.9,
  }}
  animate={{
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
  }}
  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    rotateX: 6,
    rotateY: -6,
    scale: 1.03,
    transition: {
      duration: 0.3,
    },
  }}
  whileInView={{
    y: [0, -8, 0],
  }}
  viewport={{ once: true }}
  className="transform-gpu"
  style={{
    transformStyle: "preserve-3d",
  }}
>
  <div className="overflow-hidden rounded-4xl">
    <motion.img
      src={img}
      alt=""
      className="rounded-4xl"
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.5,
      }}
    />
  </div>
</motion.div>
       </section>
       {/* bottom */}
       <section className='max-w-6xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-4 gap-10'>
       
                <Feature index={0} icon="🎁" title="50 Free Credits" des="Start  with 50 credits to generate notes without paying."/>
                <Feature index={1} icon="📋" title="Exam Notes" des="High-yield,revision-ready exam-oriented notes."/>
                <Feature index={2} icon="📂" title="Project Notes" des="well-structured documentation for assignment & projects."/>
                <Feature index={4} icon="⬇️" title="Free PDF Download" des="Download clean printable PDFs instantly."/>
       
       </section>
       <Footer/>
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
      className="hover:scale-105 w-60 transition-all duration-400 relative rounded-2xl p-4 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)] text-white"
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


export default Home