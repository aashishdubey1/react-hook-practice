import React, { useCallback, useContext, useState } from 'react'
import { UserContext } from './UserContext'

const UpdateUser = () => {
    const {updateUser} = useContext(UserContext);
    const [newName,setNewName] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    if(newName.trim()){
      updateUser(newName)
      setNewName('')
    }
  }

  return (
    <div>
        <h1>Update New Name</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Enter New Name</label>
          <input type="text" placeholder='Enter Here...' value={newName} onChange={(e)=>setNewName(e.target.value)}/>
          <button>Change</button>
        </form>
        {/* <button onClick={()=>updateUser("Aashish Dubey")}>Change User</button>   */}
    </div>
  )
}

export default UpdateUser