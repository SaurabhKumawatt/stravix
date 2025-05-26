import React, { useState } from 'react'
import FAQ from './FAQ';
  

function RightSidebar() {
    const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
    <div className="w-full lg:w-80 shrink-0 space-y-10 pb-2">
      {/* Recent Blog */}
      <div>
        <h3 className="font-bold text-lg mb-3">Recent Blogs</h3>
        <a href="#" className="text-[#0163F8] text-sm hover:underline block mb-2">
          Affiliate Marketing: Retirement Plan for All
        </a>
        <img
          src="/assets/images/blog.png"
          alt="Blog"
          className="w-full rounded-lg"
        />
      </div>
      </div>
      <FAQ />
    </>
  )
}

export default RightSidebar