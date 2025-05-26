import React from 'react'

function Features() {
  return (
    <div>
      <section className="px-24 py-16 bg-hero-bottom">
        <div className="max-w-7xl px-6 pb-16">
          <div className="flex flex-wrap gap-5 justify-around  text-center">
            {/* Feature Box 1 */}
            <div className='flex flex-col gap-3 justify-center items-center'>
              <div className="bg-white w-[100px] h-[100px] rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.08)] p-3 flex flex-col gap items-center justify-center">
                <img src="/assets/icons/Lifetime-access.svg" alt="Lifetime Access" className="w-16 h-16" />
              </div>
              <p className="text-color1 font-medium text-base">Lifetime Access</p>
            </div>

            {/* Feature Box 2 */}
            <div className='flex flex-col gap-3 justify-center items-center'>
              <div className="bg-white w-[100px] h-[100px] rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.08)] p-6 flex flex-col items-center justify-center">
                <img src="/assets/icons/training.svg" alt="Best Trainers" className="w-12 h-12" />
              </div>
              <p className="text-color1 font-medium text-base">Best Trainers</p>
            </div>

            {/* Feature Box 3 */}
            <div className='flex flex-col gap-3 justify-center items-center'>
              <div className="bg-white w-[100px] h-[100px] rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.08)] p-6 flex flex-col items-center justify-center">
                <img src="/assets/icons/community.svg" alt="Community Support" className="w-12 h-12" />
              </div>
              <p className="text-color1 font-medium text-base">Community</p>
            </div>

            {/* Feature Box 4 */}
            <div className='flex flex-col gap-3 justify-center items-center'>
              <div className="bg-white w-[100px] h-[100px] rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.08)] p-6 flex flex-col items-center justify-center">
                <img src="/assets/icons/certificate.svg" alt="Certificate" className="w-12 h-12" />
              </div>
              <p className="text-color1 font-medium text-base">Certificate</p>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  )
}

export default Features