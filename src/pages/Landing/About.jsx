import React from "react";
import { motion } from "framer-motion";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery6.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

const About = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100 overflow-hidden px-6 md:px-12">
      {/* Background Waves (Ocean Theme) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-blue-800 opacity-30"></div>

      {/* Left Side - About Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full md:w-1/2 text-center md:text-left px-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          About Harbour Company
        </h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-lg md:text-xl text-white mt-4 drop-shadow-lg leading-relaxed"
        >
          Harbour Company is a global leader in maritime logistics, providing 
          innovative shipping solutions. Our commitment is to ensure safe, 
          sustainable, and efficient transport across international waters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-6"
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </motion.div>
      </motion.div>

      {/* Right Side - Image Gallery */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full md:w-1/2 grid grid-cols-2 gap-4 p-6"
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default About;
