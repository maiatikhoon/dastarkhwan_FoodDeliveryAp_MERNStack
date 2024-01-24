
import React from 'react'

export default function FoodCard({imgTitle, imgSrc , imgDesc }) {
  return (
    <div className="flex max-w-5xl flex-col items-center rounded-md border md:flex-row foodCard">
      <div className="h-full w-full md:h-[300px] md:w-[1400px]">
        <img
          src={imgSrc}
          alt="Laptop"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
             {imgTitle}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
             {imgDesc}
          </p>
          
        
        </div>
      </div>
    </div>
  )
}
