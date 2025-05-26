import React, { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { UserContext } from "../contexts/UserContext";

const barData = [
    { name: "Nov, 24", earnings: 120000 },
    { name: "Dec, 24", earnings: 180000 },
    { name: "Jan, 25", earnings: 160000 },
    { name: "Feb, 25", earnings: 220000 },
    { name: "Mar, 25", earnings: 260000 },
];

const pieData = [
    { name: "Personal Branding", value: 10 },
    { name: "Soft Skills", value: 15 },
    { name: "Digital Marketing", value: 10 },
    { name: "Online Marketing", value: 25 },
    { name: "Finance Mastery", value: 10 },
    { name: "Data Science", value: 30 },
];

const pieColors = ["#1f3bb3", "#a66bd0", "#06d6a0", "#00aaff", "#f43f5e", "#f59e0b"];

const FullDashboard = () => {

    const { user } = useContext(UserContext);

    if (!user) {
        return <p className="p-6">Loading dashboard...</p>;
    }

    const topLeads = [
        "K MADHU SUDHAN RAM",
        "NIMAI CHARAN MAHALIK",
        "DATTATRAY SAMEER KHADE",
        "K MADHU SUDHAN RAM",
        "K MADHU SUDHAN RAM",
    ];


    return (
        <section className="p-4 space-y-6">
            <div className="bg-white p-4 rounded-xl shadow-md">
                <p className="text-gray-500">Welcome</p>
                <h2 className="text-xl font-bold text-primary">{user.fullName}</h2>
                <p className="text-sm font-semibold mt-1">{user.stravixId}</p>
                <div className="bg-secondary rounded-md p-2 mt-4 text-sm">
                    {/* <p>Active Plan: <strong>{user.activePlan}</strong></p> */}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                    <div className="text-secondary text-2xl font-bold">₹2,340</div>
                    <p className="mt-2">Today's Earning</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                    <div className="text-primary text-2xl font-bold">₹7,890</div>
                    <p className="mt-2">This Month</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                    <div className="text-green-600 text-2xl font-bold">₹23,450</div>
                    <p className="mt-2">Total Earning</p>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="font-semibold text-primary mb-4">Sales Tracker</div>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={barData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="earnings" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="font-semibold text-primary mb-4">Bundlewise Tracker</div>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={90} label>
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" align="right" verticalAlign="middle" />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="font-semibold text-primary mb-4">My Top Leads</div>
                <ul className="space-y-2">
                    {topLeads.map((lead, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-2 border p-2 rounded-md text-gray-800"
                        >
                            <span className="text-lg">👤</span>
                            {lead}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FullDashboard;
