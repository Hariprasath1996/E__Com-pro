import React from 'react'
import { Link } from 'react-router-dom';
import { GiTigerHead } from "react-icons/gi";
import "../Navbar.css"
const Navbar = () => {
    return (
        <nav className='Container'>
            <div className='Header'>
                <div className='heading'> <span style={{ color: 'orangered' }}>SKELE</span>TON <span ><GiTigerHead style={{ color: 'orangered' }} /></span></div>
                <div className='header-Options'>
                    <ul>
                        <Link><li>CATAGORIES</li></Link>
                        <Link> <li>ABOUT</li></Link>
                        <Link><li>CONTACT</li></Link>
                        <Link><li>SIGN_UP</li></Link>
                        <Link><li>CART</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
