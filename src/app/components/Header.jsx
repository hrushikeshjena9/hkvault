"use client";

import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch, FiHeart } from "react-icons/fi";
import MegaMenu from "./MegaMenu";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("");

    return (
        <header className="backdrop-blur-md bg-white/30 shadow-lg fixed w-full top-0 left-0 z-50 border-b border-gray-200">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">

                <Link href="/" className="text-3xl font-extrabold text-gray-900 tracking-wide">
                    Logo
                </Link>

                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="relative text-gray-700 hover:text-blue-500 transition duration-300 after:block after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </Link>
                    <Link href="/about" className="relative text-gray-700 hover:text-blue-500 transition duration-300 after:block after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                        About
                    </Link>
                    <MegaMenu />
                    <Link href="/contact" className="relative text-gray-700 hover:text-blue-500 transition duration-300 after:block after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                        Contact
                    </Link>
                    <a className="bg-gradient-to-r from-blue-500 to-purple-600 text-nowrap text-white font-semibold py-2 px-5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                        Get Unlimited Access
                    </a>
                </nav>
                <div className="hidden md:flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border hover:border-blue-500 transition-all duration-300">
                    <select
                        className="text-sm  outline-none px-4 py-2 cursor-pointer bg-transparent transition-all duration-300 hover:text-blue-500 "
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="" className="text-gray-700">All Items</option>
                        <option value="icons" className="text-gray-700">Icons</option>
                        <option value="images" className="text-gray-700">Images</option>
                        <option value="themes" className="text-gray-700">Themes</option>
                        <option value="elements" className="text-gray-700">Elements</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search for assets..."
                        className="outline-none text-sm px-3 w-56 bg-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="text-gray-600 hover:text-blue-500 transition-transform duration-200 hover:scale-110">
                        <FiSearch size={20} />
                    </button>
                </div>


                <div className="flex items-center space-x-4">
                    <Link href="/wishlist" className="hover:text-red-500 transition">
                        <FiHeart size={22} />
                    </Link>
                    <Link href="/cart" className="relative">
                        <FiShoppingCart size={24} className="text-gray-800 hover:text-blue-500 transition" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">3</span>
                    </Link>
                    <Link href="/login" className="bg-blue-600 flex text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                        <FiUser size={20} /> Login
                    </Link>
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>


            {menuOpen && (
                <nav className="md:hidden bg-white border-t border-gray-300 p-5 space-y-4 shadow-lg">
                    <Link href="/" className="block text-gray-800 hover:text-blue-500 transition">Home</Link>
                    <Link href="/about" className="block text-gray-800 hover:text-blue-500 transition">About</Link>
                    <Link href="/categories" className="block text-gray-800 hover:text-blue-500 transition">Categories</Link>
                    <Link href="/contact" className="block text-gray-800 hover:text-blue-500 transition">Contact</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;