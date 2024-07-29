import React, { useState } from 'react'
import EarBuds from './EarBudsEle'
import BudsComponent from './BudsComp'
const ElectronicsBuds = () => {
    const [products]=useState(EarBuds)
    return (
        <div >
{
    products.map(
        (product)=>(
            <BudsComponent key={product.id} product={product} />
        )
    )
}
        </div>
    )
}
export default ElectronicsBuds
