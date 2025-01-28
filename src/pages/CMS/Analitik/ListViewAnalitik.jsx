import React, { useEffect, useState } from "react";
import Drawer from "../../../components/Drawer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../Components/Button";

const ListViewAnalitik = ({ isOpen, toggleDrawer, selectedData }) => {
    const [formData, setFormData] = useState({
        tajuk: "",
        kandungan: "",
        pautan: "",
        lampiran: "",
        status: "",
    });

    useEffect(() => {
        if (isOpen) {
            setFormData({
                tajuk: selectedData.tajuk,
                kandungan: selectedData.kandungan,
                pautan: selectedData.pautan,
                lampiran: selectedData.lampiran,
                status: selectedData.status,
            });
        } else {
            handleReset();
        }
    }, [isOpen, selectedData]);

    const handleReset = () => {
        setFormData({
            tajuk: "",
            kandungan: "",
            pautan: "",
            lampiran: "",
            status: "",
        });
    };

    return (
        <>
            <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} title="Maklumat Analitik" size="lg">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center gap-6">
                        {/* Image Section */}
                        <div className="w-3/5 flex justify-center">
                            <img
                                className="rounded-lg"
                                src={formData?.lampiran || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"}
                                alt=""
                            />
                        </div>
                        {/* Table Section */}
                        <div className="bg-gray-50 p-4 flex justify-center rounded-lg">
                            <table className="w-full max-w-md text-left border-collapse">
                                <tbody>
                                    {/* Tajuk */}
                                    <tr className="border-b">
                                        <th className="p-2 text-gray-600 text-sm w-1/3">Tajuk</th>
                                        <td className="p-2 text-gray-800 text-sm">
                                            {formData?.tajuk || "Tajuk"}
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
                                            <div className="py-3 flex items-center">
                                                <div className="text-sm break-words max-w-full">
                                                    {formData?.pautan ? (
                                                        <a href={formData.pautan} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                                                            {formData.pautan}
                                                        </a>
                                                    ) : (
                                                        'Tiada Pautan'
                                                    )}
                                                </div>
                                            </div>
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

export default ListViewAnalitik;
