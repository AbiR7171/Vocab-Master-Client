import React from 'react';

import world from '../../assets/hasan/earth-americas-solid.svg'
import fire from '../../assets/hasan/fire-solid.svg'
import gems from '../../assets/hasan/gem-regular.svg'
import love from '../../assets/hasan/earth-americas-solid.svg'
import Slider from '../../components/Slider/Slider';

const RightSideRoute = () => {
    return (
        <div>


            {/* Navber */}
            <div className='flex justify-between my-5'>
                <div><Link to='/docs'><p className='text-2xl font-bold text-blue-500'>Docs</p></Link></div>
                <div><img className='w-8' src={world} alt="" /></div>
                <div><img className='w-8' src={fire} alt="" /></div>
                <div><img className='w-8' src={gems} alt="" /></div>
                <div><img className='w-8' src={love} alt="" /></div>
            </div>

            {/* slider */}
            <Slider></Slider>

            <div className="divider"></div>
            
            <Features></Features>

        </div>
    );
};

export default RightSideRoute;