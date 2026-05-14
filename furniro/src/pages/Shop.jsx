import { Link } from "react-router-dom";

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      price: "₹2,500",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
      discount: "-30%",
    },
    {
      id: 2,
      name: "Leviosa",
      price: "₹3,300",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
      discount: "-20%",
    },
    {
      id: 3,
      name: "Lolito",
      price: "₹5,000",
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=800&auto=format&fit=crop",
      discount: "-50%",
    },
    {
      id: 4,
      name: "Respira",
      price: "₹1,500",
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop",
      discount: "-10%",
    },
  ];

  return (
    <div className="bg-[#faf7f2] min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#B88E2F]">Furniro</h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-[#B88E2F]">Home</li>
          <li className="cursor-pointer hover:text-[#B88E2F]">Shop</li>
          <li className="cursor-pointer hover:text-[#B88E2F]">About</li>
          <li className="cursor-pointer hover:text-[#B88E2F]">Contact</li>
        </ul>

        <div className="flex gap-4 text-xl">
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="h-[300px] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white">
          <h2 className="text-5xl font-bold mb-3">Shop</h2>
          <p>Home &gt; Shop</p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              to="/product"
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition block hover:scale-105"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />

                <span className="absolute top-4 right-4 bg-red-400 text-white px-3 py-1 rounded-full text-sm">
                  {product.discount}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{product.name}</h3>

                <p className="text-gray-500 mb-3">
                  Stylish modern furniture
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-[#B88E2F]">
                    {product.price}
                  </span>

                  <button className="bg-[#B88E2F] text-white px-4 py-2 rounded-lg hover:bg-[#9a7424]">
                    Add
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-12 border-t py-10 text-center">
        <h2 className="text-2xl font-bold text-[#B88E2F] mb-2">Furniro</h2>

        <p className="text-gray-500">
          2026 Furniro. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

