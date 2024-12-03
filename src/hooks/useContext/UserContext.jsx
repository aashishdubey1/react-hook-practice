import { createContext, useContext, useState } from "react";


const UserContext = createContext()

const UserProvider = ({children})=>{
    const [user,setUser] = useState({name:"Aashish"})

    function updateUser(newName){
        setUser({name:newName})
    }

    return (
        <UserContext.Provider value={{user,updateUser}} >
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserProvider}