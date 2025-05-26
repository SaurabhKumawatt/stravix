import React from 'react';
import { Icon } from "@iconify/react";
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import TestimonialSection from '../pages/Home/Testimonials';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import CourseContentSection from '../components/CourseContentSection';



const courseData = {
  "instagram-marketing": {
    title: "Instagram Marketing",
    thumbnail: "/assets/images/video-thumbnail.png",
    instructor: "/assets/images/course-instructor.png",
    description: "Master the art of Digital Marketing and build the marketing strategies that actually make a difference...",
    features: {
      "Lifetime Access": "/assets/icons/Lifetime-access.svg",
      "Certification": "/assets/icons/Lifetime-access.svg",
      "8+Hours Course": "/assets/icons/Lifetime-access.svg",
      "Flexible Timing": "/assets/icons/Lifetime-access.svg",
    },
    rating: 4,
    benefits: ["SEO", "Email Marketing", "Social Media Marketing", "Meta Ads", "Google Ads", "Wordpress", "Website Creation"],
    designations: [
      "SEO Analyst", "Digital Marketer", "E-Commerce Marketing Manager", "PPC Executive", "Web Analytics Manager",
      "Brand Strategist", "Chief Marketing Officer (CMO)", "Content Marketer", "SEO Specialist", "Performance Marketing"
    ],
    testimonials: [
      {
        name: "Ayush Tureha",
        course: "Option Trading",
        content: "He now navigates the intricate realm of options trading with confidence..."
      },
      {
        name: "Muskan Chauhla",
        course: "Communication Skills",
        content: "She expressed how she is now able to communicate with confidence..."
      }
    ],
    modules: [
      { title: "Module 1", desc: "Introduction of digital marketing" },
      { title: "Module 2", desc: "Marketing Fundamentals & Concepts" },
      { title: "Module 3", desc: "Website Creation" },
      { title: "Module 4", desc: "Instagram Ads" },
      { title: "Module 5", desc: "Introduction of digital marketing" },
      { title: "Module 6", desc: "Marketing Fundamentals & Concepts" },
      { title: "Module 7", desc: "Website Creation" },
      { title: "Module 8", desc: "Instagram Ads" },
    ],
  },
  "canva": {
    title: "Canva",
    thumbnail: "/assets/images/video-thumbnail.png",
    instructor: "/assets/images/course-instructor.png",
    description: "Learn professional design skills using Canva — one of the most powerful tools for marketers, creators, and entrepreneurs.",
    features: {
      "Lifetime Access": "/assets/icons/Lifetime-access.svg",
      "Certification": "/assets/icons/Lifetime-access.svg",
      "8+Hours Course": "/assets/icons/Lifetime-access.svg",
      "Flexible Timing": "/assets/icons/Lifetime-access.svg",
    },
    rating: 4,
    benefits: ["Design Basics", "Branding", "Typography", "Templates", "Marketing Graphics"],
    designations: ["Graphic Designer", "Social Media Manager", "Visual Marketer", "Presentation Specialist"],
    testimonials: [],
    modules: [
    { title: "Module 1", desc: "Introduction of digital marketing" },
    { title: "Module 2", desc: "Marketing Fundamentals & Concepts" },
    { title: "Module 3", desc: "Website Creation" },
    { title: "Module 4", desc: "Instagram Ads" },
  ],
  },
  "digital-marketing-mastery": {
    title: "Digital Marketing",
    thumbnail: "/assets/images/video-thumbnail.png",
    instructor: "/assets/images/course-instructor.png",
    description: "Master the art of Digital Marketing and build the marketing strategies that actually make a difference. Learn SEO, Google Ads, Meta Ads, Email Marketing, etc. in this single bundle. Use data to make the most efficient campaign to create an impact. Start your digital career journey today!",
    features: {
      "Lifetime Access": "/assets/icons/Lifetime-access.svg",
      "Certification": "/assets/icons/Lifetime-access.svg",
      "8+Hours Course": "/assets/icons/Lifetime-access.svg",
      "Flexible Timing": "/assets/icons/Lifetime-access.svg",
    },
    rating: 4,
    benefits: ["SEO", "Email Marketing", "Social Media Marketing", "Meta Ads", "Google Ads", "Wordpress", "Website Creation"],
    designations: [
      "SEO Analyst", "Digital Marketer", "E-Commerce Marketing Manager", "PPC Executive", "Web Analytics Manager",
      "Brand Strategist", "Chief Marketing Officer (CMO)", "Content Marketer", "SEO Specialist", "Performance Marketing"
    ],
    testimonials: [
      {
        name: "Ayush Tureha",
        course: "Option Trading",
        content: "He now navigates the intricate realm of options trading with confidence..."
      },
      {
        name: "Muskan Chauhla",
        course: "Communication Skills",
        content: "She expressed how she is now able to communicate with confidence..."
      }
    ],
    modules: [
    { title: "Module 1", desc: "Introduction of digital marketing" },
    { title: "Module 2", desc: "Marketing Fundamentals & Concepts" },
    { title: "Module 3", desc: "Website Creation" },
    { title: "Module 4", desc: "Instagram Ads" },
  ],
  },
};

