import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import nodejs from "../assets/nodejs.png";
import toolkit from "../assets/toolkit.png";

const Skills = () => {
  const links = [
    {
      id: 1,
      image: html,
      color: "shadow-orange-600",
      skillname: "HTML",
    },
    {
      id: 2,
      image: css,
      skillname: "CSS",
      color: "shadow-blue-600",
    },
    {
      id: 3,
      image: javascript,
      color: "shadow-yellow-600",
      skillname: "JAVASCRIPT",
    },
    {
      id: 4,
      image: react,
      color: "shadow-sky-600",
      skillname: "REACT",
    },
    {
      id: 5,
      image: tailwind,
      color: "shadow-cyan-600",
      skillname: "TAILWIND CSS",
    },
    {
      id: 6,
      image: nodejs,
      color: "shadow-green-600",
      skillname: "NODE JS",
    },
    {
      id: 7,
      image: express,
      color: "shadow-black",
      skillname: "EXPRESS JS",
    },
    {
      id: 8,
      image: mongo,
      color: "shadow-teal-900",
      skillname: "MONGO DB",
    },
    {
      id: 9,
      image: toolkit,
      color: "shadow-purple-600",
      skillname: "REDUX TOOLKIT",
    },
    {
      id: 10,
      image: github,
      color: "shadow-white",
      skillname: "GITHUB",
    },
  ];

  return (
    <div name="skills">
      <div className="min-h-screen flex-grow flex-shrink-0 bg-gradient-to-b from-slate-500 to-slate-800 mx-auto sm:p-32 ">
        <div className="max-w-screen-lg w-full h-full mx-auto ">
          <div className="flex flex-col items-start ">
            <p className="text-4xl font-semibold mt-2  border-b-4 border-b-gray-800 rounded-sm text-white">
              Skills
            </p>
            <p className="text-2xl mt-4 text-white">
              These are Technologies I've worked with
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  mt-5">
            {links.map(({ image, id, color, skillname }) => (
              <div
                className={` shadow-md ${color}  flex flex-col items-center rounded-lg hover:scale-105 duration-300  `}
                key={id}
              >
                <img src={image} alt="" className="h-32 w-32  " />
                <p className="text-center font-semibold text-white">
                  {skillname}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
