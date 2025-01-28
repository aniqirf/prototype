import React, { useState, useEffect } from 'react';
import Drawer from '../../components/Drawer';
import { ToastContainer } from 'react-toastify';
import { AiOutlineFileText, AiOutlineFieldTime } from 'react-icons/ai';
import { BiUser, BiCategory } from 'react-icons/bi';
import { MdLanguage, MdLink } from 'react-icons/md';
import { IoKeySharp } from 'react-icons/io5';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import Button from '../../Components/Button';

const DataCollectionView = ({ isOpen, toggleDrawer, selectedData }) => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        keywords: [],
        category: '',
        author: '',
        creationDate: '',
        source: '',
        publisher: '',
        publicationDate: '',
        language: '',
        accessLevel: '',
        license: '',
        url: '',
        format: '',
        size: '',
        spatialCoverage: '',
        temporalCoverage: '',
        status: '',
    });

    const getData = () => {
        setFormData(selectedData);
    };

    useEffect(() => {
        if (selectedData && isOpen) {
            getData();
        }
    }, [selectedData, isOpen]);

    return (
        <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} title="Maklumat Data" size="lg">
            <div className="p-4 space-y-6">
                {/* Section: Metadata Information */}
                <div className="bg-gray-50 py-6 px-8 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Maklumat Data</h3>
                    <div className="flex flex-col gap-4 px-2">
                        <div className="flex items-center gap-2 text-sm">
                            <AiOutlineFileText className="text-gray-500" size={19} />
                            <strong>Nama Data:</strong>
                            {formData.title || '-'}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <AiOutlineFileText className="text-gray-500" size={19} />
                            <strong>Keterangan:</strong> {formData.description || '-'}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <BiCategory className="text-gray-500" size={19} />
                            <strong>Kategori:</strong> {formData.category || '-'}
                        </div>
                        <div className="flex flex-wrap gap-2 text-sm items-center">
                            <IoKeySharp className="text-gray-500" size={19} />
                            <strong>Kata Kunci:</strong>
                            {formData.keywords?.map((keyword, index) => (
                                <span
                                    key={index}
                                    className="text-xs font-semibold bg-black text-white px-2 py-1 rounded"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Section: Access and Licensing */}
                    <h3 className="text-lg font-semibold mb-4 mt-10">Tahap Akses dan Tempoh Data</h3>
                    <div className="flex flex-col gap-4 2">
                        <div className="flex items-center gap-2 text-sm">
                            <MdLanguage className="text-gray-500" size={19} />
                            <strong>Bahasa:</strong> {formData.language || '-'}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <AiOutlineFieldTime className="text-gray-500" size={19} />
                            <strong>Coverage Temporal:</strong> {formData.temporalCoverage || '-'}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <strong>Tahap Akses:</strong> {formData.accessLevel || '-'}
                        </div>
                    </div>

                    {/* Section: Publisher and Source Information */}
                    <h3 className="text-lg font-semibold mb-4 mt-10">Penerbit and Sumber</h3>
                    <div className="flex flex-col gap-4 2">
                        <div className="flex items-center gap-2 text-sm">
                            <BiUser className="text-gray-500" size={19} />
                            <strong>Pengarang:</strong> {formData.author || '-'}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <FaCloudDownloadAlt className="text-gray-500" size={19} />
                            <strong>Sumber:</strong> {formData.source || '-'}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <MdOutlinePublishedWithChanges className="text-gray-500" size={19} />
                            <strong>Penerbit:</strong> {formData.publisher || '-'}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <AiOutlineFieldTime className="text-gray-500" size={19} />
                            <strong>Tarikh Penerbitan:</strong> {formData.publicationDate || '-'}
                        </div>
                    </div>


                    {/* Section: File and URL Information */}
                    <h3 className="text-lg font-semibold mb-4 mt-10">Dokumen and Pautan</h3>
                    <div className="flex flex-col gap-4 2">
                        <div className="flex items-center gap-2 text-sm">
                            <strong>File Dokumen:</strong> {formData.document || 'Tiada Dokumen'}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <strong>Saiz:</strong> {formData.size || '-'}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <strong>Format:</strong> {formData.format || '-'}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <MdLink className="text-gray-500" size={19} />
                            <strong>Pautan:</strong>
                            <a
                                href={formData.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                {formData.url || 'Tiada Maklumat'}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end w-full">
                    <Button onClick={toggleDrawer} type="button">
                        Kembali
                    </Button>
                </div>
            </div>

        </Drawer>
    );
};

export default DataCollectionView;
