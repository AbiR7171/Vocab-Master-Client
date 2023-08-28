import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../../../../components/Slider/Slider";
import Features from "../../../../components/Features/Features";
import Lottie from "lottie-react";
import animation from "../../../../assets/LottieAnimation/galaxy1.json";
import animation1 from "../../../../assets/LottieAnimation/galaxy2.json";
import animation2 from "../../../../assets/LottieAnimation/galaxy4.json";
import animation3 from "../../../../assets/LottieAnimation/galaxy5.json";
import animation4 from "../../../../assets/LottieAnimation/galaxy6.json";
import animation5 from "../../../../assets/LottieAnimation/galaxy7.json";
import animation6 from "../../../../assets/LottieAnimation/galaxy8.json";

const Learn = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const level = localStorage.getItem("level");
  console.log(level);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      <div className="  h-full w-full    bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      
          {/* Container */}
        

          {/* Get Started tooltip */}
          <div className="text-center flex flex-col gap-5 items-center justify-center my-12  ">

           <div className="text-center ms-64">
           <div 
              className="tooltip tooltip-open tooltip-error"
              data-tip="CLICK THE GALAXY TO START"
            >
              {/* active button */}
              <Link to="/allRouts/learn/sesson1">
                <div className="w-52">
                  <Lottie animationData={animation} loop={true} />
                </div>
              </Link>
            </div>
           </div>

            {/* Other buttons */}
            <div className="me-44 mt-7">
              <div
                // className="tooltip tooltip-open tooltip-error  "
                // data-tip="CLICK THE GALAXY TO START"
              >
                <Link to="/allRouts/learn/sesson2">
                  <div className="w-32 ">
                    <Lottie animationData={animation1} loop={true} />
                  </div>
                </Link>
              </div>
            </div>

            <div className="ms-[700px] ">
              <div  
                          // className="tooltip tooltip-open tooltip-error step step-primary "
                          // data-tip="CLICK THE GALAXY TO START"
                >
                <Link to="/allRouts/learn/sesson2">
                  <div className="w-44">
                    <Lottie animationData={animation4} loop={true} />
                  </div>
                </Link>
              
              </div>
            </div>


             <div className="ms-80">
               <div  
                          // className="tooltip tooltip-open tooltip-error step step-primary "
                          // data-tip="CLICK THE GALAXY TO START"
                >
                <Link to="/allRouts/learn/sesson22">
                  <div className="w-52 ">
                    <Lottie animationData={animation3} loop={true} />
                  </div>
                </Link>
              
              </div>
            </div>



            <div className="me-44 mt-7">
              <div
                // className="tooltip tooltip-open tooltip-error  "
                // data-tip="CLICK THE GALAXY TO START"
              >
                <Link to="/allRouts/learn/sesson2">
                  <div className="w-44 ">
                    <Lottie animationData={animation5} loop={true} />
                  </div>
                </Link>
              </div>
            </div>




            
          </div>

       
         
  
      </div>
    </>
  );
};

export default Learn;
