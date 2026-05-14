import React from 'react';
import { FaTimes, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CartSidebar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Sidebar Panel */}
      <div className="fixed top-0 right-0 h-full w-[400px] bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            Shopping Cart
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 p-2">
            <FaShoppingBag className="text-xl" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {/* Item 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-[#F9F1E7] rounded-lg overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&q=80" alt="Asgaard sofa" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-gray-900 font-medium mb-2">Asgaard sofa</h4>
                <div className="flex items-center gap-3">
                  <span className="text-sm">1</span>
                  <span className="text-xs">x</span>
                  <span className="text-[#B88E2F] font-semibold text-sm">Rs. 250,000.00</span>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-500 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">
              <FaTimes />
            </button>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-[#F9F1E7] rounded-lg overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=150&q=80" alt="Casaliving Wood" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-gray-900 font-medium mb-2">Casaliving Wood</h4>
                <div className="flex items-center gap-3">
                  <span className="text-sm">1</span>
                  <span className="text-xs">x</span>
                  <span className="text-[#B88E2F] font-semibold text-sm">Rs. 270,000.00</span>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-500 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Footer Area */}
        <div className="mt-auto">
          {/* Subtotal */}
          <div className="flex justify-between items-center p-6 bg-white">
            <span className="text-gray-700 font-medium">Subtotal</span>
            <span className="text-[#B88E2F] font-bold text-lg">Rs. 520,000.00</span>
          </div>
          
          <div className="border-t border-gray-100 p-6 flex items-center gap-4 justify-between bg-white">
            <Link 
              to="/cart" 
              onClick={onClose}
              className="flex-1 text-center py-2 px-4 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              Cart
            </Link>
            <Link 
              to="/checkout" 
              onClick={onClose}
              className="flex-1 text-center py-2 px-4 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              Checkout
            </Link>
            <Link 
              to="/comparison" 
              onClick={onClose}
              className="flex-1 text-center py-2 px-4 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              Comparison
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
