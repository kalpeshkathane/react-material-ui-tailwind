import React from 'react'
import Group1 from "../../Assets/images/Group_1.svg"
import Group2 from "../../Assets/images/Group_2.svg"

const NotFound = () => {
    return (

        <>
            <div className="relative">
                <div className='w-full  md:w-full lg:w-full'><img src={Group2} alt="" /></div>
                <div class="flex">
                    <h1 className='absolute bottom-16 left-0 lg:text-6xl md:text-4xl md:bottom-32 font-bold text-orange-400 '>#Scanbills</h1>
                    <div className='absolute top-10 right-0 w-32 md:w-64 md:top-24 lg:w-96 lg:top-24 lg:right-0'><img src={Group1} alt="" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default NotFound;