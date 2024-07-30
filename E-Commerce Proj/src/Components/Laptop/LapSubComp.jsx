import React from 'react'

const LapSubComp = ({ image, name, color, Price, Rating, Offer }) => {
    return (
        <div className='Lap-sub-container'>
            <div className='lap-img-container'>
                <img src={image} alt={name} />
            </div>
            <div className='lap-details-container'>
                <div className='lap-name-contain'>
                    <h3>{name}</h3>
                    <h4>{color}</h4>
                </div>
                <div className='lap-rate-contain'>
                    <h2 style={{ color: 'darkgreen' }}>{Rating}</h2>
                    <h2> Price : <span style={{ color: 'orangered' }}> ₹ {Price}</span></h2>
                </div>
                <div className='lap-offer-contain'>
                    <h2>{Offer}</h2>
                </div>
            </div>
        </div>
    )
}

export default LapSubComp
