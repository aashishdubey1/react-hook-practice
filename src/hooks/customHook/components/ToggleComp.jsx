import React from 'react'
import useToggle from '../hooks/useToggle'

const ToggleComp = () => {
    const[value,toggle] = useToggle();


  return (
    <div>
        <button onClick={toggle}>{value?"Hide":"Show"}</button>
        {value && "This is Msg"}
    </div>
  )
}

export default ToggleComp