import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { Icon } from '@iconify/react/dist/iconify.js';
import CoursesBundles from './CoursesBundles';



function HeroSection() {


  const navigate = useNavigate();

  const handleScrollToCourses = () => {
    const section = document.getElementById("courses");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className='bg-hero'>

        <Header />
        <section className="px-2 py-10 md:py-20 xs:px-6 sm:px-24 sm:py-12 flex ">
          <div className="text-center md:text-left flex-1/2 relative w-fit flex flex-col justify-center items-center md:items-start">
            <h1 className="text-3xl text-left xs:text-[28px] sm:text-5xl sm:m-auto md:m-0 md:text-[2.7rem] lg:text-6xl font-semibold text-color leading-tight">
              WHERE SKILLS<br />MEET SUCCESS
            </h1>
            {/* <img src="/assets/icons/cap.svg" alt='cap' className='absolute w-16 -top-8 right-9 xs:right-8 sm:w-18 sm:-top-7 sm:right-14 md:top-6 md:right-12 lg:top-2 lg:right-[18%] lg:w-24 drop-shadow-2xl' /> */}
            <div className="relative w-fit flex md:hidden">
              <img src="/assets/bg/grid.svg" className="absolute m-auto w-[100%] h-full object-contain pointer-events-none" />


              <div className="relative h-min w-full max-w-md mx-auto">
                <img src="/assets/icons/fluent_hat-graduation-main.svg" className="rounded-[60px] object-cover w-max" />
                <img src='/assets/icons/bar-chartsvg.svg' className='absolute top-[3%] right-[3%]' />
                <img src='/assets/images/book-main.png' className='absolute bottom-[0%] left-[0%]' />
                {/* 50+ Courses Tag */}
                <div className="absolute bottom-[5%] right-[0] bg-primary text-white px-2 py-1 text-xs rounded rotate-[-33deg]">
                  50+ Courses
                </div>
              </div>
            </div>
            <p className="text-[#252525] mt-4 mb-6 max-w-md text-base">
              Take the next step in your career journey—unlock new opportunities and achieve greater success with our expertly crafted skill-based courses.
            </p>
            <div className="flex flex-nowrap justify-center  md:justify-start gap-4">
              <button
                // onClick={() => navigate(`/bundle-courses`)}
                onClick={handleScrollToCourses}
                className="bg-cta w-min whitespace-nowrap text-white px-5 py-2 rounded font-medium">
                Explore Courses
              </button>
              <button
                onClick={() => navigate(`/about`)}
                className="border border-color w-min whitespace-nowrap text-color px-6 py-2 rounded font-bold">
                Know About Us
              </button>
            </div>
            <div className="flex items-center justify-center mt-6 mx-1.5 space-x-3">
              {/* Avatar Stack */}
              <div className="flex pt-0.5 -space-x-6">
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
              <p className="text-[0.9rem] sm:text-xl text-color">1K+ Learners Enrolled</p>
            </div>
          </div>
          {/* hero section right side */}
          <div className="relative flex-1/2 sm:hidden hidden md:block">
            <img src="/assets/bg/grid.svg" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />


            <div className="relative h-min w-full max-w-md mx-auto">
              <img src="/assets/icons/fluent_hat-graduation-main.svg" className="rounded-[60px]" />
              <Icon icon="entypo:graduation-cap" className="text-primary md:text-6xl mt-6 lg:mt-0 absolute md:top-[5%] lg:top-[12%] md:right-[5%] lg:right-[-10%]" />
              <img src='/assets/images/book-main.png' className='w-18 absolute  md:left-[1%] bottom-[0%] lg:left-[-15%]' />
              {/* 50+ Courses Tag */}
              <div className="absolute bottom-5 right-0.5 lg:-right-20 bg-primary text-white px-2 py-1 text-xs rounded rotate-[-33deg]">
                50+ Courses
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default HeroSection