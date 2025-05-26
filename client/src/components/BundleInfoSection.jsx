import React from 'react'
import CourseCard from "./CourseCard";
import { useNavigate } from 'react-router-dom';

function BundleInfoSection({ title, description, learners, image1, courses, price }) {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-10 p-4 sm:px-8 lg:px-20 m-0">

      <div className="flex-1 flex flex-col items-center md:items-start">
        <h1 className="text-2xl font-bold text-primary text-center md:text-left">{title}</h1>
        <div className="w-full md:w-[350px] block md:hidden">
          <img src={image1} alt={title} className="w-full h-auto object-contain" />
        </div>
        <p className="text-gray-700 mt-3 max-w-xl">{description}</p>
        <button
          onClick={() => navigate(`/signup/${title.toLowerCase().replace(/\s+/g, '-')}`)}
          className="bg-cta text-white px-6 py-2 rounded-md w-52 mt-6 font-semibold flex gap-1">
          Enroll Now
          <span>
            @ {price}
          </span>

        </button>
        <div className="md:flex items-center mt-6 mx-1.5 space-x-3 hidden">
          {/* Avatar Stack */}
          <div className="flex pt-0.5 -space-x-7">
            <img
              className="w-9 h-9 z-30 rounded-full drop-shadow-2xl"
              src="/assets/students/abhishek.png"
              alt="User 1"
            />
            <img
              className="w-9 h-9 z-20 rounded-full drop-shadow-2xl"
              src="/assets/students/shreya.png"
              alt="User 2"
            />
            <img
              className="w-9 h-9 z-10 rounded-full drop-shadow-2xl"
              src="/assets/students/lucky.png"
              alt="User 3"
            />
            <img
              className="w-9 h-9 rounded-full drop-shadow-2xl"
              src="/assets/students/himanshi.png"
              alt="User 1"
            />
          </div>

          {/* Text */}
          <p className="text-[0.9rem] text-sm text-gray-600">{learners}</p>
        </div>
        <div>

          <div className="flex gap-6 flex-nowrap w-full md:w-[70%] lg:w-[50%]">
            {courses.map((course, i) => (
              <CourseCard key={i} {...course} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-[350px] hidden md:block">
        <img src={image1} alt={title} className="w-full h-auto object-contain" />
      </div>


    </section>
  )
}

export default BundleInfoSection