import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Product() {
  const [activeSize, setActiveSize] = useState('L');
  const [activeColor, setActiveColor] = useState('purple');
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80",
      badge: "-30%"
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&q=80"
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
      badge: "-50%"
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&q=80",
      badge: "New",
      badgeColor: "bg-teal-500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Breadcrumb Bar */}
      <div className="bg-[#F9F1E7] py-8">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 text-sm">
          <span className="text-gray-500">Home</span>
          <span className="font-bold text-gray-800">&gt;</span>
          <span className="text-gray-500">Shop</span>
          <span className="font-bold text-gray-800">&gt;</span>
          <div className="w-px h-6 bg-gray-400"></div>
          <span className="font-medium text-gray-900">Asgaard sofa</span>
        </div>
      </div>

      {/* Product Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Images Left Column */}
        <div className="flex gap-8">
          {/* Thumbnails */}
          <div className="flex flex-col gap-6 w-20">
            {[1,2,3,4].map((i) => (
              <div key={i} className="w-20 h-20 bg-[#F9F1E7] rounded-lg overflow-hidden flex items-center justify-center cursor-pointer border border-transparent hover:border-[#B88E2F]">
                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=100&q=80" alt="Thumbnail" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 bg-[#F9F1E7] rounded-lg overflow-hidden flex items-center justify-center relative">
             <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" alt="Asgaard sofa main" className="w-[80%] h-auto object-contain mix-blend-multiply" />
          </div>
        </div>

        {/* Product Details Right Column */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-normal mb-2 text-gray-900">Asgaard sofa</h1>
          <p className="text-2xl text-gray-500 font-medium mb-4">Rs. 250,000.00</p>
          
          {/* Rating */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex text-yellow-400 text-sm">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            </div>
            <div className="w-px h-5 bg-gray-300"></div>
            <span className="text-gray-400 text-sm">5 Customer Review</span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size */}
          <div className="mb-6">
            <span className="block text-sm text-gray-400 mb-3">Size</span>
            <div className="flex items-center gap-4">
              {['L', 'XL', 'XS'].map(size => (
                <button 
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`w-10 h-10 rounded-md text-sm flex items-center justify-center transition-colors ${
                    activeSize === size ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7] text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mb-8">
            <span className="block text-sm text-gray-400 mb-3">Color</span>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setActiveColor('purple')}
                className={`w-8 h-8 rounded-full bg-[#816DFA] ${activeColor === 'purple' ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
              ></button>
              <button 
                onClick={() => setActiveColor('black')}
                className={`w-8 h-8 rounded-full bg-black ${activeColor === 'black' ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
              ></button>
              <button 
                onClick={() => setActiveColor('gold')}
                className={`w-8 h-8 rounded-full bg-[#B88E2F] ${activeColor === 'gold' ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
              ></button>
            </div>
          </div>

          {/* Add to Cart Actions */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center border border-gray-400 rounded-lg px-4 py-3 w-32 justify-between">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-500 hover:text-black">-</button>
              <span className="font-medium text-gray-900">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-gray-500 hover:text-black">+</button>
            </div>
            
            <button className="border border-black rounded-lg px-10 py-3 text-gray-900 font-medium hover:bg-black hover:text-white transition-colors">
              Add To Cart
            </button>
            
            <button className="border border-black rounded-lg px-10 py-3 text-gray-900 font-medium flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
              <span>+</span> Compare
            </button>
          </div>

          {/* Meta Information Table */}
          <div className="border-t border-gray-200 pt-10 text-gray-400 text-sm flex flex-col gap-3">
            <div className="grid grid-cols-[100px_10px_auto]">
              <span>SKU</span><span>:</span><span>SS001</span>
            </div>
            <div className="grid grid-cols-[100px_10px_auto]">
              <span>Category</span><span>:</span><span>Sofas</span>
            </div>
            <div className="grid grid-cols-[100px_10px_auto]">
              <span>Tags</span><span>:</span><span>Sofa, Chair, Home, Shop</span>
            </div>
            <div className="grid grid-cols-[100px_10px_auto] items-center">
              <span>Share</span><span>:</span>
              <div className="flex items-center gap-4 text-black text-lg">
                <FaFacebookF className="cursor-pointer hover:text-[#B88E2F]" />
                <FaLinkedinIn className="cursor-pointer hover:text-[#B88E2F]" />
                <FaTwitter className="cursor-pointer hover:text-[#B88E2F]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Tabs Section */}
      <div className="border-t border-gray-200 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-12 mb-10">
            <h3 className="text-2xl font-medium text-black">Description</h3>
            <h3 className="text-2xl font-medium text-gray-400">Additional Information</h3>
            <h3 className="text-2xl font-medium text-gray-400">Reviews [5]</h3>
          </div>
          
          <div className="max-w-5xl mx-auto text-gray-500 text-sm leading-loose mb-10">
            <p className="mb-6">
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F9F1E7] rounded-lg overflow-hidden h-[300px]">
               <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80" alt="Sofa setup 1" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
            </div>
            <div className="bg-[#F9F1E7] rounded-lg overflow-hidden h-[300px]">
               <img src="https://images.unsplash.com/photo-1540574163026-643ea20d25b5?w=800&q=80" alt="Sofa setup 2" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="border-t border-gray-200 pt-16 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Related Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-left">
            {relatedProducts.map((prod) => (
              <div key={prod.id} className="bg-[#F4F5F7] group relative">
                {/* Product Image */}
                <div className="relative h-[300px] w-full overflow-hidden">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                    <button className="bg-white text-[#B88E2F] px-10 py-3 font-semibold w-[80%] hover:bg-[#B88E2F] hover:text-white transition-colors">
                      Add to cart
                    </button>
                    <div className="flex gap-4 text-white text-sm font-semibold">
                      <span className="flex items-center gap-1 cursor-pointer hover:text-[#B88E2F]">🔗 Share</span>
                      <span className="flex items-center gap-1 cursor-pointer hover:text-[#B88E2F]">⇌ Compare</span>
                      <span className="flex items-center gap-1 cursor-pointer hover:text-[#B88E2F]">♡ Like</span>
                    </div>
                  </div>

                  {/* Badge */}
                  {prod.badge && (
                    <div className={`absolute top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-medium ${prod.badgeColor || 'bg-[#E97171]'}`}>
                      {prod.badge}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4 pt-4 pb-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-1">{prod.name}</h4>
                  <p className="text-gray-500 font-medium mb-2">{prod.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{prod.price}</span>
                    {prod.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">{prod.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="border border-[#B88E2F] text-[#B88E2F] bg-white px-16 py-3 font-semibold hover:bg-[#B88E2F] hover:text-white transition-colors">
            Show More
          </button>
        </div>
      </div>

    </div>
  );
}