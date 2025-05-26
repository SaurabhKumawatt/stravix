import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';

const courses = [
  { title: "Instagram Marketing", image: "/assets/images/instagram-marketing.png" },
  { title: "Canva", image: "/assets/images/instagram-marketing.png" },
  { title: "Communication Skills", image: "/assets/images/instagram-marketing.png" },
  { title: "Instagram Reels Mastery", image: "/assets/images/instagram-marketing.png" },
  { title: "Adobe Premier Pro", image: "/assets/images/instagram-marketing.png" },
  { title: "Adobe Photoshop", image: "/assets/images/instagram-marketing.png" },
  { title: "Digital Marketing Mastery", image: "/assets/images/instagram-marketing.png" },
  { title: "Google Ads", image: "/assets/images/instagram-marketing.png" },
  { title: "Facebook Ads", image: "/assets/images/instagram-marketing.png" },
  { title: "LinkedIn Marketing", image: "/assets/images/instagram-marketing.png" },
  { title: "Microsoft Ads", image: "/assets/images/instagram-marketing.png" },
  { title: "Youtube Marketing", image: "/assets/images/instagram-marketing.png" },
  { title: "Email Marketing", image: "/assets/images/instagram-marketing.png" },
  { title: "Stock Market", image: "/assets/images/instagram-marketing.png" },
  { title: "Option Trading", image: "/assets/images/instagram-marketing.png" },
  { title: "Power BI", image: "/assets/images/instagram-marketing.png" },
  { title: "Machine Learning", image: "/assets/images/instagram-marketing.png" },
  { title: "Python", image: "/assets/images/instagram-marketing.png" },
  { title: "CFD Aerospace", image: "/assets/images/instagram-marketing.png" },
  { title: "Data Science/Data Analytics", image: "/assets/images/instagram-marketing.png" },
];

function CoursesPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="min-h-screen bg-color px-4 py-10">
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* LEFT: Course Grid */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {courses.map((course, i) => {
              const slug = course.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]+/g, "");
              return (
                <CourseCard
                  key={i}
                  title={course.title}
                  image={course.image}
                  ctaLabel="Enroll Now"
                  onClick={() => navigate(`/courses/${slug}`)}
                />
              );
            })}
          </div>

          {/* RIGHT: Sidebar */}
          <div className="w-full lg:w-1/4">
            <RightSidebar />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CoursesPage;
