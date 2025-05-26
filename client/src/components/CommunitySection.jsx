import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

function CommunitySection() {
  return (
    <section className="p-4 sm:px-8 md:px-20 lg:px-20 my-12 bg-white">
      <div className="">
        <h3 className="text-xl text-center sm:text-left font-semibold">StraviX Learners’ Community</h3>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-between gap-10'>
        <p className="mt-2 text-gray-700 max-w-xl">
          By being part of this community, students gain access to valuable discussions, study resources, and real-time support, making the learning process more interactive and engaging.
        </p>
        <Icon icon="material-symbols:crowdsource" className="text-primary sm:text-9xl md:text-[13rem] mt-6 lg:mt-0" />
      </div>
    </section>

  )
}

export default CommunitySection