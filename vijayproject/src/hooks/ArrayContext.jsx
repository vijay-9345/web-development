import { createContext } from "react";

export const ArrayContext=createContext();
export const ArrayProvider=({children})=>{
    const Array={name:'raghav',age:38,dep:'IT'}
    return(
            <ArrayContext.Provider value={Array}>
                {children}
            </ArrayContext.Provider>
        )
}