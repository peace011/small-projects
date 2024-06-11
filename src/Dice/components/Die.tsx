import React from 'react'

interface diceType{
  value:number;
  isHold:boolean;
  handleHold:(id:string)=>void;
}
const Die = ({value,isHold,handleHold}:diceType) => {
  return (
    <div onClick={handleHold} className={`w-20 h-20 ${isHold? 'bg-green-500':''} border border-black flex justify-center items-center text-2xl`}>
      {value}
    </div>
  )
}

export default Die