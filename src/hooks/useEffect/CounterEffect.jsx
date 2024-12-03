import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [count,setCount] = useState(0);
    const [randVal,setRandval] = useState(0)
    
    
    useEffect(()=>{
       const val = Math.floor(Math.random()*100)
        setRandval(val)
    },[count])


  return (
    <div>
        <h1>Heading with {randVal} </h1>
        <h2>Counter {count}</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
    </div>
  )
}

export default CounterEffect