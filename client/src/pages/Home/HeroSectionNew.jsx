import React from 'react'
import { FaPlay } from "react-icons/fa";
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

function HeroSectionNew() {

    const navigate = useNavigate();

    const handleScrollToCourses = () => {
        const section = document.getElementById("courses");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <>
            <section className="w-full bg-hero">
                <Header />
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-12">

                    {/* Left Content */}
                    <div className="flex-1 space-y-6">
                        {/* <p className="text-sm font-medium text-orange-500">🎉 30 Days free trial</p> */}

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
                            WHERE SKILLS<br />
                            MEET <span className="text-white bg-color1 px-2 py-1 rounded-md">SUCCESS</span>
                        </h1>

                        <p className="text-color text-lg max-w-lg">
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

                        <div className="flex items-center md:justify-start justify-center mt-6 mx-1.5 space-x-3">
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

                    {/* Right Image */}
                    <div className="flex-1 relative">
                        {/* Orange Box as container */}
                        <div className="relative w-full max-w-sm mx-auto bg-orange-100 rounded-3xl rotate-[-3deg] overflow-hidden z-0">

                            {/* Image inside orange box */}
                            <img
                                src="/assets/images/student-avtar.png"
                                alt="Student"
                                className="rounded-3xl w-full object-cover relative z-10 rotate-[3deg]"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default HeroSectionNew