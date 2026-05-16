import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative bg-gray-100 h-[500px] flex items-center justify-center">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
        alt="chair"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay Card */}
      <div className="relative bg-[#f5e6d3] p-10 rounded-md w-[400px] ml-auto mr-20 shadow-lg">
        <p className="text-sm text-gray-600">New Arrival</p>

        <h1 className="text-3xl font-bold text-yellow-700 mt-2">
          Discover Our New Collection
        </h1>

        <p className="text-gray-600 mt-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Link to="/shop">
          <button className="mt-6 bg-yellow-700 text-white px-6 py-2 hover:bg-yellow-800 transition-colors">
            BUY NOW
          </button>
        </Link>
      </div>
    </div>
  );
}