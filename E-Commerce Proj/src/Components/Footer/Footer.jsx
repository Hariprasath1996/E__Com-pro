import React from 'react'
import "./Footer.css"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdContactPhone } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className='footer-sec'>
                <div>About
                    <div>
                        FAQ
                    </div>
                </div>
                <div>Contact_us
                    <div className='sub-con'>
                        <FaWhatsapp />
                        <FaTelegram />
                        <SiGmail />
                    </div>
                </div>
                <div>Help
                    <div>
                        <MdContactPhone />
                    </div>
                </div>
                <div>Social
                    <div className='sub-so'>
                        <FaWhatsapp />
                        <FaInstagram />
                        <FaXTwitter />
                        <FaFacebook />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
