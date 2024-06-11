import React from 'react'

interface questionType{
  question:string;
  
}

const Quest = ({question}:questionType) => {
  return (
    <div
     className='h-24 border-blue-600 flex justify-center items-center rounded-3xl border-2'>
      {question}</div>
  )
}

export default Quest