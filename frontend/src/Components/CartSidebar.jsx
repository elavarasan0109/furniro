import React from 'react';
import { FaTimes, FaShoppingBag, FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { items, subtotal, removeFromCart, isCartOpen, closeCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 transition-opacity backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        onClick={closeCart}
      ></div>

      {/* Sidebar Panel - Moved to Left */}
      <div className="fixed top-0 left-0 h-full w-[400px] bg-white shadow-2xl z-50 flex flex-col animate-in slide-in-from-left duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            Shopping Cart
            {items.length > 0 && (
              <span className="text-sm font-normal text-gray-400 ml-1">({items.length} item{items.length > 1 ? 's' : ''})</span>
            )}
          </h2>
          <button onClick={closeCart} className="text-gray-400 hover:text-gray-700 p-2">
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
              <FaShoppingBag className="text-5xl opacity-30" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-sm text-[#B88E2F] hover:underline"
              >
                Browse products →
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-[#F9F1E7] rounded-lg overflow-hidden flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-gray-900 font-medium mb-2">{item.name}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-sm">{item.qty}</span>
                      <span className="text-xs">x</span>
                      <span className="text-[#B88E2F] font-semibold text-sm">
                        ₹{item.price.toLocaleString()}.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs"
                    title="Remove item"
                  >
                    <FaTimes />
                  </button>
                  <Link 
                    to={`/comparison?id=${item.id}`} 
                    onClick={closeCart}
                    className="text-gray-400 hover:text-[#B88E2F] w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs"
                    title="Compare product"
                  >
                    <FaExchangeAlt />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Area — Fixed at bottom */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 bg-white">
            {/* Subtotal */}
            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-gray-700 font-medium">Subtotal</span>
              <span className="text-[#B88E2F] font-bold text-lg">
                ₹{subtotal.toLocaleString()}.00
              </span>
            </div>
            
            <div className="px-6 pb-8 flex items-center gap-2 justify-between">
              <Link 
                to="/cart" 
                onClick={closeCart}
                className="flex-1 text-center py-2 px-3 border border-black rounded-full text-xs font-medium hover:bg-black hover:text-white transition-colors"
              >
                Cart
              </Link>
              <Link 
                to="/checkout" 
                onClick={closeCart}
                className="flex-1 text-center py-2 px-3 border border-black rounded-full text-xs font-medium hover:bg-black hover:text-white transition-colors"
              >
                Checkout
              </Link>
              <Link 
                to="/comparison" 
                onClick={closeCart}
                className="flex-1 text-center py-2 px-3 border border-black rounded-full text-xs font-medium hover:bg-black hover:text-white transition-colors"
              >
                Compare
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
