import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section - Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8">
          <h2 className="text-2xl font-semibold">Stay Updated with the Latest Trends & Offers</h2>
          <div className="mt-4 md:mt-0">
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-64 rounded-l-md border-none text-gray-900"
              />
              <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r-md text-white">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-2">
              Unsubscribe anytime. <a href="#" className="underline">Privacy Policy</a>
            </p>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Pricing & Plans</a></li>
              <li><a href="#" className="hover:text-white">Stock Images</a></li>
              <li><a href="#" className="hover:text-white">Fonts & Icons</a></li>
              <li><a href="#" className="hover:text-white">Website Themes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Web Design</a></li>
              <li><a href="#" className="hover:text-white">Marketing</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Affiliate Program</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">License Agreement</a></li>
              <li><a href="#" className="hover:text-white">Acceptable Use</a></li>
              <li><a href="#" className="hover:text-white">Cookies & Data</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Our Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Themes & Templates</a></li>
              <li><a href="#" className="hover:text-white">Plugins & Extensions</a></li>
              <li><a href="#" className="hover:text-white">Stock Footage</a></li>
              <li><a href="#" className="hover:text-white">Sound Effects</a></li>
              <li><a href="#" className="hover:text-white">All Categories</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section - Social Media & Copyright */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          
          <p className="text-sm text-gray-400">
            © 2025 YourBrand. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500">
              <FaLinkedinIn />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
