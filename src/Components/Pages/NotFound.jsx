import React from 'react'
import Group1 from "../../Assets/images/Group_1.svg"
import Group2 from "../../Assets/images/Group_2.svg"

const NotFound = () => {
    return (

        <div className='w-full h-full flex justify-center items-center bg-white'>
            <div className='absolute'>
                <img src={Group2} alt="" />
                <div className='flex items-center justify-center w-full '>
                    <h1 className='absolute text-6xl font-bold text-orange-400 top-96 left-52'>#Scanbills</h1>
                    <div className='absolute left-1/2 top-24 right-0'><img src={Group1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;