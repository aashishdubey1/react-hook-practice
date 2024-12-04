import React from 'react'
import { useRef } from 'react'

const InputFocus = () => {

    const a = useRef(null)

    function handleFocus (){
        console.log(a);
        a.current.focus();
        a.current.value = "A"
    }

  return (
    <div>
        <input type="text" ref={a} />
        <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default InputFocus