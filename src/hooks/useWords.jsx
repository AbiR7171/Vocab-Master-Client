import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useWords = () => {
   
    const {data: words=[], refetch}=useQuery({
        queryKey:["words"],
        queryFn:async()=>{
              const res = await axios.get("https://vocab-master-server.vercel.app/quiz");
              return res.data;
        }
    })

    return [words, refetch]
};

export default useWords;