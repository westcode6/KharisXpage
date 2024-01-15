import React from "react";
import { styles } from "../styles";
import { kharis } from "../constants";
function Hero() {
  const profile = kharis;

  return (
    <>
      <div
        className={`rounded-2xl overflow-hidden mt-20 md:mt-24 shadow w-full md:max-w-7xl mx-auto flex items-center justify-between h-full  md:max-h-[100vh]`}
      >
        <div
          className={`glass-effect w-full md:max-w-7xl mx-auto box rounded-2xl shadow-2xl
       glass-effect flex flex-col md:flex-row justify-center md:justify-between items-end`}
        >
          <div className=" w-full rounded-2xl  md:max-w-3xl mx-auto h-full pb-6 text-center ">
            <div className="glass-effect">
              <div className="glass-effect">
                <div className="glass-effect">
                  <div className="w-full text-center">
                
                <h3 className="font-mono hidden">Hello I'm <span className="text-red-500">Charis</span></h3>
                    <h1 className="text-4xl sm:text-7xl mt-2 sm:mt-0 font-black">
                      VISUAL DESIGNER
                    </h1>
                    <p className="w-full md:max-w-lg mx-auto py-6 text-xs md:text-lg text-neutral-500 tracking-wide leading-5">
                  {" "}
                  And I know I can help your company create stunning visuals. As
                  someone who has worked iF marketing and video graphic design for
                  over a decade. 
              
                </p>
                  </div>
                </div>
              
                <div className="w-full  flex flex-col md:flex-row items-center justify-center gap-6">
                  <button className="uppercase w-full sm:w-fit px-4 sm:px-6 py-2 border-4 border-amber-300 bg-amber-400 transform transition hover:-translate-x-1 ease-in duration-100 font-bold  text-sm hover:text-red-500 rounded-2xl shadow-xl">
                    <a
                      href="https://api.whatsapp.com/send?phone=09065017306"
                      className="text-neutral-900"
                    >
                      <span className="text-xl">
                        <i
                          className="fa fa-glass text-neutral-900 mr-1 "
                          aria-hidden="true"
                        ></i>
                      </span>
                      TRY ME
                    </a>
                  </button>

                  {/* <button className='w-full md:w-fit bg-amber-500  text-lg text-neutral-800 font-bold  px-6 sm:px-12 py-4 rounded-tr-2xl rounded-bl-2xl uppercase'>About Me..</button> */}

                  <button className="w-full md:w-fit bg-neutral-800 flex items-center justify-center gap-2 text-base sm:text-lg text-red-100 font-normal px-6 sm:px-6 py-2 rounded-2xl rounded-bl-2xl uppercase">
                    <span className="w-8 h-8 flex items-center justify-center mr-1   rounded-2xl bg-red-700 shadow-2xl shadow-red-500">
                      <i className="fa fa-phone text-2xl text-red-100"></i>
                    </span>
                    09065017306
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-banner-img hidden w-full md:max-w-1/2  mx-auto rounded-xl shadow relative">
            <div className="w-full bg-black bg-opacity-70">
              <img
                src={kharis}
                className="w-full h-full object-cover object-center"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
