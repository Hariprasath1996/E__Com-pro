import React from 'react'

const MobSubComponent = ({ image, name, color, Rating, Price, Offer }) => {
    return (
        <div className='mob-sub-contain'>
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
                    Price : <span style={{ color: "orangered" }}> ₹ {Price}</span>
                </h3>
            </div>
            <h3 className='mob-offer'>
                {Offer}
            </h3>
        </div>
    )
}

export default MobSubComponent
