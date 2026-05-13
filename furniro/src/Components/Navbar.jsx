import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 shadow-sm">
      {/* Logo */}
      <h1 className="text-xl font-bold">Furniro</h1>

      {/* Links */}
      <div className="flex gap-8 text-gray-700">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
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