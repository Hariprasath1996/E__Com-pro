import React, { useState } from 'react'
import EarBudsElementData from '../../Constant/EarBudsElementData';
import BudsComponent from './BudsComp'
import "./BudsComp.css"


const EarBudsEle= () => {
    
    const [products] = useState(EarBudsElementData);
    return (
        <div className='container' >
            {
                products.map(
                    (product) => (
                        <BudsComponent key={product.id} product={product}
                        />
                    )
                )
            }
        </div>
    );
};
export default EarBudsEle;
