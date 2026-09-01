import React from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TopicForm from '../components/TopicForm'

const Notes = () => {
  const{userData} = useSelector((state) =>state.user)
  const credits = userData?.credits
  const navigate = useNavigate()
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
          text-xs
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
  <TopicForm/>

</motion.div>
    </div>
  )
}

export default Notes