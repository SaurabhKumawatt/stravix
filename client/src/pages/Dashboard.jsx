<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import FullDashboard from "./FullDashboard";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUpdateKYC = () => {
    navigate("/kyc-form");
  };

  const handleStartTraining = () => {
    navigate("/courses");
  };

  const handleMyCourses = () => {
    navigate("/my-courses");
  };

  if (!user) return <p className="p-6">Loading user...</p>;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <section className="flex-1 bg-white p-6">
        <h2 className="text-2xl font-semibold mb-2">
          Welcome <span className="text-primary">[{user.username}]</span>!
        </h2>
        <p className="text-md text-gray-700 mb-4">
          MT ID: <strong>{user.stravixId || "STX0000123"}</strong>
        </p>
        <p className="text-md mb-6">
          KYC Status:{" "}
          <span
            className={`font-semibold ${
              user.kycStatus === "approved"
                ? "text-green-600"
                : user.kycStatus === "rejected"
                ? "text-red-600"
                : "text-yellow-600"
            }`}
          >
            {user.kycStatus.toUpperCase()}
          </span>
        </p>

        {user.kycStatus !== "approved" ? (
          <>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleUpdateKYC}
                className="bg-yellow-400 text-black font-semibold px-6 py-4 rounded-md shadow hover:opacity-90"
              >
                Update KYC
              </button>
              <button
                onClick={handleStartTraining}
                className="bg-primary text-white font-semibold px-6 py-4 rounded-md shadow hover:opacity-90"
              >
                Start Training
              </button>
              <button
                onClick={handleMyCourses}
                className="bg-accent text-white font-semibold px-6 py-4 rounded-md shadow hover:opacity-90"
              >
                My Courses
              </button>
            </div>
            <p className="mt-8 text-center text-primary font-medium">
              Update your KYC to see your full dashboard
            </p>
          </>
        ) : (
          <>
          <FullDashboard />
            <h3 className="text-xl font-semibold mb-4">🎉 Full Dashboard Access</h3>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-100 rounded shadow">📈 Course Progress</div>
              <div className="p-4 bg-gray-100 rounded shadow">👥 Affiliate Earnings</div>
              <div className="p-4 bg-gray-100 rounded shadow">🎓 Completed Modules</div>
            </div> */}
          </>
        )}
      </section>
