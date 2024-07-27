import React from 'react'
import { Link } from 'react-router-dom'
import "./SubHeading.css"
const SubHeading = () => {
    return (
        <>
            <div className='subContainer'>
                <ul className='sub-ul'>
                    <li className='sub-list'>
                        <img src="https://i.pinimg.com/564x/fd/56/fe/fd56fe106a889d7842bd4e519a95d5c8.jpg" alt="Home_Appliances" />
                        <Link>
                            Electronics
                        </Link>
                    </li>
                    <li className='sub-list'>
                        <img src="https://i.pinimg.com/736x/e9/0f/ad/e90fadde9d55992ab9bc88da48595d19.jpg" alt="tos" />
                        <Link>
                            Toys
                        </Link>
                    </li>
                    <li className='sub-list'>
                        <img src="https://i.pinimg.com/564x/f9/2a/59/f92a59e0435fde6ee1a5efe3d04620e4.jpg" alt="Cloths" />
                        <Link>
                            Cloths
                        </Link>
                    </li >
                    <li className='sub-list'>
                        <img src="https://i.pinimg.com/736x/b1/6d/cc/b16dccc234c87341d2cec7e8dccf11c4.jpg" alt="Foot_Wear" />
                        <Link>
                            Foot_Wear
                        </Link>
                    </li>
                    <li className='sub-list'>
                        <img src="https://i.pinimg.com/564x/33/fe/86/33fe8689149934ea6d63f6f879955b8a.jpg" alt="Foot_Wear" />
                        <Link>
                            Groceries
                        </Link>
                    </li>
                    <li className='sub-list'>
                        <img src="https://i.pinimg.com/564x/2a/a1/26/2aa126327ce22bee466e2744f837d124.jpg" />
                        <Link>
                            Stationeries
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default SubHeading
