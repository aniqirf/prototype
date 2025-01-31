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

const TIcketList = () => {
    const [search, setSearch] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    const [openFilter, setOpenFilter] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState(null);
    const [isEdit, setIsEdit] = React.useState(false);
    const [data, setData] = React.useState([
        { id: 1, ticket_no: "JT202401001", vessel_name: "MV Ocean Star", container_no: "CONT1234567", job_type: "Loading", status: "Pending", assigned_to: "John Doe", created_at: "2024-01-31 08:30:00" },
        { id: 2, ticket_no: "JT202401002", vessel_name: "MV Blue Horizon", container_no: "CONT2345678", job_type: "Unloading", status: "In Progress", assigned_to: "Michael Tan", created_at: "2024-01-31 09:00:00" },
        { id: 3, ticket_no: "JT202401003", vessel_name: "MV Seafarer", container_no: "CONT3456789", job_type: "Storage", status: "Completed", assigned_to: "Sarah Lim", created_at: "2024-01-31 09:45:00" },
        { id: 4, ticket_no: "JT202401004", vessel_name: "MV Pacific Breeze", container_no: "CONT4567890", job_type: "Loading", status: "Pending", assigned_to: "Alex Wong", created_at: "2024-01-31 10:15:00" },
        { id: 5, ticket_no: "JT202401005", vessel_name: "MV Atlantic Wave", container_no: "CONT5678901", job_type: "Unloading", status: "In Progress", assigned_to: "David Lee", created_at: "2024-01-31 10:45:00" },
        { id: 6, ticket_no: "JT202401006", vessel_name: "MV Global Explorer", container_no: "CONT6789012", job_type: "Storage", status: "Completed", assigned_to: "Emily Tan", created_at: "2024-01-31 11:30:00" },
        { id: 7, ticket_no: "JT202401007", vessel_name: "MV Eastern Wind", container_no: "CONT7890123", job_type: "Loading", status: "Pending", assigned_to: "Kevin Ho", created_at: "2024-01-31 12:00:00" },
        { id: 8, ticket_no: "JT202401008", vessel_name: "MV Northern Star", container_no: "CONT8901234", job_type: "Unloading", status: "In Progress", assigned_to: "Rachel Ng", created_at: "2024-01-31 12:30:00" },
        { id: 9, ticket_no: "JT202401009", vessel_name: "MV Western Voyage", container_no: "CONT9012345", job_type: "Storage", status: "Completed", assigned_to: "Samuel Low", created_at: "2024-01-31 13:15:00" },
        { id: 10, ticket_no: "JT202401010", vessel_name: "MV Southern Belle", container_no: "CONT0123456", job_type: "Loading", status: "Pending", assigned_to: "Jessica Chan", created_at: "2024-01-31 13:45:00" }
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
        { name: "No. Tiket", key: "ticket_no" },
        { name: "Nama Kapal", key: "vessel_name" },
        { name: "Jenis", key: "job_type" },
        { name: "PIC", key: "assigned_to" },
        { name: "Status", key: "status" },
        { name: "Tindakan", key: "tindakan" },
    ];

    // Filterrrr Dataaqqq
    const filteredData = data.filter((item) =>
        item.ticket_no.toLowerCase().includes(search.toLowerCase()) ||
        item.vessel_name.toLowerCase().includes(search.toLowerCase()) ||
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
                case "ticket_no":
                    return "20%";
                case "vessel_name":
                    return "25%";
                case "job_type":
                    return "15%";
                case "assigned_to":
                    return "10%";
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
        { label: "Pengurusan Tiket" },
        { label: "Senarai" },
    ];
    return (
        <Layout title='Senarai Tiket' subtitle='Memaparkan kesemua syarikat yang berdaftar di dalam system TOK BALI SUPPLY BASE' breadcrumb={breadcrumb}>
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
                            <AreaChart title='Aktivi Tiket' label_1="Log Masuk" label_2="Kemaskini Data" height={300} />
                        </div>
                        <div className="col-span-4 rounded-lg p-1 bg-white shadow-lg border border-gray-100">
                            <RadarChart title='Radar Penglibatan Modul' height={300} />
                        </div>
                        <div className="col-span-3 rounded-lg p-1 bg-white shadow-lg border border-gray-100">
                            <RadialChart title='Jumlah Tiket' height={300} />
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
                                            {item.ticket_no.slice(0, 2)}
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {item.ticket_no}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {item.email}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 flex items-center">
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {item.vessel_name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {item.container_no}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        <div className="text-sm">{item.job_type}</div>
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        <div className="text-sm">{item.assigned_to}</div>
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        {item.status === "Pending" ? (
                                            <span className="text-nowrap bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                                Pending
                                            </span>
                                        ) : item.status === "In Progress" ? (
                                            <span className="text-nowrap bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                                In Progress
                                            </span>
                                        ) : item.status === "Completed" ? (
                                            <span className="text-nowrap bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                                Completed
                                            </span>
                                        ) : (
                                            <span className="text-nowrap bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-300">
                                                Unknown
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

export default TIcketList