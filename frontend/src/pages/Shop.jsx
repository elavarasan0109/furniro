import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  SlidersHorizontal,
  LayoutGrid,
  AlignJustify,
} from "lucide-react";

import { products } from "../data/products";
export { products };

import { useState } from "react";

export default function ShopPage() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <div
        className="h-[320px] bg-cover bg-center flex flex-col justify-center items-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold text-black mb-3">Shop</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="font-medium hover:text-[#B88E2F]">Home</Link>
            <span>{">"}</span>
            <span className="text-gray-600">Shop</span>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#F9F1E7] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 cursor-pointer">
              <SlidersHorizontal size={20} />
              <span>Filter</span>
            </div>
            <LayoutGrid size={20} className="cursor-pointer" />
            <AlignJustify size={20} className="cursor-pointer" />
            <div className="w-[1px] h-6 bg-gray-400"></div>
            <p className="text-sm text-gray-700">
              Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, products.length)} of {products.length} results
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <div className="bg-white px-4 py-2 text-gray-500">{productsPerPage}</div>
            </div>
            <div className="flex items-center gap-2">
              <span>Sort by</span>
              <div className="bg-white px-5 py-2 text-gray-500">
                Default
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {currentProducts.map(
            (product, index) => (
              <div
                key={index}
                className="group bg-[#F4F5F7] overflow-hidden relative"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&q=80";
                    }}
                  />

                  {/* Discount */}
                  {product.discount && (
                    <span className="absolute top-5 right-5 bg-red-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm">
                      {product.discount}
                    </span>
                  )}

                  {/* New Tag */}
                  {product.tag && (
                    <span className="absolute top-5 right-5 bg-teal-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm">
                      {product.tag}
                    </span>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center gap-4">
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="bg-white text-[#B88E2F] font-semibold px-8 py-3 hover:bg-[#B88E2F] hover:text-white transition"
                    >
                      Add to cart
                    </button>
                    <div className="flex gap-4 text-white text-sm">
                      <span className="cursor-pointer hover:text-[#B88E2F]">Share</span>
                      <Link to={`/comparison?id=${product.id}`} className="cursor-pointer hover:text-[#B88E2F]">Compare</Link>
                      <span className="cursor-pointer hover:text-[#B88E2F]">Like</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="font-bold text-lg text-gray-900">
                      Rp {product.price.toLocaleString()}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        Rp {product.oldPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-14">
          {[1, 2, 3].map((page) => (
            <button 
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-14 h-14 rounded-lg transition-colors ${
                currentPage === page 
                ? "bg-[#B88E2F] text-white" 
                : "bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, 3))}
            className="bg-[#F9F1E7] px-8 h-14 rounded-lg hover:bg-[#B88E2F] hover:text-white transition-colors"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
