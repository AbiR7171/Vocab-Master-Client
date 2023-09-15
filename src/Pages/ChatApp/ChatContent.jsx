import React, { useEffect, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import { Icon } from '@iconify/react';

const ChatContent = () => {

    const [userInfo]=useUsers();

    return (
        <div className='h-screen w-full text-black flex flex-col p-2'>
           
           <nav className='flex  justify-between px-10 w-[70%] border-b p-2 fixed'> 

              <div className='flex items-center gap-3'>
                   <img src={userInfo[0]?.image} className='w-12 h-12 rounded-full' alt="" /> 

                   <div>
                        <p className='text-[12px]'>{userInfo[0]?.name}</p>
                        <p className='text-[12px]'>online</p>
                   </div>

              </div> 

              <div className='flex items-center gap-4'>

                <p><Icon icon="mdi:video" /></p>
                <p><Icon icon="material-symbols:call" /></p>
                <p><Icon icon="tabler:search" /></p>

              </div>
                
           </nav> 

           <div className=' overflow-y-scroll'> 

                <div className='h-[1000px]'>

                    <div className='w-80  rounded-lg bg-white text-black  absolute bottom-52  p-2'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, enim?</div>

                    <div className='w-80  rounded-lg bg-white text-black  absolute bottom-96  p-2'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, enim?</div>
                    
                    <div className='w-80  rounded-lg bg-sky-700 ml-auto absolute  bottom-0 mb-20 right-0   me-10 p-2'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, enim?</div>

                    <div className='w-80  rounded-lg bg-sky-700 ml-auto absolute  bottom-44 mb-20 right-0   me-10 p-2'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, enim?</div>
                     
                </div>
                
           </div>



            <div className='mt-auto'> 

                <input type="text" className='input w-full border border-black' />
                <p><Icon icon="tabler:send" className='absolute end-0 me-22 -mt-12 bg-sky-700 h-12 w-14'  /></p>


               
           </div>


            
        </div>
    );
};

export default ChatContent;