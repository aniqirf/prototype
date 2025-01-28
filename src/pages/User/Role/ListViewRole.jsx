import React, { useEffect, useState } from "react";
import Drawer from "../../../components/Drawer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../Components/Button";

const ListViewRole = ({ isOpen, toggleDrawer, selectedData }) => {
    const [formData, setFormData] = useState({
        tajuk: "",
        status: "",
    });

    useEffect(() => {
        if (isOpen) {
            setFormData({
                tajuk: selectedData.tajuk,
                status: selectedData.status,
            });
        } else {
            handleReset();
        }
    }, [isOpen, selectedData]);

    const handleReset = () => {
        setFormData({
            tajuk: "",
            status: "",
        });
    };

    return (
        <>
            <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} title="Maklumat Tetapan Peranan" size="lg">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center gap-6">                        
                        {/* Table Section */}
                        <div className="bg-gray-50 p-4 w-4/5 flex justify-center rounded-lg">
                            <table className="w-full max-w-md text-left border-collapse">
                                <tbody>
                                    {/* Tajuk */}
                                    <tr className="border-b">
                                        <th className="p-2 text-gray-600 text-sm w-1/3">Jenis Peranan</th>
                                        <td className="p-2 text-gray-800 text-sm">
                                            {formData?.role || "Role"}
                                        </td>
                                    </tr>
                                    {/* Kandungan */}
                                    <tr className="border-b">
                                        <th className="p-2 text-gray-600 text-sm w-1/3">Kandungan</th>
                                        <td className="p-2 text-gray-800 text-sm">
                                            {formData?.kandungan || "Kandungan"}
                                        </td>
                                    </tr>
                                    {/* Pautan */}
                                    <tr className="border-b">
                                        <th className="p-2 text-gray-600 text-sm w-1/3">Pautan</th>
                                        <td className="p-2 text-gray-800 text-sm">
                                            {formData?.pautan || "Pautan"}
                                        </td>
                                    </tr>
                                    {/* Status */}
                                    <tr>
                                        <th className="p-2 text-gray-600 text-sm w-1/3">Status</th>
                                        <td className="p-2 text-gray-800 text-sm">
                                            {formData?.status === "Aktif" ? (
                                                <span className="text-nowrap bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                                    Aktif
                                                </span>
                                            ) : (
                                                <span className="text-nowrap bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                                    Tidak Aktif
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="flex justify-end w-full mt-4">
                        <Button onClick={toggleDrawer} type="button">
                            Kembali
                        </Button>
                    </div>
                </div>
            </Drawer>
            <ToastContainer />
        </>
    );
};

export default ListViewRole;
