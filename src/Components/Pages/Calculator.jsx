import React,{useState} from "react";
import {FaArrowLeft} from 'react-icons/fa'

const Calculator=()=>{
    const[result,setResult]=useState("");

    const clickHandler=(event)=>{
        setResult(result.concat(event.target.value));
    };
    const clearData = () => {
      setResult("");
    
    };

    const backSpace=()=>{
      setResult(result.slice(0,-1))
    }
    const calculate=()=>{
       try{ 
            setResult(eval(result).toString());
       }catch(error){
            setResult("Error")
       }
    };

    return(
        <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-64 md:w-96 lg:w-auto h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
        <div className="w-auto mx-4 my-5  flex justify-between">
          <input type="text" className=" h-14 w-full text-black font-bold text-xl md:text-2xl lg:text-3xl border-solid border-2 rounded border-slate-300 text-end" value={result} placeholder="0" onChange={(e)=>setResult(e.target.value)}>
        </input>
        </div>
        
        <div className="w-auto m-1 h-auto mb-1">
        <div className="m-1 flex flex-row justify-between ">
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" onClick={clearData}>AC</button>
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold flex  justify-center items-center" onClick={backSpace}><FaArrowLeft /></button>
          <button class="bg-slate-200 hover:bg-slate-500 rounded w-24 p-3 m-2 font-bold" value="%" onClick={clickHandler}>%</button>
          <button class="bg-slate-400 hover:bg-slate-500 rounded w-24 p-3 m-2 font-bold" value="/" onClick={clickHandler}>/</button>
        
          </div>
          
          <div className="m-1 flex flex-row justify-between ">
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" value="1" onClick={clickHandler}>1</button>
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" value="2" onClick={clickHandler}>2</button>
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" value="3" onClick={clickHandler}>3</button>
          <button class="bg-slate-400 hover:bg-slate-500 rounded w-24 p-3 m-2 font-bold" value="+" onClick={clickHandler}>+</button>
          </div>

          <div className="m-1 flex justify-between">
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" value="4" onClick={clickHandler}>4</button>
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" value="5" onClick={clickHandler}>5</button>
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" value="6" onClick={clickHandler}>6</button>
          <button class="bg-slate-400 hover:bg-slate-500 rounded w-24 p-3 m-2 font-bold" value="-" onClick={clickHandler}>-</button>
          </div>
          <div className="m-1 flex justify-between">
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" value="7" onClick={clickHandler}>7</button>
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" value="8" onClick={clickHandler}>8</button>
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" value="9" onClick={clickHandler}>9</button>
          <button class="bg-slate-400 hover:bg-slate-500 rounded w-24 p-3 m-2 font-bold" value="*" onClick={clickHandler}>*</button>
          </div>
          <div className="m-1 flex justify-between">
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" value="0" onClick={clickHandler}>0</button>
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" value="00" onClick={clickHandler}>00</button>
          <button class="bg-slate-200 hover:bg-slate-300 rounded w-24 p-3 m-2 font-bold" value="." onClick={clickHandler}>.</button>
          <button class=" bg-orange-500  hover:bg-orange-600  rounded p-3 m-2 w-24 font-bold text-2xl" onClick={calculate}>=</button>              
            
          </div>
          
        </div>
      </div>
    </div>
    )

}
export default Calculator;