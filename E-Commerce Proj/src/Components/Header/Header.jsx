import React from 'react'
import { Link } from 'react-router-dom';
import { GiTigerHead } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import "./Header.css"
const Header = () => {
    return (
        <nav className='Container'>
            <div className='Header'>
                <div className='heading'> <span style={{ color: 'orangered' }}>SKELE</span>TON <span ><GiTigerHead style={{ color: 'orangered' }} /></span></div>
                <div className='header-Options'>
                    <ul>
                        <Link  className='collection-head'><li >COLLECTIONS <FaAngleDown style={{ color: 'orangered' }} /> </li>
                            <div className='collections'>
                                <div className='sub-collections'>
                                    <ul className='sub-items'>
                                        <Link><li>Electronics</li></Link>
                                        <Link><li>Toys</li></Link>
                                        <Link><li>Cloths</li></Link>
                                        <Link><li>Foot_Wear</li></Link>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                        <Link> <li>ABOUT</li></Link>
                        <Link><li>CONTACT</li></Link>
                        <Link><li>SIGN_ <span style={{ color: 'orangered' }}>UP</span> </li></Link>
                        <Link><li >CART <FaShoppingCart style={{ color: "yellow", fontSize: 25, paddingLeft: 4 }} /></li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header
