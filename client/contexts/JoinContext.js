import { createContext, useContext, useState } from "react";

const JoinContext = createContext();

export function useJoin(){
    return useContext(JoinContext)
} 

export function JoinProvider({children}){
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")

    const value = {
        name,
        setName,
        room,
        setRoom
    }

    return <JoinContext.Provider value={value}>{children}</JoinContext.Provider>
}

