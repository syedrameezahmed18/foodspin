import React, { useContext } from 'react'
import { ScreenContext } from '../context/ThemeContext'

const Header = () => {


    const { size, setSize } = useContext(ScreenContext)

    const DesktopHeader = () => {
        return (
            <div>

            </div>
        )
    }

    const MobileHeader = () => {
        return (
            <div>

            </div>
        )
    }

    return (
        <>
            {
                size > 800 ?
                    <DesktopHeader /> :
                    <MobileHeader />
            }
        </>
    )
}

export default Header