// import React from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import useWords from "../hooks/useWords";

// const AllWord = () => {

//     const[words, refetch]=useWords() 

    

//     // console.log(words);

//     const categorys = words.reduce((acc, item)=>{
//         if(!acc.includes(item.category)){
//             acc.push(item.category)
//         }
        
//         return acc;

//     }, [])

//     console.log(categorys);
//   return (
//    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full h-full">
//             <div className="w-full h-full  ">
//       <Tabs>
//       <TabList className="bg-black p-5 rounded-lg flex space-x-6 ">
          

//           {
//             categorys.map(category => <Tab  className="text-white px-3 p-2">{category}</Tab> )
//           }
    
//     </TabList>

     
//      {
//         words.map(word => {
//             return <TabPanel>
                 
//             </TabPanel>
//         })
//      }

//         {/* <TabPanel>
//           <h2>Any content 1</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 2</h2>
//         </TabPanel> */}
//       </Tabs>
//     </div>
//    </div>
//   );
// };

// export default AllWord;
