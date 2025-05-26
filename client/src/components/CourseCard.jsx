import React from 'react';
import { useNavigate } from 'react-router-dom';

function CourseCard({
  image,
  title,
  showArrow = false,
  ctaLabel,           // Optional CTA text (e.g., "Enroll Now")
  onClick = () => { }, // Optional onClick handler
}) {

  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl p-4 w-auto max-w-xs">
      <div className="flex flex-col items-center w-auto px-auto mx-auto">
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl object-contain shadow-md"
          // onClick={() => navigate(`/courses/${title.toLowerCase().replace(/\s+/g, '-')}`)}
        />
        <div className='flex justify-center items-center gap-2'>

          <p
            // onClick={() => navigate(`/courses/${title.toLowerCase().replace(/\s+/g, '-')}`)}
            className=" text-black font-medium text-center mt-2"
          >{title}</p>


          {showArrow && (
            <div
              onClick={() => navigate(`/courses/${title.toLowerCase().replace(/\s+/g, '-')}`)}
              className="text-[#0163F8] text-2xl cursor-pointer font-bold hidden sm:inline-block pointer">
              →
            </div>
          )}
        </div>
        {ctaLabel && (
            <button
              onClick={onClick}
              className="mt-2 bg-[#F8C900] text-black font-semibold text-sm px-4 py-2 rounded-full hover:opacity-90 transition w-full"
            >
              {ctaLabel}
            </button>
          )}
      </div>
    </div>
  );
}

export default CourseCard;
