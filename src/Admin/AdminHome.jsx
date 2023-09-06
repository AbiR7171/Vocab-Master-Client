import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UserChart from '../Chartjs/UserChart';
import UserSeasonChart from '../Chartjs/UserSeasonChart';
import WordReques from './WordReques';
import WordChart from '../Chartjs/WordChart';

const AdminHome = () => {
    return (
         <div className='w-full h-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>
            <div className='h-full w-full container mx-auto  px-2 mt-2 '>

    <Tabs>
    <TabList className="bg-black p-4 rounded-lg flex space-x-5">
      <Tab  className="text-white px-3">Users</Tab>
      <Tab className="text-white px-3">Words</Tab>
      <Tab className="text-white px-3"></Tab>
    </TabList>

    <TabPanel>
      <div className='grid grid-cols-2'> 
             <div className=' mt-4'>
                <li className="text-2xl  text-red-600 ms-20 font-Sec">Users Grow Chart</li>
             <UserChart/>
             </div>

             <div className='mt-4'>
                  <li className="text-2xl  text-red-600 ms-20 font-Sec">Users Season Chart</li>
                  <UserSeasonChart/>
             </div>
      </div>
    </TabPanel>
    <TabPanel>
            <div className='w-full'>
                   <div >
                   <li className="text-2xl  text-red-600 ms-20 font-Sec">Words Chart</li>
                    <WordChart/>
                   </div>
            </div>
    </TabPanel>
  </Tabs>
            
        </div>
         </div>
    );
};

export default AdminHome;