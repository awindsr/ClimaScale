import { useContext, createContext, useState} from "react"
import Nav from "./Nav"
import {categories} from "../data"

export const ContextData = createContext()
export function useContextProvider() {
    return useContext(ContextData)
}

function Provider({children}) {
    const [result, setResult] = useState(0)


    return (
        <ContextData.Provider value ={{
            result,
            setResult,
            categories,
        }} >
            <Nav />
            {children}
        </ContextData.Provider >
    );
}

export default Provider;