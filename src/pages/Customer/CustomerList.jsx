import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import Button from "../../Components/Button";
import RadialChart from "../../Components/Chart/RadialChart";
import { IoEye } from "react-icons/io5";
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
import { TbFilterSearch } from "react-icons/tb";
import RadarChart from "../../Components/Chart/RadarChart";
import AreaChart from "../../Components/Chart/AreaChart";
import ListForm from "./ListForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure styles are imported
import ListViewForm from "./ListViewForm";
import { FaSearch } from "react-icons/fa";
import Input from "../../Components/Input";

const CustomerList = () => {
    const [search, setSearch] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    const [openFilter, setOpenFilter] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState(null);
    const [isEdit, setIsEdit] = React.useState(false);
    const [data, setData] = React.useState([
        { id: 1, name: "Tech Innovators Sdn Bhd", registration_no: "202201001234", industry: "Technology", email: "info@techinnovators.com", phone_no: "0323456789", address: "123, Jalan Teknologi, Kuala Lumpur", status: "Active" },
        { id: 2, name: "Green Energy Solutions", registration_no: "202101002345", industry: "Renewable Energy", email: "contact@greenenergy.com", phone_no: "0376543210", address: "456, Jalan Hijau, Penang", status: "Active" },
        { id: 3, name: "Elite Consulting Group", registration_no: "202003004567", industry: "Consulting", email: "support@eliteconsulting.com", phone_no: "0387654321", address: "789, Jalan Bisnes, Selangor", status: "Active" },
        { id: 4, name: "AutoTech Engineering", registration_no: "201902005678", industry: "Automotive", email: "hello@autotech.com", phone_no: "0345678901", address: "234, Jalan Mekanik, Johor", status: "Active" },
        { id: 5, name: "MedCare Pharmaceuticals", registration_no: "201801006789", industry: "Healthcare", email: "info@medcare.com", phone_no: "0356789012", address: "567, Jalan Kesihatan, Melaka", status: "Active" },
        { id: 6, name: "EduSmart Academy", registration_no: "202105007890", industry: "Education", email: "contact@edusmart.com", phone_no: "0367890123", address: "890, Jalan Ilmu, Kuala Lumpur", status: "Active" },
        { id: 7, name: "F&B Delights", registration_no: "202004008901", industry: "Food & Beverage", email: "info@fnbdelights.com", phone_no: "0378901234", address: "901, Jalan Makanan, Penang", status: "Active" },
        { id: 8, name: "Globe Logistics", registration_no: "201711009012", industry: "Logistics", email: "support@globelogistics.com", phone_no: "0389012345", address: "345, Jalan Penghantaran, Selangor", status: "Active" },
        { id: 9, name: "NextGen AI Solutions", registration_no: "202206010123", industry: "Artificial Intelligence", email: "ai@nextgen.com", phone_no: "0390123456", address: "678, Jalan Digital, Cyberjaya", status: "Active" },
        { id: 10, name: "EcoBuild Construction", registration_no: "201905011234", industry: "Construction", email: "contact@ecobuild.com", phone_no: "0323456780", address: "012, Jalan Binaan, Kuala Lumpur", status: "Active" },
        { id: 11, name: "Visionary Marketing", registration_no: "202112012345", industry: "Marketing", email: "info@visionarymarketing.com", phone_no: "0312345678", address: "678, Jalan Pemasaran, Johor", status: "Active" },
        { id: 12, name: "SmartFarm Agrotech", registration_no: "202009013456", industry: "Agriculture", email: "contact@smartfarm.com", phone_no: "0345671234", address: "789, Jalan Pertanian, Kedah", status: "Active" },
        { id: 13, name: "Global FinTech Solutions", registration_no: "202103014567", industry: "Finance", email: "support@globalfintech.com", phone_no: "0367894321", address: "890, Jalan Ekonomi, Kuala Lumpur", status: "Active" },
        { id: 14, name: "Quantum Cybersecurity", registration_no: "202107015678", industry: "Cybersecurity", email: "info@quantumcyber.com", phone_no: "0376547890", address: "901, Jalan Keselamatan, Selangor", status: "Active" },
        { id: 15, name: "Urban Architects", registration_no: "201905016789", industry: "Architecture", email: "contact@urbanarchitects.com", phone_no: "0323450987", address: "234, Jalan Seni Bina, Penang", status: "Active" },
        { id: 16, name: "Neon Advertising", registration_no: "202002017890", industry: "Advertising", email: "info@neonads.com", phone_no: "0312348765", address: "345, Jalan Iklan, Melaka", status: "Active" },
        { id: 17, name: "Borneo Eco Tours", registration_no: "201808018901", industry: "Tourism", email: "contact@borneoecotours.com", phone_no: "0356782345", address: "567, Jalan Pelancongan, Sabah", status: "Active" },
        { id: 18, name: "Infinity Software Solutions", registration_no: "202110019012", industry: "Software Development", email: "info@infinitysoftware.com", phone_no: "0378905678", address: "678, Jalan IT, Cyberjaya", status: "Active" },
        { id: 19, name: "Horizon Real Estate", registration_no: "201903020123", industry: "Real Estate", email: "contact@horizonrealestate.com", phone_no: "0345677890", address: "789, Jalan Hartanah, Kuala Lumpur", status: "Active" },
        { id: 20, name: "Sustainable Packaging Sdn Bhd", registration_no: "202206021234", industry: "Manufacturing", email: "info@sustainablepackaging.com", phone_no: "0389016789", address: "890, Jalan Industri, Selangor", status: "Active" }
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
        { name: "No. Pendaftaran", key: "registration_no" },
        { name: "Industri", key: "industri" },
        { name: "Status", key: "status" },
        { name: "Tindakan", key: "tindakan" },
    ];

    // Filterrrr Dataaqqq
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.registration_no.toLowerCase().includes(search.toLowerCase()) ||
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
                    return "30%";
                case "registration_no":
                    return "25%";
                case "industri":
                    return "15%";
                case "status":
                    return "10%";
                case "tindakan":
                    return "15%";
                default:
                    return "1fr";
            }
        })
        .join(" ");

    const breadcrumb = [
        { label: "Pengurusan Syarikat" },
        { label: "Senarai" },
    ];
    return (
        <Layout title='Senarai Syarikat' subtitle='Memaparkan kesemua syarikat yang berdaftar di dalam system TOK BALI SUPPLY BASE' breadcrumb={breadcrumb}>
            <div className="flex">
                <div className="w-full">
                    {/* Geeraffff */}
                    {/* <div className="grid grid-cols-5 gap-6 mt-2 bg-black/10 p-2 rounded-lg">
                        <div className="col-span-3 rounded-lg p-1">
                            <div className="grid grid-cols-4 gap-1">
                                <div className="col-span-2 bg-white rounded-lg p-2">
                                    <div id="app">
                                        <RadialChart title='Jumlah Penguna' height={300} />
                                    </div>
                                </div>
                                <div className="col-span-1 bg-white rounded-lg px-2 py-1">
                                    <div id="app">
                                        <ColumnChart title='Pengaksesan' height={300} />
                                    </div>
                                </div>
                                <div className="col-span-1 bg-white rounded-lg p-2">
                                    <div id="app">
                                        <ColumnChart title='Pengaksesan' height={300} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 rounded-lg p-1">
                            <div className="grid grid-rows-3 gap-4">
                                <div className="row-span-1 flex items-center bg-white rounded-lg shadow-md p-2">
                                    <div className="flex items-center">
                                        <i className="fas fa-wallet text-blue-500 text-3xl"></i>
                                        <div className="ml-4">
                                            <h2 className="text-xl font-bold">Wallet</h2>
                                            <p className="text-lg">$ 2 650 567 234</p>
                                        </div>
                                    </div>
                                    <div className="ml-auto flex flex-col justify-between">
                                        <button className="bg-blue-500 text-white px-4 py-3 rounded-t-lg">
                                            <BiSolidEdit className='text-xl  ' />
                                        </button>
                                        <button className="bg-blue-500 text-white px-4 py-3 rounded-b-lg">
                                            <IoSettings />
                                        </button>
                                    </div>
                                </div>
                                <div className="row-span-1 flex items-center bg-white rounded-lg shadow-md p-2">
                                    <div className="flex items-center">
                                        <i className="fas fa-wallet text-blue-500 text-3xl"></i>
                                        <div className="ml-4">
                                            <h2 className="text-xl font-bold">Wallet</h2>
                                            <p className="text-lg">$ 2 650 567 234</p>
                                        </div>
                                    </div>
                                    <div className="ml-auto flex flex-col justify-between">
                                        <button className="bg-blue-500 text-white px-4 py-3 rounded-t-lg">
                                            <BiSolidEdit className='text-xl  ' />
                                        </button>
                                        <button className="bg-blue-500 text-white px-4 py-3 rounded-b-lg">
                                            <IoSettings />
                                        </button>
                                    </div>
                                </div>
                                <div className="row-span-1 flex items-center bg-white rounded-lg shadow-md p-2">
                                    <div className="flex items-center">
                                        <i className="fas fa-wallet text-blue-500 text-3xl"></i>
                                        <div className="ml-4">
                                            <h2 className="text-xl font-bold">Wallet</h2>
                                            <p className="text-lg">$ 2 650 567 234</p>
                                        </div>
                                    </div>
                                    <div className="ml-auto flex flex-col justify-between">
                                        <button className="bg-blue-500 text-white px-4 py-3 rounded-t-lg">
                                            <BiSolidEdit className='text-xl  ' />
                                        </button>
                                        <button className="bg-blue-500 text-white px-4 py-3 rounded-b-lg">
                                            <IoSettings />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
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

                    <div className='flex justify-between pt-3'>
                        <Button theme='solid' className='text-sm mt-4' onClick={toggleDrawer}>Tambah</Button>
                        <div className="flex items-center w-72">
                            <Input
                                type="text"
                                placeholder="Carian"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                iconPosition="end"
                                icon={<FaSearch size={18} />}
                            />
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
                                        <div className="text-sm">{item.registration_no}</div>
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        <div className="text-sm">{item.industry}</div>
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        {item.status === "Active" ? (
                                            <span className="text-nowrap bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                                Aktif
                                            </span>
                                        ) : (
                                            <span className="text-nowrap bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                                Tidak Aktif
                                            </span>
                                        )}
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        <div className="flex flex-row justify-center items-center gap-2">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded-lg"
                                                onClick={() => toggleDrawerView(item.id)}
                                            >
                                                <IoEye size={19} />
                                            </button>
                                            <button
                                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold px-2 py-2 rounded-lg"
                                                onClick={() => handleEdit(item.id)}
                                            >
                                                <BiSolidEdit size={19} />
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-2 rounded-lg">
                                                <BiSolidTrash size={19} onClick={() => deleteData(item.id)} />
                                            </button>
                                        </div>
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
            <ListForm isOpen={open} toggleDrawer={toggleDrawer} addNewData={addNewData} updateData={updateData} selectedUser={selectedUser} setIsEdit={setIsEdit} isEdit={isEdit} />
            <ListViewForm selectedUser={selectedUser} isOpen={openView} toggleDrawer={toggleDrawerView} />
            <ToastContainer />
        </Layout>
    )
}

export default CustomerList