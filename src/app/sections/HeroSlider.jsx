"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion } from "framer-motion";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  fade: true, 
};

const slides = [
  {
    image: "/images/hero1.jpg",
    title: "Premium Digital Assets",
    subtitle: "High-quality images, icons, UI elements & more",
  },
  {
    image: "/images/hero2.jpg",
    title: "Modern Website Themes",
    subtitle: "Build stunning websites with our premium themes",
  },
  {
    image: "/images/hero3.jpg",
    title: "Code Snippets & Components",
    subtitle: "Boost your project with ready-to-use code",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <Slider {...sliderSettings} className="w-full h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[90vh]">
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40 backdrop-blur-sm">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-extrabold"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 text-lg md:text-2xl font-light"
              >
                {slide.subtitle}
              </motion.p>
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition"
              >
                Explore Now
              </motion.button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
