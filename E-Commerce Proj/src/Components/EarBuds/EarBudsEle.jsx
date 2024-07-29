import React, { useState } from 'react'
import earBuds from './EarBudsEle'
import BudsComponent from './BudsComp'

const EarBudsEle = () => {
    const [products] =useState(earBuds);
    return (
        <div className='container' >
{
    products.map(
        (product)=>(
            <BudsComponent key={product.id} product={product} />
        )
    )
}
        </div>
    );
};
export default EarBudsEle ;
