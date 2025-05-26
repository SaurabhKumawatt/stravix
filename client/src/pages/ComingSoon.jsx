import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ComingSoon() {
    return (
        <>
        <Header />
            <div className="flex items-center justify-center min-h-screen bg-white px-4">
                <div className="text-center flex flex-col gap-2">
                    {/* COMING */}
                    <div className="bg-color1 inline-block px-6 py-2 rounded-md relative text-white text-3xl md:text-8xl shadow-2xl font-extrabold tracking-wide mb-4">
                        COMING
                        <span className="absolute w-42 h-1 bg-color1 -top-3 hidden md:block right-38 transform -translate-y-2"></span>
                        <span className="absolute w-42 h-2 bg-color1 -top-1 -right-2 md:right-14 transform -translate-y-2"></span>
                        <span className="absolute w-28 h-2 bg-color1 -bottom-1 -left-5 transform translate-y-2"></span>
                    </div>

                    {/* SOON */}
                    <div className="bg-primary relative inline-block px-6 py-2 rounded-md text-white text-3xl md:text-5xl font-extrabold tracking-wide mb-6 shadow-md">
                        SOON
                        <span className="absolute w-42 h-1 bg-primary -top-0 -left-5 transform -translate-y-2"></span>
                        <span className="absolute w-42 h-1 bg-primary -bottom-1 -right-5 transform translate-y-2"></span>
                    </div>

                    {/* Subtext */}
                    <p className="text-4xl text-color font-medium mt-2 tracking-wider">
                        STAY TUNED!
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ComingSoon