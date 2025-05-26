import React, { useRef } from 'react'
import CourseCard from '../../components/CourseCard';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";

const Courses = [
  {
    title: "Instagram Marketing",
    image: "/assets/images/instagram-marketing.png",
  },
  {
    title: "Digital Marketing Mastery",
    image: "/assets/images/instagram-marketing.png",
  },
  {
    title: "Option Trading",
    image: "/assets/images/instagram-marketing.png",
  },
  {
    title: "Data Analytics / Data Science",
    image: "/assets/images/instagram-marketing.png",
  },
];

function TopCourses() {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  
  return (
    <section className=" bg-white mx-auto pt-11 text-center md:text-left drop-shadow-xl">
      <div className="flex flex-col mx-auto px-15 py-5">
        <h2 className="text-3xl font-semibold mb-4 text-color1">Top Courses</h2>

        <div
          ref={scrollRef}
          className="flex  overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
          {Courses.map((course, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] snap-center"
            >
              <CourseCard 
              {...course}
               showArrow={index < Courses.length }
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse sm:flex-row md:flex-row justify-between items-center gap-4">
          <Link to="/courses" className="">
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg">
              View all Courses
            </button>
          </Link>

          <div className="flex gap-0.5">
            <button onClick={scrollLeft} className="w-10 h-10 text-accent">
              <Icon icon="iconoir:page-left-solid" width="fit" height="fit" />
            </button>
            <hr className="text-[#C8C8C8] bg-[#C8C8C8] w-[1px] h-10" />
            <button onClick={scrollRight} className="w-10 h-10 text-accent">
              <Icon icon="iconoir:page-right-solid" width="fit" height="fit" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopCourses