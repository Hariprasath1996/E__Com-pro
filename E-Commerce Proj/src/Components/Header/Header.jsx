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
                <div className='heading'> <span style={{ color: 'orangered' }}>HUNT</span>ER<span ><GiTigerHead style={{ color: 'orangered' }} /></span></div>
                <div className='header-Options'>
                    <ul>
                        <Link className='collection-head'>COLLECTIONS <FaAngleDown className='FaAngleDown' style={{ color: 'orangered'}} />
                            <div className='collections'>
                                <ul className='sub-items'>
                                    <Link>Electronics</Link>
                                    <Link>Toys</Link>
                                    <Link>Cloths</Link>
                                    <Link>Foot_Wear</Link>
                                </ul>
                            </div>
                        </Link>
                        <Link>ABOUT</Link>
                        <Link>CONTACT</Link>
                        <Link>SIGN_ <span style={{ color: 'orangered' }}>UP</span> </Link>
                        <Link>CART <FaShoppingCart style={{ color: "yellow", fontSize: 25, paddingLeft: 4 }} /></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header