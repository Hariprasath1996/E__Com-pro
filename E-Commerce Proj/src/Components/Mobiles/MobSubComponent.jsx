import React from 'react'

const MobSubComponent = ({ product }) => {
    return (
        <div>
            <div className='mob-img-container'>
                <img src={product.image} alt={product.name} />
            </div>
            <div className='mob-name-container'>
                <h2 className='mob-name'>
                    {product.name}
                </h2>
                <p className='mob-color'>
                    {product.color}
                </p>
            </div>
            <div className='mob-rate-container'>
                <h2 className='mob-rating'>
                    {product.Rating}
                </h2>
                <p className='mob-price'>
                    {product.price}
                </p>
            </div>
            <h3 className='mob-offer'>
                {product.Offer}
            </h3>
        </div>
    )
}

export default MobSubComponent
