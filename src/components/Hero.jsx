import React from "react";
import { styles } from "../styles";
import { kharis } from "../constants";
function Hero() {
  const profile = kharis;

  return (
    <>
      <div
        className={`rounded-2xl overflow-hidden mt-20 md:mt-24 shadow w-full md:max-w-7xl mx-auto flex h-full  md:max-h-[80vh]`}
      >
        <div
          className={`sm:${styles.paddingX} bg-black bg-opacity-50 w-full md:max-w-7xl mx-auto box  rounded-2xl shadow-2xl
       glass-effect flex flex-col md:flex-row justify-center md:justify-between items-end`}
        >
          <div className=" w-full rounded-2xl  md:max-w-1/2 h-full pb-6 text-left sm:text-left px-2">
            <div className="">
              <div className="">
                <div className="">
                  <div className="w-full text-center sm:text-left">
                    <div className="w-full h-12 flex items-start jusify-start relative">
                      <h3 className="w-full text-xl font-mono text-neutral-500 sm:pl-10">
                        Hello, I'm{" "}
                        <span className="font-mono text-xl text-priRed font-black">
                          Charis{" "}
                        </span>{" "}
                      </h3>
                      <span className="w-8 h-8 bg-amber-400 rounded-full absolute shadow-xl animate animate-bounce">
                        👀
                      </span>
                      <svg className="svg hidden">
                        <text x="25%" y="50%" dy=".35em" textAnchor="middle">
                          Charis
                        </text>
                      </svg>
                    </div>
                    <h1 className="text-5xl sm:text-5xl mt-2 font-mono">
                      VISUAL DESIGNER
                    </h1>
                  </div>
                </div>
                <p className="w-full md:max-w-lg  mt-6 text-xs text-center sm:text-left md:text-lg text-neutral-500 tracking-wide leading-7">
                  {" "}
                  And I know I can help your company create stunning visuals. As
                  someone who has worked iFn marketing and graphic design for
                  over a decade. And, I know what brands need to capture their
                  audiences' attention. With my powerful design skills and knack
                  for marketing, I have the right background for your brand's
                  needs.
                  <span className="hidden"> </span>
                </p>
                <div className="w-full mt-12 flex flex-col md:flex-row items-center justify-start gap-6">
                  <button className="uppercase w-full sm:w-fit px-4 sm:px-6 py-4 border-4 border-amber-300 bg-amber-400 transform transition hover:-translate-x-1 ease-in duration-100 font-bold  text-sm hover:text-red-500 rounded-xl shadow-xl">
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

                  <button className="w-full md:w-fit bg-priRed flex items-center justify-center gap-2 text-base sm:text-lg text-red-50 font-normal px-6 sm:px-6 py-4 rounded-2xl rounded-bl-2xl uppercase">
                    <span className="w-8 h-8 flex items-center justify-center mr-1   rounded-2xl bg-orange-500 shadow-2xl shadow-red-500">
                      <i className="fa fa-phone text-2xl text-neutral-800"></i>
                    </span>
                    09065017306
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:max-w-1/2  mx-auto hero-banner-img rounded-xl shadow relative">
            <div className="w-full h-fit bg-black bg-opacity-70">
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
