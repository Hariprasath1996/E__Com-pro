// 
import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckOut = () => {
    const location = useLocation();
    const { product } = location.state || {}; // Destructure product from location state
    console.log(product);
    if (!product) {
        return <div>No product selected!</div>; // Handle the case where no product is passed
    }

    return (
        <div>
            <h1>CheckOut Page</h1>
            <div className='checkout-product'>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <h3>{product.color}</h3>
                <h3>Rating: {product.Rating}</h3>
                <h3>Price: ₹{product.Price}</h3>
                <h3>Offer: {product.Offer}</h3>
            </div>
        </div>
    );
};

export default CheckOut;
