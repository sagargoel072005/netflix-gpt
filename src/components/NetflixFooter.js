import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const NetflixFooter = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 mb-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl"><FaFacebookF /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl"><FaYoutube /></a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-center md:text-left">
          <ul className="space-y-3">
            <li className="hover:underline"><a href="/" onClick={(e) => e.preventDefault()}>Audio Description</a></li>
            <li className="hover:underline"><a href="/" onClick={(e) => e.preventDefault()}>Investor Relations</a></li>
            <li className="hover:underline"><a href="/" onClick={(e) => e.preventDefault()}>Legal Notices</a></li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:underline"><a href="/" onClick={(e) => e.preventDefault()}>Help Centre</a></li>
            <li><a href="/" onClick={(e) => e.preventDefault()} className="hover:underline">Jobs</a></li>
            <li><a href="/" onClick={(e) => e.preventDefault()} className="hover:underline">Cookie Preferences</a></li>
          </ul>
          <ul className="space-y-3">
            <li><a href="/" onClick={(e) => e.preventDefault()} className="hover:underline">Gift Cards</a></li>
            <li><a href="/" onClick={(e) => e.preventDefault()} className="hover:underline">Terms of Use</a></li>
            <li><a href="/" onClick={(e) => e.preventDefault()} className="hover:underline">Corporate Information</a></li>
          </ul>
          <ul className="space-y-3">
            <li><a href="/" onClick={(e) => e.preventDefault()} className="hover:underline">Media Centre</a></li>
            <li><a href="/" onClick={(e) => e.preventDefault()} className="hover:underline">Privacy</a></li>
            <li><a href="/" onClick={(e) => e.preventDefault()} className="hover:underline">Contact Us</a></li>
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