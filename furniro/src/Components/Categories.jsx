import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Categories() {
  const categories = [
    {
      name: "Dining",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    },
    {
      name: "Living",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    {
      name: "Bedroom",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
  ];

  const products = [
    {
      name: "Modern Dining Chair",
      price: "₹18,999",
      img: "https://ii1.pepperfry.com/media/catalog/product/e/l/494x544/elegant-mustard-suede-dining-chair-in-yellow-colour-elegant-mustard-suede-dining-chair-in-yellow-col-8de1ns.jpg",
    },
    {
      name: "Leather Sofa",
      price: "₹42,549",
      img: "https://media.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000014791836-1000014791836-2410_01-2100.jpg",
    },
    {
      name: "Wooden Bed Frame",
      price: "₹25,999",
      img: "https://images.woodenstreet.de/image/cache/data/bed-without-storage/adolph-bed-without-storage/updated/walnut/new-logo/new+-3D/8-750x650.jpg",
    },
    {
      name: "Dining Table",
      price: "₹71,999",
      img: "https://craftsmill.in/cdn/shop/files/dining-table-175-cm-x-90-cm-x-76-cm-6-jean-chairs-honey-polish-on-mango-wood-gable-table-honey-polish-on-sheesham-wood-jean-chair-hessian-beige-100-cotton-fabric-gable-jean-dining-tab_5e025d3b-c568-4abf-9b04-43ccc10461f7.jpg?v=1725049996",
    },
    {
      name: "Coffee Table",
      price: "₹4,899",
      img: "https://www.royaloakindia.com/media/catalog/product/3/_/3_67.jpg",
    },
    {
      name: "Bedroom Nightstand",
      price: "₹4,999",
      img: "https://www.rajwadafurnish.com/cdn/shop/files/niware-solid-sheesham-wood-bedside-table-modern-nightstand-india.webp?v=1776767385&width=2048",
    },
  ];

  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      title: "Inner Peace",
      description: "A serene bedroom atmosphere crafted for rest and balance.",
      type: "Bedroom",
      alt: "Serene bedroom interior",
    },
    {
      id: 2,
      img: "https://images.woodenstreet.de/image/data/blog-images/dining-room-decor-ideas/dining-room-wall-decor.png",
      title: "Modern Dining",
      description: "Contemporary dining design featuring warm textures and clean lines.",
      type: "Dining Room",
      alt: "Modern dining room interior",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      title: "Cozy Setup",
      description: "A welcoming living space with layered comfort and timeless style.",
      type: "Living Room",
      alt: "Cozy living room design",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1505693314120-0d443867891c",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  ];

  const [current, setCurrent] = useState(0);
  const currentSlide = slides[current];

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="py-16">
      {/* Browse The Range */}
      <div className="text-center mb-16 px-4 sm:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-yellow-600 font-semibold">
          Featured Collections
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900">
          Explore Furniro’s stylish room categories
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          Discover curated furniture collections designed for modern living, from dining spaces to restful bedrooms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {categories.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-3xl border border-gray-200 shadow-sm transition-shadow hover:shadow-xl">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={`${item.name} furniture`}
                  className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-6 py-5 bg-white">
                <p className="text-lg font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Hand-picked pieces to elevate your {item.name.toLowerCase()} experience.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Products */}
      <div className="text-center px-4 sm:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Featured Products</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          Explore premium furniture selections crafted for comfort, durability, and modern style.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {products.map((product, index) => (
            <div key={index} className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img
                src={product.img}
                alt={product.name}
                className="h-[280px] w-full object-cover"
              />
              <div className="flex flex-col flex-grow p-6">
                <p className="text-lg font-semibold text-gray-900">{product.name}</p>
                <p className="text-xl font-bold text-gray-900 mt-3">{product.price}</p>
                <p className="mt-4 text-sm text-gray-500">
                  Elegant design with premium materials, perfect for modern interiors.
                </p>
                <button className="mt-auto inline-flex items-center justify-center rounded-full bg-yellow-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-yellow-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inspiration Section */}
      <section className="relative overflow-hidden rounded-[2rem] bg-[#f9f5ec] py-16 px-6 md:px-16 mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(248,212,82,0.2),_transparent_35%)] pointer-events-none"></div>
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-600 font-semibold">
              Design inspiration
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              50+ beautifully styled room concepts
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Browse professionally curated room layouts and discover interior ideas that make every space feel refined and welcoming.
            </p>
            <button className="mt-8 inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
              Explore More
            </button>
          </div>

          <div className="grid gap-6">
            <div className="relative overflow-visible">
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                <motion.img
                  key={currentSlide.id}
                  src={currentSlide.img}
                  alt={currentSlide.alt}
                  className="h-[380px] w-full object-cover"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55 }}
                />
              </div>
              <div className="mt-4 rounded-2xl bg-white p-4 shadow-md border border-gray-100">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{currentSlide.type}</p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">{currentSlide.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{currentSlide.description}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-yellow-600 text-white transition hover:bg-yellow-700"
                  >
                    ›
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => goToSlide(index)}
                      className={`h-3 w-3 rounded-full transition ${
                        current === index ? "bg-yellow-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className={`h-20 overflow-hidden rounded-3xl border transition ${
                      current === index ? "border-yellow-500 ring-2 ring-yellow-200" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={slide.img}
                      alt={slide.alt}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <div className="bg-gray-100 py-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-gray-500">Share your setup with</p>
          <h2 className="text-3xl font-bold">#FurniroFurniture</h2>
        </div>

        {/* Masonry Layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 px-6 space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={`${src}?w=500&auto=format`}
                alt="furniture"
                className="w-full rounded-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}