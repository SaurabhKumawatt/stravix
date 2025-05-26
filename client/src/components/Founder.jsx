import React from 'react'
import { useNavigate } from 'react-router-dom';


function Founder() {
    const navigate = useNavigate();
    return (
        <section className="bg-white px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Left: Founder Image + Name */}
                <div className="relative w-full md:w-1/2">
                    <img
                        src="/assets/images/aakash-gupta-founder.png"
                        alt="Mr. Aakash Gupta"
                        className="w-[90%] md:w-[80%] max-w-3xl mx-auto object-contain"
                    />
                    {/* <img
                        src="/assets/images/aakash-gupta.png"
                        alt="Mr. Aakash Gupta"
                        className="w-[65%] md:w-[50%] max-w-sm mx-auto object-contain"
                    /> */}
                    <div className="flex justify-center items-center absolute w-60 md:w-2xs  md:h-15 bottom-4  md:bottom-10 left-1/2 md:left-2/3 -translate-x-1/2 bg-black text-primary1 px-6 py-2 -skew-x-20 text-xl md:text-2xl font-semibold shadow-[-6px_6px_5px_0px_#C7A055]">
                        Mr. Aakash Gupta
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-end mb-10 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-15">Meet Our Founder</h2>
                    <p className="text-gray-700 text-[15px] md:text-[20px] md:text-base mb-4 md:mb-12">
                        Aakash Gupta, an aspiring successful sales coach with over 7 years of experience transforming potential into performance.
                        What started as a passion for connecting with people has now become my life’s purpose—to coach, inspire, and guide others toward clarity, confidence, and growth.
                        StraviX is the reflection of his belief—<br /> <strong>Education isn’t just about information—it’s about transformation.</strong>
                    </p>
                    <button
                        onClick={() => navigate(`/about`)}
                        className="bg-[#C89F5D] hover:bg-[#b58946] text-white font-medium px-6 py-3 rounded-md transition duration-300">
                        Know More About Us
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Founder