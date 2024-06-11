import React from 'react'

interface resultType{
    questions:{
        question:string;
        option?:string[];
        correctAnswer:string;
    }[];
    userAnswers:string[];
    count:number;
}
const Result = ({questions,userAnswers,count}:resultType) => {
    console.log("resultans",userAnswers);
    
  return (
    <div>
        <h1>Result</h1>
    {questions.map((quest,index)=>(
        <div key={index} className='p-2'>
       <p className='text-pink-300'>{quest.question}</p> 
       <p className='text-blue-400'>Your Answer: {userAnswers[index]}</p>
        <p>Correct Answer: {quest.correctAnswer}</p>
        </div>
    ))}
        <p>Total correct: {count}</p>

    </div>
  )
}

export default Result