=======
import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import CountUp from "react-countup";
import {
  PiggyBank,
  Wallet,
  DollarSign,
  Calendar as CalendarIcon,
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleCardClick = () => {
    setCalendarOpen((prev) => !prev);
  };

  const barData = {
    labels: ["Aug 24", "Sep 04", "Sep 14", "Oct 02", "Oct 14", "Nov 25", "Dec 05"],
    datasets: [
      {
        label: "Sales",
        data: [5000, 8000, 4000, 18000, 15000, 20000, 25000],
        backgroundColor: "#2B7DE9",
        borderRadius: 6,
      },
    ],
  };

  const pieData = {
    labels: [
      "Personal Branding",
      "Soft Skills",
      "Digital Marketing",
      "Online Marketing",
      "Finance Mastery",
      "Data Science",
    ],
    datasets: [
      {
        data: [15, 5, 10, 35, 5, 10],
        backgroundColor: [
          "#60A5FA",
          "#F87171",
          "#34D399",
          "#A78BFA",
          "#FBBF24",
          "#FB7685",
        ],
        borderColor: "#fff",
        borderWidth: 3,
      },
    ],
  };

  const topLeads = [
    "PRIYA SOMAN",
    "NIDHI SHARMA",
    "PRIYA SOMAN",
    "NIDHI SHARMA",
  ];

  const earnings = [
    {
      label: "Today's Earning",
      amount: 7000,
      border: "#F8C900",
      bg: "bg-yellow-50",
      icon: <PiggyBank className="w-6 h-6 text-[#F8C900]" />,
    },
    {
      label: "Last 7 days Earning",
      amount: 14000,
      border: "#22C55E",
      bg: "bg-green-50",
      icon: <DollarSign className="w-6 h-6 text-[#22C55E]" />,
    },
    {
      label: "This Month",
      amount: 18500,
      border: "#2B7DE9",
      bg: "bg-blue-50",
      icon: <Wallet className="w-6 h-6 text-[#2B7DE9]" />,
      isCalendar: true,
    },
    {
      label: "Total Earning",
      amount: 64000,
      border: "#22C55E",
      bg: "bg-orange-50",
      icon: <DollarSign className="w-6 h-6 text-[#c57922]" />,
    },
    {
      label: "Industry Earnings",
      amount: 80000,
      border: "#22C55E",
      bg: "bg-blue-50",
      icon: <DollarSign className="w-6 h-6 text-[#2289c5]" />,
    },
  ];

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen md:ml-64 space-y-8 relative">
      <div className="absolute top-4 right-4">
       
      </div>
      <div className="bg-white rounded-2xl shadow-md p-5 max-w-4xl mx-auto">

{/* Welcome section*/}
<div className="flex justify-between items-center mb-6 relative">
  {/* Welcome Text + Info */}
  <div className="max-w-xs z-10">
    <h2 className="text-xl font-bold text-gray-900 mb-1">
      Welcome!<span className="text-[#F8C900]">Mahirshika Verma👋</span> 
    </h2>

    {/* Info Box */}
    <div className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg px-4 py-2 text-white text-xs font-semibold select-none shadow-lg">
      <div className="flex gap-6">
        <div>
          <p className="uppercase opacity-80">Active Plan</p>
          <p className="font-bold">Stravix</p>
        </div>
        <div>
          <p className="uppercase opacity-80">STX ID</p>
          <p className="font-bold">STX784512</p>
        </div>
      </div>
    </div>
  </div>

  <div className="z-10">
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="Profile"
      className="w-16 h-16 rounded-full border-4 border-[#F8C900] shadow-lg"
    />
  </div>

  {/* Decorative Background Shape */}
  <svg
    className="absolute right-4 top-4 w-28 h-28 opacity-10"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="100,10 190,50 160,190 40,190 10,50"
      fill="#F8C900"
      filter="url(#blur)"
    />
    <defs>
      <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" />
      </filter>
    </defs>
  </svg>
</div>

{/* Earnings Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
  {earnings.map((card, i) => (
    <div
      key={i}
      className={`p-4 pl-5 rounded-2xl border-l-4 flex items-center shadow-sm hover:shadow-lg transition cursor-pointer relative ${card.bg}`}
      style={{ borderColor: card.border }}
      onClick={card.isCalendar ? handleCardClick : undefined}
    >
      <div className="mr-4 relative">
        <div
          className="absolute left-[-10px] top-0 bottom-0 w-1 rounded bg-yellow-400"
          style={{ backgroundColor: card.border }}
        ></div>
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${card.border}20` }}
        >
          {card.icon}git push origin branch-name

        </div>
      </div>

      {/* Text Content */}
      <div className="text-left">
        <h4 className="text-sm font-medium text-gray-500 flex items-center gap-1">
          {card.label}
          {card.isCalendar && <CalendarIcon className="w-4 h-4" />}
        </h4>
        <p className="text-2xl font-bold text-gray-800">
          ₹<CountUp end={card.amount} duration={1.5} />
        </p>
      </div>

      {/* Mini Calendar Popup */}
      {card.isCalendar && calendarOpen && (
        <div className="absolute top-full left-0 mt-2 z-20 bg-white border border-gray-300 rounded-lg shadow-lg p-3 w-64">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            rangeColors={["#2B7DE9"]}
          />
        </div>
      )}
    </div>
  ))}
</div>
</div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">Sales Tracker</h4>
          <div className="w-full h-72">
            <Bar
              data={barData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: { enabled: true },
                },
                scales: {
                  x: {
                    ticks: { color: "#6B7280", font: { size: 12 } },
                    grid: { color: "#E5E7EB" },
                  },
                  y: {
                    ticks: { color: "#6B7280", font: { size: 12 } },
                    grid: { color: "#E5E7EB" },
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">Bundlewise Tracker</h4>

          <div className="w-full h-72">
            <Pie
              data={pieData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: { color: "#374151", font: { weight: "bold" } },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Leads */}
      <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white">
        <h4 className="text-lg font-bold mb-4 text-gray-700">My Top Leads</h4>
        <ul className="space-y-4">
          {topLeads.map((name, idx) => (
            <li
              key={idx}
              className="flex items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm hover:bg-gray-200 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <span className="text-gray-800 font-medium">{name}</span>
            </li>
          ))}
        </ul>
      </div>
>>>>>>> a5cb570 (Implemented dashboard page with sidebar and created pages for sidebar options)
    </div>
  );
};

export default Dashboard;
