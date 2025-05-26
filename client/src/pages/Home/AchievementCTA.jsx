import React from 'react'

function AchievementCTA() {
  return (
    
    <section className="py-10 bg-color">
      <h2 className="xs:text-2xl text-xl md:text-3xl font-semibold text-color1 mb-4 leading-snug text-center md:hidden">
          Celebrate Your Success
        </h2>
    <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="xs:text-2xl text-xl md:text-3xl hidden md:block font-semibold text-color1 mb-4 leading-snug">
          Celebrate Your Success
        </h2>
        <p className="text-color1 text-base mb-6 max-w-md">
          Boost your credibility and showcase your new skills with a certificate that proves your progress. Your achievement deserves to shine.
        </p>
        <button className="bg-secondary text-color font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
          Share My Achievement
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/assets/images/certificate.png"
          alt="Certificate"
          className="w-20 md:w-60 h-auto"
        />
      </div>
    </div>
  </section>
    
  )
}

export default AchievementCTA