import React, { useEffect, useState } from 'react';
import Die from './Die';
import {nanoid} from 'nanoid';

interface diceType{
  id:string;
  value:number;
  isHold:boolean;
}

const Dices = () => {
 
  const generateDice=()=>{
    return {value:Math.ceil(Math.random()*9),
            id:nanoid(),
          isHold:false,}
  }
  const allNewDice=()=>{
    let newarr:diceType[]=[];
    for(let i=0;i<10;i++){
    newarr=[...newarr,generateDice()]; 
    }
    return newarr;
  }

  const [dice,setDice]=useState<diceType[]>(allNewDice());

  const handleHold=(id:string)=>{
    setDice(prev=>prev.map(die=>die.id===id?
      {...die,isHold:!die.isHold}:die
    ))
    
  }
  const rollDice = () => {
  //  setDice(allNewDice());
   setDice(prev=>prev.map(die=>die.isHold?
    die:generateDice()
   ))
  };

  return (
    <div className="roll flex justify-center m-8"> {/* Center aligns the button */}
      <div className='border border-black flex flex-col items-center p-2'> {/* Flex container */}
        <div className="grid grid-cols-3 gap-4 p-4">
          {
            dice.map((die)=>(
              <div key={die.id}>
             <Die value={die.value} isHold={die.isHold} handleHold={()=>handleHold(die.id)}/>
              
              </div>
            ))
          }
        </div>
        
        <button className='bg-blue-600 hover:bg-blue-500 flex justify-center p-3 w-16 text-white' onClick={rollDice}>Roll</button>
      </div>
    </div>
  );
};

export default Dices;
