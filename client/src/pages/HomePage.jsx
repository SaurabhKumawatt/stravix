import React from "react";

const Home = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center px-24 py-12  bg-hero flex">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0052cc] leading-tight">
            UPSKILL TODAY<br />LEAD TOMORROW
          </h1>
          <p className="text-[#252525] mt-4 mb-6 max-w-md text-base">
            Take the next step in your career journey—unlock new opportunities and achieve greater success...
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-[#0163F8] text-white px-6 py-2 rounded font-medium">
              Explore Courses
            </button>
            <button className="border border-[#0163F8] text-[#0163F8] px-6 py-2 rounded font-medium">
              Know About Us
            </button>
          </div>

          <div className="flex items-center mt-6 gap-2">
            <img src="/src/assets/images/student-avatar.png" alt="User" className="w-10 h-10 rounded-full" />
            <p className="text-sm text-gray-600">14 Lakhs+ Learners Enrolled</p>
          </div>
        </div>
        {/* hero section right side */}
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            <img src="/src/assets/icons/fluent_hat-graduation-main.svg" className="rounded-[60px]" />

            {/* Overlay SVG lines or shape with absolute positioning */}
            <img src="/src/assets/bg/grid.svg" className="absolute top-0 left-0 w-full h-full pointer-events-none" />

            {/* Grid background - can use a bg-image or CSS grid background */}
            {/* <div className="absolute inset-0 -z-10 bg-[url('/src/assets/bg/grid.svg')] opacity-30"></div> */}

            {/* 50+ Courses Tag */}
            <div className="absolute bottom-12 right-0.5 bg-green-600 text-white px-2 py-1 text-xs rounded rotate-[-33deg]">
              50+ Courses
            </div>
          </div>
        </div>

      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Feature Box 1 */}
            <div className="bg-[#F9F9F9] rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.08)] p-6 flex flex-col items-center justify-center">
              <img src="/src/assets/icons/lifetime.svg" alt="Lifetime Access" className="w-12 h-12 mb-4" />
              <p className="text-[#252525] font-medium text-base">Lifetime Access</p>
            </div>

            {/* Feature Box 2 */}
            <div className="bg-[#F9F9F9] rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.08)] p-6 flex flex-col items-center justify-center">
              <img src="/src/assets/icons/trainer.svg" alt="Best Trainers" className="w-12 h-12 mb-4" />
              <p className="text-[#252525] font-medium text-base">Best Trainers</p>
            </div>

            {/* Feature Box 3 */}
            <div className="bg-[#F9F9F9] rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.08)] p-6 flex flex-col items-center justify-center">
              <img src="/src/assets/icons/community.svg" alt="Community Support" className="w-12 h-12 mb-4" />
              <p className="text-[#252525] font-medium text-base">Community</p>
            </div>

            {/* Feature Box 4 */}
            <div className="bg-[#F9F9F9] rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.08)] p-6 flex flex-col items-center justify-center">
              <img src="/src/assets/icons/certificate.svg" alt="Certificate" className="w-12 h-12 mb-4" />
              <p className="text-[#252525] font-medium text-base">Certificate</p>
            </div>
          </div>
        </div>
      </section>


      {/* Highlights */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center py-10 px-4 bg-gray-100">
        {["Lifetime Access", "Best Trainings", "Community", "Certification", "Bundle Courses"].map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </section>

      {/* Bundle Courses */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">Bundle Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Personal Branding", price: 599 },
            { title: "Soft Skills Mastery", price: 1299 },
            { title: "Digital Marketing", price: 2359 },
            { title: "Online Marketing", price: 4130 },
          ].map((course, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-500 line-through">₹{Math.floor(course.price * 1.05)}</p>
              <p className="text-lg font-bold text-blue-600">₹{course.price}</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">Enroll Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Top Courses */}
      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">Top Courses</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["Instagram Marketing", "Digital Marketing Mastery", "Option Trading", "Data Analytics"].map((course, index) => (
            <li key={index} className="bg-white shadow rounded p-4">{course}</li>
          ))}
        </ul>
      </section>

      {/* Success Stories */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Where Our Learners Work</h2>
        <p className="text-center text-gray-600 mb-10">Celebrate your success with certification & global recognition.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Ayush Tureha", course: "Option Trading" },
            { name: "Muskan Chawla", course: "Communication Skills" },
            { name: "Hemlata Chauhan", course: "Digital Marketing" },
            { name: "Pankaj Kumar", course: "Adobe Premier Pro" },
          ].map((user, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
              <p className="font-bold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.course}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-4 text-center">
        <p className="text-lg font-bold">Subscribe to our Newsletter</p>
        <input
          type="email"
          placeholder="Your Email Address"
          className="mt-4 px-4 py-2 rounded text-black"
        />
        <div className="mt-4 text-sm text-gray-400">
          <p>All rights reserved © 2024 | Millionaire Track Pvt. Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

// export default Home;
