import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout";
import Button from "../../../Components/Button";
import { IoEye } from "react-icons/io5";
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListViewAnalitik from "./ListViewAnalitik";
import ListFormAnalitik from "./ListFormAnalitik";
import img1 from "../../../../public/1.png";
import img2 from "../../../../public/2.png";
import img3 from "../../../../public/3.png";
import img4 from "../../../../public/4.png";
import img5 from "../../../../public/5.png";
import Input from "../../../Components/Input";
import { FaSearch } from "react-icons/fa";

const Analitik = () => {
    const [search, setSearch] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    const [openFilter, setOpenFilter] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState(null);
    const [isEdit, setIsEdit] = React.useState(false);
    const [data, setData] = React.useState([
        { id: 1, tajuk: "Analitik Kemampuan Memiliki Rumah", kandungan: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", lampiran: img1, pautan: "http://supermap.mysmartmap.com.my/iportal/apps/mapdashboard/v2/index.html?id=2095353586&action=view", status: "Aktif" },
        { id: 2, tajuk: "Analitik Kemampuan Memiliki Rumah", kandungan: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", lampiran: img2, pautan: "https://public.tableau.com/app/profile/map2u2925/viz/POCKPKTBDAV2/Dashboard1?publish=yes", status: "Aktif" },
        { id: 3, tajuk: "Kemampuan Memiliki Rumah", kandungan: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", lampiran: img3, pautan: "https://muo.mdanalytic.my/#/", status: "Aktif" },
        { id: 4, tajuk: "3D Analitik Simulation", kandungan: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", lampiran: img4, pautan: "http://supermap.mysmartmap.com.my/iportal/apps/mapdashboard/v2/index.html?id=1108822039&action=view", status: "Aktif" },
        { id: 5, tajuk: "Analitik Perumahan (SmartMap TM)", kandungan: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", lampiran: img5, pautan: "https://kpkt.webflow.io/analytic#", status: "Aktif" }
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
        { name: "Tajuk", key: "tajuk" },
        { name: "Pautan", key: "pautan" },
        { name: "Lampiran", key: "lampiran" },
        { name: "Status", key: "status" },
        { name: "Tindakan", key: "tindakan" },
    ];

    const filteredData = data.filter((item) => {
        if (!search) return true;
        const searchLower = search.toLowerCase();
        return (
            item.tajuk.toLowerCase().includes(searchLower) ||
            item.kandungan.toLowerCase().includes(searchLower) ||
            item.pautan.toLowerCase().includes(searchLower) ||
            item.status.toLowerCase().includes(searchLower)
        );
    });

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const toggleDrawerView = (id) => {
        const datas = data.find((item) => item.id === id);
        setSelectedData(datas);
        setOpenView(!openView);
    };

    const handleEdit = (id) => {
        console.log('Ediiit', id);
        const datas = data.find((item) => item.id === id);
        setSelectedData(datas);
        setIsEdit(true);
        setOpen(true);
    };

    useEffect(() => {
        if (!open) {
            setSelectedData(null);
            setIsEdit(false);
        }
    }, [open]);

    const gridTemplateColumns = header
        .map((h) => {
            switch (h.key) {
                case "#":
                    return "5%";
                case "tajuk":
                    return "30%";
                case "pautan":
                    return "25%";
                case "lampiran":
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
        { label: "Content Management System" },
        { label: "Senarai Analitik" },
    ];
    return (
        <Layout title='Analitik' subtitle='Memaparkan kesemua tetapan paparan analitik di dalam system TOK BALI SUPPLY BASE' breadcrumb={breadcrumb}>
            <div className="flex">
                <div className="w-full">
                    <div className='flex justify-between'>
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
                                        <div className="text-sm font-semibold">{index + 1}</div>
                                    </div>
                                    <div className="p-3 flex items-center">
                                        <div className="ml-4">
                                            <div className="text-base font-semibold text-gray-900 tracking-wider">
                                                {item.tajuk}
                                            </div>
                                            <div className="text-sm font-medium text-gray-900 tracking-wide">
                                                {item.kandungan}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        <div className="text-sm break-words max-w-full">
                                            <a href={item.pautan} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                                                {item.pautan}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="py-3 px-4 flex items-center">
                                        <img src={item.lampiran} alt="" width={150} className="rounded-lg" />
                                    </div>
                                    <div className="py-3 px-6 flex items-center">
                                        {item.status === "Aktif" ? (
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
            <ListFormAnalitik isOpen={open} toggleDrawer={toggleDrawer} addNewData={addNewData} updateData={updateData} selectedData={selectedData} setIsEdit={setIsEdit} isEdit={isEdit} />
            <ListViewAnalitik selectedData={selectedData} isOpen={openView} toggleDrawer={toggleDrawerView} />
        </Layout>
    )
}

export default Analitik