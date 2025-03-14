import Button from "../../Components/Button"
import Layout from "../../Layout/Layout"
import { IoFolderOpenOutline } from "react-icons/io5"
import { FaRegTrashAlt } from "react-icons/fa"
import Drawer from "../../components/Drawer"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation } from "react-router-dom"
import Input from "../../Components/Input"
import { FaSearch } from "react-icons/fa"
import { IoEye } from "react-icons/io5"
import DataCollectionView from './DataCollectionView';

const DataCollectionByAgensiView = () => {
    const location = useLocation();
    const { agensi } = location.state || {}; // Extract agensi from location.state
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);


    console.log(agensi); // Debug: Check if agensi is correctly passed

    if (!agensi) {
        return <p>Data not available. Please navigate from the Data Collection page.</p>;
    }

    const [data, setData] = useState([
        {
            id: 1,
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
        },
        {
            id: 2,
            title: "Urban Development Plan",
            description: "Details of urban development initiatives and city planning data.",
            keywords: ["urban", "development", "city planning"],
            category: "Urban Planning",
            author: "Urban Development Authority",
            creationDate: "2022-11-20",
            source: "City Planning Office",
            publisher: "Urban Development Authority",
            publicationDate: "2022-12-10",
            language: "English",
            accessLevel: "Restricted",
            license: "Proprietary",
            url: "https://cityplanning.gov/urban-plan",
            format: "PDF",
            size: "5.4MB",
            spatialCoverage: "City-Level",
            temporalCoverage: "2022-2025",
            status: "Aktif",
        },
        {
            id: 3,
            title: "Climate Change Impact Analysis",
            description: "Comprehensive analysis of climate change effects over the last decade.",
            keywords: ["climate change", "environment", "impact analysis"],
            category: "Environment",
            author: "Environmental Protection Agency",
            creationDate: "2023-06-01",
            source: "Environmental Database",
            publisher: "EPA",
            publicationDate: "2023-07-15",
            language: "English",
            accessLevel: "Public",
            license: "Creative Commons",
            url: "https://epa.gov/climate-impact",
            format: "JSON",
            size: "3.8MB",
            spatialCoverage: "National",
            temporalCoverage: "2013-2023",
            status: "Aktif",
        },
        {
            id: 4,
            title: "Land Use Data 2024",
            description: "Detailed information on land use patterns for the upcoming year.",
            keywords: ["land use", "geography", "2024"],
            category: "Geography",
            author: "Geospatial Data Agency",
            creationDate: "2023-09-10",
            source: "Geospatial Database",
            publisher: "Geospatial Data Agency",
            publicationDate: "2023-09-20",
            language: "English",
            accessLevel: "Confidential",
            license: "Proprietary",
            url: "https://geoagency.gov/land-use-2024",
            format: "GeoJSON",
            size: "2.7MB",
            spatialCoverage: "Regional",
            temporalCoverage: "2024",
            status: "Aktif",
        },
        {
            id: 5,
            title: "Housing Development Statistics 2023",
            description: "Comprehensive statistics on housing developments, including urban and rural areas.",
            keywords: ["housing", "development", "2023"],
            category: "Construction",
            author: "Housing and Urban Development Authority",
            creationDate: "2023-02-01",
            source: "Housing Data Repository",
            publisher: "Urban Housing Ministry",
            publicationDate: "2023-03-01",
            language: "English",
            accessLevel: "Public",
            license: "Open Data",
            url: "https://housing.gov/housing-2023",
            format: "CSV",
            size: "2.5MB",
            spatialCoverage: "National",
            temporalCoverage: "2023",
            status: "Aktif",
        },
        {
            id: 6,
            title: "Affordable Housing Projects 2024",
            description: "Data on planned affordable housing projects for the year 2024.",
            keywords: ["housing", "affordable", "2024"],
            category: "Housing",
            author: "Affordable Housing Initiative",
            creationDate: "2023-08-10",
            source: "Affordable Housing Database",
            publisher: "Housing Ministry",
            publicationDate: "2023-09-05",
            language: "English",
            accessLevel: "Restricted",
            license: "Proprietary",
            url: "https://housing.gov/affordable-2024",
            format: "PDF",
            size: "4.1MB",
            spatialCoverage: "Regional",
            temporalCoverage: "2024",
            status: "Aktif",
        },
        {
            id: 7,
            title: "Construction Industry Growth Report 2022",
            description: "Insights and trends in the construction industry's growth in 2022.",
            keywords: ["construction", "growth", "industry"],
            category: "Growth",
            author: "Construction Authority",
            creationDate: "2022-10-15",
            source: "Construction Data Repository",
            publisher: "Construction Authority",
            publicationDate: "2022-11-20",
            language: "English",
            accessLevel: "Public",
            license: "Creative Commons",
            url: "https://construction.gov/growth-2022",
            format: "PDF",
            size: "3.9MB",
            spatialCoverage: "National",
            temporalCoverage: "2022",
            status: "Aktif",
        },
        {
            id: 8,
            title: "Urban Growth and Expansion Analysis 2023",
            description: "Analysis of urban growth patterns and expansion plans.",
            keywords: ["urban", "growth", "expansion"],
            category: "Urban Planning",
            author: "Urban Growth Monitoring Authority",
            creationDate: "2023-04-01",
            source: "Urban Data Repository",
            publisher: "Urban Planning Authority",
            publicationDate: "2023-04-15",
            language: "English",
            accessLevel: "Public",
            license: "Open Data",
            url: "https://urbanplanning.gov/growth-2023",
            format: "GeoJSON",
            size: "6.5MB",
            spatialCoverage: "City-Level",
            temporalCoverage: "2023",
            status: "Aktif",
        },
        {
            id: 9,
            title: "Infrastructure Development Plan 2025",
            description: "A strategic plan outlining major infrastructure developments through 2025.",
            keywords: ["infrastructure", "development", "2025"],
            category: "Construction",
            author: "Infrastructure Development Authority",
            creationDate: "2023-06-20",
            source: "National Infrastructure Database",
            publisher: "Infrastructure Ministry",
            publicationDate: "2023-07-10",
            language: "English",
            accessLevel: "Restricted",
            license: "Proprietary",
            url: "https://infrastructure.gov/plan-2025",
            format: "PDF",
            size: "5.2MB",
            spatialCoverage: "National",
            temporalCoverage: "2023-2025",
            status: "Aktif",
        },
        {
            id: 10,
            title: "Land Development Projects 2024",
            description: "Data on key land development projects scheduled for 2024.",
            keywords: ["land", "development", "2024"],
            category: "Construction",
            author: "Land Development Authority",
            creationDate: "2023-05-15",
            source: "Land Development Database",
            publisher: "National Land Agency",
            publicationDate: "2023-06-01",
            language: "English",
            accessLevel: "Public",
            license: "Creative Commons",
            url: "https://landdevelopment.gov/projects-2024",
            format: "CSV",
            size: "3.7MB",
            spatialCoverage: "Regional",
            temporalCoverage: "2024",
            status: "Aktif",
        },
        {
            id: 11,
            title: "Construction Workforce Statistics 2023",
            description: "Statistics on the workforce engaged in the construction sector in 2023.",
            keywords: ["workforce", "construction", "statistics"],
            category: "Labor",
            author: "Labor Market Authority",
            creationDate: "2023-01-25",
            source: "Construction Labor Database",
            publisher: "Labor Ministry",
            publicationDate: "2023-02-10",
            language: "English",
            accessLevel: "Public",
            license: "Open Data",
            url: "https://labormarket.gov/construction-workforce-2023",
            format: "CSV",
            size: "2.3MB",
            spatialCoverage: "National",
            temporalCoverage: "2023",
            status: "Aktif",
        },
        {
            id: 12,
            title: "Residential Growth Report 2023",
            description: "A detailed report on residential growth trends in 2023.",
            keywords: ["residential", "growth", "housing"],
            category: "Housing",
            author: "Residential Planning Bureau",
            creationDate: "2023-07-05",
            source: "Residential Data Repository",
            publisher: "Housing Ministry",
            publicationDate: "2023-08-01",
            language: "English",
            accessLevel: "Public",
            license: "Open Data",
            url: "https://housing.gov/residential-growth-2023",
            format: "PDF",
            size: "4.5MB",
            spatialCoverage: "City-Level",
            temporalCoverage: "2023",
            status: "Aktif",
        },
        {
            id: 13,
            title: "Smart City Construction Projects 2024",
            description: "Details of ongoing and upcoming smart city construction projects.",
            keywords: ["smart city", "construction", "projects"],
            category: "Urban Planning",
            author: "Smart City Initiative",
            creationDate: "2023-09-12",
            source: "Smart City Database",
            publisher: "Urban Development Ministry",
            publicationDate: "2023-10-01",
            language: "English",
            accessLevel: "Public",
            license: "Open Data",
            url: "https://smartcity.gov/construction-2024",
            format: "GeoJSON",
            size: "6.2MB",
            spatialCoverage: "City-Level",
            temporalCoverage: "2024",
            status: "Aktif",
        },
        {
            id: 14,
            title: "Urban Housing Growth Forecast 2024-2026",
            description: "Forecast data on urban housing growth for the next three years.",
            keywords: ["housing", "growth", "forecast"],
            category: "Housing",
            author: "Housing and Urban Growth Department",
            creationDate: "2023-10-20",
            source: "Urban Growth Database",
            publisher: "National Statistics Bureau",
            publicationDate: "2023-11-01",
            language: "English",
            accessLevel: "Restricted",
            license: "Proprietary",
            url: "https://housing.gov/growth-forecast-2024-2026",
            format: "CSV",
            size: "3.0MB",
            spatialCoverage: "National",
            temporalCoverage: "2024-2026",
            status: "Aktif",
        },

    ]);

    const handleview = (id) => {
        const id_data = data.find((item) => item.id === id);
        setSelectedData(id_data);
        setOpen(true); // Ensure the drawer opens
    };

    const toggleDrawer = () => {
        setOpen(!open)
    }

    const header = [
        { name: "#", key: "#" },
        { name: "Nama Data", key: "title" },
        { name: "Kategori", key: "category" },
        { name: "Sumber", key: "source" },
        { name: "Tarikh Tambah", key: "creationDate" },
        { name: "Tindakan", key: "tindakan" },
    ];

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.source.toLowerCase().includes(search.toLowerCase()
        )
    );

    const gridTemplateColumns = header
        .map((h, index) => (
            h.key === '#' ? '5%'
                : h.key === 'title' ? '30%'
                    : h.key === 'category' ? '15%'
                        : h.key === 'source' ? '20%'
                            : h.key === "creationDate" ? "15%"
                                : h.key === 'tindakan' ? '15%'
                                    : h.width || "1fr"))
        .join(" ");

    const breadcrumb = [
        { label: "Data Collection By Agensi", link: '/data-collection-by-agensi' },
        { label: "Data Collection By Agensi View" }
    ];



    return (
        <Layout title='Data Collection' subtitle={`Senarai Data Collection untuk ${agensi.agensi}`} >
            <Link to="/data-collection-by-agensi" className="flex items-center gap-2 text-blue-500 text-sm">
                <Button type="button" className="mb-5">
                    Kembali
                </Button>
            </Link>
            <div className="flex gap-4 items-center border border-gray-200 shadow-lg rounded-lg p-6">
                <img src={agensi.image} alt={agensi.agensi} className="w-auto h-20" />
                <div className="">
                    <h2 className='text-gray-700 font-semibold tracking-wider text-lg uppercase'>{agensi.agensi}</h2>
                    <p className="text-sm text-gray-500 mt-2">{agensi.description}</p>
                </div>
            </div>
            <div className="mt-8">
                <div className="flex justify-between items-center align-middle mt-2 mb-4">
                    <h2 className="text-[#2196F3] text-lg font-semibold">Senarai Data Collection</h2>
                </div>
                <div className="flex">
                    <div className="w-full">
                        <div className='flex justify-end'>
                            <div className="flex items-center w-72">
                                <Input
                                    type="text"
                                    placeholder="Carian"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    iconPosition="end"
                                    icon={<FaSearch size={18} />}
                                />
                            </div>
                        </div>
                        {/* Table */}
                        <div className="w-full mt-2 bg-[#fefefe]">
                            <div
                                className="grid items-center text-gray-600 uppercase text-sm tracking-wide bg-gray-50 rounded-lg mb-3 mt-4"
                                style={{ gridTemplateColumns }}
                            >
                                {header.map((item) => (
                                    <div key={item.key} className="py-3 px-6 text-center font-semibold tracking-wide">
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="grid text-gray-600 bg-gray-50 rounded-lg text-sm font-light mb-2 hover:bg-gray-100 hover:rounded-lg"
                                        style={{ gridTemplateColumns }}
                                    >
                                        <div className="py-3 px-6 flex items-center">
                                            <div className="text-sm">{index + 1}</div>
                                        </div>
                                        <div className="p-3 flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {item.title}
                                                </div>
                                                <div className="text-sm text-gray-500 mt-2">
                                                    {item.description}
                                                </div>
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {item.keywords?.map((keyword, index) => (
                                                        <span
                                                            key={index}
                                                            className="text-xs font-semibold bg-black text-white px-2 py-1 rounded"
                                                        >
                                                            {keyword}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-3 px-6 flex justify-center items-center">
                                            <div className="text-sm">
                                                {item.category}
                                            </div>
                                        </div>
                                        <div className="py-3 px-6 flex justify-center items-center">
                                            <div className="text-sm">
                                                {item.source}
                                            </div>
                                        </div>
                                        <div className="py-3 px-6 flex justify-center items-center">
                                            <div className="text-sm">
                                                {item.creationDate}
                                            </div>
                                        </div>
                                        <div className="py-3 px-6 flex justify-center items-center">
                                            <div className="flex justify-center items-center gap-2">
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded-lg"
                                                    onClick={() => handleview(item.id)}
                                                >
                                                    <IoEye size={19} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-5 text-center text-gray-600 py-4 bg-gray-50 rounded-md text-sm">
                                    Tiada Data Dijumpai
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <DataCollectionView isOpen={open} toggleDrawer={toggleDrawer} selectedData={selectedData} />
        </Layout>
    )
}

export default DataCollectionByAgensiView
