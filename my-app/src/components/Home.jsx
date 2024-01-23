import React from "react";
import personalimage from "../assets/personalimage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-slate-500 p-5" name="home">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row px-4  ">
        <div className="flex flex-col  justify-center h-full ">
          <h1 className="text-4xl md:text-7xl font-bold text-white ">I'm a Mern Stack Developer</h1>
          <p className="text-gray-500 max-w-md mt-2">
            With a foundation in mechanical engineering, I am fueled by a
            profound love for coding and a strong desire to transition into
            Information Technology, particularly as a Full Stack Developer. The
            allure of being involved in both front-end and back-end development
          resonates with my holistic approach to problem-solving.    I find joy
            in crafting seamless user experiences through intuitive interfaces
            while simultaneously delving into the intricacies of server-side
            logic and databases.
          </p>
          <div className="">
            <Link to="portfolio" smooth duration={700} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500  to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300"><MdKeyboardArrowRight size={25} className="ml-1"/></span>
            </Link >
          </div>
        </div>
        <div className="mt-4 md:mt-0">
            <img src={personalimage} alt="my profile" className=" w-2/3 rounded-2xl mb-3 mx-auto md:w-full" />
        </div>

      </div>
    </div>
  );
};

export default Home;
