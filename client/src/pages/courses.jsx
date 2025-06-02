import React from 'react';

const allCourses = [
  {
    id: 1,
    title: 'Personal Branding',
    description: 'Master techniques to create a strong personal brand.',
    image: 'https://i.ibb.co/3h3Mwq9/lead-gen.png',
  },
  {
    id: 2,
    title: 'Soft Skills Mastery',
    description: 'Learn essential soft skills to advance your career.',
    image: 'https://i.ibb.co/2Ndq1V6/conversion.png',
  },
];

const userCourses = [
  { courseId: 1, progress: 75 },
  { courseId: 2, progress: 20 }, 
];

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 text-gray-400 group-hover:text-[#F8C900] transition-colors"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Stravix = () => {
  const purchasedCourses = userCourses
    .map(({ courseId, progress }) => {
      const course = allCourses.find((c) => c.id === courseId);
      return course ? { ...course, progress } : null;
    })
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans">
      <header className="bg-white shadow-sm py-5 sticky top-0 z-30 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-5">
          <h1 className="text-2xl font-semibold text-gray-900 select-none tracking-wide">
            My Courses
          </h1>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-5 py-8 space-y-6">
        {purchasedCourses.length === 0 ? (
          <p className="text-center text-gray-400 text-base font-medium">
            You have not purchased any courses yet.
          </p>
        ) : (
          purchasedCourses.map(({ id, title, description, progress, image }) => (
            <div
              key={id}
              className="group relative flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow-sm px-5 py-4 cursor-pointer transition-shadow hover:shadow-md"
              tabIndex={0}
              aria-label={`${title} course, progress ${progress} percent`}
              onClick={() => alert(`Continuing course: ${title}`)}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden mr-4">
                <img
                  src={image}
                  alt={`${title} course thumbnail`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Title & Description */}
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-gray-900 truncate">{title}</h2>
                <p className="mt-1 text-gray-600 text-sm line-clamp-2">{description}</p>
              </div>

              {/* Progress Indicator & Continue Button */}
              <div className="w-1/4 flex flex-col items-end">
                <div className="flex items-center w-full space-x-2">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-[#F8C900] h-3 rounded-full transition-all duration-400"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 min-w-[2.5rem] text-right">
                    {progress}%
                  </span>
                </div>
                <button
                  className="mt-2 bg-[#F8C900] text-gray-900 text-sm font-semibold py-1 px-4 rounded hover:bg-[#C7A055] transition-colors"
                  aria-label={`Continue ${title} course`}
                >
                  {progress === 100 ? 'Review Course' : 'Continue Learning'}
                </button>
              </div>

              {/* Arrow Icon */}
              <div className="absolute right-4 top-4 pointer-events-none hidden sm:block">
                <ArrowIcon />
              </div>
            </div>
          ))
        )}
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        &copy; 2024 Stravix All rights reserved.
      </footer>
    </div>
  );
};

export default Stravix;
