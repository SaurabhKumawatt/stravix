import React, { useState } from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const earningsData = [
  {
    id: 2,
    name: "SAMEER KHADE",
    STXId: "00028312222",
    joiningDate: "2025-03-03T09:20:00",
    mobileNo: "9988776655",
    package: "Data Science",
    status: "Unpaid",
  },
  {
    id: 1,
    name: "K MADHU SUDHAN RAM",
    STXId: "STX00028311132",
    joiningDate: "2025-03-01T11:52:07",
    mobileNo: "8989777889",
    package: "Finance Mastery",
    status: "Paid",
  },
  {
    id: 3,
    name: "MAHIRISHIKA VERMA",
    STXId: "STX00028313333",
    joiningDate: "2025-04-01T15:10:45",
    mobileNo: "8877665544",
    package: "Soft Skills",
    status: "Pending",
  },
  {
    id: 3,
    name: "MAHIRISHIKA VERMA",
    STXId: "STX00028313333",
    joiningDate: "2025-04-01T15:10:45",
    mobileNo: "8877665544",
    package: "Soft Skills",
    status: "Pending",
  },
];

const StatusBadge = ({ status }) => {
  const baseClass = "text-sm font-semibold px-4 py-1 rounded-full text-white";
  const statusStyles = {
    Paid: "bg-green-600",
    Unpaid: "bg-yellow-500",
    Pending: "bg-gray-400",
  };
  return <span className={`${baseClass} ${statusStyles[status]}`}>{status}</span>;
};

const MyEarnings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("name");
  const [filterStatus, setFilterStatus] = useState("");

  const filteredAndSorted = earningsData
    .filter((entry) =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((entry) =>
      filterStatus ? entry.status === filterStatus : true
    )
    .sort((a, b) => {
      if (sortKey === "name") return a.name.localeCompare(b.name);
      if (sortKey === "date") return new Date(b.joiningDate) - new Date(a.joiningDate);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-16 bg-white shadow-md min-h-screen flex flex-col items-center py-4 space-y-4 fixed left-0 top-0 z-10">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          <div className="space-y-6">
            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
              <FaUserCircle className="text-blue-500 text-xl" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-16 px-4 py-8 max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
            <h1 className="text-2xl font-semibold">Earnings</h1>
            <div className="flex items-center gap-3">
              <select
                className="border rounded px-3 py-1 text-sm text-gray-700"
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="date">Sort by Date</option>
              </select>
              <select
                className="border rounded px-3 py-1 text-sm text-gray-700"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
                <option value="Pending">Pending</option>
              </select>
              <FaBell className="text-gray-600 text-lg cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-gray-300" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6 mx-auto max-w-lg">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full shadow-sm focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
          </div>

          {/* Earnings Cards */}
          <div className="space-y-6">
            {filteredAndSorted.map((entry) => (
              <div
                key={entry.id}
                className="bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">{entry.name}</h2>
                  <StatusBadge status={entry.status} />
                </div>

                {/* Card Body */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
                  <div><strong>STX ID:</strong> {entry.STXId}</div>
                  <div><strong>Joining Date:</strong> {new Date(entry.joiningDate).toLocaleString()}</div>
                  <div><strong>Mobile No.:</strong> {entry.mobileNo}</div>
                  <div><strong>Package:</strong> {entry.package}</div>
                </div>
              </div>
            ))}
            {filteredAndSorted.length === 0 && (
              <div className="text-gray-500 text-center py-6">No results found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEarnings;
