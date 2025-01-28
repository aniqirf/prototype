import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import Layout from '../Layout/Layout'; // Assuming Layout is a wrapper component
import ListForm from './User/ListForm';

function Test() {

    const handleSubmit = () => {
        toast.success('Permohonan submitted successfully!', {
            position: 'top-right',
            autoClose: 3000,
        });
    };

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <Layout>
                <div className="p-4">
                    <button
                        onClick={toggleDrawer}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Open Drawer
                    </button>

                    {/* Pass isOpen and toggleDrawer to ListForm */}
                    <ListForm isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
                </div>

            </Layout>
            <ToastContainer />
        </>
    );
}

export default Test;
