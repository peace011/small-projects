import React, { useState } from 'react'
import {  questions } from '../components/questions';
import Quest from '../components/Quest';
import Answer from '../components/Answer';
import Result from '../components/Result';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion]= useState<number>(0);
  const [userAnswers, setUserAnswers] =useState<string[]>([]);
  const [count,setCount]=useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer=(item:string)=>{
    if(currentQuestion+1>=questions.length){
     setShowResult(true);

    }
      setUserAnswers([...userAnswers,item]);
      setCurrentQuestion(currentQuestion+1);
        const correct=questions[currentQuestion].correctAnswer===item;
      if(correct){
        setCount(count+1);
      }
    }
 

console.log("answer",userAnswers);


  
  return (
    <div className='h-[100dvh] w-full flex items-center justify-center '>
    <div className="bg-gray-700 text-white p-10 border border-black ">
     {showResult ?
     <Result questions={questions} userAnswers={userAnswers} count={count}/>
      :
      <>
       <Quest question={questions[currentQuestion].question}/>
      <Answer options={questions[currentQuestion].options} 
      handleAnswer={handleAnswer}/>
      </>
   
    }

      </div>
    </div>
  )
}

export default Quiz