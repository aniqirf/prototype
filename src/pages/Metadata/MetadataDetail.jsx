import Button from "../../Components/Button"
import Layout from "../../Layout/Layout"
import { IoFolderOpenOutline } from "react-icons/io5"
import { FaRegTrashAlt } from "react-icons/fa"
import Drawer from "../../components/Drawer"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MetadataDetail = () => {
    const [data, setData] = useState({
        // id: 1,
        title: "Population Statistics 2023",
        description: "Metadata for population demographics and trends for the year 2023.",
        keywords: ["population", "demographics", "2023"],
        category: "Demographics",
        author: "National Statistics Department",
        creationDate: "2023-01-15",
        source: "National Data Repository",
        publisher: "Statistics Authority",
        publicationDate: "2023-02-01",
        language: "English",
        accessLevel: "Public",
        license: "Open Data",
        url: "https://data.gov/population-2023",
        format: "CSV",
        size: "1.2MB",
        spatialCoverage: "Global",
        temporalCoverage: "2023",
        status: "Aktif",
    });

    const capitalize = (key) => key.charAt(0).toUpperCase() + key.slice(1);
    const [formData, setFormData] = useState({
        label: "",
        metadata: "",
    });
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...data, [formData.label]: formData.metadata };
        setData(newData);
        console.log("Updated Data:", newData);
        setFormData({
            label: "",
            metadata: "",
        });
        showToast();
    };

    const handleDelete = (keyToRemove) => {
        const updatedData = Object.fromEntries(
            Object.entries(data).filter(([key]) => key !== keyToRemove)
        );
        setData(updatedData);
        toast.success(`Metadata '${capitalize(keyToRemove)}' has been removed!`, {
            position: 'top-right',
            autoClose: 3000,
        });
    };

    const showToast = () => {
        toast.success('Metadata berjaya ditambah!', {
            position: 'top-right',
            autoClose: 3000,
        });
        toggleDrawer();
    };
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <Layout title='Paparan Metadata' subtitle='Memaparkan set metadata bagi data yang dipilih.'>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="flex gap-4 items-center border border-gray-200 shadow-lg rounded-lg px-2 py-4">
                <IoFolderOpenOutline className='text-[#2196F3] text-8xl' />
                <div className="">
                    <h2 className='text-gray-700 font-semibold tracking-wider'>{data.title}</h2>
                    <p className="text-sm text-gray-500">{data.description}</p>
                </div>
            </div>
            <div className="mt-8">
                <div className="flex justify-between items-center align-middle mt-2 mb-4">
                    <h2 className="text-[#2196F3] text-lg">Set Metadata Tersedia</h2>
                    <Button onClick={toggleDrawer}>Tambah Metadata</Button>
                </div>
                {Object.entries(data).map(([key, value]) => (
                    <div className="flex justify-between px-2 py-2 rounded border-b border-gray-200 group hover:bg-gray-100" key={key}>
                        <div className="flex">
                            <dt className="text-gray-600">{capitalize(key)} : </dt>
                            <dd className="ml-2 text-gray-800">{Array.isArray(value) ? value.join(", ") : value.toString()}</dd>
                        </div>
                        <button className="invisible group-hover:visible transition-all ease-in-out duration-75" onClick={() => handleDelete(key)}><FaRegTrashAlt className="text-red-400 mr-5 text-lg" /></button>
                    </div>
                ))}
            </div>

            <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} title="Tambah Metadata" size='lg'>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6">
                        <div className='flex flex-col gap-2'>
                            <label className="block text-sm font-medium">Label</label>
                            <input
                                type="text"
                                name="label"
                                value={formData.label}
                                onChange={handleChange}
                                className="border text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none bg-white border-gray-300 focus:border-2 focus:border-gray-700 rounded-lg"
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className="block text-sm font-medium">Metadata</label>
                            <input
                                type="text"
                                name="metadata"
                                value={formData.metadata}
                                onChange={handleChange}
                                className="border text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none bg-white border-gray-300 focus:border-2 focus:border-gray-700 rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end w-full">
                        <Button theme="solid" type="submit">
                            Simpan
                        </Button>
                        <Button onClick={toggleDrawer} type="button">
                            Kembali
                        </Button>
                    </div>
                </form>
            </Drawer>
            <ToastContainer />
        </Layout>
    )
}

export default MetadataDetail
