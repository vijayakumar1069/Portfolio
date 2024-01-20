import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [nav,setNav]=useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "conatct",
    },
  ];
  return (
    <div className="flex justify-between items-center px-3 text-white bg-black w-full h-20 fixed ">
      <div className="">
        <h1 className="text-6xl font-signature ml-4">vijayakumar </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="capitalize text-slate-500 cursor-pointer font-medium hover:scale-105 duration-200 px-4 "
          >
            {link}
          </li>
        ))}
      </ul>
      <div onClick={()=>setNav(!nav)} className="cursor-pointer text-gray-500 pr-5 z-10 md:hidden">
        {nav? <FaTimes size={30} /> :<FaBars size={30} />}
      </div>
     {nav && ( <ul className="flex flex-col justify-center items-center absolute font-medium top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-400 text-white ">
        {links.map(({id,link})=>(
            <li key={id} className="text-3xl px-3 py-6 capitalize ">{link}</li>
        ))}
      </ul>)}

    </div>
  );
};
