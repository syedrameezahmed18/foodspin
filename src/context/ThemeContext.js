import React, { useState, createContext } from "react"

export const ScreenContext = createContext()

export const ScreenProvider = props => {

    const [themeColor, setThemeColor] = useState("")

    return (
        <ScreenContext.Provider value={{ themeColor, setThemeColor }}>
            {props.children}
        </ScreenContext.Provider>
    )
}