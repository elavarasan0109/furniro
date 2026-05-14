import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-10 py-4 shadow-sm relative z-30 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="14,4 2,28 8,28 18,8" stroke="#B88E2F" strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points="26,4 38,28 32,28 22,8" stroke="#B88E2F" strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points="20,18 14,28 26,28" stroke="#B88E2F" strokeWidth="2.5" strokeLinejoin="round" />
          </svg>
          <span className="font-bold text-3xl tracking-tight text-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Furniro
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex gap-5 text-gray-600">
          <button className="hover:text-black transition-colors"><FaUser /></button>
          <button className="hover:text-black transition-colors"><FaSearch /></button>
          <button className="hover:text-black transition-colors"><FaHeart /></button>
          <button 
            className="hover:text-black transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}