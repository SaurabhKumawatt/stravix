import React, { useState } from "react";
import { Link } from "react-router-dom";
import CoursesDropdown from "./CoursesDropdown";
import CoursesBundles from "../pages/Home/CoursesBundles";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleScrollToCourses = () => {
    const section = document.getElementById("courses");
    if(section) {
      section.scrollIntoView({behavior: "smooth"});
    } 
  }

  return (
    <nav className="py-7 relative z-50 hidden lg:block md:block sm:hidden">
      <div className="max-w-[1280px] mx-auto px-4 flex justify-between items-center text-2xl h-15">
        {/* Logo */}

        <Link to="/" className="text-primary font-bold">
          {/* Stravix */}
          <img src="/assets/logos/logo.png" alt="Stravix" className="w-45" />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 relative">
          <Link to="/" className="text-color">Home</Link>

          {/* Courses with Dropdown */}
          <div
            className="relative w-min"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button
                // onClick={() => navigate(`/bundle-courses`)}
                onClick={handleScrollToCourses}
                className="">
                Courses
              </button>
            {/* <Link to="#courses" className="text-color">Courses</Link> */}
            {showDropdown && (

              <div className="relative flex justify-center">
                <CoursesDropdown />
              </div>

            )}
          </div>


          <Link to="/about" className="text-color">About Us</Link>
          {/* <Link to="/blogs" className="text-color">Blogs</Link> */}
          <Link to="/contact" className="text-color">Contact Us</Link>
        </div>

        {/* Enroll/Login */}
        <div className="flex gap-5 items-center text-[20px] font-[600]">
          <Link to="https://workshop.stravix.in/" className="text-color bg-secondary p-[10px] rounded-full">Enroll Now</Link>
          <Link to="/coming-soon" className="text-color">Sign in</Link>
          {/* <Link to="/signup" className="text-color bg-secondary p-[10px] rounded-full">Enroll Now</Link>
          <Link to="/login" className="text-color">Login</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
