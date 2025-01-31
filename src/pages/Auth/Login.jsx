import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Logo_Tbsb from '../../assets/tbsb.png';
import Input from '../../Components/Input';
import image from '../../assets/port.jpg';

const Login = () => {
    const navigate = useNavigate(); // Hook for navigation
    const [formData, setFormData] = useState({
        no_kp: '',
        password: '',
    });

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { no_kp, password } = formData;

        // Check if credentials are correct
        if (no_kp === '010203040506' && password === 'password') {
            navigate('/dashboard'); // Navigate to the user list page
        } else {
            // Show SweetAlert2 error
            Swal.fire({
                icon: 'error',
                // title: 'Ralat',
                text: 'No. Kad Pengenalan atau Kata Laluan tidak sah. Sila cuba lagi.',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className="flex min-h-screen overflow-hidden relative">
            {/* Left Section */}
            <div className="flex-1 bg-white p-8">
                <div className="max-w-md mx-auto">
                    <div className="font-bold mb-6">
                        <div
                            className="flex flex-row gap-5 items-center cursor-pointer"
                            onClick={() => navigate('/')}
                        >
                            <img
                                src={Logo_Tbsb}
                                alt="KPKT Logo"
                                className="w-auto h-24 max-h-24 object-contain"
                            />
                        </div>
                        {/* <span className="text-black text-xl">TOK BALI <br />SUPPLY BASE</span> */}
                    </div>
                    <h1 className="text-3xl font-bold">Selamat Datang</h1>
                    <p className="text-gray-600 mb-8">
                        Sila isi maklumat No. Kad Pengenalan dan Kata Laluan anda.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <Input
                                name="no_kp"
                                id="no_kp"
                                type="text"
                                label="No. Kad Pengenalan"
                                placeholder="No. Kad Pengenalan"
                                required
                                value={formData.no_kp}
                                onChange={(e) => handleChange('no_kp', e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                name="password"
                                id="password"
                                type="password"
                                label="Kata Laluan"
                                placeholder="Kata Laluan"
                                required
                                value={formData.password}
                                onChange={(e) => handleChange('password', e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center text-sm text-gray-700">
                                <input type="checkbox" className="mr-2" />
                                Ingat Saya
                            </label>
                            <a href="#" className="text-sm text-purple-600 hover:underline">
                                Lupa Kata Laluan
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
                        >
                            Log Masuk
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Section */}
            <div
                className="hidden lg:flex flex-1 justify-center items-center bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* Optional: Overlay or Content */}
            </div>

            {/* Footer */}
            <footer className="absolute bottom-0 left-0 p-4 text-sm text-gray-600 bg-white w-full lg:bg-transparent">
                <div className="mb-2 ml-4 flex justify-start">
                    <p>&copy; {new Date().getFullYear()} TOK BALI SUPPLY BASE</p>
                </div>
            </footer>
        </div>
    );
};

export default Login;
