import React from 'react'
import { alphabet } from './questions';

interface AnswerType{
    options:string[];
    handleAnswer:(item:string)=>void;
}
const Answer = ({options,handleAnswer}:AnswerType) => {
  
  return (
    <div className='p-4 grid grid-flow-col gap-2'>
      {options.map((item,index)=>(
      <div key={index}>
      <button onClick={()=>handleAnswer(item)} 
      className='bg-gray-700 border-2 border-gray-500 hover:border-blue-600 flex w-32'
      >
     {/* <p className='rounded-full w-7 h-7 bg-gray-500 mr-2'>{alphabet}</p> */}
      <p className=''>{item}</p>
      </button>
      </div>))}

      </div>
  )
}

export default Answer