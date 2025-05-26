import React from 'react'

function StudentCard({ image, name, course, message }) {
  return (
    <div className="flex-shrink-0 md:gap-5 md:flex md:flex-row w-[280px] md:w-full snap-center p-4 rounded-xl text-left text-white">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mx-auto drop-shadow-2xl"
      />
      <div className="md:flex md:flex-col">

      <h3 className="font-semibold text-lg text-center mt-3 md:mt-0 md:text-left">{name}</h3>
      <p className="font-medium mt-3 text-sm text-center md:text-left">{course}</p>
      <p className="text-sm  text-primary1 text-center md:text-left">“{message}”</p>
      </div>
    </div>
  )
}

export default StudentCard