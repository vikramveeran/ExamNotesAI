import React from 'react'

const Sidebar = ({result}) => {
  if(!result || !result.subtopics || !result.questions || !result.questions.short || !result.questions.long){
     return null;
  }
  return (
    <div className='bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-6'>
           <div className='flex items-center gap-4'>
               <span className='text-xl'>📌</span>
               <h3 className='text-lg font-semibold text-indigo-600'>
                Quick Notes
               </h3>
           </div>
           <section>
              <p className='text-sm font-semibold text-gray-700 mb-3'>
               ⭐sub Topics(priority Wise)
              </p>
              {
                object.entries(result.subtopics).map(([star,topics])=>{
                   <div key={star} className='mb-3 rounded-lg 
                   bg-gray-50 border border-gray-200 p-3'>
                      <p className='text-sm font-semibold text-yellow-600 mb-1'>
                        {star} Priority
                      </p>
                      <ul className='list-disc ml-4 text-sm text-gray-700 space-y-1'>
                       {topics.map((t,i)=>{
                         <li key={i}>{t}</li>
                       })}
                      </ul>
                   </div>
                })
              }
           </section>
    </div>
  )
}

export default Sidebar