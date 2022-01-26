import { createContext, useState } from "react";

export const UserContext = createContext({})

export const UserContextProvider =({children})=>{

    const [user, setUser] = useState({ nombre: 'dabin'})
    const userHandler =(user, pass)=>{
        
    }
    return (
        <UserContext.Provider value ={{user}}>
            {children}
        </UserContext.Provider>
    )
}