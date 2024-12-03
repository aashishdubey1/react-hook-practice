import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const [apiData,setApiData] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(async(res)=>{
            const data = await res.json();
            setApiData(data);
        })
    },[])

  return (
    <div>
        {apiData.map((data)=>{
            return (
                <div style={{border:"1px solid black;",padding:"5px", margin:"2px"}}>
                    <h1>{data.title}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default FetchDataEffect