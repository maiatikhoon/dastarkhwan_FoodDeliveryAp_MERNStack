
import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full mt-8 colorFooter pt-10"> 

      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row"> 

              <div className="w-full px-4 md:w-1/2 lg:px-0">
                    <h1 className="max-w-sm text-3xl font-bold">Get in touch! </h1> 

                    <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
                      <input
                        className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600" type="email"
                        placeholder="Email"
                      ></input>
                      <button
                        type="button"
                        className="ml-4 rounded-md bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 "
                      >
                        Submit
                      </button>
                    </form>
              </div> 

        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3"> 

              <div className="mb-8 lg:mb-0">
                  <p className="mb-6 text-md font-semibold text-gray-700 ">COMPANY</p>
                  <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                    <li>About us</li>
                    <li>Company History</li>
                    <li>Our Team</li>
                    <li>Our Vision</li>
                    <li>Partner in Flavour</li>
                  </ul>
                </div>

              <div className="mb-8 lg:mb-0">
                <p className="mb-6 text-md font-semibold text-gray-700 ">FOOD CATEGORY </p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>Savory Staples</li>
                  <li>Healthy Noshes</li>
                  <li>Comfort Classics</li>
                  <li>Fresh & Fit</li>
                  <li>Mouthwatering Meats</li>
                </ul>
              </div>

              <div className="mb-8 lg:mb-0">
                <p className="mb-6 text-md font-semibold text-gray-700 ">CONTACT US</p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>Reach Out & Taste</li>
                  <li>Flavorful Feedback</li>
                  <li>Our Team</li>
                  <li>Get in Touch with Tastes</li>
                  <li>Flavor Inquiries</li>
                </ul>
              </div>
        </div>
      </div> 

      <hr className="my-4" /> 

      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0 mb-5"> 

          <div className="inline-flex items-center">
            <span className="text-5xl footerHeading">Dastarkhawn</span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm font-medium text-gray-500">© md atique. </p>
          </div> 

      </div>
    </footer>
  )
}
