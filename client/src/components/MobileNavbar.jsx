import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import CoursesBundles from "../pages/Home/CoursesBundles";


const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const handleScrollToCourses = () => {
        const section = document.getElementById("courses");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="lg:hidden md:hidden block py-4 px-4">
            <div className="flex justify-between items-center h-12">
                {/* Logo */}
                <Link to="/">
                    <img src="/assets/logos/logo.png" alt="Logo" className="w-37" />
                </Link>
                {/* <Link to="/" className="text-primary font-bold">
                    Stravix
                </Link> */}

                <div className="flex gap-2">
                    {/* User profile */}
                    {location.pathname !== "/login" && (
                        <Link to="/coming-soon" className="text-primary text-3xl">
                            {/* <Link to="/login" className="text-primary text-3xl"> */}
                            <Icon icon="ix:user-profile-filled" className="text-[28px]" />
                        </Link>
                    )}

                    {/* Hamburger Icon */}
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <Icon icon="charm:cross" className="text-[28px] text-primary" />
                        ) : (

                            <Icon icon="material-symbols:menu" className="text-[28px] text-primary" />

                        )}
                    </button>
                </div>
            </div>



            {/* Fullscreen Menu Overlay */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-primary z-50 p-6 pt-10 text-center text-white flex flex-col items-center gap-6">
                    {/* Close Button */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-4 right-4 text-white text-3xl"
                    >
                        <Icon icon="charm:cross" className="text-[28px]" />
                    </button>

                    <Icon icon="ix:user-profile-filled" className="text-7xl" />


                    <Link
                        to="https://workshop.stravix.in/"
                        // to="/signup"
                        className="bg-yellow-400 !text-black font-semibold px-6 py-2 rounded-full text-[20px]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Enroll Now
                    </Link>

                    <Link
                        // to="/login"
                        to="/coming-soon"
                        className="underline !text-white font-semibold text-[20px]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Sign in
                    </Link>

                    <hr className="w-[100vw] border-t border-white" />

                    <nav className="space-y-4 text-[20px] font-semibold flex flex-col">
                        <Link to="/" className="!text-white" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link 
                        // to="/bundle-courses" 
                        className="!text-white"
                            onClick={() => {
                                setMenuOpen(false);
                                handleScrollToCourses();
                            }}
                        >Courses</Link>
                        <Link to="/about" className="!text-white" onClick={() => setMenuOpen(false)}>About Us</Link>
                        {/* <Link to="/blogs" className="!text-white" onClick={() => setMenuOpen(false)}>Blogs</Link> */}
                        <Link to="/contact" className="!text-white" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default MobileNavbar;