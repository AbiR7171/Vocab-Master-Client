import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useManageUser from '../hooks/useManageUser';
import Swal from 'sweetalert2';

const ManageUser = () => {
 

    const [users, refetch]=useManageUser()


    const handleAdmin = user =>{

        console.log(user);
           

        axios.patch(`https://vocab-master-server.vercel.app/singleUser/users/admin/${user._id}`)
        .then(data => {
             console.log(data);

             if(data.data.modifiedCount >0){
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${user.name} admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })

             }
        })
         
    }


     const handleDelete = user =>{


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
                 
        axios.delete(`https://vocab-master-server.vercel.app/singleUser/users/${user._id}`)
        .then(data =>{

            console.log(data);

              if(data.data.deletedCount > 0){
                refetch()
                Swal.fire(
                    'Deleted!',
                    `${user.name} is deleted`,
                    'success'
                  )
              }
        })

             
            }
          })
         
       
     }




    return (
        <div className='w-full h-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'> 

        <p className='text-center text-red-600 font-Sec text-4xl underline mt-4'>Manage Users</p>
<div className="overflow-x-auto">
  <table className="table table-zebra container mx-auto px-20 font-Sec mt-10">
    {/* head */}
    <thead>
      <tr className='text-white text-1xl'>
        <th></th>
        <th>Name</th>
        <th>Image</th>
        <th>Email</th>
        <th>Season</th>
        <th>role</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      { users.map((user, index) => {
             
          return   <tr className='text-gray-400 text-1xl'>
             <th>{index +1}</th>
             <td>{user.name}</td>
             <td> <img src={user.image} className='w-16 h-16 rounded-lg hover:w-52 hover:h-44  duration-700' alt="" /></td>
             <td >{user.email}</td>
             <td>{user.season}</td>
             <td>{user.role}</td>
             <td><button onClick={()=> handleDelete(user)} className='bg-red-800 p-4 rounded-md text-white'>DELETE</button></td>
             <td><button onClick={()=> handleAdmin(user)} className='bg-green-800 p-4 rounded-md text-white'>ADMIN</button></td>
           </tr>

      })}
     
    </tbody>
  </table>
</div>


            
        </div>
    );
};

export default ManageUser;