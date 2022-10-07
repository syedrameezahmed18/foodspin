import React, { useState, useEffect, createContext } from "react"

export const ScreenContext = createContext()

export const ScreenProvider = props => {

    const [size, setSize] = useState(window.innerWidth)

    console.log('here size',size)

    useEffect(() => {
        function handleResize() {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    })

    return (
        <ScreenContext.Provider value={{ size, setSize }}>
            {props.children}
        </ScreenContext.Provider>
    )
}