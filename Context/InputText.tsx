import React, { useState, createContext, useContext, FC, ReactNode } from "react"; 

interface State {
   name: string | null ;
   setName : React.Dispatch<React.SetStateAction<string>>
   email: string | number; 
   setEmail: React.Dispatch<React.SetStateAction<string>>
   password: string | number; 
   setPassword: React.Dispatch<React.SetStateAction<string>>
   isClicked: boolean, 
   setClicked: React.Dispatch<React.SetStateAction<boolean>>
} 



interface InputProvider {
    children: ReactNode;
}

export const InputContext = createContext({} as State); 

export function InputContextProvider({ children } : InputProvider) {
    const [name, setName] = useState("none"); 
    const [email, setEmail] = useState("none");
    const [password, setPassword] = useState("none");
    const [isClicked, setClicked] = useState(false);

    return (
        <InputContext.Provider
        value={{
            name, 
            setName,
            email, 
            setEmail, 
            password, 
            setPassword, 
            isClicked, 
            setClicked
        }}>
        {children}
        </InputContext.Provider>
    )

}
