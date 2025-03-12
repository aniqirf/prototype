import React from "react";
import { motion } from "framer-motion";
import { FaShip, FaWarehouse, FaBuilding, FaUsers, FaBoxOpen, FaAnchor } from "react-icons/fa";

const services = [
  { icon: <FaShip size={40} className="text-blue-500" />, title: "Liquid Mud Plant" },
  { icon: <FaAnchor size={40} className="text-blue-500" />, title: "All Weather Port" },
  { icon: <FaWarehouse size={40} className="text-blue-500" />, title: "Warehouse Space" },
  { icon: <FaBuilding size={40} className="text-blue-500" />, title: "Office Space" },
  { icon: <FaUsers size={40} className="text-blue-500" />, title: "Competent Workers" },
  { icon: <FaBoxOpen size={40} className="text-blue-500" />, title: "Open Yard" },
];

const Services = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-6 md:px-12">
      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-blue-800 opacity-20"></div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 relative z-10"
      >
        Our Services
      </motion.h2>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 w-64 text-center hover:shadow-xl transition"
          >
            {service.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
