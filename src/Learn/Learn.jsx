import React from 'react';
import { Link } from 'react-router-dom';

const Learn = () => {

  const level = localStorage.getItem("level")
  console.log(level);

    return (
        <>
          {/* Container */}
          <div className="container mx-auto lg:px-28 mt-10   lg:flex items-center justify-around gap-5 font-primary">
            {/* Unit 1 */}
            <div className="bg-[#63DBBF] w-[600px] rounded p-6 flex justify-between">
              <div>
                <h2 className="text-white fw-bold text-2xl">ইউনিট 1</h2>
    
                <p className="text-white fw-bold">
                  নিজের পরিচয় দেয়া, অন্যদের পরিচয়
                </p>
              </div>
              <button className="btn btn-outline"> Default</button>
            </div>
          </div>
    
          {/* Get Started tooltip */}
          <div className="text-center items-center mx-[500px] my-12">
            <div
              className="tooltip tooltip-open tooltip-accent bg-white p-2"
              data-tip="GET STARTED"
            >
              {/* active button */}
             <Link to="/learn/sesson1">
             <div
                className=" bg-[#63DBBF]  w-24 h-24 b rounded-full flex border-4 border-[#7e7b7b] border-b-8"
                onClick={() => window.my_modal_2.showModal()}
              >
                <img
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ef9c771afdb674f0ff82fae25c6a7b0a.svg"
                  alt=""
                />
              </div>
             </Link>
            </div>
    
            {/* Other buttons */}
            <div 
              className="bg-[#63DBBF] w-24 h-24 b rounded-full flex border- border-[#7e7b7b] border-b-8 mx-auto my-3 me-32"
              onClick={() => window.my_modal_2.showModal()}
            >
              <img
                src={`${level > 0 ? "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ef9c771afdb674f0ff82fae25c6a7b0a.svg" :
              
                 "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"}`}
                alt=""
              />
            </div>
            <div
              className=" bg-[#E5E5E5]  w-24 h-24 b rounded-full flex border- border-[#7e7b7b] border-b-8 mx-auto my-3"
              onClick={() => window.my_modal_2.showModal()}
            >
              <img
                src="	https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                alt=""
              />
            </div>
            <div
              className=" bg-[#E5E5E5]  w-24 h-24 b rounded-full flex border- border-[#7e7b7b] border-b-8 mx-auto my-3"
              onClick={() => window.my_modal_2.showModal()}
            >
              <img
                src="	https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                alt=""
              />
            </div>
          </div>
    
          {/* Modal */}
          <dialog id="my_modal_3" className="modal absolute top-[-100px]">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
                ✕
              </button>
    
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4 bg-red-500 w-6"><Link>Start</Link></p>
            </form>
          </dialog>
        </>
      );
};

export default Learn;