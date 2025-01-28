import React, { useEffect, useState } from "react";
import Drawer from "../../../components/Drawer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";

const ListFormAnalitik = ({ isOpen, toggleDrawer, addNewData, updateData, selectedData, isEdit, setIsEdit }) => {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [formData, setFormData] = useState({
        tajuk: "",
        kandungan: "",
        pautan: "",
        lampiran: null,
        status: "",
    });

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value === '' || value === 'null' ? null : value
        });
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                lampiran: file,
            });
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setFormData({
                ...formData,
                lampiran: null,
            });
            setPreviewUrl(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: selectedData?.id || null,
            tajuk: formData.tajuk,
            kandungan: formData.kandungan,
            pautan: formData.pautan,
            lampiran: formData.lampiran,
            status: formData.status,

        };

        if (isEdit) {
            updateData(data);
        } else {
            addNewData(data);
        }

        handleReset();
        toggleDrawer();
        showToast(isEdit ? "Berjaya Kemas Kini Data!" : "Berjaya Tambah Data!");
    };

    const handleReset = () => {
        setFormData({
            tajuk: "",
            kandungan: "",
            pautan: "",
            lampiran: null,
            status: "",
        });
        setIsEdit(false);
    };


    const showToast = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    useEffect(() => {
        if (isEdit && selectedData) {
            handleEdit();
        }
    }, [isEdit, isOpen, selectedData]);

    useEffect(() => {
        if (!isOpen) {
            handleReset();
        }
    }, [isOpen]);

    const handleEdit = () => {
        setFormData({
            tajuk: selectedData.tajuk || "",
            kandungan: selectedData.kandungan || "",
            pautan: selectedData.pautan || "",
            lampiran: selectedData.lampiran || "",
            status: selectedData.status || "",
        });
    };

    return (
        <>
            <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} title={isEdit ? "Kemaskini Analitik" : "Tambah Analitik"} size="lg">
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-6 p-3">
                        <Input
                            type="text"
                            label="Tajuk"
                            placeholder='Sila nyatakan tajuk'
                            value={formData.tajuk}
                            onChange={(e) => handleChange('tajuk', e.target.value)}
                        />
                        <div>
                            <label className="block text-sm font-medium">Kandungan</label>
                            <textarea
                                name="description"
                                value={formData.kandungan}
                                onChange={(e) => handleChange('kandungan', e.target.value)}
                                className="border text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none bg-white border-[#20409A] focus:border-2 focus:border-gray-700 rounded-lg"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <Input
                                type="text"
                                label="Pautan"
                                placeholder='Sila nyatakan pautan'
                                value={formData.pautan}
                                onChange={(e) => handleChange('pautan', e.target.value)}
                            />
                            <div>
                                <label className="block text-sm font-medium mb-[6px]">Status <span className="text-red-500">*</span></label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={(e) => handleChange('status', e.target.value)}
                                    className="border border-[#20409A] text-gray-900 text-sm block w-full p-3 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white rounded-lg"
                                >
                                    <option value="" className="text-gray-400">Sila Pilih status</option>
                                    <option value="Aktif">Aktif</option>
                                    <option value="Tidak Aktif">Tidak Aktif</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="block text-sm font-medium">Muat Naik Dokumen</label>
                            <input
                                type="file"
                                name="document"
                                onChange={handleFileChange}
                                className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                            />
                            {formData.lampiran && previewUrl && (
                                <div className="mt-2">
                                    {formData.lampiran.type?.startsWith('image/') ? (
                                        <img
                                            src={previewUrl}
                                            alt="Preview"
                                            className="max-w-full max-h-52 border rounded-lg"
                                        />
                                    ) : null}
                                </div>
                            )}
                        </div>
                        <div className="flex justify-end w-full">
                            <Button theme="solid">{isEdit ? "Kemas Kini" : "Simpan"}</Button>
                            <Button onClick={toggleDrawer} type="button">
                                Kembali
                            </Button>
                        </div>
                    </div>
                </form>
            </Drawer>
        </>
    );
};

export default ListFormAnalitik;
