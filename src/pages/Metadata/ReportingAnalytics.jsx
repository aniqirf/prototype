import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import Button from "../../Components/Button";
import RadialChart from "../../Components/Chart/RadialChart";
import RadarChart from "../../Components/Chart/RadarChart";
import AreaChart from "../../Components/Chart/AreaChart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure styles are imported
import { FaFileCsv, FaFilePdf, FaSearch } from "react-icons/fa";
import Input from "../../Components/Input";

const ReportingAnalytics = () => {
    const [search, setSearch] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    const [openFilter, setOpenFilter] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState(null);
    const [isEdit, setIsEdit] = React.useState(false);
    const [data, setData] = useState([
        { id: 1, name: "Tech Innovators", industry: "Technology", revenue: 100000, expenses: 50000 },
        { id: 2, name: "Green Energy", industry: "Renewable Energy", revenue: 120000, expenses: 70000 },
        { id: 3, name: "Elite Consulting", industry: "Consulting", revenue: 95000, expenses: 40000 },
        { id: 4, name: "Health Plus", industry: "Healthcare", revenue: 110000, expenses: 60000 },
        { id: 5, name: "EduTech Solutions", industry: "Education", revenue: 130000, expenses: 80000 },
        { id: 6, name: "Finance Pros", industry: "Finance", revenue: 140000, expenses: 90000 },
        { id: 7, name: "Retail Giants", industry: "Retail", revenue: 125000, expenses: 65000 },
        { id: 8, name: "Auto Experts", industry: "Automobile", revenue: 115000, expenses: 55000 },
        { id: 9, name: "Food Lovers", industry: "Food & Beverage", revenue: 105000, expenses: 50000 },
        { id: 10, name: "Real Estate Masters", industry: "Real Estate", revenue: 150000, expenses: 95000 }
    ]);

    const addNewData = (newData) => {
        const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
        setData([...data, { id: newId, ...newData }]);
    };

    const updateData = (newData) => {
        const updatedData = data.map((item) => (item.id === newData.id ? newData : item));
        setData(updatedData);
    };

    const deleteData = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        toast.success("Pengguna berjaya dipadam!", {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const header = [
        { name: "#", key: "#" },
        { name: "Nama", key: "nama" },
        { name: "Industri", key: "industri" },
        { name: "Revenue", key: "revenue" },
        { name: "Expenses", key: "expenses" },
    ];

    // Filterrrr Dataaqqq
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.industry.toLowerCase().includes(search.toLowerCase()) ||
        item.status.toLowerCase().includes(search.toLowerCase()
        )
    )

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const toggleDrawerView = (id) => {
        const user = data.find((item) => item.id === id);
        setSelectedUser(user);
        setOpenView(!openView);
    };

    const handleEdit = (id) => {
        const user = data.find((item) => item.id === id);
        setSelectedUser(user);
        setIsEdit(true);
        setOpen(true);
    };

    useEffect(() => {
        if (!open) {
            setSelectedUser(null);
            setIsEdit(false);
        }
    }, [open]);

    const gridTemplateColumns = header
        .map((h) => {
            switch (h.key) {
                case "#":
                    return "5%";
                case "nama":
                    return "45%";
                case "industri":
                    return "30%";
                case "revenue":
                    return "10%";
                case "expenses":
                    return "10%";
                default:
                    return "1fr";
            }
        })
        .join(" ");

    const breadcrumb = [
        { label: "Laporan & Analitik" },
        { label: "Senarai" },
    ];
    return (
        <Layout title='Senarai Laporan & Analitik' subtitle='Memaparkan kesemua laporan yang di dalam system TOK BALI SUPPLY BASE' breadcrumb={breadcrumb}>
            <div className="flex">
                <div className="w-full">
                    <div className="grid grid-cols-12 gap-2 mt-2p-2 rounded-lg">
                        <div className="col-span-5 rounded-lg p-1 bg-white shadow-lg border border-gray-100">
                            <AreaChart title='Aktivi Syarikat' label_1="Log Masuk" label_2="Kemaskini Data" height={300} />
                        </div>
                        <div className="col-span-4 rounded-lg p-1 bg-white shadow-lg border border-gray-100">
                            <RadarChart title='Radar Penglibatan Modul' height={300} />
                        </div>
                        <div className="col-span-3 rounded-lg p-1 bg-white shadow-lg border border-gray-100">
                            <RadialChart title='Jumlah Syarikat' height={300} />
                        </div>

                    </div>
                    {/* End of Geeraffff */}

                    <div className="space-y-4 mt-4">
                        {/* Stylish Filter Section */}
                        <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-lg shadow-md">
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-gray-600 mb-1">Category</label>
                                <select className="border border-gray-300 bg-gray-50 p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                    <option value="">Select Category</option>
                                    <option value="option1">Users</option>
                                    <option value="option2">Customers</option>
                                    <option value="option2">Job Tickets</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-gray-600 mb-1">Status</label>
                                <select className="border border-gray-300 bg-gray-50 p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                    <option value="">Select Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-gray-600 mb-1">Date</label>
                                <select className="border border-gray-300 bg-gray-50 p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                    <option value="">Select Date</option>
                                    <option value="today">Today</option>
                                    <option value="week">This Week</option>
                                </select>
                            </div>
                        </div>

                        {/* Search and Export Section */}
                        <div className="flex justify-between items-center pt-3">
                            {/* Search Bar */}
                            <div className="flex items-center w-72">
                                <Input
                                    type="text"
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    iconPosition="end"
                                    icon={<FaSearch size={18} className="text-gray-500" />}
                                    className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Export Buttons */}
                            <div className="flex space-x-3">
                                <Button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md shadow-md hover:bg-red-700 transition">
                                    <FaFilePdf size={16} />
                                    <span>Export PDF</span>
                                </Button>
                                <Button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md shadow-md hover:bg-green-700 transition">
                                    <FaFileCsv size={16} />
                                    <span>Export CSV</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="w-full mt-2 bg-[#fefefe]">
                        <div
                            className={`grid text-gray-600 uppercase text-sm tracking-wide bg-gray-50 rounded-md mb-3 mt-4`}
                            style={{ gridTemplateColumns }}
                        >
                            {header.map((item) => (
                                <div key={item.key} className="py-3 px-6 text-start">
                                    {item.name}
                                </div>
                            ))}
                        </div>
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="grid text-gray-600 bg-gray-50 rounded-md text-sm font-light mb-2 hover:bg-gray-200 hover:rounded-md"
                                    style={{ gridTemplateColumns }}
                                >
                                    <div className="py-3 px-6 flex items-center">
                                        <div className="text-sm">{index + 1}</div>
                                    </div>
                                    <div className="p-3 flex items-center">
                                        <div className="w-10 h-10 bg-[#6c2be2] rounded-full flex items-center justify-center font-bold text-white">
                                            {item.name.slice(0, 2)}
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {item.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {item.email}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        <div className="text-sm">{item.industry}</div>
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        <div className="text-sm">{item.revenue}</div>
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        <div className="text-sm">{item.expenses}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-5 text-center text-gray-600 py-4 bg-gray-100 rounded-md">
                                Tiada Data Dijumpai
                            </div>
                        )}
                    </div>
                    {/* End of Table */}
                </div>
                {openFilter && <div className="absolute right-[3rem] top-10 w-1/4 bg-purple-50 p-6 ml-4 rounded-xl shadow-sm h-[450px] z-20">
                    <h2 className="text-lg font-semibold">Filter</h2>
                    <div className="mt-6 space-y-4">
                        <div>
                            <label className="text-gray-600">Trips taken</label>
                            <input type="range" min="0" max="1200" defaultValue="753" className="w-full" />
                        </div>
                        <div>
                            <label className="text-gray-600">Service due</label>
                            <input type="range" min="0" max="30" defaultValue="14" className="w-full" />
                        </div>
                        <div>
                            <label className="text-gray-600">Vehicle model</label>
                            <input type="text" placeholder="Vehicle model" className="w-full p-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="text-gray-600">Status</label>
                            <input type="text" placeholder="Service Needed" className="w-full p-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="text-gray-600">Location</label>
                            <input type="text" placeholder="USA" className="w-full p-2 border rounded-md" />
                        </div>
                    </div>
                </div>}
            </div>
            <ToastContainer />
        </Layout>
    )
}

export default ReportingAnalytics