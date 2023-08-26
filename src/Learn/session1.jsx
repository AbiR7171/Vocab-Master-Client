import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import Swal from 'sweetalert2';



const Session1 = () => {

    const navigate = useNavigate()
    const [lesson, setLesson] = useState([])
    const [level, setLevel] = useState(0)
    const [disable, setDisable] = useState(false)
    console.log(level);
    console.log(lesson);





    useEffect(() => {


        fetch("https://vocab-master-server.vercel.app/words")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const lesson = data.slice(0, 10)
                setLesson(lesson)
            })
    }, [])


    const handleBack = () => {

        navigate(-1)
    }

    const handleLevel = () => {
        setLevel(level + 1)
        setDisable(true)
        localStorage.setItem("level", level + 1)
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Completed',
            showConfirmButton: false,
            timer: 1500
        })
    }



    return (
        <div
            className=' w-full h-full'
        >
            <button
                onClick={handleBack}
                className='text-red-400 text-3xl absolute top-0 left-0 mt-6'
            ><Icon icon="solar:round-arrow-left-bold" /></button>

            <div



            >
                <p className='text-center mt-20 text-2xl font-primary'>Welcome to Your First Vocabulary Lesson</p>
                <div

                    className='mt-20'>

                    <Swiper
                        cpagination={{
                            type: 'progressbar',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            lesson.map((less, index) => <SwiperSlide>

                                <div
                                    className='w-1/2 mx-auto font-serif space-y-4'
                                >
                                    <div
                                        className='flex justify-between items-center font-bold font-serif'
                                    >
                                        <p> Word No.{index + 1}</p>
                                        <p>Category: {less.category}</p>
                                    </div>

                                    <p className="text-2xl font-bold">Word: {less.word}</p>
                                    <div
                                        className='flex justify-between items-center'
                                    >
                                        <p>Meaning In Bangla : {less.meaning.bangla}</p>
                                        <p>Meaning In Bangla : {less.meaning.hindi}</p>
                                    </div>

                                    <div
                                        className='flex  justify-between items-center'
                                    >
                                        <p>Part of speech : {less.partOfSpeech}</p>
                                        <p>Antonyms: {less.antonyms[1]}, {less.antonyms[0]}</p>
                                    </div>

                                    <p>Examples : {less.examples}</p>


                                </div>

                            </SwiperSlide>)
                        }
                        <SwiperSlide>  <button onClick={handleLevel} disabled={disable}
                            className={`w-1/3 mx-auto  mt-24 ms-96 p-5 rounded-lg  uppercase font-bold ${disable ? "bg-red-200 text-white " : "bg-red-700   text-white"}`}
                        >Completed</button> </SwiperSlide>

                    </Swiper>

                </div>
            </div>

        </div>
    );
};

export default Session1;