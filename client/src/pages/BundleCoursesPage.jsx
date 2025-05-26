import React from 'react'
import Header from '../components/Header';
import BundleCard from '../components/BundleCard'
import Footer from '../components/Footer';
import RightSidebar from '../components/RightSidebar';


const courses = [
    {
        title: "Soft Skills Mastery",
        price: 999,
        originalPrice: 1500,
        image: "/assets/images/soft-skill-course.jpg",
    },
    {
        title: "Sales Mastery",
        price: 1999,
        originalPrice: 2600,
        image: "/assets/images/sales-mastery-course.jpg",
    },
    {
        title: "Finance Mastery",
        price: 2999,
        originalPrice: 3600,
        image: "/assets/images/finance-mastery-course.jpg",
    },
];

function BundleCoursesPage() {
    return (
        <>
            <Header />
            <section className="min-h-screen px-6 py-10 bg-color">
            <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Bundle Courses</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {courses.map((course, index) => (
                            <BundleCard key={index} {...course} />
                        ))}
                    </div>
                </div>
            <div className="w-full lg:w-1/4">
                <RightSidebar />
            </div>
            </div>
            </section>
            <Footer />
        </>
    )
}

export default BundleCoursesPage