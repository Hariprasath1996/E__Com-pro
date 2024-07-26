import React from 'react'
import { GiTigerHead } from "react-icons/gi";
import "../Navbar.css"
const Navbar = () => {
    return (
        <nav className='Container'>
            <div className='Header'>
                <div className='heading'> <span style={{ color:'orangered'}}>SKELE</span>TON <span ><GiTigerHead style={{  color:'orangered'}} /></span></div>
                <div className='header-Options'>
                    <ul>
                        <li>CATAGORIES</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                        <li>SIGN_UP</li>
                        <li>CART</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
