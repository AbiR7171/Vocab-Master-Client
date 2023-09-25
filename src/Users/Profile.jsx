import React from 'react';
import useUsers from '../hooks/useUsers';

const Profile = () => {

    const[userInfo]=useUsers();
    console.log(userInfo);
    return (
        <div className=' bg-Backs w-full h-full '> 

               <div className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-80 w-full md:w-4/5 ml-auto mt-10 md:mt-20 p-4 rounded'>
                <div className='flex justify-between items-end '>
                <div>

                <hr  className='divider w-full ' />
                
                     <p>{userInfo[0]?.name}</p>
                     <p>{userInfo[0]?.email}</p>
                </div>

                <div>
    
                <img src={userInfo[0]?.image} className='w-20 h-20 rounded-full' alt="" /> 


                </div>
                </div>
                      

               </div>
            
        </div>
    );
};

export default Profile;