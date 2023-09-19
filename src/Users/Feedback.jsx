import moment from 'moment';
import React from 'react';
import useUsers from '../hooks/useUsers';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Feedback = () => {


    
    const[userInfo]=useUsers();
    const[rating, setRating]=useState(0)


    const handleIssue = event => {

        event.preventDefault();
        const feedback = event.target.issue.value;
        

       //  console.log(issue); 


        axios.post("https://vocab-master-server.vercel.app/feedback", {
           name:userInfo[0].name, email: userInfo[0].email, date: moment().format("DD, MMM, yyyy"), feedback, rating
        })
        .then(res => {
            
           console.log(res.data);

           if(res.data.insertedId){
                  
               Swal.fire({
                   position: 'top-center',
                   icon: 'success',
                   title: 'Your sent feedback successfully',
                   showConfirmButton: false,
                   timer: 1500
                 })

                 event.target.reset();
           }
        })
       

   }

    return (
        <div className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full h-full p-2'>

            <p className="text-4xl text-center mt-6 mb-10 text-red-600  ">Send us Your Valuable Feedback and Rating</p>

            <div className="w-full max-w-lg mx-auto mt-20">
      <form onSubmit={handleIssue} className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div className='mb-4'>
        <Rating
      style={{ maxWidth: 280 }}
      value={rating}
      onChange={setRating}
      isRequired
    />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="issue">
            Feedback
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="issue"
            placeholder="Describe your issue..."
            rows="4"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

            
        </div>
    );
};

export default Feedback;