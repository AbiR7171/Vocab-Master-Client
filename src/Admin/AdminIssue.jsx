import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AdminIssue = () => {


    const[issues, setIssues]=useState([]);

    useEffect(()=>{

         axios.get("https://vocab-master-server-27bb9zgej-abir7171.vercel.app/issue")
         .then(res =>  {
            console.log(res.data);
            setIssues(res.data)
         })
    },[])
    return (

        <div className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full h-full p-2'>

            <p className='text-center mt-10 uppercase underline text-4xl text-red-600'>Manage Issue</p>


            <div className='grid grid-cols-1 gap-5  px-20 mt-10 '>

                {
                    issues.map(issue => {
                         return  <div className='bg-gradient-to-r from-red-200 to-red-600 p-2 rounded '>
                                
                                 <div className='flex items-center justify-evenly mb-2'>
                                     <p>Name: {issue?.name}</p>
                                     <p>Email: {issue?.email}</p>
                                      <p>Date: {issue.date}</p>
                                 </div> 

                                 <div className='bg-white text-black w-full p-2 h-32 rounded'>
                                     {issue.issue}
                                 </div>

                               <div className='w-full flex justify-end mt-2 me-4'>
                                  <button className='bg-green-700 p-3 rounded'>Solved</button>
                               </div>
                                
                         </div>
                    })
                }

            </div>


            
        </div>
    );
};

export default AdminIssue;