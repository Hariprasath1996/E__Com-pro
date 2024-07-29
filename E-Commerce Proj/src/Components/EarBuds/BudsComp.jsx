import React from 'react'
import "./BudsComp.css"
const BudsComponent = ({ product }) => {
    return (
        <>
            <div className='container-box' >
                <div className="sub-container">
                    <div className='img-container'>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className='text-field'>
                    <h3 className='name-filed'>{product.name}</h3>
                    <h4 className='color'> {product.color} </h4>
                    <div className='rating-details'>
                        <h3 className='rating'>{product.Rating}</h3>
                        <h3 className='price'>price : <span style={{color:"orangered"}}>₹</span>  <span style={{color:"orangered"}}>{product.Price}</span> </h3>
                    </div>
                    <h2 className='offer' >{product.Offer}</h2>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default BudsComponent;
