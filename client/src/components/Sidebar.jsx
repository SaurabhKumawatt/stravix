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