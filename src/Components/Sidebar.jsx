import React, { useState } from 'react';
import { FaLayerGroup, FaToolbox, FaLock, FaCogs, FaSync, FaUser, FaBuilding } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import Logo from '../assets/tbsb.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdAnalytics } from 'react-icons/md';
import { GiTicket } from 'react-icons/gi';

const Sidebar = () => {
    const location = useLocation(); // Get the current route
    const navigate = useNavigate(); // For navigation
    const [isOpen, setIsOpen] = useState({
        dashboards: false,
        cms: false,
    });

    const toggleMenu = (menu) => {
        setIsOpen({ ...isOpen, [menu]: !isOpen[menu] });
    };

    // Helper to check if a route is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="h-screen bg-white shadow-lg flex flex-col overflow-auto">
            {/* Sidebar Header */}
            <div
                className="p-4 flex flex-col items-center gap-4 cursor-pointer"
                onClick={() => navigate('/')} // Navigate to the home route
            >
                <img src={Logo} alt="KPKT Logo" className="w-28 h-auto object-cover" />
            </div>

            {/* Sidebar Menu */}
            <div className="flex flex-col gap-1 p-3 text-gray-500 overflow-auto">
                {/* Dashboard */}
                <Link to="/dashboard">
                    <div
                        className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/dashboard') ? 'bg-gray-200 text-blue-500' : ''
                            }`}
                        onClick={() => toggleMenu('dashboards')}
                    >
                        <div className="p-2 bg-white rounded-md shadow-lg">
                            <FiHome className={`text-pink-500 ${isActive('/dashboard') && 'text-blue-500'}`} size={19} />
                        </div>
                        <p className="text-sm">Dashboard</p>
                    </div>
                </Link>

                <p className="mt-4 mb-2 font-semibold text-gray-500 text-xs tracking-wide">PENTADBIRAN</p>

                {/* Pengurusan Pengguna */}
                <Link to="/user-list">
                    <div
                        className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/user-list') ? 'bg-gray-200 text-blue-500' : ''
                            }`}
                    >
                        <div className="p-2 bg-white rounded-md shadow-lg">
                            <FaUser className={`text-blue-500 ${isActive('/user-list') && 'text-blue-700'}`} />
                        </div>
                        <p className="text-sm">Pengurusan Pengguna</p>
                    </div>
                </Link>

                {/* Content Management */}
                <div
                    className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full cursor-pointer ${isOpen.cms ? 'bg-gray-200 text-blue-500' : ''
                        }`}
                    onClick={() => toggleMenu('cms')}
                >
                    <div className="p-2 bg-white rounded-md shadow-lg">
                        <FaCogs className={`text-blue-500 ${isOpen.cms && 'text-blue-700'}`} />
                    </div>
                    <p className="text-sm"><i>Content Management</i></p>
                </div>
                {isOpen.cms && (
                    <div className="ml-12 flex flex-col gap-1">
                        <Link to="/cms-pengumuman">
                            <div
                                className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/cms-pengumuman') ? 'bg-gray-200 text-blue-500' : ''
                                    }`}
                            >
                                <p className="text-sm">Pengumuman</p>
                            </div>
                        </Link>
                        <Link to="/cms-berita">
                            <div
                                className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/cms-berita') ? 'bg-gray-200 text-blue-500' : ''
                                    }`}
                            >
                                <p className="text-sm">Berita</p>
                            </div>
                        </Link>
                        <Link to="/cms-analitik">
                            <div
                                className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/cms-analitik') ? 'bg-gray-200 text-blue-500' : ''
                                    }`}
                            >
                                <p className="text-sm">Senarai Analitik</p>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Audit Trails */}
                <Link to="/audit-list">
                    <div
                        className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/audit-list') ? 'bg-gray-200 text-blue-500' : ''
                            }`}
                    >
                        <div className="p-2 bg-white rounded-md shadow-lg">
                            <FaSync className="text-blue-500" />
                        </div>
                        <p className="text-sm"><i>Audit Trails</i></p>
                    </div>
                </Link>

                {/* Roles & Permissions */}
                <Link to="/role">
                    <div
                        className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/role') ? 'bg-gray-200 text-blue-500' : ''
                            }`}
                    >
                        <div className="p-2 bg-white rounded-md shadow-lg">
                            <FaToolbox className="text-blue-500" />
                        </div>
                        <p className="text-sm"><i>Roles & Permissions</i></p>
                    </div>
                </Link>

                <p className="mt-4 mb-2 font-semibold text-gray-500 text-xs tracking-wide">SENARAI MODUL</p>

                {/* Data Collection */}
                {/* <Link to="/data-collection-by-agensi">
                    <div
                        className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/data-collection-list') ? 'bg-gray-200 text-blue-500' : ''
                            }`}
                    >
                        <div className="p-2 bg-white rounded-md shadow-lg">
                            <FaLayerGroup className="text-blue-500" />
                        </div>
                        <p className="text-sm"><i>Data Collection byAgensi</i></p>
                    </div>
                </Link> */}
                {/* Data Collection */}
                {/* <Link to="/data-collection-list">
                    <div
                        className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/data-collection-list') ? 'bg-gray-200 text-blue-500' : ''
                            }`}
                    >
                        <div className="p-2 bg-white rounded-md shadow-lg">
                            <FaLayerGroup className="text-blue-500" />
                        </div>
                        <p className="text-sm"><i>Data Collection</i></p>
                    </div>
                </Link> */}

                {/* Semakan dan Pengesahan Data */}
                {/* <Link to="/pengesahan-data-list">
                    <div
                        className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/pengesahan-data-list') ? 'bg-gray-200 text-blue-500' : ''
                            }`}
                    >
                        <div className="p-2 bg-white rounded-md shadow-lg">
                            <FaLayerGroup className="text-blue-500" />
                        </div>
                        <p className="text-sm">Semakan dan Pengesahan Data</p>
                    </div>
                </Link> */}

                {/* Metadata */}
                {/* <Link to="/metadata-list">
                    <div
                        className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/metadata-list') ? 'bg-gray-200 text-blue-500' : ''
                            }`}
                    >
                        <div className="p-2 bg-white rounded-md shadow-lg">
                            <FaLock className="text-blue-500" />
                        </div>
                        <p className="text-sm">Metadata</p>
                    </div>
                </Link> */}

                {/* Customer */}
                <Link to="/customer-list">
                    <div
                        className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/customer-list') ? 'bg-gray-200 text-blue-500' : ''
                            }`}
                    >
                        <div className="p-2 bg-white rounded-md shadow-lg">
                            <FaBuilding className="text-blue-500" />
                        </div>
                        <p className="text-sm">Customer Registration & Management</p>
                    </div>
                </Link>

                {/* Ticket */}
                <Link to="/ticket-list">
                    <div
                        className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/ticket-list') ? 'bg-gray-200 text-blue-500' : ''
                            }`}
                    >
                        <div className="p-2 bg-white rounded-md shadow-lg">
                            <GiTicket className="text-blue-500" />
                        </div>
                        <p className="text-sm">Job Ticket Management</p>
                    </div>
                </Link>

                {/* Reporting */}
                <Link to="/metadata-list">
                    <div
                        className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full ${isActive('/metadata-list') ? 'bg-gray-200 text-blue-500' : ''
                            }`}
                    >
                        <div className="p-2 bg-white rounded-md shadow-lg">
                            <MdAnalytics className="text-blue-500" />
                        </div>
                        <p className="text-sm">Reporting & Analytics</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
