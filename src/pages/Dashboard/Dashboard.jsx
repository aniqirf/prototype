import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    BarElement,
} from "chart.js";
import { FaUsers, FaDatabase, FaBuilding } from "react-icons/fa";
import Layout from "../../Layout/Layout";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    BarElement
);

const Dashboard = () => {
    const lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Sebenar",
                data: [50, 60, 55, 70, 80, 75, 90],
                borderColor: "#34D399",
                backgroundColor: "rgba(52, 211, 153, 0.2)",
                tension: 0.4,
                fill: true,
            },
            {
                label: "Jangkaan",
                data: [50, 65, 70, 75, 85, 90, 95],
                borderColor: "#60A5FA",
                backgroundColor: "rgba(96, 165, 250, 0.2)",
                borderDash: [5, 5], // Dashed line for distinction
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                },
            },
        },
        maintainAspectRatio: false,
    };

    const barData = {
        labels: ["JPN", "JKT", "PR1MA", "LPHS", "MPAJ", "PPj"],
        datasets: [
            {
                label: "Total",
                data: [40, 20, 45, 30, 100, 50],
                backgroundColor: ["#60A5FA"],
                hoverBackgroundColor: ["#3B82F6"],
            },
        ],
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                },
            },
        },
    };

    const breadcrumb = [{ label: "Dashboard" }];

    return (
        <Layout title="Dashboard" subtitle="Dashboard keseluruhan sistem" breadcrumb={breadcrumb}>
            <div className="min-h-screen p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Total Users */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4">
                        <div className="bg-blue-400 text-white p-3 rounded-full">
                            <FaUsers size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Jumlah Pengguna</h3>
                            <p className="text-4xl font-bold text-blue-500">45</p>
                        </div>
                    </div>

                    {/* Total Data Collections */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4">
                        <div className="bg-purple-400 text-white p-3 rounded-full">
                            <FaDatabase size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Jumlah Data Collection</h3>
                            <p className="text-4xl font-bold text-purple-500">50</p>
                        </div>
                    </div>

                    {/* Total Agencies */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4">
                        <div className="bg-pink-400 text-white p-3 rounded-full">
                            <FaBuilding size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Jumlah Agensi</h3>
                            <p className="text-4xl font-bold text-pink-500">12</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 mt-4">
                    {/* Line Chart */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Jangkaan Analitik</h2>
                        <div className="h-60">
                            <Line data={lineData} options={lineOptions} />
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Jumlah Data mengikut Agensi</h2>
                        <div className="h-60">
                            <Bar data={barData} options={barOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
