import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BundleCoursesPage from "../pages/BundleCoursesPage";
import CoursesPage from "../pages/CoursesPage";
import BundleDetailsPage from "../pages/BundleDetailsPage";
import CourseDetailPage from "../pages/CourseDetailPage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import RefundPolicy from "../pages/RefundPolicy";
import Disclaimer from "../pages/Disclaimer";
import TransactionIdPage from "../pages/TransactionIdPage";
import MyCourses from "../pages/MyCourses";
import CoursePlayer from "../pages/CoursePlayer";
import ComingSoon from "../pages/ComingSoon";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup/:slug" element={<Register />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/bundle-courses" element={<BundleCoursesPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/bundle-courses/:slug" element={<BundleDetailsPage />} />
      <Route path="/courses/:slug" element={<CourseDetailPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/transaction-id" element={<TransactionIdPage />} />
      <Route path="/my-courses" element={<MyCourses />} />
      <Route path="/course/:slug/player" element={<CoursePlayer />} />
      <Route path="/coming-soon" element={<ComingSoon />} />



    </Routes>
  );
};

export default AppRoutes;
