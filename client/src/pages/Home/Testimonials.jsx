import React, { useEffect, useRef } from 'react'
import StudentCard from '../../components/StudentCard'


const students = [
  {
    name: "Lucky Kachhawa",
    course: "Webinar on Sales Funnel",
    image: "/assets/students/lucky.png",
    message:
      "The Sales Funnel Webinar was a game changer! It broke everything down in simple steps. The mentor explained everything with ease.",
  },
  {
    name: "Himanshi Deshwal",
    course: "Webinar on Importance of Leadership",
    image: "/assets/students/himanshi.png",
    message:
      "The session made me understand the importance of clear communication, empathy, and adaptability in leadership roles.",
  },
  {
    name: "Shreya Pathak",
    course: "Time Management",
    image: "/assets/students/shreya.png",
    message:
      "The Webinar was incredibly insightful! The practical tips on prioritizing tasks and staying focused helped me become way more productive.",
  },
  {
    name: "Abhishek Khatri",
    course: "Webinar on Communication Skills",
    image: "/assets/students/abhishek.png",
    message:
      "I learned how important clear and confident communication is, not just for work, but in everyday life. The tips on active listening, body language, and structuring messages effectively were incredibly useful.",
  },
];


function Testimonials() {


  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const isMobileOrTablet = window.innerWidth < 1024; // below 'lg'

    if (!container || !isMobileOrTablet) return;

    const totalClones = 2;
    const interval = setInterval(() => {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });

      const isAtEnd = container.scrollLeft >= (cardWidth * (students.length + totalClones - 1));
      if (isAtEnd) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: 'auto' });
        }, 500);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-color1 md:bg-[url('/assets/bg/grid-testimonial.svg')] bg-fit text-white py-10 relative overflow-hidden md:px-6">
      <img
        src="/assets/icons/quote-icon.svg"
        alt="Quote"
        className="absolute hidden md:block  md:top-[14%] right-10 w-16 md:w-24 opacity-90"
      />

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-primary1 mb-14 md:text-left">
          Trusted by 1K+ Students
        </h2>

        <div
          ref={scrollRef}
          className="flex flex-col lg:grid lg:grid-cols-2 xs:flex-row overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory gap-10 w-auto px-24 md:px-0">
          {students.map((student, index) => (
            <StudentCard key={index} {...student} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials