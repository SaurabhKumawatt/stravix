import React, { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";


const CourseContentSection = ({ modules }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    // Detect screen size to determine module count per slide
    const getModulesPerSlide = () => (window.innerWidth < 768 ? 1 : 4);

    const [modulesPerSlide, setModulesPerSlide] = useState(getModulesPerSlide());
    const totalSlides = Math.ceil(modules.length / modulesPerSlide);

    useEffect(() => {
        const updateDeviceType = () => {
            const isNowMobile = window.innerWidth < 768;
            setIsMobile(isNowMobile);
            setModulesPerSlide(getModulesPerSlide());
        };

        updateDeviceType();
        window.addEventListener("resize", updateDeviceType);
        return () => window.removeEventListener("resize", updateDeviceType);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: index * sliderRef.current.offsetWidth,
                behavior: "smooth",
            });
        }
    };

    const handleScroll = () => {
        if (!sliderRef.current) return;
        const scrollLeft = sliderRef.current.scrollLeft;
        const width = sliderRef.current.offsetWidth;
        const index = Math.round(scrollLeft / width);
        setCurrentSlide(index);
    };

    const slides = [];
    for (let i = 0; i < modules.length; i += modulesPerSlide) {
        slides.push(modules.slice(i, i + modulesPerSlide));
    }
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
        }
    };



    return (
        <div className=" flex flex-col md:flex-row justify-between items-center w-full  px-8 md:px-12 py-12 gap-6">
            {/* Left: Heading */}
            <div className="md:w-min">
                <h2 className="text-blue-600 text-3xl md:text-5xl font-bold mb-1">Course Content</h2>
                <p className="text-sm text-gray-600">
                    Total Modules: {modules.length} | 40hrs
                </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-32 w-[2px] bg-gray-300 mx-4" />

            {/* Right: Slider */}
            <div className="flex-1 overflow-hidden  w-[100%] md:w-min flex justify-center md:flex-col">

                <div className="relative sm:static w-min md:w-full">
                    {/* Arrows for mobile only */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-13 sm:hidden z-10">
                        <button
                            onClick={scrollLeft}
                            className=" w-10 h-10 flex items-center justify-center rounded-full"
                        >
                            <Icon icon="iconoir:page-left-solid" className="text-accent text-6xl" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -right-13 sm:hidden z-10">
                        <button
                            onClick={scrollRight}
                            className="w-10 h-10 flex items-center justify-center rounded-full"
                        >
                            <Icon icon="iconoir:page-right-solid" className="text-accent text-6xl"  />
                        </button>
                    </div>

                    {/* Slider */}
                    <div
                        ref={sliderRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
                    >
                        {slides.map((slide, idx) => (
                            <div
                                key={idx}
                                className={`grid ${isMobile
                                        ? "grid-cols-1"
                                        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
                                    } gap-6 w-7 px-1 snap-start shrink-0 drop-shadow`}
                                style={{ minWidth: "100%" }}
                            >
                                {slide.map((mod, i) => (
                                    <div
                                        key={i}
                                        className="bg-yellow-400 p-6 rounded shadow-md flex flex-col text-center"
                                    >
                                        <h3 className="font-bold text-2xl md:text-3xl mb-2 text-white">
                                            {mod.title}
                                        </h3>
                                        <p className="text-sm md:text-xl text-black">{mod.desc}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>


                {/* Pagination Dots */}
                <div className="flex items-center justify-center mt-4 gap-2">
                    {/* Dots for sm and up */}
                    <div className="hidden sm:flex gap-2">
                        {Array.from({ length: totalSlides }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === i ? "bg-yellow-400" : "bg-gray-300"
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseContentSection;
