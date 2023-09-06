import React from 'react';
import html from '../../assets/hasan/html.jpg'
import css from '../../assets/hasan/css.jpg'
import javascript from '../../assets/hasan/javascript.jpg'
import react from '../../assets/hasan/react.jpg'
import tailwind from '../../assets/hasan/tailwind.jpg'
import firebase from '../../assets/hasan/firebase.png'


import quiz from '../../assets/hasan/quiz.jpg'
import special from '../../assets/hasan/special1.png'
import mission from '../../assets/hasan/mission.avif'




const Docs = () => {
    return (
        <div className='container mx-auto'>
            {/* introduction */}
            <section className='mt-20'>
                <div className='text-center mb-16'>
                    <h1 className='text-7xl font-bold font-serif text-gray-500 mb-5'>Vocab muster</h1>
                    <p className='font-thin text-xl'>Become proficient in the language of choice</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-slate-800 mb-3'>introduction:</h1>
                    <hr />
                    <div className='ms-5 mt-5 bg-slate-300 bg-opacity-50 p-5 rounded-lg'>
                        <p><span className='font-bold'>Presented by : </span> Team Adromeda</p>
                        <p><span className='font-bold'>Item Version : </span> 1.0.0</p>
                        <p><span className='font-bold'>Author : </span> ashishmaraviya</p>
                        <p><span className='font-bold'>Copyright : </span> 2023</p>
                    </div>
                </div>
            </section>


            {/* tools */}
            <section className='mt-28'>
                <div>
                    <h1 className='text-5xl text-center font-mono text-slate-800 mb-3'>Uses Tools</h1>
                    <p className='text-center font-thin mb-5'>with which the entire website is created</p>
                    <hr />
                </div>


                <div className='grid grid-cols-3 gap-5 mt-5'>
                    <div>
                        <img className='h-32' src={html} alt="" />
                    </div>

                    <div>
                        <img className='h-32' src={css} alt="" />
                    </div>

                    <div>
                        <img className='h-32' src={javascript} alt="" />
                    </div>

                    <div>
                        <img className='h-32' src={react} alt="" />
                    </div>

                    <div>
                        <img className='h-32' src={tailwind} alt="" />
                    </div>

                    <div>
                        <img className='h-32' src={firebase} alt="" />
                    </div>

                    {/* TODO: add more img */}


                </div>
            </section>

            {/* Features */}
            <section className='mt-28'>
                <div>
                    <h1 className='text-5xl text-center font-mono text-slate-800 mb-3'>CORE FEATURES</h1>
                    <p className='text-center font-thin mb-5'>specialties of this weebsite. which makes it different from others</p>
                    <hr />
                </div>


                <div>
                    <div className='flex items-center gap-5'>
                        <div>
                            <img className='h-32' src={mission} alt="" />
                        </div>
                        <div className='ms-5'>
                            <h1 className='text-2xl font-extralight mb-3'>Daily mission</h1>
                            <p>There will be one mission per day.  Which you have to finish within that day.  In this you will be punctual and can prepare yourself very quickly.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-5'>
                        <div >
                            <img className='h-28' src={quiz} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-extralight'>Quiz</h1>
                            <p>You can verify yourself through this.  You can understand how much you have been able to do daily tasks.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-5'>
                        <div>
                            <img className='h-24' src={special} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-extralight'>Special word</h1>
                            <p >Some special words will be given if you complete certain tasks and quizzes every day.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Docs;