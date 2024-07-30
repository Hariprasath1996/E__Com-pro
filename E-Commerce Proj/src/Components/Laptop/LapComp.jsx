import React, { useState } from 'react'
import LapData from '../../Constant/LapData'
import LapSubComponent from '../Laptop/LapSubComp'
const LapComp = () => {
    const [products] = useState(LapData)
    return (
        <div className='lap-main-container'>
            {
                products.map(
                    (product) => {
                        return <LapSubComponent key={product} {...product} />
                    }
                )
            }
        </div>
    )
}

export default LapComp
