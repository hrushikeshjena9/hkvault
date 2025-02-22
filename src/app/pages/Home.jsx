"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import HeroSlider from "../sections/HeroSlider";

// Slider settings
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            <HeroSlider />
            {/* Featured Categories */}
            <section className="py-12 px-5">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Explore Our Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: "Stock Images", image: "/images/category-images.jpg" },
                        { name: "Icons & Illustrations", image: "/images/category-icons.jpg" },
                        { name: "UI Elements", image: "/images/category-elements.jpg" },
                        { name: "Website Themes", image: "/images/category-themes.jpg" },
                        { name: "Code Snippets", image: "/images/category-code.jpg" },
                    ].map((category, index) => (
                        <div
                            key={index}
                            className="p-6 text-center bg-white shadow-md hover:shadow-lg transition rounded-lg"
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={150}
                                height={150}
                                className="rounded-lg mx-auto"
                            />
                            <h3 className="mt-3 text-lg font-semibold text-gray-900">{category.name}</h3>
                            <button className="mt-3 px-4 py-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-200 transition">
                                Explore
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trending Products */}
            <section className="py-12 px-5 bg-white">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Trending Digital Assets</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: "Abstract Stock Image", price: "9.99", image: "/images/product1.jpg" },
                        { name: "Minimalist Icon Pack", price: "14.99", image: "/images/product2.jpg" },
                        { name: "Modern UI Kit", price: "24.99", image: "/images/product3.jpg" },
                        { name: "Ecommerce Website Theme", price: "49.99", image: "/images/product4.jpg" },
                    ].map((product, index) => (
                        <div
                            key={index}
                            className="p-6 text-center bg-white shadow-md hover:shadow-lg transition rounded-lg"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={200}
                                height={200}
                                className="rounded-lg mx-auto"
                            />
                            <h3 className="mt-3 text-lg font-semibold text-gray-900">{product.name}</h3>
                            <p className="text-gray-600">${product.price}</p>
                            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
