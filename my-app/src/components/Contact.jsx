import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex-grow flex-shrink-0 bg-gradient-to-b from-gray-600 to-slate-800 sm:p-32 p-5" name="contact">
      <div className=" h-full max-w-screen-lg mx-auto ">
        <div className="flex flex-col justify-center  items-start ">
          <p className="text-white text-4xl font-semibold border-b-2">
            Conatct
          </p>
          <p className="text-white mt-3">
            Submit the form below to get touch with em
          </p>
        </div>
        <div className="flex justify-center items-center mt-5">
          <form action="https://getform.io/f/1c7756fe-74d2-411b-88a5-7a815c28f0c8" method="POST" className="flex flex-col w-full sm:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 border focus:outline-none  mt-4 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 border focus:outline-none  mt-4 rounded-lg"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-3 border focus:outline-none  mt-4 rounded-lg"
            ></textarea>
            <button className="p-3 bg-gradient-to-l from-cyan-600 to-blue-500 font-semibold text-white rounded-lg hover:scale-105 duration-300 mt-4 ">
              let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
