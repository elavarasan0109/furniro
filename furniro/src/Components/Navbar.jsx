import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 shadow-sm">
      {/* Logo */}
      <h1 className="text-xl font-bold">Furniro</h1>

      {/* Links */}
      <div className="flex gap-8 text-gray-700">
        <Link to="/">Home</Link>
        <Link to="/">Shop</Link>
        <a href="#">About</a>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Icons */}
      <div className="flex gap-5 text-gray-600">
        <FaUser />
        <FaSearch />
        <FaHeart />
        <FaShoppingCart />
      </div>
    </div>
  );
}