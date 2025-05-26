import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import { Icon } from '@iconify/react/dist/iconify.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams } from "react-router-dom";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  confirmEmail: yup
  .string()
  .oneOf([yup.ref("email")], "Emails do not match")
  .required("Confirm Email is required"),
  state: yup.string().required("State is required"),
  dob: yup.date().max(new Date(), "DOB cannot be in the future").required("DOB is required"),
  mobile: yup
  .string()
  .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
  .required("Mobile number is required"),
  password: yup
  .string()
  .min(6, "Password must be at least 6 characters")
  .matches(/^\S+$/, "No spaces allowed")
  .required("Password is required"),
  referralCode: yup.string().notRequired(),
  terms: yup.bool().oneOf([true], "You must accept terms & conditions"),
});

function Register() {
  const { slug } = useParams(); 
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    localStorage.setItem("stravix-temp-registration", JSON.stringify({
      ...data,
      selectedCourse,
    }));

    navigate("/transaction-id");
  };
  const [selectedCourse, setSelectedCourse] = useState(slug || "soft-skills-mastery");
  const courses = [
    {
      id: "soft-skills-mastery",
      name: "Soft Skill Mastery",
      price: 999,
      originalPrice: 1500,
      image: "/assets/images/soft-skill-course.jpg",
      rating: 4,
    },
    {
      id: "sales-mastery",
      name: "Sales Mastery",
      price: 1999,
      originalPrice: 2600,
      image: "/assets/images/sales-mastery-course.jpg",
      rating: 4,
    },
    {
      id: "finance-mastery",
      name: "Finance Mastery",
      price: 2999,
      originalPrice: 3600,
      image: "/assets/images/finance-mastery-course.jpg",
      rating: 4,
    },
  ];

  const allIndianRegions = [
    "Andaman and Nicobar Islands",
    "Andra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadar and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadeep",
    "Madya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Pondicherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttaranchal",
    "West Bengal",
  ].sort((a, b) => a.localeCompare(b));



  return (
    <>
      <Header />
      <section className="min-h-screen bg-color py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left: Course Selection */}
          <div className="lg:w-1/2 bg-white pt-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4 text-center">Your Course</h3>
            {courses
              .filter((c) => c.id === selectedCourse)
              .map((course) => (
                <label key={course.id} className="mb-6 flex justify-center items-start">
                  <input
                    type="radio"
                    checked
                    className="mr-2"
                    readOnly
                  />
                  <div className="flex flex-col items-center">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="rounded-md w-64 object-cover"
                    />
                    <div className='flex items-start gap-3 mt-3'>
                      <div>
                        <p className="font-medium ">{course.name}</p>
                        <div className="text-secondary text-sm">
                          {"★".repeat(course.rating)}
                          {"☆".repeat(5 - course.rating)}
                        </div>
                      </div>
                      <div className='flex gap-1 items-center'>
                        <p className="text-black font-semibold">₹{course.price}</p>
                        <p className="text-sm text-gray-500 line-through">₹{course.originalPrice}</p>
                      </div>
                    </div>
                  </div>
                </label>
              ))}

            <div className='bg-[#EDF4FF] px-6 pb-6'>
              <h4 className="text-md font-semibold mb-2">Other Courses</h4>
              <div className="flex gap-4 flex-wrap">
                {courses
                  .filter((c) => c.id !== selectedCourse)
                  .map((course) => (
                    <label key={course.id} className="cursor-pointer flex justify-center items-start flex-col md:flex-row">
                      <input
                        type="radio"
                        name="course"
                        value={course.id}
                        checked={selectedCourse === course.id}
                        onChange={() => setSelectedCourse(course.id)}
                        className="mr-2 mt-2"
                      />
                      <div className="p-2 rounded-md w-32 text-center">
                        <img
                          src={course.image}
                          alt={course.name}
                          className="rounded-md w-full h-20 object-cover shadow-lg"
                        />
                        <p className="text-xs mt-1">{course.name}</p>
                        <p className="text-xs text-gray-500 line-through">₹{course.originalPrice}</p>
                        <p className="text-sm font-medium">₹{course.price}</p>
                      </div>
                    </label>
                  ))}
              </div>
            </div>
          </div>

          {/* Right: Enrollment Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-1/2 bg-white p-6 rounded-xl shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block mb-1 text-sm font-medium">Full Name as per Aadhar</label>
                <input {...register("fullName")} className="input" />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
              </div>

              {/* Username */}
              <div>
                <label className="block mb-1 text-sm font-medium">Username</label>
                <input {...register("username")} className="input" />
                {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-sm font-medium">Email Address</label>
                <input {...register("email")} className="input" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              {/* Confirm Email */}
              <div>
                <label className="block mb-1 text-sm font-medium">Confirm Email Address</label>
                <input {...register("confirmEmail")} className="input" />
                {errors.confirmEmail && (
                  <p className="text-red-500 text-sm">{errors.confirmEmail.message}</p>
                )}
              </div>

              {/* State */}
              <div>
                <label className="block mb-1 text-sm font-medium">Select State</label>
                <select {...register("state")} className="input">
                  <option value="">Select State</option>
                  {allIndianRegions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
                {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block mb-1 text-sm font-medium">Date of Birth</label>
                <DatePicker
                  className="input"
                  selected={watch("dob")}
                  onChange={(date) => setValue("dob", date)}
                  placeholderText="Select date"
                  dateFormat="MM/dd/yyyy"
                  showMonthDropdown
                  showYearDropdown
                  maxDate={new Date()}
                  dropdownMode="select"
                />
                {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block mb-1 text-sm font-medium">Mobile Number</label>
                <input {...register("mobile")} className="input" />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block mb-1 text-sm font-medium">Password</label>
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  className="input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-gray-500 text-lg"
                >
                  <Icon icon={showPassword ? "ooui:eye-closed" : "ooui:eye"} />
                </button>
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>
            </div>

            {/* Referral Code */}
            {/* <div className="mt-4">
              <label className="block mb-1 text-sm font-medium">Referral Code</label>
              <input {...register("referralCode")} className="input" />
            </div> */}

            {/* Terms and Conditions */}
            <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" {...register("terms")} className="w-4 h-4" />
              <p className="text-sm">
                I agree with{" "}
                <a href="/terms-and-conditions" className="text-primary underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/refund-policy" className="text-primary underline">
                  Refund Policy
                </a>
              </p>
            </div>
            {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-white font-semibold mt-6 w-full py-3 rounded-full hover:opacity-90 transition"
            >
              Enroll Now
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register