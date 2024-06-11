import React, { useState } from 'react'
import Button from './Button'

const Calculator = () => {
    const [input,setInput]=useState<string>('');
    const [preview,setPreview]=useState<string>('');
    const [history,setHistory]=useState<string[]>([]);

    const handleClick=(value:string)=>{
        console.log("Before setInput:", input);
        setInput((prev)=>prev + value);
        try {
            setPreview(eval(input + value).toString());
        } catch {
            setPreview('');
        }
        // setInput((prev) => {
        //     const newValue = prev + value;
        //     try {
        //         setPreview(eval(newValue).toString());
        //     } catch {
        //         setPreview('');
        //     }
        //     return newValue;
        // });
    }
    console.log("input",input);
    console.log("preview",preview);
    
    
    const handleClear=()=>{
        setInput('');
        setPreview('');
    }
    const handleCalculate=()=>{
        const result = eval(input).toString();
            setInput(result);
            const allInput = `${input} = ${result}`;
             setHistory((prev)=>[...prev,allInput]);
    }
    const handleDel=()=>{
        setInput(input.slice(0,-1));  //-1 is equal to the total inut length
    }    

  return (
    <div>
        <h2>Calculator</h2>
        <div className="m-4 border bg-black border-black h-[26rem] w-[14rem] rounded-3xl">
            <div className="h-1/3 flex flex-col justify-center">
            <input type='text' value={input} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)} className=' text-white bg-black w-full text-right text-4xl px-4' />
            <p className='text-gray-400 text-right px-4'>{preview}</p>  

            </div>
            <div className="grid grid-cols-4 gap-2 p-2">
                <Button value='C' buttonClick={()=>handleClear()} isOperator={false} isDouble={false}/>
                <Button value='DEL' buttonClick={()=>handleDel()} isOperator={false} isDouble={false}/>
                <Button value='%' buttonClick={()=>handleClick('%')} isOperator={false} isDouble={false}/>
                <Button value='/' buttonClick={()=>handleClick('/')} isOperator={true} isDouble={false}/>
                <Button value='7' buttonClick={()=>handleClick('7')} isOperator={false} isDouble={false}/>
                <Button value='8' buttonClick={()=>handleClick('8')} isOperator={false} isDouble={false}/>
                <Button value='9' buttonClick={()=>handleClick('9')} isOperator={false} isDouble={false}/>
                <Button value='*' buttonClick={()=>handleClick('*')} isOperator={true} isDouble={false}/>
                <Button value='4' buttonClick={()=>handleClick('4')} isOperator={false} isDouble={false}/>
                <Button value='5' buttonClick={()=>handleClick('5')} isOperator={false} isDouble={false}/>
                <Button value='6' buttonClick={()=>handleClick('6')} isOperator={false} isDouble={false}/>
                <Button value='-' buttonClick={()=>handleClick('-')} isOperator={true} isDouble={false}/>
                <Button value='1' buttonClick={()=>handleClick('1')} isOperator={false} isDouble={false}/>
                <Button value='2' buttonClick={()=>handleClick('2')} isOperator={false} isDouble={false}/>
                <Button value='3' buttonClick={()=>handleClick('3')} isOperator={false} isDouble={false}/>
                <Button value='+' buttonClick={()=>handleClick('+')} isOperator={true} isDouble={false}/>
                <Button value='0' buttonClick={()=>handleClick('0')} isOperator={false} isDouble={true}/>
                <Button value='.' buttonClick={()=>handleClick('.')} isOperator={false} isDouble={false}/>
                <Button value='=' buttonClick={()=>handleCalculate()} isOperator={true} isDouble={false}/>
            </div>
            <p>History</p>
            {history && history.map((item:string,index:number)=>(
                <li key={index}>{item}</li>
            ))}
        </div>
    </div>
  )
}

export default Calculator





// import React, { useState } from 'react'
// import Button from './Button'

// const Calculator = () => {
//     const [input,setInput]=useState<string>('');
//     const [preview,setPreview]=useState('');
//     const [history,setHistory]=useState([]);

//     const handleClick=(value:string)=>{
//         setInput(input + value);
//         // setHistory([...history,input]);

//     }
//     const handleClear=()=>{
//         setInput('');
//         setPreview('');
//     }
//     const handleCalculate=()=>{
//         setInput(eval(input).toString());
//         // setPreview(input);
//         setHistory([...history,input]);
//     }
//     const handleDel=()=>{
//         setInput(input.slice(0,-1));  //-1 is equal to the total inut length
//     }    
//     console.log("input",input);
//     console.log("history",history);
    
//     const handleHistory=()=>{

//     }

//   return (
//     <div>
//         <h2>Calculator</h2>
//         <div className="m-4 border bg-black border-black h-[26rem] w-[14rem] rounded-3xl">
//             <div className="h-1/3 flex flex-col justify-center">
//             <input type='text' value={input} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)} className=' text-white bg-black w-full text-right text-4xl px-4' />
//             <p className='text-gray-400 text-right px-4'>{preview}</p>  

//             </div>
//             <div className="grid grid-cols-4 gap-2 p-2">
//                 <Button value='C' buttonClick={()=>handleClear()} isOperator={false} isDouble={false}/>
//                 <Button value='DEL' buttonClick={()=>handleDel()} isOperator={false} isDouble={false}/>
//                 <Button value='%' buttonClick={()=>handleClick('%')} isOperator={false} isDouble={false}/>
//                 <Button value='/' buttonClick={()=>handleClick('/')} isOperator={true} isDouble={false}/>
//                 <Button value='7' buttonClick={()=>handleClick('7')} isOperator={false} isDouble={false}/>
//                 <Button value='8' buttonClick={()=>handleClick('8')} isOperator={false} isDouble={false}/>
//                 <Button value='9' buttonClick={()=>handleClick('9')} isOperator={false} isDouble={false}/>
//                 <Button value='*' buttonClick={()=>handleClick('*')} isOperator={true} isDouble={false}/>
//                 <Button value='4' buttonClick={()=>handleClick('4')} isOperator={false} isDouble={false}/>
//                 <Button value='5' buttonClick={()=>handleClick('5')} isOperator={false} isDouble={false}/>
//                 <Button value='6' buttonClick={()=>handleClick('6')} isOperator={false} isDouble={false}/>
//                 <Button value='-' buttonClick={()=>handleClick('-')} isOperator={true} isDouble={false}/>
//                 <Button value='1' buttonClick={()=>handleClick('1')} isOperator={false} isDouble={false}/>
//                 <Button value='2' buttonClick={()=>handleClick('2')} isOperator={false} isDouble={false}/>
//                 <Button value='3' buttonClick={()=>handleClick('3')} isOperator={false} isDouble={false}/>
//                 <Button value='+' buttonClick={()=>handleClick('+')} isOperator={true} isDouble={false}/>
//                 <Button value='0' buttonClick={()=>handleClick('0')} isOperator={false} isDouble={true}/>
//                 <Button value='.' buttonClick={()=>handleClick('.')} isOperator={false} isDouble={false}/>
//                 <Button value='=' buttonClick={()=>handleCalculate()} isOperator={true} isDouble={false}/>
//             </div>
//             <button onClick={()=>handleHistory()}>History</button>
//             {history}
//         </div>
//     </div>
//   )
// }

// export default Calculator