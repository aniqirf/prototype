import React from 'react'
import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

// Import local images
import jataImage from '../../assets/kpkt.png';
import primaImage from '../../assets/prima.svg'
import lphsImage from '../../assets/lphs.png';
import mpajImage from '../../assets/mpaj.png';
import ppjImage from '../../assets/ppj.png';
import mbsaImage from '../../assets/mbsa.png';
import mbpjImage from '../../assets/mbpj.png';
import mpkjImage from '../../assets/mpkj.png';
import cidbImage from '../../assets/cidb.png';
import jpspnImage from '../../assets/JPSPN.png';
import swcorpImage from '../../assets/swcorp.png';


const DataCollectionByAgensi = () => {
    const breadcrumb = [
        { label: "Data Collection" },
    ];

    const data = [
        {
            id: 1,
            agensi: 'Jabatan Perumahan Negara (JPN)',
            image: jataImage,
            description: 'Menguruskan pembangunan perumahan awam, menyediakan garis panduan perumahan, dan memastikan kesejahteraan penduduk melalui perancangan perumahan yang mampan.',
        },
        {
            id: 2,
            agensi: 'Jabatan Kerajaan Tempatan (JKT)',
            image: jataImage,
            description: 'Bertanggungjawab terhadap penyelarasan dasar dan pengurusan kerajaan tempatan, serta menyokong pembangunan mampan di kawasan bandar dan luar bandar.',
        },
        {
            id: 3,
            agensi: 'Perbadanan PR1MA Malaysia (PR1MA)',
            image: primaImage,
            description: 'Menyediakan rumah mampu milik untuk golongan pertengahan dan menyokong aspirasi perumahan rakyat Malaysia.',
        },
        {
            id: 4,
            agensi: 'Lembaga Perumahan dan Hartanah Selangor (LPHS)',
            image: lphsImage,
            description: 'Mengawal selia dan membangunkan perumahan serta hartanah di Selangor dengan matlamat meningkatkan taraf hidup rakyat.',
        },
        {
            id: 5,
            agensi: 'Majlis Perbandaran Ampang Jaya (MPAJ)',
            image: mpajImage,
            description: 'Menguruskan perkhidmatan bandar seperti pembangunan, kebersihan, dan kesejahteraan masyarakat di kawasan Ampang Jaya.',
        },
        {
            id: 6,
            agensi: 'Perbadanan Putrajaya (PPj)',
            image: ppjImage,
            description: 'Menguruskan pembangunan dan perkhidmatan bandar di Putrajaya sebagai pusat pentadbiran kerajaan persekutuan.',
        },
        {
            id: 7,
            agensi: 'Majlis Bandaraya Shah Alam (MBSA)',
            image: mbsaImage,
            description: 'Menyediakan perkhidmatan bandar, termasuk pembangunan, kebersihan, dan penguatkuasaan peraturan di Shah Alam.',
        },
        {
            id: 8,
            agensi: 'Majlis Bandaraya Petaling Jaya (MBPJ)',
            image: mbpjImage,
            description: 'Bertanggungjawab dalam perancangan, pembangunan, dan pengurusan kawasan bandar di Petaling Jaya.',
        },
        {
            id: 9,
            agensi: 'Majlis Perbandaran Kajang (MPKj)',
            image: mpkjImage,
            description: 'Menguruskan pembangunan komuniti, infrastruktur, dan kebersihan di kawasan Kajang.',
        },
        {
            id: 10,
            agensi: 'Lembaga Pembangunan Industri Pembinaan Malaysia (CIDB)',
            image: cidbImage,
            description: 'Mengawal selia, membangun, dan meningkatkan industri pembinaan Malaysia untuk memastikan standard kualiti yang tinggi.',
        },
        {
            id: 11,
            agensi: 'Jabatan Pengurusan Sisa Pepejal Negara (JPSPN)',
            image: jpspnImage,
            description: 'Bertanggungjawab dalam merancang dan menyelaras pengurusan sisa pepejal serta dasar kebersihan awam di Malaysia.',
        },
        {
            id: 12,
            agensi: 'Perbadanan Sisa Pepejal dan Pembersihan Awam (SWCorp)',
            image: swcorpImage,
            description: 'Memastikan pengurusan sisa pepejal yang cekap dan kebersihan awam melalui pemantauan dan penguatkuasaan undang-undang.',
        },
    ];

    return (
        <Layout title="Data Collection by Agensi" subtitle="Senarai Pengumpulan Data Mengikut Agensi yang Terlibat">
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="grid grid-cols-3 gap-6 mt-8">
                {data.map((item, index) => (
                    <div
                        className="flex flex-col justify-between px-4 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in-out duration-75"
                        key={index}
                    >
                        <div>
                            <div className="flex gap-4 items-center">
                                <img src={item.image} alt={item.agensi} className="w-auto h-14" />
                                <h2 className="text-gray-700 font-semibold tracking-wider">{item.agensi}</h2>
                            </div>
                            <p className="text-gray-600 text-sm my-4">{item.description}</p>
                        </div>
                        <div className="flex justify-end">
                            <Link
                                to="/data-collection-by-agensi-view"
                                state={{ agensi: item }}
                            >
                                <button className="text-sm flex gap-3 items-center text-gray-600 hover:text-[#2196F3] transition-all ease-in-out duration-75">
                                    Senarai Data <FaAngleRight />
                                </button>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default DataCollectionByAgensi;
