import React, { useState, createContext } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = props => {

    const [themeColor, setThemeColor] = useState("")

    return (
        <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
            {props.children}
        </ThemeContext.Provider>
    )
}