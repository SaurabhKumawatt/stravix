import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import BundleInfoSection from "../components/BundleInfoSection";
import LearningPoints from "../components/LearningPoints";
import CommunitySection from "../components/CommunitySection";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";

// Sample static data, ideally this can come from an API later
const bundleData = {
  "soft-skills-mastery": {
    title: "Soft Skills Mastery",
    price: 999,
    description: `Unlock your potential with our Soft Skills Mastery Course! Enhance communication, leadership, emotional intelligence, and teamwork to boost career growth and personal success. Start mastering essential skills today!`,
    learners: "1k+ Learners Enrolled",
    image1: "/assets/images/soft-skills-thumbnail.png",
    image2: "/assets/images/soft-skills-mastery.png",
    relatedCourses: [
      { title: "Communication", image: "/assets/images/soft-skill-course.jpg" },
    ],
    points: [
      "Boost Communication: Sharpen both verbal and non-verbal communication.",
      "Grow Emotional Intelligence: Build stronger relationships through better emotional awareness.",
      "Strengthen Leadership: Lead, motivate, and inspire teams effectively.",
      "Master Conflict Resolution: Navigate and resolve conflicts with ease.",
      "Enhance Teamwork: Collaborate efficiently and foster a positive team dynamic.",
      "Increase Adaptability: Stay resilient and adaptable in any situation.",
      "Improve Time Management: Prioritize tasks for better productivity.",
      "Sharpen Critical Thinking: Make smarter decisions and solve problems confidently.",
    ],
  },
  "sales-mastery": {
    title: "Sales Mastery",
    price: 1999,
    description:
    "Boost your sales expertise with our Sales Mastery Course! Learn proven strategies, effective persuasion techniques, and relationship-building skills to close deals and drive consistent growth. Start mastering sales today!",
    learners: "1k+ Learners Enrolled",
    image1: "/assets/images/sales-mastery-thumbnail.png",
    image2: "/assets/images/sales-mastery.png",
    relatedCourses: [
      { title: "Sales Funnel", image: "/assets/images/sales-mastery-course.jpg" },
    ],
    points: [
      "Sharpen Sales Techniques: Master proven strategies to close more deals.",
      "Boost Persuasion Skills: Influence and persuade customers with confidence.",
      "Build Strong Relationships: Develop trust and rapport with clients for long-term success.",
      "Increase Conversion Rates: Turn leads into loyal customers using effective approaches.",
      "Refine Negotiation Skills: Handle objections and negotiate win-win deals effortlessly.",
      "Enhance Communication: Speak with clarity and impact in every sales conversation.",
      "Master Time Management: Prioritize tasks to maximize sales productivity.",
      "Accelerate Career Growth: Unlock opportunities and advance in the competitive sales field.",
    ],
  },
  "finance-mastery": {
    title: "Finance Mastery",
    price: 2999,
    description:
      "Master your financial future with our Finance Mastery Course! Gain expertise in budgeting, investing, and financial planning to achieve long-term success and independence. Start your journey to financial freedom now!",
    learners: "1k+ Learners Enrolled",
    image1: "/assets/images/finance-mastery-thumbnail.png",
    image2: "/assets/images/finance-mastery.png",
    relatedCourses: [
      { title: "Stock Market", image: "/assets/images/finance-mastery-course.jpg" },
    ],
    points: [
      "Understand Financial Basics: Build a solid foundation in budgeting, saving, and investing.",
      "Improve Money Management: Learn to manage personal and business finances effectively.",
      "Master Investment Strategies: Gain the knowledge to make informed investment decisions.",
      "Plan for the Future: Create long-term financial plans for retirement and wealth-building.",
      "Increase Financial Confidence: Navigate financial decisions with clarity and confidence.",
      "Optimize Debt Management: Learn strategies to manage and reduce debt smartly.",
      "Grow Financial Literacy: Understand key concepts like taxes, insurance, and credit.",
      "Achieve Financial Independence: Develop the skills to reach your financial goals faster.",
    ],
  },
};

const BundleDetailsPage = () => {
  const { slug } = useParams();
  const data = bundleData[slug];

  if (!data) return <div className="text-center mt-20 text-xl">Course not found.</div>;

  return (
    <>
      <Header />
      <main className=" py-10">
        <BundleInfoSection {...data} courses={data.relatedCourses} />
        <LearningPoints points={data.points} image2={data.image2} />
        <CommunitySection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default BundleDetailsPage;
