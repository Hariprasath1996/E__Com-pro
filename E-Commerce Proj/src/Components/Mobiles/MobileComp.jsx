import React from 'react'
import { useState } from 'react'
import MobileData from '../../Constant/MobilesData'
import MobSubComponent from './MobSubComponent'

const MobileComp = () => {
    const [products]=useState(MobileData)
    return (
        <div className='mob-contain'>
            {
                products.map(
                    (product)=>(
                        <MobSubComponent key={product} product={product}/>
                    )
                )
            }
        </div>
    )
}

export default MobileComp
