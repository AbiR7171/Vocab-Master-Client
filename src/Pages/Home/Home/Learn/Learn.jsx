import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../../../../components/Slider/Slider";
import Features from "../../../../components/Features/Features";

const Learn = () => {
  const[theme, setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme"): "light")
  const level = localStorage.getItem("level");
  console.log(level);

  useEffect(()=>{
 
 
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  },[theme])


  return (
    <>
      <div className=" flex justify-between gap-5 items-center w-full">
        <div>
          {/* Container */}
          <div className=" mt-10lg:flex items-center font-primary ">
            {/* Unit 1 */}
            <div className="bg-[#63DBBF] w-[600px] rounded p-6 flex justify-between">
              <div>
                <h2 className="text-white fw-bold text-2xl">ইউনিট 1</h2>

                <p className="text-white fw-bold"></p>
              </div>
              <button className="btn btn-outline"> Default</button>
            </div>
          </div>

          {/* Get Started tooltip */}
          <div className="text-center items-center  my-12">
            <div
              className="tooltip tooltip-open tooltip-accent bg-white p-2"
              data-tip="GET STARTED"
            >
              {/* active button */}
              <Link to="/allRouts/learn/sesson1">
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
            <Link to="/allRouts/learn/sesson2">
              <div
                className="bg-[#63DBBF] w-24 h-24 b rounded-full flex border- border-[#7e7b7b] border-b-8 mx-auto my-3 me-32"
                onClick={() => window.my_modal_2.showModal()}
              >
                <img
                  src={`${
                    level == 1
                      ? "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ef9c771afdb674f0ff82fae25c6a7b0a.svg"
                      : "https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                  }`}
                  alt=""
                />
              </div>
            </Link>
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
              <p className="py-4 bg-red-500 w-6">
                <Link>Start</Link>
              </p>
            </form>
          </dialog>
        </div>

        <div>
          <div className="flex rounded-lg justify-between items-center mb-5 flex-row-reverse bg-zinc-200 w-full h-full">
            {" "}
            
            <label className="swap swap-rotate flex justify-center items-center me-32">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <Slider />
          <Features />
        </div>
      </div>
    </>
  );
};

export default Learn;
