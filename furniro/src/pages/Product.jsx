export default function Product() {
  return (
    <div className="min-h-screen bg-[#faf7f2] p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-lg">
        
        {/* Product Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop"
            alt="Product"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Modern Chair</h1>

          <p className="text-2xl text-[#B88E2F] font-semibold mb-4">
            ₹5,000
          </p>

          <p className="text-gray-600 leading-7 mb-6">
            This modern chair is designed with premium wood and soft cushions.
            Perfect for living rooms, offices, and modern interiors.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="bg-[#B88E2F] text-white px-6 py-3 rounded-xl hover:bg-[#9a7424]">
              Add to Cart
            </button>

            <button className="border border-[#B88E2F] text-[#B88E2F] px-6 py-3 rounded-xl hover:bg-[#B88E2F] hover:text-white">
              Buy Now
            </button>
          </div>

          <div className="border-t pt-5 text-gray-500 space-y-2">
            <p>Category: Chair</p>
            <p>Material: Wood</p>
            <p>Warranty: 2 Years</p>
          </div>
        </div>
      </div>
    </div>
  );
}