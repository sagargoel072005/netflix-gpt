import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const NetflixFooter = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 mb-6">
          <button className="text-gray-400 hover:text-white text-xl">
            <FaFacebookF />
          </button>
          <button className="text-gray-400 hover:text-white text-xl">
            <FaInstagram />
          </button>
          <button className="text-gray-400 hover:text-white text-xl">
            <FaTwitter />
          </button>
          <button className="text-gray-400 hover:text-white text-xl">
            <FaYoutube />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-center md:text-left">
          <ul className="space-y-3">
            <li><button className="hover:underline">Audio Description</button></li>
            <li><button className="hover:underline">Investor Relations</button></li>
            <li><button className="hover:underline">Legal Notices</button></li>
          </ul>
          <ul className="space-y-3">
            <li><button className="hover:underline">Help Centre</button></li>
            <li><button className="hover:underline">Jobs</button></li>
            <li><button className="hover:underline">Cookie Preferences</button></li>
          </ul>
          <ul className="space-y-3">
            <li><button className="hover:underline">Gift Cards</button></li>
            <li><button className="hover:underline">Terms of Use</button></li>
            <li><button className="hover:underline">Corporate Information</button></li>
          </ul>
          <ul className="space-y-3">
            <li><button className="hover:underline">Media Centre</button></li>
            <li><button className="hover:underline">Privacy</button></li>
            <li><button className="hover:underline">Contact Us</button></li>
          </ul>
        </div>
        <div className="mt-6 flex justify-center md:justify-start">
          <button className="border border-gray-400 text-gray-400 py-2 px-4 text-sm hover:bg-gray-700 hover:text-white">
            Service Code
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-left mt-6 text-xs text-gray-500">
          © 2025 Netflix Clone. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default NetflixFooter;
