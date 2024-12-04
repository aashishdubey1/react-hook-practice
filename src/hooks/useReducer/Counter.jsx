import React, { useReducer, useState } from 'react'
import { initialState, reducer } from './counterReducer'

const Counter = () => {

        const[state,dispatch]=useReducer(reducer,initialState)
        const [inputVal , setInputVal] = useState(0);


    function handleIncrease(){
        dispatch({type:"increaseByAmount",payload:+inputVal})
        setInputVal(0);
    }

    function handleDecrease(){
        dispatch({type:"decreaseByAmount",payload:+inputVal})
        setInputVal(0);
    }

  return (
    <div>
        <div>Counter {state.count}</div>
        <button onClick={()=>dispatch({type:'increase'})}>+</button>
        <button onClick={()=>dispatch({type:"decrease"})}>-</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>

        <div>
            <input value={inputVal} type="text" onChange={(e)=>setInputVal(e.target.value)} />
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    </div>
  )
}

export default Counter