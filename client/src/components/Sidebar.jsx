<<<<<<< HEAD
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useLocation, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState({ profile: false, education: false });

  const toggle = (menu) => {
    setOpenMenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  const location = useLocation();
  const isEducationActive =
    location.pathname.startsWith("/my-courses") ||
    location.pathname.startsWith("/education/trainings");

  return (
    <aside className="w-64 min-h-screen bg-white shadow-md p-4">

      <p className="text-gray-500 text-xs mb-3">MENU</p>

      <nav className="flex flex-col space-y-2">
        {/* <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition ${
              isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Icon icon="mdi:view-dashboard" /> Dashboard
        </NavLink> */}

        {/* <NavLink to="/income" className="menu-link">
          <Icon icon="mdi:wallet-outline" /> My Income
        </NavLink> */}

        {/* <NavLink to="/leads" className="menu-link">
          <Icon icon="mdi:account-group-outline" /> Lead Management
        </NavLink> */}

        {/* Education Hub Dropdown */}
        <button
          onClick={() => toggle("education")}
          className={`menu-link justify-between flex w-max items-center px-4 py-2 rounded-md ${isEducationActive ? "bg-color1 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          <span className="flex items-center gap-2">
            <Icon icon="mdi:book-open-outline" /> Education Hub
          </span>
          <Icon icon={openMenu.education ? "mdi:chevron-up" : "mdi:chevron-down"} />
        </button>
        {openMenu.education && (
          <div className="ml-6 space-y-1 flex flex-col">
            <NavLink to="/my-courses"
              className={({ isActive }) =>
                `submenu-link px-3 py-2 rounded-md text-sm font-medium transition ${isActive ? "bg-color1 text-primary" : "text-primary1 hover:bg-gray-100"
                }`}
            >Courses</NavLink>
            <NavLink to="/education/trainings"
              className={({ isActive }) =>
                `submenu-link px-3 py-2 rounded-md text-sm font-medium transition ${isActive ? "bg-color1 text-primary" : "text-primary1 hover:bg-gray-100"
                }`}
            >Webinars/Trainings</NavLink>
          </div>
        )}

        {/* My Profile Dropdown */}
        <button
          onClick={() => toggle("profile")}
          className="menu-link justify-between flex w-max items-center"
        >
          <span className="flex items-center gap-2">
            <Icon icon="mdi:account-outline" /> My Profile
          </span>
          <Icon icon={openMenu.profile ? "mdi:chevron-up" : "mdi:chevron-down"} />
        </button>
        {openMenu.profile && (
          <div className="ml-6 space-y-1 flex flex-col">
            <NavLink to="/profile/view"
              className={({ isActive }) =>
                `submenu-link px-3 py-2 rounded-md text-sm font-medium transition ${isActive ? "bg-color1 text-primary" : "text-primary1 hover:bg-gray-100"
                }`}
            >View Profile</NavLink>
            <NavLink to="/profile/edit"
              className={({ isActive }) =>
                `submenu-link px-3 py-2 rounded-md text-sm font-medium transition ${isActive ? "bg-color1 text-primary" : "text-primary1 hover:bg-gray-100"
                }`}
            >Edit Profile</NavLink>
          </div>
        )}

        {/* <NavLink to="/referral" className="menu-link">
          <Icon icon="mdi:link-variant" /> Referral Link
        </NavLink> */}

        <NavLink to="/community" className="menu-link flex w-max justify-between items-center">
          <Icon icon="mdi:account-multiple" />
          <span>
            Community

          </span>
        </NavLink>

        <NavLink to="/support" className="menu-link flex w-max items-center justify-between">
          <Icon icon="mdi:headset" />
          <span>

            Support Hub
          </span>
        </NavLink>
      </nav>
    </aside >
  );
};

export default Sidebar;
=======
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaChartBar,
  FaMoneyBillWave,
  FaUsers,
  FaBookOpen,
  FaUser,
  FaIdCard,
  FaCertificate,
  FaRegAddressCard,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  { title: "Dashboard", path: "/", icon: <FaChartBar /> },
  { title: "My Earnings", path: "/Earnings", icon: <FaMoneyBillWave /> },
  { title: "Lead Management", path: "/LeadsManagement", icon: <FaUsers /> },
  { title: "Courses", path: "/courses", icon: <FaBookOpen /> },
  { title: "Profile", path: "/profile", icon: <FaUser /> },
  { title: "KYC", path: "/kyc", icon: <FaRegAddressCard /> },
  { title: "Referral Link", path: "/referral", icon: <FaIdCard /> },
  { title: "Community", path: "/community", icon: <FaUsers /> },
  { title: "Support Hub", path: "/support", icon: <FaCertificate /> },
];

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    // add your logout logic here
    console.log("Logged out");
  };

  return (
    <aside
      className={`fixed top-0 left-0 min-h-screen bg-[#0E1A2B] text-white shadow-md
        ${isMobile ? "w-20" : "w-56"} transition-all duration-300 z-40
        flex flex-col justify-between`}
    >
      {/* Top logo */}
      <div className="overflow-y-auto flex-1">
        <div className="flex justify-center items-center py-5">
          {!isMobile ? (
            <h2 className="text-[#C7A055] text-2xl font-bold tracking-wide">
              STRAVIX
            </h2>
          ) : (
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          )}
        </div>

        <ul className="flex flex-col items-center md:items-start px-2 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `group relative flex ${
                    isMobile ? "flex-col justify-center" : "flex-row"
                  } items-center gap-2 w-full px-3 py-3 rounded-lg transition-all duration-200 ease-in-out
                  ${
                    isActive
                      ? "bg-white text-blue-700 font-semibold border-l-4 border-[#C7A055] shadow-md"
                      : "hover:bg-gray-800 hover:scale-[1.02]"
                  }`
                }
              >
                <span className="text-xl">{item.icon}</span>
                {!isMobile && <span className="text-sm">{item.title}</span>}
                {isMobile && (
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    {item.title}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout button */}
      <div className="px-2 py-3 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-red-400 hover:bg-gray-800 hover:text-red-300 transition duration-200"
        >
          <FaSignOutAlt className="text-lg" />
          {!isMobile && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
>>>>>>> a5cb570 (Implemented dashboard page with sidebar and created pages for sidebar options)
