import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';
import useUsers from '../../hooks/useUsers';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ChatContent from './ChatContent';
import { useState } from 'react';
import { useEffect } from 'react';


// theme.palette.background.paper ||

const ChatApp = () => {

    const[userInfo]=useUsers();

    console.log(userInfo);

    const themes = useTheme();
    console.log(themes);

    const[theme, setTheme]=useState(localStorage.getItem("themes") ? localStorage.getItem("themes"): "dark");



    const handleToggle = e => {

      if(e.target.checked){
           setTheme("light");
      }
      else{
         setTheme("dark")
      }
          
    }


    useEffect(()=>{
         
            localStorage.setItem("themes", theme);
            const localTheme = localStorage.getItem("themes");
            document.querySelector("html").setAttribute("data-theme", localTheme)
    },[theme])
    return (
        <div>


              <div className="drawer lg:drawer-open">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
             <div className="drawer-content flex flex-col items-center justify-center">
               {/* Page content here */} <ChatContent/>
             <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
             </div> 
            <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 

            


           <div className=" w-96 min-h-full bg-base-200 text-base-content flex  ">
         {/* Sidebar content here */}

         <div>
<Box sx={{
   boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)", height:"100vh", 
    padding:"4px",
    color:"black",
    width:"90%",

    
}}> 

<div className='flex flex-col justify-center items-center gap-3 h-full' >


    

      <div className=' flex flex-col justify-center items-center gap-4'> 
      <p className=' mt-6 mb-6'>VOcab Master</p>

      <p className='p-2 rounded bg-sky-700'><Icon icon="ant-design:message-filled" className='text-3xl' /></p>

      <p><Icon icon="el:group" className='text-3xl' /></p>

      <hr className='divider ' />

     <p><Icon icon="uiw:setting" className='text-3xl' /></p>

      </div> 

      <div className='mt-auto'> 

      <input type="checkbox" className="toggle" onChange={handleToggle} />


     <div>
          <img src={userInfo[0]?.image} className='w-14 h-14 rounded-full mt-5' alt="" />
     </div>

         

      </div>

</div>

</Box>


</div> 

   <div className='menu '>

         <li>Vocab Master</li>
         <li className='mt-4'><input type="text" className='input rounded border-0 border-b-2 border-sky-700' placeholder='    Search' /> 
         <p> <Icon icon="tabler:search" className='text-sky-700 -mt-16 text-2xl' /></p>
         </li>
       

          <li className='text-sky-700 mt-2 flex'><a>Start New Conversation</a> </li> 

          <hr className='border-b border-sky-700 ' />


         <Link>

             <div className='flex items-center gap-2 mt-4 mb-4 border border-sky-600 p-2 rounded bg-sky-700'>

                <img src={userInfo[0]?.image} className='w-10 h-10 rounded-full' alt="" />

                <div>
                     <p>Yasin</p>
                     <p> { moment().subtract(1, 'days').calendar() } </p>
                </div>
               

            
            </div>

         </Link>

         <Link>

<div className='flex items-center gap-2 mb-4 border border-sky-600 p-2 rounded bg-sky-700'>

   <img src={userInfo[0]?.image} className='w-10 h-10 rounded-full' alt="" />

   <div>
        <p>Yasin</p>
        <p> { moment().subtract(1, 'days').calendar() } </p>
   </div>
  


</div>

</Link>

<Link>

<div className='flex items-center gap-2 border border-sky-600 p-2 rounded bg-sky-700'>

   <img src={userInfo[0]?.image} className='w-10 h-10 rounded-full' alt="" />

   <div>
        <p>Yasin</p>
        <p> { moment().subtract(1, 'days').calendar() } </p>
   </div>
  


</div>

</Link>
    </div>
        
        
  
  </div>
</div>
</div>
            


        </div>
       
    );
};

export default ChatApp;



