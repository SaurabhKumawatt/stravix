import React, { useRef } from "react";
import BundleCard from "../../components/BundleCard";
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";

const bundles = [
  // {
  //   title: "Soft Skills Mastery",
  //   image: "/assets/images/soft-skill-course.jpg",
  //   price: 999,
  //   originalPrice: 1500,
  // },
  {
    title: "Sales & Mindset Booster",
    image: "/assets/images/finance-mastery-course.jpg",
    price: 2999,
    originalPrice: 3600,
  },
  {
    title: "The Affiliate Launchpad",
    image: "/assets/images/sales-mastery-course.jpg",
    price: 1999,
    originalPrice: 2600,
  },
];

const CoursesBundles = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  return (
    <section id="courses" className="bg-color xs:text-center sm:text-center md:text-left" >
      <div className="flex flex-col mx-auto px-15 py-5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Courses</h2>

        {/* Cards Grid */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory items-stretch ">
          {bundles.map((bundle, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] snap-center flex items-stretch"
            >
              <BundleCard {...bundle} />
            </div>
          ))}
        </div>

        {/* View All Button + Pagination */}
        <div className="flex flex-col-reverse sm:flex-row md:flex-row justify-between items-center gap-4">
          <Link to="/bundle-courses" className="">
            <button className="bg-primary hidden text-white px-8 py-3 rounded-xl font-bold shadow-lg">
              View all Bundles
            </button>
          </Link>
          <div className="flex gap-0.5 md:hidden">
            <button onClick={scrollLeft} className="w-10 h-10 text-secondary">
              <Icon icon="iconoir:page-left-solid" width="fit" height="fit" />
            </button>
            <hr className="text-[#C8C8C8] bg-[#C8C8C8] w-[1px] h-10" />
            <button onClick={scrollRight} className="w-10 h-10 text-secondary ">
              <Icon icon="iconoir:page-right-solid" width="fit" height="fit" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CoursesBundles;
