import React from 'react'
import reactMarkDown from 'react-markdown'
const markDownComponent = {
       h1:({children})=>(
         <h1 className='text-2xl font-bold text-indigo-700 mt-6 mb-4 border-b pb-2'>
          {children}
         </h1>
       ),
       h2:({children})=>(
         <h1 className='text-xl font-semibold text-indigo-700 mt-5 mb-3 '>
          {children}
         </h1>
       ),
       h3:({children})=>(
         <h1 className='text-lg font-bold text-indigo-800 mt-4 mb-2'>
          {children}
         </h1>
       ),
       p:({children})=>(
         <h1 className='text-gray-700 leading-relaxed mb-3'>
          {children}
         </h1>
       ),
       ul:({children})=>(
         <h1 className='list-disc ml-6 space-y-1 textgray-700'>
          {children}
         </h1>
       ),
       li:({children})=>(
         <h1 className='marker:text-indigo-500'>
          {children}
         </h1>
       ),
  }
const FinalResult = ({result}) => {
    if(!result || !result.subTopics ||
      !result.questions || !result.questions.short ||
      !result.questions.long || !result.revisionPoints
     ){
       return null;
     }
  return(
    <div className='mt-6 p-3 space-y-10 bg-white'>
       <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
             <h2 className='text-3xl font-bold bg_gradient-to-r from-indigo-600 to-purple-600
             bg-clip-text text-transparent'>
               📘 Generated Notes
             </h2>
             <div className='flex gap-3'>
                    <button className=''></button>
                    <button></button>
             </div>
       </div>
       <section>
         <div className='bg-white border border-gray-200 rounded-xl p-6'>
                  <reactMarkDown components={markDownComponent}>
                        {result.notes}
                  </reactMarkDown>
         </div>
       </section>
    </div>
  )
}

export default FinalResult