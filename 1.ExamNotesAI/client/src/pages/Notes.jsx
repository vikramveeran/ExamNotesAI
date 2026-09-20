import React,{useState} from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TopicForm from '../components/TopicForm'
import SideBar from '../components/SideBar'
import FinalResult from '../components/FinalResult'

const Notes = () => {
  const{userData} = useSelector((state) =>state.user)
  const credits = userData?.credits
  const navigate = useNavigate()
   const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  return (
    <div>
      <motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5 }}
  className="
    w-[calc(100%-20px)] mx-auto
    px-4 sm:px-5
    py-3 sm:py-4
    mt-4
    flex flex-col sm:flex-row
    items-start sm:items-center
    justify-between
    gap-3
    bg-black
    shadow-md
    rounded-2xl
  "
>
  {/* Logo */}
  <div className="flex items-center">
    <span
      onClick={() => navigate("/")}
      className="text-lg font-semibold text-white cursor-pointer"
    >
      ExamNotes <span className="text-gray-400">AI</span>

      <p className="text-xs sm:text-sm text-gray-300 mt-1">
        AI-powered exam-oriented notes & revision
      </p>
    </span>
  </div>

  {/* Right side */}
  <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">

    {/* Credits */}
    <button
      className="
        flex items-center justify-center gap-2
        px-3 sm:px-4
        py-2
        rounded-full
        bg-white/10
        border border-white/20
        text-white
        text-sm
        flex-1 sm:flex-none
      "
      onClick={() => navigate("/pricing")}
    >
      <span className="text-lg">💎</span>

      <span>{credits}</span>

      <motion.span
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        className="
          ml-1
          h-5 w-5
          flex items-center justify-center
          rounded-full
          bg-white
          text-xs font-bold
        "
      >
        ➕
      </motion.span>
    </button>

    {/* Your Notes */}
    <button
      onClick={() => navigate("/history")}
      className="
        flex items-center justify-center gap-2
        px-3 sm:px-4
        py-2 sm:py-3
        rounded-full
        bg-white/10
        border border-white/20
        text-white
        text-sm
        flex-1 sm:flex-none
      "
    >
      📘 <span>Your Notes</span>
    </button>

  </div>
</motion.div>
<motion.div initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            className='mt-10'>
  <TopicForm loading={loading} setResult={setResult} setLoading={setLoading} setError={setError}/>

</motion.div>

{loading && (<motion.div
animate={{opacity:[0.4,1,0.4]}}
transition={{repeat:Infinity,duration:1.2}}
className='text-center text-black font-medium mb-6'
>
 Generating exam-focused notes...
  </motion.div>)}
  {error && (<div className='mb-6 text-center text-red-600  font-medium'>
    {error}
  </div>)}

  {!result && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.01 }}
    className="
      w-[85%]
      mx-auto
      mt-8
      h-32
      rounded-2xl
      bg-white
      shadow-md
      flex
      items-center
      justify-center
    "
  >
    <div className="text-center text-gray-400">
      <div className="text-3xl mb-2">
        📘
      </div>

      <p className="text-sm">
        Generating notes will appear here
      </p>
    </div>
  </motion.div>
)}

   { result && <motion.div 
   initial={{opacity:0,y:30}}
   animate={{opacity:1,y:0}}
   transition={{duration:0.4}}
   className='flex flex-col lg:grid lg:grid-cols-4 gap-6'
   >
   <div className='lg:col-span-1'>
     <SideBar result={result}/>

   </div>
   <div className='lg:col-span-3 rounded-2xl bg-white 
   shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-6'>
    <FinalResult result={result}/>                    
     
   </div>
   </motion.div>}
    </div>
  )
}

export default Notes                                      