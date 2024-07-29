import React, { useState } from 'react'
import Earbuds from './EarBudsEle'
import BudsComponent from './BudsComp'
const EarBudsEle = () => {
    const [Products] =useState(Earbuds);
    return (
        <div className='container' >
{
    Products.map(
        (product)=>(
            <BudsComponent key={product.id} product={product} />
        )
    )
}
        </div>
    );
};
export default EarBudsEle ;
