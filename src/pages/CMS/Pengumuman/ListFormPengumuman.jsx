import React, { useEffect, useState } from "react";
import Drawer from "../../../components/Drawer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";

const ListFormPengumuman = ({ isOpen, toggleDrawer, addNewData, updateData, selectedData, isEdit, setIsEdit }) => {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [formData, setFormData] = useState({
        tajuk: "",
        status: "",
    });

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value === '' || value === 'null' ? null : value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: selectedData?.id || null,
            tajuk: formData.tajuk,
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
            status: selectedData.status || "",
        });
    };

    return (
        <>
            <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} title={isEdit ? "Kemaskini Pengumuman" : "Tambah Pengumuman"} size="sm">
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

export default ListFormPengumuman;
