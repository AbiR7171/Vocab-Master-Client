import React from "react";
import useWords from "../hooks/useWords";
import axios from "axios";
import Swal from "sweetalert2";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const ManageWords = () => {

    const[words, refetch]=useWords();


    const handleDeleteWord = word =>{
         
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://vocab-master-server.vercel.app/word/${word._id}`)
                .then(data => {
                        console.log(data);
                        if(data.data.deletedCount > 0){
                             refetch();
                             Swal.fire(
                                'Deleted!',
                                `${word.word} is deleted`,
                                'success'
                              )
                             
                        }
                })
             
            }
          })
        
    }




    console.log(words);
  return (
    <div className="w-full h-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 ">

         <p className="text-center text-4xl font-Sec underline mt-4 text-red-600">
          Manage Words
        </p>
      <div className="container  mx-auto px-20 rounded-lg border border-black mt-5">
        

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-white text-1xl font-Sec">
                <th></th>
                <th>word</th>
                <th>Meaning</th>
                <th>Category</th>
                {/* <th>Level</th> */}
              </tr>
            </thead>
            <tbody>
              {words.map((word, index) =>{
                return  <tr className="text-1xl font-Sec text-gray-400">
                <th>{index + 1}</th>
                <td>{word.word}</td>
                <td>{word.meaning.originalBangla[1]}</td>
                <td>{word.category}</td>
                <td><button onClick={()=>handleDeleteWord(word)} className="bg-red-700 p-4 rounded-lg text-white" >DELETE</button></td>
                <td><Link to={`/allRouts/editWord/${word._id}`}><button  className="bg-red-700 p-4 rounded-lg text-white" ><Icon icon="dashicons:edit-page" /></button></Link></td>
              </tr>
              })}
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageWords;
