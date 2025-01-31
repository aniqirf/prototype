import React, { useEffect, useState } from "react";
import Drawer from "../../components/Drawer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Option, Select } from "@material-tailwind/react";
import AvatarUpload from "../../Components/AvatarUpload/AvatarUpload";

const ListForm = ({ isOpen, toggleDrawer, addNewData, updateData, selectedUser, isEdit, setIsEdit }) => {
    const [kategori, setKategori] = useState('');
    const [formData, setFormData] = useState({
        nama_syarikat: "",
        registration_no: "",
        email: "",
        phone_no: "",
        industry: "",
        status: "",
        user_category: "",
        avatar: "",
    });

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value === '' || value === 'null' ? null : value
        });

        if (key === 'user_category') {
            setKategori(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            id: selectedUser?.id || null,
            name: formData.nama_syarikat,
            registration_no: formData.registration_no,
            email: formData.email,
            phone_no: formData.phone_no,
            industry: formData.industry,
            status: formData.status,
            kategori: formData.user_category,
            avatar: formData.avatar,
        };

        if (isEdit) {
            updateData(userData);
        } else {
            addNewData(userData);
        }

        handleReset();
        toggleDrawer();
        showToast(isEdit ? "Berjaya Kemas Kini Syarikat!" : "Berjaya Tambah Syarikat!");
    };

    const handleReset = () => {
        setFormData({
            nama_syarikat: "",
            registration_no: "",
            email: "",
            phone_no: "",
            industry: "",
            status: "",
            user_category: "",
            avatar: "",
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
        if (isEdit && selectedUser) {
            handleEdit();
        }
    }, [isEdit, isOpen, selectedUser]);

    const handleEdit = () => {
        setFormData({
            nama_syarikat: selectedUser.name || "",
            registration_no: selectedUser.registration_no || "",
            email: selectedUser.email || "",
            phone_no: selectedUser.phone_no || "",
            industry: selectedUser.industry || "",
            status: selectedUser.status || "",
            user_category: selectedUser.kategori || "",
            avatar: selectedUser.avatar || "",
        });
    };

    return (
        <>
            <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} title={isEdit? "Kemaskini Syarikat" : "Tambah Syarikat"} size="lg">
                <form onSubmit={handleSubmit}>
                    <div className={`flex justify-center gap-4`}>
                        <AvatarUpload
                            setFormData={setFormData}
                            formData={formData}
                            inputField="avatar"
                            format="png, jpg, jpeg"
                            uploaded={formData.avatar}
                        />
                    </div>
                    <div className="grid gap-4 mb-6">
                        <Input
                            type="text"
                            label="Nama Syarikat"
                            placeholder='Sila nyatakan nama penuh'
                            value={formData.nama_syarikat}
                            onChange={(e) => handleChange('nama_syarikat', e.target.value)}
                        />
                        <div className="grid grid-cols-2 gap-2">
                            <Input
                                type="number"
                                label="No. Pendaftaran Syarikat"
                                placeholder='Sila nyatakan no pendaftaran syarikat'
                                value={formData.registration_no}
                                onChange={(e) => handleChange('registration_no', e.target.value)}
                            />
                            <Input
                                type="email"
                                label="Emel"
                                placeholder='example@gmail.com'
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-sm font-medium mb-[6px]">Industri <span className="text-red-500">*</span></label>
                                <select
                                    name="industry"
                                    value={formData.industry}
                                    onChange={(e) => handleChange('industry', e.target.value)}
                                    className="border border-[#20409A] text-gray-900 text-sm block w-full p-3 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white rounded-lg"
                                >
                                    <option value="" className="text-gray-400">Sila Pilih Industri</option>
                                    <option value="Superadmin">Teknologi</option>
                                    <option value="Admin Modul">Automotif</option>
                                    <option value="Pengguna Berdaftar">Logistik</option>
                                </select>
                            </div>
                            <Input
                                type="phone_no"
                                label="No Telefon"
                                placeholder='Sila nyatakan no telefon'
                                value={formData.phone_no}
                                onChange={(e) => handleChange('phone_no', e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
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
                            {/* <div>
                                <label className="block text-sm font-medium mb-[6px]">Kategori Pengguna <span className="text-red-500">*</span></label>
                                <select
                                    name="user_category"
                                    value={formData.user_category}
                                    onChange={(e) => handleChange('user_category', e.target.value)}
                                    className="border border-[#20409A] text-gray-900 text-sm block w-full p-3 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white rounded-lg"
                                >
                                    <option value="" className="text-gray-400">Sila pilih kategori pengguna</option>
                                    <option value="1">Kategori 1</option>
                                    <option value="2">Kategori 2</option>
                                    <option value="3">Kategori 3</option>
                                    <option value="4">Orang Awam</option>
                                </select>
                            </div> */}
                        </div>

                        {kategori === '1' ? (
                            <>
                                <hr />
                                <div className="grid grid-cols-2 gap-2">
                                    <Input
                                        type="text"
                                        label="Kementerian"
                                        placeholder='Sila nyatakan kementerian'
                                    />
                                    <Input
                                        type="text"
                                        label="Agensi"
                                        placeholder='Sila nyatakan agensi'
                                    />
                                    <Input
                                        type="text"
                                        label="Alamat"
                                        placeholder='Sila nyatakan alamat'
                                    />
                                    <Input
                                        type="text"
                                        label="Poskod"
                                        placeholder='Sila nyatakan poskod'
                                    />
                                    <Input
                                        type="text"
                                        label="Negeri"
                                        placeholder='Sila nyatakan negeri'
                                    />
                                </div>
                            </>
                        ) : kategori === '2' ? (
                            <>
                                <hr />
                                <div className="grid grid-cols-2 gap-2">
                                    <Input
                                        type="text"
                                        label="Negeri"
                                        placeholder='Sila nyatakan negeri'
                                    />
                                    <Input
                                        type="text"
                                        label="Agensi"
                                        placeholder='Sila nyatakan agensi'
                                    />
                                    <Input
                                        type="text"
                                        label="Alamat"
                                        placeholder='Sila nyatakan alamat'
                                    />
                                    <Input
                                        type="text"
                                        label="Poskod"
                                        placeholder='Sila nyatakan poskod'
                                    />
                                </div>
                            </>
                        ) : kategori === '3' ?(
                            <>
                                <hr />
                                <div className="grid grid-cols-2 gap-2">
                                    <Input
                                        type="text"
                                        label="Nama Syarikat"
                                        placeholder='Sila nyatakan nama syarikat' 
                                    />
                                    <Input
                                        type="text"
                                        label="Alamat"
                                        placeholder='Sila nyatakan alamat'
                                    />
                                    <Input
                                        type="text"
                                        label="Poskod"
                                        placeholder='Sila nyatakan poskod'
                                    />
                                    <Input
                                        type="text"
                                        label="No Telefon Pejabat"
                                        placeholder='Sila nyatakan no telefon pejabat'
                                    />
                                    <Input
                                        type="text"
                                        label="Negeri"
                                        placeholder='Sila nyatakan negeri'
                                    />
                                </div>
                            </>
                        ) : null}
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

export default ListForm;
