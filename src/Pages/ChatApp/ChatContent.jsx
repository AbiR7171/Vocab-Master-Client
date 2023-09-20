import React, { useEffect, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import { Icon } from '@iconify/react';
import axios from 'axios';

const ChatContent = ({messages, fetchMessages}) => {

    const [userInfo]=useUsers();
    const[message, setMessage]=useState('');

    const[users, setUsers]=useState([])




    const sendMessage = e => {
      
               axios.post("http://localhost:5000/message/messages", {

                    conversationId:messages?.conversationId,
                    senderId:userInfo[0]._id,
                    message,
                    receiverId:messages?.receiver?.receiverId
               })
               .then(res => {
                       console.log(res.data);
                       setMessage('')
               })
        
    }


    useEffect(()=> {
        
              axios.get("http://localhost:5000/message/users")
              .then(res => {
                         console.log(res.data);
                         setUsers(res.data)
              })
    },[])



  

    return (
       <div className='grid grid-cols-12 gap-8'>
                  <div className='h-screen  text-black flex flex-col  col-span-8 '>

{   messages?.receiver?.name &&
        
        <nav className='flex  justify-between px-10 w-[70%] border-2  '> 

    

           <div className='flex items-center gap-3'>
                <img src={userInfo[0]?.image} className='w-12 h-12 rounded-full' alt="" /> 

              
                  <div>
                     <p className='text-[12px]'>{messages?.receiver?.name}</p>
                     <p className='text-[12px]'>online</p>
                </div> 
           

               

           </div> 

           <div className='flex items-center gap-4'>

             <p><Icon icon="mdi:video" /></p>
             <p><Icon icon="material-symbols:call" /></p>
             <p><Icon icon="tabler:search" /></p>

           </div>
            
             
        </nav> 
         }

        <div className='h-screen border border-red-800 overflow-y-scroll  '> 

             <div className='h-[1000px]'> 

               { 
                  messages?.messages?.length > 0 ?
                  messages?.messages?.map(({message, user:{id}= {}}) => {

                     return (
                          <div className={`max-w-[40%] rounded-b-xl p-4 mb-6 ${id === userInfo[0]._id ? "bg-sky-700 text-white rounded-tl-xl ml-auto": "bg-gray-200 rounded-tr-xl"}`}>
                             {message}
                          </div>
                     )
                       
                  }) : <div className='text-center text-2xl font-semibold mt-24'>No Message or no Conversation selected</div>
               }

                 
             </div>
             
        </div>



        {
          messages?.receiver?.name && 

          <div className='mt-auto'> 

          <input type="text" className='input w-full border border-black' value={message} onChange={(e)=> setMessage(e.target.value)} />
          <p><Icon onClick={sendMessage} icon="tabler:send" className='absolute end-0 me-22 -mt-12 bg-sky-700 h-12 w-14'  /></p>


         
      </div> 
        }


         
      </div>  

            <div className='col-span-3'>  

            <div className='mb-20 mt-4'><input type="text" className='input rounded border-0 border-b-2 border-sky-700 ' placeholder='    Search' /> 
             <p> <Icon icon="tabler:search" className='text-sky-700 -mt-10 text-2xl' /></p>
            </div>

               {
                  users?.map(({receiverId, user, index})=>{

                         return <div onClick={()=> fetchMessages("new", user)}  className='border flex gap-2 items-center rounded-md p-2 mb-4 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 '>

                                   <img src={user.image} className='w-12 h-12 rounded-full' />

                                   <p className='text-black'>{user.name}</p>

                                   <p></p>

                                     
                                   
                                </div>
                          
                  })
               }
             
            </div>


       </div>
    );
};

export default ChatContent;