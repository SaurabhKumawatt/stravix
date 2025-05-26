import React from 'react'

function Note() {
  return (
    <section className="py-6 bg-colorhidden md:block ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-color font-semibold border border-secondary rounded-md p-4 text-sm md:text-base">
          <span className="">Note:- <br /> </span>
          Stravix is not liable for payments made outside our website for our course. 
          Please use our secure payment gateway on our website to avoid scams or fraudulent activities.
        </div>
      </div>
    </section>
  )
}

export default Note