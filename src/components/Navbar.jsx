import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { SectionWrapper } from "../hoc";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const logo = "./src/assets/projects/k-cool.webp"
  return (
    <nav className={`p-${styles.paddingX} fixed top-0 bg-dark py-3 w-full  shadow-2xl z-20`}>
      <div className="w-full bg-darker max-w-7xl mx-auto flex items-center justify-between">
        <div className="rounded-xl">
          <Link
            to="/"
            className="flex items-center rounded-xl"
            onClick={() => {
              setActive("");
              windows.scrollTo(0, 0);
            }}
          >
           {/* <p className="text-5xl text-red-500 font-mono font-black">k</p> */}

           <img src={logo} alt="logoo" className="w-12 h-12 md:w-14 md:h-14 object-cover" />

           <h4 className="text-3xl text-secRed font-black tracking-wide">haris</h4>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="list-none flex gap-4 mt-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`
            "px-4 py-2 rounded-xl hover:underline hover:text-green-500 shadow-2xl hover:shadow text-sm  sm:text-base  font-semibold cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >

                <a
                  href={`#${link.id}`}
                  className="cursor-pointer p-1 rounded-2xl font-medium text-sm text-neutral-500"
                >
                  {link.title}
                  <span className="w-1 ml-1 h-1 rounded-full bg-lime-500 bg-opacity-70 animate-ping"></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="hidden sm:block uppercase px-4 py-2 bg-priRed hover:bg-secRed transform transition hover:-translate-x-0.5 ease-in duration-300 font-bold text-white text-sm hover:text-red-500 rounded-xl shadow-xl">
            <a
              href="https://api.whatsapp.com/send?phone=09065017306"
              className=""
            >
      
              <span className="text-xl">
                <i className="fa fa-glass  mr-1 " aria-hidden="true"></i>
              </span>
           HIRE ME
            </a>
          </button>
        </div>

        {/* Mobile Navigation Build */}
        <div className="lg:hidden flex flex-1 justify-end items-center ">
          <div className=" flex items-center justify-end text-2xl h-16 glass-effect shadow-2xl live-yellow p-2  rounded-full">
       
            {toggle ? <i className="fa fa-close"   onClick={() => {
                setToggle(!toggle);
              }}></i> : <i className="fa fa-bars"   onClick={() => {
                setToggle(!toggle);
              }}></i>}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-neutral-800  absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl custom-shadow  z-10`}
          >
            <ul className="list-none  flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
