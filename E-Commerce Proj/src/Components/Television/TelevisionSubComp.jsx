import React from 'react'
import "./Television.css"
const TelevisionSubComp = ({ name, color, Rating, image, Price, Offer }) => {
    return (
        <div className='tv-sub-contain'>
            <div className='tv-img-contain' >
                <img src={image} alt={name} />
            </div>
            <div className='tv-details-contain'>
                <div className='tv-name-container'>
                    <h2>{name}</h2>
                    <h3>{color}</h3>
                </div>
                <div className='tv-price-container'>
                    <h3 style={{position:'relative', top:'12px' ,right:'5px',color:'darkgreen'}}>{Rating}</h3>
                    <h2>Price: <span style={{color:'orangered'}}>₹ {Price}</span></h2>
                </div>
                <div className='tv-offer-container'>
                    <h3><span style={{color:'cornflowerblue'}}>{Offer}</span></h3>
                </div>
            </div>
        </div>
    )
}

export default TelevisionSubComp
