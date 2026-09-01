import { useState } from "react"
import {  motion } from "motion/react"

const TopicForm = () => {
   const [topic, setTopic] = useState("")
   const [ClassLevel, setClassLevel] = useState("")
   const [examType, setExamType] = useState("")
   const [revisionMode, setRevisionMode] = useState(false)
   const [includeDiagram, setIncludeDiagram] = useState(false)
   const [includeChart, setIncludeChart] = useState(false)
  return (
    <motion.div 
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    className="w-[calc(100%-20px)] mx-auto rounded-2xl p-8 space-y-6 text-white
             bg-black/100
             border border-white/10
             backdrop-blur-xl
             shadow-xl "
    > 

  <input type="text" placeholder="Enter topic (e.g. Web Development)" className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3
             text-white placeholder:text-gray-500
             outline-none transition-all duration-300
             focus:border-white/30 focus:bg-white/[0.06]
             focus:ring-2 focus:ring-white/10" onChange={(e)=>setTopic(e.target.value)} value = {topic}/>

   <input type="text" placeholder="Enter topic (e.g. class 10th)" className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3
             text-white placeholder:text-gray-500
             outline-none transition-all duration-300
             focus:border-white/30 focus:bg-white/[0.06]
             focus:ring-2 focus:ring-white/10" onChange={(e)=>setClassLevel(e.target.value)} value = {ClassLevel}/>
            
    <input type="text" placeholder="Enter topic (e.g. CBSE,JEE,NEET)" className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3
             text-white placeholder:text-gray-500
             outline-none transition-all duration-300
             focus:border-white/30 focus:bg-white/[0.06]
             focus:ring-2 focus:ring-white/10" onChange={(e)=>setExamType(e.target.value)} value = {examType}/>     
                  <div className="flex flex-col md:flex-row gap-6">
                     <Toggle label="revesionmode " checked={revisionMode} onChange={()=>setRevisionMode(!revisionMode)}/>
                  </div>
    </motion.div>
  )
}

function Toggle({label,checked,onChange}) {
  return(
    <div className="flex items-center gap-4  cursor-pointer select-none" onClick={onChange}>
      <motion.div 
      animate={{backgroundColor:checked
        ?"rgba(34, 197, 94, 0.3)"
        :"rgba(156, 163, 175, 0.2)"}}

        transition={{duration:0.25}}
        className="relative w-12 h-6 rounded-full border border-white/20 backdrop-blur-lg"
      >
        <motion.div
        layout transition={{type:"spring", stiffness:500 ,damping:30}}
        className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.5)]
         "
         style={{left:checked?"1.6rem":"0.25rem"}}
        >
        </motion.div>
      </motion.div>
      <span className={` text-sm transition-colors${
    checked ? "text-green-500" : "text-gray-300"
  }`}>
        {label}
      </span>
    </div>
  )
}

export default TopicForm