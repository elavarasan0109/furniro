import React from 'react';
import { FaTrophy, FaCheckCircle, FaShippingFast, FaHeadset, FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function Comparison() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-100 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80")' }}
        ></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-4xl font-bold mb-2">Product Comparison</div>
          <div className="text-sm">
            <span className="font-semibold">Home</span> &gt; Comparison
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 w-full">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Info */}
          <div className="flex flex-col justify-start pt-4">
            <h3 className="text-2xl font-bold mb-4">Go to Product<br/>page for more<br/>Products</h3>
            <a href="#" className="text-gray-500 font-medium border-b border-gray-500 inline-block w-max pb-1 hover:text-black hover:border-black transition-colors">
              View More
            </a>
          </div>

          {/* Column 2: Product 1 */}
          <div className="flex flex-col">
            <div className="bg-[#F9F1E7] rounded-lg p-4 h-48 mb-4 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" alt="Asgaard Sofa" className="max-h-full object-contain mix-blend-multiply" />
            </div>
            <h4 className="text-xl font-bold mb-2">Asgaard Sofa</h4>
            <p className="font-medium mb-2">Rs. 250,000.00</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold">4.7</span>
              <div className="flex text-yellow-400 text-xs">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>
              <div className="w-px h-4 bg-gray-300 mx-1"></div>
              <span className="text-gray-400 text-xs">204 Review</span>
            </div>
          </div>

          {/* Column 3: Product 2 */}
          <div className="flex flex-col">
            <div className="bg-[#F9F1E7] rounded-lg p-4 h-48 mb-4 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80" alt="Outdoor Sofa Set" className="max-h-full object-contain mix-blend-multiply" />
            </div>
            <h4 className="text-xl font-bold mb-2">Outdoor Sofa Set</h4>
            <p className="font-medium mb-2">Rs. 224,000.00</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold">4.2</span>
              <div className="flex text-yellow-400 text-xs">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>
              <div className="w-px h-4 bg-gray-300 mx-1"></div>
              <span className="text-gray-400 text-xs">145 Review</span>
            </div>
          </div>

          {/* Column 4: Add Product */}
          <div className="flex flex-col justify-start pt-4 border-l border-gray-200 pl-8">
            <h4 className="text-2xl font-bold mb-4">Add A Product</h4>
            <button className="bg-[#B88E2F] text-white flex items-center justify-between px-4 py-2 w-full max-w-[200px] rounded hover:bg-[#a67c29] transition-colors">
              <span className="text-sm font-semibold">Choose a Product</span>
              <span className="text-xs">▼</span>
            </button>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="border-t border-gray-200">
          
          {/* Section: General */}
          <div className="py-8">
            <h4 className="text-xl font-bold mb-6">General</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Labels */}
              <div className="flex flex-col gap-6 text-sm">
                <p>Sales Package</p>
                <p>Model Number</p>
                <p>Secondary Material</p>
                <p>Configuration</p>
                <p>Upholstery Material</p>
                <p>Upholstery Color</p>
              </div>
              {/* Product 1 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700">
                <p>1 sectional sofa</p>
                <p>TFCBLIGRBL6SRHS</p>
                <p>Solid Wood</p>
                <p>L-shaped</p>
                <p>Fabric + Cotton</p>
                <p>Bright Grey & Lion</p>
              </div>
              {/* Product 2 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700 border-l md:border-l-0 border-gray-200 pl-4 md:pl-0">
                <p>1 Three Seater, 2 Single Seater</p>
                <p>DTUBLIGRBL568</p>
                <p>Solid Wood</p>
                <p>L-shaped</p>
                <p>Fabric + Cotton</p>
                <p>Bright Grey & Lion</p>
              </div>
              <div className="hidden md:block border-l border-gray-200"></div>
            </div>
          </div>

          {/* Section: Product */}
          <div className="py-8">
            <h4 className="text-xl font-bold mb-6">Product</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Labels */}
              <div className="flex flex-col gap-6 text-sm">
                <p>Filling Material</p>
                <p>Finish Type</p>
                <p>Adjustable Headrest</p>
                <p>Maximum Load Capacity</p>
                <p>Origin of Manufacture</p>
              </div>
              {/* Product 1 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700">
                <p>Foam</p>
                <p>Bright Grey & Lion</p>
                <p>No</p>
                <p>280 KG</p>
                <p>India</p>
              </div>
              {/* Product 2 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700 border-l md:border-l-0 border-gray-200 pl-4 md:pl-0">
                <p>Matte</p>
                <p>Bright Grey & Lion</p>
                <p>yes</p>
                <p>300 KG</p>
                <p>India</p>
              </div>
              <div className="hidden md:block border-l border-gray-200"></div>
            </div>
          </div>

          {/* Section: Dimensions */}
          <div className="py-8">
            <h4 className="text-xl font-bold mb-6">Dimensions</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Labels */}
              <div className="flex flex-col gap-6 text-sm">
                <p>Width</p>
                <p>Height</p>
                <p>Depth</p>
                <p>Weight</p>
                <p>Seat Height</p>
                <p>Leg Height</p>
              </div>
              {/* Product 1 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700">
                <p>265.32 cm</p>
                <p>76 cm</p>
                <p>167.76 cm</p>
                <p>45 KG</p>
                <p>41.52 cm</p>
                <p>5.46 cm</p>
              </div>
              {/* Product 2 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700 border-l md:border-l-0 border-gray-200 pl-4 md:pl-0">
                <p>265.32 cm</p>
                <p>76 cm</p>
                <p>167.76 cm</p>
                <p>65 KG</p>
                <p>41.52 cm</p>
                <p>5.46 cm</p>
              </div>
              <div className="hidden md:block border-l border-gray-200"></div>
            </div>
          </div>

          {/* Section: Warranty */}
          <div className="py-8">
            <h4 className="text-xl font-bold mb-6">Warranty</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Labels */}
              <div className="flex flex-col gap-10 md:gap-6 text-sm">
                <p>Warranty Summary</p>
                <p>Warranty Service Type</p>
                <p>Covered in Warranty</p>
                <p>Not Covered in Warranty</p>
                <p className="mt-8 md:mt-2">Domestic Warranty</p>
              </div>
              {/* Product 1 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700">
                <p>1 Year Manufacturing Warranty</p>
                <p>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p>
                <p>Warranty Against Manufacturing Defect</p>
                <p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                <p>1 Year</p>
                <div className="pt-6">
                  <button className="bg-[#B88E2F] text-white px-8 py-3 w-max hover:bg-[#a67c29] transition-colors">
                    Add To Cart
                  </button>
                </div>
              </div>
              {/* Product 2 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700 border-l md:border-l-0 border-gray-200 pl-4 md:pl-0">
                <p>1.2 Year Manufacturing Warranty</p>
                <p>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p>
                <p>Warranty of the product is limited to manufacturing defects only.</p>
                <p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                <p>3 Months</p>
                <div className="pt-6">
                  <button className="bg-[#B88E2F] text-white px-8 py-3 w-max hover:bg-[#a67c29] transition-colors">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="hidden md:block border-l border-gray-200"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-[#FAF3EA] py-16 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <FaTrophy className="text-4xl text-gray-800" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">High Quality</h4>
              <p className="text-gray-500 text-sm">crafted from top materials</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-4xl text-gray-800" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">Warranty Protection</h4>
              <p className="text-gray-500 text-sm">Over 2 years</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaShippingFast className="text-4xl text-gray-800" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over ₹150</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaHeadset className="text-4xl text-gray-800" />
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
