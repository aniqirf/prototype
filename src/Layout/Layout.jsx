import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

const Layout = ({ children, title = "Title Goes Here", subtitle = "Subtitle or additional description goes here.", breadcrumb = [] }) => {
    return (
        <div className="h-screen flex max-w-[100vw]">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5">
                <Navbar breadcrumb={breadcrumb} />
                <div className="bg-gray-100 p-8 relative top-16 overflow-scroll overflow-x-hidden h-[calc(100vh-64px)]">
                    <div className="max-w-full mx-auto bg-white rounded-xl shadow-lg p-6">
                        {/* Title and Subtitle */}
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                            <p className="text-gray-600 mt-2">{subtitle}</p>
                        </div>

                        {/* Children */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
