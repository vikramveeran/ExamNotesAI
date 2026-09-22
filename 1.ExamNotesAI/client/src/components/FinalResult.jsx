import React from 'react'
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
  
  return(
    <div>
     
    </div>
  )
}

export default FinalResult