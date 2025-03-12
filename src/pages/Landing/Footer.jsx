import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-white py-6 px-8 font-poppins">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-4">
        {/* Logo or Title */}
        <h2 className="text-xl font-bold">Tok Bali Supply Base Sdn Bhd</h2>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaGithub size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tok Bali Supply Base Sdn Bhd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;