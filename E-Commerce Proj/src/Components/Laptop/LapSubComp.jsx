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
                    <h3>{color}</h3>
                </div>
                <div className='lap-rate-contain'>
                    <h4>{Rating}</h4>
                    <h4>{Price}</h4>
                </div>
                <div className='lap-offer-contain'>
                    <h3>{Offer}</h3>
                </div>
            </div>

        </div>
    )
}

export default LapSubComp
