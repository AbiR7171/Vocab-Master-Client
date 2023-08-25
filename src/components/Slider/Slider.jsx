import React from 'react';

import books1 from '../../assets/hasan/books1.webp'
import books2 from '../../assets/hasan/book2.jpg'
import books3 from '../../assets/hasan/books3.jpg'
import books4 from '../../assets/hasan/books4.jpg'
import books5 from '../../assets/hasan/books5.jpg'
import books6 from '../../assets/hasan/books6.jpeg'


const Slider = () => {
    return (
        <div className=' text-center mb-10'>
            <div className="h-96 carousel carousel-vertical rounded-box">
                <div className="carousel-item h-full ">
                    <img src={books1} className="" />
                </div>
                <div className="carousel-item h-full ">
                    <img src={books2} className="" />
                </div>
                <div className="carousel-item h-full ">
                    <img src={books3} className="" />
                </div>
                <div className="carousel-item h-full ">
                    <img src={books4} className="" />
                </div>
                <div className="carousel-item h-full ">
                    <img src={books5} className="" />
                </div>
                <div className="carousel-item h-full">
                    <img src={books6} className="" />
                </div>
            </div>

            <div>
                <p className='font-bold text-2xl text-center'>Some Books For You</p>
            </div>
        </div>
    );
};

export default Slider;