const CourseDetailPage = () => {
  const { slug } = useParams();
  const data = courseData[slug];

  if (!data) return <div className="text-center mt-20 text-xl">Course not found.</div>;

  return (
    <>
      <Header />
      <section >
        {/* HEADER */}
        <div className="flex flex-col pt-10 bg-color lg:flex-row px-2 md:px-20 justify-between items-start gap-10 pb-6 md:pb-30">
          <div className="flex-1">
            <div className='flex flex-col items-center md:items-start'>
            <h1 className="text-2xl md:text-3xl font-bold text-primary uppercase flex-1  pb-3 md:pb-0">{data.title}</h1>
            <img src={data.thumbnail} alt="error aaya?" className='block md:hidden w-[90vw]' />
            <p className="text-sm text-gray-700 mt-2 px-2 md:px-0">{data.description}</p>
            </div>
            <div className="flex flex-wrap flex-col gap-2 mt-4">

              <div className='flex gap-2 h-10 md:h-16'>
                <span className="inline-flex w-45 md:w-60 gap-3 items-center bg-primary text-white px-4 py-1 rounded-lg text-sm md:text-lg font-medium">
                  <img src="/assets/icons/lifetime.svg" alt="Certificate" className="w-7 h-7 md:w-12 md:h-12" />
                  Lifetime Access
                </span>

                <span className="inline-flex w-45 md:w-60 gap-3 items-center bg-primary text-white px-4 py-1 rounded-lg text-sm md:text-lg font-medium">
                  <img src="/assets/icons/certification.svg" alt="Certificate" className="w-7 h-7 md:w-12 md:h-12" />
                  Certification
                </span>
              </div>

              <div className='flex gap-2 h-10 md:h-16'>
                <span className="inline-flex w-45 md:w-60 gap-2.5 items-center bg-primary text-white px-4 pr-1 rounded-lg text-sm md:text-lg font-medium">
                  <Icon icon="hugeicons:time-04" className="text-[28px] md:text-[50px] text-white" />
                  8+ Hours Course
                </span>

                <span className="inline-flex w-45 md:w-60 gap-2.5 items-center bg-primary text-white px-4 py-1 rounded-lg text-sm md:text-lg font-medium">
                  <Icon icon="game-icons:duration" className="text-[28px] md:text-[50px] text-white" />
                  Flexible Timing
                </span>
              </div>
            </div>

            <div className='flex md:flex-col justify-between items-center md:items-start px-2 md:px-0'>
            <div className="text-secondary text-xl mt-5">
              {"★".repeat(data.rating)}
              {"☆".repeat(5 - data.rating)}
              <p className="text-sm text-gray-600">{data.rating} out of 5</p>
            </div>
            <button className="mt-4 bg-secondary px-6 py-2 font-semibold rounded-md md:w-60">Enroll Now</button>
            </div>
          </div>
          <div className="w-full lg:w-[420px] hidden md:block">
            <div className="bg-gray-300  rounded-xl">
              <img src={data.thumbnail} alt="error aaya?" className='' />
            </div>
            <button className="bg-secondary w-full mt-4 py-2 font-semibold rounded-sm">Watch Now</button>
          </div>
        </div>
        <CourseContentSection modules={data.modules} />
        <div className="flex flex-col-reverse md:flex-row md:bg-[url('/assets/images/course-page-bg.jpg')] bg-fit items-center pb-6 md:pb-0 md:px-20">
          <div className='md:w-1/2 space-y-10'>
            {/* BENEFITS */}
            <div className='px-6'>
              <h2 className="text-2xl font-semibold mb-2">How This Course Will Benefit You</h2>
              <div className="flex flex-wrap gap-3">
                {data.benefits.map((item, i) => (
                  <span key={i} className="bg-primary text-white px-3 py-1 rounded text-lg">{item}</span>
                ))}
              </div>
            </div>

            {/* DESIGNATIONS */}
            <div className='px-6 '>
              <h2 className="text-2xl font-semibold mb-2">Global Designations</h2>
              <div className="flex flex-wrap gap-3">
                {data.designations.map((item, i) => (
                  <span key={i} className="bg-primary text-white px-3 py-1 rounded text-lg">{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className='px-6 md:px-0 md:w-1/2' >
            <img src={data.instructor} alt="Instructor" className='w-min object-contain' />
          </div>
        </div>

        {/* TESTIMONIAL SECTION */}
        {data.testimonials.length > 0 && (
          <TestimonialSection testimonials={data.testimonials} />
        )}

        {/* FAQ */}
        <FAQSection />
      </section>
      <Footer />
    </>
  );
};

export default CourseDetailPage;
