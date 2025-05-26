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
    </div>
  );
};

export default Dashboard;
