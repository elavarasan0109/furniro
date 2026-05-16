import React from 'react';
import { FaTrophy, FaCheckCircle, FaShippingFast, FaHeadset, FaGem, FaLeaf, FaDraftingCompass } from 'react-icons/fa';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80")' }}
        ></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 flex flex-col items-center text-white animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">About Furniro</h1>
          <div className="text-sm font-medium flex items-center gap-2">
            <span className="text-gray-200">Home</span>
            <span className="text-[#B88E2F]">&gt;</span>
            <span>About</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20 w-full mb-20">
        <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          <div className="text-center group">
            <h3 className="text-4xl font-bold text-[#B88E2F] mb-2 group-hover:scale-110 transition-transform">15+</h3>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Years Exp.</p>
          </div>
          <div className="text-center group">
            <h3 className="text-4xl font-bold text-[#B88E2F] mb-2 group-hover:scale-110 transition-transform">850+</h3>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Products</p>
          </div>
          <div className="text-center group">
            <h3 className="text-4xl font-bold text-[#B88E2F] mb-2 group-hover:scale-110 transition-transform">25k</h3>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Happy Clients</p>
          </div>
          <div className="text-center group">
            <h3 className="text-4xl font-bold text-[#B88E2F] mb-2 group-hover:scale-110 transition-transform">12</h3>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Showrooms</p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Image Side */}
          <div className="flex-1 w-full relative">
            <div className="absolute -inset-4 bg-[#F9F1E7] rounded-lg transform -rotate-3 z-0"></div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl z-10 group">
              <img
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
                alt="Crafting furniture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-full shadow-xl z-20 flex flex-col items-center justify-center w-32 h-32 border-4 border-[#F9F1E7]">
              <span className="text-2xl font-bold text-[#B88E2F]">Est.</span>
              <span className="font-bold text-gray-800">1999</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#B88E2F]"></div>
              <span className="text-[#B88E2F] font-semibold uppercase tracking-widest text-sm">Our Story</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Crafting Comfort & <br /> Elevating Spaces
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Furniro began with a simple belief: that everyone deserves a beautiful, comfortable home. We source the finest materials and partner with master craftsmen to create pieces that aren't just furniture, but heirlooms.
            </p>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Every curve, every stitch, and every finish is meticulously considered. Our design philosophy blends timeless elegance with modern functionality, ensuring that your space looks stunning while catering to your everyday life.
            </p>

            <div className="flex items-center gap-6">
              <button className="bg-[#B88E2F] text-white px-8 py-4 rounded-md hover:bg-[#a67c29] hover:shadow-lg transition-all font-medium transform hover:-translate-y-1">
                Explore Our Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-b from-white to-[#FAF3EA] py-24 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Furniro</h2>
            <p className="text-gray-500">We don't just sell furniture; we provide an experience. Here is what sets us apart from the rest.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group cursor-default">
              <div className="w-16 h-16 bg-[#F9F1E7] text-[#B88E2F] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-[#B88E2F] group-hover:text-white transition-colors duration-300">
                <FaGem />
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Quality</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We use only the highest grade solid woods, premium fabrics, and high-density foams to ensure your furniture lasts generations.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group cursor-default">
              <div className="w-16 h-16 bg-[#F9F1E7] text-[#B88E2F] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-[#B88E2F] group-hover:text-white transition-colors duration-300">
                <FaDraftingCompass />
              </div>
              <h3 className="text-xl font-bold mb-4">Masterful Design</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our in-house design team constantly innovates, blending classic aesthetics with contemporary trends for unique, statement pieces.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group cursor-default">
              <div className="w-16 h-16 bg-[#F9F1E7] text-[#B88E2F] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-[#B88E2F] group-hover:text-white transition-colors duration-300">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-bold mb-4">Eco-Friendly</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We are committed to sustainable practices, sourcing timber from responsibly managed forests and using eco-conscious finishes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-[#FAF3EA] py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 group cursor-default">
            <FaTrophy className="text-4xl text-gray-800 group-hover:text-[#B88E2F] transition-colors" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">High Quality</h4>
              <p className="text-gray-500 text-sm">crafted from top materials</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-default">
            <FaCheckCircle className="text-4xl text-gray-800 group-hover:text-[#B88E2F] transition-colors" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">Warranty Protection</h4>
              <p className="text-gray-500 text-sm">Over 2 years</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-default">
            <FaShippingFast className="text-4xl text-gray-800 group-hover:text-[#B88E2F] transition-colors" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over ₹50,000</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-default">
            <FaHeadset className="text-4xl text-gray-800 group-hover:text-[#B88E2F] transition-colors" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">24 / 7 Support</h4>
              <p className="text-gray-500 text-sm">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
