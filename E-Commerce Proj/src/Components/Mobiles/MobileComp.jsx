import React from 'react'
import { useState } from 'react'
import MobileData from '../../Constant/MobilesData'
import MobSubComponent from './MobSubComponent'
import "./MobileStyles.css"

const MobileComp = () => {
    const [products]=useState(MobileData)
    return (
        <div className='mob-contain'>
            {
                products.map(
                    (product)=>(
                        <MobSubComponent key={product.id} {...product}/>
                    )
                )
            }
        </div>
    )
}

export default MobileComp
