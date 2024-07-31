import React from 'react'
import { Link } from 'react-router-dom'
import "./BudsComp.css"
const BudsComponent = ({ product }) => {
    return (
        <>
            <Link to={"/CheckOut"}  >
                <div className='container-box' >
                    <div className="sub-container">
                        <div className='img-container'>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className='text-field'>
                            <h4 className='name-filed'>{product.name}</h4>
                            <h5 className='color'> {product.color} </h5>
                            <div className='rating-details'>
                                <h6 className='rating'>{product.Rating}</h6>
                                <h3 className='price'> <span style={{ color: 'black' }}>price :</span> <span style={{ color: "orangered" }}>₹</span>  <span style={{ color: "orangered" }}>{product.Price}</span> </h3>
                            </div>
                            <h3 className='offer' >{product.Offer}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default BudsComponent;


