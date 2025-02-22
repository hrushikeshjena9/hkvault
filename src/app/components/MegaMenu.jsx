// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FiChevronDown, FiMonitor, FiImage, FiCode, FiLayers } from "react-icons/fi";

// const categories = [
//   {
//     name: "Web Elements",
//     icon: <FiLayers size={18} />,
//     subcategories: ["Buttons", "Icons", "UI Kits", "Illustrations"],
//   },
//   {
//     name: "Website Themes",
//     icon: <FiMonitor size={18} />,
//     subcategories: ["HTML Templates", "React Themes", "WordPress Themes"],
//   },
//   {
//     name: "Graphics",
//     icon: <FiImage size={18} />,
//     subcategories: ["Stock Images", "Vectors", "Logos", "Mockups"],
//   },
//   {
//     name: "Code & Scripts",
//     icon: <FiCode size={18} />,
//     subcategories: ["JavaScript", "PHP", "Python", "React Components"],
//   },
// ];

// const MegaMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className="relative group "
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       <button className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 py-12">
//         <span>Categories</span>
//         <FiChevronDown />
//       </button>

//       {/* Mega Menu Dropdown */}
//       <div
//         className={`absolute xl:left-[-15%]  xl:translate-x-[-18%] 2xl:left-[-42%] 2xl:-translate-x-1/4 w-screen bg-white shadow-lg border-t border-gray-200 p-6 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-300 ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         {categories.map((category, index) => (
//           <div key={index} className="space-y-2">
//             <h3 className="flex items-center text-lg font-semibold text-gray-900">
//               {category.icon}
//               <span className="ml-2">{category.name}</span>
//             </h3>
//             <ul className="space-y-1">
//               {category.subcategories.map((sub, idx) => (
//                 <li key={idx}>
//                   <Link
//                     href={`/categories/${sub.toLowerCase().replace(/\s/g, "-")}`}
//                     className="block text-gray-700 hover:text-blue-600"
//                   >
//                     {sub}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MegaMenu;


"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiMonitor, FiImage, FiCode, FiLayers } from "react-icons/fi";

const categories = [
  {
    name: "Web Elements",
    icon: <FiLayers size={20} className="text-blue-500" />,
    subcategories: ["Buttons", "Icons", "UI Kits", "Illustrations"],
  },
  {
    name: "Website Themes",
    icon: <FiMonitor size={20} className="text-green-500" />,
    subcategories: ["HTML Templates", "React Themes", "WordPress Themes"],
  },
  {
    name: "Graphics",
    icon: <FiImage size={20} className="text-pink-500" />,
    subcategories: ["Stock Images", "Vectors", "Logos", "Mockups"],
  },
  {
    name: "Code & Scripts",
    icon: <FiCode size={20} className="text-purple-500" />,
    subcategories: ["JavaScript", "PHP", "Python", "React Components"],
  },
];

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group container mx-auto"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition duration-300">
        <span className="text-lg font-semibold">Categories</span>
        <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
      </a>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute left-1/3  -translate-x-1/3 w-screen bg-white/80 backdrop-blur-lg shadow-xl border border-gray-200 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >

        {categories.map((category, index) => (
          <div key={index} className="space-y-2">
            <h3 className="flex items-center text-lg font-bold text-gray-900">
              {category.icon}
              <span className="ml-3">{category.name}</span>
            </h3>
            <ul className="space-y-1">
              {category.subcategories.map((sub, idx) => (
                <li key={idx}>
                  <Link
                    href={`/categories/${sub.toLowerCase().replace(/\s/g, "-")}`}
                    className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    {sub}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;