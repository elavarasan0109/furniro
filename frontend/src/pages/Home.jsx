import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export default function Home() {
  const { addToCart } = useCart();

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
    <div className="bg-white">
      <Hero />
      <Categories />
      
      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product, index) => (
            <div
              key={index}
              className="group bg-[#F4F5F7] overflow-hidden relative"
            >
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
                {product.discount && (
                  <span className="absolute top-5 right-5 bg-red-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm">
                    {product.discount}
                  </span>
                )}
                {product.tag && (
                  <span className="absolute top-5 right-5 bg-teal-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm">
                    {product.tag}
                  </span>
                )}
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
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="font-bold text-lg text-gray-900">Rp {product.price.toLocaleString()}</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">Rp {product.oldPrice.toLocaleString()}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/shop">
            <button className="border border-[#B88E2F] text-[#B88E2F] px-10 py-3 font-semibold hover:bg-[#B88E2F] hover:text-white transition">
              Show More
            </button>
          </Link>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="bg-[#FCF8F3] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">50+ Beautiful rooms inspiration</h2>
            <p className="text-gray-600 mt-4 mb-8">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button className="bg-[#B88E2F] text-white px-8 py-3 font-semibold hover:bg-[#9a7424] transition">Explore More</button>
          </div>
          <div className="md:w-2/3 flex gap-4 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800" className="w-1/2 h-[500px] object-cover rounded-lg" alt="inspire" />
             <img src="https://images.unsplash.com/photo-1567016432779-094069958ad5?q=80&w=800" className="w-1/2 h-[500px] object-cover rounded-lg" alt="inspire" />
          </div>
        </div>
      </section>
    </div>
  );
}
