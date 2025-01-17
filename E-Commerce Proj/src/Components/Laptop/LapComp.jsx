import React, { useState } from 'react'
import LapData from '../../Constant/LapData'
import LapSubComponent from '../Laptop/LapSubComp'
import "./Lap.css"
const LapComp = () => {
    const [products] = useState(LapData)
    return (
        <div className='lap-main-container'>
            {
                products.map(
                    (product) => {
                        return <LapSubComponent key={product.id} {...product} />
                    }
                )
            }
        </div>
    )
}
export default LapComp;
