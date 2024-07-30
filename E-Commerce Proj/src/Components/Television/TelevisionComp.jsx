import React, { useState } from 'react'
import TelevisionSubComp from './TelevisionSubComp'
import TvData from '../../Constant/Tv-data'
import "./Television.css"
const TelevisionComp = () => {
    const [products] = useState(TvData)
    return (
        <div className='Tv-Contain'>
            {
                products.map(
                    (product) => (
                        <TelevisionSubComp key={product} {...product} />
                    )
                )
            }
        </div>
    )
}

export default TelevisionComp
