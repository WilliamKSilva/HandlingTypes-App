import React, { useState, createContext, useContext, FC, ReactNode } from "react"; 

interface State {
   name: string | null ;
   setName : React.Dispatch<React.SetStateAction<string>>
} 



interface InputProvider {
    children: ReactNode;
}

export const InputContext = createContext({} as State); 

export function InputContextProvider({ children } : InputProvider) {
    const [name, setName] = useState("none"); 

    
   

    return (
        <InputContext.Provider
        value={{
            name, 
            setName,
        }}>
        {children}
        </InputContext.Provider>
    )

}
