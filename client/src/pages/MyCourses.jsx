// src/pages/MyCourses.jsx
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import DashboardNavbar from "../components/DashboardNavbar";

const MyCourses = () => {
  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("stravix-auth-token");

        const [myRes, allRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/api/user/my-courses`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`${import.meta.env.VITE_API_URL}/api/courses/all`)
        ]);

        setCourses(myRes.data); // enrolled
        setAllCourses(allRes.data); // all

      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    };

    if (user) fetchData();
  }, [user]);

  useEffect(() => {
    const fetchMyCourses = async () => {
      try {
        const token = localStorage.getItem("stravix-auth-token");
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/my-courses`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(res.data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    };
    if (user) fetchMyCourses();
  }, [user]);

  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    const disableInspect = (event) => {
      if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'C' || event.key === 'J'))) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableInspect);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableInspect);
    };
  }, []);

  return (
    <>
      <DashboardNavbar />
      <div className="flex min-h-screen">

        <Sidebar />

        <main className="flex-1 p-6">
          <h1 className="text-xl font-semibold mb-6">My Courses</h1>

          <div className="grid grid-cols-1 gap-6">
            {courses.map((course) => (
              <div
                key={course._id}
                className="flex items-center bg-white rounded-xl shadow-md p-4 w-max gap-2 flex-col"
              >
                <img
                  src={course.thumbnail || "/default-thumbnail.jpg"}
                  alt={course.title}
                  className="w-32 h-24 rounded-lg object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-md mb-2">{course.title}</h3>
                  <div className="bg-gray-200 h-2 rounded">
                    <div className="bg-accent h-2 rounded w-[40%]"></div> {/* Dummy 40% progress */}
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/course/${course.slug}/player`)}
                  className="ml-4 bg-secondary text-black font-semibold px-4 py-2 rounded-full">
                  Continue Learning
                </button>
              </div>
            ))}
          </div>

          {allCourses.length > 0 && (
            <>
              <h2 className="text-lg font-semibold mt-12 mb-4">Explore More Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCourses
                  .filter(course => !courses.some(enrolled => enrolled._id === course._id))
                  .map(course => (
                    <div key={course._id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start">
                      <img
                        src={course.thumbnail || "/default-thumbnail.jpg"}
                        alt={course.title}
                        className="w-full h-36 object-cover rounded"
                      />
                      <h3 className="mt-3 font-semibold text-md">{course.title}</h3>
                      <button
                        onClick={() => navigate(`/register/${course.slug}`)}
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
                      >
                        Buy Now
                      </button>
                    </div>
                  ))}
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default MyCourses;