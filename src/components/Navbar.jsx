import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { cLogo } from "../constants";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const logo = cLogo
  return (
    <nav className={`p-${styles.paddingX} fixed top-0 bg-priRed py-2 w-full z-10  shadow-2xl`}>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
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

           <img src={logo} alt="logoo" className="w-10 h-10 md:w-10 md:h-10 object-cover" />

           <h4 className="text-3xl text-white pl-1 font-black tracking-wide">haris</h4>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="list-none flex gap-4 mt-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`
            "px-4 py-2 rounded-xl glass-effect hover:shadow-inner text-xs  font-medium text-red-200 hover:font-black  cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >

                <a
                  href={`#${link.id}`}
                  className="cursor-pointer p-1 rounded-2xl  font-mono  font-semibold"
                >
                  {link.title}
                  <span className="w-1 ml-1 h-1 rounded-full bg-lime-500 bg-opacity-70 animate-ping"></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="hidden sm:block uppercase px-4 py-2 border border-orange-400 bg-white transform transition hover:-translate-y-1 ease-in duration-100 font-bold text-priRed text-sm hover:text-red-500 rounded-xl shadow-xl">
            <a
              href="https://api.whatsapp.com/send?phone=09065017306"
              className=""
            >
      
              <span className="text-xl">
                <i className="fa fa-glass  mr-1 " aria-hidden="true"></i>
              </span>
        TRY ME
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
