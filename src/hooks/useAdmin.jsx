import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/Provider/AuthProvider';
import axios from 'axios';

const useAdmin = () => {


    const {user, loading}=useContext(AuthContext)
   

    const {data:isAdmin=[], refetch}=useQuery({
         queryKey:["isAdmin", user?.email],
         enabled:!loading,
         queryFn: async ()=>{
               const res = await axios.get(`https://vocab-master-server.vercel.app/singleUser/users/admin?email=${user?.email}`)
               return res.data.admin;
         }
    })

    return [isAdmin, refetch]
};

export default useAdmin;