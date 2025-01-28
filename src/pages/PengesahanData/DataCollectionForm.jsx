import React, { useState, useEffect } from 'react';
import Drawer from '../../components/Drawer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../Layout/Layout';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Textarea from '../../Components/TextArea';
import CustomSelect from '../../Components/CustomSelect';

const DataCollectionForm = ({ isOpen, toggleDrawer, addNewData, updateData, selectedData, isEdit, setIsEdit }) => {
    const [formData, setFormData] = useState({
        id: '',
        title: "",
        description: "",
        keywords: [],
        category: "",
        author: "",
        creationDate: "",
        source: "",
        publisher: "",
        publicationDate: "",
        language: "",
        accessLevel: "",
        license: "",
        url: "",
        format: "",
        size: "",
        spatialCoverage: "",
        temporalCoverage: "",
        status: "",
        document: null, // For uploaded file
    });

    // console.log(selectedData);
    // console.log(formData);

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value === '' || value === 'null' ? null : value
        });
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({ ...prev, document: file }));
    };

    const handleAccessLevel = (selectedValue) => {
        setFormData((prevState) => ({
            ...prevState,
            accessLevel: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: formData.id || null,
            title: formData.title,
            description: formData.description,
            keywords: formData.keywords,
            category: formData.category,
            author: formData.author,
            source: formData.source,
            publisher: formData.publisher,
            temporalCoverage: formData.temporalCoverage,
            accessLevel: formData.accessLevel,
            document: formData.document,
        };

        if (isEdit) {
            updateData(data);
        } else {
            addNewData(data);
        }
        handleReset();
        toggleDrawer();
        showToast(isEdit ? "Berjaya Kemas Kini Pengguna!" : "Berjaya Tambah Pengguna!");
    };

    const handleReset = () => {
        setFormData({
            id: '',
            title: "",
            description: "",
            keywords: [],
            category: "",
            author: "",
            source: "",
            publisher: "",
            temporalCoverage: "",
            accessLevel: "",
            document: null,
        });
        setIsEdit(false);
        toggleDrawer();
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

    const handleEdit = () => {
        setFormData({
            id: selectedData.id || "",
            title: selectedData.title || "",
            description: selectedData.description || "",
            keywords: selectedData.keywords || [],
            category: selectedData.category || "",
            author: selectedData.author || "",
            source: selectedData.source || "",
            publisher: selectedData.publisher || "",
            temporalCoverage: selectedData.temporalCoverage || "",
            accessLevel: selectedData.accessLevel || "",
            document: null,
        });
    };

    // console.log(formData, isEdit);

    return (
        <>
            <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} title="Tambah Data" size='lg'>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-6">
                        <div className='flex flex-col gap-2'>
                            <Input
                                name="title"
                                id="title"
                                type="text"
                                label="Nama Data"
                                placeholder="Nama Data"
                                required
                                value={formData.title}
                                onChange={(e) =>
                                    handleChange("title", e.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Textarea
                                name="description"
                                id="description"
                                rows={5}
                                label="Keterangan"
                                placeholder="Keterangan"
                                required
                                value={formData.description}
                                onChange={(e) =>
                                    handleChange("description", e.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input
                                name="keywords"
                                id="keywords"
                                type="text"
                                label="Kata Kunci"
                                placeholder="Kata Kunci"
                                required
                                value={formData.keywords.join(", ")}
                                onChange={(e) => handleChange({ target: { name: "keywords", value: e.target.value.split(", ") } })}
                            />
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="flex flex-col gap-2">
                                <Input
                                    name="category"
                                    id="category"
                                    type="text"
                                    label="Kategori"
                                    placeholder="Kategori"
                                    required
                                    value={formData.category}
                                    onChange={(e) =>
                                        handleChange("category", e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Input
                                    name="author"
                                    id="author"
                                    type="text"
                                    label="Pengarang"
                                    placeholder="Pengarang"
                                    required
                                    value={formData.author}
                                    onChange={(e) =>
                                        handleChange("author", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="flex flex-col gap-2">
                                <Input
                                    name="source"
                                    id="source"
                                    type="text"
                                    label="Sumber"
                                    placeholder="Sumber"
                                    required
                                    value={formData.source}
                                    onChange={(e) =>
                                        handleChange("source", e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Input
                                    name="publisher"
                                    id="publisher"
                                    type="text"
                                    label="Penerbit"
                                    placeholder="Penerbit"
                                    required
                                    value={formData.publisher}
                                    onChange={(e) =>
                                        handleChange("publisher", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <Input
                                name="temporalCoverage"
                                id="temporalCoverage"
                                type="text"
                                label="Tempoh Data"
                                placeholder="Tempoh Data"
                                required
                                value={formData.temporalCoverage}
                                onChange={(e) =>
                                    handleChange("temporalCoverage", e.target.value)
                                }
                            />
                            <CustomSelect
                                name="accessLevel"
                                id="accessLevel"
                                label="Akses Level"
                                placeholder="Akses Level"
                                required
                                value={formData.accessLevel}
                                onChange={(selectedValue) =>
                                    handleAccessLevel(selectedValue)
                                }
                                options={[
                                    { value: "Confidential", label: "Sulit" },
                                    { value: "Public", label: "Awam" },
                                    { value: "Restricted", label: "Terhad" },
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
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
                                    hover:file:bg-blue-100 border border-1 border-blue-600 p-2 rounded-md"
                            />
                            {formData.document && <p className="mt-2 text-sm text-gray-600">Selected File: {formData.document.name}</p>}
                        </div>
                        <div className="flex justify-end w-full">
                            <Button theme="solid">
                                Simpan
                            </Button>
                            <Button onClick={handleReset} type="button">
                                Kembali
                            </Button>
                        </div>
                    </div>

                </form>
            </Drawer>
        </>
    );
};

export default DataCollectionForm;
