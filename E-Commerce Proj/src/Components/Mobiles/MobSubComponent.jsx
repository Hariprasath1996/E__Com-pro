import React from 'react'
import { Link } from 'react-router-dom'
const MobSubComponent = ({ image, name, color, Rating, Price, Offer }) => {
    return (
        <Link to={"/CheckOut"} className='mob-sub-contain'>
            <div className='mob-img-container'>
                <img src={image} alt={name} />
            </div>
            <div className='mob-name-container'>
                <h2 className='mob-name'>
                    {name}
                </h2>
                <h4 className='mob-color'>
                    {color}
                </h4>
            </div>
            <div className='mob-rate-container'>
                <h3 className='mob-rating'>
                    {Rating}
                </h3>
                <h3 className='mob-price'>
                    <span style={{ color: "black" }}>Price :</span>   <span style={{ color: "orangered" }}> ₹ {Price}</span>
                </h3>
            </div>
            <h3 className='mob-offer'>
                {Offer}
            </h3>
        </Link>
    )
}
export default MobSubComponent
