import React, { useEffect, useState } from "react";
import Drawer from "../../../components/Drawer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import { Checkbox } from "@material-tailwind/react";

const ListFormRole = ({
    isOpen,
    toggleDrawer,
    addNewData,
    updateData,
    selectedData,
    isEdit,
    setIsEdit,
}) => {
    const [formData, setFormData] = useState({
        role: "",
        status: "",
    });
    const [selectAll, setSelectAll] = useState(false);
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    const [getPermission, setGetPermission] = useState([]);

    useEffect(() => {
        // Adding dummy data for getPermission
        const permissions = [
            //USER
            { id: 1, name: "View Users" },
            { id: 2, name: "Edit Users" },
            { id: 3, name: "Delete Users" },
            //ROLE
            { id: 5, name: "Manage Permissions" },
            { id: 7, name: "Edit Roles" },
            { id: 8, name: "Delete Roles" },
            //CMS
            { id: 12, name: "Manage CMS" },
            { id: 9, name: "View CMS" },
            { id: 10, name: "Edit CMS" },
            { id: 11, name: "Delete CMS" },
            //Data Collection
            { id: 13, name: "View Data Collection" },
            { id: 14, name: "Edit Data Collection" },
            { id: 15, name: "Delete Data Collection" },
            //Pengesahan Data
            { id: 16, name: "View Pengesahan Data" },
            { id: 17, name: "Edit Pengesahan Data" },
            { id: 18, name: "Delete Pengesahan Data" },
            //Metadata
            { id: 19, name: "View Metadata" },
            { id: 20, name: "Edit Metadata" },
            { id: 21, name: "Delete Metadata" },
        ];
        setGetPermission(permissions);
    }, []);

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value === "" || value === "null" ? null : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: selectedData?.id || null,
            role: formData.role,
            status: formData.status,
            permissions: selectedPermissions,
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
            role: "",
            status: "",
        });
        setSelectedPermissions([]);
        setSelectAll(false);
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
            role: selectedData.role || "",
            status: selectedData.status || "",
        });
        setSelectedPermissions(selectedData.permissions || []);
    };

    // Handle 'Select All' or 'Deselect All'
    const handleSelectAllChange = () => {
        if (selectAll) {
            setSelectedPermissions([]); // Deselect all
        } else {
            setSelectedPermissions(getPermission.map((permission) => permission.id)); // Select all
        }
        setSelectAll(!selectAll); // Toggle select all state
    };

    // Handle individual checkbox change
    const handleCheckboxChange = (permissionId) => {
        setSelectedPermissions((prevSelected) =>
            prevSelected.includes(permissionId)
                ? prevSelected.filter((id) => id !== permissionId)
                : [...prevSelected, permissionId]
        );
    };

    return (
        <>
            <Drawer
                isOpen={isOpen}
                toggleDrawer={toggleDrawer}
                title={
                    isEdit
                        ? "Kemaskini Tetapan Peranan"
                        : "Tambah Tetapan Peranan"
                }
                size="lg"
            >
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-6 p-3">
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                type="text"
                                label="Jenis Peranan"
                                placeholder="Sila nyatakan role"
                                value={formData.role}
                                required={true}
                                onChange={(e) => handleChange("role", e.target.value)}
                            />
                            <div>
                                <label className="block text-sm font-medium mb-[6px]">
                                    Status <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={(e) =>
                                        handleChange("status", e.target.value)
                                    }
                                    className="border border-[#20409A] text-gray-900 text-sm block w-full p-3 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white rounded-lg"
                                >
                                    <option value="" className="text-gray-400">
                                        Sila Pilih status
                                    </option>
                                    <option value="Aktif">Aktif</option>
                                    <option value="Tidak Aktif">
                                        Tidak Aktif
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <Checkbox
                                label="Pilih Semua"
                                color="purple"
                                checked={selectAll}
                                onChange={handleSelectAllChange}
                            />
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-1">
                            {getPermission.map((item) => (
                                <div key={item.id}>
                                    <Checkbox
                                        checked={selectedPermissions.includes(item.id)}
                                        label={item.name}
                                        value={item.id}
                                        onChange={() =>
                                            handleCheckboxChange(item.id)
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end w-full">
                            <Button theme="solid">
                                {isEdit ? "Kemas Kini" : "Simpan"}
                            </Button>
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

export default ListFormRole;
