import React from 'react'

function LearningPoints({ image2, points }) {
  return (
    <section className="bg-[#F5F6F7]  rounded-lg p-4 sm:px-8 lg:px-20 flex flex-col md:flex-row items-center justify-center drop-shadow-2xl gap-2.5">

      <img src={ image2 } alt="" className='w-80'/>
      <div className=''>
        <h3 className="text-xl font-semibold mb-4">How This Bundle Will Help You</h3>
        <ul className="space-y-2 text-gray-700 list-none">
          {points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2">
              ✅ <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default LearningPoints