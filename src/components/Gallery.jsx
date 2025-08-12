import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Gallery Data
const galleryItems = [
  { src: "/gallery/infra1.jpg", category: "infra" },
  { src: "/gallery/infra2.jpg", category: "infra" },
  { src: "/gallery/classroom1.jpg", category: "classroom" },
  { src: "/gallery/classroom2.jpg", category: "classroom" },
  { src: "/gallery/sports1.jpg", category: "sports" },
  { src: "/gallery/sports2.jpg", category: "sports" },
  { src: "/gallery/dance1.jpg", category: "dance" },
  { src: "/gallery/dance2.jpg", category: "dance" },
];

// Capitalize utility
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Auto-generate unique categories
  const categories = ["all", ...new Set(galleryItems.map((item) => item.category))];

  // Filter items based on active category
  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition duration-300 ${
                isActive
                  ? "bg-green-700 text-white border-green-700"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {capitalize(category)}
            </button>
          );
        })}
      </div>

      {/* Image Grid with LightGallery */}
      <LightGallery
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.a
              key={`${item.src}-${index}`}
              href={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg shadow hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={item.src}
                alt={`${item.category} image`}
                loading="lazy"
                onError={(e) => (e.target.src = "/fallback.jpg")}
                className="w-full h-60 object-cover"
              />
            </motion.a>
          ))}
        </AnimatePresence>
      </LightGallery>
    </section>
  );
};

export default Gallery;
