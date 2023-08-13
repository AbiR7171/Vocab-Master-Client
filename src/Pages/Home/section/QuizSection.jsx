import React from 'react';
import Lottie from "lottie-react";
import animation from "../../../assets/LottieAnimation/quiz.json"

const QuizSection = () => {
    return (
        <div
        className='mt-32 container mx-auto px-20
        flex items-center flex-row-reverse
        '
        >

            <div 
            className='px-20 space-y-5'
            >
                <h2 className="text-5xl font-bold">Special Quiz.</h2>
                <p
                className='text-gray-400 flex items-center justify-center space-y'
                >Learning with Duolingo is fun With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.</p>
            </div>

            <div
            className=''
            >
                <Lottie animationData={animation} loop={true} /> 
            </div>
            
        </div>
    );
};

export default QuizSection;