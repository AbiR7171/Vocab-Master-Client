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
import quizGalaxy from  "../../../../assets/LottieAnimation/quizGalaxy.json";

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

  // bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
  return (
    <>
      <div className="  h-full w-full bg-Backs  ">
      
          {/* Container */} 

          <div className="bg-gradient-to-r  mb-10 md:mb-20">
            <p className=" text-center font-Sec md:ms-52 text-red-600 font-bold font-Logo text-lg md:text-3xl">Welcome  <br /> To OUR Vocab Galaxy</p>
          </div>
        

          {/* Get Started tooltip */}
          <div className="text-center flex flex-col gap-5 items-center justify-center my-12  "> 

           <div className="text-center md:ms-64">
           <div 
              className="tooltip tooltip-open  md:tooltip-right tooltip-error"
              data-tip="CLICK THE GALAXY TO START"
            >
              {/* active button */}
              <Link to="/allRouts/learn/stepSeason1">
                <div className="w-52">
                  <Lottie animationData={animation} loop={true} />
                </div>
              </Link>
            </div>
           </div>




           <div className=" me-40 md:me-72 mb-10 ">
              <div
                className="tooltip tooltip-open  tooltip-right tooltip-error  "
                data-tip="Quiz Galaxy"
              >
                <Link to="/allRouts/seasonOneQuiz">
                  <div className="w-32 ">
                    <Lottie animationData={quizGalaxy} loop={true} />
                  </div>
                </Link>
              </div>
            </div>


            {/* Other buttons */}
            <div className="md:ms-[600px] ms-40 mb-10">
              <div
                // className="tooltip tooltip-open tooltip-error  "
                // data-tip="CLICK THE GALAXY TO START"
              >
                <Link to="/allRouts/learn/stepSeason2">
                  <div className="w-32 ">
                    <Lottie animationData={animation1} loop={true} />
                  </div>
                </Link>
              </div>
            </div>



            <div className=" me-80 mb-10 md:ms-60 ">
              <div
                 className="tooltip tooltip-open  tooltip-right tooltip-error  "
                 data-tip="Quiz Galaxy"
              >
                <Link to="/allRouts/learn/stepSeason2">
                  <div className="w-32 ">
                    <Lottie animationData={quizGalaxy} loop={true} />
                  </div>
                </Link>
              </div>
            </div>

            <div className="md:ms-[700px] ms-40 mb-10 ">
              <div  
                          // className="tooltip tooltip-open tooltip-error step step-primary "
                          // data-tip="CLICK THE GALAXY TO START"
                >
                <Link to="/allRouts/learn/stepSeason3">
                  <div className="w-44">
                    <Lottie animationData={animation4} loop={true} />
                  </div>
                </Link>
              
              </div>
            </div>


            
            <div className=" me-40 mb-10 md:me-72 ">
              <div
                 className="tooltip tooltip-open  tooltip-right tooltip-error  "
                 data-tip="Quiz Galaxy"
              >
                <Link to="/allRouts/learn/stepSeason2">
                  <div className="w-32 ">
                    <Lottie animationData={quizGalaxy} loop={true} />
                  </div>
                </Link>
              </div>
            </div>


             <div className="md:ms-[600px] ms-40 mb-10">
               <div  
                          // className="tooltip tooltip-open tooltip-error step step-primary "
                          // data-tip="CLICK THE GALAXY TO START"
                >
                <Link to="/allRouts/learn/stepSeason4">
                  <div className="w-52 ">
                    <Lottie animationData={animation3} loop={true} />
                  </div>
                </Link>
              
              </div>
            </div>

              <div className=" md:me-80 me-40 mb-10 ">
              <div
                 className="tooltip tooltip-open  tooltip-right tooltip-error  "
                 data-tip="Quiz Galaxy"
              >
                <Link to="/allRouts/learn/stepSeason2">
                  <div className="w-32 ">
                    <Lottie animationData={quizGalaxy} loop={true} />
                  </div>
                </Link>
              </div>
            </div>



            <div className="md:ms-[600px] ms-40 mb-10 ">
              <div
                // className="tooltip tooltip-open tooltip-error  "
                // data-tip="CLICK THE GALAXY TO START"
              >
                <Link to="/allRouts/learn/stepSeason5">
                  <div className="w-44 ">
                    <Lottie animationData={animation5} loop={true} />
                  </div>
                </Link>
              </div>
            </div>


            
            <div className=" md:me-80 me-40 mb-10 ">
              <div
                 className="tooltip tooltip-open  tooltip-right tooltip-error  "
                 data-tip="Quiz Galaxy"
              >
                <Link to="/allRouts/learn/stepSeason2">
                  <div className="w-32 ">
                    <Lottie animationData={quizGalaxy} loop={true} />
                  </div>
                </Link>
              </div>
            </div>



            
            <div className="md:ms-[600px] ms-40 mb-10">
              <div
                // className="tooltip tooltip-open tooltip-error  "
                // data-tip="CLICK THE GALAXY TO START"
              >
                <Link to="/allRouts/learn/stepSeason6">
                  <div className="w-52 ">
                    <Lottie animationData={animation6} loop={true} />
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
