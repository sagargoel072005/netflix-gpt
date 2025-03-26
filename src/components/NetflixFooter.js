import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const NetflixFooter = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Social Icons */}
        <div className="flex space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebookF /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaYoutube /></a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Audio Description</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
            <li><a href="#" className="hover:underline">Legal Notices</a></li>
          </ul>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Help Centre</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
          </ul>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Gift Cards</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Corporate Information</a></li>
          </ul>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Media Centre</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Service Code Button */}
        <div className="mt-6">
          <button className="border border-gray-400 text-gray-400 py-2 px-4 text-sm hover:bg-gray-700 hover:text-white">
            Service Code
          </button>
        </div>

      </div>
    </footer>
  );
};

export default NetflixFooter;
