import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../../../../components/Slider/Slider";
import Features from "../../../../components/Features/Features";
import Lottie from "lottie-react";
import animation from "../../../../assets/LottieAnimation/galaxy1.json"
import animation1 from "../../../../assets/LottieAnimation/galaxy2.json"
import animation2 from "../../../../assets/LottieAnimation/galaxy4.json"

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
      <div className=" flex justify-between gap-5 items-center w-full  mx-auto bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div>
          {/* Container */}
          <div className=" mt-10lg:flex items-center justify-center  font-primary ">
            {/* Unit 1 */}
            <div className=" w-[1020px] border border-black   rounded p-6 flex justify-between bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 ">
              <div>
                <h2 className="text-white fw-bold text-2xl">ইউনিট 1</h2>

                <p className="text-white fw-bold"></p>
              </div>
              <button className="btn btn-outline"> Default</button>
            </div>
          </div>

          {/* Get Started tooltip */}
          <div className="text-center items-center my-12">
            <div
              className="tooltip tooltip-open tooltip-accent step step-primary  p-2"
              data-tip="CLICK THE GALAXY TO START"
            >
              {/* active button */}
              <Link to="/allRouts/learn/sesson1">
                {/* <div
                  className=" bg-[#63DBBF]  w-24 h-24 b rounded-full flex border-4 border-[#7e7b7b] border-b-8"
                  onClick={() => window.my_modal_2.showModal()}
                >
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ef9c771afdb674f0ff82fae25c6a7b0a.svg"
                    alt=""
                  />
                </div> */}

                 <div className="w-52">
                 <Lottie animationData={animation} loop={true} />
                 </div>
              </Link>
            </div>

            {/* Other buttons */}
            <Link to="/allRouts/learn/sesson2">
              {/* <div
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
              </div> */}
                         <div className="w-36 ms-64 mt-7">
                         <Lottie animationData={animation1}  loop={true} />
                         </div>

            </Link>
            <Link to="/allRouts/learn/sesson2">
              {/* <div
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
              </div> */}
                         <div className="w-36 ms-[550px] mt-7 ">
                         <Lottie animationData={animation2}  loop={true} />
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

      
      </div>
    </>
  );
};

export default Learn;
