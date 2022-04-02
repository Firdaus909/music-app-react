import { useState, useContext, createContext } from "react";

const TokenContext = createContext({})

export const TokenProvider = ({children}) => {
    const [token,setToken] = useState(null)

    return (
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    )
}

export const useTokenContext = () => {
    const context = useContext(TokenContext)
    return context
}