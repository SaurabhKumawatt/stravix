import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function DashboardNavbar() {
    const location = useLocation();
    const slug = location.pathname.split('/')[1];

    const formatSlug = (slugText) => {
        if (slugText === 'my-courses') return 'My Courses';

        return slugText
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("stravix-token");
        localStorage.removeItem("stravix-temp-registration");
        navigate("/login");
    };
    return (
        <>
            <nav className="w-full flex justify-between items-center px-4 md:px-8 py-3 shadow-sm border-b bg-white">
                {/* Left: Logo + Title */}
                <div className="flex items-center justify-between h-11 gap-2 relative">
                    <img
                        src="/assets/logos/logo.png" // replace with your icon logo path
                        alt="Stravix Logo"
                        className="w-40"
                    />
                    <span className="ml-3 md:text-base text-black text-xl font-semibold mb-6">
                        {formatSlug(slug)}
                    </span>
                </div>

                {/* Right: Icons */}
                <div className="flex items-center gap-4">
                    {/* <img
                        src="/assets/icons/notification-icon.png" // use your actual notification icon
                        alt="Notification"
                        className="w-8 h-8 rounded-full bg-gray-100 p-1"
                    />
                    <img
                        src="/assets/images/user-avatar.jpg" // use your user image
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full object-cover border"
                    /> */}
                    <button
                        onClick={handleLogout}
                        className="text-sm px-4 py-2 text-red-600 hover:underline"
                    >
                        Logout
                    </button>
                </div>
            </nav>
        </>
    )
}

export default DashboardNavbar