import React from "react";

const About = () => {
  return (
    <div
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white p-4"
      name="about"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-14">
          Hello, I'm Vijayakumar, a passionate individual with a Bachelor's
          degree from Arunai Engineering College and a solid 2-year background
          in the automobile industry. Fueled by my love for coding and a desire
          for career growth, I recently transitioned into Full Stack
          Development. Armed with comprehensive skills gained from the <span className="text-pink-800"> GUVI Full
          Stack Program </span>, I specialize in the MERN stack.
        </p>
        <br />
        <p className="text-xl">
          My journey in coding led me to develop real-world projects like an 
          <span className="text-pink-800 ml-2">Inventory Billing app and a Real Estate application</span>
          , showcasing my
          proficiency in MERN technologies. With a strong foundation in
          engineering and a newfound expertise in Full Stack Development, I am
          dedicated to creating innovative solutions and contributing to the
          ever-evolving tech landscape.
        </p>
        <br />
        <p className="text-xl">
          Driven by a relentless pursuit of excellence, I am now actively
          seeking opportunities to apply my skills, bring ideas to life, and
          make a meaningful impact in the world of technology.
        </p>
      </div>
    </div>
  );
};

export default About;
