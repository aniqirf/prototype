import React from 'react';
import { IoIosClose } from "react-icons/io";

const Drawer = ({
    isOpen = false,
    toggleDrawer,
    title,
    children,
    size = "md", // Default size is medium
}) => {
    // Define size classes for the drawer
    const sizeClasses = {
        sm: "w-1/4", // Small size: 25% width
        md: "w-2/5", // Medium size: 40% width (default)
        lg: "w-1/2", // Large size: 50% width
    };

    return (
        <>
            {isOpen && (
                <div
                    onClick={toggleDrawer}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
                    style={{ opacity: isOpen ? 1 : 0 }}
                ></div>
            )}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`fixed z-40 transition-transform duration-500 ease-in-out bg-white shadow-lg dark:bg-gray-800 overflow-auto h-full right-0 top-0 rounded-tl-md rounded-bl-md ${sizeClasses[size] || sizeClasses.md
                    } ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="sticky top-0 flex items-center px-5 py-3 justify-between border-b border-gray-200 bg-white dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-blue-gray-700">{title}</h2>
                    <button
                        onClick={toggleDrawer}
                        className="rounded-lg text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <IoIosClose className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-4">{children}</div>
            </div>
        </>
    );
};

export default Drawer;