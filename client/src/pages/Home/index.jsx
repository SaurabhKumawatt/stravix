import React from 'react'
import Header from '../../components/Header'
import HeroSection from './HeroSection'
import Features from './Features'
import CoursesBundles from './CoursesBundles'
import BundleDetails from './BundleDetails'
import TopCourses from './TopCourses'
import AchievementCTA from './AchievementCTA'
import TopCompanies from './TopCompanies'
import Testimonials from './Testimonials'
import PressMentions from './PressMentions'
import FAQSection from '../../components/FAQSection'
import Note from './Note'
import LearnerResponses from './LearnerResponses'
import Footer from '../../components/Footer'
import Founder from '../../components/Founder'
import HeroSectionNew from './HeroSectionNew'





function Home() {
  return (
    <div className='bg-color'>
      {/* <HeroSection /> */}
      <HeroSectionNew />
      <Features />
      <section id='courses' >

      <CoursesBundles />
      </section>
      <BundleDetails />
      {/* <TopCourses /> */}
      {/* <AchievementCTA /> */}
      {/* <TopCompanies /> */}
      <Testimonials />
      <Founder />
      {/* <PressMentions /> */}
      {/* <LearnerResponses /> */}
      <FAQSection />
      {/* <Note /> */}
      <Footer />
    </div>
  )
}

export default Home