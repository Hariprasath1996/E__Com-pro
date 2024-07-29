import React from 'react'

const BudsComponent = ({ product }) => {
    return (
        <>
            <div>
                <div>
                    <img src={product.image} alt={product.name} />
                </div>
                <h2>{product.name}</h2>
                <h4> {product.color} </h4>
                <div>
                    <h3>{product.Rating}</h3>
                    <h3>price : ₹ {product.Price}</h3>
                </div>
                <h2>{product.offer}</h2>
            </div>
        </>
    )
}

export  {BudsComponent}
