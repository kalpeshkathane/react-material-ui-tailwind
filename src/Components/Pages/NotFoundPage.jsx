import React from "react";
import Group1 from '../../Assets/images/Group_1.svg'
import Group2 from '../../Assets/images/Group_2.svg'
const NotFoundPage = () => {
    return (
        <div className="max-w-4xl flex flex-col items-center justify-center bg-gray-500">
            <div className="relative bg-slate-50">
                <img src={Group2} alt="" />
                <div className="flex items-center justify-center absolute w-full top-5 p-5">
                    <div className="w-1/2"> <h1 className='font-bold text-xl md:text-4xl lg:text-5xl text-orange-400 '>#Scanbills</h1></div>
                    <div className='w-1/2'><img src={Group1} alt="" /></div>
                </div>
            </div>
        </div>
    )

}
export default NotFoundPage