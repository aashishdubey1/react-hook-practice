import React from 'react'
import { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(()=>console.log("Basic Effect"),[])
  return (
    <div>
            React Use Effect
    </div>
  )
}

export default BasicEffect