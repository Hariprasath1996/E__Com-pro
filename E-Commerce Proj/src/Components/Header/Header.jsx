import React from 'react'
import { Link } from 'react-router-dom';
import { GiTigerHead } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import "./Header.css"
const Header = () => {
    return (
        <nav className='Container'>
            <div className='Header'>
                <Link to={"/"} className='heading'> <span style={{ color: 'orangered' }}>HUNT</span>ER<span ><GiTigerHead style={{ color: 'orangered' }} /></span></Link>
                <div className='header-Options'>
                    <ul>
                        <Link  className='collection-head'>COLLECTIONS <FaAngleDown className='FaAngleDown' style={{ color: 'orangered' }} />
                            <div className='collections'>
                                <ul className='sub-items'>
                                    <Link to={"/ele"} >Electronics</Link>
                                    <Link to={"/toys"}>Toys</Link>
                                    <Link to={"/cloths"} target='_blank'>Cloths</Link>
                                    <Link to={"/Foot-wear"}>Foot_Wear</Link>
                                    <Link to={"/Groceries"}>Groceries</Link>
                                    <Link to={"/Stationeries"} target='_blank'>Stationeries</Link>
                                </ul>
                            </div>
                        </Link>
                        <Link to={"/about"} target='_blank'>ABOUT</Link>
                        <Link to={"/log-in"} > <span style={{ fontSize: 20 }}><RiAccountPinCircleFill /></span> LOG_<span style={{ color: 'orangered' }}>IN</span> </Link>
                        <Link to={"/cart"}>CART <FaShoppingCart style={{ color: "yellow", fontSize: 25, paddingLeft: 4 }} /></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header
