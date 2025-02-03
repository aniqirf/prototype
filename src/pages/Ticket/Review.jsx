import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Card, CardBody } from "@material-tailwind/react";

const Review = () => {
    const [status, setStatus] = useState(null);

    const handleAction = (action) => {
        setStatus(action);
        toast.success(`Ticket ${action} successfully!`);
    };

    const ticketData = {
        ticket_no: "JT202401001",
        title: "Container Offloading Issue",
        description:
            "A container at Port 17 is facing issues with unloading due to crane malfunction.",
        location: "Port 17, Dock B",
        reported_by: "John Doe",
        assigned_to: "Supervisor A",
        status: status || "Pending",
        created_at: "2024-02-01 10:30 AM",
    };

    const breadcrumb = [
        { label: "Pengurusan Tiket" },
        { label: "Semakan" },
    ];
    return (
        <Layout title='Semakan Tiket' subtitle='Hi, terdapat satu tiket untuk anda semak' breadcrumb={breadcrumb}>
            <div className="flex">
                <div className="w-full">
                    {/* <Card className="mx-auto"> */}
                        <CardBody>
                            <h2 className="text-xl font-bold">Job Ticket #{ticketData.ticket_no}</h2>
                            <p className="text-gray-600 mt-2">{ticketData.description}</p>
                            <div className="mt-4">
                                <p><strong>Location:</strong> {ticketData.location}</p>
                                <p><strong>Reported By:</strong> {ticketData.reported_by}</p>
                                <p><strong>Assigned To:</strong> {ticketData.assigned_to}</p>
                                <p><strong>Status:</strong> <span className="text-blue-500">{ticketData.status}</span></p>
                                <p><strong>Created At:</strong> {ticketData.created_at}</p>
                            </div>
                            <div className="flex gap-4 mt-6">
                                <Button
                                    className="bg-green-500 hover:bg-green-600"
                                    onClick={() => handleAction("Accepted")}
                                >
                                    Accept
                                </Button>
                                <Button
                                    className="bg-red-500 hover:bg-red-600"
                                    onClick={() => handleAction("Rejected")}
                                >
                                    Reject
                                </Button>
                            </div>
                        </CardBody>
                    {/* </Card> */}
                </div>
            </div>
        </Layout>
    )
}

export default Review