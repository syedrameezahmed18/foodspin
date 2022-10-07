import React, { useState, useEffect, createContext } from "react"

export const ScreenContext = createContext()

export const ScreenProvider = props => {
    //default value admin
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    })

    // it can be home || campaign || test || contacts || staff || profile || settings

    return (
        <ScreenContext.Provider value={{ size }}>
            {props.children}
        </ScreenContext.Provider>
    )
}