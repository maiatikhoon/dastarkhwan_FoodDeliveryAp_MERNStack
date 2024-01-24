import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div>
        <section
        className="h-screen bg-center bg-no-repeat bg-cover bg-gradient-to-r from-green-700 to-yellow-100 font-poppins">
        <div className="flex items-center h-full lg:h-screen">
            <div className="justify-center max-w-6xl px-2 mx-auto text-center ">
                <div className="w-full p-4 bg-white lg:p-16 dark:bg-gray-700">
                    <h1 className="inline-block mb-8 font-bold text-gray-700 text-7xl lg:text-9xl dark:text-gray-300"> 404
                    </h1>
                    <h2 className="mb-6 text-2xl font-semibold text-gray-600 lg:text-4xl dark:text-gray-300">
                        Oops! Page not found</h2>
                    <p className="mb-8 text-xs text-gray-600 lg:text-xl dark:text-gray-300">
                        Sorry! The requested page not found, please type the correct address
                    </p>
                  
                    <div className="flex flex-wrap items-center justify-center">
                        <NavLink to="/"
                            className="px-8 py-4 text-xs font-medium text-gray-100 uppercase bg-green-500 rounded-full lg:text-base ">
                            Back to home
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Error
