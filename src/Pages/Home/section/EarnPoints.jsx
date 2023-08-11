import React from 'react';
import Lottie from "lottie-react";
import animation from "../../../assets/LottieAnimation/earnPoints.json"

const EarnPoints = () => {
    return (
        <div
        className='mt-32 container mx-auto px-32
        flex items-center
        '
        >

            <div 
            className='px-20 space-y-5'
            >
                <h2 className="text-5xl font-bold">free. fun. effective.</h2>
                <p
                className='text-gray-400 flex items-center justify-center space-y'
                >Learning with Duolingo is fun With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.</p>
            </div>

            <div
            className='w-full'
            >
                <Lottie animationData={animation} loop={true} /> 
            </div>
            
        </div>
    );
};

export default EarnPoints;