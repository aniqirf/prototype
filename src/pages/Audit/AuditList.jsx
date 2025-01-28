import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import Button from "../../Components/Button";
import RadialChart from "../../Components/Chart/RadialChart";
import { IoEye } from "react-icons/io5";
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
import { TbFilterSearch } from "react-icons/tb";
import RadarChart from "../../Components/Chart/RadarChart";
import AreaChart from "../../Components/Chart/AreaChart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure styles are imported
import Drawer from "../../components/Drawer";
import { CiClock2 } from "react-icons/ci";

const AuditList = () => {
    const [search, setSearch] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    const [openFilter, setOpenFilter] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState(null);
    const [isEdit, setIsEdit] = React.useState(false);
    const [data, setData] = React.useState([
        { id: 1, name: "Ahmad Albab", ic: "Kemaskini Data", role: "192.168.1.1", email: "user@testing.com", phone_no: "0102569859", kategori: "1", status: "Laptop" },
        { id: 2, name: "Aminah Roziah", ic: "Kemaskini Data", role: "172.16.0.2", email: "user@testing.com", phone_no: "0102569859", kategori: "2", status: "Smartphone" },
        { id: 3, name: "Zulkifli Rahim", ic: "Kemaskini Data", role: "10.0.0.3", email: "user@testing.com", phone_no: "0102569859", kategori: "2", status: "Tablet" },
        { id: 4, name: "Nurul Hidayah", ic: "Kemaskini Data", role: "192.168.0.4", email: "user@testing.com", phone_no: "0102569859", kategori: "3", status: "Desktop" },
        { id: 5, name: "Hafizuddin Salleh", ic: "Log Masuk", role: "10.0.1.5", email: "user@testing.com", phone_no: "0102569859", kategori: "3", status: "Smartphone" },
        { id: 6, name: "Syafiq Zamri", ic: "Kemaskini Data", role: "172.16.1.6", email: "user@testing.com", phone_no: "0102569859", kategori: "1", status: "Laptop" },
        { id: 7, name: "Wan Zahirah", ic: "Kemaskini Data", role: "192.168.2.7", email: "user@testing.com", phone_no: "0102569859", kategori: "1", status: "Tablet" },
        { id: 8, name: "Azri Bakri", ic: "Kemaskini Data", role: "10.1.1.8", email: "user@testing.com", phone_no: "0102569859", kategori: "2", status: "Desktop" },
        { id: 9, name: "Nadiah Hasan", ic: "Kemaskini Data", role: "172.20.10.9", email: "nadiah@testing.com", phone_no: "0112546789", kategori: "3", status: "Laptop" },
        { id: 10, name: "Shafiqah Rahman", ic: "Kemaskini Data", role: "192.168.3.10", email: "shafiqah@testing.com", phone_no: "0103567849", kategori: "1", status: "Smartphone" },
        { id: 11, name: "Khairul Anuar", ic: "Kemaskini Data", role: "10.2.0.11", email: "khairul@testing.com", phone_no: "0135678490", kategori: "2", status: "Tablet" },
        { id: 12, name: "Nur Aini", ic: "Log Masuk", role: "172.16.2.12", email: "aini@testing.com", phone_no: "0147890563", kategori: "3", status: "Desktop" },
        { id: 13, name: "Fazli Zainal", ic: "Kemaskini Data", role: "192.168.1.13", email: "fazli@testing.com", phone_no: "0162345678", kategori: "1", status: "Smartphone" },
        { id: 14, name: "Halimaton Saadiah", ic: "Kemaskini Data", role: "10.3.0.14", email: "halimaton@testing.com", phone_no: "0174567891", kategori: "2", status: "Laptop" },
        { id: 15, name: "Ridzuan Ariffin", ic: "Kemaskini Data", role: "172.16.3.15", email: "ridzuan@testing.com", phone_no: "0187654321", kategori: "3", status: "Tablet" },
        { id: 16, name: "Amirul Hakim", ic: "Kemaskini Data", role: "192.168.4.16", email: "amirul@testing.com", phone_no: "0192345678", kategori: "1", status: "Desktop" },
        { id: 17, name: "Siti Khadijah", ic: "Kemaskini Data", role: "10.4.1.17", email: "siti@testing.com", phone_no: "0109876543", kategori: "2", status: "Laptop" },
        { id: 18, name: "Mohd Farid", ic: "Kemaskini Data", role: "172.20.10.18", email: "farid@testing.com", phone_no: "0123456789", kategori: "3", status: "Smartphone" }
    ]);

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
        { name: "Pengguna", key: "nama" },
        { name: "Tindakan", key: "ic" },
        { name: "Ip Address", key: "peranan" },
        { name: "Peranti", key: "status" },
        { name: "Tindakan", key: "tindakan" },
    ];

    // Filterrrr Dataaqqq
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.ic.toLowerCase().includes(search.toLowerCase()) ||
        item.role.toLowerCase().includes(search.toLowerCase()) ||
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
                case "ic":
                    return "25%";
                case "peranan":
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
    return (
        <Layout title='Audit Trails' subtitle='Memaparkan rekod log masuk dan kemaskini data oleh pengguna sistem.'>
            <div className="flex">
                <div className="w-full">
                    <div className="grid grid-cols-1 gap-2 mt-2 bg-gray-50 p-2 rounded-lg">
                        <div className="col-span-5 rounded-lg p-1 bg-white">
                            <AreaChart title='Rekod Semasa Audit Trails' label_1="Log Masuk" label_2="Kemaskini Data" height={300} />
                        </div>
                        {/* <div className="col-span-3 rounded-lg p-1 bg-white">
                            <RadarChart title='Segi Tiga Bermuda' height={300} />
                        </div>
                        <div className="col-span-4 rounded-lg p-1 bg-white">
                            <RadialChart title='Jumlah Penguna' height={300} />
                        </div> */}

                    </div>
                    {/* End of Geeraffff */}

                    <div className='flex justify-end my-6'>
                        {/* <Button theme='solid' className='text-sm mt-4' onClick={toggleDrawer}>Tambah</Button> */}
                        <div className="flex items-center">
                            <input
                                className="w-full bg-transparent placeholder:text-gray-400 text-sm border border-gray-200 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-300 shadow-sm focus:shadow"
                                placeholder="Carian..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button
                                className="rounded-md ml-2 bg-[#6c2be2] p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg hover:bg-[#4f2897] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <button
                                className="rounded-md ml-2 bg-[#6c2be2] p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg hover:bg-[#4f2897] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                onClick={() => setOpenFilter(!openFilter)}
                            >
                                <TbFilterSearch className='text-base' />
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="w-full mt-2 bg-[#fefefe]">
                        <div
                            className={`grid text-gray-600 uppercase text-sm tracking-wide bg-gray-50 rounded-md mb-3 mt-4`}
                            style={{ gridTemplateColumns }}
                        >
                            {header.map((item) => (
                                <div key={item.key} className="py-3 px-6 text-start font-semibold">
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
                                        <div className="text-sm">{item.ic}</div>
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        <div className="text-sm">{item.role}</div>
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        {/* {item.status === "Aktif" ? (
                                            <span className="text-nowrap bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                                Aktif
                                            </span>
                                        ) : (
                                            <span className="text-nowrap bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                                Tidak Aktif
                                            </span>
                                        )} */}
                                        {item.status}
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        <div className="flex flex-row justify-end items-center gap-2">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded-lg ml-5"
                                                onClick={() => toggleDrawer()}
                                            >
                                                <IoEye size={19} />
                                            </button>
                                            {/* <button
                                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold px-2 py-2 rounded-lg"
                                                onClick={() => handleEdit(item.id)}
                                            >
                                                <BiSolidEdit size={19} />
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-2 rounded-lg">
                                                <BiSolidTrash size={19} onClick={() => deleteData(item.id)} />
                                            </button> */}
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
            {/* <ListForm isOpen={open} toggleDrawer={toggleDrawer} addNewData={addNewData} updateData={updateData} selectedUser={selectedUser} setIsEdit={setIsEdit} isEdit={isEdit} /> */}
            {/* <ListViewForm selectedUser={selectedUser} isOpen={openView} toggleDrawer={toggleDrawerView} /> */}
            <Drawer isOpen={open} toggleDrawer={toggleDrawer} title="Maklumat Kemaskini" size='sm'>
                <div className="bg-gray-200 rounded-lg p-4">
                    <div className="flex justify-between mb-4">
                        <div className="text-sm text-gray-500 flex">
                            10/08/2024
                        </div>
                        <div className="text-sm text-gray-500 flex">
                            <CiClock2 className="mr-2 text-lg text-gray-600" /> 09:45 AM
                        </div>
                    </div>
                    <div className="">
                        <span className="text-xs text-gray-500">Rekod Dikemaskini:</span>
                        <p className="text-gray-700">
                            Nama Pengguna
                        </p>
                        <span className="text-xs text-red-400">Dari:</span>
                        <p className="text-gray-700">
                            Abdul Saed
                        </p>
                        <span className="text-xs text-green-400">Kepada:</span>
                        <p className="text-gray-700">
                            Abdul Sae'd
                        </p>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-4 my-4">
                    <div className="flex justify-between mb-4">
                        <div className="text-sm text-gray-500 flex">
                            10/08/2024
                        </div>
                        <div className="text-sm text-gray-500 flex">
                            <CiClock2 className="mr-2 text-lg text-gray-600" /> 10:32 AM
                        </div>
                    </div>
                    <div className="">
                        <span className="text-xs text-gray-500">Rekod Dikemaskini:</span>
                        <p className="text-gray-700">
                            Status Pemantauan
                        </p>
                        <span className="text-xs text-red-400">Dari:</span>
                        <p className="text-gray-700">
                            -
                        </p>
                        <span className="text-xs text-green-400">Kepada:</span>
                        <p className="text-gray-700">
                            Tercapai sebanyak 85%
                        </p>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                    <div className="flex justify-between mb-4">
                        <div className="text-sm text-gray-500 flex">
                            10/08/2024
                        </div>
                        <div className="text-sm text-gray-500 flex">
                            <CiClock2 className="mr-2 text-lg text-gray-600" /> 11:00 AM
                        </div>
                    </div>
                    <div className="">
                        <span className="text-xs text-gray-500">Rekod Dikemaskini:</span>
                        <p className="text-gray-700">
                            Peratus Terlaksana
                        </p>
                        <span className="text-xs text-red-400">Dari:</span>
                        <p className="text-gray-700">
                            10%
                        </p>
                        <span className="text-xs text-green-400">Kepada:</span>
                        <p className="text-gray-700">
                            52%
                        </p>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-4 my-4">
                    <div className="flex justify-between mb-4">
                        <div className="text-sm text-gray-500 flex">
                            10/08/2024
                        </div>
                        <div className="text-sm text-gray-500 flex">
                            <CiClock2 className="mr-2 text-lg text-gray-600" /> 11:00 AM
                        </div>
                    </div>
                    <div className="">
                        <span className="text-xs text-gray-500">Rekod Dikemaskini:</span>
                        <p className="text-gray-700">
                            Catatan Pemantauan
                        </p>
                        <span className="text-xs text-red-400">Dari:</span>
                        <p className="text-gray-700">
                            Pemantauan tertunda
                        </p>
                        <span className="text-xs text-green-400">Kepada:</span>
                        <p className="text-gray-700">
                            Pemantauan tertunda disebabkan faktor peralihan monsun disekitar kawasan yang dipantau.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                    <div className="flex justify-between mb-4">
                        <div className="text-sm text-gray-500 flex">
                            10/08/2024
                        </div>
                        <div className="text-sm text-gray-500 flex">
                            <CiClock2 className="mr-2 text-lg text-gray-600" /> 11:00 AM
                        </div>
                    </div>
                    <div className="">
                        <span className="text-xs text-gray-500">Rekod Dikemaskini:</span>
                        <p className="text-gray-700">
                            Metadata
                        </p>
                        <span className="text-xs text-red-400">Dari:</span>
                        <p className="text-gray-700">
                            -
                        </p>
                        <span className="text-xs text-green-400">Kepada:</span>
                        <p className="text-gray-700">
                            Kesahihan Data - Data masih dalam pengesahan
                        </p>
                    </div>
                </div>
            </Drawer>
            <ToastContainer />
        </Layout>
    )
}

export default AuditList
