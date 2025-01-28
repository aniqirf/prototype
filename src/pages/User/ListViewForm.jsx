import React, { useEffect, useState } from "react";
import Drawer from "../../components/Drawer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Avatar, Typography } from "@material-tailwind/react";
import { FaIdCard, FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import Button from "../../Components/Button";

const ListViewForm = ({ isOpen, toggleDrawer, selectedUser }) => {
    const [formData, setFormData] = useState({
        nama_penuh: "",
        ic_number: "",
        email: "",
        phone_no: "",
        role: "",
        status: "",
        user_category: "",
        avatar: "",
        alamat: "",
        poskod: "",
        no_telefon_pejabat: "",
        institusi: "",
        tahun_mula_belajar: "",
        tahun_tamat_belajar: "",
        kumpulan_perkhidmatan: "",
        maklumat: {
            negeri: { tajuk: "" },
            agensi: { tajuk: "" },
            pihak_berkuasa_tempatan: { tajuk: "" },
        },
    });

    useEffect(() => {
        if (isOpen) {
            setFormData({
                nama_penuh: selectedUser?.name || "",
                ic_number: selectedUser?.ic || "",
                email: selectedUser?.email || "",
                phone_no: selectedUser?.phone_no || "",
                role: selectedUser?.role || "",
                status: selectedUser?.status || "",
                user_category: selectedUser?.kategori || "",
                avatar: selectedUser?.avatar || "",
                alamat: selectedUser?.alamat || "",
                poskod: selectedUser?.poskod || "",
                no_telefon_pejabat: selectedUser?.no_telefon_pejabat || "",
                institusi: selectedUser?.institusi || "",
                tahun_mula_belajar: selectedUser?.tahun_mula_belajar || "",
                tahun_tamat_belajar: selectedUser?.tahun_tamat_belajar || "",
                kumpulan_perkhidmatan: selectedUser?.kumpulan_perkhidmatan || "",
                maklumat: {
                    negeri: { tajuk: selectedUser?.maklumat?.negeri?.tajuk || "" },
                    agensi: { tajuk: selectedUser?.maklumat?.agensi?.tajuk || "" },
                    pihak_berkuasa_tempatan: { tajuk: selectedUser?.maklumat?.pihak_berkuasa_tempatan?.tajuk || "" },
                },
            });
        } else {
            handleReset();
        }
    }, [isOpen, selectedUser]);

    const handleReset = () => {
        setFormData({
            nama_penuh: "",
            ic_number: "",
            email: "",
            phone_no: "",
            role: "",
            status: "",
            user_category: "",
            avatar: "",
            alamat: "",
            poskod: "",
            no_telefon_pejabat: "",
            institusi: "",
            tahun_mula_belajar: "",
            tahun_tamat_belajar: "",
            kumpulan_perkhidmatan: "",
            maklumat: {
                negeri: { tajuk: "" },
                agensi: { tajuk: "" },
                pihak_berkuasa_tempatan: { tajuk: "" },
            },
        });
    };

    return (
        <>
            <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} title="Maklumat Pengguna" size="lg">
                <div className="flex flex-row gap-6 py-6">
                    {/* Avatar Section */}
                    <div className="basis-1/3 flex flex-col items-center py-4">
                        <Avatar
                            src={formData.avatar || "http://i.pravatar.cc/500?img=7"}
                            alt="Avatar"
                            className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30 w-40 h-40"
                        />
                    </div>

                    {/* User Details Section */}
                    <div className="flex flex-col gap-4">
                        <Typography color="gray" variant="h5" className="uppercase">
                            {formData.nama_penuh || "Tiada Data"}
                        </Typography>

                        <div className="flex flex-row items-center gap-2">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                {formData.role || "Tiada Data"}
                            </span>
                            <span
                                className={`text-xs font-medium px-2.5 py-0.5 rounded ${formData.status === "Aktif"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                    }`}
                            >
                                {formData.status === "Aktif" ? "Aktif" : "Tidak Aktif"}
                            </span>
                        </div>

                        <div className="flex flex-row gap-3 items-center">
                            <FaIdCard />
                            <Typography color="gray" variant="small">
                                {formData.ic_number || "Tiada Data"}
                            </Typography>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <MdAlternateEmail />
                            <Typography color="gray" variant="small">
                                {formData.email || "Tiada Data"}
                            </Typography>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaPhoneAlt />
                            <Typography color="gray" variant="small">
                                {formData.phone_no || "Tiada Data"}
                            </Typography>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <BiCategory />
                            <Typography color="gray" variant="small">
                                {formData.user_category === "1"
                                    ? "Kategori 1"
                                    : formData.user_category === "2"
                                        ? "Kategori 2"
                                        : formData.user_category === "3"
                                            ? "Kategori 3"
                                            : "Orang Awam"}
                            </Typography>
                        </div>
                    </div>
                </div>

                <hr />
                {/* Render category-specific details */}
                <div className="px-8 py-2">
                    <table style={{ width: "100%", borderCollapse: "collapse" }} className="max-h-80 overflow-auto">
                        {formData.user_category === "1" && (
                            <tbody>
                                {/* Kementerian */}
                                <tr className="flex flex-row mt-4">
                                    <td style={{ width: "170px" }}>
                                        <Typography color="black" variant="small">
                                            Kementerian
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography color="black" variant="small">
                                            :
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography className="ml-4 uppercase" color="gray" variant="small">
                                            {formData.maklumat.negeri.tajuk || "Kementerian Kesihatan Malaysia"}
                                        </Typography>
                                    </td>
                                </tr>
                                {/* End Kementerian */}
                                {/* Agensi */}
                                <tr className="flex flex-row mt-4">
                                    <td style={{ width: "170px" }}>
                                        <Typography color="black" variant="small">
                                            Agensi
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography color="black" variant="small">
                                            :
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography className="ml-4 uppercase" color="gray" variant="small">
                                            {formData.maklumat.negeri.tajuk || "Jabatan Kesihatan Negeri Sembilan"}
                                        </Typography>
                                    </td>
                                </tr>
                                {/* End Agensi */}
                                {/* Negeri */}
                                <tr className="flex flex-row mt-4">
                                    <td style={{ width: "170px" }}>
                                        <Typography color="black" variant="small">
                                            Negeri
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography color="black" variant="small">
                                            :
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography className="ml-4 uppercase" color="gray" variant="small">
                                            {formData.maklumat.negeri.tajuk || "Negeri Sembilan"}
                                        </Typography>
                                    </td>
                                </tr>
                                {/* End Negeri */}
                                {/* Alamat */}
                                <tr className="flex flex-row mt-4">
                                    <td style={{ width: "170px" }}>
                                        <Typography color="black" variant="small">
                                            Alamat
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography color="black" variant="small">
                                            :
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography className="ml-4 uppercase" color="gray" variant="small">
                                            {formData.maklumat.negeri.tajuk || "Jalan Seremban 1, Taman Seremban"}
                                        </Typography>
                                    </td>
                                </tr>
                                {/* End Alamat */}
                                {/* Poskod */}
                                <tr className="flex flex-row mt-4">
                                    <td style={{ width: "170px" }}>
                                        <Typography color="black" variant="small">
                                            Poskod
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography color="black" variant="small">
                                            :
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography className="ml-4 uppercase" color="gray" variant="small">
                                            {formData.maklumat.negeri.tajuk || "71800"}
                                        </Typography>
                                    </td>
                                </tr>
                                {/* End Poskod */}
                            </tbody>
                        )}
                    </table>
                </div>
                <div className="flex justify-end w-full">
                    <Button onClick={toggleDrawer} type="button">
                        Kembali
                    </Button>
                </div>
            </Drawer>
        </>
    );
};

export default ListViewForm;
