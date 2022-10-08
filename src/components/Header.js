import React, { useContext, useState } from 'react'
import { ScreenContext } from '../context/ScreenContext'
import MainLogo from "./../assets/images/foodlogo.png"
import BagLogo from "./../assets/images/bag.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { Colors } from '../utils/Constants'

const Header = () => {

    const { size, setSize } = useContext(ScreenContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    console.log('menu state is',isMenuOpen)

    const DesktopHeader = () => {
        return (
            <div className='desktop-header'>
                <div className="desktop-header-left">
                    <img className='main-logo' src={MainLogo} />
                    <div className="desktop-header-left-inner">
                        <p>Breakfast</p>
                        <p>Lunch</p>
                        <p>Dinner</p>
                    </div>
                </div>
                <img className="desktop-header-right" src={BagLogo} />
            </div>
        )
    }

    const MobileHeader = () => {
        return (
            <div className="main-header">
                <div className="main-inner-header">
                    <div className="header-left">
                        <img src={MainLogo} />
                    </div>
                    <div className="header-right">

                        <div
                            style={{ cursor: "pointer" }}
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                            <AiOutlineSearch
                                style={{
                                    color: Colors.blackColor,
                                }}
                                size="20px"
                            />
                        </div>
                    </div>
                </div>
                {isMenuOpen ? (
                    <div className={"collapsed-menu-div"}>

                        <p>Breakfast</p>
                        <p>Lunch</p>
                        <p>Dinner</p>

                    </div>
                ) : null}
            </div>
        )
    }

    return (
        <>
            {
                size > 600 ?
                    <DesktopHeader /> :
                    <MobileHeader />
            }
        </>
    )
}

export default Header