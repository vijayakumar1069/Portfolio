import React from "react";
import in1 from "../assets/in-1.png";
import rent1 from "../assets/rent-1.png";

const Portfolio = () => {
  return (
    <div
      className="min-h-screen flex-grow bg-gradient-to-b from-gray-500 to-gray-900 mx-auto sm:p-32 flex-shrink-0 "
      name="portfolio"
    >
      <div className="max-w-screen-lg mx-auto w-full h-full  ">
        <div className="flex flex-col items-start">
          <p className="text-4xl font-semibold mt-2 p-2  border-b-4 border-b-gray-800 rounded-sm text-white">
            Portfolio
          </p>
          <p className="text-2xl mt-4 p-2 text-white">
            Check out some of my work right here{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  p-3 gap-12 mt-5 px-12   ">
          <div className="flex flex-col gap-5 p-3    shadow-lg shadow-black rounded-lg hover:scale-105 dura ">
            <img
              src={in1}
              alt="inventory_billing_App"
              className="h-64 w-full hover:scale-105 duration-300 rounded-lg "
            />
            <p className="text-white">
              Led the development of a comprehensive inventory billing app with
              features such as user-friendly interface, robust inventory
              management, and dynamic billing and invoicing capabilities.
              Implemented a secure customer database, enabling efficient client
              information management
            </p>

            <div className="sm:w-3/4">
              <div className="flex justify-center gap-x-32 mt-4 p-3">
                <button className="border p-3 bg-white text-black rounded-lg hover:scale-105 duration-300  font-medium">
                  <a
                    href="https://inventory-app-01.onrender.com"
                    target="_blank"
                    className=" h-64 w-full mt-4 "
                  >
                    Demo
                  </a>
                </button>
                <button className="border p-3 bg-white text-black rounded-lg hover:scale-105 duration-300  font-medium">
                  <a
                    href="https://github.com/vijayakumar1069/Inventory_Billing_App.git"
                    target="_blank"
                    className="text-black"
                  >
                    code
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-3 border-[#33186B]   shadow-lg shadow-black rounded-lg hover:scale-105 dura ">
            <img
              src={rent1}
              alt=""
              className="h-64 w-full hover:scale-105 duration-300 rounded-lg mt-4 "
            />
            <p className="text-white">
              {" "}
              Vijay's Estate is a leading real estate agency that specializes in
              helping clients buy, sell, and rent properties in the most
              desirable neighborhoods. Our team of experienced agents is
              dedicated to providing exceptional service and making the buying
              and selling process as smooth as possible.
            </p>
            <div className="sm:w-3/4">
              <div className="flex justify-center gap-x-32 mt-4 p-3">
                <button className="border p-3 bg-white text-black rounded-lg hover:scale-105 duration-300  font-medium">
                  <a
                    href="https://mern-estate-qipo.onrender.com"
                    target="_blank"
                  >
                    Demo
                  </a>
                </button>
                <button className="border p-3 bg-white text-black rounded-lg hover:scale-105 duration-300  font-medium">
                  <a
                    href="https://github.com/vijayakumar1069/new_Mern_Estate.git"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
