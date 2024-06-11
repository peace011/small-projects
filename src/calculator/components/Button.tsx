import React from 'react'

interface valueType{
    value:string;
    buttonClick:(value:string)=>void;
    isOperator:boolean;
    isDouble:boolean;
}
const Button = ({value,buttonClick,isOperator,isDouble}:valueType) => {
  return (
    <button className={`rounded-full text-white flex justify-center ${isDouble? 'grid col-span-2':''} ${isOperator? 'bg-yellow-500': 'bg-gray-700'}`} onClick={()=>buttonClick(value)}>
        {value}
    </button>
  )
}

export default Button