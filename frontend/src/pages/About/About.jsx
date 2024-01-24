import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header"; 
import Footer from "../../components/Footer"  

function About() {
  return (
    <div>
       <div className='w-full pb-2 bg-gradient-to-r from-green-700 to-green-400 '>
            <Header/>
      </div>

      <section className="flex items-center bg-white lg:h-screen font-poppins ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="px-4 mb-10 md:text-center md:mb-20">
            <p className="mb-2 text-lg font-semibold text-black">About Us</p>
            <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
              <div className="flex-1 h-2 bg-green-300"></div>
              <div className="flex-1 h-2 bg-green-500"></div>
              <div className="flex-1 h-2 bg-green-300"></div>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
              <h2 className="mb-4 text-2xl font-bold text-black">
                Providing quality food at your doorstep!
              </h2>
              <p className="mb-4 text-base leading-7 text-black ">
                Experience the rich and delectable world of Dastarkhawn at your
                fingertips with the Dastarkhawn Food Delivery App! Indulge in
                the authentic flavors of India's favorite snacks, sweets, and
                savories, all conveniently delivered to your doorstep.
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-base text-black">
                  <span className="mr-3 text-green-500  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Rich quality food
                </li>
                <li className="flex items-center mb-4 text-base text-black">
                  <span className="mr-3 text-green-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Value for taste
                </li>
                <li className="flex items-center mb-4 text-base text-black">
                  <span className="mr-3 text-green-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Value and Variety
                </li>
                <li className="flex items-center mb-4 text-base text-black">
                  <span className="mr-3 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Quality food assurance
                </li>
              </ul>
              <NavLink
                to="/"
                className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
              >
                Learn more
              </NavLink>
            </div>

            <div>
              <img
                src="https://i.ytimg.com/vi/RWR6lvH5Xz0/maxresdefault.jpg"
                alt="Image description"
                width="500px"
                height="500px"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
